--[[

Copyright (c) 2015 gameboxcloud.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

]]

local debug_getlocal = debug.getlocal
local string_byte    = string.byte
local string_find    = string.find
local string_format  = string.format
local string_lower   = string.lower
local string_sub     = string.sub
local table_concat   = table.concat

cc = cc or {}

socket = {} -- avoid require("socket") warning
-- export global variable
local _g = _G
cc.exports = {}
setmetatable(cc.exports, {
    __newindex = function(_, name, value)
        rawset(_g, name, value)
    end,

    __index = function(_, name)
        return rawget(_g, name)
    end
})

-- disable create unexpected global variable
setmetatable(_g, {
    __newindex = function(_, name, value)
        local msg = string_format("USE \"cc.exports.%s = <value>\" INSTEAD OF SET GLOBAL VARIABLE", name)
        print(debug.traceback(msg, 2))
        if not ngx then print("") end
    end
})

--

cc.DEBUG_ERROR   = 0
cc.DEBUG_WARN    = 1
cc.DEBUG_INFO    = 2
cc.DEBUG_VERBOSE = 3
cc.DEBUG         = cc.DEBUG_WARN

local _loaded = {}
-- loader
function cc.import(name, current)
    local _name = name
    local first = string_byte(name)
    if first ~= 46 and _loaded[name] then
        return _loaded[name]
    end

    if first == 35 --[[ "#" ]] then
        name = string_sub(name, 2)
        name = string_format("package.%s.%s", name, name)
    end

    if first ~= 46 --[[ "." ]] then
        _loaded[_name] = require(name)
        return _loaded[_name]
    end

    if not current then
        local _, v = debug_getlocal(3, 1)
        current = v
    end

    while string_byte(name) == 46 do
        local index = string_find(current, "[^.]*$")
        if index then
            current = string_sub(current, 1, index - 2)
        end
        name = string_sub(name, 2)
    end

    _name = current .. "." .. name
    if not _loaded[_name] then
        _loaded[_name] = require(_name)
    end
    return _loaded[_name]
end

-- load basics modules
local __CURRENT = ...
cc.import(".class", __CURRENT)
cc.import(".table", __CURRENT)
cc.import(".string", __CURRENT)
cc.import(".debug", __CURRENT)
cc.import(".math", __CURRENT)
cc.import(".ctype", __CURRENT)
cc.import(".os", __CURRENT)
cc.import(".io", __CURRENT)

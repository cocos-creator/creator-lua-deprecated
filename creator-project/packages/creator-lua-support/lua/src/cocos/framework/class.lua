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

local assert         = assert
local error          = error
local getmetatable   = getmetatable
local rawget         = rawget
local setmetatable   = setmetatable
local string_format  = string.format
local type           = type

local _iskindofinternal = function(mt, classname)
    if not mt then return false end

    local index = rawget(mt, "__index")
    if not index then return false end

    local cname = rawget(index, "__cname")
    if cname == classname then return true end

    return _iskindofinternal(getmetatable(index), classname)
end

function cc.iskindof(target, classname)
    local targetType = type(target)
    if targetType ~= "table" then
        return false
    end
    return _iskindofinternal(getmetatable(target), classname)
end

function cc.class(classname, super)
    assert(type(classname) == "string", string_format("cc.class() - invalid class name \"%s\"", tostring(classname)))

    -- create class
    local cls = {__cname = classname}

    -- set super class
    local superType = type(super)
    if superType == "table" then
        assert(type(super.__cname) == "string", string_format("cc.class() - create class \"%s\" used super class isn't declared by cc.class()", classname))
        cls.super = super
        setmetatable(cls, {__index = cls.super})
    elseif superType ~= "nil" then
        error(string_format("cc.class() - create class \"%s\" with invalid super type \"%s\"", classname, superType))
    end

    if not cls.ctor then
        cls.ctor = function() end -- add default constructor
    end

    cls.new = function(...)
        local instance = {}
        setmetatable(instance, {__index = cls})
        instance.class = cls
        instance:ctor(...)
        return instance
    end

    return cls
end

function cc.handler(target, method)
    return function(...)
        return method(target, ...)
    end
end

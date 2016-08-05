
local _M = {}

_M.null = {"NULL"}

local _json = require "JeffreyJSON"

function _M.decode(jsonstr)
    return _json:decode(jsonstr)
end

function _M.encode(value)
    return _json:encode(value, nil, {null = _M.null})
end

return _M


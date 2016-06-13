
local _M = {}

_M.null = {"NULL"}

local lunajson = require "lunajson.lunajson"

function _M.decode(jsonstr)
    return lunajson.decode(jsonstr, nil, _M.null)
end

function _M.encode(value)
    return lunajson.encode(value, _M.null)
end

return _M


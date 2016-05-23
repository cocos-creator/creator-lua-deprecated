
local cc = cc
local DEBUG_VERBOSE = cc.DEBUG_VERBOSE

local string_byte = string.byte
local table_makeweak = table.makeweak
local ccp = cc.p
local ccsize = cc.size
local ccrect = cc.rect

-- asset
local SceneAsset = cc.import(".assets.SceneAsset")
local PrefabAsset = cc.import(".assets.PrefabAsset")

-- component
local CanvasComponent    = cc.import(".components.CanvasComponent")
local SpriteComponent    = cc.import(".components.SpriteComponent")
local LabelComponent     = cc.import(".components.LabelComponent")
local AnimationComponent = cc.import(".components.AnimationComponent")
local WidgetComponent    = cc.import(".components.WidgetComponent")

-- set
local _direct = {
    ["_anchorPoint"]           = "setAnchorPoint",
    ["_cascadeOpacityEnabled"] = "setCascadeOpacityEnabled",
    ["_color"]                 = "setColor",
    ["_enableWrapText"]        = "enableWrap",
    ["_globalZOrder"]          = "setGlobalZOrder",
    ["_localZOrder"]           = "setLocalZOrder",
    ["_opacity"]               = "setOpacity",
    ["_opacityModifyRGB"]      = "setOpacityModifyRGB",
    ["_position"]              = "setPosition",
    ["_scaleX"]                = "setScaleX",
    ["_scaleY"]                = "setScaleY",
    ["_skewX"]                 = "setSkewX",
    ["_skewY"]                 = "setSkewY",
    ["_tag"]                   = "setTag",
}

local _copy = {
    ["node"]         = "__node",
    ["_contentSize"] = "contentSize",
    ["_enabled"]     = "enabled",
    ["_name"]        = "name",
    ["playOnLoad"]   = "playOnLoad",
}

local function _set(obj, props)
    for name, v in pairs(props) do
        local key = _direct[name]
        if key and obj[key] then
            obj[key](obj, v)
        end
        if _copy[name] then
            obj[_copy[name]] = v
        end
    end
    return obj
end

-- factory
local factory = {}

factory["cc.SceneAsset"] = function(asset)
    return _set(SceneAsset.new(asset), asset)
end

factory["cc.Prefab"] = function(asset)
    return _set(PrefabAsset.new(asset), asset)
end

factory["cc.Scene"] = function(asset)
    return _set(cc.Scene:create(), asset)
end

factory["cc.Node"] = function(asset)
    return _set(cc.Node:create(), asset)
end

factory["cc.Sprite"] = function(asset, assets)
    local uuid = asset["_spriteFrame"]["__uuid__"]
    local spriteFrameAsset = assets:getAsset(uuid)
    local spriteFrame = assets:_createObject(spriteFrameAsset)
    local sprite = cc.Sprite:createWithSpriteFrame(spriteFrame)
    _set(sprite, asset, "cc.Sprite")
    return SpriteComponent.new(sprite)
end

factory["cc.SpriteFrame"] = function(asset, assets)
    local content = asset["content"]
    local file    = assets:getFile(content.texture)
    local r       = content.rect
    local rect    = ccrect(r[1], r[2], r[3], r[4])
    local rotated = content.rotated ~= 0
    local offset  = ccp(content.offset[1], content.offset[2])
    local size    = ccsize(content.originalSize[1], content.originalSize[2])
    return cc.SpriteFrame:create(file, rect, rotated, offset, size)
end

factory["cc.Label"] = function(asset)
    local text = asset["_N$string"]
    local fontsize = asset["_fontSize"]
    local label = cc.Label:createWithSystemFont(text, "sans", fontsize)
    _set(label, asset, "cc.Label")
    return LabelComponent.new(label)
end

factory["cc.Animation"] = function(asset, assets)
    return AnimationComponent.new(asset, assets)
end

factory["cc.Canvas"] = function(asset)
    return CanvasComponent.new(asset)
end

factory["cc.Widget"] = function(asset)
    return WidgetComponent.new(asset)
end

local _M = {}

function _M.create(objtype, asset, id, assets)
    local create = factory[objtype]
    if not create then
        -- cc.printwarn("[Assets] not supported type '%s'", tostring(objtype))
        return nil
    end
    if cc.DEBUG >= DEBUG_VERBOSE then
        local name = asset._name or ""
        if name ~= "" then name = "'" .. name .. "': " end
        if id then
            cc.printdebug("[Assets] create %s%s[%s]", name, objtype, id)
        else
            cc.printdebug("[Assets]   - create %s%s", name, objtype)
        end
    end
    local obj = create(asset, assets)
    obj.__type = objtype
    return obj
end

return _M


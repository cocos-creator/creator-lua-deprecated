
local cc = cc
local DEBUG_VERBOSE = cc.DEBUG_VERBOSE

local string_byte = string.byte
local table_makeweak = table.makeweak
local string_find = string.find
local ccp = cc.p
local ccsize = cc.size
local ccrect = cc.rect
local Scale9Sprite = ccui.Scale9Sprite or cc.Scale9Sprite

-- asset
local SceneAsset = cc.import(".assets.SceneAsset")
local PrefabAsset = cc.import(".assets.PrefabAsset")

-- component
local CanvasComponent         = cc.import(".components.CanvasComponent")
local SpriteComponent         = cc.import(".components.SpriteComponent")
local LabelComponent          = cc.import(".components.LabelComponent")
local ParticleSystemComponent = cc.import(".components.ParticleSystemComponent")
local TiledMapComponent       = cc.import(".components.TiledMapComponent")
local ButtonComponent         = cc.import(".components.ButtonComponent")
local AnimationComponent      = cc.import(".components.AnimationComponent")
local WidgetComponent         = cc.import(".components.WidgetComponent")

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
    ["_rotationX"]             = "setRotationSkewX",
    ["_rotationY"]             = "setRotationSkewY",
    ["_scaleX"]                = "setScaleX",
    ["_scaleY"]                = "setScaleY",
    ["_skewX"]                 = "setSkewX",
    ["_skewY"]                 = "setSkewY",
    ["_tag"]                   = "setTag",
}

local _copy = {
    ["_anchorPoint"] = "__anchorPoint",
    ["node"]         = "__node",
    ["_contentSize"] = "contentSize",
    ["_enabled"]     = "enabled",
    ["_name"]        = "name",
    ["playOnLoad"]   = "playOnLoad",
}

local function _set(obj, props)
    for name, v in pairs(props) do
        local key = _direct[name]
        if key then
            if obj[key] then
                obj[key](obj, v)
            else
                print(name, key)
            end
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
    local sprite, capInsets

    if asset["_type"] == 1 then
        -- sliced sprite
        local r = spriteFrameAsset["content"]["capInsets"]
        capInsets = ccrect(r[1], r[2], r[3], r[4])
        sprite = Scale9Sprite:createWithSpriteFrame(spriteFrame, capInsets)
    else
        sprite = cc.Sprite:createWithSpriteFrame(spriteFrame)
    end

    _set(sprite, asset, "cc.Sprite")
    return SpriteComponent.new(sprite, capInsets)
end

factory["cc.SpriteFrame"] = function(asset, assets)
    local content = asset["content"]
    local file    = assets:getFile(content.texture)
    local r       = content["rect"]
    local rect    = ccrect(r[1], r[2], r[3], r[4])
    local rotated = content.rotated ~= nil and content.rotated ~= 0
    local offset  = ccp(content.offset[1], content.offset[2])
    local size    = ccsize(content.originalSize[1], content.originalSize[2])
    return cc.SpriteFrame:create(file, rect, rotated, offset, size)
end

factory["cc.Label"] = function(asset)
    local text = asset["_N$string"]
    local fontsize = asset["_fontSize"]
    if type(fontsize) ~= "number" then fontsize = 40 end
    local label = cc.Label:createWithSystemFont(text, "sans", fontsize)
    _set(label, asset, "cc.Label")

    local overflow = asset["_N$overflow"]
    if overflow == nil then overflow = 0 end
    label:setOverflow(overflow)

    local halign = asset["_N$horizontalAlign"]
    if halign == nil then halign = 0 end
    local valign = asset["_N$verticalAlign"]
    if valign == nil then valign = 0 end
    label:setAlignment(halign, valign)

    local multiline = false
    if string_find(text, "\n", 1, true) then
        multiline = true
    end

    return LabelComponent.new(label, multiline)
end

factory["cc.ParticleSystem"] = function(asset, assets)
    local uuid = asset["_file"]["__uuid__"]
    local file = assets:getFile(uuid)
    local node = cc.ParticleSystemQuad:create(file)
    _set(node, asset, "cc.ParticleSystem")
    if asset["_autoRemoveOnFinish"] then
        node:setAutoRemoveOnFinish(true)
    end
    if asset["playOnLoad"] == false then
        node:stopSystem()
    end
    node:setPosition(0, 0)
    return ParticleSystemComponent.new(node)
end

factory["cc.TiledMap"] = function(asset, assets)
    local uuid = asset["_tmxFile"]["__uuid__"]
    local xmlasset = assets:getAsset(uuid)
    local xml = xmlasset["tmxXmlStr"]
    local folder = "raw-assets/" .. xmlasset["tmxFolderPath"]
    local node = cc.TMXTiledMap:createWithXML(xml, folder)
    _set(node, asset, "cc.TiledMap")
    return ParticleSystemComponent.new(node)
end

factory["cc.TiledLayer"] = function()
end

factory["cc.Button"] = function(asset, assets)
    return ButtonComponent.new(asset, assets)
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
        cc.printwarn("[Assets] not supported type '%s'", tostring(objtype))
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
    if not obj then return nil end

    obj.__type = objtype
    return obj
end

return _M


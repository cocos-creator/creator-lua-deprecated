
local string_sub = string.sub
local table_makeweak = table.makeweak

local creator = {}

local PrefabProtocol = cc.import(".assets.PrefabProtocol")

-- asset
creator.SceneAsset = cc.import(".assets.SceneAsset")
creator.PrefabAsset = cc.import(".assets.PrefabAsset")

-- component
creator.ComponentBase      = cc.import(".components.ComponentBase")
creator.CanvasComponent    = cc.import(".components.CanvasComponent")
creator.SpriteComponent    = cc.import(".components.SpriteComponent")
creator.LabelComponent     = cc.import(".components.LabelComponent")
creator.AnimationComponent = cc.import(".components.AnimationComponent")
creator.WidgetComponent    = cc.import(".components.WidgetComponent")

-- classes
creator.Reader    = cc.import(".Reader")
creator.Assets    = cc.import(".Assets")

local _assets

function creator.getAssets()
    if not _assets then
        _assets = creator.Assets.new()
    end
    return _assets
end

function creator.setAssets(assets)
    _assets = assets
end

function creator.find(obj, name)
    if obj.name == name then
        return obj
    end

    if not obj.__children then return end
    for _, child in ipairs(obj.__children) do
        local obj = creator.find(child, name)
        if obj then
            PrefabProtocol.apply(obj)
            return obj
        end
    end
end

function creator.dumpSceneHierarchy(obj, id, hierarchy, lookup)
    if not obj then return end

    id = id or 1
    hierarchy = hierarchy or 0
    lookup = lookup or {}

    if lookup[id] then return end

    local indent = string.rep("  ", hierarchy)
    local parts = {indent}
    if obj.name ~= "" then
        parts[#parts + 1] = "'" .. obj.name .. "': "
    end
    parts[#parts + 1] = obj.__type
    if id then
        parts[#parts + 1] = "[" .. id .. "]"
    end

    if obj.components then
        local c = {}
        for ctype, component in pairs(obj.components) do
            c[#c + 1] = ctype
        end
        if #c > 0 then
            parts[#parts + 1] = " < " .. table.concat(c, ", ") .. " >"
        end
    end
    print(table.concat(parts, ""))
    lookup[id] = true

    if obj.__children then
        for _, child in ipairs(obj.__children) do
            creator.dumpSceneHierarchy(child, child.__id, hierarchy + 1, lookup)
        end
    end
end

return creator

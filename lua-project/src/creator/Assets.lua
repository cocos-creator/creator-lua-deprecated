
local cc = cc
local DEBUG_VERBOSE = cc.DEBUG_VERBOSE

local Assets = cc.class("cc.creator.Assets")

local Factory = cc.import(".Factory")
local Connector = cc.import(".Connector")
local PrefabProtocol = cc.import(".assets.PrefabProtocol")

local _create = Factory.create
local _connect = Connector.connect

local _assert = assert
local _error = error

function Assets:ctor(base)
    self.base = base or ""
    if self.base ~= "" and string.sub(self.base, -1) ~= "." then
        self.base = self.base .. "."
    end

    self.assets  = require(self.base .. "assets.assets")
    self.files   = require(self.base .. "assets.files")
    self.scenes  = require(self.base .. "assets.scenes")
    self.prefabs = require(self.base .. "assets.prefabs")
end

function Assets:getLaunchSceneUrl()
    return self.scenes.__launchSceneUrl
end

function Assets:createScene(url)
    local uuid = self:getSceneUUID(url)
    local asset = self:getAsset(uuid)
    return self:createAsset(asset)
end

function Assets:createPrefab(url)
    local uuid = self.prefabs[url]
    _assert(uuid, string.format("[Assets] not found uuid for prefab '%s'", url))
    local prefab = self:createAsset(self:getAsset(uuid))
    prefab.node:trackComponents()
    return prefab.node
end

function Assets:createAsset(asset)
    assert(asset and asset.__type__ == "__js_array__", string.format("Assets:createAsset() - invalid asset"));

    local objs = {}
    local refs = asset.__js_array__
    local count = #refs
    local val
    for id = count, 1, -1 do
        val = refs[id]
        objs[id] = self:_createObject(val, id, refs)
    end

    local obj
    for id = count, 1, -1 do
        obj = objs[id]
        self:_addComponents(obj, refs[id], refs)
        _connect(obj.__type, objs, id, refs)
    end

    return objs[1]
end

function Assets:getSceneUUID(url)
    local uuid = self.scenes[url]
    _assert(uuid, string.format("[Assets] not found uuid for scene %s", url))
    return uuid
end

function Assets:getAsset(uuid)
    local asset = self.assets[uuid]
    _assert(asset, string.format("[Assets] not found asset for uuid %s", uuid))
    return asset
end

function Assets:getFile(uuid)
    local file = self.files[uuid]
    _assert(file, string.format("[Assets] not found file for uuid %s", uuid))
    return file
end

function Assets:_createObject(asset, id, refs)
    local objtype = asset.__type__
    local obj = _create(objtype, asset, id, self)
    if obj then
        obj.__id = id
        return obj
    end
end

function Assets:_addComponents(obj, asset, refs)
    if not asset._components then return end

    local name
    if cc.DEBUG >= DEBUG_VERBOSE then
        name = obj.name or ""
        if name ~= "" then name = "'" .. name .. "': " end
    end

    PrefabProtocol.apply(obj)
    for _, componentAsset in ipairs(asset._components) do
        local component = self:_createObject(componentAsset)
        if component then
            obj:addComponent(component)
            if cc.DEBUG >= DEBUG_VERBOSE then
                cc.printdebug("[Assets]   - bind component %s -> %s%s[%s]", componentAsset.__type__, name, obj.__type, obj.__id)
            end
        end
    end
end

return Assets

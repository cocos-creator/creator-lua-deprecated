
local cc = cc
local DEBUG_VERBOSE = cc.DEBUG_VERBOSE

local string_format = string.format
local string_sub = string.sub

local _assert = assert
local _error = error

local Reader = cc.class("cc.creator.Reader")

local _stripSceneUrl, _getRefUrl, _removeNull, _convertId, _isPrefab, _stripPrefabUrl

function Reader:ctor(config)
    config = config or {}
    self.config = {}
    self.config.inputDir = config.inputDir
    assert(self.config.inputDir, string_format("[Reader] invalid config.inputDir"))
end

function Reader:loadJSON()
    -- step 1: convert settings.js to settings.lua
    local jsfileSettings = self.config.inputDir .. "/src/settings.js"
    local contents = io.readfile(jsfileSettings)
    if not contents then
        cc.printf("[ERR] [Reader] not found file %s", jsfileSettings)
        return
    else
        cc.printf("[Reader] jsfileSettings = %s", jsfileSettings)
    end

    contents = string.gsub(contents, "_CCSettings[ ]*=[ ]*{", "{")
    local settings = cc.json.decode(contents)
    assert(not settings.debug, "[Reader] do not export project with DEBUG mode")

    local vars = {
        assets  = {},
        files   = {},
        prefabs = {},
        scenes  = {},
    }
    for _, val in pairs(settings.scenes) do
        vars.scenes[_stripSceneUrl(val.url)] = val.uuid
    end
    vars.scenes["__startSceneUrl"] = _stripSceneUrl(settings.launchScene)

    -- step 2: load all json files form res/import, write to import.lua
    if settings.rawAssets.assets then
        self:_loadAssets(vars, settings.rawAssets.assets, "raw-assets")
    end

    if settings.rawAssets.internal then
        self:_loadAssets(vars, settings.rawAssets.internal, "raw-internal")
    end

    return vars
end

function Reader:_loadAssets(vars, assets, dir)
    for uuid, ref in pairs(assets) do
        local url = _getRefUrl(ref)
        local asset = self:_loadAsset(uuid)
        if asset then
            vars.assets[uuid] = asset
            if _isPrefab(asset) then
                vars.prefabs[_stripPrefabUrl(url)] = uuid
            end
        else
            vars.files[uuid] = dir .. "/" .. url
        end
    end
end

function Reader:_loadAsset(uuid)
    local pattern = "%s/res/import/%s/%s.json"
    local path = string.format(pattern, self.config.inputDir, string.sub(uuid, 1, 2), uuid)
    local contents = io.readfile(path)
    if not contents then
        return nil
    end

    local val = cc.json.decode(contents)
    _removeNull(val)
    _convertId(val)

    if type(val["__type__"]) ~= "string" then
        return {
            ["__type__"] = "__js_array__",
            ["__js_array__"] = val,
        }
    else
        return val
    end
end

_stripSceneUrl = function(url)
    if string.sub(url, 1, 12) == "db://assets/" then
        url = string.sub(url, 13)
    end
    if string.sub(url, -5) == ".fire" then
        url = string.sub(url, 1, -6)
    end
    return url
end

_getRefUrl = function(ref)
    if type(ref) ~= "table" then return ref end
    return ref.url or ref[1]
end

_removeNull = function(jsonval)
    for k, v in pairs(jsonval) do
        if v == cc.json.null then
            jsonval[k] = nil
        elseif type(v) == "table" then
            _removeNull(v)
        end
    end
end

_convertId = function(val)
    for k, v in pairs(val) do
        if k == "__id__" then
            if type(v) ~= "number" then
                _error(string_format("[Reader] Found invalid __id__, key: %s, value: %s", tostring(k), tostring(v)))
            end
            val[k] = v + 1
        elseif type(v) == "table" then
            _convertId(v)
        end
    end
end

_isPrefab = function(asset)
    return asset.__type__ == "__js_array__"
        and asset.__js_array__[1].__type__ == "cc.Prefab"
end

_stripPrefabUrl = function(url)
    if string.sub(url, 1, 12) == "db://assets/" then
        url = string.sub(url, 13)
    end
    if string.sub(url, -7) == ".prefab" then
        url = string.sub(url, 1, -8)
    end
    return url
end

return Reader


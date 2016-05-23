
local table_remove = table.remove

local PrefabProtocol = {}

local _director = cc.Director:getInstance()

local _addComponent = function(self, component)
    self.components = self.components or {}
    local ctype = component.__type
    assert(self.components[ctype] == nil, string.format("[Prefab] component %s already added", ctype))
    self.components[ctype] = component
    component:onLoad(self)

    if not component.update then return end
    self.__updates = self.__updates or {}
    self.__updates[ctype] = component

    if self.__updateCall then return end
    self.__updateCall = function(dt)
        for _, component in pairs(self.__updates) do
            component:update(self, dt)
        end
    end
end

local _removeComponent = function(self, ctype)
    if not self.__updates then return end
    self.__updates[ctype] = nil
    for _, __ in pairs(self.__updates) do
        return
    end

    self.__updates = nil
    self.__updateCall = nil
end

local _getComponent = function(self, ctype)
    if not self.components or not self.components[ctype] then return end
    return self.components[ctype]
end

local _cleanupComponets = function(self)
    local scene = _director:getRunningScene()
    if scene and scene._asset then
        scene._asset:untrack(self)
    else
        local name = self.name or ""
        if name then
            name = "'" .. name .. "': "
        end
        cc.printwarn("[Prefab] prefab %s%s not stop tracking", name, self.__type)
    end
    self.components = nil
end

local _startComponents
_startComponents = function(self, obj)
    if obj.__children then
        for _, child in ipairs(obj.__children) do
            _startComponents(self, child)
        end
    end

    if not obj.components then return end

    for _, component in pairs(obj.components) do
        component:start(self)
    end
end

local _trackComponents = function(self)
    self:registerScriptHandler(function(event)
        if event ~= "enter" then return end

        local scene = _director:getRunningScene()
        if scene and scene._asset then
            scene._asset:track(self)
            if scene:isRunning() then _startComponents(self, self) end
        else
            local name = self.name or ""
            if name then
                name = "'" .. name .. "': "
            end
            cc.printwarn("[Prefab] prefab %s%s not tracking", name, self.__type)
        end

        self:unregisterScriptHandler()
    end)
end

function PrefabProtocol.apply(target)
    target.addComponent     = _addComponent
    target.removeComponent  = _removeComponent
    target.getComponent     = _getComponent
    target.cleanupComponets = _cleanupComponets
    target.trackComponents  = _trackComponents
end

return PrefabProtocol


local table_remove = table.remove

local PrefabAsset = cc.import(".PrefabAsset")
local SceneAsset = cc.class("cc.SceneAsset", PrefabAsset)

local _findTrackingObjects
_findTrackingObjects = function(tracking, obj)
    if obj.__children then
        for _, child in ipairs(obj.__children) do
            _findTrackingObjects(tracking, child)
        end
    end

    if not obj.components then return end

    -- add obj
    tracking[#tracking + 1] = obj
end

local _createComponentsHash
_createComponentsHash = function(hash, obj)
    if obj.__children then
        for _, child in ipairs(obj.__children) do
            _createComponentsHash(hash, child)
        end
    end

    if not obj.components then return end
    hash[obj] = true
end

local _removeTrackingObjects
_removeTrackingObjects = function(tracking, obj)
    local hash = {}
    _createComponentsHash(hash, obj)

    for index = #tracking, 1, -1 do
        if hash[tracking[index]] then
            table_remove(tracking, index)
        end
    end
end

function SceneAsset:run()
    local director = cc.Director:getInstance()
    if director:getRunningScene() then
        director:replaceScene(self.node)
    else
        director:runWithScene(self.node)
    end
end

function SceneAsset:getCanvasNode()
    local node = self.node
    while true do
        if not node.__children or not node.__children[1] then
            return node
        end

        local child = node.__children[1]
        if child.components and child.components["cc.Canvas"] then
            return child
        end

        node = child
    end
    return self.node
end

function SceneAsset:track(prefab)
    if not prefab.components then return end
    if not self._tracking then
        self._tracking = table.makeweak({})
    end
    _findTrackingObjects(self._tracking, prefab)
end

function SceneAsset:untrack(prefab)
    if not self._tracking then return end
    _removeTrackingObjects(self._tracking, prefab)
end

function SceneAsset:_setNode(node)
    self.node = node
    self.node._asset = self

    self.node:registerScriptHandler(function(event)
        if event == "enter" then
            self:_onEnter()
        elseif event == "exit" then
            self:_onExit()
        elseif event == "cleanup" then
            self:_onCleanup()
            self.node:unscheduleUpdate()
            self.node:unregisterScriptHandler()
            self.node._asset = nil
            self.node = nil
        else
            cc.printwarn("[Scene] not supported event %s", event)
        end
    end)

    self.node:scheduleUpdateWithPriorityLua(function(dt)
        self:_update(dt)
    end, 0)
end

function SceneAsset:_onEnter()
    cc.printdebug("[Scene] event enter")
    if not self._tracking then
        self._tracking = table.makeweak({})
    end

    local tracking = self._tracking
    _findTrackingObjects(tracking, self)

    local count = #tracking
    for index = 1, count do
        local obj = tracking[index]
        for _, component in pairs(obj.components) do
            component:start(obj)
        end
    end

    self._time = 0
end

function SceneAsset:_onExit()
    cc.printdebug("[Scene] event exit")
    local tracking = self._tracking
    local count = #tracking
    for index = 1, count do
        local obj = tracking[index]
        for _, component in pairs(obj.components) do
            component:stop(obj)
        end
    end
end

function SceneAsset:_onCleanup()
    cc.printdebug("[Scene] event cleanup")
    local tracking = self._tracking
    local count = #tracking
    for index = 1, count do
        local obj = tracking[index]
        for _, component in pairs(obj.components) do
            component:onDestroy(obj)
        end
    end

    self._tracking = nil
end

function SceneAsset:_update(dt)
    self._time = self._time + dt
    if self._time >= 3.0 then
        cc.printinfo("[Scene] tracking object count: %d", #self._tracking)
        self._time = 0
    end

    local tracking = self._tracking
    if not tracking then return end

    local count = #tracking
    for index = 1, count do
        local obj = tracking[index]
        if obj and obj.__updateCall then
            obj.__updateCall(dt)
        end
    end
end

return SceneAsset

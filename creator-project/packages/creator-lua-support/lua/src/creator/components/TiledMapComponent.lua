
local ComponentBase = cc.import(".ComponentBase")
local TiledMapComponent = cc.class("cc.TiledMap", ComponentBase)

function TiledMapComponent:ctor(node)
    TiledMapComponent.super.ctor(self)
    self.node = node
end

function TiledMapComponent:onLoad(target)
    local node = self.node
    if not node then return end

    target:addChild(node)
    node:setAnchorPoint(target:getAnchorPoint())
end

function TiledMapComponent:onDestroy(target)
    self.node = nil
end

return TiledMapComponent

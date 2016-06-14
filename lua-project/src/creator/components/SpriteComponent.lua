
local ComponentBase = cc.import(".ComponentBase")
local SpriteComponent = cc.class("cc.Sprite", ComponentBase)

function SpriteComponent:ctor(sprite)
    SpriteComponent.super.ctor(self)
    self.node = sprite
end

function SpriteComponent:onLoad(target)
    local node = self.node
    local ap = target.__anchorPoint
    if not ap then
        ap = {x = 0.5, y = 0.5}
    end
    target:addChild(node)
    target:setAnchorPoint(ap)
    node:setAnchorPoint(ap)
    node:setColor(target:getColor())
end

function SpriteComponent:onDestroy(target)
    self.node = nil
end

return SpriteComponent

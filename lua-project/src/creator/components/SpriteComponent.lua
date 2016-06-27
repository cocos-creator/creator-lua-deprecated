
local ComponentBase = cc.import(".ComponentBase")
local SpriteComponent = cc.class("cc.Sprite", ComponentBase)

function SpriteComponent:ctor(sprite, capInsets)
    SpriteComponent.super.ctor(self)
    self.node = sprite
    self.capInsets = capInsets -- used in ButtonComponent
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

    if self.capInsets and target.contentSize then
        node:setContentSize(target.contentSize)
        self.contentSize = target.contentSize -- used in ButtonComponent
    end
end

function SpriteComponent:onDestroy(target)
    self.node = nil
end

return SpriteComponent

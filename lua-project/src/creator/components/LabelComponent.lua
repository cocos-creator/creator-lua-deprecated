
local ComponentBase = cc.import(".ComponentBase")
local LabelComponent = cc.class("cc.Label", ComponentBase)

function LabelComponent:ctor(label, multiline)
    LabelComponent.super.ctor(self)
    self.node = label
    self.multiline = multiline
end

function LabelComponent:onLoad(target)
    local node = self.node
    target:addChild(node)
    node:setColor(target:getColor())
    node:setPosition(0, 0)
    local ap = target.__anchorPoint
    if not ap then
        ap = {x = 0.5, y = 0.5}
    end
    if not self.multiline then
        node:setDimensions(target.contentSize.width, target.contentSize.height)
    end
    node:setAnchorPoint(ap)
    target:setAnchorPoint(ap)
end

function LabelComponent:onDestroy(target)
    self.node = nil
end

return LabelComponent

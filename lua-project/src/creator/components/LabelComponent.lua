
local ComponentBase = cc.import(".ComponentBase")
local LabelComponent = cc.class("cc.Label", ComponentBase)

function LabelComponent:ctor(label)
    LabelComponent.super.ctor(self)
    self.node = label
end

function LabelComponent:onLoad(target)
    local node = self.node
    target:addChild(node)
    node:setAnchorPoint(target:getAnchorPoint())
    node:setColor(target:getColor())
end

function LabelComponent:onDestroy(target)
    self.node = nil
end

return LabelComponent

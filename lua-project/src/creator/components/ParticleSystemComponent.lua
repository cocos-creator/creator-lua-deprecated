
local ComponentBase = cc.import(".ComponentBase")
local ParticleSystemComponent = cc.class("cc.ParticleSystem", ComponentBase)

function ParticleSystemComponent:ctor(node)
    ParticleSystemComponent.super.ctor(self)
    self.node = node
end

function ParticleSystemComponent:onLoad(target)
    local node = self.node
    target:addChild(node)
    node:setAnchorPoint(target:getAnchorPoint())
end

function ParticleSystemComponent:onDestroy(target)
    self.node = nil
end

return ParticleSystemComponent

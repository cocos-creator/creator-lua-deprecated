
local creator = cc.import("creator.init")

local CannonBall01AI = cc.class("CannonBall01AI", creator.ComponentBase)

local setpos = cc.Node.setPosition

function CannonBall01AI:start(target)
    self.hittime = target.hittime
    self.hitx    = target.hitx
    self.hity    = target.hity

    local x, y = target:getPosition()
    self.x    = x
    self.y    = y
    self.time = 0
    self.g    = -1000
    self.over = false

    local ht = self.hittime
    self.ox = (self.hitx - self.x) / ht
    self.oy = ((self.hity - self.y) - ((self.g * ht) * (ht / 2))) / ht
end

function CannonBall01AI:update(target, dt)
    if self.over then return end

    self.time = self.time + dt
    local time = self.time

    local x = self.x + time * self.ox
    local y = self.y + time * self.oy + self.g * time * time / 2
    setpos(target, x, y)

    if time >= self.hittime then
        self.over = true
        self:boom(target, x, y)
    end
end

function CannonBall01AI:boom(target, x, y)
    local assets = creator.getAssets()
    local boom = assets:createPrefab("resources/CannonBoom0001")
    boom:setPosition(x, y)
    boom:setLocalZOrder(2000)
    boom:trackComponents()

    local animation = boom:getComponent("cc.Animation")
    animation:play(boom, function()
        boom:cleanupComponets()
        boom:removeFromParent()
    end)
    target:getParent():addChild(boom)

    target:cleanupComponets()
    target:removeFromParent()
end

return CannonBall01AI


local creator = cc.import("creator.init")

local CannonBall01AI = cc.import(".CannonBall01AI")

local ShipAI = cc.class("ShipAI", creator.ComponentBase)

function ShipAI:onLoad(target)
    self._lastFire = math.random(0, 20) / 10
    self._fireInterval = math.random(8, 25) / 10
    self._speed = math.random(50, 300) / 10
    if math.random(1, 100) % 2 == 0 then
        self._speed = -self._speed
    end
end

function ShipAI:update(target, dt)
    local x, y = target:getPosition()
    x = x + self._speed * dt
    target:setPositionX(x)

    if (self._speed < 0 and x < -400) or (self._speed > 0 and x > 400) then
        self._speed = -self._speed
    end

    if self._lastFire <= 0 then
        self._fireInterval = math.random(8, 25) / 10
        self._lastFire = self._fireInterval

        local assets = creator.getAssets()
        local bullet = assets:createPrefab("resources/CannonBall01")
        bullet.hittime = math.random(75, 135) / 100
        bullet.hitx = x + math.random(-200, 200)
        bullet.hity = y - math.random(50, 200)
        bullet:addComponent(CannonBall01AI.new())
        bullet:trackComponents()

        bullet:setPosition(x, y)
        bullet:setLocalZOrder(1000)
        target:getParent():addChild(bullet)
    else
        self._lastFire = self._lastFire - dt
    end
end

return ShipAI

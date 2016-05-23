
local cc = cc
local DEBUG_VERBOSE = cc.DEBUG_VERBOSE

local ccp = cc.p
local ccsize = cc.size
local ccrect = cc.rect

local ComponentBase = cc.import(".ComponentBase")
local AnimationComponent = cc.class("cc.Animation", ComponentBase)

local _LOOP_NORMAL = 1
local _LOOP_LOOP   = 2
AnimationComponent.LOOP_NORMAL = _LOOP_NORMAL
AnimationComponent.LOOP_LOOP   = _LOOP_LOOP


local _animationCache = cc.AnimationCache:getInstance()

local function _createAnimation(uuid, assets)
    local animation = _animationCache:getAnimation(uuid)
    if animation then return animation end

    if cc.DEBUG >= DEBUG_VERBOSE then
        cc.printdebug("[Assets]   - [Animation] create animation %s", uuid)
    end

    local clip = assets:getAsset(uuid)
    local delay = 1.0 / clip.sample / clip.speed
    animation = cc.Animation:create()
    animation:setDelayPerUnit(delay)

    for _, faval in ipairs(clip["curveData"]["comps"]["cc.Sprite"]["spriteFrame"]) do
        local asset = assets:getAsset(faval["value"]["__uuid__"])
        local spriteFrame = assets:_createObject(asset)
        animation:addSpriteFrame(spriteFrame)
    end

    _animationCache:addAnimation(animation, uuid)
    animation.loop = clip.wrapMode
    return animation
end

function AnimationComponent:ctor(props, assets)
    AnimationComponent.super.ctor(self)
    self.props = props
    self._animations = {}
    for _, clipaval in ipairs(self.props._clips) do
        local animation, clip = _createAnimation(clipaval.__uuid__, assets)
        animation:retain()
        self._animations[#self._animations + 1] = animation
    end
end

function AnimationComponent:start(target)
    if self.props.playOnLoad then
        self:play(target)
    end
end

function AnimationComponent:play(target, callback)
    if not target.components or not target.components["cc.Sprite"] then
        cc.printwarn("[Animation] invalid target %s", target.__type)
        return
    end

    local spriteComponent = target.components["cc.Sprite"]
    local sprite = spriteComponent.node

    for _, animation in ipairs(self._animations) do
        local animate = cc.Animate:create(animation)
        if animation.loop == _LOOP_LOOP then
            sprite:runAction(cc.RepeatForever:create(animate))
        elseif callback then
            sprite:runAction(cc.Sequence:create({animate, cc.CallFunc:create(callback)}))
        else
            sprite:runAction(animate)
        end
    end
end

function AnimationComponent:onDestroy(target)
    for _, animation in ipairs(self._animations) do
        animation:release()
    end
    self._animations = nil
end

return AnimationComponent

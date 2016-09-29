
local cc = cc
local DEBUG_VERBOSE = cc.DEBUG_VERBOSE

local bit = require("bit")
local bit_and = bit.band

local ComponentBase = cc.import(".ComponentBase")
local WidgetComponent = cc.class("cc.Canvas", ComponentBase)

local _TOP        = 1
local _MID        = 2
local _BOTTOM     = 4
local _LEFT       = 8
local _CENTER     = 16
local _RIGHT      = 32
local _TOP_BOTTOM = _TOP + _BOTTOM
local _LEFT_RIGHT = _LEFT + _RIGHT

WidgetComponent.ALIGN_TOP    = _TOP
WidgetComponent.ALIGN_MID    = _MID
WidgetComponent.ALIGN_BOTTOM = _BOTTOM
WidgetComponent.ALIGN_LEFT   = _LEFT
WidgetComponent.ALIGN_CENTER = _CENTER
WidgetComponent.ALIGN_RIGHT  = _RIGHT

local _glview

function WidgetComponent:ctor(props)
    WidgetComponent.super.ctor(self)
    self.props = props
    if not _glview then
        _glview = cc.Director:getInstance():getOpenGLView()
    end
end

function WidgetComponent:start(target)
    self:align(target)
end

function WidgetComponent:align(target)
    if cc.DEBUG >= DEBUG_VERBOSE then
        local name = target.name or ""
        if name ~= "" then
            name = "'" .. name .. "': "
        end
        cc.printdebug("[Component] [Widget] align %s%s[%s], alignFlags: %d", name, target.__type, target.__id, self.props._alignFlags)
    end

    if self.props._alignFlags == 0 then return end

    local props  = self.props
    local flags  = props._alignFlags or props.align
    if target.node then target = target.node end
    local parent = target:getParent()
    if not parent then return end

    if cc.DEBUG >= DEBUG_VERBOSE then
        local parentName = parent.name or ""
        if parentName then
            parentName = "'" .. parentName .. "': "
        end
        cc.printdebug("  - parent is %s%s[%s]", parentName, parent.__type, parent.__id)
    end

    -- get parent content size
    local pap = parent:getAnchorPoint()
    if not parent.contentSize then
        parent.contentSize = {width = 0, height = 0}
    end
    local pw = parent.contentSize.width
    local ph = parent.contentSize.height
    local hw, hh = pw / 2, ph / 2
    cc.printdebug("  - parent content size: width = %0.2f, height = %0.2f", pw, ph)

    -- local cx, cy = 0, 0
    local cx     = hw - pw * pap.x
    local cy     = hh - ph * pap.y
    cc.printdebug("  - parent origin point: x = %0.2f, y = %0.2f", cx, cy)

    local pleft   = cx - hw
    local pright  = cx + hw
    local ptop    = cy + hh
    local pbottom = cy - hh

    if parent.__type == "cc.Scene" then
        local rect = _glview:getVisibleRect()
        pleft   = rect.x
        pright  = pleft + rect.width
        pbottom = rect.y
        ptop    = pbottom + rect.height
        pw      = pright - pleft
        ph      = ptop - pbottom
        hw      = pw / 2
        hh      = ph / 2
        cx      = pleft + pw / 2
        cy      = pbottom + ph / 2
    end

    -- get target size
    local ap = target:getAnchorPoint()
    local sx = target:getScaleX()
    local sy = target:getScaleY()

    if not target.contentSize then
        target.contentSize = {width = 0, height = 0}
    end
    local w = target.contentSize.width * sx
    local h = target.contentSize.height * sy
    local x, y = target:getPosition()
    cc.printdebug("  - target content size: width = %0.2f, height = %0.2f", w, h)

    -- calc offsets
    local left = props._left or 0
    if left and props._isAbsLeft == false then
        left = left * pw
    end

    local right = props._right or 0
    if right and props._isAbsRight == false then
        right = right * pw
    end

    local top = props._top or 0
    if top and props._isAbsTop == false then
        top = top * ph
    end

    local bottom = props._bottom or 0
    if bottom and props._isAbsBottom == false then
        bottom = bottom * ph
    end

    -- calc position
    if bit_and(flags, _CENTER) ~= 0 then
        x = cx + w * (ap.x - 0.5)
    elseif bit_and(flags, _LEFT_RIGHT) == _LEFT_RIGHT then
        cc.printwarn("  - not support LEFT_RIGHT align in cocos2d-x")
        return
    elseif bit_and(flags, _LEFT) ~= 0 then
        x = pleft + left + w * ap.x
    elseif bit_and(flags, _RIGHT) ~= 0 then
        x = pright - right - w * (1.0 - ap.x)
    end

    if bit_and(flags, _MID) ~= 0 then
        y = cy + h * (ap.y - 0.5)
    elseif bit_and(flags, _TOP_BOTTOM) == _TOP_BOTTOM then
        cc.printwarn("  - not support TOP_BOTTOM align in cocos2d-x")
        return
    elseif bit_and(flags, _TOP) ~= 0 then
        y = ptop - top - h * (1.0 - ap.y)
    elseif bit_and(flags, _BOTTOM) ~= 0 then
        y = pbottom + bottom + h * ap.y
    end

    cc.printdebug("  - set target pos: %0.2f, %0.2f", x, y)
    target:setPosition(x, y)
end

return WidgetComponent

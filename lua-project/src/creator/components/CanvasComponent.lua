
local ComponentBase = cc.import(".ComponentBase")
local CanvasComponent = cc.class("cc.Canvas", ComponentBase)

function CanvasComponent:ctor(props)
    CanvasComponent.super.ctor(self)
    self.designResolution = props._designResolution
    self.fitHeight = props._fitHeight
    self.fitWidth = props._fitWidth
end

function CanvasComponent:onLoad(target)
    local view = cc.Director:getInstance():getOpenGLView()
    local framesize = view:getFrameSize()

    local rsize = {
        width = self.designResolution.width,
        height = self.designResolution.height
    }
    local fitHeight = self.fitHeight
    local fitWidth = self.fitWidth

    local scaleX = framesize.width / rsize.width
    local scaleY = framesize.height / rsize.height

    if fitHeight and fitWidth then
        view:setDesignResolutionSize(rsize.width, rsize.height, cc.ResolutionPolicy.EXACT_FIT)
    elseif fitHeight then
        rsize.width = framesize.width / scaleY
        rsize.height = framesize.height / scaleY
        view:setDesignResolutionSize(rsize.width, rsize.height, cc.ResolutionPolicy.NO_BORDER)
    elseif fitWidth then
        rsize.width = framesize.width / scaleX
        rsize.height = framesize.height / scaleX
        view:setDesignResolutionSize(rsize.width, rsize.height, cc.ResolutionPolicy.NO_BORDER)
    end

    target:setAnchorPoint(cc.p(0.5, 0.5))
    target:setPosition(rsize.width / 2, rsize.height / 2)
    target.contentSize = rsize

    cc.printdebug("[Assets]   - [Canvas] Design Resolution: %0.2f x %0.2f", rsize.width, rsize.height)
end

return CanvasComponent

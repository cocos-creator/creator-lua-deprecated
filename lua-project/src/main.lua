
cc.FileUtils:getInstance():setPopupNotify(false)
cc.FileUtils:getInstance():addSearchPath("res/")
cc.FileUtils:getInstance():addSearchPath("src/")

print = release_print

require "cocos.init"

local ShipAI = cc.import("logic.ShipAI")

cc.DEBUG = cc.DEBUG_INFO
-- cc.DEBUG = cc.DEBUG_VERBOSE
cc.DEBUG_DISABLE_DUMP_TRACEBACK = true

local function _cleanmem()
    for i = 1, 6 do
        collectgarbage()
    end

    cc.printinfo("[MEM] used: %d KB", math.ceil(collectgarbage("count")))
end

local function main()
    local director = cc.Director:getInstance()
    director:setDisplayStats(true)

    _cleanmem()

    local creator = require "creator.init"
    local assets = creator.getAssets()

    local url = assets:getLaunchSceneUrl()
    local scene = assets:createScene(url)
    scene:run()

    local ship = creator.find(scene, "MyShip")
    ship:addComponent(ShipAI.new())

    _cleanmem()
end

xpcall(main, __G__TRACKBACK__)

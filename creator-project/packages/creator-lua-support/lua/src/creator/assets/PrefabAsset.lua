
local PrefabProtocol = cc.import(".PrefabProtocol")

local AssetBase = cc.import(".AssetBase")
local PrefabAsset = cc.class("cc.PrefabAsset", AssetBase)

function PrefabAsset:ctor()
    PrefabAsset.super.ctor(self)
    PrefabProtocol.apply(self)
end

return PrefabAsset

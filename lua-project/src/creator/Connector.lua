
local cc = cc
local DEBUG_VERBOSE = cc.DEBUG_VERBOSE

local table_makeweak = table.makeweak

local connector = {}

connector["cc.SceneAsset"] = function(objs, parentId, refs)
    local parent = objs[parentId]
    local id = refs[parentId]["scene"]["__id__"]
    parent:_setNode(objs[id])
    parent.__children = table_makeweak({objs[id]})
end

connector["cc.Prefab"] = function(objs, parentId, refs)
    local parent = objs[parentId]
    local id = refs[parentId]["data"]["__id__"]
    parent.node = objs[id]
    parent.__children = table_makeweak({objs[id]})
end

local connectNode = function(objs, parentId, refs)
    local parent = objs[parentId]
    local children = refs[parentId]["_children"]
    if not children then return end

    parent.__children = table_makeweak({})
    local __children = parent.__children
    local child
    for _, asset in ipairs(children) do
        local cid = asset["__id__"]
        child = objs[cid]

        if cc.DEBUG >= DEBUG_VERBOSE then
            local name = parent.name or ""
            if name ~= "" then name = "'" .. name .. "': " end

            local cname = child.name or ""
            if cname ~= "" then cname = "'" .. cname .. "': " end

            cc.printdebug("[Assets] addChild: %s%s [%d] -> %s%s [%d]",
                cname, refs[cid].__type__, cid,
                name, parent.__type, parentId)
        end

        parent:addChild(child)
        __children[#__children + 1] = child
    end

    return parent
end

connector["cc.Node"] = connectNode
connector["cc.Scene"] = connectNode

local _M = {}

function _M.connect(objtype, objs, parentId, refs)
    local connect = connector[objtype]
    if not connect then
        cc.printwarn("[Assets] not supported type %s", objtype)
    end

    connect(objs, parentId, refs)
end

return _M

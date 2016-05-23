
local ComponentBase = cc.class("cc.ComponentBase")

function ComponentBase:ctor()
    self.__type = self.class.__cname
end

function ComponentBase:onLoad(target)
end

function ComponentBase:start(target)
end

function ComponentBase:stop(target)
end

function ComponentBase:onDestroy(target)
end

return ComponentBase

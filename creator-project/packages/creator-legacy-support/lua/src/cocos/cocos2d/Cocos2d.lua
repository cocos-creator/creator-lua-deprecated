
cc = cc or {}

function cc.p(x, y)
    if type(x) == "table" then
        return x
    else
        return {x = x, y = y}
    end
end

function cc.size(width, height )
    return {width = width, height = height}
end

function cc.rect(x, y, width, height)
    return {x = x, y = y, width = width, height = height}
end

function cc.color(r, g, b, a)
    if a ~= nil then
        return {r = r, g = g, b = b, a = a}
    else
        return {r = r, g = g, b = b}
    end
end


require "cocos.framework.init"

cc.DEBUG = cc.DEBUG_VERBOSE
cc.DEBUG_DISABLE_DUMP_TRACEBACK = true

local args = {...}

local function help()
    print [[

Convert Cocos Creator web-mobile build to Lua project.

syntax:

    lua convert-creator-build.lua <BUILD_PATH>

example:

    lua convert-creator-build.lua ../../creator-project/build/web-mobile


]]
end

if #args < 1 then
    help()
    os.exit(1)
end

local inputDir = args[1]
local last = string.sub(inputDir, -1)
if last == "/" or last == "\\" then
    inputDir = string.sub(inputDir, 1, -2)
end

local Reader = require "creator.Reader"
local config = {inputDir = inputDir}
local reader = Reader.new(config)
local vars = reader:loadJSON()

if not vars then
    print("")
    help()
    os.exit(1)
end

--

local _mkdir, _copyfile, _fixpath

local _HOME = os.getenv("HOME")
if _HOME and string.sub(_HOME, 1, 1) == "/" then
    -- mac
    _fixpath = function(path)
        return string.gsub(path, "\\", "/")
    end

    _mkdir = function(dir)
        local command = string.format("if [ ! -d %s ]; then mkdir -p %s; fi", dir, dir)
        local ok, status, code = os.execute(command)
        if not ok or status ~= "exit" or code ~= 0 then
            cc.printf("[ERR] Create directory %s failed", dir)
            os.exit(1)
        end
    end

    _copyfile = function(src, dst)
        local pi = io.pathinfo(dst)
        _mkdir(pi.dirname)

        local command = string.format("cp %s %s", src, dst)
        local ok, status, code = os.execute(command)
        if not ok or status ~= "exit" or code ~= 0 then
            cc.printf("[ERR] Copy file %s to %s failed", src, dst)
            os.exit(1)
        end

        cc.printf("[OK] Copy file %s", dst)
    end
else
    -- windows
    _fixpath = function(path)
        return string.gsub(path, "/", "\\")
    end

    _mkdir = function(dir)
        dir = _fixpath(dir)
        local command = string.format("IF NOT EXIST \"%s\" MKDIR \"%s\"", dir, dir)
        local code = os.execute(command)
        if code ~= 0 then
            cc.printf("[ERR] Create directory %s failed", dir)
            os.exit(1)
        end
    end

    _copyfile = function(src, dst)
        src = _fixpath(src)
        dst = _fixpath(dst)
        local pi = io.pathinfo(dst)
        _mkdir(pi.dirname)

        local command = string.format("COPY /Y /B %s %s > NUL", src, dst)
        local code = os.execute(command)
        if code ~= 0 then
            cc.printf("[ERR] Copy file %s to %s failed", src, dst)
            os.exit(1)
        end

        cc.printf("[OK] Copy file %s", dst)
    end
end

local destDir = args[2] or ".."
if string.sub(destDir, -1) == "/" or string.sub(destDir, -1) == "\\" then
    destDir = string.sub(destDir, 1, -2)
end

for _, file in pairs(vars.files) do
    local src = inputDir .. "/res/" .. file
    local dst = destDir .. "/res/" .. file
    _copyfile(src, dst)
end

local function _validateLuaFile(filename)
    local ok, err = loadfile(filename)
    if not ok then
        cc.printf("Valid file %s failed", filename)
        os.exit(1)
    end
    return true
end

local function _dumpToLuaFile(filename, varname, var)
    local lines = cc.dumpval(var, string.format("local %s =", varname), "", true)
    table.insert(lines, 1, "")
    lines[#lines + 1] = ""
    lines[#lines + 1] = string.format("return %s", varname)
    lines[#lines + 1] = ""
    local contents = table.concat(lines, "\n")
    filename = _fixpath(filename)
    io.writefile(filename, contents)
    _validateLuaFile(filename)

    cc.printf("[OK] write file %s", filename)
end

_mkdir(destDir .. "/src/assets")

_dumpToLuaFile(destDir .. "/src/assets/scenes.lua", "scenes", vars.scenes)
_dumpToLuaFile(destDir .. "/src/assets/assets.lua", "assets", vars.assets)
_dumpToLuaFile(destDir .. "/src/assets/files.lua", "files", vars.files)
_dumpToLuaFile(destDir .. "/src/assets/prefabs.lua", "prefabs", vars.prefabs)

print("done.")
print("")

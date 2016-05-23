
-- Convert Creator JS project to Lua

-- json


local json = {}


-- Internal functions.

local function kind_of(obj)
  if type(obj) ~= 'table' then return type(obj) end
  local i = 1
  for _ in pairs(obj) do
    if obj[i] ~= nil then i = i + 1 else return 'table' end
  end
  if i == 1 then return 'table' else return 'array' end
end

local function escape_str(s)
  local in_char  = {'\\', '"', '/', '\b', '\f', '\n', '\r', '\t'}
  local out_char = {'\\', '"', '/',  'b',  'f',  'n',  'r',  't'}
  for i, c in ipairs(in_char) do
    s = s:gsub(c, '\\' .. out_char[i])
  end
  return s
end

-- Returns pos, did_find; there are two cases:
-- 1. Delimiter found: pos = pos after leading space + delim; did_find = true.
-- 2. Delimiter not found: pos = pos after leading space;     did_find = false.
-- This throws an error if err_if_missing is true and the delim is not found.
local function skip_delim(str, pos, delim, err_if_missing)
  pos = pos + #str:match('^%s*', pos)
  if str:sub(pos, pos) ~= delim then
    if err_if_missing then
      error('Expected ' .. delim .. ' near position ' .. pos)
    end
    return pos, false
  end
  return pos + 1, true
end

-- Expects the given pos to be the first character after the opening quote.
-- Returns val, pos; the returned pos is after the closing quote character.
local function parse_str_val(str, pos, val)
  val = val or ''
  local early_end_error = 'End of input found while parsing string.'
  if pos > #str then error(early_end_error) end
  local c = str:sub(pos, pos)
  if c == '"'  then return val, pos + 1 end
  if c ~= '\\' then return parse_str_val(str, pos + 1, val .. c) end
  -- We must have a \ character.
  local esc_map = {b = '\b', f = '\f', n = '\n', r = '\r', t = '\t'}
  local nextc = str:sub(pos + 1, pos + 1)
  if not nextc then error(early_end_error) end
  return parse_str_val(str, pos + 2, val .. (esc_map[nextc] or nextc))
end

-- Returns val, pos; the returned pos is after the number's final character.
local function parse_num_val(str, pos)
  local num_str = str:match('^-?%d+%.?%d*[eE]?[+-]?%d*', pos)
  local val = tonumber(num_str)
  if not val then error('Error parsing number at position ' .. pos .. '.') end
  return val, pos + #num_str
end


-- Public values and functions.

function json.stringify(obj, as_key)
  local s = {}  -- We'll build the string as an array of strings to be concatenated.
  local kind = kind_of(obj)  -- This is 'array' if it's an array or type(obj) otherwise.
  if kind == 'array' then
    if as_key then error('Can\'t encode array as key.') end
    s[#s + 1] = '['
    for i, val in ipairs(obj) do
      if i > 1 then s[#s + 1] = ', ' end
      s[#s + 1] = json.stringify(val)
    end
    s[#s + 1] = ']'
  elseif kind == 'table' then
    if as_key then error('Can\'t encode table as key.') end
    s[#s + 1] = '{'
    for k, v in pairs(obj) do
      if #s > 1 then s[#s + 1] = ', ' end
      s[#s + 1] = json.stringify(k, true)
      s[#s + 1] = ':'
      s[#s + 1] = json.stringify(v)
    end
    s[#s + 1] = '}'
  elseif kind == 'string' then
    return '"' .. escape_str(obj) .. '"'
  elseif kind == 'number' then
    if as_key then return '"' .. tostring(obj) .. '"' end
    return tostring(obj)
  elseif kind == 'boolean' then
    return tostring(obj)
  elseif kind == 'nil' then
    return 'null'
  else
    error('Unjsonifiable type: ' .. kind .. '.')
  end
  return table.concat(s)
end

json.null = {}  -- This is a one-off table to represent the null value.

function json.parse(str, pos, end_delim)
  pos = pos or 1
  if pos > #str then error('Reached unexpected end of input.') end
  local pos = pos + #str:match('^%s*', pos)  -- Skip whitespace.
  local first = str:sub(pos, pos)
  if first == '{' then  -- Parse an object.
    local obj, key, delim_found = {}, true, true
    pos = pos + 1
    while true do
      key, pos = json.parse(str, pos, '}')
      if key == nil then return obj, pos end
      if not delim_found then error('Comma missing between object items.') end
      pos = skip_delim(str, pos, ':', true)  -- true -> error if missing.
      obj[key], pos = json.parse(str, pos)
      pos, delim_found = skip_delim(str, pos, ',')
    end
  elseif first == '[' then  -- Parse an array.
    local arr, val, delim_found = {}, true, true
    pos = pos + 1
    while true do
      val, pos = json.parse(str, pos, ']')
      if val == nil then return arr, pos end
      if not delim_found then error('Comma missing between array items.') end
      arr[#arr + 1] = val
      pos, delim_found = skip_delim(str, pos, ',')
    end
  elseif first == '"' then  -- Parse a string.
    return parse_str_val(str, pos + 1)
  elseif first == '-' or first:match('%d') then  -- Parse a number.
    return parse_num_val(str, pos)
  elseif first == end_delim then  -- End of an object or array.
    return nil, pos + 1
  else  -- Parse true, false, or null.
    local literals = {['true'] = true, ['false'] = false, ['null'] = json.null}
    for lit_str, lit_val in pairs(literals) do
      local lit_end = pos + #lit_str - 1
      if str:sub(pos, lit_end) == lit_str then return lit_val, lit_end + 1 end
    end
    local pos_info_str = 'position ' .. pos .. ': ' .. str:sub(pos, pos + 10)
    error('Invalid json syntax starting at ' .. pos_info_str)
  end
end


-- dumpval

local dumpval = {}

local string_format = string.format
local string_rep = string.rep

local function _dump_value(v)
    if type(v) == "string" then
        v = tostring(v)

        v = string.gsub(v, "\n", "\\n");

        v = "\"" .. v .. "\""
    end
    return tostring(v)
end

function dumpval.dumpval(value, desciption, indent, retarr)
    indent = indent or ""

    local lookup = {}
    local result = {}

    local function _dump(value, desciption, indent, first)
        if type(value) ~= "table" then
            desciption = desciption or "value"
            if first then
                result[#result +1 ] = string_format("%s%s %s,", indent, desciption, _dump_value(value))
            else
                result[#result +1 ] = string_format("%s[%s] = %s,", indent, _dump_value(desciption), _dump_value(value))
            end
        elseif lookup[tostring(value)] then
            error("FOUND NESTING VALUE, key: " .. desciption .. ", value: " .. tostring(value))
        else
            lookup[tostring(value)] = true
            if first then
                if desciption then
                    result[#result +1 ] = string_format("%s%s {", indent, desciption)
                else
                    result[#result +1 ] = string_format("%s{", indent)
                end
            else
                result[#result +1 ] = string_format("%s[%s] = {", indent, _dump_value(desciption))
            end
            local indent2 = indent.."    "
            local keys = {}
            local values = {}
            for k, v in pairs(value) do
                keys[#keys + 1] = k
                values[k] = v
            end
            table.sort(keys, function(a, b)
                if type(a) == "number" and type(b) == "number" then
                    return a < b
                else
                    return tostring(a) < tostring(b)
                end
            end)
            for i, k in ipairs(keys) do
                _dump(values[k], k, indent2, keylen)
            end
            result[#result +1] = string_format("%s},", indent)
        end
    end
    _dump(value, desciption, indent, true)
    result[#result] = string.sub(result[#result], 1, -2)

    if retarr then
        return result
    else
        return table.concat(result, "\n")
    end
end


function dumpval.dump(value, desciption, nesting, _print)
    if type(nesting) ~= "number" then nesting = 8 end
    _print = _print or print

    local lookup = {}
    local result = {}

    local function _dump(value, desciption, indent, nest)
        desciption = desciption or "<var>"
        if type(value) ~= "table" then
            result[#result +1 ] = string_format("%s%s = %s", indent, _dump_value(desciption), _dump_value(value))
        elseif lookup[tostring(value)] then
            result[#result +1 ] = string_format("%s%s = *REF*", indent, _dump_value(desciption))
        else
            lookup[tostring(value)] = true
            if nest > nesting then
                result[#result +1 ] = string_format("%s%s = *MAX NESTING*", indent, _dump_value(desciption))
            else
                result[#result +1 ] = string_format("%s%s = {", indent, _dump_value(desciption))
                local indent2 = indent.."    "
                local keys = {}
                local values = {}
                for k, v in pairs(value) do
                    keys[#keys + 1] = k
                    values[k] = v
                end
                table.sort(keys, function(a, b)
                    if type(a) == "number" and type(b) == "number" then
                        return a < b
                    else
                        return tostring(a) < tostring(b)
                    end
                end)
                for i, k in ipairs(keys) do
                    _dump(values[k], k, indent2, nest + 1)
                end
                result[#result +1] = string_format("%s}", indent)
            end
        end
    end
    _dump(value, desciption, "- ", 1)

    for i, line in ipairs(result) do
        _print(line)
    end
end

-------


local _error = error

local function help()
    print [[

lua convert.lua js-build-dir out-dir

options:
    js-build-dir The directory of Creator project build
    out-dir Lua Project directory

examples:

    lua convert.lua my-game-js/build/web-mobile my-game-lua

]]
end

local function pathinfo(path)
    local pos = string.len(path)
    local extpos = pos + 1
    while pos > 0 do
        local b = string.byte(path, pos)
        if b == 46 then -- 46 = char "."
            extpos = pos
        elseif b == 47 then -- 47 = char "/"
            break
        end
        pos = pos - 1
    end

    local dirname  = string.sub(path, 1, pos)
    local filename = string.sub(path, pos + 1)

    extpos = extpos - pos
    local basename = string.sub(filename, 1, extpos - 1)
    local extname  = string.sub(filename, extpos)

    return {
        dirname  = dirname,
        filename = filename,
        basename = basename,
        extname  = extname
    }
end

local function checkdir(dir)
    local lastchar = dir[#dir]
    if lastchar == "/" or lastchar == "\\" then
        return string.sub(dir, 1, -2)
    else
        return dir
    end
end

local function mkdir(dir)
    local command = string.format("if [ ! -d %s ]; then mkdir -p %s; fi", dir, dir)
    local ok, status, code = os.execute(command)
    if not ok or status ~= "exit" or code ~= 0 then
        _error(string.format("Create directory %s failed", dir))
    end
end

local function copyfile(src, dst)
    local pi = pathinfo(dst)
    mkdir(pi.dirname)

    local command = string.format("cp %s %s", src, dst)
    local ok, status, code = os.execute(command)
    if not ok or status ~= "exit" or code ~= 0 then
        _error(string.format("Copy file %s to %s failed", src, dst))
    end

    print(string.format("Copy file %s", dst))
end

local function readfile(filename)
    local file, err = io.open(filename, "rb")
    if not file then
        _error(string.format("Open file %s failed", filename))
    end

    local contents = file:read("*a")
    io.close(file)

    if not contents then
        _error(string.format("Read file %s failed", filename))
    end

    print(string.format("Read file %s", filename))
    return contents
end

local function writefile(filename, contents)
    local pi = pathinfo(filename)
    mkdir(pi.dirname)

    mode = "w+b"
    local file = io.open(filename, mode)
    if not file or not file:write(contents) then
        _error(string.format("Write file %s failed", filename))
    end

    io.close(file)
    print(string.format("Write file %s", filename))
end

local function validateLuaFile(filename)
    local ok, err = loadfile(filename)
    if not ok then
        _error(string.format("Valid file %s failed", filename))
    end
    return true
end

local removeNullFromJson
removeNullFromJson = function(jsonval)
    for k, v in pairs(jsonval) do
        if v == json.null then
            jsonval[k] = nil
        elseif type(v) == "table" then
            removeNullFromJson(v)
        end
    end
end

local convertId
convertId = function(val)
    for k, v in pairs(val) do
        if k == "__id__" then
            if type(v) ~= "number" then
                _error(string.format("Found invalid __id__, key: %s, value: %s", tostring(k), tostring(v)))
            end
            val[k] = v + 1
        elseif type(v) == "table" then
            convertId(v)
        end
    end
end

local function loadAssets(builddir, uuid)
    local pattern = "%s/res/import/%s/%s.json"
    local path = string.format(pattern, builddir, string.sub(uuid, 1, 2), uuid)
    local contents = readfile(path)
    local val = json.parse(contents)
    removeNullFromJson(val)
    convertId(val)

    if type(val["__type__"]) ~= "string" then
        return {
            ["__type__"] = "__js_array__",
            ["__js_array__"] = val,
        }
    else
        return val
    end
end

local function dumpToLuaFile(filename, varname, var)
    local lines = dumpval.dumpval(var, string.format("local %s =", varname), "", true)
    table.insert(lines, 1, "")
    lines[#lines + 1] = ""
    lines[#lines + 1] = string.format("return %s", varname)
    lines[#lines + 1] = ""
    contents = table.concat(lines, "\n")
    writefile(filename, contents)
    validateLuaFile(filename)

    contents = json.stringify(var)
    if string.sub(filename, -4) == ".lua" then
        filename = string.sub(filename, 1, -5) .. ".json"
    end
    writefile(filename, contents)
end

----

local args = {...}

if #args < 2 then
    help()
    os.exit(1)
end

local builddir = checkdir(args[1])
local outdir = checkdir(args[2])

-- prepare
mkdir(outdir)

-- step 1
-- convert settings.js to settings.lua
local contents = readfile(builddir .. "/src/settings.js")
contents = string.gsub(contents, "_CCSettings[ ]*=[ ]*{", "{")
local settings = json.parse(contents)
if settings.debug then
    print("STOP: do not export project with DEBUG mode")
    os.exit(1)
end

local function stripSceneUrl(url)
    if string.sub(url, 1, 12) == "db://assets/" then
        url = string.sub(url, 13)
    end
    if string.sub(url, -5) == ".fire" then
        url = string.sub(url, 1, -6)
    end
    return url
end

local scenes  = {}
for _, val in pairs(settings.scenes) do
    scenes[stripSceneUrl(val.url)] = val.uuid
end

scenes["__launchSceneUrl"] = stripSceneUrl(settings.launchScene)
dumpToLuaFile(outdir .. "/src/assets/scenes.lua", "scenes", scenes)

-- step 2
-- load all json files form res/import, write to import.lua
local rawAssets = settings.rawAssets
local assets  = {}
local files   = {}
local prefabs = {}

local function isPrefab(asset)
    return asset.__type__ == "__js_array__"
        and asset.__js_array__[1].__type__ == "cc.Prefab"
end

local function stripPrefabUrl(url)
    if string.sub(url, 1, 12) == "db://assets/" then
        url = string.sub(url, 13)
    end
    if string.sub(url, -7) == ".prefab" then
        url = string.sub(url, 1, -8)
    end
    return url
end

local function getRefUrl(ref)
    if type(ref) ~= "table" then return ref end
    return ref.url or ref[1]
end

for _, key in pairs({"assets", "internal"}) do
    if rawAssets[key] then
        for uuid, ref in pairs(rawAssets[key]) do
            local url = getRefUrl(ref)
            if type(ref) ~= "table" or ref.raw then
                -- raw asset
                files[uuid] = "raw-" .. key .. "/" .. url
            else
                local asset = loadAssets(builddir, uuid)
                assets[uuid] = asset
                if isPrefab(asset) then
                    prefabs[stripPrefabUrl(url)] = uuid
                end
            end
        end
    end
end

dumpToLuaFile(outdir .. "/src/assets/assets.lua", "assets", assets)
dumpToLuaFile(outdir .. "/src/assets/files.lua", "files", files)
dumpToLuaFile(outdir .. "/src/assets/prefabs.lua", "prefabs", prefabs)

-- step 3
-- copy all raw asset files
for _, filename in pairs(files) do
    copyfile(builddir .. "/res/" .. filename, outdir .. "/res/" .. filename)
end

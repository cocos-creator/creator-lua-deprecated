#!/bin/bash

CUR_DIR=$(cd "$(dirname $0)" && pwd)
cd "$CUR_DIR"

function showHelp()
{
    echo "Make Creator-ready Lua project."
    echo ""
    echo "usage: ./make-lua-project-creator-ready.sh PROJECT_DIR"
    echo ""
    echo "example:"
    echo "  ./make-lua-project-creator-ready.sh mygame"
    echo ""
}

if [ "$1" == "" ]; then
    showHelp;
    exit 1
fi

PROJECT_DIR=$1
if [ ! -d "$PROJECT_DIR" ]; then
    echo "[ERR] NOT FOUND PROJECT DIR: $PROJECT_DIR"
    echo ""
    showHelp;
    exit 1
fi

cd "$PROJECT_DIR"

if [ ! -d "src" ]; then
    echo "[ERR] NOT FOUND SOURCE DIR: $PROJECT_DIR/src"
    echo ""
    showHelp;
    exit 1
fi

rm -fr src
rm -fr res
mkdir res

cp -R "$CUR_DIR/lua-project/src" src
cp -R "$CUR_DIR/lua-project/mac-bin" mac-bin
cp -R "$CUR_DIR/lua-project/win32-bin" win32-bin
cp "$CUR_DIR/lua-project/convert-creator-build.sh" .
cp "$CUR_DIR/lua-project/convert-creator-build.bat" .

echo "done."
echo ""


#!/bin/bash
CUR_DIR=$(cd "$(dirname $0)" && pwd)
cd "$CUR_DIR"

function showHelp()
{
    echo "Convert Cocos Creator web-mobile build to Lua project."
    echo ""
    echo "usage: ./convert-creator-build.sh <CREATOR_BUILD_DIR>"
    echo ""
    echo "example:"
    echo "  ./convert-creator-build.sh ../creator-project/build/web-mobile"
    echo ""
}

if [ "$1" == "" ]; then
    showHelp;
    exit 1
fi

BUILD_DIR=$1

cd "$BUILD_DIR"
BUILD_DIR=`pwd`

echo "BUILD_DIR=$BUILD_DIR"

cd "$CUR_DIR/src"
lua convert-creator-build.lua "$BUILD_DIR"


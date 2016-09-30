#!/bin/bash
CURRENT_DIR=$(dirname "$0")
DEST_DIR="$HOME/.CocosCreator/packages/"

mkdir -p -v $DEST_DIR
cd $DEST_DIR

cd "$CURRENT_DIR/../Resources/dists/"
cp -Rf . "$DEST_DIR"

cd "$CURRENT_DIR/../Resources"
ICON_PATH="$(pwd)/Icon.icns"

MESSGE="Install Completed. Enjoy It!\n\nHow to use:\n  1. Launch Creator, open your Creator project\n  2. Choose menu 'Project -> Legacy Support -> Setup Target Project\n  3. Copy support library and Build\n\nMore information please check\nhttps://github.com/cocos-creator/creator-lua"
TITLE="Install Creator Legacy Support"

CMD="tell app \"System Events\" to display dialog \"$MESSGE\" buttons \"OK\" with icon POSIX file \"$ICON_PATH\" with title \"$TITLE\""
osascript -e "$CMD"


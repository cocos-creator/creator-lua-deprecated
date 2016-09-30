#!/bin/bash
CURRENT_DIR=$(cd "$(dirname $0)" && pwd)

PACKAGE_NAME="creator-legacy-support"
APP_NAME="Install Legacy Support"
APP_DIR="$CURRENT_DIR/$APP_NAME.app"
DISTS_DIR="$APP_DIR/Contents/Resources/dists/$PACKAGE_NAME"
PACKAGE_SRCDIR="$CURRENT_DIR/../../creator-project/packages/$PACKAGE_NAME/"
PACKAGE_VERSION=$( sed -n 's/.*"version": "\(.*\)",/\1/p' "$PACKAGE_SRCDIR/package.json" )
DMG_FILENAME="Install-Creator-Legacy-Support-$PACKAGE_VERSION.dmg"
CONFIG_FILENAME="install-dmg.json"
TEMP_CONFIG_FILENAME="install-dmg-work.json"

sed "s/VERSION/$PACKAGE_VERSION/g" "$CONFIG_FILENAME" > "$TEMP_CONFIG_FILENAME"

mkdir -p "$DISTS_DIR"

cd "$DISTS_DIR"
cp -R "$PACKAGE_SRCDIR" .

cd "$CURRENT_DIR"

if [ -f "$DMG_FILENAME" ]; then
    rm "$DMG_FILENAME"
fi

appdmg "$TEMP_CONFIG_FILENAME" "$DMG_FILENAME"
rm "$TEMP_CONFIG_FILENAME"

open .


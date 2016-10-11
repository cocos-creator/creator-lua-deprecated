
[Setup]
AppName=Creator Lua Support
AppVersion=1.1.2
AppCopyright=Copyright (C) 2015 Chukong Aipu
AppPublisher=Chukong Aipu
AppPublisherURL=http://www.cocos.com/
DefaultDirName={%USERPROFILE}\.CocosCreator\packages\creator-lua-support
DisableDirPage=yes
UninstallDisplayIcon={app}\Icon.ico
Compression=lzma2
SolidCompression=yes
SourceDir=..\..\creator-project\packages
OutputDir=..\..\installer\win
OutputBaseFilename=Creator-Lua-Support-1.1.2-win
SetupIconFile=..\..\installer\assets\Icon.ico

[Files]
Source: "creator-lua-support\*"; DestDir: "{app}"; Flags: recursesubdirs
Source: "..\..\installer\assets\Icon.ico"; DestDir: "{app}"

[Messages]
SetupWindowTitle=Setup - %1 1.1.2


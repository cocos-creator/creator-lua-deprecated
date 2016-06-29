@echo off

set CUR_DIR=%~dp0%
echo %CUR_DIR%

if "%1" == "" (
    echo Convert Cocos Creator web-mobile build to Lua project.
    echo:
    echo usage: convert-creator-build.bat CREATOR_BUILD_DIR
    echo:
    echo example:
    echo   convert-creator-build.bat ..\creator-project\build\web-mobile
    echo:
)

cd %1

for /f "delims=" %%i in ('cd') do set BUILD_DIR=%%i

echo BUILD_DIR=%BUILD_DIR%
cd %CUR_DIR%
cd src

%CUR_DIR%\..\win32-bin\lua\lua5.1.exe convert-creator-build.lua %BUILD_DIR% %CUR_DIR%

cd %CUR_DIR%


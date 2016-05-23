# Cocos Creator Lua Support

## FEATURES

Current supported features:

-   Canvas
-   Sprite
-   Sprite Sheet
-   Widget
-   Animation (Basic Frame-Animation)
-   Label (System Font)
-   Component with Lifetime events


## TODO

-   UI Libaray
-   Documents


## HOW TO USE


1.  Launch Cocos Creator, open "creator-project"
2.  Select menu "Project -> Build"
3.  Select platform "Web Mobile" and check "Select All"
4.  Click "Build"

    ![](docs/build.png)

5.  Open Terminal
6.  Run :

    ```bash
    lua convertor/convert creator-project/build/web-mobile/ lua-project/
    ```

7.  Check log:

    ```txt
    Read file creator-project/build/web-mobile//res/import/9d/9df8c79e-2667-49f3-ae87-985ceaa8f38a.json
    Read file creator-project/build/web-mobile//res/import/14/14632310-dc12-4107-8ca5-54617bb57050.json
    Read file creator-project/build/web-mobile//res/import/43/434ed300-4f72-43fc-9b66-15bb1f870ff1.json
    Read file creator-project/build/web-mobile//res/import/1f/1f3de62e-4a93-401c-867e-28c4c014315d.json
    Read file creator-project/build/web-mobile//res/import/d8/d8242628-a86c-428e-a06a-a1004872ff53.json
    Write file lua-project//src/assets/assets.lua
    Write file lua-project//src/assets/assets.json
    Write file lua-project//src/assets/files.lua
    Write file lua-project//src/assets/files.json
    Write file lua-project//src/assets/prefabs.lua
    Write file lua-project//src/assets/prefabs.json
    Copy file lua-project//res/raw-assets/Sprite/MapA0002Bg.png
    Copy file lua-project//res/raw-assets/Sprite/box_200x200.png
    Copy file lua-project//res/raw-assets/Sprite/SheetMapBattle.png
    Copy file lua-project//res/raw-assets/Sprite/star.png
    ```

8.  Run :

    ```
    cd lua-project
    cocos run -p mac
    ```


    ![](docs/play-scene.gif)


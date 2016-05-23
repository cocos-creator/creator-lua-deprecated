cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        shipPrefab: {
            default: null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function () {
        for (var i = 0; i < 60; i++) {
            var ship = cc.instantiate(this.shipPrefab);
            var pos = cc.p(Math.random() * 800 - 400, Math.random() * 60 + 30);
            ship.setPosition(pos);
            ship.setLocalZOrder(50 - pos.y);
            this.node.addChild(ship);
        }
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

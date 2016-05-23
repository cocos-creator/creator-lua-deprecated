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
        bulletPrefab: {
            default: null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function () {
        this._lastFire = Math.random() * 2;
        this._fireInterval = Math.random() * 1.7 + 0.8;
        this._speed = Math.random() * 25 + 0.5
        if (Math.random() >= 0.5) {
            this._speed = -this._speed;
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        var node = this.node;
        var pos = node.getPosition();
        pos.x += this._speed * dt;
        node.setPosition(pos);
    
        if ((this._speed < 0 && pos.x < -400) || (this._speed > 0 && pos.x > 400)) {
            this._speed = -this._speed;
        }
    
        if (this._lastFire <= 0) {
            this._fireInterval = Math.random() * 1.7 + 0.8;
            this._lastFire = this._fireInterval;
    
            var bullet = cc.instantiate(this.bulletPrefab);
            var ai = bullet.getComponent("CannonBall01AI");
            ai.hittime = Math.random() * 0.6 + 0.75;
            ai.hitx = pos.x + Math.random() * 400 - 200;
            ai.hity = pos.y - Math.random() * 150 + 50;

            bullet.setPosition(pos);
            bullet.setLocalZOrder(1000);
            node.getParent().addChild(bullet);
        } else {
            this._lastFire = this._lastFire - dt;
        }
    },
});

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
        boomPrefab: {
            default: null,
            type: cc.Prefab
        },
        hitx: 0,
        hity: 0,
        hittime: 0,
        g: -1000
    },

    // use this for initialization
    onLoad: function () {
        var pos = this.node.getPosition();
        this.x = pos.x;
        this.y = pos.y;
        this.time = 0;
        this.over = false;
        
        var ht = this.hittime;
        this.ox = (this.hitx - this.x) / ht;
        this.oy = ((this.hity - this.y) - ((this.g * ht) * (ht / 2))) / ht;
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if (this.over) return;

        this.time = this.time + dt;
        var time = this.time;
    
        var x = this.x + time * this.ox;
        var y = this.y + time * this.oy + this.g * time * time / 2;
        var pos = cc.p(x, y);
        this.node.setPosition(pos);

        if (time >= this.hittime) {
            this.over = true
            this.boom(pos);
        }
    },
    
    boom: function(pos) {
        var boom = cc.instantiate(this.boomPrefab);
        boom.setPosition(pos);
        boom.setLocalZOrder(2000);
        this.node.getParent().addChild(boom);
        boom.getComponent(cc.Animation).play();

        this.node.destroy();
    }
});

require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"BattleGame":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'd6021CL93pPIL8nRQ53eHEO', 'BattleGame');
// Script/BattleGame.js

cc.Class({
    "extends": cc.Component,

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
            "default": null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        for (var i = 0; i < 60; i++) {
            var ship = cc.instantiate(this.shipPrefab);
            var pos = cc.p(Math.random() * 800 - 400, Math.random() * 60 + 30);
            ship.setPosition(pos);
            ship.setLocalZOrder(50 - pos.y);
            this.node.addChild(ship);
        }
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"CannonBall01AI":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'b1386cjbkZPmbhd6eTUv1/r', 'CannonBall01AI');
// Script/CannonBall01AI.js

cc.Class({
    "extends": cc.Component,

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
            "default": null,
            type: cc.Prefab
        },
        hitx: 0,
        hity: 0,
        hittime: 0,
        g: -1000
    },

    // use this for initialization
    onLoad: function onLoad() {
        var pos = this.node.getPosition();
        this.x = pos.x;
        this.y = pos.y;
        this.time = 0;
        this.over = false;

        var ht = this.hittime;
        this.ox = (this.hitx - this.x) / ht;
        this.oy = (this.hity - this.y - this.g * ht * (ht / 2)) / ht;
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this.over) return;

        this.time = this.time + dt;
        var time = this.time;

        var x = this.x + time * this.ox;
        var y = this.y + time * this.oy + this.g * time * time / 2;
        var pos = cc.p(x, y);
        this.node.setPosition(pos);

        if (time >= this.hittime) {
            this.over = true;
            this.boom(pos);
        }
    },

    boom: function boom(pos) {
        var boom = cc.instantiate(this.boomPrefab);
        boom.setPosition(pos);
        boom.setLocalZOrder(2000);
        this.node.getParent().addChild(boom);
        boom.getComponent(cc.Animation).play();

        this.node.destroy();
    }
});

cc._RFpop();
},{}],"CannonBoom0001AI":[function(require,module,exports){
"use strict";
cc._RFpush(module, '1c331BKMU9GrLOZYdHgU77g', 'CannonBoom0001AI');
// Script/CannonBoom0001AI.js

cc.Class({
    "extends": cc.Component,

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
    },

    // use this for initialization
    onLoad: function onLoad() {},

    playdone: function playdone() {
        this.node.destroy();
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"ShipAI":[function(require,module,exports){
"use strict";
cc._RFpush(module, '70f2bGvo4dBJrus4YDn4XDa', 'ShipAI');
// Script/ShipAI.js

cc.Class({
    "extends": cc.Component,

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
            "default": null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this._lastFire = Math.random() * 2;
        this._fireInterval = Math.random() * 1.7 + 0.8;
        this._speed = Math.random() * 25 + 0.5;
        if (Math.random() >= 0.5) {
            this._speed = -this._speed;
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        var node = this.node;
        var pos = node.getPosition();
        pos.x += this._speed * dt;
        node.setPosition(pos);

        if (this._speed < 0 && pos.x < -400 || this._speed > 0 && pos.x > 400) {
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
    }
});

cc._RFpop();
},{}]},{},["CannonBoom0001AI","ShipAI","CannonBall01AI","BattleGame"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9Db2Nvc0NyZWF0b3IuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXNzZXRzL1NjcmlwdC9CYXR0bGVHYW1lLmpzIiwiYXNzZXRzL1NjcmlwdC9DYW5ub25CYWxsMDFBSS5qcyIsImFzc2V0cy9TY3JpcHQvQ2Fubm9uQm9vbTAwMDFBSS5qcyIsImFzc2V0cy9TY3JpcHQvU2hpcEFJLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2Q2MDIxQ0w5M3BQSUw4blJRNTNlSEVPJywgJ0JhdHRsZUdhbWUnKTtcbi8vIFNjcmlwdC9CYXR0bGVHYW1lLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICAgICAgc2hpcFByZWZhYjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2MDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc2hpcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2hpcFByZWZhYik7XG4gICAgICAgICAgICB2YXIgcG9zID0gY2MucChNYXRoLnJhbmRvbSgpICogODAwIC0gNDAwLCBNYXRoLnJhbmRvbSgpICogNjAgKyAzMCk7XG4gICAgICAgICAgICBzaGlwLnNldFBvc2l0aW9uKHBvcyk7XG4gICAgICAgICAgICBzaGlwLnNldExvY2FsWk9yZGVyKDUwIC0gcG9zLnkpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHNoaXApO1xuICAgICAgICB9XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYjEzODZjamJrWlBtYmhkNmVUVXYxL3InLCAnQ2Fubm9uQmFsbDAxQUknKTtcbi8vIFNjcmlwdC9DYW5ub25CYWxsMDFBSS5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgICAgIGJvb21QcmVmYWI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIGhpdHg6IDAsXG4gICAgICAgIGhpdHk6IDAsXG4gICAgICAgIGhpdHRpbWU6IDAsXG4gICAgICAgIGc6IC0xMDAwXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgcG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIHRoaXMueCA9IHBvcy54O1xuICAgICAgICB0aGlzLnkgPSBwb3MueTtcbiAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgdGhpcy5vdmVyID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIGh0ID0gdGhpcy5oaXR0aW1lO1xuICAgICAgICB0aGlzLm94ID0gKHRoaXMuaGl0eCAtIHRoaXMueCkgLyBodDtcbiAgICAgICAgdGhpcy5veSA9ICh0aGlzLmhpdHkgLSB0aGlzLnkgLSB0aGlzLmcgKiBodCAqIChodCAvIDIpKSAvIGh0O1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLm92ZXIpIHJldHVybjtcblxuICAgICAgICB0aGlzLnRpbWUgPSB0aGlzLnRpbWUgKyBkdDtcbiAgICAgICAgdmFyIHRpbWUgPSB0aGlzLnRpbWU7XG5cbiAgICAgICAgdmFyIHggPSB0aGlzLnggKyB0aW1lICogdGhpcy5veDtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnkgKyB0aW1lICogdGhpcy5veSArIHRoaXMuZyAqIHRpbWUgKiB0aW1lIC8gMjtcbiAgICAgICAgdmFyIHBvcyA9IGNjLnAoeCwgeSk7XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3MpO1xuXG4gICAgICAgIGlmICh0aW1lID49IHRoaXMuaGl0dGltZSkge1xuICAgICAgICAgICAgdGhpcy5vdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYm9vbShwb3MpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGJvb206IGZ1bmN0aW9uIGJvb20ocG9zKSB7XG4gICAgICAgIHZhciBib29tID0gY2MuaW5zdGFudGlhdGUodGhpcy5ib29tUHJlZmFiKTtcbiAgICAgICAgYm9vbS5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICBib29tLnNldExvY2FsWk9yZGVyKDIwMDApO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuYWRkQ2hpbGQoYm9vbSk7XG4gICAgICAgIGJvb20uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xuXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcxYzMzMUJLTVU5R3JMT1pZZEhnVTc3ZycsICdDYW5ub25Cb29tMDAwMUFJJyk7XG4vLyBTY3JpcHQvQ2Fubm9uQm9vbTAwMDFBSS5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG5cbiAgICBwbGF5ZG9uZTogZnVuY3Rpb24gcGxheWRvbmUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNzBmMmJHdm80ZEJKcnVzNFlEbjRYRGEnLCAnU2hpcEFJJyk7XG4vLyBTY3JpcHQvU2hpcEFJLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICAgICAgYnVsbGV0UHJlZmFiOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLl9sYXN0RmlyZSA9IE1hdGgucmFuZG9tKCkgKiAyO1xuICAgICAgICB0aGlzLl9maXJlSW50ZXJ2YWwgPSBNYXRoLnJhbmRvbSgpICogMS43ICsgMC44O1xuICAgICAgICB0aGlzLl9zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAyNSArIDAuNTtcbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPj0gMC41KSB7XG4gICAgICAgICAgICB0aGlzLl9zcGVlZCA9IC10aGlzLl9zcGVlZDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5ub2RlO1xuICAgICAgICB2YXIgcG9zID0gbm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICBwb3MueCArPSB0aGlzLl9zcGVlZCAqIGR0O1xuICAgICAgICBub2RlLnNldFBvc2l0aW9uKHBvcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3NwZWVkIDwgMCAmJiBwb3MueCA8IC00MDAgfHwgdGhpcy5fc3BlZWQgPiAwICYmIHBvcy54ID4gNDAwKSB7XG4gICAgICAgICAgICB0aGlzLl9zcGVlZCA9IC10aGlzLl9zcGVlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9sYXN0RmlyZSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9maXJlSW50ZXJ2YWwgPSBNYXRoLnJhbmRvbSgpICogMS43ICsgMC44O1xuICAgICAgICAgICAgdGhpcy5fbGFzdEZpcmUgPSB0aGlzLl9maXJlSW50ZXJ2YWw7XG5cbiAgICAgICAgICAgIHZhciBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZWZhYik7XG4gICAgICAgICAgICB2YXIgYWkgPSBidWxsZXQuZ2V0Q29tcG9uZW50KFwiQ2Fubm9uQmFsbDAxQUlcIik7XG4gICAgICAgICAgICBhaS5oaXR0aW1lID0gTWF0aC5yYW5kb20oKSAqIDAuNiArIDAuNzU7XG4gICAgICAgICAgICBhaS5oaXR4ID0gcG9zLnggKyBNYXRoLnJhbmRvbSgpICogNDAwIC0gMjAwO1xuICAgICAgICAgICAgYWkuaGl0eSA9IHBvcy55IC0gTWF0aC5yYW5kb20oKSAqIDE1MCArIDUwO1xuXG4gICAgICAgICAgICBidWxsZXQuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgICAgICAgIGJ1bGxldC5zZXRMb2NhbFpPcmRlcigxMDAwKTtcbiAgICAgICAgICAgIG5vZGUuZ2V0UGFyZW50KCkuYWRkQ2hpbGQoYnVsbGV0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2xhc3RGaXJlID0gdGhpcy5fbGFzdEZpcmUgLSBkdDtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiXX0=

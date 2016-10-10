require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"ActionCallback":[function(require,module,exports){
"use strict";
cc._RFpush(module, '2881e6K1edLBbgvc+6/YN7o', 'ActionCallback');
// cases/05_scripting/03_events/ActionCallback.js

cc.Class({
    'extends': cc.Component,

    // use this for initialization
    onLoad: function onLoad() {
        var touchEvent = this.getComponent('TouchEvent');
        var mouseEvent = this.getComponent('MouseEvent');
        var event = touchEvent || mouseEvent;
        event._callback = function () {
            this.node.runAction(cc.sequence(cc.scaleTo(0.5, 2, 1), cc.scaleTo(0.25, 1, 1)));
        };
    }
});

cc._RFpop();
},{}],"AdTracking":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'fbc3e0HnD1NP7p7Ek1n8IQe', 'AdTracking');
// cases/anysdk/08_adtracking/AdTracking.js

cc.Class({
      "extends": cc.Component,

      properties: {},

      // use this for initialization
      onLoad: function onLoad() {
            if (cc.sys.isMobile) {
                  this.adTrackingPlugin = anysdk.agentManager.getAdTrackingPlugin();
            }
      },

      onRegister: function onRegister() {
            if (!this.adTrackingPlugin) return;
            this.adTrackingPlugin.onRegister("userid");
      },

      onLogin: function onLogin() {
            if (!this.adTrackingPlugin) return;
            var info = {
                  "User_Id": "123456",
                  "Role_Id": "test",
                  "Role_Name": "test"
            };
            this.adTrackingPlugin.onLogin(info);
      },

      onPay: function onPay() {
            if (!this.adTrackingPlugin) return;
            var myDate = new Date();
            var info = {
                  "User_Id": "123456",
                  "Order_Id": myDate.toLocaleTimeString(),
                  "Currency_Amount": "5",
                  "Currency_Type": "CNY",
                  "Payment_Type": "test",
                  "Payment_Time": myDate.toLocaleTimeString()
            };
            this.adTrackingPlugin.onPay(info);
      },

      trackEvent: function trackEvent() {
            if (!this.adTrackingPlugin) return;
            this.adTrackingPlugin.trackEvent("event_1");
            this.adTrackingPlugin.trackEvent("event_2");
      },

      onCreateRole: function onCreateRole() {
            if (!this.adTrackingPlugin || !this.adTrackingPlugin.onCreateRole) return;
            var info = {
                  "User_Id": "123456",
                  "Role_Id": "test",
                  "Role_Name": "test"
            };
            this.adTrackingPlugin.trackEvent("onCreateRole", info);
      },

      onLevelUp: function onLevelUp() {
            if (!this.adTrackingPlugin || !this.adTrackingPlugin.onLevelUp) return;
            var info = {
                  "User_Id": "123456",
                  "Role_Id": "test",
                  "Role_Name": "test",
                  "Level": "10"
            };
            this.adTrackingPlugin.trackEvent("onLevelUp", info);
      },
      onStartToPay: function onStartToPay() {
            if (!this.adTrackingPlugin || !this.adTrackingPlugin.onStartToPay) return;
            var myDate = new Date();
            var info = {
                  "User_Id": "123456",
                  "Order_Id": myDate.toLocaleTimeString(),
                  "Currency_Amount": "5",
                  "Currency_Type": "CNY",
                  "Payment_Type": "test",
                  "Payment_Time": myDate.toLocaleTimeString()
            };
            this.adTrackingPlugin.trackEvent("onStartToPay", info);
      }

});

cc._RFpop();
},{}],"AdaptiveSprite":[function(require,module,exports){
"use strict";
cc._RFpush(module, '4edf1JTF/BHIKZVY3FaAqsT', 'AdaptiveSprite');
// scripts/Global/AdaptiveSprite.js

cc.Class({
    "extends": cc.Component,

    properties: {

        padding: 20,

        label: {
            "default": null,
            type: cc.Node
        },

        backgroup: {
            "default": null,
            type: cc.Node
        }

    },

    update: function update() {
        if (this.backgroup.width !== this.label.width) {
            this.backgroup.width = this.label.width + this.padding;
        }
        if (this.backgroup.height !== this.label.height) {
            this.backgroup.height = this.label.height + this.padding;
        }
    }

});

cc._RFpop();
},{}],"Ads":[function(require,module,exports){
"use strict";
cc._RFpush(module, '5260bXDtylBwYTkP2GSV9zc', 'Ads');
// cases/anysdk/04_ads/Ads.js

cc.Class({
											'extends': cc.Component,

											properties: {},

											// use this for initialization
											onLoad: function onLoad() {
																						if (cc.sys.isMobile) {
																																	this.adsPlugin = anysdk.agentManager.getAdsPlugin();
																																	if (this.adsPlugin) {
																																												this.adsPlugin.setListener(this.onAdsResult, this);
																																	}
																						}
											},

											preloadAds: function preloadAds() {
																						if (!this.adsPlugin || !this.adsPlugin.isAdTypeSupported(anysdk.AdsType.AD_TYPE_BANNER)) return;
																						this.adsPlugin.preloadAds(anysdk.AdsType.AD_TYPE_BANNER);
											},

											showAds: function showAds() {
																						if (!this.adsPlugin || !this.adsPlugin.isAdTypeSupported(anysdk.AdsType.AD_TYPE_BANNER)) return;
																						this.adsPlugin.showAds(anysdk.AdsType.AD_TYPE_BANNER);
											},

											hideAds: function hideAds() {
																						if (!this.adsPlugin || !this.adsPlugin.isAdTypeSupported(anysdk.AdsType.AD_TYPE_BANNER)) return;
																						this.adsPlugin.hideAds(anysdk.AdsType.AD_TYPE_BANNER);
											},

											queryPoints: function queryPoints() {
																						if (!this.adsPlugin) return;
																						var point = this.adsPlugin.queryPoints();
																						cc.log('########## queryPoints ########## : ' + point);
											},

											spendPoints: function spendPoints() {
																						if (!this.adsPlugin) return;
																						this.adsPlugin.spendPoints(1);
											},

											onAdsResult: function onAdsResult(code, msg) {
																						cc.log('########## ADS RESULT ########## code: ' + code + ',msg: ' + msg);
																						switch (code) {
																																	case anysdk.AdsResultCode.kAdsReceived:
																																												cc.log("########## kAdsReceived ##########");
																																												break;
																																	case anysdk.AdsResultCode.kAdsShown:
																																												cc.log("########## kAdsShown ##########");
																																												break;
																																	case anysdk.AdsResultCode.kAdsDismissed:
																																												cc.log("########## kAdsDismissed ##########");
																																												break;
																																	case anysdk.AdsResultCode.kPointsSpendSucceed:
																																												cc.log("########## kPointsSpendSucceed ##########");
																																												break;
																																	case anysdk.AdsResultCode.kPointsSpendFailed:
																																												cc.log("########## kPointsSpendFailed ##########");
																																												break;
																																	case anysdk.AdsResultCode.kNetworkError:
																																												cc.log("########## kNetworkError ##########");
																																												break;
																																	case anysdk.AdsResultCode.kUnknownError:
																																												cc.log("########## kUnknownError ##########");
																																												break;
																																	case anysdk.AdsResultCode.kOfferWallOnPointsChanged:
																																												cc.log("########## kOfferWallOnPointsChanged ##########");
																																												break;
																																	default:
																																												break;
																						}
											}

});

cc._RFpop();
},{}],"Analytics":[function(require,module,exports){
"use strict";
cc._RFpush(module, '330353g9fpGm4X4QOvi6/GB', 'Analytics');
// cases/anysdk/05_analytics/Analytics.js

cc.Class({
	'extends': cc.Component,

	properties: {},

	// use this for initialization
	onLoad: function onLoad() {
		if (cc.sys.isMobile) {
			this.analyticsPlugin = anysdk.agentManager.getAnalyticsPlugin();
		}
	},

	startSession: function startSession() {
		if (!this.analyticsPlugin) return;
		this.analyticsPlugin.startSession();
	},

	stopSession: function stopSession() {
		if (!this.analyticsPlugin) return;
		this.analyticsPlugin.stopSession();
	},

	setSessionContinueMillis: function setSessionContinueMillis() {
		if (!this.analyticsPlugin) return;
		this.analyticsPlugin.setSessionContinueMillis(100);
	},

	logError: function logError() {
		if (!this.analyticsPlugin) return;
		this.analyticsPlugin.logError('error', 'errMsg');
	},

	logEvent: function logEvent(eventID, paramMap) {
		if (!this.analyticsPlugin) return;
		this.analyticsPlugin.logEvent('error');
		this.analyticsPlugin.logEvent('error', { 'errMsg': 'errMsg' });
	},

	logTimedEventBegin: function logTimedEventBegin() {
		if (!this.analyticsPlugin) return;
		this.analyticsPlugin.logTimedEventBegin('errorbegin');
	},

	logTimedEventEnd: function logTimedEventEnd() {
		if (!this.analyticsPlugin) return;
		this.analyticsPlugin.logTimedEventEnd('errorend');
	},

	setAccount: function setAccount() {
		if (!this.analyticsPlugin || !this.analyticsPlugin.setAccount) return;
		var paramMap = {
			'Account_Id': '123456',
			'Account_Name': 'test',
			'Account_Type': anysdk.AccountType.ANONYMOUS.toString(),
			'Account_Level': '1',
			'Account_Age': '1',
			'Account_Operate': anysdk.AccountOperate.LOGIN.toString(),
			'Account_Gender': anysdk.AccountGender.MALE.toString(),
			'Server_Id': '1'
		};
		this.analyticsPlugin.setAccount(paramMap);
	},

	onChargeRequest: function onChargeRequest() {
		if (!this.analyticsPlugin || !this.analyticsPlugin.onChargeRequest) return;
		var paramMap = {
			'Order_Id': '123456',
			'Product_Name': 'test',
			'Currency_Amount': '2.0',
			'Currency_Type': 'CNY',
			'Payment_Type': '渠道',
			'Virtual_Currency_Amount': '100'
		};
		this.analyticsPlugin.onChargeRequest(paramMap);
	},

	onChargeOnlySuccess: function onChargeOnlySuccess() {
		if (!this.analyticsPlugin || !this.analyticsPlugin.onChargeOnlySuccess) return;
		var paramMap = {
			'Order_Id': '123456',
			'Product_Name': 'test',
			'Currency_Amount': '2.0',
			'Currency_Type': '1',
			'Payment_Type': '1',
			'Virtual_Currency_Amount': '100'
		};
		this.analyticsPlugin.onChargeOnlySuccess(paramMap);
	},

	onChargeSuccess: function onChargeSuccess() {
		if (!this.analyticsPlugin || !this.analyticsPlugin.onChargeSuccess) return;
		this.analyticsPlugin.onChargeSuccess('123456');
	},

	onChargeFail: function onChargeFail() {
		if (!this.analyticsPlugin || !this.analyticsPlugin.onChargeFail) return;
		var paramMap = {
			'Order_Id': '123456',
			'Fail_Reason': 'test'
		};
		this.analyticsPlugin.onChargeFail(paramMap);
	},

	onPurchase: function onPurchase() {
		if (!this.analyticsPlugin || !this.analyticsPlugin.onPurchase) return;
		var paramMap = {
			'Item_Id': '123456',
			'Item_Type': 'test',
			'Item_Count': '2',
			'Virtual_Currency': '1',
			'Currency_Type': anysdk.agentManager.getChannelId()
		};
		this.analyticsPlugin.onPurchase(paramMap);
	},

	onUse: function onUse() {
		if (!this.analyticsPlugin || !this.analyticsPlugin.onUse) return;
		var paramMap = {
			'Item_Id': '123456',
			'Item_Type': 'test',
			'Item_Count': '2',
			'Use_Reason': '1'
		};
		this.analyticsPlugin.onUse(paramMap);
	},

	onReward: function onReward() {
		if (!this.analyticsPlugin || !this.analyticsPlugin.onReward) return;
		var paramMap = {
			'Item_Id': '123456',
			'Item_Type': 'test',
			'Item_Count': '2',
			'Use_Reason': '1'
		};
		this.analyticsPlugin.onReward(paramMap);
	},

	startLevel: function startLevel() {
		if (!this.analyticsPlugin || !this.analyticsPlugin.startLevel) return;
		var paramMap = {
			'Level_Id': '123456',
			'Seq_Num': '1'
		};
		this.analyticsPlugin.startLevel(paramMap);
	},

	finishLevel: function finishLevel() {
		if (!this.analyticsPlugin || !this.analyticsPlugin.finishLevel) return;
		this.analyticsPlugin.finishLevel('123456');
	},

	failLevel: function failLevel() {
		if (!this.analyticsPlugin || !this.analyticsPlugin.failLevel) return;
		var paramMap = {
			'Level_Id': '123456',
			'Fail_Reason': 'test'
		};
		this.analyticsPlugin.failLevel(paramMap);
	},

	startTask: function startTask() {
		if (!this.analyticsPlugin || !this.analyticsPlugin.startTask) return;
		var paramMap = {
			'Task_Id': '123456',
			'Task_Type': anysdk.TaskType.GUIDE_LINE.toString()
		};
		this.analyticsPlugin.startTask(paramMap);
	},

	finishTask: function finishTask() {
		if (!this.analyticsPlugin || !this.analyticsPlugin.finishTask) return;
		this.analyticsPlugin.finishTask('123456');
	},

	failTask: function failTask() {
		if (!this.analyticsPlugin || !this.analyticsPlugin.failTask) return;
		var paramMap = {
			'Task_Id': '123456',
			'Fail_Reason': 'test'
		};
		this.analyticsPlugin.failTask(paramMap);
	}

});

cc._RFpop();
},{}],"AnimateCustomPropertyCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'fb14cmn7KJJCo4qVcOy/GmS', 'AnimateCustomPropertyCtrl');
// cases/03_gameplay/03_animation/AnimateCustomProperty/AnimateCustomPropertyCtrl.js

cc.Class({
    "extends": cc.Component,

    properties: {
        hp: 0,
        emissionRote: 0,
        num: 0,
        hpBar: {
            "default": null,
            type: cc.ProgressBar
        },
        particle: {
            "default": null,
            type: cc.ParticleSystem
        },
        score: {
            "default": null,
            type: cc.Label
        }
    },

    update: function update(dt) {
        this.hpBar.progress = this.hp;
        this.particle.emissionRate = this.emissionRote;
        this.score.string = Math.ceil(this.num);
    }
});

cc._RFpop();
},{}],"AnimationCallback":[function(require,module,exports){
"use strict";
cc._RFpush(module, '3d311umYuNAM61hHscTxwkq', 'AnimationCallback');
// cases/03_gameplay/03_animation/AnimationCallback.js

cc.Class({
    'extends': cc.Component,

    properties: {
        playLabel: {
            'default': null,
            type: cc.Label
        },

        pauseLabel: {
            'default': null,
            type: cc.Label
        },

        stateLabel: {
            'default': null,
            type: cc.Label
        },

        animation: {
            'default': null,
            type: cc.Animation
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var animation = this.animation;

        animation.on('play', this.onPlay, this);
        animation.on('stop', this.onStop, this);
        animation.on('lastframe', this.onLastFrame, this);
        animation.on('finished', this.onFinished, this);
        animation.on('pause', this.onPause, this);
        animation.on('resume', this.onResume, this);
    },

    onPlayButtonClicked: function onPlayButtonClicked() {
        if (this.playLabel.string === 'play') {
            this.playLabel.string = 'stop';
            this.animation.play('linear');
        } else {
            this.playLabel.string = 'play';
            this.animation.stop('linear');
        }
    },

    onPauseButtonClicked: function onPauseButtonClicked() {
        if (this.pauseLabel.string === 'pause') {
            this.pauseLabel.string = 'resume';
            this.animation.pause('linear');
        } else {
            this.pauseLabel.string = 'pause';
            this.animation.resume('linear');
        }
    },

    onPlay: function onPlay() {
        cc.log('onPlay');
        this.stateLabel.string = 'onPlay';
    },

    onStop: function onStop() {
        cc.log('onStop');
        this.stateLabel.string = 'onStop';
        this.playLabel.string = 'play';
    },

    onLastFrame: function onLastFrame() {
        cc.log('onLastFrame');
        this.stateLabel.string = 'onLastFrame';
    },

    onFinished: function onFinished() {
        cc.log('onFinished');
        this.stateLabel.string = 'onFinished';
    },

    onPause: function onPause() {
        cc.log('onPause');
        this.stateLabel.string = 'onPause';
    },

    onResume: function onResume() {
        cc.log('onResume');
        this.stateLabel.string = 'onResume';
    }
});

cc._RFpop();
},{}],"AnimationEvent":[function(require,module,exports){
"use strict";
cc._RFpush(module, '1dc09SR4TdLU74RjGBArlm0', 'AnimationEvent');
// cases/03_gameplay/03_animation/AnimationEvent/AnimationEvent.js

var i18n = require('i18n');

cc.Class({
    'extends': cc.Component,

    properties: {},

    onLoad: function onLoad() {
        var node = cc.find('Canvas/Label');
        this._label = node.getComponent(cc.Label);
        this._animCtrl = this.node.getComponent(cc.Animation);
    },

    onNextAnimation: function onNextAnimation(step) {
        this._animCtrl.play("step_" + step);
        this._label.string = i18n.t("cases/03_gameplay/03_animation/AnimationEvent.js.1") + step + "个动画";
    }
});

cc._RFpop();
},{"i18n":"i18n"}],"AnySDKItem":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'e31f0yL3HBBTbV2OWMTVMCx', 'AnySDKItem');
// cases/anysdk/AnySDKItem.js

cc.Class({
    "extends": cc.Component,

    properties: {
        label: {
            "default": null,
            type: cc.Label
        },
        bg: cc.Sprite,
        btn: cc.Button
    },

    init: function init(menu) {
        this.index = -1;
        this.menu = menu;
    },

    invoke: function invoke() {
        this.menu.invoke(this.index);
    },

    updateItem: function updateItem(idx, y, name) {
        this.index = idx;
        this.node.y = y;
        this.node.x = 100;
        this.label.string = name;
        this.bg.enabled = true;
        this.btn.interactable = true;
    }
});

cc._RFpop();
},{}],"AnySDKList":[function(require,module,exports){
"use strict";
cc._RFpush(module, '4e6b2pY7RBI3KPyFA1iin3p', 'AnySDKList');
// cases/anysdk/AnySDKList.js

cc.Class({
    "extends": cc.Component,

    properties: {
        itemPrefab: {
            "default": null,
            type: cc.Prefab
        },
        scrollView: cc.ScrollView,
        bufferZone: 0, // when item is away from bufferZone, we relocate it
        interfaceList: [cc.String],
        scriptName: ""
    },

    onLoad: function onLoad() {
        this.initItemCount = this.interfaceList.length;
        this.itemList = [];
        this.updateTimer = 0;
        this.updateInterval = 0.2;
        this.lastContentPosY = 0; // use this variable to detect if we are scrolling up or down
        this.initList();
        this.system = this.scrollView.getComponent(this.scriptName);
    },

    // use this for initialization
    initList: function initList() {
        var y = 0;
        this.node.height = (this.interfaceList.length + 1) * 50;
        for (var i = 0; i < this.initItemCount; ++i) {
            var item = cc.instantiate(this.itemPrefab).getComponent('AnySDKItem');
            var itemName = this.interfaceList[i];
            item.init(this);
            this.node.addChild(item.node);
            y -= 50;
            item.updateItem(i, y, itemName);
            this.itemList.push(item);
        }
    },

    invoke: function invoke(index) {
        if (index >= this.interfaceList.length) return;
        this.system[this.interfaceList[index]]();
    },

    getPositionInView: function getPositionInView(item) {
        // get item position in scrollview's node space
        var worldPos = item.parent.convertToWorldSpaceAR(item.position);
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    },

    update: function update(dt) {
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) {
            return; // we don't need to do the math every frame
        }
        this.updateTimer = 0;
        var items = this.itemList;
        var buffer = this.bufferZone;
        var isDown = this.node.y < this.lastContentPosY; // scrolling direction
        var offset = 50 * (this.initItemCount - 1);
        for (var i = 0; i < this.initItemCount; ++i) {
            var item = items[i];
            var itemNode = item.node;
            var viewPos = this.getPositionInView(itemNode);
            if (isDown) {
                // if away from buffer zone and not reaching top of content
                if (viewPos.y < -buffer && itemNode.y + offset < 0) {
                    var newIdx = item.index - (this.initItemCount - 1);
                    var newInfo = this.interfaceList[newIdx];
                    item.updateItem(newIdx, itemNode.y + offset, newInfo);
                }
            } else {
                // if away from buffer zone and not reaching bottom of content
                if (viewPos.y > buffer && itemNode.y - offset > -this.node.height) {
                    var newIdx = item.index + (this.initItemCount - 1);
                    var newInfo = this.interfaceList[newIdx];
                    item.updateItem(newIdx, itemNode.y - offset, newInfo);
                }
            }
        }
        // update lastContentPosY
        this.lastContentPosY = this.node.y;
    }
});

cc._RFpop();
},{}],"AssetLoading":[function(require,module,exports){
"use strict";
cc._RFpush(module, '65aa6czKHtKGZog+yjK1bc6', 'AssetLoading');
// cases/05_scripting/07_asset_loading/AssetLoading/AssetLoading.js

var i18n = require('i18n');

cc.Class({
    "extends": cc.Component,

    properties: {
        showWindow: cc.Node,
        loadAnimTestPrefab: cc.Prefab,
        loadTips: cc.Label,
        loadList: {
            "default": [],
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        // cur load Target
        this._curType = "";
        this._lastType = "";
        this._curRes = null;
        this._btnLabel = null;
        this._audioSource = null;
        this._isLoading = false;
        // add load res url
        this._urls = {
            // Raw Asset
            Audio: "test assets/audio",
            Txt: "test assets/text",
            Texture: "test assets/PurpleMonster",
            Font: "test assets/font",
            // Raw Asset, use raw url
            Plist: cc.url.raw("resources/test assets/atom.plist"),
            // Asset
            SpriteFrame: "test assets/image",
            Prefab: "test assets/prefab",
            Animation: "test assets/sprite-anim",
            Scene: "test assets/scene",
            Spine: "spineboy/spineboy"
        };
        // registered event
        this._onRegisteredEvent();
    },

    _onRegisteredEvent: function _onRegisteredEvent() {
        for (var i = 0; i < this.loadList.length; ++i) {
            this.loadList[i].on(cc.Node.EventType.TOUCH_END, this._onClick.bind(this));
        }
    },

    _onClick: function _onClick(event) {
        if (this._isLoading) {
            return;
        }

        this._onClear();

        this._curType = event.target.name.split('_')[1];
        if (this._lastType !== "" && this._curType === this._lastType) {
            this._onShowResClick(event);
            return;
        }

        if (this._btnLabel) {
            this._btnLabel.textKey = i18n.t("cases/05_scripting/07_asset_loading/AssetLoading.js.1") + this._lastType;
        }

        this._lastType = this._curType;

        this._btnLabel = event.target.getChildByName("Label").getComponent("cc.Label");

        this.loadTips.textKey = this._curType + " Loading....";
        this._isLoading = true;

        this._load();
    },

    _load: function _load() {
        var url = this._urls[this._curType];
        var loadCallBack = this._loadCallBack.bind(this);
        switch (this._curType) {
            case 'SpriteFrame':
                // specify the type to load sub asset from texture's url
                cc.loader.loadRes(url, cc.SpriteFrame, loadCallBack);
                break;
            case 'Spine':
                // specify the type to avoid the duplicated name from spine atlas
                cc.loader.loadRes(url, sp.SkeletonData, loadCallBack);
                break;
            case 'Font':
                cc.loader.loadRes(url, cc.Font, loadCallBack);
                break;
            case 'Animation':
            case 'Prefab':
            case 'Scene':
            case 'Texture':
            case 'Txt':
            case 'Audio':
                cc.loader.loadRes(url, loadCallBack);
                break;
            default:
                cc.loader.load(url, loadCallBack);
                break;
        }
    },

    _loadCallBack: function _loadCallBack(err, res) {
        this._isLoading = false;
        if (err) {
            cc.log('Error url [' + err + ']');
            return;
        }
        this._curRes = res;
        if (this._curType === "Audio") {
            this._btnLabel.textKey = i18n.t("cases/05_scripting/07_asset_loading/AssetLoading.js.2");
        } else {
            this._btnLabel.textKey = i18n.t("cases/05_scripting/07_asset_loading/AssetLoading.js.3");
        }
        this._btnLabel.textKey += this._curType;
        this.loadTips.textKey = this._curType + " Loaded Successfully!";
    },

    _onClear: function _onClear() {
        this.showWindow.removeAllChildren(true);
        if (this._audioSource && this._audioSource instanceof cc.AudioSource) {
            this._audioSource.stop();
        }
    },

    _onShowResClick: function _onShowResClick(event) {
        if (this._curType === "Scene") {
            cc.director.runScene(this._curRes.scene);
            cc.loader.releaseAsset(this._curRes);
            this._curRes = null;

            return;
        }
        this._createNode(this._curType, this._curRes);
    },

    _createNode: function _createNode(type, res) {
        this.loadTips.textKey = "";
        var node = new cc.Node("New " + type);
        node.setPosition(0, 0);
        var component = null;
        switch (this._curType) {
            case "SpriteFrame":
                component = node.addComponent(cc.Sprite);
                component.spriteFrame = res;
                break;
            case "Texture":
                component = node.addComponent(cc.Sprite);
                component.spriteFrame = new cc.SpriteFrame(res);
                break;
            case "Audio":
                component = node.addComponent(cc.AudioSource);
                component.clip = res;
                component.play();
                this._audioSource = component;
                this.loadTips.textKey = i18n.t("cases/05_scripting/07_asset_loading/AssetLoading.js.4");
                break;
            case "Txt":
                component = node.addComponent(cc.Label);
                component.lineHeight = 40;
                component.string = res;
                break;
            case "Font":
                component = node.addComponent(cc.Label);
                component.font = res;
                component.lineHeight = 40;
                component.string = "This is BitmapFont!";
                break;
            case "Plist":
                component = node.addComponent(cc.ParticleSystem);
                component.file = this._urls.Plist;
                component.resetSystem();
                break;
            case "Prefab":
                var prefab = cc.instantiate(res);
                prefab.parent = node;
                prefab.setPosition(0, 0);
                break;
            case "Animation":
                var loadAnim = cc.instantiate(this.loadAnimTestPrefab);
                loadAnim.parent = node;
                loadAnim.setPosition(0, 0);
                var AanimCtrl = loadAnim.getComponent(cc.Animation);
                AanimCtrl.addClip(res);
                AanimCtrl.play(res.name);
                break;
            case "Spine":
                component = node.addComponent(sp.Skeleton);
                component.skeletonData = res;
                component.animation = "walk";
                node.y = -248;
                break;
        }
        this.showWindow.addChild(node);
    }
});

cc._RFpop();
},{"i18n":"i18n"}],"AudioControl":[function(require,module,exports){
"use strict";
cc._RFpush(module, '8c95bT2M3hBPIdRDVftiUQG', 'AudioControl');
// cases/04_audio/AudioControl.js

cc.Class({
    "extends": cc.Component,

    properties: {
        musicPlayer: {
            "default": null,
            type: cc.AudioSource
        },
        dingClip: {
            "default": null,
            url: cc.AudioClip
        },
        cheeringClip: {
            "default": null,
            url: cc.AudioClip
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;
        // play audioSource
        self.musicPlayer.play();

        // play ding in 1 sec, play cheering in 2 sec
        setTimeout(function () {
            cc.audioEngine.playEffect(self.dingClip, false);
            setTimeout(function () {
                cc.audioEngine.playEffect(self.cheeringClip, false);
            }, 2000);
        }, 1000);
    },

    // called every frame
    update: function update(dt) {}
});

cc._RFpop();
},{}],"Bar":[function(require,module,exports){
"use strict";
cc._RFpush(module, '990e2c/1VlE9pmwd+Ftseau', 'Bar');
// cases/05_scripting/05_cross_reference/Bar.js

cc.Class({
    'extends': cc.Component,

    properties: function properties() {
        return {
            refToFoo: require('Foo')
        };
    },

    // use this for initialization
    onLoad: function onLoad() {
        var tip = this.node.children[0].getComponent(cc.Label);
        tip.string = this.name + ' has reference to ' + this.refToFoo.name;
    }
});

cc._RFpop();
},{"Foo":"Foo"}],"Bullet":[function(require,module,exports){
"use strict";
cc._RFpush(module, '20d7dzfVhZNh4gNZzwaQgEl', 'Bullet');
// cases/collider/Shooter/Bullet.js

cc.Class({
    "extends": cc.Component,

    properties: {
        speed: 100
    },

    // use this for initialization
    onLoad: function onLoad() {},

    onCollisionEnter: function onCollisionEnter(other, self) {
        this.node.destroy();
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        this.node.y += this.speed * dt;
    }
});

cc._RFpop();
},{}],"ButtonControlCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'e6dc7dWcxxJuofXB7ergGnC', 'ButtonControlCtrl');
// cases/02_ui/03_button/ButtonInScroll/ButtonControlCtrl.js

var i18n = require('i18n');

cc.Class({
    'extends': cc.Component,

    properties: {
        button_1: cc.Button,
        button_2: cc.Button,
        display: cc.Label
    },

    onClickedButton_1: function onClickedButton_1() {
        console.log('button_1 clicked!');
        this.display.textKey = i18n.t("cases/02_ui/03_button/ButtonInScroll.js.1");
    },

    onClickedButton_2: function onClickedButton_2() {
        console.log('button_2 clicked!');
        this.display.textKey = i18n.t("cases/02_ui/03_button/ButtonInScroll.js.2");
    }
});

cc._RFpop();
},{"i18n":"i18n"}],"ButtonInteractable":[function(require,module,exports){
"use strict";
cc._RFpush(module, '18e60T2NZpEwZAunS+2rFMK', 'ButtonInteractable');
// cases/02_ui/03_button/ButtonInteractable/ButtonInteractable.js

var i18n = require('i18n');

cc.Class({
    'extends': cc.Component,

    properties: {
        buttonLeft: {
            'default': null,
            type: cc.Button
        },
        buttonRight: {
            'default': null,
            type: cc.Button
        },
        labelLeft: {
            'default': null,
            type: cc.Label
        },
        labelRight: {
            'default': null,
            type: cc.Label
        }
    },

    onBtnLeftClicked: function onBtnLeftClicked() {
        console.log('Left button clicked!');
        this.buttonLeft.interactable = false;
        this.buttonRight.interactable = true;
        this.updateInfo();
    },

    onBtnRightClicked: function onBtnRightClicked() {
        console.log('Right button clicked!');
        this.buttonRight.interactable = false;
        this.buttonLeft.interactable = true;
        this.updateInfo();
    },

    updateInfo: function updateInfo() {
        this.labelLeft.textKey = i18n.t("cases/02_ui/03_button/ButtonInteractable.js.1") + this.buttonLeft.interactable;
        this.labelRight.textKey = i18n.t("cases/02_ui/03_button/ButtonInteractable.js.2") + this.buttonRight.interactable;
    }
});

cc._RFpop();
},{"i18n":"i18n"}],"ColliderListener":[function(require,module,exports){
"use strict";
cc._RFpush(module, '9d60fXxtXFNeI79PM6EXYuZ', 'ColliderListener');
// cases/collider/Category/ColliderListener.js

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
    onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;

        this.touchingNumber = 0;
    },

    onCollisionEnter: function onCollisionEnter(other) {
        this.node.color = cc.Color.RED;
        this.touchingNumber++;
    },

    onCollisionStay: function onCollisionStay(other) {
        // console.log('on collision stay');
    },

    onCollisionExit: function onCollisionExit() {
        this.touchingNumber--;
        if (this.touchingNumber === 0) {
            this.node.color = cc.Color.WHITE;
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"ComeBackToAssetLoad":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'cb585k+cxFKjohloTN1+FuU', 'ComeBackToAssetLoad');
// cases/05_scripting/07_asset_loading/AssetLoading/ComeBackToAssetLoad.js

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

    onComeBlack: function onComeBlack() {
        cc.director.loadScene("AssetLoading.fire");
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"Crash":[function(require,module,exports){
"use strict";
cc._RFpush(module, '1638cyvHWlJ5p3M05Ulzh9Q', 'Crash');
// cases/anysdk/09_crash/Crash.js

cc.Class({
    'extends': cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        if (cc.sys.isMobile) {
            this.crashPlugin = anysdk.agentManager.getCrashPlugin();
        }
    },

    setUserIdentifier: function setUserIdentifier() {
        if (!this.crashPlugin) return;
        this.crashPlugin.setUserIdentifier('AnySDK');
    },

    reportException: function reportException() {
        if (!this.crashPlugin) return;
        this.crashPlugin.reportException('error', 'AnySDK');
    },

    leaveBreadcrumb: function leaveBreadcrumb() {
        if (!this.crashPlugin) return;
        this.crashPlugin.leaveBreadcrumb('AnySDK');
    }

});

cc._RFpop();
},{}],"CreateClipCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, '0c450SopmNKmbcQu50ror3a', 'CreateClipCtrl');
// cases/03_gameplay/03_animation/CreateClip/CreateClipCtrl.js

cc.Class({
    'extends': cc.Component,

    // use this for initialization
    onLoad: function onLoad() {
        var animation = this.getComponent(cc.Animation);

        cc.loader.loadRes("test assets/atlas", cc.SpriteAtlas, function (err, atlas) {
            var spriteFrames = atlas.getSpriteFrames();

            var clip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, 10);
            clip.name = 'run';
            clip.wrapMode = cc.WrapMode.Loop;

            animation.addClip(clip);
            animation.play('run');
        });
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"CustomEvent":[function(require,module,exports){
"use strict";
cc._RFpush(module, '5cc23aoYcxIKazRFwKWGEI7', 'CustomEvent');
// cases/05_scripting/03_events/CustomEvent.js

cc.Class({
    'extends': cc.Component,

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
    onLoad: function onLoad() {
        var touchEvent = this.getComponent('TouchEvent');

        // Emit CUSTOM_EVENT to its listeners while touch end
        touchEvent._callback = (function () {
            this.node.emit('CUSTOM_EVENT');
        }).bind(this);

        var addButton = cc.find('Canvas/add');
        var cancelButton = cc.find('Canvas/cancel');

        function onCustomEvent(event) {
            this.runAction(cc.sequence(cc.scaleTo(0.5, 2, 1), cc.scaleTo(0.25, 1, 1)));
        }

        this.node.on('CUSTOM_EVENT', onCustomEvent, addButton);
        this.node.on('CUSTOM_EVENT', onCustomEvent, cancelButton);
    }
});

cc._RFpop();
},{}],"Desactiver":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'dec21MuxY5K4L8T1bBPGM3r', 'Desactiver');
// cases/05_scripting/03_events/Desactiver.js

cc.Class({
    "extends": cc.Component,

    desactivate: function desactivate() {
        this.node.active = false;
    }
});

cc._RFpop();
},{}],"DestroySelf":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'c07302m/oFJeIq2igPCJbWE', 'DestroySelf');
// cases/05_scripting/06_life_cycle/DestroySelf.js

cc.Class({
    "extends": cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        console.log("Pos: " + this.node.getPosition().x + ", " + this.node.getPosition().y);
        this.node.runAction(cc.sequence(cc.moveBy(2, 200, 0), cc.callFunc(function () {
            console.log("Pos: " + this.node.x + ", " + this.node.y);
            this.node.destroy();
        }, this)));
    }
});

cc._RFpop();
},{}],"DeviceMotionCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, '189c1ckoZZHULnR52/pnCkv', 'DeviceMotionCtrl');
// cases/03_gameplay/01_player_control/DeviceMotion/DeviceMotionCtrl.js

cc.Class({
    "extends": cc.Component,

    properties: {
        speed: 200,
        target: cc.Node
    },

    onLoad: function onLoad() {
        this._time = 0;
        this._acc = { x: 0, y: 0 };
        var screenSize = cc.view.getVisibleSize();
        this._rangeX = screenSize.width / 2 - this.target.width / 2;
        this._rangeY = screenSize.height / 2 - this.target.height / 2;
        cc.inputManager.setAccelerometerEnabled(true);
        cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
    },

    destroy: function destroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
    },

    onDeviceMotionEvent: function onDeviceMotionEvent(event) {
        this._acc.x = event.acc.x;
        this._acc.y = event.acc.y;
    },

    update: function update(dt) {
        this._time += 5;
        var target = this.target;
        target.x += this._acc.x * dt * (this.speed + this._time);
        this.target.x = cc.clampf(target.x, -this._rangeX, this._rangeX);
        target.y += this._acc.y * dt * (this.speed + this._time);
        this.target.y = cc.clampf(target.y, -this._rangeY, this._rangeY);

        if (target.x <= -this._rangeX || target.x >= this._rangeX || target.y <= -this._rangeY || target.y >= this._rangeY) {
            this._time = 0;
        }
    }

});

cc._RFpop();
},{}],"DragonBonesCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, '51a99xQI4JAXqBjenKXSIjl', 'DragonBonesCtrl');
// cases/dragonbones/DragonBonesCtrl.js


var NORMAL_ANIMATION_GROUP = "normal";
var AIM_ANIMATION_GROUP = "aim";
var ATTACK_ANIMATION_GROUP = "attack";
var JUMP_SPEED = -20;
var NORMALIZE_MOVE_SPEED = 3.6;
var MAX_MOVE_SPEED_FRONT = NORMALIZE_MOVE_SPEED * 1.4;
var MAX_MOVE_SPEED_BACK = NORMALIZE_MOVE_SPEED * 1.0;
var WEAPON_R_LIST = ["weapon_1502b_r", "weapon_1005", "weapon_1005b", "weapon_1005c", "weapon_1005d", "weapon_1005e"];
var WEAPON_L_LIST = ["weapon_1502b_l", "weapon_1005", "weapon_1005b", "weapon_1005c", "weapon_1005d"];
var GROUND = -200;
var G = -0.6;

cc.Class({
    "extends": cc.Component,
    editor: {
        requireComponent: dragonBones.ArmatureDisplay
    },

    properties: {
        touchHandler: {
            "default": null,
            type: cc.Node
        },

        upButton: {
            "default": null,
            type: cc.Node
        },

        downButton: {
            "default": null,
            type: cc.Node
        },

        leftButton: {
            "default": null,
            type: cc.Node
        },

        rightButton: {
            "default": null,
            type: cc.Node
        },

        _bullets: [],
        _left: false,
        _right: false,
        _isJumpingA: false,
        _isJumpingB: false,
        _isSquating: false,
        _isAttackingA: false,
        _isAttackingB: false,
        _weaponRIndex: 0,
        _weaponLIndex: 0,
        _faceDir: 1,
        _aimDir: 0,
        _moveDir: 0,
        _aimRadian: 0,
        _speedX: 0,
        _speedY: 0,
        _armature: null,
        _armatureDisplay: null,
        _weaponR: null,
        _weaponL: null,
        _aimState: null,
        _walkState: null,
        _attackState: null,
        _target: cc.p(0, 0)
    },

    // use this for initialization
    onLoad: function onLoad() {
        var _this = this;

        this._armatureDisplay = this.getComponent(dragonBones.ArmatureDisplay);
        this._armature = this._armatureDisplay.armature();

        this._armatureDisplay.addEventListener(dragonBones.EventObject.FADE_IN_COMPLETE, this._animationEventHandler, this);
        this._armatureDisplay.addEventListener(dragonBones.EventObject.FADE_OUT_COMPLETE, this._animationEventHandler, this);

        this._armature.getSlot('effects_1').displayController = NORMAL_ANIMATION_GROUP;
        this._armature.getSlot('effects_2').displayController = NORMAL_ANIMATION_GROUP;

        this._weaponR = this._armature.getSlot('weapon_r').childArmature;
        this._weaponL = this._armature.getSlot('weapon_l').childArmature;
        this._weaponR.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
        this._weaponL.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);

        this._updateAnimation();
        dragonBones.WorldClock.clock.add(this._armature);

        if (this.touchHandler) {
            // touch events
            this.touchHandler.on(cc.Node.EventType.TOUCH_START, function (event) {
                _this.attack(true);
            }, this);
            this.touchHandler.on(cc.Node.EventType.TOUCH_END, function (event) {
                _this.attack(false);
            }, this);
            this.touchHandler.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
                var touches = event.getTouches();
                var touchLoc = touches[0].getLocation();
                _this.aim(touchLoc.x, touchLoc.y);
            }, this);
        }

        if (this.upButton) {
            this.upButton.on(cc.Node.EventType.TOUCH_START, function (event) {
                _this.jump();
            }, this);
        }

        if (this.downButton) {
            this.downButton.on(cc.Node.EventType.TOUCH_START, function (event) {
                _this.squat(true);
            }, this);
            this.downButton.on(cc.Node.EventType.TOUCH_END, function (event) {
                _this.squat(false);
            }, this);
        }

        if (this.leftButton) {
            this.leftButton.on(cc.Node.EventType.TOUCH_START, function (event) {
                _this._left = true;
                _this._updateMove(-1);
            }, this);
            this.leftButton.on(cc.Node.EventType.TOUCH_END, function (event) {
                _this._left = false;
                _this._updateMove(-1);
            }, this);
        }

        if (this.rightButton) {
            this.rightButton.on(cc.Node.EventType.TOUCH_START, function (event) {
                _this._right = true;
                _this._updateMove(1);
            }, this);
            this.rightButton.on(cc.Node.EventType.TOUCH_END, function (event) {
                _this._right = false;
                _this._updateMove(1);
            }, this);
        }

        // keyboard events
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function onKeyPressed(keyCode, event) {
                _this._keyHandler(keyCode, true);
            },
            onKeyReleased: function onKeyReleased(keyCode, event) {
                _this._keyHandler(keyCode, false);
            }
        }, this.node);
    },

    _keyHandler: function _keyHandler(keyCode, isDown) {
        switch (keyCode) {
            case cc.KEY.a:
            case cc.KEY.left:
                this._left = isDown;
                this._updateMove(-1);
                break;
            case cc.KEY.d:
            case cc.KEY.right:
                this._right = isDown;
                this._updateMove(1);
                break;
            case cc.KEY.w:
            case cc.KEY.up:
                if (isDown) {
                    this.jump();
                }
                break;
            case cc.KEY.s:
            case cc.KEY.down:
                this.squat(isDown);
                break;
            case cc.KEY.q:
                if (isDown) {
                    this.switchWeaponR();
                }
                break;
            case cc.KEY.e:
                if (isDown) {
                    this.switchWeaponL();
                }
                break;
            case cc.KEY.space:
                if (isDown) {
                    this.switchWeaponR();
                    this.switchWeaponL();
                }
                break;
            default:
                return;
        }
    },

    _updateMove: function _updateMove(dir) {
        if (this._left && this._right) {
            this.move(dir);
        } else if (this._left) {
            this.move(-1);
        } else if (this._right) {
            this.move(1);
        } else {
            this.move(0);
        }
    },

    move: function move(dir) {
        if (this._moveDir === dir) {
            return;
        }

        this._moveDir = dir;
        this._updateAnimation();
    },

    jump: function jump() {
        if (this._isJumpingA) {
            return;
        }

        this._isJumpingA = true;
        this._armature.animation.fadeIn("jump_1", -1, -1, 0, NORMAL_ANIMATION_GROUP);
        this._walkState = null;
    },

    squat: function squat(isSquating) {
        if (this._isSquating === isSquating) {
            return;
        }

        this._isSquating = isSquating;
        this._updateAnimation();
    },

    attack: function attack(isAttacking) {
        if (this._isAttackingA == isAttacking) {
            return;
        }

        this._isAttackingA = isAttacking;
    },

    switchWeaponL: function switchWeaponL() {
        this._weaponL.removeEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);

        this._weaponLIndex = (this._weaponLIndex + 1) % WEAPON_L_LIST.length;
        var newWeaponName = WEAPON_L_LIST[this._weaponLIndex];
        this._weaponL = this._armatureDisplay.buildArmature(newWeaponName);
        this._armature.getSlot('weapon_l').childArmature = this._weaponL;

        this._weaponL.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
    },

    switchWeaponR: function switchWeaponR() {
        this._weaponR.removeEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);

        this._weaponRIndex = (this._weaponRIndex + 1) % WEAPON_R_LIST.length;
        var newWeaponName = WEAPON_R_LIST[this._weaponRIndex];
        this._weaponR = this._armatureDisplay.buildArmature(newWeaponName);
        this._armature.getSlot('weapon_r').childArmature = this._weaponR;

        this._weaponR.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
    },

    aim: function aim(x, y) {
        if (this._aimDir === 0) {
            this._aimDir = 10;
        }

        this._target = this.node.parent.convertToNodeSpaceAR(cc.p(x, y));
    },

    update: function update(dt) {
        this._updatePosition();
        this._updateAim();
        this._updateAttack();
        this._enterFrameHandler(dt);
    },

    addBullet: function addBullet(bullet) {
        this._bullets.push(bullet);
    },

    _enterFrameHandler: function _enterFrameHandler(dt) {
        for (var i = this._bullets.length - 1; i >= 0; i--) {
            var bullet = this._bullets[i];
            if (bullet.update()) {
                this._bullets.splice(i, 1);
            }
        }
        dragonBones.WorldClock.clock.advanceTime(dt);
    },

    _animationEventHandler: function _animationEventHandler(event) {
        if (event.type === dragonBones.EventObject.FADE_IN_COMPLETE) {
            if (event.detail.animationState.name === "jump_1") {
                this._isJumpingB = true;
                this._speedY = -JUMP_SPEED;
                this._armature.animation.fadeIn("jump_2", -1, -1, 0, NORMAL_ANIMATION_GROUP);
            } else if (event.detail.animationState.name === "jump_4") {
                this._updateAnimation();
            }
        } else if (event.type === dragonBones.EventObject.FADE_OUT_COMPLETE) {
            if (event.detail.animationState.name === "attack_01") {
                this._isAttackingB = false;
                this._attackState = null;
            }
        }
    },

    _frameEventHandler: function _frameEventHandler(event) {
        if (event.detail.name === "onFire") {
            var firePointBone = event.detail.armature.getBone("firePoint");
            var localPoint = cc.p(firePointBone.global.x, firePointBone.global.y);

            var display = event.detail.armature.display;
            var globalPoint = display.convertToWorldSpace(localPoint);

            this._fire(globalPoint);
        }
    },

    _fire: function _fire(firePoint) {
        firePoint.x += Math.random() * 2 - 1;
        firePoint.y += Math.random() * 2 - 1;

        var armature = this._armatureDisplay.buildArmature("bullet_01");
        var effect = this._armatureDisplay.buildArmature("fireEffect_01");
        var radian = this._faceDir < 0 ? Math.PI - this._aimRadian : this._aimRadian;
        var bullet = new DragonBullet();
        bullet.init(this.node.parent._sgNode, armature, effect, radian + Math.random() * 0.02 - 0.01, 40, firePoint);
        this.addBullet(bullet);
    },

    _updateAnimation: function _updateAnimation() {
        if (this._isJumpingA) {
            return;
        }

        if (this._isSquating) {
            this._speedX = 0;
            this._armature.animation.fadeIn("squat", -1, -1, 0, NORMAL_ANIMATION_GROUP);
            this._walkState = null;
            return;
        }

        if (this._moveDir === 0) {
            this._speedX = 0;
            this._armature.animation.fadeIn("idle", -1, -1, 0, NORMAL_ANIMATION_GROUP);
            this._walkState = null;
        } else {
            if (!this._walkState) {
                this._walkState = this._armature.animation.fadeIn("walk", -1, -1, 0, NORMAL_ANIMATION_GROUP);
            }

            if (this._moveDir * this._faceDir > 0) {
                this._walkState.timeScale = MAX_MOVE_SPEED_FRONT / NORMALIZE_MOVE_SPEED;
            } else {
                this._walkState.timeScale = -MAX_MOVE_SPEED_BACK / NORMALIZE_MOVE_SPEED;
            }

            if (this._moveDir * this._faceDir > 0) {
                this._speedX = MAX_MOVE_SPEED_FRONT * this._faceDir;
            } else {
                this._speedX = -MAX_MOVE_SPEED_BACK * this._faceDir;
            }
        }
    },

    _updatePosition: function _updatePosition() {
        if (this._speedX !== 0) {
            this.node.x += this._speedX;
            var minX = -cc.visibleRect.width / 2;
            var maxX = cc.visibleRect.width / 2;
            if (this.node.x < minX) {
                this.node.x = minX;
            } else if (this.node.x > maxX) {
                this.node.x = maxX;
            }
        }

        if (this._speedY != 0) {
            if (this._speedY > 5 && this._speedY + G <= 5) {
                this._armature.animation.fadeIn("jump_3", -1, -1, 0, NORMAL_ANIMATION_GROUP);
            }

            this._speedY += G;

            this.node.y += this._speedY;
            if (this.node.y < GROUND) {
                this.node.y = GROUND;
                this._isJumpingA = false;
                this._isJumpingB = false;
                this._speedY = 0;
                this._speedX = 0;
                this._armature.animation.fadeIn("jump_4", -1, -1, 0, NORMAL_ANIMATION_GROUP);
                if (this._isSquating || this._moveDir) {
                    this._updateAnimation();
                }
            }
        }
    },

    _updateAim: function _updateAim() {
        if (this._aimDir === 0) {
            return;
        }

        this._faceDir = this._target.x > this.node.x ? 1 : -1;
        if (this.node.scaleX * this._faceDir < 0) {
            this.node.scaleX *= -1;
            if (this._moveDir) {
                this._updateAnimation();
            }
        }

        var aimOffsetY = this._armature.getBone("chest").global.y * this.node.scaleY;

        if (this._faceDir > 0) {
            this._aimRadian = Math.atan2(-(this._target.y - this.node.y + aimOffsetY), this._target.x - this.node.x);
        } else {
            this._aimRadian = Math.PI - Math.atan2(-(this._target.y - this.node.y + aimOffsetY), this._target.x - this.node.x);
            if (this._aimRadian > Math.PI) {
                this._aimRadian -= Math.PI * 2;
            }
        }

        var aimDir = 0;
        if (this._aimRadian > 0) {
            aimDir = -1;
        } else {
            aimDir = 1;
        }

        if (this._aimDir != aimDir) {
            this._aimDir = aimDir;

            // Animation mixing.
            if (this._aimDir >= 0) {
                this._aimState = this._armature.animation.fadeIn("aimUp", 0, 1, 0, AIM_ANIMATION_GROUP, dragonBones.AnimationFadeOutMode.SameGroup);
            } else {
                this._aimState = this._armature.animation.fadeIn("aimDown", 0, 1, 0, AIM_ANIMATION_GROUP, dragonBones.AnimationFadeOutMode.SameGroup);
            }

            // Add bone mask.
            //_aimState.addBoneMask("pelvis");
        }

        this._aimState.weight = Math.abs(this._aimRadian / Math.PI * 2);

        //_armature.invalidUpdate("pelvis"); // Only update bone mask.
        this._armature.invalidUpdate();
    },

    _updateAttack: function _updateAttack() {
        if (!this._isAttackingA || this._isAttackingB) {
            return;
        }

        this._isAttackingB = true;

        // Animation mixing.
        this._attackState = this._armature.animation.fadeIn("attack_01", -1, -1, 0, ATTACK_ANIMATION_GROUP, dragonBones.AnimationFadeOutMode.SameGroup);

        this._attackState.autoFadeOutTime = this._attackState.fadeTotalTime;
        this._attackState.addBoneMask("pelvis");
    }
});

var DragonBullet = cc.Class({
    name: 'DragonBullet',
    _speedX: 0,
    _speedY: 0,

    _armature: null,
    _armatureDisplay: null,
    _effect: null,

    init: function init(parentNode, armature, effect, radian, speed, position) {
        this._speedX = Math.cos(radian) * speed;
        this._speedY = -Math.sin(radian) * speed;
        var thePos = parentNode.convertToNodeSpace(position);

        this._armature = armature;
        this._armatureDisplay = this._armature.display;
        this._armatureDisplay.setPosition(thePos);
        this._armatureDisplay.rotation = radian * dragonBones.DragonBones.RADIAN_TO_ANGLE;
        this._armature.animation.play("idle");

        if (effect) {
            this._effect = effect;
            var effectDisplay = this._effect.display;
            effectDisplay.rotation = radian * dragonBones.DragonBones.RADIAN_TO_ANGLE;
            effectDisplay.setPosition(thePos);
            effectDisplay.scaleX = 1 + Math.random() * 1;
            effectDisplay.scaleY = 1 + Math.random() * 0.5;
            if (Math.random() < 0.5) {
                effectDisplay.scaleY *= -1;
            }

            this._effect.animation.play("idle");

            dragonBones.WorldClock.clock.add(this._effect);
            parentNode.addChild(effectDisplay);
        }

        dragonBones.WorldClock.clock.add(this._armature);
        parentNode.addChild(this._armatureDisplay);
    },

    update: function update() {
        this._armatureDisplay.x += this._speedX;
        this._armatureDisplay.y += this._speedY;

        var worldPos = this._armatureDisplay.parent.convertToWorldSpace(this._armatureDisplay.getPosition());
        if (worldPos.x < -100 || worldPos.x >= cc.visibleRect.width + 100 || worldPos.y < -100 || worldPos.y >= cc.visibleRect.height + 100) {
            dragonBones.WorldClock.clock.remove(this._armature);
            this._armatureDisplay.removeFromParent();
            this._armature.dispose();

            if (this._effect) {
                dragonBones.WorldClock.clock.remove(this._effect);
                this._effect.display.removeFromParent();
                this._effect.dispose();
            }

            return true;
        }

        return false;
    }
});

cc._RFpop();
},{}],"EditboxCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'dd654DFPoRNVKRWOuQdLiEE', 'EditboxCtrl');
// cases/02_ui/08_editBox/EditBox/EditboxCtrl.js

var i18n = require('i18n');

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
        singleLineText: {
            "default": null,
            type: cc.EditBox
        },

        singleLinePassword: {
            "default": null,
            type: cc.EditBox
        },

        multiLineText: {
            "default": null,
            type: cc.EditBox
        },

        showEditorBoxLabel: {
            "default": null,
            type: cc.Label
        }

    },

    // use this for initialization
    onLoad: function onLoad() {},

    singleLineEditBoxDidBeginEditing: function singleLineEditBoxDidBeginEditing(sender) {
        cc.log(sender.node.name + " single line editBoxDidBeginEditing");
    },

    singleLineEditBoxDidChanged: function singleLineEditBoxDidChanged(text, sender) {
        cc.log(sender.node.name + " single line editBoxDidChanged: " + text);
    },

    singleLineEditBoxDidEndEditing: function singleLineEditBoxDidEndEditing(sender) {
        cc.log(sender.node.name + " single line editBoxDidEndEditing: " + this.singleLineText.string);
    },

    singleLinePasswordEditBoxDidBeginEditing: function singleLinePasswordEditBoxDidBeginEditing(sender) {
        cc.log(sender.node.name + " single line password editBoxDidBeginEditing");
    },

    singleLinePasswordEditBoxDidChanged: function singleLinePasswordEditBoxDidChanged(text, sender) {
        cc.log(sender.node.name + " single line password editBoxDidChanged: " + text);
    },

    singleLinePasswordEditBoxDidEndEditing: function singleLinePasswordEditBoxDidEndEditing(sender) {
        cc.log(sender.node.name + " single line password editBoxDidEndEditing: " + this.singleLinePassword.string);
    },

    multiLinePasswordEditBoxDidBeginEditing: function multiLinePasswordEditBoxDidBeginEditing(sender) {
        cc.log(sender.node.name + " multi line editBoxDidBeginEditing");
    },

    multiLinePasswordEditBoxDidChanged: function multiLinePasswordEditBoxDidChanged(text, sender) {
        cc.log(sender.node.name + " multi line editBoxDidChanged: " + text);
    },

    multiLinePasswordEditBoxDidEndEditing: function multiLinePasswordEditBoxDidEndEditing(sender) {
        cc.log(sender.node.name + " multi line editBoxDidEndEditing: " + this.multiLineText.string);
    },
    buttonClicked: function buttonClicked() {
        cc.log("button Clicked!");
        if (this.singleLineText.string !== "") {
            this.showEditorBoxLabel.string = i18n.t("cases/02_ui/07_editBox/editbox.js.1") + this.singleLineText.string;
        } else {
            this.showEditorBoxLabel.string = "";
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{"i18n":"i18n"}],"FilledSpriteControl":[function(require,module,exports){
"use strict";
cc._RFpush(module, '50a95ObLqFH2rz6eShvGuNK', 'FilledSpriteControl');
// cases/01_graphics/01_sprite/FilledSprite/FilledSpriteControl.js

cc.Class({
    "extends": cc.Component,

    properties: {

        speed: 0.1,

        horizontal: {
            "default": null,
            type: cc.Sprite
        },

        vertical: {
            "default": null,
            type: cc.Sprite
        },

        radial_round: {
            "default": null,
            type: cc.Sprite
        },

        radial_semicircle: {
            "default": null,
            type: cc.Sprite
        }
    },

    update: function update(dt) {
        // update fill start
        this._updataFillStart(this.horizontal, dt);
        this._updataFillStart(this.vertical, dt);
        // update fill range
        this._updateFillRange(this.radial_round, 1, dt);
        this._updateFillRange(this.radial_semicircle, 0.5, dt);
    },

    _updataFillStart: function _updataFillStart(sprite, dt) {
        var fillStart = sprite.fillStart;
        fillStart = fillStart > 0 ? fillStart -= dt * this.speed : 1;
        sprite.fillStart = fillStart;
    },

    _updateFillRange: function _updateFillRange(sprite, range, dt) {
        var fillRange = sprite.fillRange;
        fillRange = fillRange < range ? fillRange += dt * this.speed : 0;
        sprite.fillRange = fillRange;
    }

});

cc._RFpop();
},{}],"Foo":[function(require,module,exports){
"use strict";
cc._RFpush(module, '1ea36nYikVOup6BzaEIMYPH', 'Foo');
// cases/05_scripting/05_cross_reference/Foo.js

cc.Class({
    'extends': cc.Component,

    properties: function properties() {
        return {
            refToBar: require('Bar')
        };
    },

    // use this for initialization
    onLoad: function onLoad() {
        var tip = this.node.children[0].getComponent(cc.Label);
        tip.string = this.name + ' has reference to ' + this.refToBar.name;
    }
});

cc._RFpop();
},{"Bar":"Bar"}],"GoldBeatingAnime":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'ea8108bpl9ErIGOELI2Fezi', 'GoldBeatingAnime');
// cases/02_ui/02_label/BitmapFontLabel/GoldBeatingAnime.js

var i18n = require('i18n');

cc.Class({
    "extends": cc.Component,

    properties: {
        speed: 50,
        gold_label: {
            "default": null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.curGold = 0;
        this.curIndex = 0;
    },

    update: function update(dt) {
        this.curIndex += dt * this.speed;
        if (this.curIndex > 10) {
            this.curIndex = 0;
            this.curGold++;
            this.gold_label.string += this.curGold;
            if (this.gold_label.string.length > 10) {
                this.gold_label.string = i18n.t("cases/02_ui/02_label/GoldBeatingAnime.js.1");
                this.curGold = 0;
            }
        }
    }
});

cc._RFpop();
},{"i18n":"i18n"}],"Helpers":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'c8640M3ozRErrV/Go3uTknt', 'Helpers');
// scripts/Global/Helpers.js

if (CC_JSB && cc.runtime) {
    // fix cocos-creator/fireball#3578
    cc.LoaderLayer.setUseDefaultSource(false);
    cc.Dialog.setUseDefaultSource(false);
}

// Returns a random integer between min (included) and max (excluded)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
    getRandomInt: getRandomInt
};

cc._RFpop();
},{}],"HeroControl":[function(require,module,exports){
"use strict";
cc._RFpush(module, '339d2dg1QpEKKxBJBzHiDJ0', 'HeroControl');
// cases/collider/Platform/HeroControl.js


cc.Class({
    'extends': cc.Component,

    properties: {
        speed: cc.v2(0, 0),
        maxSpeed: cc.v2(2000, 2000),
        gravity: -1000,
        drag: 1000,
        direction: 0,
        jumpSpeed: 300
    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;

        //add keyboard input listener to call turnLeft and turnRight
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: this.onKeyPressed.bind(this),
            onKeyReleased: this.onKeyReleased.bind(this)
        }, this.node);

        this.collisionX = 0;
        this.collisionY = 0;

        this.prePosition = cc.v2();
        this.preStep = cc.v2();

        this.touchingNumber = 0;
    },

    onDisabled: function onDisabled() {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
    },

    onKeyPressed: function onKeyPressed(keyCode, event) {
        switch (keyCode) {
            case cc.KEY.a:
            case cc.KEY.left:
                this.direction = -1;
                break;
            case cc.KEY.d:
            case cc.KEY.right:
                this.direction = 1;
                break;
            case cc.KEY.w:
            case cc.KEY.up:
                if (!this.jumping) {
                    this.jumping = true;
                    this.speed.y = this.jumpSpeed;
                }
                break;
        }
    },

    onKeyReleased: function onKeyReleased(keyCode, event) {
        switch (keyCode) {
            case cc.KEY.a:
            case cc.KEY.left:
            case cc.KEY.d:
            case cc.KEY.right:
                this.direction = 0;
                break;
        }
    },

    onCollisionEnter: function onCollisionEnter(other, self) {
        this.node.color = cc.Color.RED;

        this.touchingNumber++;

        // 1st step
        // get pre aabb, go back before collision
        var otherAabb = other.world.aabb;
        var otherPreAabb = other.world.preAabb.clone();

        var selfAabb = self.world.aabb;
        var selfPreAabb = self.world.preAabb.clone();

        // 2nd step
        // forward x-axis, check whether collision on x-axis
        selfPreAabb.x = selfAabb.x;
        otherPreAabb.x = otherAabb.x;

        if (cc.Intersection.rectRect(selfPreAabb, otherPreAabb)) {
            if (this.speed.x < 0 && selfPreAabb.xMax > otherPreAabb.xMax) {
                this.node.x = otherPreAabb.xMax - this.node.parent.x;
                this.collisionX = -1;
            } else if (this.speed.x > 0 && selfPreAabb.xMin < otherPreAabb.xMin) {
                this.node.x = otherPreAabb.xMin - selfPreAabb.width - this.node.parent.x;
                this.collisionX = 1;
            }

            this.speed.x = 0;
            other.touchingX = true;
            return;
        }

        // 3rd step
        // forward y-axis, check whether collision on y-axis
        selfPreAabb.y = selfAabb.y;
        otherPreAabb.y = otherAabb.y;

        if (cc.Intersection.rectRect(selfPreAabb, otherPreAabb)) {
            if (this.speed.y < 0 && selfPreAabb.yMax > otherPreAabb.yMax) {
                this.node.y = otherPreAabb.yMax - this.node.parent.y;
                this.jumping = false;
                this.collisionY = -1;
            } else if (this.speed.y > 0 && selfPreAabb.yMin < otherPreAabb.yMin) {
                this.node.y = otherPreAabb.yMin - selfPreAabb.height - this.node.parent.y;
                this.collisionY = 1;
            }

            this.speed.y = 0;
            other.touchingY = true;
        }
    },

    onCollisionStay: function onCollisionStay(other, self) {
        if (this.collisionY === -1) {
            if (other.node.group === 'Platform') {
                var motion = other.node.getComponent('PlatformMotion');
                if (motion) {
                    this.node.x += motion._movedDiff;
                }
            }

            // this.node.y = other.world.aabb.yMax;

            // var offset = cc.v2(other.world.aabb.x - other.world.preAabb.x, 0);

            // var temp = cc.affineTransformClone(self.world.transform);
            // temp.tx = temp.ty = 0;

            // offset = cc.pointApplyAffineTransform(offset, temp);
            // this.node.x += offset.x;
        }
    },

    onCollisionExit: function onCollisionExit(other) {
        this.touchingNumber--;
        if (this.touchingNumber === 0) {
            this.node.color = cc.Color.WHITE;
        }

        if (other.touchingX) {
            this.collisionX = 0;
            other.touchingX = false;
        } else if (other.touchingY) {
            other.touchingY = false;
            this.collisionY = 0;
            this.jumping = true;
        }
    },

    update: function update(dt) {
        if (this.collisionY === 0) {
            this.speed.y += this.gravity * dt;
            if (Math.abs(this.speed.y) > this.maxSpeed.y) {
                this.speed.y = this.speed.y > 0 ? this.maxSpeed.y : -this.maxSpeed.y;
            }
        }

        if (this.direction === 0) {
            if (this.speed.x > 0) {
                this.speed.x -= this.drag * dt;
                if (this.speed.x <= 0) this.speed.x = 0;
            } else if (this.speed.x < 0) {
                this.speed.x += this.drag * dt;
                if (this.speed.x >= 0) this.speed.x = 0;
            }
        } else {
            this.speed.x += (this.direction > 0 ? 1 : -1) * this.drag * dt;
            if (Math.abs(this.speed.x) > this.maxSpeed.x) {
                this.speed.x = this.speed.x > 0 ? this.maxSpeed.x : -this.maxSpeed.x;
            }
        }

        if (this.speed.x * this.collisionX > 0) {
            this.speed.x = 0;
        }

        this.prePosition.x = this.node.x;
        this.prePosition.y = this.node.y;

        this.preStep.x = this.speed.x * dt;
        this.preStep.y = this.speed.y * dt;

        this.node.x += this.speed.x * dt;
        this.node.y += this.speed.y * dt;
    }
});

cc._RFpop();
},{}],"Hittest":[function(require,module,exports){
"use strict";
cc._RFpush(module, '49ade5wuu9ILKDuwPmdIALx', 'Hittest');
// cases/collider/Hittest/Hittest.js

cc.Class({
    'extends': cc.Component,

    properties: {
        collider: {
            'default': null,
            type: cc.PolygonCollider
        },

        title: {
            'default': null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var _this = this;

        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;

        this.title.string = 'normal';

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function onTouchBegan(touch, event) {
                var touchLoc = touch.getLocation();

                if (cc.Intersection.pointInPolygon(touchLoc, _this.collider.world.points)) {
                    _this.title.string = 'Hit';
                } else {
                    _this.title.string = 'Not hit';
                }

                return true;
            }
        }, this.node);
    },

    onDisable: function onDisable() {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"IAP":[function(require,module,exports){
"use strict";
cc._RFpush(module, '4a19cSbR5dBVrKvchVpkiro', 'IAP');
// cases/anysdk/02_iap/IAP.js

cc.Class({
    'extends': cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        if (cc.sys.isMobile) {
            this.iapPlugin = anysdk.agentManager.getIAPPlugin();
            if (this.iapPlugin) {
                this.iapPlugin.setListener(this.onIAPResult, this);
            }
        }
    },

    payForProduct: function payForProduct() {
        if (!this.iapPlugin) return;
        var info = {
            'Product_Id': '107196', //商品唯一标示符
            'Product_Name': 'three hearts', //商品名称
            'Product_Price': '0.1', //商品单价
            'Product_Count': '1', //商品数量
            'Product_Desc': 'three hearts', //商品描述
            'Coin_Name': 'heart', //虚拟币名称
            'Coin_Rate': '3', //虚拟币兑换率
            'Role_Id': "id", //角色唯一标示符
            'Role_Name': 'name', //角色名称
            'Role_Grade': '1', //角色等级
            'Role_Balance': "1", //虚拟币余额
            'Vip_Level': '0', //VIP等级
            'Party_Name': 'null', //工会名称
            'Server_Id': '1', //服务器唯一标示符
            'Server_Name': '1', //服务器名称
            'EXT': 'Cocos Creator' //扩展字段
        };
        this.iapPlugin.payForProduct(info);
    },

    getOrderId: function getOrderId() {
        if (!this.iapPlugin) return;
        var orderId = this.iapPlugin.getOrderId();
        cc.log('########## getOrderId ########## : ' + orderId);
    },

    onPayResult: function onPayResult(code, msg) {
        cc.log('########## PAY RESULT ########## code: ' + code + ',msg: ' + msg);
        switch (code) {
            case anysdk.PayResultCode.kPaySuccess:
                // 支付系统支付成功
                console.log('########## kPaySuccess ##########');
                break;
            case anysdk.PayResultCode.kPayCancel:
                // 支付系统支付取消
                console.log('########## kPayCancel ##########');
                break;
            case anysdk.PayResultCode.kPayFail: // 支付系统支付失败
            case anysdk.PayResultCode.kPayNetworkError: // 支付系统网络错误
            case anysdk.PayResultCode.kPayProductionInforIncomplete:
                // 支付系统支付信息不完整
                console.log('########## kPayFail ##########');
                break;
            case anysdk.PayResultCode.kPayInitSuccess:
                // 支付系统初始化成功
                console.log('########## kPayInitSuccess ##########');
                break;
            case anysdk.PayResultCode.kPayInitFail:
                // 支付系统初始化失败
                console.log('########## kPayInitFail ##########');
                break;
            case anysdk.PayResultCode.kPayNowPaying:
                // 支付系统正在支付中
                console.log('########## kPayNowPaying ##########');
                break;
            default:
                break;
        }
    }

});

cc._RFpop();
},{}],"InitData":[function(require,module,exports){
"use strict";
cc._RFpush(module, '3ae4cUsGcBIE4q7Ksp4ZX/H', 'InitData');
// cases/05_scripting/08_module/InitData.js


var _monsterInfo = {
    name: "Slime",
    hp: 100,
    lv: 1,
    atk: 10,
    defense: 5,
    imageUrl: "test assets/PurpleMonster"
};

module.exports = {
    monsterInfo: _monsterInfo
};

cc._RFpop();
},{}],"Instruction":[function(require,module,exports){
"use strict";
cc._RFpush(module, '6a871gy73FDLap3Eje/2h6i', 'Instruction');
// scripts/Global/Instruction.js

cc.Class({
    'extends': cc.Component,

    properties: {
        text: {
            'default': '',
            multiline: true
        }
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
    onLoad: function onLoad() {}

});
// called every frame
// update: function (dt) {

// },

cc._RFpop();
},{}],"Item":[function(require,module,exports){
"use strict";
cc._RFpush(module, '920c8a5MahAhbCTSvmQvaB+', 'Item');
// cases/02_ui/05_scrollView/ListView/Item.js

var i18n = require('i18n');

cc.Class({
    'extends': cc.Component,

    properties: {
        label: {
            'default': null,
            type: cc.Label
        },
        itemID: 0
    },

    onLoad: function onLoad() {
        this.node.on('touchend', function () {
            console.log("Item " + this.itemID + ' clicked');
        }, this);
    },

    updateItem: function updateItem(tmplId, itemId) {
        this.itemID = itemId;
        this.label.textKey = i18n.t("cases/02_ui/05_scrollView/Item.js.1") + tmplId + ' Item#' + this.itemID;
    }
});

cc._RFpop();
},{"i18n":"i18n"}],"LabelLocalized":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'e4f88adp3hERoJ48DZ2PSAl', 'LabelLocalized');
// i18n/LabelLocalized.js

var i18n = require('i18n');
cc.Class({
    'extends': cc.Label,

    properties: {
        textKey: {
            'default': 'TEXT_KEY',
            multiline: true,
            tooltip: 'Enter i18n key here',
            notify: function notify() {
                if (this._sgNode) {
                    this._sgNode.setString(this.string);
                    this._updateNodeSize();
                }
            }
        },
        string: {
            override: true,
            tooltip: 'Here shows the localized string of Text Key',
            get: function get() {
                return i18n.t(this.textKey);
            },
            set: function set(value) {
                this.textKey = value;
                cc.warn('Please set label text key in Text Key property.');
            }
        }
    }
});

cc._RFpop();
},{"i18n":"i18n"}],"LayoutResizeContainerCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, '2bbedtV3blCVJbmf2E9h/0V', 'LayoutResizeContainerCtrl');
// cases/02_ui/06_layout/Script/LayoutResizeContainerCtrl.js


var info = cc.Class({
    name: 'info',
    properties: {
        target: cc.Node,
        num: 0
    }
});
//5 3 10 12
cc.Class({
    'extends': cc.Component,

    properties: {
        itemTemp: {
            'default': null,
            type: cc.Prefab
        },
        targetAry: {
            'default': [],
            type: [info]
        }
    },

    onLoad: function onLoad() {
        this._curTime = 0;
        this._curIndex = 0;
    },

    _createItem: function _createItem(parentNode, idx) {
        var item = cc.instantiate(this.itemTemp);
        var label = item.getComponentInChildren(cc.Label);
        label.string = idx;
        item.parent = parentNode;
    },

    update: function update(dt) {
        this._curTime += dt;
        if (this._curTime >= 1) {
            this._curTime = 0;
            for (var i = 0; i < this.targetAry.length; ++i) {
                var num = this.targetAry[i].num;
                var target = this.targetAry[i].target;
                if (target && this._curIndex < num) {
                    this._createItem(target, this._curIndex);
                }
            }
            this._curIndex++;
        }
    }

});

cc._RFpop();
},{}],"ListItem":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'aa63bWNE8hBf4P4Sp0X2uT0', 'ListItem');
// scripts/Global/ListItem.js

cc.Class({
    'extends': cc.Component,

    properties: {
        label: {
            'default': null,
            type: cc.Label
        },
        url: '',
        bg: cc.Sprite,
        btn: cc.Button
    },

    init: function init(menu) {
        this.index = -1;
        this.menu = menu;
    },

    loadExample: function loadExample() {
        if (this.url) {
            this.menu.loadScene(this.url);
        }
    },

    updateItem: function updateItem(idx, y, name, url) {
        var isDir = !url;
        this.index = idx;
        this.node.y = y;
        this.node.x = isDir ? 50 : 100;
        this.label.string = name;
        this.url = url;
        this.bg.enabled = !isDir;
        this.btn.interactable = !isDir;
    }
});

cc._RFpop();
},{}],"ListViewCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'e6458+hf5VAnIXocmvhggqC', 'ListViewCtrl');
// cases/02_ui/05_scrollView/ListView/ListViewCtrl.js

cc.Class({
    'extends': cc.Component,

    properties: {
        itemTemplate: { // item template to instantiate other items
            'default': null,
            type: cc.Node
        },
        scrollView: {
            'default': null,
            type: cc.ScrollView
        },
        spawnCount: 0, // how many items we actually spawn
        totalCount: 0, // how many items we need for the whole list
        spacing: 0, // space between each item
        bufferZone: 0, // when item is away from bufferZone, we relocate it
        lblScrollEvent: cc.Label,
        btnAddItem: cc.Button,
        btnRemoveItem: cc.Button,
        btnJumpToPosition: cc.Button,
        lblJumpPosition: cc.Label,
        lblTotalItems: cc.Label
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.content = this.scrollView.content;
        this.items = []; // array to store spawned items
        this.initialize();
        this.updateTimer = 0;
        this.updateInterval = 0.2;
        this.lastContentPosY = 0; // use this variable to detect if we are scrolling up or down
    },

    initialize: function initialize() {
        this.content.height = this.totalCount * (this.itemTemplate.height + this.spacing) + this.spacing; // get total content height
        for (var i = 0; i < this.spawnCount; ++i) {
            // spawn items, we only need to do this once
            var item = cc.instantiate(this.itemTemplate);
            this.content.addChild(item);
            item.setPosition(0, -item.height * (0.5 + i) - this.spacing * (i + 1));
            item.getComponent('Item').updateItem(i, i);
            this.items.push(item);
        }
    },

    getPositionInView: function getPositionInView(item) {
        // get item position in scrollview's node space
        var worldPos = item.parent.convertToWorldSpaceAR(item.position);
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    },

    update: function update(dt) {
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) return; // we don't need to do the math every frame
        this.updateTimer = 0;
        var items = this.items;
        var buffer = this.bufferZone;
        var isDown = this.scrollView.content.y < this.lastContentPosY; // scrolling direction
        var offset = (this.itemTemplate.height + this.spacing) * items.length;
        for (var i = 0; i < items.length; ++i) {
            var viewPos = this.getPositionInView(items[i]);
            if (isDown) {
                // if away from buffer zone and not reaching top of content
                if (viewPos.y < -buffer && items[i].y + offset < 0) {
                    items[i].setPositionY(items[i].y + offset);
                    var item = items[i].getComponent('Item');
                    var itemId = item.itemID - items.length; // update item id
                    item.updateItem(i, itemId);
                }
            } else {
                // if away from buffer zone and not reaching bottom of content
                if (viewPos.y > buffer && items[i].y - offset > -this.content.height) {
                    items[i].setPositionY(items[i].y - offset);
                    var item = items[i].getComponent('Item');
                    var itemId = item.itemID + items.length;
                    item.updateItem(i, itemId);
                }
            }
        }
        // update lastContentPosY
        this.lastContentPosY = this.scrollView.content.y;
        this.lblTotalItems.textKey = "Total Items: " + this.totalCount;
    },

    scrollEvent: function scrollEvent(sender, event) {
        switch (event) {
            case 0:
                this.lblScrollEvent.string = "Scroll to Top";
                break;
            case 1:
                this.lblScrollEvent.string = "Scroll to Bottom";
                break;
            case 2:
                this.lblScrollEvent.string = "Scroll to Left";
                break;
            case 3:
                this.lblScrollEvent.string = "Scroll to Right";
                break;
            case 4:
                this.lblScrollEvent.string = "Scrolling";
                break;
            case 5:
                this.lblScrollEvent.string = "Bounce Top";
                break;
            case 6:
                this.lblScrollEvent.string = "Bounce bottom";
                break;
            case 7:
                this.lblScrollEvent.string = "Bounce left";
                break;
            case 8:
                this.lblScrollEvent.string = "Bounce right";
                break;
            case 9:
                this.lblScrollEvent.string = "Auto scroll ended";
                break;
        }
    },

    addItem: function addItem() {
        this.content.height = (this.totalCount + 1) * (this.itemTemplate.height + this.spacing) + this.spacing; // get total content height
        this.totalCount = this.totalCount + 1;
    },

    removeItem: function removeItem() {
        if (this.totalCount - 1 < 30) {
            cc.error("can't remove item less than 30!");
            return;
        }

        this.content.height = (this.totalCount - 1) * (this.itemTemplate.height + this.spacing) + this.spacing; // get total content height
        this.totalCount = this.totalCount - 1;
    },

    scrollToFixedPosition: function scrollToFixedPosition() {
        this.scrollView.scrollToOffset(cc.p(0, 500), 2);
    }
});

cc._RFpop();
},{}],"LoadModuleCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, '9e702GubHpK+4vAb3yu2OW5', 'LoadModuleCtrl');
// cases/05_scripting/08_module/LoadModuleCtrl.js

cc.Class({
    "extends": cc.Component,

    properties: {
        monsterTemp: {
            "default": null,
            type: cc.Prefab
        },
        btn_createMonster: {
            "default": null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.btn_createMonster.on(cc.Node.EventType.TOUCH_END, this.createMoster.bind(this));
    },

    createMoster: function createMoster() {
        var monster = cc.instantiate(this.monsterTemp);
        var Monster = require("Monster");
        var monsterComp = monster.getComponent(Monster);
        var InitData = require("InitData");
        monsterComp.initInfo(InitData.monsterInfo);
        monster.parent = this.node;
        monster.setPosition(cc.p(0, 0));
        this.btn_createMonster.active = false;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{"InitData":"InitData","Monster":"Monster"}],"LoadRes_example":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'd7c19DG8M5Dp7vHrQu5a8gK', 'LoadRes_example');
// cases/05_scripting/07_asset_loading/LoadRes/LoadRes_example.js

cc.Class({
    "extends": cc.Component,

    properties: {
        content: cc.Node
    },

    loadSpriteFrame: function loadSpriteFrame() {
        this._clearResource();
        var self = this;
        cc.loader.loadRes("test assets/atlas", cc.SpriteAtlas, function (err, atlas) {
            var node = new cc.Node();
            self.content.addChild(node);
            node.position = cc.v2(0, 0);
            var sprite = node.addComponent(cc.Sprite);
            sprite.spriteFrame = atlas.getSpriteFrame('sheep_run_0');
        });
    },

    loadPrefab: function loadPrefab() {
        this._clearResource();
        var self = this;
        cc.loader.loadRes("test assets/prefab", function (err, prefab) {
            var node = cc.instantiate(prefab);
            self.content.addChild(node);
            node.position = cc.v2(0, 0);
        });
    },

    _clearResource: function _clearResource() {
        this.content.removeAllChildren(true);
        cc.loader.releaseAll();
    }
});

cc._RFpop();
},{}],"LoadingBarCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, '102a9wU40RJd4SnQqQQzQT9', 'LoadingBarCtrl');
// cases/05_scripting/10_loadingBar/LoadingBarCtrl.js

var i18n = require('i18n');

//
// Tips：
// 找到的下载图片网址过长，可以忽略。
// 本教程主要还是体现如何使用Loader的进度条。
//

cc.Class({
    "extends": cc.Component,

    properties: {
        progressBar: {
            "default": null,
            type: cc.ProgressBar
        },

        progressTips: {
            "default": null,
            type: cc.Label
        },

        laodBg: {
            "default": null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this._urls = [
        // Raw Asset, need extension
        {
            id: "ding.wav",
            url: cc.url.raw("resources/audio/ding.wav")
        }, {
            id: "cheering.wav",
            url: cc.url.raw("resources/audio/cheering.wav")
        }, {
            id: "music_logo.mp3",
            url: cc.url.raw("resources/audio/music_logo.mp3")
        }, {
            id: "audio.mp3",
            url: cc.url.raw("resources/test assets/audio.mp3")
        }, {
            id: "font.png",
            url: cc.url.raw("resources/test assets/font.png")
        }, {
            id: "mikado_outline_shadow.png",
            url: cc.url.raw("resources/font/mikado_outline_shadow.png")
        }, {
            id: "enligsh-chinese.png",
            url: cc.url.raw("resources/font/enligsh-chinese.png")
        }];

        this.progressBar.progress = 0;
        cc.loader.releaseAll();
        cc.loader.load(this._urls, this._progressCallback.bind(this), this._completeCallback.bind(this));
    },

    _progressCallback: function _progressCallback(completedCount, totalCount, res) {
        this.progress = completedCount / totalCount;
        this.resource = res;
        this.completedCount = completedCount;
        this.totalCount = totalCount;
    },

    _completeCallback: function _completeCallback(error, res) {},

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (!this.resource) {
            return;
        }
        var progress = this.progressBar.progress;
        if (progress >= 1) {
            this.progressTips.string = i18n.t("cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.1");
            this.laodBg.active = false;
            this.progressBar.node.active = false;
            this.enabled = false;
            return;
        }
        if (progress < this.progress) {
            progress += dt;
        }
        this.progressBar.progress = progress;
        this.progressTips.string = i18n.t("cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.2") + this.resource.id + " (" + this.completedCount + "/" + this.totalCount + ")";
    }
});

cc._RFpop();
},{"i18n":"i18n"}],"Menu":[function(require,module,exports){
"use strict";
cc._RFpush(module, '04525pyYBlN26SWawaUF3dA', 'Menu');
// scripts/Global/Menu.js

var i18n = require('i18n');
var SceneList = require('SceneList');

var emptyFunc = function emptyFunc(event) {
    event.stopPropagation();
};

cc.Class({
    'extends': cc.Component,

    properties: {
        text: {
            'default': null,
            type: cc.Label
        },
        readme: {
            'default': null,
            type: cc.Node
        },
        mask: {
            'default': null,
            type: cc.Node
        },
        btnInfo: {
            'default': null,
            type: cc.Button
        },
        btnBack: {
            'default': null,
            type: cc.Button
        }
    },

    onLoad: function onLoad() {
        this.showDebugDraw = false;
        cc.game.addPersistRootNode(this.node);
        this.currentSceneUrl = 'TestList.fire';
        this.contentPos = null;
        this.isMenu = true;
        this.loadInstruction(this.currentSceneUrl);
    },

    onEnable: function onEnable() {
        // for this component, onEnable should be called after
        // each time new scene launched
        var sceneListNode = cc.find('Canvas/testList/viewport/list');
        if (sceneListNode) {
            // in main scene
            this.sceneList = sceneListNode.getComponent('SceneList');
            this.sceneList.init(this);
        } else {
            // in other scene, this.sceneList should be destroyed
            this.sceneList = null;
        }
    },

    backToList: function backToList() {
        this.showReadme(null, false);
        this.currentSceneUrl = 'TestList.fire';
        this.isMenu = true;
        cc.director.loadScene('TestList', this.onLoadSceneFinish.bind(this));
    },

    loadScene: function loadScene(url) {
        this.contentPos = cc.find('Canvas/testList').getComponent(cc.ScrollView).getContentPosition();
        this.currentSceneUrl = url;
        this.isMenu = false;
        cc.director.loadScene(url, this.onLoadSceneFinish.bind(this));
    },

    onLoadSceneFinish: function onLoadSceneFinish() {
        var url = this.currentSceneUrl;
        this.loadInstruction(url);
        if (this.isMenu && this.contentPos) {
            cc.find('Canvas/testList').getComponent(cc.ScrollView).setContentPosition(this.contentPos);
        }
    },

    loadInstruction: function loadInstruction(url) {
        var self = this;
        var urlArr = url.split('/');
        var fileName = urlArr[urlArr.length - 1].replace('.fire', '');
        cc.loader.loadRes('readme/' + fileName, function (err, txt) {
            if (err) {
                self.text.string = i18n.t("scripts/Global/Menu.js.1");
                return;
            }
            self.text.string = txt;
        });
    },

    showReadme: function showReadme(event, active) {
        if (active === undefined) {
            this.readme.active = !this.readme.active;
        } else {
            this.readme.active = active;
        }
        if (this.readme.active) {
            this.mask.on('touchstart', emptyFunc, this);
        } else {
            this.mask.off('touchstart', emptyFunc, this);
        }
        var labelTxt = this.readme.active ? '关闭说明' : '查看说明';
        cc.find('label', this.btnInfo.node).getComponent(cc.Label).textKey = labelTxt;

        // en: fix Collider DebugDraw always displayed on top of the problem.
        // zh：解决 Collider DebugDraw 一直显示在最上层的问题。
        var enabledDebugDraw = cc.director.getCollisionManager().enabledDebugDraw;
        if (this.readme.active) {
            this.showDebugDraw = enabledDebugDraw;
            cc.director.getCollisionManager().enabledDebugDraw = false;
        } else {
            cc.director.getCollisionManager().enabledDebugDraw = this.showDebugDraw;
        }
        // en: fix Video Player always displayed on top of the problem.
        // zh：修复 Video Player 一直显示在最上层的问题。
        var videoPlayer = cc.find('Canvas/VideoPlayer');
        if (videoPlayer) {
            videoPlayer.active = !this.readme.active;
        }
    }
});

cc._RFpop();
},{"SceneList":"SceneList","i18n":"i18n"}],"MonsterPrefab":[function(require,module,exports){
"use strict";
cc._RFpush(module, '8cb4dm2QEpJ7pnaS/cjrvgF', 'MonsterPrefab');
// cases/05_scripting/02_prefab/MonsterPrefab.js

var Helpers = require('Helpers');

cc.Class({
    'extends': cc.Component,

    properties: {
        spriteList: {
            'default': [],
            type: [cc.SpriteFrame]
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var randomIdx = Helpers.getRandomInt(0, this.spriteList.length);
        var sprite = this.getComponent(cc.Sprite);
        sprite.spriteFrame = this.spriteList[randomIdx];
    }

});

cc._RFpop();
},{"Helpers":"Helpers"}],"Monster":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'e31b0+PoDRJXIDHFxy60vEs', 'Monster');
// cases/05_scripting/08_module/Monster.js

cc.Class({
    "extends": cc.Component,

    properties: {
        nickname: {
            "default": null,
            type: cc.Label
        },
        lv: {
            "default": null,
            type: cc.Label
        },
        hp: {
            "default": null,
            type: cc.Label
        },
        atk: {
            "default": null,
            type: cc.Label
        },
        defense: {
            "default": null,
            type: cc.Label
        },
        image: {
            "default": null,
            type: cc.Sprite
        }
    },

    initInfo: function initInfo(info) {
        this.nickname.string = info.name;
        this.lv.string = info.lv;
        this.hp.string = info.hp;
        this.atk.string = info.atk;
        this.defense.string = info.defense;

        var image = this.image;
        cc.loader.loadRes(info.imageUrl, cc.SpriteFrame, function (error, spriteFrame) {
            if (!error) {
                image.spriteFrame = spriteFrame;
            }
        });

        //cc.loader.load(, function (error, res) {
        //    console.log(res);
        //}.bind(this));
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"MotionStreakCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'f7722zlKP5HoKMY5VvWPCON', 'MotionStreakCtrl');
// cases/motionStreak/MotionStreak/MotionStreakCtrl.js

cc.Class({
    "extends": cc.Component,

    properties: {
        motionStreak: cc.MotionStreak,
        newTexture: cc.Texture2D,
        content: cc.Node,
        tips: cc.Node
    },

    onLoad: function onLoad() {
        if (cc._renderType !== cc.game.RENDER_TYPE_WEBGL) {
            this.tips.active = true;
            this.content.active = false;
            return;
        }
        this._changed = true;
        this.oldTexture = this.motionStreak.texture;
    },

    onClick: function onClick() {
        if (this._changed) {
            this.setMotionStreak(2, 3, 20, this.newTexture);
        } else {
            this.setMotionStreak(0.5, 1, 30, this.oldTexture);
        }
        this._changed = !this._changed;
    },

    setMotionStreak: function setMotionStreak(fadeTime, minSeg, stroke, texture) {
        this.motionStreak.fadeTime = fadeTime;
        this.motionStreak.minSeg = minSeg;
        this.motionStreak.stroke = stroke;
        this.motionStreak.texture = texture;
    }

});

cc._RFpop();
},{}],"MouseEvent":[function(require,module,exports){
"use strict";
cc._RFpush(module, '6df0ft1jy5Jg4cQ039jt8jC', 'MouseEvent');
// cases/05_scripting/03_events/MouseEvent.js

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

    move: function move(event) {
        this.node.x += event.getDeltaX();
        this.node.y += event.getDeltaY();
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.scroll = 0;
        this.node.opacity = 50;
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            this.node.opacity = 255;
            this.node.on(cc.Node.EventType.MOUSE_MOVE, this.move, this);
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_ENTER, function () {
            this.node.opacity = 160;
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, function () {
            this.node.opacity = 50;
            this.node.off(cc.Node.EventType.MOUSE_MOVE, this.move, this);
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, function () {
            this.node.opacity = 50;
            this.node.off(cc.Node.EventType.MOUSE_MOVE, this.move, this);
            if (this._callback) {
                this._callback();
            }
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_WHEEL, function (event) {
            this.scroll += event.getScrollY();
            var h = this.node.height;
            this.scroll = cc.clampf(this.scroll, -2 * h, 0.7 * h);
            this.node.scale = 1 - this.scroll / h;
        }, this);
    }
});

cc._RFpop();
},{}],"MoveAction":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'ddd4eaLxVZFlZbzaPaqdL9D', 'MoveAction');
// cases/03_gameplay/02_actions/MoveAction.js

cc.Class({
    "extends": cc.Component,

    properties: {
        moveTo: cc.Node,
        moveBy: cc.Node
    },

    // use this for initialization
    onLoad: function onLoad() {
        var moveTo = cc.moveTo(0.5, cc.p(0, 0));
        var moveBy = cc.moveBy(0.5, cc.p(100, 100));
        this.moveTo.runAction(moveTo);
        this.moveBy.runAction(moveBy);
    }
});

cc._RFpop();
},{}],"MoveAnimationCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, '1dc95dq3mVI658br0l2Zbi0', 'MoveAnimationCtrl');
// cases/03_gameplay/03_animation/MoveAnimation/MoveAnimationCtrl.js

cc.Class({
    "extends": cc.Component,

    properties: {
        target: {
            "default": null,
            type: cc.Animation
        },

        nodes: {
            "default": [],
            type: cc.Node
        }
    },

    onLoad: function onLoad() {
        this.onRegisteredEvent();
    },

    onRegisteredEvent: function onRegisteredEvent() {
        for (var i = 0; i < this.nodes.length; ++i) {
            this.nodes[i].on(cc.Node.EventType.TOUCH_END, this.onPlayAnimation.bind(this));
        }
    },

    onPlayAnimation: function onPlayAnimation(event) {
        this.target.stop();
        switch (event.target._name) {
            case "Linear":
                this.target.play("linear");
                break;
            case "CaseIn_Expo":
                this.target.play("caseIn-expo");
                break;
            case "CaseOut_Expo":
                this.target.play("caseOut-expo");
                break;
            case "CaseInOut_Expo":
                this.target.play("caseInOut-expo");
                break;
            case "Back_Forward":
                this.target.play("back-forward");
                break;
        }
    }

});

cc._RFpop();
},{}],"MyCustomComponent":[function(require,module,exports){
"use strict";
cc._RFpush(module, '6b8baEpLuxACIMNlIL2vw2W', 'MyCustomComponent');
// cases/05_scripting/01_properties/MyCustomComponent.js

cc.Class({
    "extends": cc.Component,

    properties: {
        power: 10
    },

    getPower: function getPower() {
        return this.power;
    }
});

cc._RFpop();
},{}],"NativeCallCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, '5245dIEBoFFB4RdXwoJQM2G', 'NativeCallCtrl');
// cases/native_call/Native_Call/NativeCallCtrl.js

var i18n = require('i18n');

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
        tips: cc.Label,
        button: cc.Node
    },

    // use this for initialization
    onLoad: function onLoad() {
        if (!(cc.sys.isMobile && cc.sys.platform == cc.sys.ANDROID) || cc.runtime) {
            return;
        }
        this.tips.textKey = i18n.t("cases/native_call/native_call.fire.2");
        this.button.active = true;
    },

    onClick: function onClick() {
        var className = "org/cocos2dx/javascript/AppActivity";
        var methodName = "showAlertDialog";
        var methodSignature = "(Ljava/lang/String;Ljava/lang/String;)V";
        jsb.reflection.callStaticMethod(className, methodName, methodSignature, "Title", "Native Call Test");
    }
});

cc._RFpop();
},{"i18n":"i18n"}],"NetworkCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, '10908h1aHRPPowxQQzUCVMD', 'NetworkCtrl');
// cases/05_scripting/11_network/NetworkCtrl.js

var i18n = require('i18n');

if (!window.io) {
    cc.error('You should import the socket.io.js as a plugin!');
}

cc.Class({
    'extends': cc.Component,

    properties: {
        xhr: cc.Label,
        xhrAB: cc.Label,
        websocket: cc.Label,
        socketIO: cc.Label,

        xhrResp: cc.Label,
        xhrABResp: cc.Label,
        websocketResp: cc.Label,
        socketIOResp: cc.Label
    },

    // use this for initialization
    onLoad: function onLoad() {
        this._wsiSendBinary = null;

        this.xhrResp.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.1");
        this.xhrABResp.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.2");
        this.websocketResp.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.3");
        this.socketIOResp.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.4");

        this.sendXHR();
        this.sendXHRAB();
        this.prepareWebSocket();
        this.sendSocketIO();
    },

    sendXHR: function sendXHR() {
        var xhr = cc.loader.getXMLHttpRequest();
        this.streamXHREventsToLabel(xhr, this.xhr, this.xhrResp, 'GET');

        xhr.open("GET", "https://httpbin.org/get?show_env=1", true);
        if (cc.sys.isNative) {
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        }

        // note: In Internet Explorer, the timeout property may be set only after calling the open()
        // method and before calling the send() method.
        xhr.timeout = 5000; // 5 seconds for timeout

        xhr.send();
    },

    sendXHRAB: function sendXHRAB() {
        var xhr = cc.loader.getXMLHttpRequest();
        this.streamXHREventsToLabel(xhr, this.xhrAB, this.xhrABResp, "POST");

        xhr.open("POST", "https://httpbin.org/post");
        //set Content-type "text/plain" to post ArrayBuffer or ArrayBufferView
        xhr.setRequestHeader("Content-Type", "text/plain");
        // Uint8Array is an ArrayBufferView
        xhr.send(new Uint8Array([1, 2, 3, 4, 5]));
    },

    prepareWebSocket: function prepareWebSocket() {
        var self = this;
        var websocketLabel = this.websocket;
        var respLabel = this.websocketResp;
        this._wsiSendBinary = new WebSocket("ws://echo.websocket.org");
        this._wsiSendBinary.binaryType = "arraybuffer";
        this._wsiSendBinary.onopen = function (evt) {
            websocketLabel.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.5");
        };

        this._wsiSendBinary.onmessage = function (evt) {
            var binary = new Uint16Array(evt.data);
            var binaryStr = 'response bin msg: ';

            var str = '';
            for (var i = 0; i < binary.length; i++) {
                if (binary[i] === 0) {
                    str += "\'\\0\'";
                } else {
                    var hexChar = '0x' + binary[i].toString('16').toUpperCase();
                    str += String.fromCharCode(hexChar);
                }
            }

            binaryStr += str;
            respLabel.string = binaryStr;
            websocketLabel.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.6");
        };

        this._wsiSendBinary.onerror = function (evt) {
            websocketLabel.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.7");
        };

        this._wsiSendBinary.onclose = function (evt) {
            websocketLabel.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.8");
            // After close, it's no longer possible to use it again,
            // if you want to send another request, you need to create a new websocket instance
            self._wsiSendBinary = null;
        };

        this.scheduleOnce(this.sendWebSocketBinary, 1);
    },

    sendWebSocketBinary: function sendWebSocketBinary(sender) {
        if (this._wsiSendBinary.readyState === WebSocket.OPEN) {
            this.websocket.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.9");
            var buf = "Hello WebSocket中文,\0 I'm\0 a\0 binary\0 message\0.";

            var arrData = new Uint16Array(buf.length);
            for (var i = 0; i < buf.length; i++) {
                arrData[i] = buf.charCodeAt(i);
            }

            this._wsiSendBinary.send(arrData.buffer);
        } else {
            var warningStr = "send binary websocket instance wasn't ready...";
            this.websocket.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.10") + warningStr;
            this.scheduleOnce(function () {
                this.sendWebSocketBinary();
            }, 1);
        }
    },

    // Socket IO callbacks for testing
    testevent: function testevent(data) {
        var msg = this.tag + " says 'testevent' with data: " + data;
        this.socketIO.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.11") + msg;
    },

    message: function message(data) {
        var msg = this.tag + " received message: " + data;
        this.socketIOResp.string = msg;
    },

    disconnection: function disconnection() {
        var msg = this.tag + " disconnected!";
        this.socketIO.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.12") + msg;
    },

    sendSocketIO: function sendSocketIO() {
        var self = this;
        //create a client by using this static method, url does not need to contain the protocol
        var sioclient = io.connect("ws://tools.itharbors.com:4000", { "force new connection": true });
        this._sioClient = sioclient;

        //if you need to track multiple sockets it is best to store them with tags in your own array for now
        this.tag = sioclient.tag = "Test Client";

        //register event callbacks
        //this is an example of a handler declared inline
        sioclient.on("connect", function () {
            var msg = sioclient.tag + " Connected!";
            self.socketIO.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.13") + msg;

            // Send message after connection
            self._sioClient.send("Hello Socket.IO!");
        });

        //example of a handler that is shared between multiple clients
        sioclient.on("message", this.message.bind(this));

        sioclient.on("echotest", function (data) {
            cc.log("echotest 'on' callback fired!");
            var msg = this.tag + " says 'echotest' with data: " + data;
            self.socketIO.string = i18n.t("cases/05_scripting/11_network/NetworkCtrl.js.14") + msg;
        });

        sioclient.on("testevent", this.testevent.bind(this));

        sioclient.on("disconnect", this.disconnection.bind(this));
    },

    streamXHREventsToLabel: function streamXHREventsToLabel(xhr, eventLabel, label, method, responseHandler) {
        var handler = responseHandler || function (response) {
            return method + " Response (30 chars): " + response.substring(0, 30) + "...";
        };

        var eventLabelOrigin = eventLabel.string;
        // Simple events
        ['loadstart', 'abort', 'error', 'load', 'loadend', 'timeout'].forEach(function (eventname) {
            xhr["on" + eventname] = function () {
                eventLabel.string = eventLabelOrigin + "\nEvent : " + eventname;
            };
        });

        // Special event
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
                label.string = handler(xhr.responseText);
            }
        };
    }
});

cc._RFpop();
},{"i18n":"i18n"}],"NodeGenerator":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'c2149G/5j1JIKd2GGzQfS72', 'NodeGenerator');
// cases/05_scripting/12_pool/NodeGenerator.js

cc.Class({
    'extends': cc.Component,

    properties: {
        prefab: cc.Prefab,
        regionOrigin: cc.Vec2,
        regionSize: cc.Size
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.schedule(this.generateNode, 2);
        this._pool = new cc.NodePool('PoolHandler');
    },

    generateNode: function generateNode() {
        var monster = this._pool.get();
        if (!monster) {
            monster = cc.instantiate(this.prefab);

            // Add pool handler component which will control the touch event
            monster.addComponent('PoolHandler');
        }
        monster.x = this.regionOrigin.x + Math.floor(Math.random() * this.regionSize.width);
        monster.y = this.regionOrigin.y + Math.floor(Math.random() * this.regionSize.height);

        var angle = Math.random() * Math.PI * 2;
        var dx = 500 * Math.cos(angle);
        var dy = 500 * Math.sin(angle);

        monster.runAction(cc.sequence(cc.moveBy(5, dx, dy), cc.callFunc(this.removeNode, this, monster)));

        this.node.addChild(monster);
    },

    removeNode: function removeNode(sender, monster) {
        this._pool.put(monster);
    }
});

cc._RFpop();
},{}],"NodeGroupControl":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'bd4a2+britAlof0UdMCVB8c', 'NodeGroupControl');
// cases/05_scripting/01_properties/NodeGroupControl.js

cc.Class({
    'extends': cc.Component,

    properties: {
        nodeList: {
            'default': [],
            type: [cc.Node]
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;
        this.inervalId = setInterval(function () {
            self.toggleNodesVisibility();
        }, 1000);
    },

    onDestroy: function onDestroy() {
        clearInterval(this.inervalId);
    },

    toggleNodesVisibility: function toggleNodesVisibility() {
        console.log('toggle visibility');
        for (var i = 0; i < this.nodeList.length; ++i) {
            this.nodeList[i].active = !this.nodeList[i].active;
        }
    }
});

cc._RFpop();
},{}],"NonSerializedProperties":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'd4114PgybhJ3L/k0N9TkCZI', 'NonSerializedProperties');
// cases/05_scripting/01_properties/NonSerializedProperties.js

cc.Class({
    'extends': cc.Component,

    properties: {
        mySerializedText: '',
        myNonSerializedText: {
            'default': '',
            visible: false
        },
        label1: {
            'default': null,
            type: cc.Label
        },
        label2: {
            'default': null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.myNonSerializedText = 'Can only set value in script';
        this.label1.string = this.mySerializedText;
        this.label2.string = this.myNonSerializedText;
    }
});

cc._RFpop();
},{}],"OnMultiTouchCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, '53fc1wMwRRPOYCB8ko36drD', 'OnMultiTouchCtrl');
// cases/03_gameplay/01_player_control/OnMultiTouch/OnMultiTouchCtrl.js

var i18n = require('i18n');

cc.Class({
    "extends": cc.Component,

    properties: {
        canvas: cc.Node,
        target: cc.Node,
        tips: cc.Label
    },

    onLoad: function onLoad() {
        // zh:该效果只能在移动平台上有效！
        // en:The sample can only be effective on mobile platforms!
        if (!cc.sys.isMobile) {
            return;
        }
        this.tips.textKey = i18n.t("cases/03_gameplay/01_player_control/On/OnMultiTouchInput.fire.21");

        var self = this,
            parent = this.node.parent;
        self.canvas.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var touches = event.getTouches();
            if (touches.length >= 2) {
                var touch1 = touches[0],
                    touch2 = touches[1];
                var delta1 = touch1.getDelta(),
                    delta2 = touch2.getDelta();
                var touchPoint1 = parent.convertToNodeSpaceAR(touch1.getLocation());
                var touchPoint2 = parent.convertToNodeSpaceAR(touch2.getLocation());
                //缩放
                var distance = cc.pSub(touchPoint1, touchPoint2);
                var delta = cc.pSub(delta1, delta2);
                var scale = 1;
                if (Math.abs(distance.x) > Math.abs(distance.y)) {
                    scale = (distance.x + delta.x) / distance.x * self.target.scale;
                } else {
                    scale = (distance.y + delta.y) / distance.y * self.target.scale;
                }
                self.target.scale = scale < 0.1 ? 0.1 : scale;
            }
        }, self.node);
    }
});

cc._RFpop();
},{"i18n":"i18n"}],"OnTouchCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'f9b352jbGtMIqjEuud60Wpx', 'OnTouchCtrl');
// cases/03_gameplay/01_player_control/OnTouchCtrl/OnTouchCtrl.js

var i18n = require('i18n');

cc.Class({
    'extends': cc.Component,

    properties: {
        canvas: cc.Node,
        touchLocationDisplay: {
            'default': null,
            type: cc.Label
        },
        follower: {
            'default': null,
            type: cc.Node
        },
        followSpeed: 200
    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;
        self.moveToPos = cc.p(0, 0);
        self.isMoving = false;
        self.canvas.on(cc.Node.EventType.TOUCH_START, function (event) {
            var touches = event.getTouches();
            var touchLoc = touches[0].getLocation();
            self.isMoving = true;
            self.moveToPos = self.follower.parent.convertToNodeSpaceAR(touchLoc);
        }, self.node);
        self.canvas.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var touches = event.getTouches();
            var touchLoc = touches[0].getLocation();
            self.touchLocationDisplay.textKey = i18n.t("cases/03_gameplay/01_player_control/On/OnTouchCtrl.js.1") + Math.floor(touchLoc.x) + ', ' + Math.floor(touchLoc.y) + ')';
            self.moveToPos = self.follower.parent.convertToNodeSpaceAR(touchLoc);
        }, self.node);
        self.canvas.on(cc.Node.EventType.TOUCH_END, function (event) {
            self.isMoving = false; // when touch ended, stop moving
        }, self.node);
    },

    // called every frame
    update: function update(dt) {
        if (!this.isMoving) return;
        var oldPos = this.follower.position;
        // get move direction
        var direction = cc.pNormalize(cc.pSub(this.moveToPos, oldPos));
        // multiply direction with distance to get new position
        var newPos = cc.pAdd(oldPos, cc.pMult(direction, this.followSpeed * dt));
        // set new position
        this.follower.setPosition(newPos);
    }
});

cc._RFpop();
},{"i18n":"i18n"}],"OrderSwitcher":[function(require,module,exports){
"use strict";
cc._RFpush(module, '385fbE9eghB1IwH34WHGHmk', 'OrderSwitcher');
// cases/05_scripting/03_events/OrderSwitcher.js

cc.Class({
    "extends": cc.Component,

    properties: {
        container: cc.Node
    },

    // use this for initialization
    "switch": function _switch() {
        var children = this.container.children;
        var length = children.length;
        if (length > 1) {
            var src = Math.floor(Math.random() * length);
            var node = children[src];
            var dst = src === length - 1 ? 0 : src + 1;
            node.setSiblingIndex(dst);
        }
    }
});

cc._RFpop();
},{}],"PageViewCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'becf9ZpBi5KG43ard9opUPT', 'PageViewCtrl');
// cases/02_ui/05_scrollView/PageView/PageViewCtrl.js

cc.Class({
    "extends": cc.Component,

    properties: {
        curIndex: 0,
        icons: {
            "default": [],
            type: [cc.SpriteFrame]
        },
        pageTeample: cc.Prefab,
        target: cc.PageView,
        label: cc.Label
    },

    _createPage: function _createPage() {
        var page = cc.instantiate(this.pageTeample);
        var idx = Math.floor(Math.random() * 4);
        for (var i = 0; i < page.children.length; ++i) {
            var node = page.children[i];
            var sprite = node.getComponent(cc.Sprite);
            sprite.spriteFrame = this.icons[idx];
        }
        var layout = page.getComponent(cc.Layout);
        layout.cellSize = cc.size(80, 80);
        return page;
    },

    onLoad: function onLoad() {
        // 设置的当前页面为 1
        this.target.setCurrentPageIndex(0);
    },

    update: function update() {
        // 当前页面索引
        this.label.string = "当前页面索引：" + this.target.getCurrentPageIndex();
    },

    // 添加页面
    onAddPage: function onAddPage() {
        this.target.addPage(this._createPage());
    },

    // 插入页面
    onInsertPage: function onInsertPage() {
        this.target.insertPage(this._createPage(), 1);
    },

    // 移除最后一个页面
    onRemovePage: function onRemovePage() {
        var pages = this.target.getPages();
        if (pages) {
            this.target.removePage(pages[pages.length - 1]);
        }
    },

    // 移除指定页面
    onRemovePageAtIndex: function onRemovePageAtIndex() {
        this.target.removePageAtIndex(1);
    },

    // 移除所有页面
    onRemoveAllPage: function onRemoveAllPage() {
        this.target.removeAllPages();
    },

    // 监听事件
    onPageEevent: function onPageEevent(sender, eventType) {
        // 翻页事件
        if (eventType === cc.PageView.EventType.PAGE_TURNING) {
            console.log("cur page index:" + sender.getCurrentPageIndex());
        }
    }
});

cc._RFpop();
},{}],"ParticleControl":[function(require,module,exports){
"use strict";
cc._RFpush(module, '79ae3hiP+JAhIKehaWyiKuh', 'ParticleControl');
// cases/01_graphics/02_particle/ToggleParticle/ParticleControl.js

cc.Class({
    "extends": cc.Component,

    properties: {
        particle: cc.Node
    },

    toggleParticlePlay: function toggleParticlePlay() {
        var myParticle = this.particle.getComponent(cc.ParticleSystem);
        if (myParticle.isFull()) {
            // check if particle has fully plaed
            myParticle.stopSystem(); // stop particle system
        } else {
                myParticle.resetSystem(); // restart particle system
            }
    }
});

cc._RFpop();
},{}],"PlatformMotion":[function(require,module,exports){
"use strict";
cc._RFpush(module, '0f761EZmKhNLKJpUXTrb4fF', 'PlatformMotion');
// cases/collider/Utils/PlatformMotion.js

cc.Class({
    "extends": cc.Component,

    properties: {
        speed: 10,
        distance: 200
    },

    // use this for initialization
    onLoad: function onLoad() {
        this._movedDistance = this.distance / 2;
        this._direction = 1;
        this._movedDiff = 0;
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        var d = this.speed * this._direction * dt;

        var movedDistance = this._movedDistance + Math.abs(d);
        this._movedDistance += Math.abs(d);

        if (movedDistance > this.distance) {
            d = this.distance - this._movedDistance;
            this._movedDistance = 0;
            this._direction *= -1;
        } else {
            this._movedDistance = movedDistance;
        }

        this.node.x += d;
        this._movedDiff = d;
    }
});

cc._RFpop();
},{}],"PoolHandler":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'ea9ac+t92JFY6hOUuiIHUAT', 'PoolHandler');
// cases/05_scripting/12_pool/PoolHandler.js

function pauseresume() {
    if (this.paused) {
        cc.director.getActionManager().resumeTarget(this);
    } else {
        cc.director.getActionManager().pauseTarget(this);
    }
    this.paused = !this.paused;
}

cc.Class({
    "extends": cc.Component,

    properties: {},

    onLoad: function onLoad() {
        this.node.paused = false;
        this.node.on(cc.Node.EventType.TOUCH_END, pauseresume, this.node);
    },

    unuse: function unuse() {
        this.node.off(cc.Node.EventType.TOUCH_END, pauseresume, this.node);
    },

    reuse: function reuse() {
        this.node.on(cc.Node.EventType.TOUCH_END, pauseresume, this.node);
    }
});

cc._RFpop();
},{}],"PopulatePrefab":[function(require,module,exports){
"use strict";
cc._RFpush(module, '75518I0ImJHXqWNNGRIOmJg', 'PopulatePrefab');
// cases/05_scripting/02_prefab/PopulatePrefab.js

cc.Class({
    "extends": cc.Component,

    properties: {
        root: {
            "default": null,
            type: cc.Node
        },
        prefab: {
            "default": null,
            type: cc.Prefab
        },
        canvas: {
            "default": null,
            type: cc.Canvas
        },
        numberToSpawn: 0,
        spawnInterval: 0
    },

    addSpawn: function addSpawn() {
        if (this.spawnCount >= this.numberToSpawn) {
            this.clearRepeater();
            return;
        }
        var monster = cc.instantiate(this.prefab);
        monster.parent = this.root;
        //this.canvas.node.addChild(monster);
        monster.position = this.getRandomPosition();
        this.spawnCount++;
    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;
        self.randomRange = cc.p(300, 200);
        self.spawnCount = 0;
        self.schedule(self.addSpawn, self.spawnInterval);
    },

    getRandomPosition: function getRandomPosition() {
        return cc.p(cc.randomMinus1To1() * this.randomRange.x, cc.randomMinus1To1() * this.randomRange.y);
    },

    clearRepeater: function clearRepeater() {
        this.unschedule(this.addSpawn);
    }
});

cc._RFpop();
},{}],"ProgressBarCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, '84a43yb9OxBX6HMQxPzHQyz', 'ProgressBarCtrl');
// cases/02_ui/04_progressbar/ProgressBar/ProgressBarCtrl.js

cc.Class({
    "extends": cc.Component,

    properties: {
        speed: 10,
        horizontalBar: {
            type: cc.ProgressBar,
            "default": null
        },
        horizontalBarReverse: {
            type: cc.ProgressBar,
            "default": null
        },
        verticalBar: {
            type: cc.ProgressBar,
            "default": null
        },
        verticalBarReverse: {
            type: cc.ProgressBar,
            "default": null
        }
    },

    onLoad: function onLoad() {
        this._pingpong = true;
        this.verticalBar.progress = 0;
        this.horizontalBar.progress = 0;
        this.verticalBarReverse.progress = 0;
        this.horizontalBarReverse.progress = 0;
    },

    update: function update(dt) {
        this._updateProgressBar(this.verticalBar, dt);
        this._updateProgressBar(this.horizontalBar, dt);
        this._updateProgressBar(this.verticalBarReverse, dt);
        this._updateProgressBar(this.horizontalBarReverse, dt);
    },

    _updateProgressBar: function _updateProgressBar(progressBar, dt) {
        var progress = progressBar.progress;
        if (progress < 1.0 && this._pingpong) {
            progress += dt * this.speed;
        } else {
            progress -= dt * this.speed;
            this._pingpong = progress <= 0;
        }
        progressBar.progress = progress;
    }
});

cc._RFpop();
},{}],"Push":[function(require,module,exports){
"use strict";
cc._RFpush(module, '48510+xGvVMBapIXNyrCMz/', 'Push');
// cases/anysdk/07_push/Push.js

cc.Class({
    "extends": cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        if (cc.sys.isMobile) {
            this.pushPlugin = anysdk.agentManager.getPushPlugin();
            if (this.pushPlugin) {
                this.pushPlugin.setListener(this.onPushResult, this);
            }
        }
    },

    startPush: function startPush() {
        if (!this.pushPlugin) return;
        this.pushPlugin.startPush();
    },

    closePush: function closePush() {
        if (!this.pushPlugin) return;
        this.pushPlugin.closePush();
    },

    setAlias: function setAlias() {
        if (!this.pushPlugin) return;
        this.pushPlugin.setAlias("ivenKill");
    },

    delAlias: function delAlias() {
        if (!this.pushPlugin) return;
        this.pushPlugin.delAlias("ivenKill");
    },

    setTags: function setTags() {
        if (!this.pushPlugin) return;
        this.pushPlugin.setTags(["easy", "fast", "qwe"]);
    },

    delTags: function delTags() {
        if (!this.pushPlugin) return;
        this.pushPlugin.delTags(["easy", "qwe"]);
    },

    onPushResult: function onPushResult(code, msg) {
        cc.log('########## PUSH RESULT ########## code: ' + code + ',msg: ' + msg);
        switch (code) {
            case anysdk.PushActionResultCode.kPushReceiveMessage:
                cc.log("########## kPushReceiveMessage ##########");
                break;
            default:
                break;
        }
    }

});

cc._RFpop();
},{}],"Puzzle":[function(require,module,exports){
"use strict";
cc._RFpush(module, '6289cZl6zJEcLVQd60JnAzW', 'Puzzle');
// cases/tiledmap/Puzzle.js


var MoveDirection = cc.Enum({
    NONE: 0,
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
});

var minTilesCount = 2;
var mapMoveStep = 1;
var minMoveValue = 50;

cc.Class({
    'extends': cc.Component,
    editor: {
        requireComponent: cc.TiledMap
    },

    properties: {
        _touchStartPos: {
            'default': null,
            serializable: false
        },
        _touching: {
            'default': false,
            serializable: false
        },

        _isMapLoaded: {
            'default': false,
            serializable: false
        },

        floorLayerName: {
            'default': 'floor'
        },

        barrierLayerName: {
            'default': 'barrier'
        },

        objectGroupName: {
            'default': 'players'
        },

        startObjectName: {
            'default': 'SpawnPoint'
        },

        successObjectName: {
            'default': 'SuccessPoint'
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this._player = this.node.getChildByName('player');
        if (!this._isMapLoaded) {
            this._player.active = false;
        }

        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function onKeyPressed(keyCode, event) {
                self._onKeyPressed(keyCode, event);
            }
        }, self.node);

        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            self._touching = true;
            self._touchStartPos = event.touch.getLocation();
        }, self);
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (!self._touching) return;

            self._touching = false;
            var touchPos = event.touch.getLocation();
            var movedX = touchPos.x - self._touchStartPos.x;
            var movedY = touchPos.y - self._touchStartPos.y;
            var movedXValue = Math.abs(movedX);
            var movedYValue = Math.abs(movedY);
            if (movedXValue < minMoveValue && movedYValue < minMoveValue) {
                // touch moved not enough
                return;
            }

            var newTile = cc.p(this._curTile.x, this._curTile.y);
            var mapMoveDir = MoveDirection.NONE;
            if (movedXValue >= movedYValue) {
                // move to right or left
                if (movedX > 0) {
                    newTile.x += 1;
                    mapMoveDir = MoveDirection.LEFT;
                } else {
                    newTile.x -= 1;
                    mapMoveDir = MoveDirection.RIGHT;
                }
            } else {
                // move to up or down
                if (movedY > 0) {
                    newTile.y -= 1;
                    mapMoveDir = MoveDirection.DOWN;
                } else {
                    newTile.y += 1;
                    mapMoveDir = MoveDirection.UP;
                }
            }
            this._tryMoveToNewTile(newTile, mapMoveDir);
        }, self);
    },

    restartGame: function restartGame() {
        this._succeedLayer.active = false;
        this._initMapPos();
        this._curTile = this._startTile;
        this._updatePlayerPos();
    },

    start: function start(err) {
        if (err) return;

        // init the map position
        this._initMapPos();

        // init the succeed layer
        this._succeedLayer = this.node.getParent().getChildByName('succeedLayer');
        this._succeedLayer.active = false;

        // init the player position
        this._tiledMap = this.node.getComponent('cc.TiledMap');
        var objectGroup = this._tiledMap.getObjectGroup(this.objectGroupName);
        if (!objectGroup) return;

        var startObj = objectGroup.getObject(this.startObjectName);
        var endObj = objectGroup.getObject(this.successObjectName);
        if (!startObj || !endObj) return;

        var startPos = cc.p(startObj.sgNode.x, startObj.sgNode.y);
        var endPos = cc.p(endObj.sgNode.x, endObj.sgNode.y);

        this._layerFloor = this._tiledMap.getLayer(this.floorLayerName);
        this._layerBarrier = this._tiledMap.getLayer(this.barrierLayerName);
        if (!this._layerFloor || !this._layerBarrier) return;

        this._curTile = this._startTile = this._getTilePos(startPos);
        this._endTile = this._getTilePos(endPos);

        if (this._player) {
            this._updatePlayerPos();
            this._player.active = true;
        }

        this._isMapLoaded = true;
    },

    _initMapPos: function _initMapPos() {
        this.node.setPosition(cc.visibleRect.bottomLeft);
    },

    _updatePlayerPos: function _updatePlayerPos() {
        var pos = this._layerFloor.getPositionAt(this._curTile);
        this._player.setPosition(pos);
    },

    _getTilePos: function _getTilePos(posInPixel) {
        var mapSize = this.node.getContentSize();
        var tileSize = this._tiledMap.getTileSize();
        var x = Math.floor(posInPixel.x / tileSize.width);
        var y = Math.floor((mapSize.height - posInPixel.y) / tileSize.height);

        return cc.p(x, y);
    },

    _onKeyPressed: function _onKeyPressed(keyCode, event) {
        if (!this._isMapLoaded || this._succeedLayer.active) return;

        var newTile = cc.p(this._curTile.x, this._curTile.y);
        var mapMoveDir = MoveDirection.NONE;
        switch (keyCode) {
            case cc.KEY.up:
                newTile.y -= 1;
                mapMoveDir = MoveDirection.DOWN;
                break;
            case cc.KEY.down:
                newTile.y += 1;
                mapMoveDir = MoveDirection.UP;
                break;
            case cc.KEY.left:
                newTile.x -= 1;
                mapMoveDir = MoveDirection.RIGHT;
                break;
            case cc.KEY.right:
                newTile.x += 1;
                mapMoveDir = MoveDirection.LEFT;
                break;
            default:
                return;
        }

        this._tryMoveToNewTile(newTile, mapMoveDir);
    },

    _tryMoveToNewTile: function _tryMoveToNewTile(newTile, mapMoveDir) {
        var mapSize = this._tiledMap.getMapSize();
        if (newTile.x < 0 || newTile.x >= mapSize.width) return;
        if (newTile.y < 0 || newTile.y >= mapSize.height) return;

        if (this._layerBarrier.getTileGIDAt(newTile)) {
            cc.log('This way is blocked!');
            return false;
        }

        // update the player position
        this._curTile = newTile;
        this._updatePlayerPos();

        // move the map if necessary
        this._tryMoveMap(mapMoveDir);

        // check the player is success or not
        if (cc.pointEqualToPoint(this._curTile, this._endTile)) {
            cc.log('succeed');
            this._succeedLayer.active = true;
        }
    },

    _tryMoveMap: function _tryMoveMap(moveDir) {
        // get necessary data
        var mapContentSize = this.node.getContentSize();
        var mapPos = this.node.getPosition();
        var playerPos = this._player.getPosition();
        var viewSize = cc.size(cc.visibleRect.width, cc.visibleRect.height);
        var tileSize = this._tiledMap.getTileSize();
        var minDisX = minTilesCount * tileSize.width;
        var minDisY = minTilesCount * tileSize.height;

        var disX = playerPos.x + mapPos.x;
        var disY = playerPos.y + mapPos.y;
        var newPos;
        switch (moveDir) {
            case MoveDirection.UP:
                if (disY < minDisY) {
                    newPos = cc.p(mapPos.x, mapPos.y + tileSize.height * mapMoveStep);
                }
                break;
            case MoveDirection.DOWN:
                if (viewSize.height - disY - tileSize.height < minDisY) {
                    newPos = cc.p(mapPos.x, mapPos.y - tileSize.height * mapMoveStep);
                }
                break;
            case MoveDirection.LEFT:
                if (viewSize.width - disX - tileSize.width < minDisX) {
                    newPos = cc.p(mapPos.x - tileSize.width * mapMoveStep, mapPos.y);
                }
                break;
            case MoveDirection.RIGHT:
                if (disX < minDisX) {
                    newPos = cc.p(mapPos.x + tileSize.width * mapMoveStep, mapPos.y);
                }
                break;
            default:
                return;
        }

        if (newPos) {
            // calculate the position range of map
            var minX = viewSize.width - mapContentSize.width - cc.visibleRect.left;
            var maxX = cc.visibleRect.left.x;
            var minY = viewSize.height - mapContentSize.height - cc.visibleRect.bottom;
            var maxY = cc.visibleRect.bottom.y;

            if (newPos.x < minX) newPos.x = minX;
            if (newPos.x > maxX) newPos.x = maxX;
            if (newPos.y < minY) newPos.y = minY;
            if (newPos.y > maxY) newPos.y = maxY;

            if (!cc.pointEqualToPoint(newPos, mapPos)) {
                cc.log('Move the map to new position: ', newPos);
                this.node.setPosition(newPos);
            }
        }
    }
});

cc._RFpop();
},{}],"REC":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'f2295koIwFChZh8D60Ws2f/', 'REC');
// cases/anysdk/10_rec/REC.js

cc.Class({
    "extends": cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        if (cc.sys.isMobile) {
            this.recPlugin = anysdk.agentManager.getRECPlugin();
            if (this.recPlugin) {
                this.recPlugin.setListener(this.onRECResult, this);
            }
        }
    },

    startRecording: function startRecording() {
        if (!this.recPlugin) return;
        this.recPlugin.startRecording();
    },

    stopRecording: function stopRecording() {
        if (!this.recPlugin) return;
        this.recPlugin.stopRecording();
    },

    share: function share() {
        if (!this.recPlugin) return;
        var info = {
            Video_Title: "RECSDK",
            Video_Desc: "RECSDK是一个神奇的SDK"
        };
        this.recPlugin.share(info);
    },

    pauseRecording: function pauseRecording() {
        if (!this.recPlugin || !this.recPlugin.pauseRecording) return;
        this.recPlugin.pauseRecording();
    },

    resumeRecording: function resumeRecording() {
        if (!this.recPlugin || !this.recPlugin.resumeRecording) return;
        this.recPlugin.resumeRecording();
    },

    isAvailable: function isAvailable() {
        if (!this.recPlugin || !this.recPlugin.isAvailable) return false;
        var flag = this.rec.isAvailable();
        cc.log('########## isAvailable ########## code: ' + flag);
        return flag;
    },

    showToolBar: function showToolBar() {
        if (!this.recPlugin || !this.recPlugin.showToolBar) return;
        this.recPlugin.showToolBar();
    },

    hideToolBar: function hideToolBar() {
        if (!this.recPlugin || !this.recPlugin.hideToolBar) return;
        this.recPlugin.hideToolBar();
    },

    isRecording: function isRecording() {
        if (!this.recPlugin || !this.recPlugin.isRecording) return false;
        var flag = this.rec.isRecording();
        cc.log('########## isRecording ########## code: ' + flag);
        return flag;
    },

    showVideoCenter: function showVideoCenter() {
        if (!this.recPlugin || !this.recPlugin.showVideoCenter) return;
        this.recPlugin.showVideoCenter();
    },

    enterPlatform: function enterPlatform() {
        if (!this.recPlugin || !this.recPlugin.enterPlatform) return;
        this.recPlugin.enterPlatform();
    },

    setMetaData: function setMetaData() {
        if (!this.recPlugin || !this.recPlugin.setMetaData) return;
        var data = { ext: "login" };
        this.recPlugin.setMetaData(data);
    },

    onRECResult: function onRECResult(code, msg) {
        cc.log('########## REC RESULT ########## code: ' + code + ',msg: ' + msg);
        switch (code) {
            case anysdk.RECResultCode.kRECInitSuccess:
                //初始化成功
                cc.log("########## kRECInitSuccess ##########");
                break;
            case anysdk.RECResultCode.kRECInitFail:
                //初始化失败
                cc.log("########## kRECInitFail ##########");
                break;
            case anysdk.RECResultCode.kRECStartRecording:
                //开始录制
                cc.log("########## kRECStartRecording ##########");
                break;
            case anysdk.RECResultCode.kRECStopRecording:
                //结束录制
                cc.log("########## kRECStopRecording ##########");
                break;
            case anysdk.RECResultCode.kRECPauseRecording:
                //暂停录制
                cc.log("########## kRECPauseRecording ##########");
                break;
            case anysdk.RECResultCode.kRECResumeRecording:
                //恢复录制
                cc.log("########## kRECResumeRecording ##########");
                break;
            case anysdk.RECResultCode.kRECEnterSDKPage:
                //进入SDK页面
                cc.log("########## kRECEnterSDKPage ##########");
                break;
            case anysdk.RECResultCode.kRECQuitSDKPage:
                //退出SDK页面
                cc.log("########## kRECQuitSDKPage ##########");
                break;
            case anysdk.RECResultCode.kRECShareSuccess:
                //视频分享成功
                cc.log("########## kRECShareSuccess ##########");
                break;
            case anysdk.RECResultCode.kRECShareFail:
                //视频分享失败
                cc.log("########## kRECShareFail ##########");
                break;
            default:
                break;
        }
    }
});

cc._RFpop();
},{}],"ReferenceTypeProperties":[function(require,module,exports){
"use strict";
cc._RFpush(module, '9341f3fDdBMjJLKh4D+kJJK', 'ReferenceTypeProperties');
// cases/05_scripting/01_properties/ReferenceTypeProperties.js

var MyCustomComponent = require('MyCustomComponent');

cc.Class({
    'extends': cc.Component,

    properties: {
        myNode: {
            'default': null,
            type: cc.Node
        },
        mySprite: {
            'default': null,
            type: cc.Sprite
        },
        myLabel: {
            'default': null,
            type: cc.Label
        },
        myComponent: {
            'default': null,
            type: MyCustomComponent
        },
        mySpriteFrame: {
            'default': null,
            type: cc.SpriteFrame
        },
        myAtlas: {
            'default': null,
            type: cc.SpriteAtlas
        },
        myPrefab: {
            'default': null,
            type: cc.Prefab
        },
        myAudioClip: {
            'default': null,
            url: cc.AudioClip
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.myLabel.string = this.myComponent.getPower().toString();
    },

    // called every frame
    update: function update(dt) {}
});

cc._RFpop();
},{"MyCustomComponent":"MyCustomComponent"}],"RichTextEvents":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'a0c7fwrZUpN7JS8x9rEtSfl', 'RichTextEvents');
// cases/02_ui/11_richtext/RichTextEvents.js

cc.Class({
    "extends": cc.Component,

    properties: {
        logMessage: {
            "default": null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},

    clickme: function clickme(event) {
        var clickPosition = event.touch.getLocation();
        this.logMessage.string = "Clicked at: " + parseFloat(clickPosition.x.toFixed()) + ", y = " + parseFloat(clickPosition.y.toFixed(2));
    }

});

cc._RFpop();
},{}],"RuntimeLabel":[function(require,module,exports){
"use strict";
cc._RFpush(module, '5530cLc2wJFVpWkBxALC33G', 'RuntimeLabel');
// cases/graphics/RuntimeLabel.js

cc.Class({
    'extends': cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        var isRuntime = typeof runtime !== 'undefined';
        if (!isRuntime) {
            this.node.active = false;
        }
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"SceneList":[function(require,module,exports){
"use strict";
cc._RFpush(module, '473b8wxs55OsJvoxVdYCzTF', 'SceneList');
// scripts/Global/SceneList.js

cc.Class({
    'extends': cc.Component,

    properties: {
        itemPrefab: {
            'default': null,
            type: cc.Prefab
        },
        initItemCount: 0,
        scrollView: cc.ScrollView,
        bufferZone: 0 },

    // when item is away from bufferZone, we relocate it
    createItem: function createItem(x, y, name, url) {
        var item = cc.instantiate(this.itemPrefab);
        var itemComp = item.getComponent('ListItem');
        var label = itemComp.label;
        label.string = name;

        if (url) {
            itemComp.url = url;
        }

        // item.width = w;
        item.x = x;
        item.y = y;
        this.node.addChild(item);
        return item;
    },

    init: function init(menu) {
        this.menu = menu;
        this.sceneList = [];
        this.itemList = [];
        this.updateTimer = 0;
        this.updateInterval = 0.2;
        this.lastContentPosY = 0; // use this variable to detect if we are scrolling up or down
        this.initList();
    },

    // use this for initialization
    initList: function initList() {
        var scenes = cc.game._sceneInfos;
        var dict = {};

        if (scenes) {
            var i, j;
            for (i = 0; i < scenes.length; ++i) {
                var url = scenes[i].url;
                var dirname = cc.path.dirname(url).replace('db://assets/cases/', '');
                if (dirname === 'db://assets/resources/test assets') {
                    continue;
                }
                var scenename = cc.path.basename(url, '.fire');
                if (scenename === 'TestList') continue;

                if (!dirname) dirname = '_root';
                if (!dict[dirname]) {
                    dict[dirname] = {};
                }
                dict[dirname][scenename] = url;
            }
        } else {
            cc.log('failed to get scene list!');
        }
        // compile scene dict to an array
        var dirs = Object.keys(dict);
        dirs.sort();
        for (var _i = 0; _i < dirs.length; ++_i) {
            this.sceneList.push({
                name: dirs[_i],
                url: null
            });
            var scenenames = Object.keys(dict[dirs[_i]]);
            scenenames.sort();
            for (var _j = 0; _j < scenenames.length; ++_j) {
                var _name = scenenames[_j];
                this.sceneList.push({
                    name: _name,
                    url: dict[dirs[_i]][_name]
                });
            }
        }
        var y = 0;
        this.node.height = (this.sceneList.length + 1) * 50;
        for (var _i2 = 0; _i2 < this.initItemCount; ++_i2) {
            var item = cc.instantiate(this.itemPrefab).getComponent('ListItem');
            var itemInfo = this.sceneList[_i2];
            item.init(this.menu);
            this.node.addChild(item.node);
            y -= 50;
            item.updateItem(_i2, y, itemInfo.name, itemInfo.url);
            this.itemList.push(item);
        }
    },

    getPositionInView: function getPositionInView(item) {
        // get item position in scrollview's node space
        var worldPos = item.parent.convertToWorldSpaceAR(item.position);
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    },

    update: function update(dt) {
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) {
            return; // we don't need to do the math every frame
        }
        this.updateTimer = 0;
        var items = this.itemList;
        var buffer = this.bufferZone;
        var isDown = this.node.y < this.lastContentPosY; // scrolling direction
        var curItemCount = this.itemList.length;
        var offset = 50 * curItemCount;
        for (var i = 0; i < curItemCount; ++i) {
            var item = items[i];
            var itemNode = item.node;
            var viewPos = this.getPositionInView(itemNode);
            if (isDown) {
                // if away from buffer zone and not reaching top of content
                if (viewPos.y < -buffer && itemNode.y + offset < 0) {
                    var newIdx = item.index - curItemCount;
                    var newInfo = this.sceneList[newIdx];
                    item.updateItem(newIdx, itemNode.y + offset, newInfo.name, newInfo.url);
                }
            } else {
                // if away from buffer zone and not reaching bottom of content
                if (viewPos.y > buffer && itemNode.y - offset > -this.node.height) {
                    var newIdx = item.index + curItemCount;
                    var newInfo = this.sceneList[newIdx];
                    item.updateItem(newIdx, itemNode.y - offset, newInfo.name, newInfo.url);
                }
            }
        }
        // update lastContentPosY
        this.lastContentPosY = this.node.y;
    }
});

cc._RFpop();
},{}],"Share":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'b5f0bDMni5PDovfKUWhHFG3', 'Share');
// cases/anysdk/03_share/Share.js

cc.Class({
    'extends': cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        if (cc.sys.isMobile) {
            this.sharePlugin = anysdk.agentManager.getSharePlugin();
            if (this.sharePlugin) {
                this.sharePlugin.setListener(this.onShareResult, this);
            }
        }
    },

    share: function share() {
        if (!this.sharePlugin) return;
        var info = {
            'title': 'Dark Slash', // 标题名称
            'titleUrl': 'http://www.cocos.com', // 标题链接
            'site': 'Dark Slash', // 标题网站名
            'siteUrl': 'http://www.cocos.com', // 标题网站链接
            'text': '暗黑斩游戏制作演示 - Cocos Creator制造', //分享内容
            'comment': '无', //评论
            'description': '暗黑斩游戏制作演示 - Cocos Creator制造', //描述
            'imageTitle': 'Dark Slash', //图片标题
            'imageUrl': 'http://veewo.com/promo/img/darkslash_web_web_banner.png', //分享图片链接
            'url': 'http://www.veewo.com/games/?name=darkslash' };
        //分享链接
        this.sharePlugin.share(info);
    },

    onShareResult: function onShareResult(code, msg) {
        cc.log('########## SHARE RESULT ########## code: ' + code + ',msg: ' + msg);
        switch (code) {
            case anysdk.ShareResultCode.kShareSuccess:
                cc.log("########## kShareSuccess ##########");
                break;
            case anysdk.ShareResultCode.kShareFail:
                cc.log("########## kShareFail ##########");
                break;
            case anysdk.ShareResultCode.kShareCancel:
                cc.log("########## kShareCancel ##########");
                break;
            case anysdk.ShareResultCode.kShareNetworkError:
                cc.log("########## kShareNetworkError ##########");
                break;
            default:
                break;
        }
    }
});

cc._RFpop();
},{}],"SheepAnimationCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'ae6fcR8cuFGRYHW525VJD/k', 'SheepAnimationCtrl');
// cases/03_gameplay/03_animation/SpriteAnimation/SheepAnimationCtrl.js

cc.Class({
    'extends': cc.Component,

    properties: {
        sheepAnim: {
            'default': null,
            type: cc.Animation
        }
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
    onLoad: function onLoad() {
        var anim = this.sheepAnim;
        setTimeout(function () {
            anim.play('sheep_jump');
        }, 2000);
    },

    // called every frame
    update: function update(dt) {}
});

cc._RFpop();
},{}],"Shooter":[function(require,module,exports){
"use strict";
cc._RFpush(module, '092a3wYF7pBULdP9SLwGUBQ', 'Shooter');
// cases/collider/Shooter/Shooter.js

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
        bullet: {
            "default": null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var _this = this;

        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;

        var scene = cc.director.getScene();

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function onTouchBegan(touch, event) {
                var touchLoc = touch.getLocation();

                var bullet = cc.instantiate(_this.bullet);
                bullet.position = touchLoc;
                bullet.active = true;
                bullet.zIndex = -1;
                scene.addChild(bullet);
                return true;
            }
        }, this.node);
    },

    onDisable: function onDisable() {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"ShowCollider":[function(require,module,exports){
"use strict";
cc._RFpush(module, '5a6dfRzhTBMp5U3il8DJmBZ', 'ShowCollider');
// cases/collider/Shape/ShowCollider.js

cc.Class({
    'extends': cc.Component,

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

    onBtnClick: function onBtnClick(event) {
        var target = event.target;
        var shapeClassName = 'cc.' + target.name + 'Collider';
        var nodePath = 'Canvas/root/' + target.parent.name;
        var collider = cc.find(nodePath).getComponent(shapeClassName);
        collider.enabled = !collider.enabled;

        var label = target.getChildByName('Label').getComponent(cc.Label);
        if (collider.enabled) {
            label.string = label.string.replace('Show', 'Hide');
        } else {
            label.string = label.string.replace('Hide', 'Show');
        }
    }
});

cc._RFpop();
},{}],"SimpleAction":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'b6067a1+J5FW4G30nmVLU/d', 'SimpleAction');
// cases/03_gameplay/02_actions/SimpleAction.js

cc.Class({
    "extends": cc.Component,

    properties: {
        jumper: {
            "default": null,
            type: cc.Node
        },
        colorNode: {
            "default": null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.squashAction = cc.scaleTo(0.2, 1, 0.6);
        this.stretchAction = cc.scaleTo(0.2, 1, 1.2);
        this.scaleBackAction = cc.scaleTo(0.1, 1, 1);
        this.moveUpAction = cc.moveBy(1, cc.p(0, 200)).easing(cc.easeCubicActionOut());
        this.moveDownAction = cc.moveBy(1, cc.p(0, -200)).easing(cc.easeCubicActionIn());
        var seq = cc.sequence(this.squashAction, this.stretchAction, this.moveUpAction, this.scaleBackAction, this.moveDownAction, this.squashAction, this.scaleBackAction);
        // this is a temp api which will be combined to cc.Node
        this.jumper.runAction(seq);

        this.colorNode.runAction(cc.sequence(cc.tintTo(2, 255, 0, 0), cc.delayTime(0.5), cc.fadeOut(1), cc.delayTime(0.5), cc.fadeIn(1), cc.delayTime(0.5), cc.tintTo(2, 255, 255, 255)).repeat(2));
    }
});

cc._RFpop();
},{}],"SimpleButtonCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, '68675KwfElAdaumPl1byNh7', 'SimpleButtonCtrl');
// cases/02_ui/03_button/SimpleButton/SimpleButtonCtrl.js

var i18n = require('i18n');

cc.Class({
    'extends': cc.Component,

    properties: {
        buttonLeft: cc.Button,
        buttonRight: cc.Button,
        display: cc.Label
    },

    onBtnLeftClicked: function onBtnLeftClicked() {
        console.log('Left button clicked!');
        this.display.textKey = i18n.t("cases/02_ui/03_button/SimpleButton.js.1");
    },

    onBtnRightClicked: function onBtnRightClicked() {
        console.log('Right button clicked!');
        this.display.textKey = i18n.t("cases/02_ui/03_button/SimpleButton.js.2");
    }
});

cc._RFpop();
},{"i18n":"i18n"}],"SimpleKeyboardMovement":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'c3f971iyCdIh6xdaO49XP0F', 'SimpleKeyboardMovement');
// cases/03_gameplay/01_player_control/KeyboardInput/SimpleKeyboardMovement.js

cc.Class({
    'extends': cc.Component,

    properties: {
        sheep: {
            'default': null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        // set initial move direction
        this.turnRight();

        //add keyboard input listener to call turnLeft and turnRight
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    destroy: function destroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    onKeyDown: function onKeyDown(event) {
        switch (event.keyCode) {
            case cc.KEY.a:
            case cc.KEY.left:
                console.log('turn left');
                this.turnLeft();
                break;
            case cc.KEY.d:
            case cc.KEY.right:
                console.log('turn right');
                this.turnRight();
                break;
        }
    },

    // called every frame
    update: function update(dt) {
        this.sheep.x += this.speed * dt;
    },

    turnLeft: function turnLeft() {
        this.speed = -100;
        this.sheep.scaleX = 1;
    },

    turnRight: function turnRight() {
        this.speed = 100;
        this.sheep.scaleX = -1;
    }
});

cc._RFpop();
},{}],"SimpleMotion":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'fde33rWt81MvZWO7QQ3jv3j', 'SimpleMotion');
// cases/collider/Utils/SimpleMotion.js

cc.Class({
    "extends": cc.Component,

    properties: {
        moveSpeed: 100,
        rotationSpeed: 90
    },

    // use this for initialization
    onLoad: function onLoad() {},

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        this.node.x += dt * this.moveSpeed;
        this.node.rotation += dt * this.rotationSpeed;
    }
});

cc._RFpop();
},{}],"SingletonCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'fcfefvjPgdGEKnfOwuoIVJD', 'SingletonCtrl');
// cases/05_scripting/09_singleton/SingletonCtrl.js

var Singleton = require("Singleton");

cc.Class({
    "extends": cc.Component,

    properties: {},

    start: function start() {
        var node = new cc.Node("Monster");
        var sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = Singleton.instance.monsterIcon;
        node.parent = this.node;
    }
});

cc._RFpop();
},{"Singleton":"Singleton"}],"Singleton":[function(require,module,exports){
"use strict";
cc._RFpush(module, '379d2K4GUtCv7pB9+wuz4Lb', 'Singleton');
// cases/05_scripting/09_singleton/Singleton.js

var Singleton = cc.Class({
    "extends": cc.Component,

    properties: {
        monsterIcon: {
            "default": null,
            type: cc.SpriteFrame
        }
    },

    statics: {
        instance: null
    },

    onLoad: function onLoad() {
        Singleton.instance = this;
    }
});

cc._RFpop();
},{}],"SliderCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, '051d5Epx65ARZ9itjsuO9NL', 'SliderCtrl');
// cases/02_ui/12_slider/Slider/SliderCtrl.js

cc.Class({
    "extends": cc.Component,

    properties: {
        image: cc.Node,
        music: cc.AudioSource,
        slider_h: cc.Slider,
        slider_v: cc.Slider
    },

    onLoad: function onLoad() {
        this.slider_v.progress = 0.5;
        this.slider_h.progress = 0.5;
        this._updateImageOpacity(this.slider_v.progress);
        this._updateMusicVolume(this.slider_h.progress);
    },

    _updateImageOpacity: function _updateImageOpacity(progress) {
        this.image.opacity = progress * 255;
    },

    _updateMusicVolume: function _updateMusicVolume(progress) {
        this.music.volume = progress;
    },

    onSliderVEvent: function onSliderVEvent(sender, eventType) {
        this._updateImageOpacity(sender.progress);
    },

    onSliderHEvent: function onSliderHEvent(sender, eventType) {
        this._updateMusicVolume(sender.progress);
    }
});

cc._RFpop();
},{}],"Social":[function(require,module,exports){
"use strict";
cc._RFpush(module, '5d4cc2fij5K8ZgMqgt7hUtM', 'Social');
// cases/anysdk/06_social/Social.js

cc.Class({
	"extends": cc.Component,

	properties: {},

	// use this for initialization
	onLoad: function onLoad() {
		if (cc.sys.isMobile) {
			this.socialPlugin = anysdk.agentManager.getSocialPlugin();
			if (this.socialPlugin) {
				this.socialPlugin.setListener(this.onSocialResult, this);
			}
		}
	},
	submitScore: function submitScore() {
		if (!this.socialPlugin) return;
		var score = 131;
		this.socialPlugin.submitScore("friend", score);
	},
	showLeaderboard: function showLeaderboard() {
		if (!this.socialPlugin) return;
		this.socialPlugin.showLeaderboard("friend");
	},
	unlockAchievement: function unlockAchievement() {
		if (!this.socialPlugin) return;
		var achInfo = { "rank": "friends" };
		this.socialPlugin.unlockAchievement(achInfo);
	},

	showAchievements: function showAchievements() {
		if (!this.socialPlugin) return;
		this.socialPlugin.showAchievements();
	},

	signIn: function signIn() {
		if (!this.socialPlugin) return;
		this.socialPlugin.signIn();
	},

	signOut: function signOut() {
		if (!this.socialPlugin) return;
		this.socialPlugin.signOut();
	},

	onSocialResult: function onSocialResult(code, msg) {
		cc.log('########## SOCIAL RESULT ########## code: ' + code + ',msg: ' + msg);
		switch (code) {
			case anysdk.SocialRetCode.kScoreSubmitSucceed:
				cc.log("########## kScoreSubmitSucceed ##########");
				break;
			case anysdk.SocialRetCode.kScoreSubmitfail:
				cc.log("########## kScoreSubmitfail ##########");
				break;
			case anysdk.SocialRetCode.kAchUnlockSucceed:
				cc.log("########## kAchUnlockSucceed ##########");
				break;
			case anysdk.SocialRetCode.kAchUnlockFail:
				cc.log("########## kAchUnlockFail ##########");
				break;
			case anysdk.SocialRetCode.kSocialSignInSucceed:
				cc.log("########## kSocialSignInSucceed ##########");
				break;
			case anysdk.SocialRetCode.kSocialSignOutSucceed:
				cc.log("########## kSocialSignOutSucceed ##########");
				break;
			case anysdk.SocialRetCode.kSocialSignOutFail:
				cc.log("########## kSocialSignOutFail ##########");
				break;
			case anysdk.SocialRetCode.kSocialSignOutFail:
				cc.log("########## kSocialSignOutFail ##########");
				break;
			case anysdk.SocialRetCode.kSocialGetGameFriends:
				cc.log("########## kSocialGetGameFriends ##########");
				break;
		}
	}
});

cc._RFpop();
},{}],"SpineCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, '91115OWZ9hJkIXaqCNRUsZC', 'SpineCtrl');
// cases/spine/SpineCtrl.js

cc.Class({
    'extends': cc.Component,
    editor: {
        requireComponent: sp.Skeleton
    },

    properties: {
        mixTime: 0.2
    },

    onLoad: function onLoad() {
        var spine = this.spine = this.getComponent('sp.Skeleton');
        this._setMix('walk', 'run');
        this._setMix('run', 'jump');
        this._setMix('walk', 'jump');

        spine.setStartListener(function (track) {
            var entry = spine.getCurrent(track);
            if (entry) {
                var animationName = entry.animation ? entry.animation.name : "";
                cc.log("[track %s] start: %s", track, animationName);
            }
        });
        spine.setEndListener(function (track) {
            cc.log("[track %s] end", track);
        });
        spine.setCompleteListener(function (track, loopCount) {
            cc.log("[track %s] complete: %s", track, loopCount);
        });
        spine.setEventListener(function (track, event) {
            cc.log("[track %s] event: %s, %s, %s, %s", track, event.data.name, event.intValue, event.floatValue, event.stringValue);
        });

        // var self = this;
        // cc.eventManager.addListener({
        //     event: cc.EventListener.TOUCH_ALL_AT_ONCE,
        //     onTouchesBegan () {
        //         self.toggleTimeScale();
        //     }
        // }, this.node);
    },

    // OPTIONS

    toggleDebugSlots: function toggleDebugSlots() {
        this.spine.debugSlots = !this.spine.debugSlots;
    },

    toggleDebugBones: function toggleDebugBones() {
        this.spine.debugBones = !this.spine.debugBones;
    },

    toggleTimeScale: function toggleTimeScale() {
        if (this.spine.timeScale === 1.0) {
            this.spine.timeScale = 0.3;
        } else {
            this.spine.timeScale = 1.0;
        }
    },

    // ANIMATIONS

    stop: function stop() {
        this.spine.clearTrack(0);
    },

    walk: function walk() {
        this.spine.setAnimation(0, 'walk', true);
    },

    run: function run() {
        this.spine.setAnimation(0, 'run', true);
    },

    jump: function jump() {
        var oldAnim = this.spine.animation;
        this.spine.setAnimation(0, 'jump', false);
        if (oldAnim) {
            this.spine.addAnimation(0, oldAnim === 'run' ? 'run' : 'walk', true, 0);
        }
    },

    shoot: function shoot() {
        this.spine.setAnimation(1, 'shoot', false);
    },

    //

    _setMix: function _setMix(anim1, anim2) {
        this.spine.setMix(anim1, anim2, this.mixTime);
        this.spine.setMix(anim2, anim1, this.mixTime);
    }
});

cc._RFpop();
},{}],"TagColliderListener":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'cc2a1tfAtlEWoLmkfLbgQS3', 'TagColliderListener');
// cases/collider/Tag/TagColliderListener.js

cc.Class({
    'extends': cc.Component,

    properties: {
        label: {
            'default': null,
            type: cc.Label
        }
    },

    // use this for initialization
    onEnable: function onEnable() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
    },

    onDisable: function onDisable() {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
    },

    onCollisionEnter: function onCollisionEnter(other, self) {
        this.label.string = 'Collision on tag : ' + self.tag;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"TiledSpriteControl":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'e6941HLrIVFLokuMTS8HSUo', 'TiledSpriteControl');
// cases/01_graphics/01_sprite/TiledSprite/TiledSpriteControl.js

cc.Class({
    "extends": cc.Component,

    properties: {

        speed: 100,

        progressBar: {
            "default": null,
            type: cc.Node
        },

        ground: {
            "default": null,
            type: cc.Node
        }
    },

    update: function update(dt) {
        this._updateWdith(this.progressBar, 500, dt);
        this._updateWdith(this.ground, 1000, dt);
    },

    _updateWdith: function _updateWdith(node, range, dt) {
        var width = node.width;
        width = width < range ? width += dt * this.speed : 0;
        node.width = width;
    }

});

cc._RFpop();
},{}],"TouchDragger":[function(require,module,exports){
"use strict";
cc._RFpush(module, '95021X5KjxP369OONe316sH', 'TouchDragger');
// cases/05_scripting/03_events/TouchDragger.js

var TouchDragger = cc.Class({
    'extends': cc.Component,

    properties: {
        propagate: {
            'default': false
        }
    },

    // ...
    // use this for initialization
    onLoad: function onLoad() {
        this.node.opacity = 160;
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            cc.log('Drag stated ...');
            this.opacity = 255;
        }, this.node);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            this.opacity = 255;
            var delta = event.touch.getDelta();
            this.x += delta.x;
            this.y += delta.y;
            if (this.getComponent(TouchDragger).propagate) event.stopPropagation();
        }, this.node);
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            this.opacity = 160;
        }, this.node);
    }
});

cc._RFpop();
},{}],"TouchEvent":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'a14bfaD+gRJKrTVjKwitc53', 'TouchEvent');
// cases/05_scripting/03_events/TouchEvent.js

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

    _callback: null,

    // use this for initialization
    onLoad: function onLoad() {
        this.node.opacity = 100;
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            this.node.opacity = 255;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            this.node.opacity = 100;
            if (this._callback) {
                this._callback();
            }
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function () {
            this.node.opacity = 100;
        }, this);
    }
});

cc._RFpop();
},{}],"User":[function(require,module,exports){
"use strict";
cc._RFpush(module, '936e8EugiJC24zJbx+WjeFx', 'User');
// cases/anysdk/01_user/User.js

cc.Class({
    'extends': cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        if (cc.sys.isMobile) {
            this.userPlugin = anysdk.agentManager.getUserPlugin();
            if (this.userPlugin) {
                this.userPlugin.setListener(this.onUserResult, this);
            }
        }
    },

    login: function login() {
        if (!this.userPlugin) return;
        this.userPlugin.login();
    },

    isLogined: function isLogined() {
        if (!this.userPlugin) return;
        var flag = this.userPlugin.isLogined();
        cc.log("########## isLogined ##########" + flag);
    },

    logout: function logout() {
        if (!this.userPlugin || !this.userPlugin.logout) return;
        this.userPlugin.logout();
    },

    enterPlatform: function enterPlatform() {
        if (!this.userPlugin || !this.userPlugin.enterPlatform) return;
        this.userPlugin.enterPlatform();
    },

    showToolBar: function showToolBar() {
        if (!this.userPlugin || !this.userPlugin.showToolBar) return;
        this.userPlugin.showToolBar(anysdk.ToolBarPlace.kToolBarTopLeft);
    },

    hideToolBar: function hideToolBar() {
        if (!this.userPlugin || !this.userPlugin.hideToolBar) return;
        this.userPlugin.hideToolBar();
    },

    accountSwitch: function accountSwitch() {
        if (!this.userPlugin || !this.userPlugin.accountSwitch) return;
        this.userPlugin.accountSwitch();
    },

    realNameRegister: function realNameRegister() {
        if (!this.userPlugin || !this.userPlugin.realNameRegister) return;
        this.userPlugin.realNameRegister();
    },

    antiAddictionQuery: function antiAddictionQuery() {
        if (!this.userPlugin || !this.userPlugin.antiAddictionQuery) return;
        this.userPlugin.antiAddictionQuery();
    },

    submitLoginGameRole: function submitLoginGameRole() {
        if (!this.userPlugin || !this.userPlugin.submitLoginGameRole) return;
        var data = {
            'roleId': '123456',
            'roleName': 'test',
            'roleLevel': '10',
            'zoneId': '123',
            'zoneName': 'test',
            'dataType': '1',
            'ext': 'login'
        };
        this.userPlugin.submitLoginGameRole(data);
    },

    onUserResult: function onUserResult(code, msg) {
        cc.log('########## USER RESULT ########## code: ' + code + ',msg: ' + msg);
        switch (code) {
            case anysdk.UserActionResultCode.kInitSuccess:
                cc.log("########## kInitSuccess ##########");
                break;
            case anysdk.UserActionResultCode.kInitFail:
                cc.log("########## kInitFail ##########");
                break;
            case anysdk.UserActionResultCode.kLoginSuccess:
                cc.log("########## kLoginSuccess ##########");
                break;
            case anysdk.UserActionResultCode.kLoginNetworkError:
                cc.log("########## kLoginNetworkError ##########");
                break;
            case anysdk.UserActionResultCode.kLoginNoNeed:
                cc.log("########## kLoginNoNeed ##########");
                break;
            case anysdk.UserActionResultCode.kLoginFail:
                cc.log("########## kLoginFail ##########");
                break;
            case anysdk.UserActionResultCode.kLoginCancel:
                cc.log("########## kLoginCancel ##########");
                break;
            case anysdk.UserActionResultCode.kLogoutSuccess:
                cc.log("########## kLogoutSuccess ##########");
                break;
            case anysdk.UserActionResultCode.kLogoutFail:
                cc.log("########## kLogoutFail ##########");
                break;
            case anysdk.UserActionResultCode.kPlatformEnter:
                cc.log("########## kPlatformEnter ##########");
                break;
            case anysdk.UserActionResultCode.kPlatformBack:
                cc.log("########## kPlatformBack ##########");
                break;
            case anysdk.UserActionResultCode.kPausePage:
                cc.log("########## kPausePage ##########");
                break;
            case anysdk.UserActionResultCode.kExitPage:
                cc.log("########## kExitPage ##########");
                break;
            case anysdk.UserActionResultCode.kAntiAddictionQuery:
                cc.log("########## kAntiAddictionQuery ##########");
                break;
            case anysdk.UserActionResultCode.kRealNameRegister:
                cc.log("########## kRealNameRegister ##########");
                break;
            case anysdk.UserActionResultCode.kAccountSwitchSuccess:
                cc.log("########## kAccountSwitchSuccess ##########");
                break;
            case anysdk.UserActionResultCode.kAccountSwitchFail:
                cc.log("########## kAccountSwitchFail ##########");
                break;
            case anysdk.UserActionResultCode.kOpenShop:
                cc.log("########## kOpenShop ##########");
                break;
            default:
                break;
        }
    }

});

cc._RFpop();
},{}],"ValueTypeProperties":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'd9bf6bFb+tF779stLEmjzTV', 'ValueTypeProperties');
// cases/05_scripting/01_properties/ValueTypeProperties.js

cc.Class({
    'extends': cc.Component,

    properties: {
        // number
        myNumber: {
            'default': 0,
            type: cc.Integer
        },
        // string
        myString: {
            'default': 'default text'
        },
        myVec2: {
            'default': cc.Vec2.ZERO
        },
        myColor: {
            'default': cc.Color.WHITE
        },
        myOtherNumber: 0,
        myOtherString: 'no type definition',
        myOtherVec2: cc.Vec2.ONE,
        myOtherColor: cc.Color.BLACK
    },

    // use this for initialization
    onLoad: function onLoad() {},

    // called every frame
    update: function update(dt) {}
});

cc._RFpop();
},{}],"VideoPlayerCtrl":[function(require,module,exports){
"use strict";
cc._RFpush(module, '100b5UtyNJLNaih42ednEgN', 'VideoPlayerCtrl');
// cases/02_ui/09_videoplayer/VideoPlayer/VideoPlayerCtrl.js

cc.Class({
    "extends": cc.Component,

    properties: {
        videoPlayer: {
            "default": null,
            type: cc.VideoPlayer
        },
        statusLabel: {
            "default": null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},

    play: function play() {
        this.videoPlayer.play();
    },

    pause: function pause() {
        this.videoPlayer.pause();
    },

    toggleFullscreen: function toggleFullscreen() {
        this.videoPlayer.isFullscreen = true;
    },

    stop: function stop() {
        this.videoPlayer.stop();
    },

    keepRatioSwitch: function keepRatioSwitch() {
        this.videoPlayer.keepAspectRatio = !this.videoPlayer.keepAspectRatio;
    },

    onVideoPlayerEvent: function onVideoPlayerEvent(sender, event) {
        this.statusLabel.string = event;
    },

    toggleVisibility: function toggleVisibility() {
        this.videoPlayer.enabled = !this.videoPlayer.enabled;
    },

    playOnlineVideo: function playOnlineVideo() {
        this.videoPlayer.resourceType = 0;
        this.videoPlayer.url = "http://benchmark.cocos2d-x.org/cocosvideo.mp4";
        this.videoPlayer.play();
    }

});

cc._RFpop();
},{}],"Wall":[function(require,module,exports){
"use strict";
cc._RFpush(module, '1a279oXNoxFFI516fswAbVo', 'Wall');
// cases/collider/Utils/Wall.js

var WallType = cc.Enum({
    Left: 0,
    Right: 1,
    Top: 2,
    Bottom: 3
});

cc.Class({
    "extends": cc.Component,

    properties: {
        type: {
            "default": WallType.Left,
            type: WallType
        },

        width: 5
    },

    // use this for initialization
    start: function start() {
        var collider = this.getComponent(cc.BoxCollider);
        if (!collider) {
            return;
        }

        var node = this.node;
        var type = this.type;

        var width = cc.winSize.width;
        var height = cc.winSize.height;

        var wallWidth = this.width;

        if (type === WallType.Left) {
            node.height = height;
            node.width = wallWidth;
            node.x = 0;
            node.y = height / 2;
        } else if (type === WallType.Right) {
            node.height = height;
            node.width = wallWidth;
            node.x = width;
            node.y = height / 2;
        } else if (type === WallType.Top) {
            node.width = width;
            node.height = wallWidth;
            node.x = width / 2;
            node.y = height;
        } else if (type === WallType.Bottom) {
            node.width = width;
            node.height = wallWidth;
            node.x = width / 2;
            node.y = 0;
        }

        collider.size = node.getContentSize();
    }
});

cc._RFpop();
},{}],"arc":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'a556aaUmwpNjJWPRek7CPtI', 'arc');
// cases/graphics/example/arc.js

cc.Class({
    'extends': cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        if (cc.director.setClearColor) {
            cc.director.setClearColor(cc.Color.WHITE);
        }

        var g = this.getComponent(cc.Graphics);

        g.lineWidth = 5;
        g.fillColor = cc.hexToColor('#ff0000');

        g.arc(0, 0, 100, Math.PI / 2, Math.PI, false);
        g.lineTo(0, 0);
        g.close();

        g.stroke();
        g.fill();

        g.fillColor = cc.hexToColor('#00ff00');

        g.arc(-10, 10, 100, Math.PI / 2, Math.PI, true);
        g.lineTo(-10, 10);
        g.close();

        g.stroke();
        g.fill();
    },

    onDisable: function onDisable() {
        if (cc.director.setClearColor) {
            cc.director.setClearColor(cc.Color.BLACK);
        }
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"checkbox":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'ca244RHY8xLbprnCDD9dH+B', 'checkbox');
// cases/02_ui/13_checkbox/checkbox.js

cc.Class({
    "extends": cc.Component,

    properties: {
        checkbox: {
            "default": null,
            type: cc.Toggle
        },

        checkBoxEventString: {
            "default": null,
            type: cc.Label
        },

        radioButtonEventString: {
            "default": null,
            type: cc.Label
        },

        radioButton: {
            "default": [],
            type: cc.Toggle
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        if (this.checkbox) {
            this._updateToggleEventString("CheckBox", this.checkBoxEventString, this.checkbox);
        }
    },

    _updateToggleEventString: function _updateToggleEventString(title, label, toggle) {
        if (toggle.isChecked) {
            label.string = title + " is checked.";
        } else {
            label.string = title + " is unchecked.";
        }
    },

    radioButtonClicked: function radioButtonClicked(event, toggle) {
        var index = this.radioButton.indexOf(toggle);
        var title = "RadioButton";
        switch (index) {
            case 0:
                title += "1";
                break;
            case 1:
                title += "2";
                break;
            case 2:
                title += "3";
                break;
            default:
                break;
        }
        this._updateToggleEventString(title, this.radioButtonEventString, toggle);
    },

    checkBoxClicked: function checkBoxClicked(event, toggle) {
        this._updateToggleEventString("CheckBox", this.checkBoxEventString, toggle);
    }
});

cc._RFpop();
},{}],"doodle":[function(require,module,exports){
"use strict";
cc._RFpush(module, '136e6rUnNlCbZ7UezYhQDoQ', 'doodle');
// cases/graphics/demo/doodle.js

// http://codepen.io/Francext/pen/ojwdJ

cc.Class({
    'extends': cc.Component,

    properties: {
        reactivity: 0.5,
        debug: false
    },

    // use this for initialization
    onLoad: function onLoad() {
        var _this = this;

        if (cc.director.setClearColor) {
            cc.director.setClearColor(cc.hexToColor('#d1f1ff'));
        }

        this.graphics = this.getComponent(cc.Graphics);

        this.nodes = [];
        this.ripples = [];
        this.mouse = { x: 0, y: 0 };
        this.color = { r: 0, g: 0, b: 0, a: 255 };
        this.cycle = 90;

        this.createBezierNodes();

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function onTouchBegan(touch, event) {
                _this.mouse = touch.getLocation();
                _this.addRipple();
                return true;
            },
            onTouchEnded: function onTouchEnded() {
                _this.input = false;
            }
        }, this.node);
    },

    onDisable: function onDisable() {
        if (cc.director.setClearColor) {
            cc.director.setClearColor(cc.Color.BLACK);
        }
    },

    createBezierNodes: function createBezierNodes() {

        this.updateColorCycle();

        for (var quantity = 0, len = 6; quantity < len; quantity++) {

            var theta = Math.PI * 2 * quantity / len;

            var x = cc.winSize.width * 0.5 + 0 * Math.cos(theta);
            var y = cc.winSize.height * 0.5 + 0 * Math.sin(theta);

            this.nodes.push({

                x: x,
                y: y,
                vx: 0,
                vy: 0,

                lastX: x,
                lastY: y,

                min: 150,
                max: 250,
                disturb: 150,

                orbit: 20,
                angle: Math.random() * Math.PI * 2,
                speed: 0.05 + Math.random() * 0.05,

                theta: theta

            });
        }
    },

    addRipple: function addRipple() {

        this.input = true;

        if (this.ripples.length === 0) {

            this.updateColorCycle();

            this.ripples.push({

                x: this.mouse.x,
                y: this.mouse.y,

                reactivity: 0,
                fade: 1.0

            });
        }
    },

    updateColorCycle: function updateColorCycle() {

        this.cycle = Math.min(this.cycle + this.reactivity + 0.3, 100) !== 100 ? this.cycle += this.reactivity + 0.3 : 0;

        var color = this.color;
        color.r = ~ ~(Math.sin(0.3 * this.cycle + 0) * 127 + 128);
        color.g = ~ ~(Math.sin(0.3 * this.cycle + 2) * 127 + 128);
        color.b = ~ ~(Math.sin(0.3 * this.cycle + 4) * 127 + 128);
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        var _this2 = this;

        var nodes = this.nodes;
        var ripples = this.ripples;

        var ease = 0.01,
            friction = 0.98;

        for (var index = 0; index < ripples.length; index++) {

            var ripple = ripples[index];

            ripple.reactivity += 5;
            ripple.fade -= 0.05;

            if (ripple.fade <= 0.0) ripples.splice(index, 1);
        }

        [].forEach.call(nodes, function (node, index) {

            node.lastX += (cc.winSize.width * 0.5 + node.disturb * Math.cos(node.theta) - node.lastX) * 0.08;
            node.lastY += (cc.winSize.height * 0.5 + node.disturb * Math.sin(node.theta) - node.lastY) * 0.08;

            // Motion
            node.x += (node.lastX + Math.cos(node.angle) * node.orbit - node.x) * 0.08;
            node.y += (node.lastY + Math.sin(node.angle) * node.orbit - node.y) * 0.08;

            // Ease
            node.vx += (node.min - node.disturb) * ease;

            // Friction
            node.vx *= friction;

            node.disturb += node.vx;

            if (_this2.input) node.disturb += (node.max - node.disturb) * _this2.reactivity;

            node.angle += node.speed;
        });

        this.render();
    },

    render: function render() {
        var _this3 = this;

        var nodes = this.nodes;
        var ripples = this.ripples;
        var graphics = this.graphics;
        var color = this.color;

        var currentIndex, nextIndex, xc, yc;

        color.a = this.debug ? 255 : 255 / 2;

        graphics.clear();

        [].forEach.call(nodes, function (node, index) {

            currentIndex = nodes[nodes.length - 1];
            nextIndex = nodes[0];

            xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.5;
            yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.5;

            var strokeColor = cc.hexToColor(_this3.debug ? '#a9a9a9' : '#e5e5e5');
            strokeColor.a = _this3.debug ? 255 : 255 / 2;
            graphics.strokeColor = strokeColor;

            graphics.fillColor = color;
            graphics.lineWidth = _this3.debug ? 1 : 5;

            graphics.moveTo(xc, yc);

            // Draw through N points
            for (var N = 0; N < nodes.length; N++) {

                currentIndex = nodes[N];
                nextIndex = N + 1 > nodes.length - 1 ? nodes[N - nodes.length + 1] : nodes[N + 1];

                xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.5;
                yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.5;

                graphics.quadraticCurveTo(currentIndex.x, currentIndex.y, xc, yc);
            }

            _this3.debug ? null : graphics.fill();
            graphics.stroke();

            graphics.lineWidth = 1;
            graphics.lineCap = cc.Graphics.LineCap.ROUND;
            graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
            graphics.strokeColor = cc.hexToColor('#a9a9a9');
            graphics.fillColor = cc.hexToColor('#a9a9a9');

            // Draw through N points
            for (var N = 0; N < nodes.length; N++) {

                // First anchor
                currentIndex = nodes[N];
                nextIndex = N + 1 > nodes.length - 1 ? nodes[N - nodes.length + 1] : nodes[N + 1];

                xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.8;
                yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.8;

                graphics.moveTo(xc, yc);

                // Second anchor
                currentIndex = nextIndex;
                nextIndex = N + 2 > nodes.length - 1 ? nodes[N - nodes.length + 2] : nodes[N + 2];

                xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.2;
                yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.2;

                graphics.lineTo(xc, yc);
                graphics.stroke();

                // First anchor
                currentIndex = nodes[N];
                nextIndex = N + 1 > nodes.length - 1 ? nodes[N - nodes.length + 1] : nodes[N + 1];

                xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.8;
                yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.8;

                graphics.circle(xc, yc, 2);
                graphics.fill();

                // Second anchor
                currentIndex = nextIndex;
                nextIndex = N + 2 > nodes.length - 1 ? nodes[N - nodes.length + 2] : nodes[N + 2];

                xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.2;
                yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.2;

                graphics.circle(xc, yc, 2);
                graphics.fill();
            }
        });

        for (var index = 0; index < ripples.length; index++) {

            var ripple = ripples[index];

            var fillColor = cc.hexToColor('#ffffff');
            fillColor.a = ripple.fade * 255;
            graphics.fillColor = fillColor;

            graphics.circle(ripple.x, ripple.y, ripple.reactivity);

            graphics.fill();
        }
    }
});

cc._RFpop();
},{}],"ellipse":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'c7e65GQDltH+6fpuWTVubaZ', 'ellipse');
// cases/graphics/example/ellipse.js

cc.Class({
    'extends': cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        if (cc.director.setClearColor) {
            cc.director.setClearColor(cc.Color.WHITE);
        }

        var g = this.getComponent(cc.Graphics);

        g.lineWidth = 10;
        g.fillColor = cc.hexToColor('#ff0000');

        g.circle(150, 0, 100);

        g.ellipse(-150, 0, 100, 70);

        g.stroke();
        g.fill();
    },

    onDisable: function onDisable() {
        if (cc.director.setClearColor) {
            cc.director.setClearColor(cc.Color.BLACK);
        }
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"en":[function(require,module,exports){
"use strict";
cc._RFpush(module, '920c5VLzJxKjYCAoIUwUHym', 'en');
// i18n/data/en.js

module.exports = {
  "TestList.fire.30": "Back list",
  "TestList.fire.37": "View intro",
  "cases/01_graphics/01_sprite/AtlasSprite.fire.7": "This is Spirte Single.",
  "cases/01_graphics/01_sprite/AtlasSprite.fire.11": "This is Spirte From Atlas.",
  "cases/01_graphics/01_sprite/FilledSprite.fire.9": "Fill Type: HORIZONTAL",
  "cases/01_graphics/01_sprite/FilledSprite.fire.15": "Fill Type: VERTICAL",
  "cases/01_graphics/01_sprite/FilledSprite.fire.23": "FILL Type: RADIAL",
  "cases/01_graphics/01_sprite/SimpleSprite.fire.7": "This is Simple Sprite.",
  "cases/01_graphics/01_sprite/SlicedSprite.fire.7": "This is Sliced Sprite.",
  "cases/01_graphics/01_sprite/TiledSprite.fire.6": "This is Tiled Sprite.",
  "cases/01_graphics/01_sprite/TrimmedSprite.fire.7": "TRIMMED ",
  "cases/01_graphics/01_sprite/TrimmedSprite.fire.12": "No TRIMMED",
  "cases/01_graphics/02_particle/AutoRemoveParticle.fire.9": "Particle 1\n\"Auto Remove On Finish\" disabled",
  "cases/01_graphics/02_particle/AutoRemoveParticle.fire.13": "Particle 2\n\"Auto Remove On Finish\" enabled",
  "cases/01_graphics/02_particle/ToggleParticle.fire.6": "Press \"Button\" to toggle particle play",
  "cases/02_ui/01_widget/AdvancedWidget.fire.7": "Top Left",
  "cases/02_ui/01_widget/AdvancedWidget.fire.9": "top: 10% left: 6%",
  "cases/02_ui/01_widget/AdvancedWidget.fire.14": "Top Left",
  "cases/02_ui/01_widget/AdvancedWidget.fire.16": "top: -34px",
  "cases/02_ui/01_widget/AdvancedWidget.fire.21": "Top Right",
  "cases/02_ui/01_widget/AdvancedWidget.fire.23": "top: 10% right: 6%",
  "cases/02_ui/01_widget/AdvancedWidget.fire.28": "Left",
  "cases/02_ui/01_widget/AdvancedWidget.fire.30": "left: -50px",
  "cases/02_ui/01_widget/AdvancedWidget.fire.35": "Right",
  "cases/02_ui/01_widget/AdvancedWidget.fire.37": "right: -50px",
  "cases/02_ui/01_widget/AdvancedWidget.fire.42": "Bottom Left",
  "cases/02_ui/01_widget/AdvancedWidget.fire.44": "bottom: 10% left: 6%",
  "cases/02_ui/01_widget/AdvancedWidget.fire.49": "Bottom",
  "cases/02_ui/01_widget/AdvancedWidget.fire.51": "bottom: -34px",
  "cases/02_ui/01_widget/AdvancedWidget.fire.56": "Bottom Right",
  "cases/02_ui/01_widget/AdvancedWidget.fire.58": "bottom:10% right:6%",
  "cases/02_ui/01_widget/AdvancedWidget.fire.63": "This is Advanced WIdget.",
  "cases/02_ui/01_widget/AlignOnceWidget.fire.1": "AlignOne is false, It is always aligns",
  "cases/02_ui/01_widget/AlignOnceWidget.fire.2": "AlignOne is true, It aligns only once",
  "cases/02_ui/01_widget/AnimatedWidget.fire.9": "This is Animation Widget.",
  "cases/02_ui/01_widget/AutoResize.fire.13": "This is Widget Auto Resize.",
  "cases/02_ui/01_widget/WidgetAlign.fire.18": "This is Widget Align.",
  "cases/02_ui/02_label/GoldBeatingAnime.js.1": "0",
  "cases/02_ui/02_label/AlignFontLabel.fire.6": "Align Label",
  "cases/02_ui/02_label/AlignFontLabel.fire.9": "Horizontal Align",
  "cases/02_ui/02_label/AlignFontLabel.fire.14": "Hello! \nWelcome Come To \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.16": "Align: LEFT",
  "cases/02_ui/02_label/AlignFontLabel.fire.21": "Hello! \nWelcome Come To \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.23": "Align: CENTER",
  "cases/02_ui/02_label/AlignFontLabel.fire.28": "Hello! \nWelcome Come To \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.30": "Align: RIGHT",
  "cases/02_ui/02_label/AlignFontLabel.fire.33": "Vertical Align",
  "cases/02_ui/02_label/AlignFontLabel.fire.38": "Welcome Come To \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.40": "Align: TOP",
  "cases/02_ui/02_label/AlignFontLabel.fire.45": "Welcome Come To \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.47": "Align: CENTER",
  "cases/02_ui/02_label/AlignFontLabel.fire.52": "Welcome Come To \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.54": "Align: BOTTOM",
  "cases/02_ui/02_label/SystemFontLabel.fire.6": "System Font",
  "cases/02_ui/02_label/SystemFontLabel.fire.9": "Wrap",
  "cases/02_ui/02_label/SystemFontLabel.fire.14": "This is System Font",
  "cases/02_ui/02_label/SystemFontLabel.fire.16": "Overflow: CLAMP",
  "cases/02_ui/02_label/SystemFontLabel.fire.21": "This is System Font",
  "cases/02_ui/02_label/SystemFontLabel.fire.23": "Overflow: SHRINK",
  "cases/02_ui/02_label/SystemFontLabel.fire.26": "No Wrap",
  "cases/02_ui/02_label/SystemFontLabel.fire.31": "This is System Font",
  "cases/02_ui/02_label/SystemFontLabel.fire.33": "Overflow: CLAMP",
  "cases/02_ui/02_label/SystemFontLabel.fire.38": "This is System Font",
  "cases/02_ui/02_label/SystemFontLabel.fire.40": "Overflow: SHRINK",
  "cases/02_ui/02_label/SystemFontLabel.fire.45": "Hello! Welcome Come To Cocos Creator",
  "cases/02_ui/02_label/SystemFontLabel.fire.47": "Overflow: RESZIE_HEIGHT",
  "cases/02_ui/03_button/ButtonInScroll.js.1": "Top button clicked!",
  "cases/02_ui/03_button/ButtonInScroll.js.2": "Bottom button clicked!",
  "cases/02_ui/03_button/ButtonInScroll.fire.21": "Which button is clicked?",
  "cases/02_ui/03_button/ButtonInScroll.fire.27": "drag to reveal more buttons\n\n",
  "cases/02_ui/03_button/SimpleButton.js.1": "Left button clicked!",
  "cases/02_ui/03_button/SimpleButton.js.2": "Right button clicked!",
  "cases/02_ui/03_button/ButtonInteractable.fire.7": "PLAY",
  "cases/02_ui/03_button/ButtonInteractable.fire.16": "STOP",
  "cases/02_ui/03_button/ButtonInteractable.fire.21": "interactable: true",
  "cases/02_ui/03_button/ButtonInteractable.fire.23": "interactable: false",
  "cases/02_ui/03_button/ButtonInteractable.js.1": "interactable: ",
  "cases/02_ui/03_button/ButtonInteractable.js.2": "interactable: ",
  "cases/02_ui/03_button/SimpleButton.fire.6": "Which button is clicked?",
  "cases/02_ui/04_progressbar/progressbar.fire.7": "Horizontal bar with progress 0.3",
  "cases/02_ui/04_progressbar/progressbar.fire.11": "Horizontal bar reverse with progress 1.0",
  "cases/02_ui/04_progressbar/progressbar.fire.15": "Vertical bar \nfrom bottom",
  "cases/02_ui/04_progressbar/progressbar.fire.19": "Vertical bar \nfrom top",
  "cases/02_ui/04_progressbar/progressbar.fire.23": "Progress bar with sprite",
  "cases/02_ui/04_progressbar/progressbar.fire.28": "Progress bar with child sprite",
  "cases/02_ui/05_scrollView/Item.js.1": "Tmpl#",
  "cases/02_ui/05_scrollView/ListView.fire.23": "Item #00",
  "cases/02_ui/05_scrollView/ScrollView.fire.7": "Scrollview full functionality",
  "cases/02_ui/05_scrollView/ScrollView.fire.30": "Scrollview without inertia",
  "cases/02_ui/05_scrollView/ScrollView.fire.53": "Scrollview without elastic",
  "cases/02_ui/05_scrollView/ScrollView.fire.76": "Scrollview horizontal scroll only",
  "cases/02_ui/05_scrollView/ScrollView.fire.93": "Scrollview vertical only",
  "cases/02_ui/05_scrollView/ScrollView.fire.110": "Scrollview no scrollbar",
  "cases/02_ui/06_layout/LayoutResizeContainer.fire.6": "Basic",
  "cases/02_ui/06_layout/LayoutResizeContainer.fire.31": "Horizontal",
  "cases/02_ui/06_layout/LayoutResizeContainer.fire.36": "Vertical",
  "cases/02_ui/06_layout/LayoutResizeContainer.fire.41": "Grid Layout Axis horizontal",
  "cases/02_ui/06_layout/LayoutResizeContainer.fire.46": "Grid Layout Axis vertical",
  "cases/02_ui/06_layout/LayoutResizeChildren.fire.6": "Horizontal layout none",
  "cases/02_ui/06_layout/LayoutResizeChildren.fire.31": "Vertical layout none",
  "cases/02_ui/06_layout/LayoutResizeChildren.fire.48": "Grid start axis horizontal none",
  "cases/02_ui/06_layout/LayoutResizeChildren.fire.85": "Grid start axis vertical none",
  "cases/02_ui/06_layout/LayoutInScrollView.fire.6": "ScrollView with vertical  layout",
  "cases/02_ui/06_layout/LayoutInScrollView.fire.40": "ScrollView with horizontal layout",
  "cases/02_ui/06_layout/LayoutInScrollView.fire.74": "ScrollView with Grid Layout\nstart axis: horizontal ",
  "cases/02_ui/06_layout/LayoutInScrollView.fire.144": "ScrollView with Grid Layout\nstart axis: vertical ",
  "cases/02_ui/06_layout/LayoutNone.fire.6": "Basic layout, Type: None\nResize container",
  "cases/02_ui/06_layout/LayoutNone.fire.35": "Horizontal layout None\nNo resize",
  "cases/02_ui/06_layout/LayoutNone.fire.60": "Vertical layout, Type: None\nNo resize",
  "cases/02_ui/06_layout/LayoutNone.fire.77": "Grid start axis: horizontal, Type: None\nNo resize",
  "cases/02_ui/06_layout/LayoutNone.fire.142": "Grid start axis: vertical, Type: None\nNo resize",
  "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.8": "x:0, y:0",
  "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.12": "x:480, y:320",
  "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.16": "x:960, y:640",
  "cases/02_ui/07_editBox/editbox.js.1": "Enter Text: ",
  "cases/02_ui/07_editBox/EditBox.fire.25": "Single Line Password:",
  "cases/02_ui/07_editBox/EditBox.fire.27": "Single Line Text:",
  "cases/02_ui/07_editBox/EditBox.fire.29": "Mutiple Line Text:",
  "cases/02_ui/07_editBox/EditBox.fire.32": "Click",
  "cases/02_ui/07_editBox/EditBox.fire.38": "Button must be on top of EditBox, \nand it should enable click.",
  "cases/03_gameplay/01_player_control/EventManager/KeyboardInput.fire.6": "Press 'A' or 'D' to control sheep",
  "cases/03_gameplay/01_player_control/On/OnTouchCtrl.js.1": "touch (",
  "cases/03_gameplay/01_player_control/On/OnTouchInput.fire.10": "Try touching anywhere.",
  "cases/03_gameplay/01_player_control/On/OnMultiTouchInput.fire.20": "The sample can only be effective on mobile platforms!��",
  "cases/03_gameplay/01_player_control/On/OnMultiTouchInput.fire.21": "Use your fingers to zoom image!",
  "cases/03_gameplay/02_actions/SimpleAction.fire.13": "This is Simple Action.",
  "cases/03_gameplay/03_animation/AnimateCustomProperty.fire.14": "Label",
  "cases/03_gameplay/03_animation/AnimateCustomProperty.fire.18": "This is Animate Custom Property.",
  "cases/03_gameplay/03_animation/AnimationEvent.fire.6": "Start the first animation",
  "cases/03_gameplay/03_animation/AnimationEvent.fire.14": "This is Animation Event.",
  "cases/03_gameplay/03_animation/AnimationEvent.js.1": "Start the",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.11": "Linear",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.17": "Case In Expo",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.23": "Case Out Expo",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.29": "Case Out In Expo",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.35": "Back Forward",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.41": "This is Move Animation.",
  "cases/03_gameplay/03_animation/SpriteAnimation.fire.9": "This is SprieFrame Animation.",
  "cases/03_gameplay/03_animation/CreateClip.fire.1": "Dynamic Creating AnimationClip",
  "cases/04_audio/SimpleAudio.fire.6": "Enjoy the music!",
  "cases/05_scripting/01_properties/NodeArray.fire.14": "This is Node Array.",
  "cases/05_scripting/01_properties/NonSerialized.fire.6": "Label",
  "cases/05_scripting/01_properties/NonSerialized.fire.8": "Label",
  "cases/05_scripting/01_properties/NonSerialized.fire.10": "This is Non Serialized.",
  "cases/05_scripting/01_properties/ReferenceType.fire.8": "Label",
  "cases/05_scripting/01_properties/ReferenceType.fire.11": "This example does not include the runtime demonstration",
  "cases/05_scripting/01_properties/ValueType.fire.6": "This example does not include the runtime demonstration",
  "cases/05_scripting/02_prefab/InstantiatePrefab.fire.7": "This is Instantiate Prefab.",
  "cases/05_scripting/03_events/EventInMask.fire.23": "Change order of nodes",
  "cases/05_scripting/03_events/SimpleEvent.fire.19": "Touch event can support click",
  "cases/05_scripting/03_events/SimpleEvent.fire.21": "Mouse event can support click, hover, wheel",
  "cases/05_scripting/03_events/SimpleEvent.fire.23": "Custom event can be triggered manually\n(Click button above)",
  "cases/05_scripting/03_events/SimpleEvent.fire.25": "This is Simple Event.",
  "cases/05_scripting/03_events/TouchPropagation.fire.15": "This is Touch Propagation.",
  "cases/05_scripting/04_scheduler/scheduleCallbacks.js.1": "5.00 s",
  "cases/05_scripting/04_scheduler/scheduler.fire.9": "5.00 s",
  "cases/05_scripting/04_scheduler/scheduler.fire.12": "Repeat Schedule",
  "cases/05_scripting/04_scheduler/scheduler.fire.18": "Cancel Schedules",
  "cases/05_scripting/04_scheduler/scheduler.fire.24": "Schedule Once",
  "cases/05_scripting/04_scheduler/scheduler.fire.29": "Counter use update function to change string value each frame",
  "cases/05_scripting/04_scheduler/scheduler.fire.31": "This is Scheduler.",
  "cases/05_scripting/05_cross_reference/CrossReference.fire.7": "Label",
  "cases/05_scripting/05_cross_reference/CrossReference.fire.12": "Label",
  "cases/05_scripting/05_cross_reference/CrossReference.fire.14": "This is Cross Reference.",
  "cases/05_scripting/06_life_cycle/life_cycle.fire.6": "This is Life cycle.",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.5": "Asset Loading",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.9": "Load SpriteFrame",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.15": "Load Texture",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.21": "Load Audio",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.27": "Load Txt",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.33": "Load Font",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.39": "Load Plist",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.45": "Load Prefab",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.51": "Load Scene",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.57": "Load Animation",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.59": "Load Spine",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.65": "Not currently loaded Entity.",
  "cases/05_scripting/07_asset_loading/AssetLoading.js.1": "Loaded ",
  "cases/05_scripting/07_asset_loading/AssetLoading.js.2": "Play ",
  "cases/05_scripting/07_asset_loading/AssetLoading.js.3": "Create ",
  "cases/05_scripting/07_asset_loading/AssetLoading.js.4": "Playing Music.",
  "cases/05_scripting/07_asset_loading/AssetLoading.js.5": "This is Font!",
  "cases/05_scripting/07_asset_loading/LoadRes.fire.7": "By Type",
  "cases/05_scripting/07_asset_loading/LoadRes.fire.10": "Load SpriteFrame",
  "cases/05_scripting/07_asset_loading/LoadRes.fire.17": "By Url",
  "cases/05_scripting/07_asset_loading/LoadRes.fire.20": "Load Prefab",
  "cases/05_scripting/07_asset_loading/LoadResAll.fire.6": "LoadResAll",
  "cases/05_scripting/07_asset_loading/LoadResAll.fire.24": "Load All",
  "cases/05_scripting/07_asset_loading/LoadResAll.fire.30": "Load SpriteFrame All",
  "cases/05_scripting/07_asset_loading/LoadResAll.fire.36": "Clear All",
  "cases/05_scripting/08_module/load_module.fire.6": "Load Module",
  "cases/05_scripting/08_module/load_module.fire.10": "Create Monster",
  "cases/05_scripting/09_singleton/Singleton.fire.6": "This example does not include the runtime demonstration",
  "cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.1": "download complete!!",
  "cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.2": "dowloading: ",
  "cases/05_scripting/10_loadingBar/loadingBar.fire.7": "Loading Completed",
  "cases/05_scripting/10_loadingBar/loadingBar.fire.18": "Dowloading",
  "cases/05_scripting/11_network/NetworkCtrl.js.1": "waiting...",
  "cases/05_scripting/11_network/NetworkCtrl.js.2": "waiting...",
  "cases/05_scripting/11_network/NetworkCtrl.js.3": "waiting...",
  "cases/05_scripting/11_network/NetworkCtrl.js.4": "waiting...",
  "cases/05_scripting/11_network/NetworkCtrl.js.5": "WebSocket\\nSend Binary WS was opened.",
  "cases/05_scripting/11_network/NetworkCtrl.js.6": "WebSocket\\nResponse get.",
  "cases/05_scripting/11_network/NetworkCtrl.js.7": "WebSocket\\nsendBinary Error was fired.",
  "cases/05_scripting/11_network/NetworkCtrl.js.8": "WebSocket\\nwebsocket instance closed.",
  "cases/05_scripting/11_network/NetworkCtrl.js.9": "WebSocket\\nSend Binary WS is waiting...",
  "cases/05_scripting/11_network/NetworkCtrl.js.10": "WebSocket\\n",
  "cases/05_scripting/11_network/NetworkCtrl.js.11": "SocketIO\\n",
  "cases/05_scripting/11_network/NetworkCtrl.js.12": "SocketIO\\n",
  "cases/05_scripting/11_network/NetworkCtrl.js.13": "SocketIO\\n",
  "cases/05_scripting/11_network/NetworkCtrl.js.14": "SocketIO\\n",
  "cases/05_scripting/11_network/network.fire.7": "Label",
  "cases/05_scripting/11_network/network.fire.6": "XMLHttpRequest",
  "cases/05_scripting/11_network/network.fire.11": "Label",
  "cases/05_scripting/11_network/network.fire.10": "XMLHttpRequest (ArrayBuffer)",
  "cases/05_scripting/11_network/network.fire.15": "Label",
  "cases/05_scripting/11_network/network.fire.14": "WebSocket",
  "cases/05_scripting/11_network/network.fire.19": "Label",
  "cases/05_scripting/11_network/network.fire.18": "SocketIO",
  "cases/native_call/native_call.fire.1": "JS to JAVA reflection only works Android mobile platform!",
  "cases/native_call/native_call.fire.2": "Click on the button calls the static method!",
  "cases/native_call/native_call.fire.3": "Click",
  "cases/collider/Category.fire.3": "Group: Collider",
  "cases/collider/Category.fire.5": "Group: Collider",
  "cases/collider/Category.fire.7": "Group: Collider",
  "cases/collider/Category.fire.9": "Group: Default",
  "cases/collider/Shape.fire.20": "Show Polygon",
  "cases/collider/Shape.fire.27": "Show Circle",
  "cases/collider/Shape.fire.34": "Show Box",
  "cases/collider/Shape.fire.43": "Show Polygon",
  "cases/collider/Shape.fire.50": "Show Circle",
  "cases/collider/Shape.fire.57": "Show Box",
  "cases/motionStreak/MotionStreak.fire.1": "Only works in the WebGL!��",
  "cases/motionStreak/MotionStreak.fire.2": "Change MotionStreak",
  "cases/spine/SpineBoy.fire.11": "Debug Slots",
  "cases/spine/SpineBoy.fire.18": "Debug Bones",
  "cases/spine/SpineBoy.fire.25": "Time Scale",
  "cases/spine/SpineBoy.fire.36": "Stop",
  "cases/spine/SpineBoy.fire.43": "Walk",
  "cases/spine/SpineBoy.fire.50": "Run",
  "cases/spine/SpineBoy.fire.58": "Jump",
  "cases/spine/SpineBoy.fire.65": "Shoot",
  "cases/tiledmap/Puzzle.fire.18": "You Win",
  "cases/tiledmap/Puzzle.fire.21": "Restart",
  "res/prefabs/ListItem.prefab.2": "Label ssss",
  "res/prefabs/Monster.prefab.3": "Name:",
  "res/prefabs/Monster.prefab.11": "Level :",
  "res/prefabs/Monster.prefab.19": "Hp :",
  "res/prefabs/Monster.prefab.27": "Attack :",
  "res/prefabs/Monster.prefab.35": "Defense :",
  "res/prefabs/loadItem.prefab.1": "Label",
  "resources/test assets/prefab.prefab.2": "This is Prefab",
  "resources/test assets/scene.fire.3": "Return Asset Loading Scene",
  "resources/test assets/scene.fire.6": "Return",
  "scripts/Global/Menu.js.1": "Temporary lack of introduction"
};

cc._RFpop();
},{}],"follow":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'd96400vNFFPIpzg48kPuXVc', 'follow');
// cases/collider/Platform/follow.js

cc.Class({
    "extends": cc.Component,

    properties: {
        target: {
            "default": null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        if (!this.target) {
            return;
        }

        var follow = cc.follow(this.target, cc.rect(0, 0, 2000, 2000));
        this.node.runAction(follow);
    }
});

cc._RFpop();
},{}],"i18n":[function(require,module,exports){
"use strict";
cc._RFpush(module, '93789C/shtIL6entYsZPjee', 'i18n');
// i18n/i18n.js

var Polyglot = require('polyglot');
var lang = cc.sys.language;
if (lang !== 'zh') {
    lang = 'en';
}
var data = require(lang); // update this to set your default displaying language in editor
// let polyglot = null;
var polyglot = new Polyglot({ phrases: data, allowMissing: true });

module.exports = {
    /**
     * This method allow you to switch language during runtime, language argument should be the same as your data file name
     * such as when language is 'zh', it will load your 'zh.js' data source.
     * @method init
     * @param language - the language specific data file name, such as 'zh' to load 'zh.js'
     */
    init: function init(language) {
        lang = language;
        data = require(lang);
        polyglot.replace(data);
    },
    /**
     * this method takes a text key as input, and return the localized string
     * Please read https://github.com/airbnb/polyglot.js for details
     * @method t
     * @return {String} localized string
     * @example
     *
     * var myText = i18n.t('MY_TEXT_KEY');
     *
     * // if your data source is defined as
     * // {"hello_name": "Hello, %{name}"}
     * // you can use the following to interpolate the text
     * var greetingText = i18n.t('hello_name', {name: 'nantas'}); // Hello, nantas
     */
    t: function t(key, opt) {
        return polyglot.t(key, opt);
    }
};

cc._RFpop();
},{"polyglot":"polyglot"}],"lineTo":[function(require,module,exports){
"use strict";
cc._RFpush(module, '3ed7bVI5mxF+I75PHb0k24q', 'lineTo');
// cases/graphics/example/lineTo.js

cc.Class({
    'extends': cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        if (cc.director.setClearColor) {
            cc.director.setClearColor(cc.Color.WHITE);
        }

        var g = this.getComponent(cc.Graphics);

        g.lineWidth = 10;
        g.fillColor = cc.hexToColor('#ff0000');

        g.moveTo(-20, 0);
        g.lineTo(0, -100);
        g.lineTo(20, 0);
        g.lineTo(0, 100);
        g.close();

        g.stroke();
        g.fill();
    },

    onDisable: function onDisable() {
        if (cc.director.setClearColor) {
            cc.director.setClearColor(cc.Color.BLACK);
        }
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"linejoin":[function(require,module,exports){
"use strict";
cc._RFpush(module, '23e05St68tC7aM880aEaUaS', 'linejoin');
// cases/graphics/example/linejoin.js

var LineJoin = cc.Graphics.LineJoin;
var LineCap = cc.Graphics.LineCap;

cc.Class({
    "extends": cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        if (cc.director.setClearColor) {
            cc.director.setClearColor(cc.Color.WHITE);
        }

        this.graphics = this.getComponent(cc.Graphics);
        this.graphics.lineWidth = 20;

        this.time = 0;
        this.radius = 100;

        this.draw();
    },

    onDisable: function onDisable() {
        if (cc.director.setClearColor) {
            cc.director.setClearColor(cc.Color.BLACK);
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        this.time += dt * 0.5;
        this.draw();
    },

    draw: function draw() {
        var graphics = this.graphics;
        graphics.clear();

        var rx = this.radius * Math.sin(this.time);
        var ry = -this.radius * Math.cos(this.time);

        // line join
        graphics.lineCap = LineCap.BUTT;

        graphics.lineJoin = LineJoin.BEVEL;
        this.drawLine(-200, 0, rx, ry);

        graphics.lineJoin = LineJoin.MITER;
        this.drawLine(0, 0, rx, ry);

        graphics.lineJoin = LineJoin.ROUND;
        this.drawLine(200, 0, rx, ry);

        // line cap
        graphics.lineJoin = LineJoin.MITER;

        graphics.lineCap = LineCap.BUTT;
        this.drawLine(0, -125, rx, ry);

        graphics.lineCap = LineCap.SQUARE;
        this.drawLine(-200, -125, rx, ry);

        graphics.lineCap = LineCap.ROUND;
        this.drawLine(200, -125, rx, ry);
    },

    drawLine: function drawLine(x, y, rx, ry) {
        var graphics = this.graphics;

        graphics.moveTo(x + rx, y + ry);
        graphics.lineTo(x, y);
        graphics.lineTo(x - rx, y + ry);
        graphics.stroke();
    }
});

cc._RFpop();
},{}],"loadResAll_example":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'fee3dcLoaZCvrJ9FZrBngbb', 'loadResAll_example');
// cases/05_scripting/07_asset_loading/LoadResAll/loadResAll_example.js

cc.Class({
    "extends": cc.Component,

    properties: {
        btnClearAll: cc.Node,
        label: cc.Prefab,
        scrollView: cc.ScrollView
    },

    onLoad: function onLoad() {
        this.scrollView.content.height = 0;
        this.btnClearAll.active = false;
    },

    _createLabel: function _createLabel(text) {
        var node = cc.instantiate(this.label);
        var label = node.getComponent(cc.Label);
        label.textKey = text;
        this.scrollView.content.addChild(node);
    },

    _clear: function _clear() {
        this.scrollView.content.removeAllChildren(true);
        cc.loader.releaseAll();
    },

    onClearAll: function onClearAll() {
        this.scrollView.content.height = 0;
        this.btnClearAll.active = false;
        this._clear();
    },

    onLoadAll: function onLoadAll() {
        var self = this;
        this._clear();
        self._createLabel("Load All Assets");
        self.scrollView.scrollToTop();
        cc.loader.loadResAll("test assets", function (err, assets) {
            var text = "";
            for (var i = 0; i < assets.length; ++i) {
                if (typeof assets[i] === 'string') {
                    text = assets[i];
                } else {
                    text = assets[i].url || assets[i]._name || assets[i];
                }
                if (typeof text !== 'string') {
                    continue;
                }
                self._createLabel(text);
            }
            self.btnClearAll.active = true;
            self.scrollView.content.height = assets.length * 60;
        });
    },

    onLoadSpriteFrameAll: function onLoadSpriteFrameAll() {
        var self = this;
        this._clear();
        self._createLabel("Load All Sprite Frame");
        self.scrollView.scrollToTop();
        cc.loader.loadResAll("test assets", cc.SpriteFrame, function (err, assets) {
            var text = "";
            for (var i = 0; i < assets.length; ++i) {
                if (typeof assets[i] === 'string') {
                    text = assets[i];
                } else {
                    text = assets[i].url || assets[i]._name || assets[i];
                }
                self._createLabel(text);
            }
            self.btnClearAll.active = true;
            self.scrollView.content.height = assets.length * 20;
        });
    }

});

cc._RFpop();
},{}],"polyglot":[function(require,module,exports){
(function (global){
"use strict";
cc._RFpush(module, '69decSgpRlE1rzEKp0RzG3V', 'polyglot');
// i18n/polyglot.js

//     (c) 2012-2016 Airbnb, Inc.
//
//     polyglot.js may be freely distributed under the terms of the BSD
//     license. For all licensing information, details, and documention:
//     http://airbnb.github.com/polyglot.js
//
//
// Polyglot.js is an I18n helper library written in JavaScript, made to
// work both in the browser and in Node. It provides a simple solution for
// interpolation and pluralization, based off of Airbnb's
// experience adding I18n functionality to its Backbone.js and Node apps.
//
// Polylglot is agnostic to your translation backend. It doesn't perform any
// translation; it simply gives you a way to manage translated phrases from
// your client- or server-side JavaScript application.

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(root);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(root);
  } else {
    root.Polyglot = factory(root);
  }
})(typeof global !== 'undefined' ? global : this, function (root) {
  'use strict';

  var replace = String.prototype.replace;

  // ### Polyglot class constructor
  function Polyglot(options) {
    options = options || {};
    this.phrases = {};
    this.extend(options.phrases || {});
    this.currentLocale = options.locale || 'en';
    this.allowMissing = !!options.allowMissing;
    this.warn = options.warn || warn;
  }

  // ### Version
  Polyglot.VERSION = '1.0.0';

  // ### polyglot.locale([locale])
  //
  // Get or set locale. Internally, Polyglot only uses locale for pluralization.
  Polyglot.prototype.locale = function (newLocale) {
    if (newLocale) this.currentLocale = newLocale;
    return this.currentLocale;
  };

  // ### polyglot.extend(phrases)
  //
  // Use `extend` to tell Polyglot how to translate a given key.
  //
  //     polyglot.extend({
  //       "hello": "Hello",
  //       "hello_name": "Hello, %{name}"
  //     });
  //
  // The key can be any string.  Feel free to call `extend` multiple times;
  // it will override any phrases with the same key, but leave existing phrases
  // untouched.
  //
  // It is also possible to pass nested phrase objects, which get flattened
  // into an object with the nested keys concatenated using dot notation.
  //
  //     polyglot.extend({
  //       "nav": {
  //         "hello": "Hello",
  //         "hello_name": "Hello, %{name}",
  //         "sidebar": {
  //           "welcome": "Welcome"
  //         }
  //       }
  //     });
  //
  //     console.log(polyglot.phrases);
  //     // {
  //     //   'nav.hello': 'Hello',
  //     //   'nav.hello_name': 'Hello, %{name}',
  //     //   'nav.sidebar.welcome': 'Welcome'
  //     // }
  //
  // `extend` accepts an optional second argument, `prefix`, which can be used
  // to prefix every key in the phrases object with some string, using dot
  // notation.
  //
  //     polyglot.extend({
  //       "hello": "Hello",
  //       "hello_name": "Hello, %{name}"
  //     }, "nav");
  //
  //     console.log(polyglot.phrases);
  //     // {
  //     //   'nav.hello': 'Hello',
  //     //   'nav.hello_name': 'Hello, %{name}'
  //     // }
  //
  // This feature is used internally to support nested phrase objects.
  Polyglot.prototype.extend = function (morePhrases, prefix) {
    var phrase;

    for (var key in morePhrases) {
      if (morePhrases.hasOwnProperty(key)) {
        phrase = morePhrases[key];
        if (prefix) key = prefix + '.' + key;
        if (typeof phrase === 'object') {
          this.extend(phrase, key);
        } else {
          this.phrases[key] = phrase;
        }
      }
    }
  };

  // ### polyglot.unset(phrases)
  // Use `unset` to selectively remove keys from a polyglot instance.
  //
  //     polyglot.unset("some_key");
  //     polyglot.unset({
  //       "hello": "Hello",
  //       "hello_name": "Hello, %{name}"
  //     });
  //
  // The unset method can take either a string (for the key), or an object hash with
  // the keys that you would like to unset.
  Polyglot.prototype.unset = function (morePhrases, prefix) {
    var phrase;

    if (typeof morePhrases === 'string') {
      delete this.phrases[morePhrases];
    } else {
      for (var key in morePhrases) {
        if (morePhrases.hasOwnProperty(key)) {
          phrase = morePhrases[key];
          if (prefix) key = prefix + '.' + key;
          if (typeof phrase === 'object') {
            this.unset(phrase, key);
          } else {
            delete this.phrases[key];
          }
        }
      }
    }
  };

  // ### polyglot.clear()
  //
  // Clears all phrases. Useful for special cases, such as freeing
  // up memory if you have lots of phrases but no longer need to
  // perform any translation. Also used internally by `replace`.
  Polyglot.prototype.clear = function () {
    this.phrases = {};
  };

  // ### polyglot.replace(phrases)
  //
  // Completely replace the existing phrases with a new set of phrases.
  // Normally, just use `extend` to add more phrases, but under certain
  // circumstances, you may want to make sure no old phrases are lying around.
  Polyglot.prototype.replace = function (newPhrases) {
    this.clear();
    this.extend(newPhrases);
  };

  // ### polyglot.t(key, options)
  //
  // The most-used method. Provide a key, and `t` will return the
  // phrase.
  //
  //     polyglot.t("hello");
  //     => "Hello"
  //
  // The phrase value is provided first by a call to `polyglot.extend()` or
  // `polyglot.replace()`.
  //
  // Pass in an object as the second argument to perform interpolation.
  //
  //     polyglot.t("hello_name", {name: "Spike"});
  //     => "Hello, Spike"
  //
  // If you like, you can provide a default value in case the phrase is missing.
  // Use the special option key "_" to specify a default.
  //
  //     polyglot.t("i_like_to_write_in_language", {
  //       _: "I like to write in %{language}.",
  //       language: "JavaScript"
  //     });
  //     => "I like to write in JavaScript."
  //
  Polyglot.prototype.t = function (key, options) {
    var phrase, result;
    options = options == null ? {} : options;
    // allow number as a pluralization shortcut
    if (typeof options === 'number') {
      options = { smart_count: options };
    }
    if (typeof this.phrases[key] === 'string') {
      phrase = this.phrases[key];
    } else if (typeof options._ === 'string') {
      phrase = options._;
    } else if (this.allowMissing) {
      phrase = key;
    } else {
      this.warn('Missing translation for key: "' + key + '"');
      result = key;
    }
    if (typeof phrase === 'string') {
      options = clone(options);
      result = choosePluralForm(phrase, this.currentLocale, options.smart_count);
      result = interpolate(result, options);
    }
    return result;
  };

  // ### polyglot.has(key)
  //
  // Check if polyglot has a translation for given key
  Polyglot.prototype.has = function (key) {
    return key in this.phrases;
  };

  // #### Pluralization methods
  // The string that separates the different phrase possibilities.
  var delimeter = '||||';

  // Mapping from pluralization group plural logic.
  var pluralTypes = {
    chinese: function chinese(n) {
      return 0;
    },
    german: function german(n) {
      return n !== 1 ? 1 : 0;
    },
    french: function french(n) {
      return n > 1 ? 1 : 0;
    },
    russian: function russian(n) {
      return n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
    },
    czech: function czech(n) {
      return n === 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2;
    },
    polish: function polish(n) {
      return n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
    },
    icelandic: function icelandic(n) {
      return n % 10 !== 1 || n % 100 === 11 ? 1 : 0;
    }
  };

  // Mapping from pluralization group to individual locales.
  var pluralTypeToLanguages = {
    chinese: ['fa', 'id', 'ja', 'ko', 'lo', 'ms', 'th', 'tr', 'zh'],
    german: ['da', 'de', 'en', 'es', 'fi', 'el', 'he', 'hu', 'it', 'nl', 'no', 'pt', 'sv'],
    french: ['fr', 'tl', 'pt-br'],
    russian: ['hr', 'ru'],
    czech: ['cs', 'sk'],
    polish: ['pl'],
    icelandic: ['is']
  };

  function langToTypeMap(mapping) {
    var type,
        langs,
        l,
        ret = {};
    for (type in mapping) {
      if (mapping.hasOwnProperty(type)) {
        langs = mapping[type];
        for (l in langs) {
          ret[langs[l]] = type;
        }
      }
    }
    return ret;
  }

  // Trim a string.
  var trimRe = /^\s+|\s+$/g;
  function trim(str) {
    return replace.call(str, trimRe, '');
  }

  // Based on a phrase text that contains `n` plural forms separated
  // by `delimeter`, a `locale`, and a `count`, choose the correct
  // plural form, or none if `count` is `null`.
  function choosePluralForm(text, locale, count) {
    var ret, texts, chosenText;
    if (count != null && text) {
      texts = text.split(delimeter);
      chosenText = texts[pluralTypeIndex(locale, count)] || texts[0];
      ret = trim(chosenText);
    } else {
      ret = text;
    }
    return ret;
  }

  function pluralTypeName(locale) {
    var langToPluralType = langToTypeMap(pluralTypeToLanguages);
    return langToPluralType[locale] || langToPluralType.en;
  }

  function pluralTypeIndex(locale, count) {
    return pluralTypes[pluralTypeName(locale)](count);
  }

  // ### interpolate
  //
  // Does the dirty work. Creates a `RegExp` object for each
  // interpolation placeholder.
  var dollarRegex = /\$/g;
  var dollarBillsYall = '$$$$';
  function interpolate(phrase, options) {
    for (var arg in options) {
      if (arg !== '_' && options.hasOwnProperty(arg)) {
        // Ensure replacement value is escaped to prevent special $-prefixed
        // regex replace tokens. the "$$$$" is needed because each "$" needs to
        // be escaped with "$" itself, and we need two in the resulting output.
        var replacement = options[arg];
        if (typeof replacement === 'string') {
          replacement = replace.call(options[arg], dollarRegex, dollarBillsYall);
        }
        // We create a new `RegExp` each time instead of using a more-efficient
        // string replace so that the same argument can be replaced multiple times
        // in the same phrase.
        phrase = replace.call(phrase, new RegExp('%\\{' + arg + '\\}', 'g'), replacement);
      }
    }
    return phrase;
  }

  // ### warn
  //
  // Provides a warning in the console if a phrase key is missing.
  function warn(message) {
    root.console && root.console.warn && root.console.warn('WARNING: ' + message);
  }

  // ### clone
  //
  // Clone an object.
  function clone(source) {
    var ret = {};
    for (var prop in source) {
      ret[prop] = source[prop];
    }
    return ret;
  }

  return Polyglot;
});
//

cc._RFpop();
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],"rect":[function(require,module,exports){
"use strict";
cc._RFpush(module, '2a7cahCMIJCaZpdzIZPkHsp', 'rect');
// cases/graphics/example/rect.js

cc.Class({
    'extends': cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        if (cc.director.setClearColor) {
            cc.director.setClearColor(cc.Color.WHITE);
        }

        var g = this.getComponent(cc.Graphics);

        g.lineWidth = 10;
        g.fillColor = cc.hexToColor('#ff0000');

        // rect
        g.rect(-250, 0, 200, 100);

        // round rect
        g.roundRect(50, 0, 200, 100, 20);

        g.stroke();
        g.fill();
    },

    onDisable: function onDisable() {
        if (cc.director.setClearColor) {
            cc.director.setClearColor(cc.Color.BLACK);
        }
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"scheduleCallbacks":[function(require,module,exports){
"use strict";
cc._RFpush(module, '930deImxoZIkp6ugjMU5ULW', 'scheduleCallbacks');
// cases/05_scripting/04_scheduler/scheduleCallbacks.js

var i18n = require('i18n');

cc.Class({
    'extends': cc.Component,

    properties: {
        time: {
            'default': 5
        }
    },

    _callback: function _callback() {
        this.node.runAction(this.seq);
        if (this.repeat) {
            this.counting = true;
        } else {
            this.counting = false;
        }
        this.time = 5;
        this.counter.string = this.time.toFixed(2) + ' s';
    },

    // use this for initialization
    onLoad: function onLoad() {
        var squashAction = cc.scaleTo(0.2, 1, 0.6);
        var stretchAction = cc.scaleTo(0.2, 1, 1.2);
        var scaleBackAction = cc.scaleTo(0.1, 1, 1);
        var moveUpAction = cc.moveBy(1, cc.p(0, 100)).easing(cc.easeCubicActionOut());
        var moveDownAction = cc.moveBy(1, cc.p(0, -100)).easing(cc.easeCubicActionIn());
        this.seq = cc.sequence(squashAction, stretchAction, moveUpAction, scaleBackAction, moveDownAction, squashAction, scaleBackAction);

        this.counter = cc.find('Canvas/count_label').getComponent(cc.Label);
        this.counter.string = this.time.toFixed(2) + ' s';
        this.counting = false;
        this.repeat = false;
    },

    // called every frame
    update: function update(dt) {
        if (this.counting) {
            this.time -= dt;
            this.counter.string = this.time.toFixed(2) + ' s';
        }
    },

    stopCounting: function stopCounting() {
        this.unschedule(this._callback);
        this.counting = false;
        this.counter.string = i18n.t("cases/05_scripting/04_scheduler/scheduleCallbacks.js.1");
        this.time = 5;
    },

    repeatSchedule: function repeatSchedule() {
        this.stopCounting();
        this.schedule(this._callback, 5);
        this.repeat = true;
        this.counting = true;
    },

    oneSchedule: function oneSchedule() {
        this.stopCounting();
        this.scheduleOnce(this._callback, 5);
        this.repeat = false;
        this.counting = true;
    },

    cancelSchedules: function cancelSchedules() {
        this.repeat = false;
        this.stopCounting();
    }
});

cc._RFpop();
},{"i18n":"i18n"}],"sine-waves":[function(require,module,exports){
"use strict";
cc._RFpush(module, '65147r484dHPoeDmtu3n5DT', 'sine-waves');
// cases/graphics/demo/sine-waves.js

// https://github.com/isuttell/sine-waves

/************************************************
 * @file  Constants
 * @author  Isaac Suttell
 ************************************************/

/**
 * For radian conversion
 *
 * @constant
 * @type    {Number}
 */
var PI180 = Math.PI / 180;

/**
 * Twice of PI
 *
 * @constant
 * @type {Number}
 */
var PI2 = Math.PI * 2;

/**
 * Half of PI
 *
 * @constant
 * @type {Number}
 */
var HALFPI = Math.PI / 2;

/************************************************
 * @file  Left to right easing functions
 * @author Isaac Suttell
 ************************************************/

/**
 * This holds all of the easing objects and can be added to by the user
 *
 * @type    {Object}
 */
var Ease = {};

/**
 * Do not apply any easing
 *
 * @param  {Number} percent   where in the line are we?
 * @param  {Number} amplitude the current strength
 *
 * @return {Number}           the new strength
 */
Ease.linear = function (percent, amplitude) {
    return amplitude;
};

/**
 * Easing function to control how string each wave is from
 * left to right
 *
 * @param  {Number} percent   where in the line are we?
 * @param  {Number} amplitude the current strength
 *
 * @return {Number}           the new strength
 */
Ease.sinein = function (percent, amplitude) {
    return amplitude * (Math.sin(percent * Math.PI - HALFPI) + 1) * 0.5;
};

/**
 * Easing function to control how string each wave is from
 * left to right
 *
 * @param  {Number} percent   where in the line are we?
 * @param  {Number} amplitude the current strength
 *
 * @return {Number}           the new strength
 */
Ease.sineout = function (percent, amplitude) {
    return amplitude * (Math.sin(percent * Math.PI + HALFPI) + 1) * 0.5;
};

/**
 * Easing function to control how string each wave is from
 * left to right
 *
 * @param  {Number} percent   where in the line are we?
 * @param  {Number} amplitude the current strength
 *
 * @return {Number}           the new strength
 */
Ease.sineinout = function (percent, amplitude) {
    return amplitude * (Math.sin(percent * PI2 - HALFPI) + 1) * 0.5;
};

var EaseEnumOptins = {};
for (var k in Ease) {
    EaseEnumOptins[k] = -1;
}
Ease.Enum = cc.Enum(EaseEnumOptins);

/************************************************
 * @file  Sine Wave functions
 * @author Isaac Suttell
 ************************************************/

/**
 * Holds the different types of waves
 *
 * @type    {Object}
 */
var Waves = {};

/**
 * Default Sine Waves
 *
 * @param    {Number}    x
 */
Waves.sine = function (x) {
    return Math.sin(x);
};

/**
 * Sign polyfill
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
 *
 * @param     {Number}    x
 *
 * @return    {Number}
 */
Waves.sign = function (x) {
    x = +x; // convert to a number
    if (x === 0 || isNaN(x)) {
        return x;
    }
    return x > 0 ? 1 : -1;
};

/**
 * Square Waves
 *
 * @param    {Number}    x
 */
Waves.square = function (x) {
    return Waves.sign(Math.sin(x * PI2));
};

/**
 * Sawtooth Waves
 *
 * @param    {Number}    x
 */
Waves.sawtooth = function (x) {
    return (x - Math.floor(x + 0.5)) * 2;
};

/**
 * Triangle Waves
 *
 * @param    {Number}    x
 */
Waves.triangle = function (x) {
    return Math.abs(Waves.sawtooth(x));
};

var WavesEnumOptins = {};
for (var k in Waves) {
    WavesEnumOptins[k] = -1;
}
Waves.Enum = cc.Enum(WavesEnumOptins);

var Wave = cc.Class({
    name: 'Wave',

    properties: {
        timeModifier: 1,
        amplitude: 50,
        wavelength: 50,
        segmentLength: 10,
        lineWidth: 1,
        waveType: {
            'default': Waves.Enum.sine,
            type: Waves.Enum
        },
        easeType: {
            'default': Ease.Enum.sinein,
            type: Ease.Enum
        },
        strokeColor: cc.color(255, 255, 255, 100)
    }
});

var SineWaves = cc.Class({
    'extends': cc.Component,

    properties: {
        speed: 1,

        waves: {
            'default': function _default() {
                return [new Wave()];
            },
            type: [Wave]
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        if (cc.director.setClearColor) {
            cc.director.setClearColor(cc.hexToColor('#01aaff'));
        }

        this.time = 0;

        this.ctx = this.getComponent(cc.Graphics);
        this.ctx.lineCap = cc.Graphics.LineCap.BUTT;
        this.ctx.lineJoin = cc.Graphics.LineJoin.ROUND;

        var waves = this.waves;
        for (var i = 0, l = waves.length; i < l; i++) {
            waves[i].waveFn = Waves[Waves.Enum[waves[i].waveType]].bind(Waves);
            waves[i].easeFn = Ease[Ease.Enum[waves[i].easeType]].bind(Ease);
        }
    },

    onDisable: function onDisable() {
        if (cc.director.setClearColor) {
            cc.director.setClearColor(cc.Color.BLACK);
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        this.ctx.clear();

        this.yAxis = cc.visibleRect.height / 2;
        this.width = cc.visibleRect.width;

        this.waveWidth = this.width * 0.95;
        this.waveLeft = this.width * 0.25;

        this.time += dt;

        // Draw each line
        var waves = this.waves;
        for (var i = 0, l = waves.length; i < l; i++) {
            var timeModifier = this.waves[i].timeModifier || 1;
            this.drawWave(this.time * timeModifier, waves[i]);
        }
    },

    /**
     * Draws one line on the canvas
     *
     * @param  {Number} time    current internal clock time
     * @param  {Object} options wave options
     */
    drawWave: function drawWave(time, options) {
        // Styles
        this.ctx.lineWidth = options.lineWidth;
        this.ctx.strokeColor = options.strokeColor;

        // Starting Line
        this.ctx.moveTo(0, this.yAxis);
        this.ctx.lineTo(this.waveLeft, this.yAxis);

        for (var i = 0; i < this.waveWidth; i += options.segmentLength) {
            // Calculate where the next point is
            var point = this.getPoint(time, i, options);

            // Draw to it
            this.ctx.lineTo(point.x, point.y);
        }

        // Ending Line
        this.ctx.lineTo(this.width, this.yAxis);

        // Stroke it
        this.ctx.stroke();
    },

    /**
     * Calculate the x, y coordinates of a point in a sine wave
     *
     * @param  {Number} time     Internal time index
     * @param  {Number} position Pixels x poistion
     * @param  {Object} options  Wave options
     *
     * @return {Object}          {x, y}
     */
    getPoint: function getPoint(time, position, options) {
        var x = time * this.speed + (-this.yAxis + position) / options.wavelength;
        var y = options.waveFn(x);

        // Left and Right Sine Easing
        var amplitude = options.easeFn(position / this.waveWidth, options.amplitude);

        x = position + this.waveLeft;
        y = amplitude * y + this.yAxis;

        return {
            x: x,
            y: y
        };
    }
});

module.exports = SineWaves;

cc._RFpop();
},{}],"webview":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'f8de1gmPM1CLoiv+P/T9HnJ', 'webview');
// cases/02_ui/10_webview/webview.js

cc.Class({
    "extends": cc.Component,

    properties: {
        labelStatus: {
            "default": null,
            type: cc.Label
        },

        webview: {
            "default": null,
            type: cc.WebView
        },

        url: {
            "default": null,
            type: cc.EditBox
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},

    onWebFinishLoad: function onWebFinishLoad(sender, event) {
        var loadStatus = "";
        if (event === cc.WebView.EventType.LOADED) {
            loadStatus = " is loaded!";
        } else if (event === cc.WebView.EventType.LOADING) {
            loadStatus = " is loading!";
        } else if (event === cc.WebView.EventType.ERROR) {
            loadStatus = ' load error!';
        }
        this.labelStatus.string = this.url.string + loadStatus;
    },

    visitURL: function visitURL() {
        this.webview.url = this.url.string;
    }

});

cc._RFpop();
},{}],"zh":[function(require,module,exports){
"use strict";
cc._RFpush(module, '87f1fs0gohHDIfNg4aePXbt', 'zh');
// i18n/data/zh.js

module.exports = {
  "TestList.fire.30": "返回列表",
  "TestList.fire.37": "查看说明",
  "cases/01_graphics/01_sprite/AtlasSprite.fire.7": "这个精灵来自单张图片",
  "cases/01_graphics/01_sprite/AtlasSprite.fire.11": "这个精灵来自图集",
  "cases/01_graphics/01_sprite/FilledSprite.fire.9": "填充类型：水平",
  "cases/01_graphics/01_sprite/FilledSprite.fire.15": "填充类型：垂直",
  "cases/01_graphics/01_sprite/FilledSprite.fire.23": "填充类型：圆形",
  "cases/01_graphics/01_sprite/SimpleSprite.fire.7": "这是普通精灵",
  "cases/01_graphics/01_sprite/SlicedSprite.fire.7": "这是九宫格精灵",
  "cases/01_graphics/01_sprite/TiledSprite.fire.6": "这是平铺精灵",
  "cases/01_graphics/01_sprite/TrimmedSprite.fire.7": "自动剪裁 ",
  "cases/01_graphics/01_sprite/TrimmedSprite.fire.12": "未自动剪裁",
  "cases/01_graphics/02_particle/AutoRemoveParticle.fire.9": "粒子 1\n\"完成时自动移除\" 禁止",
  "cases/01_graphics/02_particle/AutoRemoveParticle.fire.13": "粒子 2\n\"完成时自动移除\" 开启",
  "cases/01_graphics/02_particle/ToggleParticle.fire.6": "按 \"按钮\" 进行开关粒子播放",
  "cases/02_ui/01_widget/AdvancedWidget.fire.7": "左上",
  "cases/02_ui/01_widget/AdvancedWidget.fire.9": "top: 10% left: 6%",
  "cases/02_ui/01_widget/AdvancedWidget.fire.14": "上",
  "cases/02_ui/01_widget/AdvancedWidget.fire.16": "top: -34px",
  "cases/02_ui/01_widget/AdvancedWidget.fire.21": "右上",
  "cases/02_ui/01_widget/AdvancedWidget.fire.23": "top: 10% right: 6%",
  "cases/02_ui/01_widget/AdvancedWidget.fire.28": "左",
  "cases/02_ui/01_widget/AdvancedWidget.fire.30": "left: -50px",
  "cases/02_ui/01_widget/AdvancedWidget.fire.35": "右",
  "cases/02_ui/01_widget/AdvancedWidget.fire.37": "right: -50px",
  "cases/02_ui/01_widget/AdvancedWidget.fire.42": "左下",
  "cases/02_ui/01_widget/AdvancedWidget.fire.44": "bottom: 10% left: 6%",
  "cases/02_ui/01_widget/AdvancedWidget.fire.49": "下",
  "cases/02_ui/01_widget/AdvancedWidget.fire.51": "bottom: -34px",
  "cases/02_ui/01_widget/AdvancedWidget.fire.56": "右下",
  "cases/02_ui/01_widget/AdvancedWidget.fire.58": "bottom:10% right:6%",
  "cases/02_ui/01_widget/AdvancedWidget.fire.63": "高级挂件",
  "cases/02_ui/01_widget/AlignOnceWidget.fire.1": "AlignOne 为 false 时，会一直保持对齐",
  "cases/02_ui/01_widget/AlignOnceWidget.fire.2": "AlignOne 为 true 时，只在 Widget 生效时对齐一次",
  "cases/02_ui/01_widget/AnimatedWidget.fire.9": "动画挂件。",
  "cases/02_ui/01_widget/WidgetAlign.fire.18": "挂件对齐方式。",
  "cases/02_ui/01_widget/AutoResize.fire.13": "挂件自动调整大小。",
  "cases/02_ui/02_label/GoldBeatingAnime.js.1": "0",
  "cases/02_ui/02_label/AlignFontLabel.fire.6": "文本对齐",
  "cases/02_ui/02_label/AlignFontLabel.fire.9": "水平对齐",
  "cases/02_ui/02_label/AlignFontLabel.fire.14": "哈啰！\n欢迎使用 \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.16": "对齐: 靠左",
  "cases/02_ui/02_label/AlignFontLabel.fire.21": "哈啰！\n欢迎使用 \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.23": "对齐: 居中",
  "cases/02_ui/02_label/AlignFontLabel.fire.28": "哈啰！\n欢迎使用 \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.30": "对齐: 靠右",
  "cases/02_ui/02_label/AlignFontLabel.fire.33": "垂直对齐",
  "cases/02_ui/02_label/AlignFontLabel.fire.38": "欢迎使用 \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.40": "对齐: 顶部",
  "cases/02_ui/02_label/AlignFontLabel.fire.45": "欢迎使用 \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.47": "对齐: 居中",
  "cases/02_ui/02_label/AlignFontLabel.fire.52": "欢迎使用 \nCocos Creator",
  "cases/02_ui/02_label/AlignFontLabel.fire.54": "对齐: 底部",
  "cases/02_ui/02_label/SystemFontLabel.fire.6": "系统字体",
  "cases/02_ui/02_label/SystemFontLabel.fire.9": "换行",
  "cases/02_ui/02_label/SystemFontLabel.fire.14": "这是系统默认字体",
  "cases/02_ui/02_label/SystemFontLabel.fire.16": "Overflow: CLAMP",
  "cases/02_ui/02_label/SystemFontLabel.fire.21": "这是系统默认字体",
  "cases/02_ui/02_label/SystemFontLabel.fire.23": "Overflow: SHRINK",
  "cases/02_ui/02_label/SystemFontLabel.fire.26": "不换行",
  "cases/02_ui/02_label/SystemFontLabel.fire.31": "这是系统默认字体",
  "cases/02_ui/02_label/SystemFontLabel.fire.33": "Overflow: CLAMP",
  "cases/02_ui/02_label/SystemFontLabel.fire.38": "这是系统默认字体",
  "cases/02_ui/02_label/SystemFontLabel.fire.40": "Overflow: SHRINK",
  "cases/02_ui/02_label/SystemFontLabel.fire.45": "哈喽! 欢迎使用 Cocos Creator",
  "cases/02_ui/02_label/SystemFontLabel.fire.47": "Overflow: RESZIE_HEIGHT",
  "cases/02_ui/03_button/ButtonInScroll.js.1": "顶部按钮被点击！",
  "cases/02_ui/03_button/ButtonInScroll.js.2": "底部按钮被点击！",
  "cases/02_ui/03_button/ButtonInScroll.fire.21": "哪个按钮被点击？",
  "cases/02_ui/03_button/ButtonInScroll.fire.27": "拖动显示更多按钮\n\n",
  "cases/02_ui/03_button/SimpleButton.js.1": "左边的按钮被点击！",
  "cases/02_ui/03_button/SimpleButton.js.2": "右边的按钮被点击！",
  "cases/02_ui/03_button/ButtonInteractable.fire.7": "播放",
  "cases/02_ui/03_button/ButtonInteractable.fire.16": "停止",
  "cases/02_ui/03_button/ButtonInteractable.fire.21": "交互(interactable): true",
  "cases/02_ui/03_button/ButtonInteractable.fire.23": "交互(interactable): false",
  "cases/02_ui/03_button/ButtonInteractable.js.1": "交互(interactable): ",
  "cases/02_ui/03_button/ButtonInteractable.js.2": "交互(interactable): ",
  "cases/02_ui/03_button/SimpleButton.fire.6": "哪个按钮被点击？",
  "cases/02_ui/05_scrollView/Item.js.1": "Tmpl#",
  "cases/02_ui/04_progressbar/progressbar.fire.7": "水平进度条，进度 0.3",
  "cases/02_ui/04_progressbar/progressbar.fire.11": "反向水平进度条，进度 1.0",
  "cases/02_ui/04_progressbar/progressbar.fire.15": "垂直进度条 \n从下向上",
  "cases/02_ui/04_progressbar/progressbar.fire.19": "垂直进度条 \n从上向下",
  "cases/02_ui/04_progressbar/progressbar.fire.23": "设置了精灵的进度条",
  "cases/02_ui/04_progressbar/progressbar.fire.28": "设置了精灵（子控件）的进度条",
  "cases/02_ui/05_scrollView/ListView.fire.23": "Item #00",
  "cases/02_ui/05_scrollView/ScrollView.fire.7": "Scrollview 完整功能",
  "cases/02_ui/05_scrollView/ScrollView.fire.30": "Scrollview 没有惯性",
  "cases/02_ui/05_scrollView/ScrollView.fire.53": "Scrollview 没有弹性",
  "cases/02_ui/05_scrollView/ScrollView.fire.76": "Scrollview 只能水平滚动",
  "cases/02_ui/05_scrollView/ScrollView.fire.93": "Scrollview 只能垂直滚动",
  "cases/02_ui/05_scrollView/ScrollView.fire.110": "Scrollview 没有滚动条",
  "cases/02_ui/06_layout/LayoutInScrollView.fire.6": "ScrollView 和垂直布局容器",
  "cases/02_ui/06_layout/LayoutInScrollView.fire.40": "ScrollView 和水平布局容器",
  "cases/02_ui/06_layout/LayoutInScrollView.fire.74": "ScrollView 和横向网格布局容器 ",
  "cases/02_ui/06_layout/LayoutInScrollView.fire.144": "ScrollView 和纵向网格布局容器 ",
  "cases/02_ui/06_layout/LayoutResizeChildren.fire.6": "水平布局容器",
  "cases/02_ui/06_layout/LayoutResizeChildren.fire.31": "垂直布局容器",
  "cases/02_ui/06_layout/LayoutResizeChildren.fire.48": "横向网格布局容器",
  "cases/02_ui/06_layout/LayoutResizeChildren.fire.85": "纵向网格布局容器",
  "cases/02_ui/06_layout/LayoutResizeContainer.fire.6": "基本",
  "cases/02_ui/06_layout/LayoutResizeContainer.fire.31": "水平",
  "cases/02_ui/06_layout/LayoutResizeContainer.fire.36": "垂直",
  "cases/02_ui/06_layout/LayoutResizeContainer.fire.41": "横向网格布局容器",
  "cases/02_ui/06_layout/LayoutResizeContainer.fire.46": "纵向网格布局容器",
  "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.8": "x:0, y:0",
  "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.12": "x:480, y:320",
  "cases/02_ui/07_change_canvas_anchor/BottomLeftAnchor.fire.16": "x:960, y:640",
  "cases/02_ui/07_editBox/editbox.js.1": "输入文本: ",
  "cases/02_ui/06_layout/LayoutNone.fire.6": "基本布局容器, 类型: None\n自动调整大小",
  "cases/02_ui/06_layout/LayoutNone.fire.35": "水平布局容器，类型: None\n不自动调整大小",
  "cases/02_ui/06_layout/LayoutNone.fire.60": "垂直布局容器，类型: None\n不自动调整大小",
  "cases/02_ui/06_layout/LayoutNone.fire.77": "横向网格布局容器，类型: None\n不自动调整大小",
  "cases/02_ui/06_layout/LayoutNone.fire.142": "纵向网格布局容器，类型: None\n不自动调整大小",
  "cases/02_ui/07_editBox/EditBox.fire.25": "单行密码框:",
  "cases/02_ui/07_editBox/EditBox.fire.27": "单行文本框:",
  "cases/02_ui/07_editBox/EditBox.fire.29": "多行文本框:",
  "cases/02_ui/07_editBox/EditBox.fire.32": "点击",
  "cases/02_ui/07_editBox/EditBox.fire.38": "按钮必须在 EditBox 的上面, \n并且它应该允许点击.",
  "cases/03_gameplay/01_player_control/EventManager/KeyboardInput.fire.6": "按 'A' 或 'D' 键控制小绵羊",
  "cases/03_gameplay/01_player_control/On/OnTouchCtrl.js.1": "touch (",
  "cases/03_gameplay/01_player_control/On/OnTouchInput.fire.10": "请触摸任意位置试试",
  "cases/03_gameplay/01_player_control/On/OnMultiTouchInput.fire.20": "该效果只能在移动平台上有效！",
  "cases/03_gameplay/01_player_control/On/OnMultiTouchInput.fire.21": "用你的手指放缩图片！",
  "cases/03_gameplay/02_actions/SimpleAction.fire.13": "简单的动作",
  "cases/03_gameplay/03_animation/AnimateCustomProperty.fire.14": "Label",
  "cases/03_gameplay/03_animation/AnimateCustomProperty.fire.18": "自定义动画属性",
  "cases/03_gameplay/03_animation/AnimationEvent.js.1": "开始第",
  "cases/03_gameplay/03_animation/AnimationEvent.fire.6": "开始第1个动画",
  "cases/03_gameplay/03_animation/AnimationEvent.fire.14": "动画事件",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.11": "Linear",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.17": "Case In Expo",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.23": "Case Out Expo",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.29": "Case Out In Expo",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.35": "Back Forward",
  "cases/03_gameplay/03_animation/MoveAnimation.fire.41": "这是一个移动动画。",
  "cases/03_gameplay/03_animation/SpriteAnimation.fire.9": "这是精灵帧动画",
  "cases/03_gameplay/03_animation/CreateClip.fire.1": "动态创建动画剪辑",
  "cases/04_audio/SimpleAudio.fire.6": "享受音乐!",
  "cases/05_scripting/01_properties/NodeArray.fire.14": "这是节点数组",
  "cases/05_scripting/01_properties/NonSerialized.fire.6": "Label",
  "cases/05_scripting/01_properties/NonSerialized.fire.8": "Label",
  "cases/05_scripting/01_properties/NonSerialized.fire.10": "这是非序列化",
  "cases/05_scripting/01_properties/ReferenceType.fire.8": "Label",
  "cases/05_scripting/01_properties/ReferenceType.fire.11": "这个例子不包括运行时演示",
  "cases/05_scripting/01_properties/ValueType.fire.6": "这个例子不包括运行时演示",
  "cases/05_scripting/02_prefab/InstantiatePrefab.fire.7": "实例化预制资源",
  "cases/05_scripting/03_events/EventInMask.fire.23": "更改节点排序",
  "cases/05_scripting/03_events/SimpleEvent.fire.19": "触摸事件可以支持点击",
  "cases/05_scripting/03_events/SimpleEvent.fire.21": "鼠标事件可以支持单击、悬停、滚轮",
  "cases/05_scripting/03_events/SimpleEvent.fire.23": "自定义事件可以手动触发\n(点击上面的按钮)",
  "cases/05_scripting/03_events/SimpleEvent.fire.25": "基本事件",
  "cases/05_scripting/03_events/TouchPropagation.fire.15": "触摸事件冒泡",
  "cases/05_scripting/04_scheduler/scheduleCallbacks.js.1": "5.00 s",
  "cases/05_scripting/04_scheduler/scheduler.fire.9": "5.00 s",
  "cases/05_scripting/04_scheduler/scheduler.fire.12": "重复定时器",
  "cases/05_scripting/04_scheduler/scheduler.fire.18": "取消定时器",
  "cases/05_scripting/04_scheduler/scheduler.fire.24": "定时执行1次",
  "cases/05_scripting/04_scheduler/scheduler.fire.29": "使用 update 函数每帧更新计数",
  "cases/05_scripting/04_scheduler/scheduler.fire.31": "定时器",
  "cases/05_scripting/05_cross_reference/CrossReference.fire.7": "Label",
  "cases/05_scripting/05_cross_reference/CrossReference.fire.12": "Label",
  "cases/05_scripting/05_cross_reference/CrossReference.fire.14": "交叉引用",
  "cases/05_scripting/06_life_cycle/life_cycle.fire.6": "生命周期",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.5": "资源加载",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.9": "加载 SpriteFrame",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.15": "加载 Texture",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.21": "加载 Audio",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.27": "加载 Txt",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.33": "加载 Font",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.39": "加载 Plist",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.45": "加载 Prefab",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.51": "加载 Scene",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.57": "加载 Animation",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.59": "加载 Spine",
  "cases/05_scripting/07_asset_loading/AssetLoading.fire.65": "当前尚无加载。",
  "cases/05_scripting/07_asset_loading/AssetLoading.js.1": "已加载 ",
  "cases/05_scripting/07_asset_loading/AssetLoading.js.2": "播放 ",
  "cases/05_scripting/07_asset_loading/AssetLoading.js.3": "创建 ",
  "cases/05_scripting/07_asset_loading/AssetLoading.js.4": "播放音乐。",
  "cases/05_scripting/07_asset_loading/AssetLoading.js.5": "这是字体！",
  "cases/05_scripting/07_asset_loading/LoadRes.fire.7": "按类型",
  "cases/05_scripting/07_asset_loading/LoadRes.fire.10": "加载 SpriteFrame",
  "cases/05_scripting/07_asset_loading/LoadRes.fire.17": "按 Url",
  "cases/05_scripting/07_asset_loading/LoadRes.fire.20": "加载预制资源",
  "cases/05_scripting/07_asset_loading/LoadResAll.fire.6": "这个例子不包括运行时演示",
  "cases/05_scripting/07_asset_loading/LoadResAll.fire.24": "全部加载",
  "cases/05_scripting/07_asset_loading/LoadResAll.fire.30": "加载全部的SpriteFrame",
  "cases/05_scripting/07_asset_loading/LoadResAll.fire.36": "清空",
  "cases/05_scripting/08_module/load_module.fire.6": "加载模块",
  "cases/05_scripting/08_module/load_module.fire.10": "创建怪物",
  "cases/05_scripting/09_singleton/Singleton.fire.6": "这例子不包含运行时演示",
  "cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.1": "下载完成!!",
  "cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.2": "正在下载: ",
  "cases/05_scripting/10_loadingBar/loadingBar.fire.7": "加载完成",
  "cases/05_scripting/10_loadingBar/loadingBar.fire.18": "正在下载",
  "cases/05_scripting/11_network/NetworkCtrl.js.1": "请稍等...",
  "cases/05_scripting/11_network/NetworkCtrl.js.2": "请稍等...",
  "cases/05_scripting/11_network/NetworkCtrl.js.3": "请稍等...",
  "cases/05_scripting/11_network/NetworkCtrl.js.4": "请稍等...",
  "cases/05_scripting/11_network/NetworkCtrl.js.5": "WebSocket\n发送二进制WS已打开.",
  "cases/05_scripting/11_network/NetworkCtrl.js.6": "WebSocket\n收到响应.",
  "cases/05_scripting/11_network/NetworkCtrl.js.7": "WebSocket\n发送二进制遇到错误.",
  "cases/05_scripting/11_network/NetworkCtrl.js.8": "WebSocket\nwebsocket 实例已关闭.",
  "cases/05_scripting/11_network/NetworkCtrl.js.9": "WebSocket\n发送二进制WS等待中...",
  "cases/05_scripting/11_network/NetworkCtrl.js.10": "WebSocket\n",
  "cases/05_scripting/11_network/NetworkCtrl.js.11": "SocketIO\n",
  "cases/05_scripting/11_network/NetworkCtrl.js.12": "SocketIO\n",
  "cases/05_scripting/11_network/NetworkCtrl.js.13": "SocketIO\n",
  "cases/05_scripting/11_network/NetworkCtrl.js.14": "SocketIO\n",
  "cases/05_scripting/11_network/network.fire.7": "Label",
  "cases/05_scripting/11_network/network.fire.6": "XMLHttpRequest",
  "cases/05_scripting/11_network/network.fire.11": "Label",
  "cases/05_scripting/11_network/network.fire.10": "XMLHttpRequest (ArrayBuffer)",
  "cases/05_scripting/11_network/network.fire.15": "Label",
  "cases/05_scripting/11_network/network.fire.14": "WebSocket",
  "cases/05_scripting/11_network/network.fire.19": "Label",
  "cases/05_scripting/11_network/network.fire.18": "SocketIO",
  "cases/native_call/native_call.fire.1": "JS to JAVA 反射只在安卓移动平台上有效果！",
  "cases/native_call/native_call.fire.2": "点击按钮调用静态方法！",
  "cases/native_call/native_call.fire.3": "点击",
  "cases/collider/Category.fire.3": "组: 碰撞",
  "cases/collider/Category.fire.5": "组: 碰撞",
  "cases/collider/Category.fire.7": "组: 碰撞",
  "cases/collider/Category.fire.9": "组: 默认",
  "cases/collider/Shape.fire.20": "显示多边形",
  "cases/collider/Shape.fire.27": "显示圆",
  "cases/collider/Shape.fire.34": "显示盒子",
  "cases/collider/Shape.fire.43": "显示多边形",
  "cases/collider/Shape.fire.50": "显示圆",
  "cases/collider/Shape.fire.57": "显示盒子",
  "cases/motionStreak/MotionStreak.fire.1": "只在 WebGL 环境下生效！",
  "cases/motionStreak/MotionStreak.fire.2": "改变拖尾",
  "cases/spine/SpineBoy.fire.11": "调试插槽",
  "cases/spine/SpineBoy.fire.18": "调试关节",
  "cases/spine/SpineBoy.fire.25": "时间缩放",
  "cases/spine/SpineBoy.fire.36": "停止",
  "cases/spine/SpineBoy.fire.43": "走",
  "cases/spine/SpineBoy.fire.50": "跑",
  "cases/spine/SpineBoy.fire.58": "跳",
  "cases/spine/SpineBoy.fire.65": "射击",
  "cases/tiledmap/Puzzle.fire.18": "你赢了",
  "cases/tiledmap/Puzzle.fire.21": "重新开始",
  "res/prefabs/ListItem.prefab.2": "Label ssss",
  "res/prefabs/Monster.prefab.3": "名字:",
  "res/prefabs/Monster.prefab.11": "等级 :",
  "res/prefabs/Monster.prefab.19": "血量 :",
  "res/prefabs/Monster.prefab.27": "攻击 :",
  "res/prefabs/Monster.prefab.35": "防御 :",
  "res/prefabs/loadItem.prefab.1": "Label",
  "resources/test assets/prefab.prefab.2": "这是一个预制",
  "resources/test assets/scene.fire.3": "返回资源加载场景",
  "resources/test assets/scene.fire.6": "返回",
  "scripts/Global/Menu.js.1": "说明暂缺"
};

cc._RFpop();
},{}]},{},["Menu","SliderCtrl","Shooter","CreateClipCtrl","PlatformMotion","VideoPlayerCtrl","LoadingBarCtrl","NetworkCtrl","doodle","Crash","DeviceMotionCtrl","ButtonInteractable","Wall","AnimationEvent","MoveAnimationCtrl","Foo","Bullet","linejoin","ActionCallback","rect","LayoutResizeContainerCtrl","Analytics","HeroControl","Singleton","OrderSwitcher","InitData","AnimationCallback","lineTo","SceneList","Push","Hittest","IAP","AnySDKList","AdaptiveSprite","FilledSpriteControl","DragonBonesCtrl","NativeCallCtrl","Ads","OnMultiTouchCtrl","RuntimeLabel","ShowCollider","CustomEvent","Social","Puzzle","sine-waves","AssetLoading","SimpleButtonCtrl","polyglot","Instruction","MyCustomComponent","MouseEvent","PopulatePrefab","ParticleControl","zh","ProgressBarCtrl","AudioControl","MonsterPrefab","en","Item","scheduleCallbacks","ReferenceTypeProperties","User","i18n","TouchDragger","SpineCtrl","Bar","ColliderListener","LoadModuleCtrl","RichTextEvents","TouchEvent","arc","ListItem","SheepAnimationCtrl","Share","SimpleAction","NodeGroupControl","PageViewCtrl","DestroySelf","SimpleKeyboardMovement","NodeGenerator","ellipse","Helpers","checkbox","ComeBackToAssetLoad","NonSerializedProperties","LoadRes_example","follow","ValueTypeProperties","EditboxCtrl","MoveAction","Desactiver","LabelLocalized","Monster","AnySDKItem","ListViewCtrl","TiledSpriteControl","ButtonControlCtrl","GoldBeatingAnime","PoolHandler","MotionStreakCtrl","TagColliderListener","webview","OnTouchCtrl","AnimateCustomPropertyCtrl","AdTracking","SingletonCtrl","SimpleMotion","loadResAll_example","REC"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9Db2Nvc0NyZWF0b3IuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXNzZXRzL2Nhc2VzLzA1X3NjcmlwdGluZy8wM19ldmVudHMvQWN0aW9uQ2FsbGJhY2suanMiLCJhc3NldHMvY2FzZXMvYW55c2RrLzA4X2FkdHJhY2tpbmcvQWRUcmFja2luZy5qcyIsImFzc2V0cy9zY3JpcHRzL0dsb2JhbC9BZGFwdGl2ZVNwcml0ZS5qcyIsImFzc2V0cy9jYXNlcy9hbnlzZGsvMDRfYWRzL0Fkcy5qcyIsImFzc2V0cy9jYXNlcy9hbnlzZGsvMDVfYW5hbHl0aWNzL0FuYWx5dGljcy5qcyIsImFzc2V0cy9jYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vQW5pbWF0ZUN1c3RvbVByb3BlcnR5L0FuaW1hdGVDdXN0b21Qcm9wZXJ0eUN0cmwuanMiLCJhc3NldHMvY2FzZXMvMDNfZ2FtZXBsYXkvMDNfYW5pbWF0aW9uL0FuaW1hdGlvbkNhbGxiYWNrLmpzIiwiYXNzZXRzL2Nhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9BbmltYXRpb25FdmVudC9BbmltYXRpb25FdmVudC5qcyIsImFzc2V0cy9jYXNlcy9hbnlzZGsvQW55U0RLSXRlbS5qcyIsImFzc2V0cy9jYXNlcy9hbnlzZGsvQW55U0RLTGlzdC5qcyIsImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcvQXNzZXRMb2FkaW5nLmpzIiwiYXNzZXRzL2Nhc2VzLzA0X2F1ZGlvL0F1ZGlvQ29udHJvbC5qcyIsImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDVfY3Jvc3NfcmVmZXJlbmNlL0Jhci5qcyIsImFzc2V0cy9jYXNlcy9jb2xsaWRlci9TaG9vdGVyL0J1bGxldC5qcyIsImFzc2V0cy9jYXNlcy8wMl91aS8wM19idXR0b24vQnV0dG9uSW5TY3JvbGwvQnV0dG9uQ29udHJvbEN0cmwuanMiLCJhc3NldHMvY2FzZXMvMDJfdWkvMDNfYnV0dG9uL0J1dHRvbkludGVyYWN0YWJsZS9CdXR0b25JbnRlcmFjdGFibGUuanMiLCJhc3NldHMvY2FzZXMvY29sbGlkZXIvQ2F0ZWdvcnkvQ29sbGlkZXJMaXN0ZW5lci5qcyIsImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcvQ29tZUJhY2tUb0Fzc2V0TG9hZC5qcyIsImFzc2V0cy9jYXNlcy9hbnlzZGsvMDlfY3Jhc2gvQ3Jhc2guanMiLCJhc3NldHMvY2FzZXMvMDNfZ2FtZXBsYXkvMDNfYW5pbWF0aW9uL0NyZWF0ZUNsaXAvQ3JlYXRlQ2xpcEN0cmwuanMiLCJhc3NldHMvY2FzZXMvMDVfc2NyaXB0aW5nLzAzX2V2ZW50cy9DdXN0b21FdmVudC5qcyIsImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDNfZXZlbnRzL0Rlc2FjdGl2ZXIuanMiLCJhc3NldHMvY2FzZXMvMDVfc2NyaXB0aW5nLzA2X2xpZmVfY3ljbGUvRGVzdHJveVNlbGYuanMiLCJhc3NldHMvY2FzZXMvMDNfZ2FtZXBsYXkvMDFfcGxheWVyX2NvbnRyb2wvRGV2aWNlTW90aW9uL0RldmljZU1vdGlvbkN0cmwuanMiLCJhc3NldHMvY2FzZXMvZHJhZ29uYm9uZXMvRHJhZ29uQm9uZXNDdHJsLmpzIiwiYXNzZXRzL2Nhc2VzLzAyX3VpLzA4X2VkaXRCb3gvRWRpdEJveC9FZGl0Ym94Q3RybC5qcyIsImFzc2V0cy9jYXNlcy8wMV9ncmFwaGljcy8wMV9zcHJpdGUvRmlsbGVkU3ByaXRlL0ZpbGxlZFNwcml0ZUNvbnRyb2wuanMiLCJhc3NldHMvY2FzZXMvMDVfc2NyaXB0aW5nLzA1X2Nyb3NzX3JlZmVyZW5jZS9Gb28uanMiLCJhc3NldHMvY2FzZXMvMDJfdWkvMDJfbGFiZWwvQml0bWFwRm9udExhYmVsL0dvbGRCZWF0aW5nQW5pbWUuanMiLCJhc3NldHMvc2NyaXB0cy9HbG9iYWwvSGVscGVycy5qcyIsImFzc2V0cy9jYXNlcy9jb2xsaWRlci9QbGF0Zm9ybS9IZXJvQ29udHJvbC5qcyIsImFzc2V0cy9jYXNlcy9jb2xsaWRlci9IaXR0ZXN0L0hpdHRlc3QuanMiLCJhc3NldHMvY2FzZXMvYW55c2RrLzAyX2lhcC9JQVAuanMiLCJhc3NldHMvY2FzZXMvMDVfc2NyaXB0aW5nLzA4X21vZHVsZS9Jbml0RGF0YS5qcyIsImFzc2V0cy9zY3JpcHRzL0dsb2JhbC9JbnN0cnVjdGlvbi5qcyIsImFzc2V0cy9jYXNlcy8wMl91aS8wNV9zY3JvbGxWaWV3L0xpc3RWaWV3L0l0ZW0uanMiLCJhc3NldHMvaTE4bi9MYWJlbExvY2FsaXplZC5qcyIsImFzc2V0cy9jYXNlcy8wMl91aS8wNl9sYXlvdXQvU2NyaXB0L0xheW91dFJlc2l6ZUNvbnRhaW5lckN0cmwuanMiLCJhc3NldHMvc2NyaXB0cy9HbG9iYWwvTGlzdEl0ZW0uanMiLCJhc3NldHMvY2FzZXMvMDJfdWkvMDVfc2Nyb2xsVmlldy9MaXN0Vmlldy9MaXN0Vmlld0N0cmwuanMiLCJhc3NldHMvY2FzZXMvMDVfc2NyaXB0aW5nLzA4X21vZHVsZS9Mb2FkTW9kdWxlQ3RybC5qcyIsImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Mb2FkUmVzL0xvYWRSZXNfZXhhbXBsZS5qcyIsImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMTBfbG9hZGluZ0Jhci9Mb2FkaW5nQmFyQ3RybC5qcyIsImFzc2V0cy9zY3JpcHRzL0dsb2JhbC9NZW51LmpzIiwiYXNzZXRzL2Nhc2VzLzA1X3NjcmlwdGluZy8wMl9wcmVmYWIvTW9uc3RlclByZWZhYi5qcyIsImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDhfbW9kdWxlL01vbnN0ZXIuanMiLCJhc3NldHMvY2FzZXMvbW90aW9uU3RyZWFrL01vdGlvblN0cmVhay9Nb3Rpb25TdHJlYWtDdHJsLmpzIiwiYXNzZXRzL2Nhc2VzLzA1X3NjcmlwdGluZy8wM19ldmVudHMvTW91c2VFdmVudC5qcyIsImFzc2V0cy9jYXNlcy8wM19nYW1lcGxheS8wMl9hY3Rpb25zL01vdmVBY3Rpb24uanMiLCJhc3NldHMvY2FzZXMvMDNfZ2FtZXBsYXkvMDNfYW5pbWF0aW9uL01vdmVBbmltYXRpb24vTW92ZUFuaW1hdGlvbkN0cmwuanMiLCJhc3NldHMvY2FzZXMvMDVfc2NyaXB0aW5nLzAxX3Byb3BlcnRpZXMvTXlDdXN0b21Db21wb25lbnQuanMiLCJhc3NldHMvY2FzZXMvbmF0aXZlX2NhbGwvTmF0aXZlX0NhbGwvTmF0aXZlQ2FsbEN0cmwuanMiLCJhc3NldHMvY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMiLCJhc3NldHMvY2FzZXMvMDVfc2NyaXB0aW5nLzEyX3Bvb2wvTm9kZUdlbmVyYXRvci5qcyIsImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDFfcHJvcGVydGllcy9Ob2RlR3JvdXBDb250cm9sLmpzIiwiYXNzZXRzL2Nhc2VzLzA1X3NjcmlwdGluZy8wMV9wcm9wZXJ0aWVzL05vblNlcmlhbGl6ZWRQcm9wZXJ0aWVzLmpzIiwiYXNzZXRzL2Nhc2VzLzAzX2dhbWVwbGF5LzAxX3BsYXllcl9jb250cm9sL09uTXVsdGlUb3VjaC9Pbk11bHRpVG91Y2hDdHJsLmpzIiwiYXNzZXRzL2Nhc2VzLzAzX2dhbWVwbGF5LzAxX3BsYXllcl9jb250cm9sL09uVG91Y2hDdHJsL09uVG91Y2hDdHJsLmpzIiwiYXNzZXRzL2Nhc2VzLzA1X3NjcmlwdGluZy8wM19ldmVudHMvT3JkZXJTd2l0Y2hlci5qcyIsImFzc2V0cy9jYXNlcy8wMl91aS8wNV9zY3JvbGxWaWV3L1BhZ2VWaWV3L1BhZ2VWaWV3Q3RybC5qcyIsImFzc2V0cy9jYXNlcy8wMV9ncmFwaGljcy8wMl9wYXJ0aWNsZS9Ub2dnbGVQYXJ0aWNsZS9QYXJ0aWNsZUNvbnRyb2wuanMiLCJhc3NldHMvY2FzZXMvY29sbGlkZXIvVXRpbHMvUGxhdGZvcm1Nb3Rpb24uanMiLCJhc3NldHMvY2FzZXMvMDVfc2NyaXB0aW5nLzEyX3Bvb2wvUG9vbEhhbmRsZXIuanMiLCJhc3NldHMvY2FzZXMvMDVfc2NyaXB0aW5nLzAyX3ByZWZhYi9Qb3B1bGF0ZVByZWZhYi5qcyIsImFzc2V0cy9jYXNlcy8wMl91aS8wNF9wcm9ncmVzc2Jhci9Qcm9ncmVzc0Jhci9Qcm9ncmVzc0JhckN0cmwuanMiLCJhc3NldHMvY2FzZXMvYW55c2RrLzA3X3B1c2gvUHVzaC5qcyIsImFzc2V0cy9jYXNlcy90aWxlZG1hcC9QdXp6bGUuanMiLCJhc3NldHMvY2FzZXMvYW55c2RrLzEwX3JlYy9SRUMuanMiLCJhc3NldHMvY2FzZXMvMDVfc2NyaXB0aW5nLzAxX3Byb3BlcnRpZXMvUmVmZXJlbmNlVHlwZVByb3BlcnRpZXMuanMiLCJhc3NldHMvY2FzZXMvMDJfdWkvMTFfcmljaHRleHQvUmljaFRleHRFdmVudHMuanMiLCJhc3NldHMvY2FzZXMvZ3JhcGhpY3MvUnVudGltZUxhYmVsLmpzIiwiYXNzZXRzL3NjcmlwdHMvR2xvYmFsL1NjZW5lTGlzdC5qcyIsImFzc2V0cy9jYXNlcy9hbnlzZGsvMDNfc2hhcmUvU2hhcmUuanMiLCJhc3NldHMvY2FzZXMvMDNfZ2FtZXBsYXkvMDNfYW5pbWF0aW9uL1Nwcml0ZUFuaW1hdGlvbi9TaGVlcEFuaW1hdGlvbkN0cmwuanMiLCJhc3NldHMvY2FzZXMvY29sbGlkZXIvU2hvb3Rlci9TaG9vdGVyLmpzIiwiYXNzZXRzL2Nhc2VzL2NvbGxpZGVyL1NoYXBlL1Nob3dDb2xsaWRlci5qcyIsImFzc2V0cy9jYXNlcy8wM19nYW1lcGxheS8wMl9hY3Rpb25zL1NpbXBsZUFjdGlvbi5qcyIsImFzc2V0cy9jYXNlcy8wMl91aS8wM19idXR0b24vU2ltcGxlQnV0dG9uL1NpbXBsZUJ1dHRvbkN0cmwuanMiLCJhc3NldHMvY2FzZXMvMDNfZ2FtZXBsYXkvMDFfcGxheWVyX2NvbnRyb2wvS2V5Ym9hcmRJbnB1dC9TaW1wbGVLZXlib2FyZE1vdmVtZW50LmpzIiwiYXNzZXRzL2Nhc2VzL2NvbGxpZGVyL1V0aWxzL1NpbXBsZU1vdGlvbi5qcyIsImFzc2V0cy9jYXNlcy8wNV9zY3JpcHRpbmcvMDlfc2luZ2xldG9uL1NpbmdsZXRvbkN0cmwuanMiLCJhc3NldHMvY2FzZXMvMDVfc2NyaXB0aW5nLzA5X3NpbmdsZXRvbi9TaW5nbGV0b24uanMiLCJhc3NldHMvY2FzZXMvMDJfdWkvMTJfc2xpZGVyL1NsaWRlci9TbGlkZXJDdHJsLmpzIiwiYXNzZXRzL2Nhc2VzL2FueXNkay8wNl9zb2NpYWwvU29jaWFsLmpzIiwiYXNzZXRzL2Nhc2VzL3NwaW5lL1NwaW5lQ3RybC5qcyIsImFzc2V0cy9jYXNlcy9jb2xsaWRlci9UYWcvVGFnQ29sbGlkZXJMaXN0ZW5lci5qcyIsImFzc2V0cy9jYXNlcy8wMV9ncmFwaGljcy8wMV9zcHJpdGUvVGlsZWRTcHJpdGUvVGlsZWRTcHJpdGVDb250cm9sLmpzIiwiYXNzZXRzL2Nhc2VzLzA1X3NjcmlwdGluZy8wM19ldmVudHMvVG91Y2hEcmFnZ2VyLmpzIiwiYXNzZXRzL2Nhc2VzLzA1X3NjcmlwdGluZy8wM19ldmVudHMvVG91Y2hFdmVudC5qcyIsImFzc2V0cy9jYXNlcy9hbnlzZGsvMDFfdXNlci9Vc2VyLmpzIiwiYXNzZXRzL2Nhc2VzLzA1X3NjcmlwdGluZy8wMV9wcm9wZXJ0aWVzL1ZhbHVlVHlwZVByb3BlcnRpZXMuanMiLCJhc3NldHMvY2FzZXMvMDJfdWkvMDlfdmlkZW9wbGF5ZXIvVmlkZW9QbGF5ZXIvVmlkZW9QbGF5ZXJDdHJsLmpzIiwiYXNzZXRzL2Nhc2VzL2NvbGxpZGVyL1V0aWxzL1dhbGwuanMiLCJhc3NldHMvY2FzZXMvZ3JhcGhpY3MvZXhhbXBsZS9hcmMuanMiLCJhc3NldHMvY2FzZXMvMDJfdWkvMTNfY2hlY2tib3gvY2hlY2tib3guanMiLCJhc3NldHMvY2FzZXMvZ3JhcGhpY3MvZGVtby9kb29kbGUuanMiLCJhc3NldHMvY2FzZXMvZ3JhcGhpY3MvZXhhbXBsZS9lbGxpcHNlLmpzIiwiYXNzZXRzL2kxOG4vZGF0YS9lbi5qcyIsImFzc2V0cy9jYXNlcy9jb2xsaWRlci9QbGF0Zm9ybS9mb2xsb3cuanMiLCJhc3NldHMvaTE4bi9pMThuLmpzIiwiYXNzZXRzL2Nhc2VzL2dyYXBoaWNzL2V4YW1wbGUvbGluZVRvLmpzIiwiYXNzZXRzL2Nhc2VzL2dyYXBoaWNzL2V4YW1wbGUvbGluZWpvaW4uanMiLCJhc3NldHMvY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvTG9hZFJlc0FsbC9sb2FkUmVzQWxsX2V4YW1wbGUuanMiLCJhc3NldHMvaTE4bi9wb2x5Z2xvdC5qcyIsImFzc2V0cy9jYXNlcy9ncmFwaGljcy9leGFtcGxlL3JlY3QuanMiLCJhc3NldHMvY2FzZXMvMDVfc2NyaXB0aW5nLzA0X3NjaGVkdWxlci9zY2hlZHVsZUNhbGxiYWNrcy5qcyIsImFzc2V0cy9jYXNlcy9ncmFwaGljcy9kZW1vL3NpbmUtd2F2ZXMuanMiLCJhc3NldHMvY2FzZXMvMDJfdWkvMTBfd2Vidmlldy93ZWJ2aWV3LmpzIiwiYXNzZXRzL2kxOG4vZGF0YS96aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzloQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3pXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeFRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcyODgxZTZLMWVkTEJiZ3ZjKzYvWU43bycsICdBY3Rpb25DYWxsYmFjaycpO1xuLy8gY2FzZXMvMDVfc2NyaXB0aW5nLzAzX2V2ZW50cy9BY3Rpb25DYWxsYmFjay5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIHRvdWNoRXZlbnQgPSB0aGlzLmdldENvbXBvbmVudCgnVG91Y2hFdmVudCcpO1xuICAgICAgICB2YXIgbW91c2VFdmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KCdNb3VzZUV2ZW50Jyk7XG4gICAgICAgIHZhciBldmVudCA9IHRvdWNoRXZlbnQgfHwgbW91c2VFdmVudDtcbiAgICAgICAgZXZlbnQuX2NhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zY2FsZVRvKDAuNSwgMiwgMSksIGNjLnNjYWxlVG8oMC4yNSwgMSwgMSkpKTtcbiAgICAgICAgfTtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2ZiYzNlMEhuRDFOUDdwN0VrMW44SVFlJywgJ0FkVHJhY2tpbmcnKTtcbi8vIGNhc2VzL2FueXNkay8wOF9hZHRyYWNraW5nL0FkVHJhY2tpbmcuanNcblxuY2MuQ2xhc3Moe1xuICAgICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgICAgcHJvcGVydGllczoge30sXG5cbiAgICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgICAgICBpZiAoY2Muc3lzLmlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmFkVHJhY2tpbmdQbHVnaW4gPSBhbnlzZGsuYWdlbnRNYW5hZ2VyLmdldEFkVHJhY2tpbmdQbHVnaW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIG9uUmVnaXN0ZXI6IGZ1bmN0aW9uIG9uUmVnaXN0ZXIoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYWRUcmFja2luZ1BsdWdpbikgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5hZFRyYWNraW5nUGx1Z2luLm9uUmVnaXN0ZXIoXCJ1c2VyaWRcIik7XG4gICAgICB9LFxuXG4gICAgICBvbkxvZ2luOiBmdW5jdGlvbiBvbkxvZ2luKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmFkVHJhY2tpbmdQbHVnaW4pIHJldHVybjtcbiAgICAgICAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICAgICAgICAgICAgXCJVc2VyX0lkXCI6IFwiMTIzNDU2XCIsXG4gICAgICAgICAgICAgICAgICBcIlJvbGVfSWRcIjogXCJ0ZXN0XCIsXG4gICAgICAgICAgICAgICAgICBcIlJvbGVfTmFtZVwiOiBcInRlc3RcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuYWRUcmFja2luZ1BsdWdpbi5vbkxvZ2luKGluZm8pO1xuICAgICAgfSxcblxuICAgICAgb25QYXk6IGZ1bmN0aW9uIG9uUGF5KCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmFkVHJhY2tpbmdQbHVnaW4pIHJldHVybjtcbiAgICAgICAgICAgIHZhciBteURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdmFyIGluZm8gPSB7XG4gICAgICAgICAgICAgICAgICBcIlVzZXJfSWRcIjogXCIxMjM0NTZcIixcbiAgICAgICAgICAgICAgICAgIFwiT3JkZXJfSWRcIjogbXlEYXRlLnRvTG9jYWxlVGltZVN0cmluZygpLFxuICAgICAgICAgICAgICAgICAgXCJDdXJyZW5jeV9BbW91bnRcIjogXCI1XCIsXG4gICAgICAgICAgICAgICAgICBcIkN1cnJlbmN5X1R5cGVcIjogXCJDTllcIixcbiAgICAgICAgICAgICAgICAgIFwiUGF5bWVudF9UeXBlXCI6IFwidGVzdFwiLFxuICAgICAgICAgICAgICAgICAgXCJQYXltZW50X1RpbWVcIjogbXlEYXRlLnRvTG9jYWxlVGltZVN0cmluZygpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5hZFRyYWNraW5nUGx1Z2luLm9uUGF5KGluZm8pO1xuICAgICAgfSxcblxuICAgICAgdHJhY2tFdmVudDogZnVuY3Rpb24gdHJhY2tFdmVudCgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5hZFRyYWNraW5nUGx1Z2luKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmFkVHJhY2tpbmdQbHVnaW4udHJhY2tFdmVudChcImV2ZW50XzFcIik7XG4gICAgICAgICAgICB0aGlzLmFkVHJhY2tpbmdQbHVnaW4udHJhY2tFdmVudChcImV2ZW50XzJcIik7XG4gICAgICB9LFxuXG4gICAgICBvbkNyZWF0ZVJvbGU6IGZ1bmN0aW9uIG9uQ3JlYXRlUm9sZSgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5hZFRyYWNraW5nUGx1Z2luIHx8ICF0aGlzLmFkVHJhY2tpbmdQbHVnaW4ub25DcmVhdGVSb2xlKSByZXR1cm47XG4gICAgICAgICAgICB2YXIgaW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgIFwiVXNlcl9JZFwiOiBcIjEyMzQ1NlwiLFxuICAgICAgICAgICAgICAgICAgXCJSb2xlX0lkXCI6IFwidGVzdFwiLFxuICAgICAgICAgICAgICAgICAgXCJSb2xlX05hbWVcIjogXCJ0ZXN0XCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmFkVHJhY2tpbmdQbHVnaW4udHJhY2tFdmVudChcIm9uQ3JlYXRlUm9sZVwiLCBpbmZvKTtcbiAgICAgIH0sXG5cbiAgICAgIG9uTGV2ZWxVcDogZnVuY3Rpb24gb25MZXZlbFVwKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmFkVHJhY2tpbmdQbHVnaW4gfHwgIXRoaXMuYWRUcmFja2luZ1BsdWdpbi5vbkxldmVsVXApIHJldHVybjtcbiAgICAgICAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICAgICAgICAgICAgXCJVc2VyX0lkXCI6IFwiMTIzNDU2XCIsXG4gICAgICAgICAgICAgICAgICBcIlJvbGVfSWRcIjogXCJ0ZXN0XCIsXG4gICAgICAgICAgICAgICAgICBcIlJvbGVfTmFtZVwiOiBcInRlc3RcIixcbiAgICAgICAgICAgICAgICAgIFwiTGV2ZWxcIjogXCIxMFwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5hZFRyYWNraW5nUGx1Z2luLnRyYWNrRXZlbnQoXCJvbkxldmVsVXBcIiwgaW5mbyk7XG4gICAgICB9LFxuICAgICAgb25TdGFydFRvUGF5OiBmdW5jdGlvbiBvblN0YXJ0VG9QYXkoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYWRUcmFja2luZ1BsdWdpbiB8fCAhdGhpcy5hZFRyYWNraW5nUGx1Z2luLm9uU3RhcnRUb1BheSkgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIG15RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB2YXIgaW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgIFwiVXNlcl9JZFwiOiBcIjEyMzQ1NlwiLFxuICAgICAgICAgICAgICAgICAgXCJPcmRlcl9JZFwiOiBteURhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICBcIkN1cnJlbmN5X0Ftb3VudFwiOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgIFwiQ3VycmVuY3lfVHlwZVwiOiBcIkNOWVwiLFxuICAgICAgICAgICAgICAgICAgXCJQYXltZW50X1R5cGVcIjogXCJ0ZXN0XCIsXG4gICAgICAgICAgICAgICAgICBcIlBheW1lbnRfVGltZVwiOiBteURhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmFkVHJhY2tpbmdQbHVnaW4udHJhY2tFdmVudChcIm9uU3RhcnRUb1BheVwiLCBpbmZvKTtcbiAgICAgIH1cblxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc0ZWRmMUpURi9CSElLWlZZM0ZhQXFzVCcsICdBZGFwdGl2ZVNwcml0ZScpO1xuLy8gc2NyaXB0cy9HbG9iYWwvQWRhcHRpdmVTcHJpdGUuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAgICAgcGFkZGluZzogMjAsXG5cbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuXG4gICAgICAgIGJhY2tncm91cDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYmFja2dyb3VwLndpZHRoICE9PSB0aGlzLmxhYmVsLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmJhY2tncm91cC53aWR0aCA9IHRoaXMubGFiZWwud2lkdGggKyB0aGlzLnBhZGRpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmFja2dyb3VwLmhlaWdodCAhPT0gdGhpcy5sYWJlbC5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VwLmhlaWdodCA9IHRoaXMubGFiZWwuaGVpZ2h0ICsgdGhpcy5wYWRkaW5nO1xuICAgICAgICB9XG4gICAgfVxuXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzUyNjBiWER0eWxCd1lUa1AyR1NWOXpjJywgJ0FkcycpO1xuLy8gY2FzZXMvYW55c2RrLzA0X2Fkcy9BZHMuanNcblxuY2MuQ2xhc3Moe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvcGVydGllczoge30sXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGNjLnN5cy5pc01vYmlsZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5hZHNQbHVnaW4gPSBhbnlzZGsuYWdlbnRNYW5hZ2VyLmdldEFkc1BsdWdpbigpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuYWRzUGx1Z2luKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5hZHNQbHVnaW4uc2V0TGlzdGVuZXIodGhpcy5vbkFkc1Jlc3VsdCwgdGhpcyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJlbG9hZEFkczogZnVuY3Rpb24gcHJlbG9hZEFkcygpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCF0aGlzLmFkc1BsdWdpbiB8fCAhdGhpcy5hZHNQbHVnaW4uaXNBZFR5cGVTdXBwb3J0ZWQoYW55c2RrLkFkc1R5cGUuQURfVFlQRV9CQU5ORVIpKSByZXR1cm47XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuYWRzUGx1Z2luLnByZWxvYWRBZHMoYW55c2RrLkFkc1R5cGUuQURfVFlQRV9CQU5ORVIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaG93QWRzOiBmdW5jdGlvbiBzaG93QWRzKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIXRoaXMuYWRzUGx1Z2luIHx8ICF0aGlzLmFkc1BsdWdpbi5pc0FkVHlwZVN1cHBvcnRlZChhbnlzZGsuQWRzVHlwZS5BRF9UWVBFX0JBTk5FUikpIHJldHVybjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5hZHNQbHVnaW4uc2hvd0FkcyhhbnlzZGsuQWRzVHlwZS5BRF9UWVBFX0JBTk5FUik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhpZGVBZHM6IGZ1bmN0aW9uIGhpZGVBZHMoKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICghdGhpcy5hZHNQbHVnaW4gfHwgIXRoaXMuYWRzUGx1Z2luLmlzQWRUeXBlU3VwcG9ydGVkKGFueXNkay5BZHNUeXBlLkFEX1RZUEVfQkFOTkVSKSkgcmV0dXJuO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmFkc1BsdWdpbi5oaWRlQWRzKGFueXNkay5BZHNUeXBlLkFEX1RZUEVfQkFOTkVSKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cXVlcnlQb2ludHM6IGZ1bmN0aW9uIHF1ZXJ5UG9pbnRzKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIXRoaXMuYWRzUGx1Z2luKSByZXR1cm47XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBwb2ludCA9IHRoaXMuYWRzUGx1Z2luLnF1ZXJ5UG9pbnRzKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNjLmxvZygnIyMjIyMjIyMjIyBxdWVyeVBvaW50cyAjIyMjIyMjIyMjIDogJyArIHBvaW50KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3BlbmRQb2ludHM6IGZ1bmN0aW9uIHNwZW5kUG9pbnRzKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIXRoaXMuYWRzUGx1Z2luKSByZXR1cm47XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuYWRzUGx1Z2luLnNwZW5kUG9pbnRzKDEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkFkc1Jlc3VsdDogZnVuY3Rpb24gb25BZHNSZXN1bHQoY29kZSwgbXNnKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNjLmxvZygnIyMjIyMjIyMjIyBBRFMgUkVTVUxUICMjIyMjIyMjIyMgY29kZTogJyArIGNvZGUgKyAnLG1zZzogJyArIG1zZyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAoY29kZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBhbnlzZGsuQWRzUmVzdWx0Q29kZS5rQWRzUmVjZWl2ZWQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2MubG9nKFwiIyMjIyMjIyMjIyBrQWRzUmVjZWl2ZWQgIyMjIyMjIyMjI1wiKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgYW55c2RrLkFkc1Jlc3VsdENvZGUua0Fkc1Nob3duOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNjLmxvZyhcIiMjIyMjIyMjIyMga0Fkc1Nob3duICMjIyMjIyMjIyNcIik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIGFueXNkay5BZHNSZXN1bHRDb2RlLmtBZHNEaXNtaXNzZWQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2MubG9nKFwiIyMjIyMjIyMjIyBrQWRzRGlzbWlzc2VkICMjIyMjIyMjIyNcIik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIGFueXNkay5BZHNSZXN1bHRDb2RlLmtQb2ludHNTcGVuZFN1Y2NlZWQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2MubG9nKFwiIyMjIyMjIyMjIyBrUG9pbnRzU3BlbmRTdWNjZWVkICMjIyMjIyMjIyNcIik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIGFueXNkay5BZHNSZXN1bHRDb2RlLmtQb2ludHNTcGVuZEZhaWxlZDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYy5sb2coXCIjIyMjIyMjIyMjIGtQb2ludHNTcGVuZEZhaWxlZCAjIyMjIyMjIyMjXCIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBhbnlzZGsuQWRzUmVzdWx0Q29kZS5rTmV0d29ya0Vycm9yOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNjLmxvZyhcIiMjIyMjIyMjIyMga05ldHdvcmtFcnJvciAjIyMjIyMjIyMjXCIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBhbnlzZGsuQWRzUmVzdWx0Q29kZS5rVW5rbm93bkVycm9yOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNjLmxvZyhcIiMjIyMjIyMjIyMga1Vua25vd25FcnJvciAjIyMjIyMjIyMjXCIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBhbnlzZGsuQWRzUmVzdWx0Q29kZS5rT2ZmZXJXYWxsT25Qb2ludHNDaGFuZ2VkOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNjLmxvZyhcIiMjIyMjIyMjIyMga09mZmVyV2FsbE9uUG9pbnRzQ2hhbmdlZCAjIyMjIyMjIyMjXCIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICczMzAzNTNnOWZwR200WDRRT3ZpNi9HQicsICdBbmFseXRpY3MnKTtcbi8vIGNhc2VzL2FueXNkay8wNV9hbmFseXRpY3MvQW5hbHl0aWNzLmpzXG5cbmNjLkNsYXNzKHtcblx0J2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cblx0cHJvcGVydGllczoge30sXG5cblx0Ly8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG5cdG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuXHRcdGlmIChjYy5zeXMuaXNNb2JpbGUpIHtcblx0XHRcdHRoaXMuYW5hbHl0aWNzUGx1Z2luID0gYW55c2RrLmFnZW50TWFuYWdlci5nZXRBbmFseXRpY3NQbHVnaW4oKTtcblx0XHR9XG5cdH0sXG5cblx0c3RhcnRTZXNzaW9uOiBmdW5jdGlvbiBzdGFydFNlc3Npb24oKSB7XG5cdFx0aWYgKCF0aGlzLmFuYWx5dGljc1BsdWdpbikgcmV0dXJuO1xuXHRcdHRoaXMuYW5hbHl0aWNzUGx1Z2luLnN0YXJ0U2Vzc2lvbigpO1xuXHR9LFxuXG5cdHN0b3BTZXNzaW9uOiBmdW5jdGlvbiBzdG9wU2Vzc2lvbigpIHtcblx0XHRpZiAoIXRoaXMuYW5hbHl0aWNzUGx1Z2luKSByZXR1cm47XG5cdFx0dGhpcy5hbmFseXRpY3NQbHVnaW4uc3RvcFNlc3Npb24oKTtcblx0fSxcblxuXHRzZXRTZXNzaW9uQ29udGludWVNaWxsaXM6IGZ1bmN0aW9uIHNldFNlc3Npb25Db250aW51ZU1pbGxpcygpIHtcblx0XHRpZiAoIXRoaXMuYW5hbHl0aWNzUGx1Z2luKSByZXR1cm47XG5cdFx0dGhpcy5hbmFseXRpY3NQbHVnaW4uc2V0U2Vzc2lvbkNvbnRpbnVlTWlsbGlzKDEwMCk7XG5cdH0sXG5cblx0bG9nRXJyb3I6IGZ1bmN0aW9uIGxvZ0Vycm9yKCkge1xuXHRcdGlmICghdGhpcy5hbmFseXRpY3NQbHVnaW4pIHJldHVybjtcblx0XHR0aGlzLmFuYWx5dGljc1BsdWdpbi5sb2dFcnJvcignZXJyb3InLCAnZXJyTXNnJyk7XG5cdH0sXG5cblx0bG9nRXZlbnQ6IGZ1bmN0aW9uIGxvZ0V2ZW50KGV2ZW50SUQsIHBhcmFtTWFwKSB7XG5cdFx0aWYgKCF0aGlzLmFuYWx5dGljc1BsdWdpbikgcmV0dXJuO1xuXHRcdHRoaXMuYW5hbHl0aWNzUGx1Z2luLmxvZ0V2ZW50KCdlcnJvcicpO1xuXHRcdHRoaXMuYW5hbHl0aWNzUGx1Z2luLmxvZ0V2ZW50KCdlcnJvcicsIHsgJ2Vyck1zZyc6ICdlcnJNc2cnIH0pO1xuXHR9LFxuXG5cdGxvZ1RpbWVkRXZlbnRCZWdpbjogZnVuY3Rpb24gbG9nVGltZWRFdmVudEJlZ2luKCkge1xuXHRcdGlmICghdGhpcy5hbmFseXRpY3NQbHVnaW4pIHJldHVybjtcblx0XHR0aGlzLmFuYWx5dGljc1BsdWdpbi5sb2dUaW1lZEV2ZW50QmVnaW4oJ2Vycm9yYmVnaW4nKTtcblx0fSxcblxuXHRsb2dUaW1lZEV2ZW50RW5kOiBmdW5jdGlvbiBsb2dUaW1lZEV2ZW50RW5kKCkge1xuXHRcdGlmICghdGhpcy5hbmFseXRpY3NQbHVnaW4pIHJldHVybjtcblx0XHR0aGlzLmFuYWx5dGljc1BsdWdpbi5sb2dUaW1lZEV2ZW50RW5kKCdlcnJvcmVuZCcpO1xuXHR9LFxuXG5cdHNldEFjY291bnQ6IGZ1bmN0aW9uIHNldEFjY291bnQoKSB7XG5cdFx0aWYgKCF0aGlzLmFuYWx5dGljc1BsdWdpbiB8fCAhdGhpcy5hbmFseXRpY3NQbHVnaW4uc2V0QWNjb3VudCkgcmV0dXJuO1xuXHRcdHZhciBwYXJhbU1hcCA9IHtcblx0XHRcdCdBY2NvdW50X0lkJzogJzEyMzQ1NicsXG5cdFx0XHQnQWNjb3VudF9OYW1lJzogJ3Rlc3QnLFxuXHRcdFx0J0FjY291bnRfVHlwZSc6IGFueXNkay5BY2NvdW50VHlwZS5BTk9OWU1PVVMudG9TdHJpbmcoKSxcblx0XHRcdCdBY2NvdW50X0xldmVsJzogJzEnLFxuXHRcdFx0J0FjY291bnRfQWdlJzogJzEnLFxuXHRcdFx0J0FjY291bnRfT3BlcmF0ZSc6IGFueXNkay5BY2NvdW50T3BlcmF0ZS5MT0dJTi50b1N0cmluZygpLFxuXHRcdFx0J0FjY291bnRfR2VuZGVyJzogYW55c2RrLkFjY291bnRHZW5kZXIuTUFMRS50b1N0cmluZygpLFxuXHRcdFx0J1NlcnZlcl9JZCc6ICcxJ1xuXHRcdH07XG5cdFx0dGhpcy5hbmFseXRpY3NQbHVnaW4uc2V0QWNjb3VudChwYXJhbU1hcCk7XG5cdH0sXG5cblx0b25DaGFyZ2VSZXF1ZXN0OiBmdW5jdGlvbiBvbkNoYXJnZVJlcXVlc3QoKSB7XG5cdFx0aWYgKCF0aGlzLmFuYWx5dGljc1BsdWdpbiB8fCAhdGhpcy5hbmFseXRpY3NQbHVnaW4ub25DaGFyZ2VSZXF1ZXN0KSByZXR1cm47XG5cdFx0dmFyIHBhcmFtTWFwID0ge1xuXHRcdFx0J09yZGVyX0lkJzogJzEyMzQ1NicsXG5cdFx0XHQnUHJvZHVjdF9OYW1lJzogJ3Rlc3QnLFxuXHRcdFx0J0N1cnJlbmN5X0Ftb3VudCc6ICcyLjAnLFxuXHRcdFx0J0N1cnJlbmN5X1R5cGUnOiAnQ05ZJyxcblx0XHRcdCdQYXltZW50X1R5cGUnOiAn5rig6YGTJyxcblx0XHRcdCdWaXJ0dWFsX0N1cnJlbmN5X0Ftb3VudCc6ICcxMDAnXG5cdFx0fTtcblx0XHR0aGlzLmFuYWx5dGljc1BsdWdpbi5vbkNoYXJnZVJlcXVlc3QocGFyYW1NYXApO1xuXHR9LFxuXG5cdG9uQ2hhcmdlT25seVN1Y2Nlc3M6IGZ1bmN0aW9uIG9uQ2hhcmdlT25seVN1Y2Nlc3MoKSB7XG5cdFx0aWYgKCF0aGlzLmFuYWx5dGljc1BsdWdpbiB8fCAhdGhpcy5hbmFseXRpY3NQbHVnaW4ub25DaGFyZ2VPbmx5U3VjY2VzcykgcmV0dXJuO1xuXHRcdHZhciBwYXJhbU1hcCA9IHtcblx0XHRcdCdPcmRlcl9JZCc6ICcxMjM0NTYnLFxuXHRcdFx0J1Byb2R1Y3RfTmFtZSc6ICd0ZXN0Jyxcblx0XHRcdCdDdXJyZW5jeV9BbW91bnQnOiAnMi4wJyxcblx0XHRcdCdDdXJyZW5jeV9UeXBlJzogJzEnLFxuXHRcdFx0J1BheW1lbnRfVHlwZSc6ICcxJyxcblx0XHRcdCdWaXJ0dWFsX0N1cnJlbmN5X0Ftb3VudCc6ICcxMDAnXG5cdFx0fTtcblx0XHR0aGlzLmFuYWx5dGljc1BsdWdpbi5vbkNoYXJnZU9ubHlTdWNjZXNzKHBhcmFtTWFwKTtcblx0fSxcblxuXHRvbkNoYXJnZVN1Y2Nlc3M6IGZ1bmN0aW9uIG9uQ2hhcmdlU3VjY2VzcygpIHtcblx0XHRpZiAoIXRoaXMuYW5hbHl0aWNzUGx1Z2luIHx8ICF0aGlzLmFuYWx5dGljc1BsdWdpbi5vbkNoYXJnZVN1Y2Nlc3MpIHJldHVybjtcblx0XHR0aGlzLmFuYWx5dGljc1BsdWdpbi5vbkNoYXJnZVN1Y2Nlc3MoJzEyMzQ1NicpO1xuXHR9LFxuXG5cdG9uQ2hhcmdlRmFpbDogZnVuY3Rpb24gb25DaGFyZ2VGYWlsKCkge1xuXHRcdGlmICghdGhpcy5hbmFseXRpY3NQbHVnaW4gfHwgIXRoaXMuYW5hbHl0aWNzUGx1Z2luLm9uQ2hhcmdlRmFpbCkgcmV0dXJuO1xuXHRcdHZhciBwYXJhbU1hcCA9IHtcblx0XHRcdCdPcmRlcl9JZCc6ICcxMjM0NTYnLFxuXHRcdFx0J0ZhaWxfUmVhc29uJzogJ3Rlc3QnXG5cdFx0fTtcblx0XHR0aGlzLmFuYWx5dGljc1BsdWdpbi5vbkNoYXJnZUZhaWwocGFyYW1NYXApO1xuXHR9LFxuXG5cdG9uUHVyY2hhc2U6IGZ1bmN0aW9uIG9uUHVyY2hhc2UoKSB7XG5cdFx0aWYgKCF0aGlzLmFuYWx5dGljc1BsdWdpbiB8fCAhdGhpcy5hbmFseXRpY3NQbHVnaW4ub25QdXJjaGFzZSkgcmV0dXJuO1xuXHRcdHZhciBwYXJhbU1hcCA9IHtcblx0XHRcdCdJdGVtX0lkJzogJzEyMzQ1NicsXG5cdFx0XHQnSXRlbV9UeXBlJzogJ3Rlc3QnLFxuXHRcdFx0J0l0ZW1fQ291bnQnOiAnMicsXG5cdFx0XHQnVmlydHVhbF9DdXJyZW5jeSc6ICcxJyxcblx0XHRcdCdDdXJyZW5jeV9UeXBlJzogYW55c2RrLmFnZW50TWFuYWdlci5nZXRDaGFubmVsSWQoKVxuXHRcdH07XG5cdFx0dGhpcy5hbmFseXRpY3NQbHVnaW4ub25QdXJjaGFzZShwYXJhbU1hcCk7XG5cdH0sXG5cblx0b25Vc2U6IGZ1bmN0aW9uIG9uVXNlKCkge1xuXHRcdGlmICghdGhpcy5hbmFseXRpY3NQbHVnaW4gfHwgIXRoaXMuYW5hbHl0aWNzUGx1Z2luLm9uVXNlKSByZXR1cm47XG5cdFx0dmFyIHBhcmFtTWFwID0ge1xuXHRcdFx0J0l0ZW1fSWQnOiAnMTIzNDU2Jyxcblx0XHRcdCdJdGVtX1R5cGUnOiAndGVzdCcsXG5cdFx0XHQnSXRlbV9Db3VudCc6ICcyJyxcblx0XHRcdCdVc2VfUmVhc29uJzogJzEnXG5cdFx0fTtcblx0XHR0aGlzLmFuYWx5dGljc1BsdWdpbi5vblVzZShwYXJhbU1hcCk7XG5cdH0sXG5cblx0b25SZXdhcmQ6IGZ1bmN0aW9uIG9uUmV3YXJkKCkge1xuXHRcdGlmICghdGhpcy5hbmFseXRpY3NQbHVnaW4gfHwgIXRoaXMuYW5hbHl0aWNzUGx1Z2luLm9uUmV3YXJkKSByZXR1cm47XG5cdFx0dmFyIHBhcmFtTWFwID0ge1xuXHRcdFx0J0l0ZW1fSWQnOiAnMTIzNDU2Jyxcblx0XHRcdCdJdGVtX1R5cGUnOiAndGVzdCcsXG5cdFx0XHQnSXRlbV9Db3VudCc6ICcyJyxcblx0XHRcdCdVc2VfUmVhc29uJzogJzEnXG5cdFx0fTtcblx0XHR0aGlzLmFuYWx5dGljc1BsdWdpbi5vblJld2FyZChwYXJhbU1hcCk7XG5cdH0sXG5cblx0c3RhcnRMZXZlbDogZnVuY3Rpb24gc3RhcnRMZXZlbCgpIHtcblx0XHRpZiAoIXRoaXMuYW5hbHl0aWNzUGx1Z2luIHx8ICF0aGlzLmFuYWx5dGljc1BsdWdpbi5zdGFydExldmVsKSByZXR1cm47XG5cdFx0dmFyIHBhcmFtTWFwID0ge1xuXHRcdFx0J0xldmVsX0lkJzogJzEyMzQ1NicsXG5cdFx0XHQnU2VxX051bSc6ICcxJ1xuXHRcdH07XG5cdFx0dGhpcy5hbmFseXRpY3NQbHVnaW4uc3RhcnRMZXZlbChwYXJhbU1hcCk7XG5cdH0sXG5cblx0ZmluaXNoTGV2ZWw6IGZ1bmN0aW9uIGZpbmlzaExldmVsKCkge1xuXHRcdGlmICghdGhpcy5hbmFseXRpY3NQbHVnaW4gfHwgIXRoaXMuYW5hbHl0aWNzUGx1Z2luLmZpbmlzaExldmVsKSByZXR1cm47XG5cdFx0dGhpcy5hbmFseXRpY3NQbHVnaW4uZmluaXNoTGV2ZWwoJzEyMzQ1NicpO1xuXHR9LFxuXG5cdGZhaWxMZXZlbDogZnVuY3Rpb24gZmFpbExldmVsKCkge1xuXHRcdGlmICghdGhpcy5hbmFseXRpY3NQbHVnaW4gfHwgIXRoaXMuYW5hbHl0aWNzUGx1Z2luLmZhaWxMZXZlbCkgcmV0dXJuO1xuXHRcdHZhciBwYXJhbU1hcCA9IHtcblx0XHRcdCdMZXZlbF9JZCc6ICcxMjM0NTYnLFxuXHRcdFx0J0ZhaWxfUmVhc29uJzogJ3Rlc3QnXG5cdFx0fTtcblx0XHR0aGlzLmFuYWx5dGljc1BsdWdpbi5mYWlsTGV2ZWwocGFyYW1NYXApO1xuXHR9LFxuXG5cdHN0YXJ0VGFzazogZnVuY3Rpb24gc3RhcnRUYXNrKCkge1xuXHRcdGlmICghdGhpcy5hbmFseXRpY3NQbHVnaW4gfHwgIXRoaXMuYW5hbHl0aWNzUGx1Z2luLnN0YXJ0VGFzaykgcmV0dXJuO1xuXHRcdHZhciBwYXJhbU1hcCA9IHtcblx0XHRcdCdUYXNrX0lkJzogJzEyMzQ1NicsXG5cdFx0XHQnVGFza19UeXBlJzogYW55c2RrLlRhc2tUeXBlLkdVSURFX0xJTkUudG9TdHJpbmcoKVxuXHRcdH07XG5cdFx0dGhpcy5hbmFseXRpY3NQbHVnaW4uc3RhcnRUYXNrKHBhcmFtTWFwKTtcblx0fSxcblxuXHRmaW5pc2hUYXNrOiBmdW5jdGlvbiBmaW5pc2hUYXNrKCkge1xuXHRcdGlmICghdGhpcy5hbmFseXRpY3NQbHVnaW4gfHwgIXRoaXMuYW5hbHl0aWNzUGx1Z2luLmZpbmlzaFRhc2spIHJldHVybjtcblx0XHR0aGlzLmFuYWx5dGljc1BsdWdpbi5maW5pc2hUYXNrKCcxMjM0NTYnKTtcblx0fSxcblxuXHRmYWlsVGFzazogZnVuY3Rpb24gZmFpbFRhc2soKSB7XG5cdFx0aWYgKCF0aGlzLmFuYWx5dGljc1BsdWdpbiB8fCAhdGhpcy5hbmFseXRpY3NQbHVnaW4uZmFpbFRhc2spIHJldHVybjtcblx0XHR2YXIgcGFyYW1NYXAgPSB7XG5cdFx0XHQnVGFza19JZCc6ICcxMjM0NTYnLFxuXHRcdFx0J0ZhaWxfUmVhc29uJzogJ3Rlc3QnXG5cdFx0fTtcblx0XHR0aGlzLmFuYWx5dGljc1BsdWdpbi5mYWlsVGFzayhwYXJhbU1hcCk7XG5cdH1cblxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdmYjE0Y21uN0tKSkNvNHFWY095L0dtUycsICdBbmltYXRlQ3VzdG9tUHJvcGVydHlDdHJsJyk7XG4vLyBjYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vQW5pbWF0ZUN1c3RvbVByb3BlcnR5L0FuaW1hdGVDdXN0b21Qcm9wZXJ0eUN0cmwuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGhwOiAwLFxuICAgICAgICBlbWlzc2lvblJvdGU6IDAsXG4gICAgICAgIG51bTogMCxcbiAgICAgICAgaHBCYXI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJvZ3Jlc3NCYXJcbiAgICAgICAgfSxcbiAgICAgICAgcGFydGljbGU6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUGFydGljbGVTeXN0ZW1cbiAgICAgICAgfSxcbiAgICAgICAgc2NvcmU6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLmhwQmFyLnByb2dyZXNzID0gdGhpcy5ocDtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZS5lbWlzc2lvblJhdGUgPSB0aGlzLmVtaXNzaW9uUm90ZTtcbiAgICAgICAgdGhpcy5zY29yZS5zdHJpbmcgPSBNYXRoLmNlaWwodGhpcy5udW0pO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnM2QzMTF1bVl1TkFNNjFoSHNjVHh3a3EnLCAnQW5pbWF0aW9uQ2FsbGJhY2snKTtcbi8vIGNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9BbmltYXRpb25DYWxsYmFjay5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHBsYXlMYWJlbDoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXVzZUxhYmVsOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuXG4gICAgICAgIHN0YXRlTGFiZWw6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG5cbiAgICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5BbmltYXRpb25cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uO1xuXG4gICAgICAgIGFuaW1hdGlvbi5vbigncGxheScsIHRoaXMub25QbGF5LCB0aGlzKTtcbiAgICAgICAgYW5pbWF0aW9uLm9uKCdzdG9wJywgdGhpcy5vblN0b3AsIHRoaXMpO1xuICAgICAgICBhbmltYXRpb24ub24oJ2xhc3RmcmFtZScsIHRoaXMub25MYXN0RnJhbWUsIHRoaXMpO1xuICAgICAgICBhbmltYXRpb24ub24oJ2ZpbmlzaGVkJywgdGhpcy5vbkZpbmlzaGVkLCB0aGlzKTtcbiAgICAgICAgYW5pbWF0aW9uLm9uKCdwYXVzZScsIHRoaXMub25QYXVzZSwgdGhpcyk7XG4gICAgICAgIGFuaW1hdGlvbi5vbigncmVzdW1lJywgdGhpcy5vblJlc3VtZSwgdGhpcyk7XG4gICAgfSxcblxuICAgIG9uUGxheUJ1dHRvbkNsaWNrZWQ6IGZ1bmN0aW9uIG9uUGxheUJ1dHRvbkNsaWNrZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXlMYWJlbC5zdHJpbmcgPT09ICdwbGF5Jykge1xuICAgICAgICAgICAgdGhpcy5wbGF5TGFiZWwuc3RyaW5nID0gJ3N0b3AnO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24ucGxheSgnbGluZWFyJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlMYWJlbC5zdHJpbmcgPSAncGxheSc7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5zdG9wKCdsaW5lYXInKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvblBhdXNlQnV0dG9uQ2xpY2tlZDogZnVuY3Rpb24gb25QYXVzZUJ1dHRvbkNsaWNrZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlTGFiZWwuc3RyaW5nID09PSAncGF1c2UnKSB7XG4gICAgICAgICAgICB0aGlzLnBhdXNlTGFiZWwuc3RyaW5nID0gJ3Jlc3VtZSc7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5wYXVzZSgnbGluZWFyJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhdXNlTGFiZWwuc3RyaW5nID0gJ3BhdXNlJztcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnJlc3VtZSgnbGluZWFyJyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25QbGF5OiBmdW5jdGlvbiBvblBsYXkoKSB7XG4gICAgICAgIGNjLmxvZygnb25QbGF5Jyk7XG4gICAgICAgIHRoaXMuc3RhdGVMYWJlbC5zdHJpbmcgPSAnb25QbGF5JztcbiAgICB9LFxuXG4gICAgb25TdG9wOiBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgICAgIGNjLmxvZygnb25TdG9wJyk7XG4gICAgICAgIHRoaXMuc3RhdGVMYWJlbC5zdHJpbmcgPSAnb25TdG9wJztcbiAgICAgICAgdGhpcy5wbGF5TGFiZWwuc3RyaW5nID0gJ3BsYXknO1xuICAgIH0sXG5cbiAgICBvbkxhc3RGcmFtZTogZnVuY3Rpb24gb25MYXN0RnJhbWUoKSB7XG4gICAgICAgIGNjLmxvZygnb25MYXN0RnJhbWUnKTtcbiAgICAgICAgdGhpcy5zdGF0ZUxhYmVsLnN0cmluZyA9ICdvbkxhc3RGcmFtZSc7XG4gICAgfSxcblxuICAgIG9uRmluaXNoZWQ6IGZ1bmN0aW9uIG9uRmluaXNoZWQoKSB7XG4gICAgICAgIGNjLmxvZygnb25GaW5pc2hlZCcpO1xuICAgICAgICB0aGlzLnN0YXRlTGFiZWwuc3RyaW5nID0gJ29uRmluaXNoZWQnO1xuICAgIH0sXG5cbiAgICBvblBhdXNlOiBmdW5jdGlvbiBvblBhdXNlKCkge1xuICAgICAgICBjYy5sb2coJ29uUGF1c2UnKTtcbiAgICAgICAgdGhpcy5zdGF0ZUxhYmVsLnN0cmluZyA9ICdvblBhdXNlJztcbiAgICB9LFxuXG4gICAgb25SZXN1bWU6IGZ1bmN0aW9uIG9uUmVzdW1lKCkge1xuICAgICAgICBjYy5sb2coJ29uUmVzdW1lJyk7XG4gICAgICAgIHRoaXMuc3RhdGVMYWJlbC5zdHJpbmcgPSAnb25SZXN1bWUnO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMWRjMDlTUjRUZExVNzRSakdCQXJsbTAnLCAnQW5pbWF0aW9uRXZlbnQnKTtcbi8vIGNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9BbmltYXRpb25FdmVudC9BbmltYXRpb25FdmVudC5qc1xuXG52YXIgaTE4biA9IHJlcXVpcmUoJ2kxOG4nKTtcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBjYy5maW5kKCdDYW52YXMvTGFiZWwnKTtcbiAgICAgICAgdGhpcy5fbGFiZWwgPSBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRoaXMuX2FuaW1DdHJsID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgIH0sXG5cbiAgICBvbk5leHRBbmltYXRpb246IGZ1bmN0aW9uIG9uTmV4dEFuaW1hdGlvbihzdGVwKSB7XG4gICAgICAgIHRoaXMuX2FuaW1DdHJsLnBsYXkoXCJzdGVwX1wiICsgc3RlcCk7XG4gICAgICAgIHRoaXMuX2xhYmVsLnN0cmluZyA9IGkxOG4udChcImNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9BbmltYXRpb25FdmVudC5qcy4xXCIpICsgc3RlcCArIFwi5Liq5Yqo55S7XCI7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdlMzFmMHlMM0hCQlRiVjJPV01UVk1DeCcsICdBbnlTREtJdGVtJyk7XG4vLyBjYXNlcy9hbnlzZGsvQW55U0RLSXRlbS5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgYmc6IGNjLlNwcml0ZSxcbiAgICAgICAgYnRuOiBjYy5CdXR0b25cbiAgICB9LFxuXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChtZW51KSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5tZW51ID0gbWVudTtcbiAgICB9LFxuXG4gICAgaW52b2tlOiBmdW5jdGlvbiBpbnZva2UoKSB7XG4gICAgICAgIHRoaXMubWVudS5pbnZva2UodGhpcy5pbmRleCk7XG4gICAgfSxcblxuICAgIHVwZGF0ZUl0ZW06IGZ1bmN0aW9uIHVwZGF0ZUl0ZW0oaWR4LCB5LCBuYW1lKSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpZHg7XG4gICAgICAgIHRoaXMubm9kZS55ID0geTtcbiAgICAgICAgdGhpcy5ub2RlLnggPSAxMDA7XG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gbmFtZTtcbiAgICAgICAgdGhpcy5iZy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5idG4uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzRlNmIycFk3UkJJM0tQeUZBMWlpbjNwJywgJ0FueVNES0xpc3QnKTtcbi8vIGNhc2VzL2FueXNkay9BbnlTREtMaXN0LmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpdGVtUHJlZmFiOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9LFxuICAgICAgICBzY3JvbGxWaWV3OiBjYy5TY3JvbGxWaWV3LFxuICAgICAgICBidWZmZXJab25lOiAwLCAvLyB3aGVuIGl0ZW0gaXMgYXdheSBmcm9tIGJ1ZmZlclpvbmUsIHdlIHJlbG9jYXRlIGl0XG4gICAgICAgIGludGVyZmFjZUxpc3Q6IFtjYy5TdHJpbmddLFxuICAgICAgICBzY3JpcHROYW1lOiBcIlwiXG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmluaXRJdGVtQ291bnQgPSB0aGlzLmludGVyZmFjZUxpc3QubGVuZ3RoO1xuICAgICAgICB0aGlzLml0ZW1MaXN0ID0gW107XG4gICAgICAgIHRoaXMudXBkYXRlVGltZXIgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZUludGVydmFsID0gMC4yO1xuICAgICAgICB0aGlzLmxhc3RDb250ZW50UG9zWSA9IDA7IC8vIHVzZSB0aGlzIHZhcmlhYmxlIHRvIGRldGVjdCBpZiB3ZSBhcmUgc2Nyb2xsaW5nIHVwIG9yIGRvd25cbiAgICAgICAgdGhpcy5pbml0TGlzdCgpO1xuICAgICAgICB0aGlzLnN5c3RlbSA9IHRoaXMuc2Nyb2xsVmlldy5nZXRDb21wb25lbnQodGhpcy5zY3JpcHROYW1lKTtcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgaW5pdExpc3Q6IGZ1bmN0aW9uIGluaXRMaXN0KCkge1xuICAgICAgICB2YXIgeSA9IDA7XG4gICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSAodGhpcy5pbnRlcmZhY2VMaXN0Lmxlbmd0aCArIDEpICogNTA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pbml0SXRlbUNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtUHJlZmFiKS5nZXRDb21wb25lbnQoJ0FueVNES0l0ZW0nKTtcbiAgICAgICAgICAgIHZhciBpdGVtTmFtZSA9IHRoaXMuaW50ZXJmYWNlTGlzdFtpXTtcbiAgICAgICAgICAgIGl0ZW0uaW5pdCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChpdGVtLm5vZGUpO1xuICAgICAgICAgICAgeSAtPSA1MDtcbiAgICAgICAgICAgIGl0ZW0udXBkYXRlSXRlbShpLCB5LCBpdGVtTmFtZSk7XG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgaW52b2tlOiBmdW5jdGlvbiBpbnZva2UoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID49IHRoaXMuaW50ZXJmYWNlTGlzdC5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgdGhpcy5zeXN0ZW1bdGhpcy5pbnRlcmZhY2VMaXN0W2luZGV4XV0oKTtcbiAgICB9LFxuXG4gICAgZ2V0UG9zaXRpb25JblZpZXc6IGZ1bmN0aW9uIGdldFBvc2l0aW9uSW5WaWV3KGl0ZW0pIHtcbiAgICAgICAgLy8gZ2V0IGl0ZW0gcG9zaXRpb24gaW4gc2Nyb2xsdmlldydzIG5vZGUgc3BhY2VcbiAgICAgICAgdmFyIHdvcmxkUG9zID0gaXRlbS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGl0ZW0ucG9zaXRpb24pO1xuICAgICAgICB2YXIgdmlld1BvcyA9IHRoaXMuc2Nyb2xsVmlldy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcbiAgICAgICAgcmV0dXJuIHZpZXdQb3M7XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMudXBkYXRlVGltZXIgKz0gZHQ7XG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZVRpbWVyIDwgdGhpcy51cGRhdGVJbnRlcnZhbCkge1xuICAgICAgICAgICAgcmV0dXJuOyAvLyB3ZSBkb24ndCBuZWVkIHRvIGRvIHRoZSBtYXRoIGV2ZXJ5IGZyYW1lXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVUaW1lciA9IDA7XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuaXRlbUxpc3Q7XG4gICAgICAgIHZhciBidWZmZXIgPSB0aGlzLmJ1ZmZlclpvbmU7XG4gICAgICAgIHZhciBpc0Rvd24gPSB0aGlzLm5vZGUueSA8IHRoaXMubGFzdENvbnRlbnRQb3NZOyAvLyBzY3JvbGxpbmcgZGlyZWN0aW9uXG4gICAgICAgIHZhciBvZmZzZXQgPSA1MCAqICh0aGlzLmluaXRJdGVtQ291bnQgLSAxKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmluaXRJdGVtQ291bnQ7ICsraSkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgIHZhciBpdGVtTm9kZSA9IGl0ZW0ubm9kZTtcbiAgICAgICAgICAgIHZhciB2aWV3UG9zID0gdGhpcy5nZXRQb3NpdGlvbkluVmlldyhpdGVtTm9kZSk7XG4gICAgICAgICAgICBpZiAoaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgYXdheSBmcm9tIGJ1ZmZlciB6b25lIGFuZCBub3QgcmVhY2hpbmcgdG9wIG9mIGNvbnRlbnRcbiAgICAgICAgICAgICAgICBpZiAodmlld1Bvcy55IDwgLWJ1ZmZlciAmJiBpdGVtTm9kZS55ICsgb2Zmc2V0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3SWR4ID0gaXRlbS5pbmRleCAtICh0aGlzLmluaXRJdGVtQ291bnQgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0luZm8gPSB0aGlzLmludGVyZmFjZUxpc3RbbmV3SWR4XTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS51cGRhdGVJdGVtKG5ld0lkeCwgaXRlbU5vZGUueSArIG9mZnNldCwgbmV3SW5mbyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBhd2F5IGZyb20gYnVmZmVyIHpvbmUgYW5kIG5vdCByZWFjaGluZyBib3R0b20gb2YgY29udGVudFxuICAgICAgICAgICAgICAgIGlmICh2aWV3UG9zLnkgPiBidWZmZXIgJiYgaXRlbU5vZGUueSAtIG9mZnNldCA+IC10aGlzLm5vZGUuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdJZHggPSBpdGVtLmluZGV4ICsgKHRoaXMuaW5pdEl0ZW1Db3VudCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3SW5mbyA9IHRoaXMuaW50ZXJmYWNlTGlzdFtuZXdJZHhdO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnVwZGF0ZUl0ZW0obmV3SWR4LCBpdGVtTm9kZS55IC0gb2Zmc2V0LCBuZXdJbmZvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXBkYXRlIGxhc3RDb250ZW50UG9zWVxuICAgICAgICB0aGlzLmxhc3RDb250ZW50UG9zWSA9IHRoaXMubm9kZS55O1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNjVhYTZjektIdEtHWm9nK3lqSzFiYzYnLCAnQXNzZXRMb2FkaW5nJyk7XG4vLyBjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcvQXNzZXRMb2FkaW5nLmpzXG5cbnZhciBpMThuID0gcmVxdWlyZSgnaTE4bicpO1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc2hvd1dpbmRvdzogY2MuTm9kZSxcbiAgICAgICAgbG9hZEFuaW1UZXN0UHJlZmFiOiBjYy5QcmVmYWIsXG4gICAgICAgIGxvYWRUaXBzOiBjYy5MYWJlbCxcbiAgICAgICAgbG9hZExpc3Q6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBbXSxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gY3VyIGxvYWQgVGFyZ2V0XG4gICAgICAgIHRoaXMuX2N1clR5cGUgPSBcIlwiO1xuICAgICAgICB0aGlzLl9sYXN0VHlwZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuX2N1clJlcyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2J0bkxhYmVsID0gbnVsbDtcbiAgICAgICAgdGhpcy5fYXVkaW9Tb3VyY2UgPSBudWxsO1xuICAgICAgICB0aGlzLl9pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgLy8gYWRkIGxvYWQgcmVzIHVybFxuICAgICAgICB0aGlzLl91cmxzID0ge1xuICAgICAgICAgICAgLy8gUmF3IEFzc2V0XG4gICAgICAgICAgICBBdWRpbzogXCJ0ZXN0IGFzc2V0cy9hdWRpb1wiLFxuICAgICAgICAgICAgVHh0OiBcInRlc3QgYXNzZXRzL3RleHRcIixcbiAgICAgICAgICAgIFRleHR1cmU6IFwidGVzdCBhc3NldHMvUHVycGxlTW9uc3RlclwiLFxuICAgICAgICAgICAgRm9udDogXCJ0ZXN0IGFzc2V0cy9mb250XCIsXG4gICAgICAgICAgICAvLyBSYXcgQXNzZXQsIHVzZSByYXcgdXJsXG4gICAgICAgICAgICBQbGlzdDogY2MudXJsLnJhdyhcInJlc291cmNlcy90ZXN0IGFzc2V0cy9hdG9tLnBsaXN0XCIpLFxuICAgICAgICAgICAgLy8gQXNzZXRcbiAgICAgICAgICAgIFNwcml0ZUZyYW1lOiBcInRlc3QgYXNzZXRzL2ltYWdlXCIsXG4gICAgICAgICAgICBQcmVmYWI6IFwidGVzdCBhc3NldHMvcHJlZmFiXCIsXG4gICAgICAgICAgICBBbmltYXRpb246IFwidGVzdCBhc3NldHMvc3ByaXRlLWFuaW1cIixcbiAgICAgICAgICAgIFNjZW5lOiBcInRlc3QgYXNzZXRzL3NjZW5lXCIsXG4gICAgICAgICAgICBTcGluZTogXCJzcGluZWJveS9zcGluZWJveVwiXG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlZ2lzdGVyZWQgZXZlbnRcbiAgICAgICAgdGhpcy5fb25SZWdpc3RlcmVkRXZlbnQoKTtcbiAgICB9LFxuXG4gICAgX29uUmVnaXN0ZXJlZEV2ZW50OiBmdW5jdGlvbiBfb25SZWdpc3RlcmVkRXZlbnQoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sb2FkTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkTGlzdFtpXS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX29uQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX29uQ2xpY2s6IGZ1bmN0aW9uIF9vbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX29uQ2xlYXIoKTtcblxuICAgICAgICB0aGlzLl9jdXJUeXBlID0gZXZlbnQudGFyZ2V0Lm5hbWUuc3BsaXQoJ18nKVsxXTtcbiAgICAgICAgaWYgKHRoaXMuX2xhc3RUeXBlICE9PSBcIlwiICYmIHRoaXMuX2N1clR5cGUgPT09IHRoaXMuX2xhc3RUeXBlKSB7XG4gICAgICAgICAgICB0aGlzLl9vblNob3dSZXNDbGljayhldmVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYnRuTGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuX2J0bkxhYmVsLnRleHRLZXkgPSBpMThuLnQoXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuanMuMVwiKSArIHRoaXMuX2xhc3RUeXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbGFzdFR5cGUgPSB0aGlzLl9jdXJUeXBlO1xuXG4gICAgICAgIHRoaXMuX2J0bkxhYmVsID0gZXZlbnQudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiTGFiZWxcIikuZ2V0Q29tcG9uZW50KFwiY2MuTGFiZWxcIik7XG5cbiAgICAgICAgdGhpcy5sb2FkVGlwcy50ZXh0S2V5ID0gdGhpcy5fY3VyVHlwZSArIFwiIExvYWRpbmcuLi4uXCI7XG4gICAgICAgIHRoaXMuX2lzTG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fbG9hZCgpO1xuICAgIH0sXG5cbiAgICBfbG9hZDogZnVuY3Rpb24gX2xvYWQoKSB7XG4gICAgICAgIHZhciB1cmwgPSB0aGlzLl91cmxzW3RoaXMuX2N1clR5cGVdO1xuICAgICAgICB2YXIgbG9hZENhbGxCYWNrID0gdGhpcy5fbG9hZENhbGxCYWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHN3aXRjaCAodGhpcy5fY3VyVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnU3ByaXRlRnJhbWUnOlxuICAgICAgICAgICAgICAgIC8vIHNwZWNpZnkgdGhlIHR5cGUgdG8gbG9hZCBzdWIgYXNzZXQgZnJvbSB0ZXh0dXJlJ3MgdXJsXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModXJsLCBjYy5TcHJpdGVGcmFtZSwgbG9hZENhbGxCYWNrKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1NwaW5lJzpcbiAgICAgICAgICAgICAgICAvLyBzcGVjaWZ5IHRoZSB0eXBlIHRvIGF2b2lkIHRoZSBkdXBsaWNhdGVkIG5hbWUgZnJvbSBzcGluZSBhdGxhc1xuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHVybCwgc3AuU2tlbGV0b25EYXRhLCBsb2FkQ2FsbEJhY2spO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRm9udCc6XG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModXJsLCBjYy5Gb250LCBsb2FkQ2FsbEJhY2spO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQW5pbWF0aW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ1ByZWZhYic6XG4gICAgICAgICAgICBjYXNlICdTY2VuZSc6XG4gICAgICAgICAgICBjYXNlICdUZXh0dXJlJzpcbiAgICAgICAgICAgIGNhc2UgJ1R4dCc6XG4gICAgICAgICAgICBjYXNlICdBdWRpbyc6XG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModXJsLCBsb2FkQ2FsbEJhY2spO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZCh1cmwsIGxvYWRDYWxsQmFjayk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2xvYWRDYWxsQmFjazogZnVuY3Rpb24gX2xvYWRDYWxsQmFjayhlcnIsIHJlcykge1xuICAgICAgICB0aGlzLl9pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgY2MubG9nKCdFcnJvciB1cmwgWycgKyBlcnIgKyAnXScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2N1clJlcyA9IHJlcztcbiAgICAgICAgaWYgKHRoaXMuX2N1clR5cGUgPT09IFwiQXVkaW9cIikge1xuICAgICAgICAgICAgdGhpcy5fYnRuTGFiZWwudGV4dEtleSA9IGkxOG4udChcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0Fzc2V0TG9hZGluZy5qcy4yXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYnRuTGFiZWwudGV4dEtleSA9IGkxOG4udChcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0Fzc2V0TG9hZGluZy5qcy4zXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2J0bkxhYmVsLnRleHRLZXkgKz0gdGhpcy5fY3VyVHlwZTtcbiAgICAgICAgdGhpcy5sb2FkVGlwcy50ZXh0S2V5ID0gdGhpcy5fY3VyVHlwZSArIFwiIExvYWRlZCBTdWNjZXNzZnVsbHkhXCI7XG4gICAgfSxcblxuICAgIF9vbkNsZWFyOiBmdW5jdGlvbiBfb25DbGVhcigpIHtcbiAgICAgICAgdGhpcy5zaG93V2luZG93LnJlbW92ZUFsbENoaWxkcmVuKHRydWUpO1xuICAgICAgICBpZiAodGhpcy5fYXVkaW9Tb3VyY2UgJiYgdGhpcy5fYXVkaW9Tb3VyY2UgaW5zdGFuY2VvZiBjYy5BdWRpb1NvdXJjZSkge1xuICAgICAgICAgICAgdGhpcy5fYXVkaW9Tb3VyY2Uuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9vblNob3dSZXNDbGljazogZnVuY3Rpb24gX29uU2hvd1Jlc0NsaWNrKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLl9jdXJUeXBlID09PSBcIlNjZW5lXCIpIHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnJ1blNjZW5lKHRoaXMuX2N1clJlcy5zY2VuZSk7XG4gICAgICAgICAgICBjYy5sb2FkZXIucmVsZWFzZUFzc2V0KHRoaXMuX2N1clJlcyk7XG4gICAgICAgICAgICB0aGlzLl9jdXJSZXMgPSBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY3JlYXRlTm9kZSh0aGlzLl9jdXJUeXBlLCB0aGlzLl9jdXJSZXMpO1xuICAgIH0sXG5cbiAgICBfY3JlYXRlTm9kZTogZnVuY3Rpb24gX2NyZWF0ZU5vZGUodHlwZSwgcmVzKSB7XG4gICAgICAgIHRoaXMubG9hZFRpcHMudGV4dEtleSA9IFwiXCI7XG4gICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoXCJOZXcgXCIgKyB0eXBlKTtcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIHN3aXRjaCAodGhpcy5fY3VyVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIlNwcml0ZUZyYW1lXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuc3ByaXRlRnJhbWUgPSByZXM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiVGV4dHVyZVwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHJlcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQXVkaW9cIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBub2RlLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmNsaXAgPSByZXM7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnBsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hdWRpb1NvdXJjZSA9IGNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUaXBzLnRleHRLZXkgPSBpMThuLnQoXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuanMuNFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJUeHRcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBub2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmxpbmVIZWlnaHQgPSA0MDtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuc3RyaW5nID0gcmVzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkZvbnRcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBub2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmZvbnQgPSByZXM7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmxpbmVIZWlnaHQgPSA0MDtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuc3RyaW5nID0gXCJUaGlzIGlzIEJpdG1hcEZvbnQhXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiUGxpc3RcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBub2RlLmFkZENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmZpbGUgPSB0aGlzLl91cmxzLlBsaXN0O1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5yZXNldFN5c3RlbSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlByZWZhYlwiOlxuICAgICAgICAgICAgICAgIHZhciBwcmVmYWIgPSBjYy5pbnN0YW50aWF0ZShyZXMpO1xuICAgICAgICAgICAgICAgIHByZWZhYi5wYXJlbnQgPSBub2RlO1xuICAgICAgICAgICAgICAgIHByZWZhYi5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJBbmltYXRpb25cIjpcbiAgICAgICAgICAgICAgICB2YXIgbG9hZEFuaW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxvYWRBbmltVGVzdFByZWZhYik7XG4gICAgICAgICAgICAgICAgbG9hZEFuaW0ucGFyZW50ID0gbm9kZTtcbiAgICAgICAgICAgICAgICBsb2FkQW5pbS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgICAgICAgICB2YXIgQWFuaW1DdHJsID0gbG9hZEFuaW0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgICAgICAgICAgQWFuaW1DdHJsLmFkZENsaXAocmVzKTtcbiAgICAgICAgICAgICAgICBBYW5pbUN0cmwucGxheShyZXMubmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiU3BpbmVcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBub2RlLmFkZENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnNrZWxldG9uRGF0YSA9IHJlcztcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuYW5pbWF0aW9uID0gXCJ3YWxrXCI7XG4gICAgICAgICAgICAgICAgbm9kZS55ID0gLTI0ODtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3dXaW5kb3cuYWRkQ2hpbGQobm9kZSk7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc4Yzk1YlQyTTNoQlBJZFJEVmZ0aVVRRycsICdBdWRpb0NvbnRyb2wnKTtcbi8vIGNhc2VzLzA0X2F1ZGlvL0F1ZGlvQ29udHJvbC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbXVzaWNQbGF5ZXI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9Tb3VyY2VcbiAgICAgICAgfSxcbiAgICAgICAgZGluZ0NsaXA6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdXJsOiBjYy5BdWRpb0NsaXBcbiAgICAgICAgfSxcbiAgICAgICAgY2hlZXJpbmdDbGlwOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHVybDogY2MuQXVkaW9DbGlwXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgLy8gcGxheSBhdWRpb1NvdXJjZVxuICAgICAgICBzZWxmLm11c2ljUGxheWVyLnBsYXkoKTtcblxuICAgICAgICAvLyBwbGF5IGRpbmcgaW4gMSBzZWMsIHBsYXkgY2hlZXJpbmcgaW4gMiBzZWNcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHNlbGYuZGluZ0NsaXAsIGZhbHNlKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3Qoc2VsZi5jaGVlcmluZ0NsaXAsIGZhbHNlKTtcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHt9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzk5MGUyYy8xVmxFOXBtd2QrRnRzZWF1JywgJ0JhcicpO1xuLy8gY2FzZXMvMDVfc2NyaXB0aW5nLzA1X2Nyb3NzX3JlZmVyZW5jZS9CYXIuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczogZnVuY3Rpb24gcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlZlRvRm9vOiByZXF1aXJlKCdGb28nKVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIHRpcCA9IHRoaXMubm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aXAuc3RyaW5nID0gdGhpcy5uYW1lICsgJyBoYXMgcmVmZXJlbmNlIHRvICcgKyB0aGlzLnJlZlRvRm9vLm5hbWU7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcyMGQ3ZHpmVmhaTmg0Z05aendhUWdFbCcsICdCdWxsZXQnKTtcbi8vIGNhc2VzL2NvbGxpZGVyL1Nob290ZXIvQnVsbGV0LmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzcGVlZDogMTAwXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG5cbiAgICBvbkNvbGxpc2lvbkVudGVyOiBmdW5jdGlvbiBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZCAqIGR0O1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZTZkYzdkV2N4eEp1b2ZYQjdlcmdHbkMnLCAnQnV0dG9uQ29udHJvbEN0cmwnKTtcbi8vIGNhc2VzLzAyX3VpLzAzX2J1dHRvbi9CdXR0b25JblNjcm9sbC9CdXR0b25Db250cm9sQ3RybC5qc1xuXG52YXIgaTE4biA9IHJlcXVpcmUoJ2kxOG4nKTtcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBidXR0b25fMTogY2MuQnV0dG9uLFxuICAgICAgICBidXR0b25fMjogY2MuQnV0dG9uLFxuICAgICAgICBkaXNwbGF5OiBjYy5MYWJlbFxuICAgIH0sXG5cbiAgICBvbkNsaWNrZWRCdXR0b25fMTogZnVuY3Rpb24gb25DbGlja2VkQnV0dG9uXzEoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdidXR0b25fMSBjbGlja2VkIScpO1xuICAgICAgICB0aGlzLmRpc3BsYXkudGV4dEtleSA9IGkxOG4udChcImNhc2VzLzAyX3VpLzAzX2J1dHRvbi9CdXR0b25JblNjcm9sbC5qcy4xXCIpO1xuICAgIH0sXG5cbiAgICBvbkNsaWNrZWRCdXR0b25fMjogZnVuY3Rpb24gb25DbGlja2VkQnV0dG9uXzIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdidXR0b25fMiBjbGlja2VkIScpO1xuICAgICAgICB0aGlzLmRpc3BsYXkudGV4dEtleSA9IGkxOG4udChcImNhc2VzLzAyX3VpLzAzX2J1dHRvbi9CdXR0b25JblNjcm9sbC5qcy4yXCIpO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMThlNjBUMk5acEV3WkF1blMrMnJGTUsnLCAnQnV0dG9uSW50ZXJhY3RhYmxlJyk7XG4vLyBjYXNlcy8wMl91aS8wM19idXR0b24vQnV0dG9uSW50ZXJhY3RhYmxlL0J1dHRvbkludGVyYWN0YWJsZS5qc1xuXG52YXIgaTE4biA9IHJlcXVpcmUoJ2kxOG4nKTtcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBidXR0b25MZWZ0OiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uUmlnaHQ6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvblxuICAgICAgICB9LFxuICAgICAgICBsYWJlbExlZnQ6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsUmlnaHQ6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25CdG5MZWZ0Q2xpY2tlZDogZnVuY3Rpb24gb25CdG5MZWZ0Q2xpY2tlZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xlZnQgYnV0dG9uIGNsaWNrZWQhJyk7XG4gICAgICAgIHRoaXMuYnV0dG9uTGVmdC5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idXR0b25SaWdodC5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUluZm8oKTtcbiAgICB9LFxuXG4gICAgb25CdG5SaWdodENsaWNrZWQ6IGZ1bmN0aW9uIG9uQnRuUmlnaHRDbGlja2VkKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnUmlnaHQgYnV0dG9uIGNsaWNrZWQhJyk7XG4gICAgICAgIHRoaXMuYnV0dG9uUmlnaHQuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnV0dG9uTGVmdC5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUluZm8oKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlSW5mbzogZnVuY3Rpb24gdXBkYXRlSW5mbygpIHtcbiAgICAgICAgdGhpcy5sYWJlbExlZnQudGV4dEtleSA9IGkxOG4udChcImNhc2VzLzAyX3VpLzAzX2J1dHRvbi9CdXR0b25JbnRlcmFjdGFibGUuanMuMVwiKSArIHRoaXMuYnV0dG9uTGVmdC5pbnRlcmFjdGFibGU7XG4gICAgICAgIHRoaXMubGFiZWxSaWdodC50ZXh0S2V5ID0gaTE4bi50KFwiY2FzZXMvMDJfdWkvMDNfYnV0dG9uL0J1dHRvbkludGVyYWN0YWJsZS5qcy4yXCIpICsgdGhpcy5idXR0b25SaWdodC5pbnRlcmFjdGFibGU7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc5ZDYwZlh4dFhGTmVJNzlQTTZFWFl1WicsICdDb2xsaWRlckxpc3RlbmVyJyk7XG4vLyBjYXNlcy9jb2xsaWRlci9DYXRlZ29yeS9Db2xsaWRlckxpc3RlbmVyLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xuICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy50b3VjaGluZ051bWJlciA9IDA7XG4gICAgfSxcblxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xuICAgICAgICB0aGlzLnRvdWNoaW5nTnVtYmVyKys7XG4gICAgfSxcblxuICAgIG9uQ29sbGlzaW9uU3RheTogZnVuY3Rpb24gb25Db2xsaXNpb25TdGF5KG90aGVyKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbiBjb2xsaXNpb24gc3RheScpO1xuICAgIH0sXG5cbiAgICBvbkNvbGxpc2lvbkV4aXQ6IGZ1bmN0aW9uIG9uQ29sbGlzaW9uRXhpdCgpIHtcbiAgICAgICAgdGhpcy50b3VjaGluZ051bWJlci0tO1xuICAgICAgICBpZiAodGhpcy50b3VjaGluZ051bWJlciA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdjYjU4NWsrY3hGS2pvaGxvVE4xK0Z1VScsICdDb21lQmFja1RvQXNzZXRMb2FkJyk7XG4vLyBjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcvQ29tZUJhY2tUb0Fzc2V0TG9hZC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG5cbiAgICBvbkNvbWVCbGFjazogZnVuY3Rpb24gb25Db21lQmxhY2soKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkFzc2V0TG9hZGluZy5maXJlXCIpO1xuICAgIH1cblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzE2MzhjeXZIV2xKNXAzTTA1VWx6aDlRJywgJ0NyYXNoJyk7XG4vLyBjYXNlcy9hbnlzZGsvMDlfY3Jhc2gvQ3Jhc2guanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc01vYmlsZSkge1xuICAgICAgICAgICAgdGhpcy5jcmFzaFBsdWdpbiA9IGFueXNkay5hZ2VudE1hbmFnZXIuZ2V0Q3Jhc2hQbHVnaW4oKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzZXRVc2VySWRlbnRpZmllcjogZnVuY3Rpb24gc2V0VXNlcklkZW50aWZpZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5jcmFzaFBsdWdpbikgcmV0dXJuO1xuICAgICAgICB0aGlzLmNyYXNoUGx1Z2luLnNldFVzZXJJZGVudGlmaWVyKCdBbnlTREsnKTtcbiAgICB9LFxuXG4gICAgcmVwb3J0RXhjZXB0aW9uOiBmdW5jdGlvbiByZXBvcnRFeGNlcHRpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5jcmFzaFBsdWdpbikgcmV0dXJuO1xuICAgICAgICB0aGlzLmNyYXNoUGx1Z2luLnJlcG9ydEV4Y2VwdGlvbignZXJyb3InLCAnQW55U0RLJyk7XG4gICAgfSxcblxuICAgIGxlYXZlQnJlYWRjcnVtYjogZnVuY3Rpb24gbGVhdmVCcmVhZGNydW1iKCkge1xuICAgICAgICBpZiAoIXRoaXMuY3Jhc2hQbHVnaW4pIHJldHVybjtcbiAgICAgICAgdGhpcy5jcmFzaFBsdWdpbi5sZWF2ZUJyZWFkY3J1bWIoJ0FueVNESycpO1xuICAgIH1cblxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcwYzQ1MFNvcG1OS21iY1F1NTByb3IzYScsICdDcmVhdGVDbGlwQ3RybCcpO1xuLy8gY2FzZXMvMDNfZ2FtZXBsYXkvMDNfYW5pbWF0aW9uL0NyZWF0ZUNsaXAvQ3JlYXRlQ2xpcEN0cmwuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBhbmltYXRpb24gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwidGVzdCBhc3NldHMvYXRsYXNcIiwgY2MuU3ByaXRlQXRsYXMsIGZ1bmN0aW9uIChlcnIsIGF0bGFzKSB7XG4gICAgICAgICAgICB2YXIgc3ByaXRlRnJhbWVzID0gYXRsYXMuZ2V0U3ByaXRlRnJhbWVzKCk7XG5cbiAgICAgICAgICAgIHZhciBjbGlwID0gY2MuQW5pbWF0aW9uQ2xpcC5jcmVhdGVXaXRoU3ByaXRlRnJhbWVzKHNwcml0ZUZyYW1lcywgMTApO1xuICAgICAgICAgICAgY2xpcC5uYW1lID0gJ3J1bic7XG4gICAgICAgICAgICBjbGlwLndyYXBNb2RlID0gY2MuV3JhcE1vZGUuTG9vcDtcblxuICAgICAgICAgICAgYW5pbWF0aW9uLmFkZENsaXAoY2xpcCk7XG4gICAgICAgICAgICBhbmltYXRpb24ucGxheSgncnVuJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzVjYzIzYW9ZY3hJS2F6UkZ3S1dHRUk3JywgJ0N1c3RvbUV2ZW50Jyk7XG4vLyBjYXNlcy8wNV9zY3JpcHRpbmcvMDNfZXZlbnRzL0N1c3RvbUV2ZW50LmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgdG91Y2hFdmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KCdUb3VjaEV2ZW50Jyk7XG5cbiAgICAgICAgLy8gRW1pdCBDVVNUT01fRVZFTlQgdG8gaXRzIGxpc3RlbmVycyB3aGlsZSB0b3VjaCBlbmRcbiAgICAgICAgdG91Y2hFdmVudC5fY2FsbGJhY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoJ0NVU1RPTV9FVkVOVCcpO1xuICAgICAgICB9KS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHZhciBhZGRCdXR0b24gPSBjYy5maW5kKCdDYW52YXMvYWRkJyk7XG4gICAgICAgIHZhciBjYW5jZWxCdXR0b24gPSBjYy5maW5kKCdDYW52YXMvY2FuY2VsJyk7XG5cbiAgICAgICAgZnVuY3Rpb24gb25DdXN0b21FdmVudChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjUsIDIsIDEpLCBjYy5zY2FsZVRvKDAuMjUsIDEsIDEpKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGUub24oJ0NVU1RPTV9FVkVOVCcsIG9uQ3VzdG9tRXZlbnQsIGFkZEJ1dHRvbik7XG4gICAgICAgIHRoaXMubm9kZS5vbignQ1VTVE9NX0VWRU5UJywgb25DdXN0b21FdmVudCwgY2FuY2VsQnV0dG9uKTtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2RlYzIxTXV4WTVLNEw4VDFiQlBHTTNyJywgJ0Rlc2FjdGl2ZXInKTtcbi8vIGNhc2VzLzA1X3NjcmlwdGluZy8wM19ldmVudHMvRGVzYWN0aXZlci5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIGRlc2FjdGl2YXRlOiBmdW5jdGlvbiBkZXNhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYzA3MzAybS9vRkplSXEyaWdQQ0piV0UnLCAnRGVzdHJveVNlbGYnKTtcbi8vIGNhc2VzLzA1X3NjcmlwdGluZy8wNl9saWZlX2N5Y2xlL0Rlc3Ryb3lTZWxmLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQb3M6IFwiICsgdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueCArIFwiLCBcIiArIHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnkpO1xuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVCeSgyLCAyMDAsIDApLCBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBvczogXCIgKyB0aGlzLm5vZGUueCArIFwiLCBcIiArIHRoaXMubm9kZS55KTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH0sIHRoaXMpKSk7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcxODljMWNrb1paSFVMblI1Mi9wbkNrdicsICdEZXZpY2VNb3Rpb25DdHJsJyk7XG4vLyBjYXNlcy8wM19nYW1lcGxheS8wMV9wbGF5ZXJfY29udHJvbC9EZXZpY2VNb3Rpb24vRGV2aWNlTW90aW9uQ3RybC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3BlZWQ6IDIwMCxcbiAgICAgICAgdGFyZ2V0OiBjYy5Ob2RlXG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLl90aW1lID0gMDtcbiAgICAgICAgdGhpcy5fYWNjID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIHZhciBzY3JlZW5TaXplID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xuICAgICAgICB0aGlzLl9yYW5nZVggPSBzY3JlZW5TaXplLndpZHRoIC8gMiAtIHRoaXMudGFyZ2V0LndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy5fcmFuZ2VZID0gc2NyZWVuU2l6ZS5oZWlnaHQgLyAyIC0gdGhpcy50YXJnZXQuaGVpZ2h0IC8gMjtcbiAgICAgICAgY2MuaW5wdXRNYW5hZ2VyLnNldEFjY2VsZXJvbWV0ZXJFbmFibGVkKHRydWUpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuREVWSUNFTU9USU9OLCB0aGlzLm9uRGV2aWNlTW90aW9uRXZlbnQsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLkRFVklDRU1PVElPTiwgdGhpcy5vbkRldmljZU1vdGlvbkV2ZW50LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgb25EZXZpY2VNb3Rpb25FdmVudDogZnVuY3Rpb24gb25EZXZpY2VNb3Rpb25FdmVudChldmVudCkge1xuICAgICAgICB0aGlzLl9hY2MueCA9IGV2ZW50LmFjYy54O1xuICAgICAgICB0aGlzLl9hY2MueSA9IGV2ZW50LmFjYy55O1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLl90aW1lICs9IDU7XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgICAgdGFyZ2V0LnggKz0gdGhpcy5fYWNjLnggKiBkdCAqICh0aGlzLnNwZWVkICsgdGhpcy5fdGltZSk7XG4gICAgICAgIHRoaXMudGFyZ2V0LnggPSBjYy5jbGFtcGYodGFyZ2V0LngsIC10aGlzLl9yYW5nZVgsIHRoaXMuX3JhbmdlWCk7XG4gICAgICAgIHRhcmdldC55ICs9IHRoaXMuX2FjYy55ICogZHQgKiAodGhpcy5zcGVlZCArIHRoaXMuX3RpbWUpO1xuICAgICAgICB0aGlzLnRhcmdldC55ID0gY2MuY2xhbXBmKHRhcmdldC55LCAtdGhpcy5fcmFuZ2VZLCB0aGlzLl9yYW5nZVkpO1xuXG4gICAgICAgIGlmICh0YXJnZXQueCA8PSAtdGhpcy5fcmFuZ2VYIHx8IHRhcmdldC54ID49IHRoaXMuX3JhbmdlWCB8fCB0YXJnZXQueSA8PSAtdGhpcy5fcmFuZ2VZIHx8IHRhcmdldC55ID49IHRoaXMuX3JhbmdlWSkge1xuICAgICAgICAgICAgdGhpcy5fdGltZSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNTFhOTl4UUk0SkFYcUJqZW5LWFNJamwnLCAnRHJhZ29uQm9uZXNDdHJsJyk7XG4vLyBjYXNlcy9kcmFnb25ib25lcy9EcmFnb25Cb25lc0N0cmwuanNcblxuXG52YXIgTk9STUFMX0FOSU1BVElPTl9HUk9VUCA9IFwibm9ybWFsXCI7XG52YXIgQUlNX0FOSU1BVElPTl9HUk9VUCA9IFwiYWltXCI7XG52YXIgQVRUQUNLX0FOSU1BVElPTl9HUk9VUCA9IFwiYXR0YWNrXCI7XG52YXIgSlVNUF9TUEVFRCA9IC0yMDtcbnZhciBOT1JNQUxJWkVfTU9WRV9TUEVFRCA9IDMuNjtcbnZhciBNQVhfTU9WRV9TUEVFRF9GUk9OVCA9IE5PUk1BTElaRV9NT1ZFX1NQRUVEICogMS40O1xudmFyIE1BWF9NT1ZFX1NQRUVEX0JBQ0sgPSBOT1JNQUxJWkVfTU9WRV9TUEVFRCAqIDEuMDtcbnZhciBXRUFQT05fUl9MSVNUID0gW1wid2VhcG9uXzE1MDJiX3JcIiwgXCJ3ZWFwb25fMTAwNVwiLCBcIndlYXBvbl8xMDA1YlwiLCBcIndlYXBvbl8xMDA1Y1wiLCBcIndlYXBvbl8xMDA1ZFwiLCBcIndlYXBvbl8xMDA1ZVwiXTtcbnZhciBXRUFQT05fTF9MSVNUID0gW1wid2VhcG9uXzE1MDJiX2xcIiwgXCJ3ZWFwb25fMTAwNVwiLCBcIndlYXBvbl8xMDA1YlwiLCBcIndlYXBvbl8xMDA1Y1wiLCBcIndlYXBvbl8xMDA1ZFwiXTtcbnZhciBHUk9VTkQgPSAtMjAwO1xudmFyIEcgPSAtMC42O1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcbiAgICBlZGl0b3I6IHtcbiAgICAgICAgcmVxdWlyZUNvbXBvbmVudDogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5XG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdG91Y2hIYW5kbGVyOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcblxuICAgICAgICB1cEJ1dHRvbjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG5cbiAgICAgICAgZG93bkJ1dHRvbjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG5cbiAgICAgICAgbGVmdEJ1dHRvbjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG5cbiAgICAgICAgcmlnaHRCdXR0b246IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuXG4gICAgICAgIF9idWxsZXRzOiBbXSxcbiAgICAgICAgX2xlZnQ6IGZhbHNlLFxuICAgICAgICBfcmlnaHQ6IGZhbHNlLFxuICAgICAgICBfaXNKdW1waW5nQTogZmFsc2UsXG4gICAgICAgIF9pc0p1bXBpbmdCOiBmYWxzZSxcbiAgICAgICAgX2lzU3F1YXRpbmc6IGZhbHNlLFxuICAgICAgICBfaXNBdHRhY2tpbmdBOiBmYWxzZSxcbiAgICAgICAgX2lzQXR0YWNraW5nQjogZmFsc2UsXG4gICAgICAgIF93ZWFwb25SSW5kZXg6IDAsXG4gICAgICAgIF93ZWFwb25MSW5kZXg6IDAsXG4gICAgICAgIF9mYWNlRGlyOiAxLFxuICAgICAgICBfYWltRGlyOiAwLFxuICAgICAgICBfbW92ZURpcjogMCxcbiAgICAgICAgX2FpbVJhZGlhbjogMCxcbiAgICAgICAgX3NwZWVkWDogMCxcbiAgICAgICAgX3NwZWVkWTogMCxcbiAgICAgICAgX2FybWF0dXJlOiBudWxsLFxuICAgICAgICBfYXJtYXR1cmVEaXNwbGF5OiBudWxsLFxuICAgICAgICBfd2VhcG9uUjogbnVsbCxcbiAgICAgICAgX3dlYXBvbkw6IG51bGwsXG4gICAgICAgIF9haW1TdGF0ZTogbnVsbCxcbiAgICAgICAgX3dhbGtTdGF0ZTogbnVsbCxcbiAgICAgICAgX2F0dGFja1N0YXRlOiBudWxsLFxuICAgICAgICBfdGFyZ2V0OiBjYy5wKDAsIDApXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuX2FybWF0dXJlRGlzcGxheSA9IHRoaXMuZ2V0Q29tcG9uZW50KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSk7XG4gICAgICAgIHRoaXMuX2FybWF0dXJlID0gdGhpcy5fYXJtYXR1cmVEaXNwbGF5LmFybWF0dXJlKCk7XG5cbiAgICAgICAgdGhpcy5fYXJtYXR1cmVEaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuRkFERV9JTl9DT01QTEVURSwgdGhpcy5fYW5pbWF0aW9uRXZlbnRIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fYXJtYXR1cmVEaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuRkFERV9PVVRfQ09NUExFVEUsIHRoaXMuX2FuaW1hdGlvbkV2ZW50SGFuZGxlciwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5fYXJtYXR1cmUuZ2V0U2xvdCgnZWZmZWN0c18xJykuZGlzcGxheUNvbnRyb2xsZXIgPSBOT1JNQUxfQU5JTUFUSU9OX0dST1VQO1xuICAgICAgICB0aGlzLl9hcm1hdHVyZS5nZXRTbG90KCdlZmZlY3RzXzInKS5kaXNwbGF5Q29udHJvbGxlciA9IE5PUk1BTF9BTklNQVRJT05fR1JPVVA7XG5cbiAgICAgICAgdGhpcy5fd2VhcG9uUiA9IHRoaXMuX2FybWF0dXJlLmdldFNsb3QoJ3dlYXBvbl9yJykuY2hpbGRBcm1hdHVyZTtcbiAgICAgICAgdGhpcy5fd2VhcG9uTCA9IHRoaXMuX2FybWF0dXJlLmdldFNsb3QoJ3dlYXBvbl9sJykuY2hpbGRBcm1hdHVyZTtcbiAgICAgICAgdGhpcy5fd2VhcG9uUi5hZGRFdmVudExpc3RlbmVyKGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkZSQU1FX0VWRU5ULCB0aGlzLl9mcmFtZUV2ZW50SGFuZGxlciwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3dlYXBvbkwuYWRkRXZlbnRMaXN0ZW5lcihkcmFnb25Cb25lcy5FdmVudE9iamVjdC5GUkFNRV9FVkVOVCwgdGhpcy5fZnJhbWVFdmVudEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZUFuaW1hdGlvbigpO1xuICAgICAgICBkcmFnb25Cb25lcy5Xb3JsZENsb2NrLmNsb2NrLmFkZCh0aGlzLl9hcm1hdHVyZSk7XG5cbiAgICAgICAgaWYgKHRoaXMudG91Y2hIYW5kbGVyKSB7XG4gICAgICAgICAgICAvLyB0b3VjaCBldmVudHNcbiAgICAgICAgICAgIHRoaXMudG91Y2hIYW5kbGVyLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hdHRhY2sodHJ1ZSk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMudG91Y2hIYW5kbGVyLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYXR0YWNrKGZhbHNlKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy50b3VjaEhhbmRsZXIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRvdWNoZXMgPSBldmVudC5nZXRUb3VjaGVzKCk7XG4gICAgICAgICAgICAgICAgdmFyIHRvdWNoTG9jID0gdG91Y2hlc1swXS5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgICAgIF90aGlzLmFpbSh0b3VjaExvYy54LCB0b3VjaExvYy55KTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudXBCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMudXBCdXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmp1bXAoKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZG93bkJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5kb3duQnV0dG9uLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zcXVhdCh0cnVlKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5kb3duQnV0dG9uLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc3F1YXQoZmFsc2UpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5sZWZ0QnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLmxlZnRCdXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5fdXBkYXRlTW92ZSgtMSk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubGVmdEJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9sZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3VwZGF0ZU1vdmUoLTEpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5yaWdodEJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5yaWdodEJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5fdXBkYXRlTW92ZSgxKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yaWdodEJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9yaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIF90aGlzLl91cGRhdGVNb3ZlKDEpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBrZXlib2FyZCBldmVudHNcbiAgICAgICAgY2MuZXZlbnRNYW5hZ2VyLmFkZExpc3RlbmVyKHtcbiAgICAgICAgICAgIGV2ZW50OiBjYy5FdmVudExpc3RlbmVyLktFWUJPQVJELFxuICAgICAgICAgICAgb25LZXlQcmVzc2VkOiBmdW5jdGlvbiBvbktleVByZXNzZWQoa2V5Q29kZSwgZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fa2V5SGFuZGxlcihrZXlDb2RlLCB0cnVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbktleVJlbGVhc2VkOiBmdW5jdGlvbiBvbktleVJlbGVhc2VkKGtleUNvZGUsIGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2tleUhhbmRsZXIoa2V5Q29kZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzLm5vZGUpO1xuICAgIH0sXG5cbiAgICBfa2V5SGFuZGxlcjogZnVuY3Rpb24gX2tleUhhbmRsZXIoa2V5Q29kZSwgaXNEb3duKSB7XG4gICAgICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBjYy5LRVkuYTpcbiAgICAgICAgICAgIGNhc2UgY2MuS0VZLmxlZnQ6XG4gICAgICAgICAgICAgICAgdGhpcy5fbGVmdCA9IGlzRG93bjtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVNb3ZlKC0xKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MuS0VZLmQ6XG4gICAgICAgICAgICBjYXNlIGNjLktFWS5yaWdodDpcbiAgICAgICAgICAgICAgICB0aGlzLl9yaWdodCA9IGlzRG93bjtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVNb3ZlKDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5LRVkudzpcbiAgICAgICAgICAgIGNhc2UgY2MuS0VZLnVwOlxuICAgICAgICAgICAgICAgIGlmIChpc0Rvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5LRVkuczpcbiAgICAgICAgICAgIGNhc2UgY2MuS0VZLmRvd246XG4gICAgICAgICAgICAgICAgdGhpcy5zcXVhdChpc0Rvd24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5LRVkucTpcbiAgICAgICAgICAgICAgICBpZiAoaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoV2VhcG9uUigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MuS0VZLmU6XG4gICAgICAgICAgICAgICAgaWYgKGlzRG93bikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFdlYXBvbkwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLktFWS5zcGFjZTpcbiAgICAgICAgICAgICAgICBpZiAoaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoV2VhcG9uUigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFdlYXBvbkwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfdXBkYXRlTW92ZTogZnVuY3Rpb24gX3VwZGF0ZU1vdmUoZGlyKSB7XG4gICAgICAgIGlmICh0aGlzLl9sZWZ0ICYmIHRoaXMuX3JpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLm1vdmUoZGlyKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9sZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLm1vdmUoLTEpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3JpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLm1vdmUoMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vdmUoMCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbW92ZTogZnVuY3Rpb24gbW92ZShkaXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX21vdmVEaXIgPT09IGRpcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbW92ZURpciA9IGRpcjtcbiAgICAgICAgdGhpcy5fdXBkYXRlQW5pbWF0aW9uKCk7XG4gICAgfSxcblxuICAgIGp1bXA6IGZ1bmN0aW9uIGp1bXAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0p1bXBpbmdBKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pc0p1bXBpbmdBID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fYXJtYXR1cmUuYW5pbWF0aW9uLmZhZGVJbihcImp1bXBfMVwiLCAtMSwgLTEsIDAsIE5PUk1BTF9BTklNQVRJT05fR1JPVVApO1xuICAgICAgICB0aGlzLl93YWxrU3RhdGUgPSBudWxsO1xuICAgIH0sXG5cbiAgICBzcXVhdDogZnVuY3Rpb24gc3F1YXQoaXNTcXVhdGluZykge1xuICAgICAgICBpZiAodGhpcy5faXNTcXVhdGluZyA9PT0gaXNTcXVhdGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faXNTcXVhdGluZyA9IGlzU3F1YXRpbmc7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUFuaW1hdGlvbigpO1xuICAgIH0sXG5cbiAgICBhdHRhY2s6IGZ1bmN0aW9uIGF0dGFjayhpc0F0dGFja2luZykge1xuICAgICAgICBpZiAodGhpcy5faXNBdHRhY2tpbmdBID09IGlzQXR0YWNraW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pc0F0dGFja2luZ0EgPSBpc0F0dGFja2luZztcbiAgICB9LFxuXG4gICAgc3dpdGNoV2VhcG9uTDogZnVuY3Rpb24gc3dpdGNoV2VhcG9uTCgpIHtcbiAgICAgICAgdGhpcy5fd2VhcG9uTC5yZW1vdmVFdmVudExpc3RlbmVyKGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkZSQU1FX0VWRU5ULCB0aGlzLl9mcmFtZUV2ZW50SGFuZGxlciwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5fd2VhcG9uTEluZGV4ID0gKHRoaXMuX3dlYXBvbkxJbmRleCArIDEpICUgV0VBUE9OX0xfTElTVC5sZW5ndGg7XG4gICAgICAgIHZhciBuZXdXZWFwb25OYW1lID0gV0VBUE9OX0xfTElTVFt0aGlzLl93ZWFwb25MSW5kZXhdO1xuICAgICAgICB0aGlzLl93ZWFwb25MID0gdGhpcy5fYXJtYXR1cmVEaXNwbGF5LmJ1aWxkQXJtYXR1cmUobmV3V2VhcG9uTmFtZSk7XG4gICAgICAgIHRoaXMuX2FybWF0dXJlLmdldFNsb3QoJ3dlYXBvbl9sJykuY2hpbGRBcm1hdHVyZSA9IHRoaXMuX3dlYXBvbkw7XG5cbiAgICAgICAgdGhpcy5fd2VhcG9uTC5hZGRFdmVudExpc3RlbmVyKGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkZSQU1FX0VWRU5ULCB0aGlzLl9mcmFtZUV2ZW50SGFuZGxlciwgdGhpcyk7XG4gICAgfSxcblxuICAgIHN3aXRjaFdlYXBvblI6IGZ1bmN0aW9uIHN3aXRjaFdlYXBvblIoKSB7XG4gICAgICAgIHRoaXMuX3dlYXBvblIucmVtb3ZlRXZlbnRMaXN0ZW5lcihkcmFnb25Cb25lcy5FdmVudE9iamVjdC5GUkFNRV9FVkVOVCwgdGhpcy5fZnJhbWVFdmVudEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX3dlYXBvblJJbmRleCA9ICh0aGlzLl93ZWFwb25SSW5kZXggKyAxKSAlIFdFQVBPTl9SX0xJU1QubGVuZ3RoO1xuICAgICAgICB2YXIgbmV3V2VhcG9uTmFtZSA9IFdFQVBPTl9SX0xJU1RbdGhpcy5fd2VhcG9uUkluZGV4XTtcbiAgICAgICAgdGhpcy5fd2VhcG9uUiA9IHRoaXMuX2FybWF0dXJlRGlzcGxheS5idWlsZEFybWF0dXJlKG5ld1dlYXBvbk5hbWUpO1xuICAgICAgICB0aGlzLl9hcm1hdHVyZS5nZXRTbG90KCd3ZWFwb25fcicpLmNoaWxkQXJtYXR1cmUgPSB0aGlzLl93ZWFwb25SO1xuXG4gICAgICAgIHRoaXMuX3dlYXBvblIuYWRkRXZlbnRMaXN0ZW5lcihkcmFnb25Cb25lcy5FdmVudE9iamVjdC5GUkFNRV9FVkVOVCwgdGhpcy5fZnJhbWVFdmVudEhhbmRsZXIsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBhaW06IGZ1bmN0aW9uIGFpbSh4LCB5KSB7XG4gICAgICAgIGlmICh0aGlzLl9haW1EaXIgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2FpbURpciA9IDEwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdGFyZ2V0ID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy5wKHgsIHkpKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQWltKCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUF0dGFjaygpO1xuICAgICAgICB0aGlzLl9lbnRlckZyYW1lSGFuZGxlcihkdCk7XG4gICAgfSxcblxuICAgIGFkZEJ1bGxldDogZnVuY3Rpb24gYWRkQnVsbGV0KGJ1bGxldCkge1xuICAgICAgICB0aGlzLl9idWxsZXRzLnB1c2goYnVsbGV0KTtcbiAgICB9LFxuXG4gICAgX2VudGVyRnJhbWVIYW5kbGVyOiBmdW5jdGlvbiBfZW50ZXJGcmFtZUhhbmRsZXIoZHQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuX2J1bGxldHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBidWxsZXQgPSB0aGlzLl9idWxsZXRzW2ldO1xuICAgICAgICAgICAgaWYgKGJ1bGxldC51cGRhdGUoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2J1bGxldHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRyYWdvbkJvbmVzLldvcmxkQ2xvY2suY2xvY2suYWR2YW5jZVRpbWUoZHQpO1xuICAgIH0sXG5cbiAgICBfYW5pbWF0aW9uRXZlbnRIYW5kbGVyOiBmdW5jdGlvbiBfYW5pbWF0aW9uRXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBkcmFnb25Cb25lcy5FdmVudE9iamVjdC5GQURFX0lOX0NPTVBMRVRFKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGV0YWlsLmFuaW1hdGlvblN0YXRlLm5hbWUgPT09IFwianVtcF8xXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0p1bXBpbmdCID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zcGVlZFkgPSAtSlVNUF9TUEVFRDtcbiAgICAgICAgICAgICAgICB0aGlzLl9hcm1hdHVyZS5hbmltYXRpb24uZmFkZUluKFwianVtcF8yXCIsIC0xLCAtMSwgMCwgTk9STUFMX0FOSU1BVElPTl9HUk9VUCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmRldGFpbC5hbmltYXRpb25TdGF0ZS5uYW1lID09PSBcImp1bXBfNFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuRkFERV9PVVRfQ09NUExFVEUpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5kZXRhaWwuYW5pbWF0aW9uU3RhdGUubmFtZSA9PT0gXCJhdHRhY2tfMDFcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzQXR0YWNraW5nQiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2F0dGFja1N0YXRlID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfZnJhbWVFdmVudEhhbmRsZXI6IGZ1bmN0aW9uIF9mcmFtZUV2ZW50SGFuZGxlcihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuZGV0YWlsLm5hbWUgPT09IFwib25GaXJlXCIpIHtcbiAgICAgICAgICAgIHZhciBmaXJlUG9pbnRCb25lID0gZXZlbnQuZGV0YWlsLmFybWF0dXJlLmdldEJvbmUoXCJmaXJlUG9pbnRcIik7XG4gICAgICAgICAgICB2YXIgbG9jYWxQb2ludCA9IGNjLnAoZmlyZVBvaW50Qm9uZS5nbG9iYWwueCwgZmlyZVBvaW50Qm9uZS5nbG9iYWwueSk7XG5cbiAgICAgICAgICAgIHZhciBkaXNwbGF5ID0gZXZlbnQuZGV0YWlsLmFybWF0dXJlLmRpc3BsYXk7XG4gICAgICAgICAgICB2YXIgZ2xvYmFsUG9pbnQgPSBkaXNwbGF5LmNvbnZlcnRUb1dvcmxkU3BhY2UobG9jYWxQb2ludCk7XG5cbiAgICAgICAgICAgIHRoaXMuX2ZpcmUoZ2xvYmFsUG9pbnQpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9maXJlOiBmdW5jdGlvbiBfZmlyZShmaXJlUG9pbnQpIHtcbiAgICAgICAgZmlyZVBvaW50LnggKz0gTWF0aC5yYW5kb20oKSAqIDIgLSAxO1xuICAgICAgICBmaXJlUG9pbnQueSArPSBNYXRoLnJhbmRvbSgpICogMiAtIDE7XG5cbiAgICAgICAgdmFyIGFybWF0dXJlID0gdGhpcy5fYXJtYXR1cmVEaXNwbGF5LmJ1aWxkQXJtYXR1cmUoXCJidWxsZXRfMDFcIik7XG4gICAgICAgIHZhciBlZmZlY3QgPSB0aGlzLl9hcm1hdHVyZURpc3BsYXkuYnVpbGRBcm1hdHVyZShcImZpcmVFZmZlY3RfMDFcIik7XG4gICAgICAgIHZhciByYWRpYW4gPSB0aGlzLl9mYWNlRGlyIDwgMCA/IE1hdGguUEkgLSB0aGlzLl9haW1SYWRpYW4gOiB0aGlzLl9haW1SYWRpYW47XG4gICAgICAgIHZhciBidWxsZXQgPSBuZXcgRHJhZ29uQnVsbGV0KCk7XG4gICAgICAgIGJ1bGxldC5pbml0KHRoaXMubm9kZS5wYXJlbnQuX3NnTm9kZSwgYXJtYXR1cmUsIGVmZmVjdCwgcmFkaWFuICsgTWF0aC5yYW5kb20oKSAqIDAuMDIgLSAwLjAxLCA0MCwgZmlyZVBvaW50KTtcbiAgICAgICAgdGhpcy5hZGRCdWxsZXQoYnVsbGV0KTtcbiAgICB9LFxuXG4gICAgX3VwZGF0ZUFuaW1hdGlvbjogZnVuY3Rpb24gX3VwZGF0ZUFuaW1hdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzSnVtcGluZ0EpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9pc1NxdWF0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9zcGVlZFggPSAwO1xuICAgICAgICAgICAgdGhpcy5fYXJtYXR1cmUuYW5pbWF0aW9uLmZhZGVJbihcInNxdWF0XCIsIC0xLCAtMSwgMCwgTk9STUFMX0FOSU1BVElPTl9HUk9VUCk7XG4gICAgICAgICAgICB0aGlzLl93YWxrU3RhdGUgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX21vdmVEaXIgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3NwZWVkWCA9IDA7XG4gICAgICAgICAgICB0aGlzLl9hcm1hdHVyZS5hbmltYXRpb24uZmFkZUluKFwiaWRsZVwiLCAtMSwgLTEsIDAsIE5PUk1BTF9BTklNQVRJT05fR1JPVVApO1xuICAgICAgICAgICAgdGhpcy5fd2Fsa1N0YXRlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fd2Fsa1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2Fsa1N0YXRlID0gdGhpcy5fYXJtYXR1cmUuYW5pbWF0aW9uLmZhZGVJbihcIndhbGtcIiwgLTEsIC0xLCAwLCBOT1JNQUxfQU5JTUFUSU9OX0dST1VQKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuX21vdmVEaXIgKiB0aGlzLl9mYWNlRGlyID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3dhbGtTdGF0ZS50aW1lU2NhbGUgPSBNQVhfTU9WRV9TUEVFRF9GUk9OVCAvIE5PUk1BTElaRV9NT1ZFX1NQRUVEO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl93YWxrU3RhdGUudGltZVNjYWxlID0gLU1BWF9NT1ZFX1NQRUVEX0JBQ0sgLyBOT1JNQUxJWkVfTU9WRV9TUEVFRDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuX21vdmVEaXIgKiB0aGlzLl9mYWNlRGlyID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NwZWVkWCA9IE1BWF9NT1ZFX1NQRUVEX0ZST05UICogdGhpcy5fZmFjZURpcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3BlZWRYID0gLU1BWF9NT1ZFX1NQRUVEX0JBQ0sgKiB0aGlzLl9mYWNlRGlyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIF91cGRhdGVQb3NpdGlvbjogZnVuY3Rpb24gX3VwZGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fc3BlZWRYICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLl9zcGVlZFg7XG4gICAgICAgICAgICB2YXIgbWluWCA9IC1jYy52aXNpYmxlUmVjdC53aWR0aCAvIDI7XG4gICAgICAgICAgICB2YXIgbWF4WCA9IGNjLnZpc2libGVSZWN0LndpZHRoIC8gMjtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUueCA8IG1pblgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCA9IG1pblg7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubm9kZS54ID4gbWF4WCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ID0gbWF4WDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9zcGVlZFkgIT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NwZWVkWSA+IDUgJiYgdGhpcy5fc3BlZWRZICsgRyA8PSA1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXJtYXR1cmUuYW5pbWF0aW9uLmZhZGVJbihcImp1bXBfM1wiLCAtMSwgLTEsIDAsIE5PUk1BTF9BTklNQVRJT05fR1JPVVApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9zcGVlZFkgKz0gRztcblxuICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5fc3BlZWRZO1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS55IDwgR1JPVU5EKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSBHUk9VTkQ7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNKdW1waW5nQSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzSnVtcGluZ0IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zcGVlZFkgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NwZWVkWCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXJtYXR1cmUuYW5pbWF0aW9uLmZhZGVJbihcImp1bXBfNFwiLCAtMSwgLTEsIDAsIE5PUk1BTF9BTklNQVRJT05fR1JPVVApO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc1NxdWF0aW5nIHx8IHRoaXMuX21vdmVEaXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIF91cGRhdGVBaW06IGZ1bmN0aW9uIF91cGRhdGVBaW0oKSB7XG4gICAgICAgIGlmICh0aGlzLl9haW1EaXIgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2ZhY2VEaXIgPSB0aGlzLl90YXJnZXQueCA+IHRoaXMubm9kZS54ID8gMSA6IC0xO1xuICAgICAgICBpZiAodGhpcy5ub2RlLnNjYWxlWCAqIHRoaXMuX2ZhY2VEaXIgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYICo9IC0xO1xuICAgICAgICAgICAgaWYgKHRoaXMuX21vdmVEaXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVBbmltYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhaW1PZmZzZXRZID0gdGhpcy5fYXJtYXR1cmUuZ2V0Qm9uZShcImNoZXN0XCIpLmdsb2JhbC55ICogdGhpcy5ub2RlLnNjYWxlWTtcblxuICAgICAgICBpZiAodGhpcy5fZmFjZURpciA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2FpbVJhZGlhbiA9IE1hdGguYXRhbjIoLSh0aGlzLl90YXJnZXQueSAtIHRoaXMubm9kZS55ICsgYWltT2Zmc2V0WSksIHRoaXMuX3RhcmdldC54IC0gdGhpcy5ub2RlLngpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYWltUmFkaWFuID0gTWF0aC5QSSAtIE1hdGguYXRhbjIoLSh0aGlzLl90YXJnZXQueSAtIHRoaXMubm9kZS55ICsgYWltT2Zmc2V0WSksIHRoaXMuX3RhcmdldC54IC0gdGhpcy5ub2RlLngpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2FpbVJhZGlhbiA+IE1hdGguUEkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9haW1SYWRpYW4gLT0gTWF0aC5QSSAqIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYWltRGlyID0gMDtcbiAgICAgICAgaWYgKHRoaXMuX2FpbVJhZGlhbiA+IDApIHtcbiAgICAgICAgICAgIGFpbURpciA9IC0xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWltRGlyID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9haW1EaXIgIT0gYWltRGlyKSB7XG4gICAgICAgICAgICB0aGlzLl9haW1EaXIgPSBhaW1EaXI7XG5cbiAgICAgICAgICAgIC8vIEFuaW1hdGlvbiBtaXhpbmcuXG4gICAgICAgICAgICBpZiAodGhpcy5fYWltRGlyID49IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9haW1TdGF0ZSA9IHRoaXMuX2FybWF0dXJlLmFuaW1hdGlvbi5mYWRlSW4oXCJhaW1VcFwiLCAwLCAxLCAwLCBBSU1fQU5JTUFUSU9OX0dST1VQLCBkcmFnb25Cb25lcy5BbmltYXRpb25GYWRlT3V0TW9kZS5TYW1lR3JvdXApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9haW1TdGF0ZSA9IHRoaXMuX2FybWF0dXJlLmFuaW1hdGlvbi5mYWRlSW4oXCJhaW1Eb3duXCIsIDAsIDEsIDAsIEFJTV9BTklNQVRJT05fR1JPVVAsIGRyYWdvbkJvbmVzLkFuaW1hdGlvbkZhZGVPdXRNb2RlLlNhbWVHcm91cCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCBib25lIG1hc2suXG4gICAgICAgICAgICAvL19haW1TdGF0ZS5hZGRCb25lTWFzayhcInBlbHZpc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2FpbVN0YXRlLndlaWdodCA9IE1hdGguYWJzKHRoaXMuX2FpbVJhZGlhbiAvIE1hdGguUEkgKiAyKTtcblxuICAgICAgICAvL19hcm1hdHVyZS5pbnZhbGlkVXBkYXRlKFwicGVsdmlzXCIpOyAvLyBPbmx5IHVwZGF0ZSBib25lIG1hc2suXG4gICAgICAgIHRoaXMuX2FybWF0dXJlLmludmFsaWRVcGRhdGUoKTtcbiAgICB9LFxuXG4gICAgX3VwZGF0ZUF0dGFjazogZnVuY3Rpb24gX3VwZGF0ZUF0dGFjaygpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc0F0dGFja2luZ0EgfHwgdGhpcy5faXNBdHRhY2tpbmdCKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pc0F0dGFja2luZ0IgPSB0cnVlO1xuXG4gICAgICAgIC8vIEFuaW1hdGlvbiBtaXhpbmcuXG4gICAgICAgIHRoaXMuX2F0dGFja1N0YXRlID0gdGhpcy5fYXJtYXR1cmUuYW5pbWF0aW9uLmZhZGVJbihcImF0dGFja18wMVwiLCAtMSwgLTEsIDAsIEFUVEFDS19BTklNQVRJT05fR1JPVVAsIGRyYWdvbkJvbmVzLkFuaW1hdGlvbkZhZGVPdXRNb2RlLlNhbWVHcm91cCk7XG5cbiAgICAgICAgdGhpcy5fYXR0YWNrU3RhdGUuYXV0b0ZhZGVPdXRUaW1lID0gdGhpcy5fYXR0YWNrU3RhdGUuZmFkZVRvdGFsVGltZTtcbiAgICAgICAgdGhpcy5fYXR0YWNrU3RhdGUuYWRkQm9uZU1hc2soXCJwZWx2aXNcIik7XG4gICAgfVxufSk7XG5cbnZhciBEcmFnb25CdWxsZXQgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogJ0RyYWdvbkJ1bGxldCcsXG4gICAgX3NwZWVkWDogMCxcbiAgICBfc3BlZWRZOiAwLFxuXG4gICAgX2FybWF0dXJlOiBudWxsLFxuICAgIF9hcm1hdHVyZURpc3BsYXk6IG51bGwsXG4gICAgX2VmZmVjdDogbnVsbCxcblxuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQocGFyZW50Tm9kZSwgYXJtYXR1cmUsIGVmZmVjdCwgcmFkaWFuLCBzcGVlZCwgcG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5fc3BlZWRYID0gTWF0aC5jb3MocmFkaWFuKSAqIHNwZWVkO1xuICAgICAgICB0aGlzLl9zcGVlZFkgPSAtTWF0aC5zaW4ocmFkaWFuKSAqIHNwZWVkO1xuICAgICAgICB2YXIgdGhlUG9zID0gcGFyZW50Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2UocG9zaXRpb24pO1xuXG4gICAgICAgIHRoaXMuX2FybWF0dXJlID0gYXJtYXR1cmU7XG4gICAgICAgIHRoaXMuX2FybWF0dXJlRGlzcGxheSA9IHRoaXMuX2FybWF0dXJlLmRpc3BsYXk7XG4gICAgICAgIHRoaXMuX2FybWF0dXJlRGlzcGxheS5zZXRQb3NpdGlvbih0aGVQb3MpO1xuICAgICAgICB0aGlzLl9hcm1hdHVyZURpc3BsYXkucm90YXRpb24gPSByYWRpYW4gKiBkcmFnb25Cb25lcy5EcmFnb25Cb25lcy5SQURJQU5fVE9fQU5HTEU7XG4gICAgICAgIHRoaXMuX2FybWF0dXJlLmFuaW1hdGlvbi5wbGF5KFwiaWRsZVwiKTtcblxuICAgICAgICBpZiAoZWZmZWN0KSB7XG4gICAgICAgICAgICB0aGlzLl9lZmZlY3QgPSBlZmZlY3Q7XG4gICAgICAgICAgICB2YXIgZWZmZWN0RGlzcGxheSA9IHRoaXMuX2VmZmVjdC5kaXNwbGF5O1xuICAgICAgICAgICAgZWZmZWN0RGlzcGxheS5yb3RhdGlvbiA9IHJhZGlhbiAqIGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzLlJBRElBTl9UT19BTkdMRTtcbiAgICAgICAgICAgIGVmZmVjdERpc3BsYXkuc2V0UG9zaXRpb24odGhlUG9zKTtcbiAgICAgICAgICAgIGVmZmVjdERpc3BsYXkuc2NhbGVYID0gMSArIE1hdGgucmFuZG9tKCkgKiAxO1xuICAgICAgICAgICAgZWZmZWN0RGlzcGxheS5zY2FsZVkgPSAxICsgTWF0aC5yYW5kb20oKSAqIDAuNTtcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XG4gICAgICAgICAgICAgICAgZWZmZWN0RGlzcGxheS5zY2FsZVkgKj0gLTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2VmZmVjdC5hbmltYXRpb24ucGxheShcImlkbGVcIik7XG5cbiAgICAgICAgICAgIGRyYWdvbkJvbmVzLldvcmxkQ2xvY2suY2xvY2suYWRkKHRoaXMuX2VmZmVjdCk7XG4gICAgICAgICAgICBwYXJlbnROb2RlLmFkZENoaWxkKGVmZmVjdERpc3BsYXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhZ29uQm9uZXMuV29ybGRDbG9jay5jbG9jay5hZGQodGhpcy5fYXJtYXR1cmUpO1xuICAgICAgICBwYXJlbnROb2RlLmFkZENoaWxkKHRoaXMuX2FybWF0dXJlRGlzcGxheSk7XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgICB0aGlzLl9hcm1hdHVyZURpc3BsYXkueCArPSB0aGlzLl9zcGVlZFg7XG4gICAgICAgIHRoaXMuX2FybWF0dXJlRGlzcGxheS55ICs9IHRoaXMuX3NwZWVkWTtcblxuICAgICAgICB2YXIgd29ybGRQb3MgPSB0aGlzLl9hcm1hdHVyZURpc3BsYXkucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2UodGhpcy5fYXJtYXR1cmVEaXNwbGF5LmdldFBvc2l0aW9uKCkpO1xuICAgICAgICBpZiAod29ybGRQb3MueCA8IC0xMDAgfHwgd29ybGRQb3MueCA+PSBjYy52aXNpYmxlUmVjdC53aWR0aCArIDEwMCB8fCB3b3JsZFBvcy55IDwgLTEwMCB8fCB3b3JsZFBvcy55ID49IGNjLnZpc2libGVSZWN0LmhlaWdodCArIDEwMCkge1xuICAgICAgICAgICAgZHJhZ29uQm9uZXMuV29ybGRDbG9jay5jbG9jay5yZW1vdmUodGhpcy5fYXJtYXR1cmUpO1xuICAgICAgICAgICAgdGhpcy5fYXJtYXR1cmVEaXNwbGF5LnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgIHRoaXMuX2FybWF0dXJlLmRpc3Bvc2UoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2VmZmVjdCkge1xuICAgICAgICAgICAgICAgIGRyYWdvbkJvbmVzLldvcmxkQ2xvY2suY2xvY2sucmVtb3ZlKHRoaXMuX2VmZmVjdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZWZmZWN0LmRpc3BsYXkucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2VmZmVjdC5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZGQ2NTRERlBvUk5WS1JXT3VRZExpRUUnLCAnRWRpdGJveEN0cmwnKTtcbi8vIGNhc2VzLzAyX3VpLzA4X2VkaXRCb3gvRWRpdEJveC9FZGl0Ym94Q3RybC5qc1xuXG52YXIgaTE4biA9IHJlcXVpcmUoJ2kxOG4nKTtcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgICAgICBzaW5nbGVMaW5lVGV4dDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5FZGl0Qm94XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2luZ2xlTGluZVBhc3N3b3JkOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkVkaXRCb3hcbiAgICAgICAgfSxcblxuICAgICAgICBtdWx0aUxpbmVUZXh0OiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkVkaXRCb3hcbiAgICAgICAgfSxcblxuICAgICAgICBzaG93RWRpdG9yQm94TGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG5cbiAgICBzaW5nbGVMaW5lRWRpdEJveERpZEJlZ2luRWRpdGluZzogZnVuY3Rpb24gc2luZ2xlTGluZUVkaXRCb3hEaWRCZWdpbkVkaXRpbmcoc2VuZGVyKSB7XG4gICAgICAgIGNjLmxvZyhzZW5kZXIubm9kZS5uYW1lICsgXCIgc2luZ2xlIGxpbmUgZWRpdEJveERpZEJlZ2luRWRpdGluZ1wiKTtcbiAgICB9LFxuXG4gICAgc2luZ2xlTGluZUVkaXRCb3hEaWRDaGFuZ2VkOiBmdW5jdGlvbiBzaW5nbGVMaW5lRWRpdEJveERpZENoYW5nZWQodGV4dCwgc2VuZGVyKSB7XG4gICAgICAgIGNjLmxvZyhzZW5kZXIubm9kZS5uYW1lICsgXCIgc2luZ2xlIGxpbmUgZWRpdEJveERpZENoYW5nZWQ6IFwiICsgdGV4dCk7XG4gICAgfSxcblxuICAgIHNpbmdsZUxpbmVFZGl0Qm94RGlkRW5kRWRpdGluZzogZnVuY3Rpb24gc2luZ2xlTGluZUVkaXRCb3hEaWRFbmRFZGl0aW5nKHNlbmRlcikge1xuICAgICAgICBjYy5sb2coc2VuZGVyLm5vZGUubmFtZSArIFwiIHNpbmdsZSBsaW5lIGVkaXRCb3hEaWRFbmRFZGl0aW5nOiBcIiArIHRoaXMuc2luZ2xlTGluZVRleHQuc3RyaW5nKTtcbiAgICB9LFxuXG4gICAgc2luZ2xlTGluZVBhc3N3b3JkRWRpdEJveERpZEJlZ2luRWRpdGluZzogZnVuY3Rpb24gc2luZ2xlTGluZVBhc3N3b3JkRWRpdEJveERpZEJlZ2luRWRpdGluZyhzZW5kZXIpIHtcbiAgICAgICAgY2MubG9nKHNlbmRlci5ub2RlLm5hbWUgKyBcIiBzaW5nbGUgbGluZSBwYXNzd29yZCBlZGl0Qm94RGlkQmVnaW5FZGl0aW5nXCIpO1xuICAgIH0sXG5cbiAgICBzaW5nbGVMaW5lUGFzc3dvcmRFZGl0Qm94RGlkQ2hhbmdlZDogZnVuY3Rpb24gc2luZ2xlTGluZVBhc3N3b3JkRWRpdEJveERpZENoYW5nZWQodGV4dCwgc2VuZGVyKSB7XG4gICAgICAgIGNjLmxvZyhzZW5kZXIubm9kZS5uYW1lICsgXCIgc2luZ2xlIGxpbmUgcGFzc3dvcmQgZWRpdEJveERpZENoYW5nZWQ6IFwiICsgdGV4dCk7XG4gICAgfSxcblxuICAgIHNpbmdsZUxpbmVQYXNzd29yZEVkaXRCb3hEaWRFbmRFZGl0aW5nOiBmdW5jdGlvbiBzaW5nbGVMaW5lUGFzc3dvcmRFZGl0Qm94RGlkRW5kRWRpdGluZyhzZW5kZXIpIHtcbiAgICAgICAgY2MubG9nKHNlbmRlci5ub2RlLm5hbWUgKyBcIiBzaW5nbGUgbGluZSBwYXNzd29yZCBlZGl0Qm94RGlkRW5kRWRpdGluZzogXCIgKyB0aGlzLnNpbmdsZUxpbmVQYXNzd29yZC5zdHJpbmcpO1xuICAgIH0sXG5cbiAgICBtdWx0aUxpbmVQYXNzd29yZEVkaXRCb3hEaWRCZWdpbkVkaXRpbmc6IGZ1bmN0aW9uIG11bHRpTGluZVBhc3N3b3JkRWRpdEJveERpZEJlZ2luRWRpdGluZyhzZW5kZXIpIHtcbiAgICAgICAgY2MubG9nKHNlbmRlci5ub2RlLm5hbWUgKyBcIiBtdWx0aSBsaW5lIGVkaXRCb3hEaWRCZWdpbkVkaXRpbmdcIik7XG4gICAgfSxcblxuICAgIG11bHRpTGluZVBhc3N3b3JkRWRpdEJveERpZENoYW5nZWQ6IGZ1bmN0aW9uIG11bHRpTGluZVBhc3N3b3JkRWRpdEJveERpZENoYW5nZWQodGV4dCwgc2VuZGVyKSB7XG4gICAgICAgIGNjLmxvZyhzZW5kZXIubm9kZS5uYW1lICsgXCIgbXVsdGkgbGluZSBlZGl0Qm94RGlkQ2hhbmdlZDogXCIgKyB0ZXh0KTtcbiAgICB9LFxuXG4gICAgbXVsdGlMaW5lUGFzc3dvcmRFZGl0Qm94RGlkRW5kRWRpdGluZzogZnVuY3Rpb24gbXVsdGlMaW5lUGFzc3dvcmRFZGl0Qm94RGlkRW5kRWRpdGluZyhzZW5kZXIpIHtcbiAgICAgICAgY2MubG9nKHNlbmRlci5ub2RlLm5hbWUgKyBcIiBtdWx0aSBsaW5lIGVkaXRCb3hEaWRFbmRFZGl0aW5nOiBcIiArIHRoaXMubXVsdGlMaW5lVGV4dC5zdHJpbmcpO1xuICAgIH0sXG4gICAgYnV0dG9uQ2xpY2tlZDogZnVuY3Rpb24gYnV0dG9uQ2xpY2tlZCgpIHtcbiAgICAgICAgY2MubG9nKFwiYnV0dG9uIENsaWNrZWQhXCIpO1xuICAgICAgICBpZiAodGhpcy5zaW5nbGVMaW5lVGV4dC5zdHJpbmcgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0VkaXRvckJveExhYmVsLnN0cmluZyA9IGkxOG4udChcImNhc2VzLzAyX3VpLzA3X2VkaXRCb3gvZWRpdGJveC5qcy4xXCIpICsgdGhpcy5zaW5nbGVMaW5lVGV4dC5zdHJpbmc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dFZGl0b3JCb3hMYWJlbC5zdHJpbmcgPSBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNTBhOTVPYkxxRkgycno2ZVNodkd1TksnLCAnRmlsbGVkU3ByaXRlQ29udHJvbCcpO1xuLy8gY2FzZXMvMDFfZ3JhcGhpY3MvMDFfc3ByaXRlL0ZpbGxlZFNwcml0ZS9GaWxsZWRTcHJpdGVDb250cm9sLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgICAgIHNwZWVkOiAwLjEsXG5cbiAgICAgICAgaG9yaXpvbnRhbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVcbiAgICAgICAgfSxcblxuICAgICAgICB2ZXJ0aWNhbDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVcbiAgICAgICAgfSxcblxuICAgICAgICByYWRpYWxfcm91bmQ6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlXG4gICAgICAgIH0sXG5cbiAgICAgICAgcmFkaWFsX3NlbWljaXJjbGU6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHtcbiAgICAgICAgLy8gdXBkYXRlIGZpbGwgc3RhcnRcbiAgICAgICAgdGhpcy5fdXBkYXRhRmlsbFN0YXJ0KHRoaXMuaG9yaXpvbnRhbCwgZHQpO1xuICAgICAgICB0aGlzLl91cGRhdGFGaWxsU3RhcnQodGhpcy52ZXJ0aWNhbCwgZHQpO1xuICAgICAgICAvLyB1cGRhdGUgZmlsbCByYW5nZVxuICAgICAgICB0aGlzLl91cGRhdGVGaWxsUmFuZ2UodGhpcy5yYWRpYWxfcm91bmQsIDEsIGR0KTtcbiAgICAgICAgdGhpcy5fdXBkYXRlRmlsbFJhbmdlKHRoaXMucmFkaWFsX3NlbWljaXJjbGUsIDAuNSwgZHQpO1xuICAgIH0sXG5cbiAgICBfdXBkYXRhRmlsbFN0YXJ0OiBmdW5jdGlvbiBfdXBkYXRhRmlsbFN0YXJ0KHNwcml0ZSwgZHQpIHtcbiAgICAgICAgdmFyIGZpbGxTdGFydCA9IHNwcml0ZS5maWxsU3RhcnQ7XG4gICAgICAgIGZpbGxTdGFydCA9IGZpbGxTdGFydCA+IDAgPyBmaWxsU3RhcnQgLT0gZHQgKiB0aGlzLnNwZWVkIDogMTtcbiAgICAgICAgc3ByaXRlLmZpbGxTdGFydCA9IGZpbGxTdGFydDtcbiAgICB9LFxuXG4gICAgX3VwZGF0ZUZpbGxSYW5nZTogZnVuY3Rpb24gX3VwZGF0ZUZpbGxSYW5nZShzcHJpdGUsIHJhbmdlLCBkdCkge1xuICAgICAgICB2YXIgZmlsbFJhbmdlID0gc3ByaXRlLmZpbGxSYW5nZTtcbiAgICAgICAgZmlsbFJhbmdlID0gZmlsbFJhbmdlIDwgcmFuZ2UgPyBmaWxsUmFuZ2UgKz0gZHQgKiB0aGlzLnNwZWVkIDogMDtcbiAgICAgICAgc3ByaXRlLmZpbGxSYW5nZSA9IGZpbGxSYW5nZTtcbiAgICB9XG5cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMWVhMzZuWWlrVk91cDZCemFFSU1ZUEgnLCAnRm9vJyk7XG4vLyBjYXNlcy8wNV9zY3JpcHRpbmcvMDVfY3Jvc3NfcmVmZXJlbmNlL0Zvby5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiBmdW5jdGlvbiBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVmVG9CYXI6IHJlcXVpcmUoJ0JhcicpXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgdGlwID0gdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRpcC5zdHJpbmcgPSB0aGlzLm5hbWUgKyAnIGhhcyByZWZlcmVuY2UgdG8gJyArIHRoaXMucmVmVG9CYXIubmFtZTtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2VhODEwOGJwbDlFcklHT0VMSTJGZXppJywgJ0dvbGRCZWF0aW5nQW5pbWUnKTtcbi8vIGNhc2VzLzAyX3VpLzAyX2xhYmVsL0JpdG1hcEZvbnRMYWJlbC9Hb2xkQmVhdGluZ0FuaW1lLmpzXG5cbnZhciBpMThuID0gcmVxdWlyZSgnaTE4bicpO1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3BlZWQ6IDUwLFxuICAgICAgICBnb2xkX2xhYmVsOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuY3VyR29sZCA9IDA7XG4gICAgICAgIHRoaXMuY3VySW5kZXggPSAwO1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLmN1ckluZGV4ICs9IGR0ICogdGhpcy5zcGVlZDtcbiAgICAgICAgaWYgKHRoaXMuY3VySW5kZXggPiAxMCkge1xuICAgICAgICAgICAgdGhpcy5jdXJJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLmN1ckdvbGQrKztcbiAgICAgICAgICAgIHRoaXMuZ29sZF9sYWJlbC5zdHJpbmcgKz0gdGhpcy5jdXJHb2xkO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ29sZF9sYWJlbC5zdHJpbmcubGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdvbGRfbGFiZWwuc3RyaW5nID0gaTE4bi50KFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvR29sZEJlYXRpbmdBbmltZS5qcy4xXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VyR29sZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2M4NjQwTTNvelJFcnJWL0dvM3VUa250JywgJ0hlbHBlcnMnKTtcbi8vIHNjcmlwdHMvR2xvYmFsL0hlbHBlcnMuanNcblxuaWYgKENDX0pTQiAmJiBjYy5ydW50aW1lKSB7XG4gICAgLy8gZml4IGNvY29zLWNyZWF0b3IvZmlyZWJhbGwjMzU3OFxuICAgIGNjLkxvYWRlckxheWVyLnNldFVzZURlZmF1bHRTb3VyY2UoZmFsc2UpO1xuICAgIGNjLkRpYWxvZy5zZXRVc2VEZWZhdWx0U291cmNlKGZhbHNlKTtcbn1cblxuLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdWRlZCkgYW5kIG1heCAoZXhjbHVkZWQpXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBnZXRSYW5kb21JbnQ6IGdldFJhbmRvbUludFxufTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzMzOWQyZGcxUXBFS0t4QkpCekhpREowJywgJ0hlcm9Db250cm9sJyk7XG4vLyBjYXNlcy9jb2xsaWRlci9QbGF0Zm9ybS9IZXJvQ29udHJvbC5qc1xuXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3BlZWQ6IGNjLnYyKDAsIDApLFxuICAgICAgICBtYXhTcGVlZDogY2MudjIoMjAwMCwgMjAwMCksXG4gICAgICAgIGdyYXZpdHk6IC0xMDAwLFxuICAgICAgICBkcmFnOiAxMDAwLFxuICAgICAgICBkaXJlY3Rpb246IDAsXG4gICAgICAgIGp1bXBTcGVlZDogMzAwXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcblxuICAgICAgICAvL2FkZCBrZXlib2FyZCBpbnB1dCBsaXN0ZW5lciB0byBjYWxsIHR1cm5MZWZ0IGFuZCB0dXJuUmlnaHRcbiAgICAgICAgY2MuZXZlbnRNYW5hZ2VyLmFkZExpc3RlbmVyKHtcbiAgICAgICAgICAgIGV2ZW50OiBjYy5FdmVudExpc3RlbmVyLktFWUJPQVJELFxuICAgICAgICAgICAgb25LZXlQcmVzc2VkOiB0aGlzLm9uS2V5UHJlc3NlZC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgb25LZXlSZWxlYXNlZDogdGhpcy5vbktleVJlbGVhc2VkLmJpbmQodGhpcylcbiAgICAgICAgfSwgdGhpcy5ub2RlKTtcblxuICAgICAgICB0aGlzLmNvbGxpc2lvblggPSAwO1xuICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSAwO1xuXG4gICAgICAgIHRoaXMucHJlUG9zaXRpb24gPSBjYy52MigpO1xuICAgICAgICB0aGlzLnByZVN0ZXAgPSBjYy52MigpO1xuXG4gICAgICAgIHRoaXMudG91Y2hpbmdOdW1iZXIgPSAwO1xuICAgIH0sXG5cbiAgICBvbkRpc2FibGVkOiBmdW5jdGlvbiBvbkRpc2FibGVkKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERlYnVnRHJhdyA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBvbktleVByZXNzZWQ6IGZ1bmN0aW9uIG9uS2V5UHJlc3NlZChrZXlDb2RlLCBldmVudCkge1xuICAgICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgY2MuS0VZLmE6XG4gICAgICAgICAgICBjYXNlIGNjLktFWS5sZWZ0OlxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLktFWS5kOlxuICAgICAgICAgICAgY2FzZSBjYy5LRVkucmlnaHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5LRVkudzpcbiAgICAgICAgICAgIGNhc2UgY2MuS0VZLnVwOlxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5qdW1waW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQueSA9IHRoaXMuanVtcFNwZWVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbktleVJlbGVhc2VkOiBmdW5jdGlvbiBvbktleVJlbGVhc2VkKGtleUNvZGUsIGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBjYy5LRVkuYTpcbiAgICAgICAgICAgIGNhc2UgY2MuS0VZLmxlZnQ6XG4gICAgICAgICAgICBjYXNlIGNjLktFWS5kOlxuICAgICAgICAgICAgY2FzZSBjYy5LRVkucmlnaHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xuXG4gICAgICAgIHRoaXMudG91Y2hpbmdOdW1iZXIrKztcblxuICAgICAgICAvLyAxc3Qgc3RlcFxuICAgICAgICAvLyBnZXQgcHJlIGFhYmIsIGdvIGJhY2sgYmVmb3JlIGNvbGxpc2lvblxuICAgICAgICB2YXIgb3RoZXJBYWJiID0gb3RoZXIud29ybGQuYWFiYjtcbiAgICAgICAgdmFyIG90aGVyUHJlQWFiYiA9IG90aGVyLndvcmxkLnByZUFhYmIuY2xvbmUoKTtcblxuICAgICAgICB2YXIgc2VsZkFhYmIgPSBzZWxmLndvcmxkLmFhYmI7XG4gICAgICAgIHZhciBzZWxmUHJlQWFiYiA9IHNlbGYud29ybGQucHJlQWFiYi5jbG9uZSgpO1xuXG4gICAgICAgIC8vIDJuZCBzdGVwXG4gICAgICAgIC8vIGZvcndhcmQgeC1heGlzLCBjaGVjayB3aGV0aGVyIGNvbGxpc2lvbiBvbiB4LWF4aXNcbiAgICAgICAgc2VsZlByZUFhYmIueCA9IHNlbGZBYWJiLng7XG4gICAgICAgIG90aGVyUHJlQWFiYi54ID0gb3RoZXJBYWJiLng7XG5cbiAgICAgICAgaWYgKGNjLkludGVyc2VjdGlvbi5yZWN0UmVjdChzZWxmUHJlQWFiYiwgb3RoZXJQcmVBYWJiKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQueCA8IDAgJiYgc2VsZlByZUFhYmIueE1heCA+IG90aGVyUHJlQWFiYi54TWF4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggPSBvdGhlclByZUFhYmIueE1heCAtIHRoaXMubm9kZS5wYXJlbnQueDtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpc2lvblggPSAtMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zcGVlZC54ID4gMCAmJiBzZWxmUHJlQWFiYi54TWluIDwgb3RoZXJQcmVBYWJiLnhNaW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCA9IG90aGVyUHJlQWFiYi54TWluIC0gc2VsZlByZUFhYmIud2lkdGggLSB0aGlzLm5vZGUucGFyZW50Lng7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25YID0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zcGVlZC54ID0gMDtcbiAgICAgICAgICAgIG90aGVyLnRvdWNoaW5nWCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyAzcmQgc3RlcFxuICAgICAgICAvLyBmb3J3YXJkIHktYXhpcywgY2hlY2sgd2hldGhlciBjb2xsaXNpb24gb24geS1heGlzXG4gICAgICAgIHNlbGZQcmVBYWJiLnkgPSBzZWxmQWFiYi55O1xuICAgICAgICBvdGhlclByZUFhYmIueSA9IG90aGVyQWFiYi55O1xuXG4gICAgICAgIGlmIChjYy5JbnRlcnNlY3Rpb24ucmVjdFJlY3Qoc2VsZlByZUFhYmIsIG90aGVyUHJlQWFiYikpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkLnkgPCAwICYmIHNlbGZQcmVBYWJiLnlNYXggPiBvdGhlclByZUFhYmIueU1heCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0gb3RoZXJQcmVBYWJiLnlNYXggLSB0aGlzLm5vZGUucGFyZW50Lnk7XG4gICAgICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25ZID0gLTE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3BlZWQueSA+IDAgJiYgc2VsZlByZUFhYmIueU1pbiA8IG90aGVyUHJlQWFiYi55TWluKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSBvdGhlclByZUFhYmIueU1pbiAtIHNlbGZQcmVBYWJiLmhlaWdodCAtIHRoaXMubm9kZS5wYXJlbnQueTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNwZWVkLnkgPSAwO1xuICAgICAgICAgICAgb3RoZXIudG91Y2hpbmdZID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkNvbGxpc2lvblN0YXk6IGZ1bmN0aW9uIG9uQ29sbGlzaW9uU3RheShvdGhlciwgc2VsZikge1xuICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25ZID09PSAtMSkge1xuICAgICAgICAgICAgaWYgKG90aGVyLm5vZGUuZ3JvdXAgPT09ICdQbGF0Zm9ybScpIHtcbiAgICAgICAgICAgICAgICB2YXIgbW90aW9uID0gb3RoZXIubm9kZS5nZXRDb21wb25lbnQoJ1BsYXRmb3JtTW90aW9uJyk7XG4gICAgICAgICAgICAgICAgaWYgKG1vdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCArPSBtb3Rpb24uX21vdmVkRGlmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS55ID0gb3RoZXIud29ybGQuYWFiYi55TWF4O1xuXG4gICAgICAgICAgICAvLyB2YXIgb2Zmc2V0ID0gY2MudjIob3RoZXIud29ybGQuYWFiYi54IC0gb3RoZXIud29ybGQucHJlQWFiYi54LCAwKTtcblxuICAgICAgICAgICAgLy8gdmFyIHRlbXAgPSBjYy5hZmZpbmVUcmFuc2Zvcm1DbG9uZShzZWxmLndvcmxkLnRyYW5zZm9ybSk7XG4gICAgICAgICAgICAvLyB0ZW1wLnR4ID0gdGVtcC50eSA9IDA7XG5cbiAgICAgICAgICAgIC8vIG9mZnNldCA9IGNjLnBvaW50QXBwbHlBZmZpbmVUcmFuc2Zvcm0ob2Zmc2V0LCB0ZW1wKTtcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS54ICs9IG9mZnNldC54O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uQ29sbGlzaW9uRXhpdDogZnVuY3Rpb24gb25Db2xsaXNpb25FeGl0KG90aGVyKSB7XG4gICAgICAgIHRoaXMudG91Y2hpbmdOdW1iZXItLTtcbiAgICAgICAgaWYgKHRoaXMudG91Y2hpbmdOdW1iZXIgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG90aGVyLnRvdWNoaW5nWCkge1xuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25YID0gMDtcbiAgICAgICAgICAgIG90aGVyLnRvdWNoaW5nWCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKG90aGVyLnRvdWNoaW5nWSkge1xuICAgICAgICAgICAgb3RoZXIudG91Y2hpbmdZID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblkgPSAwO1xuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25ZID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkLnkgKz0gdGhpcy5ncmF2aXR5ICogZHQ7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5zcGVlZC55KSA+IHRoaXMubWF4U3BlZWQueSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQueSA9IHRoaXMuc3BlZWQueSA+IDAgPyB0aGlzLm1heFNwZWVkLnkgOiAtdGhpcy5tYXhTcGVlZC55O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zcGVlZC54ID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQueCAtPSB0aGlzLmRyYWcgKiBkdDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zcGVlZC54IDw9IDApIHRoaXMuc3BlZWQueCA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3BlZWQueCA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkLnggKz0gdGhpcy5kcmFnICogZHQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQueCA+PSAwKSB0aGlzLnNwZWVkLnggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zcGVlZC54ICs9ICh0aGlzLmRpcmVjdGlvbiA+IDAgPyAxIDogLTEpICogdGhpcy5kcmFnICogZHQ7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5zcGVlZC54KSA+IHRoaXMubWF4U3BlZWQueCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQueCA9IHRoaXMuc3BlZWQueCA+IDAgPyB0aGlzLm1heFNwZWVkLnggOiAtdGhpcy5tYXhTcGVlZC54O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3BlZWQueCAqIHRoaXMuY29sbGlzaW9uWCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQueCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZVBvc2l0aW9uLnggPSB0aGlzLm5vZGUueDtcbiAgICAgICAgdGhpcy5wcmVQb3NpdGlvbi55ID0gdGhpcy5ub2RlLnk7XG5cbiAgICAgICAgdGhpcy5wcmVTdGVwLnggPSB0aGlzLnNwZWVkLnggKiBkdDtcbiAgICAgICAgdGhpcy5wcmVTdGVwLnkgPSB0aGlzLnNwZWVkLnkgKiBkdDtcblxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkLnggKiBkdDtcbiAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZC55ICogZHQ7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc0OWFkZTV3dXU5SUxLRHV3UG1kSUFMeCcsICdIaXR0ZXN0Jyk7XG4vLyBjYXNlcy9jb2xsaWRlci9IaXR0ZXN0L0hpdHRlc3QuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjb2xsaWRlcjoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUG9seWdvbkNvbGxpZGVyXG4gICAgICAgIH0sXG5cbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy50aXRsZS5zdHJpbmcgPSAnbm9ybWFsJztcblxuICAgICAgICBjYy5ldmVudE1hbmFnZXIuYWRkTGlzdGVuZXIoe1xuICAgICAgICAgICAgZXZlbnQ6IGNjLkV2ZW50TGlzdGVuZXIuVE9VQ0hfT05FX0JZX09ORSxcbiAgICAgICAgICAgIG9uVG91Y2hCZWdhbjogZnVuY3Rpb24gb25Ub3VjaEJlZ2FuKHRvdWNoLCBldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciB0b3VjaExvYyA9IHRvdWNoLmdldExvY2F0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2MuSW50ZXJzZWN0aW9uLnBvaW50SW5Qb2x5Z29uKHRvdWNoTG9jLCBfdGhpcy5jb2xsaWRlci53b3JsZC5wb2ludHMpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRpdGxlLnN0cmluZyA9ICdIaXQnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRpdGxlLnN0cmluZyA9ICdOb3QgaGl0JztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcy5ub2RlKTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbiBvbkRpc2FibGUoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRGVidWdEcmF3ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNGExOWNTYlI1ZEJWckt2Y2hWcGtpcm8nLCAnSUFQJyk7XG4vLyBjYXNlcy9hbnlzZGsvMDJfaWFwL0lBUC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTW9iaWxlKSB7XG4gICAgICAgICAgICB0aGlzLmlhcFBsdWdpbiA9IGFueXNkay5hZ2VudE1hbmFnZXIuZ2V0SUFQUGx1Z2luKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5pYXBQbHVnaW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlhcFBsdWdpbi5zZXRMaXN0ZW5lcih0aGlzLm9uSUFQUmVzdWx0LCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBwYXlGb3JQcm9kdWN0OiBmdW5jdGlvbiBwYXlGb3JQcm9kdWN0KCkge1xuICAgICAgICBpZiAoIXRoaXMuaWFwUGx1Z2luKSByZXR1cm47XG4gICAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICAgICAgJ1Byb2R1Y3RfSWQnOiAnMTA3MTk2JywgLy/llYblk4HllK/kuIDmoIfnpLrnrKZcbiAgICAgICAgICAgICdQcm9kdWN0X05hbWUnOiAndGhyZWUgaGVhcnRzJywgLy/llYblk4HlkI3np7BcbiAgICAgICAgICAgICdQcm9kdWN0X1ByaWNlJzogJzAuMScsIC8v5ZWG5ZOB5Y2V5Lu3XG4gICAgICAgICAgICAnUHJvZHVjdF9Db3VudCc6ICcxJywgLy/llYblk4HmlbDph49cbiAgICAgICAgICAgICdQcm9kdWN0X0Rlc2MnOiAndGhyZWUgaGVhcnRzJywgLy/llYblk4Hmj4/ov7BcbiAgICAgICAgICAgICdDb2luX05hbWUnOiAnaGVhcnQnLCAvL+iZmuaLn+W4geWQjeensFxuICAgICAgICAgICAgJ0NvaW5fUmF0ZSc6ICczJywgLy/omZrmi5/luIHlhZHmjaLnjodcbiAgICAgICAgICAgICdSb2xlX0lkJzogXCJpZFwiLCAvL+inkuiJsuWUr+S4gOagh+ekuuesplxuICAgICAgICAgICAgJ1JvbGVfTmFtZSc6ICduYW1lJywgLy/op5LoibLlkI3np7BcbiAgICAgICAgICAgICdSb2xlX0dyYWRlJzogJzEnLCAvL+inkuiJsuetiee6p1xuICAgICAgICAgICAgJ1JvbGVfQmFsYW5jZSc6IFwiMVwiLCAvL+iZmuaLn+W4geS9meminVxuICAgICAgICAgICAgJ1ZpcF9MZXZlbCc6ICcwJywgLy9WSVDnrYnnuqdcbiAgICAgICAgICAgICdQYXJ0eV9OYW1lJzogJ251bGwnLCAvL+W3peS8muWQjeensFxuICAgICAgICAgICAgJ1NlcnZlcl9JZCc6ICcxJywgLy/mnI3liqHlmajllK/kuIDmoIfnpLrnrKZcbiAgICAgICAgICAgICdTZXJ2ZXJfTmFtZSc6ICcxJywgLy/mnI3liqHlmajlkI3np7BcbiAgICAgICAgICAgICdFWFQnOiAnQ29jb3MgQ3JlYXRvcicgLy/mianlsZXlrZfmrrVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pYXBQbHVnaW4ucGF5Rm9yUHJvZHVjdChpbmZvKTtcbiAgICB9LFxuXG4gICAgZ2V0T3JkZXJJZDogZnVuY3Rpb24gZ2V0T3JkZXJJZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlhcFBsdWdpbikgcmV0dXJuO1xuICAgICAgICB2YXIgb3JkZXJJZCA9IHRoaXMuaWFwUGx1Z2luLmdldE9yZGVySWQoKTtcbiAgICAgICAgY2MubG9nKCcjIyMjIyMjIyMjIGdldE9yZGVySWQgIyMjIyMjIyMjIyA6ICcgKyBvcmRlcklkKTtcbiAgICB9LFxuXG4gICAgb25QYXlSZXN1bHQ6IGZ1bmN0aW9uIG9uUGF5UmVzdWx0KGNvZGUsIG1zZykge1xuICAgICAgICBjYy5sb2coJyMjIyMjIyMjIyMgUEFZIFJFU1VMVCAjIyMjIyMjIyMjIGNvZGU6ICcgKyBjb2RlICsgJyxtc2c6ICcgKyBtc2cpO1xuICAgICAgICBzd2l0Y2ggKGNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgYW55c2RrLlBheVJlc3VsdENvZGUua1BheVN1Y2Nlc3M6XG4gICAgICAgICAgICAgICAgLy8g5pSv5LuY57O757uf5pSv5LuY5oiQ5YqfXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyMjIyMjIyMjIyMga1BheVN1Y2Nlc3MgIyMjIyMjIyMjIycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhbnlzZGsuUGF5UmVzdWx0Q29kZS5rUGF5Q2FuY2VsOlxuICAgICAgICAgICAgICAgIC8vIOaUr+S7mOezu+e7n+aUr+S7mOWPlua2iFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjIyMjIyMjIyMjIGtQYXlDYW5jZWwgIyMjIyMjIyMjIycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhbnlzZGsuUGF5UmVzdWx0Q29kZS5rUGF5RmFpbDogLy8g5pSv5LuY57O757uf5pSv5LuY5aSx6LSlXG4gICAgICAgICAgICBjYXNlIGFueXNkay5QYXlSZXN1bHRDb2RlLmtQYXlOZXR3b3JrRXJyb3I6IC8vIOaUr+S7mOezu+e7n+e9kee7nOmUmeivr1xuICAgICAgICAgICAgY2FzZSBhbnlzZGsuUGF5UmVzdWx0Q29kZS5rUGF5UHJvZHVjdGlvbkluZm9ySW5jb21wbGV0ZTpcbiAgICAgICAgICAgICAgICAvLyDmlK/ku5jns7vnu5/mlK/ku5jkv6Hmga/kuI3lrozmlbRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnIyMjIyMjIyMjIyBrUGF5RmFpbCAjIyMjIyMjIyMjJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGFueXNkay5QYXlSZXN1bHRDb2RlLmtQYXlJbml0U3VjY2VzczpcbiAgICAgICAgICAgICAgICAvLyDmlK/ku5jns7vnu5/liJ3lp4vljJbmiJDlip9cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnIyMjIyMjIyMjIyBrUGF5SW5pdFN1Y2Nlc3MgIyMjIyMjIyMjIycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhbnlzZGsuUGF5UmVzdWx0Q29kZS5rUGF5SW5pdEZhaWw6XG4gICAgICAgICAgICAgICAgLy8g5pSv5LuY57O757uf5Yid5aeL5YyW5aSx6LSlXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyMjIyMjIyMjIyMga1BheUluaXRGYWlsICMjIyMjIyMjIyMnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYW55c2RrLlBheVJlc3VsdENvZGUua1BheU5vd1BheWluZzpcbiAgICAgICAgICAgICAgICAvLyDmlK/ku5jns7vnu5/mraPlnKjmlK/ku5jkuK1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnIyMjIyMjIyMjIyBrUGF5Tm93UGF5aW5nICMjIyMjIyMjIyMnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnM2FlNGNVc0djQklFNHE3S3NwNFpYL0gnLCAnSW5pdERhdGEnKTtcbi8vIGNhc2VzLzA1X3NjcmlwdGluZy8wOF9tb2R1bGUvSW5pdERhdGEuanNcblxuXG52YXIgX21vbnN0ZXJJbmZvID0ge1xuICAgIG5hbWU6IFwiU2xpbWVcIixcbiAgICBocDogMTAwLFxuICAgIGx2OiAxLFxuICAgIGF0azogMTAsXG4gICAgZGVmZW5zZTogNSxcbiAgICBpbWFnZVVybDogXCJ0ZXN0IGFzc2V0cy9QdXJwbGVNb25zdGVyXCJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG1vbnN0ZXJJbmZvOiBfbW9uc3RlckluZm9cbn07XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc2YTg3MWd5NzNGRExhcDNFamUvMmg2aScsICdJbnN0cnVjdGlvbicpO1xuLy8gc2NyaXB0cy9HbG9iYWwvSW5zdHJ1Y3Rpb24uanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6ICcnLFxuICAgICAgICAgICAgbXVsdGlsaW5lOiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge31cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWVcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc5MjBjOGE1TWFoQWhiQ1RTdm1RdmFCKycsICdJdGVtJyk7XG4vLyBjYXNlcy8wMl91aS8wNV9zY3JvbGxWaWV3L0xpc3RWaWV3L0l0ZW0uanNcblxudmFyIGkxOG4gPSByZXF1aXJlKCdpMThuJyk7XG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIGl0ZW1JRDogMFxuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaGVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSBcIiArIHRoaXMuaXRlbUlEICsgJyBjbGlja2VkJyk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH0sXG5cbiAgICB1cGRhdGVJdGVtOiBmdW5jdGlvbiB1cGRhdGVJdGVtKHRtcGxJZCwgaXRlbUlkKSB7XG4gICAgICAgIHRoaXMuaXRlbUlEID0gaXRlbUlkO1xuICAgICAgICB0aGlzLmxhYmVsLnRleHRLZXkgPSBpMThuLnQoXCJjYXNlcy8wMl91aS8wNV9zY3JvbGxWaWV3L0l0ZW0uanMuMVwiKSArIHRtcGxJZCArICcgSXRlbSMnICsgdGhpcy5pdGVtSUQ7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdlNGY4OGFkcDNoRVJvSjQ4RFoyUFNBbCcsICdMYWJlbExvY2FsaXplZCcpO1xuLy8gaTE4bi9MYWJlbExvY2FsaXplZC5qc1xuXG52YXIgaTE4biA9IHJlcXVpcmUoJ2kxOG4nKTtcbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkxhYmVsLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0ZXh0S2V5OiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6ICdURVhUX0tFWScsXG4gICAgICAgICAgICBtdWx0aWxpbmU6IHRydWUsXG4gICAgICAgICAgICB0b29sdGlwOiAnRW50ZXIgaTE4biBrZXkgaGVyZScsXG4gICAgICAgICAgICBub3RpZnk6IGZ1bmN0aW9uIG5vdGlmeSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2dOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NnTm9kZS5zZXRTdHJpbmcodGhpcy5zdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVOb2RlU2l6ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3RyaW5nOiB7XG4gICAgICAgICAgICBvdmVycmlkZTogdHJ1ZSxcbiAgICAgICAgICAgIHRvb2x0aXA6ICdIZXJlIHNob3dzIHRoZSBsb2NhbGl6ZWQgc3RyaW5nIG9mIFRleHQgS2V5JyxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpMThuLnQodGhpcy50ZXh0S2V5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dEtleSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGNjLndhcm4oJ1BsZWFzZSBzZXQgbGFiZWwgdGV4dCBrZXkgaW4gVGV4dCBLZXkgcHJvcGVydHkuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzJiYmVkdFYzYmxDVkpibWYyRTloLzBWJywgJ0xheW91dFJlc2l6ZUNvbnRhaW5lckN0cmwnKTtcbi8vIGNhc2VzLzAyX3VpLzA2X2xheW91dC9TY3JpcHQvTGF5b3V0UmVzaXplQ29udGFpbmVyQ3RybC5qc1xuXG5cbnZhciBpbmZvID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdpbmZvJyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRhcmdldDogY2MuTm9kZSxcbiAgICAgICAgbnVtOiAwXG4gICAgfVxufSk7XG4vLzUgMyAxMCAxMlxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpdGVtVGVtcDoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIHRhcmdldEFyeToge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtpbmZvXVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLl9jdXJUaW1lID0gMDtcbiAgICAgICAgdGhpcy5fY3VySW5kZXggPSAwO1xuICAgIH0sXG5cbiAgICBfY3JlYXRlSXRlbTogZnVuY3Rpb24gX2NyZWF0ZUl0ZW0ocGFyZW50Tm9kZSwgaWR4KSB7XG4gICAgICAgIHZhciBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtVGVtcCk7XG4gICAgICAgIHZhciBsYWJlbCA9IGl0ZW0uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCk7XG4gICAgICAgIGxhYmVsLnN0cmluZyA9IGlkeDtcbiAgICAgICAgaXRlbS5wYXJlbnQgPSBwYXJlbnROb2RlO1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLl9jdXJUaW1lICs9IGR0O1xuICAgICAgICBpZiAodGhpcy5fY3VyVGltZSA+PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJUaW1lID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50YXJnZXRBcnkubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICB2YXIgbnVtID0gdGhpcy50YXJnZXRBcnlbaV0ubnVtO1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnRhcmdldEFyeVtpXS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCAmJiB0aGlzLl9jdXJJbmRleCA8IG51bSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVJdGVtKHRhcmdldCwgdGhpcy5fY3VySW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2N1ckluZGV4Kys7XG4gICAgICAgIH1cbiAgICB9XG5cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYWE2M2JXTkU4aEJmNFA0U3AwWDJ1VDAnLCAnTGlzdEl0ZW0nKTtcbi8vIHNjcmlwdHMvR2xvYmFsL0xpc3RJdGVtLmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIGJnOiBjYy5TcHJpdGUsXG4gICAgICAgIGJ0bjogY2MuQnV0dG9uXG4gICAgfSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQobWVudSkge1xuICAgICAgICB0aGlzLmluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMubWVudSA9IG1lbnU7XG4gICAgfSxcblxuICAgIGxvYWRFeGFtcGxlOiBmdW5jdGlvbiBsb2FkRXhhbXBsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsKSB7XG4gICAgICAgICAgICB0aGlzLm1lbnUubG9hZFNjZW5lKHRoaXMudXJsKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGVJdGVtOiBmdW5jdGlvbiB1cGRhdGVJdGVtKGlkeCwgeSwgbmFtZSwgdXJsKSB7XG4gICAgICAgIHZhciBpc0RpciA9ICF1cmw7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpZHg7XG4gICAgICAgIHRoaXMubm9kZS55ID0geTtcbiAgICAgICAgdGhpcy5ub2RlLnggPSBpc0RpciA/IDUwIDogMTAwO1xuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IG5hbWU7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLmJnLmVuYWJsZWQgPSAhaXNEaXI7XG4gICAgICAgIHRoaXMuYnRuLmludGVyYWN0YWJsZSA9ICFpc0RpcjtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2U2NDU4K2hmNVZBbklYb2NtdmhnZ3FDJywgJ0xpc3RWaWV3Q3RybCcpO1xuLy8gY2FzZXMvMDJfdWkvMDVfc2Nyb2xsVmlldy9MaXN0Vmlldy9MaXN0Vmlld0N0cmwuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpdGVtVGVtcGxhdGU6IHsgLy8gaXRlbSB0ZW1wbGF0ZSB0byBpbnN0YW50aWF0ZSBvdGhlciBpdGVtc1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBzY3JvbGxWaWV3OiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TY3JvbGxWaWV3XG4gICAgICAgIH0sXG4gICAgICAgIHNwYXduQ291bnQ6IDAsIC8vIGhvdyBtYW55IGl0ZW1zIHdlIGFjdHVhbGx5IHNwYXduXG4gICAgICAgIHRvdGFsQ291bnQ6IDAsIC8vIGhvdyBtYW55IGl0ZW1zIHdlIG5lZWQgZm9yIHRoZSB3aG9sZSBsaXN0XG4gICAgICAgIHNwYWNpbmc6IDAsIC8vIHNwYWNlIGJldHdlZW4gZWFjaCBpdGVtXG4gICAgICAgIGJ1ZmZlclpvbmU6IDAsIC8vIHdoZW4gaXRlbSBpcyBhd2F5IGZyb20gYnVmZmVyWm9uZSwgd2UgcmVsb2NhdGUgaXRcbiAgICAgICAgbGJsU2Nyb2xsRXZlbnQ6IGNjLkxhYmVsLFxuICAgICAgICBidG5BZGRJdGVtOiBjYy5CdXR0b24sXG4gICAgICAgIGJ0blJlbW92ZUl0ZW06IGNjLkJ1dHRvbixcbiAgICAgICAgYnRuSnVtcFRvUG9zaXRpb246IGNjLkJ1dHRvbixcbiAgICAgICAgbGJsSnVtcFBvc2l0aW9uOiBjYy5MYWJlbCxcbiAgICAgICAgbGJsVG90YWxJdGVtczogY2MuTGFiZWxcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50O1xuICAgICAgICB0aGlzLml0ZW1zID0gW107IC8vIGFycmF5IHRvIHN0b3JlIHNwYXduZWQgaXRlbXNcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICAgIHRoaXMudXBkYXRlVGltZXIgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZUludGVydmFsID0gMC4yO1xuICAgICAgICB0aGlzLmxhc3RDb250ZW50UG9zWSA9IDA7IC8vIHVzZSB0aGlzIHZhcmlhYmxlIHRvIGRldGVjdCBpZiB3ZSBhcmUgc2Nyb2xsaW5nIHVwIG9yIGRvd25cbiAgICB9LFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50LmhlaWdodCA9IHRoaXMudG90YWxDb3VudCAqICh0aGlzLml0ZW1UZW1wbGF0ZS5oZWlnaHQgKyB0aGlzLnNwYWNpbmcpICsgdGhpcy5zcGFjaW5nOyAvLyBnZXQgdG90YWwgY29udGVudCBoZWlnaHRcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNwYXduQ291bnQ7ICsraSkge1xuICAgICAgICAgICAgLy8gc3Bhd24gaXRlbXMsIHdlIG9ubHkgbmVlZCB0byBkbyB0aGlzIG9uY2VcbiAgICAgICAgICAgIHZhciBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtVGVtcGxhdGUpO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgaXRlbS5zZXRQb3NpdGlvbigwLCAtaXRlbS5oZWlnaHQgKiAoMC41ICsgaSkgLSB0aGlzLnNwYWNpbmcgKiAoaSArIDEpKTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KCdJdGVtJykudXBkYXRlSXRlbShpLCBpKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRQb3NpdGlvbkluVmlldzogZnVuY3Rpb24gZ2V0UG9zaXRpb25JblZpZXcoaXRlbSkge1xuICAgICAgICAvLyBnZXQgaXRlbSBwb3NpdGlvbiBpbiBzY3JvbGx2aWV3J3Mgbm9kZSBzcGFjZVxuICAgICAgICB2YXIgd29ybGRQb3MgPSBpdGVtLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoaXRlbS5wb3NpdGlvbik7XG4gICAgICAgIHZhciB2aWV3UG9zID0gdGhpcy5zY3JvbGxWaWV3Lm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xuICAgICAgICByZXR1cm4gdmlld1BvcztcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lciArPSBkdDtcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlVGltZXIgPCB0aGlzLnVwZGF0ZUludGVydmFsKSByZXR1cm47IC8vIHdlIGRvbid0IG5lZWQgdG8gZG8gdGhlIG1hdGggZXZlcnkgZnJhbWVcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lciA9IDA7XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICAgIHZhciBidWZmZXIgPSB0aGlzLmJ1ZmZlclpvbmU7XG4gICAgICAgIHZhciBpc0Rvd24gPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudC55IDwgdGhpcy5sYXN0Q29udGVudFBvc1k7IC8vIHNjcm9sbGluZyBkaXJlY3Rpb25cbiAgICAgICAgdmFyIG9mZnNldCA9ICh0aGlzLml0ZW1UZW1wbGF0ZS5oZWlnaHQgKyB0aGlzLnNwYWNpbmcpICogaXRlbXMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgdmlld1BvcyA9IHRoaXMuZ2V0UG9zaXRpb25JblZpZXcoaXRlbXNbaV0pO1xuICAgICAgICAgICAgaWYgKGlzRG93bikge1xuICAgICAgICAgICAgICAgIC8vIGlmIGF3YXkgZnJvbSBidWZmZXIgem9uZSBhbmQgbm90IHJlYWNoaW5nIHRvcCBvZiBjb250ZW50XG4gICAgICAgICAgICAgICAgaWYgKHZpZXdQb3MueSA8IC1idWZmZXIgJiYgaXRlbXNbaV0ueSArIG9mZnNldCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaV0uc2V0UG9zaXRpb25ZKGl0ZW1zW2ldLnkgKyBvZmZzZXQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldLmdldENvbXBvbmVudCgnSXRlbScpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbUlkID0gaXRlbS5pdGVtSUQgLSBpdGVtcy5sZW5ndGg7IC8vIHVwZGF0ZSBpdGVtIGlkXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udXBkYXRlSXRlbShpLCBpdGVtSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgYXdheSBmcm9tIGJ1ZmZlciB6b25lIGFuZCBub3QgcmVhY2hpbmcgYm90dG9tIG9mIGNvbnRlbnRcbiAgICAgICAgICAgICAgICBpZiAodmlld1Bvcy55ID4gYnVmZmVyICYmIGl0ZW1zW2ldLnkgLSBvZmZzZXQgPiAtdGhpcy5jb250ZW50LmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtc1tpXS5zZXRQb3NpdGlvblkoaXRlbXNbaV0ueSAtIG9mZnNldCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNbaV0uZ2V0Q29tcG9uZW50KCdJdGVtJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtSWQgPSBpdGVtLml0ZW1JRCArIGl0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS51cGRhdGVJdGVtKGksIGl0ZW1JZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHVwZGF0ZSBsYXN0Q29udGVudFBvc1lcbiAgICAgICAgdGhpcy5sYXN0Q29udGVudFBvc1kgPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudC55O1xuICAgICAgICB0aGlzLmxibFRvdGFsSXRlbXMudGV4dEtleSA9IFwiVG90YWwgSXRlbXM6IFwiICsgdGhpcy50b3RhbENvdW50O1xuICAgIH0sXG5cbiAgICBzY3JvbGxFdmVudDogZnVuY3Rpb24gc2Nyb2xsRXZlbnQoc2VuZGVyLCBldmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGhpcy5sYmxTY3JvbGxFdmVudC5zdHJpbmcgPSBcIlNjcm9sbCB0byBUb3BcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLmxibFNjcm9sbEV2ZW50LnN0cmluZyA9IFwiU2Nyb2xsIHRvIEJvdHRvbVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMubGJsU2Nyb2xsRXZlbnQuc3RyaW5nID0gXCJTY3JvbGwgdG8gTGVmdFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMubGJsU2Nyb2xsRXZlbnQuc3RyaW5nID0gXCJTY3JvbGwgdG8gUmlnaHRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICB0aGlzLmxibFNjcm9sbEV2ZW50LnN0cmluZyA9IFwiU2Nyb2xsaW5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgdGhpcy5sYmxTY3JvbGxFdmVudC5zdHJpbmcgPSBcIkJvdW5jZSBUb3BcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICB0aGlzLmxibFNjcm9sbEV2ZW50LnN0cmluZyA9IFwiQm91bmNlIGJvdHRvbVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIHRoaXMubGJsU2Nyb2xsRXZlbnQuc3RyaW5nID0gXCJCb3VuY2UgbGVmdFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIHRoaXMubGJsU2Nyb2xsRXZlbnQuc3RyaW5nID0gXCJCb3VuY2UgcmlnaHRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICB0aGlzLmxibFNjcm9sbEV2ZW50LnN0cmluZyA9IFwiQXV0byBzY3JvbGwgZW5kZWRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZGRJdGVtOiBmdW5jdGlvbiBhZGRJdGVtKCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQuaGVpZ2h0ID0gKHRoaXMudG90YWxDb3VudCArIDEpICogKHRoaXMuaXRlbVRlbXBsYXRlLmhlaWdodCArIHRoaXMuc3BhY2luZykgKyB0aGlzLnNwYWNpbmc7IC8vIGdldCB0b3RhbCBjb250ZW50IGhlaWdodFxuICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSB0aGlzLnRvdGFsQ291bnQgKyAxO1xuICAgIH0sXG5cbiAgICByZW1vdmVJdGVtOiBmdW5jdGlvbiByZW1vdmVJdGVtKCkge1xuICAgICAgICBpZiAodGhpcy50b3RhbENvdW50IC0gMSA8IDMwKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcImNhbid0IHJlbW92ZSBpdGVtIGxlc3MgdGhhbiAzMCFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRlbnQuaGVpZ2h0ID0gKHRoaXMudG90YWxDb3VudCAtIDEpICogKHRoaXMuaXRlbVRlbXBsYXRlLmhlaWdodCArIHRoaXMuc3BhY2luZykgKyB0aGlzLnNwYWNpbmc7IC8vIGdldCB0b3RhbCBjb250ZW50IGhlaWdodFxuICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSB0aGlzLnRvdGFsQ291bnQgLSAxO1xuICAgIH0sXG5cbiAgICBzY3JvbGxUb0ZpeGVkUG9zaXRpb246IGZ1bmN0aW9uIHNjcm9sbFRvRml4ZWRQb3NpdGlvbigpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvT2Zmc2V0KGNjLnAoMCwgNTAwKSwgMik7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc5ZTcwMkd1YkhwSys0dkFiM3l1Mk9XNScsICdMb2FkTW9kdWxlQ3RybCcpO1xuLy8gY2FzZXMvMDVfc2NyaXB0aW5nLzA4X21vZHVsZS9Mb2FkTW9kdWxlQ3RybC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbW9uc3RlclRlbXA6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIGJ0bl9jcmVhdGVNb25zdGVyOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5idG5fY3JlYXRlTW9uc3Rlci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuY3JlYXRlTW9zdGVyLmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICBjcmVhdGVNb3N0ZXI6IGZ1bmN0aW9uIGNyZWF0ZU1vc3RlcigpIHtcbiAgICAgICAgdmFyIG1vbnN0ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm1vbnN0ZXJUZW1wKTtcbiAgICAgICAgdmFyIE1vbnN0ZXIgPSByZXF1aXJlKFwiTW9uc3RlclwiKTtcbiAgICAgICAgdmFyIG1vbnN0ZXJDb21wID0gbW9uc3Rlci5nZXRDb21wb25lbnQoTW9uc3Rlcik7XG4gICAgICAgIHZhciBJbml0RGF0YSA9IHJlcXVpcmUoXCJJbml0RGF0YVwiKTtcbiAgICAgICAgbW9uc3RlckNvbXAuaW5pdEluZm8oSW5pdERhdGEubW9uc3RlckluZm8pO1xuICAgICAgICBtb25zdGVyLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgbW9uc3Rlci5zZXRQb3NpdGlvbihjYy5wKDAsIDApKTtcbiAgICAgICAgdGhpcy5idG5fY3JlYXRlTW9uc3Rlci5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdkN2MxOURHOE01RHA3dkhyUXU1YThnSycsICdMb2FkUmVzX2V4YW1wbGUnKTtcbi8vIGNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0xvYWRSZXMvTG9hZFJlc19leGFtcGxlLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjb250ZW50OiBjYy5Ob2RlXG4gICAgfSxcblxuICAgIGxvYWRTcHJpdGVGcmFtZTogZnVuY3Rpb24gbG9hZFNwcml0ZUZyYW1lKCkge1xuICAgICAgICB0aGlzLl9jbGVhclJlc291cmNlKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0ZXN0IGFzc2V0cy9hdGxhc1wiLCBjYy5TcHJpdGVBdGxhcywgZnVuY3Rpb24gKGVyciwgYXRsYXMpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgICAgIHNlbGYuY29udGVudC5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSBjYy52MigwLCAwKTtcbiAgICAgICAgICAgIHZhciBzcHJpdGUgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gYXRsYXMuZ2V0U3ByaXRlRnJhbWUoJ3NoZWVwX3J1bl8wJyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBsb2FkUHJlZmFiOiBmdW5jdGlvbiBsb2FkUHJlZmFiKCkge1xuICAgICAgICB0aGlzLl9jbGVhclJlc291cmNlKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJ0ZXN0IGFzc2V0cy9wcmVmYWJcIiwgZnVuY3Rpb24gKGVyciwgcHJlZmFiKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICBzZWxmLmNvbnRlbnQuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gY2MudjIoMCwgMCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBfY2xlYXJSZXNvdXJjZTogZnVuY3Rpb24gX2NsZWFyUmVzb3VyY2UoKSB7XG4gICAgICAgIHRoaXMuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbih0cnVlKTtcbiAgICAgICAgY2MubG9hZGVyLnJlbGVhc2VBbGwoKTtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzEwMmE5d1U0MFJKZDRTblFxUVF6UVQ5JywgJ0xvYWRpbmdCYXJDdHJsJyk7XG4vLyBjYXNlcy8wNV9zY3JpcHRpbmcvMTBfbG9hZGluZ0Jhci9Mb2FkaW5nQmFyQ3RybC5qc1xuXG52YXIgaTE4biA9IHJlcXVpcmUoJ2kxOG4nKTtcblxuLy9cbi8vIFRpcHPvvJpcbi8vIOaJvuWIsOeahOS4i+i9veWbvueJh+e9keWdgOi/h+mVv++8jOWPr+S7peW/veeVpeOAglxuLy8g5pys5pWZ56iL5Li76KaB6L+Y5piv5L2T546w5aaC5L2V5L2/55SoTG9hZGVy55qE6L+b5bqm5p2h44CCXG4vL1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcHJvZ3Jlc3NCYXI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJvZ3Jlc3NCYXJcbiAgICAgICAgfSxcblxuICAgICAgICBwcm9ncmVzc1RpcHM6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcblxuICAgICAgICBsYW9kQmc6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLl91cmxzID0gW1xuICAgICAgICAvLyBSYXcgQXNzZXQsIG5lZWQgZXh0ZW5zaW9uXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcImRpbmcud2F2XCIsXG4gICAgICAgICAgICB1cmw6IGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvYXVkaW8vZGluZy53YXZcIilcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQ6IFwiY2hlZXJpbmcud2F2XCIsXG4gICAgICAgICAgICB1cmw6IGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvYXVkaW8vY2hlZXJpbmcud2F2XCIpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGlkOiBcIm11c2ljX2xvZ28ubXAzXCIsXG4gICAgICAgICAgICB1cmw6IGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvYXVkaW8vbXVzaWNfbG9nby5tcDNcIilcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQ6IFwiYXVkaW8ubXAzXCIsXG4gICAgICAgICAgICB1cmw6IGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvdGVzdCBhc3NldHMvYXVkaW8ubXAzXCIpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGlkOiBcImZvbnQucG5nXCIsXG4gICAgICAgICAgICB1cmw6IGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvdGVzdCBhc3NldHMvZm9udC5wbmdcIilcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQ6IFwibWlrYWRvX291dGxpbmVfc2hhZG93LnBuZ1wiLFxuICAgICAgICAgICAgdXJsOiBjYy51cmwucmF3KFwicmVzb3VyY2VzL2ZvbnQvbWlrYWRvX291dGxpbmVfc2hhZG93LnBuZ1wiKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBpZDogXCJlbmxpZ3NoLWNoaW5lc2UucG5nXCIsXG4gICAgICAgICAgICB1cmw6IGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvZm9udC9lbmxpZ3NoLWNoaW5lc2UucG5nXCIpXG4gICAgICAgIH1dO1xuXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSAwO1xuICAgICAgICBjYy5sb2FkZXIucmVsZWFzZUFsbCgpO1xuICAgICAgICBjYy5sb2FkZXIubG9hZCh0aGlzLl91cmxzLCB0aGlzLl9wcm9ncmVzc0NhbGxiYWNrLmJpbmQodGhpcyksIHRoaXMuX2NvbXBsZXRlQ2FsbGJhY2suYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIF9wcm9ncmVzc0NhbGxiYWNrOiBmdW5jdGlvbiBfcHJvZ3Jlc3NDYWxsYmFjayhjb21wbGV0ZWRDb3VudCwgdG90YWxDb3VudCwgcmVzKSB7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBjb21wbGV0ZWRDb3VudCAvIHRvdGFsQ291bnQ7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByZXM7XG4gICAgICAgIHRoaXMuY29tcGxldGVkQ291bnQgPSBjb21wbGV0ZWRDb3VudDtcbiAgICAgICAgdGhpcy50b3RhbENvdW50ID0gdG90YWxDb3VudDtcbiAgICB9LFxuXG4gICAgX2NvbXBsZXRlQ2FsbGJhY2s6IGZ1bmN0aW9uIF9jb21wbGV0ZUNhbGxiYWNrKGVycm9yLCByZXMpIHt9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAoIXRoaXMucmVzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJvZ3Jlc3MgPSB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzO1xuICAgICAgICBpZiAocHJvZ3Jlc3MgPj0gMSkge1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1RpcHMuc3RyaW5nID0gaTE4bi50KFwiY2FzZXMvMDVfc2NyaXB0aW5nLzEwX2xvYWRpbmdCYXIvTG9hZGluZ0JhckN0cmwuanMuMVwiKTtcbiAgICAgICAgICAgIHRoaXMubGFvZEJnLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2dyZXNzIDwgdGhpcy5wcm9ncmVzcykge1xuICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gZHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgICB0aGlzLnByb2dyZXNzVGlwcy5zdHJpbmcgPSBpMThuLnQoXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTBfbG9hZGluZ0Jhci9Mb2FkaW5nQmFyQ3RybC5qcy4yXCIpICsgdGhpcy5yZXNvdXJjZS5pZCArIFwiIChcIiArIHRoaXMuY29tcGxldGVkQ291bnQgKyBcIi9cIiArIHRoaXMudG90YWxDb3VudCArIFwiKVwiO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMDQ1MjVweVlCbE4yNlNXYXdhVUYzZEEnLCAnTWVudScpO1xuLy8gc2NyaXB0cy9HbG9iYWwvTWVudS5qc1xuXG52YXIgaTE4biA9IHJlcXVpcmUoJ2kxOG4nKTtcbnZhciBTY2VuZUxpc3QgPSByZXF1aXJlKCdTY2VuZUxpc3QnKTtcblxudmFyIGVtcHR5RnVuYyA9IGZ1bmN0aW9uIGVtcHR5RnVuYyhldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufTtcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICByZWFkbWU6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgbWFzazoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBidG5JbmZvOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgYnRuQmFjazoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuc2hvd0RlYnVnRHJhdyA9IGZhbHNlO1xuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZVVybCA9ICdUZXN0TGlzdC5maXJlJztcbiAgICAgICAgdGhpcy5jb250ZW50UG9zID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc01lbnUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxvYWRJbnN0cnVjdGlvbih0aGlzLmN1cnJlbnRTY2VuZVVybCk7XG4gICAgfSxcblxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbiBvbkVuYWJsZSgpIHtcbiAgICAgICAgLy8gZm9yIHRoaXMgY29tcG9uZW50LCBvbkVuYWJsZSBzaG91bGQgYmUgY2FsbGVkIGFmdGVyXG4gICAgICAgIC8vIGVhY2ggdGltZSBuZXcgc2NlbmUgbGF1bmNoZWRcbiAgICAgICAgdmFyIHNjZW5lTGlzdE5vZGUgPSBjYy5maW5kKCdDYW52YXMvdGVzdExpc3Qvdmlld3BvcnQvbGlzdCcpO1xuICAgICAgICBpZiAoc2NlbmVMaXN0Tm9kZSkge1xuICAgICAgICAgICAgLy8gaW4gbWFpbiBzY2VuZVxuICAgICAgICAgICAgdGhpcy5zY2VuZUxpc3QgPSBzY2VuZUxpc3ROb2RlLmdldENvbXBvbmVudCgnU2NlbmVMaXN0Jyk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lTGlzdC5pbml0KHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaW4gb3RoZXIgc2NlbmUsIHRoaXMuc2NlbmVMaXN0IHNob3VsZCBiZSBkZXN0cm95ZWRcbiAgICAgICAgICAgIHRoaXMuc2NlbmVMaXN0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBiYWNrVG9MaXN0OiBmdW5jdGlvbiBiYWNrVG9MaXN0KCkge1xuICAgICAgICB0aGlzLnNob3dSZWFkbWUobnVsbCwgZmFsc2UpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZVVybCA9ICdUZXN0TGlzdC5maXJlJztcbiAgICAgICAgdGhpcy5pc01lbnUgPSB0cnVlO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ1Rlc3RMaXN0JywgdGhpcy5vbkxvYWRTY2VuZUZpbmlzaC5iaW5kKHRoaXMpKTtcbiAgICB9LFxuXG4gICAgbG9hZFNjZW5lOiBmdW5jdGlvbiBsb2FkU2NlbmUodXJsKSB7XG4gICAgICAgIHRoaXMuY29udGVudFBvcyA9IGNjLmZpbmQoJ0NhbnZhcy90ZXN0TGlzdCcpLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5nZXRDb250ZW50UG9zaXRpb24oKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmVVcmwgPSB1cmw7XG4gICAgICAgIHRoaXMuaXNNZW51ID0gZmFsc2U7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh1cmwsIHRoaXMub25Mb2FkU2NlbmVGaW5pc2guYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIG9uTG9hZFNjZW5lRmluaXNoOiBmdW5jdGlvbiBvbkxvYWRTY2VuZUZpbmlzaCgpIHtcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuY3VycmVudFNjZW5lVXJsO1xuICAgICAgICB0aGlzLmxvYWRJbnN0cnVjdGlvbih1cmwpO1xuICAgICAgICBpZiAodGhpcy5pc01lbnUgJiYgdGhpcy5jb250ZW50UG9zKSB7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvdGVzdExpc3QnKS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuc2V0Q29udGVudFBvc2l0aW9uKHRoaXMuY29udGVudFBvcyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbG9hZEluc3RydWN0aW9uOiBmdW5jdGlvbiBsb2FkSW5zdHJ1Y3Rpb24odXJsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHVybEFyciA9IHVybC5zcGxpdCgnLycpO1xuICAgICAgICB2YXIgZmlsZU5hbWUgPSB1cmxBcnJbdXJsQXJyLmxlbmd0aCAtIDFdLnJlcGxhY2UoJy5maXJlJywgJycpO1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygncmVhZG1lLycgKyBmaWxlTmFtZSwgZnVuY3Rpb24gKGVyciwgdHh0KSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc2VsZi50ZXh0LnN0cmluZyA9IGkxOG4udChcInNjcmlwdHMvR2xvYmFsL01lbnUuanMuMVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLnRleHQuc3RyaW5nID0gdHh0O1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc2hvd1JlYWRtZTogZnVuY3Rpb24gc2hvd1JlYWRtZShldmVudCwgYWN0aXZlKSB7XG4gICAgICAgIGlmIChhY3RpdmUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZWFkbWUuYWN0aXZlID0gIXRoaXMucmVhZG1lLmFjdGl2ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVhZG1lLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZWFkbWUuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLm1hc2sub24oJ3RvdWNoc3RhcnQnLCBlbXB0eUZ1bmMsIHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYXNrLm9mZigndG91Y2hzdGFydCcsIGVtcHR5RnVuYywgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxhYmVsVHh0ID0gdGhpcy5yZWFkbWUuYWN0aXZlID8gJ+WFs+mXreivtOaYjicgOiAn5p+l55yL6K+05piOJztcbiAgICAgICAgY2MuZmluZCgnbGFiZWwnLCB0aGlzLmJ0bkluZm8ubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS50ZXh0S2V5ID0gbGFiZWxUeHQ7XG5cbiAgICAgICAgLy8gZW46IGZpeCBDb2xsaWRlciBEZWJ1Z0RyYXcgYWx3YXlzIGRpc3BsYXllZCBvbiB0b3Agb2YgdGhlIHByb2JsZW0uXG4gICAgICAgIC8vIHpo77ya6Kej5YazIENvbGxpZGVyIERlYnVnRHJhdyDkuIDnm7TmmL7npLrlnKjmnIDkuIrlsYLnmoTpl67popjjgIJcbiAgICAgICAgdmFyIGVuYWJsZWREZWJ1Z0RyYXcgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERlYnVnRHJhdztcbiAgICAgICAgaWYgKHRoaXMucmVhZG1lLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5zaG93RGVidWdEcmF3ID0gZW5hYmxlZERlYnVnRHJhdztcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRGVidWdEcmF3ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERlYnVnRHJhdyA9IHRoaXMuc2hvd0RlYnVnRHJhdztcbiAgICAgICAgfVxuICAgICAgICAvLyBlbjogZml4IFZpZGVvIFBsYXllciBhbHdheXMgZGlzcGxheWVkIG9uIHRvcCBvZiB0aGUgcHJvYmxlbS5cbiAgICAgICAgLy8gemjvvJrkv67lpI0gVmlkZW8gUGxheWVyIOS4gOebtOaYvuekuuWcqOacgOS4iuWxgueahOmXrumimOOAglxuICAgICAgICB2YXIgdmlkZW9QbGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvVmlkZW9QbGF5ZXInKTtcbiAgICAgICAgaWYgKHZpZGVvUGxheWVyKSB7XG4gICAgICAgICAgICB2aWRlb1BsYXllci5hY3RpdmUgPSAhdGhpcy5yZWFkbWUuYWN0aXZlO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc4Y2I0ZG0yUUVwSjdwbmFTL2NqcnZnRicsICdNb25zdGVyUHJlZmFiJyk7XG4vLyBjYXNlcy8wNV9zY3JpcHRpbmcvMDJfcHJlZmFiL01vbnN0ZXJQcmVmYWIuanNcblxudmFyIEhlbHBlcnMgPSByZXF1aXJlKCdIZWxwZXJzJyk7XG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3ByaXRlTGlzdDoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5TcHJpdGVGcmFtZV1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIHJhbmRvbUlkeCA9IEhlbHBlcnMuZ2V0UmFuZG9tSW50KDAsIHRoaXMuc3ByaXRlTGlzdC5sZW5ndGgpO1xuICAgICAgICB2YXIgc3ByaXRlID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVMaXN0W3JhbmRvbUlkeF07XG4gICAgfVxuXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2UzMWIwK1BvRFJKWElESEZ4eTYwdkVzJywgJ01vbnN0ZXInKTtcbi8vIGNhc2VzLzA1X3NjcmlwdGluZy8wOF9tb2R1bGUvTW9uc3Rlci5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbmlja25hbWU6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgbHY6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgaHA6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgYXRrOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIGRlZmVuc2U6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgaW5pdEluZm86IGZ1bmN0aW9uIGluaXRJbmZvKGluZm8pIHtcbiAgICAgICAgdGhpcy5uaWNrbmFtZS5zdHJpbmcgPSBpbmZvLm5hbWU7XG4gICAgICAgIHRoaXMubHYuc3RyaW5nID0gaW5mby5sdjtcbiAgICAgICAgdGhpcy5ocC5zdHJpbmcgPSBpbmZvLmhwO1xuICAgICAgICB0aGlzLmF0ay5zdHJpbmcgPSBpbmZvLmF0aztcbiAgICAgICAgdGhpcy5kZWZlbnNlLnN0cmluZyA9IGluZm8uZGVmZW5zZTtcblxuICAgICAgICB2YXIgaW1hZ2UgPSB0aGlzLmltYWdlO1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhpbmZvLmltYWdlVXJsLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVycm9yLCBzcHJpdGVGcmFtZSkge1xuICAgICAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgICAgIGltYWdlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vY2MubG9hZGVyLmxvYWQoLCBmdW5jdGlvbiAoZXJyb3IsIHJlcykge1xuICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAvL30uYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZjc3MjJ6bEtQNUhvS01ZNVZ2V1BDT04nLCAnTW90aW9uU3RyZWFrQ3RybCcpO1xuLy8gY2FzZXMvbW90aW9uU3RyZWFrL01vdGlvblN0cmVhay9Nb3Rpb25TdHJlYWtDdHJsLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBtb3Rpb25TdHJlYWs6IGNjLk1vdGlvblN0cmVhayxcbiAgICAgICAgbmV3VGV4dHVyZTogY2MuVGV4dHVyZTJELFxuICAgICAgICBjb250ZW50OiBjYy5Ob2RlLFxuICAgICAgICB0aXBzOiBjYy5Ob2RlXG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICBpZiAoY2MuX3JlbmRlclR5cGUgIT09IGNjLmdhbWUuUkVOREVSX1RZUEVfV0VCR0wpIHtcbiAgICAgICAgICAgIHRoaXMudGlwcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NoYW5nZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9sZFRleHR1cmUgPSB0aGlzLm1vdGlvblN0cmVhay50ZXh0dXJlO1xuICAgIH0sXG5cbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5fY2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRNb3Rpb25TdHJlYWsoMiwgMywgMjAsIHRoaXMubmV3VGV4dHVyZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldE1vdGlvblN0cmVhaygwLjUsIDEsIDMwLCB0aGlzLm9sZFRleHR1cmUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NoYW5nZWQgPSAhdGhpcy5fY2hhbmdlZDtcbiAgICB9LFxuXG4gICAgc2V0TW90aW9uU3RyZWFrOiBmdW5jdGlvbiBzZXRNb3Rpb25TdHJlYWsoZmFkZVRpbWUsIG1pblNlZywgc3Ryb2tlLCB0ZXh0dXJlKSB7XG4gICAgICAgIHRoaXMubW90aW9uU3RyZWFrLmZhZGVUaW1lID0gZmFkZVRpbWU7XG4gICAgICAgIHRoaXMubW90aW9uU3RyZWFrLm1pblNlZyA9IG1pblNlZztcbiAgICAgICAgdGhpcy5tb3Rpb25TdHJlYWsuc3Ryb2tlID0gc3Ryb2tlO1xuICAgICAgICB0aGlzLm1vdGlvblN0cmVhay50ZXh0dXJlID0gdGV4dHVyZTtcbiAgICB9XG5cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNmRmMGZ0MWp5NUpnNGNRMDM5anQ4akMnLCAnTW91c2VFdmVudCcpO1xuLy8gY2FzZXMvMDVfc2NyaXB0aW5nLzAzX2V2ZW50cy9Nb3VzZUV2ZW50LmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgbW92ZTogZnVuY3Rpb24gbW92ZShldmVudCkge1xuICAgICAgICB0aGlzLm5vZGUueCArPSBldmVudC5nZXREZWx0YVgoKTtcbiAgICAgICAgdGhpcy5ub2RlLnkgKz0gZXZlbnQuZ2V0RGVsdGFZKCk7XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnNjcm9sbCA9IDA7XG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gNTA7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9NT1ZFLCB0aGlzLm1vdmUsIHRoaXMpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDE2MDtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSA1MDtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTU9WRSwgdGhpcy5tb3ZlLCB0aGlzKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9VUCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSA1MDtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTU9WRSwgdGhpcy5tb3ZlLCB0aGlzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfV0hFRUwsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGwgKz0gZXZlbnQuZ2V0U2Nyb2xsWSgpO1xuICAgICAgICAgICAgdmFyIGggPSB0aGlzLm5vZGUuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5zY3JvbGwgPSBjYy5jbGFtcGYodGhpcy5zY3JvbGwsIC0yICogaCwgMC43ICogaCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxIC0gdGhpcy5zY3JvbGwgLyBoO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2RkZDRlYUx4VlpGbFpiemFQYXFkTDlEJywgJ01vdmVBY3Rpb24nKTtcbi8vIGNhc2VzLzAzX2dhbWVwbGF5LzAyX2FjdGlvbnMvTW92ZUFjdGlvbi5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbW92ZVRvOiBjYy5Ob2RlLFxuICAgICAgICBtb3ZlQnk6IGNjLk5vZGVcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBtb3ZlVG8gPSBjYy5tb3ZlVG8oMC41LCBjYy5wKDAsIDApKTtcbiAgICAgICAgdmFyIG1vdmVCeSA9IGNjLm1vdmVCeSgwLjUsIGNjLnAoMTAwLCAxMDApKTtcbiAgICAgICAgdGhpcy5tb3ZlVG8ucnVuQWN0aW9uKG1vdmVUbyk7XG4gICAgICAgIHRoaXMubW92ZUJ5LnJ1bkFjdGlvbihtb3ZlQnkpO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMWRjOTVkcTNtVkk2NThicjBsMlpiaTAnLCAnTW92ZUFuaW1hdGlvbkN0cmwnKTtcbi8vIGNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9Nb3ZlQW5pbWF0aW9uL01vdmVBbmltYXRpb25DdHJsLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQW5pbWF0aW9uXG4gICAgICAgIH0sXG5cbiAgICAgICAgbm9kZXM6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBbXSxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5vblJlZ2lzdGVyZWRFdmVudCgpO1xuICAgIH0sXG5cbiAgICBvblJlZ2lzdGVyZWRFdmVudDogZnVuY3Rpb24gb25SZWdpc3RlcmVkRXZlbnQoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ub2Rlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5ub2Rlc1tpXS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25QbGF5QW5pbWF0aW9uLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uUGxheUFuaW1hdGlvbjogZnVuY3Rpb24gb25QbGF5QW5pbWF0aW9uKGV2ZW50KSB7XG4gICAgICAgIHRoaXMudGFyZ2V0LnN0b3AoKTtcbiAgICAgICAgc3dpdGNoIChldmVudC50YXJnZXQuX25hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJMaW5lYXJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5wbGF5KFwibGluZWFyXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkNhc2VJbl9FeHBvXCI6XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucGxheShcImNhc2VJbi1leHBvXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkNhc2VPdXRfRXhwb1wiOlxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnBsYXkoXCJjYXNlT3V0LWV4cG9cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQ2FzZUluT3V0X0V4cG9cIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5wbGF5KFwiY2FzZUluT3V0LWV4cG9cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQmFja19Gb3J3YXJkXCI6XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucGxheShcImJhY2stZm9yd2FyZFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc2YjhiYUVwTHV4QUNJTU5sSUwydncyVycsICdNeUN1c3RvbUNvbXBvbmVudCcpO1xuLy8gY2FzZXMvMDVfc2NyaXB0aW5nLzAxX3Byb3BlcnRpZXMvTXlDdXN0b21Db21wb25lbnQuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHBvd2VyOiAxMFxuICAgIH0sXG5cbiAgICBnZXRQb3dlcjogZnVuY3Rpb24gZ2V0UG93ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvd2VyO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNTI0NWRJRUJvRkZCNFJkWHdvSlFNMkcnLCAnTmF0aXZlQ2FsbEN0cmwnKTtcbi8vIGNhc2VzL25hdGl2ZV9jYWxsL05hdGl2ZV9DYWxsL05hdGl2ZUNhbGxDdHJsLmpzXG5cbnZhciBpMThuID0gcmVxdWlyZSgnaTE4bicpO1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgICAgIHRpcHM6IGNjLkxhYmVsLFxuICAgICAgICBidXR0b246IGNjLk5vZGVcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIGlmICghKGNjLnN5cy5pc01vYmlsZSAmJiBjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLkFORFJPSUQpIHx8IGNjLnJ1bnRpbWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpcHMudGV4dEtleSA9IGkxOG4udChcImNhc2VzL25hdGl2ZV9jYWxsL25hdGl2ZV9jYWxsLmZpcmUuMlwiKTtcbiAgICAgICAgdGhpcy5idXR0b24uYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIjtcbiAgICAgICAgdmFyIG1ldGhvZE5hbWUgPSBcInNob3dBbGVydERpYWxvZ1wiO1xuICAgICAgICB2YXIgbWV0aG9kU2lnbmF0dXJlID0gXCIoTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KVZcIjtcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChjbGFzc05hbWUsIG1ldGhvZE5hbWUsIG1ldGhvZFNpZ25hdHVyZSwgXCJUaXRsZVwiLCBcIk5hdGl2ZSBDYWxsIFRlc3RcIik7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcxMDkwOGgxYUhSUFBvd3hRUXpVQ1ZNRCcsICdOZXR3b3JrQ3RybCcpO1xuLy8gY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanNcblxudmFyIGkxOG4gPSByZXF1aXJlKCdpMThuJyk7XG5cbmlmICghd2luZG93LmlvKSB7XG4gICAgY2MuZXJyb3IoJ1lvdSBzaG91bGQgaW1wb3J0IHRoZSBzb2NrZXQuaW8uanMgYXMgYSBwbHVnaW4hJyk7XG59XG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgeGhyOiBjYy5MYWJlbCxcbiAgICAgICAgeGhyQUI6IGNjLkxhYmVsLFxuICAgICAgICB3ZWJzb2NrZXQ6IGNjLkxhYmVsLFxuICAgICAgICBzb2NrZXRJTzogY2MuTGFiZWwsXG5cbiAgICAgICAgeGhyUmVzcDogY2MuTGFiZWwsXG4gICAgICAgIHhockFCUmVzcDogY2MuTGFiZWwsXG4gICAgICAgIHdlYnNvY2tldFJlc3A6IGNjLkxhYmVsLFxuICAgICAgICBzb2NrZXRJT1Jlc3A6IGNjLkxhYmVsXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLl93c2lTZW5kQmluYXJ5ID0gbnVsbDtcblxuICAgICAgICB0aGlzLnhoclJlc3Auc3RyaW5nID0gaTE4bi50KFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuMVwiKTtcbiAgICAgICAgdGhpcy54aHJBQlJlc3Auc3RyaW5nID0gaTE4bi50KFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuMlwiKTtcbiAgICAgICAgdGhpcy53ZWJzb2NrZXRSZXNwLnN0cmluZyA9IGkxOG4udChcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL05ldHdvcmtDdHJsLmpzLjNcIik7XG4gICAgICAgIHRoaXMuc29ja2V0SU9SZXNwLnN0cmluZyA9IGkxOG4udChcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL05ldHdvcmtDdHJsLmpzLjRcIik7XG5cbiAgICAgICAgdGhpcy5zZW5kWEhSKCk7XG4gICAgICAgIHRoaXMuc2VuZFhIUkFCKCk7XG4gICAgICAgIHRoaXMucHJlcGFyZVdlYlNvY2tldCgpO1xuICAgICAgICB0aGlzLnNlbmRTb2NrZXRJTygpO1xuICAgIH0sXG5cbiAgICBzZW5kWEhSOiBmdW5jdGlvbiBzZW5kWEhSKCkge1xuICAgICAgICB2YXIgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHRoaXMuc3RyZWFtWEhSRXZlbnRzVG9MYWJlbCh4aHIsIHRoaXMueGhyLCB0aGlzLnhoclJlc3AsICdHRVQnKTtcblxuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vaHR0cGJpbi5vcmcvZ2V0P3Nob3dfZW52PTFcIiwgdHJ1ZSk7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0LUVuY29kaW5nXCIsIFwiZ3ppcCxkZWZsYXRlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm90ZTogSW4gSW50ZXJuZXQgRXhwbG9yZXIsIHRoZSB0aW1lb3V0IHByb3BlcnR5IG1heSBiZSBzZXQgb25seSBhZnRlciBjYWxsaW5nIHRoZSBvcGVuKClcbiAgICAgICAgLy8gbWV0aG9kIGFuZCBiZWZvcmUgY2FsbGluZyB0aGUgc2VuZCgpIG1ldGhvZC5cbiAgICAgICAgeGhyLnRpbWVvdXQgPSA1MDAwOyAvLyA1IHNlY29uZHMgZm9yIHRpbWVvdXRcblxuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH0sXG5cbiAgICBzZW5kWEhSQUI6IGZ1bmN0aW9uIHNlbmRYSFJBQigpIHtcbiAgICAgICAgdmFyIHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB0aGlzLnN0cmVhbVhIUkV2ZW50c1RvTGFiZWwoeGhyLCB0aGlzLnhockFCLCB0aGlzLnhockFCUmVzcCwgXCJQT1NUXCIpO1xuXG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHBzOi8vaHR0cGJpbi5vcmcvcG9zdFwiKTtcbiAgICAgICAgLy9zZXQgQ29udGVudC10eXBlIFwidGV4dC9wbGFpblwiIHRvIHBvc3QgQXJyYXlCdWZmZXIgb3IgQXJyYXlCdWZmZXJWaWV3XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9wbGFpblwiKTtcbiAgICAgICAgLy8gVWludDhBcnJheSBpcyBhbiBBcnJheUJ1ZmZlclZpZXdcbiAgICAgICAgeGhyLnNlbmQobmV3IFVpbnQ4QXJyYXkoWzEsIDIsIDMsIDQsIDVdKSk7XG4gICAgfSxcblxuICAgIHByZXBhcmVXZWJTb2NrZXQ6IGZ1bmN0aW9uIHByZXBhcmVXZWJTb2NrZXQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHdlYnNvY2tldExhYmVsID0gdGhpcy53ZWJzb2NrZXQ7XG4gICAgICAgIHZhciByZXNwTGFiZWwgPSB0aGlzLndlYnNvY2tldFJlc3A7XG4gICAgICAgIHRoaXMuX3dzaVNlbmRCaW5hcnkgPSBuZXcgV2ViU29ja2V0KFwid3M6Ly9lY2hvLndlYnNvY2tldC5vcmdcIik7XG4gICAgICAgIHRoaXMuX3dzaVNlbmRCaW5hcnkuYmluYXJ5VHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAgICAgICAgdGhpcy5fd3NpU2VuZEJpbmFyeS5vbm9wZW4gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICB3ZWJzb2NrZXRMYWJlbC5zdHJpbmcgPSBpMThuLnQoXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9OZXR3b3JrQ3RybC5qcy41XCIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3dzaVNlbmRCaW5hcnkub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgdmFyIGJpbmFyeSA9IG5ldyBVaW50MTZBcnJheShldnQuZGF0YSk7XG4gICAgICAgICAgICB2YXIgYmluYXJ5U3RyID0gJ3Jlc3BvbnNlIGJpbiBtc2c6ICc7XG5cbiAgICAgICAgICAgIHZhciBzdHIgPSAnJztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmluYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJpbmFyeVtpXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCJcXCdcXFxcMFxcJ1wiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoZXhDaGFyID0gJzB4JyArIGJpbmFyeVtpXS50b1N0cmluZygnMTYnKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoZXhDaGFyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJpbmFyeVN0ciArPSBzdHI7XG4gICAgICAgICAgICByZXNwTGFiZWwuc3RyaW5nID0gYmluYXJ5U3RyO1xuICAgICAgICAgICAgd2Vic29ja2V0TGFiZWwuc3RyaW5nID0gaTE4bi50KFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuNlwiKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl93c2lTZW5kQmluYXJ5Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICB3ZWJzb2NrZXRMYWJlbC5zdHJpbmcgPSBpMThuLnQoXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9OZXR3b3JrQ3RybC5qcy43XCIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3dzaVNlbmRCaW5hcnkub25jbG9zZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgIHdlYnNvY2tldExhYmVsLnN0cmluZyA9IGkxOG4udChcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL05ldHdvcmtDdHJsLmpzLjhcIik7XG4gICAgICAgICAgICAvLyBBZnRlciBjbG9zZSwgaXQncyBubyBsb25nZXIgcG9zc2libGUgdG8gdXNlIGl0IGFnYWluLFxuICAgICAgICAgICAgLy8gaWYgeW91IHdhbnQgdG8gc2VuZCBhbm90aGVyIHJlcXVlc3QsIHlvdSBuZWVkIHRvIGNyZWF0ZSBhIG5ldyB3ZWJzb2NrZXQgaW5zdGFuY2VcbiAgICAgICAgICAgIHNlbGYuX3dzaVNlbmRCaW5hcnkgPSBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuc2VuZFdlYlNvY2tldEJpbmFyeSwgMSk7XG4gICAgfSxcblxuICAgIHNlbmRXZWJTb2NrZXRCaW5hcnk6IGZ1bmN0aW9uIHNlbmRXZWJTb2NrZXRCaW5hcnkoc2VuZGVyKSB7XG4gICAgICAgIGlmICh0aGlzLl93c2lTZW5kQmluYXJ5LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB7XG4gICAgICAgICAgICB0aGlzLndlYnNvY2tldC5zdHJpbmcgPSBpMThuLnQoXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9OZXR3b3JrQ3RybC5qcy45XCIpO1xuICAgICAgICAgICAgdmFyIGJ1ZiA9IFwiSGVsbG8gV2ViU29ja2V05Lit5paHLFxcMCBJJ21cXDAgYVxcMCBiaW5hcnlcXDAgbWVzc2FnZVxcMC5cIjtcblxuICAgICAgICAgICAgdmFyIGFyckRhdGEgPSBuZXcgVWludDE2QXJyYXkoYnVmLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1Zi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFyckRhdGFbaV0gPSBidWYuY2hhckNvZGVBdChpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fd3NpU2VuZEJpbmFyeS5zZW5kKGFyckRhdGEuYnVmZmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB3YXJuaW5nU3RyID0gXCJzZW5kIGJpbmFyeSB3ZWJzb2NrZXQgaW5zdGFuY2Ugd2Fzbid0IHJlYWR5Li4uXCI7XG4gICAgICAgICAgICB0aGlzLndlYnNvY2tldC5zdHJpbmcgPSBpMThuLnQoXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9OZXR3b3JrQ3RybC5qcy4xMFwiKSArIHdhcm5pbmdTdHI7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kV2ViU29ja2V0QmluYXJ5KCk7XG4gICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBTb2NrZXQgSU8gY2FsbGJhY2tzIGZvciB0ZXN0aW5nXG4gICAgdGVzdGV2ZW50OiBmdW5jdGlvbiB0ZXN0ZXZlbnQoZGF0YSkge1xuICAgICAgICB2YXIgbXNnID0gdGhpcy50YWcgKyBcIiBzYXlzICd0ZXN0ZXZlbnQnIHdpdGggZGF0YTogXCIgKyBkYXRhO1xuICAgICAgICB0aGlzLnNvY2tldElPLnN0cmluZyA9IGkxOG4udChcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL05ldHdvcmtDdHJsLmpzLjExXCIpICsgbXNnO1xuICAgIH0sXG5cbiAgICBtZXNzYWdlOiBmdW5jdGlvbiBtZXNzYWdlKGRhdGEpIHtcbiAgICAgICAgdmFyIG1zZyA9IHRoaXMudGFnICsgXCIgcmVjZWl2ZWQgbWVzc2FnZTogXCIgKyBkYXRhO1xuICAgICAgICB0aGlzLnNvY2tldElPUmVzcC5zdHJpbmcgPSBtc2c7XG4gICAgfSxcblxuICAgIGRpc2Nvbm5lY3Rpb246IGZ1bmN0aW9uIGRpc2Nvbm5lY3Rpb24oKSB7XG4gICAgICAgIHZhciBtc2cgPSB0aGlzLnRhZyArIFwiIGRpc2Nvbm5lY3RlZCFcIjtcbiAgICAgICAgdGhpcy5zb2NrZXRJTy5zdHJpbmcgPSBpMThuLnQoXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9OZXR3b3JrQ3RybC5qcy4xMlwiKSArIG1zZztcbiAgICB9LFxuXG4gICAgc2VuZFNvY2tldElPOiBmdW5jdGlvbiBzZW5kU29ja2V0SU8oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgLy9jcmVhdGUgYSBjbGllbnQgYnkgdXNpbmcgdGhpcyBzdGF0aWMgbWV0aG9kLCB1cmwgZG9lcyBub3QgbmVlZCB0byBjb250YWluIHRoZSBwcm90b2NvbFxuICAgICAgICB2YXIgc2lvY2xpZW50ID0gaW8uY29ubmVjdChcIndzOi8vdG9vbHMuaXRoYXJib3JzLmNvbTo0MDAwXCIsIHsgXCJmb3JjZSBuZXcgY29ubmVjdGlvblwiOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLl9zaW9DbGllbnQgPSBzaW9jbGllbnQ7XG5cbiAgICAgICAgLy9pZiB5b3UgbmVlZCB0byB0cmFjayBtdWx0aXBsZSBzb2NrZXRzIGl0IGlzIGJlc3QgdG8gc3RvcmUgdGhlbSB3aXRoIHRhZ3MgaW4geW91ciBvd24gYXJyYXkgZm9yIG5vd1xuICAgICAgICB0aGlzLnRhZyA9IHNpb2NsaWVudC50YWcgPSBcIlRlc3QgQ2xpZW50XCI7XG5cbiAgICAgICAgLy9yZWdpc3RlciBldmVudCBjYWxsYmFja3NcbiAgICAgICAgLy90aGlzIGlzIGFuIGV4YW1wbGUgb2YgYSBoYW5kbGVyIGRlY2xhcmVkIGlubGluZVxuICAgICAgICBzaW9jbGllbnQub24oXCJjb25uZWN0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtc2cgPSBzaW9jbGllbnQudGFnICsgXCIgQ29ubmVjdGVkIVwiO1xuICAgICAgICAgICAgc2VsZi5zb2NrZXRJTy5zdHJpbmcgPSBpMThuLnQoXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9OZXR3b3JrQ3RybC5qcy4xM1wiKSArIG1zZztcblxuICAgICAgICAgICAgLy8gU2VuZCBtZXNzYWdlIGFmdGVyIGNvbm5lY3Rpb25cbiAgICAgICAgICAgIHNlbGYuX3Npb0NsaWVudC5zZW5kKFwiSGVsbG8gU29ja2V0LklPIVwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9leGFtcGxlIG9mIGEgaGFuZGxlciB0aGF0IGlzIHNoYXJlZCBiZXR3ZWVuIG11bHRpcGxlIGNsaWVudHNcbiAgICAgICAgc2lvY2xpZW50Lm9uKFwibWVzc2FnZVwiLCB0aGlzLm1lc3NhZ2UuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgc2lvY2xpZW50Lm9uKFwiZWNob3Rlc3RcIiwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGNjLmxvZyhcImVjaG90ZXN0ICdvbicgY2FsbGJhY2sgZmlyZWQhXCIpO1xuICAgICAgICAgICAgdmFyIG1zZyA9IHRoaXMudGFnICsgXCIgc2F5cyAnZWNob3Rlc3QnIHdpdGggZGF0YTogXCIgKyBkYXRhO1xuICAgICAgICAgICAgc2VsZi5zb2NrZXRJTy5zdHJpbmcgPSBpMThuLnQoXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9OZXR3b3JrQ3RybC5qcy4xNFwiKSArIG1zZztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2lvY2xpZW50Lm9uKFwidGVzdGV2ZW50XCIsIHRoaXMudGVzdGV2ZW50LmJpbmQodGhpcykpO1xuXG4gICAgICAgIHNpb2NsaWVudC5vbihcImRpc2Nvbm5lY3RcIiwgdGhpcy5kaXNjb25uZWN0aW9uLmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICBzdHJlYW1YSFJFdmVudHNUb0xhYmVsOiBmdW5jdGlvbiBzdHJlYW1YSFJFdmVudHNUb0xhYmVsKHhociwgZXZlbnRMYWJlbCwgbGFiZWwsIG1ldGhvZCwgcmVzcG9uc2VIYW5kbGVyKSB7XG4gICAgICAgIHZhciBoYW5kbGVyID0gcmVzcG9uc2VIYW5kbGVyIHx8IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZCArIFwiIFJlc3BvbnNlICgzMCBjaGFycyk6IFwiICsgcmVzcG9uc2Uuc3Vic3RyaW5nKDAsIDMwKSArIFwiLi4uXCI7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGV2ZW50TGFiZWxPcmlnaW4gPSBldmVudExhYmVsLnN0cmluZztcbiAgICAgICAgLy8gU2ltcGxlIGV2ZW50c1xuICAgICAgICBbJ2xvYWRzdGFydCcsICdhYm9ydCcsICdlcnJvcicsICdsb2FkJywgJ2xvYWRlbmQnLCAndGltZW91dCddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50bmFtZSkge1xuICAgICAgICAgICAgeGhyW1wib25cIiArIGV2ZW50bmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRMYWJlbC5zdHJpbmcgPSBldmVudExhYmVsT3JpZ2luICsgXCJcXG5FdmVudCA6IFwiICsgZXZlbnRuYW1lO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU3BlY2lhbCBldmVudFxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBoYW5kbGVyKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYzIxNDlHLzVqMUpJS2QyR0d6UWZTNzInLCAnTm9kZUdlbmVyYXRvcicpO1xuLy8gY2FzZXMvMDVfc2NyaXB0aW5nLzEyX3Bvb2wvTm9kZUdlbmVyYXRvci5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHByZWZhYjogY2MuUHJlZmFiLFxuICAgICAgICByZWdpb25PcmlnaW46IGNjLlZlYzIsXG4gICAgICAgIHJlZ2lvblNpemU6IGNjLlNpemVcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5nZW5lcmF0ZU5vZGUsIDIpO1xuICAgICAgICB0aGlzLl9wb29sID0gbmV3IGNjLk5vZGVQb29sKCdQb29sSGFuZGxlcicpO1xuICAgIH0sXG5cbiAgICBnZW5lcmF0ZU5vZGU6IGZ1bmN0aW9uIGdlbmVyYXRlTm9kZSgpIHtcbiAgICAgICAgdmFyIG1vbnN0ZXIgPSB0aGlzLl9wb29sLmdldCgpO1xuICAgICAgICBpZiAoIW1vbnN0ZXIpIHtcbiAgICAgICAgICAgIG1vbnN0ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYik7XG5cbiAgICAgICAgICAgIC8vIEFkZCBwb29sIGhhbmRsZXIgY29tcG9uZW50IHdoaWNoIHdpbGwgY29udHJvbCB0aGUgdG91Y2ggZXZlbnRcbiAgICAgICAgICAgIG1vbnN0ZXIuYWRkQ29tcG9uZW50KCdQb29sSGFuZGxlcicpO1xuICAgICAgICB9XG4gICAgICAgIG1vbnN0ZXIueCA9IHRoaXMucmVnaW9uT3JpZ2luLnggKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnJlZ2lvblNpemUud2lkdGgpO1xuICAgICAgICBtb25zdGVyLnkgPSB0aGlzLnJlZ2lvbk9yaWdpbi55ICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5yZWdpb25TaXplLmhlaWdodCk7XG5cbiAgICAgICAgdmFyIGFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xuICAgICAgICB2YXIgZHggPSA1MDAgKiBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIHZhciBkeSA9IDUwMCAqIE1hdGguc2luKGFuZ2xlKTtcblxuICAgICAgICBtb25zdGVyLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlQnkoNSwgZHgsIGR5KSwgY2MuY2FsbEZ1bmModGhpcy5yZW1vdmVOb2RlLCB0aGlzLCBtb25zdGVyKSkpO1xuXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChtb25zdGVyKTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlTm9kZTogZnVuY3Rpb24gcmVtb3ZlTm9kZShzZW5kZXIsIG1vbnN0ZXIpIHtcbiAgICAgICAgdGhpcy5fcG9vbC5wdXQobW9uc3Rlcik7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdiZDRhMiticml0QWxvZjBVZE1DVkI4YycsICdOb2RlR3JvdXBDb250cm9sJyk7XG4vLyBjYXNlcy8wNV9zY3JpcHRpbmcvMDFfcHJvcGVydGllcy9Ob2RlR3JvdXBDb250cm9sLmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbm9kZUxpc3Q6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuTm9kZV1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmluZXJ2YWxJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYudG9nZ2xlTm9kZXNWaXNpYmlsaXR5KCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH0sXG5cbiAgICBvbkRlc3Ryb3k6IGZ1bmN0aW9uIG9uRGVzdHJveSgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmluZXJ2YWxJZCk7XG4gICAgfSxcblxuICAgIHRvZ2dsZU5vZGVzVmlzaWJpbGl0eTogZnVuY3Rpb24gdG9nZ2xlTm9kZXNWaXNpYmlsaXR5KCkge1xuICAgICAgICBjb25zb2xlLmxvZygndG9nZ2xlIHZpc2liaWxpdHknKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm5vZGVMaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVMaXN0W2ldLmFjdGl2ZSA9ICF0aGlzLm5vZGVMaXN0W2ldLmFjdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZDQxMTRQZ3liaEozTC9rME45VGtDWkknLCAnTm9uU2VyaWFsaXplZFByb3BlcnRpZXMnKTtcbi8vIGNhc2VzLzA1X3NjcmlwdGluZy8wMV9wcm9wZXJ0aWVzL05vblNlcmlhbGl6ZWRQcm9wZXJ0aWVzLmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbXlTZXJpYWxpemVkVGV4dDogJycsXG4gICAgICAgIG15Tm9uU2VyaWFsaXplZFRleHQ6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogJycsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBsYWJlbDE6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsMjoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5teU5vblNlcmlhbGl6ZWRUZXh0ID0gJ0NhbiBvbmx5IHNldCB2YWx1ZSBpbiBzY3JpcHQnO1xuICAgICAgICB0aGlzLmxhYmVsMS5zdHJpbmcgPSB0aGlzLm15U2VyaWFsaXplZFRleHQ7XG4gICAgICAgIHRoaXMubGFiZWwyLnN0cmluZyA9IHRoaXMubXlOb25TZXJpYWxpemVkVGV4dDtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzUzZmMxd013UlJQT1lDQjhrbzM2ZHJEJywgJ09uTXVsdGlUb3VjaEN0cmwnKTtcbi8vIGNhc2VzLzAzX2dhbWVwbGF5LzAxX3BsYXllcl9jb250cm9sL09uTXVsdGlUb3VjaC9Pbk11bHRpVG91Y2hDdHJsLmpzXG5cbnZhciBpMThuID0gcmVxdWlyZSgnaTE4bicpO1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgY2FudmFzOiBjYy5Ob2RlLFxuICAgICAgICB0YXJnZXQ6IGNjLk5vZGUsXG4gICAgICAgIHRpcHM6IGNjLkxhYmVsXG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICAvLyB6aDror6XmlYjmnpzlj6rog73lnKjnp7vliqjlubPlj7DkuIrmnInmlYjvvIFcbiAgICAgICAgLy8gZW46VGhlIHNhbXBsZSBjYW4gb25seSBiZSBlZmZlY3RpdmUgb24gbW9iaWxlIHBsYXRmb3JtcyFcbiAgICAgICAgaWYgKCFjYy5zeXMuaXNNb2JpbGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpcHMudGV4dEtleSA9IGkxOG4udChcImNhc2VzLzAzX2dhbWVwbGF5LzAxX3BsYXllcl9jb250cm9sL09uL09uTXVsdGlUb3VjaElucHV0LmZpcmUuMjFcIik7XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgcGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcbiAgICAgICAgc2VsZi5jYW52YXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgdG91Y2hlcyA9IGV2ZW50LmdldFRvdWNoZXMoKTtcbiAgICAgICAgICAgIGlmICh0b3VjaGVzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRvdWNoMSA9IHRvdWNoZXNbMF0sXG4gICAgICAgICAgICAgICAgICAgIHRvdWNoMiA9IHRvdWNoZXNbMV07XG4gICAgICAgICAgICAgICAgdmFyIGRlbHRhMSA9IHRvdWNoMS5nZXREZWx0YSgpLFxuICAgICAgICAgICAgICAgICAgICBkZWx0YTIgPSB0b3VjaDIuZ2V0RGVsdGEoKTtcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hQb2ludDEgPSBwYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2gxLmdldExvY2F0aW9uKCkpO1xuICAgICAgICAgICAgICAgIHZhciB0b3VjaFBvaW50MiA9IHBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaDIuZ2V0TG9jYXRpb24oKSk7XG4gICAgICAgICAgICAgICAgLy/nvKnmlL5cbiAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBjYy5wU3ViKHRvdWNoUG9pbnQxLCB0b3VjaFBvaW50Mik7XG4gICAgICAgICAgICAgICAgdmFyIGRlbHRhID0gY2MucFN1YihkZWx0YTEsIGRlbHRhMik7XG4gICAgICAgICAgICAgICAgdmFyIHNjYWxlID0gMTtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlzdGFuY2UueCkgPiBNYXRoLmFicyhkaXN0YW5jZS55KSkge1xuICAgICAgICAgICAgICAgICAgICBzY2FsZSA9IChkaXN0YW5jZS54ICsgZGVsdGEueCkgLyBkaXN0YW5jZS54ICogc2VsZi50YXJnZXQuc2NhbGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2NhbGUgPSAoZGlzdGFuY2UueSArIGRlbHRhLnkpIC8gZGlzdGFuY2UueSAqIHNlbGYudGFyZ2V0LnNjYWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLnRhcmdldC5zY2FsZSA9IHNjYWxlIDwgMC4xID8gMC4xIDogc2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHNlbGYubm9kZSk7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdmOWIzNTJqYkd0TUlxakV1dWQ2MFdweCcsICdPblRvdWNoQ3RybCcpO1xuLy8gY2FzZXMvMDNfZ2FtZXBsYXkvMDFfcGxheWVyX2NvbnRyb2wvT25Ub3VjaEN0cmwvT25Ub3VjaEN0cmwuanNcblxudmFyIGkxOG4gPSByZXF1aXJlKCdpMThuJyk7XG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgY2FudmFzOiBjYy5Ob2RlLFxuICAgICAgICB0b3VjaExvY2F0aW9uRGlzcGxheToge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgZm9sbG93ZXI6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgZm9sbG93U3BlZWQ6IDIwMFxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLm1vdmVUb1BvcyA9IGNjLnAoMCwgMCk7XG4gICAgICAgIHNlbGYuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgc2VsZi5jYW52YXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIHRvdWNoZXMgPSBldmVudC5nZXRUb3VjaGVzKCk7XG4gICAgICAgICAgICB2YXIgdG91Y2hMb2MgPSB0b3VjaGVzWzBdLmdldExvY2F0aW9uKCk7XG4gICAgICAgICAgICBzZWxmLmlzTW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYubW92ZVRvUG9zID0gc2VsZi5mb2xsb3dlci5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hMb2MpO1xuICAgICAgICB9LCBzZWxmLm5vZGUpO1xuICAgICAgICBzZWxmLmNhbnZhcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciB0b3VjaGVzID0gZXZlbnQuZ2V0VG91Y2hlcygpO1xuICAgICAgICAgICAgdmFyIHRvdWNoTG9jID0gdG91Y2hlc1swXS5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgc2VsZi50b3VjaExvY2F0aW9uRGlzcGxheS50ZXh0S2V5ID0gaTE4bi50KFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDFfcGxheWVyX2NvbnRyb2wvT24vT25Ub3VjaEN0cmwuanMuMVwiKSArIE1hdGguZmxvb3IodG91Y2hMb2MueCkgKyAnLCAnICsgTWF0aC5mbG9vcih0b3VjaExvYy55KSArICcpJztcbiAgICAgICAgICAgIHNlbGYubW92ZVRvUG9zID0gc2VsZi5mb2xsb3dlci5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hMb2MpO1xuICAgICAgICB9LCBzZWxmLm5vZGUpO1xuICAgICAgICBzZWxmLmNhbnZhcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgc2VsZi5pc01vdmluZyA9IGZhbHNlOyAvLyB3aGVuIHRvdWNoIGVuZGVkLCBzdG9wIG1vdmluZ1xuICAgICAgICB9LCBzZWxmLm5vZGUpO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWVcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNNb3ZpbmcpIHJldHVybjtcbiAgICAgICAgdmFyIG9sZFBvcyA9IHRoaXMuZm9sbG93ZXIucG9zaXRpb247XG4gICAgICAgIC8vIGdldCBtb3ZlIGRpcmVjdGlvblxuICAgICAgICB2YXIgZGlyZWN0aW9uID0gY2MucE5vcm1hbGl6ZShjYy5wU3ViKHRoaXMubW92ZVRvUG9zLCBvbGRQb3MpKTtcbiAgICAgICAgLy8gbXVsdGlwbHkgZGlyZWN0aW9uIHdpdGggZGlzdGFuY2UgdG8gZ2V0IG5ldyBwb3NpdGlvblxuICAgICAgICB2YXIgbmV3UG9zID0gY2MucEFkZChvbGRQb3MsIGNjLnBNdWx0KGRpcmVjdGlvbiwgdGhpcy5mb2xsb3dTcGVlZCAqIGR0KSk7XG4gICAgICAgIC8vIHNldCBuZXcgcG9zaXRpb25cbiAgICAgICAgdGhpcy5mb2xsb3dlci5zZXRQb3NpdGlvbihuZXdQb3MpO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMzg1ZmJFOWVnaEIxSXdIMzRXSEdIbWsnLCAnT3JkZXJTd2l0Y2hlcicpO1xuLy8gY2FzZXMvMDVfc2NyaXB0aW5nLzAzX2V2ZW50cy9PcmRlclN3aXRjaGVyLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjb250YWluZXI6IGNjLk5vZGVcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgXCJzd2l0Y2hcIjogZnVuY3Rpb24gX3N3aXRjaCgpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5jb250YWluZXIuY2hpbGRyZW47XG4gICAgICAgIHZhciBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGlmIChsZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2YXIgc3JjID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVuZ3RoKTtcbiAgICAgICAgICAgIHZhciBub2RlID0gY2hpbGRyZW5bc3JjXTtcbiAgICAgICAgICAgIHZhciBkc3QgPSBzcmMgPT09IGxlbmd0aCAtIDEgPyAwIDogc3JjICsgMTtcbiAgICAgICAgICAgIG5vZGUuc2V0U2libGluZ0luZGV4KGRzdCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2JlY2Y5WnBCaTVLRzQzYXJkOW9wVVBUJywgJ1BhZ2VWaWV3Q3RybCcpO1xuLy8gY2FzZXMvMDJfdWkvMDVfc2Nyb2xsVmlldy9QYWdlVmlldy9QYWdlVmlld0N0cmwuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGN1ckluZGV4OiAwLFxuICAgICAgICBpY29uczoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLlNwcml0ZUZyYW1lXVxuICAgICAgICB9LFxuICAgICAgICBwYWdlVGVhbXBsZTogY2MuUHJlZmFiLFxuICAgICAgICB0YXJnZXQ6IGNjLlBhZ2VWaWV3LFxuICAgICAgICBsYWJlbDogY2MuTGFiZWxcbiAgICB9LFxuXG4gICAgX2NyZWF0ZVBhZ2U6IGZ1bmN0aW9uIF9jcmVhdGVQYWdlKCkge1xuICAgICAgICB2YXIgcGFnZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGFnZVRlYW1wbGUpO1xuICAgICAgICB2YXIgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFnZS5jaGlsZHJlbi5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBwYWdlLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgdmFyIHNwcml0ZSA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmljb25zW2lkeF07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxheW91dCA9IHBhZ2UuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XG4gICAgICAgIGxheW91dC5jZWxsU2l6ZSA9IGNjLnNpemUoODAsIDgwKTtcbiAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICAvLyDorr7nva7nmoTlvZPliY3pobXpnaLkuLogMVxuICAgICAgICB0aGlzLnRhcmdldC5zZXRDdXJyZW50UGFnZUluZGV4KDApO1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgICAgLy8g5b2T5YmN6aG16Z2i57Si5byVXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCLlvZPliY3pobXpnaLntKLlvJXvvJpcIiArIHRoaXMudGFyZ2V0LmdldEN1cnJlbnRQYWdlSW5kZXgoKTtcbiAgICB9LFxuXG4gICAgLy8g5re75Yqg6aG16Z2iXG4gICAgb25BZGRQYWdlOiBmdW5jdGlvbiBvbkFkZFBhZ2UoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZFBhZ2UodGhpcy5fY3JlYXRlUGFnZSgpKTtcbiAgICB9LFxuXG4gICAgLy8g5o+S5YWl6aG16Z2iXG4gICAgb25JbnNlcnRQYWdlOiBmdW5jdGlvbiBvbkluc2VydFBhZ2UoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0Lmluc2VydFBhZ2UodGhpcy5fY3JlYXRlUGFnZSgpLCAxKTtcbiAgICB9LFxuXG4gICAgLy8g56e76Zmk5pyA5ZCO5LiA5Liq6aG16Z2iXG4gICAgb25SZW1vdmVQYWdlOiBmdW5jdGlvbiBvblJlbW92ZVBhZ2UoKSB7XG4gICAgICAgIHZhciBwYWdlcyA9IHRoaXMudGFyZ2V0LmdldFBhZ2VzKCk7XG4gICAgICAgIGlmIChwYWdlcykge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQucmVtb3ZlUGFnZShwYWdlc1twYWdlcy5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8g56e76Zmk5oyH5a6a6aG16Z2iXG4gICAgb25SZW1vdmVQYWdlQXRJbmRleDogZnVuY3Rpb24gb25SZW1vdmVQYWdlQXRJbmRleCgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQucmVtb3ZlUGFnZUF0SW5kZXgoMSk7XG4gICAgfSxcblxuICAgIC8vIOenu+mZpOaJgOaciemhtemdolxuICAgIG9uUmVtb3ZlQWxsUGFnZTogZnVuY3Rpb24gb25SZW1vdmVBbGxQYWdlKCkge1xuICAgICAgICB0aGlzLnRhcmdldC5yZW1vdmVBbGxQYWdlcygpO1xuICAgIH0sXG5cbiAgICAvLyDnm5HlkKzkuovku7ZcbiAgICBvblBhZ2VFZXZlbnQ6IGZ1bmN0aW9uIG9uUGFnZUVldmVudChzZW5kZXIsIGV2ZW50VHlwZSkge1xuICAgICAgICAvLyDnv7vpobXkuovku7ZcbiAgICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gY2MuUGFnZVZpZXcuRXZlbnRUeXBlLlBBR0VfVFVSTklORykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXIgcGFnZSBpbmRleDpcIiArIHNlbmRlci5nZXRDdXJyZW50UGFnZUluZGV4KCkpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc3OWFlM2hpUCtKQWhJS2VoYVd5aUt1aCcsICdQYXJ0aWNsZUNvbnRyb2wnKTtcbi8vIGNhc2VzLzAxX2dyYXBoaWNzLzAyX3BhcnRpY2xlL1RvZ2dsZVBhcnRpY2xlL1BhcnRpY2xlQ29udHJvbC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcGFydGljbGU6IGNjLk5vZGVcbiAgICB9LFxuXG4gICAgdG9nZ2xlUGFydGljbGVQbGF5OiBmdW5jdGlvbiB0b2dnbGVQYXJ0aWNsZVBsYXkoKSB7XG4gICAgICAgIHZhciBteVBhcnRpY2xlID0gdGhpcy5wYXJ0aWNsZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xuICAgICAgICBpZiAobXlQYXJ0aWNsZS5pc0Z1bGwoKSkge1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgcGFydGljbGUgaGFzIGZ1bGx5IHBsYWVkXG4gICAgICAgICAgICBteVBhcnRpY2xlLnN0b3BTeXN0ZW0oKTsgLy8gc3RvcCBwYXJ0aWNsZSBzeXN0ZW1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBteVBhcnRpY2xlLnJlc2V0U3lzdGVtKCk7IC8vIHJlc3RhcnQgcGFydGljbGUgc3lzdGVtXG4gICAgICAgICAgICB9XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcwZjc2MUVabUtoTkxLSnBVWFRyYjRmRicsICdQbGF0Zm9ybU1vdGlvbicpO1xuLy8gY2FzZXMvY29sbGlkZXIvVXRpbHMvUGxhdGZvcm1Nb3Rpb24uanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNwZWVkOiAxMCxcbiAgICAgICAgZGlzdGFuY2U6IDIwMFxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5fbW92ZWREaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2UgLyAyO1xuICAgICAgICB0aGlzLl9kaXJlY3Rpb24gPSAxO1xuICAgICAgICB0aGlzLl9tb3ZlZERpZmYgPSAwO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7XG4gICAgICAgIHZhciBkID0gdGhpcy5zcGVlZCAqIHRoaXMuX2RpcmVjdGlvbiAqIGR0O1xuXG4gICAgICAgIHZhciBtb3ZlZERpc3RhbmNlID0gdGhpcy5fbW92ZWREaXN0YW5jZSArIE1hdGguYWJzKGQpO1xuICAgICAgICB0aGlzLl9tb3ZlZERpc3RhbmNlICs9IE1hdGguYWJzKGQpO1xuXG4gICAgICAgIGlmIChtb3ZlZERpc3RhbmNlID4gdGhpcy5kaXN0YW5jZSkge1xuICAgICAgICAgICAgZCA9IHRoaXMuZGlzdGFuY2UgLSB0aGlzLl9tb3ZlZERpc3RhbmNlO1xuICAgICAgICAgICAgdGhpcy5fbW92ZWREaXN0YW5jZSA9IDA7XG4gICAgICAgICAgICB0aGlzLl9kaXJlY3Rpb24gKj0gLTE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9tb3ZlZERpc3RhbmNlID0gbW92ZWREaXN0YW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS54ICs9IGQ7XG4gICAgICAgIHRoaXMuX21vdmVkRGlmZiA9IGQ7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdlYTlhYyt0OTJKRlk2aE9VdWlJSFVBVCcsICdQb29sSGFuZGxlcicpO1xuLy8gY2FzZXMvMDVfc2NyaXB0aW5nLzEyX3Bvb2wvUG9vbEhhbmRsZXIuanNcblxuZnVuY3Rpb24gcGF1c2VyZXN1bWUoKSB7XG4gICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldEFjdGlvbk1hbmFnZXIoKS5yZXN1bWVUYXJnZXQodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0QWN0aW9uTWFuYWdlcigpLnBhdXNlVGFyZ2V0KHRoaXMpO1xuICAgIH1cbiAgICB0aGlzLnBhdXNlZCA9ICF0aGlzLnBhdXNlZDtcbn1cblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm5vZGUucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHBhdXNlcmVzdW1lLCB0aGlzLm5vZGUpO1xuICAgIH0sXG5cbiAgICB1bnVzZTogZnVuY3Rpb24gdW51c2UoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBwYXVzZXJlc3VtZSwgdGhpcy5ub2RlKTtcbiAgICB9LFxuXG4gICAgcmV1c2U6IGZ1bmN0aW9uIHJldXNlKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBwYXVzZXJlc3VtZSwgdGhpcy5ub2RlKTtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzc1NTE4STBJbUpIWHFXTk5HUklPbUpnJywgJ1BvcHVsYXRlUHJlZmFiJyk7XG4vLyBjYXNlcy8wNV9zY3JpcHRpbmcvMDJfcHJlZmFiL1BvcHVsYXRlUHJlZmFiLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmFiOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9LFxuICAgICAgICBjYW52YXM6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQ2FudmFzXG4gICAgICAgIH0sXG4gICAgICAgIG51bWJlclRvU3Bhd246IDAsXG4gICAgICAgIHNwYXduSW50ZXJ2YWw6IDBcbiAgICB9LFxuXG4gICAgYWRkU3Bhd246IGZ1bmN0aW9uIGFkZFNwYXduKCkge1xuICAgICAgICBpZiAodGhpcy5zcGF3bkNvdW50ID49IHRoaXMubnVtYmVyVG9TcGF3bikge1xuICAgICAgICAgICAgdGhpcy5jbGVhclJlcGVhdGVyKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1vbnN0ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYik7XG4gICAgICAgIG1vbnN0ZXIucGFyZW50ID0gdGhpcy5yb290O1xuICAgICAgICAvL3RoaXMuY2FudmFzLm5vZGUuYWRkQ2hpbGQobW9uc3Rlcik7XG4gICAgICAgIG1vbnN0ZXIucG9zaXRpb24gPSB0aGlzLmdldFJhbmRvbVBvc2l0aW9uKCk7XG4gICAgICAgIHRoaXMuc3Bhd25Db3VudCsrO1xuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLnJhbmRvbVJhbmdlID0gY2MucCgzMDAsIDIwMCk7XG4gICAgICAgIHNlbGYuc3Bhd25Db3VudCA9IDA7XG4gICAgICAgIHNlbGYuc2NoZWR1bGUoc2VsZi5hZGRTcGF3biwgc2VsZi5zcGF3bkludGVydmFsKTtcbiAgICB9LFxuXG4gICAgZ2V0UmFuZG9tUG9zaXRpb246IGZ1bmN0aW9uIGdldFJhbmRvbVBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gY2MucChjYy5yYW5kb21NaW51czFUbzEoKSAqIHRoaXMucmFuZG9tUmFuZ2UueCwgY2MucmFuZG9tTWludXMxVG8xKCkgKiB0aGlzLnJhbmRvbVJhbmdlLnkpO1xuICAgIH0sXG5cbiAgICBjbGVhclJlcGVhdGVyOiBmdW5jdGlvbiBjbGVhclJlcGVhdGVyKCkge1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5hZGRTcGF3bik7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc4NGE0M3liOU94Qlg2SE1ReFB6SFF5eicsICdQcm9ncmVzc0JhckN0cmwnKTtcbi8vIGNhc2VzLzAyX3VpLzA0X3Byb2dyZXNzYmFyL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyQ3RybC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3BlZWQ6IDEwLFxuICAgICAgICBob3Jpem9udGFsQmFyOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5Qcm9ncmVzc0JhcixcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGhvcml6b250YWxCYXJSZXZlcnNlOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5Qcm9ncmVzc0JhcixcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHZlcnRpY2FsQmFyOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5Qcm9ncmVzc0JhcixcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHZlcnRpY2FsQmFyUmV2ZXJzZToge1xuICAgICAgICAgICAgdHlwZTogY2MuUHJvZ3Jlc3NCYXIsXG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLl9waW5ncG9uZyA9IHRydWU7XG4gICAgICAgIHRoaXMudmVydGljYWxCYXIucHJvZ3Jlc3MgPSAwO1xuICAgICAgICB0aGlzLmhvcml6b250YWxCYXIucHJvZ3Jlc3MgPSAwO1xuICAgICAgICB0aGlzLnZlcnRpY2FsQmFyUmV2ZXJzZS5wcm9ncmVzcyA9IDA7XG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbEJhclJldmVyc2UucHJvZ3Jlc3MgPSAwO1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLl91cGRhdGVQcm9ncmVzc0Jhcih0aGlzLnZlcnRpY2FsQmFyLCBkdCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVByb2dyZXNzQmFyKHRoaXMuaG9yaXpvbnRhbEJhciwgZHQpO1xuICAgICAgICB0aGlzLl91cGRhdGVQcm9ncmVzc0Jhcih0aGlzLnZlcnRpY2FsQmFyUmV2ZXJzZSwgZHQpO1xuICAgICAgICB0aGlzLl91cGRhdGVQcm9ncmVzc0Jhcih0aGlzLmhvcml6b250YWxCYXJSZXZlcnNlLCBkdCk7XG4gICAgfSxcblxuICAgIF91cGRhdGVQcm9ncmVzc0JhcjogZnVuY3Rpb24gX3VwZGF0ZVByb2dyZXNzQmFyKHByb2dyZXNzQmFyLCBkdCkge1xuICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBwcm9ncmVzc0Jhci5wcm9ncmVzcztcbiAgICAgICAgaWYgKHByb2dyZXNzIDwgMS4wICYmIHRoaXMuX3Bpbmdwb25nKSB7XG4gICAgICAgICAgICBwcm9ncmVzcyArPSBkdCAqIHRoaXMuc3BlZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9ncmVzcyAtPSBkdCAqIHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLl9waW5ncG9uZyA9IHByb2dyZXNzIDw9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzQ4NTEwK3hHdlZNQmFwSVhOeXJDTXovJywgJ1B1c2gnKTtcbi8vIGNhc2VzL2FueXNkay8wN19wdXNoL1B1c2guanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTW9iaWxlKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hQbHVnaW4gPSBhbnlzZGsuYWdlbnRNYW5hZ2VyLmdldFB1c2hQbHVnaW4oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnB1c2hQbHVnaW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2hQbHVnaW4uc2V0TGlzdGVuZXIodGhpcy5vblB1c2hSZXN1bHQsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0UHVzaDogZnVuY3Rpb24gc3RhcnRQdXNoKCkge1xuICAgICAgICBpZiAoIXRoaXMucHVzaFBsdWdpbikgcmV0dXJuO1xuICAgICAgICB0aGlzLnB1c2hQbHVnaW4uc3RhcnRQdXNoKCk7XG4gICAgfSxcblxuICAgIGNsb3NlUHVzaDogZnVuY3Rpb24gY2xvc2VQdXNoKCkge1xuICAgICAgICBpZiAoIXRoaXMucHVzaFBsdWdpbikgcmV0dXJuO1xuICAgICAgICB0aGlzLnB1c2hQbHVnaW4uY2xvc2VQdXNoKCk7XG4gICAgfSxcblxuICAgIHNldEFsaWFzOiBmdW5jdGlvbiBzZXRBbGlhcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnB1c2hQbHVnaW4pIHJldHVybjtcbiAgICAgICAgdGhpcy5wdXNoUGx1Z2luLnNldEFsaWFzKFwiaXZlbktpbGxcIik7XG4gICAgfSxcblxuICAgIGRlbEFsaWFzOiBmdW5jdGlvbiBkZWxBbGlhcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnB1c2hQbHVnaW4pIHJldHVybjtcbiAgICAgICAgdGhpcy5wdXNoUGx1Z2luLmRlbEFsaWFzKFwiaXZlbktpbGxcIik7XG4gICAgfSxcblxuICAgIHNldFRhZ3M6IGZ1bmN0aW9uIHNldFRhZ3MoKSB7XG4gICAgICAgIGlmICghdGhpcy5wdXNoUGx1Z2luKSByZXR1cm47XG4gICAgICAgIHRoaXMucHVzaFBsdWdpbi5zZXRUYWdzKFtcImVhc3lcIiwgXCJmYXN0XCIsIFwicXdlXCJdKTtcbiAgICB9LFxuXG4gICAgZGVsVGFnczogZnVuY3Rpb24gZGVsVGFncygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnB1c2hQbHVnaW4pIHJldHVybjtcbiAgICAgICAgdGhpcy5wdXNoUGx1Z2luLmRlbFRhZ3MoW1wiZWFzeVwiLCBcInF3ZVwiXSk7XG4gICAgfSxcblxuICAgIG9uUHVzaFJlc3VsdDogZnVuY3Rpb24gb25QdXNoUmVzdWx0KGNvZGUsIG1zZykge1xuICAgICAgICBjYy5sb2coJyMjIyMjIyMjIyMgUFVTSCBSRVNVTFQgIyMjIyMjIyMjIyBjb2RlOiAnICsgY29kZSArICcsbXNnOiAnICsgbXNnKTtcbiAgICAgICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGFueXNkay5QdXNoQWN0aW9uUmVzdWx0Q29kZS5rUHVzaFJlY2VpdmVNZXNzYWdlOlxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIiMjIyMjIyMjIyMga1B1c2hSZWNlaXZlTWVzc2FnZSAjIyMjIyMjIyMjXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc2Mjg5Y1psNnpKRWNMVlFkNjBKbkF6VycsICdQdXp6bGUnKTtcbi8vIGNhc2VzL3RpbGVkbWFwL1B1enpsZS5qc1xuXG5cbnZhciBNb3ZlRGlyZWN0aW9uID0gY2MuRW51bSh7XG4gICAgTk9ORTogMCxcbiAgICBVUDogMSxcbiAgICBET1dOOiAyLFxuICAgIExFRlQ6IDMsXG4gICAgUklHSFQ6IDRcbn0pO1xuXG52YXIgbWluVGlsZXNDb3VudCA9IDI7XG52YXIgbWFwTW92ZVN0ZXAgPSAxO1xudmFyIG1pbk1vdmVWYWx1ZSA9IDUwO1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG4gICAgZWRpdG9yOiB7XG4gICAgICAgIHJlcXVpcmVDb21wb25lbnQ6IGNjLlRpbGVkTWFwXG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgX3RvdWNoU3RhcnRQb3M6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgX3RvdWNoaW5nOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IGZhbHNlLFxuICAgICAgICAgICAgc2VyaWFsaXphYmxlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIF9pc01hcExvYWRlZDoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBmYWxzZSxcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICBmbG9vckxheWVyTmFtZToge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiAnZmxvb3InXG4gICAgICAgIH0sXG5cbiAgICAgICAgYmFycmllckxheWVyTmFtZToge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiAnYmFycmllcidcbiAgICAgICAgfSxcblxuICAgICAgICBvYmplY3RHcm91cE5hbWU6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogJ3BsYXllcnMnXG4gICAgICAgIH0sXG5cbiAgICAgICAgc3RhcnRPYmplY3ROYW1lOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6ICdTcGF3blBvaW50J1xuICAgICAgICB9LFxuXG4gICAgICAgIHN1Y2Nlc3NPYmplY3ROYW1lOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6ICdTdWNjZXNzUG9pbnQnXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuX3BsYXllciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgncGxheWVyJyk7XG4gICAgICAgIGlmICghdGhpcy5faXNNYXBMb2FkZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY2MuZXZlbnRNYW5hZ2VyLmFkZExpc3RlbmVyKHtcbiAgICAgICAgICAgIGV2ZW50OiBjYy5FdmVudExpc3RlbmVyLktFWUJPQVJELFxuICAgICAgICAgICAgb25LZXlQcmVzc2VkOiBmdW5jdGlvbiBvbktleVByZXNzZWQoa2V5Q29kZSwgZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9vbktleVByZXNzZWQoa2V5Q29kZSwgZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBzZWxmLm5vZGUpO1xuXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBzZWxmLl90b3VjaGluZyA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLl90b3VjaFN0YXJ0UG9zID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgfSwgc2VsZik7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKCFzZWxmLl90b3VjaGluZykgcmV0dXJuO1xuXG4gICAgICAgICAgICBzZWxmLl90b3VjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHRvdWNoUG9zID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgIHZhciBtb3ZlZFggPSB0b3VjaFBvcy54IC0gc2VsZi5fdG91Y2hTdGFydFBvcy54O1xuICAgICAgICAgICAgdmFyIG1vdmVkWSA9IHRvdWNoUG9zLnkgLSBzZWxmLl90b3VjaFN0YXJ0UG9zLnk7XG4gICAgICAgICAgICB2YXIgbW92ZWRYVmFsdWUgPSBNYXRoLmFicyhtb3ZlZFgpO1xuICAgICAgICAgICAgdmFyIG1vdmVkWVZhbHVlID0gTWF0aC5hYnMobW92ZWRZKTtcbiAgICAgICAgICAgIGlmIChtb3ZlZFhWYWx1ZSA8IG1pbk1vdmVWYWx1ZSAmJiBtb3ZlZFlWYWx1ZSA8IG1pbk1vdmVWYWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIHRvdWNoIG1vdmVkIG5vdCBlbm91Z2hcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBuZXdUaWxlID0gY2MucCh0aGlzLl9jdXJUaWxlLngsIHRoaXMuX2N1clRpbGUueSk7XG4gICAgICAgICAgICB2YXIgbWFwTW92ZURpciA9IE1vdmVEaXJlY3Rpb24uTk9ORTtcbiAgICAgICAgICAgIGlmIChtb3ZlZFhWYWx1ZSA+PSBtb3ZlZFlWYWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIG1vdmUgdG8gcmlnaHQgb3IgbGVmdFxuICAgICAgICAgICAgICAgIGlmIChtb3ZlZFggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1RpbGUueCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBtYXBNb3ZlRGlyID0gTW92ZURpcmVjdGlvbi5MRUZUO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1RpbGUueCAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBtYXBNb3ZlRGlyID0gTW92ZURpcmVjdGlvbi5SSUdIVDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG1vdmUgdG8gdXAgb3IgZG93blxuICAgICAgICAgICAgICAgIGlmIChtb3ZlZFkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1RpbGUueSAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBtYXBNb3ZlRGlyID0gTW92ZURpcmVjdGlvbi5ET1dOO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1RpbGUueSArPSAxO1xuICAgICAgICAgICAgICAgICAgICBtYXBNb3ZlRGlyID0gTW92ZURpcmVjdGlvbi5VUDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl90cnlNb3ZlVG9OZXdUaWxlKG5ld1RpbGUsIG1hcE1vdmVEaXIpO1xuICAgICAgICB9LCBzZWxmKTtcbiAgICB9LFxuXG4gICAgcmVzdGFydEdhbWU6IGZ1bmN0aW9uIHJlc3RhcnRHYW1lKCkge1xuICAgICAgICB0aGlzLl9zdWNjZWVkTGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2luaXRNYXBQb3MoKTtcbiAgICAgICAgdGhpcy5fY3VyVGlsZSA9IHRoaXMuX3N0YXJ0VGlsZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlUGxheWVyUG9zKCk7XG4gICAgfSxcblxuICAgIHN0YXJ0OiBmdW5jdGlvbiBzdGFydChlcnIpIHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuO1xuXG4gICAgICAgIC8vIGluaXQgdGhlIG1hcCBwb3NpdGlvblxuICAgICAgICB0aGlzLl9pbml0TWFwUG9zKCk7XG5cbiAgICAgICAgLy8gaW5pdCB0aGUgc3VjY2VlZCBsYXllclxuICAgICAgICB0aGlzLl9zdWNjZWVkTGF5ZXIgPSB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q2hpbGRCeU5hbWUoJ3N1Y2NlZWRMYXllcicpO1xuICAgICAgICB0aGlzLl9zdWNjZWVkTGF5ZXIuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gaW5pdCB0aGUgcGxheWVyIHBvc2l0aW9uXG4gICAgICAgIHRoaXMuX3RpbGVkTWFwID0gdGhpcy5ub2RlLmdldENvbXBvbmVudCgnY2MuVGlsZWRNYXAnKTtcbiAgICAgICAgdmFyIG9iamVjdEdyb3VwID0gdGhpcy5fdGlsZWRNYXAuZ2V0T2JqZWN0R3JvdXAodGhpcy5vYmplY3RHcm91cE5hbWUpO1xuICAgICAgICBpZiAoIW9iamVjdEdyb3VwKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHN0YXJ0T2JqID0gb2JqZWN0R3JvdXAuZ2V0T2JqZWN0KHRoaXMuc3RhcnRPYmplY3ROYW1lKTtcbiAgICAgICAgdmFyIGVuZE9iaiA9IG9iamVjdEdyb3VwLmdldE9iamVjdCh0aGlzLnN1Y2Nlc3NPYmplY3ROYW1lKTtcbiAgICAgICAgaWYgKCFzdGFydE9iaiB8fCAhZW5kT2JqKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHN0YXJ0UG9zID0gY2MucChzdGFydE9iai5zZ05vZGUueCwgc3RhcnRPYmouc2dOb2RlLnkpO1xuICAgICAgICB2YXIgZW5kUG9zID0gY2MucChlbmRPYmouc2dOb2RlLngsIGVuZE9iai5zZ05vZGUueSk7XG5cbiAgICAgICAgdGhpcy5fbGF5ZXJGbG9vciA9IHRoaXMuX3RpbGVkTWFwLmdldExheWVyKHRoaXMuZmxvb3JMYXllck5hbWUpO1xuICAgICAgICB0aGlzLl9sYXllckJhcnJpZXIgPSB0aGlzLl90aWxlZE1hcC5nZXRMYXllcih0aGlzLmJhcnJpZXJMYXllck5hbWUpO1xuICAgICAgICBpZiAoIXRoaXMuX2xheWVyRmxvb3IgfHwgIXRoaXMuX2xheWVyQmFycmllcikgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuX2N1clRpbGUgPSB0aGlzLl9zdGFydFRpbGUgPSB0aGlzLl9nZXRUaWxlUG9zKHN0YXJ0UG9zKTtcbiAgICAgICAgdGhpcy5fZW5kVGlsZSA9IHRoaXMuX2dldFRpbGVQb3MoZW5kUG9zKTtcblxuICAgICAgICBpZiAodGhpcy5fcGxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVQbGF5ZXJQb3MoKTtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faXNNYXBMb2FkZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBfaW5pdE1hcFBvczogZnVuY3Rpb24gX2luaXRNYXBQb3MoKSB7XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjYy52aXNpYmxlUmVjdC5ib3R0b21MZWZ0KTtcbiAgICB9LFxuXG4gICAgX3VwZGF0ZVBsYXllclBvczogZnVuY3Rpb24gX3VwZGF0ZVBsYXllclBvcygpIHtcbiAgICAgICAgdmFyIHBvcyA9IHRoaXMuX2xheWVyRmxvb3IuZ2V0UG9zaXRpb25BdCh0aGlzLl9jdXJUaWxlKTtcbiAgICAgICAgdGhpcy5fcGxheWVyLnNldFBvc2l0aW9uKHBvcyk7XG4gICAgfSxcblxuICAgIF9nZXRUaWxlUG9zOiBmdW5jdGlvbiBfZ2V0VGlsZVBvcyhwb3NJblBpeGVsKSB7XG4gICAgICAgIHZhciBtYXBTaXplID0gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCk7XG4gICAgICAgIHZhciB0aWxlU2l6ZSA9IHRoaXMuX3RpbGVkTWFwLmdldFRpbGVTaXplKCk7XG4gICAgICAgIHZhciB4ID0gTWF0aC5mbG9vcihwb3NJblBpeGVsLnggLyB0aWxlU2l6ZS53aWR0aCk7XG4gICAgICAgIHZhciB5ID0gTWF0aC5mbG9vcigobWFwU2l6ZS5oZWlnaHQgLSBwb3NJblBpeGVsLnkpIC8gdGlsZVNpemUuaGVpZ2h0KTtcblxuICAgICAgICByZXR1cm4gY2MucCh4LCB5KTtcbiAgICB9LFxuXG4gICAgX29uS2V5UHJlc3NlZDogZnVuY3Rpb24gX29uS2V5UHJlc3NlZChrZXlDb2RlLCBldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuX2lzTWFwTG9hZGVkIHx8IHRoaXMuX3N1Y2NlZWRMYXllci5hY3RpdmUpIHJldHVybjtcblxuICAgICAgICB2YXIgbmV3VGlsZSA9IGNjLnAodGhpcy5fY3VyVGlsZS54LCB0aGlzLl9jdXJUaWxlLnkpO1xuICAgICAgICB2YXIgbWFwTW92ZURpciA9IE1vdmVEaXJlY3Rpb24uTk9ORTtcbiAgICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLktFWS51cDpcbiAgICAgICAgICAgICAgICBuZXdUaWxlLnkgLT0gMTtcbiAgICAgICAgICAgICAgICBtYXBNb3ZlRGlyID0gTW92ZURpcmVjdGlvbi5ET1dOO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5LRVkuZG93bjpcbiAgICAgICAgICAgICAgICBuZXdUaWxlLnkgKz0gMTtcbiAgICAgICAgICAgICAgICBtYXBNb3ZlRGlyID0gTW92ZURpcmVjdGlvbi5VUDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MuS0VZLmxlZnQ6XG4gICAgICAgICAgICAgICAgbmV3VGlsZS54IC09IDE7XG4gICAgICAgICAgICAgICAgbWFwTW92ZURpciA9IE1vdmVEaXJlY3Rpb24uUklHSFQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLktFWS5yaWdodDpcbiAgICAgICAgICAgICAgICBuZXdUaWxlLnggKz0gMTtcbiAgICAgICAgICAgICAgICBtYXBNb3ZlRGlyID0gTW92ZURpcmVjdGlvbi5MRUZUO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl90cnlNb3ZlVG9OZXdUaWxlKG5ld1RpbGUsIG1hcE1vdmVEaXIpO1xuICAgIH0sXG5cbiAgICBfdHJ5TW92ZVRvTmV3VGlsZTogZnVuY3Rpb24gX3RyeU1vdmVUb05ld1RpbGUobmV3VGlsZSwgbWFwTW92ZURpcikge1xuICAgICAgICB2YXIgbWFwU2l6ZSA9IHRoaXMuX3RpbGVkTWFwLmdldE1hcFNpemUoKTtcbiAgICAgICAgaWYgKG5ld1RpbGUueCA8IDAgfHwgbmV3VGlsZS54ID49IG1hcFNpemUud2lkdGgpIHJldHVybjtcbiAgICAgICAgaWYgKG5ld1RpbGUueSA8IDAgfHwgbmV3VGlsZS55ID49IG1hcFNpemUuaGVpZ2h0KSByZXR1cm47XG5cbiAgICAgICAgaWYgKHRoaXMuX2xheWVyQmFycmllci5nZXRUaWxlR0lEQXQobmV3VGlsZSkpIHtcbiAgICAgICAgICAgIGNjLmxvZygnVGhpcyB3YXkgaXMgYmxvY2tlZCEnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgcGxheWVyIHBvc2l0aW9uXG4gICAgICAgIHRoaXMuX2N1clRpbGUgPSBuZXdUaWxlO1xuICAgICAgICB0aGlzLl91cGRhdGVQbGF5ZXJQb3MoKTtcblxuICAgICAgICAvLyBtb3ZlIHRoZSBtYXAgaWYgbmVjZXNzYXJ5XG4gICAgICAgIHRoaXMuX3RyeU1vdmVNYXAobWFwTW92ZURpcik7XG5cbiAgICAgICAgLy8gY2hlY2sgdGhlIHBsYXllciBpcyBzdWNjZXNzIG9yIG5vdFxuICAgICAgICBpZiAoY2MucG9pbnRFcXVhbFRvUG9pbnQodGhpcy5fY3VyVGlsZSwgdGhpcy5fZW5kVGlsZSkpIHtcbiAgICAgICAgICAgIGNjLmxvZygnc3VjY2VlZCcpO1xuICAgICAgICAgICAgdGhpcy5fc3VjY2VlZExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX3RyeU1vdmVNYXA6IGZ1bmN0aW9uIF90cnlNb3ZlTWFwKG1vdmVEaXIpIHtcbiAgICAgICAgLy8gZ2V0IG5lY2Vzc2FyeSBkYXRhXG4gICAgICAgIHZhciBtYXBDb250ZW50U2l6ZSA9IHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpO1xuICAgICAgICB2YXIgbWFwUG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIHZhciBwbGF5ZXJQb3MgPSB0aGlzLl9wbGF5ZXIuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgdmFyIHZpZXdTaXplID0gY2Muc2l6ZShjYy52aXNpYmxlUmVjdC53aWR0aCwgY2MudmlzaWJsZVJlY3QuaGVpZ2h0KTtcbiAgICAgICAgdmFyIHRpbGVTaXplID0gdGhpcy5fdGlsZWRNYXAuZ2V0VGlsZVNpemUoKTtcbiAgICAgICAgdmFyIG1pbkRpc1ggPSBtaW5UaWxlc0NvdW50ICogdGlsZVNpemUud2lkdGg7XG4gICAgICAgIHZhciBtaW5EaXNZID0gbWluVGlsZXNDb3VudCAqIHRpbGVTaXplLmhlaWdodDtcblxuICAgICAgICB2YXIgZGlzWCA9IHBsYXllclBvcy54ICsgbWFwUG9zLng7XG4gICAgICAgIHZhciBkaXNZID0gcGxheWVyUG9zLnkgKyBtYXBQb3MueTtcbiAgICAgICAgdmFyIG5ld1BvcztcbiAgICAgICAgc3dpdGNoIChtb3ZlRGlyKSB7XG4gICAgICAgICAgICBjYXNlIE1vdmVEaXJlY3Rpb24uVVA6XG4gICAgICAgICAgICAgICAgaWYgKGRpc1kgPCBtaW5EaXNZKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1BvcyA9IGNjLnAobWFwUG9zLngsIG1hcFBvcy55ICsgdGlsZVNpemUuaGVpZ2h0ICogbWFwTW92ZVN0ZXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTW92ZURpcmVjdGlvbi5ET1dOOlxuICAgICAgICAgICAgICAgIGlmICh2aWV3U2l6ZS5oZWlnaHQgLSBkaXNZIC0gdGlsZVNpemUuaGVpZ2h0IDwgbWluRGlzWSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdQb3MgPSBjYy5wKG1hcFBvcy54LCBtYXBQb3MueSAtIHRpbGVTaXplLmhlaWdodCAqIG1hcE1vdmVTdGVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIE1vdmVEaXJlY3Rpb24uTEVGVDpcbiAgICAgICAgICAgICAgICBpZiAodmlld1NpemUud2lkdGggLSBkaXNYIC0gdGlsZVNpemUud2lkdGggPCBtaW5EaXNYKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1BvcyA9IGNjLnAobWFwUG9zLnggLSB0aWxlU2l6ZS53aWR0aCAqIG1hcE1vdmVTdGVwLCBtYXBQb3MueSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBNb3ZlRGlyZWN0aW9uLlJJR0hUOlxuICAgICAgICAgICAgICAgIGlmIChkaXNYIDwgbWluRGlzWCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdQb3MgPSBjYy5wKG1hcFBvcy54ICsgdGlsZVNpemUud2lkdGggKiBtYXBNb3ZlU3RlcCwgbWFwUG9zLnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1Bvcykge1xuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBwb3NpdGlvbiByYW5nZSBvZiBtYXBcbiAgICAgICAgICAgIHZhciBtaW5YID0gdmlld1NpemUud2lkdGggLSBtYXBDb250ZW50U2l6ZS53aWR0aCAtIGNjLnZpc2libGVSZWN0LmxlZnQ7XG4gICAgICAgICAgICB2YXIgbWF4WCA9IGNjLnZpc2libGVSZWN0LmxlZnQueDtcbiAgICAgICAgICAgIHZhciBtaW5ZID0gdmlld1NpemUuaGVpZ2h0IC0gbWFwQ29udGVudFNpemUuaGVpZ2h0IC0gY2MudmlzaWJsZVJlY3QuYm90dG9tO1xuICAgICAgICAgICAgdmFyIG1heFkgPSBjYy52aXNpYmxlUmVjdC5ib3R0b20ueTtcblxuICAgICAgICAgICAgaWYgKG5ld1Bvcy54IDwgbWluWCkgbmV3UG9zLnggPSBtaW5YO1xuICAgICAgICAgICAgaWYgKG5ld1Bvcy54ID4gbWF4WCkgbmV3UG9zLnggPSBtYXhYO1xuICAgICAgICAgICAgaWYgKG5ld1Bvcy55IDwgbWluWSkgbmV3UG9zLnkgPSBtaW5ZO1xuICAgICAgICAgICAgaWYgKG5ld1Bvcy55ID4gbWF4WSkgbmV3UG9zLnkgPSBtYXhZO1xuXG4gICAgICAgICAgICBpZiAoIWNjLnBvaW50RXF1YWxUb1BvaW50KG5ld1BvcywgbWFwUG9zKSkge1xuICAgICAgICAgICAgICAgIGNjLmxvZygnTW92ZSB0aGUgbWFwIHRvIG5ldyBwb3NpdGlvbjogJywgbmV3UG9zKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3UG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZjIyOTVrb0l3RkNoWmg4RDYwV3MyZi8nLCAnUkVDJyk7XG4vLyBjYXNlcy9hbnlzZGsvMTBfcmVjL1JFQy5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNNb2JpbGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVjUGx1Z2luID0gYW55c2RrLmFnZW50TWFuYWdlci5nZXRSRUNQbHVnaW4oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlY1BsdWdpbikge1xuICAgICAgICAgICAgICAgIHRoaXMucmVjUGx1Z2luLnNldExpc3RlbmVyKHRoaXMub25SRUNSZXN1bHQsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0UmVjb3JkaW5nOiBmdW5jdGlvbiBzdGFydFJlY29yZGluZygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlY1BsdWdpbikgcmV0dXJuO1xuICAgICAgICB0aGlzLnJlY1BsdWdpbi5zdGFydFJlY29yZGluZygpO1xuICAgIH0sXG5cbiAgICBzdG9wUmVjb3JkaW5nOiBmdW5jdGlvbiBzdG9wUmVjb3JkaW5nKCkge1xuICAgICAgICBpZiAoIXRoaXMucmVjUGx1Z2luKSByZXR1cm47XG4gICAgICAgIHRoaXMucmVjUGx1Z2luLnN0b3BSZWNvcmRpbmcoKTtcbiAgICB9LFxuXG4gICAgc2hhcmU6IGZ1bmN0aW9uIHNoYXJlKCkge1xuICAgICAgICBpZiAoIXRoaXMucmVjUGx1Z2luKSByZXR1cm47XG4gICAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICAgICAgVmlkZW9fVGl0bGU6IFwiUkVDU0RLXCIsXG4gICAgICAgICAgICBWaWRlb19EZXNjOiBcIlJFQ1NES+aYr+S4gOS4quelnuWlh+eahFNES1wiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVjUGx1Z2luLnNoYXJlKGluZm8pO1xuICAgIH0sXG5cbiAgICBwYXVzZVJlY29yZGluZzogZnVuY3Rpb24gcGF1c2VSZWNvcmRpbmcoKSB7XG4gICAgICAgIGlmICghdGhpcy5yZWNQbHVnaW4gfHwgIXRoaXMucmVjUGx1Z2luLnBhdXNlUmVjb3JkaW5nKSByZXR1cm47XG4gICAgICAgIHRoaXMucmVjUGx1Z2luLnBhdXNlUmVjb3JkaW5nKCk7XG4gICAgfSxcblxuICAgIHJlc3VtZVJlY29yZGluZzogZnVuY3Rpb24gcmVzdW1lUmVjb3JkaW5nKCkge1xuICAgICAgICBpZiAoIXRoaXMucmVjUGx1Z2luIHx8ICF0aGlzLnJlY1BsdWdpbi5yZXN1bWVSZWNvcmRpbmcpIHJldHVybjtcbiAgICAgICAgdGhpcy5yZWNQbHVnaW4ucmVzdW1lUmVjb3JkaW5nKCk7XG4gICAgfSxcblxuICAgIGlzQXZhaWxhYmxlOiBmdW5jdGlvbiBpc0F2YWlsYWJsZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlY1BsdWdpbiB8fCAhdGhpcy5yZWNQbHVnaW4uaXNBdmFpbGFibGUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGZsYWcgPSB0aGlzLnJlYy5pc0F2YWlsYWJsZSgpO1xuICAgICAgICBjYy5sb2coJyMjIyMjIyMjIyMgaXNBdmFpbGFibGUgIyMjIyMjIyMjIyBjb2RlOiAnICsgZmxhZyk7XG4gICAgICAgIHJldHVybiBmbGFnO1xuICAgIH0sXG5cbiAgICBzaG93VG9vbEJhcjogZnVuY3Rpb24gc2hvd1Rvb2xCYXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5yZWNQbHVnaW4gfHwgIXRoaXMucmVjUGx1Z2luLnNob3dUb29sQmFyKSByZXR1cm47XG4gICAgICAgIHRoaXMucmVjUGx1Z2luLnNob3dUb29sQmFyKCk7XG4gICAgfSxcblxuICAgIGhpZGVUb29sQmFyOiBmdW5jdGlvbiBoaWRlVG9vbEJhcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlY1BsdWdpbiB8fCAhdGhpcy5yZWNQbHVnaW4uaGlkZVRvb2xCYXIpIHJldHVybjtcbiAgICAgICAgdGhpcy5yZWNQbHVnaW4uaGlkZVRvb2xCYXIoKTtcbiAgICB9LFxuXG4gICAgaXNSZWNvcmRpbmc6IGZ1bmN0aW9uIGlzUmVjb3JkaW5nKCkge1xuICAgICAgICBpZiAoIXRoaXMucmVjUGx1Z2luIHx8ICF0aGlzLnJlY1BsdWdpbi5pc1JlY29yZGluZykgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgZmxhZyA9IHRoaXMucmVjLmlzUmVjb3JkaW5nKCk7XG4gICAgICAgIGNjLmxvZygnIyMjIyMjIyMjIyBpc1JlY29yZGluZyAjIyMjIyMjIyMjIGNvZGU6ICcgKyBmbGFnKTtcbiAgICAgICAgcmV0dXJuIGZsYWc7XG4gICAgfSxcblxuICAgIHNob3dWaWRlb0NlbnRlcjogZnVuY3Rpb24gc2hvd1ZpZGVvQ2VudGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMucmVjUGx1Z2luIHx8ICF0aGlzLnJlY1BsdWdpbi5zaG93VmlkZW9DZW50ZXIpIHJldHVybjtcbiAgICAgICAgdGhpcy5yZWNQbHVnaW4uc2hvd1ZpZGVvQ2VudGVyKCk7XG4gICAgfSxcblxuICAgIGVudGVyUGxhdGZvcm06IGZ1bmN0aW9uIGVudGVyUGxhdGZvcm0oKSB7XG4gICAgICAgIGlmICghdGhpcy5yZWNQbHVnaW4gfHwgIXRoaXMucmVjUGx1Z2luLmVudGVyUGxhdGZvcm0pIHJldHVybjtcbiAgICAgICAgdGhpcy5yZWNQbHVnaW4uZW50ZXJQbGF0Zm9ybSgpO1xuICAgIH0sXG5cbiAgICBzZXRNZXRhRGF0YTogZnVuY3Rpb24gc2V0TWV0YURhdGEoKSB7XG4gICAgICAgIGlmICghdGhpcy5yZWNQbHVnaW4gfHwgIXRoaXMucmVjUGx1Z2luLnNldE1ldGFEYXRhKSByZXR1cm47XG4gICAgICAgIHZhciBkYXRhID0geyBleHQ6IFwibG9naW5cIiB9O1xuICAgICAgICB0aGlzLnJlY1BsdWdpbi5zZXRNZXRhRGF0YShkYXRhKTtcbiAgICB9LFxuXG4gICAgb25SRUNSZXN1bHQ6IGZ1bmN0aW9uIG9uUkVDUmVzdWx0KGNvZGUsIG1zZykge1xuICAgICAgICBjYy5sb2coJyMjIyMjIyMjIyMgUkVDIFJFU1VMVCAjIyMjIyMjIyMjIGNvZGU6ICcgKyBjb2RlICsgJyxtc2c6ICcgKyBtc2cpO1xuICAgICAgICBzd2l0Y2ggKGNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgYW55c2RrLlJFQ1Jlc3VsdENvZGUua1JFQ0luaXRTdWNjZXNzOlxuICAgICAgICAgICAgICAgIC8v5Yid5aeL5YyW5oiQ5YqfXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiIyMjIyMjIyMjIyBrUkVDSW5pdFN1Y2Nlc3MgIyMjIyMjIyMjI1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYW55c2RrLlJFQ1Jlc3VsdENvZGUua1JFQ0luaXRGYWlsOlxuICAgICAgICAgICAgICAgIC8v5Yid5aeL5YyW5aSx6LSlXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiIyMjIyMjIyMjIyBrUkVDSW5pdEZhaWwgIyMjIyMjIyMjI1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYW55c2RrLlJFQ1Jlc3VsdENvZGUua1JFQ1N0YXJ0UmVjb3JkaW5nOlxuICAgICAgICAgICAgICAgIC8v5byA5aeL5b2V5Yi2XG4gICAgICAgICAgICAgICAgY2MubG9nKFwiIyMjIyMjIyMjIyBrUkVDU3RhcnRSZWNvcmRpbmcgIyMjIyMjIyMjI1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYW55c2RrLlJFQ1Jlc3VsdENvZGUua1JFQ1N0b3BSZWNvcmRpbmc6XG4gICAgICAgICAgICAgICAgLy/nu5PmnZ/lvZXliLZcbiAgICAgICAgICAgICAgICBjYy5sb2coXCIjIyMjIyMjIyMjIGtSRUNTdG9wUmVjb3JkaW5nICMjIyMjIyMjIyNcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGFueXNkay5SRUNSZXN1bHRDb2RlLmtSRUNQYXVzZVJlY29yZGluZzpcbiAgICAgICAgICAgICAgICAvL+aaguWBnOW9leWItlxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIiMjIyMjIyMjIyMga1JFQ1BhdXNlUmVjb3JkaW5nICMjIyMjIyMjIyNcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGFueXNkay5SRUNSZXN1bHRDb2RlLmtSRUNSZXN1bWVSZWNvcmRpbmc6XG4gICAgICAgICAgICAgICAgLy/mgaLlpI3lvZXliLZcbiAgICAgICAgICAgICAgICBjYy5sb2coXCIjIyMjIyMjIyMjIGtSRUNSZXN1bWVSZWNvcmRpbmcgIyMjIyMjIyMjI1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYW55c2RrLlJFQ1Jlc3VsdENvZGUua1JFQ0VudGVyU0RLUGFnZTpcbiAgICAgICAgICAgICAgICAvL+i/m+WFpVNES+mhtemdolxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIiMjIyMjIyMjIyMga1JFQ0VudGVyU0RLUGFnZSAjIyMjIyMjIyMjXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhbnlzZGsuUkVDUmVzdWx0Q29kZS5rUkVDUXVpdFNES1BhZ2U6XG4gICAgICAgICAgICAgICAgLy/pgIDlh7pTREvpobXpnaJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCIjIyMjIyMjIyMjIGtSRUNRdWl0U0RLUGFnZSAjIyMjIyMjIyMjXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhbnlzZGsuUkVDUmVzdWx0Q29kZS5rUkVDU2hhcmVTdWNjZXNzOlxuICAgICAgICAgICAgICAgIC8v6KeG6aKR5YiG5Lqr5oiQ5YqfXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiIyMjIyMjIyMjIyBrUkVDU2hhcmVTdWNjZXNzICMjIyMjIyMjIyNcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGFueXNkay5SRUNSZXN1bHRDb2RlLmtSRUNTaGFyZUZhaWw6XG4gICAgICAgICAgICAgICAgLy/op4bpopHliIbkuqvlpLHotKVcbiAgICAgICAgICAgICAgICBjYy5sb2coXCIjIyMjIyMjIyMjIGtSRUNTaGFyZUZhaWwgIyMjIyMjIyMjI1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzkzNDFmM2ZEZEJNakpMS2g0RCtrSkpLJywgJ1JlZmVyZW5jZVR5cGVQcm9wZXJ0aWVzJyk7XG4vLyBjYXNlcy8wNV9zY3JpcHRpbmcvMDFfcHJvcGVydGllcy9SZWZlcmVuY2VUeXBlUHJvcGVydGllcy5qc1xuXG52YXIgTXlDdXN0b21Db21wb25lbnQgPSByZXF1aXJlKCdNeUN1c3RvbUNvbXBvbmVudCcpO1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG15Tm9kZToge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBteVNwcml0ZToge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlXG4gICAgICAgIH0sXG4gICAgICAgIG15TGFiZWw6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIG15Q29tcG9uZW50OiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBNeUN1c3RvbUNvbXBvbmVudFxuICAgICAgICB9LFxuICAgICAgICBteVNwcml0ZUZyYW1lOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZVxuICAgICAgICB9LFxuICAgICAgICBteUF0bGFzOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVBdGxhc1xuICAgICAgICB9LFxuICAgICAgICBteVByZWZhYjoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIG15QXVkaW9DbGlwOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB1cmw6IGNjLkF1ZGlvQ2xpcFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm15TGFiZWwuc3RyaW5nID0gdGhpcy5teUNvbXBvbmVudC5nZXRQb3dlcigpLnRvU3RyaW5nKCk7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7fVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdhMGM3ZndyWlVwTjdKUzh4OXJFdFNmbCcsICdSaWNoVGV4dEV2ZW50cycpO1xuLy8gY2FzZXMvMDJfdWkvMTFfcmljaHRleHQvUmljaFRleHRFdmVudHMuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxvZ01lc3NhZ2U6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9LFxuXG4gICAgY2xpY2ttZTogZnVuY3Rpb24gY2xpY2ttZShldmVudCkge1xuICAgICAgICB2YXIgY2xpY2tQb3NpdGlvbiA9IGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCk7XG4gICAgICAgIHRoaXMubG9nTWVzc2FnZS5zdHJpbmcgPSBcIkNsaWNrZWQgYXQ6IFwiICsgcGFyc2VGbG9hdChjbGlja1Bvc2l0aW9uLngudG9GaXhlZCgpKSArIFwiLCB5ID0gXCIgKyBwYXJzZUZsb2F0KGNsaWNrUG9zaXRpb24ueS50b0ZpeGVkKDIpKTtcbiAgICB9XG5cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNTUzMGNMYzJ3SkZWcFdrQnhBTEMzM0cnLCAnUnVudGltZUxhYmVsJyk7XG4vLyBjYXNlcy9ncmFwaGljcy9SdW50aW1lTGFiZWwuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIGlzUnVudGltZSA9IHR5cGVvZiBydW50aW1lICE9PSAndW5kZWZpbmVkJztcbiAgICAgICAgaWYgKCFpc1J1bnRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzQ3M2I4d3hzNTVPc0p2b3hWZFlDelRGJywgJ1NjZW5lTGlzdCcpO1xuLy8gc2NyaXB0cy9HbG9iYWwvU2NlbmVMaXN0LmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaXRlbVByZWZhYjoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIGluaXRJdGVtQ291bnQ6IDAsXG4gICAgICAgIHNjcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXcsXG4gICAgICAgIGJ1ZmZlclpvbmU6IDAgfSxcblxuICAgIC8vIHdoZW4gaXRlbSBpcyBhd2F5IGZyb20gYnVmZmVyWm9uZSwgd2UgcmVsb2NhdGUgaXRcbiAgICBjcmVhdGVJdGVtOiBmdW5jdGlvbiBjcmVhdGVJdGVtKHgsIHksIG5hbWUsIHVybCkge1xuICAgICAgICB2YXIgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVByZWZhYik7XG4gICAgICAgIHZhciBpdGVtQ29tcCA9IGl0ZW0uZ2V0Q29tcG9uZW50KCdMaXN0SXRlbScpO1xuICAgICAgICB2YXIgbGFiZWwgPSBpdGVtQ29tcC5sYWJlbDtcbiAgICAgICAgbGFiZWwuc3RyaW5nID0gbmFtZTtcblxuICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICBpdGVtQ29tcC51cmwgPSB1cmw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpdGVtLndpZHRoID0gdztcbiAgICAgICAgaXRlbS54ID0geDtcbiAgICAgICAgaXRlbS55ID0geTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9LFxuXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChtZW51KSB7XG4gICAgICAgIHRoaXMubWVudSA9IG1lbnU7XG4gICAgICAgIHRoaXMuc2NlbmVMaXN0ID0gW107XG4gICAgICAgIHRoaXMuaXRlbUxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lciA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSAwLjI7XG4gICAgICAgIHRoaXMubGFzdENvbnRlbnRQb3NZID0gMDsgLy8gdXNlIHRoaXMgdmFyaWFibGUgdG8gZGV0ZWN0IGlmIHdlIGFyZSBzY3JvbGxpbmcgdXAgb3IgZG93blxuICAgICAgICB0aGlzLmluaXRMaXN0KCk7XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIGluaXRMaXN0OiBmdW5jdGlvbiBpbml0TGlzdCgpIHtcbiAgICAgICAgdmFyIHNjZW5lcyA9IGNjLmdhbWUuX3NjZW5lSW5mb3M7XG4gICAgICAgIHZhciBkaWN0ID0ge307XG5cbiAgICAgICAgaWYgKHNjZW5lcykge1xuICAgICAgICAgICAgdmFyIGksIGo7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2NlbmVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IHNjZW5lc1tpXS51cmw7XG4gICAgICAgICAgICAgICAgdmFyIGRpcm5hbWUgPSBjYy5wYXRoLmRpcm5hbWUodXJsKS5yZXBsYWNlKCdkYjovL2Fzc2V0cy9jYXNlcy8nLCAnJyk7XG4gICAgICAgICAgICAgICAgaWYgKGRpcm5hbWUgPT09ICdkYjovL2Fzc2V0cy9yZXNvdXJjZXMvdGVzdCBhc3NldHMnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgc2NlbmVuYW1lID0gY2MucGF0aC5iYXNlbmFtZSh1cmwsICcuZmlyZScpO1xuICAgICAgICAgICAgICAgIGlmIChzY2VuZW5hbWUgPT09ICdUZXN0TGlzdCcpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFkaXJuYW1lKSBkaXJuYW1lID0gJ19yb290JztcbiAgICAgICAgICAgICAgICBpZiAoIWRpY3RbZGlybmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgZGljdFtkaXJuYW1lXSA9IHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaWN0W2Rpcm5hbWVdW3NjZW5lbmFtZV0gPSB1cmw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5sb2coJ2ZhaWxlZCB0byBnZXQgc2NlbmUgbGlzdCEnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb21waWxlIHNjZW5lIGRpY3QgdG8gYW4gYXJyYXlcbiAgICAgICAgdmFyIGRpcnMgPSBPYmplY3Qua2V5cyhkaWN0KTtcbiAgICAgICAgZGlycy5zb3J0KCk7XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBkaXJzLmxlbmd0aDsgKytfaSkge1xuICAgICAgICAgICAgdGhpcy5zY2VuZUxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogZGlyc1tfaV0sXG4gICAgICAgICAgICAgICAgdXJsOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBzY2VuZW5hbWVzID0gT2JqZWN0LmtleXMoZGljdFtkaXJzW19pXV0pO1xuICAgICAgICAgICAgc2NlbmVuYW1lcy5zb3J0KCk7XG4gICAgICAgICAgICBmb3IgKHZhciBfaiA9IDA7IF9qIDwgc2NlbmVuYW1lcy5sZW5ndGg7ICsrX2opIHtcbiAgICAgICAgICAgICAgICB2YXIgX25hbWUgPSBzY2VuZW5hbWVzW19qXTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIHVybDogZGljdFtkaXJzW19pXV1bX25hbWVdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHkgPSAwO1xuICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gKHRoaXMuc2NlbmVMaXN0Lmxlbmd0aCArIDEpICogNTA7XG4gICAgICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IHRoaXMuaW5pdEl0ZW1Db3VudDsgKytfaTIpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtUHJlZmFiKS5nZXRDb21wb25lbnQoJ0xpc3RJdGVtJyk7XG4gICAgICAgICAgICB2YXIgaXRlbUluZm8gPSB0aGlzLnNjZW5lTGlzdFtfaTJdO1xuICAgICAgICAgICAgaXRlbS5pbml0KHRoaXMubWVudSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoaXRlbS5ub2RlKTtcbiAgICAgICAgICAgIHkgLT0gNTA7XG4gICAgICAgICAgICBpdGVtLnVwZGF0ZUl0ZW0oX2kyLCB5LCBpdGVtSW5mby5uYW1lLCBpdGVtSW5mby51cmwpO1xuICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdldFBvc2l0aW9uSW5WaWV3OiBmdW5jdGlvbiBnZXRQb3NpdGlvbkluVmlldyhpdGVtKSB7XG4gICAgICAgIC8vIGdldCBpdGVtIHBvc2l0aW9uIGluIHNjcm9sbHZpZXcncyBub2RlIHNwYWNlXG4gICAgICAgIHZhciB3b3JsZFBvcyA9IGl0ZW0ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihpdGVtLnBvc2l0aW9uKTtcbiAgICAgICAgdmFyIHZpZXdQb3MgPSB0aGlzLnNjcm9sbFZpZXcubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG4gICAgICAgIHJldHVybiB2aWV3UG9zO1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVRpbWVyICs9IGR0O1xuICAgICAgICBpZiAodGhpcy51cGRhdGVUaW1lciA8IHRoaXMudXBkYXRlSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gd2UgZG9uJ3QgbmVlZCB0byBkbyB0aGUgbWF0aCBldmVyeSBmcmFtZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlVGltZXIgPSAwO1xuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLml0ZW1MaXN0O1xuICAgICAgICB2YXIgYnVmZmVyID0gdGhpcy5idWZmZXJab25lO1xuICAgICAgICB2YXIgaXNEb3duID0gdGhpcy5ub2RlLnkgPCB0aGlzLmxhc3RDb250ZW50UG9zWTsgLy8gc2Nyb2xsaW5nIGRpcmVjdGlvblxuICAgICAgICB2YXIgY3VySXRlbUNvdW50ID0gdGhpcy5pdGVtTGlzdC5sZW5ndGg7XG4gICAgICAgIHZhciBvZmZzZXQgPSA1MCAqIGN1ckl0ZW1Db3VudDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjdXJJdGVtQ291bnQ7ICsraSkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgIHZhciBpdGVtTm9kZSA9IGl0ZW0ubm9kZTtcbiAgICAgICAgICAgIHZhciB2aWV3UG9zID0gdGhpcy5nZXRQb3NpdGlvbkluVmlldyhpdGVtTm9kZSk7XG4gICAgICAgICAgICBpZiAoaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgYXdheSBmcm9tIGJ1ZmZlciB6b25lIGFuZCBub3QgcmVhY2hpbmcgdG9wIG9mIGNvbnRlbnRcbiAgICAgICAgICAgICAgICBpZiAodmlld1Bvcy55IDwgLWJ1ZmZlciAmJiBpdGVtTm9kZS55ICsgb2Zmc2V0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3SWR4ID0gaXRlbS5pbmRleCAtIGN1ckl0ZW1Db3VudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0luZm8gPSB0aGlzLnNjZW5lTGlzdFtuZXdJZHhdO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnVwZGF0ZUl0ZW0obmV3SWR4LCBpdGVtTm9kZS55ICsgb2Zmc2V0LCBuZXdJbmZvLm5hbWUsIG5ld0luZm8udXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlmIGF3YXkgZnJvbSBidWZmZXIgem9uZSBhbmQgbm90IHJlYWNoaW5nIGJvdHRvbSBvZiBjb250ZW50XG4gICAgICAgICAgICAgICAgaWYgKHZpZXdQb3MueSA+IGJ1ZmZlciAmJiBpdGVtTm9kZS55IC0gb2Zmc2V0ID4gLXRoaXMubm9kZS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0lkeCA9IGl0ZW0uaW5kZXggKyBjdXJJdGVtQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdJbmZvID0gdGhpcy5zY2VuZUxpc3RbbmV3SWR4XTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS51cGRhdGVJdGVtKG5ld0lkeCwgaXRlbU5vZGUueSAtIG9mZnNldCwgbmV3SW5mby5uYW1lLCBuZXdJbmZvLnVybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHVwZGF0ZSBsYXN0Q29udGVudFBvc1lcbiAgICAgICAgdGhpcy5sYXN0Q29udGVudFBvc1kgPSB0aGlzLm5vZGUueTtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2I1ZjBiRE1uaTVQRG92ZktVV2hIRkczJywgJ1NoYXJlJyk7XG4vLyBjYXNlcy9hbnlzZGsvMDNfc2hhcmUvU2hhcmUuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc01vYmlsZSkge1xuICAgICAgICAgICAgdGhpcy5zaGFyZVBsdWdpbiA9IGFueXNkay5hZ2VudE1hbmFnZXIuZ2V0U2hhcmVQbHVnaW4oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNoYXJlUGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZVBsdWdpbi5zZXRMaXN0ZW5lcih0aGlzLm9uU2hhcmVSZXN1bHQsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNoYXJlOiBmdW5jdGlvbiBzaGFyZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNoYXJlUGx1Z2luKSByZXR1cm47XG4gICAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICAgICAgJ3RpdGxlJzogJ0RhcmsgU2xhc2gnLCAvLyDmoIfpopjlkI3np7BcbiAgICAgICAgICAgICd0aXRsZVVybCc6ICdodHRwOi8vd3d3LmNvY29zLmNvbScsIC8vIOagh+mimOmTvuaOpVxuICAgICAgICAgICAgJ3NpdGUnOiAnRGFyayBTbGFzaCcsIC8vIOagh+mimOe9keermeWQjVxuICAgICAgICAgICAgJ3NpdGVVcmwnOiAnaHR0cDovL3d3dy5jb2Nvcy5jb20nLCAvLyDmoIfpopjnvZHnq5npk77mjqVcbiAgICAgICAgICAgICd0ZXh0JzogJ+aal+m7keaWqea4uOaIj+WItuS9nOa8lOekuiAtIENvY29zIENyZWF0b3LliLbpgKAnLCAvL+WIhuS6q+WGheWuuVxuICAgICAgICAgICAgJ2NvbW1lbnQnOiAn5pegJywgLy/or4TorrpcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICfmmpfpu5HmlqnmuLjmiI/liLbkvZzmvJTnpLogLSBDb2NvcyBDcmVhdG9y5Yi26YCgJywgLy/mj4/ov7BcbiAgICAgICAgICAgICdpbWFnZVRpdGxlJzogJ0RhcmsgU2xhc2gnLCAvL+WbvueJh+agh+mimFxuICAgICAgICAgICAgJ2ltYWdlVXJsJzogJ2h0dHA6Ly92ZWV3by5jb20vcHJvbW8vaW1nL2RhcmtzbGFzaF93ZWJfd2ViX2Jhbm5lci5wbmcnLCAvL+WIhuS6q+WbvueJh+mTvuaOpVxuICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vd3d3LnZlZXdvLmNvbS9nYW1lcy8/bmFtZT1kYXJrc2xhc2gnIH07XG4gICAgICAgIC8v5YiG5Lqr6ZO+5o6lXG4gICAgICAgIHRoaXMuc2hhcmVQbHVnaW4uc2hhcmUoaW5mbyk7XG4gICAgfSxcblxuICAgIG9uU2hhcmVSZXN1bHQ6IGZ1bmN0aW9uIG9uU2hhcmVSZXN1bHQoY29kZSwgbXNnKSB7XG4gICAgICAgIGNjLmxvZygnIyMjIyMjIyMjIyBTSEFSRSBSRVNVTFQgIyMjIyMjIyMjIyBjb2RlOiAnICsgY29kZSArICcsbXNnOiAnICsgbXNnKTtcbiAgICAgICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGFueXNkay5TaGFyZVJlc3VsdENvZGUua1NoYXJlU3VjY2VzczpcbiAgICAgICAgICAgICAgICBjYy5sb2coXCIjIyMjIyMjIyMjIGtTaGFyZVN1Y2Nlc3MgIyMjIyMjIyMjI1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYW55c2RrLlNoYXJlUmVzdWx0Q29kZS5rU2hhcmVGYWlsOlxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIiMjIyMjIyMjIyMga1NoYXJlRmFpbCAjIyMjIyMjIyMjXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhbnlzZGsuU2hhcmVSZXN1bHRDb2RlLmtTaGFyZUNhbmNlbDpcbiAgICAgICAgICAgICAgICBjYy5sb2coXCIjIyMjIyMjIyMjIGtTaGFyZUNhbmNlbCAjIyMjIyMjIyMjXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhbnlzZGsuU2hhcmVSZXN1bHRDb2RlLmtTaGFyZU5ldHdvcmtFcnJvcjpcbiAgICAgICAgICAgICAgICBjYy5sb2coXCIjIyMjIyMjIyMjIGtTaGFyZU5ldHdvcmtFcnJvciAjIyMjIyMjIyMjXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYWU2ZmNSOGN1RkdSWUhXNTI1VkpEL2snLCAnU2hlZXBBbmltYXRpb25DdHJsJyk7XG4vLyBjYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vU3ByaXRlQW5pbWF0aW9uL1NoZWVwQW5pbWF0aW9uQ3RybC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNoZWVwQW5pbToge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQW5pbWF0aW9uXG4gICAgICAgIH1cbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgYW5pbSA9IHRoaXMuc2hlZXBBbmltO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFuaW0ucGxheSgnc2hlZXBfanVtcCcpO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHt9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzA5MmEzd1lGN3BCVUxkUDlTTHdHVUJRJywgJ1Nob290ZXInKTtcbi8vIGNhc2VzL2NvbGxpZGVyL1Nob290ZXIvU2hvb3Rlci5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgICAgIGJ1bGxldDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XG5cbiAgICAgICAgdmFyIHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcblxuICAgICAgICBjYy5ldmVudE1hbmFnZXIuYWRkTGlzdGVuZXIoe1xuICAgICAgICAgICAgZXZlbnQ6IGNjLkV2ZW50TGlzdGVuZXIuVE9VQ0hfT05FX0JZX09ORSxcbiAgICAgICAgICAgIG9uVG91Y2hCZWdhbjogZnVuY3Rpb24gb25Ub3VjaEJlZ2FuKHRvdWNoLCBldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciB0b3VjaExvYyA9IHRvdWNoLmdldExvY2F0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUoX3RoaXMuYnVsbGV0KTtcbiAgICAgICAgICAgICAgICBidWxsZXQucG9zaXRpb24gPSB0b3VjaExvYztcbiAgICAgICAgICAgICAgICBidWxsZXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBidWxsZXQuekluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgc2NlbmUuYWRkQ2hpbGQoYnVsbGV0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcy5ub2RlKTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbiBvbkRpc2FibGUoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRGVidWdEcmF3ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNWE2ZGZSemhUQk1wNVUzaWw4REptQlonLCAnU2hvd0NvbGxpZGVyJyk7XG4vLyBjYXNlcy9jb2xsaWRlci9TaGFwZS9TaG93Q29sbGlkZXIuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcblxuICAgIG9uQnRuQ2xpY2s6IGZ1bmN0aW9uIG9uQnRuQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgdmFyIHNoYXBlQ2xhc3NOYW1lID0gJ2NjLicgKyB0YXJnZXQubmFtZSArICdDb2xsaWRlcic7XG4gICAgICAgIHZhciBub2RlUGF0aCA9ICdDYW52YXMvcm9vdC8nICsgdGFyZ2V0LnBhcmVudC5uYW1lO1xuICAgICAgICB2YXIgY29sbGlkZXIgPSBjYy5maW5kKG5vZGVQYXRoKS5nZXRDb21wb25lbnQoc2hhcGVDbGFzc05hbWUpO1xuICAgICAgICBjb2xsaWRlci5lbmFibGVkID0gIWNvbGxpZGVyLmVuYWJsZWQ7XG5cbiAgICAgICAgdmFyIGxhYmVsID0gdGFyZ2V0LmdldENoaWxkQnlOYW1lKCdMYWJlbCcpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGlmIChjb2xsaWRlci5lbmFibGVkKSB7XG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBsYWJlbC5zdHJpbmcucmVwbGFjZSgnU2hvdycsICdIaWRlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBsYWJlbC5zdHJpbmcucmVwbGFjZSgnSGlkZScsICdTaG93Jyk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2I2MDY3YTErSjVGVzRHMzBubVZMVS9kJywgJ1NpbXBsZUFjdGlvbicpO1xuLy8gY2FzZXMvMDNfZ2FtZXBsYXkvMDJfYWN0aW9ucy9TaW1wbGVBY3Rpb24uanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGp1bXBlcjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yTm9kZToge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuc3F1YXNoQWN0aW9uID0gY2Muc2NhbGVUbygwLjIsIDEsIDAuNik7XG4gICAgICAgIHRoaXMuc3RyZXRjaEFjdGlvbiA9IGNjLnNjYWxlVG8oMC4yLCAxLCAxLjIpO1xuICAgICAgICB0aGlzLnNjYWxlQmFja0FjdGlvbiA9IGNjLnNjYWxlVG8oMC4xLCAxLCAxKTtcbiAgICAgICAgdGhpcy5tb3ZlVXBBY3Rpb24gPSBjYy5tb3ZlQnkoMSwgY2MucCgwLCAyMDApKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uT3V0KCkpO1xuICAgICAgICB0aGlzLm1vdmVEb3duQWN0aW9uID0gY2MubW92ZUJ5KDEsIGNjLnAoMCwgLTIwMCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25JbigpKTtcbiAgICAgICAgdmFyIHNlcSA9IGNjLnNlcXVlbmNlKHRoaXMuc3F1YXNoQWN0aW9uLCB0aGlzLnN0cmV0Y2hBY3Rpb24sIHRoaXMubW92ZVVwQWN0aW9uLCB0aGlzLnNjYWxlQmFja0FjdGlvbiwgdGhpcy5tb3ZlRG93bkFjdGlvbiwgdGhpcy5zcXVhc2hBY3Rpb24sIHRoaXMuc2NhbGVCYWNrQWN0aW9uKTtcbiAgICAgICAgLy8gdGhpcyBpcyBhIHRlbXAgYXBpIHdoaWNoIHdpbGwgYmUgY29tYmluZWQgdG8gY2MuTm9kZVxuICAgICAgICB0aGlzLmp1bXBlci5ydW5BY3Rpb24oc2VxKTtcblxuICAgICAgICB0aGlzLmNvbG9yTm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MudGludFRvKDIsIDI1NSwgMCwgMCksIGNjLmRlbGF5VGltZSgwLjUpLCBjYy5mYWRlT3V0KDEpLCBjYy5kZWxheVRpbWUoMC41KSwgY2MuZmFkZUluKDEpLCBjYy5kZWxheVRpbWUoMC41KSwgY2MudGludFRvKDIsIDI1NSwgMjU1LCAyNTUpKS5yZXBlYXQoMikpO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnNjg2NzVLd2ZFbEFkYXVtUGwxYnlOaDcnLCAnU2ltcGxlQnV0dG9uQ3RybCcpO1xuLy8gY2FzZXMvMDJfdWkvMDNfYnV0dG9uL1NpbXBsZUJ1dHRvbi9TaW1wbGVCdXR0b25DdHJsLmpzXG5cbnZhciBpMThuID0gcmVxdWlyZSgnaTE4bicpO1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGJ1dHRvbkxlZnQ6IGNjLkJ1dHRvbixcbiAgICAgICAgYnV0dG9uUmlnaHQ6IGNjLkJ1dHRvbixcbiAgICAgICAgZGlzcGxheTogY2MuTGFiZWxcbiAgICB9LFxuXG4gICAgb25CdG5MZWZ0Q2xpY2tlZDogZnVuY3Rpb24gb25CdG5MZWZ0Q2xpY2tlZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xlZnQgYnV0dG9uIGNsaWNrZWQhJyk7XG4gICAgICAgIHRoaXMuZGlzcGxheS50ZXh0S2V5ID0gaTE4bi50KFwiY2FzZXMvMDJfdWkvMDNfYnV0dG9uL1NpbXBsZUJ1dHRvbi5qcy4xXCIpO1xuICAgIH0sXG5cbiAgICBvbkJ0blJpZ2h0Q2xpY2tlZDogZnVuY3Rpb24gb25CdG5SaWdodENsaWNrZWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSaWdodCBidXR0b24gY2xpY2tlZCEnKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5LnRleHRLZXkgPSBpMThuLnQoXCJjYXNlcy8wMl91aS8wM19idXR0b24vU2ltcGxlQnV0dG9uLmpzLjJcIik7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdjM2Y5NzFpeUNkSWg2eGRhTzQ5WFAwRicsICdTaW1wbGVLZXlib2FyZE1vdmVtZW50Jyk7XG4vLyBjYXNlcy8wM19nYW1lcGxheS8wMV9wbGF5ZXJfY29udHJvbC9LZXlib2FyZElucHV0L1NpbXBsZUtleWJvYXJkTW92ZW1lbnQuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzaGVlcDoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICAvLyBzZXQgaW5pdGlhbCBtb3ZlIGRpcmVjdGlvblxuICAgICAgICB0aGlzLnR1cm5SaWdodCgpO1xuXG4gICAgICAgIC8vYWRkIGtleWJvYXJkIGlucHV0IGxpc3RlbmVyIHRvIGNhbGwgdHVybkxlZnQgYW5kIHR1cm5SaWdodFxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgIH0sXG5cbiAgICBvbktleURvd246IGZ1bmN0aW9uIG9uS2V5RG93bihldmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgY2MuS0VZLmE6XG4gICAgICAgICAgICBjYXNlIGNjLktFWS5sZWZ0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0dXJuIGxlZnQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5MZWZ0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLktFWS5kOlxuICAgICAgICAgICAgY2FzZSBjYy5LRVkucmlnaHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3R1cm4gcmlnaHQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5SaWdodCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMuc2hlZXAueCArPSB0aGlzLnNwZWVkICogZHQ7XG4gICAgfSxcblxuICAgIHR1cm5MZWZ0OiBmdW5jdGlvbiB0dXJuTGVmdCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IC0xMDA7XG4gICAgICAgIHRoaXMuc2hlZXAuc2NhbGVYID0gMTtcbiAgICB9LFxuXG4gICAgdHVyblJpZ2h0OiBmdW5jdGlvbiB0dXJuUmlnaHQoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAxMDA7XG4gICAgICAgIHRoaXMuc2hlZXAuc2NhbGVYID0gLTE7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdmZGUzM3JXdDgxTXZaV083UVEzanYzaicsICdTaW1wbGVNb3Rpb24nKTtcbi8vIGNhc2VzL2NvbGxpZGVyL1V0aWxzL1NpbXBsZU1vdGlvbi5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbW92ZVNwZWVkOiAxMDAsXG4gICAgICAgIHJvdGF0aW9uU3BlZWQ6IDkwXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMubm9kZS54ICs9IGR0ICogdGhpcy5tb3ZlU3BlZWQ7XG4gICAgICAgIHRoaXMubm9kZS5yb3RhdGlvbiArPSBkdCAqIHRoaXMucm90YXRpb25TcGVlZDtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2ZjZmVmdmpQZ2RHRUtuZk93dW9JVkpEJywgJ1NpbmdsZXRvbkN0cmwnKTtcbi8vIGNhc2VzLzA1X3NjcmlwdGluZy8wOV9zaW5nbGV0b24vU2luZ2xldG9uQ3RybC5qc1xuXG52YXIgU2luZ2xldG9uID0gcmVxdWlyZShcIlNpbmdsZXRvblwiKTtcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIHN0YXJ0OiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZShcIk1vbnN0ZXJcIik7XG4gICAgICAgIHZhciBzcHJpdGUgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBTaW5nbGV0b24uaW5zdGFuY2UubW9uc3Rlckljb247XG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMzc5ZDJLNEdVdEN2N3BCOSt3dXo0TGInLCAnU2luZ2xldG9uJyk7XG4vLyBjYXNlcy8wNV9zY3JpcHRpbmcvMDlfc2luZ2xldG9uL1NpbmdsZXRvbi5qc1xuXG52YXIgU2luZ2xldG9uID0gY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG1vbnN0ZXJJY29uOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhdGljczoge1xuICAgICAgICBpbnN0YW5jZTogbnVsbFxuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgU2luZ2xldG9uLmluc3RhbmNlID0gdGhpcztcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzA1MWQ1RXB4NjVBUlo5aXRqc3VPOU5MJywgJ1NsaWRlckN0cmwnKTtcbi8vIGNhc2VzLzAyX3VpLzEyX3NsaWRlci9TbGlkZXIvU2xpZGVyQ3RybC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaW1hZ2U6IGNjLk5vZGUsXG4gICAgICAgIG11c2ljOiBjYy5BdWRpb1NvdXJjZSxcbiAgICAgICAgc2xpZGVyX2g6IGNjLlNsaWRlcixcbiAgICAgICAgc2xpZGVyX3Y6IGNjLlNsaWRlclxuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5zbGlkZXJfdi5wcm9ncmVzcyA9IDAuNTtcbiAgICAgICAgdGhpcy5zbGlkZXJfaC5wcm9ncmVzcyA9IDAuNTtcbiAgICAgICAgdGhpcy5fdXBkYXRlSW1hZ2VPcGFjaXR5KHRoaXMuc2xpZGVyX3YucHJvZ3Jlc3MpO1xuICAgICAgICB0aGlzLl91cGRhdGVNdXNpY1ZvbHVtZSh0aGlzLnNsaWRlcl9oLnByb2dyZXNzKTtcbiAgICB9LFxuXG4gICAgX3VwZGF0ZUltYWdlT3BhY2l0eTogZnVuY3Rpb24gX3VwZGF0ZUltYWdlT3BhY2l0eShwcm9ncmVzcykge1xuICAgICAgICB0aGlzLmltYWdlLm9wYWNpdHkgPSBwcm9ncmVzcyAqIDI1NTtcbiAgICB9LFxuXG4gICAgX3VwZGF0ZU11c2ljVm9sdW1lOiBmdW5jdGlvbiBfdXBkYXRlTXVzaWNWb2x1bWUocHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5tdXNpYy52b2x1bWUgPSBwcm9ncmVzcztcbiAgICB9LFxuXG4gICAgb25TbGlkZXJWRXZlbnQ6IGZ1bmN0aW9uIG9uU2xpZGVyVkV2ZW50KHNlbmRlciwgZXZlbnRUeXBlKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUltYWdlT3BhY2l0eShzZW5kZXIucHJvZ3Jlc3MpO1xuICAgIH0sXG5cbiAgICBvblNsaWRlckhFdmVudDogZnVuY3Rpb24gb25TbGlkZXJIRXZlbnQoc2VuZGVyLCBldmVudFR5cGUpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlTXVzaWNWb2x1bWUoc2VuZGVyLnByb2dyZXNzKTtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzVkNGNjMmZpajVLOFpnTXFndDdoVXRNJywgJ1NvY2lhbCcpO1xuLy8gY2FzZXMvYW55c2RrLzA2X3NvY2lhbC9Tb2NpYWwuanNcblxuY2MuQ2xhc3Moe1xuXHRcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG5cdHByb3BlcnRpZXM6IHt9LFxuXG5cdC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuXHRvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcblx0XHRpZiAoY2Muc3lzLmlzTW9iaWxlKSB7XG5cdFx0XHR0aGlzLnNvY2lhbFBsdWdpbiA9IGFueXNkay5hZ2VudE1hbmFnZXIuZ2V0U29jaWFsUGx1Z2luKCk7XG5cdFx0XHRpZiAodGhpcy5zb2NpYWxQbHVnaW4pIHtcblx0XHRcdFx0dGhpcy5zb2NpYWxQbHVnaW4uc2V0TGlzdGVuZXIodGhpcy5vblNvY2lhbFJlc3VsdCwgdGhpcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRzdWJtaXRTY29yZTogZnVuY3Rpb24gc3VibWl0U2NvcmUoKSB7XG5cdFx0aWYgKCF0aGlzLnNvY2lhbFBsdWdpbikgcmV0dXJuO1xuXHRcdHZhciBzY29yZSA9IDEzMTtcblx0XHR0aGlzLnNvY2lhbFBsdWdpbi5zdWJtaXRTY29yZShcImZyaWVuZFwiLCBzY29yZSk7XG5cdH0sXG5cdHNob3dMZWFkZXJib2FyZDogZnVuY3Rpb24gc2hvd0xlYWRlcmJvYXJkKCkge1xuXHRcdGlmICghdGhpcy5zb2NpYWxQbHVnaW4pIHJldHVybjtcblx0XHR0aGlzLnNvY2lhbFBsdWdpbi5zaG93TGVhZGVyYm9hcmQoXCJmcmllbmRcIik7XG5cdH0sXG5cdHVubG9ja0FjaGlldmVtZW50OiBmdW5jdGlvbiB1bmxvY2tBY2hpZXZlbWVudCgpIHtcblx0XHRpZiAoIXRoaXMuc29jaWFsUGx1Z2luKSByZXR1cm47XG5cdFx0dmFyIGFjaEluZm8gPSB7IFwicmFua1wiOiBcImZyaWVuZHNcIiB9O1xuXHRcdHRoaXMuc29jaWFsUGx1Z2luLnVubG9ja0FjaGlldmVtZW50KGFjaEluZm8pO1xuXHR9LFxuXG5cdHNob3dBY2hpZXZlbWVudHM6IGZ1bmN0aW9uIHNob3dBY2hpZXZlbWVudHMoKSB7XG5cdFx0aWYgKCF0aGlzLnNvY2lhbFBsdWdpbikgcmV0dXJuO1xuXHRcdHRoaXMuc29jaWFsUGx1Z2luLnNob3dBY2hpZXZlbWVudHMoKTtcblx0fSxcblxuXHRzaWduSW46IGZ1bmN0aW9uIHNpZ25JbigpIHtcblx0XHRpZiAoIXRoaXMuc29jaWFsUGx1Z2luKSByZXR1cm47XG5cdFx0dGhpcy5zb2NpYWxQbHVnaW4uc2lnbkluKCk7XG5cdH0sXG5cblx0c2lnbk91dDogZnVuY3Rpb24gc2lnbk91dCgpIHtcblx0XHRpZiAoIXRoaXMuc29jaWFsUGx1Z2luKSByZXR1cm47XG5cdFx0dGhpcy5zb2NpYWxQbHVnaW4uc2lnbk91dCgpO1xuXHR9LFxuXG5cdG9uU29jaWFsUmVzdWx0OiBmdW5jdGlvbiBvblNvY2lhbFJlc3VsdChjb2RlLCBtc2cpIHtcblx0XHRjYy5sb2coJyMjIyMjIyMjIyMgU09DSUFMIFJFU1VMVCAjIyMjIyMjIyMjIGNvZGU6ICcgKyBjb2RlICsgJyxtc2c6ICcgKyBtc2cpO1xuXHRcdHN3aXRjaCAoY29kZSkge1xuXHRcdFx0Y2FzZSBhbnlzZGsuU29jaWFsUmV0Q29kZS5rU2NvcmVTdWJtaXRTdWNjZWVkOlxuXHRcdFx0XHRjYy5sb2coXCIjIyMjIyMjIyMjIGtTY29yZVN1Ym1pdFN1Y2NlZWQgIyMjIyMjIyMjI1wiKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIGFueXNkay5Tb2NpYWxSZXRDb2RlLmtTY29yZVN1Ym1pdGZhaWw6XG5cdFx0XHRcdGNjLmxvZyhcIiMjIyMjIyMjIyMga1Njb3JlU3VibWl0ZmFpbCAjIyMjIyMjIyMjXCIpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgYW55c2RrLlNvY2lhbFJldENvZGUua0FjaFVubG9ja1N1Y2NlZWQ6XG5cdFx0XHRcdGNjLmxvZyhcIiMjIyMjIyMjIyMga0FjaFVubG9ja1N1Y2NlZWQgIyMjIyMjIyMjI1wiKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIGFueXNkay5Tb2NpYWxSZXRDb2RlLmtBY2hVbmxvY2tGYWlsOlxuXHRcdFx0XHRjYy5sb2coXCIjIyMjIyMjIyMjIGtBY2hVbmxvY2tGYWlsICMjIyMjIyMjIyNcIik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBhbnlzZGsuU29jaWFsUmV0Q29kZS5rU29jaWFsU2lnbkluU3VjY2VlZDpcblx0XHRcdFx0Y2MubG9nKFwiIyMjIyMjIyMjIyBrU29jaWFsU2lnbkluU3VjY2VlZCAjIyMjIyMjIyMjXCIpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgYW55c2RrLlNvY2lhbFJldENvZGUua1NvY2lhbFNpZ25PdXRTdWNjZWVkOlxuXHRcdFx0XHRjYy5sb2coXCIjIyMjIyMjIyMjIGtTb2NpYWxTaWduT3V0U3VjY2VlZCAjIyMjIyMjIyMjXCIpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgYW55c2RrLlNvY2lhbFJldENvZGUua1NvY2lhbFNpZ25PdXRGYWlsOlxuXHRcdFx0XHRjYy5sb2coXCIjIyMjIyMjIyMjIGtTb2NpYWxTaWduT3V0RmFpbCAjIyMjIyMjIyMjXCIpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgYW55c2RrLlNvY2lhbFJldENvZGUua1NvY2lhbFNpZ25PdXRGYWlsOlxuXHRcdFx0XHRjYy5sb2coXCIjIyMjIyMjIyMjIGtTb2NpYWxTaWduT3V0RmFpbCAjIyMjIyMjIyMjXCIpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgYW55c2RrLlNvY2lhbFJldENvZGUua1NvY2lhbEdldEdhbWVGcmllbmRzOlxuXHRcdFx0XHRjYy5sb2coXCIjIyMjIyMjIyMjIGtTb2NpYWxHZXRHYW1lRnJpZW5kcyAjIyMjIyMjIyMjXCIpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnOTExMTVPV1o5aEprSVhhcUNOUlVzWkMnLCAnU3BpbmVDdHJsJyk7XG4vLyBjYXNlcy9zcGluZS9TcGluZUN0cmwuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuICAgIGVkaXRvcjoge1xuICAgICAgICByZXF1aXJlQ29tcG9uZW50OiBzcC5Ta2VsZXRvblxuICAgIH0sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG1peFRpbWU6IDAuMlxuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIHNwaW5lID0gdGhpcy5zcGluZSA9IHRoaXMuZ2V0Q29tcG9uZW50KCdzcC5Ta2VsZXRvbicpO1xuICAgICAgICB0aGlzLl9zZXRNaXgoJ3dhbGsnLCAncnVuJyk7XG4gICAgICAgIHRoaXMuX3NldE1peCgncnVuJywgJ2p1bXAnKTtcbiAgICAgICAgdGhpcy5fc2V0TWl4KCd3YWxrJywgJ2p1bXAnKTtcblxuICAgICAgICBzcGluZS5zZXRTdGFydExpc3RlbmVyKGZ1bmN0aW9uICh0cmFjaykge1xuICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3BpbmUuZ2V0Q3VycmVudCh0cmFjayk7XG4gICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uTmFtZSA9IGVudHJ5LmFuaW1hdGlvbiA/IGVudHJ5LmFuaW1hdGlvbi5uYW1lIDogXCJcIjtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJbdHJhY2sgJXNdIHN0YXJ0OiAlc1wiLCB0cmFjaywgYW5pbWF0aW9uTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzcGluZS5zZXRFbmRMaXN0ZW5lcihmdW5jdGlvbiAodHJhY2spIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIlt0cmFjayAlc10gZW5kXCIsIHRyYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNwaW5lLnNldENvbXBsZXRlTGlzdGVuZXIoZnVuY3Rpb24gKHRyYWNrLCBsb29wQ291bnQpIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIlt0cmFjayAlc10gY29tcGxldGU6ICVzXCIsIHRyYWNrLCBsb29wQ291bnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3BpbmUuc2V0RXZlbnRMaXN0ZW5lcihmdW5jdGlvbiAodHJhY2ssIGV2ZW50KSB7XG4gICAgICAgICAgICBjYy5sb2coXCJbdHJhY2sgJXNdIGV2ZW50OiAlcywgJXMsICVzLCAlc1wiLCB0cmFjaywgZXZlbnQuZGF0YS5uYW1lLCBldmVudC5pbnRWYWx1ZSwgZXZlbnQuZmxvYXRWYWx1ZSwgZXZlbnQuc3RyaW5nVmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vIGNjLmV2ZW50TWFuYWdlci5hZGRMaXN0ZW5lcih7XG4gICAgICAgIC8vICAgICBldmVudDogY2MuRXZlbnRMaXN0ZW5lci5UT1VDSF9BTExfQVRfT05DRSxcbiAgICAgICAgLy8gICAgIG9uVG91Y2hlc0JlZ2FuICgpIHtcbiAgICAgICAgLy8gICAgICAgICBzZWxmLnRvZ2dsZVRpbWVTY2FsZSgpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LCB0aGlzLm5vZGUpO1xuICAgIH0sXG5cbiAgICAvLyBPUFRJT05TXG5cbiAgICB0b2dnbGVEZWJ1Z1Nsb3RzOiBmdW5jdGlvbiB0b2dnbGVEZWJ1Z1Nsb3RzKCkge1xuICAgICAgICB0aGlzLnNwaW5lLmRlYnVnU2xvdHMgPSAhdGhpcy5zcGluZS5kZWJ1Z1Nsb3RzO1xuICAgIH0sXG5cbiAgICB0b2dnbGVEZWJ1Z0JvbmVzOiBmdW5jdGlvbiB0b2dnbGVEZWJ1Z0JvbmVzKCkge1xuICAgICAgICB0aGlzLnNwaW5lLmRlYnVnQm9uZXMgPSAhdGhpcy5zcGluZS5kZWJ1Z0JvbmVzO1xuICAgIH0sXG5cbiAgICB0b2dnbGVUaW1lU2NhbGU6IGZ1bmN0aW9uIHRvZ2dsZVRpbWVTY2FsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3BpbmUudGltZVNjYWxlID09PSAxLjApIHtcbiAgICAgICAgICAgIHRoaXMuc3BpbmUudGltZVNjYWxlID0gMC4zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zcGluZS50aW1lU2NhbGUgPSAxLjA7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQU5JTUFUSU9OU1xuXG4gICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgdGhpcy5zcGluZS5jbGVhclRyYWNrKDApO1xuICAgIH0sXG5cbiAgICB3YWxrOiBmdW5jdGlvbiB3YWxrKCkge1xuICAgICAgICB0aGlzLnNwaW5lLnNldEFuaW1hdGlvbigwLCAnd2FsaycsIHRydWUpO1xuICAgIH0sXG5cbiAgICBydW46IGZ1bmN0aW9uIHJ1bigpIHtcbiAgICAgICAgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgJ3J1bicsIHRydWUpO1xuICAgIH0sXG5cbiAgICBqdW1wOiBmdW5jdGlvbiBqdW1wKCkge1xuICAgICAgICB2YXIgb2xkQW5pbSA9IHRoaXMuc3BpbmUuYW5pbWF0aW9uO1xuICAgICAgICB0aGlzLnNwaW5lLnNldEFuaW1hdGlvbigwLCAnanVtcCcsIGZhbHNlKTtcbiAgICAgICAgaWYgKG9sZEFuaW0pIHtcbiAgICAgICAgICAgIHRoaXMuc3BpbmUuYWRkQW5pbWF0aW9uKDAsIG9sZEFuaW0gPT09ICdydW4nID8gJ3J1bicgOiAnd2FsaycsIHRydWUsIDApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNob290OiBmdW5jdGlvbiBzaG9vdCgpIHtcbiAgICAgICAgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMSwgJ3Nob290JywgZmFsc2UpO1xuICAgIH0sXG5cbiAgICAvL1xuXG4gICAgX3NldE1peDogZnVuY3Rpb24gX3NldE1peChhbmltMSwgYW5pbTIpIHtcbiAgICAgICAgdGhpcy5zcGluZS5zZXRNaXgoYW5pbTEsIGFuaW0yLCB0aGlzLm1peFRpbWUpO1xuICAgICAgICB0aGlzLnNwaW5lLnNldE1peChhbmltMiwgYW5pbTEsIHRoaXMubWl4VGltZSk7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdjYzJhMXRmQXRsRVdvTG1rZkxiZ1FTMycsICdUYWdDb2xsaWRlckxpc3RlbmVyJyk7XG4vLyBjYXNlcy9jb2xsaWRlci9UYWcvVGFnQ29sbGlkZXJMaXN0ZW5lci5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbiBvbkVuYWJsZSgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZTogZnVuY3Rpb24gb25EaXNhYmxlKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERlYnVnRHJhdyA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBvbkNvbGxpc2lvbkVudGVyOiBmdW5jdGlvbiBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ0NvbGxpc2lvbiBvbiB0YWcgOiAnICsgc2VsZi50YWc7XG4gICAgfVxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZTY5NDFITHJJVkZMb2t1TVRTOEhTVW8nLCAnVGlsZWRTcHJpdGVDb250cm9sJyk7XG4vLyBjYXNlcy8wMV9ncmFwaGljcy8wMV9zcHJpdGUvVGlsZWRTcHJpdGUvVGlsZWRTcHJpdGVDb250cm9sLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgICAgIHNwZWVkOiAxMDAsXG5cbiAgICAgICAgcHJvZ3Jlc3NCYXI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuXG4gICAgICAgIGdyb3VuZDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlV2RpdGgodGhpcy5wcm9ncmVzc0JhciwgNTAwLCBkdCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVdkaXRoKHRoaXMuZ3JvdW5kLCAxMDAwLCBkdCk7XG4gICAgfSxcblxuICAgIF91cGRhdGVXZGl0aDogZnVuY3Rpb24gX3VwZGF0ZVdkaXRoKG5vZGUsIHJhbmdlLCBkdCkge1xuICAgICAgICB2YXIgd2lkdGggPSBub2RlLndpZHRoO1xuICAgICAgICB3aWR0aCA9IHdpZHRoIDwgcmFuZ2UgPyB3aWR0aCArPSBkdCAqIHRoaXMuc3BlZWQgOiAwO1xuICAgICAgICBub2RlLndpZHRoID0gd2lkdGg7XG4gICAgfVxuXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzk1MDIxWDVLanhQMzY5T09OZTMxNnNIJywgJ1RvdWNoRHJhZ2dlcicpO1xuLy8gY2FzZXMvMDVfc2NyaXB0aW5nLzAzX2V2ZW50cy9Ub3VjaERyYWdnZXIuanNcblxudmFyIFRvdWNoRHJhZ2dlciA9IGNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcHJvcGFnYXRlOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gLi4uXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMTYwO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNjLmxvZygnRHJhZyBzdGF0ZWQgLi4uJyk7XG4gICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIH0sIHRoaXMubm9kZSk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IGV2ZW50LnRvdWNoLmdldERlbHRhKCk7XG4gICAgICAgICAgICB0aGlzLnggKz0gZGVsdGEueDtcbiAgICAgICAgICAgIHRoaXMueSArPSBkZWx0YS55O1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Q29tcG9uZW50KFRvdWNoRHJhZ2dlcikucHJvcGFnYXRlKSBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSwgdGhpcy5ub2RlKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5vcGFjaXR5ID0gMTYwO1xuICAgICAgICB9LCB0aGlzLm5vZGUpO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYTE0YmZhRCtnUkpLclRWakt3aXRjNTMnLCAnVG91Y2hFdmVudCcpO1xuLy8gY2FzZXMvMDVfc2NyaXB0aW5nLzAzX2V2ZW50cy9Ub3VjaEV2ZW50LmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgX2NhbGxiYWNrOiBudWxsLFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMTAwO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAxMDA7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAxMDA7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnOTM2ZThFdWdpSkMyNHpKYngrV2plRngnLCAnVXNlcicpO1xuLy8gY2FzZXMvYW55c2RrLzAxX3VzZXIvVXNlci5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTW9iaWxlKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJQbHVnaW4gPSBhbnlzZGsuYWdlbnRNYW5hZ2VyLmdldFVzZXJQbHVnaW4oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXJQbHVnaW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJQbHVnaW4uc2V0TGlzdGVuZXIodGhpcy5vblVzZXJSZXN1bHQsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGxvZ2luOiBmdW5jdGlvbiBsb2dpbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnVzZXJQbHVnaW4pIHJldHVybjtcbiAgICAgICAgdGhpcy51c2VyUGx1Z2luLmxvZ2luKCk7XG4gICAgfSxcblxuICAgIGlzTG9naW5lZDogZnVuY3Rpb24gaXNMb2dpbmVkKCkge1xuICAgICAgICBpZiAoIXRoaXMudXNlclBsdWdpbikgcmV0dXJuO1xuICAgICAgICB2YXIgZmxhZyA9IHRoaXMudXNlclBsdWdpbi5pc0xvZ2luZWQoKTtcbiAgICAgICAgY2MubG9nKFwiIyMjIyMjIyMjIyBpc0xvZ2luZWQgIyMjIyMjIyMjI1wiICsgZmxhZyk7XG4gICAgfSxcblxuICAgIGxvZ291dDogZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgICAgICBpZiAoIXRoaXMudXNlclBsdWdpbiB8fCAhdGhpcy51c2VyUGx1Z2luLmxvZ291dCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnVzZXJQbHVnaW4ubG9nb3V0KCk7XG4gICAgfSxcblxuICAgIGVudGVyUGxhdGZvcm06IGZ1bmN0aW9uIGVudGVyUGxhdGZvcm0oKSB7XG4gICAgICAgIGlmICghdGhpcy51c2VyUGx1Z2luIHx8ICF0aGlzLnVzZXJQbHVnaW4uZW50ZXJQbGF0Zm9ybSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnVzZXJQbHVnaW4uZW50ZXJQbGF0Zm9ybSgpO1xuICAgIH0sXG5cbiAgICBzaG93VG9vbEJhcjogZnVuY3Rpb24gc2hvd1Rvb2xCYXIoKSB7XG4gICAgICAgIGlmICghdGhpcy51c2VyUGx1Z2luIHx8ICF0aGlzLnVzZXJQbHVnaW4uc2hvd1Rvb2xCYXIpIHJldHVybjtcbiAgICAgICAgdGhpcy51c2VyUGx1Z2luLnNob3dUb29sQmFyKGFueXNkay5Ub29sQmFyUGxhY2Uua1Rvb2xCYXJUb3BMZWZ0KTtcbiAgICB9LFxuXG4gICAgaGlkZVRvb2xCYXI6IGZ1bmN0aW9uIGhpZGVUb29sQmFyKCkge1xuICAgICAgICBpZiAoIXRoaXMudXNlclBsdWdpbiB8fCAhdGhpcy51c2VyUGx1Z2luLmhpZGVUb29sQmFyKSByZXR1cm47XG4gICAgICAgIHRoaXMudXNlclBsdWdpbi5oaWRlVG9vbEJhcigpO1xuICAgIH0sXG5cbiAgICBhY2NvdW50U3dpdGNoOiBmdW5jdGlvbiBhY2NvdW50U3dpdGNoKCkge1xuICAgICAgICBpZiAoIXRoaXMudXNlclBsdWdpbiB8fCAhdGhpcy51c2VyUGx1Z2luLmFjY291bnRTd2l0Y2gpIHJldHVybjtcbiAgICAgICAgdGhpcy51c2VyUGx1Z2luLmFjY291bnRTd2l0Y2goKTtcbiAgICB9LFxuXG4gICAgcmVhbE5hbWVSZWdpc3RlcjogZnVuY3Rpb24gcmVhbE5hbWVSZWdpc3RlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnVzZXJQbHVnaW4gfHwgIXRoaXMudXNlclBsdWdpbi5yZWFsTmFtZVJlZ2lzdGVyKSByZXR1cm47XG4gICAgICAgIHRoaXMudXNlclBsdWdpbi5yZWFsTmFtZVJlZ2lzdGVyKCk7XG4gICAgfSxcblxuICAgIGFudGlBZGRpY3Rpb25RdWVyeTogZnVuY3Rpb24gYW50aUFkZGljdGlvblF1ZXJ5KCkge1xuICAgICAgICBpZiAoIXRoaXMudXNlclBsdWdpbiB8fCAhdGhpcy51c2VyUGx1Z2luLmFudGlBZGRpY3Rpb25RdWVyeSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnVzZXJQbHVnaW4uYW50aUFkZGljdGlvblF1ZXJ5KCk7XG4gICAgfSxcblxuICAgIHN1Ym1pdExvZ2luR2FtZVJvbGU6IGZ1bmN0aW9uIHN1Ym1pdExvZ2luR2FtZVJvbGUoKSB7XG4gICAgICAgIGlmICghdGhpcy51c2VyUGx1Z2luIHx8ICF0aGlzLnVzZXJQbHVnaW4uc3VibWl0TG9naW5HYW1lUm9sZSkgcmV0dXJuO1xuICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICdyb2xlSWQnOiAnMTIzNDU2JyxcbiAgICAgICAgICAgICdyb2xlTmFtZSc6ICd0ZXN0JyxcbiAgICAgICAgICAgICdyb2xlTGV2ZWwnOiAnMTAnLFxuICAgICAgICAgICAgJ3pvbmVJZCc6ICcxMjMnLFxuICAgICAgICAgICAgJ3pvbmVOYW1lJzogJ3Rlc3QnLFxuICAgICAgICAgICAgJ2RhdGFUeXBlJzogJzEnLFxuICAgICAgICAgICAgJ2V4dCc6ICdsb2dpbidcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51c2VyUGx1Z2luLnN1Ym1pdExvZ2luR2FtZVJvbGUoZGF0YSk7XG4gICAgfSxcblxuICAgIG9uVXNlclJlc3VsdDogZnVuY3Rpb24gb25Vc2VyUmVzdWx0KGNvZGUsIG1zZykge1xuICAgICAgICBjYy5sb2coJyMjIyMjIyMjIyMgVVNFUiBSRVNVTFQgIyMjIyMjIyMjIyBjb2RlOiAnICsgY29kZSArICcsbXNnOiAnICsgbXNnKTtcbiAgICAgICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGFueXNkay5Vc2VyQWN0aW9uUmVzdWx0Q29kZS5rSW5pdFN1Y2Nlc3M6XG4gICAgICAgICAgICAgICAgY2MubG9nKFwiIyMjIyMjIyMjIyBrSW5pdFN1Y2Nlc3MgIyMjIyMjIyMjI1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYW55c2RrLlVzZXJBY3Rpb25SZXN1bHRDb2RlLmtJbml0RmFpbDpcbiAgICAgICAgICAgICAgICBjYy5sb2coXCIjIyMjIyMjIyMjIGtJbml0RmFpbCAjIyMjIyMjIyMjXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhbnlzZGsuVXNlckFjdGlvblJlc3VsdENvZGUua0xvZ2luU3VjY2VzczpcbiAgICAgICAgICAgICAgICBjYy5sb2coXCIjIyMjIyMjIyMjIGtMb2dpblN1Y2Nlc3MgIyMjIyMjIyMjI1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYW55c2RrLlVzZXJBY3Rpb25SZXN1bHRDb2RlLmtMb2dpbk5ldHdvcmtFcnJvcjpcbiAgICAgICAgICAgICAgICBjYy5sb2coXCIjIyMjIyMjIyMjIGtMb2dpbk5ldHdvcmtFcnJvciAjIyMjIyMjIyMjXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhbnlzZGsuVXNlckFjdGlvblJlc3VsdENvZGUua0xvZ2luTm9OZWVkOlxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIiMjIyMjIyMjIyMga0xvZ2luTm9OZWVkICMjIyMjIyMjIyNcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGFueXNkay5Vc2VyQWN0aW9uUmVzdWx0Q29kZS5rTG9naW5GYWlsOlxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIiMjIyMjIyMjIyMga0xvZ2luRmFpbCAjIyMjIyMjIyMjXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhbnlzZGsuVXNlckFjdGlvblJlc3VsdENvZGUua0xvZ2luQ2FuY2VsOlxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIiMjIyMjIyMjIyMga0xvZ2luQ2FuY2VsICMjIyMjIyMjIyNcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGFueXNkay5Vc2VyQWN0aW9uUmVzdWx0Q29kZS5rTG9nb3V0U3VjY2VzczpcbiAgICAgICAgICAgICAgICBjYy5sb2coXCIjIyMjIyMjIyMjIGtMb2dvdXRTdWNjZXNzICMjIyMjIyMjIyNcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGFueXNkay5Vc2VyQWN0aW9uUmVzdWx0Q29kZS5rTG9nb3V0RmFpbDpcbiAgICAgICAgICAgICAgICBjYy5sb2coXCIjIyMjIyMjIyMjIGtMb2dvdXRGYWlsICMjIyMjIyMjIyNcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGFueXNkay5Vc2VyQWN0aW9uUmVzdWx0Q29kZS5rUGxhdGZvcm1FbnRlcjpcbiAgICAgICAgICAgICAgICBjYy5sb2coXCIjIyMjIyMjIyMjIGtQbGF0Zm9ybUVudGVyICMjIyMjIyMjIyNcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGFueXNkay5Vc2VyQWN0aW9uUmVzdWx0Q29kZS5rUGxhdGZvcm1CYWNrOlxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIiMjIyMjIyMjIyMga1BsYXRmb3JtQmFjayAjIyMjIyMjIyMjXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhbnlzZGsuVXNlckFjdGlvblJlc3VsdENvZGUua1BhdXNlUGFnZTpcbiAgICAgICAgICAgICAgICBjYy5sb2coXCIjIyMjIyMjIyMjIGtQYXVzZVBhZ2UgIyMjIyMjIyMjI1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYW55c2RrLlVzZXJBY3Rpb25SZXN1bHRDb2RlLmtFeGl0UGFnZTpcbiAgICAgICAgICAgICAgICBjYy5sb2coXCIjIyMjIyMjIyMjIGtFeGl0UGFnZSAjIyMjIyMjIyMjXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhbnlzZGsuVXNlckFjdGlvblJlc3VsdENvZGUua0FudGlBZGRpY3Rpb25RdWVyeTpcbiAgICAgICAgICAgICAgICBjYy5sb2coXCIjIyMjIyMjIyMjIGtBbnRpQWRkaWN0aW9uUXVlcnkgIyMjIyMjIyMjI1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYW55c2RrLlVzZXJBY3Rpb25SZXN1bHRDb2RlLmtSZWFsTmFtZVJlZ2lzdGVyOlxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIiMjIyMjIyMjIyMga1JlYWxOYW1lUmVnaXN0ZXIgIyMjIyMjIyMjI1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYW55c2RrLlVzZXJBY3Rpb25SZXN1bHRDb2RlLmtBY2NvdW50U3dpdGNoU3VjY2VzczpcbiAgICAgICAgICAgICAgICBjYy5sb2coXCIjIyMjIyMjIyMjIGtBY2NvdW50U3dpdGNoU3VjY2VzcyAjIyMjIyMjIyMjXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhbnlzZGsuVXNlckFjdGlvblJlc3VsdENvZGUua0FjY291bnRTd2l0Y2hGYWlsOlxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIiMjIyMjIyMjIyMga0FjY291bnRTd2l0Y2hGYWlsICMjIyMjIyMjIyNcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGFueXNkay5Vc2VyQWN0aW9uUmVzdWx0Q29kZS5rT3BlblNob3A6XG4gICAgICAgICAgICAgICAgY2MubG9nKFwiIyMjIyMjIyMjIyBrT3BlblNob3AgIyMjIyMjIyMjI1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZDliZjZiRmIrdEY3NzlzdExFbWp6VFYnLCAnVmFsdWVUeXBlUHJvcGVydGllcycpO1xuLy8gY2FzZXMvMDVfc2NyaXB0aW5nLzAxX3Byb3BlcnRpZXMvVmFsdWVUeXBlUHJvcGVydGllcy5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIG51bWJlclxuICAgICAgICBteU51bWJlcjoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiAwLFxuICAgICAgICAgICAgdHlwZTogY2MuSW50ZWdlclxuICAgICAgICB9LFxuICAgICAgICAvLyBzdHJpbmdcbiAgICAgICAgbXlTdHJpbmc6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogJ2RlZmF1bHQgdGV4dCdcbiAgICAgICAgfSxcbiAgICAgICAgbXlWZWMyOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IGNjLlZlYzIuWkVST1xuICAgICAgICB9LFxuICAgICAgICBteUNvbG9yOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IGNjLkNvbG9yLldISVRFXG4gICAgICAgIH0sXG4gICAgICAgIG15T3RoZXJOdW1iZXI6IDAsXG4gICAgICAgIG15T3RoZXJTdHJpbmc6ICdubyB0eXBlIGRlZmluaXRpb24nLFxuICAgICAgICBteU90aGVyVmVjMjogY2MuVmVjMi5PTkUsXG4gICAgICAgIG15T3RoZXJDb2xvcjogY2MuQ29sb3IuQkxBQ0tcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7fVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcxMDBiNVV0eU5KTE5haWg0MmVkbkVnTicsICdWaWRlb1BsYXllckN0cmwnKTtcbi8vIGNhc2VzLzAyX3VpLzA5X3ZpZGVvcGxheWVyL1ZpZGVvUGxheWVyL1ZpZGVvUGxheWVyQ3RybC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdmlkZW9QbGF5ZXI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuVmlkZW9QbGF5ZXJcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdHVzTGFiZWw6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHt9LFxuXG4gICAgcGxheTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgdGhpcy52aWRlb1BsYXllci5wbGF5KCk7XG4gICAgfSxcblxuICAgIHBhdXNlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy52aWRlb1BsYXllci5wYXVzZSgpO1xuICAgIH0sXG5cbiAgICB0b2dnbGVGdWxsc2NyZWVuOiBmdW5jdGlvbiB0b2dnbGVGdWxsc2NyZWVuKCkge1xuICAgICAgICB0aGlzLnZpZGVvUGxheWVyLmlzRnVsbHNjcmVlbiA9IHRydWU7XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIHRoaXMudmlkZW9QbGF5ZXIuc3RvcCgpO1xuICAgIH0sXG5cbiAgICBrZWVwUmF0aW9Td2l0Y2g6IGZ1bmN0aW9uIGtlZXBSYXRpb1N3aXRjaCgpIHtcbiAgICAgICAgdGhpcy52aWRlb1BsYXllci5rZWVwQXNwZWN0UmF0aW8gPSAhdGhpcy52aWRlb1BsYXllci5rZWVwQXNwZWN0UmF0aW87XG4gICAgfSxcblxuICAgIG9uVmlkZW9QbGF5ZXJFdmVudDogZnVuY3Rpb24gb25WaWRlb1BsYXllckV2ZW50KHNlbmRlciwgZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNMYWJlbC5zdHJpbmcgPSBldmVudDtcbiAgICB9LFxuXG4gICAgdG9nZ2xlVmlzaWJpbGl0eTogZnVuY3Rpb24gdG9nZ2xlVmlzaWJpbGl0eSgpIHtcbiAgICAgICAgdGhpcy52aWRlb1BsYXllci5lbmFibGVkID0gIXRoaXMudmlkZW9QbGF5ZXIuZW5hYmxlZDtcbiAgICB9LFxuXG4gICAgcGxheU9ubGluZVZpZGVvOiBmdW5jdGlvbiBwbGF5T25saW5lVmlkZW8oKSB7XG4gICAgICAgIHRoaXMudmlkZW9QbGF5ZXIucmVzb3VyY2VUeXBlID0gMDtcbiAgICAgICAgdGhpcy52aWRlb1BsYXllci51cmwgPSBcImh0dHA6Ly9iZW5jaG1hcmsuY29jb3MyZC14Lm9yZy9jb2Nvc3ZpZGVvLm1wNFwiO1xuICAgICAgICB0aGlzLnZpZGVvUGxheWVyLnBsYXkoKTtcbiAgICB9XG5cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMWEyNzlvWE5veEZGSTUxNmZzd0FiVm8nLCAnV2FsbCcpO1xuLy8gY2FzZXMvY29sbGlkZXIvVXRpbHMvV2FsbC5qc1xuXG52YXIgV2FsbFR5cGUgPSBjYy5FbnVtKHtcbiAgICBMZWZ0OiAwLFxuICAgIFJpZ2h0OiAxLFxuICAgIFRvcDogMixcbiAgICBCb3R0b206IDNcbn0pO1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFdhbGxUeXBlLkxlZnQsXG4gICAgICAgICAgICB0eXBlOiBXYWxsVHlwZVxuICAgICAgICB9LFxuXG4gICAgICAgIHdpZHRoOiA1XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIHN0YXJ0OiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgdmFyIGNvbGxpZGVyID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpO1xuICAgICAgICBpZiAoIWNvbGxpZGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMubm9kZTtcbiAgICAgICAgdmFyIHR5cGUgPSB0aGlzLnR5cGU7XG5cbiAgICAgICAgdmFyIHdpZHRoID0gY2Mud2luU2l6ZS53aWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IGNjLndpblNpemUuaGVpZ2h0O1xuXG4gICAgICAgIHZhciB3YWxsV2lkdGggPSB0aGlzLndpZHRoO1xuXG4gICAgICAgIGlmICh0eXBlID09PSBXYWxsVHlwZS5MZWZ0KSB7XG4gICAgICAgICAgICBub2RlLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIG5vZGUud2lkdGggPSB3YWxsV2lkdGg7XG4gICAgICAgICAgICBub2RlLnggPSAwO1xuICAgICAgICAgICAgbm9kZS55ID0gaGVpZ2h0IC8gMjtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBXYWxsVHlwZS5SaWdodCkge1xuICAgICAgICAgICAgbm9kZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICBub2RlLndpZHRoID0gd2FsbFdpZHRoO1xuICAgICAgICAgICAgbm9kZS54ID0gd2lkdGg7XG4gICAgICAgICAgICBub2RlLnkgPSBoZWlnaHQgLyAyO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFdhbGxUeXBlLlRvcCkge1xuICAgICAgICAgICAgbm9kZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgbm9kZS5oZWlnaHQgPSB3YWxsV2lkdGg7XG4gICAgICAgICAgICBub2RlLnggPSB3aWR0aCAvIDI7XG4gICAgICAgICAgICBub2RlLnkgPSBoZWlnaHQ7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gV2FsbFR5cGUuQm90dG9tKSB7XG4gICAgICAgICAgICBub2RlLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICBub2RlLmhlaWdodCA9IHdhbGxXaWR0aDtcbiAgICAgICAgICAgIG5vZGUueCA9IHdpZHRoIC8gMjtcbiAgICAgICAgICAgIG5vZGUueSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb2xsaWRlci5zaXplID0gbm9kZS5nZXRDb250ZW50U2l6ZSgpO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYTU1NmFhVW13cE5qSldQUmVrN0NQdEknLCAnYXJjJyk7XG4vLyBjYXNlcy9ncmFwaGljcy9leGFtcGxlL2FyYy5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICBpZiAoY2MuZGlyZWN0b3Iuc2V0Q2xlYXJDb2xvcikge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3Iuc2V0Q2xlYXJDb2xvcihjYy5Db2xvci5XSElURSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZyA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcblxuICAgICAgICBnLmxpbmVXaWR0aCA9IDU7XG4gICAgICAgIGcuZmlsbENvbG9yID0gY2MuaGV4VG9Db2xvcignI2ZmMDAwMCcpO1xuXG4gICAgICAgIGcuYXJjKDAsIDAsIDEwMCwgTWF0aC5QSSAvIDIsIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgZy5saW5lVG8oMCwgMCk7XG4gICAgICAgIGcuY2xvc2UoKTtcblxuICAgICAgICBnLnN0cm9rZSgpO1xuICAgICAgICBnLmZpbGwoKTtcblxuICAgICAgICBnLmZpbGxDb2xvciA9IGNjLmhleFRvQ29sb3IoJyMwMGZmMDAnKTtcblxuICAgICAgICBnLmFyYygtMTAsIDEwLCAxMDAsIE1hdGguUEkgLyAyLCBNYXRoLlBJLCB0cnVlKTtcbiAgICAgICAgZy5saW5lVG8oLTEwLCAxMCk7XG4gICAgICAgIGcuY2xvc2UoKTtcblxuICAgICAgICBnLnN0cm9rZSgpO1xuICAgICAgICBnLmZpbGwoKTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbiBvbkRpc2FibGUoKSB7XG4gICAgICAgIGlmIChjYy5kaXJlY3Rvci5zZXRDbGVhckNvbG9yKSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5zZXRDbGVhckNvbG9yKGNjLkNvbG9yLkJMQUNLKTtcbiAgICAgICAgfVxuICAgIH1cblxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2NhMjQ0UkhZOHhMYnBybkNERDlkSCtCJywgJ2NoZWNrYm94Jyk7XG4vLyBjYXNlcy8wMl91aS8xM19jaGVja2JveC9jaGVja2JveC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgY2hlY2tib3g6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuVG9nZ2xlXG4gICAgICAgIH0sXG5cbiAgICAgICAgY2hlY2tCb3hFdmVudFN0cmluZzoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuXG4gICAgICAgIHJhZGlvQnV0dG9uRXZlbnRTdHJpbmc6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcblxuICAgICAgICByYWRpb0J1dHRvbjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFtdLFxuICAgICAgICAgICAgdHlwZTogY2MuVG9nZ2xlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrYm94KSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVUb2dnbGVFdmVudFN0cmluZyhcIkNoZWNrQm94XCIsIHRoaXMuY2hlY2tCb3hFdmVudFN0cmluZywgdGhpcy5jaGVja2JveCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX3VwZGF0ZVRvZ2dsZUV2ZW50U3RyaW5nOiBmdW5jdGlvbiBfdXBkYXRlVG9nZ2xlRXZlbnRTdHJpbmcodGl0bGUsIGxhYmVsLCB0b2dnbGUpIHtcbiAgICAgICAgaWYgKHRvZ2dsZS5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IHRpdGxlICsgXCIgaXMgY2hlY2tlZC5cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IHRpdGxlICsgXCIgaXMgdW5jaGVja2VkLlwiO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJhZGlvQnV0dG9uQ2xpY2tlZDogZnVuY3Rpb24gcmFkaW9CdXR0b25DbGlja2VkKGV2ZW50LCB0b2dnbGUpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5yYWRpb0J1dHRvbi5pbmRleE9mKHRvZ2dsZSk7XG4gICAgICAgIHZhciB0aXRsZSA9IFwiUmFkaW9CdXR0b25cIjtcbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRpdGxlICs9IFwiMVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRpdGxlICs9IFwiMlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRpdGxlICs9IFwiM1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl91cGRhdGVUb2dnbGVFdmVudFN0cmluZyh0aXRsZSwgdGhpcy5yYWRpb0J1dHRvbkV2ZW50U3RyaW5nLCB0b2dnbGUpO1xuICAgIH0sXG5cbiAgICBjaGVja0JveENsaWNrZWQ6IGZ1bmN0aW9uIGNoZWNrQm94Q2xpY2tlZChldmVudCwgdG9nZ2xlKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVRvZ2dsZUV2ZW50U3RyaW5nKFwiQ2hlY2tCb3hcIiwgdGhpcy5jaGVja0JveEV2ZW50U3RyaW5nLCB0b2dnbGUpO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMTM2ZTZyVW5ObENiWjdVZXpZaFFEb1EnLCAnZG9vZGxlJyk7XG4vLyBjYXNlcy9ncmFwaGljcy9kZW1vL2Rvb2RsZS5qc1xuXG4vLyBodHRwOi8vY29kZXBlbi5pby9GcmFuY2V4dC9wZW4vb2p3ZEpcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICByZWFjdGl2aXR5OiAwLjUsXG4gICAgICAgIGRlYnVnOiBmYWxzZVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBpZiAoY2MuZGlyZWN0b3Iuc2V0Q2xlYXJDb2xvcikge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3Iuc2V0Q2xlYXJDb2xvcihjYy5oZXhUb0NvbG9yKCcjZDFmMWZmJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcblxuICAgICAgICB0aGlzLm5vZGVzID0gW107XG4gICAgICAgIHRoaXMucmlwcGxlcyA9IFtdO1xuICAgICAgICB0aGlzLm1vdXNlID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIHRoaXMuY29sb3IgPSB7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDI1NSB9O1xuICAgICAgICB0aGlzLmN5Y2xlID0gOTA7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVCZXppZXJOb2RlcygpO1xuXG4gICAgICAgIGNjLmV2ZW50TWFuYWdlci5hZGRMaXN0ZW5lcih7XG4gICAgICAgICAgICBldmVudDogY2MuRXZlbnRMaXN0ZW5lci5UT1VDSF9PTkVfQllfT05FLFxuICAgICAgICAgICAgb25Ub3VjaEJlZ2FuOiBmdW5jdGlvbiBvblRvdWNoQmVnYW4odG91Y2gsIGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubW91c2UgPSB0b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgICAgIF90aGlzLmFkZFJpcHBsZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uVG91Y2hFbmRlZDogZnVuY3Rpb24gb25Ub3VjaEVuZGVkKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmlucHV0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMubm9kZSk7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZTogZnVuY3Rpb24gb25EaXNhYmxlKCkge1xuICAgICAgICBpZiAoY2MuZGlyZWN0b3Iuc2V0Q2xlYXJDb2xvcikge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3Iuc2V0Q2xlYXJDb2xvcihjYy5Db2xvci5CTEFDSyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY3JlYXRlQmV6aWVyTm9kZXM6IGZ1bmN0aW9uIGNyZWF0ZUJlemllck5vZGVzKCkge1xuXG4gICAgICAgIHRoaXMudXBkYXRlQ29sb3JDeWNsZSgpO1xuXG4gICAgICAgIGZvciAodmFyIHF1YW50aXR5ID0gMCwgbGVuID0gNjsgcXVhbnRpdHkgPCBsZW47IHF1YW50aXR5KyspIHtcblxuICAgICAgICAgICAgdmFyIHRoZXRhID0gTWF0aC5QSSAqIDIgKiBxdWFudGl0eSAvIGxlbjtcblxuICAgICAgICAgICAgdmFyIHggPSBjYy53aW5TaXplLndpZHRoICogMC41ICsgMCAqIE1hdGguY29zKHRoZXRhKTtcbiAgICAgICAgICAgIHZhciB5ID0gY2Mud2luU2l6ZS5oZWlnaHQgKiAwLjUgKyAwICogTWF0aC5zaW4odGhldGEpO1xuXG4gICAgICAgICAgICB0aGlzLm5vZGVzLnB1c2goe1xuXG4gICAgICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgICAgICB5OiB5LFxuICAgICAgICAgICAgICAgIHZ4OiAwLFxuICAgICAgICAgICAgICAgIHZ5OiAwLFxuXG4gICAgICAgICAgICAgICAgbGFzdFg6IHgsXG4gICAgICAgICAgICAgICAgbGFzdFk6IHksXG5cbiAgICAgICAgICAgICAgICBtaW46IDE1MCxcbiAgICAgICAgICAgICAgICBtYXg6IDI1MCxcbiAgICAgICAgICAgICAgICBkaXN0dXJiOiAxNTAsXG5cbiAgICAgICAgICAgICAgICBvcmJpdDogMjAsXG4gICAgICAgICAgICAgICAgYW5nbGU6IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMixcbiAgICAgICAgICAgICAgICBzcGVlZDogMC4wNSArIE1hdGgucmFuZG9tKCkgKiAwLjA1LFxuXG4gICAgICAgICAgICAgICAgdGhldGE6IHRoZXRhXG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFkZFJpcHBsZTogZnVuY3Rpb24gYWRkUmlwcGxlKCkge1xuXG4gICAgICAgIHRoaXMuaW5wdXQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLnJpcHBsZXMubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29sb3JDeWNsZSgpO1xuXG4gICAgICAgICAgICB0aGlzLnJpcHBsZXMucHVzaCh7XG5cbiAgICAgICAgICAgICAgICB4OiB0aGlzLm1vdXNlLngsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5tb3VzZS55LFxuXG4gICAgICAgICAgICAgICAgcmVhY3Rpdml0eTogMCxcbiAgICAgICAgICAgICAgICBmYWRlOiAxLjBcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlQ29sb3JDeWNsZTogZnVuY3Rpb24gdXBkYXRlQ29sb3JDeWNsZSgpIHtcblxuICAgICAgICB0aGlzLmN5Y2xlID0gTWF0aC5taW4odGhpcy5jeWNsZSArIHRoaXMucmVhY3Rpdml0eSArIDAuMywgMTAwKSAhPT0gMTAwID8gdGhpcy5jeWNsZSArPSB0aGlzLnJlYWN0aXZpdHkgKyAwLjMgOiAwO1xuXG4gICAgICAgIHZhciBjb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgIGNvbG9yLnIgPSB+IH4oTWF0aC5zaW4oMC4zICogdGhpcy5jeWNsZSArIDApICogMTI3ICsgMTI4KTtcbiAgICAgICAgY29sb3IuZyA9IH4gfihNYXRoLnNpbigwLjMgKiB0aGlzLmN5Y2xlICsgMikgKiAxMjcgKyAxMjgpO1xuICAgICAgICBjb2xvci5iID0gfiB+KE1hdGguc2luKDAuMyAqIHRoaXMuY3ljbGUgKyA0KSAqIDEyNyArIDEyOCk7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5ub2RlcztcbiAgICAgICAgdmFyIHJpcHBsZXMgPSB0aGlzLnJpcHBsZXM7XG5cbiAgICAgICAgdmFyIGVhc2UgPSAwLjAxLFxuICAgICAgICAgICAgZnJpY3Rpb24gPSAwLjk4O1xuXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCByaXBwbGVzLmxlbmd0aDsgaW5kZXgrKykge1xuXG4gICAgICAgICAgICB2YXIgcmlwcGxlID0gcmlwcGxlc1tpbmRleF07XG5cbiAgICAgICAgICAgIHJpcHBsZS5yZWFjdGl2aXR5ICs9IDU7XG4gICAgICAgICAgICByaXBwbGUuZmFkZSAtPSAwLjA1O1xuXG4gICAgICAgICAgICBpZiAocmlwcGxlLmZhZGUgPD0gMC4wKSByaXBwbGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwobm9kZXMsIGZ1bmN0aW9uIChub2RlLCBpbmRleCkge1xuXG4gICAgICAgICAgICBub2RlLmxhc3RYICs9IChjYy53aW5TaXplLndpZHRoICogMC41ICsgbm9kZS5kaXN0dXJiICogTWF0aC5jb3Mobm9kZS50aGV0YSkgLSBub2RlLmxhc3RYKSAqIDAuMDg7XG4gICAgICAgICAgICBub2RlLmxhc3RZICs9IChjYy53aW5TaXplLmhlaWdodCAqIDAuNSArIG5vZGUuZGlzdHVyYiAqIE1hdGguc2luKG5vZGUudGhldGEpIC0gbm9kZS5sYXN0WSkgKiAwLjA4O1xuXG4gICAgICAgICAgICAvLyBNb3Rpb25cbiAgICAgICAgICAgIG5vZGUueCArPSAobm9kZS5sYXN0WCArIE1hdGguY29zKG5vZGUuYW5nbGUpICogbm9kZS5vcmJpdCAtIG5vZGUueCkgKiAwLjA4O1xuICAgICAgICAgICAgbm9kZS55ICs9IChub2RlLmxhc3RZICsgTWF0aC5zaW4obm9kZS5hbmdsZSkgKiBub2RlLm9yYml0IC0gbm9kZS55KSAqIDAuMDg7XG5cbiAgICAgICAgICAgIC8vIEVhc2VcbiAgICAgICAgICAgIG5vZGUudnggKz0gKG5vZGUubWluIC0gbm9kZS5kaXN0dXJiKSAqIGVhc2U7XG5cbiAgICAgICAgICAgIC8vIEZyaWN0aW9uXG4gICAgICAgICAgICBub2RlLnZ4ICo9IGZyaWN0aW9uO1xuXG4gICAgICAgICAgICBub2RlLmRpc3R1cmIgKz0gbm9kZS52eDtcblxuICAgICAgICAgICAgaWYgKF90aGlzMi5pbnB1dCkgbm9kZS5kaXN0dXJiICs9IChub2RlLm1heCAtIG5vZGUuZGlzdHVyYikgKiBfdGhpczIucmVhY3Rpdml0eTtcblxuICAgICAgICAgICAgbm9kZS5hbmdsZSArPSBub2RlLnNwZWVkO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5ub2RlcztcbiAgICAgICAgdmFyIHJpcHBsZXMgPSB0aGlzLnJpcHBsZXM7XG4gICAgICAgIHZhciBncmFwaGljcyA9IHRoaXMuZ3JhcGhpY3M7XG4gICAgICAgIHZhciBjb2xvciA9IHRoaXMuY29sb3I7XG5cbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCwgbmV4dEluZGV4LCB4YywgeWM7XG5cbiAgICAgICAgY29sb3IuYSA9IHRoaXMuZGVidWcgPyAyNTUgOiAyNTUgLyAyO1xuXG4gICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XG5cbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKG5vZGVzLCBmdW5jdGlvbiAobm9kZSwgaW5kZXgpIHtcblxuICAgICAgICAgICAgY3VycmVudEluZGV4ID0gbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBuZXh0SW5kZXggPSBub2Rlc1swXTtcblxuICAgICAgICAgICAgeGMgPSBjdXJyZW50SW5kZXgueCArIChuZXh0SW5kZXgueCAtIGN1cnJlbnRJbmRleC54KSAqIDAuNTtcbiAgICAgICAgICAgIHljID0gY3VycmVudEluZGV4LnkgKyAobmV4dEluZGV4LnkgLSBjdXJyZW50SW5kZXgueSkgKiAwLjU7XG5cbiAgICAgICAgICAgIHZhciBzdHJva2VDb2xvciA9IGNjLmhleFRvQ29sb3IoX3RoaXMzLmRlYnVnID8gJyNhOWE5YTknIDogJyNlNWU1ZTUnKTtcbiAgICAgICAgICAgIHN0cm9rZUNvbG9yLmEgPSBfdGhpczMuZGVidWcgPyAyNTUgOiAyNTUgLyAyO1xuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBzdHJva2VDb2xvcjtcblxuICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gY29sb3I7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lV2lkdGggPSBfdGhpczMuZGVidWcgPyAxIDogNTtcblxuICAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHhjLCB5Yyk7XG5cbiAgICAgICAgICAgIC8vIERyYXcgdGhyb3VnaCBOIHBvaW50c1xuICAgICAgICAgICAgZm9yICh2YXIgTiA9IDA7IE4gPCBub2Rlcy5sZW5ndGg7IE4rKykge1xuXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4ID0gbm9kZXNbTl07XG4gICAgICAgICAgICAgICAgbmV4dEluZGV4ID0gTiArIDEgPiBub2Rlcy5sZW5ndGggLSAxID8gbm9kZXNbTiAtIG5vZGVzLmxlbmd0aCArIDFdIDogbm9kZXNbTiArIDFdO1xuXG4gICAgICAgICAgICAgICAgeGMgPSBjdXJyZW50SW5kZXgueCArIChuZXh0SW5kZXgueCAtIGN1cnJlbnRJbmRleC54KSAqIDAuNTtcbiAgICAgICAgICAgICAgICB5YyA9IGN1cnJlbnRJbmRleC55ICsgKG5leHRJbmRleC55IC0gY3VycmVudEluZGV4LnkpICogMC41O1xuXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MucXVhZHJhdGljQ3VydmVUbyhjdXJyZW50SW5kZXgueCwgY3VycmVudEluZGV4LnksIHhjLCB5Yyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzMy5kZWJ1ZyA/IG51bGwgOiBncmFwaGljcy5maWxsKCk7XG4gICAgICAgICAgICBncmFwaGljcy5zdHJva2UoKTtcblxuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVDYXAgPSBjYy5HcmFwaGljcy5MaW5lQ2FwLlJPVU5EO1xuICAgICAgICAgICAgZ3JhcGhpY3MubGluZUpvaW4gPSBjYy5HcmFwaGljcy5MaW5lSm9pbi5ST1VORDtcbiAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuaGV4VG9Db2xvcignI2E5YTlhOScpO1xuICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gY2MuaGV4VG9Db2xvcignI2E5YTlhOScpO1xuXG4gICAgICAgICAgICAvLyBEcmF3IHRocm91Z2ggTiBwb2ludHNcbiAgICAgICAgICAgIGZvciAodmFyIE4gPSAwOyBOIDwgbm9kZXMubGVuZ3RoOyBOKyspIHtcblxuICAgICAgICAgICAgICAgIC8vIEZpcnN0IGFuY2hvclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IG5vZGVzW05dO1xuICAgICAgICAgICAgICAgIG5leHRJbmRleCA9IE4gKyAxID4gbm9kZXMubGVuZ3RoIC0gMSA/IG5vZGVzW04gLSBub2Rlcy5sZW5ndGggKyAxXSA6IG5vZGVzW04gKyAxXTtcblxuICAgICAgICAgICAgICAgIHhjID0gY3VycmVudEluZGV4LnggKyAobmV4dEluZGV4LnggLSBjdXJyZW50SW5kZXgueCkgKiAwLjg7XG4gICAgICAgICAgICAgICAgeWMgPSBjdXJyZW50SW5kZXgueSArIChuZXh0SW5kZXgueSAtIGN1cnJlbnRJbmRleC55KSAqIDAuODtcblxuICAgICAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyh4YywgeWMpO1xuXG4gICAgICAgICAgICAgICAgLy8gU2Vjb25kIGFuY2hvclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcbiAgICAgICAgICAgICAgICBuZXh0SW5kZXggPSBOICsgMiA+IG5vZGVzLmxlbmd0aCAtIDEgPyBub2Rlc1tOIC0gbm9kZXMubGVuZ3RoICsgMl0gOiBub2Rlc1tOICsgMl07XG5cbiAgICAgICAgICAgICAgICB4YyA9IGN1cnJlbnRJbmRleC54ICsgKG5leHRJbmRleC54IC0gY3VycmVudEluZGV4LngpICogMC4yO1xuICAgICAgICAgICAgICAgIHljID0gY3VycmVudEluZGV4LnkgKyAobmV4dEluZGV4LnkgLSBjdXJyZW50SW5kZXgueSkgKiAwLjI7XG5cbiAgICAgICAgICAgICAgICBncmFwaGljcy5saW5lVG8oeGMsIHljKTtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIC8vIEZpcnN0IGFuY2hvclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IG5vZGVzW05dO1xuICAgICAgICAgICAgICAgIG5leHRJbmRleCA9IE4gKyAxID4gbm9kZXMubGVuZ3RoIC0gMSA/IG5vZGVzW04gLSBub2Rlcy5sZW5ndGggKyAxXSA6IG5vZGVzW04gKyAxXTtcblxuICAgICAgICAgICAgICAgIHhjID0gY3VycmVudEluZGV4LnggKyAobmV4dEluZGV4LnggLSBjdXJyZW50SW5kZXgueCkgKiAwLjg7XG4gICAgICAgICAgICAgICAgeWMgPSBjdXJyZW50SW5kZXgueSArIChuZXh0SW5kZXgueSAtIGN1cnJlbnRJbmRleC55KSAqIDAuODtcblxuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmNpcmNsZSh4YywgeWMsIDIpO1xuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIFNlY29uZCBhbmNob3JcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XG4gICAgICAgICAgICAgICAgbmV4dEluZGV4ID0gTiArIDIgPiBub2Rlcy5sZW5ndGggLSAxID8gbm9kZXNbTiAtIG5vZGVzLmxlbmd0aCArIDJdIDogbm9kZXNbTiArIDJdO1xuXG4gICAgICAgICAgICAgICAgeGMgPSBjdXJyZW50SW5kZXgueCArIChuZXh0SW5kZXgueCAtIGN1cnJlbnRJbmRleC54KSAqIDAuMjtcbiAgICAgICAgICAgICAgICB5YyA9IGN1cnJlbnRJbmRleC55ICsgKG5leHRJbmRleC55IC0gY3VycmVudEluZGV4LnkpICogMC4yO1xuXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuY2lyY2xlKHhjLCB5YywgMik7XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgcmlwcGxlcy5sZW5ndGg7IGluZGV4KyspIHtcblxuICAgICAgICAgICAgdmFyIHJpcHBsZSA9IHJpcHBsZXNbaW5kZXhdO1xuXG4gICAgICAgICAgICB2YXIgZmlsbENvbG9yID0gY2MuaGV4VG9Db2xvcignI2ZmZmZmZicpO1xuICAgICAgICAgICAgZmlsbENvbG9yLmEgPSByaXBwbGUuZmFkZSAqIDI1NTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmZpbGxDb2xvciA9IGZpbGxDb2xvcjtcblxuICAgICAgICAgICAgZ3JhcGhpY3MuY2lyY2xlKHJpcHBsZS54LCByaXBwbGUueSwgcmlwcGxlLnJlYWN0aXZpdHkpO1xuXG4gICAgICAgICAgICBncmFwaGljcy5maWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2M3ZTY1R1FEbHRIKzZmcHVXVFZ1YmFaJywgJ2VsbGlwc2UnKTtcbi8vIGNhc2VzL2dyYXBoaWNzL2V4YW1wbGUvZWxsaXBzZS5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICBpZiAoY2MuZGlyZWN0b3Iuc2V0Q2xlYXJDb2xvcikge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3Iuc2V0Q2xlYXJDb2xvcihjYy5Db2xvci5XSElURSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZyA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcblxuICAgICAgICBnLmxpbmVXaWR0aCA9IDEwO1xuICAgICAgICBnLmZpbGxDb2xvciA9IGNjLmhleFRvQ29sb3IoJyNmZjAwMDAnKTtcblxuICAgICAgICBnLmNpcmNsZSgxNTAsIDAsIDEwMCk7XG5cbiAgICAgICAgZy5lbGxpcHNlKC0xNTAsIDAsIDEwMCwgNzApO1xuXG4gICAgICAgIGcuc3Ryb2tlKCk7XG4gICAgICAgIGcuZmlsbCgpO1xuICAgIH0sXG5cbiAgICBvbkRpc2FibGU6IGZ1bmN0aW9uIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgaWYgKGNjLmRpcmVjdG9yLnNldENsZWFyQ29sb3IpIHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnNldENsZWFyQ29sb3IoY2MuQ29sb3IuQkxBQ0spO1xuICAgICAgICB9XG4gICAgfVxuXG59KTtcbi8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4vLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4vLyB9LFxuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnOTIwYzVWTHpKeEtqWUNBb0lVd1VIeW0nLCAnZW4nKTtcbi8vIGkxOG4vZGF0YS9lbi5qc1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJUZXN0TGlzdC5maXJlLjMwXCI6IFwiQmFjayBsaXN0XCIsXG4gIFwiVGVzdExpc3QuZmlyZS4zN1wiOiBcIlZpZXcgaW50cm9cIixcbiAgXCJjYXNlcy8wMV9ncmFwaGljcy8wMV9zcHJpdGUvQXRsYXNTcHJpdGUuZmlyZS43XCI6IFwiVGhpcyBpcyBTcGlydGUgU2luZ2xlLlwiLFxuICBcImNhc2VzLzAxX2dyYXBoaWNzLzAxX3Nwcml0ZS9BdGxhc1Nwcml0ZS5maXJlLjExXCI6IFwiVGhpcyBpcyBTcGlydGUgRnJvbSBBdGxhcy5cIixcbiAgXCJjYXNlcy8wMV9ncmFwaGljcy8wMV9zcHJpdGUvRmlsbGVkU3ByaXRlLmZpcmUuOVwiOiBcIkZpbGwgVHlwZTogSE9SSVpPTlRBTFwiLFxuICBcImNhc2VzLzAxX2dyYXBoaWNzLzAxX3Nwcml0ZS9GaWxsZWRTcHJpdGUuZmlyZS4xNVwiOiBcIkZpbGwgVHlwZTogVkVSVElDQUxcIixcbiAgXCJjYXNlcy8wMV9ncmFwaGljcy8wMV9zcHJpdGUvRmlsbGVkU3ByaXRlLmZpcmUuMjNcIjogXCJGSUxMIFR5cGU6IFJBRElBTFwiLFxuICBcImNhc2VzLzAxX2dyYXBoaWNzLzAxX3Nwcml0ZS9TaW1wbGVTcHJpdGUuZmlyZS43XCI6IFwiVGhpcyBpcyBTaW1wbGUgU3ByaXRlLlwiLFxuICBcImNhc2VzLzAxX2dyYXBoaWNzLzAxX3Nwcml0ZS9TbGljZWRTcHJpdGUuZmlyZS43XCI6IFwiVGhpcyBpcyBTbGljZWQgU3ByaXRlLlwiLFxuICBcImNhc2VzLzAxX2dyYXBoaWNzLzAxX3Nwcml0ZS9UaWxlZFNwcml0ZS5maXJlLjZcIjogXCJUaGlzIGlzIFRpbGVkIFNwcml0ZS5cIixcbiAgXCJjYXNlcy8wMV9ncmFwaGljcy8wMV9zcHJpdGUvVHJpbW1lZFNwcml0ZS5maXJlLjdcIjogXCJUUklNTUVEIFwiLFxuICBcImNhc2VzLzAxX2dyYXBoaWNzLzAxX3Nwcml0ZS9UcmltbWVkU3ByaXRlLmZpcmUuMTJcIjogXCJObyBUUklNTUVEXCIsXG4gIFwiY2FzZXMvMDFfZ3JhcGhpY3MvMDJfcGFydGljbGUvQXV0b1JlbW92ZVBhcnRpY2xlLmZpcmUuOVwiOiBcIlBhcnRpY2xlIDFcXG5cXFwiQXV0byBSZW1vdmUgT24gRmluaXNoXFxcIiBkaXNhYmxlZFwiLFxuICBcImNhc2VzLzAxX2dyYXBoaWNzLzAyX3BhcnRpY2xlL0F1dG9SZW1vdmVQYXJ0aWNsZS5maXJlLjEzXCI6IFwiUGFydGljbGUgMlxcblxcXCJBdXRvIFJlbW92ZSBPbiBGaW5pc2hcXFwiIGVuYWJsZWRcIixcbiAgXCJjYXNlcy8wMV9ncmFwaGljcy8wMl9wYXJ0aWNsZS9Ub2dnbGVQYXJ0aWNsZS5maXJlLjZcIjogXCJQcmVzcyBcXFwiQnV0dG9uXFxcIiB0byB0b2dnbGUgcGFydGljbGUgcGxheVwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjdcIjogXCJUb3AgTGVmdFwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjlcIjogXCJ0b3A6IDEwJSBsZWZ0OiA2JVwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjE0XCI6IFwiVG9wIExlZnRcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS4xNlwiOiBcInRvcDogLTM0cHhcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS4yMVwiOiBcIlRvcCBSaWdodFwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjIzXCI6IFwidG9wOiAxMCUgcmlnaHQ6IDYlXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDFfd2lkZ2V0L0FkdmFuY2VkV2lkZ2V0LmZpcmUuMjhcIjogXCJMZWZ0XCIsXG4gIFwiY2FzZXMvMDJfdWkvMDFfd2lkZ2V0L0FkdmFuY2VkV2lkZ2V0LmZpcmUuMzBcIjogXCJsZWZ0OiAtNTBweFwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjM1XCI6IFwiUmlnaHRcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS4zN1wiOiBcInJpZ2h0OiAtNTBweFwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjQyXCI6IFwiQm90dG9tIExlZnRcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS40NFwiOiBcImJvdHRvbTogMTAlIGxlZnQ6IDYlXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDFfd2lkZ2V0L0FkdmFuY2VkV2lkZ2V0LmZpcmUuNDlcIjogXCJCb3R0b21cIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS41MVwiOiBcImJvdHRvbTogLTM0cHhcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS41NlwiOiBcIkJvdHRvbSBSaWdodFwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjU4XCI6IFwiYm90dG9tOjEwJSByaWdodDo2JVwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjYzXCI6IFwiVGhpcyBpcyBBZHZhbmNlZCBXSWRnZXQuXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDFfd2lkZ2V0L0FsaWduT25jZVdpZGdldC5maXJlLjFcIjogXCJBbGlnbk9uZSBpcyBmYWxzZSwgSXQgaXMgYWx3YXlzIGFsaWduc1wiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BbGlnbk9uY2VXaWRnZXQuZmlyZS4yXCI6IFwiQWxpZ25PbmUgaXMgdHJ1ZSwgSXQgYWxpZ25zIG9ubHkgb25jZVwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BbmltYXRlZFdpZGdldC5maXJlLjlcIjogXCJUaGlzIGlzIEFuaW1hdGlvbiBXaWRnZXQuXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDFfd2lkZ2V0L0F1dG9SZXNpemUuZmlyZS4xM1wiOiBcIlRoaXMgaXMgV2lkZ2V0IEF1dG8gUmVzaXplLlwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9XaWRnZXRBbGlnbi5maXJlLjE4XCI6IFwiVGhpcyBpcyBXaWRnZXQgQWxpZ24uXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvR29sZEJlYXRpbmdBbmltZS5qcy4xXCI6IFwiMFwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL0FsaWduRm9udExhYmVsLmZpcmUuNlwiOiBcIkFsaWduIExhYmVsXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS45XCI6IFwiSG9yaXpvbnRhbCBBbGlnblwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL0FsaWduRm9udExhYmVsLmZpcmUuMTRcIjogXCJIZWxsbyEgXFxuV2VsY29tZSBDb21lIFRvIFxcbkNvY29zIENyZWF0b3JcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9BbGlnbkZvbnRMYWJlbC5maXJlLjE2XCI6IFwiQWxpZ246IExFRlRcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9BbGlnbkZvbnRMYWJlbC5maXJlLjIxXCI6IFwiSGVsbG8hIFxcbldlbGNvbWUgQ29tZSBUbyBcXG5Db2NvcyBDcmVhdG9yXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS4yM1wiOiBcIkFsaWduOiBDRU5URVJcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9BbGlnbkZvbnRMYWJlbC5maXJlLjI4XCI6IFwiSGVsbG8hIFxcbldlbGNvbWUgQ29tZSBUbyBcXG5Db2NvcyBDcmVhdG9yXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS4zMFwiOiBcIkFsaWduOiBSSUdIVFwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL0FsaWduRm9udExhYmVsLmZpcmUuMzNcIjogXCJWZXJ0aWNhbCBBbGlnblwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL0FsaWduRm9udExhYmVsLmZpcmUuMzhcIjogXCJXZWxjb21lIENvbWUgVG8gXFxuQ29jb3MgQ3JlYXRvclwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL0FsaWduRm9udExhYmVsLmZpcmUuNDBcIjogXCJBbGlnbjogVE9QXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS40NVwiOiBcIldlbGNvbWUgQ29tZSBUbyBcXG5Db2NvcyBDcmVhdG9yXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS40N1wiOiBcIkFsaWduOiBDRU5URVJcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9BbGlnbkZvbnRMYWJlbC5maXJlLjUyXCI6IFwiV2VsY29tZSBDb21lIFRvIFxcbkNvY29zIENyZWF0b3JcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9BbGlnbkZvbnRMYWJlbC5maXJlLjU0XCI6IFwiQWxpZ246IEJPVFRPTVwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL1N5c3RlbUZvbnRMYWJlbC5maXJlLjZcIjogXCJTeXN0ZW0gRm9udFwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL1N5c3RlbUZvbnRMYWJlbC5maXJlLjlcIjogXCJXcmFwXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvU3lzdGVtRm9udExhYmVsLmZpcmUuMTRcIjogXCJUaGlzIGlzIFN5c3RlbSBGb250XCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvU3lzdGVtRm9udExhYmVsLmZpcmUuMTZcIjogXCJPdmVyZmxvdzogQ0xBTVBcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9TeXN0ZW1Gb250TGFiZWwuZmlyZS4yMVwiOiBcIlRoaXMgaXMgU3lzdGVtIEZvbnRcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9TeXN0ZW1Gb250TGFiZWwuZmlyZS4yM1wiOiBcIk92ZXJmbG93OiBTSFJJTktcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9TeXN0ZW1Gb250TGFiZWwuZmlyZS4yNlwiOiBcIk5vIFdyYXBcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9TeXN0ZW1Gb250TGFiZWwuZmlyZS4zMVwiOiBcIlRoaXMgaXMgU3lzdGVtIEZvbnRcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9TeXN0ZW1Gb250TGFiZWwuZmlyZS4zM1wiOiBcIk92ZXJmbG93OiBDTEFNUFwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL1N5c3RlbUZvbnRMYWJlbC5maXJlLjM4XCI6IFwiVGhpcyBpcyBTeXN0ZW0gRm9udFwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL1N5c3RlbUZvbnRMYWJlbC5maXJlLjQwXCI6IFwiT3ZlcmZsb3c6IFNIUklOS1wiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL1N5c3RlbUZvbnRMYWJlbC5maXJlLjQ1XCI6IFwiSGVsbG8hIFdlbGNvbWUgQ29tZSBUbyBDb2NvcyBDcmVhdG9yXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvU3lzdGVtRm9udExhYmVsLmZpcmUuNDdcIjogXCJPdmVyZmxvdzogUkVTWklFX0hFSUdIVFwiLFxuICBcImNhc2VzLzAyX3VpLzAzX2J1dHRvbi9CdXR0b25JblNjcm9sbC5qcy4xXCI6IFwiVG9wIGJ1dHRvbiBjbGlja2VkIVwiLFxuICBcImNhc2VzLzAyX3VpLzAzX2J1dHRvbi9CdXR0b25JblNjcm9sbC5qcy4yXCI6IFwiQm90dG9tIGJ1dHRvbiBjbGlja2VkIVwiLFxuICBcImNhc2VzLzAyX3VpLzAzX2J1dHRvbi9CdXR0b25JblNjcm9sbC5maXJlLjIxXCI6IFwiV2hpY2ggYnV0dG9uIGlzIGNsaWNrZWQ/XCIsXG4gIFwiY2FzZXMvMDJfdWkvMDNfYnV0dG9uL0J1dHRvbkluU2Nyb2xsLmZpcmUuMjdcIjogXCJkcmFnIHRvIHJldmVhbCBtb3JlIGJ1dHRvbnNcXG5cXG5cIixcbiAgXCJjYXNlcy8wMl91aS8wM19idXR0b24vU2ltcGxlQnV0dG9uLmpzLjFcIjogXCJMZWZ0IGJ1dHRvbiBjbGlja2VkIVwiLFxuICBcImNhc2VzLzAyX3VpLzAzX2J1dHRvbi9TaW1wbGVCdXR0b24uanMuMlwiOiBcIlJpZ2h0IGJ1dHRvbiBjbGlja2VkIVwiLFxuICBcImNhc2VzLzAyX3VpLzAzX2J1dHRvbi9CdXR0b25JbnRlcmFjdGFibGUuZmlyZS43XCI6IFwiUExBWVwiLFxuICBcImNhc2VzLzAyX3VpLzAzX2J1dHRvbi9CdXR0b25JbnRlcmFjdGFibGUuZmlyZS4xNlwiOiBcIlNUT1BcIixcbiAgXCJjYXNlcy8wMl91aS8wM19idXR0b24vQnV0dG9uSW50ZXJhY3RhYmxlLmZpcmUuMjFcIjogXCJpbnRlcmFjdGFibGU6IHRydWVcIixcbiAgXCJjYXNlcy8wMl91aS8wM19idXR0b24vQnV0dG9uSW50ZXJhY3RhYmxlLmZpcmUuMjNcIjogXCJpbnRlcmFjdGFibGU6IGZhbHNlXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDNfYnV0dG9uL0J1dHRvbkludGVyYWN0YWJsZS5qcy4xXCI6IFwiaW50ZXJhY3RhYmxlOiBcIixcbiAgXCJjYXNlcy8wMl91aS8wM19idXR0b24vQnV0dG9uSW50ZXJhY3RhYmxlLmpzLjJcIjogXCJpbnRlcmFjdGFibGU6IFwiLFxuICBcImNhc2VzLzAyX3VpLzAzX2J1dHRvbi9TaW1wbGVCdXR0b24uZmlyZS42XCI6IFwiV2hpY2ggYnV0dG9uIGlzIGNsaWNrZWQ/XCIsXG4gIFwiY2FzZXMvMDJfdWkvMDRfcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuZmlyZS43XCI6IFwiSG9yaXpvbnRhbCBiYXIgd2l0aCBwcm9ncmVzcyAwLjNcIixcbiAgXCJjYXNlcy8wMl91aS8wNF9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5maXJlLjExXCI6IFwiSG9yaXpvbnRhbCBiYXIgcmV2ZXJzZSB3aXRoIHByb2dyZXNzIDEuMFwiLFxuICBcImNhc2VzLzAyX3VpLzA0X3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmZpcmUuMTVcIjogXCJWZXJ0aWNhbCBiYXIgXFxuZnJvbSBib3R0b21cIixcbiAgXCJjYXNlcy8wMl91aS8wNF9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5maXJlLjE5XCI6IFwiVmVydGljYWwgYmFyIFxcbmZyb20gdG9wXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDRfcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuZmlyZS4yM1wiOiBcIlByb2dyZXNzIGJhciB3aXRoIHNwcml0ZVwiLFxuICBcImNhc2VzLzAyX3VpLzA0X3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmZpcmUuMjhcIjogXCJQcm9ncmVzcyBiYXIgd2l0aCBjaGlsZCBzcHJpdGVcIixcbiAgXCJjYXNlcy8wMl91aS8wNV9zY3JvbGxWaWV3L0l0ZW0uanMuMVwiOiBcIlRtcGwjXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDVfc2Nyb2xsVmlldy9MaXN0Vmlldy5maXJlLjIzXCI6IFwiSXRlbSAjMDBcIixcbiAgXCJjYXNlcy8wMl91aS8wNV9zY3JvbGxWaWV3L1Njcm9sbFZpZXcuZmlyZS43XCI6IFwiU2Nyb2xsdmlldyBmdWxsIGZ1bmN0aW9uYWxpdHlcIixcbiAgXCJjYXNlcy8wMl91aS8wNV9zY3JvbGxWaWV3L1Njcm9sbFZpZXcuZmlyZS4zMFwiOiBcIlNjcm9sbHZpZXcgd2l0aG91dCBpbmVydGlhXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDVfc2Nyb2xsVmlldy9TY3JvbGxWaWV3LmZpcmUuNTNcIjogXCJTY3JvbGx2aWV3IHdpdGhvdXQgZWxhc3RpY1wiLFxuICBcImNhc2VzLzAyX3VpLzA1X3Njcm9sbFZpZXcvU2Nyb2xsVmlldy5maXJlLjc2XCI6IFwiU2Nyb2xsdmlldyBob3Jpem9udGFsIHNjcm9sbCBvbmx5XCIsXG4gIFwiY2FzZXMvMDJfdWkvMDVfc2Nyb2xsVmlldy9TY3JvbGxWaWV3LmZpcmUuOTNcIjogXCJTY3JvbGx2aWV3IHZlcnRpY2FsIG9ubHlcIixcbiAgXCJjYXNlcy8wMl91aS8wNV9zY3JvbGxWaWV3L1Njcm9sbFZpZXcuZmlyZS4xMTBcIjogXCJTY3JvbGx2aWV3IG5vIHNjcm9sbGJhclwiLFxuICBcImNhc2VzLzAyX3VpLzA2X2xheW91dC9MYXlvdXRSZXNpemVDb250YWluZXIuZmlyZS42XCI6IFwiQmFzaWNcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0UmVzaXplQ29udGFpbmVyLmZpcmUuMzFcIjogXCJIb3Jpem9udGFsXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDZfbGF5b3V0L0xheW91dFJlc2l6ZUNvbnRhaW5lci5maXJlLjM2XCI6IFwiVmVydGljYWxcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0UmVzaXplQ29udGFpbmVyLmZpcmUuNDFcIjogXCJHcmlkIExheW91dCBBeGlzIGhvcml6b250YWxcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0UmVzaXplQ29udGFpbmVyLmZpcmUuNDZcIjogXCJHcmlkIExheW91dCBBeGlzIHZlcnRpY2FsXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDZfbGF5b3V0L0xheW91dFJlc2l6ZUNoaWxkcmVuLmZpcmUuNlwiOiBcIkhvcml6b250YWwgbGF5b3V0IG5vbmVcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0UmVzaXplQ2hpbGRyZW4uZmlyZS4zMVwiOiBcIlZlcnRpY2FsIGxheW91dCBub25lXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDZfbGF5b3V0L0xheW91dFJlc2l6ZUNoaWxkcmVuLmZpcmUuNDhcIjogXCJHcmlkIHN0YXJ0IGF4aXMgaG9yaXpvbnRhbCBub25lXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDZfbGF5b3V0L0xheW91dFJlc2l6ZUNoaWxkcmVuLmZpcmUuODVcIjogXCJHcmlkIHN0YXJ0IGF4aXMgdmVydGljYWwgbm9uZVwiLFxuICBcImNhc2VzLzAyX3VpLzA2X2xheW91dC9MYXlvdXRJblNjcm9sbFZpZXcuZmlyZS42XCI6IFwiU2Nyb2xsVmlldyB3aXRoIHZlcnRpY2FsICBsYXlvdXRcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0SW5TY3JvbGxWaWV3LmZpcmUuNDBcIjogXCJTY3JvbGxWaWV3IHdpdGggaG9yaXpvbnRhbCBsYXlvdXRcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0SW5TY3JvbGxWaWV3LmZpcmUuNzRcIjogXCJTY3JvbGxWaWV3IHdpdGggR3JpZCBMYXlvdXRcXG5zdGFydCBheGlzOiBob3Jpem9udGFsIFwiLFxuICBcImNhc2VzLzAyX3VpLzA2X2xheW91dC9MYXlvdXRJblNjcm9sbFZpZXcuZmlyZS4xNDRcIjogXCJTY3JvbGxWaWV3IHdpdGggR3JpZCBMYXlvdXRcXG5zdGFydCBheGlzOiB2ZXJ0aWNhbCBcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0Tm9uZS5maXJlLjZcIjogXCJCYXNpYyBsYXlvdXQsIFR5cGU6IE5vbmVcXG5SZXNpemUgY29udGFpbmVyXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDZfbGF5b3V0L0xheW91dE5vbmUuZmlyZS4zNVwiOiBcIkhvcml6b250YWwgbGF5b3V0IE5vbmVcXG5ObyByZXNpemVcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0Tm9uZS5maXJlLjYwXCI6IFwiVmVydGljYWwgbGF5b3V0LCBUeXBlOiBOb25lXFxuTm8gcmVzaXplXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDZfbGF5b3V0L0xheW91dE5vbmUuZmlyZS43N1wiOiBcIkdyaWQgc3RhcnQgYXhpczogaG9yaXpvbnRhbCwgVHlwZTogTm9uZVxcbk5vIHJlc2l6ZVwiLFxuICBcImNhc2VzLzAyX3VpLzA2X2xheW91dC9MYXlvdXROb25lLmZpcmUuMTQyXCI6IFwiR3JpZCBzdGFydCBheGlzOiB2ZXJ0aWNhbCwgVHlwZTogTm9uZVxcbk5vIHJlc2l6ZVwiLFxuICBcImNhc2VzLzAyX3VpLzA3X2NoYW5nZV9jYW52YXNfYW5jaG9yL0JvdHRvbUxlZnRBbmNob3IuZmlyZS44XCI6IFwieDowLCB5OjBcIixcbiAgXCJjYXNlcy8wMl91aS8wN19jaGFuZ2VfY2FudmFzX2FuY2hvci9Cb3R0b21MZWZ0QW5jaG9yLmZpcmUuMTJcIjogXCJ4OjQ4MCwgeTozMjBcIixcbiAgXCJjYXNlcy8wMl91aS8wN19jaGFuZ2VfY2FudmFzX2FuY2hvci9Cb3R0b21MZWZ0QW5jaG9yLmZpcmUuMTZcIjogXCJ4Ojk2MCwgeTo2NDBcIixcbiAgXCJjYXNlcy8wMl91aS8wN19lZGl0Qm94L2VkaXRib3guanMuMVwiOiBcIkVudGVyIFRleHQ6IFwiLFxuICBcImNhc2VzLzAyX3VpLzA3X2VkaXRCb3gvRWRpdEJveC5maXJlLjI1XCI6IFwiU2luZ2xlIExpbmUgUGFzc3dvcmQ6XCIsXG4gIFwiY2FzZXMvMDJfdWkvMDdfZWRpdEJveC9FZGl0Qm94LmZpcmUuMjdcIjogXCJTaW5nbGUgTGluZSBUZXh0OlwiLFxuICBcImNhc2VzLzAyX3VpLzA3X2VkaXRCb3gvRWRpdEJveC5maXJlLjI5XCI6IFwiTXV0aXBsZSBMaW5lIFRleHQ6XCIsXG4gIFwiY2FzZXMvMDJfdWkvMDdfZWRpdEJveC9FZGl0Qm94LmZpcmUuMzJcIjogXCJDbGlja1wiLFxuICBcImNhc2VzLzAyX3VpLzA3X2VkaXRCb3gvRWRpdEJveC5maXJlLjM4XCI6IFwiQnV0dG9uIG11c3QgYmUgb24gdG9wIG9mIEVkaXRCb3gsIFxcbmFuZCBpdCBzaG91bGQgZW5hYmxlIGNsaWNrLlwiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAxX3BsYXllcl9jb250cm9sL0V2ZW50TWFuYWdlci9LZXlib2FyZElucHV0LmZpcmUuNlwiOiBcIlByZXNzICdBJyBvciAnRCcgdG8gY29udHJvbCBzaGVlcFwiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAxX3BsYXllcl9jb250cm9sL09uL09uVG91Y2hDdHJsLmpzLjFcIjogXCJ0b3VjaCAoXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDFfcGxheWVyX2NvbnRyb2wvT24vT25Ub3VjaElucHV0LmZpcmUuMTBcIjogXCJUcnkgdG91Y2hpbmcgYW55d2hlcmUuXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDFfcGxheWVyX2NvbnRyb2wvT24vT25NdWx0aVRvdWNoSW5wdXQuZmlyZS4yMFwiOiBcIlRoZSBzYW1wbGUgY2FuIG9ubHkgYmUgZWZmZWN0aXZlIG9uIG1vYmlsZSBwbGF0Zm9ybXMh77+977+9XCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDFfcGxheWVyX2NvbnRyb2wvT24vT25NdWx0aVRvdWNoSW5wdXQuZmlyZS4yMVwiOiBcIlVzZSB5b3VyIGZpbmdlcnMgdG8gem9vbSBpbWFnZSFcIixcbiAgXCJjYXNlcy8wM19nYW1lcGxheS8wMl9hY3Rpb25zL1NpbXBsZUFjdGlvbi5maXJlLjEzXCI6IFwiVGhpcyBpcyBTaW1wbGUgQWN0aW9uLlwiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9BbmltYXRlQ3VzdG9tUHJvcGVydHkuZmlyZS4xNFwiOiBcIkxhYmVsXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDNfYW5pbWF0aW9uL0FuaW1hdGVDdXN0b21Qcm9wZXJ0eS5maXJlLjE4XCI6IFwiVGhpcyBpcyBBbmltYXRlIEN1c3RvbSBQcm9wZXJ0eS5cIixcbiAgXCJjYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vQW5pbWF0aW9uRXZlbnQuZmlyZS42XCI6IFwiU3RhcnQgdGhlIGZpcnN0IGFuaW1hdGlvblwiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9BbmltYXRpb25FdmVudC5maXJlLjE0XCI6IFwiVGhpcyBpcyBBbmltYXRpb24gRXZlbnQuXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDNfYW5pbWF0aW9uL0FuaW1hdGlvbkV2ZW50LmpzLjFcIjogXCJTdGFydCB0aGVcIixcbiAgXCJjYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vTW92ZUFuaW1hdGlvbi5maXJlLjExXCI6IFwiTGluZWFyXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDNfYW5pbWF0aW9uL01vdmVBbmltYXRpb24uZmlyZS4xN1wiOiBcIkNhc2UgSW4gRXhwb1wiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9Nb3ZlQW5pbWF0aW9uLmZpcmUuMjNcIjogXCJDYXNlIE91dCBFeHBvXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDNfYW5pbWF0aW9uL01vdmVBbmltYXRpb24uZmlyZS4yOVwiOiBcIkNhc2UgT3V0IEluIEV4cG9cIixcbiAgXCJjYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vTW92ZUFuaW1hdGlvbi5maXJlLjM1XCI6IFwiQmFjayBGb3J3YXJkXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDNfYW5pbWF0aW9uL01vdmVBbmltYXRpb24uZmlyZS40MVwiOiBcIlRoaXMgaXMgTW92ZSBBbmltYXRpb24uXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDNfYW5pbWF0aW9uL1Nwcml0ZUFuaW1hdGlvbi5maXJlLjlcIjogXCJUaGlzIGlzIFNwcmllRnJhbWUgQW5pbWF0aW9uLlwiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9DcmVhdGVDbGlwLmZpcmUuMVwiOiBcIkR5bmFtaWMgQ3JlYXRpbmcgQW5pbWF0aW9uQ2xpcFwiLFxuICBcImNhc2VzLzA0X2F1ZGlvL1NpbXBsZUF1ZGlvLmZpcmUuNlwiOiBcIkVuam95IHRoZSBtdXNpYyFcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDFfcHJvcGVydGllcy9Ob2RlQXJyYXkuZmlyZS4xNFwiOiBcIlRoaXMgaXMgTm9kZSBBcnJheS5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDFfcHJvcGVydGllcy9Ob25TZXJpYWxpemVkLmZpcmUuNlwiOiBcIkxhYmVsXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzAxX3Byb3BlcnRpZXMvTm9uU2VyaWFsaXplZC5maXJlLjhcIjogXCJMYWJlbFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wMV9wcm9wZXJ0aWVzL05vblNlcmlhbGl6ZWQuZmlyZS4xMFwiOiBcIlRoaXMgaXMgTm9uIFNlcmlhbGl6ZWQuXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzAxX3Byb3BlcnRpZXMvUmVmZXJlbmNlVHlwZS5maXJlLjhcIjogXCJMYWJlbFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wMV9wcm9wZXJ0aWVzL1JlZmVyZW5jZVR5cGUuZmlyZS4xMVwiOiBcIlRoaXMgZXhhbXBsZSBkb2VzIG5vdCBpbmNsdWRlIHRoZSBydW50aW1lIGRlbW9uc3RyYXRpb25cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDFfcHJvcGVydGllcy9WYWx1ZVR5cGUuZmlyZS42XCI6IFwiVGhpcyBleGFtcGxlIGRvZXMgbm90IGluY2x1ZGUgdGhlIHJ1bnRpbWUgZGVtb25zdHJhdGlvblwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wMl9wcmVmYWIvSW5zdGFudGlhdGVQcmVmYWIuZmlyZS43XCI6IFwiVGhpcyBpcyBJbnN0YW50aWF0ZSBQcmVmYWIuXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzAzX2V2ZW50cy9FdmVudEluTWFzay5maXJlLjIzXCI6IFwiQ2hhbmdlIG9yZGVyIG9mIG5vZGVzXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzAzX2V2ZW50cy9TaW1wbGVFdmVudC5maXJlLjE5XCI6IFwiVG91Y2ggZXZlbnQgY2FuIHN1cHBvcnQgY2xpY2tcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDNfZXZlbnRzL1NpbXBsZUV2ZW50LmZpcmUuMjFcIjogXCJNb3VzZSBldmVudCBjYW4gc3VwcG9ydCBjbGljaywgaG92ZXIsIHdoZWVsXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzAzX2V2ZW50cy9TaW1wbGVFdmVudC5maXJlLjIzXCI6IFwiQ3VzdG9tIGV2ZW50IGNhbiBiZSB0cmlnZ2VyZWQgbWFudWFsbHlcXG4oQ2xpY2sgYnV0dG9uIGFib3ZlKVwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wM19ldmVudHMvU2ltcGxlRXZlbnQuZmlyZS4yNVwiOiBcIlRoaXMgaXMgU2ltcGxlIEV2ZW50LlwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wM19ldmVudHMvVG91Y2hQcm9wYWdhdGlvbi5maXJlLjE1XCI6IFwiVGhpcyBpcyBUb3VjaCBQcm9wYWdhdGlvbi5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDRfc2NoZWR1bGVyL3NjaGVkdWxlQ2FsbGJhY2tzLmpzLjFcIjogXCI1LjAwIHNcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDRfc2NoZWR1bGVyL3NjaGVkdWxlci5maXJlLjlcIjogXCI1LjAwIHNcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDRfc2NoZWR1bGVyL3NjaGVkdWxlci5maXJlLjEyXCI6IFwiUmVwZWF0IFNjaGVkdWxlXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA0X3NjaGVkdWxlci9zY2hlZHVsZXIuZmlyZS4xOFwiOiBcIkNhbmNlbCBTY2hlZHVsZXNcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDRfc2NoZWR1bGVyL3NjaGVkdWxlci5maXJlLjI0XCI6IFwiU2NoZWR1bGUgT25jZVwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wNF9zY2hlZHVsZXIvc2NoZWR1bGVyLmZpcmUuMjlcIjogXCJDb3VudGVyIHVzZSB1cGRhdGUgZnVuY3Rpb24gdG8gY2hhbmdlIHN0cmluZyB2YWx1ZSBlYWNoIGZyYW1lXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA0X3NjaGVkdWxlci9zY2hlZHVsZXIuZmlyZS4zMVwiOiBcIlRoaXMgaXMgU2NoZWR1bGVyLlwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wNV9jcm9zc19yZWZlcmVuY2UvQ3Jvc3NSZWZlcmVuY2UuZmlyZS43XCI6IFwiTGFiZWxcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDVfY3Jvc3NfcmVmZXJlbmNlL0Nyb3NzUmVmZXJlbmNlLmZpcmUuMTJcIjogXCJMYWJlbFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wNV9jcm9zc19yZWZlcmVuY2UvQ3Jvc3NSZWZlcmVuY2UuZmlyZS4xNFwiOiBcIlRoaXMgaXMgQ3Jvc3MgUmVmZXJlbmNlLlwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wNl9saWZlX2N5Y2xlL2xpZmVfY3ljbGUuZmlyZS42XCI6IFwiVGhpcyBpcyBMaWZlIGN5Y2xlLlwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0Fzc2V0TG9hZGluZy5maXJlLjVcIjogXCJBc3NldCBMb2FkaW5nXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvQXNzZXRMb2FkaW5nLmZpcmUuOVwiOiBcIkxvYWQgU3ByaXRlRnJhbWVcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuZmlyZS4xNVwiOiBcIkxvYWQgVGV4dHVyZVwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0Fzc2V0TG9hZGluZy5maXJlLjIxXCI6IFwiTG9hZCBBdWRpb1wiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0Fzc2V0TG9hZGluZy5maXJlLjI3XCI6IFwiTG9hZCBUeHRcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuZmlyZS4zM1wiOiBcIkxvYWQgRm9udFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0Fzc2V0TG9hZGluZy5maXJlLjM5XCI6IFwiTG9hZCBQbGlzdFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0Fzc2V0TG9hZGluZy5maXJlLjQ1XCI6IFwiTG9hZCBQcmVmYWJcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuZmlyZS41MVwiOiBcIkxvYWQgU2NlbmVcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuZmlyZS41N1wiOiBcIkxvYWQgQW5pbWF0aW9uXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvQXNzZXRMb2FkaW5nLmZpcmUuNTlcIjogXCJMb2FkIFNwaW5lXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvQXNzZXRMb2FkaW5nLmZpcmUuNjVcIjogXCJOb3QgY3VycmVudGx5IGxvYWRlZCBFbnRpdHkuXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvQXNzZXRMb2FkaW5nLmpzLjFcIjogXCJMb2FkZWQgXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvQXNzZXRMb2FkaW5nLmpzLjJcIjogXCJQbGF5IFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0Fzc2V0TG9hZGluZy5qcy4zXCI6IFwiQ3JlYXRlIFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0Fzc2V0TG9hZGluZy5qcy40XCI6IFwiUGxheWluZyBNdXNpYy5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuanMuNVwiOiBcIlRoaXMgaXMgRm9udCFcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Mb2FkUmVzLmZpcmUuN1wiOiBcIkJ5IFR5cGVcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Mb2FkUmVzLmZpcmUuMTBcIjogXCJMb2FkIFNwcml0ZUZyYW1lXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvTG9hZFJlcy5maXJlLjE3XCI6IFwiQnkgVXJsXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvTG9hZFJlcy5maXJlLjIwXCI6IFwiTG9hZCBQcmVmYWJcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Mb2FkUmVzQWxsLmZpcmUuNlwiOiBcIkxvYWRSZXNBbGxcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Mb2FkUmVzQWxsLmZpcmUuMjRcIjogXCJMb2FkIEFsbFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0xvYWRSZXNBbGwuZmlyZS4zMFwiOiBcIkxvYWQgU3ByaXRlRnJhbWUgQWxsXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvTG9hZFJlc0FsbC5maXJlLjM2XCI6IFwiQ2xlYXIgQWxsXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA4X21vZHVsZS9sb2FkX21vZHVsZS5maXJlLjZcIjogXCJMb2FkIE1vZHVsZVwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wOF9tb2R1bGUvbG9hZF9tb2R1bGUuZmlyZS4xMFwiOiBcIkNyZWF0ZSBNb25zdGVyXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA5X3NpbmdsZXRvbi9TaW5nbGV0b24uZmlyZS42XCI6IFwiVGhpcyBleGFtcGxlIGRvZXMgbm90IGluY2x1ZGUgdGhlIHJ1bnRpbWUgZGVtb25zdHJhdGlvblwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMF9sb2FkaW5nQmFyL0xvYWRpbmdCYXJDdHJsLmpzLjFcIjogXCJkb3dubG9hZCBjb21wbGV0ZSEhXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzEwX2xvYWRpbmdCYXIvTG9hZGluZ0JhckN0cmwuanMuMlwiOiBcImRvd2xvYWRpbmc6IFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMF9sb2FkaW5nQmFyL2xvYWRpbmdCYXIuZmlyZS43XCI6IFwiTG9hZGluZyBDb21wbGV0ZWRcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTBfbG9hZGluZ0Jhci9sb2FkaW5nQmFyLmZpcmUuMThcIjogXCJEb3dsb2FkaW5nXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuMVwiOiBcIndhaXRpbmcuLi5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9OZXR3b3JrQ3RybC5qcy4yXCI6IFwid2FpdGluZy4uLlwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL05ldHdvcmtDdHJsLmpzLjNcIjogXCJ3YWl0aW5nLi4uXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuNFwiOiBcIndhaXRpbmcuLi5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9OZXR3b3JrQ3RybC5qcy41XCI6IFwiV2ViU29ja2V0XFxcXG5TZW5kIEJpbmFyeSBXUyB3YXMgb3BlbmVkLlwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL05ldHdvcmtDdHJsLmpzLjZcIjogXCJXZWJTb2NrZXRcXFxcblJlc3BvbnNlIGdldC5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9OZXR3b3JrQ3RybC5qcy43XCI6IFwiV2ViU29ja2V0XFxcXG5zZW5kQmluYXJ5IEVycm9yIHdhcyBmaXJlZC5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9OZXR3b3JrQ3RybC5qcy44XCI6IFwiV2ViU29ja2V0XFxcXG53ZWJzb2NrZXQgaW5zdGFuY2UgY2xvc2VkLlwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL05ldHdvcmtDdHJsLmpzLjlcIjogXCJXZWJTb2NrZXRcXFxcblNlbmQgQmluYXJ5IFdTIGlzIHdhaXRpbmcuLi5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9OZXR3b3JrQ3RybC5qcy4xMFwiOiBcIldlYlNvY2tldFxcXFxuXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuMTFcIjogXCJTb2NrZXRJT1xcXFxuXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuMTJcIjogXCJTb2NrZXRJT1xcXFxuXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuMTNcIjogXCJTb2NrZXRJT1xcXFxuXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuMTRcIjogXCJTb2NrZXRJT1xcXFxuXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvbmV0d29yay5maXJlLjdcIjogXCJMYWJlbFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL25ldHdvcmsuZmlyZS42XCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9uZXR3b3JrLmZpcmUuMTFcIjogXCJMYWJlbFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL25ldHdvcmsuZmlyZS4xMFwiOiBcIlhNTEh0dHBSZXF1ZXN0IChBcnJheUJ1ZmZlcilcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9uZXR3b3JrLmZpcmUuMTVcIjogXCJMYWJlbFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL25ldHdvcmsuZmlyZS4xNFwiOiBcIldlYlNvY2tldFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL25ldHdvcmsuZmlyZS4xOVwiOiBcIkxhYmVsXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvbmV0d29yay5maXJlLjE4XCI6IFwiU29ja2V0SU9cIixcbiAgXCJjYXNlcy9uYXRpdmVfY2FsbC9uYXRpdmVfY2FsbC5maXJlLjFcIjogXCJKUyB0byBKQVZBIHJlZmxlY3Rpb24gb25seSB3b3JrcyBBbmRyb2lkIG1vYmlsZSBwbGF0Zm9ybSFcIixcbiAgXCJjYXNlcy9uYXRpdmVfY2FsbC9uYXRpdmVfY2FsbC5maXJlLjJcIjogXCJDbGljayBvbiB0aGUgYnV0dG9uIGNhbGxzIHRoZSBzdGF0aWMgbWV0aG9kIVwiLFxuICBcImNhc2VzL25hdGl2ZV9jYWxsL25hdGl2ZV9jYWxsLmZpcmUuM1wiOiBcIkNsaWNrXCIsXG4gIFwiY2FzZXMvY29sbGlkZXIvQ2F0ZWdvcnkuZmlyZS4zXCI6IFwiR3JvdXA6IENvbGxpZGVyXCIsXG4gIFwiY2FzZXMvY29sbGlkZXIvQ2F0ZWdvcnkuZmlyZS41XCI6IFwiR3JvdXA6IENvbGxpZGVyXCIsXG4gIFwiY2FzZXMvY29sbGlkZXIvQ2F0ZWdvcnkuZmlyZS43XCI6IFwiR3JvdXA6IENvbGxpZGVyXCIsXG4gIFwiY2FzZXMvY29sbGlkZXIvQ2F0ZWdvcnkuZmlyZS45XCI6IFwiR3JvdXA6IERlZmF1bHRcIixcbiAgXCJjYXNlcy9jb2xsaWRlci9TaGFwZS5maXJlLjIwXCI6IFwiU2hvdyBQb2x5Z29uXCIsXG4gIFwiY2FzZXMvY29sbGlkZXIvU2hhcGUuZmlyZS4yN1wiOiBcIlNob3cgQ2lyY2xlXCIsXG4gIFwiY2FzZXMvY29sbGlkZXIvU2hhcGUuZmlyZS4zNFwiOiBcIlNob3cgQm94XCIsXG4gIFwiY2FzZXMvY29sbGlkZXIvU2hhcGUuZmlyZS40M1wiOiBcIlNob3cgUG9seWdvblwiLFxuICBcImNhc2VzL2NvbGxpZGVyL1NoYXBlLmZpcmUuNTBcIjogXCJTaG93IENpcmNsZVwiLFxuICBcImNhc2VzL2NvbGxpZGVyL1NoYXBlLmZpcmUuNTdcIjogXCJTaG93IEJveFwiLFxuICBcImNhc2VzL21vdGlvblN0cmVhay9Nb3Rpb25TdHJlYWsuZmlyZS4xXCI6IFwiT25seSB3b3JrcyBpbiB0aGUgV2ViR0wh77+977+9XCIsXG4gIFwiY2FzZXMvbW90aW9uU3RyZWFrL01vdGlvblN0cmVhay5maXJlLjJcIjogXCJDaGFuZ2UgTW90aW9uU3RyZWFrXCIsXG4gIFwiY2FzZXMvc3BpbmUvU3BpbmVCb3kuZmlyZS4xMVwiOiBcIkRlYnVnIFNsb3RzXCIsXG4gIFwiY2FzZXMvc3BpbmUvU3BpbmVCb3kuZmlyZS4xOFwiOiBcIkRlYnVnIEJvbmVzXCIsXG4gIFwiY2FzZXMvc3BpbmUvU3BpbmVCb3kuZmlyZS4yNVwiOiBcIlRpbWUgU2NhbGVcIixcbiAgXCJjYXNlcy9zcGluZS9TcGluZUJveS5maXJlLjM2XCI6IFwiU3RvcFwiLFxuICBcImNhc2VzL3NwaW5lL1NwaW5lQm95LmZpcmUuNDNcIjogXCJXYWxrXCIsXG4gIFwiY2FzZXMvc3BpbmUvU3BpbmVCb3kuZmlyZS41MFwiOiBcIlJ1blwiLFxuICBcImNhc2VzL3NwaW5lL1NwaW5lQm95LmZpcmUuNThcIjogXCJKdW1wXCIsXG4gIFwiY2FzZXMvc3BpbmUvU3BpbmVCb3kuZmlyZS42NVwiOiBcIlNob290XCIsXG4gIFwiY2FzZXMvdGlsZWRtYXAvUHV6emxlLmZpcmUuMThcIjogXCJZb3UgV2luXCIsXG4gIFwiY2FzZXMvdGlsZWRtYXAvUHV6emxlLmZpcmUuMjFcIjogXCJSZXN0YXJ0XCIsXG4gIFwicmVzL3ByZWZhYnMvTGlzdEl0ZW0ucHJlZmFiLjJcIjogXCJMYWJlbCBzc3NzXCIsXG4gIFwicmVzL3ByZWZhYnMvTW9uc3Rlci5wcmVmYWIuM1wiOiBcIk5hbWU6XCIsXG4gIFwicmVzL3ByZWZhYnMvTW9uc3Rlci5wcmVmYWIuMTFcIjogXCJMZXZlbCA6XCIsXG4gIFwicmVzL3ByZWZhYnMvTW9uc3Rlci5wcmVmYWIuMTlcIjogXCJIcCA6XCIsXG4gIFwicmVzL3ByZWZhYnMvTW9uc3Rlci5wcmVmYWIuMjdcIjogXCJBdHRhY2sgOlwiLFxuICBcInJlcy9wcmVmYWJzL01vbnN0ZXIucHJlZmFiLjM1XCI6IFwiRGVmZW5zZSA6XCIsXG4gIFwicmVzL3ByZWZhYnMvbG9hZEl0ZW0ucHJlZmFiLjFcIjogXCJMYWJlbFwiLFxuICBcInJlc291cmNlcy90ZXN0IGFzc2V0cy9wcmVmYWIucHJlZmFiLjJcIjogXCJUaGlzIGlzIFByZWZhYlwiLFxuICBcInJlc291cmNlcy90ZXN0IGFzc2V0cy9zY2VuZS5maXJlLjNcIjogXCJSZXR1cm4gQXNzZXQgTG9hZGluZyBTY2VuZVwiLFxuICBcInJlc291cmNlcy90ZXN0IGFzc2V0cy9zY2VuZS5maXJlLjZcIjogXCJSZXR1cm5cIixcbiAgXCJzY3JpcHRzL0dsb2JhbC9NZW51LmpzLjFcIjogXCJUZW1wb3JhcnkgbGFjayBvZiBpbnRyb2R1Y3Rpb25cIlxufTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2Q5NjQwMHZORkZQSXB6ZzQ4a1B1WFZjJywgJ2ZvbGxvdycpO1xuLy8gY2FzZXMvY29sbGlkZXIvUGxhdGZvcm0vZm9sbG93LmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZm9sbG93ID0gY2MuZm9sbG93KHRoaXMudGFyZ2V0LCBjYy5yZWN0KDAsIDAsIDIwMDAsIDIwMDApKTtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihmb2xsb3cpO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnOTM3ODlDL3NodElMNmVudFlzWlBqZWUnLCAnaTE4bicpO1xuLy8gaTE4bi9pMThuLmpzXG5cbnZhciBQb2x5Z2xvdCA9IHJlcXVpcmUoJ3BvbHlnbG90Jyk7XG52YXIgbGFuZyA9IGNjLnN5cy5sYW5ndWFnZTtcbmlmIChsYW5nICE9PSAnemgnKSB7XG4gICAgbGFuZyA9ICdlbic7XG59XG52YXIgZGF0YSA9IHJlcXVpcmUobGFuZyk7IC8vIHVwZGF0ZSB0aGlzIHRvIHNldCB5b3VyIGRlZmF1bHQgZGlzcGxheWluZyBsYW5ndWFnZSBpbiBlZGl0b3Jcbi8vIGxldCBwb2x5Z2xvdCA9IG51bGw7XG52YXIgcG9seWdsb3QgPSBuZXcgUG9seWdsb3QoeyBwaHJhc2VzOiBkYXRhLCBhbGxvd01pc3Npbmc6IHRydWUgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGFsbG93IHlvdSB0byBzd2l0Y2ggbGFuZ3VhZ2UgZHVyaW5nIHJ1bnRpbWUsIGxhbmd1YWdlIGFyZ3VtZW50IHNob3VsZCBiZSB0aGUgc2FtZSBhcyB5b3VyIGRhdGEgZmlsZSBuYW1lXG4gICAgICogc3VjaCBhcyB3aGVuIGxhbmd1YWdlIGlzICd6aCcsIGl0IHdpbGwgbG9hZCB5b3VyICd6aC5qcycgZGF0YSBzb3VyY2UuXG4gICAgICogQG1ldGhvZCBpbml0XG4gICAgICogQHBhcmFtIGxhbmd1YWdlIC0gdGhlIGxhbmd1YWdlIHNwZWNpZmljIGRhdGEgZmlsZSBuYW1lLCBzdWNoIGFzICd6aCcgdG8gbG9hZCAnemguanMnXG4gICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChsYW5ndWFnZSkge1xuICAgICAgICBsYW5nID0gbGFuZ3VhZ2U7XG4gICAgICAgIGRhdGEgPSByZXF1aXJlKGxhbmcpO1xuICAgICAgICBwb2x5Z2xvdC5yZXBsYWNlKGRhdGEpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogdGhpcyBtZXRob2QgdGFrZXMgYSB0ZXh0IGtleSBhcyBpbnB1dCwgYW5kIHJldHVybiB0aGUgbG9jYWxpemVkIHN0cmluZ1xuICAgICAqIFBsZWFzZSByZWFkIGh0dHBzOi8vZ2l0aHViLmNvbS9haXJibmIvcG9seWdsb3QuanMgZm9yIGRldGFpbHNcbiAgICAgKiBAbWV0aG9kIHRcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IGxvY2FsaXplZCBzdHJpbmdcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqXG4gICAgICogdmFyIG15VGV4dCA9IGkxOG4udCgnTVlfVEVYVF9LRVknKTtcbiAgICAgKlxuICAgICAqIC8vIGlmIHlvdXIgZGF0YSBzb3VyY2UgaXMgZGVmaW5lZCBhc1xuICAgICAqIC8vIHtcImhlbGxvX25hbWVcIjogXCJIZWxsbywgJXtuYW1lfVwifVxuICAgICAqIC8vIHlvdSBjYW4gdXNlIHRoZSBmb2xsb3dpbmcgdG8gaW50ZXJwb2xhdGUgdGhlIHRleHRcbiAgICAgKiB2YXIgZ3JlZXRpbmdUZXh0ID0gaTE4bi50KCdoZWxsb19uYW1lJywge25hbWU6ICduYW50YXMnfSk7IC8vIEhlbGxvLCBuYW50YXNcbiAgICAgKi9cbiAgICB0OiBmdW5jdGlvbiB0KGtleSwgb3B0KSB7XG4gICAgICAgIHJldHVybiBwb2x5Z2xvdC50KGtleSwgb3B0KTtcbiAgICB9XG59O1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnM2VkN2JWSTVteEYrSTc1UEhiMGsyNHEnLCAnbGluZVRvJyk7XG4vLyBjYXNlcy9ncmFwaGljcy9leGFtcGxlL2xpbmVUby5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICBpZiAoY2MuZGlyZWN0b3Iuc2V0Q2xlYXJDb2xvcikge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3Iuc2V0Q2xlYXJDb2xvcihjYy5Db2xvci5XSElURSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZyA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcblxuICAgICAgICBnLmxpbmVXaWR0aCA9IDEwO1xuICAgICAgICBnLmZpbGxDb2xvciA9IGNjLmhleFRvQ29sb3IoJyNmZjAwMDAnKTtcblxuICAgICAgICBnLm1vdmVUbygtMjAsIDApO1xuICAgICAgICBnLmxpbmVUbygwLCAtMTAwKTtcbiAgICAgICAgZy5saW5lVG8oMjAsIDApO1xuICAgICAgICBnLmxpbmVUbygwLCAxMDApO1xuICAgICAgICBnLmNsb3NlKCk7XG5cbiAgICAgICAgZy5zdHJva2UoKTtcbiAgICAgICAgZy5maWxsKCk7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZTogZnVuY3Rpb24gb25EaXNhYmxlKCkge1xuICAgICAgICBpZiAoY2MuZGlyZWN0b3Iuc2V0Q2xlYXJDb2xvcikge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3Iuc2V0Q2xlYXJDb2xvcihjYy5Db2xvci5CTEFDSyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcyM2UwNVN0Njh0QzdhTTg4MGFFYVVhUycsICdsaW5lam9pbicpO1xuLy8gY2FzZXMvZ3JhcGhpY3MvZXhhbXBsZS9saW5lam9pbi5qc1xuXG52YXIgTGluZUpvaW4gPSBjYy5HcmFwaGljcy5MaW5lSm9pbjtcbnZhciBMaW5lQ2FwID0gY2MuR3JhcGhpY3MuTGluZUNhcDtcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7fSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICBpZiAoY2MuZGlyZWN0b3Iuc2V0Q2xlYXJDb2xvcikge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3Iuc2V0Q2xlYXJDb2xvcihjYy5Db2xvci5XSElURSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdyYXBoaWNzID0gdGhpcy5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVXaWR0aCA9IDIwO1xuXG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMucmFkaXVzID0gMTAwO1xuXG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH0sXG5cbiAgICBvbkRpc2FibGU6IGZ1bmN0aW9uIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgaWYgKGNjLmRpcmVjdG9yLnNldENsZWFyQ29sb3IpIHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnNldENsZWFyQ29sb3IoY2MuQ29sb3IuQkxBQ0spO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy50aW1lICs9IGR0ICogMC41O1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9LFxuXG4gICAgZHJhdzogZnVuY3Rpb24gZHJhdygpIHtcbiAgICAgICAgdmFyIGdyYXBoaWNzID0gdGhpcy5ncmFwaGljcztcbiAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcblxuICAgICAgICB2YXIgcnggPSB0aGlzLnJhZGl1cyAqIE1hdGguc2luKHRoaXMudGltZSk7XG4gICAgICAgIHZhciByeSA9IC10aGlzLnJhZGl1cyAqIE1hdGguY29zKHRoaXMudGltZSk7XG5cbiAgICAgICAgLy8gbGluZSBqb2luXG4gICAgICAgIGdyYXBoaWNzLmxpbmVDYXAgPSBMaW5lQ2FwLkJVVFQ7XG5cbiAgICAgICAgZ3JhcGhpY3MubGluZUpvaW4gPSBMaW5lSm9pbi5CRVZFTDtcbiAgICAgICAgdGhpcy5kcmF3TGluZSgtMjAwLCAwLCByeCwgcnkpO1xuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVKb2luID0gTGluZUpvaW4uTUlURVI7XG4gICAgICAgIHRoaXMuZHJhd0xpbmUoMCwgMCwgcngsIHJ5KTtcblxuICAgICAgICBncmFwaGljcy5saW5lSm9pbiA9IExpbmVKb2luLlJPVU5EO1xuICAgICAgICB0aGlzLmRyYXdMaW5lKDIwMCwgMCwgcngsIHJ5KTtcblxuICAgICAgICAvLyBsaW5lIGNhcFxuICAgICAgICBncmFwaGljcy5saW5lSm9pbiA9IExpbmVKb2luLk1JVEVSO1xuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVDYXAgPSBMaW5lQ2FwLkJVVFQ7XG4gICAgICAgIHRoaXMuZHJhd0xpbmUoMCwgLTEyNSwgcngsIHJ5KTtcblxuICAgICAgICBncmFwaGljcy5saW5lQ2FwID0gTGluZUNhcC5TUVVBUkU7XG4gICAgICAgIHRoaXMuZHJhd0xpbmUoLTIwMCwgLTEyNSwgcngsIHJ5KTtcblxuICAgICAgICBncmFwaGljcy5saW5lQ2FwID0gTGluZUNhcC5ST1VORDtcbiAgICAgICAgdGhpcy5kcmF3TGluZSgyMDAsIC0xMjUsIHJ4LCByeSk7XG4gICAgfSxcblxuICAgIGRyYXdMaW5lOiBmdW5jdGlvbiBkcmF3TGluZSh4LCB5LCByeCwgcnkpIHtcbiAgICAgICAgdmFyIGdyYXBoaWNzID0gdGhpcy5ncmFwaGljcztcblxuICAgICAgICBncmFwaGljcy5tb3ZlVG8oeCArIHJ4LCB5ICsgcnkpO1xuICAgICAgICBncmFwaGljcy5saW5lVG8oeCwgeSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyh4IC0gcngsIHkgKyByeSk7XG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZmVlM2RjTG9hWkN2cko5RlpyQm5nYmInLCAnbG9hZFJlc0FsbF9leGFtcGxlJyk7XG4vLyBjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Mb2FkUmVzQWxsL2xvYWRSZXNBbGxfZXhhbXBsZS5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYnRuQ2xlYXJBbGw6IGNjLk5vZGUsXG4gICAgICAgIGxhYmVsOiBjYy5QcmVmYWIsXG4gICAgICAgIHNjcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXdcbiAgICB9LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LmhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuYnRuQ2xlYXJBbGwuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcblxuICAgIF9jcmVhdGVMYWJlbDogZnVuY3Rpb24gX2NyZWF0ZUxhYmVsKHRleHQpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxhYmVsKTtcbiAgICAgICAgdmFyIGxhYmVsID0gbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBsYWJlbC50ZXh0S2V5ID0gdGV4dDtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuYWRkQ2hpbGQobm9kZSk7XG4gICAgfSxcblxuICAgIF9jbGVhcjogZnVuY3Rpb24gX2NsZWFyKCkge1xuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbih0cnVlKTtcbiAgICAgICAgY2MubG9hZGVyLnJlbGVhc2VBbGwoKTtcbiAgICB9LFxuXG4gICAgb25DbGVhckFsbDogZnVuY3Rpb24gb25DbGVhckFsbCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuaGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5idG5DbGVhckFsbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICB9LFxuXG4gICAgb25Mb2FkQWxsOiBmdW5jdGlvbiBvbkxvYWRBbGwoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICAgICAgc2VsZi5fY3JlYXRlTGFiZWwoXCJMb2FkIEFsbCBBc3NldHNcIik7XG4gICAgICAgIHNlbGYuc2Nyb2xsVmlldy5zY3JvbGxUb1RvcCgpO1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0FsbChcInRlc3QgYXNzZXRzXCIsIGZ1bmN0aW9uIChlcnIsIGFzc2V0cykge1xuICAgICAgICAgICAgdmFyIHRleHQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhc3NldHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFzc2V0c1tpXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA9IGFzc2V0c1tpXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gYXNzZXRzW2ldLnVybCB8fCBhc3NldHNbaV0uX25hbWUgfHwgYXNzZXRzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRleHQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLl9jcmVhdGVMYWJlbCh0ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuYnRuQ2xlYXJBbGwuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYuc2Nyb2xsVmlldy5jb250ZW50LmhlaWdodCA9IGFzc2V0cy5sZW5ndGggKiA2MDtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uTG9hZFNwcml0ZUZyYW1lQWxsOiBmdW5jdGlvbiBvbkxvYWRTcHJpdGVGcmFtZUFsbCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLl9jbGVhcigpO1xuICAgICAgICBzZWxmLl9jcmVhdGVMYWJlbChcIkxvYWQgQWxsIFNwcml0ZSBGcmFtZVwiKTtcbiAgICAgICAgc2VsZi5zY3JvbGxWaWV3LnNjcm9sbFRvVG9wKCk7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzQWxsKFwidGVzdCBhc3NldHNcIiwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIGFzc2V0cykge1xuICAgICAgICAgICAgdmFyIHRleHQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhc3NldHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFzc2V0c1tpXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA9IGFzc2V0c1tpXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gYXNzZXRzW2ldLnVybCB8fCBhc3NldHNbaV0uX25hbWUgfHwgYXNzZXRzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLl9jcmVhdGVMYWJlbCh0ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuYnRuQ2xlYXJBbGwuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYuc2Nyb2xsVmlldy5jb250ZW50LmhlaWdodCA9IGFzc2V0cy5sZW5ndGggKiAyMDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzY5ZGVjU2dwUmxFMXJ6RUtwMFJ6RzNWJywgJ3BvbHlnbG90Jyk7XG4vLyBpMThuL3BvbHlnbG90LmpzXG5cbi8vICAgICAoYykgMjAxMi0yMDE2IEFpcmJuYiwgSW5jLlxuLy9cbi8vICAgICBwb2x5Z2xvdC5qcyBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgQlNEXG4vLyAgICAgbGljZW5zZS4gRm9yIGFsbCBsaWNlbnNpbmcgaW5mb3JtYXRpb24sIGRldGFpbHMsIGFuZCBkb2N1bWVudGlvbjpcbi8vICAgICBodHRwOi8vYWlyYm5iLmdpdGh1Yi5jb20vcG9seWdsb3QuanNcbi8vXG4vL1xuLy8gUG9seWdsb3QuanMgaXMgYW4gSTE4biBoZWxwZXIgbGlicmFyeSB3cml0dGVuIGluIEphdmFTY3JpcHQsIG1hZGUgdG9cbi8vIHdvcmsgYm90aCBpbiB0aGUgYnJvd3NlciBhbmQgaW4gTm9kZS4gSXQgcHJvdmlkZXMgYSBzaW1wbGUgc29sdXRpb24gZm9yXG4vLyBpbnRlcnBvbGF0aW9uIGFuZCBwbHVyYWxpemF0aW9uLCBiYXNlZCBvZmYgb2YgQWlyYm5iJ3Ncbi8vIGV4cGVyaWVuY2UgYWRkaW5nIEkxOG4gZnVuY3Rpb25hbGl0eSB0byBpdHMgQmFja2JvbmUuanMgYW5kIE5vZGUgYXBwcy5cbi8vXG4vLyBQb2x5bGdsb3QgaXMgYWdub3N0aWMgdG8geW91ciB0cmFuc2xhdGlvbiBiYWNrZW5kLiBJdCBkb2Vzbid0IHBlcmZvcm0gYW55XG4vLyB0cmFuc2xhdGlvbjsgaXQgc2ltcGx5IGdpdmVzIHlvdSBhIHdheSB0byBtYW5hZ2UgdHJhbnNsYXRlZCBwaHJhc2VzIGZyb21cbi8vIHlvdXIgY2xpZW50LSBvciBzZXJ2ZXItc2lkZSBKYXZhU2NyaXB0IGFwcGxpY2F0aW9uLlxuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXSwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZhY3Rvcnkocm9vdCk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJvb3QpO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuUG9seWdsb3QgPSBmYWN0b3J5KHJvb3QpO1xuICB9XG59KSh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHRoaXMsIGZ1bmN0aW9uIChyb290KSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgcmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcblxuICAvLyAjIyMgUG9seWdsb3QgY2xhc3MgY29uc3RydWN0b3JcbiAgZnVuY3Rpb24gUG9seWdsb3Qob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHRoaXMucGhyYXNlcyA9IHt9O1xuICAgIHRoaXMuZXh0ZW5kKG9wdGlvbnMucGhyYXNlcyB8fCB7fSk7XG4gICAgdGhpcy5jdXJyZW50TG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgJ2VuJztcbiAgICB0aGlzLmFsbG93TWlzc2luZyA9ICEhb3B0aW9ucy5hbGxvd01pc3Npbmc7XG4gICAgdGhpcy53YXJuID0gb3B0aW9ucy53YXJuIHx8IHdhcm47XG4gIH1cblxuICAvLyAjIyMgVmVyc2lvblxuICBQb2x5Z2xvdC5WRVJTSU9OID0gJzEuMC4wJztcblxuICAvLyAjIyMgcG9seWdsb3QubG9jYWxlKFtsb2NhbGVdKVxuICAvL1xuICAvLyBHZXQgb3Igc2V0IGxvY2FsZS4gSW50ZXJuYWxseSwgUG9seWdsb3Qgb25seSB1c2VzIGxvY2FsZSBmb3IgcGx1cmFsaXphdGlvbi5cbiAgUG9seWdsb3QucHJvdG90eXBlLmxvY2FsZSA9IGZ1bmN0aW9uIChuZXdMb2NhbGUpIHtcbiAgICBpZiAobmV3TG9jYWxlKSB0aGlzLmN1cnJlbnRMb2NhbGUgPSBuZXdMb2NhbGU7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudExvY2FsZTtcbiAgfTtcblxuICAvLyAjIyMgcG9seWdsb3QuZXh0ZW5kKHBocmFzZXMpXG4gIC8vXG4gIC8vIFVzZSBgZXh0ZW5kYCB0byB0ZWxsIFBvbHlnbG90IGhvdyB0byB0cmFuc2xhdGUgYSBnaXZlbiBrZXkuXG4gIC8vXG4gIC8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuICAvLyAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbiAgLy8gICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIlxuICAvLyAgICAgfSk7XG4gIC8vXG4gIC8vIFRoZSBrZXkgY2FuIGJlIGFueSBzdHJpbmcuICBGZWVsIGZyZWUgdG8gY2FsbCBgZXh0ZW5kYCBtdWx0aXBsZSB0aW1lcztcbiAgLy8gaXQgd2lsbCBvdmVycmlkZSBhbnkgcGhyYXNlcyB3aXRoIHRoZSBzYW1lIGtleSwgYnV0IGxlYXZlIGV4aXN0aW5nIHBocmFzZXNcbiAgLy8gdW50b3VjaGVkLlxuICAvL1xuICAvLyBJdCBpcyBhbHNvIHBvc3NpYmxlIHRvIHBhc3MgbmVzdGVkIHBocmFzZSBvYmplY3RzLCB3aGljaCBnZXQgZmxhdHRlbmVkXG4gIC8vIGludG8gYW4gb2JqZWN0IHdpdGggdGhlIG5lc3RlZCBrZXlzIGNvbmNhdGVuYXRlZCB1c2luZyBkb3Qgbm90YXRpb24uXG4gIC8vXG4gIC8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuICAvLyAgICAgICBcIm5hdlwiOiB7XG4gIC8vICAgICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4gIC8vICAgICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIixcbiAgLy8gICAgICAgICBcInNpZGViYXJcIjoge1xuICAvLyAgICAgICAgICAgXCJ3ZWxjb21lXCI6IFwiV2VsY29tZVwiXG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9XG4gIC8vICAgICB9KTtcbiAgLy9cbiAgLy8gICAgIGNvbnNvbGUubG9nKHBvbHlnbG90LnBocmFzZXMpO1xuICAvLyAgICAgLy8ge1xuICAvLyAgICAgLy8gICAnbmF2LmhlbGxvJzogJ0hlbGxvJyxcbiAgLy8gICAgIC8vICAgJ25hdi5oZWxsb19uYW1lJzogJ0hlbGxvLCAle25hbWV9JyxcbiAgLy8gICAgIC8vICAgJ25hdi5zaWRlYmFyLndlbGNvbWUnOiAnV2VsY29tZSdcbiAgLy8gICAgIC8vIH1cbiAgLy9cbiAgLy8gYGV4dGVuZGAgYWNjZXB0cyBhbiBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQsIGBwcmVmaXhgLCB3aGljaCBjYW4gYmUgdXNlZFxuICAvLyB0byBwcmVmaXggZXZlcnkga2V5IGluIHRoZSBwaHJhc2VzIG9iamVjdCB3aXRoIHNvbWUgc3RyaW5nLCB1c2luZyBkb3RcbiAgLy8gbm90YXRpb24uXG4gIC8vXG4gIC8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuICAvLyAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbiAgLy8gICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIlxuICAvLyAgICAgfSwgXCJuYXZcIik7XG4gIC8vXG4gIC8vICAgICBjb25zb2xlLmxvZyhwb2x5Z2xvdC5waHJhc2VzKTtcbiAgLy8gICAgIC8vIHtcbiAgLy8gICAgIC8vICAgJ25hdi5oZWxsbyc6ICdIZWxsbycsXG4gIC8vICAgICAvLyAgICduYXYuaGVsbG9fbmFtZSc6ICdIZWxsbywgJXtuYW1lfSdcbiAgLy8gICAgIC8vIH1cbiAgLy9cbiAgLy8gVGhpcyBmZWF0dXJlIGlzIHVzZWQgaW50ZXJuYWxseSB0byBzdXBwb3J0IG5lc3RlZCBwaHJhc2Ugb2JqZWN0cy5cbiAgUG9seWdsb3QucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uIChtb3JlUGhyYXNlcywgcHJlZml4KSB7XG4gICAgdmFyIHBocmFzZTtcblxuICAgIGZvciAodmFyIGtleSBpbiBtb3JlUGhyYXNlcykge1xuICAgICAgaWYgKG1vcmVQaHJhc2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgcGhyYXNlID0gbW9yZVBocmFzZXNba2V5XTtcbiAgICAgICAgaWYgKHByZWZpeCkga2V5ID0gcHJlZml4ICsgJy4nICsga2V5O1xuICAgICAgICBpZiAodHlwZW9mIHBocmFzZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aGlzLmV4dGVuZChwaHJhc2UsIGtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5waHJhc2VzW2tleV0gPSBwaHJhc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gIyMjIHBvbHlnbG90LnVuc2V0KHBocmFzZXMpXG4gIC8vIFVzZSBgdW5zZXRgIHRvIHNlbGVjdGl2ZWx5IHJlbW92ZSBrZXlzIGZyb20gYSBwb2x5Z2xvdCBpbnN0YW5jZS5cbiAgLy9cbiAgLy8gICAgIHBvbHlnbG90LnVuc2V0KFwic29tZV9rZXlcIik7XG4gIC8vICAgICBwb2x5Z2xvdC51bnNldCh7XG4gIC8vICAgICAgIFwiaGVsbG9cIjogXCJIZWxsb1wiLFxuICAvLyAgICAgICBcImhlbGxvX25hbWVcIjogXCJIZWxsbywgJXtuYW1lfVwiXG4gIC8vICAgICB9KTtcbiAgLy9cbiAgLy8gVGhlIHVuc2V0IG1ldGhvZCBjYW4gdGFrZSBlaXRoZXIgYSBzdHJpbmcgKGZvciB0aGUga2V5KSwgb3IgYW4gb2JqZWN0IGhhc2ggd2l0aFxuICAvLyB0aGUga2V5cyB0aGF0IHlvdSB3b3VsZCBsaWtlIHRvIHVuc2V0LlxuICBQb2x5Z2xvdC5wcm90b3R5cGUudW5zZXQgPSBmdW5jdGlvbiAobW9yZVBocmFzZXMsIHByZWZpeCkge1xuICAgIHZhciBwaHJhc2U7XG5cbiAgICBpZiAodHlwZW9mIG1vcmVQaHJhc2VzID09PSAnc3RyaW5nJykge1xuICAgICAgZGVsZXRlIHRoaXMucGhyYXNlc1ttb3JlUGhyYXNlc107XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBtb3JlUGhyYXNlcykge1xuICAgICAgICBpZiAobW9yZVBocmFzZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHBocmFzZSA9IG1vcmVQaHJhc2VzW2tleV07XG4gICAgICAgICAgaWYgKHByZWZpeCkga2V5ID0gcHJlZml4ICsgJy4nICsga2V5O1xuICAgICAgICAgIGlmICh0eXBlb2YgcGhyYXNlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhpcy51bnNldChwaHJhc2UsIGtleSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBocmFzZXNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gIyMjIHBvbHlnbG90LmNsZWFyKClcbiAgLy9cbiAgLy8gQ2xlYXJzIGFsbCBwaHJhc2VzLiBVc2VmdWwgZm9yIHNwZWNpYWwgY2FzZXMsIHN1Y2ggYXMgZnJlZWluZ1xuICAvLyB1cCBtZW1vcnkgaWYgeW91IGhhdmUgbG90cyBvZiBwaHJhc2VzIGJ1dCBubyBsb25nZXIgbmVlZCB0b1xuICAvLyBwZXJmb3JtIGFueSB0cmFuc2xhdGlvbi4gQWxzbyB1c2VkIGludGVybmFsbHkgYnkgYHJlcGxhY2VgLlxuICBQb2x5Z2xvdC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5waHJhc2VzID0ge307XG4gIH07XG5cbiAgLy8gIyMjIHBvbHlnbG90LnJlcGxhY2UocGhyYXNlcylcbiAgLy9cbiAgLy8gQ29tcGxldGVseSByZXBsYWNlIHRoZSBleGlzdGluZyBwaHJhc2VzIHdpdGggYSBuZXcgc2V0IG9mIHBocmFzZXMuXG4gIC8vIE5vcm1hbGx5LCBqdXN0IHVzZSBgZXh0ZW5kYCB0byBhZGQgbW9yZSBwaHJhc2VzLCBidXQgdW5kZXIgY2VydGFpblxuICAvLyBjaXJjdW1zdGFuY2VzLCB5b3UgbWF5IHdhbnQgdG8gbWFrZSBzdXJlIG5vIG9sZCBwaHJhc2VzIGFyZSBseWluZyBhcm91bmQuXG4gIFBvbHlnbG90LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gKG5ld1BocmFzZXMpIHtcbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5leHRlbmQobmV3UGhyYXNlcyk7XG4gIH07XG5cbiAgLy8gIyMjIHBvbHlnbG90LnQoa2V5LCBvcHRpb25zKVxuICAvL1xuICAvLyBUaGUgbW9zdC11c2VkIG1ldGhvZC4gUHJvdmlkZSBhIGtleSwgYW5kIGB0YCB3aWxsIHJldHVybiB0aGVcbiAgLy8gcGhyYXNlLlxuICAvL1xuICAvLyAgICAgcG9seWdsb3QudChcImhlbGxvXCIpO1xuICAvLyAgICAgPT4gXCJIZWxsb1wiXG4gIC8vXG4gIC8vIFRoZSBwaHJhc2UgdmFsdWUgaXMgcHJvdmlkZWQgZmlyc3QgYnkgYSBjYWxsIHRvIGBwb2x5Z2xvdC5leHRlbmQoKWAgb3JcbiAgLy8gYHBvbHlnbG90LnJlcGxhY2UoKWAuXG4gIC8vXG4gIC8vIFBhc3MgaW4gYW4gb2JqZWN0IGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gcGVyZm9ybSBpbnRlcnBvbGF0aW9uLlxuICAvL1xuICAvLyAgICAgcG9seWdsb3QudChcImhlbGxvX25hbWVcIiwge25hbWU6IFwiU3Bpa2VcIn0pO1xuICAvLyAgICAgPT4gXCJIZWxsbywgU3Bpa2VcIlxuICAvL1xuICAvLyBJZiB5b3UgbGlrZSwgeW91IGNhbiBwcm92aWRlIGEgZGVmYXVsdCB2YWx1ZSBpbiBjYXNlIHRoZSBwaHJhc2UgaXMgbWlzc2luZy5cbiAgLy8gVXNlIHRoZSBzcGVjaWFsIG9wdGlvbiBrZXkgXCJfXCIgdG8gc3BlY2lmeSBhIGRlZmF1bHQuXG4gIC8vXG4gIC8vICAgICBwb2x5Z2xvdC50KFwiaV9saWtlX3RvX3dyaXRlX2luX2xhbmd1YWdlXCIsIHtcbiAgLy8gICAgICAgXzogXCJJIGxpa2UgdG8gd3JpdGUgaW4gJXtsYW5ndWFnZX0uXCIsXG4gIC8vICAgICAgIGxhbmd1YWdlOiBcIkphdmFTY3JpcHRcIlxuICAvLyAgICAgfSk7XG4gIC8vICAgICA9PiBcIkkgbGlrZSB0byB3cml0ZSBpbiBKYXZhU2NyaXB0LlwiXG4gIC8vXG4gIFBvbHlnbG90LnByb3RvdHlwZS50ID0gZnVuY3Rpb24gKGtleSwgb3B0aW9ucykge1xuICAgIHZhciBwaHJhc2UsIHJlc3VsdDtcbiAgICBvcHRpb25zID0gb3B0aW9ucyA9PSBudWxsID8ge30gOiBvcHRpb25zO1xuICAgIC8vIGFsbG93IG51bWJlciBhcyBhIHBsdXJhbGl6YXRpb24gc2hvcnRjdXRcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdudW1iZXInKSB7XG4gICAgICBvcHRpb25zID0geyBzbWFydF9jb3VudDogb3B0aW9ucyB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMucGhyYXNlc1trZXldID09PSAnc3RyaW5nJykge1xuICAgICAgcGhyYXNlID0gdGhpcy5waHJhc2VzW2tleV07XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5fID09PSAnc3RyaW5nJykge1xuICAgICAgcGhyYXNlID0gb3B0aW9ucy5fO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hbGxvd01pc3NpbmcpIHtcbiAgICAgIHBocmFzZSA9IGtleTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53YXJuKCdNaXNzaW5nIHRyYW5zbGF0aW9uIGZvciBrZXk6IFwiJyArIGtleSArICdcIicpO1xuICAgICAgcmVzdWx0ID0ga2V5O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHBocmFzZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvbnMgPSBjbG9uZShvcHRpb25zKTtcbiAgICAgIHJlc3VsdCA9IGNob29zZVBsdXJhbEZvcm0ocGhyYXNlLCB0aGlzLmN1cnJlbnRMb2NhbGUsIG9wdGlvbnMuc21hcnRfY291bnQpO1xuICAgICAgcmVzdWx0ID0gaW50ZXJwb2xhdGUocmVzdWx0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyAjIyMgcG9seWdsb3QuaGFzKGtleSlcbiAgLy9cbiAgLy8gQ2hlY2sgaWYgcG9seWdsb3QgaGFzIGEgdHJhbnNsYXRpb24gZm9yIGdpdmVuIGtleVxuICBQb2x5Z2xvdC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBrZXkgaW4gdGhpcy5waHJhc2VzO1xuICB9O1xuXG4gIC8vICMjIyMgUGx1cmFsaXphdGlvbiBtZXRob2RzXG4gIC8vIFRoZSBzdHJpbmcgdGhhdCBzZXBhcmF0ZXMgdGhlIGRpZmZlcmVudCBwaHJhc2UgcG9zc2liaWxpdGllcy5cbiAgdmFyIGRlbGltZXRlciA9ICd8fHx8JztcblxuICAvLyBNYXBwaW5nIGZyb20gcGx1cmFsaXphdGlvbiBncm91cCBwbHVyYWwgbG9naWMuXG4gIHZhciBwbHVyYWxUeXBlcyA9IHtcbiAgICBjaGluZXNlOiBmdW5jdGlvbiBjaGluZXNlKG4pIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH0sXG4gICAgZ2VybWFuOiBmdW5jdGlvbiBnZXJtYW4obikge1xuICAgICAgcmV0dXJuIG4gIT09IDEgPyAxIDogMDtcbiAgICB9LFxuICAgIGZyZW5jaDogZnVuY3Rpb24gZnJlbmNoKG4pIHtcbiAgICAgIHJldHVybiBuID4gMSA/IDEgOiAwO1xuICAgIH0sXG4gICAgcnVzc2lhbjogZnVuY3Rpb24gcnVzc2lhbihuKSB7XG4gICAgICByZXR1cm4gbiAlIDEwID09PSAxICYmIG4gJSAxMDAgIT09IDExID8gMCA6IG4gJSAxMCA+PSAyICYmIG4gJSAxMCA8PSA0ICYmIChuICUgMTAwIDwgMTAgfHwgbiAlIDEwMCA+PSAyMCkgPyAxIDogMjtcbiAgICB9LFxuICAgIGN6ZWNoOiBmdW5jdGlvbiBjemVjaChuKSB7XG4gICAgICByZXR1cm4gbiA9PT0gMSA/IDAgOiBuID49IDIgJiYgbiA8PSA0ID8gMSA6IDI7XG4gICAgfSxcbiAgICBwb2xpc2g6IGZ1bmN0aW9uIHBvbGlzaChuKSB7XG4gICAgICByZXR1cm4gbiA9PT0gMSA/IDAgOiBuICUgMTAgPj0gMiAmJiBuICUgMTAgPD0gNCAmJiAobiAlIDEwMCA8IDEwIHx8IG4gJSAxMDAgPj0gMjApID8gMSA6IDI7XG4gICAgfSxcbiAgICBpY2VsYW5kaWM6IGZ1bmN0aW9uIGljZWxhbmRpYyhuKSB7XG4gICAgICByZXR1cm4gbiAlIDEwICE9PSAxIHx8IG4gJSAxMDAgPT09IDExID8gMSA6IDA7XG4gICAgfVxuICB9O1xuXG4gIC8vIE1hcHBpbmcgZnJvbSBwbHVyYWxpemF0aW9uIGdyb3VwIHRvIGluZGl2aWR1YWwgbG9jYWxlcy5cbiAgdmFyIHBsdXJhbFR5cGVUb0xhbmd1YWdlcyA9IHtcbiAgICBjaGluZXNlOiBbJ2ZhJywgJ2lkJywgJ2phJywgJ2tvJywgJ2xvJywgJ21zJywgJ3RoJywgJ3RyJywgJ3poJ10sXG4gICAgZ2VybWFuOiBbJ2RhJywgJ2RlJywgJ2VuJywgJ2VzJywgJ2ZpJywgJ2VsJywgJ2hlJywgJ2h1JywgJ2l0JywgJ25sJywgJ25vJywgJ3B0JywgJ3N2J10sXG4gICAgZnJlbmNoOiBbJ2ZyJywgJ3RsJywgJ3B0LWJyJ10sXG4gICAgcnVzc2lhbjogWydocicsICdydSddLFxuICAgIGN6ZWNoOiBbJ2NzJywgJ3NrJ10sXG4gICAgcG9saXNoOiBbJ3BsJ10sXG4gICAgaWNlbGFuZGljOiBbJ2lzJ11cbiAgfTtcblxuICBmdW5jdGlvbiBsYW5nVG9UeXBlTWFwKG1hcHBpbmcpIHtcbiAgICB2YXIgdHlwZSxcbiAgICAgICAgbGFuZ3MsXG4gICAgICAgIGwsXG4gICAgICAgIHJldCA9IHt9O1xuICAgIGZvciAodHlwZSBpbiBtYXBwaW5nKSB7XG4gICAgICBpZiAobWFwcGluZy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSkge1xuICAgICAgICBsYW5ncyA9IG1hcHBpbmdbdHlwZV07XG4gICAgICAgIGZvciAobCBpbiBsYW5ncykge1xuICAgICAgICAgIHJldFtsYW5nc1tsXV0gPSB0eXBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyBUcmltIGEgc3RyaW5nLlxuICB2YXIgdHJpbVJlID0gL15cXHMrfFxccyskL2c7XG4gIGZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gICAgcmV0dXJuIHJlcGxhY2UuY2FsbChzdHIsIHRyaW1SZSwgJycpO1xuICB9XG5cbiAgLy8gQmFzZWQgb24gYSBwaHJhc2UgdGV4dCB0aGF0IGNvbnRhaW5zIGBuYCBwbHVyYWwgZm9ybXMgc2VwYXJhdGVkXG4gIC8vIGJ5IGBkZWxpbWV0ZXJgLCBhIGBsb2NhbGVgLCBhbmQgYSBgY291bnRgLCBjaG9vc2UgdGhlIGNvcnJlY3RcbiAgLy8gcGx1cmFsIGZvcm0sIG9yIG5vbmUgaWYgYGNvdW50YCBpcyBgbnVsbGAuXG4gIGZ1bmN0aW9uIGNob29zZVBsdXJhbEZvcm0odGV4dCwgbG9jYWxlLCBjb3VudCkge1xuICAgIHZhciByZXQsIHRleHRzLCBjaG9zZW5UZXh0O1xuICAgIGlmIChjb3VudCAhPSBudWxsICYmIHRleHQpIHtcbiAgICAgIHRleHRzID0gdGV4dC5zcGxpdChkZWxpbWV0ZXIpO1xuICAgICAgY2hvc2VuVGV4dCA9IHRleHRzW3BsdXJhbFR5cGVJbmRleChsb2NhbGUsIGNvdW50KV0gfHwgdGV4dHNbMF07XG4gICAgICByZXQgPSB0cmltKGNob3NlblRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXQgPSB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgZnVuY3Rpb24gcGx1cmFsVHlwZU5hbWUobG9jYWxlKSB7XG4gICAgdmFyIGxhbmdUb1BsdXJhbFR5cGUgPSBsYW5nVG9UeXBlTWFwKHBsdXJhbFR5cGVUb0xhbmd1YWdlcyk7XG4gICAgcmV0dXJuIGxhbmdUb1BsdXJhbFR5cGVbbG9jYWxlXSB8fCBsYW5nVG9QbHVyYWxUeXBlLmVuO1xuICB9XG5cbiAgZnVuY3Rpb24gcGx1cmFsVHlwZUluZGV4KGxvY2FsZSwgY291bnQpIHtcbiAgICByZXR1cm4gcGx1cmFsVHlwZXNbcGx1cmFsVHlwZU5hbWUobG9jYWxlKV0oY291bnQpO1xuICB9XG5cbiAgLy8gIyMjIGludGVycG9sYXRlXG4gIC8vXG4gIC8vIERvZXMgdGhlIGRpcnR5IHdvcmsuIENyZWF0ZXMgYSBgUmVnRXhwYCBvYmplY3QgZm9yIGVhY2hcbiAgLy8gaW50ZXJwb2xhdGlvbiBwbGFjZWhvbGRlci5cbiAgdmFyIGRvbGxhclJlZ2V4ID0gL1xcJC9nO1xuICB2YXIgZG9sbGFyQmlsbHNZYWxsID0gJyQkJCQnO1xuICBmdW5jdGlvbiBpbnRlcnBvbGF0ZShwaHJhc2UsIG9wdGlvbnMpIHtcbiAgICBmb3IgKHZhciBhcmcgaW4gb3B0aW9ucykge1xuICAgICAgaWYgKGFyZyAhPT0gJ18nICYmIG9wdGlvbnMuaGFzT3duUHJvcGVydHkoYXJnKSkge1xuICAgICAgICAvLyBFbnN1cmUgcmVwbGFjZW1lbnQgdmFsdWUgaXMgZXNjYXBlZCB0byBwcmV2ZW50IHNwZWNpYWwgJC1wcmVmaXhlZFxuICAgICAgICAvLyByZWdleCByZXBsYWNlIHRva2Vucy4gdGhlIFwiJCQkJFwiIGlzIG5lZWRlZCBiZWNhdXNlIGVhY2ggXCIkXCIgbmVlZHMgdG9cbiAgICAgICAgLy8gYmUgZXNjYXBlZCB3aXRoIFwiJFwiIGl0c2VsZiwgYW5kIHdlIG5lZWQgdHdvIGluIHRoZSByZXN1bHRpbmcgb3V0cHV0LlxuICAgICAgICB2YXIgcmVwbGFjZW1lbnQgPSBvcHRpb25zW2FyZ107XG4gICAgICAgIGlmICh0eXBlb2YgcmVwbGFjZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSByZXBsYWNlLmNhbGwob3B0aW9uc1thcmddLCBkb2xsYXJSZWdleCwgZG9sbGFyQmlsbHNZYWxsKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBjcmVhdGUgYSBuZXcgYFJlZ0V4cGAgZWFjaCB0aW1lIGluc3RlYWQgb2YgdXNpbmcgYSBtb3JlLWVmZmljaWVudFxuICAgICAgICAvLyBzdHJpbmcgcmVwbGFjZSBzbyB0aGF0IHRoZSBzYW1lIGFyZ3VtZW50IGNhbiBiZSByZXBsYWNlZCBtdWx0aXBsZSB0aW1lc1xuICAgICAgICAvLyBpbiB0aGUgc2FtZSBwaHJhc2UuXG4gICAgICAgIHBocmFzZSA9IHJlcGxhY2UuY2FsbChwaHJhc2UsIG5ldyBSZWdFeHAoJyVcXFxceycgKyBhcmcgKyAnXFxcXH0nLCAnZycpLCByZXBsYWNlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwaHJhc2U7XG4gIH1cblxuICAvLyAjIyMgd2FyblxuICAvL1xuICAvLyBQcm92aWRlcyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgYSBwaHJhc2Uga2V5IGlzIG1pc3NpbmcuXG4gIGZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xuICAgIHJvb3QuY29uc29sZSAmJiByb290LmNvbnNvbGUud2FybiAmJiByb290LmNvbnNvbGUud2FybignV0FSTklORzogJyArIG1lc3NhZ2UpO1xuICB9XG5cbiAgLy8gIyMjIGNsb25lXG4gIC8vXG4gIC8vIENsb25lIGFuIG9iamVjdC5cbiAgZnVuY3Rpb24gY2xvbmUoc291cmNlKSB7XG4gICAgdmFyIHJldCA9IHt9O1xuICAgIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XG4gICAgICByZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICByZXR1cm4gUG9seWdsb3Q7XG59KTtcbi8vXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcyYTdjYWhDTUlKQ2FacGR6SVpQa0hzcCcsICdyZWN0Jyk7XG4vLyBjYXNlcy9ncmFwaGljcy9leGFtcGxlL3JlY3QuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgaWYgKGNjLmRpcmVjdG9yLnNldENsZWFyQ29sb3IpIHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnNldENsZWFyQ29sb3IoY2MuQ29sb3IuV0hJVEUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGcgPSB0aGlzLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XG5cbiAgICAgICAgZy5saW5lV2lkdGggPSAxMDtcbiAgICAgICAgZy5maWxsQ29sb3IgPSBjYy5oZXhUb0NvbG9yKCcjZmYwMDAwJyk7XG5cbiAgICAgICAgLy8gcmVjdFxuICAgICAgICBnLnJlY3QoLTI1MCwgMCwgMjAwLCAxMDApO1xuXG4gICAgICAgIC8vIHJvdW5kIHJlY3RcbiAgICAgICAgZy5yb3VuZFJlY3QoNTAsIDAsIDIwMCwgMTAwLCAyMCk7XG5cbiAgICAgICAgZy5zdHJva2UoKTtcbiAgICAgICAgZy5maWxsKCk7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZTogZnVuY3Rpb24gb25EaXNhYmxlKCkge1xuICAgICAgICBpZiAoY2MuZGlyZWN0b3Iuc2V0Q2xlYXJDb2xvcikge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3Iuc2V0Q2xlYXJDb2xvcihjYy5Db2xvci5CTEFDSyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc5MzBkZUlteG9aSWtwNnVnak1VNVVMVycsICdzY2hlZHVsZUNhbGxiYWNrcycpO1xuLy8gY2FzZXMvMDVfc2NyaXB0aW5nLzA0X3NjaGVkdWxlci9zY2hlZHVsZUNhbGxiYWNrcy5qc1xuXG52YXIgaTE4biA9IHJlcXVpcmUoJ2kxOG4nKTtcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IDVcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfY2FsbGJhY2s6IGZ1bmN0aW9uIF9jYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbih0aGlzLnNlcSk7XG4gICAgICAgIGlmICh0aGlzLnJlcGVhdCkge1xuICAgICAgICAgICAgdGhpcy5jb3VudGluZyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1lID0gNTtcbiAgICAgICAgdGhpcy5jb3VudGVyLnN0cmluZyA9IHRoaXMudGltZS50b0ZpeGVkKDIpICsgJyBzJztcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBzcXVhc2hBY3Rpb24gPSBjYy5zY2FsZVRvKDAuMiwgMSwgMC42KTtcbiAgICAgICAgdmFyIHN0cmV0Y2hBY3Rpb24gPSBjYy5zY2FsZVRvKDAuMiwgMSwgMS4yKTtcbiAgICAgICAgdmFyIHNjYWxlQmFja0FjdGlvbiA9IGNjLnNjYWxlVG8oMC4xLCAxLCAxKTtcbiAgICAgICAgdmFyIG1vdmVVcEFjdGlvbiA9IGNjLm1vdmVCeSgxLCBjYy5wKDAsIDEwMCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKSk7XG4gICAgICAgIHZhciBtb3ZlRG93bkFjdGlvbiA9IGNjLm1vdmVCeSgxLCBjYy5wKDAsIC0xMDApKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uSW4oKSk7XG4gICAgICAgIHRoaXMuc2VxID0gY2Muc2VxdWVuY2Uoc3F1YXNoQWN0aW9uLCBzdHJldGNoQWN0aW9uLCBtb3ZlVXBBY3Rpb24sIHNjYWxlQmFja0FjdGlvbiwgbW92ZURvd25BY3Rpb24sIHNxdWFzaEFjdGlvbiwgc2NhbGVCYWNrQWN0aW9uKTtcblxuICAgICAgICB0aGlzLmNvdW50ZXIgPSBjYy5maW5kKCdDYW52YXMvY291bnRfbGFiZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aGlzLmNvdW50ZXIuc3RyaW5nID0gdGhpcy50aW1lLnRvRml4ZWQoMikgKyAnIHMnO1xuICAgICAgICB0aGlzLmNvdW50aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVwZWF0ID0gZmFsc2U7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLmNvdW50aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWUgLT0gZHQ7XG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIuc3RyaW5nID0gdGhpcy50aW1lLnRvRml4ZWQoMikgKyAnIHMnO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0b3BDb3VudGluZzogZnVuY3Rpb24gc3RvcENvdW50aW5nKCkge1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5fY2FsbGJhY2spO1xuICAgICAgICB0aGlzLmNvdW50aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY291bnRlci5zdHJpbmcgPSBpMThuLnQoXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDRfc2NoZWR1bGVyL3NjaGVkdWxlQ2FsbGJhY2tzLmpzLjFcIik7XG4gICAgICAgIHRoaXMudGltZSA9IDU7XG4gICAgfSxcblxuICAgIHJlcGVhdFNjaGVkdWxlOiBmdW5jdGlvbiByZXBlYXRTY2hlZHVsZSgpIHtcbiAgICAgICAgdGhpcy5zdG9wQ291bnRpbmcoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLl9jYWxsYmFjaywgNSk7XG4gICAgICAgIHRoaXMucmVwZWF0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb3VudGluZyA9IHRydWU7XG4gICAgfSxcblxuICAgIG9uZVNjaGVkdWxlOiBmdW5jdGlvbiBvbmVTY2hlZHVsZSgpIHtcbiAgICAgICAgdGhpcy5zdG9wQ291bnRpbmcoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5fY2FsbGJhY2ssIDUpO1xuICAgICAgICB0aGlzLnJlcGVhdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvdW50aW5nID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgY2FuY2VsU2NoZWR1bGVzOiBmdW5jdGlvbiBjYW5jZWxTY2hlZHVsZXMoKSB7XG4gICAgICAgIHRoaXMucmVwZWF0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RvcENvdW50aW5nKCk7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc2NTE0N3I0ODRkSFBvZURtdHUzbjVEVCcsICdzaW5lLXdhdmVzJyk7XG4vLyBjYXNlcy9ncmFwaGljcy9kZW1vL3NpbmUtd2F2ZXMuanNcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2lzdXR0ZWxsL3NpbmUtd2F2ZXNcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQGZpbGUgIENvbnN0YW50c1xuICogQGF1dGhvciAgSXNhYWMgU3V0dGVsbFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gKiBGb3IgcmFkaWFuIGNvbnZlcnNpb25cbiAqXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlICAgIHtOdW1iZXJ9XG4gKi9cbnZhciBQSTE4MCA9IE1hdGguUEkgLyAxODA7XG5cbi8qKlxuICogVHdpY2Ugb2YgUElcbiAqXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbnZhciBQSTIgPSBNYXRoLlBJICogMjtcblxuLyoqXG4gKiBIYWxmIG9mIFBJXG4gKlxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG52YXIgSEFMRlBJID0gTWF0aC5QSSAvIDI7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEBmaWxlICBMZWZ0IHRvIHJpZ2h0IGVhc2luZyBmdW5jdGlvbnNcbiAqIEBhdXRob3IgSXNhYWMgU3V0dGVsbFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gKiBUaGlzIGhvbGRzIGFsbCBvZiB0aGUgZWFzaW5nIG9iamVjdHMgYW5kIGNhbiBiZSBhZGRlZCB0byBieSB0aGUgdXNlclxuICpcbiAqIEB0eXBlICAgIHtPYmplY3R9XG4gKi9cbnZhciBFYXNlID0ge307XG5cbi8qKlxuICogRG8gbm90IGFwcGx5IGFueSBlYXNpbmdcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHBlcmNlbnQgICB3aGVyZSBpbiB0aGUgbGluZSBhcmUgd2U/XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGFtcGxpdHVkZSB0aGUgY3VycmVudCBzdHJlbmd0aFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgIHRoZSBuZXcgc3RyZW5ndGhcbiAqL1xuRWFzZS5saW5lYXIgPSBmdW5jdGlvbiAocGVyY2VudCwgYW1wbGl0dWRlKSB7XG4gICAgcmV0dXJuIGFtcGxpdHVkZTtcbn07XG5cbi8qKlxuICogRWFzaW5nIGZ1bmN0aW9uIHRvIGNvbnRyb2wgaG93IHN0cmluZyBlYWNoIHdhdmUgaXMgZnJvbVxuICogbGVmdCB0byByaWdodFxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gcGVyY2VudCAgIHdoZXJlIGluIHRoZSBsaW5lIGFyZSB3ZT9cbiAqIEBwYXJhbSAge051bWJlcn0gYW1wbGl0dWRlIHRoZSBjdXJyZW50IHN0cmVuZ3RoXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICAgdGhlIG5ldyBzdHJlbmd0aFxuICovXG5FYXNlLnNpbmVpbiA9IGZ1bmN0aW9uIChwZXJjZW50LCBhbXBsaXR1ZGUpIHtcbiAgICByZXR1cm4gYW1wbGl0dWRlICogKE1hdGguc2luKHBlcmNlbnQgKiBNYXRoLlBJIC0gSEFMRlBJKSArIDEpICogMC41O1xufTtcblxuLyoqXG4gKiBFYXNpbmcgZnVuY3Rpb24gdG8gY29udHJvbCBob3cgc3RyaW5nIGVhY2ggd2F2ZSBpcyBmcm9tXG4gKiBsZWZ0IHRvIHJpZ2h0XG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBwZXJjZW50ICAgd2hlcmUgaW4gdGhlIGxpbmUgYXJlIHdlP1xuICogQHBhcmFtICB7TnVtYmVyfSBhbXBsaXR1ZGUgdGhlIGN1cnJlbnQgc3RyZW5ndGhcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICB0aGUgbmV3IHN0cmVuZ3RoXG4gKi9cbkVhc2Uuc2luZW91dCA9IGZ1bmN0aW9uIChwZXJjZW50LCBhbXBsaXR1ZGUpIHtcbiAgICByZXR1cm4gYW1wbGl0dWRlICogKE1hdGguc2luKHBlcmNlbnQgKiBNYXRoLlBJICsgSEFMRlBJKSArIDEpICogMC41O1xufTtcblxuLyoqXG4gKiBFYXNpbmcgZnVuY3Rpb24gdG8gY29udHJvbCBob3cgc3RyaW5nIGVhY2ggd2F2ZSBpcyBmcm9tXG4gKiBsZWZ0IHRvIHJpZ2h0XG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBwZXJjZW50ICAgd2hlcmUgaW4gdGhlIGxpbmUgYXJlIHdlP1xuICogQHBhcmFtICB7TnVtYmVyfSBhbXBsaXR1ZGUgdGhlIGN1cnJlbnQgc3RyZW5ndGhcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICB0aGUgbmV3IHN0cmVuZ3RoXG4gKi9cbkVhc2Uuc2luZWlub3V0ID0gZnVuY3Rpb24gKHBlcmNlbnQsIGFtcGxpdHVkZSkge1xuICAgIHJldHVybiBhbXBsaXR1ZGUgKiAoTWF0aC5zaW4ocGVyY2VudCAqIFBJMiAtIEhBTEZQSSkgKyAxKSAqIDAuNTtcbn07XG5cbnZhciBFYXNlRW51bU9wdGlucyA9IHt9O1xuZm9yICh2YXIgayBpbiBFYXNlKSB7XG4gICAgRWFzZUVudW1PcHRpbnNba10gPSAtMTtcbn1cbkVhc2UuRW51bSA9IGNjLkVudW0oRWFzZUVudW1PcHRpbnMpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBAZmlsZSAgU2luZSBXYXZlIGZ1bmN0aW9uc1xuICogQGF1dGhvciBJc2FhYyBTdXR0ZWxsXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKipcbiAqIEhvbGRzIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2Ygd2F2ZXNcbiAqXG4gKiBAdHlwZSAgICB7T2JqZWN0fVxuICovXG52YXIgV2F2ZXMgPSB7fTtcblxuLyoqXG4gKiBEZWZhdWx0IFNpbmUgV2F2ZXNcbiAqXG4gKiBAcGFyYW0gICAge051bWJlcn0gICAgeFxuICovXG5XYXZlcy5zaW5lID0gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gTWF0aC5zaW4oeCk7XG59O1xuXG4vKipcbiAqIFNpZ24gcG9seWZpbGxcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvc2lnblxuICpcbiAqIEBwYXJhbSAgICAge051bWJlcn0gICAgeFxuICpcbiAqIEByZXR1cm4gICAge051bWJlcn1cbiAqL1xuV2F2ZXMuc2lnbiA9IGZ1bmN0aW9uICh4KSB7XG4gICAgeCA9ICt4OyAvLyBjb252ZXJ0IHRvIGEgbnVtYmVyXG4gICAgaWYgKHggPT09IDAgfHwgaXNOYU4oeCkpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIHJldHVybiB4ID4gMCA/IDEgOiAtMTtcbn07XG5cbi8qKlxuICogU3F1YXJlIFdhdmVzXG4gKlxuICogQHBhcmFtICAgIHtOdW1iZXJ9ICAgIHhcbiAqL1xuV2F2ZXMuc3F1YXJlID0gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gV2F2ZXMuc2lnbihNYXRoLnNpbih4ICogUEkyKSk7XG59O1xuXG4vKipcbiAqIFNhd3Rvb3RoIFdhdmVzXG4gKlxuICogQHBhcmFtICAgIHtOdW1iZXJ9ICAgIHhcbiAqL1xuV2F2ZXMuc2F3dG9vdGggPSBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiAoeCAtIE1hdGguZmxvb3IoeCArIDAuNSkpICogMjtcbn07XG5cbi8qKlxuICogVHJpYW5nbGUgV2F2ZXNcbiAqXG4gKiBAcGFyYW0gICAge051bWJlcn0gICAgeFxuICovXG5XYXZlcy50cmlhbmdsZSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKFdhdmVzLnNhd3Rvb3RoKHgpKTtcbn07XG5cbnZhciBXYXZlc0VudW1PcHRpbnMgPSB7fTtcbmZvciAodmFyIGsgaW4gV2F2ZXMpIHtcbiAgICBXYXZlc0VudW1PcHRpbnNba10gPSAtMTtcbn1cbldhdmVzLkVudW0gPSBjYy5FbnVtKFdhdmVzRW51bU9wdGlucyk7XG5cbnZhciBXYXZlID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdXYXZlJyxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGltZU1vZGlmaWVyOiAxLFxuICAgICAgICBhbXBsaXR1ZGU6IDUwLFxuICAgICAgICB3YXZlbGVuZ3RoOiA1MCxcbiAgICAgICAgc2VnbWVudExlbmd0aDogMTAsXG4gICAgICAgIGxpbmVXaWR0aDogMSxcbiAgICAgICAgd2F2ZVR5cGU6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogV2F2ZXMuRW51bS5zaW5lLFxuICAgICAgICAgICAgdHlwZTogV2F2ZXMuRW51bVxuICAgICAgICB9LFxuICAgICAgICBlYXNlVHlwZToge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBFYXNlLkVudW0uc2luZWluLFxuICAgICAgICAgICAgdHlwZTogRWFzZS5FbnVtXG4gICAgICAgIH0sXG4gICAgICAgIHN0cm9rZUNvbG9yOiBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAxMDApXG4gICAgfVxufSk7XG5cbnZhciBTaW5lV2F2ZXMgPSBjYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNwZWVkOiAxLFxuXG4gICAgICAgIHdhdmVzOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IFdhdmUoKV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogW1dhdmVdXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIGlmIChjYy5kaXJlY3Rvci5zZXRDbGVhckNvbG9yKSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5zZXRDbGVhckNvbG9yKGNjLmhleFRvQ29sb3IoJyMwMWFhZmYnKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbWUgPSAwO1xuXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICB0aGlzLmN0eC5saW5lQ2FwID0gY2MuR3JhcGhpY3MuTGluZUNhcC5CVVRUO1xuICAgICAgICB0aGlzLmN0eC5saW5lSm9pbiA9IGNjLkdyYXBoaWNzLkxpbmVKb2luLlJPVU5EO1xuXG4gICAgICAgIHZhciB3YXZlcyA9IHRoaXMud2F2ZXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gd2F2ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB3YXZlc1tpXS53YXZlRm4gPSBXYXZlc1tXYXZlcy5FbnVtW3dhdmVzW2ldLndhdmVUeXBlXV0uYmluZChXYXZlcyk7XG4gICAgICAgICAgICB3YXZlc1tpXS5lYXNlRm4gPSBFYXNlW0Vhc2UuRW51bVt3YXZlc1tpXS5lYXNlVHlwZV1dLmJpbmQoRWFzZSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbiBvbkRpc2FibGUoKSB7XG4gICAgICAgIGlmIChjYy5kaXJlY3Rvci5zZXRDbGVhckNvbG9yKSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5zZXRDbGVhckNvbG9yKGNjLkNvbG9yLkJMQUNLKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyKCk7XG5cbiAgICAgICAgdGhpcy55QXhpcyA9IGNjLnZpc2libGVSZWN0LmhlaWdodCAvIDI7XG4gICAgICAgIHRoaXMud2lkdGggPSBjYy52aXNpYmxlUmVjdC53aWR0aDtcblxuICAgICAgICB0aGlzLndhdmVXaWR0aCA9IHRoaXMud2lkdGggKiAwLjk1O1xuICAgICAgICB0aGlzLndhdmVMZWZ0ID0gdGhpcy53aWR0aCAqIDAuMjU7XG5cbiAgICAgICAgdGhpcy50aW1lICs9IGR0O1xuXG4gICAgICAgIC8vIERyYXcgZWFjaCBsaW5lXG4gICAgICAgIHZhciB3YXZlcyA9IHRoaXMud2F2ZXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gd2F2ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGltZU1vZGlmaWVyID0gdGhpcy53YXZlc1tpXS50aW1lTW9kaWZpZXIgfHwgMTtcbiAgICAgICAgICAgIHRoaXMuZHJhd1dhdmUodGhpcy50aW1lICogdGltZU1vZGlmaWVyLCB3YXZlc1tpXSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRHJhd3Mgb25lIGxpbmUgb24gdGhlIGNhbnZhc1xuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0aW1lICAgIGN1cnJlbnQgaW50ZXJuYWwgY2xvY2sgdGltZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyB3YXZlIG9wdGlvbnNcbiAgICAgKi9cbiAgICBkcmF3V2F2ZTogZnVuY3Rpb24gZHJhd1dhdmUodGltZSwgb3B0aW9ucykge1xuICAgICAgICAvLyBTdHlsZXNcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gb3B0aW9ucy5saW5lV2lkdGg7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZUNvbG9yID0gb3B0aW9ucy5zdHJva2VDb2xvcjtcblxuICAgICAgICAvLyBTdGFydGluZyBMaW5lXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbygwLCB0aGlzLnlBeGlzKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMud2F2ZUxlZnQsIHRoaXMueUF4aXMpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy53YXZlV2lkdGg7IGkgKz0gb3B0aW9ucy5zZWdtZW50TGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgd2hlcmUgdGhlIG5leHQgcG9pbnQgaXNcbiAgICAgICAgICAgIHZhciBwb2ludCA9IHRoaXMuZ2V0UG9pbnQodGltZSwgaSwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIC8vIERyYXcgdG8gaXRcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyhwb2ludC54LCBwb2ludC55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVuZGluZyBMaW5lXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLndpZHRoLCB0aGlzLnlBeGlzKTtcblxuICAgICAgICAvLyBTdHJva2UgaXRcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSB0aGUgeCwgeSBjb29yZGluYXRlcyBvZiBhIHBvaW50IGluIGEgc2luZSB3YXZlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRpbWUgICAgIEludGVybmFsIHRpbWUgaW5kZXhcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHBvc2l0aW9uIFBpeGVscyB4IHBvaXN0aW9uXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zICBXYXZlIG9wdGlvbnNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAge3gsIHl9XG4gICAgICovXG4gICAgZ2V0UG9pbnQ6IGZ1bmN0aW9uIGdldFBvaW50KHRpbWUsIHBvc2l0aW9uLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciB4ID0gdGltZSAqIHRoaXMuc3BlZWQgKyAoLXRoaXMueUF4aXMgKyBwb3NpdGlvbikgLyBvcHRpb25zLndhdmVsZW5ndGg7XG4gICAgICAgIHZhciB5ID0gb3B0aW9ucy53YXZlRm4oeCk7XG5cbiAgICAgICAgLy8gTGVmdCBhbmQgUmlnaHQgU2luZSBFYXNpbmdcbiAgICAgICAgdmFyIGFtcGxpdHVkZSA9IG9wdGlvbnMuZWFzZUZuKHBvc2l0aW9uIC8gdGhpcy53YXZlV2lkdGgsIG9wdGlvbnMuYW1wbGl0dWRlKTtcblxuICAgICAgICB4ID0gcG9zaXRpb24gKyB0aGlzLndhdmVMZWZ0O1xuICAgICAgICB5ID0gYW1wbGl0dWRlICogeSArIHRoaXMueUF4aXM7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5XG4gICAgICAgIH07XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2luZVdhdmVzO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnZjhkZTFnbVBNMUNMb2l2K1AvVDlIbkonLCAnd2VidmlldycpO1xuLy8gY2FzZXMvMDJfdWkvMTBfd2Vidmlldy93ZWJ2aWV3LmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYWJlbFN0YXR1czoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuXG4gICAgICAgIHdlYnZpZXc6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuV2ViVmlld1xuICAgICAgICB9LFxuXG4gICAgICAgIHVybDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5FZGl0Qm94XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcblxuICAgIG9uV2ViRmluaXNoTG9hZDogZnVuY3Rpb24gb25XZWJGaW5pc2hMb2FkKHNlbmRlciwgZXZlbnQpIHtcbiAgICAgICAgdmFyIGxvYWRTdGF0dXMgPSBcIlwiO1xuICAgICAgICBpZiAoZXZlbnQgPT09IGNjLldlYlZpZXcuRXZlbnRUeXBlLkxPQURFRCkge1xuICAgICAgICAgICAgbG9hZFN0YXR1cyA9IFwiIGlzIGxvYWRlZCFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudCA9PT0gY2MuV2ViVmlldy5FdmVudFR5cGUuTE9BRElORykge1xuICAgICAgICAgICAgbG9hZFN0YXR1cyA9IFwiIGlzIGxvYWRpbmchXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09IGNjLldlYlZpZXcuRXZlbnRUeXBlLkVSUk9SKSB7XG4gICAgICAgICAgICBsb2FkU3RhdHVzID0gJyBsb2FkIGVycm9yISc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYWJlbFN0YXR1cy5zdHJpbmcgPSB0aGlzLnVybC5zdHJpbmcgKyBsb2FkU3RhdHVzO1xuICAgIH0sXG5cbiAgICB2aXNpdFVSTDogZnVuY3Rpb24gdmlzaXRVUkwoKSB7XG4gICAgICAgIHRoaXMud2Vidmlldy51cmwgPSB0aGlzLnVybC5zdHJpbmc7XG4gICAgfVxuXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzg3ZjFmczBnb2hIRElmTmc0YWVQWGJ0JywgJ3poJyk7XG4vLyBpMThuL2RhdGEvemguanNcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiVGVzdExpc3QuZmlyZS4zMFwiOiBcIui/lOWbnuWIl+ihqFwiLFxuICBcIlRlc3RMaXN0LmZpcmUuMzdcIjogXCLmn6XnnIvor7TmmI5cIixcbiAgXCJjYXNlcy8wMV9ncmFwaGljcy8wMV9zcHJpdGUvQXRsYXNTcHJpdGUuZmlyZS43XCI6IFwi6L+Z5Liq57K+54G15p2l6Ieq5Y2V5byg5Zu+54mHXCIsXG4gIFwiY2FzZXMvMDFfZ3JhcGhpY3MvMDFfc3ByaXRlL0F0bGFzU3ByaXRlLmZpcmUuMTFcIjogXCLov5nkuKrnsr7ngbXmnaXoh6rlm77pm4ZcIixcbiAgXCJjYXNlcy8wMV9ncmFwaGljcy8wMV9zcHJpdGUvRmlsbGVkU3ByaXRlLmZpcmUuOVwiOiBcIuWhq+WFheexu+Wei++8muawtOW5s1wiLFxuICBcImNhc2VzLzAxX2dyYXBoaWNzLzAxX3Nwcml0ZS9GaWxsZWRTcHJpdGUuZmlyZS4xNVwiOiBcIuWhq+WFheexu+Wei++8muWeguebtFwiLFxuICBcImNhc2VzLzAxX2dyYXBoaWNzLzAxX3Nwcml0ZS9GaWxsZWRTcHJpdGUuZmlyZS4yM1wiOiBcIuWhq+WFheexu+Wei++8muWchuW9olwiLFxuICBcImNhc2VzLzAxX2dyYXBoaWNzLzAxX3Nwcml0ZS9TaW1wbGVTcHJpdGUuZmlyZS43XCI6IFwi6L+Z5piv5pmu6YCa57K+54G1XCIsXG4gIFwiY2FzZXMvMDFfZ3JhcGhpY3MvMDFfc3ByaXRlL1NsaWNlZFNwcml0ZS5maXJlLjdcIjogXCLov5nmmK/kuZ3lrqvmoLznsr7ngbVcIixcbiAgXCJjYXNlcy8wMV9ncmFwaGljcy8wMV9zcHJpdGUvVGlsZWRTcHJpdGUuZmlyZS42XCI6IFwi6L+Z5piv5bmz6ZO657K+54G1XCIsXG4gIFwiY2FzZXMvMDFfZ3JhcGhpY3MvMDFfc3ByaXRlL1RyaW1tZWRTcHJpdGUuZmlyZS43XCI6IFwi6Ieq5Yqo5Ymq6KOBIFwiLFxuICBcImNhc2VzLzAxX2dyYXBoaWNzLzAxX3Nwcml0ZS9UcmltbWVkU3ByaXRlLmZpcmUuMTJcIjogXCLmnKroh6rliqjliaroo4FcIixcbiAgXCJjYXNlcy8wMV9ncmFwaGljcy8wMl9wYXJ0aWNsZS9BdXRvUmVtb3ZlUGFydGljbGUuZmlyZS45XCI6IFwi57KS5a2QIDFcXG5cXFwi5a6M5oiQ5pe26Ieq5Yqo56e76ZmkXFxcIiDnpoHmraJcIixcbiAgXCJjYXNlcy8wMV9ncmFwaGljcy8wMl9wYXJ0aWNsZS9BdXRvUmVtb3ZlUGFydGljbGUuZmlyZS4xM1wiOiBcIueykuWtkCAyXFxuXFxcIuWujOaIkOaXtuiHquWKqOenu+mZpFxcXCIg5byA5ZCvXCIsXG4gIFwiY2FzZXMvMDFfZ3JhcGhpY3MvMDJfcGFydGljbGUvVG9nZ2xlUGFydGljbGUuZmlyZS42XCI6IFwi5oyJIFxcXCLmjInpkq5cXFwiIOi/m+ihjOW8gOWFs+eykuWtkOaSreaUvlwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjdcIjogXCLlt6bkuIpcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS45XCI6IFwidG9wOiAxMCUgbGVmdDogNiVcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS4xNFwiOiBcIuS4ilwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjE2XCI6IFwidG9wOiAtMzRweFwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjIxXCI6IFwi5Y+z5LiKXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDFfd2lkZ2V0L0FkdmFuY2VkV2lkZ2V0LmZpcmUuMjNcIjogXCJ0b3A6IDEwJSByaWdodDogNiVcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS4yOFwiOiBcIuW3plwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjMwXCI6IFwibGVmdDogLTUwcHhcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS4zNVwiOiBcIuWPs1wiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjM3XCI6IFwicmlnaHQ6IC01MHB4XCIsXG4gIFwiY2FzZXMvMDJfdWkvMDFfd2lkZ2V0L0FkdmFuY2VkV2lkZ2V0LmZpcmUuNDJcIjogXCLlt6bkuItcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS40NFwiOiBcImJvdHRvbTogMTAlIGxlZnQ6IDYlXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDFfd2lkZ2V0L0FkdmFuY2VkV2lkZ2V0LmZpcmUuNDlcIjogXCLkuItcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS41MVwiOiBcImJvdHRvbTogLTM0cHhcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvQWR2YW5jZWRXaWRnZXQuZmlyZS41NlwiOiBcIuWPs+S4i1wiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjU4XCI6IFwiYm90dG9tOjEwJSByaWdodDo2JVwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BZHZhbmNlZFdpZGdldC5maXJlLjYzXCI6IFwi6auY57qn5oyC5Lu2XCIsXG4gIFwiY2FzZXMvMDJfdWkvMDFfd2lkZ2V0L0FsaWduT25jZVdpZGdldC5maXJlLjFcIjogXCJBbGlnbk9uZSDkuLogZmFsc2Ug5pe277yM5Lya5LiA55u05L+d5oyB5a+56b2QXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDFfd2lkZ2V0L0FsaWduT25jZVdpZGdldC5maXJlLjJcIjogXCJBbGlnbk9uZSDkuLogdHJ1ZSDml7bvvIzlj6rlnKggV2lkZ2V0IOeUn+aViOaXtuWvuem9kOS4gOasoVwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BbmltYXRlZFdpZGdldC5maXJlLjlcIjogXCLliqjnlLvmjILku7bjgIJcIixcbiAgXCJjYXNlcy8wMl91aS8wMV93aWRnZXQvV2lkZ2V0QWxpZ24uZmlyZS4xOFwiOiBcIuaMguS7tuWvuem9kOaWueW8j+OAglwiLFxuICBcImNhc2VzLzAyX3VpLzAxX3dpZGdldC9BdXRvUmVzaXplLmZpcmUuMTNcIjogXCLmjILku7boh6rliqjosIPmlbTlpKflsI/jgIJcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9Hb2xkQmVhdGluZ0FuaW1lLmpzLjFcIjogXCIwXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS42XCI6IFwi5paH5pys5a+56b2QXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS45XCI6IFwi5rC05bmz5a+56b2QXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS4xNFwiOiBcIuWTiOWVsO+8gVxcbuasoui/juS9v+eUqCBcXG5Db2NvcyBDcmVhdG9yXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS4xNlwiOiBcIuWvuem9kDog6Z2g5bemXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS4yMVwiOiBcIuWTiOWVsO+8gVxcbuasoui/juS9v+eUqCBcXG5Db2NvcyBDcmVhdG9yXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS4yM1wiOiBcIuWvuem9kDog5bGF5LitXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS4yOFwiOiBcIuWTiOWVsO+8gVxcbuasoui/juS9v+eUqCBcXG5Db2NvcyBDcmVhdG9yXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS4zMFwiOiBcIuWvuem9kDog6Z2g5Y+zXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvQWxpZ25Gb250TGFiZWwuZmlyZS4zM1wiOiBcIuWeguebtOWvuem9kFwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL0FsaWduRm9udExhYmVsLmZpcmUuMzhcIjogXCLmrKLov47kvb/nlKggXFxuQ29jb3MgQ3JlYXRvclwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL0FsaWduRm9udExhYmVsLmZpcmUuNDBcIjogXCLlr7npvZA6IOmhtumDqFwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL0FsaWduRm9udExhYmVsLmZpcmUuNDVcIjogXCLmrKLov47kvb/nlKggXFxuQ29jb3MgQ3JlYXRvclwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL0FsaWduRm9udExhYmVsLmZpcmUuNDdcIjogXCLlr7npvZA6IOWxheS4rVwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL0FsaWduRm9udExhYmVsLmZpcmUuNTJcIjogXCLmrKLov47kvb/nlKggXFxuQ29jb3MgQ3JlYXRvclwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL0FsaWduRm9udExhYmVsLmZpcmUuNTRcIjogXCLlr7npvZA6IOW6lemDqFwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL1N5c3RlbUZvbnRMYWJlbC5maXJlLjZcIjogXCLns7vnu5/lrZfkvZNcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9TeXN0ZW1Gb250TGFiZWwuZmlyZS45XCI6IFwi5o2i6KGMXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvU3lzdGVtRm9udExhYmVsLmZpcmUuMTRcIjogXCLov5nmmK/ns7vnu5/pu5jorqTlrZfkvZNcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9TeXN0ZW1Gb250TGFiZWwuZmlyZS4xNlwiOiBcIk92ZXJmbG93OiBDTEFNUFwiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL1N5c3RlbUZvbnRMYWJlbC5maXJlLjIxXCI6IFwi6L+Z5piv57O757uf6buY6K6k5a2X5L2TXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvU3lzdGVtRm9udExhYmVsLmZpcmUuMjNcIjogXCJPdmVyZmxvdzogU0hSSU5LXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvU3lzdGVtRm9udExhYmVsLmZpcmUuMjZcIjogXCLkuI3mjaLooYxcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9TeXN0ZW1Gb250TGFiZWwuZmlyZS4zMVwiOiBcIui/meaYr+ezu+e7n+m7mOiupOWtl+S9k1wiLFxuICBcImNhc2VzLzAyX3VpLzAyX2xhYmVsL1N5c3RlbUZvbnRMYWJlbC5maXJlLjMzXCI6IFwiT3ZlcmZsb3c6IENMQU1QXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDJfbGFiZWwvU3lzdGVtRm9udExhYmVsLmZpcmUuMzhcIjogXCLov5nmmK/ns7vnu5/pu5jorqTlrZfkvZNcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9TeXN0ZW1Gb250TGFiZWwuZmlyZS40MFwiOiBcIk92ZXJmbG93OiBTSFJJTktcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9TeXN0ZW1Gb250TGFiZWwuZmlyZS40NVwiOiBcIuWTiOWWvSEg5qyi6L+O5L2/55SoIENvY29zIENyZWF0b3JcIixcbiAgXCJjYXNlcy8wMl91aS8wMl9sYWJlbC9TeXN0ZW1Gb250TGFiZWwuZmlyZS40N1wiOiBcIk92ZXJmbG93OiBSRVNaSUVfSEVJR0hUXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDNfYnV0dG9uL0J1dHRvbkluU2Nyb2xsLmpzLjFcIjogXCLpobbpg6jmjInpkq7ooqvngrnlh7vvvIFcIixcbiAgXCJjYXNlcy8wMl91aS8wM19idXR0b24vQnV0dG9uSW5TY3JvbGwuanMuMlwiOiBcIuW6lemDqOaMiemSruiiq+eCueWHu++8gVwiLFxuICBcImNhc2VzLzAyX3VpLzAzX2J1dHRvbi9CdXR0b25JblNjcm9sbC5maXJlLjIxXCI6IFwi5ZOq5Liq5oyJ6ZKu6KKr54K55Ye777yfXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDNfYnV0dG9uL0J1dHRvbkluU2Nyb2xsLmZpcmUuMjdcIjogXCLmi5bliqjmmL7npLrmm7TlpJrmjInpkq5cXG5cXG5cIixcbiAgXCJjYXNlcy8wMl91aS8wM19idXR0b24vU2ltcGxlQnV0dG9uLmpzLjFcIjogXCLlt6bovrnnmoTmjInpkq7ooqvngrnlh7vvvIFcIixcbiAgXCJjYXNlcy8wMl91aS8wM19idXR0b24vU2ltcGxlQnV0dG9uLmpzLjJcIjogXCLlj7PovrnnmoTmjInpkq7ooqvngrnlh7vvvIFcIixcbiAgXCJjYXNlcy8wMl91aS8wM19idXR0b24vQnV0dG9uSW50ZXJhY3RhYmxlLmZpcmUuN1wiOiBcIuaSreaUvlwiLFxuICBcImNhc2VzLzAyX3VpLzAzX2J1dHRvbi9CdXR0b25JbnRlcmFjdGFibGUuZmlyZS4xNlwiOiBcIuWBnOatolwiLFxuICBcImNhc2VzLzAyX3VpLzAzX2J1dHRvbi9CdXR0b25JbnRlcmFjdGFibGUuZmlyZS4yMVwiOiBcIuS6pOS6kihpbnRlcmFjdGFibGUpOiB0cnVlXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDNfYnV0dG9uL0J1dHRvbkludGVyYWN0YWJsZS5maXJlLjIzXCI6IFwi5Lqk5LqSKGludGVyYWN0YWJsZSk6IGZhbHNlXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDNfYnV0dG9uL0J1dHRvbkludGVyYWN0YWJsZS5qcy4xXCI6IFwi5Lqk5LqSKGludGVyYWN0YWJsZSk6IFwiLFxuICBcImNhc2VzLzAyX3VpLzAzX2J1dHRvbi9CdXR0b25JbnRlcmFjdGFibGUuanMuMlwiOiBcIuS6pOS6kihpbnRlcmFjdGFibGUpOiBcIixcbiAgXCJjYXNlcy8wMl91aS8wM19idXR0b24vU2ltcGxlQnV0dG9uLmZpcmUuNlwiOiBcIuWTquS4quaMiemSruiiq+eCueWHu++8n1wiLFxuICBcImNhc2VzLzAyX3VpLzA1X3Njcm9sbFZpZXcvSXRlbS5qcy4xXCI6IFwiVG1wbCNcIixcbiAgXCJjYXNlcy8wMl91aS8wNF9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5maXJlLjdcIjogXCLmsLTlubPov5vluqbmnaHvvIzov5vluqYgMC4zXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDRfcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuZmlyZS4xMVwiOiBcIuWPjeWQkeawtOW5s+i/m+W6puadoe+8jOi/m+W6piAxLjBcIixcbiAgXCJjYXNlcy8wMl91aS8wNF9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5maXJlLjE1XCI6IFwi5Z6C55u06L+b5bqm5p2hIFxcbuS7juS4i+WQkeS4ilwiLFxuICBcImNhc2VzLzAyX3VpLzA0X3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmZpcmUuMTlcIjogXCLlnoLnm7Tov5vluqbmnaEgXFxu5LuO5LiK5ZCR5LiLXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDRfcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuZmlyZS4yM1wiOiBcIuiuvue9ruS6hueyvueBteeahOi/m+W6puadoVwiLFxuICBcImNhc2VzLzAyX3VpLzA0X3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmZpcmUuMjhcIjogXCLorr7nva7kuobnsr7ngbXvvIjlrZDmjqfku7bvvInnmoTov5vluqbmnaFcIixcbiAgXCJjYXNlcy8wMl91aS8wNV9zY3JvbGxWaWV3L0xpc3RWaWV3LmZpcmUuMjNcIjogXCJJdGVtICMwMFwiLFxuICBcImNhc2VzLzAyX3VpLzA1X3Njcm9sbFZpZXcvU2Nyb2xsVmlldy5maXJlLjdcIjogXCJTY3JvbGx2aWV3IOWujOaVtOWKn+iDvVwiLFxuICBcImNhc2VzLzAyX3VpLzA1X3Njcm9sbFZpZXcvU2Nyb2xsVmlldy5maXJlLjMwXCI6IFwiU2Nyb2xsdmlldyDmsqHmnInmg6/mgKdcIixcbiAgXCJjYXNlcy8wMl91aS8wNV9zY3JvbGxWaWV3L1Njcm9sbFZpZXcuZmlyZS41M1wiOiBcIlNjcm9sbHZpZXcg5rKh5pyJ5by55oCnXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDVfc2Nyb2xsVmlldy9TY3JvbGxWaWV3LmZpcmUuNzZcIjogXCJTY3JvbGx2aWV3IOWPquiDveawtOW5s+a7muWKqFwiLFxuICBcImNhc2VzLzAyX3VpLzA1X3Njcm9sbFZpZXcvU2Nyb2xsVmlldy5maXJlLjkzXCI6IFwiU2Nyb2xsdmlldyDlj6rog73lnoLnm7Tmu5rliqhcIixcbiAgXCJjYXNlcy8wMl91aS8wNV9zY3JvbGxWaWV3L1Njcm9sbFZpZXcuZmlyZS4xMTBcIjogXCJTY3JvbGx2aWV3IOayoeaciea7muWKqOadoVwiLFxuICBcImNhc2VzLzAyX3VpLzA2X2xheW91dC9MYXlvdXRJblNjcm9sbFZpZXcuZmlyZS42XCI6IFwiU2Nyb2xsVmlldyDlkozlnoLnm7TluIPlsYDlrrnlmahcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0SW5TY3JvbGxWaWV3LmZpcmUuNDBcIjogXCJTY3JvbGxWaWV3IOWSjOawtOW5s+W4g+WxgOWuueWZqFwiLFxuICBcImNhc2VzLzAyX3VpLzA2X2xheW91dC9MYXlvdXRJblNjcm9sbFZpZXcuZmlyZS43NFwiOiBcIlNjcm9sbFZpZXcg5ZKM5qiq5ZCR572R5qC85biD5bGA5a655ZmoIFwiLFxuICBcImNhc2VzLzAyX3VpLzA2X2xheW91dC9MYXlvdXRJblNjcm9sbFZpZXcuZmlyZS4xNDRcIjogXCJTY3JvbGxWaWV3IOWSjOe6teWQkee9keagvOW4g+WxgOWuueWZqCBcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0UmVzaXplQ2hpbGRyZW4uZmlyZS42XCI6IFwi5rC05bmz5biD5bGA5a655ZmoXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDZfbGF5b3V0L0xheW91dFJlc2l6ZUNoaWxkcmVuLmZpcmUuMzFcIjogXCLlnoLnm7TluIPlsYDlrrnlmahcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0UmVzaXplQ2hpbGRyZW4uZmlyZS40OFwiOiBcIuaoquWQkee9keagvOW4g+WxgOWuueWZqFwiLFxuICBcImNhc2VzLzAyX3VpLzA2X2xheW91dC9MYXlvdXRSZXNpemVDaGlsZHJlbi5maXJlLjg1XCI6IFwi57q15ZCR572R5qC85biD5bGA5a655ZmoXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDZfbGF5b3V0L0xheW91dFJlc2l6ZUNvbnRhaW5lci5maXJlLjZcIjogXCLln7rmnKxcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0UmVzaXplQ29udGFpbmVyLmZpcmUuMzFcIjogXCLmsLTlubNcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0UmVzaXplQ29udGFpbmVyLmZpcmUuMzZcIjogXCLlnoLnm7RcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0UmVzaXplQ29udGFpbmVyLmZpcmUuNDFcIjogXCLmqKrlkJHnvZHmoLzluIPlsYDlrrnlmahcIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0UmVzaXplQ29udGFpbmVyLmZpcmUuNDZcIjogXCLnurXlkJHnvZHmoLzluIPlsYDlrrnlmahcIixcbiAgXCJjYXNlcy8wMl91aS8wN19jaGFuZ2VfY2FudmFzX2FuY2hvci9Cb3R0b21MZWZ0QW5jaG9yLmZpcmUuOFwiOiBcIng6MCwgeTowXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDdfY2hhbmdlX2NhbnZhc19hbmNob3IvQm90dG9tTGVmdEFuY2hvci5maXJlLjEyXCI6IFwieDo0ODAsIHk6MzIwXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDdfY2hhbmdlX2NhbnZhc19hbmNob3IvQm90dG9tTGVmdEFuY2hvci5maXJlLjE2XCI6IFwieDo5NjAsIHk6NjQwXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDdfZWRpdEJveC9lZGl0Ym94LmpzLjFcIjogXCLovpPlhaXmlofmnKw6IFwiLFxuICBcImNhc2VzLzAyX3VpLzA2X2xheW91dC9MYXlvdXROb25lLmZpcmUuNlwiOiBcIuWfuuacrOW4g+WxgOWuueWZqCwg57G75Z6LOiBOb25lXFxu6Ieq5Yqo6LCD5pW05aSn5bCPXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDZfbGF5b3V0L0xheW91dE5vbmUuZmlyZS4zNVwiOiBcIuawtOW5s+W4g+WxgOWuueWZqO+8jOexu+WeizogTm9uZVxcbuS4jeiHquWKqOiwg+aVtOWkp+Wwj1wiLFxuICBcImNhc2VzLzAyX3VpLzA2X2xheW91dC9MYXlvdXROb25lLmZpcmUuNjBcIjogXCLlnoLnm7TluIPlsYDlrrnlmajvvIznsbvlnos6IE5vbmVcXG7kuI3oh6rliqjosIPmlbTlpKflsI9cIixcbiAgXCJjYXNlcy8wMl91aS8wNl9sYXlvdXQvTGF5b3V0Tm9uZS5maXJlLjc3XCI6IFwi5qiq5ZCR572R5qC85biD5bGA5a655Zmo77yM57G75Z6LOiBOb25lXFxu5LiN6Ieq5Yqo6LCD5pW05aSn5bCPXCIsXG4gIFwiY2FzZXMvMDJfdWkvMDZfbGF5b3V0L0xheW91dE5vbmUuZmlyZS4xNDJcIjogXCLnurXlkJHnvZHmoLzluIPlsYDlrrnlmajvvIznsbvlnos6IE5vbmVcXG7kuI3oh6rliqjosIPmlbTlpKflsI9cIixcbiAgXCJjYXNlcy8wMl91aS8wN19lZGl0Qm94L0VkaXRCb3guZmlyZS4yNVwiOiBcIuWNleihjOWvhueggeahhjpcIixcbiAgXCJjYXNlcy8wMl91aS8wN19lZGl0Qm94L0VkaXRCb3guZmlyZS4yN1wiOiBcIuWNleihjOaWh+acrOahhjpcIixcbiAgXCJjYXNlcy8wMl91aS8wN19lZGl0Qm94L0VkaXRCb3guZmlyZS4yOVwiOiBcIuWkmuihjOaWh+acrOahhjpcIixcbiAgXCJjYXNlcy8wMl91aS8wN19lZGl0Qm94L0VkaXRCb3guZmlyZS4zMlwiOiBcIueCueWHu1wiLFxuICBcImNhc2VzLzAyX3VpLzA3X2VkaXRCb3gvRWRpdEJveC5maXJlLjM4XCI6IFwi5oyJ6ZKu5b+F6aG75ZyoIEVkaXRCb3gg55qE5LiK6Z2iLCBcXG7lubbkuJTlroPlupTor6XlhYHorrjngrnlh7suXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDFfcGxheWVyX2NvbnRyb2wvRXZlbnRNYW5hZ2VyL0tleWJvYXJkSW5wdXQuZmlyZS42XCI6IFwi5oyJICdBJyDmiJYgJ0QnIOmUruaOp+WItuWwj+e7tee+ilwiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAxX3BsYXllcl9jb250cm9sL09uL09uVG91Y2hDdHJsLmpzLjFcIjogXCJ0b3VjaCAoXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDFfcGxheWVyX2NvbnRyb2wvT24vT25Ub3VjaElucHV0LmZpcmUuMTBcIjogXCLor7fop6bmkbjku7vmhI/kvY3nva7or5Xor5VcIixcbiAgXCJjYXNlcy8wM19nYW1lcGxheS8wMV9wbGF5ZXJfY29udHJvbC9Pbi9Pbk11bHRpVG91Y2hJbnB1dC5maXJlLjIwXCI6IFwi6K+l5pWI5p6c5Y+q6IO95Zyo56e75Yqo5bmz5Y+w5LiK5pyJ5pWI77yBXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDFfcGxheWVyX2NvbnRyb2wvT24vT25NdWx0aVRvdWNoSW5wdXQuZmlyZS4yMVwiOiBcIueUqOS9oOeahOaJi+aMh+aUvue8qeWbvueJh++8gVwiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAyX2FjdGlvbnMvU2ltcGxlQWN0aW9uLmZpcmUuMTNcIjogXCLnroDljZXnmoTliqjkvZxcIixcbiAgXCJjYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vQW5pbWF0ZUN1c3RvbVByb3BlcnR5LmZpcmUuMTRcIjogXCJMYWJlbFwiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9BbmltYXRlQ3VzdG9tUHJvcGVydHkuZmlyZS4xOFwiOiBcIuiHquWumuS5ieWKqOeUu+WxnuaAp1wiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9BbmltYXRpb25FdmVudC5qcy4xXCI6IFwi5byA5aeL56ysXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDNfYW5pbWF0aW9uL0FuaW1hdGlvbkV2ZW50LmZpcmUuNlwiOiBcIuW8gOWni+esrDHkuKrliqjnlLtcIixcbiAgXCJjYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vQW5pbWF0aW9uRXZlbnQuZmlyZS4xNFwiOiBcIuWKqOeUu+S6i+S7tlwiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9Nb3ZlQW5pbWF0aW9uLmZpcmUuMTFcIjogXCJMaW5lYXJcIixcbiAgXCJjYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vTW92ZUFuaW1hdGlvbi5maXJlLjE3XCI6IFwiQ2FzZSBJbiBFeHBvXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDNfYW5pbWF0aW9uL01vdmVBbmltYXRpb24uZmlyZS4yM1wiOiBcIkNhc2UgT3V0IEV4cG9cIixcbiAgXCJjYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vTW92ZUFuaW1hdGlvbi5maXJlLjI5XCI6IFwiQ2FzZSBPdXQgSW4gRXhwb1wiLFxuICBcImNhc2VzLzAzX2dhbWVwbGF5LzAzX2FuaW1hdGlvbi9Nb3ZlQW5pbWF0aW9uLmZpcmUuMzVcIjogXCJCYWNrIEZvcndhcmRcIixcbiAgXCJjYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vTW92ZUFuaW1hdGlvbi5maXJlLjQxXCI6IFwi6L+Z5piv5LiA5Liq56e75Yqo5Yqo55S744CCXCIsXG4gIFwiY2FzZXMvMDNfZ2FtZXBsYXkvMDNfYW5pbWF0aW9uL1Nwcml0ZUFuaW1hdGlvbi5maXJlLjlcIjogXCLov5nmmK/nsr7ngbXluKfliqjnlLtcIixcbiAgXCJjYXNlcy8wM19nYW1lcGxheS8wM19hbmltYXRpb24vQ3JlYXRlQ2xpcC5maXJlLjFcIjogXCLliqjmgIHliJvlu7rliqjnlLvliarovpFcIixcbiAgXCJjYXNlcy8wNF9hdWRpby9TaW1wbGVBdWRpby5maXJlLjZcIjogXCLkuqvlj5fpn7PkuZAhXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzAxX3Byb3BlcnRpZXMvTm9kZUFycmF5LmZpcmUuMTRcIjogXCLov5nmmK/oioLngrnmlbDnu4RcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDFfcHJvcGVydGllcy9Ob25TZXJpYWxpemVkLmZpcmUuNlwiOiBcIkxhYmVsXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzAxX3Byb3BlcnRpZXMvTm9uU2VyaWFsaXplZC5maXJlLjhcIjogXCJMYWJlbFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wMV9wcm9wZXJ0aWVzL05vblNlcmlhbGl6ZWQuZmlyZS4xMFwiOiBcIui/meaYr+mdnuW6j+WIl+WMllwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wMV9wcm9wZXJ0aWVzL1JlZmVyZW5jZVR5cGUuZmlyZS44XCI6IFwiTGFiZWxcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDFfcHJvcGVydGllcy9SZWZlcmVuY2VUeXBlLmZpcmUuMTFcIjogXCLov5nkuKrkvovlrZDkuI3ljIXmi6zov5DooYzml7bmvJTnpLpcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDFfcHJvcGVydGllcy9WYWx1ZVR5cGUuZmlyZS42XCI6IFwi6L+Z5Liq5L6L5a2Q5LiN5YyF5ous6L+Q6KGM5pe25ryU56S6XCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzAyX3ByZWZhYi9JbnN0YW50aWF0ZVByZWZhYi5maXJlLjdcIjogXCLlrp7kvovljJbpooTliLbotYTmupBcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDNfZXZlbnRzL0V2ZW50SW5NYXNrLmZpcmUuMjNcIjogXCLmm7TmlLnoioLngrnmjpLluo9cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDNfZXZlbnRzL1NpbXBsZUV2ZW50LmZpcmUuMTlcIjogXCLop6bmkbjkuovku7blj6/ku6XmlK/mjIHngrnlh7tcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDNfZXZlbnRzL1NpbXBsZUV2ZW50LmZpcmUuMjFcIjogXCLpvKDmoIfkuovku7blj6/ku6XmlK/mjIHljZXlh7vjgIHmgqzlgZzjgIHmu5rova5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDNfZXZlbnRzL1NpbXBsZUV2ZW50LmZpcmUuMjNcIjogXCLoh6rlrprkuYnkuovku7blj6/ku6XmiYvliqjop6blj5FcXG4o54K55Ye75LiK6Z2i55qE5oyJ6ZKuKVwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wM19ldmVudHMvU2ltcGxlRXZlbnQuZmlyZS4yNVwiOiBcIuWfuuacrOS6i+S7tlwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wM19ldmVudHMvVG91Y2hQcm9wYWdhdGlvbi5maXJlLjE1XCI6IFwi6Kem5pG45LqL5Lu25YaS5rOhXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA0X3NjaGVkdWxlci9zY2hlZHVsZUNhbGxiYWNrcy5qcy4xXCI6IFwiNS4wMCBzXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA0X3NjaGVkdWxlci9zY2hlZHVsZXIuZmlyZS45XCI6IFwiNS4wMCBzXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA0X3NjaGVkdWxlci9zY2hlZHVsZXIuZmlyZS4xMlwiOiBcIumHjeWkjeWumuaXtuWZqFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wNF9zY2hlZHVsZXIvc2NoZWR1bGVyLmZpcmUuMThcIjogXCLlj5bmtojlrprml7blmahcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDRfc2NoZWR1bGVyL3NjaGVkdWxlci5maXJlLjI0XCI6IFwi5a6a5pe25omn6KGMMeasoVwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wNF9zY2hlZHVsZXIvc2NoZWR1bGVyLmZpcmUuMjlcIjogXCLkvb/nlKggdXBkYXRlIOWHveaVsOavj+W4p+abtOaWsOiuoeaVsFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wNF9zY2hlZHVsZXIvc2NoZWR1bGVyLmZpcmUuMzFcIjogXCLlrprml7blmahcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDVfY3Jvc3NfcmVmZXJlbmNlL0Nyb3NzUmVmZXJlbmNlLmZpcmUuN1wiOiBcIkxhYmVsXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA1X2Nyb3NzX3JlZmVyZW5jZS9Dcm9zc1JlZmVyZW5jZS5maXJlLjEyXCI6IFwiTGFiZWxcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDVfY3Jvc3NfcmVmZXJlbmNlL0Nyb3NzUmVmZXJlbmNlLmZpcmUuMTRcIjogXCLkuqTlj4nlvJXnlKhcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDZfbGlmZV9jeWNsZS9saWZlX2N5Y2xlLmZpcmUuNlwiOiBcIueUn+WRveWRqOacn1wiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0Fzc2V0TG9hZGluZy5maXJlLjVcIjogXCLotYTmupDliqDovb1cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuZmlyZS45XCI6IFwi5Yqg6L29IFNwcml0ZUZyYW1lXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvQXNzZXRMb2FkaW5nLmZpcmUuMTVcIjogXCLliqDovb0gVGV4dHVyZVwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0Fzc2V0TG9hZGluZy5maXJlLjIxXCI6IFwi5Yqg6L29IEF1ZGlvXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvQXNzZXRMb2FkaW5nLmZpcmUuMjdcIjogXCLliqDovb0gVHh0XCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvQXNzZXRMb2FkaW5nLmZpcmUuMzNcIjogXCLliqDovb0gRm9udFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0Fzc2V0TG9hZGluZy5maXJlLjM5XCI6IFwi5Yqg6L29IFBsaXN0XCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvQXNzZXRMb2FkaW5nLmZpcmUuNDVcIjogXCLliqDovb0gUHJlZmFiXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvQXNzZXRMb2FkaW5nLmZpcmUuNTFcIjogXCLliqDovb0gU2NlbmVcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuZmlyZS41N1wiOiBcIuWKoOi9vSBBbmltYXRpb25cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuZmlyZS41OVwiOiBcIuWKoOi9vSBTcGluZVwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0Fzc2V0TG9hZGluZy5maXJlLjY1XCI6IFwi5b2T5YmN5bCa5peg5Yqg6L2944CCXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvQXNzZXRMb2FkaW5nLmpzLjFcIjogXCLlt7LliqDovb0gXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvQXNzZXRMb2FkaW5nLmpzLjJcIjogXCLmkq3mlL4gXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvQXNzZXRMb2FkaW5nLmpzLjNcIjogXCLliJvlu7ogXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvQXNzZXRMb2FkaW5nLmpzLjRcIjogXCLmkq3mlL7pn7PkuZDjgIJcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Bc3NldExvYWRpbmcuanMuNVwiOiBcIui/meaYr+Wtl+S9k++8gVwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0xvYWRSZXMuZmlyZS43XCI6IFwi5oyJ57G75Z6LXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvTG9hZFJlcy5maXJlLjEwXCI6IFwi5Yqg6L29IFNwcml0ZUZyYW1lXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvTG9hZFJlcy5maXJlLjE3XCI6IFwi5oyJIFVybFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0xvYWRSZXMuZmlyZS4yMFwiOiBcIuWKoOi9vemihOWItui1hOa6kFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wN19hc3NldF9sb2FkaW5nL0xvYWRSZXNBbGwuZmlyZS42XCI6IFwi6L+Z5Liq5L6L5a2Q5LiN5YyF5ous6L+Q6KGM5pe25ryU56S6XCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvTG9hZFJlc0FsbC5maXJlLjI0XCI6IFwi5YWo6YOo5Yqg6L29XCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzA3X2Fzc2V0X2xvYWRpbmcvTG9hZFJlc0FsbC5maXJlLjMwXCI6IFwi5Yqg6L295YWo6YOo55qEU3ByaXRlRnJhbWVcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDdfYXNzZXRfbG9hZGluZy9Mb2FkUmVzQWxsLmZpcmUuMzZcIjogXCLmuIXnqbpcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMDhfbW9kdWxlL2xvYWRfbW9kdWxlLmZpcmUuNlwiOiBcIuWKoOi9veaooeWdl1wiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wOF9tb2R1bGUvbG9hZF9tb2R1bGUuZmlyZS4xMFwiOiBcIuWIm+W7uuaAqueJqVwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8wOV9zaW5nbGV0b24vU2luZ2xldG9uLmZpcmUuNlwiOiBcIui/meS+i+WtkOS4jeWMheWQq+i/kOihjOaXtua8lOekulwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMF9sb2FkaW5nQmFyL0xvYWRpbmdCYXJDdHJsLmpzLjFcIjogXCLkuIvovb3lrozmiJAhIVwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMF9sb2FkaW5nQmFyL0xvYWRpbmdCYXJDdHJsLmpzLjJcIjogXCLmraPlnKjkuIvovb06IFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMF9sb2FkaW5nQmFyL2xvYWRpbmdCYXIuZmlyZS43XCI6IFwi5Yqg6L295a6M5oiQXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzEwX2xvYWRpbmdCYXIvbG9hZGluZ0Jhci5maXJlLjE4XCI6IFwi5q2j5Zyo5LiL6L29XCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuMVwiOiBcIuivt+eojeetiS4uLlwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL05ldHdvcmtDdHJsLmpzLjJcIjogXCLor7fnqI3nrYkuLi5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9OZXR3b3JrQ3RybC5qcy4zXCI6IFwi6K+356iN562JLi4uXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuNFwiOiBcIuivt+eojeetiS4uLlwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL05ldHdvcmtDdHJsLmpzLjVcIjogXCJXZWJTb2NrZXRcXG7lj5HpgIHkuozov5vliLZXU+W3suaJk+W8gC5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9OZXR3b3JrQ3RybC5qcy42XCI6IFwiV2ViU29ja2V0XFxu5pS25Yiw5ZON5bqULlwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL05ldHdvcmtDdHJsLmpzLjdcIjogXCJXZWJTb2NrZXRcXG7lj5HpgIHkuozov5vliLbpgYfliLDplJnor68uXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuOFwiOiBcIldlYlNvY2tldFxcbndlYnNvY2tldCDlrp7kvovlt7LlhbPpl60uXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuOVwiOiBcIldlYlNvY2tldFxcbuWPkemAgeS6jOi/m+WItldT562J5b6F5LitLi4uXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuMTBcIjogXCJXZWJTb2NrZXRcXG5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9OZXR3b3JrQ3RybC5qcy4xMVwiOiBcIlNvY2tldElPXFxuXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvTmV0d29ya0N0cmwuanMuMTJcIjogXCJTb2NrZXRJT1xcblwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL05ldHdvcmtDdHJsLmpzLjEzXCI6IFwiU29ja2V0SU9cXG5cIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9OZXR3b3JrQ3RybC5qcy4xNFwiOiBcIlNvY2tldElPXFxuXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvbmV0d29yay5maXJlLjdcIjogXCJMYWJlbFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL25ldHdvcmsuZmlyZS42XCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9uZXR3b3JrLmZpcmUuMTFcIjogXCJMYWJlbFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL25ldHdvcmsuZmlyZS4xMFwiOiBcIlhNTEh0dHBSZXF1ZXN0IChBcnJheUJ1ZmZlcilcIixcbiAgXCJjYXNlcy8wNV9zY3JpcHRpbmcvMTFfbmV0d29yay9uZXR3b3JrLmZpcmUuMTVcIjogXCJMYWJlbFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL25ldHdvcmsuZmlyZS4xNFwiOiBcIldlYlNvY2tldFwiLFxuICBcImNhc2VzLzA1X3NjcmlwdGluZy8xMV9uZXR3b3JrL25ldHdvcmsuZmlyZS4xOVwiOiBcIkxhYmVsXCIsXG4gIFwiY2FzZXMvMDVfc2NyaXB0aW5nLzExX25ldHdvcmsvbmV0d29yay5maXJlLjE4XCI6IFwiU29ja2V0SU9cIixcbiAgXCJjYXNlcy9uYXRpdmVfY2FsbC9uYXRpdmVfY2FsbC5maXJlLjFcIjogXCJKUyB0byBKQVZBIOWPjeWwhOWPquWcqOWuieWNk+enu+WKqOW5s+WPsOS4iuacieaViOaenO+8gVwiLFxuICBcImNhc2VzL25hdGl2ZV9jYWxsL25hdGl2ZV9jYWxsLmZpcmUuMlwiOiBcIueCueWHu+aMiemSruiwg+eUqOmdmeaAgeaWueazle+8gVwiLFxuICBcImNhc2VzL25hdGl2ZV9jYWxsL25hdGl2ZV9jYWxsLmZpcmUuM1wiOiBcIueCueWHu1wiLFxuICBcImNhc2VzL2NvbGxpZGVyL0NhdGVnb3J5LmZpcmUuM1wiOiBcIue7hDog56Kw5pKeXCIsXG4gIFwiY2FzZXMvY29sbGlkZXIvQ2F0ZWdvcnkuZmlyZS41XCI6IFwi57uEOiDnorDmkp5cIixcbiAgXCJjYXNlcy9jb2xsaWRlci9DYXRlZ29yeS5maXJlLjdcIjogXCLnu4Q6IOeisOaSnlwiLFxuICBcImNhc2VzL2NvbGxpZGVyL0NhdGVnb3J5LmZpcmUuOVwiOiBcIue7hDog6buY6K6kXCIsXG4gIFwiY2FzZXMvY29sbGlkZXIvU2hhcGUuZmlyZS4yMFwiOiBcIuaYvuekuuWkmui+ueW9olwiLFxuICBcImNhc2VzL2NvbGxpZGVyL1NoYXBlLmZpcmUuMjdcIjogXCLmmL7npLrlnIZcIixcbiAgXCJjYXNlcy9jb2xsaWRlci9TaGFwZS5maXJlLjM0XCI6IFwi5pi+56S655uS5a2QXCIsXG4gIFwiY2FzZXMvY29sbGlkZXIvU2hhcGUuZmlyZS40M1wiOiBcIuaYvuekuuWkmui+ueW9olwiLFxuICBcImNhc2VzL2NvbGxpZGVyL1NoYXBlLmZpcmUuNTBcIjogXCLmmL7npLrlnIZcIixcbiAgXCJjYXNlcy9jb2xsaWRlci9TaGFwZS5maXJlLjU3XCI6IFwi5pi+56S655uS5a2QXCIsXG4gIFwiY2FzZXMvbW90aW9uU3RyZWFrL01vdGlvblN0cmVhay5maXJlLjFcIjogXCLlj6rlnKggV2ViR0wg546v5aKD5LiL55Sf5pWI77yBXCIsXG4gIFwiY2FzZXMvbW90aW9uU3RyZWFrL01vdGlvblN0cmVhay5maXJlLjJcIjogXCLmlLnlj5jmi5blsL5cIixcbiAgXCJjYXNlcy9zcGluZS9TcGluZUJveS5maXJlLjExXCI6IFwi6LCD6K+V5o+S5qe9XCIsXG4gIFwiY2FzZXMvc3BpbmUvU3BpbmVCb3kuZmlyZS4xOFwiOiBcIuiwg+ivleWFs+iKglwiLFxuICBcImNhc2VzL3NwaW5lL1NwaW5lQm95LmZpcmUuMjVcIjogXCLml7bpl7TnvKnmlL5cIixcbiAgXCJjYXNlcy9zcGluZS9TcGluZUJveS5maXJlLjM2XCI6IFwi5YGc5q2iXCIsXG4gIFwiY2FzZXMvc3BpbmUvU3BpbmVCb3kuZmlyZS40M1wiOiBcIui1sFwiLFxuICBcImNhc2VzL3NwaW5lL1NwaW5lQm95LmZpcmUuNTBcIjogXCLot5FcIixcbiAgXCJjYXNlcy9zcGluZS9TcGluZUJveS5maXJlLjU4XCI6IFwi6LezXCIsXG4gIFwiY2FzZXMvc3BpbmUvU3BpbmVCb3kuZmlyZS42NVwiOiBcIuWwhOWHu1wiLFxuICBcImNhc2VzL3RpbGVkbWFwL1B1enpsZS5maXJlLjE4XCI6IFwi5L2g6LWi5LqGXCIsXG4gIFwiY2FzZXMvdGlsZWRtYXAvUHV6emxlLmZpcmUuMjFcIjogXCLph43mlrDlvIDlp4tcIixcbiAgXCJyZXMvcHJlZmFicy9MaXN0SXRlbS5wcmVmYWIuMlwiOiBcIkxhYmVsIHNzc3NcIixcbiAgXCJyZXMvcHJlZmFicy9Nb25zdGVyLnByZWZhYi4zXCI6IFwi5ZCN5a2XOlwiLFxuICBcInJlcy9wcmVmYWJzL01vbnN0ZXIucHJlZmFiLjExXCI6IFwi562J57qnIDpcIixcbiAgXCJyZXMvcHJlZmFicy9Nb25zdGVyLnByZWZhYi4xOVwiOiBcIuihgOmHjyA6XCIsXG4gIFwicmVzL3ByZWZhYnMvTW9uc3Rlci5wcmVmYWIuMjdcIjogXCLmlLvlh7sgOlwiLFxuICBcInJlcy9wcmVmYWJzL01vbnN0ZXIucHJlZmFiLjM1XCI6IFwi6Ziy5b6hIDpcIixcbiAgXCJyZXMvcHJlZmFicy9sb2FkSXRlbS5wcmVmYWIuMVwiOiBcIkxhYmVsXCIsXG4gIFwicmVzb3VyY2VzL3Rlc3QgYXNzZXRzL3ByZWZhYi5wcmVmYWIuMlwiOiBcIui/meaYr+S4gOS4qumihOWItlwiLFxuICBcInJlc291cmNlcy90ZXN0IGFzc2V0cy9zY2VuZS5maXJlLjNcIjogXCLov5Tlm57otYTmupDliqDovb3lnLrmma9cIixcbiAgXCJyZXNvdXJjZXMvdGVzdCBhc3NldHMvc2NlbmUuZmlyZS42XCI6IFwi6L+U5ZueXCIsXG4gIFwic2NyaXB0cy9HbG9iYWwvTWVudS5qcy4xXCI6IFwi6K+05piO5pqC57y6XCJcbn07XG5cbmNjLl9SRnBvcCgpOyJdfQ==

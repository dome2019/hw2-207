if (self.CavalryLogger) { CavalryLogger.start_js(["OKmP5"]); }

__d("SwapButtonDEPRECATED",["Arbiter","CSS","Event","Focus"],(function(a,b,c,d,e,f){function a(a,c,d){this._swapperButton=a,this._swappeeButton=c,b("Event").listen(a,"click",this.swap.bind(this)),d&&b("Event").listen(c,"click",this.unswap.bind(this)),b("Arbiter").subscribe("SwapButtonDEPRECATED/focusOnJoinButton",this.setFocusOnSwapper.bind(this),"all")}Object.assign(a.prototype,{_swapperButton:null,_swappeeButton:null,swap:function(a){b("CSS").hide(this._swapperButton),b("CSS").show(this._swappeeButton),a!==!1&&b("Focus").setWithoutOutline(this._swappeeButton)},unswap:function(a){b("CSS").show(this._swapperButton),b("CSS").hide(this._swappeeButton),a!==!1&&b("Focus").setWithoutOutline(this._swapperButton)},toggle:function(){b("CSS").toggle(this._swapperButton),b("CSS").toggle(this._swappeeButton)},setFocusOnSwapper:function(){this._swapperButton.focus()}});e.exports=a}),null);
__d("TahoeNotificationsHoverButton",["csx","cx","Arbiter","BasicFBNux","CSS","DOM","Event","MenuStaticItem","SubscribeButton","gkx"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i={ALL:"subscribe_all_live_notifications",SOME:"subscribe_suggested_live_notifications",NONE:"subscribe_none_live_notifications"},j=6047;a=function(){"use strict";__p&&__p();function a(a,c,d,e,f,g){__p&&__p();var h=this;this.$2=a;this.$1=c;this.$3=d;this.$5=e;this.$6=f;this.$4=(a=g)!=null?a:j;this.$2&&this.$2.subscribe("itemclick",function(a,c){if(c.item instanceof b("MenuStaticItem"))return;a=c.item.getValue();this.setSelected(a)}.bind(this));this.$6&&b("DOM").scry(this.$1,"._1ovk").map(function(a){b("Event").listen(a,"click",function(){a.value===i.ALL?h.setSelected(i.SOME):h.setSelected(i.ALL),h.$3&&h.$3.hide(),h.$3=null})});b("Arbiter").subscribe(b("SubscribeButton").SUBSCRIBED,function(a,c){if(c.profile_id!=h.$5)return;b("gkx")("823007")?h.getSelected()===i.SOME&&(h.$3&&!h.$3.isShown()&&(h.$3.show(),b("BasicFBNux").onView(h.$4))):b("CSS").shown(h.$1)||(b("CSS").show(h.$1),h.setSelected(i.SOME),h.$3&&!h.$3.isShown()&&(h.$3.show(),b("BasicFBNux").onView(h.$4)))});b("Arbiter").subscribe(b("SubscribeButton").UNSUBSCRIBED,function(a,c){if(c.profile_id!=h.$5)return;b("gkx")("823007")?h.setSelected(i.SOME):b("CSS").hide(h.$1);h.$3&&h.$3.hide();h.$3=null})}var c=a.prototype;c.getSelected=function(){var a=b("DOM").scry(this.$1,"._1ovk").map(function(a){return b("CSS").shown(a)?a.value:null});return a.find(function(a){return a!=null})};c.setSelected=function(a){this.$2&&this.$2.forEachItem(function(c){if(!c.getValue)return;var d=c.getRoot();c.getValue()===a?b("CSS").addClass(d,"_52-0"):b("CSS").removeClass(d,"_52-0")}),b("DOM").scry(this.$1,"._1ovk").map(function(c){if(!c.value)return;c.value===a?b("CSS").show(c):b("CSS").hide(c)})};return a}();e.exports=a}),null);
__d("ContextualLayerInlineTabOrder",["DOM","DOMTraverser","Event","Focus","Keys","SubscriptionsHandler","TabbableElements","getOrCreateDOMID"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._layer=a,this._isSetup=!1,this._ignoreFocus=!1,this._layerFocused=!0,this._layerRoot=this._layer.getContentRoot(),this._layerID=b("getOrCreateDOMID")(this._layerRoot),this._mutedTabbables=new Map([]),this._subscriptions=new(b("SubscriptionsHandler"))(),this._tabbableLayerElements=[]}var c=a.prototype;c.enable=function(){this._subscriptions.addSubscriptions(this._layer.subscribe("aftershow",this._onAfterShow.bind(this)),this._layer.subscribe("hide",this._onAfterHide.bind(this))),this._layer.isShown()&&this._onAfterShow()};c.disable=function(){this._subscriptions.release(),this._isSetup=!1};c._getContext=function(){return this._layer.getCausalElement()};c._getContextOwns=function(){var a=this._getContext();if(!a)return[];a=(a.getAttribute("aria-owns")||"").trim();a=a?a.match(/[^ ]+/g):[];return a};c._identifyTabbableElements=function(){this._tabbableLayerElements=b("TabbableElements").find(this._layerRoot),!this._tabbableLayerElements.length&&!this._mutedTabbables.size&&this._layerRoot.setAttribute("tabindex","0"),this._layerRoot.tabIndex>=0&&this._tabbableLayerElements.unshift(this._layerRoot)};c._onAfterShow=function(){this._setupTabBehavior();var a=this._getContext(),b=this._getContextOwns();a&&!b.includes(this._layerID)&&(b.push(this._layerID),a.setAttribute("aria-owns",b.join(" ")))};c._onAfterHide=function(){var a=this._getContext();if(a){var b=this._getContextOwns(),c=b.indexOf(this._layerID);c>-1&&(b.splice(c,1),a.setAttribute("aria-owns",b.join(" ")))}};c._setupTabBehavior=function(){if(!this._isSetup){var a=this._getContext();if(!this._layerRoot||!a)return;this._setupTabTriggers();this._setupTabToggle();this._isSetup=!0}};c._setupTabTriggers=function(){var a=this._getContext();b("TabbableElements").isTabbable(a)||a.setAttribute("tabindex","0");this._subscriptions.addSubscriptions(b("Event").listen(a,"keyup",this._checkNUXFocus.bind(this)),b("Event").listen(a,"keydown",this._checkNUXFocus.bind(this)),b("Event").listen(this._layerRoot,"keydown",this._checkContextFocus.bind(this)),b("Event").listen(this._layerRoot,"layerFocus",this._setNUXFocusStart.bind(this)),b("Event").listen(this._layerRoot,"layerFocusEnd",this._setNUXFocusEnd.bind(this)),b("Event").listen(this._layerRoot,"tempFocusIgnore",this._tempIgnoreFocus.bind(this)))};c._setupTabToggle=function(){this._handleLayerBlur(),this._subscriptions.addSubscriptions(b("Event").listen(document.documentElement,"click",this._checkForFocus.bind(this)),b("Event").listen(document.documentElement,"keydown",this._checkForFocus.bind(this)))};c._handleLayerBlur=function(){__p&&__p();if(!this._layerFocused)return;this._identifyTabbableElements();this._tabbableLayerElements.forEach(function(a){if(!this._mutedTabbables.has(a)){var b=a.getAttribute("tabindex");a.setAttribute("tabindex","-1");this._mutedTabbables.set(a,b)}},this);this._layerFocused=!1};c._handleLayerFocus=function(){__p&&__p();if(this._layerFocused)return;for(var a=this._mutedTabbables,b=Array.isArray(a),c=0,a=b?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var d;if(b){if(c>=a.length)break;d=a[c++]}else{c=a.next();if(c.done)break;d=c.value}d=d;var e=d[0];d=d[1];d===null?e.removeAttribute("tabindex"):e.setAttribute("tabindex",d)}this._mutedTabbables.clear();this._layerFocused=!0};c._checkNUXFocus=function(a){__p&&__p();if(this._ignoreFocus){a.preventDefault();this._ignoreFocus=!1;return}if(a.getTarget()!==this._getContext()||!this._layer.isShown())return;var c=b("Event").getKeyCode(a),d=this._getContextOwns();if(!d.length||c!==b("Keys").TAB)return;c=a.getModifiers();c=c.shift;var e=d[0]===this._layerID;d=d[d.length-1]===this._layerID;(a.type==="keydown"&&c&&d||a.type==="keyup"&&!c&&e)&&(a.preventDefault(),b("Event").fire(this._layerRoot,c?"layerFocusEnd":"layerFocus"))};c._setNUXFocusStart=function(){this._handleLayerFocus(),this._identifyTabbableElements(),b("Focus").set(this._tabbableLayerElements[0])};c._setNUXFocusEnd=function(){this._handleLayerFocus(),this._identifyTabbableElements(),b("Focus").set(this._tabbableLayerElements[this._tabbableLayerElements.length-1])};c._tempIgnoreFocus=function(){this._ignoreFocus=!0};c._checkContextFocus=function(a){var c=b("Event").getKeyCode(a),d=a.getModifiers();d=d.shift;this._handleLayerFocus();this._identifyTabbableElements();if(!this._tabbableLayerElements.length||c!==b("Keys").TAB||!this._getContext())return;c=this._tabbableLayerElements[0];var e=this._tabbableLayerElements[this._tabbableLayerElements.length-1];a.getTarget()===e&&!d?this._setFocusAfterLayer()&&a.preventDefault():a.getTarget()===c&&d&&(this._setFocusBeforeLayer()&&a.preventDefault())};c._isTabbableNode=function(a){return b("TabbableElements").isTabbable(a)&&!b("DOM").contains(this._layerRoot,a)};c._setFocusBeforeLayer=function(){__p&&__p();var a=this._getContextOwns();if(!a||!a.length)return!1;if(a[0]===this._layerID){var c=b("DOMTraverser").previousFilteredNode(document.body,this._getContext(),this._isTabbableNode.bind(this));b("Focus").set(c);return!0}if(a.includes(this._layerID)){c=a[a.indexOf(this._layerID)-1];return this._focusOnElement(c,!0)}return!1};c._setFocusAfterLayer=function(){__p&&__p();var a=this._getContextOwns();if(!a||!a.length)return!1;if(a[a.length-1]===this._layerID){this._refocusOnContext();return!0}if(a.includes(this._layerID)){a=a[a.indexOf(this._layerID)+1];return this._focusOnElement(a,!1)}return!1};c._focusOnElement=function(a,c){a=document.getElementById(a);if(!a)return!1;b("Event").fire(a,c?"layerFocusEnd":"layerFocus");this._handleLayerBlur();return!0};c._refocusOnContext=function(a){a=this._getContext();var c=this._getContextOwns();b("Event").fire(document.getElementById(c[0]),"tempFocusIgnore");this._handleLayerBlur();a&&(a.tabIndex==null?(a.tabIndex=-1,b("Focus").setWithoutOutline(a)):b("Focus").set(a))};c._checkForFocus=function(a){a=a.getTarget();var c=this._layer.getContentRoot();c=b("DOM").contains(c,a);!this._ignoreFocus&&!this._layerFocused&&c&&this._handleLayerFocus();this._layerFocused&&!c&&this._handleLayerBlur()};return a}();e.exports=a}),null);
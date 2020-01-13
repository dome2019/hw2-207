if (self.CavalryLogger) { CavalryLogger.start_js(["f1MHR"]); }

__d("NotificationBeeperItemCloseButton.react",["cx","fbt","React","XUIAbstractGlyphButton.react"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=h._("\u0e1b\u0e34\u0e14");return b("React").jsx(b("XUIAbstractGlyphButton.react"),babelHelpers["extends"]({},this.props,{className:"_3soc",title:a,label:a,labelIsHidden:!0}))};return c}(b("React").Component);e.exports=a}),null);
__d("NotificationBeeperItemContents.react",["cx","invariant","Animation","AsyncRequest","Bootloader","FBProfilePhotoShadow.react","Image.react","ImageBlock.react","NotificationBeeperItemCloseButton.react","NotificationInterpolator","NotificationURI","NotificationUserActions","React","ReactDOM","TextWithEntities.react","Timestamp.react","URI","notificationListRendererOpenNotification"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.isLiveVideo=null,d.onClick=function(a){__p&&__p();d.$1();d.props.onHide();if(a.button===1||a.altKey||a.ctrlKey||a.metaKey||a.shiftKey)return;var c=d.props.notification;b("notificationListRendererOpenNotification")(a,c);if(a.isDefaultPrevented()===!0)return;var e=c.primerAttributes;if(e&&(e.rel==="async"||e.rel==="async-post")){var f=new(b("AsyncRequest"))(e.ajaxify||c.url);e.rel==="async-post"&&f.setMethod("POST");f.send();a.preventDefault()}else e&&e.rel==="theater"?(a.persist(),b("Bootloader").loadModules(["PhotoSnowlift"],function(b){b.bootstrap(e.ajaxify||c.url,a.currentTarget)},"NotificationBeeperItemContents.react"),a.preventDefault()):e&&(e.rel==="dialog"||e.rel==="dialog-post")&&(b("Bootloader").loadModules(["AsyncDialog"],function(b){b.bootstrap(e.ajaxify||c.url,a.currentTarget,"dialog")},"NotificationBeeperItemContents.react"),a.preventDefault())},d.onClose=function(){d.$1(),d.props.onHide()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$1=function(){b("NotificationUserActions").markNotificationsAsRead([this.props.notification.alert_id])};d.$2=function(){new(b("Animation"))(b("ReactDOM").findDOMNode(this.refs.inner)).from("opacity","0").to("opacity","1").duration(200).go()};d.$3=function(){var a=this.$4();a=JSON.parse(a);return a.content_id};d.$5=function(){if(this.isLiveVideo===null){var a=this.$4();this.isLiveVideo=a.indexOf("live_video")!==-1}return!!this.isLiveVideo};d.$4=function(){return this.props.notification.tracking||"{}"};d.componentDidMount=function(){var a=this;this.props.onReadyToHide(this.props.notification.alert_id);this.$5()&&b("Bootloader").loadModules(["VideoPlayerMetaData","PhotoSnowliftVideoNode"],function(b,c){c=a.$3();c&&b.genVideoData(c)},"NotificationBeeperItemContents.react")};d.componentDidUpdate=function(a){(a.notification.alert_id!==this.props.notification.alert_id||a.notification.creation_time!==this.props.notification.creation_time)&&(this.$2(),this.props.onReadyToHide(this.props.notification.alert_id))};d.render=function(){var a=this.props.notification;a.title!==null||h(0,17664,a.notif_type);var c=a.thumbnail?a.thumbnail.uri:null,d=a.icon?a.icon.uri:null,e=b("NotificationURI").localize(new(i||(i=b("URI")))(a.url));return b("React").jsxs("div",{ref:"inner",className:this.props.className,children:[b("React").jsx(b("NotificationBeeperItemCloseButton.react"),{onClick:this.onClose}),b("React").jsx("a",{href:e,onClick:this.onClick,className:"_3soi",children:b("React").jsxs(b("ImageBlock.react"),{className:"_3soj",spacing:"medium",children:[b("React").jsx(b("FBProfilePhotoShadow.react"),{className:"_2yt7",children:b("React").jsx(b("Image.react"),{src:c,className:"_3sok"+(c?"":" hidden_elem")})}),b("React").jsxs("div",{className:"_3sol",children:[b("React").jsx(b("TextWithEntities.react"),{renderEmoticons:!0,renderEmoji:!0,interpolator:b("NotificationInterpolator"),ranges:a.title.ranges,aggregatedranges:a.title.aggregated_ranges,text:a.title.text}),b("React").jsxs(b("ImageBlock.react"),{className:"_3som",children:[b("React").jsx(b("Image.react"),{className:"_1x8t"+(d?"":" hidden_elem"),src:d}),b("React").jsx(b("Timestamp.react"),{time:a.timestamp.time,text:a.timestamp.text,verbose:a.timestamp.verbose})]})]})]})})]})};return c}(b("React").Component);e.exports=a}),null);
__d("NotificationBeeperItem.react",["cx","CSSFade","NotificationBeeperConst","NotificationBeeperItemContents.react","NotificationBeeperItemRenderersList","React","ReactDOM","Style","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("NotificationBeeperConst").FADE_OUT_LENGTH;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={encounteredException:!1,fadedIn:!1,hidden:!1},c.$3=function(){c.setState({hidden:!0})},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidCatch2=function(){this.props.onReadyToHide(this.props.notification.alert_id),this.setState(function(a){return babelHelpers["extends"]({},a,{encounteredException:!0})})};d.componentDidMount=function(){var a=this;b("setTimeoutAcrossTransitions")(function(){a.setState({fadedIn:!0})},50);this.props.onInserted(this.props.notification.alert_id)};d.componentWillUnmount=function(){this.$1&&this.$1.cancel()};d.render=function(){var a=this;if(this.state.encounteredException)return null;var c=this.props.notification,d=c.renderer_data;c=c.tracking;d=this.$4(d);return b("React").jsx("li",{className:this.state.hidden?"hidden_elem":"",ref:function(b){return a.$2=b},"data-gt":c,children:b("React").jsx(d,{className:"_3sod"+(this.state.fadedIn?" _3soe":""),notification:this.props.notification,onHide:this.$3,onReadyToHide:this.props.onReadyToHide,onPreventHide:this.props.onPreventHide})})};d.componentDidUpdate=function(a,c,d){if(!this.$2)return;a=b("ReactDOM").findDOMNode(this.$2);if(!a)return;this.props.fadingOut?(this.$1=b("CSSFade").hide(a,{callback:this.$3,duration:h}),a.style.transitionDuration="0ms"):(this.$1&&(this.$1.cancel(),this.$1=void 0),b("Style").set(a,"opacity","1"))};d.$4=function(a){return a&&a.__typename==="LiveVideoNotificationRendererData"&&a.video_id==null?b("NotificationBeeperItemContents.react"):b("NotificationBeeperItemRenderersList")[a&&a.__typename]||b("NotificationBeeperItemContents.react")};return c}(b("React").Component);e.exports=a}),null);
__d("NotificationBeeper.react",["cx","Arbiter","ChannelConstants","FacebookWebNotificationsSubscription","NotificationBeeperConst","NotificationBeeperItem.react","NotificationConstants","NotificationSound","NotificationUpdates","NotificationUserActions","React","SubscriptionsHandler","clearTimeout","setTimeoutAcrossTransitions","shield"],(function(a,b,c,d,e,f,g){__p&&__p();var h=(a=b("NotificationBeeperConst")).ACTIVE_DELAY_LONG,i=a.BeepStates,j=a.FADE_OUT_LENGTH,k=a.IDLE_DELAY;c=b("NotificationConstants").PayloadSourceType;var l=c.CLIENT,m=c.OTHER_APPLICATION;d=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={beeps:{},fading:!1,hovering:!1,soundEnabled:d.props.soundEnabled},d.onMouseEnter=function(){d.$2&&b("clearTimeout")(d.$2);var a=[],c=d.state.beeps;Object.keys(c).forEach(function(b){c[b].state!=i.PENDING?a.push(b):c[b].state=i.RENDERED});b("NotificationUserActions").markNotificationsAsSeen(a);d.setState({hovering:!0,fading:!1,beeps:c})},d.onMouseLeave=function(){d.$5(h),d.setState({hovering:!1})},d.$6=function(a){d.state.hovering||d.$5(),d.state.soundEnabled&&d.state.beeps[a].shouldPlaySound&&(d.$3||(d.$3=new(b("NotificationSound"))(d.props.soundPath)),d.$3.play(a))},d.onReadyToHide=function(a,b){d.setState(function(b){var c=babelHelpers["extends"]({},b.beeps);c[a]=babelHelpers["extends"]({},c[a],{state:i.READY_TO_HIDE});return babelHelpers["extends"]({},b,{beeps:c})}),d.$2||d.$5(b)},d.$8=function(a){d.setState(function(b){var c=babelHelpers["extends"]({},b.beeps);c[a]=babelHelpers["extends"]({},c[a],{state:i.RENDERED});return babelHelpers["extends"]({},b,{beeps:c})})},d.$7=function(){d.$2=null,d.setState(function(a){var b=babelHelpers["extends"]({},a.beeps);Object.keys(b).forEach(function(a){b[a].state==i.READY_TO_HIDE&&(b[a]=babelHelpers["extends"]({},b[a],{state:i.FADING_OUT}))});return babelHelpers["extends"]({},a,{beeps:b,fading:!0})}),b("setTimeoutAcrossTransitions")(b("shield")(d.$9,babelHelpers.assertThisInitialized(d)),j)},d.$9=function(){__p&&__p();if(!d.state.fading)return;d.setState(function(a){var b=babelHelpers["extends"]({},a.beeps);Object.keys(b).forEach(function(a){b[a].state==i.FADING_OUT&&delete b[a]});return babelHelpers["extends"]({},a,{beeps:b,fading:!1})});b("setTimeoutAcrossTransitions")(function(){d.setState(function(a){var b=babelHelpers["extends"]({},a.beeps);Object.keys(b).forEach(function(a){b[a].state==i.PENDING&&(b[a]=babelHelpers["extends"]({},b[a],{state:i.RENDERED}))});return babelHelpers["extends"]({},a,{beeps:b})})})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.UNSAFE_componentWillMount=function(){__p&&__p();var a=this,c=new(b("SubscriptionsHandler"))();c.addSubscriptions(b("NotificationUpdates").subscribe("update-notifications",function(b,c){if(c.payloadsource===m||c.payloadsource===l){b=c.nodes;b&&b.length&&a.handleBeepChanges(a.$4(b))}}),b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("notif_sound_pref_changed"),function(b,c){a.setState({soundEnabled:c.obj.enabled})}));c.addSubscriptions(b("FacebookWebNotificationsSubscription").subscribe({event:"NEW_BEEPER",callback:function(b){var c=b.notification;b=b.should_play_sound;if(c!==null){var d;a.handleBeepChanges((d={},d[c.alert_id]={notification:c,shouldPlaySound:b},d))}}}));this.$1=c;b("Arbiter").inform("NotificationBeeper/mounted",null,"persistent")};d.componentWillUnmount=function(){this.$1&&this.$1.release(),this.$1=null};d.$5=function(a){this.$2&&b("clearTimeout")(this.$2),this.$2=b("setTimeoutAcrossTransitions")(b("shield")(this.$7,this),a==null?k:a)};d.handleBeepChanges=function(a){var b=this.state.fading?i.PENDING:i.RENDERED,c=!1,d=babelHelpers["extends"]({},this.state.beeps);Object.keys(a).reverse().forEach(function(e){var f=a[e],g=d[e];(!g||g.notification.alert_id!==f.notification.alert_id||g.notification.creation_time!==f.notification.creation_time)&&(g&&(c=!0,delete d[e]),d[e]=babelHelpers["extends"]({},f,{state:b}))});c&&this.$5();this.setState({beeps:d})};d.render=function(){var a=this,c=this.state.beeps,d=[];Object.keys(c).reverse().forEach(function(e){var f=c[e];if(f.state==i.PENDING)return;d.push(b("React").jsx(b("NotificationBeeperItem.react"),{fadingOut:a.state.fading&&f.state==i.FADING_OUT,notification:f.notification,onInserted:a.$6,onReadyToHide:a.onReadyToHide,onPreventHide:a.$8},e))},this);var e=d.length>0;e=(e?"":"hidden_elem")+" _50d1";return b("React").jsx("ul",{ref:"container",className:e,"data-gt":this.props.tracking,"data-testid":"beeper_list",onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,children:d})};d.$4=function(a){return a.reduce(function(a,b){a[b.alert_id]={notification:b,shouldPlaySound:!1};return a},{})};return c}(b("React").Component);e.exports=d}),null);
__d("NotificationBeeperContainer",["NotificationBeeper.react","React","ReactDOM"],(function(a,b,c,d,e,f){a={renderBeeper:function(a,c){b("ReactDOM").render(b("React").jsx(b("NotificationBeeper.react"),babelHelpers["extends"]({},a)),c)}};e.exports=a}),null);
__d("LiveVideoBeeperItemContents.react",["BootloadOnRender.react","JSResource","LazyComponent.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx(b("BootloadOnRender.react"),{loader:b("JSResource")("LiveVideoBeeperItemContentsImpl.react").__setRef("LiveVideoBeeperItemContents.react"),placeholder:b("React").jsx("div",{}),component:b("React").jsx(b("LazyComponent.react"),babelHelpers["extends"]({},this.props,{ref:"itemContents"}))})};return c}(b("React").Component);e.exports=a}),null);
__d("FantaTabMainPlaceholder.react",["cx","React","XUISpinner.react"],(function(a,b,c,d,e,f,g){"use strict";a=function(){var a;return(a=b("React")).jsx("div",{className:"_59v1",children:a.jsx("div",{className:"_5qi9 _5qib",children:a.jsx("div",{className:"_3_9e _s0f _50mz _50m_ fbNub _50-v opened _27_3",children:a.jsx("div",{className:"fbNubFlyout fbDockChatTabFlyout uiContextualLayerParent _6vu1",children:a.jsx("div",{className:"fbNubFlyoutOuter",children:a.jsx("div",{className:"fbNubFlyoutInner _6vu1 _6z9d",children:a.jsx("div",{className:"_5-kq",children:a.jsx(b("XUISpinner.react"),{})})})})})})})})};e.exports=a}),null);
__d("FantaTabsSlimApp",["BootloadOnRender.react","ChatPerfInstrumentation","FantaTabMainPlaceholder.react","FantaTabsAppBase","JSResource","LazyComponent.react","React","ReactDOM","UserActivity","emptyFunction","gkx","ifRequired","setImmediate"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=500;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$FantaTabsSlimApp1=!1,d.$FantaTabsSlimApp3=function(a,c){d.$FantaTabsSlimApp1?b("ifRequired")("FantaMessageActions",function(d){b("setImmediate")(function(){d.receivedNewMessage(a,c)})}):d.$FantaTabsSlimApp2(function(){b("ifRequired")("FantaMessageActions",function(d){b("setImmediate")(function(){d.receivedNewMessage(a,c)})})})},c)||babelHelpers.assertThisInitialized(d)}var e=c.prototype;e.getPumpedUp=function(a){this.$FantaTabsSlimApp1?a():this.$FantaTabsSlimApp2(a)};e.silentPumpUp=function(){this.$FantaTabsSlimApp1||this.$FantaTabsSlimApp2(b("emptyFunction"),!0)};e.getViewComponent=function(a){a=a?b("React").jsx("div",{}):b("React").jsx(b("FantaTabMainPlaceholder.react"),{});return b("React").jsx(b("BootloadOnRender.react"),{component:b("React").jsx(b("LazyComponent.react"),{loadDataOnMount:!1}),loader:b("JSResource")("FantaMercuryTabsWithMain.react").__setRef("FantaTabsSlimApp"),placeholder:a})};e.initializeFantaData=function(a){__p&&__p();var c=this;d(["FantaCookieUtil","MercuryThreadInformer","PresenceState"],function(d,e,f){__p&&__p();f.registerStateLoader(function(e){if(c.$FantaTabsSlimApp1)b("ifRequired")("FantaTabActions",function(c){b("ifRequired")("FantaAppStore",function(b){c.loadFromData(d.convertCookieData(e,b.getState().tabGroup,a))})});else{var f=d.convertCookieData(e,null,a);f&&f.tabs.length>0&&c.$FantaTabsSlimApp2(function(){b("ifRequired")("FantaTabActions",function(a){a.loadFromData(f)})})}}),f.doSync(),e.get().subscribe("threads-updated",function(a,c){b("ifRequired")("FantaGetMessageActions",function(a){Object.keys(c).forEach(function(c){b("setImmediate")(function(){a.refreshThread(c)})})})}),b("ChatPerfInstrumentation").logInitData()})};e.$FantaTabsSlimApp2=function(a,c){__p&&__p();var e=this;b("ifRequired")("FantaAppStore",function(b){a()},function(){__p&&__p();d(["FantaAppStore","FantaCookieUtil","FantaMessageActions","FantaTabActions","FantaTabViewportManager","PresenceState"],function(d,f,i,j,k,l){l.registerStateStorer(function(a){if(!b("UserActivity").isOnTab()&&!b("UserActivity").isActive(h)&&!b("gkx")("678595"))return a;var c=d.getState().tabGroup;if(!g||g&&!g.equals(c)){g=c;return f.createCookieData(c,a)}else return a}),b("ReactDOM").render(e.getViewComponent(c),e.tabsElem),k.init(e.tabsElem),e.$FantaTabsSlimApp1=!0,a()})})};e.initializeFantaUI=function(){var a=this;d(["FantaMercuryThreadEventsBootloaded","FantaMessageActions","FantaTabActions","FantaTabViewportManager","FBRTCMessageHandler","MercuryBrowserAlerts"],function(c,d,e,f,g,h){g.init(),h.init(),c.registerForNewLogMessage(a.$FantaTabsSlimApp3),c.registerForNewMessage(a.$FantaTabsSlimApp3),b("ChatPerfInstrumentation").logInitUI(),b("ChatPerfInstrumentation").logDisplayDone()})};return c}(b("FantaTabsAppBase"));e.exports=new a()}),null);
__d("NotificationJewelReminderLoader",["gkx","promiseDone"],(function(a,b,c,d,e,f){e.exports={init:function(a,c){b("promiseDone")(a.load(),function(a){if(b("gkx")("1152566"))return;a.init(c)})}}}),null);
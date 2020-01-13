if (self.CavalryLogger) { CavalryLogger.start_js(["q+EdY"]); }

__d("LiveRHCUtils",[],(function(a,b,c,d,e,f){"use strict";a="live_rhc_collapse";e.exports=a}),null);
__d("VideoScrollTracker",["Scroll"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){this.$2=-1,this.$3=!1,this.$4=a}var c=a.prototype;c.$5=function(){return this.$4?b("Scroll").getTop(this.$4):null};c.onScroll=function(){if(this.$3){var a=this.$5();a!==null&&a!==void 0&&(this.$1=a<this.$2?"up":"down",this.$6(a))}};c.$6=function(a){this.$2=a};c.start=function(){this.$3=!0;var a=this.$5();a!==null&&a!==void 0&&this.$6(a)};c.stop=function(){this.$3=!1};c.getLastScrollDirection=function(){return this.$1};c.destroy=function(){this.stop(),this.$4=null};return a}();e.exports=a}),null);
__d("DocumentFocusForMutedVideoAutoplayRule",["VideoAutoplayRule"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(b,a);function b(b){return a.call(this,b)||this}var c=b.prototype;c.calculateAutoplayScore=function(){return this.isEnabled()?this.$DocumentFocusForMutedVideoAutoplayRule1():1};c.$DocumentFocusForMutedVideoAutoplayRule1=function(){var a=this.videoUnit.getVideoPlayerController();return a&&a.isMuted()?document.hasFocus()?1:0:1};return b}(b("VideoAutoplayRule"));e.exports=a}),null);
__d("VideoAutoplayControllerAbortLoadingHelper",["invariant","VideoPlayerAbortLoadingExperiment","VideoPlayerExperiments","VideoPlayerShakaGlobalConfig","getViewportDimensions"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(){this.$1=new Set(),this.$2=new Map()}var c=a.prototype;c.maybeAbortLoading=function(){__p&&__p();for(var c=this.$1,d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=c.length)break;f=c[e++]}else{e=c.next();if(e.done)break;f=e.value}f=f;var h=b("VideoPlayerShakaGlobalConfig").getString("defer_which_video_to_abort_loading_decisioning_logic","all"),i=f.getVideoPlayerController();i=i?i.isLiveVideo():null;if(i!==null&&(h==="vod"&&i||h==="live"&&!i))continue;if(!f.isState("playing")&&typeof f.abortLoading==="function"&&a.shouldAbortLoadingVideoUnit(f))b("VideoPlayerExperiments").abortLoadingHelperNegativeYAbortLoading?this.$3(f):this.$4(f);else if(b("VideoPlayerExperiments").abortLoadingHelperNegativeYAbortLoading&&f.isState("playing")){h=this.$2.get(f);!h&&g(0,3497);h&&h.abortedLoading&&(h.abortedLoading=!1)}}};c.$3=function(a){if(b("VideoPlayerExperiments").abortLoadingHelperBoundedReloading){var c=b("getViewportDimensions")().height/-2;a.getDistanceToViewport()<b("VideoPlayerExperiments").abortedLoadingPixelBoundary+c&&!a.isVisible()?this.$5(a):a.getDistanceToViewport()>b("VideoPlayerExperiments").reloadingPixelBoundary+c&&this.$6(a)}else a.getDistanceToViewport()<0&&!a.isVisible()&&this.$5(a)};c.addVideoUnit=function(a){this.$1.has(a)||(this.$1.add(a),this.$2.set(a,{y:a.getDistanceToViewport(),timestamp:new Date().valueOf(),v:0,abortedLoading:!1}))};c.removeVideoUnit=function(a){this.$1["delete"](a),this.$2["delete"](a)};c.calculateFutureScrollPosition=function(a){var b=a.y1-a.y0,c=a.t1-a.t0;b=b/c;var d=b-a.v0;d=d/c;c=a.t;c=d*c*c/2+c*b+a.y1;return{v1:b,a:d,S:c}};c.preloadClosestVideoUnits=function(a){var b=this;this.$7(a).forEach(function(a){return b.$6(a)})};c.$7=function(a){return Array.from(this.$1).filter(function(a){return a.getDistanceToViewport()>=0}).sort(function(a,b){return a.getDistanceToViewport()-b.getDistanceToViewport()}).slice(0,a)};c.$6=function(a){var b=this.$2.get(a);!b&&g(0,3497);var c;b&&(c=b.abortedLoading,b.abortedLoading=!1);c&&typeof a.preload==="function"&&a.preload()};c.$5=function(a){var b=this.$2.get(a);!b&&g(0,3497);var c;b&&(c=b.abortedLoading,b.abortedLoading=!0);!c&&typeof a.abortLoading==="function"&&a.abortLoading()};c.$4=function(a){__p&&__p();var c=b("getViewportDimensions")().height,d=1600;c=c/2;var e=c+d;c=-c;c=c-d;d=this.$2.get(a);!d&&g(0,3497);if(!d)return;var f=a.getDistanceToViewport(),h=d.y;d.y=f;var i=new Date().valueOf(),j=d.timestamp;d.timestamp=i;var k=d.v;if(c<=f&&e>=f){d.abortedLoading&&this.$6(a);return}var l=500;h=this.calculateFutureScrollPosition({y0:h,y1:f,t0:j,t1:i,v0:k,t:l});d.v=h.v1;j=h.S;d.abortedLoading?(f<c&&j>c||f>e&&j<e)&&this.$6(a):this.$5(a)};a.shouldAbortLoadingVideoUnit=function(a){var c=b("VideoPlayerShakaGlobalConfig").getBool("abort_loading_decisioning_logic",!1),d=!c,e=!0;if(a){typeof a.getIsInChannel==="function"&&(e=a.getIsInChannel());typeof a.getSource==="function"&&c&&(d=a.getSource()==="tahoe");return b("VideoPlayerAbortLoadingExperiment").canAbort&&!e&&!d}return!1};return a}();e.exports=a}),null);
__d("VideoAutoplayControllerBase",["Arbiter","DesktopHscrollUnitEventConstants","Event","SubscriptionsHandler","VideoAutoplayControllerAbortLoadingHelper","VideoPlayerExperiments","VideoPlayerShakaGlobalConfig","VideoScrollTracker","Visibility","clearTimeout","debounce","destroyOnUnload","emptyFunction","setTimeout","throttle"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("VideoPlayerShakaGlobalConfig").getNumber("abort_loading_delay",3e3);function h(a,b){var c=[];return function(){var d=Date.now();c.unshift(d);var e=0;while(c[++e]+b>d);c=c.slice(0,e);return c.length<=a}}function i(a,c,d){__p&&__p();var e=null;return function(){__p&&__p();for(var f=arguments.length,g=new Array(f),h=0;h<f;h++)g[h]=arguments[h];if(c()){a.apply(void 0,g);return b("emptyFunction").thatReturnsFalse}else if(!e){var i=b("setTimeout")(function(){e=null,a.apply(void 0,g)},d);e=function(){if(!e)return!1;b("clearTimeout")(i);e=null;return!0}}return e}}a=function(){__p&&__p();function a(a){__p&&__p();var c=this;this.$8=b("emptyFunction");this.$9=b("emptyFunction");this.$3=null;this.$2=null;this.$10=[];this.$1=a;this.$4=null;this.$5=new(b("SubscriptionsHandler"))();b("VideoPlayerShakaGlobalConfig").getBool("autoplay_controller_use_video_scroll_tracker",!1)&&(this.$11=new(b("VideoScrollTracker"))(document.body),this.$11.start());b("destroyOnUnload")(function(){c.$10=[],c.$3=null,c.$4&&(c.$4.remove(),c.$4=null),c.$5.release(),c.$11&&c.$11.destroy()});b("VideoPlayerExperiments").autoplayMaxCallsPerWindow&&(this.$6=i(function(a){var b=c.$3;b&&b.playWithoutUnmute(a)},h(b("VideoPlayerExperiments").autoplayMaxCallsPerWindow,b("VideoPlayerExperiments").autoplayThrottleWindow),b("VideoPlayerExperiments").autoplayThrottleDelay));this.$7=b("emptyFunction").thatReturnsFalse}var c=a.prototype;c.getVideoUnits=function(){return this.$10};c.addVideoUnit=function(a){var b=this,c=a.getVideoPlayerController();c&&c.registerOption("VideoAutoplayControllerBase/VideoScrollTracker","getLastScrollDirection",function(){return b.getLastScrollDirection()});this.$10.push(a)};c.removeVideoUnit=function(a){var b=this.$10.findIndex(function(b){return b===a});if(b>-1){this.$10.splice(b,1);b=a.getVideoPlayerController();b&&b.unregisterOption("VideoAutoplayControllerBase/VideoScrollTracker","getLastScrollDirection")}};c.getPlayingVideoUnit=function(){return this.$3};c.setPlayingVideoUnit=function(a){this.$3=a,this.$3&&this.setupPlayingVideoUnitSubscriptions()};c.getLastScrollDirection=function(){return this.$11?this.$11.getLastScrollDirection():null};c.playVideo=function(a,c){__p&&__p();if(b("VideoPlayerExperiments").disableAutoplayForInactiveTab&&b("Visibility").isHidden()){if(b("VideoPlayerExperiments").removeHiddenVideoTracking){this.setPlayingVideoUnit(null);return}this.$2=a;return}this.setPlayingVideoUnit(a);if(this.$3){a=this.$6;a?this.$7=a.call(this,c):this.$3.playWithoutUnmute(c)}};c.setupPlayingVideoUnitSubscriptions=function(){throw new Error("Should be overridden")};c.addSubscriberVideoUnit=function(){if(!this.getVideoUnits().length){var a;this.$5.addSubscriptions(b("Event").listen(window,"resize",this.updateAutoplay.bind(this)),b("Event").listen(window,"blur",this.$12.bind(this)),b("Event").listen(window,"focus",this.$13.bind(this)),(a=b("Visibility")).addListener(a.HIDDEN,this.$12.bind(this)),a.addListener(a.VISIBLE,this.$13.bind(this)),b("Arbiter").subscribe(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_SHOWN_EVENT,this.updateAutoplay.bind(this)));this.$14()||this.$15()}};c.$12=function(){b("VideoPlayerExperiments").removeHiddenVideoTracking?this.$16("page_visibility_initiated"):this.$2||(this.$2=this.getPlayingVideoUnit(),this.$16("page_visibility_initiated"))};c.$13=function(){b("VideoPlayerExperiments").removeHiddenVideoTracking?this.updateAutoplay():this.$2&&(this.playVideo(this.$2,"page_visibility_initiated"),this.$2=null)};c.$15=function(){__p&&__p();var a=this,c=function(){a.$11&&a.$11.onScroll(),a.updateAutoplay()};this.$4&&this.$4.remove();this.$8=b("throttle")(c,this.$1);this.$9=b("debounce")(function(){return a.updateAutoplay()},this.$1);var d=b("VideoPlayerShakaGlobalConfig").getBool("autoplay_use_unthrottled_scroll_handler",!1)?function(){return c()}:function(){a.$8(),b("VideoPlayerExperiments").useDebouncedScroll&&a.$9()};this.$4=b("Event").listen(window,"scroll",d)};c.$14=function(){return!!this.$4};c.getClosestVideoUnits=function(a){return this.$10.filter(function(a){return a.getDistanceToViewport()>=0}).sort(function(a,b){return a.getDistanceToViewport()-b.getDistanceToViewport()}).slice(0,a)};c.getVisibleUnits=function(){var a=[],c=b("VideoPlayerShakaGlobalConfig").getBool("do_not_emit_become_visibility_events_on_vpc",!1);this.$10.forEach(function(b){var d=b.getVideoPlayerController();b.isVisible()?(a.push(b),b.wasVisible||(b.wasVisible=!0,b.logDisplayed(),!c&&d&&d.emit("becomeVisible"))):b.wasVisible&&(!c&&d&&d.emit("becomeInvisible"),b.wasVisible=!1)});return a};c.$17=function(a){var c=b("VideoPlayerShakaGlobalConfig").getBool("oz_www_allow_abort_loading_from_autoplay_controller",!1),d=b("VideoPlayerShakaGlobalConfig").getString("defer_which_video_to_abort_loading_decisioning_logic","all"),e=a.getVideoPlayerController();if(!c&&e&&e.isPlayerVersion("oz"))return!1;c=e?e.isLiveVideo():null;return c!==null&&(d==="vod"&&c||d==="live"&&!c)?!1:b("VideoAutoplayControllerAbortLoadingHelper").shouldAbortLoadingVideoUnit(a)};c.pausePlayingVideo=function(a,c){__p&&__p();var d=this.$3;if(d){var e=function a(){if(!d.isState("playing")){if(b("VideoPlayerExperiments").abortLoadingReUpStillVisibleVideos&&d.isVisible()){b("setTimeout")(a,g);return}typeof d.abortLoading==="function"&&d.abortLoading()}};if(d.isVisible()){var f=d.getVideoPlayerController();if(f&&f.isPlayRequestPending())return}this.$7()||d.pause(a);b("VideoPlayerExperiments").decoupleAbortLoadingFromPause||this.$17(d)&&!c&&b("setTimeout")(e,g);this.$3=null}};c.$16=function(a){this.pausePlayingVideo(a,!0)};c.updateAutoplay=function(){throw new Error("Should be overridden")};return a}();e.exports=a}),null);
__d("XVideoAutoplayNuxAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/autoplay/nux/",{})}),null);
__d("XVideoAutoplayNuxDismissAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/autoplay/nux/dismiss/",{})}),null);
__d("XVideoAutoplayNuxLogViewAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/autoplay/nux/log/view/",{})}),null);
__d("requestBoundedAnimationFrame",["cancelAnimationFrame","clearTimeout","performanceNow","requestAnimationFrame","setTimeout"],(function(a,b,c,d,e,f){var g;a=function(a,c,d){var e=b("setTimeout")(function(){e=null,f!==null&&b("cancelAnimationFrame")(f),a((g||(g=b("performanceNow")))())},d),f=b("requestAnimationFrame")(function(c){f=null,e!==null&&b("clearTimeout")(e),a(c)},c);return function(){f!==null&&(b("cancelAnimationFrame")(f),f=null),e!==null&&(b("clearTimeout")(e),e=null)}};e.exports=a}),null);
__d("VideoAutoplayControllerX",["csx","AsyncRequest","DocumentFocusForMutedVideoAutoplayRule","DOM","Event","Network","Run","SubscriptionsHandler","VideoAutoplayControllerAbortLoadingHelper","VideoAutoplayControllerBase","VideoPlayerExperiments","VideoPlayerPreloadExperiment","VideoPlayerShakaGlobalConfig","XVideoAutoplayNuxAsyncController","XVideoAutoplayNuxDismissAsyncController","XVideoAutoplayNuxLogViewAsyncController","clearTimeout","destroyOnUnload","getViewportDimensions","performanceNow","requestBoundedAnimationFrame","requestIdleCallback","setTimeout"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=null,j=b("VideoPlayerExperiments").videoPollingFrequency,k=!1;function l(){return!b("VideoPlayerExperiments").delayAutoplayUntilAfterLoad||k}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c;c=a.call(this,j)||this;c.$VideoAutoplayControllerX4=!1;c.$VideoAutoplayControllerX5=!1;c.$VideoAutoplayControllerX6=0;c.$VideoAutoplayControllerX17=new(b("VideoAutoplayControllerAbortLoadingHelper"))();c.$VideoAutoplayControllerX10=new(b("SubscriptionsHandler"))();c.$VideoAutoplayControllerX18=new(b("SubscriptionsHandler"))();c.$VideoAutoplayControllerX12=!0;c.$VideoAutoplayControllerX9=!0;c.$VideoAutoplayControllerX13=!0;c.$VideoAutoplayControllerX2=null;c.$VideoAutoplayControllerX1=null;c.$VideoAutoplayControllerX14=!1;c.$VideoAutoplayControllerX3=null;c.$VideoAutoplayControllerX7=!1;c.$VideoAutoplayControllerX16=!1;c.$VideoAutoplayControllerX15=!1;var d=b("XVideoAutoplayNuxAsyncController").getURIBuilder().getURI();new(b("AsyncRequest"))(d).setAllowCrossPageTransition().send();b("destroyOnUnload")(function(){c.$VideoAutoplayControllerX19(),b("VideoPlayerExperiments").disableAutoplayOnHomePgUpPgDownEnd&&(c.$VideoAutoplayControllerX11&&b("clearTimeout")(c.$VideoAutoplayControllerX11),c.$VideoAutoplayControllerX8.remove()),babelHelpers.assertThisInitialized(c)===i&&(i=null)});b("Run").onAfterLoad(function(){k=!0,b("VideoPlayerExperiments").delayAutoplayUntilAfterLoad&&(i&&i.updateAutoplay()),document.hasFocus()||b("Event").fire(window,"blur"),b("VideoPlayerExperiments").disableAutoplayOnHomePgUpPgDownEnd&&c.$VideoAutoplayControllerX20()});b("VideoPlayerShakaGlobalConfig").getBool("use_two_frequency_update_autoplay",!1)&&c.$VideoAutoplayControllerX21(Date.now());return c}c.$VideoAutoplayControllerX22=function(a){return b("VideoPlayerExperiments").fixVPCCallBeforeLoaded?!(a.isState("fallback")||a.isState("loading")):!0};var d=c.prototype;d.$VideoAutoplayControllerX20=function(){__p&&__p();var a=this,c=33,d=34,e=35,f=36;this.$VideoAutoplayControllerX11=null;var g=function(){a.$VideoAutoplayControllerX23(a.$VideoAutoplayControllerX9),b("clearTimeout")(a.$VideoAutoplayControllerX11),a.$VideoAutoplayControllerX11=null};this.$VideoAutoplayControllerX8=b("Event").listen(document.body,"keydown",function(h){var i=-1;switch(h.keyCode){case c:case d:i=b("VideoPlayerExperiments").pressPgUpPgDownAutoplayShutoffInterval;break;case e:case f:i=b("VideoPlayerExperiments").pressHomeEndAutoplayShutoffInterval;break;default:break}i>-1&&(a.$VideoAutoplayControllerX11?(b("clearTimeout")(a.$VideoAutoplayControllerX11),a.$VideoAutoplayControllerX11=b("setTimeout")(g,i)):a.$VideoAutoplayControllerX12&&(a.$VideoAutoplayControllerX23(!1),a.$VideoAutoplayControllerX11=b("setTimeout")(g,i)))})};d.$VideoAutoplayControllerX23=function(a){this.$VideoAutoplayControllerX12=a,this.updateAutoplay()};c.registerVideoUnit=function(a){__p&&__p();i==null&&(i=new c());i.addSubscriberVideoUnit();i.registerDefaultAutoplayRules(a);i.addVideoUnit(a);var d=new(b("SubscriptionsHandler"))();d.addSubscriptions.apply(d,i.$VideoAutoplayControllerX24(a));i.$VideoAutoplayControllerX25();a.isVisible()&&l()&&i.updateAutoplay();i.shouldRestoreAllSubsequentStreamBufferSizes()&&i.restoreStreamBufferSize();return function(){i&&i.removeVideoUnit(a),d.release(),i&&a===i.getPlayingVideoUnit()&&(i.$VideoAutoplayControllerX18.release(),i.setPlayingVideoUnit(null))}};c.setShouldAutoplay=function(a){i==null&&(i=new c()),i.$VideoAutoplayControllerX12=a,i.$VideoAutoplayControllerX13=a,i.$VideoAutoplayControllerX9=a,i.updateAutoplay()};d.$VideoAutoplayControllerX19=function(){this.$VideoAutoplayControllerX10.release(),this.$VideoAutoplayControllerX18.release()};c.setAutoplayNux=function(a,c){__p&&__p();var d=i;if(!d)return;d.$VideoAutoplayControllerX2=a;d.$VideoAutoplayControllerX1=c;d.$VideoAutoplayControllerX14=!0;a=b("DOM").find(c.getContentRoot(),"._5cqr");b("Event").listen(a,"click",function(){d.$VideoAutoplayControllerX26()});a=b("DOM").scry(c.getContentRoot(),"._36gl")[0];a&&b("Event").listen(a,"click",function(){d.$VideoAutoplayControllerX26()})};d.$VideoAutoplayControllerX26=function(){this.$VideoAutoplayControllerX1&&this.$VideoAutoplayControllerX1.hide();this.$VideoAutoplayControllerX14=!1;var a=b("XVideoAutoplayNuxDismissAsyncController").getURIBuilder().getURI();new(b("AsyncRequest"))(a).setAllowCrossPageTransition().send()};d.registerDefaultAutoplayRules=function(a){b("VideoPlayerExperiments").useBringYourOwnAutoplayRule&&b("VideoPlayerExperiments").pauseMutedIfNoDocumentFocus&&a.registerAutoplayRule(new(b("DocumentFocusForMutedVideoAutoplayRule"))(a))};d.setupPlayingVideoUnitSubscriptions=function(){__p&&__p();var a=this,c=this.getPlayingVideoUnit();if(!c)return;c.addListener&&(this.$VideoAutoplayControllerX10.release(),this.$VideoAutoplayControllerX10.engage(),c.isLooping()||this.$VideoAutoplayControllerX10.addSubscriptions(c.addListener("finishPlayback",function(){a.setPlayingVideoUnit(null)})),this.$VideoAutoplayControllerX10.addSubscriptions(c.addListener("turnOffAutoplay",function(){a.setPlayingVideoUnit(null)}),c.addListener("pausePlayback",function(){a.$VideoAutoplayControllerX25()}),c.addListener("finishPlayback",function(){a.$VideoAutoplayControllerX25()}),b("Network").addListener("online",function(){a.$VideoAutoplayControllerX25()}),b("Network").addListener("offline",function(){a.$VideoAutoplayControllerX25()})))};d.$VideoAutoplayControllerX25=function(){__p&&__p();var a=this;if(b("VideoPlayerExperiments").webVideosBlockAutoplayWhenOffline)if(b("Network").isOnline())this.$VideoAutoplayControllerX12=this.$VideoAutoplayControllerX13;else{this.$VideoAutoplayControllerX13=this.$VideoAutoplayControllerX12;this.$VideoAutoplayControllerX12=!1;return}var d=this.getVideoUnits();for(var e=0;e<d.length;e++){var f=d[e].getVideoPlayerController();f&&(f.getDataInsertionPosition()==="0"&&(this.$VideoAutoplayControllerX7=!0,this.$VideoAutoplayControllerX16===!1&&(c.$VideoAutoplayControllerX22(f)&&f.restoreStreamBufferSize(),f.once("beginPlayback",function(){a.$VideoAutoplayControllerX15=!0,a.restoreStreamBufferSize()}),this.$VideoAutoplayControllerX16=!0)),b("VideoPlayerExperiments").autoplayBlockBlacklist||f.updateAutoplayRestrained())}this.$VideoAutoplayControllerX7||this.restoreStreamBufferSize()};d.shouldRestoreAllSubsequentStreamBufferSizes=function(){return!this.$VideoAutoplayControllerX7?!0:this.$VideoAutoplayControllerX15};d.restoreStreamBufferSize=function(){var a=this.getVideoUnits();for(var b=0;b<a.length;b++){var d=a[b].getVideoPlayerController();d&&c.$VideoAutoplayControllerX22(d)&&d.restoreStreamBufferSize()}};d.$VideoAutoplayControllerX24=function(a){__p&&__p();var b=this,c;if(!a.addListener)return[];var d=function(){__p&&__p();if(!a.isMuted()&&a.isState("playing")){var c=b.$VideoAutoplayControllerX3;if(c&&c!==a){var d=c.getVideoPlayerController();if(d){var e=d.getOption("VideoWithLiveBroadcast","isLive");e?d.mute():d.pause("user_initiated")}try{c.pause("user_initiated")}catch(a){}}b.$VideoAutoplayControllerX3=a}};d=[a.addListener("beginPlayback",d),a.addListener("changeVolume",d),a.addListener("unmuteVideo",d)];(c=this.$VideoAutoplayControllerX18).addSubscriptions.apply(c,d);return d};d.$VideoAutoplayControllerX27=function(a){__p&&__p();var c=this,d=a.length,e=null;if(d===1)e=a[0],e=e.isAutoplayable()?e:null,b("VideoPlayerExperiments").useBringYourOwnAutoplayRule&&e&&(e=this.$VideoAutoplayControllerX28(e)?e:null);else if(d>1){var f=b("getViewportDimensions")().height/2;a.forEach(function(a){if(!a.isAutoplayable())return;if(b("VideoPlayerExperiments").useBringYourOwnAutoplayRule&&!c.$VideoAutoplayControllerX28(a))return;var d=a.getDOMPosition();d=d.y+d.height/2;d=Math.abs(d-f);a.playPriority=d;(!e||!e.playPriority||a.playPriority<e.playPriority)&&(e=a)})}return e};d.$VideoAutoplayControllerX28=function(a){var b=!0;a=a.getAutoplayRules();for(var c=0;c<a.length;++c){var d=a[c].calculateAutoplayScore();b=d!==0;if(!b)break}return b};d.showAutoplayNUX=function(a){__p&&__p();var c=this.$VideoAutoplayControllerX1;if(c&&!c.isShown()){a=a.getVideoPlayerController();a=a?a.getRootNode():null;b("DOM").prependContent(a,this.$VideoAutoplayControllerX2);c.show();a=b("XVideoAutoplayNuxLogViewAsyncController").getURIBuilder().getURI();new(b("AsyncRequest"))(a).setAllowCrossPageTransition().send()}this.$VideoAutoplayControllerX14=!1};d.addVideoUnit=function(c){c&&a.prototype.addVideoUnit.call(this,c),b("VideoPlayerExperiments").decoupleAbortLoadingFromPause&&c&&this.$VideoAutoplayControllerX17.addVideoUnit(c)};d.removeVideoUnit=function(c){c&&a.prototype.removeVideoUnit.call(this,c),b("VideoPlayerExperiments").decoupleAbortLoadingFromPause&&c&&this.$VideoAutoplayControllerX17.removeVideoUnit(c)};d.$VideoAutoplayControllerX21=function(a){__p&&__p();var c=this,d=b("VideoPlayerShakaGlobalConfig").getNumber("request_bounded_animation_frame_bound",50);this.$VideoAutoplayControllerX29();if(b("VideoPlayerShakaGlobalConfig").getBool("use_ric_cycle",!1)){a=b("VideoPlayerShakaGlobalConfig").getNumber("ric_autoplay_bound",50);var e=b("VideoPlayerShakaGlobalConfig").getBool("use_native_ric",!1);e=e?window.requestIdleCallback:b("requestIdleCallback");return e(function(){c.$VideoAutoplayControllerX21((h||(h=b("performanceNow")))())},{timeout:a})}b("VideoPlayerShakaGlobalConfig").getBool("update_autoplay_lower_raf_cycle",!1)?b("setTimeout")(function(){b("VideoPlayerShakaGlobalConfig").getBool("update_autoplay_no_raf",!1)?c.$VideoAutoplayControllerX21((h||(h=b("performanceNow")))()):b("requestBoundedAnimationFrame")(function(a){c.$VideoAutoplayControllerX21(a)},{priority:"QUERY_THEN_MUTATE"},d)},j):b("requestBoundedAnimationFrame")(function(a){c.$VideoAutoplayControllerX21(a)},{priority:"QUERY_THEN_MUTATE"},d)};d.$VideoAutoplayControllerX29=function(){__p&&__p();var a=this.$VideoAutoplayControllerX3,c=Date.now(),d=c-this.$VideoAutoplayControllerX6,e=b("VideoPlayerShakaGlobalConfig").getNumber("autoplay_start_video_interval",200);if(b("VideoPlayerShakaGlobalConfig").getBool("update_autoplay_no_high_frequency_ops",!1)&&d<e)return;this.$VideoAutoplayControllerX4&&b("VideoPlayerExperiments").pauseAudioUnitsOffscreen&&a&&a.shouldPauseWhenScrolledOffscreen()&&!a.isVisible()&&a.pause("autoplay_initiated");if(!this.$VideoAutoplayControllerX12){this.pausePlayingVideo("autoplay_initiated");return}a=this.getVideoUnits();var f=this.getPlayingVideoUnit(),g=this.$VideoAutoplayControllerX4?null:f;this.$VideoAutoplayControllerX4&&f&&f.isVisible()&&(g=this.$VideoAutoplayControllerX27([f]));f&&f!==g&&this.pausePlayingVideo("autoplay_initiated");if(d>=e){this.$VideoAutoplayControllerX6=c;if(this.$VideoAutoplayControllerX5){d=this.getVisibleUnits();for(var e=0;e<a.length;++e)a[e].isMuted()&&d.indexOf(a[e])===-1&&a[e].pause("autoplay_initiated");g=this.$VideoAutoplayControllerX27(d);g&&g!==f&&(f&&this.pausePlayingVideo("autoplay_initiated"),this.playVideo(g,"autoplay_initiated"),this.$VideoAutoplayControllerX14&&this.showAutoplayNUX(g));this.getClosestVideoUnits(b("VideoPlayerExperiments").preloadVideosCount).forEach(function(a){return a.preload()});g&&b("VideoPlayerExperiments").adjustPriorityBasedOnAutoplayIndex&&this.$VideoAutoplayControllerX30(g)}this.$VideoAutoplayControllerX5=!1}this.$VideoAutoplayControllerX4=!1};d.updateAutoplay=function(){__p&&__p();if(b("VideoPlayerShakaGlobalConfig").getBool("use_two_frequency_update_autoplay",!1)){this.$VideoAutoplayControllerX4=!0;this.$VideoAutoplayControllerX5=!0;return}var a=this.getVideoUnits(),c;if(b("VideoPlayerExperiments").pauseOffscreenUnitsFirst){c=this.getVisibleUnits();if(b("VideoPlayerExperiments").pauseOffscreenMutedOnUpdateAutoplay)for(var d=0;d<a.length;++d)a[d].isMuted()&&c.indexOf(a[d])===-1&&a[d].pause("autoplay_initiated")}if(!this.$VideoAutoplayControllerX12){this.pausePlayingVideo("autoplay_initiated");return}d=this.$VideoAutoplayControllerX3;b("VideoPlayerExperiments").pauseAudioUnitsOffscreen&&d&&d.shouldPauseWhenScrolledOffscreen()&&!d.isVisible()&&d.pause("autoplay_initiated");!b("VideoPlayerExperiments").decoupleAbortLoadingFromPause?this.getClosestVideoUnits(b("VideoPlayerPreloadExperiment").preloadVideosCount).forEach(function(a){a.preload()}):b("VideoPlayerExperiments").abortLoadingHelperDefaultPreloading&&this.$VideoAutoplayControllerX17.preloadClosestVideoUnits(b("VideoPlayerPreloadExperiment").preloadVideosCount);c=this.getVisibleUnits();d=this.$VideoAutoplayControllerX27(c);var e=this.getPlayingVideoUnit();e?d!=e&&(this.pausePlayingVideo("autoplay_initiated"),this.playVideo(d,"autoplay_initiated"),this.$VideoAutoplayControllerX14&&d&&this.showAutoplayNUX(d)):d&&(this.playVideo(d,"autoplay_initiated"),this.$VideoAutoplayControllerX14&&this.showAutoplayNUX(d));if(!b("VideoPlayerExperiments").pauseOffscreenUnitsFirst&&b("VideoPlayerExperiments").pauseOffscreenMutedOnUpdateAutoplay)for(var e=0;e<a.length;++e)a[e].isMuted()&&c.indexOf(a[e])===-1&&a[e].pause("autoplay_initiated");b("VideoPlayerExperiments").adjustPriorityBasedOnAutoplayIndex&&this.$VideoAutoplayControllerX30(d);b("VideoPlayerExperiments").decoupleAbortLoadingFromPause&&this.$VideoAutoplayControllerX17.maybeAbortLoading()};d.$VideoAutoplayControllerX30=function(a){__p&&__p();var c=-1,d=this.getVideoUnits();if(a){var e=d.findIndex(function(b){return b===a});e>=0&&(c=e+1)}else{e=b("getViewportDimensions")().height/2;for(var f=0;f<d.length;f++){var g=d[f];g=g.getDOMPosition();g=g.y+g.height/2;if(g-e>0){c=f;break}}}if(c===-1)return;for(var g=0;g<d.length;g++){f=d[g];e=f.getVideoPlayerController();if(!e)continue;g===c?e.setVideoPriorityAdjustment(.1):f===a?e.setVideoPriorityAdjustment(b("VideoPlayerExperiments").offsetToBestUnitPriority):b("VideoPlayerExperiments").dePrioritizeUpfoldVideos&&g<c?e.setVideoPriorityAdjustment(-.5):e.setVideoPriorityAdjustment(0)}};return c}(b("VideoAutoplayControllerBase"));e.exports=a}),null);
__d("StreamingReactionsTrayEvents",[],(function(a,b,c,d,e,f){a="streamingReactionsTray/AddReactionAnimate";b="streamingReactionsTray/HideChannelViewDetails";c="streamingReactionsTray/ShowChannelViewDetails";d="streamingReactionsTray/UpdateSurface";f="streamingReactionsTray/ResizeChannelViewWindow";var g="streamingReactionsTray/ReactionStateChange",h="streamingReactionsTray/FireworksAnimating",i="streamingReactionsTray/DisableReactions",j="streamingReactionsTray/EnableReactions";a={AddReactionAnimate:a,HideChannelViewDetails:b,ReactionStateChange:g,ResizeChannelViewWindow:f,ShowChannelViewDetails:c,UpdateSurface:d,FireworksAnimating:h,DisableReactions:i,EnableReactions:j};e.exports=a}),null);
__d("shouldWNSRenderToRHC",["ge"],(function(a,b,c,d,e,f){"use strict";function a(){return!!b("ge")("fbRHCVideoWNS-container")}e.exports=a}),null);
__d("Tahoe",[],(function(a,b,c,d,e,f){var g=null;a={get:function(){return g},set:function(a){g=a}};e.exports=a}),null);
__d("ReactCSSTransitionGroupChild",["React","ReactDOM","ReactTransitionEvents","fbjs/lib/CSSCore","prop-types"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=17;c=b("React").createClass({displayName:"ReactCSSTransitionGroupChild",propTypes:{name:(a=b("prop-types")).oneOfType([a.string,a.shape({enter:a.string,leave:a.string,active:a.string}),a.shape({enter:a.string,enterActive:a.string,leave:a.string,leaveActive:a.string,appear:a.string,appearActive:a.string})]).isRequired,appear:a.bool,enter:a.bool,leave:a.bool,appearTimeout:a.number,enterTimeout:a.number,leaveTimeout:a.number},transition:function(a,c,d){__p&&__p();var e=b("ReactDOM").findDOMNode(this);if(!e){c&&c();return}var f=this.props.name[a]||this.props.name+"-"+a,g=this.props.name[a+"Active"]||f+"-active",h=null;a=function a(d){if(d&&d.target!==e)return;clearTimeout(h);b("fbjs/lib/CSSCore").removeClass(e,f);b("fbjs/lib/CSSCore").removeClass(e,g);b("ReactTransitionEvents").removeEndEventListener(e,a);c&&c()};b("fbjs/lib/CSSCore").addClass(e,f);this.queueClassAndNode(g,e);d?(h=setTimeout(a,d),this.transitionTimeouts.push(h)):b("ReactTransitionEvents").addEndEventListener(e,a)},queueClassAndNode:function(a,b){this.classNameAndNodeQueue.push({className:a,node:b}),this.timeout||(this.timeout=setTimeout(this.flushClassNameAndNodeQueue,g))},flushClassNameAndNodeQueue:function(){this.isMounted()&&this.classNameAndNodeQueue.forEach(function(a){b("fbjs/lib/CSSCore").addClass(a.node,a.className)}),this.classNameAndNodeQueue.length=0,this.timeout=null},UNSAFE_componentWillMount:function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},componentWillUnmount:function(){this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach(function(a){clearTimeout(a)}),this.classNameAndNodeQueue.length=0},componentWillAppear:function(a){this.props.appear?this.transition("appear",a,this.props.appearTimeout):a()},componentWillEnter:function(a){this.props.enter?this.transition("enter",a,this.props.enterTimeout):a()},componentWillLeave:function(a){this.props.leave?this.transition("leave",a,this.props.leaveTimeout):a()},render:function(){return b("React").Children.only(this.props.children)}});e.exports=c}),null);
__d("ReactTransitionChildMapping",["React","emptyFunction","warning"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("emptyFunction");c={getChildMapping:function(a){if(!a)return a;var c={};b("React").Children.toArray(a).forEach(function(a){var b=a.key,d=c[b]===void 0;d&&(c[b]=a)});return c},mergeChildMappings:function(a,b){__p&&__p();a=a||{};b=b||{};function c(c){if(Object.prototype.hasOwnProperty.call(b,c))return b[c];else return a[c]}var d={},e=[];for(var f in a)Object.prototype.hasOwnProperty.call(b,f)?e.length&&(d[f]=e,e=[]):e.push(f);var g,h={};for(var i in b){if(Object.prototype.hasOwnProperty.call(d,i))for(g=0;g<d[i].length;g++){var j=d[i][g];h[d[i][g]]=c(j)}h[i]=c(i)}for(g=0;g<e.length;g++)h[e[g]]=c(e[g]);return h}};e.exports=c}),null);
__d("ReactTransitionGroup",["React","ReactTransitionChildMapping","fbjs/lib/emptyFunction","prop-types"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={children:b("ReactTransitionChildMapping").getChildMapping(d.props.children)},d.performAppear=function(a){d.currentlyTransitioningKeys[a]=!0;var b=d.refs[a];b.componentWillAppear?b.componentWillAppear(d.$1.bind(babelHelpers.assertThisInitialized(d),a)):d.$1(a)},d.$1=function(a){var c=d.refs[a];c.componentDidAppear&&c.componentDidAppear();delete d.currentlyTransitioningKeys[a];c=b("ReactTransitionChildMapping").getChildMapping(d.props.children);(!c||!Object.prototype.hasOwnProperty.call(c,a))&&d.performLeave(a)},d.performEnter=function(a){d.currentlyTransitioningKeys[a]=!0;var b=d.refs[a];b.componentWillEnter?b.componentWillEnter(d.$2.bind(babelHelpers.assertThisInitialized(d),a)):d.$2(a)},d.$2=function(a){var c=d.refs[a];c.componentDidEnter&&c.componentDidEnter();delete d.currentlyTransitioningKeys[a];c=b("ReactTransitionChildMapping").getChildMapping(d.props.children);(!c||!Object.prototype.hasOwnProperty.call(c,a))&&d.performLeave(a)},d.performLeave=function(a){d.currentlyTransitioningKeys[a]=!0;var b=d.refs[a];b.componentWillLeave?b.componentWillLeave(d.$3.bind(babelHelpers.assertThisInitialized(d),a)):d.$3(a)},d.$3=function(a){var c=d.refs[a];c.componentDidLeave&&c.componentDidLeave();delete d.currentlyTransitioningKeys[a];c=b("ReactTransitionChildMapping").getChildMapping(d.props.children);c&&Object.prototype.hasOwnProperty.call(c,a)?d.performEnter(a):d.setState(function(b){b=Object.assign({},b.children);delete b[a];return{children:b}})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.UNSAFE_componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]};d.componentDidMount=function(){var a=this.state.children;for(var b in a)a[b]&&this.performAppear(b)};d.UNSAFE_componentWillReceiveProps=function(a){__p&&__p();a=b("ReactTransitionChildMapping").getChildMapping(a.children);var c=this.state.children;this.setState({children:b("ReactTransitionChildMapping").mergeChildMappings(c,a)});var d;for(d in a){var e=c&&Object.prototype.hasOwnProperty.call(c,d);a[d]&&!e&&!this.currentlyTransitioningKeys[d]&&this.keysToEnter.push(d)}for(d in c){e=a&&Object.prototype.hasOwnProperty.call(a,d);c[d]&&!e&&!this.currentlyTransitioningKeys[d]&&this.keysToLeave.push(d)}};d.componentDidUpdate=function(){var a=this.keysToEnter;this.keysToEnter=[];a.forEach(this.performEnter);a=this.keysToLeave;this.keysToLeave=[];a.forEach(this.performLeave)};d.render=function(){__p&&__p();var a=[];for(var c in this.state.children){var d=this.state.children[c];d&&a.push(b("React").cloneElement(this.props.childFactory(d),{ref:c,key:c}))}d=Object.assign({},this.props);delete d.transitionLeave;delete d.transitionName;delete d.transitionAppear;delete d.transitionEnter;delete d.childFactory;delete d.transitionLeaveTimeout;delete d.transitionEnterTimeout;delete d.transitionAppearTimeout;delete d.component;return b("React").createElement(this.props.component,d,a)};return c}(b("React").Component);a.displayName="ReactTransitionGroup";a.propTypes={component:b("prop-types").any,childFactory:b("prop-types").func};a.defaultProps={component:"span",childFactory:b("fbjs/lib/emptyFunction").thatReturnsArgument};e.exports=a}),null);
__d("ReactCSSTransitionGroup",["React","ReactCSSTransitionGroupChild","ReactTransitionGroup","prop-types"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){var b="transition"+a+"Timeout",c="transition"+a;return function(a){if(a[c])if(a[b]==null)return new Error(b+" wasn't supplied to ReactCSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");else if(typeof a[b]!=="number")return new Error(b+" must be a number (in milliseconds)")}}c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){return b("React").createElement(b("ReactCSSTransitionGroupChild"),{name:d.props.transitionName,appear:d.props.transitionAppear,enter:d.props.transitionEnter,leave:d.props.transitionLeave,appearTimeout:d.props.transitionAppearTimeout,enterTimeout:d.props.transitionEnterTimeout,leaveTimeout:d.props.transitionLeaveTimeout},a)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){return b("React").createElement(b("ReactTransitionGroup"),Object.assign({},this.props,{childFactory:this.$1}))};return c}(b("React").Component);c.displayName="ReactCSSTransitionGroup";c.propTypes={transitionName:b("ReactCSSTransitionGroupChild").propTypes.name,transitionAppear:b("prop-types").bool,transitionEnter:b("prop-types").bool,transitionLeave:b("prop-types").bool,transitionAppearTimeout:a("Appear"),transitionEnterTimeout:a("Enter"),transitionLeaveTimeout:a("Leave")};c.defaultProps={transitionAppear:!1,transitionEnter:!0,transitionLeave:!0};e.exports=c}),null);
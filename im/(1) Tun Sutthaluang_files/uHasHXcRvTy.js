if (self.CavalryLogger) { CavalryLogger.start_js(["rZobJ"]); }

__d("VideoPauseWhenBackgrounded",["invariant","Event","SubscriptionsHandler","VideoPlayerExperiments","Visibility"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1=new(b("SubscriptionsHandler"))(),this.$3=!1}var c=a.prototype;c.enable=function(a){this.$2&&g(0,2800),this.$1.engage(),this.$2=a,this.$1.addSubscriptions(b("Event").listen(window,"blur",this.$4.bind(this)),b("Event").listen(window,"focus",this.$5.bind(this)),b("Visibility").addListener(b("Visibility").HIDDEN,this.$4.bind(this)),b("Visibility").addListener(b("Visibility").VISIBLE,this.$5.bind(this)))};c.disable=function(){this.$1.release(),this.$2=null};c.$4=function(){this.pauseVideo("page_visibility_initiated")};c.$5=function(){this.playVideo("page_visibility_initiated")};c.playVideo=function(a){var b=this.$2;b||g(0,2801);b.isState("paused")&&this.$3&&b.play(a);this.$3=!1};c.pauseVideo=function(a){var c=this.$2;c||g(0,2801);if(b("VideoPlayerExperiments").fullScreenVideoIsNotHidden&&c.isFullscreen())return;c.isState("playing")&&(c.pause(a),this.$3=!0)};return a}();e.exports=a}),null);
__d("VideoCTAEndscreen",["cx","Arbiter","CSS","Event","Focus","SubscriptionsHandler","VideoCTALoggingConfig","logVideosClickTracking"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c){__p&&__p();var d=this;this.$1=a;this.$2=c.endscreenElement;this.$3=c.replayElement;this.$4=c.ctaElement;this.$5=c.isPausescreen;this.$6=new(b("SubscriptionsHandler"))();this.$6.addSubscriptions(b("Event").listen(this.$3,"click",function(){return d.$7()}),a.addListener("beginPlayback",function(){return d.$8()}),a.addListener("VideoChannelController/exitChannel",function(){a.isState("finished")&&d.$9()}));c=c.isPausescreen?"VideoCTAPausescreen":"VideoCTAEndscreen";this.$4&&(this.$6.addSubscriptions(b("Event").listen(this.$4,"click",function(){return d.$10()})),a.registerOption(c,"ctaElement",function(){return d.$4}));this.$5?this.$6.addSubscriptions(a.addListener("pausePlayback",function(){return d.$11()})):this.$6.addSubscriptions(a.addListener("finishPlayback",function(){return d.$9()}));a.registerOption(c,"available",function(){return!0})}var c=a.prototype;c.$7=function(){var a={reason:"user_initiated"};this.$1.clickVideo();this.$1.isState("paused")?b("VideoCTALoggingConfig").shouldLogUnpausedEvent&&this.$1.logEvent("unpaused",a):this.$1.isState("finished")&&(this.$1.setState("replayed"),this.$1.collectFeedTrackingData(),this.$1.logEvent("replayed",a));a=this.$1.getVideoNode();b("logVideosClickTracking")(a);b("Focus").set(a)};c.$10=function(){b("Arbiter").inform("fbvideo_click",{attachment:this.$1.getRootNode(),fbvideo_id:this.$1.getVideoID()})};c.$9=function(){this.$1.getIsInChannel()||this.$11()};c.$11=function(){b("CSS").addClass(this.$2,"_1qbf")};c.$8=function(){b("CSS").removeClass(this.$2,"_1qbf")};return a}();e.exports=a}),null);
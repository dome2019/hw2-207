if (self.CavalryLogger) { CavalryLogger.start_js(["NyieA"]); }

__d("RoyalBluebar",["cx","Arbiter","BigPipe","CSS","Event","QuicklingFetchStreamConfig","Run","SubscriptionsHandler","clearTimeout","ge","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){__p&&__p();var h=null,i=!1,j=b("QuicklingFetchStreamConfig"),k=j.experimentName,l=k!=="off"&&k!=="none";function m(){h&&h()}var n={_subscriptionHandler:null,_getSubscriptionHandler:function(){var a=this;this._subscriptionHandler||(this._subscriptionHandler=new(b("SubscriptionsHandler"))(),b("Run").onUnload(function(){a._subscriptionHandler.release(),a._subscriptionHandler=null}));return this._subscriptionHandler},fixOnScroll:function(a){this._getSubscriptionHandler().addSubscriptions(b("Arbiter").subscribe("bluebarFixedBehaviorController/isfixed",function(c,d){c="_50ti";var e="_33rf";a.firstChild instanceof Element&&b("CSS").conditionClass(a.firstChild,c,d);a.firstChild instanceof Element&&b("CSS").conditionClass(a.firstChild,e,!d);b("Arbiter").inform("reflow")}))},informOnClick:function(a){this._getSubscriptionHandler().addSubscriptions(b("Event").listen(a,"click",function(a){b("Arbiter").inform("BlueBar/homeClick",a)===!1&&a.preventDefault()}))},stopAnimatingAfterDD:function(){var a=b("Arbiter").subscribeOnce(b("BigPipe").Events.init,function(a,c){c.arbiter.subscribeOnce(b("BigPipe").Events.displayed,m)}),c=b("Run").onAfterLoad(m);h=function(){h=null,b("Arbiter").unsubscribe(a),c.remove(),n.stopTransitionAnimation()}},startTransitionAnimation:function(){if(l){h&&h();var a=b("ge")(j.bluebarTransitionElement);a&&b("CSS").addClass(a,j.bluebarTransitionClass)}},stopTransitionAnimation:function(){__p&&__p();if(l){var a=j,c=b("ge")(a.bluebarTransitionElement);if(!c)return;if(k==="Indeterminate"){if(!i){i=!0;b("CSS").addClass(c,"finishing");var d;h=function(){h=null,i=!1,b("clearTimeout")(d),b("CSS").removeClass(c,"finishing"),b("CSS").removeClass(c,a.bluebarTransitionClass)};d=b("setTimeoutAcrossTransitions")(h,200)}}else b("CSS").removeClass(c,a.bluebarTransitionClass)}}};e.exports=n}),null);
__d("BrowseClientEventLogger",["csx","Banzai","DOMQuery","SearchLoggingOptions","ge","ifRequired"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="browse_client_event_session",i="search_www_click_error",j="21.";a={logData:function(a,c,d,e){__p&&__p();e===void 0&&(e={});if(!a||!c)return;e.event=a;e.client_time=Math.floor(Date.now());e.client_time_2=Date.now()/1e3;e.session_id=c;e.vertical=d;this.processedSessions=this.processedSessions||[];if(this.processedSessions.indexOf(c)!==-1)return;a=e.event==="click"&&e.clicked_href!=null&&b("SearchLoggingOptions").signalLinkClicks;b("Banzai").post(h,[e],{delay:0,retry:!0,signal:a})},logClick:function(a){a.gt.event="click",this.maybeLogVisiblityEvent(a,!0),b("ifRequired")("FacebarTypeaheadRefreshNullstate",function(a){a.setIsNullstateStale(!0)})},maybeLogClientViewEvent:function(a){a.event="client_view",this.maybeLogVisiblityEvent(a)},maybeLogVisiblityEvent:function(a,c){__p&&__p();c===void 0&&(c=!1);var d=null;c&&(d=a,a=a.gt);if(!a||!a.xt||a.xt.indexOf(j)!==0){c&&b("Banzai").post(i,[d],{delay:0,retry:!0});return}var e=JSON.parse(a.xt.substring(3));c&&(e.click_type=a.click_type,e.tn=a.tn,e.clicked_href=a.clicked_href,d&&d.bt&&d.bt.ct&&(d.bt.ct=="feedback"&&(e.feedback_score=d.bt.feedback_score,e.feedback_type=d.bt.feedback_type)));c=a.event;d=this._getPositionForCurrentDOMNode(e.unit_id);e.position=d;if(e.display_style==="context_hscroll"&&(c==="client_view"||c==="vpvd"||c==="visible"||c==="hidden"))return;if(c==="vpvd"){if(!a.ft)return;e.vpvd_time=a.ft.vpvd_time_delta}this.logData(c,e.session_id,e.vertical,e)},_getPositionForCurrentDOMNode:function(a){__p&&__p();if(a==null||a==void 0)return null;var c=0,d=b("ge")("browse_result_area");if(d==null||d==void 0)return null;d=b("DOMQuery").scry(d,"._401d");for(var e=0;e<d.length;e++){var f=d[e];f=f.getAttribute("data-gt");if(f!==null||f!==void 0){f=JSON.parse(JSON.parse(f).xt.substring(3));if(f.item_type=="result"&&f.id!==""&&f.id!==null){if(f.unit_id==a)return c;c++}}}return null},logImpression:function(a){a.event="impression",this.maybeLogVisiblityEvent(a)}};e.exports=a}),null);
__d("GamesGogglesSwitch",[],(function(a,b,c,d,e,f){var g=!1;a={enable:function(){g=!0},isEnabled:function(){return g}};e.exports=a}),null);
__d("VisibilityTrackingHelper",["Arbiter","DesktopHscrollUnitEventConstants","Event","getViewportDimensions"],(function(a,b,c,d,e,f){a={getEventListeners:function(a,c){var d=[b("Event").listen(document,"DOMContentLoaded",a),b("Event").listen(window,"scroll",a),b("Event").listen(window,"resize",a),b("Arbiter").subscribe(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_SHOWN_EVENT,a)];c.considerSubtreeModification===!0&&d.push(b("Event").listen(document,"DOMSubtreeModified",a));return d},getViewportInfo:function(){return b("getViewportDimensions")()},isSnippetFlyoutVisible:function(){return!1}};e.exports=a}),null);
__d("VisibilityTracking",["Banzai","BrowseClientEventLogger","DataAttributeUtils","ErrorUtils","ScriptPath","SubscriptionsHandler","Visibility","VisibilityTrackingHelper","collectDataAttributes","getElementPosition","gkx","pageID","throttle"],(function(a,b,c,d,e,f){__p&&__p();var g,h="visibility_tracking",i="[data-vistracking]",j=500,k=50,l=50,m=50,n=50,o=0;a=function(){"use strict";__p&&__p();function a(a){__p&&__p();var c=this;a=a||{};if(!a.bypass_banzai_check&&!b("Banzai").isEnabled(h))return;this.visibleElementInfo={};this.doNotForceExitOnUpdateVisible=!1;this.getDataFromConfig(a);b("Visibility").addListener(b("Visibility").VISIBLE,(g||(g=b("ErrorUtils"))).guard(function(){return c.fireEvent("browser")},"VisibilityTracking:visible",this));b("Visibility").addListener(b("Visibility").HIDDEN,g.guard(function(){return c.clearAllVisibleElements("browser")},"VisibilityTracking:hidden",this));b("ScriptPath").subscribe(g.guard(function(){return c.updateVisibleElements()},"VisibilityTracking:scriptPath",this));b("Banzai").subscribe(b("Banzai").SHUTDOWN,g.guard(function(){return c.onUnload()},"VisibilityTracking:banzaiShutdown",this));this.fireEventCallback=b("throttle").acrossTransitions(g.guard(function(a){return c.fireEvent(a)},"VisibilityTracking:fireEventCallback",this),this.timeout,this);this.listeners=new(b("SubscriptionsHandler"))();b("VisibilityTrackingHelper").getEventListeners(function(){return c.fireEventCallback()},a).forEach(function(a){this.listeners.addSubscriptions(a)},this);this.extraInit&&(g||(g=b("ErrorUtils"))).applyWithGuard(this.extraInit.bind(this))}var c=a.prototype;c.getDataFromConfig=function(a){this.config=a,this.root=a.root||document.documentElement,this.selector=a.selector||i,this.visibleEventCallBack=a.visibleEventCallBack||function(){},this.timeout=a.timeout!==void 0?a.timeout:j,this.minOffsetVisibleFromBottom=a.minOffsetVisibleFromBottom!==void 0?a.minOffsetVisibleFromBottom:k,this.minOffsetVisibleFromTop=a.minOffsetVisibleFromTop!==void 0?a.minOffsetVisibleFromTop:l,this.minOffsetVisibleFromLeft=a.minOffsetVisibleFromLeft!==void 0?a.minOffsetVisibleFromLeft:m,this.minOffsetVisibleFromRight=a.minOffsetVisibleFromRight!==void 0?a.minOffsetVisibleFromRight:n,this.handleAllHiddenEvents=a.handleAllHiddenEvents!==void 0?a.handleAllHiddenEvents:!1,this.handleAllVisibleEvents=a.handleAllVisibleEvents!==void 0?a.handleAllVisibleEvents:!1,this.cacheTrackedElements=a.cacheTrackedElements!==void 0?a.cacheTrackedElements:!1,this.addCauseToAllHiddenEvents=a.addCauseToAllHiddenEvents!=void 0?a.addCauseToAllHiddenEvents:!1,this.doNotForceExitOnUpdateVisible=a.doNotForceExitOnUpdateVisible!=void 0?a.doNotForceExitOnUpdateVisible:!1};c.getAllTrackedElements=function(){__p&&__p();if(!this.allTrackedElements){this.allTrackedElements={};var a=[];this.config.is_xtrackable?a=b("DataAttributeUtils").getXTrackableElements():this.root&&this.root.querySelectorAll&&(a=this.root.querySelectorAll(this.selector));for(var c=0;c<a.length;c++){var d=this.getElementID(a[c]);this.allTrackedElements[d.toString()]=a[c]}}return this.allTrackedElements};c.refreshAllTrackedElements=function(){delete this.allTrackedElements;return this.getAllTrackedElements()};c.getDataToLog=function(a){a=Object.assign(b("collectDataAttributes")(a,["gt"]).gt,{client_time:Date.now()/1e3,time_spent_id:b("pageID"),script_path:b("ScriptPath").getScriptPath()});return a};c.getElementID=function(a){var b=a.$1;if(b)return b;a.$1=++o;return o};c.sendDataToLog=function(a){b("BrowseClientEventLogger").maybeLogVisiblityEvent(a),b("Banzai").post(h,a)};c.isInstreamAdStoryElement=function(a){return!1};c.fireEvent=function(a){a===void 0&&(a="default");var c=this.cacheTrackedElements?this.allTrackedElements:this.refreshAllTrackedElements();for(var d in c){var e=c[d],f=b("VisibilityTrackingHelper").getViewportInfo();f=this.isVisible(e,f);!f&&(d in this.visibleElementInfo||this.handleAllHiddenEvents)?this.handleEvent(e,{name:"hidden",cause:a}):f&&(!(d in this.visibleElementInfo)||this.handleAllVisibleEvents)&&this.handleEvent(e,{name:"visible",cause:a})}this.clearUntrackedVisibleElements()};c.isVisible=function(a,c){if(a==null)return!1;if(b("gkx")("820050")&&b("VisibilityTrackingHelper").isSnippetFlyoutVisible())return!1;a=b("getElementPosition")(a);return!!(a.x||a.y||a.width||a.height)&&a.y+a.height>=this.minOffsetVisibleFromTop&&a.y<=c.height-this.minOffsetVisibleFromBottom&&a.x+a.width>=this.minOffsetVisibleFromLeft&&a.x<=c.width-this.minOffsetVisibleFromRight};c.handleEvent=function(a,c){__p&&__p();var d=this.getElementID(a).toString(),e=this.getDataToLog(a),f;if(c.name==="visible"){var g=Math.floor(Date.now()/1e3);f=b("pageID").concat(":",g.toString(),":",this.getElementID(a).toString());this.visibleElementInfo[d]={visibility_id:f,elem:a}}else if(c.name==="hidden"){d in this.visibleElementInfo&&(f=this.visibleElementInfo[d].visibility_id,delete this.visibleElementInfo[d]);if(c.cause==="browser"||this.doNotForceExitOnUpdateVisible&&c.cause==="updateVisible")return}this.sendDataToLog(Object.assign(e,{event:c.name,visibility_id:f}))};c.clearUntrackedVisibleElements=function(){var a=this.getAllTrackedElements();for(var b in this.visibleElementInfo)if(!(b in a)){var c=this.visibleElementInfo[b];c.elem&&this.handleEvent(c.elem,{name:"hidden",cause:"removed"})}};c.clearAllVisibleElements=function(a){a===void 0&&(a="default");var b=this.getAllTrackedElements();for(var c in b)c in this.visibleElementInfo&&this.handleEvent(b[c],{name:"hidden",cause:a});this.clearUntrackedVisibleElements()};c.updateVisibleElements=function(){this.addCauseToAllHiddenEvents?this.clearAllVisibleElements("updateVisible"):this.clearAllVisibleElements(),this.fireEvent()};c.refreshAndFireEvent=function(a){this.refreshAllTrackedElements(),this.fireEventCallback(a)};c.onUnload=function(){this.addCauseToAllHiddenEvents?this.clearAllVisibleElements("unload"):this.clearAllVisibleElements(),this.listeners&&(this.listeners.release(),this.listeners=null),this.extraCleanup&&(g||(g=b("ErrorUtils"))).applyWithGuard(this.extraCleanup.bind(this))};a.init=function(b){return new a(b)};return a}();e.exports=a}),null);
__d("GamesImpressionTracker",["cx","Arbiter","Banzai","Event","GamesGogglesSwitch","VisibilityTracking","throttle"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="data-gamesrankedimp";a=1e3;function i(a){b("GamesGogglesSwitch").isEnabled()&&(a.className=a.className+" _1z5y")}function j(a){return function(){a&&(a(),a=null)}}c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.handleEvent=function(a,c){if(c.name==="visible"){var d=a.getAttribute(h);a.removeAttribute(h);d&&(i(a),d&&b("Banzai").post("games_ranked_imp",{data:d}));b("Event").listen(a,"mouseover",j(function(){b("Banzai").post("games_mouseover",{data:d}),b("Event").listen(a,"mouseout",j(function(){b("Banzai").post("games_mouseout",{data:d})}))}))}};return c}(b("VisibilityTracking"));var k=new c({selector:"[data-gamesrankedimp]",handleAllVisibleEvents:!0,cacheTrackedElements:!0});d=b("throttle").acrossTransitions(function(){return k.fireEventCallback()},a,null);k.listeners&&k.listeners.addSubscriptions(b("Event").listen(document,"mousemove",d),b("Event").listen(document,"click",d),b("Arbiter").subscribe("games_unit_loaded",function(){return k.refreshAllTrackedElements()}))}),null);
__d("ViewableSessionValidationWebResultTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:ViewableSessionValidationWebResultLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:ViewableSessionValidationWebResultLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:ViewableSessionValidationWebResultLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setExtras=function(a){this.$1.extras=a;return this};c.setFailureReason=function(a){this.$1.failure_reason=a;return this};c.setFbFeedLocation=function(a){this.$1.fb_feed_location=a;return this};c.setPrimaryImpressionChannel=function(a){this.$1.primary_impression_channel=a;return this};c.setScrollSpeed=function(a){this.$1.scroll_speed=a;return this};c.setSecondaryImpressionChannel=function(a){this.$1.secondary_impression_channel=a;return this};c.setSessionEndTime=function(a){this.$1.session_end_time=a;return this};c.setSessionKey=function(a){this.$1.session_key=a;return this};c.setSessionStartTime=function(a){this.$1.session_start_time=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setTimeFromLoad=function(a){this.$1.time_from_load=a;return this};c.setVerificationTime=function(a){this.$1.verification_time=a;return this};c.setVerifyResult=function(a){this.$1.verify_result=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={extras:!0,failure_reason:!0,fb_feed_location:!0,primary_impression_channel:!0,scroll_speed:!0,secondary_impression_channel:!0,session_end_time:!0,session_key:!0,session_start_time:!0,time:!0,time_from_load:!0,verification_time:!0,verify_result:!0,weight:!0};e.exports=a}),null);
__d("ViewableSessionStore",["BanzaiODS","ViewableSessionValidationWebResultTypedLogger","ge","getCentralImpressionScrollSpeed","getCentralImpressionTimeAfterRefresh","getViewportDimensions","setTimeout"],(function(a,b,c,d,e,f){__p&&__p();var g="viewable_session_validation",h=[],i={};function a(a,c,d){try{var e=l(a);i[e]||(i[e]={context:a,isValid:!1});j(e,c,d);!i[e].isValid?k(e)&&(i[e].enterTime=Date.now(),i[e].exitTime=null,i[e].isValid=!0):k(e)||(i[e].isValid=!1,i[e].exitTime=Date.now())}catch(a){b("BanzaiODS").bumpEntityKey(2966,g,"error.onViewUpdate."+a.message)}}function j(a,b,c){__p&&__p();var d;c=c.getBoundingClientRect();var e=c.bottom,f=c.top,g=c.left;c=c.right;var h={};d=(d=(d=i[a])==null?void 0:(d=d.boundaryDimensions)==null?void 0:d.ref)!=null?d:0;switch(b){case"top":h={top:e,left:g,right:c,ref:++d};break;case"bottom":h={bottom:f,left:g,right:c,ref:--d};break}i[a]=babelHelpers["extends"]({},i[a],{boundaryDimensions:babelHelpers["extends"]({},(b=i[a])==null?void 0:b.boundaryDimensions,h)})}function k(a){__p&&__p();a=(a=i[a])==null?void 0:a.boundaryDimensions;if(a==void 0)return!1;var c=b("ge")("pagelet_bluebar"),d=b("getViewportDimensions")(),e=d.width;d=d.height;var f=document.elementFromPoint(0,0);c=c!=null&&f!=null&&c.contains(f)?f.getBoundingClientRect().bottom:0;f=h.reduce(function(a,b){return Math.max(b.getBoundingClientRect().bottom,a)},c);return a.top!=void 0&&a.bottom!=void 0&&a.top<a.bottom&&a.top<d&&a.bottom>f&&a.left<a.right&&a.left<e&&a.right>0}function l(a){return a.postId}function m(a){var b=i[a];if(b==void 0)return!1;var c=b.exitTime;return b.isValid===!0||c!=null&&Date.now()-c<1e3||k(a)}function n(a,c,d,e){__p&&__p();e===void 0&&(e=1);try{var f,h=b("getCentralImpressionScrollSpeed")(),j=b("getCentralImpressionTimeAfterRefresh")(),k="event_logged."+a+"."+d.toString()+".";f=new(b("ViewableSessionValidationWebResultTypedLogger"))().setVerificationTime(Date.now()).setExtras(JSON.stringify({pageId:i[c].context.pageId,boundaryDimension:JSON.stringify((f=i[c].boundaryDimensions)!=null?f:"null"),viewportDimension:JSON.stringify(b("getViewportDimensions")())})).setFbFeedLocation(d).setSessionStartTime(i[c].enterTime).setSessionEndTime(i[c].exitTime).setPrimaryImpressionChannel("viewable_impression_tracker").setSecondaryImpressionChannel("two_div_boundary").setSessionKey(c).setScrollSpeed(h).setTimeFromLoad(j);if(m(c))f.setVerifyResult(1),b("BanzaiODS").bumpEntityKey(2966,g,k+"pass");else{if(e>0){b("setTimeout")(function(){n(a,c,d,e-1)},500);return}f.setVerifyResult(0).setFailureReason("over-logging");b("BanzaiODS").bumpEntityKey(2966,g,k+"overlogging")}f.log()}catch(a){b("BanzaiODS").bumpEntityKey(2966,g,"error.onEventLogged."+a.message)}}e.exports={ViewableSessionStore:i,onViewUpdate:a,onEventLogged:n,setupTopRef:function(a){h.push(a)}}}),null);
__d("QuickPipeRequest",["AjaxPipeRequest","Arbiter","ArtilleryOnUntilOffLogging","DocumentTitle","PageNavigationStageLogger","Quickling","QuicklingConfig","QuicklingFetchStreamConfig","QuicklingRefreshOverheadUtil","RoyalBluebar","URI","UserAgent_DEPRECATED","goOrReplace","ifRequired"],(function(a,b,c,d,e,f){__p&&__p();var g,h=b("QuicklingConfig").version,i,j="";a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){__p&&__p();var e={version:h};c=a.call(this,c,d,{quickling:e})||this;c._processFirstResponse=function(a){var c=a.getPayload();k(c.title);if(!c.isCometResponse){this._resetScrollOnFirstResponse();a=a.getRequest();a&&document.body&&(document.body.className=c.body_class||"")}b("Arbiter").inform("quickling/response");b("ArtilleryOnUntilOffLogging").onNewPageLoad()};c._isQuickling=!0;return c}var d=c.prototype;d._preBootloadFirstResponse=function(a){return!0};d._fireDomContentCallback=function(){this._request&&this._request.cavalry&&this._request.cavalry.setTimeStamp("t_domcontent"),b("ifRequired")("PageTransitions",function(a){a.transitionComplete()}),a.prototype._fireDomContentCallback.call(this)};d._fireOnloadCallback=function(){var b=this._request;b!=null&&b.cavalry&&(b.cavalry.setTimeStamp("t_hooks"),b.cavalry.setTimeStamp("t_layout"),b.cavalry.setTimeStamp("t_onload"));a.prototype._fireOnloadCallback.call(this)};d.isPageActive=function(a){return b("Quickling").isPageActive(a)};d._versionCheck=function(a){__p&&__p();if(a.version==h){b("QuicklingRefreshOverheadUtil").onQuicklingVersionMatch();return!0}var c=["quickling","ajaxpipe","ajaxpipe_token","ajaxpipe_fetch_stream"];b("PageNavigationStageLogger").setCookieForNavigation(a.uri);b("PageNavigationStageLogger").setNote("quickling_version");b("PageNavigationStageLogger").updateCookie();b("QuicklingRefreshOverheadUtil").onQuicklingRefreshStart();b("goOrReplace")(window.location,new(g||(g=b("URI")))(a.uri).removeQueryData(c),!0);b("RoyalBluebar").stopTransitionAnimation();return!1};d._resetScrollOnFirstResponse=function(){window.scrollTo(0,0)};d.getSanitizedParameters=function(){return["quickling"]};d._getAsyncRequestType=function(){return b("QuicklingFetchStreamConfig").experimentName!=="off"?"useFetchWithIframeFallback":"useIframeTransport"};return c}(b("AjaxPipeRequest"));function k(a){a=a||"Facebook",b("DocumentTitle").set(a),b("UserAgent_DEPRECATED").ie()&&(j=a,i||(i=window.setInterval(function(){var a=j,c=b("DocumentTitle").get();a!=c&&b("DocumentTitle").set(a)},5e3,!1)))}e.exports=a}),null);
__d("QuicklingAugmenter",["URI"],(function(a,b,c,d,e,f){__p&&__p();var g,h=[];a={addHandler:function(a){h.push(a)},augmentURI:function(a){var c=[],d=new(g||(g=b("URI")))(a);h.forEach(function(a){var b=a(d);if(!b)return d;c.push(a);d=d.addQueryData(b)});h=c;return d}};e.exports=a}),null);
__d("Quickling",["AjaxPipeRequest","Arbiter","BigPipe","ContextualComponent","PageEvents","PageHooks","PageNavigationStageLogger","PageTransitionsRegistrar","PHPQuerySerializer","QuicklingAugmenter","QuicklingConfig","QuicklingRefreshOverheadUtil","QuickPipeRequest","RoyalBluebar","Run","TimerStorage","URI","cancelAnimationFrame","cancelIdleCallback","clearImmediate","clearInterval","clearTimeout","ge","isEmpty"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i,j=b("QuicklingConfig").sessionLength,k=new RegExp(b("QuicklingConfig").inactivePageRegex),l=0,m=!1,n={init:function(){if(m)return;m=!0;b("Run").onAfterLoad(function(){b("PageTransitionsRegistrar").registerHandler(p,1)})},isActive:function(){return m},isPageActive:function(a){__p&&__p();if(a==="#")return!1;a=new(g||(g=b("URI")))(a);if(a.getDomain()&&a.getDomain()!=new(g||(g=b("URI")))(window.location.href).getDomain())return!1;if(a.getPath()=="/l.php"){var c=a.getQueryData().u;if(c){c=new(g||(g=b("URI")))(unescape(c)).getDomain();if(c&&c!=new(g||(g=b("URI")))(window.location.href).getDomain())return!1}}c=a.getPath();a=a.getQueryData();(h||(h=b("isEmpty")))(a)||(c+="?"+(i||(i=b("PHPQuerySerializer"))).serialize(a));return Object.keys(a).reduce(function(a,c){return a||b("QuicklingConfig").badRequestKeys.includes(c)},!1)?!1:!k.test(c)},getLoadCount:function(){return l},transitionHandler_DO_NOT_USE:p};function o(){l++;return l>=j}function p(a){__p&&__p();b("AjaxPipeRequest").setCurrentRequest(null);if(o()){b("PageNavigationStageLogger").setNote("quickling_refresh");return!1}a=b("QuicklingAugmenter").augmentURI(a);if(!n.isPageActive(a)){b("PageNavigationStageLogger").setNote("quickling_inactive");return!1}b("TimerStorage").clearAll(b("TimerStorage").ANIMATION_FRAME,b("cancelAnimationFrame"));b("TimerStorage").clearAll(b("TimerStorage").IDLE_CALLBACK,b("cancelIdleCallback"));b("TimerStorage").clearAll(b("TimerStorage").IMMEDIATE,b("clearImmediate"));b("TimerStorage").clearAll(b("TimerStorage").INTERVAL,b("clearInterval"));b("TimerStorage").clearAll(b("TimerStorage").TIMEOUT,b("clearTimeout"));window.ExitTime=Date.now();b("QuicklingRefreshOverheadUtil").onQuicklingStart();b("Run").__removeHook(b("PageHooks").ONLOAD_HOOK);b("Run").__removeHook(b("PageHooks").DOMREADY_HOOK);b("Arbiter").inform(b("PageEvents").AJAXPIPE_ONUNLOAD,{transition_type:"quickling"});var c="content";q(c);b("RoyalBluebar").startTransitionAnimation();c=new(b("QuickPipeRequest"))(c,a).setResetHandler(b("RoyalBluebar").stopTransitionAnimation).setFinallyHandler(b("RoyalBluebar").stopTransitionAnimation).send();c.getArbiter().subscribeOnce(b("BigPipe").Events.displayed,b("RoyalBluebar").stopTransitionAnimation);a=window.__bodyWrapper;a.getCodeUsage&&a.clearCodeUsage();return b("PageTransitionsRegistrar").DELAY_HISTORY}function q(a){var c=function(){var c=b("ge")(a);c=b("ContextualComponent").forNode(c);c&&c.cleanup();b("PageHooks").runHooks("onleavehooks")};c()}e.exports=n;a.Quickling=n}),null);
__d("FBFeedImpressionTopMarginGetter",["getElementPosition","getStyleProperty"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null;function h(){__p&&__p();try{if(g==null)return 0;var a=b("getStyleProperty")(g,"position");if(a==="fixed"){a=b("getElementPosition")(g);return a.height>0?Math.max(0,a.y+a.height):0}return 0}catch(a){return 0}}function i(){__p&&__p();try{var a=document.getElementById("bluebarRoot");if(a==null)return 0;a=a.firstChild;if(a==null)return 0;a=b("getElementPosition")(a);return Math.max(0,a.y+a.height)}catch(a){return 0}}a={setActionBar:function(a){g=a},getTopMargin:function(){var a=i(),b=h();return Math.max(a,b)}};e.exports=a}),null);
__d("mayHaveConnectedCharacters",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.match(/[\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F\u0D80-\u0DFF\u0E00-\u0E7F\u0E80-\u0EFF\u0F00-\u0FFF\u1000-\u109F\u1700-\u171F\u1720-\u173F\u1740-\u175F\u1760-\u177F\u1780-\u17FF\u1900-\u194F\u1950-\u197F\u1980-\u19DF\u19E0-\u19FF\u1A00-\u1A1F\u1A20-\u1AAF\u1B00-\u1B7F\u1B80-\u1BBF\u1BC0-\u1BFF\u1C00-\u1C4F\u1CC0-\u1CCF\uA800-\uA82F\uA840-\uA87F\uA880-\uA8DF\uA8E0-\uA8FF\uA930-\uA95F\uA980-\uA9DF\uA9E0-\uA9FF\uAA00-\uAA5F\uAA60-\uAA7F\uAA80-\uAADF\uAAE0-\uAAFF\uABC0-\uABFF\u0600-\u06FF\u0750–\u077F\u08A0–\u08FF\uFB50–\uFDFF\uFE70–\uFEFF\u4e00-\u9faf\u0D80-\u0DFF\u0E80-\u0EFF]/)!=null}e.exports=a}),null);
if (self.CavalryLogger) { CavalryLogger.start_js(["dMxg1"]); }

__d("DetectBrokenProxyCache",["AsyncSignal","Cookie","URI"],(function(a,b,c,d,e,f){var g;function a(a,c){var d=b("Cookie").get(c);if(d!=a&&d!=null&&a!="0"){c={c:"si_detect_broken_proxy_cache",m:c+" "+a+" "+d};a=new(g||(g=b("URI")))("/common/scribe_endpoint.php").getQualifiedURI().toString();new(b("AsyncSignal"))(a,c).send()}}e.exports={run:a}}),null);
__d("AccessibilityLogger",["AsyncSignal","Cookie"],(function(a,b,c,d,e,f){__p&&__p();var g={COOKIE:"a11y",DECAY_MS:6*60*60*1e3,DEFAULT:{sr:0,"sr-ts":Date.now(),jk:0,"jk-ts":Date.now(),kb:0,"kb-ts":Date.now(),hcm:0,"hcm-ts":Date.now()},getCookie:function(){var a=g.DEFAULT,c=b("Cookie").get(g.COOKIE);if(c){c=JSON.parse(c);for(var d in a)d in c&&(a[d]=c[d])}return a},logKey:function(a,c){var d=g.getCookie();d[a]++;var e=Date.now();e-d[a+"-ts"]>g.DECAY_MS&&(new(b("AsyncSignal"))("/ajax/accessibilitylogging",{eventName:c,times_pressed:d[a]}).send(),d[a+"-ts"]=e,d[a]=0);b("Cookie").set(g.COOKIE,JSON.stringify(d))},logHCM:function(){g.logKey("hcm","hcm_users")},logSRKey:function(){g.logKey("sr","sr_users")},logJKKey:function(){g.logKey("jk","jk_users")},logFocusIn:function(){g.logKey("kb","kb_users")}};e.exports=g}),null);
__d("ClickRefUtils",["DataAttributeUtils"],(function(a,b,c,d,e,f){__p&&__p();var g={get_intern_ref:function(a){__p&&__p();if(a){var b={profile_minifeed:1,gb_content_and_toolbar:1,gb_muffin_area:1,ego:1,bookmarks_menu:1,jewelBoxNotif:1,jewelNotif:1,BeeperBox:1,searchBarClickRef:1};for(var a=a;a&&a!=document.body;a=a.parentNode){if(!a.id||typeof a.id!=="string")continue;if(a.id.substr(0,8)=="pagelet_")return a.id.substr(8);if(a.id.substr(0,8)=="box_app_")return a.id;if(b[a.id])return a.id}}return"-"},get_href:function(a){a=a.getAttribute&&(a.getAttribute("ajaxify")||a.getAttribute("data-endpoint"))||a.action||a.href||a.name;return typeof a==="string"?a:null},should_report:function(a,c){if(c=="FORCE")return!0;return c=="INDIRECT"?!1:a&&(g.get_href(a)||a.getAttribute&&b("DataAttributeUtils").getDataFt(a))}};e.exports=g}),null);
__d("ClickRefLogger",["Arbiter","Banzai","ClickRefUtils","Cookie","Env","ScriptPath","SessionName","Vector","$","collectDataAttributes","ge","pageID"],(function(a,b,c,d,e,f){__p&&__p();var g,h={delay:0,retry:!0};function i(a){if(!b("ge")("content"))return[0,0,0,0];b("$")("content");a=b("Vector").getEventPosition(a);return[a.x,a.y,0,0]}function j(c,d,e,f){__p&&__p();var g="r",h=[0,0,0,0],j,k;if(e){j=e.type;j=="click"&&b("ge")("content")&&(h=i(e));var l=0;e.ctrlKey&&(l+=1);e.shiftKey&&(l+=2);e.altKey&&(l+=4);e.metaKey&&(l+=8);l&&(j+=l)}d&&(k=b("ClickRefUtils").get_href(d));l=b("collectDataAttributes")(e?e.target||e.srcElement:d,["ft","gt"]);Object.assign(l.ft,f.ft);Object.assign(l.gt,f.gt);typeof l.ft.ei==="string"&&delete l.ft.ei;e&&e.which&&(l.ft.click_type=e.which===1?"left":e.which===2?"middle":"right");f=[c._ue_ts,c._ue_count,k||"-",c._context,j||"-",b("ClickRefUtils").get_intern_ref(d),g,a.URI?a.URI.getRequestURI(!0,!0).getUnqualifiedURI().toString():location.pathname+location.search+location.hash,l].concat(h).concat(b("pageID")).concat(b("ScriptPath").getTopViewEndpoint());return f}b("Arbiter").subscribe("ClickRefAction/new",function(a,c){if(b("ClickRefUtils").should_report(c.node,c.mode)){a=j(c.cfa,c.node,c.event,c.extra_data);b("Cookie").set("act",c.cfa.ue);c=[b("SessionName").getName(),Date.now(),"act"];b("Banzai").post("click_ref_logger",Array.prototype.concat(c,a),h)}});b("Arbiter").subscribe("ClickRefAction/contextmenu",function(a,c){if(b("ClickRefUtils").should_report(c.node,c.mode)){a=j(c.cfa,c.node,c.event,c.extra_data);b("Cookie").set("act",c.cfa.ue);c=[b("SessionName").getName(),Date.now(),"act"];b("Banzai").post("click_ref_logger",Array.prototype.concat(c,a),h)}});function c(a){__p&&__p();function c(a){var b="";for(var c=0;c<a.length;c++)b+=String.fromCharCode(1^a.charCodeAt(c));return b}function d(a,b,c,e){__p&&__p();var f=b[c];if(f&&a&&f in a)if(c+1<b.length)d(a[f],b,c+1,e);else{var g=a[f];b=function(){setTimeout(e.bind(null,arguments));return g.apply(this,arguments)};b.toString=g.toString.bind(g);Object.defineProperty(a,f,{configurable:!1,writable:!0,value:b})}}var e={},f={},g=!1;function h(a,b){if(f[a])return;f[a]=e[a]=1}a=a[c("jiri")];if(a){var i=[];c(a).split(",").map(function(a,f){__p&&__p();var j=a.substring(1).split(":"),k;switch(a.charAt(0)){case"1":i.push(function(a){window[j[0]]&&h(f,j[0])});break;case"2":k=new RegExp(j[0]);d(window,j,2,function(b){b=b[j[1]];typeof b==="string"&&k.test(b)&&h(f,a)});break;case"3":d(window,j,0,function(){for(var a=i.length;a--;)i[a]();a=Object.keys(e);a.length&&(e={},setTimeout(b("Banzai")[c("qnru")].bind(b("Banzai"),c("islg"),{m:""+a}),5e3))});break;case"4":g=!0;break}})}}try{c(g||(g=b("Env")))}catch(a){}}),null);
__d("HighContrastMode",["AccessibilityLogger","CSS","CurrentUser","DOM","Style","URI","emptyFunction"],(function(a,b,c,d,e,f){__p&&__p();var g,h={init:function(a){__p&&__p();var c=new(g||(g=b("URI")))(window.location.href);if(c.getPath().indexOf("/intern/")===0)return;if(window.top!==window.self)return;c=b("DOM").create("div");b("DOM").appendContent(document.body,c);c.style.cssText="border: 1px solid !important;border-color: red green !important;position: fixed;height: 5px;top: -999px;background-image: url("+a.spacerImage+") !important;";a=b("Style").get(c,"background-image");var d=b("Style").get(c,"border-top-color"),e=b("Style").get(c,"border-right-color");d=d==e&&a&&(a=="none"||a=="url(invalid-url:)");d&&(b("CSS").conditionClass(document.documentElement,"highContrast",d),b("CurrentUser").getID()&&b("AccessibilityLogger").logHCM());b("DOM").remove(c);h.init=b("emptyFunction")}};e.exports=h}),null);
__d("PagesBanzaiEventListener",["Event","PagesEventObserver","Run"],(function(a,b,c,d,e,f){a={registerLogEvent:function(a,c,d){var e=b("Event").listen(a,"click",function(a){b("PagesEventObserver").logData_DEPRECATED(c,d)});b("Run").onLeave(function(){e.remove()})}};e.exports=a}),null);
__d("KappaWrapper",["AsyncSignal","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){var g=!1;e.exports={forceStart:function(a,c,d){var e=0,f=function d(){new(b("AsyncSignal"))("/si/kappa/",{Ko:"a"}).send(),++e<a&&b("setTimeoutAcrossTransitions")(d,c*1e3)};b("setTimeoutAcrossTransitions")(f,(c+d)*1e3)},start:function(a,b,c){g||(g=!0,this.forceStart(a,b,c))}}}),null);
__d("Chromedome",["fbt"],(function(a,b,c,d,e,f,g){__p&&__p();a={start:function(a){__p&&__p();if(top!==window||document.domain==null||!/(^|\.)facebook\.(com|sg)$/.test(document.domain))return;a=g._("\u0e2b\u0e22\u0e38\u0e14!");var b=g._("\u0e19\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e38\u0e13\u0e2a\u0e21\u0e1a\u0e31\u0e15\u0e34\u0e01\u0e32\u0e23\u0e17\u0e33\u0e07\u0e32\u0e19\u0e02\u0e2d\u0e07\u0e40\u0e1a\u0e23\u0e32\u0e27\u0e4c\u0e40\u0e0b\u0e2d\u0e23\u0e4c\u0e17\u0e35\u0e48\u0e21\u0e35\u0e08\u0e38\u0e14\u0e21\u0e38\u0e48\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e43\u0e2b\u0e49\u0e43\u0e0a\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e1e\u0e31\u0e12\u0e19\u0e32 \u0e2b\u0e32\u0e01\u0e1c\u0e39\u0e49\u0e43\u0e14\u0e1a\u0e2d\u0e01\u0e43\u0e2b\u0e49\u0e04\u0e38\u0e13\u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01\u0e41\u0e25\u0e49\u0e27\u0e27\u0e32\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e1a\u0e32\u0e07\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e1b\u0e34\u0e14\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e04\u0e38\u0e13\u0e2a\u0e21\u0e1a\u0e31\u0e15\u0e34\u0e01\u0e32\u0e23\u0e17\u0e33\u0e07\u0e32\u0e19\u0e02\u0e2d\u0e07 Facebook \u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e02\u0e49\u0e32\u0e16\u0e36\u0e07\u0e1a\u0e31\u0e0d\u0e0a\u0e35\u0e02\u0e2d\u0e07\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e43\u0e14\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e2b\u0e19\u0e36\u0e48\u0e07 \"\u0e42\u0e14\u0e22\u0e21\u0e34\u0e0a\u0e2d\u0e1a\" \u0e04\u0e33\u0e1a\u0e2d\u0e01\u0e01\u0e25\u0e48\u0e32\u0e27\u0e40\u0e0a\u0e48\u0e19\u0e19\u0e35\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e25\u0e25\u0e27\u0e07\u0e41\u0e25\u0e30\u0e08\u0e30\u0e17\u0e33\u0e43\u0e2b\u0e49\u0e1c\u0e39\u0e49\u0e19\u0e31\u0e49\u0e19\u0e21\u0e35\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c\u0e40\u0e02\u0e49\u0e32\u0e16\u0e36\u0e07\u0e1a\u0e31\u0e0d\u0e0a\u0e35 Facebook \u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13"),c=g._("\u0e42\u0e1b\u0e23\u0e14\u0e14\u0e39 {url} \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21",[g._param("url","https://www.facebook.com/selfxss")]);if(window.chrome||window.safari){var d="font-family:helvetica; font-size:20px; ";[[a,d+"font-size:50px; font-weight:bold; color:red; -webkit-text-stroke:1px black;"],[b,d],[c,d],["",""]].map(function(a){window.setTimeout(console.log.bind(console,"\n%c"+a[0].toString(),a[1]))})}else{a=[""," .d8888b.  888                       888","d88P  Y88b 888                       888","Y88b.      888                       888",' "Y888b.   888888  .d88b.  88888b.   888','    "Y88b. 888    d88""88b 888 "88b  888','      "888 888    888  888 888  888  Y8P',"Y88b  d88P Y88b.  Y88..88P 888 d88P",' "Y8888P"   "Y888  "Y88P"  88888P"   888',"                           888","                           888","                           888"];d=(""+b.toString()).match(/.{35}.+?\s+|.+$/g);if(d!=null){b=Math.floor(Math.max(0,(a.length-d.length)/2));for(var e=0;e<a.length||e<d.length;e++){var f=a[e];a[e]=f+new Array(45-f.length).join(" ")+(d[e-b]||"")}}console.log("\n\n\n"+a.join("\n")+"\n\n"+c.toString()+"\n");return}}};e.exports=a}),null);
__d("ArtilleryRequestDataCollection",["Arbiter","ArtilleryRequestDataCollector","BigPipe","PageEvents","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=12e4,h={},i={},j=!1;function k(a){delete h[a],clearTimeout(i[a]),delete i[a]}a={init:function(){__p&&__p();var a=this;if(j)return;b("Arbiter").subscribe(b("BigPipe").Events.init,function(c,d){c=d.arbiter;c.subscribeOnce(b("PageEvents").AJAXPIPE_FIRST_RESPONSE,function(b,c){b=c.lid;c=c.quickling;c||a.start(b)},"new")});j=!0},start:function(a){var c=this;if(h[a])return;var d=new(b("ArtilleryRequestDataCollector"))().start();h[a]=d;i[a]=b("setTimeoutAcrossTransitions")(function(){c.disable(a)},g)},finish:function(a){var b=h[a];if(b){b=b.finish();k(a);return b}return{sampleRecorder:null,profilingCountersData:[],userTimingProfilerData:null,timeSliceData:[]}},getCollector:function(a){return h[a]},disable:function(a){var b=h[a];b&&(b.disable(),k(a))}};e.exports=a}),null);
__d("ErrorFilter",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=50,h=new Map(),i;function j(){__p&&__p();var a=Date.now();if(i+1e3<a){for(var b=h,c=Array.isArray(b),d=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=b.length)break;e=b[d++]}else{d=b.next();if(d.done)break;e=d.value}e=e;var f=e[0];e=e[1];e<a&&h["delete"](f)}i=a}}a={shouldLog:function(a){__p&&__p();if(a.message&&a.message.toLowerCase().startsWith("script error"))return!1;a=a.name+a.message+a.type;var b=h.get(a),c=Date.now();if(b==null||b+g<c){h.set(a,c);j();return!0}return!1}};e.exports=a}),null);
__d("getSimpleHash",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){var b=0;for(var c=0;c<a.length;c++){var d=a.charCodeAt(c);b=(b<<5)-b+d;b|=0}return String(b)}e.exports=a}),null);
__d("ErrorPoster",["Banzai","ErrorFilter","getSimpleHash","performanceNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=[],i=0,j=!0;function k(a,b){var c={};b&&Object.keys(b).forEach(function(a){b[a]&&(c[a]=!0)});Object.keys(a).forEach(function(b){a[b]?c[b]=!0:c[b]&&delete c[b]});return Object.keys(c)}function l(a){return((a=a)!=null?a:[]).map(function(a){return{column:parseInt(a.column,10),identifier:a.identifier,line:parseInt(a.line,10),script:a.script}})}function m(a){var b=a.type,c=a.project,d=a.name;a=a.loggingSource;a=a==="FBLOGGER";b=a&&b==="error"?"mustfix":b;var e=[d];a&&d!=="FBLogger"&&e.unshift("FBLogger caught:");b!=null&&c!=null&&e.unshift("<level:"+b+"> <name:"+c+">");return e.join(" ")}function n(a,c){c={cavalry_lid:c.cavalry_lid,access_token:c.access_token,ancestor_hash:b("getSimpleHash")(a.name+a.stack),cerror:c.cerror,column:a.column,extra:k(a.extra,c.jsErrorExtra),guard:a.guard,guardList:a.guardList,line:a.line,message:a.message,messageWithParams:a.messageWithParams,name:m(a),reactComponentStack:a.reactComponentStack,script:a.script,site_category:c.site_category,stackFrames:l(a.stackFrames),type:a.type,project:a.project,push_phase:c.push_phase,script_path:c.script_path,server_revision:c.server_revision,spin:c.spin,svn_rev:String(c.client_revision),web_session_id:c.web_session_id,version:2};var d=a.deferredSource;d&&d.stackFrames&&(c.deferredSource={stackFrames:l(d.stackFrames)});a.fbloggerMetadata&&(c.fbloggerMetadata=a.fbloggerMetadata);a.loadingUrls&&(c.loadingUrls=a.loadingUrls);a.serverHash!=null&&(c.serverHash=a.serverHash);a.windowLocationURL!=null&&(c.windowLocationURL=a.windowLocationURL);a.loggingSource!=null&&(c.loggingSource=a.loggingSource);return c}function o(a){__p&&__p();var c;c=(c=a.ancestor_hash)!=null?c:"0";var d=h.slice();h.length<15&&h.push(c);a.ancestors=d;a.page_time=Math.floor((g||(g=b("performanceNow")))());a.page_position=++i;c=a.type;if(j&&(c==null||c==""||c==="error")){a.extra=(d=a.extra)!=null?d:[];a.extra.push("first_error");j=!1}}function a(a,c){if(!b("ErrorFilter").shouldLog(a))return!1;a=n(a,c);o(a);b("Banzai").post("js_error_logging",a);return!0}e.exports={postError:a,primeForPosting:o,createErrorPayload:n}}),null);
__d("ErrorLogging",["BanzaiODS","ErrorPoster","ErrorPubSub","JSErrorExtra","JSErrorPlatformColumns","ScriptPath","SiteData","WebSession"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function a(a){a=b("ErrorPoster").postError(a,{access_token:b("JSErrorPlatformColumns").access_token,client_revision:(a=b("SiteData")).client_revision,jsErrorExtra:b("JSErrorExtra"),server_revision:a.server_revision,spin:a.spin,push_phase:a.push_phase,script_path:b("ScriptPath").getScriptPath(),web_session_id:b("WebSession").getId()});if(!a)return;["error_signal.category.javascript_error","error_signal.sent","error_signal."+(b("SiteData").haste_site==="mobile"?"m_touch":"www")+".sent"].forEach(function(a){return b("BanzaiODS").bumpEntityKey(976,"js_error_reporting",a)})}(g||b("ErrorPubSub")).addListener(a);e.exports={defaultJSErrorHandler:a}}),null);
__d("NavigationMetricsEnumJS",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NAVIGATION_START:"navigationStart",UNLOAD_EVENT_START:"unloadEventStart",UNLOAD_EVENT_END:"unloadEventEnd",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",CONNECT_END:"connectEnd",SECURE_CONNECTION_START:"secureConnectionStart",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd",DOM_LOADING:"domLoading",DOM_INTERACTIVE:"domInteractive",DOM_CONTENT_LOADED_EVENT_START:"domContentLoadedEventStart",DOM_CONTENT_LOADED_EVENT_END:"domContentLoadedEventEnd",DOM_COMPLETE:"domComplete",LOAD_EVENT_START:"loadEventStart",LOAD_EVENT_END:"loadEventEnd"})}),null);
__d("NavigationTimingHelper",["NavigationMetricsEnumJS","forEachObject","performance"],(function(a,b,c,d,e,f){__p&&__p();var g;function h(a,c){var d={};b("forEachObject")(b("NavigationMetricsEnumJS"),function(b){var e=c[b];e&&(d[b]=e+a)});return d}var i={getAsyncRequestTimings:function(a){if(!a||!(g||(g=b("performance"))).timing||!(g||(g=b("performance"))).getEntriesByName)return void 0;a=(g||(g=b("performance"))).getEntriesByName(a);return a.length===0?void 0:h(g.timing.navigationStart,a[0])},getPerformanceNavigationTiming:function(){if(!(g||(g=b("performance"))).timing||!(g||(g=b("performance"))).getEntriesByType)return{};var a=(g||(g=b("performance"))).getEntriesByType("navigation");return!a.length?{}:h(g.timing.navigationStart,a[0])},getNavTimings:function(){if(!(g||(g=b("performance"))).timing)return void 0;var a=babelHelpers["extends"]({},h(0,(g||(g=b("performance"))).timing),i.getPerformanceNavigationTiming());return h(0,a)}};e.exports=i}),null);
__d("PageletEventsHelper",["Arbiter","PageletEventConstsJS"],(function(a,b,c,d,e,f){__p&&__p();var g="BigPipe/init",h="MRenderingScheduler/init",i="pagelet_event",j="phase_begin",k={},l=[],m=!1;function n(){return{pagelets:{},categories:{},phase_start:{},display_resources:{},all_resources:{}}}function o(a,b,c,d){k[d]==void 0&&(k[d]=n()),k[d].pagelets[b]==void 0&&(k[d].pagelets[b]={}),k[d].pagelets[b][a]=c}function p(a){__p&&__p();a.subscribe(i,function(a,c){__p&&__p();var d=c.event,e=c.ts;a=c.id;var f=c.lid,g=c.phase,h=c.categories,i=c.allResources;c=c.displayResources;o(d,a,e,f);var j=k[f],m=j.pagelets[a];d===b("PageletEventConstsJS").ARRIVE_END&&(m.phase=g,j.all_resources[a]=i,j.display_resources[a]=c);(d===b("PageletEventConstsJS").ONLOAD_END||d===b("PageletEventConstsJS").DISPLAY_END)&&h&&h.forEach(function(a){j.categories[a]==void 0&&(j.categories[a]={}),j.categories[a][d]=e});for(var m=0,g=l.length;m<g;m++)l[m](a,d,e,f)}),a.subscribe(j,function(a,b){k[b.lid].phase_start[b.phase]=b.ts})}a={init:function(){__p&&__p();if(m)return;b("Arbiter").subscribe(g,function(a,b){a=b.lid;b=b.arbiter;k[a]=n();p(b)});b("Arbiter").subscribe(h,function(a,b){a=b.lid;b=b.arbiter;k[a]=n();p(b)});m=!0},getMetrics:function(a){return k[a]?JSON.parse(JSON.stringify(k[a])):null},subscribeToPageletEvents:function(a){l.push(a);return{remove:function(){l.splice(l.indexOf(a),1)}}}};e.exports=a}),null);
__d("PerfXFlusher",["invariant","Banzai"],(function(a,b,c,d,e,f,g){var h="perfx_custom_logger_endpoint",i=["perfx_page","perfx_page_type","lid"];function j(a){i.forEach(function(b){return g(b in a,'PerfXFlusher: Field "%s" missing in the PerfX payload',b)})}a={flush:function(a){j(a),b("Banzai").post(h,a,{signal:!0})},registerToSendWithBeacon:function(a){b("Banzai").registerToSendWithBeacon(h,a)}};e.exports=a}),null);
__d("pageLoadedViaSWCache",[],(function(a,b,c,d,e,f){function a(){return self.__SW_CACHE__===1}e.exports=a}),null);
__d("PerfXLogger",["ArtilleryOnUntilOffLogging","BanzaiODS","DataAttributeUtils","NavigationMetrics","NavigationTimingHelper","PerfXFlusher","PerfXSharedFields","QuicklingRefreshOverheadUtil","VisibilityListener","forEachObject","pageLoadedViaSWCache","performanceAbsoluteNow","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g,h={},i={},j=65*1e3,k=["e2e","tti","all_pagelets_displayed","all_pagelets_loaded","artillery_disable_time"],l={},m={_listenersSetUp:!1,_uploadEarly:!1,_alreadyUploadedEarly:!1,_setupListeners:function(){__p&&__p();var a=this;if(this._listenersSetUp)return;this._subscribeToNavigationMetrics();b("PerfXFlusher").registerToSendWithBeacon(function(){var c=[];b("forEachObject")(h,function(b,d){if(!h[d].sent){b=a.getPayload(d,"unload fired");b!=null&&c.push(b)}});h={};return c});this._listenersSetUp=!0},_init:function(a){__p&&__p();var b=a.lid;if(b==null)return;this._alreadyUploadedEarly=!1;this._uploadEarly=!!a.upload_perfx_early;delete a.upload_perfx_early;var c=i[b]||[];delete i[b];if(a.sw_controlled_tags){if(navigator.serviceWorker&&navigator.serviceWorker.controller)for(var d=0;d<a.sw_controlled_tags.length;d++)c.push(a.sw_controlled_tags[d]);delete a.sw_controlled_tags}h[b]=babelHelpers["extends"]({tags:new Set(c),sent:!1},a);this._registerTimeoutSendback(b);this._setupListeners()},initWithNavigationMetricsLID:function(a,c){__p&&__p();var d=b("NavigationMetrics").getFullPageLoadLid();if(!d)return;this._init(babelHelpers["extends"]({},c,{lid:d}));if(a&&a.always)for(var c=0;c<a.always.length;c++)m.addTag(d,a.always[c]);if(a&&a.swCache&&b("pageLoadedViaSWCache")())for(var c=0;c<a.swCache.length;c++)m.addTag(d,a.swCache[c])},init:function(a,b){b!=null&&a.lid!=null&&(l[a.lid]=b),this._init(a)},addTag:function(a,c){this._alreadyUploadedEarly&&b("BanzaiODS").bumpEntityKey(2966,"PerfXLateTag",c);var d=h[a];if(d){d.tags.add(c);return}i[a]||(i[a]=[]);i[a].push(c)},addTagWithNavigationMetricsLID:function(a){this._alreadyUploadedEarly&&b("BanzaiODS").bumpEntityKey(2966,"PerfXLateTag",a);var c=b("NavigationMetrics").getFullPageLoadLid();if(!c)return;m.addTag(c,a)},_registerTimeoutSendback:function(a){var c=this,d=this._getFetchStart(a),e=j;d!=null&&(e-=(g||(g=b("performanceAbsoluteNow")))()-d);b("setTimeoutAcrossTransitions")(function(){return c._uploadPayload(a,"sendback time out")},e)},_subscribeToNavigationMetrics:function(){__p&&__p();var a=this,c;(c=b("NavigationMetrics")).addRetroactiveListener(c.Events.EVENT_OCCURRED,function(b,c){if(!(b in h))return;k.includes(c.event)&&Object.prototype.hasOwnProperty.call(c,"timestamp")&&c.timestamp!=null&&(h[b][c.event]=c.timestamp);c.event==="all_pagelets_displayed"&&a._uploadEarly&&(k.forEach(function(a){Object.prototype.hasOwnProperty.call(c,a)&&c[a]!=null&&(h[b][a]=c[a])}),a._uploadPayload(b),a._alreadyUploadedEarly=!0)});c.addRetroactiveListener(c.Events.NAVIGATION_DONE,function(b,c){var d=c.serverLID;if(!(d in h))return;k.forEach(function(a){Object.prototype.hasOwnProperty.call(c,a)&&c[a]!=null&&(h[d][a]=c[a])});a._uploadPayload(d)})},_getPayloadWithOffset:function(a,c,d){__p&&__p();a=h[a];if(a==null)return null;var e=Object.assign({},a),f=document.querySelector('[id^="hyperfeed_story_id"]');if(f){f=JSON.parse(b("DataAttributeUtils").getDataFt(f));f&&(e.mf_query_id=f.qid)}e.tags=Array.from(a.tags);e.art_id||(e.artillery_disable_time=b("ArtilleryOnUntilOffLogging").lastDisableTime());this._adjustValues(e,c);e.fetch_start=c;if(e.perfx_page_type==="normal"){f=b("NavigationTimingHelper").getNavTimings();f!=null&&f.navigationStart!=null&&(e.nav_to_fetch=c-f.navigationStart);a=b("QuicklingRefreshOverheadUtil").getOverhead(c);a!==null&&(e.quickling_refresh_overhead=a)}d!=null&&(e.sendback_reason=d);b("PerfXSharedFields").addCommonValues(e);b("VisibilityListener").supported()&&e.fetch_start&&e.all_pagelets_displayed&&e.tti&&e.e2e&&(e.tab_hidden_time_dd=b("VisibilityListener").getHiddenTime(e.fetch_start,e.fetch_start+e.all_pagelets_displayed),e.tab_hidden_time_tti=b("VisibilityListener").getHiddenTime(e.fetch_start,e.fetch_start+e.tti),e.tab_hidden_time_e2e=b("VisibilityListener").getHiddenTime(e.fetch_start,e.fetch_start+e.e2e));window&&window.location&&window.location.pathname&&(e.request_uri=window.location.pathname);delete e.sent;return e},_uploadPayload:function(a,c){if(h[a]!=null&&!h[a].sent){c=this.getPayload(a,c);c!=null&&(b("PerfXFlusher").flush(c),h[a].sent=!0)}},getPayload:function(a,b){return this._getPayloadWithOffset(a,this._getFetchStart(a),b)},_getFetchStart:function(a){if(!(a in h))return null;var c=h[a].perfx_page_type;if(c=="quickling")if(!(a in l))return null;else c=b("NavigationTimingHelper").getAsyncRequestTimings(l[a]);else c=b("NavigationTimingHelper").getNavTimings();return!c||!c.fetchStart?null:c.fetchStart},_adjustValues:function(a,b){k.forEach(function(c){Object.prototype.hasOwnProperty.call(a,c)&&(a[c]-=b)})}};e.exports=m}),null);
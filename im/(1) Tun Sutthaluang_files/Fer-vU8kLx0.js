if (self.CavalryLogger) { CavalryLogger.start_js(["pTKCZ"]); }

__d("PagesIntegrityLoggingAdminDidNotSubmitAfterFakeNewsDialogShownAction",["Laminar"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[]},function(){return[]},"ADMIN_DID_NOT_SUBMIT_AFTER_FAKE_NEWS_DIALOG_SHOWN");e.exports=a}),null);
__d("PagesIntegrityLoggingAdminDidNotSubmitAfterUnpublishedContentBankWarningDialogShownAction",["Laminar"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[]},function(){return[]},"ADMIN_DID_NOT_SUBMIT_AFTER_UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN");e.exports=a}),null);
__d("PagesIntegrityLoggingAdminDidSubmitAfterFakeNewsDialogShownAction",["Laminar"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[]},function(){return[]},"ADMIN_DID_SUBMIT_AFTER_FAKE_NEWS_DIALOG_SHOWN");e.exports=a}),null);
__d("PagesIntegrityLoggingAdminDidSubmitAfterUnpublishedContentBankWarningDialogShownAction",["Laminar"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[]},function(){return[]},"ADMIN_DID_SUBMIT_AFTER_UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN");e.exports=a}),null);
__d("PagesIntegrityLoggingFakeNewsDialogShownAction",["Laminar"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[]},function(){return[]},"FAKE_NEWS_DIALOG_SHOWN");e.exports=a}),null);
__d("PagesIntegrityLoggingInitialLoadAction",["Laminar"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[]},function(){return[]},"INITIAL_LOAD");e.exports=a}),null);
__d("PagesIntegrityLoggingUnpublishedContentBankWarningDialogShownAction",["Laminar"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[]},function(){return[]},"UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN");e.exports=a}),null);
__d("VideoDuration.react",["cx","fbt","ix","DurationFormatter","FlexLayout.react","Image.react","React"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=null;this.props.isSpherical&&(a=b("React").jsx(b("Image.react"),{className:"__lq",src:i("501720")}));if(this.props.isLive){if(this.props.liveViewerCount){var c;return(c=b("React")).jsxs(b("FlexLayout.react"),{className:"_7p9t",children:[c.jsx(b("FlexLayout.react"),{className:"_7p9w",align:"center",children:h._("\u0e2a\u0e14")}),c.jsx(b("FlexLayout.react"),{align:"center",className:"_7p9y",children:c.jsx("span",{children:this.props.liveViewerCount})})]})}return b("React").jsxs(b("FlexLayout.react"),{className:"_2pq9",align:"center",children:[a,h._("\u0e2a\u0e14")]})}return this.props.duration?b("React").jsxs(b("FlexLayout.react"),{className:"_2pq8",align:"center",children:[a,b("React").jsx("span",{children:b("DurationFormatter").formatShort(this.props.duration)})]}):null};return c}(b("React").Component);e.exports=a}),null);
__d("PagesIntegrityTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:PagesIntegrityLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:PagesIntegrityLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:PagesIntegrityLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setEvent=function(a){this.$1.event=a;return this};c.setPageAdminNotified=function(a){this.$1.page_admin_notified=a;return this};c.setPageID=function(a){this.$1.page_id=a;return this};c.setPageSurface=function(a){this.$1.page_surface=a;return this};c.setPostSessionUuid=function(a){this.$1.post_session_uuid=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={event:!0,page_admin_notified:!0,page_id:!0,page_surface:!0,post_session_uuid:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("PagesIntegrityLoggingActionType",["keyMirror"],(function(a,b,c,d,e,f){"use strict";e.exports=b("keyMirror")({INITIAL_LOAD:null,FAKE_NEWS_DIALOG_SHOWN:null,ADMIN_DID_SUBMIT_AFTER_FAKE_NEWS_DIALOG_SHOWN:null,ADMIN_DID_NOT_SUBMIT_AFTER_FAKE_NEWS_DIALOG_SHOWN:null,UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN:null,ADMIN_DID_SUBMIT_AFTER_UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN:null,ADMIN_DID_NOT_SUBMIT_AFTER_UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN:null})}),null);
__d("PagesIntegrityLoggingActions",["PagesIntegrityLoggingAdminDidNotSubmitAfterFakeNewsDialogShownAction","PagesIntegrityLoggingAdminDidNotSubmitAfterUnpublishedContentBankWarningDialogShownAction","PagesIntegrityLoggingAdminDidSubmitAfterFakeNewsDialogShownAction","PagesIntegrityLoggingAdminDidSubmitAfterUnpublishedContentBankWarningDialogShownAction","PagesIntegrityLoggingFakeNewsDialogShownAction","PagesIntegrityLoggingInitialLoadAction","PagesIntegrityLoggingUnpublishedContentBankWarningDialogShownAction"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){b("PagesIntegrityLoggingInitialLoadAction").dispatch({pageID:a},{line:"20",module:"PagesIntegrityLoggingActions.js"})};c=function(){b("PagesIntegrityLoggingAdminDidNotSubmitAfterFakeNewsDialogShownAction").dispatch({},{line:"26",module:"PagesIntegrityLoggingActions.js"})};d=function(){b("PagesIntegrityLoggingAdminDidSubmitAfterFakeNewsDialogShownAction").dispatch({},{line:"32",module:"PagesIntegrityLoggingActions.js"})};f=function(){b("PagesIntegrityLoggingFakeNewsDialogShownAction").dispatch({},{line:"38",module:"PagesIntegrityLoggingActions.js"})};var g=function(){b("PagesIntegrityLoggingAdminDidNotSubmitAfterUnpublishedContentBankWarningDialogShownAction").dispatch({},{line:"42",module:"PagesIntegrityLoggingActions.js"})},h=function(){b("PagesIntegrityLoggingAdminDidSubmitAfterUnpublishedContentBankWarningDialogShownAction").dispatch({},{line:"48",module:"PagesIntegrityLoggingActions.js"})},i=function(){b("PagesIntegrityLoggingUnpublishedContentBankWarningDialogShownAction").dispatch({},{line:"54",module:"PagesIntegrityLoggingActions.js"})};e.exports={initializeLoggingStore:a,logFakeNewsDialogShown:f,logFakeNewsSubmitted:d,logFakeNewsNotSubmitted:c,logUnpublishedContentBankMatchNotSubmitted:g,logUnpublishedContentBankMatchSubmitted:h,logUnpublishedContentWarningDialogShown:i}}),null);
__d("PagesIntegrityLoggingStore",["AdsDataAtom","FluxReduceStore","PagesIntegrityLoggingActionType","PagesIntegrityTypedLogger","immutable","uuid"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=function(b){babelHelpers.inheritsLoose(a,b);function a(){return b.apply(this,arguments)||this}return a}(b("immutable").Record({composerPostSessionUUID:null,pageID:null}));a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return new g()};d.reduce=function(a,c){__p&&__p();c=c.action;switch(c.type){case b("PagesIntegrityLoggingActionType").INITIAL_LOAD:c=c.pageID;return a.set("composerPostSessionUUID",b("uuid")()).set("pageID",c);case b("PagesIntegrityLoggingActionType").FAKE_NEWS_DIALOG_SHOWN:return this.$PagesIntegrityLoggingStore1("FAKE_NEWS_LINK_SHARE_WARNING_DIALOG_SHOWN",a,!1);case b("PagesIntegrityLoggingActionType").ADMIN_DID_NOT_SUBMIT_AFTER_FAKE_NEWS_DIALOG_SHOWN:return this.$PagesIntegrityLoggingStore1("FAKE_NEWS_LINK_NOT_SHARED_BY_ADMIN",a,!0);case b("PagesIntegrityLoggingActionType").ADMIN_DID_SUBMIT_AFTER_FAKE_NEWS_DIALOG_SHOWN:return this.$PagesIntegrityLoggingStore1("FAKE_NEWS_LINK_SHARED_BY_ADMIN",a,!0);case b("PagesIntegrityLoggingActionType").UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN:return this.$PagesIntegrityLoggingStore1("UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN",a,!1);case b("PagesIntegrityLoggingActionType").ADMIN_DID_NOT_SUBMIT_AFTER_UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN:return this.$PagesIntegrityLoggingStore1("UNPUBLISHED_CONTENT_BANK_MATCH_NOT_POSTED_BY_ADMIN",a,!0);case b("PagesIntegrityLoggingActionType").ADMIN_DID_SUBMIT_AFTER_UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN:return this.$PagesIntegrityLoggingStore1("UNPUBLISHED_CONTENT_BANK_MATCH_POSTED_BY_ADMIN",a,!0);default:return a}};d.$PagesIntegrityLoggingStore1=function(a,c,d){new(b("PagesIntegrityTypedLogger"))().setEvent(a).setPageID(c.get("pageID")).setPostSessionUuid(c.get("composerPostSessionUUID")).setPageSurface("COMPOSER").log();return d?c.set("composerPostSessionUUID",b("uuid")()):c};return c}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("AdsDataAtom"))}),null);
__d("EntityPresenceClient",["regeneratorRuntime","BanzaiODS","BladeRunnerClient","BladeRunnerStreamHandler","EntityPresenceLogger","EntityPresenceManager","UserActivity","clearInterval","setInterval","uuid"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new(b("BladeRunnerClient"))(),h="219994525426954",i="ep_client",j="client",k="realtime.entity_presence.js_client";a={enter:function(a,c,d){__p&&__p();var e=b("uuid")(),f=new(b("EntityPresenceLogger"))(a,c,e,h,i);f.logEnter(d);b("BanzaiODS").bumpEntityKey(3291,k,a+".enter");var l=null,m=null;f.shouldLog&&(l=new(b("EntityPresenceLogger"))("shadow",c,e+"_shadow",h,j),l.shouldLog=!0,m=b("EntityPresenceManager").enter("shadow",c,d,l));var n=g.requestStream({method:"EntityPresence"},JSON.stringify({entity_type:a,entity_id:c,capabilities:d,log_info:f.getLogInfo()}),new(b("BladeRunnerStreamHandler"))(null,function(a){f.logFlowStatus(a)},null)),o=b("setInterval")(function(){b("UserActivity").isOnTab()?(f.logPing(),n.amendFireAndForget("")):f.logSkippedPing()},3e3);return{changeCapabilities:function(c){__p&&__p();var d;return b("regeneratorRuntime").async(function(e){while(1)switch(e.prev=e.next){case 0:(d=m)==null?void 0:d.changeCapabilities(c);f.logChangeCapabilities(c);b("BanzaiODS").bumpEntityKey(3291,k,a+".change_capabilities");e.next=5;return b("regeneratorRuntime").awrap(n.amendWithAck(JSON.stringify({capabilities:c})));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},null,this)},leave:function(){var c;(c=m)==null?void 0:c.leave();f.logLeave();b("BanzaiODS").bumpEntityKey(3291,k,a+".leave");n.cancel();b("clearInterval")(o)}}}};e.exports=a}),null);
__d("XUnpublishedPostSuccessController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/unpublished_posts/post_success/",{type:{type:"String",required:!0}})}),null);
__d("PagesComposer",["csx","ActorURI","Arbiter","AsyncRequest","Bootloader","ComposerXMarauderLogger","ComposerXStore","DOM","PagesComposerActions","PagesComposerUnpublishedPostsStore","PagesIntegrityLoggingActions","Parent","React","ReactComposerPagesStore","ReactComposerStore","ReactDOM","ReactPagesComposerGlobalFlags","ReloadPage","Run","XUnpublishedPostSuccessController","$","getObjectValues","goURI","ifRequired","PagesIntegrityLoggingStore"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("PagesComposerActions").updatePreviewConfig,i,j;function k(){b("ComposerXMarauderLogger").logCompleted(i.id)}function l(a){__p&&__p();var c=a.matchData?a.matchData.status_id||a.matchData.content_id:void 0,d=b("PagesComposerUnpublishedPostsStore").getIsPreview(a.composer_id),e=b("ReactComposerPagesStore").getIsDialogComposer(a.composer_id);!e&&!!j&&d&&!!c&&h(a.composer_id,!1,c,null,null);if(!!j&&b("ReactComposerStore").getRef(a.composer_id)==="page_left_nav_create_post_button"&&!!c){var f=b("PagesComposerUnpublishedPostsStore").getPostActionType(a.composer_id);b("Bootloader").loadModules(["ReactPagesComposerPostConfirmationDialogContainer.react"],function(d){b("ReactDOM").render(b("React").jsx(d,{composerID:a.composer_id,contentID:c,pageID:j,postType:f,success:!!a.streamStory}),b("DOM").create("div"))},"PagesComposer")}if(a.hidePost){e=b("ComposerXStore").getAllForComposer(a.composer_id);if(!b("getObjectValues")(e).length){d=null;b("PagesComposerUnpublishedPostsStore").getIsDraft(a.composer_id)&&(d="draft");b("PagesComposerUnpublishedPostsStore").getScheduledPublishTime(a.composer_id)&&(d="scheduled");if(d){e=b("XUnpublishedPostSuccessController").getURIBuilder().setString("type",d).getURI();e=b("ActorURI").create(e,j);new(b("AsyncRequest"))().setURI(e).send()}}a.isLocalDevPlatformPost&&(b("Bootloader").loadModules(["FBModal.react","FDSSpinner.react"],function(a,c){var d={display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"};b("ReactDOM").render(b("React").jsx(a,{shown:!0,children:b("React").jsx("div",{style:d,children:b("React").jsx(c,{})})},"dialog"),b("DOM").create("div"))},"PagesComposer"),b("ReloadPage").now());k();return}if(a.redirect){d=b("ComposerXStore").getAllForComposer(a.composer_id);b("getObjectValues")(d).forEach(function(a){a.reset&&a.reset(a)});b("goURI")(a.redirect);k();return}if(!a.streamStory){e=b("ReactComposerStore").getRef(a.composer_id);d=m()||e==="branded_content_creator_deal_view"||e==="election_page_megaphone";if(d||a.shouldNotReload)return;b("ReloadPage").now();return}if(a.backdatedTime){b("Bootloader").loadModules(["PagesStoryPublisher"],function(b){b.publish(a)},"PagesComposer");k();return}e=n.renderStory(i,a.streamStory);b("Arbiter").inform("TimelineComposer/on_after_publish",e,"persistent");k()}function m(){__p&&__p();var a=!1;b("Bootloader").loadModules(["ReactComposerTaggerStore","ReactComposerTaggerType"],function(b,c){var d=b.getTaggerData(i.id,c.SPONSOR);b=b.getTaggersConfig(i.id,c.SPONSOR);d&&d.sponsors&&d.sponsors.length>0&&b&&b.showBCMPPostPostModal&&(a=!0)},"PagesComposer");b("ifRequired")("AdsUEditorAdgroupPagePostField.react",function(){a=!0});var c=b("PagesComposerUnpublishedPostsStore").getIsPreview(i.id);c&&(a=!0);return a}var n={init:function(a,c){__p&&__p();i=b("$")(a);j=c;var d=b("Arbiter").subscribe("composer/publish",function(a,b){l(b)}),e=b("Arbiter").subscribe("LitestandComposer/publishTemp",function(b,c){l({composer_id:a,streamStory:c.markup})});b("Run").onLeave(d.unsubscribe.bind(d));b("Run").onLeave(e.unsubscribe.bind(e));b("ReactPagesComposerGlobalFlags").setIsPagesComposer(!0);b("PagesIntegrityLoggingStore");b("PagesIntegrityLoggingActions").initializeLoggingStore(c)},renderStory:function(a,c){a=b("Parent").bySelector(a,"#pagelet_timeline_main_column");if(!a)return;a=b("DOM").scry(a,"._5sem")[0];var d=b("DOM").insertAfter(a,c)[0];b("Bootloader").loadModules(["Animation"],function(a){new a(d).from("backgroundColor","#fff8dd").to("backgroundColor","#fff").duration(2e3).ease(a.ease.both).go()},"PagesComposer")},replaceByID:function(a,c){a&&b("DOM").replace(b("$")(a),c)}};e.exports=n}),null);
__d("ScheduledLiveTimeStringUtil",["fbt","DateStrings","React","formatDate"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=24*60*60*1e3;a={getStr:function(a,c){return c?b("React").jsx("span",{children:this.getUppercaseDateStr(a)}):b("React").jsxs("span",{children:[this.getDateStr(a)," ",g._("{date}",[g._param("date",b("formatDate")(a,"g:ia"))])]})},getDateStr:function(a){var c=new Date(Date.now()),d=new Date(Date.now()+h),e=new Date(Date.now()+2*h),f=new Date(Date.now()+3*h),i=a.toDateString();c.toDateString()===i?c=g._("\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32"):d.toDateString()===i?c=g._("\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32"):e.toDateString()===i||f.toDateString()===i?c=this._renderDayOfWeekString(a.getDay()):c=b("formatDate")(a,"F d");return c},getUppercaseDateStr:function(a){var c=new Date(Date.now()),d=new Date(Date.now()+h),e=new Date(Date.now()+2*h),f=new Date(Date.now()+3*h),i=a.toDateString(),j=b("formatDate")(a,"g:iA");c.toDateString()===i?c=g._("\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49\u0e40\u0e27\u0e25\u0e32 {time of day}",[g._param("time of day",j)]):d.toDateString()===i?c=g._("\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49\u0e40\u0e27\u0e25\u0e32 {time of day}",[g._param("time of day",j)]):e.toDateString()===i||f.toDateString()===i?c=this._renderUppercaseDayOfWeekString(a.getDay(),a):c=g._("{day of month} \u0e40\u0e27\u0e25\u0e32 {time of day}",[g._param("day of month",b("formatDate")(a,"F d")),g._param("time of day",j)]);return c},_renderUppercaseDayOfWeekString:function(a,c){if(a>=0&&a<=6){c=b("formatDate")(c,"g:iA");return g._("{day of week} \u0e40\u0e27\u0e25\u0e32 {time of day}",[g._param("day of week",b("DateStrings").getUppercaseWeekdayName(a)),g._param("time of day",c)])}return null},_renderDayOfWeekString:function(a){switch(a){case 0:return g._("\u0e27\u0e31\u0e19\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c \u0e40\u0e27\u0e25\u0e32");case 1:return g._("\u0e27\u0e31\u0e19\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c \u0e40\u0e27\u0e25\u0e32");case 2:return g._("\u0e27\u0e31\u0e19\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23 \u0e40\u0e27\u0e25\u0e32");case 3:return g._("\u0e27\u0e31\u0e19\u0e1e\u0e38\u0e18 \u0e40\u0e27\u0e25\u0e32");case 4:return g._("\u0e27\u0e31\u0e19\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35 \u0e40\u0e27\u0e25\u0e32");case 5:return g._("\u0e27\u0e31\u0e19\u0e28\u0e38\u0e01\u0e23\u0e4c \u0e40\u0e27\u0e25\u0e32");case 6:return g._("\u0e27\u0e31\u0e19\u0e40\u0e2a\u0e32\u0e23\u0e4c \u0e40\u0e27\u0e25\u0e32")}return null}};e.exports=a}),null);
__d("ScheduledLiveStoryVideoPreviewFooter.react",["ix","cx","fbt","Image.react","React","ScheduledLiveTimeStringUtil","XUIButton.react","XUICardSection.react","XUIText.react","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();function a(a){var c=a.isPremiere&&a.plannedStartTime===0;c=c?i._("\u0e01\u0e33\u0e25\u0e31\u0e07\u0e40\u0e23\u0e34\u0e48\u0e21\u0e02\u0e36\u0e49\u0e19\u0e40\u0e23\u0e47\u0e27\u0e46 \u0e19\u0e35\u0e49"):b("ScheduledLiveTimeStringUtil").getStr(new Date(a.plannedStartTime),!0);var d=a.isPremiere?g("591214"):g("595518");d=b("React").jsx("div",{className:"_6lz _6mb _1t62",children:b("React").jsxs(b("XUIText.react"),{className:"_6d27",children:[b("React").jsx(b("Image.react"),{src:d,className:"_6cfz"}),c]})});c=b("React").jsx("div",{className:"_6m6 _2cnj _fwx _6etm",children:b("React").jsx(b("XUIText.react"),{size:"body1",children:a.previewTitle})});a=b("React").jsx(b("XUIText.react"),{color:"secondary",className:"_20l4 _svw",children:i._("\u0e40\u0e1b\u0e34\u0e14\u0e14\u0e39\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e31\u0e1a\u0e0a\u0e21\u0e2a\u0e14")});var e=b("React").jsx("div",{className:"_44af _2e6-",children:b("React").jsx(b("XUIButton.react"),{size:"medium",label:i._("\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e04\u0e27\u0e32\u0e21\u0e08\u0e33"),image:b("React").jsx(b("Image.react"),{src:g("492370")})})});return b("React").jsx(b("XUICardSection.react"),{className:"_64lx _3eqz _pmm _267a _66cd _6d28 _2v9b",children:b("React").jsxs("div",{className:"_44ae _651x",children:[b("React").jsxs("div",{className:"_59tj _2iau _oq1 _6m3 _--6 _4dhn",children:[d,c,a]}),e]})})}e.exports=a}),null);
__d("ScheduledLiveStoryVideoPreviewV2.react",["cx","BackgroundImage.react","Image.react","React","ScaledImage.react","ScheduledLiveStoryVideoPreviewFooter.react","XUICardSection.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=a.URL||a.webkitURL||{};c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx("div",{children:this.$1()})};d.$2=function(){return this.props.backgroundImage.imageURL&&this.props.backgroundImage.width&&this.props.backgroundImage.height?this.props.customProfileImage?this.$3():b("React").jsx(b("ScaledImage.react"),{width:500,height:280,src:this.props.backgroundImage.imageURL,imageSize:{width:this.props.backgroundImage.width,height:this.props.backgroundImage.height}}):null};d.$3=function(){var a=this.props.customProfileImage,c=this.props.customProfileImagePosition;c=c?c.x*100+"% "+c.y*100+"%":"50% 50%";if(a!=null)return b("React").jsx(b("BackgroundImage.react"),{backgroundSize:"coverinside",backgroundPosition:c,height:280,src:h.createObjectURL(a),width:500});return this.props.previousCustomImage!=null?b("React").jsx(b("Image.react"),{className:"_as4",src:this.props.previousCustomImage}):b("React").jsx(b("Image.react"),{className:"_as4",src:this.props.profileImageURL})};d.$1=function(){return b("React").jsxs("div",{children:[b("React").jsx(b("XUICardSection.react"),{className:"_6dw8",children:this.$2()}),b("React").jsx(b("ScheduledLiveStoryVideoPreviewFooter.react"),{isPremiere:this.props.isPremiere===!0,plannedStartTime:this.props.plannedStartTime,previewTitle:this.props.previewTitle})]})};return c}(b("React").Component);e.exports=c}),null);
__d("StoryProfile.react",["cx","BackgroundImage.react","FBProfilePhotoShadow.react","Image.react","ImageBlock.react","InlineBlock.react","Link.react","PrivacyConst","React","XUIGrayText.react","XUIText.react","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(){var a=null;if(d.props.privacyIndicator)a=d.props.privacyIndicator;else if(d.props.privacySetting){var c=d.props.privacySetting==b("PrivacyConst").BaseValue.EVERYONE,e=d.props.privacySetting==b("PrivacyConst").BaseValue.ALL_FRIENDS;a=b("React").jsx(b("BackgroundImage.react"),{width:13,height:12,"data-hover":"tooltip","data-tooltip-content":d.props.privacyTooltip,className:"_14g-"+(c?" _14g_":"")+(e?" _5qhp":"")+(!e&&!c?" _14h0":"")})}return!a?null:b("React").jsxs("span",{children:[b("React").jsx(b("XUIGrayText.react"),{shade:"light",size:"meta1",display:"inline",children:"\xa0\xb7\xa0"}),a]})},d.$2=function(){__p&&__p();var a,c;if(d.props.profileURL){var e;d.props.openProfileURLInNewPage&&(e="_blank");c="bold";a=b("React").jsx(b("Link.react"),{href:d.props.profileURL,target:e,children:d.props.username})}else a=d.props.username;if(d.props.description)return b("React").jsxs("div",{children:[b("React").jsx(b("XUIText.react"),{className:"_14gz",size:"header4",weight:c,children:a})," ",d.props.description]});else return b("React").jsx(b("XUIText.react"),{className:"_14gz",size:"header4",weight:c,display:"block",children:a})},d.$3=function(){return d.props.additionalLinks?b("React").jsx(b("XUIGrayText.react"),{shade:"light",size:"meta1",display:"inline",children:d.props.additionalLinks.map(function(a,c){return b("React").jsxs("span",{children:["\xa0\xb7\xa0",b("React").jsx(b("Link.react"),{href:a.URL,target:"_blank",children:a.text})]},c)})}):null},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){return b("React").jsxs(b("ImageBlock.react"),{spacing:"medium",className:b("joinClasses")(this.props.className,"_56-3"),children:[this.props.profilePicture?b("React").jsx(b("FBProfilePhotoShadow.react"),{children:b("React").jsx(b("Image.react"),{className:"_56-4"+(this.props.useRoundPicture?" _6y18":""),src:this.props.profilePicture})}):b("React").jsx("span",{}),b("React").jsxs(b("InlineBlock.react"),{alignv:"middle",height:40,fullWidth:!0,children:[this.$2(),b("React").jsxs("div",{children:[b("React").jsx(b("XUIGrayText.react"),{shade:"light",size:"meta1",display:"inline",children:this.props.uploadTime}),this.$1(),this.$3()]})]})]})};return c}(b("React").Component);a.propTypes={privacySetting:(c=b("prop-types")).number,privacyIndicator:c.object,profilePicture:c.string,privacyTooltip:c.node,username:c.string.isRequired,uploadTime:c.node.isRequired,profileURL:c.string,openProfileURLInNewPage:c.bool,additionalLinks:c.arrayOf(c.shape({URL:c.string,text:c.node})),description:c.node};a.defaultProps={openProfileURLInNewPage:!1};e.exports=a}),null);
__d("XLiveScheduleStoryPreviewController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live/schedule/preview/",{target_id:{type:"FBID"},broadcast_id:{type:"FBID"}})}),null);
__d("ScheduledLiveStoryPreview.react",["cx","fbt","ActorURI","AsyncRequest","React","ScheduledLiveStoryVideoPreviewV2.react","StoryProfile.react","XLiveScheduleStoryPreviewController","XUICard.react","XUICardSection.react","XUIText.react","cxMargin"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i="/images/silhouettes/person_50x50.png";a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){var c;c=a.call(this,b)||this;c.$2=function(a){a=a.getPayload();c.setState({plannedStartTime:a.plannedStartTime,profileName:a.profileName,profileImageURL:a.profileImageURL,profileURL:a.profileURL,backgroundImage:a.backgroundImage,previousCustomImage:a.previousCustomImage})};c.state={profileName:"",profileImageURL:i,profileURL:"",backgroundImage:{},previousCustomImage:null,plannedStartTime:null};return c}var d=c.prototype;d.componentDidMount=function(){this.$1(this.props)};d.componentDidUpdate=function(a,b){(a.actorID!==this.props.actorID||a.targetID!==this.props.targetID)&&this.$1(this.props)};d.$1=function(a){var c=b("XLiveScheduleStoryPreviewController").getURIBuilder().setFBID("target_id",a.targetID).setFBID("broadcast_id",a.broadcastID).getURI();c=b("ActorURI").create(c,(c=a.actorID)!=null?c:a.targetID);new(b("AsyncRequest"))().setURI(c).setMethod("POST").setHandler(this.$2).send()};d.render=function(){var a;return b("React").jsxs(b("XUICard.react"),{children:[b("React").jsxs(b("XUICardSection.react"),{children:[this.$3(),this.$4()]}),b("React").jsx(b("ScheduledLiveStoryVideoPreviewV2.react"),{backgroundImage:this.state.backgroundImage,customProfileImage:this.props.customProfileImage,customProfileImagePosition:this.props.customProfileImagePosition,isPremiere:this.props.isPremiere,plannedStartTime:(a=this.state.plannedStartTime)!=null?a:this.props.plannedStartTime,previousCustomImage:this.state.previousCustomImage,profileImageURL:this.state.profileImageURL,profileName:this.state.profileName,previewTitle:this.props.previewTitle})]})};d.$3=function(){var a=h._("\u0e01\u0e33\u0e25\u0e31\u0e07\u0e08\u0e30\u0e16\u0e48\u0e32\u0e22\u0e17\u0e2d\u0e14\u0e2a\u0e14");this.props.isPremiere&&(a=this.props.plannedStartTime?h._("\u0e21\u0e35\u0e41\u0e1c\u0e19\u0e08\u0e30\u0e16\u0e48\u0e32\u0e22\u0e17\u0e2d\u0e14\u0e2a\u0e14\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e23\u0e2d\u0e1a\u0e1e\u0e23\u0e35\u0e40\u0e21\u0e35\u0e22\u0e23\u0e4c"):h._("\u0e27\u0e32\u0e07\u0e41\u0e1c\u0e19\u0e40\u0e1b\u0e34\u0e14\u0e15\u0e31\u0e27\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e43\u0e2b\u0e21\u0e48"));return b("React").jsx("div",{className:"_3-8j",children:b("React").jsx(b("StoryProfile.react"),{openProfileURLInNewPage:!0,profilePicture:this.state.profileImageURL,profileURL:this.state.profileURL,useRoundPicture:!0,username:this.state.profileName,uploadTime:h._("\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e2a\u0e31\u0e01\u0e04\u0e23\u0e39\u0e48"),description:a})})};d.$4=function(){return b("React").jsx(b("XUIText.react"),{className:"_as3",display:"block",size:"header4",children:this.props.description})};return c}(b("React").Component);e.exports=a}),null);
__d("LivingRoomConstants",[],(function(a,b,c,d,e,f){a={END_SCREEN_CHAINING_TIMEOUT_SECONDS:5,FEED_BLUR_OVERLAY_DELAY_MS:7500,GROUP_MALL_CARD_BANNER:{uri:"/images/live_video/godzilla_nux/living_room_godzilla_nux.png",width:680,height:380},INVITE_FRIENDS_RESULTS_PER_PAGE:20,INVITE_FRIENDS_RESULTS_PER_EXTRA_PAGE:10,NO_VIDEO_RECAP_THUMBNAIL:{uri:"/images/live_video/living_room/no_video_thumbnail.png",width:375,height:250},NUX_CREATE_WITH_CUSTOM_NAME:6218,NUX_FEED_PRESENCE:6358,NUX_HOST_WELCOME:5612,NUX_HOST_WALKTHROUGH:5634,NUX_PRE_POP:5972,NUX_PRESENCE_TRAY:5584,NUX_VIEWER_WELCOME:5594,NUX_PAGE_VIDEO_LIBRARY_BUTTON:6488,TOPIC_CHANNEL_NUX_VIEWER_WELCOME:5814,TOPIC_CHANNEL_NUX_PRESENCE_TRAY:5815,PARTICIPANTS_PAGE_SIZE:20,RECAP_LOAD_SIZE:10,RECAP_REFETCH_PADDING:5,TV_EMOJI:"1f4fa",UPDATE_SUGGESTED_ITEMS:"update_suggested_items",UPDATE_VIDEO_STATE:"update_video_state",VIEWER_REACTION:"viewer_reaction",VIDEO_START_SECONDS:1e-5,VIDEO_SEARCH_DEBOUNCING_DELAY:750,VIDEO_SEARCH_BQF:"keywords_blended_videos",VIDEO_SEARCH_PAGE_BQF:"videos-by",VIDEO_SEARCH_RESULTS_PER_PAGE:20,VIDEO_SEARCH_RESULTS_PER_EXTRA_PAGE:10,SIDE_PANE_WIDTH:400,MIN_MEDIA_CONTAINER_WIDTH:476,MIN_MEDIA_CONTAINER_HEIGHT:560};e.exports=a}),null);
__d("LivingRoomCountdown.react",["fbt","invariant","FluxContainer","LivingRoomStore","React","clearInterval","setInterval"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=function(a,c){a=b("LivingRoomStore").getCountdown(a);if(!a)return null;return a.type===c?a.seconds_remaining:null};a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=null,c.state={secondsRemaining:i(c.props.livingRoomID,c.props.countdownType)},b)||babelHelpers.assertThisInitialized(c)}c.getStores=function(){return[b("LivingRoomStore")]};c.calculateState=function(a,c){b("LivingRoomStore")!==null||h(0,12747);return{secondsRemaining:i(c.livingRoomID,c.countdownType)}};var d=c.prototype;d.componentDidMount=function(){var a=this;this.$1=b("setInterval")(function(){return a.setState(function(a){return{secondsRemaining:a.secondsRemaining==null?null:Math.max(a.secondsRemaining-1,0)}})},1e3)};d.componentWillUnmount=function(){this.$1&&b("clearInterval")(this.$1)};d.$2=function(a){var b=a%60;a=Math.floor(a/60);var c=a%60;a=Math.floor(a/60);b=("0"+b).slice(-2);c=("0"+c).slice(-2);return a===0?[c,b].join(":"):[a<10?"0"+a:String(a),c,b].join(":")};d.render=function(){return this.state.secondsRemaining==null?null:g._("\u0e08\u0e30\u0e40\u0e23\u0e34\u0e48\u0e21\u0e02\u0e36\u0e49\u0e19\u0e43\u0e19 {timer count down}",[g._param("timer count down",this.$2(this.state.secondsRemaining))])};return c}(b("React").Component);e.exports=b("FluxContainer").create(a,{withProps:!0})}),null);
__d("LivingRoomFeedAttachmentBadgeRow.react",["ix","cx","fbt","Image.react","LivingRoomCountdown.react","React","asset","nullthrows"],(function(a,b,c,d,e,f,g,h,i){function a(a){return b("React").jsxs("div",{className:(a.premiereLivingRoomBadgeText==null&&!a.isReplay?"_6rb7":"")+(a.premiereLivingRoomBadgeText?" _731g":"")+(a.isReplay?" _7rp9":""),children:[b("React").jsx(b("Image.react"),{className:"_6rb8 _6ziq",src:a.premiereLivingRoomBadgeText==null?g("487848"):g("591215")}),b("React").jsx("span",{className:"_6rb8",children:a.premiereLivingRoomBadgeText==null?i._("\u0e1b\u0e32\u0e23\u0e4c\u0e15\u0e35\u0e49\u0e23\u0e31\u0e1a\u0e0a\u0e21"):a.premiereLivingRoomBadgeText}),a.premiereLivingRoomBadgeText!=null&&a.presentUserCount!=null&&b("React").jsx("span",{className:"_6rb8 _73qf",children:i._({"*":"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e23\u0e31\u0e1a\u0e0a\u0e21 {number} \u0e04\u0e19\u0e15\u0e2d\u0e19\u0e19\u0e35\u0e49","_1":"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e0a\u0e21 1 \u0e04\u0e19\u0e15\u0e2d\u0e19\u0e19\u0e35\u0e49"},[i._plural(a.presentUserCount,"number")])}),a.showTimerForCountdownType!=null&&a.livingRoomID!==null&&b("React").jsx("span",{className:"_6rb8 _73qf",children:b("React").jsx(b("LivingRoomCountdown.react"),{countdownType:a.showTimerForCountdownType,livingRoomID:b("nullthrows")(a.livingRoomID)})})]})}e.exports=a}),null);
__d("LivingRoomFeedAttachmentFooterNoContentItem.react",["cx","fbt","React"],(function(a,b,c,d,e,f,g,h){function a(){return b("React").jsxs("div",{children:[b("React").jsx("div",{className:"_2luh",children:h._("\u0e44\u0e21\u0e48\u0e21\u0e35\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d")}),b("React").jsx("div",{className:"_2lu8",children:h._("\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e41\u0e19\u0e30\u0e19\u0e33\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d")})]})}e.exports=a}),null);
__d("LivingRoomNoVideoPreview.react",["cx","ix","Image.react","React"],(function(a,b,c,d,e,f,g,h){function a(a){return b("React").jsx("div",{className:"_3hj7",children:b("React").jsx(b("Image.react"),{className:"_7m-7",src:h("646608")})})}e.exports=a}),null);
__d("TahoeEndScreenProgressCircle.react",["cx","React","ReactDOM","Style","clearInterval","prop-types","setInterval"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=null,c.$2=0,c.$3=0,b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){this.$3=this.$2,this.drawProgressCircle(this.props)};d.componentWillUnmount=function(){b("clearInterval")(this.$1)};d.UNSAFE_componentWillReceiveProps=function(a){(a.makeProgress!==this.props.makeProgress||a.timeoutSec!==this.props.timeoutSec)&&this.drawProgressCircle(a)};d.drawProgressCircle=function(a){__p&&__p();var c=this;b("clearInterval")(this.$1);var d=b("ReactDOM").findDOMNode(this.refs.progressCircle);if(!d)return;if(a.timeoutSec===0){b("Style").set(d,"stroke-dashoffset",this.$2+"px");return}var e=this.$2/100;b("Style").set(d,"stroke-dashoffset",this.$3+"px");a.makeProgress&&(this.$1=b("setInterval")(function(){c.$3-=e,b("Style").set(d,"stroke-dashoffset",c.$3+"px"),c.$3<=0&&(b("clearInterval")(c.$1),b("Style").set(d,"stroke-dashoffset","0px"),a.onProgressDone&&a.onProgressDone())},a.timeoutSec*10))};d.render=function(){var a=this.props,c=a.circleDiameter,d=a.strokeWidth;a=a.inlineBlock;var e=c/2,f=e-d/2;this.$2=f*2*Math.PI;return b("React").jsxs("div",{className:"_3was",children:[b("React").jsxs("svg",{className:"_4bcw"+(a?" _7cis":""),style:{height:c,width:c},children:[b("React").jsx("circle",{cx:e,cy:e,r:e,fill:this.props.ringColor}),b("React").jsx("circle",{ref:"progressCircle",cx:e,cy:e,r:f,fill:this.props.circleColor,stroke:this.props.ringProgressColor,strokeWidth:d,strokeDasharray:this.$2})]}),this.props.children]})};return c}(b("React").Component);a.propTypes={children:(c=b("prop-types")).element,makeProgress:c.bool.isRequired,onProgressDone:c.func,timeoutSec:c.number.isRequired};a.defaultProps={circleDiameter:48,circleColor:"transparent",inlineBlock:!1,ringColor:"rgba(0, 0, 0, 0.3)",ringProgressColor:"#ffffff",strokeWidth:4};e.exports=a}),null);
__d("XVideoGenerateStoryController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/generate_story/",{video_id:{type:"Int"},feed_location:{type:"Enum",enumType:0},timeline_identifier:{type:"String"}})}),null);
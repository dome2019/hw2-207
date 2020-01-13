if (self.CavalryLogger) { CavalryLogger.start_js(["PMQTP"]); }

__d("GroupAdminType",[],(function(a,b,c,d,e,f){e.exports={none:"NONE",moderator:"MODERATOR",admin:"ADMIN"}}),null);
__d("FDSCardFooter.react",["FDSPrivateLayerFooter.react"],(function(a,b,c,d,e,f){"use strict";e.exports=b("FDSPrivateLayerFooter.react")}),null);
__d("FDSCardHeader.react",["FDSPrivateLayerHeader.react","React","SUIErrorComponentUtil"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx(b("FDSPrivateLayerHeader.react"),babelHelpers["extends"]({},this.props,{hasCloseButton:!1}))};return c}(b("React").PureComponent);a.defaultProps=b("SUIErrorComponentUtil").defaultProps;e.exports=a}),null);
__d("InputLabelLabel_DEPRECATED.react",["React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["children"]);return b("React").jsx("label",babelHelpers["extends"]({},a,{children:c}))};return c}(b("React").Component);e.exports=a}),null);
__d("XUICheckboxInput.react",["cx","AbstractCheckboxInput.react","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this;return b("React").jsx(b("AbstractCheckboxInput.react"),babelHelpers["extends"]({},this.props,{ref:function(b){return a.$1=b},className:b("joinClasses")(this.props.className,"_55sg"),children:void 0}))};d.focusInput=function(){this.$1&&this.$1.focusInput()};d.blurInput=function(){this.$1&&this.$1.blurInput()};return c}(b("React").Component);e.exports=a}),null);
__d("MessagingThreadEventTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:MessagingThreadEventLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:MessagingThreadEventLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MessagingThreadEventLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setActiveTimeMs=function(a){this.$1.active_time_ms=a;return this};c.setClientEventTimeMs=function(a){this.$1.client_event_time_ms=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setPageData=function(a){this.$1.page_data=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setPageID=function(a){this.$1.page_id=a;return this};c.setScriptPath=function(a){this.$1.script_path=a;return this};c.setSource=function(a){this.$1.source=a;return this};c.setThreadID=function(a){this.$1.thread_id=a;return this};c.setVC=function(a){this.$1.vc=a;return this};return a}();c={active_time_ms:!0,client_event_time_ms:!0,event:!0,page_data:!0,page_id:!0,script_path:!0,source:!0,thread_id:!0,vc:!0};e.exports=a}),null);
__d("MessengerLoggerUtils",["MercuryIDs","MessagingThreadEventTypedLogger","ScriptPath","pageID"],(function(a,b,c,d,e,f){a={logThreadChangeEvent:function(a,b,c,d){c.activeThreadID&&a&&this.log({activeThreadID:c.activeThreadID,event:"inactive",clientEventTimeMs:b,activeTimeMs:b-a}),d.activeThreadID&&this.log({activeThreadID:d.activeThreadID,event:"active",clientEventTimeMs:b,activeTimeMs:0})},log:function(a){var c=b("MercuryIDs").tokenize(a.activeThreadID.toString()),d=b("ScriptPath").getPageInfo();new(b("MessagingThreadEventTypedLogger"))().setEvent(a.event).setClientEventTimeMs(a.clientEventTimeMs).setActiveTimeMs(a.activeTimeMs).setPageID(b("pageID")).setPageData(d?d.extraData:{}).setThreadID(c.value).setSource("messenger").log()}};e.exports=a}),null);
__d("MessengerURIStore",["LogHistory","MessengerActions","MessengerLoggerUtils","MessengerStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("LogHistory").getInstance("messenger_uri_store");a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b;b=a.call(this)||this;b.$MessengerURIStore1={activeThreadID:null,folderKey:null,detailView:null,filter:null,folder:null,masterView:null,query:null,mid:null,sa:null,seeAllType:null,serverThreadID:null,extraQueryParams:null};b.$MessengerURIStore2=babelHelpers["extends"]({},b.$MessengerURIStore1);b.$MessengerURIStore4=b.$MessengerURIStore3=null;return b}var d=c.prototype;d.getState=function(){return this.$MessengerURIStore1};d.getPrevState=function(){return this.$MessengerURIStore2};d.__onDispatch=function(a){__p&&__p();switch(a.type){case b("MessengerActions").Types.REPLACE_STATE:this.$MessengerURIStore2=this.$MessengerURIStore1;this.$MessengerURIStore4=this.$MessengerURIStore3;this.$MessengerURIStore1=babelHelpers["extends"]({activeThreadID:null,folderKey:null,detailView:null,filter:null,folder:null,masterView:null,query:null,mid:null,sa:null,seeAllType:null,serverThreadID:null,extraQueryParams:null,threadsIDs:null},a.nextState);a=Date.now();this.$MessengerURIStore3=a;g.debug("replace_state",JSON.stringify({previousThreadID:this.$MessengerURIStore2.activeThreadID,nextThreadID:this.$MessengerURIStore1.activeThreadID}));b("MessengerLoggerUtils").logThreadChangeEvent(this.$MessengerURIStore4,a,this.$MessengerURIStore2,this.$MessengerURIStore1);this.emitChange();break}};return c}(b("MessengerStore"));e.exports=new a()}),null);
__d("MessengerBrowserAlerts",["fbt","Bootloader","CurrentUser","DocumentTitle","Event","FavIcon","ImageSourceRequest","ImageSourceType","MercuryAttachmentSnippetRenderer","MercuryIDs","MercuryIgnoredBlockedParticipants.bs","MercuryNotificationRenderer","MercuryThreadInfo","MercuryThreadInformer","MessagingTag","MessengerActions","MessengerConfig","MessengerDesktopNotifications","MessengerFaviconUrls","MessengerParticipants.bs","MessengerSettingsStore","MessengerState.bs","MessengerURIStore","Sound","UserActivity","gkx"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=8e3,i=80,j=3,k=6e5,l=new Map(),m=null,n=null;function o(){l=new Map()}function p(a){var c=b("MessengerSettingsStore").getSettings().sound_enabled,d=a.action_type=="ma-type:log-message";d=d&&(a.log_message_type=="log:phone-call"||a.log_message_type=="log:video-call")&&a.log_message_data.answered;c&&!d&&b("Sound").play([b("MessengerConfig")["sound.notif_ogg_url"],b("MessengerConfig")["sound.notif_mp3_url"]],a.timestamp,!1)}function q(a,c,d){__p&&__p();if(!a.snippet_sender)return;var e=l.get(a.thread_id)||0;if(e>=j)return;l.set(a.thread_id,e+1);b("MessengerParticipants.bs").get(a.snippet_sender,function(e){var f=a.snippet,h=a.custom_nickname&&a.custom_nickname[b("MercuryIDs").getUserIDFromParticipantID(e.id)],i=h?h:e.short_name;!f&&a.snippet_attachments&&a.snippet_attachments.length>0&&(f=b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetRenderer").getAttachmentSnippetType(a.snippet_attachments),!1,i,a.snippet_attachments));h=h?h:e.name;a.is_canonical||(h=a.name?g._("{sender's name} \u0e16\u0e36\u0e07 {group name}",[g._param("sender's name",i),g._param("group name",a.name)]):g._("{sender's name} \u0e16\u0e36\u0e07\u0e01\u0e25\u0e38\u0e48\u0e21\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13",[g._param("sender's name",i)]));b("MessengerDesktopNotifications").showNotification({title:h,body:f,icon:a.image_src||c||e.big_image_src||e.image_src,closeTime:null,onClick:function(){window.focus(),b("MessengerActions").selectThread(a.thread_id)},tag:d.message_id,silent:!b("MessengerSettingsStore").getSettings().sound_enabled});b("MessengerDesktopNotifications").hasDefaultSound()||p(d)})}a={_shouldUpdateTitle:!0,init:function(a){__p&&__p();var c=this;this._viewer=a;this._threadInformer=b("MercuryThreadInformer").getForFBID(this._viewer);this._highResImageMap=new Map();this._shouldMarkAllAsSeenWhenActive=!0;this._shouldUpdateFavicon=!0;this._enabled=!0;b("CurrentUser").isWorkUser()&&(this._availabilityStatusStore=null,b("Bootloader").loadModules(["WorkChatAvailabilityStatusStore"],function(a){c._availabilityStatusStore=a},"MessengerBrowserAlerts"));b("Event").listen(window,"focus",function(){o(),clearInterval(m)});b("Event").listen(window,"blur",function(){m=setInterval(o,k)});this._threadInformer.subscribe("messages-received",function(a,b){for(var d in b)b[d].forEach(function(a){c.handleMessageReceived(a)})});this._threadInformer.subscribe("unseen-updated",this._handleUnseenUpdated.bind(this));this._threadInformer.subscribe("unread-updated",this._handleUnseenUpdated.bind(this))},disable:function(){this._enabled=!1},enable:function(){this._enabled=!0},disableMarkAllAsSeenWhenActive:function(){this._shouldMarkAllAsSeenWhenActive=!1},enableMarkAllAsSeenWhenActive:function(){this._shouldMarkAllAsSeenWhenActive=!0},disableFaviconUpdate:function(){this._shouldUpdateFavicon=!1},disableTitleUpdate:function(){this._shouldUpdateTitle=!1},enableTitleUpdate:function(){this._shouldUpdateTitle=!0},handleMessageReceived:function(a){__p&&__p();var c=this;if(!this._enabled)return;var d=this._availabilityStatusStore&&this._availabilityStatusStore.getIsDoNotDisturb(this._viewer);if(d||a.author===this._viewer||!a.is_unread||a.thread_id===b("MessengerURIStore").getState().activeThreadID&&b("UserActivity").isOnTab()||a.folder!=b("MessagingTag").INBOX&&a.folder!=b("MessagingTag").ARCHIVED)return;b("MessengerState.bs").getThreadMeta(this._viewer,a.thread_id,function(d){__p&&__p();if(b("MercuryThreadInfo").isMuted(d))if(!b("MercuryThreadInfo").areMentionsMuted(d)){if(!a.profile_ranges||!a.profile_ranges.some||!a.profile_ranges.some(function(a){return a.id===c._viewer}))return}else return;var e=b("CurrentUser").getID();b("MessengerState.bs").compute(e,function(f){f=f.blocked_ids;if(b("MercuryIgnoredBlockedParticipants.bs").isPresentInGroupThread(e,f,d))return;b("MessengerSettingsStore").getSettings().desktopNotifsEnabled&&!b("UserActivity").isOnTab()?c._attemptDesktopNotification(d,a):a.log_message_type!=="log:unsubscribe"&&p(a);!b("UserActivity").isOnTab()&&b("MessengerState.bs").getUnseenUnreadCount(c._viewer)>0&&b("MercuryNotificationRenderer").renderDocumentTitle(a.thread_id,function(a){!n&&c._shouldUpdateTitle&&(n=b("DocumentTitle").blink(a))})})})},showRTCNotification:function(a,c){__p&&__p();var d=this;if(b("UserActivity").isOnTab()){c(null);return}var e=this._availabilityStatusStore&&this._availabilityStatusStore.getIsDoNotDisturb(this._viewer);if(e){c(null);return}this._highResImageMap||(this._highResImageMap=new Map());var f=a.peerID;if(!this._highResImageMap.has(f)){e=function(b,e){d._highResImageMap.set(f.toString(),e.uri),d._displayRTCDesktopNotification(e.uri,a,c)};new(b("ImageSourceRequest"))().setFBID(f).setType(b("ImageSourceType").PROFILE_PICTURE).setDimensions(i,i).setResizeMode("p").setCallback(e.bind(null,f)).send()}else this._displayRTCDesktopNotification(this._highResImageMap.get(f),a,c)},_updateFavicon:function(a){if(!this._shouldUpdateFavicon)return;a===0?b("FavIcon").set(b("MessengerFaviconUrls")["default"]):b("FavIcon").set(b("MessengerFaviconUrls").unread)},_displayRTCDesktopNotification:function(a,c,d){__p&&__p();var e=b("MercuryIDs").getParticipantIDFromUserID(c.peerID);b("MessengerParticipants.bs").get(e,function(f){var i;c.isVideoCall?c.isGroupCall?i=g._("\u0e2a\u0e32\u0e22\u0e40\u0e23\u0e35\u0e22\u0e01\u0e40\u0e02\u0e49\u0e32\u0e01\u0e32\u0e23\u0e41\u0e0a\u0e17\u0e01\u0e25\u0e38\u0e48\u0e21\u0e17\u0e32\u0e07\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d"):i=g._("\u0e21\u0e35\u0e2a\u0e32\u0e22\u0e2a\u0e19\u0e17\u0e19\u0e32\u0e17\u0e32\u0e07\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e40\u0e02\u0e49\u0e32\u0e21\u0e32"):c.isGroupCall?i=g._("\u0e2a\u0e32\u0e22\u0e40\u0e23\u0e35\u0e22\u0e01\u0e40\u0e02\u0e49\u0e32\u0e01\u0e32\u0e23\u0e42\u0e17\u0e23\u0e41\u0e1a\u0e1a\u0e01\u0e25\u0e38\u0e48\u0e21"):i=g._("\u0e21\u0e35\u0e2a\u0e32\u0e22\u0e42\u0e17\u0e23\u0e40\u0e02\u0e49\u0e32");f=g._("{caller} \u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e17\u0e23\u0e2b\u0e32\u0e04\u0e38\u0e13 \u0e04\u0e25\u0e34\u0e01\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e31\u0e1a\u0e2a\u0e32\u0e22",[g._param("caller",f.short_name)]);e=b("MessengerDesktopNotifications").showNotification({title:i,body:f,icon:a,closeTime:h,onShow:function(){b("Bootloader").loadModules(["RTWebUserActionLogger"],function(a){a.logPreCallImpression({callID:c.callID,callType:a.getCallType(c.isGroupCall),mediaType:a.getMediaType(!c.isVideoCall),surface:"desktop_notification",component:"accept_button"})},"MessengerBrowserAlerts")},onClick:function(){window.focus(),b("Bootloader").loadModules(["RTWebUserActionLogger"],function(a){a.logPreCallClick({callID:c.callID,callType:a.getCallType(c.isGroupCall),mediaType:a.getMediaType(!c.isVideoCall),surface:"desktop_notification",component:"accept_button"})},"MessengerBrowserAlerts"),c.onNotificationClicked()}});d(e)})},_handleUnseenUpdated:function(){__p&&__p();var a=this;if(!this._enabled)return;var c=b("MessengerState.bs").getUnseenUnreadCount(this._viewer);if(this._shouldMarkAllAsSeenWhenActive&&b("UserActivity").isOnTab()&&b("UserActivity").isActive()&&c>0){this._updateFavicon(0);b("MessengerState.bs").markAsSeen(this._viewer);return}this._shouldUpdateTitle&&b("DocumentTitle").badge(c);this._updateFavicon(c);n&&c===0&&(n.stop(),n=null);this._shouldMarkAllAsSeenWhenActive&&!this._focusToken&&c>0&&(this._focusToken=b("UserActivity").subscribe(function(){b("UserActivity").isOnTab()&&(a._focusToken&&a._focusToken.unsubscribe(),a._focusToken=null,b("MessengerState.bs").markAsSeen(a._viewer))}))},_attemptDesktopNotification:function(a,c){var d=this;if(!a.snippet_sender)return;if(!this._highResImageMap.has(a.snippet_sender)){var e=function(b,e){d._highResImageMap.set(a.snippet_sender,e.uri),q(a,e.uri,c)};new(b("ImageSourceRequest"))().setFBID(b("MercuryIDs").getUserIDFromParticipantID(a.snippet_sender)).setType(b("ImageSourceType").PROFILE_PICTURE).setDimensions(i,i).setResizeMode("p").setCallback(e.bind(null,a.snippet_sender)).send()}else q(a,this._highResImageMap.get(a.snippet_sender),c)}};e.exports=a}),null);
__d("ProfileLink.react",["Link.react","React","URI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=new(g||(g=b("URI")))("/ajax/hovercard/user.php").setQueryData({id:this.props.uid});return b("React").jsx(b("Link.react"),babelHelpers["extends"]({},this.props,{"data-hovercard":a,href:(a=this.props.href)!=null?a:"/"+this.props.uid,children:this.props.children}))};return c}(b("React").Component);e.exports=a}),null);
__d("createCommitMutation",["Promise","requireCond","cr:819055"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("cr:819055").commitMutation;function h(a,c,d){return new(b("Promise"))(function(b,e){return g(a,babelHelpers["extends"]({},d,{variables:{input:c},onCompleted:function(a,c){c&&c.length?e(c):b(a)},onError:function(a){return e([a])}}))})}function a(a,b){return function(c){return h(a,c,b)}}function c(a){return function(b,c){return h(b,c,a)}}function d(a,b){return function(c){return h(a,c,b(c))}}e.exports.createCommitMutation=a;e.exports.createCommitMutationForEnvironment=c;e.exports.createCommitMutationWithVariables=d}),null);
__d("SphericalPhotoPartialLimits",["ImmutableRecordWithV4Types"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("ImmutableRecordWithV4Types").Record;var g=a({partialLeftDegrees:null,partialRightDegrees:null,partialTopDegrees:null,partialBottomDegrees:null});e.exports={getPartialLimits:function(a){__p&&__p();var b=Number(a.croppedAreaImageHeightPixels)||0,c=Number(a.croppedAreaImageWidthPixels)||0,d=Number(a.croppedAreaLeftPixels)||0,e=Number(a.croppedAreaTopPixels)||0,f=Number(a.fullPanoHeightPixels)||0;a=Number(a.fullPanoWidthPixels)||0;var h,i,j,k;if(c!==0&&c!==a&&c+d<=a){c=360*c/a;j=180*(1-2*d/a);k=c-j}b!==0&&b!==f&&b+e<=f&&(e!==0&&(h=90*(1-2*e/f)),e+b!==f&&(i=180*(e+b-f/2)/f));return g({partialTopDegrees:h,partialBottomDegrees:i,partialLeftDegrees:j,partialRightDegrees:k})},normalizePhotoRendererViewWithPartialLimits:function(a,b){__p&&__p();var c=b.partialLeftDegrees,d=b.partialRightDegrees,e=b.partialTopDegrees;b=b.partialBottomDegrees;if(c||c===0){c=-1*c;a.yaw<c&&(a.yaw=c)}if(d||d===0){c=d;a.yaw>c&&(a.yaw=c)}d=e||e===0;c=b||b===0;e=e||0;b=-1*(b||0);d&&(a.pitch>e&&(a.pitch=e));c&&(a.pitch<b&&(a.pitch=b));d&&c&&(e<0&&e<b?a.pitch=b:b>0&&e<b&&(a.pitch=e));return a},normalizeViewWithPartialLimits:function(a,b){__p&&__p();var c=b.partialLeftDegrees,d=b.partialRightDegrees,e=b.partialTopDegrees;b=b.partialBottomDegrees;if(c){c=-1*(c-a.fov/2);a.yaw<c&&(a.yaw=c)}if(d){c=d-a.fov/2;a.yaw>c&&(a.yaw=c)}if(e){d=e-a.fov/2;a.pitch>d&&(a.pitch=d)}if(b){c=-1*(b-a.fov/2);a.pitch<c&&(a.pitch=c)}return a},makePartialLimits:g}}),null);
__d("CompositeSearchSource",["Promise","AbstractSearchSource","killswitch","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b,c){var d;d=a.call(this)||this;d.$CompositeSearchSource1=b;d.$CompositeSearchSource2=(b=c)!=null?b:Object.freeze({});return d}var d=c.prototype;d.bootstrapImpl=function(a){var c=this.$CompositeSearchSource1.map(function(a){return new(b("Promise"))(function(b){return a.bootstrap(b)})});b("promiseDone")(b("Promise").all(c),a)};d.getBootstrappedEntries=function(a){var c=this,d=this.$CompositeSearchSource1.map(function(a){return new(b("Promise"))(function(b){(!a.getBootstrappedEntries||!a.getBootstrappedEntries(b))&&b([])})});return b("Promise").all(d).then(function(b){a(c.$CompositeSearchSource3(b))})};d.searchImpl=function(a,c,d){__p&&__p();var e=this,f=this.sourceInfo(a),g=f.map(function(a){return[]}),h=f.map(function(a){return void 0}),i=function(){};f.forEach(function(b,c){var e=b.source,f=b.substituteQueryString,j=b.entryMapper;b=b.substituteOptions;e.search(f===void 0?a:f,function(b,a,d){g[c]=j?b.map(j):b,h[c]=d,i()},b||d)});i=function(){var f=e.$CompositeSearchSource3(g),i=e.$CompositeSearchSource4(h);if(d&&d.skipCallbackOnEmptyResults&&f.length==0&&i!="COMPLETE")return;if(!b("killswitch")("COMPOSITE_SEARCH_SOURCE_TOP_DOWN")&&!e.$CompositeSearchSource5(g,h))return;c(f,a,i)};i()};d.$CompositeSearchSource5=function(a,b){if(this.$CompositeSearchSource2.allowClownyReflow===!0)return!0;b=b.findIndex(function(a){return a==="ACTIVE"});if(b!==-1)for(var b=b+1;b<a.length;b++)if(a[b].length>0)return!1;return!0};d.sourceInfo=function(a){return this.$CompositeSearchSource1.map(function(a){return{source:a}})};d.$CompositeSearchSource3=function(a){var b=[],c=new Set();a.forEach(function(a){a.forEach(function(a){var d=a.getUniqueID();c.has(d)||(c.add(d),b.push(a))})});return b};d.$CompositeSearchSource4=function(a){__p&&__p();for(var a=a,b=Array.isArray(a),c=0,a=b?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var d;if(b){if(c>=a.length)break;d=a[c++]}else{c=a.next();if(c.done)break;d=c.value}d=d;if(d==="ACTIVE")return"ACTIVE";else if(d!=="COMPLETE")return void 0}return"COMPLETE"};return c}(b("AbstractSearchSource"));e.exports=a}),null);
__d("XMessengerDotComLogoutController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/logout/",{next:{type:"String"}})}),null);
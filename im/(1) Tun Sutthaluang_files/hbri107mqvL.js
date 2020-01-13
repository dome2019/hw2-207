if (self.CavalryLogger) { CavalryLogger.start_js(["\/5stZ"]); }

__d("ContentSearchEvents",[],(function(a,b,c,d,e,f){e.exports={CONTENT_SEARCH:"content_search",OPEN_TRAY:"open_tray",QUERY_RESULTS_LOADED:"query_results_loaded",RESULT_SENT:"result_sent",namesByValue:{content_search:"CONTENT_SEARCH",open_tray:"OPEN_TRAY",query_results_loaded:"QUERY_RESULTS_LOADED",result_sent:"RESULT_SENT"}}}),null);
__d("MessengerPlatformQueryType",[],(function(a,b,c,d,e,f){e.exports={SEARCH:0,MEDIAFY:1,TRENDING:2,SAMPLE:3,namesByValue:["SEARCH","MEDIAFY","TRENDING","SAMPLE"]}}),null);
__d("XMessengerPlatformContentSearchController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/messaging/content_search/",{ftentidentifier:{type:"String"},q:{type:"String",defaultValue:""},qtype:{type:"Enum",defaultValue:0,enumType:0},resume:{type:"String",defaultValue:""},"interface":{type:"Enum",enumType:0},platform_fbids:{type:"IntVector"}})}),null);
__d("ChatContentSearch",["AsyncRequest","MessengerPlatformQueryType","XMessengerPlatformContentSearchController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={getContentForQuery:function(a){__p&&__p();var c=a.query,d=a.callback,e=a.ftentidentifier,f=a.resume,g=a.searchInterface;a=a.platformFBIDs;f=b("XMessengerPlatformContentSearchController").getURIBuilder().setString("resume",f);c!=null&&c.length>0?f.setString("q",c):f.setEnum("qtype",b("MessengerPlatformQueryType").TRENDING);g!=null&&f.setEnum("interface",g);a!=null&&f.setIntVector("platform_fbids",a);e!=null&&f.setString("ftentidentifier",e);c=new(b("AsyncRequest"))().setURI(f.getURI()).setHandler(d);c.send();return c}};e.exports=a}),null);
__d("ChatContentSearchResult.react",["cx","fbt","AddCommentFlyoutSizeType","Image.react","Keys","React","ShimButton.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=274,j=308,k=137,l=152;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){a.stopPropagation(),d.props.onClick(d.props.result)},d.$2=function(a){a.keyCode===b("Keys").RETURN&&(a.preventDefault(),d.props.onClick(d.props.result))},c)||babelHelpers.assertThisInitialized(d)}c.isWide=function(a){a=a.media.preview;return a.width>a.height*1.2};c.getScaledDimensions=function(a,b,c){a=a.media.preview;var d=a.height;a=a.width;var e=c?l:k;c=c?j:i;b=(b?c:e)/a;d*=b;a*=b;return{height:d,width:a}};var d=c.prototype;d.render=function(){var a=c.getScaledDimensions(this.props.result,this.props.isWide,this.props.size==="large");return b("React").jsx(b("ShimButton.react"),{"aria-label":h._("GIF"),"data-testid":this.props["data-testid"],onClick:this.$1,onKeyPress:this.$2,children:b("React").jsx(b("Image.react"),{className:"_358"+(this.props.isWide?" _26n6":""),src:this.props.src,style:a})})};return c}(b("React").PureComponent);a.defaultProps={size:b("AddCommentFlyoutSizeType").SMALL};e.exports=a}),null);
__d("ChatContentSearchResults.react",["cx","fbt","ix","Bootloader","ChatContentSearch","ChatContentSearchResult.react","Image.react","MercuryConfig","MessengerSpinner.react","React","ScrollableArea.react","debounce","emptyFunction","performanceAbsoluteNow"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k={};function l(a){return a.replace(/^httpss/,"https")}var m={isLoading:!0,response:null,results:[]};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this,c)||this;d.state=m;d.$12=function(){var a=(j||(j=b("performanceAbsoluteNow")))(),c=d.state.results?d.state.results.length:0;b("Bootloader").loadModules(["QuickPerformanceLogger","MessengerWebQuickLogModule"],function(b,d){b.markerPoint(d.COMPOSER_INTERACTION,"load_gif_result",JSON.stringify({length:c}),0,a)},"ChatContentSearchResults.react");d.$12=b("emptyFunction")};d.$6=function(){d.$7();d.$4=Date.now();if(d.state.response&&(!d.state.response.resultNextCursor||!d.props.query))return;var a=d.$13();d.setState({isLoading:!0});d.$1=b("ChatContentSearch").getContentForQuery({query:d.props.query,resume:a,callback:d.$14,searchInterface:d.props.searchInterface,platformFBIDs:d.props.platformFBIDs,ftentidentifier:d.props.ftentidentifier})};d.$14=function(a){d.$1===a.request&&(k=babelHelpers["extends"]({},k,a.payload.attribution),d.setState(function(b){return{isLoading:!1,response:a.payload,results:a.payload.resultGroup[0]?b.results.concat(a.payload.resultGroup[0].results):b.results}},function(){d.$4!==void 0&&(d.props.onResultsLoaded&&d.props.onResultsLoaded(Date.now()-d.$4),delete d.$4)}),delete d.$1)};d.$17=function(a){d.props.onSelect(a,k[a.platformFBID])};d.$9=function(){d.$18()&&!d.$1&&d.$2()};d.$5=function(a){d.setState(m,a)};d.$2=b("emptyFunction");d.$3=b("emptyFunction");return d}var d=c.prototype;d.componentDidMount=function(){this.$3=b("debounce")(this.$5,100),this.$2=b("debounce")(this.$6,200),this.$2()};d.componentWillUnmount=function(){this.$2.reset(),this.$3.reset(),this.$7()};d.componentDidUpdate=function(a){this.props.query!==a.query&&this.$3(this.$6)};d.render=function(){return(!this.state.response||!this.state.results.length)&&!this.state.isLoading?this.$8():b("React").jsxs(b("ScrollableArea.react"),{"data-testid":this.props["data-testid"],fade:!0,onScroll:this.$9,ref:"scrollable",children:[this.$10(),this.$11()]})};d.$11=function(){return!this.state.isLoading?null:b("React").jsx("div",{style:{marginTop:this.state.response?"10px":"140px",textAlign:"center"},children:b("React").jsx(b("MessengerSpinner.react"),{color:"grey",size:b("MessengerSpinner.react").medium_size})})};d.$13=function(){return this.state.response?this.state.response.resultNextCursor:void 0};d.$7=function(){this.setState({isLoading:!1}),this.$1&&(this.$1.abort(),delete this.$1,delete this.$4)};d.$8=function(){return b("React").jsxs("div",{className:"_85jd",children:[b("React").jsx(b("Image.react"),{src:i("87146")}),b("React").jsx("p",{children:h._("\u0e44\u0e21\u0e48\u0e21\u0e35 GIF \u0e43\u0e2b\u0e49\u0e41\u0e2a\u0e14\u0e07")})]})};d.$10=function(){var a=this;return!this.state.response||!this.state.results.length?null:this.state.results.map(function(c,d){var e=b("ChatContentSearchResult.react").isWide(c);if(!e&&c.platformFBID.toString()!==b("MercuryConfig").MessengerAppID){var f=d-a.$15(d),g=a.$16(d)-d;e=(f<=1||f%2!==0)&&g<=1}a.$12();return b("React").jsx(b("ChatContentSearchResult.react"),{isWide:e,"data-testid":a.props["data-testid"]+"-items-"+d,onClick:a.$17,result:c,src:l(c.media.preview.url),size:a.props.size},"result:"+d+":"+c.resultID)})};d.$15=function(a){a=a;while(a>0){--a;if(b("ChatContentSearchResult.react").isWide(this.state.results[a]))return a}return a};d.$16=function(a){a=a;var c=this.state.results.length;while(a<c-1){++a;if(b("ChatContentSearchResult.react").isWide(this.state.results[a]))return a}return a};d.$18=function(){var a=this.refs.scrollable.getArea();return!!(a&&a.distanceToBottom()<=50)};return c}(b("React").PureComponent);a.defaultProps={"data-testid":"search-results",size:"small"};e.exports=a}),null);
__d("ChatContentSearchTrendingIndicator.react",["cx","fbt","ix","Image.react","React"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.shouldComponentUpdate=function(a){return a.shown!==this.props.shown};d.render=function(){return this.props.shown?b("React").jsxs("div",{className:"_515",children:[b("React").jsx(b("Image.react"),{src:i("28005")}),h._("\u0e01\u0e33\u0e25\u0e31\u0e07\u0e2e\u0e34\u0e15")]}):null};return c}(b("React").Component);e.exports=a}),null);
__d("MessengerSearchInput.react",["cx","AbstractTextInput.react","React","XUICloseButton.react","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.focusInput=function(){c.refs.inputField.focusInput()},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){return b("React").jsxs("div",{className:b("joinClasses")(this.props.className,"_5iwm"+(this.props.isFocused||!!this.props.value?" _5iwn":"")),role:"search",children:[b("React").jsx(b("AbstractTextInput.react"),{className:"_3deo",onBlur:this.props.onBlur,onChange:this.props.onChange,onClick:this.props.onClick,onEnter:this.props.onEnter,onFocus:this.props.onFocus,placeholder:this.props.placeholder,ref:"inputField",value:this.props.value}),b("React").jsx(b("XUICloseButton.react"),{size:"small",onMouseDown:this.props.onClear,className:(this.props.value.length===0?"hidden_elem":"")+" _2xme"})]})};return c}(b("React").PureComponent);a.propTypes={isFocused:(c=b("prop-types")).bool,onBlur:c.func,onChange:c.func,onClear:c.func,onClick:c.func,onEnter:c.func,onFocus:c.func,placeholder:c.node,value:c.string.isRequired};e.exports=a}),null);
__d("ChatContentSearchFlyout.react",["cx","fbt","AddCommentFlyoutSizeType","BanzaiLogger","Bootloader","ChatContentSearchResults.react","ChatContentSearchTrendingIndicator.react","ContentSearchEvents","Keys","MercuryShareAttachmentRenderLocations","MessengerPlatformInterfaceType","MessengerSearchInput.react","React","UFISearchInput.react","XUITextInput.react","performanceAbsoluteNow","prop-types","qex"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=" ",k=/\s+/g,l=(a=b("MercuryShareAttachmentRenderLocations")).COMPOSER,m=a.MESSENGER,n=a.CHAT,o=406655189415060;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={query:d.props.query,viewerEnteredText:!1},d.$10=function(a){d.setState({query:a.target.value,viewerEnteredText:d.$9()||a.target.value.length>0})},d.$5=function(a){a.keyCode===b("Keys").ESC&&d.props.onEscKeyDown&&d.props.onEscKeyDown()},d.$8=function(a,c){d.$11(),d.props.onSelect(a,c),b("BanzaiLogger").log("ContentSearchLoggerConfig",{event:b("ContentSearchEvents").RESULT_SENT,query:d.state.query,resultid:a.resultID})},d.$7=function(a){b("BanzaiLogger").log("ContentSearchLoggerConfig",{event:b("ContentSearchEvents").QUERY_RESULTS_LOADED,query:d.state.query,inflighttime:a})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$2=function(){var a=(i||(i=b("performanceAbsoluteNow")))();b("Bootloader").loadModules(["QuickPerformanceLogger","MessengerWebQuickLogModule"],function(b,c){b.markerPoint(c.COMPOSER_INTERACTION,"mount_gif_flyout","",0,a)},"ChatContentSearchFlyout.react")};d.componentDidMount=function(){this.$2(),b("BanzaiLogger").log("ContentSearchLoggerConfig",{event:b("ContentSearchEvents").OPEN_TRAY,query:this.state.query}),this.$1&&(this.$1.focusInput&&this.$1.focusInput())};c.getDerivedStateFromProps=function(a,b){return!b.viewerEnteredText?babelHelpers["extends"]({},b,{query:a.query}):b};d.render=function(){var a,c=this.$3(this.props.queryDefault),d=this.$4();return(a=b("React")).jsxs("div",{className:"_85nf",onKeyDown:this.$5,"data-testid":"mercury-content-search-flyout",children:[a.jsx("div",{className:"_3mtr",children:this.$6()}),a.jsxs("div",{className:"_3mts",children:[a.jsx(b("ChatContentSearchResults.react"),{"data-testid":"mercury-content-search-flyout-results",ftentidentifier:this.props.ftentidentifier,onResultsLoaded:this.$7,onSelect:this.$8,query:d,searchInterface:this.props.searchInterface,size:this.props.size,platformFBIDs:c.length===0?[]:[o]}),b("React").jsx(b("ChatContentSearchTrendingIndicator.react"),{shown:b("qex")._("1125322")?!1:d.length===0})]})]})};d.$4=function(){var a=this.$3(this.state.query),b=this.$3(this.props.queryDefault);return(this.$9()?a:a.length===0?b:a)||""};d.$6=function(){var a=this,c=this.$9(),d=this.props.location===m?b("MessengerSearchInput.react"):this.props.location===l?b("UFISearchInput.react"):b("XUITextInput.react");return b("React").jsx(d,{className:"_4qcs",isFocused:!0,onClick:function(a){return a&&a.stopPropagation()},onChange:this.$10,onClear:function(){a.setState({query:c?"":a.props.queryDefault,viewerEnteredText:c})},placeholder:h._("\u0e04\u0e49\u0e19\u0e2b\u0e32 GIF \u0e17\u0e31\u0e48\u0e27\u0e41\u0e2d\u0e1e..."),ref:function(b){return a.$1=b},value:this.state.query||""})};d.$3=function(a){return(a||"").trim().replace(k,j).toLowerCase()};d.$11=function(){var a=(i||(i=b("performanceAbsoluteNow")))();b("Bootloader").loadModules(["QuickPerformanceLogger","MessengerWebQuickLogModule"],function(b,c){b.markerPoint(c.COMPOSER_INTERACTION,"send_gif","",0,a),b.markerEnd(c.COMPOSER_INTERACTION,"SUCCESS",0,a)},"ChatContentSearchFlyout.react")};d.$9=function(){return this.props.location===m||this.props.location===n};return c}(b("React").PureComponent);c.propTypes={ftentidentifier:(d=b("prop-types")).string,location:d.oneOf(a.getValues()),onEscKeyDown:d.func,onSelect:d.func.isRequired,query:d.string,searchInterface:d.oneOf([(f=b("MessengerPlatformInterfaceType")).UNKNOWN_INTERFACE,f.FB_INTERFACE,f.FB_POST_INTERFACE,f.MESSENGER_INTERFACE]),size:d.oneOf(Object.values(b("AddCommentFlyoutSizeType"))),queryDefault:d.string};c.defaultProps={size:b("AddCommentFlyoutSizeType").SMALL};e.exports=c}),null);
__d("ReactComposerStatusDonateButtonActionType",["keyMirrorRecursive"],(function(a,b,c,d,e,f){e.exports=b("keyMirrorRecursive")({SET_DONATE_CONFIG:null,UPDATE_DESCRIPTION:null,UPDATE_TITLE:null,SET_DATA:null,SET_ENABLED:null,SET_ERRORS:null,SET_TEXT_DISABLED:null},"ReactComposerStatusDonateButtonActionType")}),null);
__d("ReactComposerStatusDonateButtonStore",["ReactComposerStatusDonateButtonActionType","ReactComposerStoreBase"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;c=a.call(this,function(){return{charityName:"",fundraiserCampaignId:1,enabled:!1,textDisabled:!1,errors:!1}},function(a){__p&&__p();switch(a.type){case b("ReactComposerStatusDonateButtonActionType").SET_DONATE_CONFIG:d&&d.$ReactComposerStatusDonateButtonStore1(a);break;case b("ReactComposerStatusDonateButtonActionType").UPDATE_TITLE:d&&d.$ReactComposerStatusDonateButtonStore2(a);break;case b("ReactComposerStatusDonateButtonActionType").UPDATE_DESCRIPTION:d&&d.$ReactComposerStatusDonateButtonStore3(a);break;case b("ReactComposerStatusDonateButtonActionType").SET_DATA:d&&d.$ReactComposerStatusDonateButtonStore4(a);break;case b("ReactComposerStatusDonateButtonActionType").SET_ENABLED:d&&d.$ReactComposerStatusDonateButtonStore5(a);break;case b("ReactComposerStatusDonateButtonActionType").SET_ERRORS:d&&d.$ReactComposerStatusDonateButtonStore6(a);break;case b("ReactComposerStatusDonateButtonActionType").SET_TEXT_DISABLED:d&&d.$ReactComposerStatusDonateButtonStore7(a);break}})||this;d=babelHelpers.assertThisInitialized(c);return c}var d=c.prototype;d.getFundraiserCampaignID=function(a){return this.getComposerData(a).fundraiserCampaignId};d.getCharityName=function(a){return this.getComposerData(a).charityName};d.getTitle=function(a){return this.getComposerData(a).title};d.getDescription=function(a){return this.getComposerData(a).description};d.getEnabled=function(a){return this.getComposerData(a).enabled};d.getErrors=function(a){return this.getComposerData(a).errors};d.getTextDisabled=function(a){return this.getComposerData(a).textDisabled};d.$ReactComposerStatusDonateButtonStore1=function(a){var b=this.validateAction(a,["composerID","config"]),c=b[0];b=b[1];c=this.getComposerData(c);c.fundraiserCampaignId=b.fundraiserCampaignId;c.charityName=b.charityName;this.emitChange(a.composerID)};d.$ReactComposerStatusDonateButtonStore2=function(a){var b=this.validateAction(a,["composerID","title"]),c=b[0];b=b[1];c=this.getComposerData(c);c.title=b.substring(0,60);this.emitChange(a.composerID)};d.$ReactComposerStatusDonateButtonStore3=function(a){var b=this.validateAction(a,["composerID","description"]),c=b[0];b=b[1];c=this.getComposerData(c);c.description=b;this.emitChange(a.composerID)};d.$ReactComposerStatusDonateButtonStore4=function(a){var b=this.validateAction(a,["composerID","title","description"]),c=b[0],d=b[1];b=b[2];c=this.getComposerData(c);c.title=d;c.description=b;this.emitChange(a.composerID)};d.$ReactComposerStatusDonateButtonStore5=function(a){var b=this.validateAction(a,["composerID","enabled"]),c=b[0];b=b[1];c=this.getComposerData(c);c.enabled=b;this.emitChange(a.composerID)};d.$ReactComposerStatusDonateButtonStore6=function(a){var b=this.validateAction(a,["composerID","errors"]),c=b[0];b=b[1];c=this.getComposerData(c);c.errors=b;this.emitChange(a.composerID)};d.$ReactComposerStatusDonateButtonStore7=function(a){var b=this.validateAction(a,["composerID","textDisabled"]),c=b[0];b=b[1];c=this.getComposerData(c);c.textDisabled=b;this.emitChange(a.composerID)};return c}(b("ReactComposerStoreBase"));e.exports=new a()}),null);
__d("ReactComposerStatusDonateButtonActions.react",["ReactComposerDispatcher","ReactComposerStatusDonateButtonActionType","ReactComposerStatusDonateButtonStore"],(function(a,b,c,d,e,f){__p&&__p();b("ReactComposerStatusDonateButtonStore");a=function(){"use strict";__p&&__p();function a(){}var c=a.prototype;c.setConfig=function(a,c){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerStatusDonateButtonActionType").SET_DONATE_CONFIG,config:c})};c.setEnabled=function(a,c){b("ReactComposerDispatcher").dispatch({composerID:a,enabled:c,type:b("ReactComposerStatusDonateButtonActionType").SET_ENABLED})};c.updateTitle=function(a,c){b("ReactComposerDispatcher").dispatch({composerID:a,title:c,type:b("ReactComposerStatusDonateButtonActionType").UPDATE_TITLE})};c.updateDescription=function(a,c){b("ReactComposerDispatcher").dispatch({composerID:a,description:c,type:b("ReactComposerStatusDonateButtonActionType").UPDATE_DESCRIPTION})};c.setData=function(a,c,d){b("ReactComposerDispatcher").dispatch({composerID:a,title:c,description:d,type:b("ReactComposerStatusDonateButtonActionType").SET_DATA})};c.setErrors=function(a,c){b("ReactComposerDispatcher").dispatch({composerID:a,errors:c,type:b("ReactComposerStatusDonateButtonActionType").SET_ERRORS})};c.setTextDisabled=function(a,c){b("ReactComposerDispatcher").dispatch({composerID:a,textDisabled:c,type:b("ReactComposerStatusDonateButtonActionType").SET_TEXT_DISABLED})};return a}();e.exports=new a()}),null);
__d("ReactComposerGIFToggleController.react",["Arbiter","ChatContentSearchFlyout.react","LayerTabIsolation","MessengerPlatformInterfaceType","React","ReactComposerContextTypes","ReactComposerEvents","ReactComposerScrapedAttachmentActions","ReactComposerTaggerActions","ReactComposerTaggerType","XUIContextualDialog.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(){b("ReactComposerTaggerActions").selectTagger(d.context.composerID,d.props.loggingName,b("ReactComposerTaggerType").GIF,!1)},d.$3=function(){d.props.showFlyout&&b("ReactComposerTaggerActions").deselectCurrentTagger(d.context.composerID,d.props.loggingName)},d.$4=function(a){b("ReactComposerScrapedAttachmentActions").scrapeAttachment(d.context.composerID,d.context.targetID,a.source.url,d.context.composerType,d.context.actorID,d.props.loggingName),b("ReactComposerTaggerActions").setTaggerData(d.context.composerID,d.props.loggingName,b("ReactComposerTaggerType").GIF,{gifData:{url:a.source.url}}),d.$3(),b("Arbiter").inform(b("ReactComposerEvents").ACTIVATE_ATTACHMENT+d.context.composerID)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){return b("React").jsxs("span",{onClick:this.props.onClick||this.$1,role:"presentation",children:[b("React").jsx("span",{className:this.props.spanClassName,ref:"container",children:this.props.children}),this.$2()]})};d.$2=function(){var a=this;return!this.props.showFlyout?null:b("React").jsx(b("XUIContextualDialog.react"),{alignment:this.props.alignment||"left",behaviors:{LayerTabIsolation:b("LayerTabIsolation")},contextRef:function(){return a.refs.container},onBlur:this.props.onBlur||this.$3,onToggle:function(b){!b&&a.props.showFlyout&&(a.props.onBlur&&a.props.onBlur()||a.$3())},position:"below",shown:this.props.showFlyout,hasActionableContext:!0,width:278,children:b("React").jsx("div",{children:b("React").jsx(b("ChatContentSearchFlyout.react"),{onEscKeyDown:this.props.onBlur||this.$3,onSelect:this.props.onSelect||this.$4,searchInterface:b("MessengerPlatformInterfaceType").FB_POST_INTERFACE,shown:this.props.showFlyout})})})};return c}(b("React").PureComponent);a.contextTypes=b("ReactComposerContextTypes");e.exports=a}),null);
__d("FundraiserComposer",["csx","Arbiter","Bootloader","ComposerXMarauderLogger","DOM","DOMQuery","DOMScroll","Event","ReloadPage","Run","ViewportTrackingHelper","$","ge"],(function(a,b,c,d,e,f,g){__p&&__p();var h=!1,i={},j;function k(a){if(!a.streamStory){b("ReloadPage").now();return}l.renderStory(a.streamStory);b("ComposerXMarauderLogger").logCompleted(i.id)}var l={init:function(a){i=b("$")(a),j=b("Arbiter").subscribe("composer/publish",function(a,b){i&&b.composer_id===i.id&&k(b)}),b("Run").onLeave(l.destroy),h&&b("Run").onAfterLoad(function(){setTimeout(l.focus,0)})},destroy:function(){j&&j.unsubscribe()},renderStory:function(a){var c=b("ge")("pagelet_fundraiser_feed");if(c===null)return null;b("DOM").prependContent(c,a);b("Bootloader").loadModules(["Animation"],function(b){new b(a).from("backgroundColor","#fff8dd").to("backgroundColor","#fff").duration(2e3).ease(b.ease.both).go()},"FundraiserComposer");return a},setAutofocus:function(a){h=a},addFocusTrigger:function(a){b("Event").listen(a,"click",l.focus)},focus:function(){l._scrollIntoView(function(){var a=b("DOMQuery").scry(i,"textarea");if(a[0])a[0].focus();else{a=b("DOMQuery").scry(i,"._5yk2");a[0]&&a[0].click()}})},_scrollIntoView:function(a){if(b("ViewportTrackingHelper").isVisible(i,200)){a();return}b("DOMScroll").scrollTo(i,750,!0,0,0,a)}};e.exports=l}),null);
__d("ReactComposerSproutsLiveVideoSelector.react",["ix","fbt","React","ReactComposerAttachmentType","ReactComposerLoggingName","ReactComposerSproutsSelector.react","fbglyph"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.defaultProps={onSelected:function(){}},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){return b("React").jsx(b("ReactComposerSproutsSelector.react"),{attachmentID:b("ReactComposerAttachmentType").LIVE_VIDEO,loggingName:b("ReactComposerLoggingName").LIVE_VIDEO_TAB_SELECTOR,icon:g("123206"),label:h._("\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e16\u0e48\u0e32\u0e22\u0e17\u0e2d\u0e14\u0e2a\u0e14"),onSelected:this.props.onSelected,dataTestID:"react-composer-live-video-selector-react"})};return c}(b("React").Component);e.exports=a}),null);
__d("ReactComposerSproutsLiveVideoDialogSelector.react",["Arbiter","Bootloader","React","ReactComposerAttachmentActions","ReactComposerAttachmentType","ReactComposerConfig","ReactComposerContextConfig","ReactComposerEvents","ReactComposerLoggingName","ReactComposerSproutsLiveVideoSelector.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(){b("ReactComposerAttachmentActions").selectAttachment(d.props.contextConfig.composerID,b("ReactComposerAttachmentType").LIVE_VIDEO,!0,b("ReactComposerLoggingName").LIVE_VIDEO_TAB_SELECTOR),setTimeout(function(){return b("Arbiter").inform(b("ReactComposerEvents").ACTIVATE_ATTACHMENT+d.props.contextConfig.composerID)},0),b("Bootloader").loadModules(["LiveVideoBroadcastUtils"],function(a){return a.startPreviewUI(d.props.contextConfig,d.props.config)},"ReactComposerSproutsLiveVideoDialogSelector.react")},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){return b("React").jsx(b("ReactComposerSproutsLiveVideoSelector.react"),{onSelected:this.$1})};return c}(b("React").Component);e.exports=a}),null);
__d("XFundraiserWithPresenceController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/donate/{?campaign_id}/{?post_id}/",{action_type:{type:"Enum",enumType:1},campaign_id:{type:"FBID"},post_id:{type:"FBID"},donate_ref:{type:"String"},donate_amount:{type:"Float"},edit:{type:"Exists",defaultValue:!1},invite:{type:"Exists",defaultValue:!1},share:{type:"Exists",defaultValue:!1},composer:{type:"Exists",defaultValue:!1},create_outro:{type:"Exists",defaultValue:!1},fundraiser_source:{type:"Enum",enumType:1},match_confirm:{type:"Exists",defaultValue:!1},match_pledge:{type:"Exists",defaultValue:!1},match_review:{type:"Exists",defaultValue:!1},notif_t:{type:"String"},payout_setup:{type:"Exists",defaultValue:!1},payout_verification:{type:"Exists",defaultValue:!1},pending:{type:"Exists",defaultValue:!1},pending_edit:{type:"Exists",defaultValue:!1},thank_you:{type:"Exists",defaultValue:!1},should_autotag_donors:{type:"Exists",defaultValue:!1},apply_profile_frame:{type:"Exists",defaultValue:!1},show_updates:{type:"Exists",defaultValue:!1},source_data:{type:"StringToStringMap"}})}),null);
__d("ReactFundraiserComposer.react",["cx","Arbiter","BootloadedComponent.react","ComposerEntryPointRef","CSS","DataAttributeUtils","FundraiserComposer","JSResource","React","ReactComposerAttachmentType","ReactComposerAudienceActions","ReactComposerBodyContainer.react","ReactComposerConfig","ReactComposerContextConfig","ReactComposerContextProviderMixin","ReactComposerEvents","ReactComposerFeedMediaPostButtonContainer.react","ReactComposerFeedPostButtonContainer.react","ReactComposerFocusInit","ReactComposerInit","ReactComposerLazyHeader.react","ReactComposerLiveVideoLazyAttachment.react","ReactComposerLiveVideoPreviewButton.react","ReactComposerLoggingName","ReactComposerMediaEagerAttachment.react","ReactComposerPrefillConfig","ReactComposerPrefillStore","ReactComposerPrefillUtils","ReactComposerSproutsLiveVideoDialogSelector.react","ReactComposerSproutsMediaSelector.react","ReactComposerSproutsStatusAndMediaSelector.react","ReactComposerStatusDonateButtonActions.react","ReactComposerStatusEagerAttachment.react","ReactComposerWithSprouts.react","XFundraiserWithPresenceController","XUISpinner.react","$","ReactComposerStatusDonateButtonStore"],(function(a,b,c,d,e,f,g){__p&&__p();b("ReactComposerStatusDonateButtonStore");var h=null;function i(a,c,d){if(a&&d){b("ReactComposerInit").hideComposer(d);d=b("XFundraiserWithPresenceController").getURIBuilder().setFBID("campaign_id",a).setEnum("fundraiser_source","pages_tab");c=c?d.setFBID("post_id",c).getURI():d.setExists("show_updates",!0).getURI();b("$")("link"+a).setAttribute("href",c.getQualifiedURI().setDomain("www.facebook.com").toString());b("CSS").removeClass(b("$")("text"+a),"hidden_elem")}}a=b("React").createClass({displayName:"ReactFundraiserComposer",mixins:[b("ReactComposerContextProviderMixin")],propTypes:{contextConfig:b("ReactComposerContextConfig").isRequired,config:b("ReactComposerConfig").isRequired,prefillConfig:b("ReactComposerPrefillConfig").isRequired},componentDidMount:function(){__p&&__p();b("FundraiserComposer").init(this.props.contextConfig.composerID);if(this.props.contextConfig.composerType===b("ComposerEntryPointRef").PAGES_FUNDRAISER_TAB){var a=this.props.config.targetData.targetID,c=b("Arbiter").subscribeOnce(b("ReactComposerEvents").COMPOSER_RESET+this.props.contextConfig.composerID,function(b,c){i(a,"",c.newComposerID)});h=b("Arbiter").subscribe("composer/publish",function(d,e){if(e.composer_id===this.props.contextConfig.composerID){var f=JSON.parse(b("DataAttributeUtils").getDataFt(e.streamStory));b("Arbiter").subscribeOnce(b("ReactComposerEvents").COMPOSER_RESET+this.props.contextConfig.composerID,function(b,c){i(a,f.top_level_post_id,c.newComposerID)});c&&b("Arbiter").unsubscribe(c)}}.bind(this))}b("ReactComposerAudienceActions").setPrivacyxNullDangerous(this.props.contextConfig.composerID,!0);this.props.prefillConfig&&b("ReactComposerPrefillUtils").prefill(this.props.contextConfig.composerID,this.props.prefillConfig,this.props.contextConfig.gks);var d=b("ReactComposerPrefillStore").getAndEraseField(this.props.contextConfig.composerID,"donateConfig");d&&(b("ReactComposerStatusDonateButtonActions.react").setConfig(this.props.contextConfig.composerID,d),b("ReactComposerStatusDonateButtonActions.react").setData(this.props.contextConfig.composerID,d.charityName,""),b("ReactComposerStatusDonateButtonActions.react").setEnabled(this.props.contextConfig.composerID,!0));d=(d=this.props)!=null?(d=d.config)!=null?(d=d.actorConfig)!=null?d.willShowActorSelector:d:d:d;if(!d&&this.props.contextConfig.gks.shouldBlurOnFocus){b("ReactComposerFocusInit").handler(b("$")("fundraiser_composer_container"),this.props.contextConfig.composerID,this.props.contextConfig.actorID,this.props.contextConfig.gks,(d=this.props.contextConfig)!=null?(d=d.jsModules)!=null?d.composerFocus:d:d,!0)}},componentWillUnmount:function(){h&&b("Arbiter").unsubscribe(h)},render:function(){var a,c=this.props.config.attachmentsConfig,d=this.props.contextConfig.gks.shouldShowLive;return(a=b("React")).jsxs(b("ReactComposerWithSprouts.react"),{defaultAttachmentOnExpand:b("ReactComposerAttachmentType").STATUS,innerProps:{sproutsConfig:this.props.config.sproutsConfig,loggingConfig:this.props.config.loggingConfig},ref:"root",children:[a.jsxs(b("ReactComposerLazyHeader.react"),{background:"light-wash",noHorizontalMargin:!0,rightChild:this._renderActorSelector(),showDelimiter:!1,children:[a.jsx(b("ReactComposerSproutsStatusAndMediaSelector.react"),{label:c[b("ReactComposerAttachmentType").STATUS].tabTitle,statusOnly:!1},b("ReactComposerLoggingName").STATUS_TAB_SELECTOR),a.jsx(b("ReactComposerSproutsMediaSelector.react"),{config:this.props.config},b("ReactComposerLoggingName").MEDIA_TAB_SELECTOR),d?b("React").jsx(b("ReactComposerSproutsLiveVideoDialogSelector.react"),{contextConfig:this.props.contextConfig,config:this.props.config},b("ReactComposerLoggingName").LIVE_VIDEO_TAB_SELECTOR):null]}),b("React").jsxs(b("ReactComposerBodyContainer.react"),{expanded:!0,hasMinHeight:!1,children:[b("React").jsx(b("ReactComposerStatusEagerAttachment.react"),{config:this.props.config,selected:!0,postButtonModule:b("ReactComposerFeedPostButtonContainer.react"),placeholder:c[b("ReactComposerAttachmentType").STATUS].placeholder},"status"),b("React").jsx(b("ReactComposerMediaEagerAttachment.react"),{config:this.props.config,postButtonModule:b("ReactComposerFeedMediaPostButtonContainer.react"),selected:!1}),d?b("React").jsx(b("ReactComposerLiveVideoLazyAttachment.react"),{config:this.props.config,postButtonModule:b("ReactComposerLiveVideoPreviewButton.react"),selected:!1},"live_video"):null]})]})},_renderActorSelector:function(){var a=this.props.config.actorConfig;a.composerID=this.props.contextConfig.composerID;return b("React").jsx(b("BootloadedComponent.react"),babelHelpers["extends"]({},a,{bootloadPlaceholder:b("React").jsx(b("XUISpinner.react"),{className:"_3igw"}),bootloadLoader:b("JSResource")("ReactComposerActorSelectorContainer.react").__setRef("ReactFundraiserComposer.react")}))}});e.exports=a}),null);
__d("XWifiAuthReleaseAccessController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/wifiauth/release_access/",{gw_id:{type:"FBID",required:!0},redirect_mac:{type:"String",required:!0},redirect_url:{type:"String",required:!0},login_type:{type:"Enum",required:!0,enumType:0}})}),null);
__d("ReactSocialWifiComposer.react",["fbt","Arbiter","React","ReactComposerAttachmentType","ReactComposerBodyContainer.react","ReactComposerConfig","ReactComposerContextConfig","ReactComposerContextProviderMixin","ReactComposerEvents","ReactComposerFeedPostButtonContainer.react","ReactComposerLazyHeader.react","ReactComposerLoggingName","ReactComposerPrefillConfig","ReactComposerPrefillUtils","ReactComposerSproutsStatusAndMediaSelector.react","ReactComposerStatusEagerAttachment.react","ReactComposerWithSprouts.react","XWifiAuthReleaseAccessController","goURI","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();c=(a=b("prop-types")).shape({gw_id:a.string.isRequired,redirect_mac:a.string.isRequired,redirect_url:a.string.isRequired});d=b("React").createClass({displayName:"ReactSocialWifiComposer",mixins:[b("ReactComposerContextProviderMixin")],propTypes:{contextConfig:b("ReactComposerContextConfig").isRequired,config:b("ReactComposerConfig").isRequired,prefillConfig:b("ReactComposerPrefillConfig").isRequired,gateway:c.isRequired},UNSAFE_componentWillMount:function(){var a=this;b("ReactComposerPrefillUtils").prefill(this.props.contextConfig.composerID,this.props.prefillConfig,this.props.contextConfig.gks);b("Arbiter").subscribe(b("ReactComposerEvents").POST_SUCCEEDED+this.props.contextConfig.composerID,function(){b("goURI")(b("XWifiAuthReleaseAccessController").getURIBuilder().setFBID("gw_id",a.props.gateway.gw_id).setString("redirect_mac",a.props.gateway.redirect_mac).setString("redirect_url",a.props.gateway.redirect_url).setEnum("login_type",1).getURI())})},render:function(){var a,c=this.props.config.attachmentsConfig;c=[(a=b("React")).jsx(b("ReactComposerSproutsStatusAndMediaSelector.react"),{label:c[b("ReactComposerAttachmentType").STATUS].tabTitle,statusOnly:!1},b("ReactComposerLoggingName").STATUS_TAB_SELECTOR)];return a.jsxs(b("ReactComposerWithSprouts.react"),{defaultAttachmentOnExpand:b("ReactComposerAttachmentType").STATUS,innerProps:{loggingConfig:this.props.config.loggingConfig,sproutsConfig:this.props.config.sproutsConfig},ref:"root",children:[a.jsx(b("ReactComposerLazyHeader.react"),{background:"light-wash",noHorizontalMargin:!0,showDelimiter:!1,children:c}),a.jsx(b("ReactComposerBodyContainer.react"),{children:a.jsx(b("ReactComposerStatusEagerAttachment.react"),{config:this.props.config,selected:!0,postButtonModule:b("ReactComposerFeedPostButtonContainer.react"),postButtonLabel:g._("\u0e40\u0e0a\u0e47\u0e04\u0e2d\u0e34\u0e19"),prefillConfig:this.props.prefillConfig},"status")})]})}});e.exports=d}),null);
__d("ReactComposerGIFSproutContainer.react",["cx","FluxContainer","React","ReactComposerAttachmentStore","ReactComposerContextTypes","ReactComposerDisabledSproutItem.react","ReactComposerGIFToggleController.react","ReactComposerMediaUploadStore","ReactComposerScrapedAttachmentStore","ReactComposerSproutItem.react","ReactComposerSproutsDefaultUIConfigTyped","ReactComposerTaggerStore","ReactComposerTaggerType"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.getStores=function(){return[b("ReactComposerTaggerStore"),b("ReactComposerScrapedAttachmentStore"),b("ReactComposerAttachmentStore"),b("ReactComposerMediaUploadStore")]};c.calculateState=function(a,c,d){a=d.composerID;return{highlighted:b("ReactComposerTaggerStore").hasData(a,b("ReactComposerTaggerType").GIF),isDisabled:b("ReactComposerTaggerStore").isDisabled(a,b("ReactComposerTaggerType").GIF)||b("ReactComposerAttachmentStore").isContentMultiShareAttachment(a),isSelected:b("ReactComposerTaggerStore").getSelectedTagger(a)===b("ReactComposerTaggerType").GIF}};var d=c.prototype;d.render=function(){return this.state.isDisabled?b("React").jsx(b("ReactComposerDisabledSproutItem.react"),{uiConfig:this.props.uiConfig}):b("React").jsx(b("ReactComposerGIFToggleController.react"),babelHelpers["extends"]({},this.props,{showFlyout:this.state.isSelected,spanClassName:"_4mvf",loggingName:this.props.uiConfig.loggingName,children:b("React").jsx(b("ReactComposerSproutItem.react"),{uiConfig:this.props.uiConfig,highlighted:this.state.highlighted})}))};return c}(b("React").PureComponent);a.defaultProps={uiConfig:b("ReactComposerSproutsDefaultUIConfigTyped").sproutsUIConfigMap.GIF};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withContext:!0,withProps:!0})}),null);
__d("ReactComposerMediaSproutContainer.react",["fbt","FluxContainer","React","ReactComposerAttachmentStore","ReactComposerAttachmentType","ReactComposerContextTypes","ReactComposerDisabledSproutItem.react","ReactComposerMediaSprout.react","ReactComposerMediaUploadStore","ReactComposerTaggerActions","ReactComposerTaggerStore","XUIAmbientNUX.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(){d.setState({showPagePostTemplateNux:!1}),b("ReactComposerTaggerActions").handleSetTaggerShowNUX(d.context.composerID,"page_post_template",!1)},c)||babelHelpers.assertThisInitialized(d)}c.getStores=function(){return[b("ReactComposerAttachmentStore"),b("ReactComposerMediaUploadStore"),b("ReactComposerTaggerStore")]};c.calculateState=function(a,c,d){a=b("ReactComposerAttachmentStore").getIsAttachmentSelected(d.composerID,b("ReactComposerAttachmentType").MEDIA);c=b("ReactComposerMediaUploadStore").getUploadsCount(d.composerID);var e=b("ReactComposerTaggerStore").shouldShowNUX(d.composerID,"page_post_template");return{highlighted:!!c&&a,showPagePostTemplateNux:e,isDisabled:b("ReactComposerAttachmentStore").isContentMultiShareAttachment(d.composerID)}};var d=c.prototype;d.render=function(){var a=this;return this.state.isDisabled?b("React").jsx(b("ReactComposerDisabledSproutItem.react"),{uiConfig:this.props.uiConfig}):b("React").jsxs("div",{children:[b("React").jsx(b("ReactComposerMediaSprout.react"),babelHelpers["extends"]({config:this.props.config,mediaType:"MEDIA",ref:"mediaSprout"},this.props,this.state)),b("React").jsx(b("XUIAmbientNUX.react"),{contextRef:function(){return a.refs.mediaSprout},onCloseButtonClick:this.$1,position:"left",shown:this.state.showPagePostTemplateNux,children:g._("\u0e42\u0e1e\u0e2a\u0e15\u0e4c\u0e17\u0e35\u0e48\u0e21\u0e35\u0e23\u0e39\u0e1b\u0e20\u0e32\u0e1e\u0e21\u0e31\u0e01\u0e08\u0e30\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e21\u0e35\u0e2a\u0e48\u0e27\u0e19\u0e23\u0e48\u0e27\u0e21\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32")})]})};return c}(b("React").PureComponent);a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withContext:!0,withProps:!0})}),null);
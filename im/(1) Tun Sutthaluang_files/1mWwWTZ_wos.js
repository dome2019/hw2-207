if (self.CavalryLogger) { CavalryLogger.start_js(["whkuX"]); }

__d("MercuryAttachmentError.react",["fbt","React","XUINotice.react","XUIText.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx(b("XUINotice.react"),{use:"warn",children:b("React").jsx(b("XUIText.react"),{size:"meta1",children:g._("This attachment could not be loaded.")})})};return c}(b("React").Component);e.exports=a}),null);
__d("MercuryAttachmentFile.react",["cx","fbt","ix","Image.react","LeftRight.react","Link.react","MercuryAttachment","React","URI","isLinkshimURI","joinClasses","prop-types"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidMount=function(){this.props.onAttachmentLoad&&this.props.onAttachmentLoad()};d.$1=function(){if(b("isLinkshimURI")(new(j||(j=b("URI")))(this.props.url)))return this.props.url;else return{url:(this.props.url||"").toString(),shimhash:this.props.shimhash}};d.$2=function(){return this.props.open_url?b("React").jsxs("div",{className:"_59gs",children:[b("React").jsx(b("Link.react"),{target:"_blank",href:this.props.open_url,children:h._("\u0e40\u0e1b\u0e34\u0e14\u0e44\u0e1f\u0e25\u0e4c")})," ","\xb7"," ",b("React").jsx(b("Link.react"),{href:this.$1(),s:this.props.isSafeToSkipShim?"1":"",children:h._("\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14")})]}):b("React").jsx("div",{})};d.render=function(){var a=b("joinClasses")(b("MercuryAttachment").getAttachIconClass(this.props.type),"_59go _59gq");return this.props.url?b("React").jsxs(b("LeftRight.react"),{className:a,children:[b("React").jsx(b("Link.react"),babelHelpers["extends"]({href:this.$1(),s:this.props.isSafeToSkipShim?"1":""},this.$3(),{children:b("React").jsxs(b("LeftRight.react"),{children:[b("React").jsx(b("Image.react"),{src:i("86988")}),b("React").jsx("span",{className:"_59gp",children:this.props.name})]})})),this.$2()]}):b("React").jsxs(b("LeftRight.react"),{className:a,children:[b("React").jsx(b("Image.react"),{src:i("86988")}),b("React").jsx("span",{className:"_59gp",children:this.props.name})]})};d.$3=function(){return b("isLinkshimURI")(new(j||(j=b("URI")))(this.props.url))?{target:"_blank"}:{}};return c}(b("React").PureComponent);a.propTypes={isSafeToSkipShim:(c=b("prop-types")).bool,name:c.string.isRequired,onAttachmentLoad:c.func,open_url:c.string,rel:c.string,shimhash:c.string,type:c.string.isRequired,url:c.string};e.exports=a}),null);
__d("MercuryAttachmentMalicious.react",["fbt","React","XUINotice.react","XUIText.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx(b("XUINotice.react"),{use:"warn",children:b("React").jsx(b("XUIText.react"),{size:"meta1",children:g._("\u0e17\u0e33\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e44\u0e1f\u0e25\u0e4c\u0e41\u0e19\u0e1a\u0e19\u0e35\u0e49\u0e27\u0e48\u0e32\u0e40\u0e1b\u0e47\u0e19\u0e2d\u0e31\u0e19\u0e15\u0e23\u0e32\u0e22\u0e41\u0e25\u0e49\u0e27")})})};return c}(b("React").Component);e.exports=a}),null);
__d("MercuryAttachmentPhoto.react",["ChatImageArrowDirection","ChatImageWithArrow.react","MercuryAttachmentViewer","MercuryIDs","MessengerBusinessHideImageBootloaded.react","MessengerMessage.bs","React","SphericalPhotoUtils","SpotlightMercurySharedMediaViewer.react","URI","getPageIDFromThreadID","prop-types"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("SphericalPhotoUtils").getThumbnailsFromPhotoEncodings,i=160;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),h=0;h<e;h++)f[h]=arguments[h];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={newSharedPhotosView:!1},d.$1=function(a){__p&&__p();var c;a=d.props.image;var e=!0;!d.props.hasAttribution&&d.props.count&&(e=d.props.count===1);var f=d.props.message;f=f.thread_fbid?f.thread_fbid:b("MercuryIDs").getThreadFBIDFromThreadID(f.thread_id);f=new(g||(g=b("URI")))("/ajax/messaging/attachments/sharedphotos.php").setQueryData({thread_id:f,image_id:a.metadata.fbid});var h="messages:view_all_in_thread";c=(c=a.large_preview_url)!=null?c:a.preview_url;b("MercuryAttachmentViewer").bootstrapWithConfig({dimensions:a.metadata.dimensions,disablePaging:e,endpoint:f,fbid:a.metadata.fbid,setID:h,src:c},null)},d.$2=function(){var a=d.props.image;a&&a.metadata&&d.setState({newSharedPhotosView:a.metadata.fbid})},d.$3=function(){d.setState({newSharedPhotosView:null})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){b("MercuryAttachmentViewer").preload(),this.props.onAttachmentLoad&&this.props.onAttachmentLoad(this.props.height)};d.$4=function(){var a=this.props.message.thread_fbid||this.props.message.thread_id&&b("MercuryIDs").getThreadFBIDFromThreadID(this.props.message.thread_id);return b("React").jsx(b("SpotlightMercurySharedMediaViewer.react"),{onClosePhotoView:this.$3,photoID:String(this.state.newSharedPhotosView),rootClassName:"",threadID:a,disableForward:!1,enableShareToFB:!0})};d.render=function(){var a=b("MessengerMessage.bs").isInbound(this.props.message),c=!!b("getPageIDFromThreadID")(this.props.message.thread_id);c=!this.props.hasAttribution&&!c?this.$2:this.$1;var d=this.state.newSharedPhotosView?this.$4():null,e=this.props.photoEncodings?this.props.photoEncodings.length!==0:!1,f=this.props.image.preview_url;if(e){var g=h(this.props.photoEncodings);g=g.smallThumbnail;f=g||this.props.image.preview_url}return!!b("getPageIDFromThreadID")(this.props.message.thread_id)&&this.props.image.blurred_image_uri!==null&&this.props.image.blurred_image_uri!==void 0?b("React").jsx(b("MessengerBusinessHideImageBootloaded.react"),{fbid:this.props.image.metadata.fbid,thumbnail:this.props.image.blurred_image_uri,renderSmall:!0}):b("React").jsxs("div",{onFocus:this.$5,children:[d,b("React").jsx(b("ChatImageWithArrow.react"),{arrowDirection:a?b("ChatImageArrowDirection").LEFT:b("ChatImageArrowDirection").RIGHT,source:f,height:e?i:this.props.height,width:e?i:this.props.width,onClick:c,round:!!this.props.round,isLoading:!!this.props.image.preview_uploading,isSpherical:e})]})};d.$5=function(a){a.stopPropagation()};return c}(b("React").Component);a.propTypes={hasAttribution:(c=b("prop-types")).bool,height:c.number,image:c.object.isRequired,photoEncodings:c.array,message:c.object.isRequired,onAttachmentLoad:c.func,round:c.bool,width:c.number};e.exports=a}),null);
__d("ChatGridImageReact.bs",["cx","bs_curry","React","Link.react","bs_belt_Option","bs_caml_option","CssBackgroundImage.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){__p&&__p();var c=a.isLoading,d=a.isSpherical,e=a.metadata,f=a.size,g=a.source,h=a.onClick;a=String(f)+"px";f={height:a,width:a};a=b("bs_belt_Option").getWithDefault(c,!1);c=a||g===void 0;if(c)return b("React").jsx("div",{className:"_4ypb",style:f});else{a=b("bs_belt_Option").getWithDefault(g,"");c=function(a){a=e!==void 0?b("bs_caml_option").valFromOption(e).fbid:"";if(h!==void 0)return b("bs_curry")._1(h,a);else return 0};g=b("bs_belt_Option").getWithDefault(d,!1);d=g?b("React").jsx("div",{className:"_64ks"}):null;return b("React").jsx(b("Link.react"),{onClick:c,children:b("React").jsx(b("CssBackgroundImage.react"),{className:"_332l"+(g?" _3603":""),imageURI:a,backgroundPosition:"center",style:f,children:d})})}}c=a;f.make=c}),null);
__d("ChatGridImageReact.re",["ChatGridImageReact.bs"],(function(a,b,c,d,e,f){(function(a){return null});a=b("ChatGridImageReact.bs").make;f.make=a}),null);
__d("MercuryAttachmentPhotoGrid.react",["cx","ChatGridImageReact.re","Grid.react","MercuryAttachmentViewer","MercuryIDs","React","prop-types","SpotlightMercurySharedMediaViewer.react","SphericalPhotoUtils","URI","getPageIDFromThreadID"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("ChatGridImageReact.re").make,j=b("Grid.react").GridItem,k=b("SphericalPhotoUtils").getThumbnailsFromPhotoEncodings;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={newSharedPhotosView:null},d.$1=function(a,c){var e=d.props.count,f=d.props.message;f=f.thread_fbid?f.thread_fbid:b("MercuryIDs").getThreadFBIDFromThreadID(f.thread_id);var g=new(h||(h=b("URI")))("/ajax/messaging/attachments/sharedphotos.php").setQueryData({thread_id:f,image_id:a.metadata&&a.metadata.fbid}),i="messages:view_all_in_thread";return function(d){b("MercuryAttachmentViewer").bootstrapWithConfig({dimensions:a.metadata.dimensions,disablePaging:c||e===1,endpoint:g,fbid:a.metadata.fbid,setID:i,src:a.preview_url},null)}},d.$2=function(a){a&&d.setState({newSharedPhotosView:a})},d.$3=function(){d.setState({newSharedPhotosView:null})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){b("MercuryAttachmentViewer").preload()};d.$4=function(){var a=this.props.message.thread_fbid||this.props.message.thread_id&&b("MercuryIDs").getThreadFBIDFromThreadID(this.props.message.thread_id);return b("React").jsx(b("SpotlightMercurySharedMediaViewer.react"),{onClosePhotoView:this.$3,photoID:String(this.state.newSharedPhotosView),rootClassName:"",threadID:a,disableForward:!1})};d.render=function(){__p&&__p();var a=this.props.images,c=a.length;c=c==2||c==4?2:3;var d=Math.floor(this.props.size/c),e=[],f=a.some(function(a){return a.attach_type==="animated_image"}),g=this.state.newSharedPhotosView?this.$4():null,h=!!b("getPageIDFromThreadID")(this.props.message.thread_id);for(var l=0;l<a.length;l++){var m=h?this.$1(a[l],f):this.$2,n=a[l].photo_encodings?a[l].photo_encodings.length!==0:!1,o=a[l].preview_url;if(n){var p=k(a[l].photo_encodings);p=p.smallThumbnail;o=p||o}e.push(b("React").jsx(j,{children:b("React").jsx(i,{isLoading:!!a[l].preview_uploading,onClick:m,metadata:a[l].metadata,size:d,source:o,isSpherical:n})},l))}return b("React").jsxs("div",{children:[g,b("React").jsx(b("Grid.react"),{cols:c,className:"_5b2w",spacing:"_5b2x",alignh:"right",children:e})]})};return c}(b("React").Component);a.propTypes={images:(c=b("prop-types")).arrayOf(c.object).isRequired,size:c.number.isRequired,message:c.object.isRequired};e.exports=a}),null);
__d("ChatAttachmentAttribution.react",["cx","ImmutableObject","MercuryAttachmentAttribution.react","React","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidMount=function(){this.props.onAttachmentLoad&&this.props.onAttachmentLoad()};d.render=function(){return b("React").jsx(b("MercuryAttachmentAttribution.react"),{attachment:this.props.attachment,className:"_1ekr _4i_6"})};return c}(b("React").Component);a.propTypes={attachment:b("prop-types").instanceOf(b("ImmutableObject")),onAttachmentLoad:b("prop-types").func};e.exports=a}),null);
__d("MercuryAttachmentVideo.react",["cx","ix","CenteredContainer.react","ChatAttachmentAttribution.react","ChatImageWithArrow.react","ChatSpeakingSticker.react","FBOverlayBase.react","FBOverlayContainer.react","FBOverlayElement.react","Image.react","ImmutableObject","MercuryAttachment","MercuryAttachmentViewer","MessengerVideoPlayer.react","React","SpotlightMercurySharedMediaViewer.react","Vector","getPageIDFromThreadID","joinClasses","prop-types"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={newSharedPhotosView:null},d.$1=function(){var a=d.props.duration,b=Math.floor(a/60);a=a%60;return a<10?b+":0"+a:b+":"+a},d.openViewer=function(){var a=d.props,c=a.pageID,e=a.videoID,f=a.videoSize;a=a.videoURI;f=new(b("Vector"))(f.width,f.height);b("MercuryAttachmentViewer").renderVideo({pageID:c,videoID:e,videoSize:f,videoURI:a})},d.$2=function(){d.props.videoID&&d.setState({newSharedPhotosView:d.props.videoID})},d.$3=function(){d.setState({newSharedPhotosView:null})},d.$5=function(){if(d.props.isChat)return b("React").jsxs("div",{children:[b("React").jsx(b("ChatImageWithArrow.react"),{height:d.props.thumbSize.height,round:!0,source:d.props.thumbnail,width:d.props.thumbSize.width},"previewImage"),b("React").jsx(b("ChatAttachmentAttribution.react"),{attachment:d.props.attachment},"chatAttribution")]});else return b("React").jsx(b("Image.react"),{height:d.props.thumbSize.height,width:d.props.thumbSize.width,src:d.props.thumbnail})},d.$6=function(){return d.props.isChat?{}:d.props.thumbSize},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){this.props.onAttachmentLoad&&this.props.onAttachmentLoad(),b("MercuryAttachmentViewer").preload()};d.$4=function(){return b("React").jsx(b("SpotlightMercurySharedMediaViewer.react"),{onClosePhotoView:this.$3,photoID:this.state.newSharedPhotosView,rootClassName:"",threadID:this.props.threadFBID,disableForward:!1})};d.$7=function(a,c){return!a.legacy_attachment_id?null:b("React").jsx(b("MessengerVideoPlayer.react"),{attachment:this.props.attachment,videoData:a,isInThread:!0,isVisible:this.props.isVisible,onClick:c,className:b("joinClasses")(this.props.className,"_n4o _3_om _1wno")})};d.$8=function(a){a=this.props.thumbSize;a={x:a.width,y:a.height};return{legacy_attachment_id:this.props.videoID,original_dimensions:a,start_muted:!0,no_fullscreen:!0,hide_controls_on_finish:!0,url:this.props.videoURI}};d.render=function(){if(this.props.attachment.metadata&&this.props.attachment.metadata.render_as_sticker&&this.props.isChat)return b("React").jsx(b("ChatSpeakingSticker.react"),{videoURI:this.props.videoURI,videoSize:this.props.videoSize});var a=!!b("getPageIDFromThreadID")(this.props.threadID);a=a?this.openViewer:this.$2;var c=this.state.newSharedPhotosView&&this.props.threadFBID?this.$4():null,d=b("MercuryAttachment").hasAttribution(this.props.attachment),e="clearfix _zow _59go"+(d?" _4yjw":"")+(this.props.isChat?" _3ds5":""),f=this.$8(this.props.attachment);f=this.$7(f,a);f=f?f:b("React").jsxs(b("FBOverlayContainer.react"),{className:e,onClick:a,style:this.$6(),children:[b("React").jsx(b("FBOverlayBase.react"),{children:this.$5()}),b("React").jsx(b("FBOverlayElement.react"),{children:b("React").jsx("div",{className:(this.props.isChat?"":"_zox")+(d?" _jt3":""),children:b("React").jsx("span",{className:"_zoz",children:this.$1()})})}),b("React").jsx(b("FBOverlayElement.react"),{children:b("React").jsx(b("CenteredContainer.react"),{className:d?"_jt3":"",vertical:!0,children:b("React").jsx(b("Image.react"),{src:h("27983")})})})]},"overlayContainer");return this.props.isChat?b("React").jsxs("div",{children:[c,f]}):b("React").jsxs("div",{children:[c,f,b("React").jsx(b("ChatAttachmentAttribution.react"),{attachment:this.props.attachment},"inboxAttribution")]})};return c}(b("React").Component);a.propTypes={attachment:(c=b("prop-types")).instanceOf(b("ImmutableObject")),duration:c.number.isRequired,isChat:c.bool,isVisible:c.bool,threadID:c.string,threadFBID:c.string,name:c.string.isRequired,onAttachmentLoad:c.func,pageID:c.string,thumbSize:c.shape({height:c.number,width:c.number}).isRequired,thumbnail:c.string.isRequired,videoSize:c.shape({height:c.number,width:c.number}).isRequired,videoID:c.string.isRequired,videoURI:c.string.isRequired};e.exports=a}),null);
__d("MercuryAttachmentRenderer",["cx","ChatAttachmentAttribution.react","EmojiSticker.react","ImmutableObject","MercuryAttachment","MercuryAttachmentAudioClip.react","MercuryAttachmentFile.react","MercuryAttachmentLayoutTypeHelper","MercuryAttachmentPhoto.react","MercuryAttachmentPhotoGrid.react","MercuryAttachmentVideo.react","MercuryIDs","MercuryShareAttachment.react","MercuryShareAttachmentRenderLocations","MessengerFromViewerUtils","MessengerHotLikeUtils","MessengerSupportedEmojiUtils","React","Sticker.react","StickerConstants","XStickerAssetController","gkx"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=12;a={renderFile:function(a,c,d){return b("React").jsx(b("MercuryAttachmentFile.react"),{isSafeToSkipShim:a.url_skipshim,name:a.name,onAttachmentLoad:d,open_url:c?null:a.open_url,rel:a.rel,shimhash:a.url_shimhash,type:a.icon_type,url:a.url})},renderAudioClip:function(a,c,d,e,f){var g=a.metadata.duration/1e3,h=b("MercuryShareAttachmentRenderLocations").CHAT,i=100,j=c?160:400,k=100;g>=5&&(k=(1-Math.pow(10,(g-5)/-30))*(j-i)+i);return[b("React").jsx(b("MercuryAttachmentAudioClip.react"),{customColor:d,duration:a.metadata.duration/1e3,isChat:c,isFromViewer:b("MessengerFromViewerUtils").isFromViewer(e),location:h,onAttachmentLoad:f,rootClassName:b("MercuryAttachment").hasAttribution(a)?"_4yjw":"",showHelp:!1,src:a.url,width:k},"audioClip"),b("React").jsx(b("ChatAttachmentAttribution.react"),{attachment:new(b("ImmutableObject"))(a),onAttachmentLoad:f},"audioAttribution")]},renderVideo:function(a,c,d,e,f){var g=c?a.metadata.chat_size:a.metadata.inbox_size,h=c?a.metadata.chat_preview:a.metadata.inbox_preview;if(!g||!h)return null;var i=d&&(d.thread_fbid||d.thread_id&&b("MercuryIDs").getThreadFBIDFromThreadID(d.thread_id));return b("React").jsx("div",{children:b("React").jsx(b("MercuryAttachmentVideo.react"),{attachment:new(b("ImmutableObject"))(a),duration:a.metadata.duration,isChat:c,isVisible:f,threadID:d&&d.thread_id,threadFBID:i,name:a.name,onAttachmentLoad:e,pageID:a.metadata.pageid,thumbSize:g,thumbnail:h,videoSize:a.metadata.dimensions,videoID:a.metadata.fbid,videoURI:a.url})})},constructStickerComponent:function(a,c,d,e,f,g){__p&&__p();e=e?"chatScrolled/":"messengerScrolled/";e+=a.thread_id;if(!c){c=b("MessengerHotLikeUtils").getMetadataForHotLike(a.sticker_id);if(!c){var h={},i={height:b("StickerConstants").THREAD_SIZE,width:b("StickerConstants").THREAD_SIZE},j=i.height;i=i.width;h.height=j;h.width=i;h.stickerID=a.sticker_id;h.spriteURI="";h.spriteURI2x="";h.paddedSpriteURI="";h.paddedSpriteURI2x="";c=h}}j=null;c.stickerID?j=c.stickerID.toString():a.sticker_id&&(j=a.sticker_id.toString());i=null;c.packID&&(i=c.packID.toString());h=b("XStickerAssetController").getURIBuilder().setInt("sticker_id",j);a=null;var k=null;window.devicePixelRatio&&window.devicePixelRatio>1?(k=c.paddedSpriteURI2x,a=c.spriteURI2x):(k=c.paddedSpriteURI,a=c.spriteURI);return b("React").jsx(b("Sticker.react"),{accessibilityLabel:c.accessibilityLabel,animationTrigger:"hover",customColor:g,frameCount:c.frameCount||1,frameRate:c.frameRate||83,framesPerCol:c.framesPerCol||1,framesPerRow:c.framesPerRow||1,onAttachmentLoad:f,onStickerClick:d,packID:i,paddedSpriteURI:k,sourceHeight:c.height,sourceURI:h.setEnum("image_type","BestEffortImage").getURI().toString(),sourceWidth:c.width,spriteURI:a,stickerID:j,subscribedThreadID:e,testID:"sticker"})},constructEmojiLikeAttachment:function(a,c,d){a=b("MessengerSupportedEmojiUtils").getHotLikeEmojiData(c.body,a.size)||b("MessengerSupportedEmojiUtils").getHotLikeEmojiDataTransition(c.body,a.size);if(!a)return null;a=a.emoji;return b("React").jsx(b("EmojiSticker.react"),{className:"_2poz _ui9",emoji:c.body,emojiImage:a,sourceURI:"",onAttachmentLoad:d},"sticker:"+c.message_id)},renderPhotoAttachments:function(a,c,d,e){__p&&__p();var f=a.length;if(!f)return null;var g=c&&c.thread_fbid;c&&!g&&(b("MercuryIDs").isLocalThread(c.thread_id)?null:b("MercuryIDs").getThreadFBIDFromThreadID(c.thread_id));if(f===1){g=a[0];f=b("MercuryAttachment").resizeContain({width:d-h,height:d},{width:g.preview_width,height:g.preview_height});return b("React").jsxs("div",{className:"_55pk _59go"+(b("MercuryAttachment").hasAttribution(g)?" _4yjw":""),children:[b("React").jsx(b("MercuryAttachmentPhoto.react"),{image:g,width:f.width,hasAttribution:b("MercuryAttachment").hasAttribution(g),height:f.height,photoEncodings:g.photo_encodings,message:c,onAttachmentLoad:e,round:!0}),b("React").jsx(b("ChatAttachmentAttribution.react"),{attachment:new(b("ImmutableObject"))(a[0])})]})}return b("React").jsx("div",{className:"_55pk",children:b("React").jsx(b("MercuryAttachmentPhotoGrid.react"),{images:a,size:d-h,message:c})})},sortAttachmentsStablyByType:function(a){__p&&__p();var c,d=[(c=b("MercuryAttachment")).isEmojiLikeAttachment,c.isPhotoAttachment,c.isShareAttachment,c.isFileAttachment,c.isErrorAttachment];d.push(function(a){return!0});var e=d.map(function(a){return[]});a.forEach(function(a){for(var b=0;b<d.length;b++)if(d[b](a)){e[b].push(a);break}});return Array.prototype.concat.apply([],e)},constructStoryBasedShareAttachment:function(a,c,d,e,f,g){__p&&__p();var h,i,j,k=b("MercuryShareAttachmentRenderLocations").CHAT,l=c.share&&c.share.style_list&&c.share.style_list[0]==="cultural_moment_holiday_card",m=b("MercuryAttachmentLayoutTypeHelper").isAdminType(c)?{maxWidth:260}:{maxWidth:e},n=null;a&&a.platform_xmd&&(n=JSON.parse(a.platform_xmd));j=(j=c)!=null?(j=j.share)!=null?(j=j.messenger_ctas)!=null?(j=j[0])!=null?j.page_id:j:j:j:j;i=(i=c)!=null?(i=i.share)!=null?(i=i.target)!=null?(i=i.items)!=null?(i=i[0])!=null?(i=i.call_to_actions)!=null?(i=i[0])!=null?i.page_id:i:i:i:i:i:i:i;j=j||i;i=j?b("MercuryIDs").getParticipantIDFromUserID(j):a.author;j=b("MessengerFromViewerUtils").isFromViewer(a);h=((h=c)!=null?(h=h.share)!=null?(h=h.style_list)!=null?h[0]:h:h:h)==="montage_direct";var o=b("gkx")("1019832")&&(c==null?void 0:c.share.style_list[0])==="montage_share";return b("React").jsx("div",{className:"_3_om"+(d&&!l&&!h&&!o?" _3cpq":""),style:m,children:b("React").jsx(b("MercuryShareAttachment.react"),{attachment:c.share,isFromViewer:j,isSponsored:a.is_sponsored,isVisible:g,location:k,maxWidth:e,messageID:a.message_id,mnMessageType:n&&n.template_type,onComponentLoaded:f,pageID:i,threadID:a.thread_id,timestamp:a.timestamp,author:a.author})})}};e.exports=a}),null);
__d("MercuryAttachments.react",["cx","MercuryAttachment","MercuryAttachmentError.react","MercuryAttachmentMalicious.react","MercuryAttachmentRenderer","MessengerHotLikePreview.react","React","SubscriptionsHandler","emptyFunction","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=function(a){c.props.onAttachmentLoad&&c.props.onAttachmentLoad(a)},c.$2=null,b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){this.$2=new(b("SubscriptionsHandler"))()};d.componentWillUnmount=function(){this.$2&&this.$2.release()};d.$3=function(a){__p&&__p();if(b("MercuryAttachment").isStickerAttachment(a))return b("MercuryAttachmentRenderer").constructStickerComponent(this.props.message,this.props.attachments[0].metadata,this.props.onStickerClick,this.props.isChat,this.$1,this.props.customColor);else if(b("MercuryAttachment").isEmojiLikeAttachment(a)){var c=b("MercuryAttachmentRenderer").constructEmojiLikeAttachment(a,this.props.message,this.$1);return c?c:b("React").jsx(b("MercuryAttachmentError.react"),{})}else if(b("MercuryAttachment").isVoiceAttachment(a))return b("MercuryAttachmentRenderer").renderAudioClip(this.props.attachments[0],this.props.isChat,this.props.customColor,this.props.message,this.$1);else if(b("MercuryAttachment").isVideoAttachment(a))return b("MercuryAttachmentRenderer").renderVideo(a,this.props.isChat,this.props.message,this.$1,this.props.isVisible);else if(b("MercuryAttachment").isShareAttachment(a))return b("MercuryAttachmentRenderer").constructStoryBasedShareAttachment(this.props.message,a,this.props.isChat,this.props.maxWidth,this.$1,this.props.isVisible);else if(b("MercuryAttachment").isFileAttachment(a))return b("MercuryAttachmentRenderer").renderFile(a,this.props.isChat,this.$1);else if(b("MercuryAttachment").isErrorAttachment(a))return b("React").jsx(b("MercuryAttachmentError.react"),{});return b("React").jsx(b("MercuryAttachmentMalicious.react"),{})};d.render=function(){__p&&__p();var a=this;if(this.props.message.is_like_preview)return b("React").jsx(b("MessengerHotLikePreview.react"),{forGameChat:this.props.forGameChat,isChat:this.props.isChat,since:this.props.message.like_preview_since,customLike:this.props.message.customLike,customColor:this.props.customColor},"hlp:"+this.props.message.like_preview_since);if(this.props.attachments.length===0)return b("React").jsx("div",babelHelpers["extends"]({},this.props));if(this.props.message.commerce_message_type==="ride_intent")return b("React").jsx("div",babelHelpers["extends"]({},this.props));var c=b("MercuryAttachmentRenderer").renderPhotoAttachments(this.props.attachments.filter(b("MercuryAttachment").isPhotoAttachment),this.props.message,this.props.maxWidth,this.$1),d=b("MercuryAttachmentRenderer").sortAttachmentsStablyByType(this.props.attachments.filter(function(a){return!b("MercuryAttachment").isPhotoAttachment(a)})).map(function(c,d){return b("React").jsx("span",{children:a.$3(c)},d)});return b("React").jsxs("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,d.length>0?"_6dm2":""),"data-testid":"attachment_root",children:[c,d,this.props.afterDecorators,this.props.renderProgressBar&&this.props.renderProgressBar(),this.props.attachments.every(function(a){return!b("MercuryAttachment").isShareAttachment(a)})?this.props.innerDecorators:null]}))};return c}(b("React").Component);a.propTypes={afterDecorators:(c=b("prop-types")).arrayOf(c.element),attachments:c.array.isRequired,className:c.string,customColor:c.string,customLike:c.object,forGameChat:c.bool,maxWidth:c.number.isRequired,message:c.object.isRequired,isChat:c.bool,isVisible:c.bool,onAttachmentLoad:c.func,onStickerClick:c.func,onUnwrap:c.func,innerDecorators:c.element};a.defaultProps={isChat:!1,onAttachmentLoad:b("emptyFunction"),onStickerClick:b("emptyFunction")};e.exports=a}),null);
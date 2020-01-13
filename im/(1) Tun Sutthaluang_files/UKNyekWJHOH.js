if (self.CavalryLogger) { CavalryLogger.start_js(["RlLSq"]); }

__d("TextSearchUtil",["TokenizeUtil"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={isMatch:function(a,b){return!b?!1:this._getNonMatchingTokens(a,b).length>1},getTokens:function(a,b){__p&&__p();b=b.trim();var c=this._getNonMatchingTokens(a,b);a=a.replace(/\s+/g," ");b=b.replace(/\s+/g," ");var d=[];c.forEach(function(a,e){d.push(a),e!==c.length-1&&d.push(b)});var e=[],f=0;d.forEach(function(b,c){if(!b)return;c=c%2===1;b=b.length;var d=a.substr(f,b);e.push({text:d,isHighlighted:c});f+=b});return e},_getNonMatchingTokens:function(a,c){a=b("TokenizeUtil").flatten(a);c=b("TokenizeUtil").flatten(c);return c?a.split(c):[a]}};e.exports=a}),null);
__d("AbstractHighlightedText.react",["React","TextSearchUtil"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=a.textToSearch.toString();a.textToHighlight&&(c=b("TextSearchUtil").getTokens(c,a.textToHighlight.toString()).map(function(c,d){return c.isHighlighted?b("React").jsx("span",{className:a.highlightClassName,style:a.highlightStyle,children:c.text},d):c.text}));return b("React").jsx(b("React").Fragment,{children:c})}e.exports=a}),null);
__d("FDSDropdownSelectorOptionGroup.react",["React","SUIDropdownSelectorOptionGroupUniform.fds","SUISelectorOptionGroup.react","emptyFunction","makeFDSStandardComponent","makeSUIFDSPrivateTheme"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("makeSUIFDSPrivateTheme")("FDSDropdownSelectorOptionGroup",{SUISelectorOptionGroup:b("SUIDropdownSelectorOptionGroupUniform.fds")});a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx(b("SUISelectorOptionGroup.react"),{canSelectMultiple:this.props.canSelectMultiple,"data-testid":this.props["data-testid"],isCollapsible:this.props.isCollapsible,isExpandedInitially:this.props.isExpandedInitially,label:this.props.label,onKeyDown:this.props.onKeyDown,onSelect:this.props.onSelect,onSubItemSelect:this.props.onSubItemSelect,selected:this.props.selected,setupFocusRef:this.props.setupFocusRef,theme:g,children:this.props.children})};return c}(b("React").PureComponent);a.defaultProps={canSelectMultiple:!1,isCollapsible:!0,isExpandedInitially:!1,setupFocusRef:b("emptyFunction")};e.exports=b("makeFDSStandardComponent")("FDSDropdownSelectorOptionGroup",a)}),null);
__d("FDSDropdownSelector.react",["FDSDropdownButton.react","FDSDropdownSelectorOptionGroup.react","FDSPrivateThemeContext.react","React","SUIErrorComponentUtil","SUISelector.react","SUISelectorButton.react","getSUIButtonUniform.fds","getSUIDropdownButtonUniform.fds","getSUIDropdownSelectorUniform.fds","getSUIErrorUniform.fds","makeFDSStandardComponent","makeSUIThemeGetter"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("makeSUIThemeGetter")({SUISelector:b("getSUIDropdownSelectorUniform.fds"),SUIButton:b("getSUIButtonUniform.fds"),SUIError:b("getSUIErrorUniform.fds"),SUISelectorButton:b("getSUIDropdownButtonUniform.fds")});a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=g(this.context);return b("React").jsx(b("SUISelector.react"),{button:this.props.button?b("React").cloneElement(this.props.button,{icon:this.props.buttonIcon,isDisabled:this.props.isDisabled,size:this.props.buttonSize,use:this.props.buttonUse}):b("React").jsx(b("SUISelectorButton.react"),{borderedSides:this.props.buttonBorderedSides,disabled:this.props.isDisabled,height:h(this.props.buttonSize),icon:this.props.buttonIcon,roundedCorners:this.props.buttonRoundedCorners,textAlign:this.props.buttonTextAlign,use:this.props.buttonUse}),canCollapseGroups:this.props.canCollapseGroups,canSelectMultiple:!1,contextualLayerBehaviors:(this.props.children,this.props.contextualLayerBehaviors),"data-menu-testid":this.props["data-menu-testid"],"data-testid":this.props["data-testid"],disabled:this.props.isDisabled,dropdownWidth:this.props.dropdownWidth,errorMessage:this.props.errorMessage,errorTooltipPosition:this.props.errorTooltipPosition,id:this.props.id,isSuppressed:this.props.isSuppressed,label:this.props.label,labelledBy:this.props.labelledBy,margin:this.props.margin,maxHeight:this.props.maxHeight,maxWidth:this.props.maxWidth,menuAlignment:this.props.menuAlignment,menuPosition:this.props.menuPosition,name:this.props.name,onChange:this.props.onChange,onClose:this.props.onClose,onMouseEntersMenu:this.props.onMouseEntersMenu,onMouseLeavesMenu:this.props.onMouseLeavesMenu,onOpen:this.props.onOpen,onSelectorButtonClick:this.props.onSelectorButtonClick,optionGroupComponentType:b("FDSDropdownSelectorOptionGroup.react"),placeholder:this.props.placeholder,shouldHideOnBlur:this.props.shouldHideOnBlur,shouldHideOnMouseLeave:this.props.shouldHideOnMouseLeave,shouldOpenAutomatically:this.props.shouldOpenAutomatically,style:this.props.style,theme:a,tooltip:this.props.tooltip,value:this.props.value,warningMessage:this.props.warningMessage,width:this.props.width,children:this.props.children})};return c}(b("React").PureComponent);a.defaultProps=babelHelpers["extends"]({},b("SUIErrorComponentUtil").defaultProps,{buttonSize:"medium",buttonTextAlign:"left",buttonUse:"default",canCollapseGroups:!0,contextualLayerBehaviors:{},isDisabled:!1,dropdownWidth:"auto",isSuppressed:!1,maxHeight:250,menuAlignment:"left",menuPosition:"below",shouldHideOnMouseLeave:!1,shouldHideOnBlur:!0,width:"auto"});a.contextType=b("FDSPrivateThemeContext.react");function h(a){if(a==="small")return"short";return a==="large"?"tall":"normal"}e.exports=b("makeFDSStandardComponent")("FDSDropdownSelector",a)}),null);
__d("FDSDropdownSelectorOption.react",["React","SUIDropdownSelectorOptionUniform.fds","SUIHelpMessageUniform.business","SUISelectorOption.react","SUITooltipUniform.business","makeFDSStandardComponent","makeSUIFDSPrivateTheme"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("makeSUIFDSPrivateTheme")("FDSDropdownSelectorOption",{SUISelectorOption:b("SUIDropdownSelectorOptionUniform.fds"),SUIHelpMessage:b("SUIHelpMessageUniform.business"),SUITooltip:b("SUITooltipUniform.business")});a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx(b("SUISelectorOption.react"),{canSelectMultiple:this.props.canSelectMultiple,"data-testid":this.props["data-testid"],description:this.props.description,disabled:this.props.isDisabled,hasSelectedValue:this.props.hasSelectedValue,icon:this.props.icon,onKeyDown:this.props.onKeyDown,onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave,onSelect:this.props.onSelect,role:this.props.role,selected:this.props.selected,setupFocusRef:this.props.setupFocusRef,theme:g,tooltip:this.props.tooltip,tooltipPosition:this.props.tooltipPosition,value:this.props.value,children:this.props.children})};return c}(b("React").PureComponent);a.defaultProps={canSelectMultiple:!1,isDisabled:!1,hasSelectedValue:!1,role:"menuitem",selected:!1,tooltipPosition:"above"};e.exports=b("makeFDSStandardComponent")("FDSDropdownSelectorOption",a)}),null);
__d("FDSDropdownSelectorSeparator.react",["React","SUIDropdownSelectorSeparatorUniform.fds","SUISelectorSeparator.react","makeFDSStandardComponent","makeSUIFDSPrivateTheme"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("makeSUIFDSPrivateTheme")("FDSDropdownSelectorSeparator",{SUISelectorSeparator:b("SUIDropdownSelectorSeparatorUniform.fds")});a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx(b("SUISelectorSeparator.react"),{theme:g})};return c}(b("React").PureComponent);e.exports=b("makeFDSStandardComponent")("FDSDropdownSelectorSeparator",a)}),null);
__d("useEffectOnce",["React"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useEffect;function a(a){return g(a,[])}e.exports=a}),null);
__d("ShareDialogAudienceTypes",["getObjectValues"],(function(a,b,c,d,e,f){__p&&__p();a=Object.freeze({OWN:"self",PERSON:"friend",GROUP:"group",EVENT:"event",PAGE:"page",FUNDRAISER:"fundraiser",MESSAGE:"message",STORY:"story"});var g=b("getObjectValues")(a);c=Object.freeze(babelHelpers["extends"]({},a,{ALL:g}));function h(a){return g.some(function(b){return b===a})}d=babelHelpers["extends"]({},c,{isValid:h,propType:function(a,b){if(!h(a[b]))throw new Error("Invalid audience "+a[b])}});e.exports=d}),null);
__d("SUIHighlightedText.react",["AbstractHighlightedText.react","React","SUIComponent","SUITheme","prop-types"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={highlight:""};c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.highlight,d=a.text;a=babelHelpers.objectWithoutPropertiesLoose(a,["highlight","text"]);var e=b("SUITheme").get(this).SUIHighlightedText;return b("React").jsx("span",babelHelpers["extends"]({},a,{children:b("React").jsx(b("AbstractHighlightedText.react"),{highlightStyle:{backgroundColor:e.backgroundColor,borderRadius:e.borderRadius,color:e.color},textToHighlight:c,textToSearch:d})}))};return c}(b("SUIComponent"));c.propTypes={highlight:b("prop-types").string.isRequired,text:b("prop-types").string.isRequired,theme:b("prop-types").instanceOf(b("SUITheme"))};c.defaultProps=a;e.exports=c}),null);
__d("AudioContextSingleton",["FBLogger"],(function(a,b,c,d,e,f){var g=window.AudioContext||window.webkitAudioContext||window.mozAudioContext,h=null;a={get:function(){h==null&&(h=new g());h.state==="closed"&&(b("FBLogger")("project").warn("AudioContext Singleton has been closed"),h=new g());return h}};e.exports=a}),null);
__d("isNullOrZero",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a==null||a===0}e.exports=a}),null);
__d("FBPaymentsNewPaymentOptionTypes",[],(function(a,b,c,d,e,f){"use strict";a={NEW_CREDIT_CARD:"new_cc",NEW_PAYPAL:"paypal",NEW_AFFIRM:"affirm",NEW_ALT_PAY:"alt_pay",NEW_CREDIT_CARD_FROM_GRAPHQL:"NEW_CREDIT_CARD",NEW_PAYPAL_FROM_GRAPHQL:"NEW_PAYPAL_BA",NEW_AFFIRM_FROM_GRAPHQL:"AFFIRM",NEW_ALT_PAY_FROM_GRAPHQL:"ALT_PAY"};e.exports=a}),null);
__d("FBPaymentsPaymentMethodTypes",[],(function(a,b,c,d,e,f){"use strict";a={CREDIT_CARD:"cc",CREDIT_CARD_FROM_GRAPHQL:"CREDIT_CARD",DUMMY_PAYMENT_METHOD:"dummy",DUMMY_PAYMENT_METHOD_FROM_GRAPHQL:"DUMMY",MANUAL_TRANSFER:"manual_transfer",NET_BANKING:"net_banking",PAYPAL_BILLING_AGREEMENT:"paypal_ba",PAYPAL_BILLING_AGREEMENT_FROM_GRAPHQL:"PAYPAL_BA",AFFIRM_MONTHLY_PAYMENT:"affirm",GIFTCARD_BALANCE:"giftcard_balance",GIFTCARD_BALANCE_FROM_GRAPHQL:"GIFTCARD_BALANCE",ALT_PAY:"alt_pay",ALT_PAY_FROM_GRAPHQL:"ALT_PAY"};e.exports=a}),null);
__d("CreditCardFormParam",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ACCOUNT_ID:"account_id",ACCOUNT_COUNTRY_CODE:"account_country_code",APP_ID:"app_id",CARD_EXPIRATION:"exp",CARD_FBID:"cc_fbid",CARD_ID:"cc_id",CARD_TYPE:"cardType",CITY:"city",CONTEXT_ID:"context_id",COUNTRY:"country",CSC_LENGTH:"csc_length",EMAIL:"email",FIRST_NAME:"firstName",TRACKING_ID:"tracking_id",JSFAIL_SOURCE:"jsfail_source",KEYPRESS_TIMES:"kpts",LAST_NAME:"lastName",MONTH:"month",STATE:"state",STREET:"street",STREET_2:"street2",VALIDATE_ADDRESS:"validate_address",VALIDATE_NAME:"validate_name",VALIDATE_ZIP:"validate_zip",YEAR:"year",ZIP:"zip",CARD_HOLDER_NAME:"card_holder_name",VALIDATOR_CHECKS:"checks",CARD_NUMBER:"creditCardNumber",CSC:"csc",CARD_NUMBER_FIRST_6:"creditCardNumber_first6",CARD_NUMBER_LAST_4:"creditCardNumber_last4",CARD_NUMBER_TOKEN:"creditCardNumber_token",CSC_TOKEN:"csc_token",AUTH_LEVEL_FLAG:"auth_level",AUTH_AMOUNT:"auth_amount",AUTH_CURRENCY:"auth_currency",AUTO_EXPAND_AUTH_LEVEL_FLAG:"auto_expand_auth_level",PAYMENT_ITEM_TYPE:"payment_item_type",COMBINED_PAYMENT_TYPE:"combined_payment_type",RECEIVER_ID:"receiver_id",CREDENTIAL_ID:"credential_id",IS_STORED_BALANCE:"is_stored_balance",IS_CHECKOUT_ELIGIBLE:"is_checkout_eligible",CHECKOUT_SAVE_CC_WITH_AUTH:"checkout_save_cc_with_auth",CHECKOUT_FUND_AMOUNT:"checkout_fund_amount",FLOW_PLACEMENT:"flow_placement",FLOW_TYPE:"flow_type",STORED_BALANCE_STATUS:"stored_balance_status",SESSION_ID:"session_id",IS_FROM_SUPPORT:"is_from_support",SOURCE_SUPPORT_FORM_ID:"source_support_form_id",GEO_COUNTRY:"geo_country"})}),null);
__d("CreditCardType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({DINERSCLUB:64,AMERICANEXPRESS:65,DISCOVER:68,ELO:69,INTERAC:73,JCB:74,MASTERCARD:77,PIN_ONLY:78,CUP:80,UNKNOWN:85,VISA:86,RUPAY:82,MAESTRO:83})}),null);
__d("CreditCardTypeField",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({UNKNOWN:"unknown",VISA:"visa",MASTERCARD:"mastercard",DISCOVER:"discover",AMERICAN_EXPRESS:"american_express",JCB:"jcb",DINERS_CLUB:"diners_club",CUP:"cup",RUPAY:"rupay",ELO:"elo",MAESTRO:"maestro",PIN_ONLY:"pin_only",INTERAC:"interac"})}),null);
__d("PaymentMethodUtils",["fbt","ix","CreditCardType","CreditCardTypeEnum","CreditCardTypeField","FBLogger","FBPaymentsNewPaymentOptionTypes","FBPaymentsPaymentMethodTypes"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=16,j=4,k=[{pattern:/^40117[8-9]/,name:"elo",cscDigits:3,digits:16,supported:!0,code:69,type:"elo"},{pattern:/^5[1-5]|^2(2(2[1-9]|[3-9])|[3-6]|7([01]|20))/,name:"mc",cscDigits:3,digits:16,supported:!0,code:77,type:"mastercard"},{pattern:/^4/,name:"visa",cscDigits:3,digits:16,supported:!0,code:86,type:"visa"},{pattern:/^3[47]/,name:"amex",cscDigits:4,digits:15,supported:!0,code:65,type:"american_express"},{pattern:/^35(2[8-9]|[3-8])/,name:"jcb",cscDigits:3,digits:16,supported:!0,code:74,type:"jcb"},{pattern:/^62/,name:"cup",cscDigits:3,digits:16,supported:!0,code:80,type:"china_union_pay"},{pattern:/^(6011|65|64[4-9])/,name:"disc",cscDigits:3,digits:16,supported:!0,code:68,type:"discover"},{pattern:/^(508[5-9]|60[6-8])/,name:"rupay",cscDigits:3,digits:16,supported:!0,code:82,type:"rupay"},{pattern:/^30[0-5]/,name:"diners",digits:14,cscDigits:3,supported:!1,code:64,type:"diners_club"},{name:"unknown",pattern:null,digits:16,cscDigits:3,supported:!1,code:85,type:"unknown"}],l=function(a){return a.replace(/[iIl]/g,"1").replace(/[Oo]/g,"0").replace(/[^\d]/gi,"")},m={isElo:function(a){a=parseInt(a,10);var b=[[401178,401179],[431274,431274],[438935,438935],[457393,457393],[457631,457632],[504175,504175],[506717,506718],[506720,506721],[506723,506733],[506739,506739],[506741,506748],[506753,506753],[506774,506775],[506777,506778],[509e3,509002],[509004,509012],[509014,509014],[509020,509030],[509035,509053],[509064,509064],[509066,509072],[509074,509083],[509085,509092],[509095,509103],[509105,509105],[509107,509807],[636297,636297],[636368,636368],[650485,650513],[650516,650516],[650518,650538],[650552,650598],[650720,650727],[650901,650922],[650928,650928],[650939,650939],[650946,650978],[651652,651704],[655e3,655019],[655021,655058]];for(var c=0;c<b.length;c++)if(a>=b[c][0]&&a<=b[c][1])return!0;return!1},getCardType:function(a){__p&&__p();var b=l(a).substr(0,6);if(m.isElo(b))return m.getCardTypeFromFieldType("elo");var c=b.substr(0,2);if(c==="65"){c=Number(b);if(c>=652150&&c<=653143)return m.getCardTypeFromFieldType("rupay");else return m.getCardTypeFromFieldType("discover")}for(var b=0;b<k.length;b++)if(k[b].pattern&&a.match(k[b].pattern))return k[b];return k[k.length-1]},getCardTypeFromFieldType:function(a){var b=k.find(function(b){return a===b.type})||k[k.length-1];return b},getCardTypeFromCode:function(a){for(var b=0;b<k.length;b++)if(a==k[b].code)return k[b];return null},isValidCCNumber:function(a){a=l(a);var b=m.getCardType(a);if(b.digits!==a.length)return!1;return!b.supported?!1:m.isValidLuhn(a)},isValidLuhn:function(a){__p&&__p();a=l(a);a=a.split("").reverse();var b="";for(var c=0;c<a.length;c++){var d=parseInt(a[c],10);c%2!==0&&(d*=2);b+=d}d=0;for(c=0;c<b.length;c++)d+=parseInt(b.charAt(c),10);return!!(d!==0&&d%10===0)},getMaxCardLength:function(a){return i},getMaxCSCLength:function(){return j},getImageForCard:function(a){a=a==null?"unknown":a.name;return this.getImageForCardType(a)},getImageForCardType:function(a){switch(a){case"visa":return h("95533");case"mc":return h("95531");case"amex":return h("95528");case"disc":return h("95529");case"jcb":return h("95530");case"rupay":return h("571080");case"elo":return h("783003");default:return h("95526")}},getImageForPayPal:function(){return h("95532")},getRawCreditCardString:function(a){__p&&__p();switch(a){case b("CreditCardTypeEnum").VISA:return"Visa";case b("CreditCardTypeEnum").MASTERCARD:return"Mastercard";case b("CreditCardTypeEnum").DISCOVER:return"Discover";case b("CreditCardTypeEnum").RUPAY:return"Rupay";case b("CreditCardTypeEnum").ELO:return"Elo";case b("CreditCardTypeEnum").AMERICANEXPRESS:return"Amex";case b("CreditCardTypeEnum").JCB:return"JCB";case b("CreditCardTypeEnum").DINERSCLUB:return"Diners";default:return"Credit Card"}},getCreditCardString:function(a){__p&&__p();switch(a){case b("CreditCardTypeEnum").VISA:return g._("Visa");case b("CreditCardTypeEnum").MASTERCARD:return g._("Mastercard");case b("CreditCardTypeEnum").DISCOVER:return g._("\u0e2a\u0e33\u0e23\u0e27\u0e08");case b("CreditCardTypeEnum").RUPAY:return g._("Rupay");case b("CreditCardTypeEnum").ELO:return g._("Elo");case b("CreditCardTypeEnum").AMERICANEXPRESS:return g._("Amex");case b("CreditCardTypeEnum").JCB:return g._("JCB");case b("CreditCardTypeEnum").DINERSCLUB:return g._("\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e40\u0e25\u0e47\u0e01\u0e46");default:return g._("\u0e1a\u0e31\u0e15\u0e23\u0e40\u0e04\u0e23\u0e14\u0e34\u0e15")}},getCardTypeFromServerSideCardType:function(a){__p&&__p();switch(a){case"VISA":return this.getCardTypeFromCode(86);case"MASTERCARD":return this.getCardTypeFromCode(77);case"AMERICANEXPRESS":return this.getCardTypeFromCode(65);case"DISCOVER":return this.getCardTypeFromCode(68);case"JCB":return this.getCardTypeFromCode(74);case"DINERSCLUB":return this.getCardTypeFromCode(64);case"RUPAY":return this.getCardTypeFromCode(82);case"ELO":return this.getCardTypeFromCode(69);default:return m.getCardTypeFromFieldType(a)}},getGraphQLPaymentMethodTypeFromLegacyType:function(a){__p&&__p();switch(a){case b("FBPaymentsNewPaymentOptionTypes").NEW_CREDIT_CARD:return b("FBPaymentsNewPaymentOptionTypes").NEW_CREDIT_CARD_FROM_GRAPHQL;case b("FBPaymentsNewPaymentOptionTypes").NEW_PAYPAL:return b("FBPaymentsNewPaymentOptionTypes").NEW_PAYPAL_FROM_GRAPHQL;case b("FBPaymentsNewPaymentOptionTypes").NEW_AFFIRM:return b("FBPaymentsNewPaymentOptionTypes").NEW_AFFIRM_FROM_GRAPHQL;case b("FBPaymentsPaymentMethodTypes").CREDIT_CARD:return b("FBPaymentsPaymentMethodTypes").CREDIT_CARD_FROM_GRAPHQL;case b("FBPaymentsPaymentMethodTypes").PAYPAL_BILLING_AGREEMENT:return b("FBPaymentsPaymentMethodTypes").PAYPAL_BILLING_AGREEMENT_FROM_GRAPHQL;case b("FBPaymentsPaymentMethodTypes").ALT_PAY:return b("FBPaymentsPaymentMethodTypes").ALT_PAY_FROM_GRAPHQL;case b("FBPaymentsPaymentMethodTypes").DUMMY_PAYMENT_METHOD:return b("FBPaymentsPaymentMethodTypes").DUMMY_PAYMENT_METHOD_FROM_GRAPHQL;case b("FBPaymentsPaymentMethodTypes").GIFTCARD_BALANCE:return b("FBPaymentsPaymentMethodTypes").GIFTCARD_BALANCE_FROM_GRAPHQL;default:b("FBLogger")("purchase_experience").warn("No corresponding graphQL payment method type: %s",a);return a}},getCreditCardGrouping:function(a){var b=[0,4,8,12,16];switch(m.getCardType(a).name){case"amex":b=[0,4,10,15];break;case"diners":b=[0,4,10,14];break;case"visa":case"mc":case"disc":default:break}return b}};e.exports=m}),null);
__d("PaymentTokenProxyUtils",["CurrentEnvironment","URI"],(function(a,b,c,d,e,f){__p&&__p();var g;a={getURI:function(a,c){__p&&__p();c===void 0&&(c=null);a=new(g||(g=b("URI")))("/ajax/payment/token_proxy.php").setDomain(window.location.hostname).setProtocol("https").addQueryData(a);var d=a.getDomain().split(".");d.indexOf("secure")<0&&(d.splice(1,0,"secure"),c==="www"||c==="secure"?d[0]!=="secure"&&d.shift():c!==null?d[0]==="secure"?d.splice(0,0,c):d[0]=c:d[0]=="www"&&d.shift(),a.setDomain(d.join(".")));if(b("CurrentEnvironment").messengerdotcom){c=a.getDomain();c=c.replace("messenger.com","facebook.com");a.setDomain(c)}return a}};e.exports=a}),null);
__d("react-dom",["react-dom-0.0.0"],(function(a,b,c,d,e,f){e.exports=b("react-dom-0.0.0")()}),null);
__d("XShareDialogSubmitController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/share/dialog/submit/",{post_id:{type:"Int"},share_type:{type:"Int"},url:{type:"String"},audience_type:{type:"String"},owner_id:{type:"Int"},app_id:{type:"Int"},message:{type:"String"},shared_ad_id:{type:"Int"},sharer_id:{type:"Int"},source:{type:"String"},composer_session_id:{type:"String"},audience_targets:{type:"IntVector"},album_id:{type:"Int"},ephemeral_ttl_mode:{type:"Int"},tagged_people:{type:"IntVector"},tagged_place:{type:"Int"},tagged_action:{type:"Int"},tagged_object:{type:"Int"},tagged_object_str:{type:"String"},tagged_action_icon:{type:"Int"},tagged_feed_topics:{type:"StringVector"},attribution:{type:"Int"},privacy:{type:"String"},messaging_tags:{type:"StringVector"},ft:{type:"HackType"},internalextra:{type:"StringToStringMap"},internal_preview_image_id:{type:"Int"},share_now:{type:"Bool",defaultValue:!1},is_forced_reshare_of_post:{type:"Bool",defaultValue:!1},is_throwback_post:{type:"Bool",defaultValue:!1},targeted_privacy_data:{type:"HackType"},unpublished_content_type:{type:"Enum",enumType:0},branded_content_repost_root:{type:"Int"},share_to_group_as_page:{type:"Bool",defaultValue:!1},shared_to_group_id:{type:"Int"},civic_product_source:{type:"String"},holiday_card_source:{type:"Enum",enumType:1},shared_from_post_id:{type:"Int"},logging_session_id:{type:"String"},section_name:{type:"String"},perform_messenger_logging:{type:"Bool",defaultValue:!1},video_start_time_ms:{type:"Int"},instant_game_entry_point_data:{type:"String"},is_app_content_token:{type:"Bool",defaultValue:!1}})}),null);
if (self.CavalryLogger) { CavalryLogger.start_js(["9rCOf"]); }

__d("WorkAboutOrgSection",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADMINISTRATORS:"administrators",OVERVIEW:"overview"})}),null);
__d("WorkAdminSection",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ACCESS_REQUESTS:"access_requests",ADMIN_ALERTS:"admin_alerts",ADMINISTRATORS:"administrators",APPROVALS:"approvals",APPS:"apps",AUTHENTICATION:"authentication",BULK_DEACTIVATE:"bulk_deactivate",BULK_TASKS:"bulk_tasks",BUSINESS_DETAILS:"business_details",COMMUNITIES_MANAGER:"communities_manager",CONTENT_INSIGHTS:"content_insights",CONTENT_MANAGER:"content_manager",DEVICES:"devices",DIRECT_SUPPORT:"direct_support",DOMAINS:"domains",DOWNGRADE_PACKAGE:"downgrade_package",DOWNLOAD_APPS:"download_apps",EMPLOYEES_BULK_ACTION:"employees_bulk_action",EMPLOYEES_INSIGHTS:"employees_insights",EMPLOYEES_MANAGER:"employees_manager",FRONTLINE:"frontline",FRONTLINE_MEMBERSHIP:"frontline_membership",GROUPS_INSIGHTS:"groups_insights",GROUPS_MANAGER:"groups_manager",IMPORT_GROUPS:"import_groups",INSIGHTS:"insights",INTEGRATIONS_DATA:"integrations_data",LAST_IDP_SYNC_INFO:"last_idp_sync_info",MARK_AS_IMPORTANT:"mark_as_important",OVERVIEW:"overview",PAYMENT_INFORMATION:"payment_information",POST_INSIGHTS:"post_insights",PROFILE_BADGES:"profile_badges",PROFILE_SETTINGS:"profile_settings",RESELLER:"reseller",RESELLER_PAYMENTS:"reseller_payments",REVIEW_PLANS:"review_plans",SAFETY_CHECK:"safety_check",SAFETY_CHECK_SETTINGS:"safety_check_settings",SECURITY:"security",SECURITY_ALERTS:"security_alerts",SECURITY_CENTER:"security_center",SETTINGS:"settings",SETUP_GROUPS:"setup_groups",SETUP_INTRODUCTION:"setup_introduction",SETUP_INVITES:"setup_invites",SETUP_USERS:"setup_users",SURVEYS:"surveys",UPGRADE_PACKAGE:"upgrade_package",USER_SETS:"user_sets",WHATS_NEW:"whats_new"})}),null);
__d("WorkResellerConsoleSection",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CUSTOMERS:"customers",CUSTOMER_DETAILS:"customer",PAYMENTS:"payments",BILLING:"billing"})}),null);
__d("WorkGalahadEntityKey",["invariant","WorkAboutOrgSection","WorkAdminSection","WorkResellerConsoleSection","enumUtils","gkx"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h={DIFFERENT:0,EQUAL:1,SUBKEY:2};function i(a,b){a=a.toLowerCase();b=b.toLowerCase();return a===b?h.EQUAL:a.indexOf(b)===0&&a[b.length]==="/"?h.SUBKEY:h.DIFFERENT}function j(a,b){var c=!1;for(var d=0;d<a.length;d++){var e=i(a[d],b);if(e===h.EQUAL)return h.EQUAL;else e===h.SUBKEY&&(c=!0)}return c?h.SUBKEY:h.DIFFERENT}var k=(a={},a.integrations_data="apps",a.profile_settings="settings",a.domains="settings",a.frontline_membership="frontline",a.user_sets="employees_manager",a.business_details="payment_information",a),l={forFeed:function(a){return m("feed",[a])},forGroupsExplorer:function(a){return m("groups_explorer",[a])},forDirectPosts:function(){return"direct_posts"},forPeopleDirectory:function(){return"org_search"},forTimelinePermalink:function(){return"permalink"},forDirectory:function(a){return m("directory",[a])},forActivityLog:function(){return"activity_log"},forTeamFeed:function(){return"team_feed"},forUser:function(a,b){return m("user",[a,b])},forPage:function(a,b){return m("page",[a,b])},forGroup:function(a,b){return m("groups",[a,b])},forGroupPost:function(a,b){return m("groups",[a,"permalink",b])},forEntity:function(a,b){switch(a){case"event":return l.forEvent(b);case"group":return l.forGroup(b);case"page":return l.forPage(b);case"user":return l.forUser(b);default:return l.forFeed()}},forNotif:function(){return"notifications"},forNotifID:function(a){return"notifications/"+a},forApprovals:function(a){return m("approvals",[a])},forApprovalsTab:function(a){return m("approvals",[a])},forAdminPanelSection:function(a,b){if(a!=null&&k[a]){var c=k[a];return m("admin_panel",[c,a,b])}return m("admin_panel",[a,b])},forAboutOrganization:function(a){return m("organization",[a])},forChat:function(a){return m("chat",[a])},forChatFilesTab:function(a){return a==null?m("chat",[]):m("chat",[a,"files"])},forFiles:function(a){return m("files",[a])},forSearch:function(a){return m("search",[a])},forEvent:function(a,c){return b("gkx")("1121001")?m("event",[a,c]):m("events",[a])},forEventTab:function(a){return b("gkx")("1121001")?m("event_dashboard",[a]):m("events",[a])},forSaved:function(a){return m("saved",[a])},forCommunityResources:function(){return"community_resources"},forKnowledge:function(a){return m("knowledge",[a])},forTeam:function(a){return m("teams",[a])},forTeamDirectory:function(){return"team_directory"},forTrending:function(){return"trending"},forTasks:function(){return"personalTasks"},forMigration:function(){return"migration"},forNext:function(){return"next"},forOrgNavigator:function(){return"org"},forNotes:function(a){return m("notes",[a])},forIntegrations:function(){return"integrations"},forPYSF:function(){return"follow_coworkers"},forForms:function(a){return m("forms",[a])},forFormsTab:function(a){return m("forms",[a])},forSettings:function(){return"settings"},forResellerConsole:function(a,b){return m("reseller_console",[a,b])},forHelpdesk:function(){return"helpdesk"},forHelpdeskTab:function(a){return m("helpdesk",[a])},forDeviceLogin:function(){return"device_login"},containsKey:function(a,b){return j(a,b)===h.EQUAL},containsSubkey:function(a,b){return j(a,b)===h.SUBKEY},containsKeyOrSubkey:function(a,b){return j(a,b)!==h.DIFFERENT},getProfileID:function(a){var b=null;for(var c=0;c<a.length;c++){var d=a[c].split("/");(d[0]==="page"||d[0]==="user")&&(b=d[1])}return b},getPageID:function(a){var b=null;for(var c=0;c<a.length;c++){var d=a[c].split("/");d[0]==="page"&&(b=d[1])}return b},getUserID:function(a){var b=null;for(var c=0;c<a.length;c++){var d=a[c].split("/");d[0]==="user"&&(b=d[1])}return b},getGroupID:function(a){var b=null;for(var c=0;c<a.length;c++){var d=a[c].split("/");d[0]==="groups"&&(b=d[1])}return b},getThreadID:function(a){var b=null;for(var c=0;c<a.length;c++){var d=a[c].split("/");d[0]==="chat"&&d.length>1&&(b=d[1])}return b},getKnowledgeID:function(a){var b=null;for(var c=0;c<a.length;c++){var d=a[c].split("/");d[0]==="knowledge"&&d.length>1&&(b=d[1])}return b},getEventID:function(a){var b=null;for(var c=0;c<a.length;c++){var d=a[c].split("/");d[0]==="event"&&(b=d[1])}return b},getGroupView:function(a){var b=null;for(var c=0;c<a.length;c++){var d=a[c].split("/");d[0]==="groups"&&(b=d[2])}return b},getProfileView:function(a){var b=null;for(var c=0;c<a.length;c++){var d=a[c].split("/");(d[0]==="user"||d[0]==="page")&&(b=d[2])}return b},getAdminPanelSection:function(a){for(var c=0;c<a.length;c++){var d=a[c].split("/");if(d[0]==="admin_panel")return b("enumUtils").assert(d[1],b("WorkAdminSection"))}return null},getResellerConsoleSection:function(a){for(var c=0;c<a.length;c++){var d=a[c].split("/");if(d[0]==="reseller_console"&&d.length>1)return b("enumUtils").assert(d[1],b("WorkResellerConsoleSection"))}return null},getResellerCustomerId:function(a){for(var b=0;b<a.length;b++){var c=a[b].split("/");if(c[0]==="reseller_console"&&c.length>2)return c[2]}return null},getPermalinkID:function(a){var b=null;for(var c=0;c<a.length;c++){var d=a[c].split("/");d.length>=4&&d[0]==="groups"&&d[2]==="permalink"&&(b=d[3])}return b},getTeamID:function(a){for(var b=0;b<a.length;b++){var c=a[b].split("/");if(c[0]==="teams"&&c.length>1)return c[1]}return null},getSearchEdgeType:function(a){for(var b=0;b<a.length;b++){var c=a[b].split("/");if(c[0]==="search"&&c.length>1)return c[1]}return null},getAboutOrgSection:function(a){for(var c=0;c<a.length;c++){var d=a[c].split("/");if(d[0]==="organization"&&d.length>1)return b("enumUtils").assert(d[1],b("WorkAboutOrgSection"))}return null},serialize:function(a){return a},fromCometEntityKey:function(a){var b=a.entity_type;if(b==null)return null;a=[a.entity_id,a.section,a.secondary_entity_id].filter(Boolean);return m(b,a)},fromString_DO_NOT_USE:function(a){return a}};function m(a,b){__p&&__p();a=a;var c=!1;for(var b=b,d=Array.isArray(b),e=0,b=d?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=b.length)break;f=b[e++]}else{e=b.next();if(e.done)break;f=e.value}f=f;f!==void 0?(c&&g(0,832),a+="/"+f):c=!0}return a}e.exports=l}),null);
__d("GroupView",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADMINS:"admins",ADMINIFCAN:"_admin_if_can_",ADMIN_ACTIVITIES:"admin_activities",ANNOUNCEMENTS:"announcements",BESTOF:"bestof",AUTO_APPROVE_REQUESTS:"auto_approve_requests",BADGE_MEMBER_LIST:"badge_member_list",BLOCKED:"blocked",BROWSE_CATEGORIES:"browsecategories",WORK_CHAT:"work_chat",CREATEDOC:"createdoc",DRAFT_POSTS:"draft_posts",FIND_PLAYERS:"find_players",FRIENDS:"friends",FOLLOWEES:"followees",INSIGHTS:"insights",MULTI_COMPANY_COMPANIES:"companies",BROWSE_MEMBER_BADGES:"browse_member_badges",MANAGE_MEMBER_BADGES:"manage_member_badges",MEMBER_BADGE:"member_badge",SETUP_RULES:"setup_rules",MEMBERSHIP_QUESTIONS:"membership_questions",MEMBERS:"members",MEMBERS_WITH_THINGS_IN_COMMON:"members_with_things_in_common",MEMBERSHIP_CRITERIA_ANSWER:"membership_criteria_answer",DOC:"doc",EDIT:"edit",EVENTS:"events",FILES:"files",INTEGRATIONS:"integrations",FOR_SALE_SEARCH:"for_sale_search",GAMES:"games",GROUP:"group",JOIN:"_join_",SUBGROUPS:"groups",MY_GROUPS:"my_groups",CHATS:"chats",INFO:"info",LEARNING_CONTENT:"learning_content",LEAVE:"leave",LINKED_GROUP_REQUESTS:"linked_group_requests",LIVING_ROOM:"living_room",LOCAL_MEMBERS:"local_members",NOTIFICATIONS:"notifications",PENDING:"pending",PERMALINK:"permalink",PHOTOS:"photos",PINNED:"pinned",PROMOTION_HOME:"promotion_home",RECENTLY_JOINED:"recently_joined",RECOMMENDED:"suggestions",RECOMMENDATIONS:"recommendations",REPORTED:"reported",REPORTED_FACEBOOK:"reported_facebook",REQUESTS:"requests",REQUIRE_POST_APPROVAL_MEMBERS:"require_post_approval_members",SAVED:"saved",SEARCH:"search",SCHEDULED:"scheduled",SPORTS_TEAM_SCHEDULE:"sports_team_schedule",SUPPORT:"support",TASKS:"tasks",TOPICS:"topics",TRUSTED_MEMBERS:"trusted_members",POST_TAGS:"post_tags",POST_TAGS_LIST:"post_tags_list",INVITED:"invited",YOUR_POSTS:"yourposts",FORSALE_POSTS:"forsaleposts",VIDEOS:"videos",WALL:"",FEED:"feed",COMMUNITY_TRENDING:"community_trending",ABOUT:"about",RULES:"rules",PAGE_MEMBERS:"page_members",OFFERS:"offers",MENTORSHIP_APPLICATION:"mentorship_application",ACTIVE_MEMBERS:"active_members",UNAVAILABLE_ACCOUNTS:"unavailable_accounts",MOST_ACTIVE:"most_active",GROUPVERSARY:"groupversary",GROUPVERSARIES:"groupversaries",MEETUPS:"meetups",APP_INSTALLS:"app_installs",FLAGGED:"flagged",ALERTED:"alerted",SAFETY_HUB:"safety_hub",BUY_SELL_GROUP_DISCUSSIONS:"buy_sell_group_discussions",JOBS:"jobs",GROUP_QUALITY:"group_quality",WORK_RECENTLY_DEACTIVATED:"work_recently_deactivated",BUY_SELL_GROUP_INVENTORY:"buy_sell_group_inventory",WATCH_PARTIES:"watch_parties",COLLECTIONS:"collections",FUNDRAISERS:"fundraisers",FILES_SEARCH:"files_search",SUPPORTERS:"supporters",ALL_SUPPORTERS:"all_supporters",LONGEST_SUPPORTERS:"longest_supporters",NEW_SUPPORTERS:"new_supporters",CANDIDATES:"candidates",WORK_LEARNING:"work_learning",WORK_SHIFT_SWAPPING:"work_shift_swapping",SEARCH_NAV:"search_nav",VR_EVENTS:"vr_events"})}),null);
__d("TimelineAppSectionType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({APP:0,ABOUT:1,FRIENDS:2,PHOTOS:3,LIKES:4,MAP:5,SUBSCRIPTIONS:6,SUBSCRIBERS:7,PAGE_LIKES:8,NOTES:9,EVENTS:10,BOOKS:11,MUSIC:12,TV_SHOWS:13,MOVIES:14,FITNESS:15,CONTACT:16,GROUPS:17,SPORTS:18,GAMES:19,SAVED_FOR_LATER:20,REVIEWS:21,AT_WORK:22,VIDEOS:23,SAVE_LISTS:24,TASKS:25,FUN_FACT_ANSWERS:26,SPACES:27,STORIES_ARCHIVE:28,WORK_CHAT:29,TIMELINE:30,WORK_FILES:31})}),null);
__d("WorkGalahadLayoutUtils",["GroupView","TimelineAppSectionType","WorkGalahadEntityKey","gkx","keyMirror"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("keyMirror")(b("TimelineAppSectionType")),h=b("keyMirror")({FEED:null,RESELLER_CONSOLE:null,EVENT:null,EVENTS:null,EVENTS_DASHBOARD:null,SAVED:null,GROUP:null,PROFILE:null,GROUP_CHAT:null,ADMIN_PANEL:null,COMMUNITY_RESOURCES:null,SEARCH:null,GROUPS_BROWSE:null,TEAMS:null,TEAM_DIRECTORY:null,PEOPLE_DIRECTORY:null,DIRECT_POSTS:null,MIGRATION:null,NEXT:null,INTEGRATIONS:null,APPROVALS:null,ABOUT_ORGANIZATION:null,NOTES:null,FORMS:null,ACTIVITY_LOG:null,ORG_CHART:null,SETTINGS:null,FOLLOW_COWORKERS:null,TRENDING:null,TASKS:null,KNOWLEDGE:null,DIRECTORY:null,HELPDESK:null,DEVICE_LOGIN:null}),i=b("keyMirror")({FEED:null,PROFILE:null,GROUP:null,CHAT:null,NEXT:null,KNOWLEDGE:null,EVENT:null,HELPDESK:null,WHATS_NEW:null,DEVICE_LOGIN:null});function j(a){var c;c=["EVENTS","PHOTOS","VIDEOS","RECOMMENDATIONS","ADMIN","INSIGHTS","MENTORSHIP","MENTORSHIP_APPLICATION",(c=b("GroupView")).PENDING,c.POST_TAGS_LIST,c.TOPICS,c.SCHEDULED,c.DRAFT_POSTS,c.REQUESTS,c.REPORTED];b("gkx")("809398")||c.push("FILES");return!c.includes(a)}function k(a){var b=[g.WORK_CHAT,g.ABOUT,g.FRIENDS,g.GROUPS,g.PHOTOS,g.MAP,g.NOTES,g.SUBSCRIBERS,g.SUBSCRIPTIONS,g.EVENTS];return!b.includes(a)}var l=new Map([[(a=b("WorkGalahadEntityKey")).forFeed(),function(){return h.FEED}],[a.forResellerConsole(),function(){return h.RESELLER_CONSOLE}],[a.forGroup(),function(){return h.GROUP}],[a.forUser(),function(a){return h.PROFILE}],[a.forPage(),function(a){return h.PROFILE}],[a.forChat(),function(a){return b("WorkGalahadEntityKey").getThreadID(a)!=null?h.GROUP_CHAT:null}],[a.forSearch(),function(){return h.SEARCH}],[a.forPage(),function(a){return h.PROFILE}],[a.forSaved(),function(){return h.SAVED}],[a.forEvent(),function(){return h.EVENTS}],[a.forEventTab(),function(){return h.EVENTS_DASHBOARD}],[a.forAdminPanelSection(),function(){return h.ADMIN_PANEL}],[a.forGroupsExplorer(),function(){return h.GROUPS_BROWSE}],[a.forTeam(),function(){return h.TEAMS}],[a.forTeamDirectory(),function(){return h.TEAM_DIRECTORY}],[a.forDirectory(),function(){return h.DIRECTORY}],[a.forPeopleDirectory(),function(){return h.PEOPLE_DIRECTORY}],[a.forDirectPosts(),function(){return h.DIRECT_POSTS}],[a.forCommunityResources(),function(){return h.COMMUNITY_RESOURCES}],[a.forKnowledge(),function(){return h.KNOWLEDGE}],[a.forMigration(),function(){return h.MIGRATION}],[a.forNext(),function(){return h.NEXT}],[a.forIntegrations(),function(){return h.INTEGRATIONS}],[a.forApprovals(),function(){return h.APPROVALS}],[a.forForms(),function(){return h.FORMS}],[a.forAboutOrganization(),function(){return h.ABOUT_ORGANIZATION}],[a.forNotes(),function(){return h.NOTES}],[a.forActivityLog(),function(){return h.ACTIVITY_LOG}],[a.forOrgNavigator(),function(){return h.ORG_CHART}],[a.forSettings(),function(){return h.SETTINGS}],[a.forPYSF(),function(){return h.FOLLOW_COWORKERS}],[a.forTrending(),function(){return h.TRENDING}],[a.forTasks(),function(){return h.TASKS}],[a.forHelpdesk(),function(){return h.HELPDESK}],[a.forDeviceLogin(),function(){return h.DEVICE_LOGIN}]]);b("gkx")("1121001")&&l.set(b("WorkGalahadEntityKey").forEvent(),function(){return h.EVENT});e.exports={HeaderType:h,SidebarType:i,getHeaderType:function(a){__p&&__p();for(var c=l,d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=c.length)break;f=c[e++]}else{e=c.next();if(e.done)break;f=e.value}f=f;var g=f[0];f=f[1];if(b("WorkGalahadEntityKey").containsKeyOrSubkey(a,g)){g=f(a);if(g)return g}}return null},getSidebarType:function(a){__p&&__p();var c=this.getHeaderType(a);switch(c){case h.FEED:return i.FEED;case h.KNOWLEDGE:return i.KNOWLEDGE;case h.PROFILE:c=b("WorkGalahadEntityKey").getUserID(a);var d=b("WorkGalahadEntityKey").getProfileView(a),e=b("WorkGalahadEntityKey").getThreadID(a);if(c!=null&&d!=null&&k(d))return i.PROFILE;return g.WORK_CHAT===d&&e!=null?i.CHAT:null;case h.GROUP_CHAT:return i.CHAT;case h.GROUP:c=b("WorkGalahadEntityKey").getGroupView(a);if(c==null||j(c))return i.GROUP;else return null;case h.NEXT:return i.NEXT;case h.EVENT:return b("gkx")("1121001")?i.EVENT:null;case h.HELPDESK:return i.HELPDESK;case h.ADMIN_PANEL:return b("WorkGalahadEntityKey").getAdminPanelSection(a)==="whats_new"?i.WHATS_NEW:null;case h.DEVICE_LOGIN:return i.DEVICE_LOGIN;default:if(b("WorkGalahadEntityKey").containsKeyOrSubkey(a,b("WorkGalahadEntityKey").forTimelinePermalink()))return i.FEED;return b("WorkGalahadEntityKey").containsKeyOrSubkey(a,b("WorkGalahadEntityKey").forTeamFeed())?i.FEED:null}}}}),null);
__d("FluxHooks",["FluxContainerSubscriptions","React","shallowEqual","useSubscriptionValue"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=(d=b("React")).useCallback,h=d.useEffect,i=d.useRef,j=d.useState;function a(a,c){var d=g(function(d){var e=c(a);return d!=null&&b("shallowEqual")(d,e)?d:e},[a,c]),e=g(function(b){var c=a.addListener(b);return function(){return c.remove()}},[a]);return b("useSubscriptionValue")({getCurrentValue:d,subscribe:e})}function c(a,c,d){__p&&__p();var e=g(function(c){var d=a(c);return c!=null&&b("shallowEqual")(c,d)?c:d},d),f=g(function(a){if(c.length===0)return function(){};var d=new(b("FluxContainerSubscriptions"))("useCalculateState");d.setStores(c);d.addListener(a);return function(){return d.reset()}},c);d=j(function(){return e()});var k=d[0],l=d[1];d=function(){l(e)};var m=i(d);m.current=d;var n=j(function(){return e}),o=n[0];n=n[1];o!==e&&(n(function(){return e}),d());h(function(){var a=!1,b=function(){a||m.current()},c=f(b);m.current();return function(){a=!0,c()}},[m,f]);return[k,l]}e.exports={useFluxStore:a,useCalculateState:c}}),null);
__d("SearchSuggestionsHighlighter",["React","escapeRegex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,c,d,e,f){__p&&__p();a=b("escapeRegex")(f?a:a.trim());e=e?"gi":"g";var g=" "+c,h=[];f=f?new RegExp("( "+a.split(/\s+/).join("| ")+")",e):new RegExp("("+a.split(/\s+/).join("|")+")",e);a=0;e=null;while(!0){e=f.exec(g);if(e==null)break;var i=g.substring(a,e.index);a===0&&(i=i.trimLeft());d?h.push(i):h.push(b("React").jsx("strong",{children:i},c+"-"+e.index));i=e[0];e.index===0&&(i=i.trimLeft());a=e.index+e[0].length;d?h.push(b("React").jsx("strong",{children:i},c+"-"+a)):h.push(i)}d?h.push(g.substring(a,g.length)):h.push(b("React").jsx("strong",{children:g.substring(a,g.length)},c+"-"+g.length));return h}function a(a,b,c){c===void 0&&(c=!0);return g(a,b,!0,!1,c)}function c(a,b,c){c===void 0&&(c=!0);return g(a,b,!1,!1,c)}function d(a,b,c){c===void 0&&(c=!0);return g(a,b,!0,!0,c)}function f(a,b,c){c===void 0&&(c=!0);return g(a,b,!1,!0,c)}e.exports={highlightMatch:a,highlightNonMatch:c,highlightMatchCaseInsensitive:d,highlightNonMatchCaseInsensitive:f}}),null);
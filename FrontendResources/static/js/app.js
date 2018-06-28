webpackJsonp([1],{"/TtO":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=a("woOf"),s=(i=n)&&i.__esModule?i:{default:i},r=a("NYxO"),u=a("ZT51"),l=a("WSTi");e.default={props:["mapping"],methods:(0,s.default)({},(0,r.mapActions)({switchTfsMapping:u.NAMESPACE.actions.SWITCH_MAPPING,removeMapping:u.NAMESPACE.actions.REMOVE_MAPPING}),(0,r.mapGetters)({contextPath:l.NAMESPACE.getters.CONTEXT_PATH}),{switchTitleText:function(){return"Switch to "+this.mapping.invertedTitle},getImagePath:function(t){return this.contextPath()+"/Content/Images/"+t}})}},"/WqQ":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=u(a("gRE1")),n=u(a("//Fk")),s=u(a("Zrlr")),r=u(a("wxAW"));function u(t){return t&&t.__esModule?t:{default:t}}var l=function(){function t(e){(0,s.default)(this,t),this.http=e}return(0,r.default)(t,[{key:"getData",value:function(){var t=this;return new n.default(function(e,a){t.http.get(t.backendUrl+"/mappings/links/availableValues").then(function(i){t.http.get(t.backendUrl+"/mappings/links").then(function(a){e(t.shapeDataFromWebService(i.data,a.data.LinkTypesMappings))},function(t){a(t)})},function(t){a(t)})})}},{key:"shapeDataFromWebService",value:function(t,e){function a(t,e,a,i,n){return{kind:t,title:e,invertedTitle:e.split("/").reverse().join(" / "),id:i+"_"+n,key:i,inverted:n,hasInvertedVersion:a,visible:!0}}var i={};return Array.prototype.forEach.call(t.JiraValues,function(t){var e=a("JIRA",t.LabelA+" / "+t.LabelB,t.LabelA!==t.LabelB,t.JiraLinkType,!1);i[e.id]=e}),Array.prototype.forEach.call(t.TfsValues,function(t){var e=a("TFS",t.LabelA+" / "+t.LabelB,t.LabelA!==t.LabelB,t.TfsLinkType,!1);if(i[e.id]=e,t.LabelA!==t.LabelB){var n=a("TFS",t.LabelB+" / "+t.LabelA,t.LabelA!==t.LabelB,t.TfsLinkType,!0);i[n.id]=n}}),this.hideListItemsAndEnrichMappings(e,i)}},{key:"hideListItemsAndEnrichMappings",value:function(t,e){return t.forEach(function(t){(0,i.default)(e).forEach(function(e){e.key===t.JiraLinkType?t.jiraValue=e:e.key===t.TfsLinkType&&t.IsLinkDirectionInverted===e.inverted&&(t.tfsValue=e)}),t.duringProcessing=!1,void 0===t.jiraValue?t.jiraTitle=t.JiraLinkType:(t.jiraId=t.jiraValue.id,t.jiraTitle=t.jiraValue.title),void 0===t.tfsValue?t.tfsTitle=t.TfsLinkType:(t.tfsTitle=t.tfsValue.title,t.tfsId=t.tfsValue.id,t.invertedTitle=t.tfsValue.invertedTitle)}),t=t.sort(function(t,e){return t.jiraTitle.toString()>e.jiraTitle.toString()?-1:1}),(0,i.default)(e).forEach(function(e){var a=Array.prototype.filter.call(t,function(t){return t.jiraId===e.id||t.tfsId===e.id||void 0!==t.tfsValue&&t.tfsValue.key==e.key});e.visible=0===a.length&&0==e.inverted}),{available:e,mappings:t}}},{key:"switchTfsMapping",value:function(t,e,a){var s=this;return new n.default(function(n,r){var u=Array.prototype.filter.call((0,i.default)(e),function(e){return"TFS"===e.kind&&e.key===t.tfsValue.key&&e.id!==t.tfsValue.id});0===u.length?n(null):s.removeMapping(e,a,t,!1).then(function(e){s.addMapping(t.jiraValue,u[0],e.available,e.mappings).then(function(t){n({mappings:t,available:e.available})},function(t){return r(t)})},function(t){r(t)})})}},{key:"addMapping",value:function(t,e,a,i){var s=this;return new n.default(function(n,r){s.http.post(s.backendUrl+"/mappings/links/values",{JiraLinkType:t.key,TfsLinkType:e.key,IsLinkDirectionInverted:e.inverted}).then(function(t){i.push(t.data);var e=s.hideListItemsAndEnrichMappings(i,a);n(e.mappings)},function(t){r(t)})})}},{key:"removeMapping",value:function(t,e,a,i){var s=this;return new n.default(function(n,r){s.http.delete(s.backendUrl+"/mappings/links/values/"+a.Id).then(function(r){e=Array.prototype.filter.call(e,function(t){return t.Id!==a.Id}),n(i?s.hideListItemsAndEnrichMappings(e,t):{mappings:e,available:t})},function(t){r(t)})})}}]),t}();e.default=l},"1B2d":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("/TtO"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);var r=a("ehG9");var u=function(t){a("hS7Q")},l=a("VU/8")(n.a,r.a,!1,u,"data-v-dbdcc5b2",null);e.default=l.exports},"2VN2":function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wizard-side-component",class:{"should-be-fixed":t.shouldBeFixed,collapsed:t.isCollapsed}},[t.isCollapsed?a("div",{staticClass:"expand-button clickable",attrs:{title:"Profile Health Component"},on:{click:function(e){e.stopPropagation(),t.expand()}}},[a("icon",{attrs:{name:"angle-double-left"}})],1):t._e(),t._v(" "),t.isCollapsed?t._e():a("div",{staticClass:"wizard-side-component-title"},[a("span",{staticClass:"collapse-button clickable",attrs:{title:"collapse"},on:{click:function(e){e.stopPropagation(),t.collapse()}}},[a("icon",{attrs:{name:"angle-double-right"}})],1),t._v("\n        Profile Health\n    ")]),t._v(" "),a("profile-health-component",{directives:[{name:"show",rawName:"v-show",value:!t.isCollapsed,expression:"!isCollapsed"}],ref:"profileHealthComponent",attrs:{"profile-guid":t.isGuidSet?t.profileGuid:""}})],1)},staticRenderFns:[]};e.a=i},"4Aog":function(t,e){},"4E9S":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=a("i8ii"),s=(i=n)&&i.__esModule?i:{default:i};e.default=s.default.generateNamespace({state:["MAPPINGS","AVAILABLE_VALUES","LOADER_VISIBLE"],actions:["SET_UP_SERVICE","GET_AVAILABLE_VALUES","MAP","REMOVE_MAPPING","SWITCH_MAPPING","HANDLE_ERROR"],mutations:["SHOW_LOADER","SET_AVAILABLE_VALUES","SET_MAPPINGS_VALUES"],getters:["AVAILABLE_VALUES","TFS_VALUES","JIRA_VALUES","MAPPINGS","IS_LOADER_VISIBLE"],kinds:{JIRA:"JIRA",TFS:"TFS"}})},"59A6":function(t,e){},"7en9":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("jhM5"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);var r=a("BDgi");var u=function(t){a("OXQ3")},l=a("VU/8")(n.a,r.a,!1,u,"data-v-5153893e",null);e.default=l.exports},"9x47":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("dLeQ"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);var r=a("M1DH");var u=function(t){a("iezQ")},l=a("VU/8")(n.a,r.a,!1,u,"data-v-5ff9e719",null);e.default=l.exports},B1cG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("aW25"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);var r=a("zpxE"),u=a("VU/8")(n.a,r.a,!1,null,null,null);e.default=u.exports},BDgi:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return null!==t.currentItem?a("div",{staticClass:"container"},[a("div",{staticClass:"dialog"},[a("div",{staticClass:"title"},[t._v(t._s(t.currentItem.title))]),t._v(" "),a("div",{staticClass:"body"},[t._v(t._s(t.currentItem.message))]),t._v(" "),a("div",{staticClass:"buttons"},[a("input",{staticClass:"popupbutton",attrs:{type:"button",name:"closebutton",value:"Close"},on:{click:function(e){t.close()}}})]),t._v(" "),a("div",{staticClass:"clear"})])]):t._e()},staticRenderFns:[]};e.a=i},BK4t:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=u(a("bOdI")),s=u(a("gRE1")),r=u(a("4E9S"));function u(t){return t&&t.__esModule?t:{default:t}}e.default=(i={},(0,n.default)(i,r.default.getters.TFS_VALUES,function(t){return void 0===t[r.default.state.AVAILABLE_VALUES]?[]:(0,s.default)(t[r.default.state.AVAILABLE_VALUES]).filter(function(t){return t.visible&&t.kind===r.default.kinds.TFS})}),(0,n.default)(i,r.default.getters.JIRA_VALUES,function(t){return void 0===t[r.default.state.AVAILABLE_VALUES]?[]:(0,s.default)(t[r.default.state.AVAILABLE_VALUES]).filter(function(t){return t.visible&&t.kind===r.default.kinds.JIRA})}),(0,n.default)(i,r.default.getters.AVAILABLE_VALUES,function(t,e){return{TfsValues:e[r.default.getters.TFS_VALUES],JiraValues:e[r.default.getters.JIRA_VALUES]}}),(0,n.default)(i,r.default.getters.MAPPINGS,function(t,e){return t[r.default.state.MAPPINGS]}),(0,n.default)(i,r.default.getters.IS_LOADER_VISIBLE,function(t){return t[r.default.state.LOADER_VISIBLE]}),i)},CG6D:function(t,e,a){"use strict";if(Object.defineProperty(e,"__esModule",{value:!0}),void 0===window.Spartez||void 0===window.Spartez.Shared)throw"window.Spartez or window.Spartez.Shared is not set up";e.default=window.Spartez.Shared},CM87:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("yIXc"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);var r=a("2VN2");var u=function(t){a("QPuV")},l=a("VU/8")(n.a,r.a,!1,u,"data-v-efcb1428",null);e.default=l.exports},D4uH:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("dXrS"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);var r=a("ijvF");var u=function(t){a("4Aog")},l=a("VU/8")(n.a,r.a,!1,u,null,null);e.default=l.exports},HzNy:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Links Mapping")]),t._v(" "),a("div",{staticClass:"tfs4jira-mapping-container"},[a("link-mapping-selects"),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:void 0!=t.mappings&&0===t.mappings.length,expression:"(mappings != undefined && mappings.length === 0)"}],staticClass:"tfs4jira-mapping-no-mapped-values-container"},[a("span",{staticClass:"tfs4jira-mapping-no-mapped-values"},[t._v("\n                Please select JIRA and TFS link types that you want to map.\n            ")])]),t._v(" "),a("table",{staticClass:"tfs4jira-mapping-table"},[a("tbody",t._l(t.mappings,function(t){return a("link-mapping-row",{key:t.Id,attrs:{mapping:t}})}))])],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoaderVisible,expression:"isLoaderVisible"}],staticClass:"spinner"})])},staticRenderFns:[]};e.a=i},IcnI:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=o(a("bOdI")),s=o(a("7+uW")),r=o(a("NYxO")),u=a("ZT51"),l=a("WSTi");function o(t){return t&&t.__esModule?t:{default:t}}s.default.use(r.default),e.default=new r.default.Store({modules:(i={},(0,n.default)(i,u.PREFIX,u.STORE),(0,n.default)(i,l.PREFIX,l.STORE),i)})},LZg3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=r(a("bOdI")),s=r(a("4E9S"));function r(t){return t&&t.__esModule?t:{default:t}}e.default=(i={},(0,n.default)(i,s.default.state.MAPPINGS,[]),(0,n.default)(i,s.default.state.AVAILABLE_VALUES,[]),(0,n.default)(i,s.default.state.LOADER_VISIBLE,!1),i)},M1DH:function(t,e,a){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("icon",{staticClass:"health-status-indicator",class:[this.className],attrs:{name:this.iconName,title:this.displayName}})},staticRenderFns:[]};e.a=i},NHnr:function(t,e,a){"use strict";var i=d(a("7+uW")),n=d(a("uewC")),s=d(a("urDH")),r=d(a("CM87")),u=d(a("sW/x")),l=d(a("9x47")),o=d(a("7en9")),c=d(a("IcnI"));function d(t){return t&&t.__esModule?t:{default:t}}i.default.config.productionTip=!1,Array.prototype.forEach.call(document.querySelectorAll(".vue-container"),function(t){new i.default({el:"#"+t.getAttribute("id"),store:c.default,components:{LinkMapping:n.default,WizardSide:r.default,NotificationHandler:u.default,HealthStatusIndicator:l.default,ProfileHealth:s.default,MessageBox:o.default}})})},OXQ3:function(t,e){},QPuV:function(t,e){},Rw5E:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=r(a("bOdI")),s=r(a("4E9S"));function r(t){return t&&t.__esModule?t:{default:t}}e.default=(i={},(0,n.default)(i,s.default.mutations.SET_MAPPINGS_VALUES,function(t,e){void 0!==e.mappings&&(t[s.default.state.MAPPINGS]=e.mappings),void 0!==e.available&&(t[s.default.state.AVAILABLE_VALUES]=e.available)}),(0,n.default)(i,s.default.mutations.SET_AVAILABLE_VALUES,function(t,e){t[s.default.state.AVAILABLE_VALUES]=e}),(0,n.default)(i,s.default.mutations.SHOW_LOADER,function(t,e){t[s.default.state.LOADER_VISIBLE]=e}),i)},"Sgb+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=r(a("bOdI")),s=r(a("Sifv"));function r(t){return t&&t.__esModule?t:{default:t}}e.default=(i={},(0,n.default)(i,s.default.mutations.ADD_NOTIFICATION,function(t,e){"AppConfig"===e.receiver?u(t,e):t[s.default.state.NOTIFICATIONS]=e}),(0,n.default)(i,s.default.mutations.ASSIGN_LISTENER,function(t,e){t[s.default.state.NOTIFICATIONS_LISTENERS][e.on]=e.handler}),i);var u=function(t,e){void 0!==e.payload.contextPath&&(t[s.default.state.CONFIG].contextPath=e.payload.contextPath)}},Sifv:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=a("i8ii"),s=(i=n)&&i.__esModule?i:{default:i};e.default=s.default.generateNamespace({state:["NOTIFICATIONS","CONFIG","NOTIFICATIONS_LISTENERS"],actions:["SEND_NOTIFICATION","ADD_LISTENER"],mutations:["ADD_NOTIFICATION","ASSIGN_LISTENER"],getters:["GET_NOTIFICATIONS","CONTEXT_PATH"]})},UAU5:function(t,e,a){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};e.a=i},WSTi:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.NAMESPACE=e.PREFIX=e.STORE=void 0;var i=o(a("i8ii")),n=o(a("Sifv")),s=o(a("cZVi")),r=o(a("Sgb+")),u=o(a("mxG+")),l=o(a("xnTX"));function o(t){return t&&t.__esModule?t:{default:t}}var c={namespaced:!0,state:u.default,getters:l.default,actions:s.default,mutations:r.default},d=i.default.publishNamespace("app",n.default);e.STORE=c,e.PREFIX="app",e.NAMESPACE=d},ZT51:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.NAMESPACE=e.PREFIX=e.STORE=void 0;var i=o(a("i8ii")),n=o(a("4E9S")),s=o(a("tCI6")),r=o(a("LZg3")),u=o(a("BK4t")),l=o(a("Rw5E"));function o(t){return t&&t.__esModule?t:{default:t}}var c={namespaced:!0,state:r.default,getters:u.default,actions:s.default,mutations:l.default},d=i.default.publishNamespace("links",n.default);e.STORE=c,e.PREFIX="links",e.NAMESPACE=d},aW25:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=a("woOf"),s=(i=n)&&i.__esModule?i:{default:i},r=a("NYxO"),u=a("ZT51");e.default={data:function(){return{selectedTfsValue:null,selectedJiraValue:null}},computed:(0,r.mapGetters)({tfsValues:u.NAMESPACE.getters.TFS_VALUES,jiraValues:u.NAMESPACE.getters.JIRA_VALUES}),methods:(0,s.default)({},(0,r.mapActions)({mapLinkTypes:u.NAMESPACE.actions.MAP}),{addMapping:function(){null!==this.selectedJiraValue&&null!==this.selectedTfsValue&&(this.mapLinkTypes({jiraValue:this.selectedJiraValue,tfsValue:this.selectedTfsValue}),this.selectedTfsValue=null,this.selectedJiraValue=null)},disableMapButton:function(){return null===this.selectedJiraValue||null===this.selectedTfsValue}})}},cZVi:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=r(a("bOdI")),s=r(a("Sifv"));function r(t){return t&&t.__esModule?t:{default:t}}e.default=(i={},(0,n.default)(i,s.default.actions.SEND_NOTIFICATION,function(t,e){var a=t.commit,i=t.state[s.default.state.NOTIFICATIONS_LISTENERS];void 0!==i[e.receiver]&&i[e.receiver](e.payload),e.dispatched=!0,a(s.default.mutations.ADD_NOTIFICATION,e)}),(0,n.default)(i,s.default.actions.ADD_LISTENER,function(t,e){var a=t.commit;t.state;a(s.default.mutations.ASSIGN_LISTENER,e)}),i)},dAqW:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile-health-component"},[a("ul",{staticClass:"health-check-result-groups"},t._l(t.healthCheckResultGroups,function(e){return a("li",[a("div",[a("health-status-indicator",{attrs:{"status-value":e.Status}}),t._v(" "),a("span",{staticClass:"health-check-result-group-name",class:{clickable:t.areHealthCheckResultsAvailableInGroup(e)},on:{click:function(a){t.toggleCollapse(e)}}},[t._v("\n                    "+t._s(e.Name)+"\n                    "),t.areHealthCheckResultsAvailableInGroup(e)?[e.isCollapsed?a("icon",{staticClass:"collapse-group-icon",attrs:{name:"caret-right"}}):a("icon",{staticClass:"collapse-group-icon",attrs:{name:"caret-down"}})]:t._e()],2),t._v(" "),e.Message?a("div",{staticClass:"health-check-result-group-description"},[t._v(t._s(e.Message))]):t._e()],1),t._v(" "),t.areHealthCheckResultsAvailableInGroup(e)?a("ul",{directives:[{name:"show",rawName:"v-show",value:!e.isCollapsed,expression:"!healthCheckResultGroup.isCollapsed"}],staticClass:"health-check-results"},t._l(e.CheckResults,function(e){return a("li",[a("health-status-indicator",{attrs:{"status-value":e.Status}}),t._v(" "),a("span",[t._v("\n                        "+t._s(e.Name)+"\n                    ")]),t._v(" "),e.Message?a("div",{staticClass:"health-check-result-description"},[t._v(t._s(e.Message))]):t._e()],1)})):t._e()])})),t._v(" "),t.isLoading?a("div",{staticClass:"spinner",class:{visible:t.isLoading}}):t._e()])},staticRenderFns:[]};e.a=i},dLeQ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a("pYLg"),a("+NLg"),a("7DwN"),a("DMY1"),a("R3SC");var i,n=a("D4uH"),s=(i=n)&&i.__esModule?i:{default:i};e.default={props:["statusValue"],computed:{className:function(){return this.statusValueToClassName(this.statusValue)},displayName:function(){return this.statusValueToDisplayName(this.statusValue)},iconName:function(){return this.statusValueToIconName(this.statusValue)}},components:{icon:s.default},methods:{statusValueToDisplayName:function(t){switch(t){case 0:return"Not tested";case 1:return"OK";case 2:return"Warning";case 3:return"Failed";default:return"unknown"}},statusValueToClassName:function(t){switch(t){case 0:return"not-tested";case 1:return"test-ok";case 2:return"test-warn";case 3:return"test-failed";default:return"unknown"}},statusValueToIconName:function(t){switch(t){case 0:return"circle";case 1:return"check-circle";case 2:return"exclamation-circle";case 3:return"times-circle";default:return"question-circle"}}}}},dXrS:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=a("7+uW"),s=(i=n)&&i.__esModule?i:{default:i};var r={};e.default={name:"icon",props:{name:{type:String,validator:function(t){return t?t in r||(s.default.util.warn('Invalid prop: prop "icon" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.',this),!1):null}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(s.default.util.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},clazz:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?r[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,a=t.height;return Math.max(e,a)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,a=0;this.$children.forEach(function(t){e=Math.max(e,t.width),a=Math.max(a,t.height)}),this.childrenWidth=e,this.childrenHeight=a,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(a-t.height)/2})}},register:function(t){for(var e in t){var a=t[e];a.paths||(a.paths=[]),a.d&&a.paths.push({d:a.d}),a.polygons||(a.polygons=[]),a.points&&a.polygons.push({points:a.points}),r[e]=a}},icons:r}},ehG9:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return void 0!==t.mapping.jiraTitle&&void 0!==t.mapping.tfsTitle?a("tr",{staticClass:"tfs4jira-mapping-row",staticStyle:{"background-color":"rgb(255, 255, 255)"}},[a("td",{staticClass:"tfs4jira-mapping-row-left"},[a("div",{staticClass:"tfs4jira-mapping-value-text"},[a("div",{staticClass:"tfs4jira-mapping-value-text-label"},[t._v(t._s(t.mapping.jiraTitle))])])]),t._v(" "),t._m(0),t._v(" "),a("td",{staticClass:"tfs4jira-mapping-row-right"},[a("div",{staticClass:"tfs4jira-mapping-value-text"},[a("button",{staticClass:"tfs4jira-mapping-row-operation tfs4jira-merged-mapping-remove tfs4jira-rounded-button",attrs:{disabled:t.mapping.duringProcessing,title:"Remove"},on:{click:function(e){t.removeMapping(t.mapping)}}},[a("img",{attrs:{src:t.getImagePath("delete-icon.svg")}})]),t._v("\n            "+t._s(t.mapping.tfsTitle)+"\n            "),a("button",{directives:[{name:"show",rawName:"v-show",value:t.mapping.tfsValue&&t.mapping.tfsValue.hasInvertedVersion,expression:"mapping.tfsValue && mapping.tfsValue.hasInvertedVersion"}],staticClass:"tfs4jira-rounded-button reverse",attrs:{disabled:t.mapping.duringProcessing,title:t.switchTitleText()},on:{click:function(e){t.switchTfsMapping(t.mapping)}}},[a("img",{attrs:{src:t.getImagePath("reverse-icon.svg")}})])])])]):t._e()},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"tfs4jira-mapping-row-direction"},[e("div",{staticClass:"tfs4jira-mapping-row-direction-both",attrs:{title:""}})])}]};e.a=i},hS7Q:function(t,e){},i8ii:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={publishNamespace:function(t,e){var a={};for(var i in e)if(-1!==["actions","state","getters"].indexOf(i))for(var n in a[i]={},e[i]){var s=e[i][n];a[i][s]=t+"/"+s}return a},generateNamespace:function(t){var e={};for(var a in t)for(var i in e[a]={},t[a]){var n=t[a][i];e[a][n]=n}return e}}},iezQ:function(t,e){},ijvF:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e){return a("path",t._b({},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e){return a("polygon",t._b({},"polygon",e,!1))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[a("g",{domProps:{innerHTML:t._s(t.icon.raw)}})]:t._e()])],2)},staticRenderFns:[]};e.a=i},jhM5:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=a("woOf"),s=(i=n)&&i.__esModule?i:{default:i},r=a("NYxO"),u=a("WSTi");e.default={props:[""],data:function(){return{currentItem:null}},methods:(0,s.default)({},(0,r.mapActions)({registerListener:u.NAMESPACE.actions.ADD_LISTENER}),{close:function(){this.currentItem=null}}),mounted:function(){this.registerListener({on:"MessageBox",handler:function(t){this.currentItem=t.payload||t}.bind(this)})}}},mCjQ:function(t,e){},"mxG+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=r(a("bOdI")),s=r(a("Sifv"));function r(t){return t&&t.__esModule?t:{default:t}}e.default=(i={},(0,n.default)(i,s.default.state.CONFIG,{contextPath:""}),(0,n.default)(i,s.default.state.NOTIFICATIONS,{}),(0,n.default)(i,s.default.state.NOTIFICATIONS_LISTENERS,{}),i)},"sW/x":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("v4qL"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);var r=a("UAU5"),u=a("VU/8")(n.a,r.a,!1,null,null,null);e.default=u.exports},tCI6:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=f(a("bOdI")),s=f(a("2aIq")),r=f(a("Xxa5")),u=f(a("exGp")),l=f(a("mtWM")),o=f(a("4E9S")),c=f(a("/WqQ")),d=a("WSTi");function f(t){return t&&t.__esModule?t:{default:t}}var p,h,v,_,m=new c.default(l.default);e.default=(i={},(0,n.default)(i,o.default.actions.GET_AVAILABLE_VALUES,(_=(0,u.default)(r.default.mark(function t(e){var a=e.commit,i=e.dispatch;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(o.default.mutations.SHOW_LOADER,!0),t.t0=a,t.t1=o.default.mutations.SET_MAPPINGS_VALUES,t.next=6,m.getData();case 6:t.t2=t.sent,(0,t.t0)(t.t1,t.t2),a(o.default.mutations.SHOW_LOADER,!1),t.next=14;break;case 11:t.prev=11,t.t3=t.catch(0),i(o.default.actions.HANDLE_ERROR,t.t3);case 14:case"end":return t.stop()}},t,this,[[0,11]])})),function(t){return _.apply(this,arguments)})),(0,n.default)(i,o.default.actions.MAP,(v=(0,u.default)(r.default.mark(function t(e,a){var i=e.commit,n=e.state,s=e.dispatch;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=i,t.t1=o.default.mutations.SET_MAPPINGS_VALUES,t.next=5,m.addMapping(a.jiraValue,a.tfsValue,n[o.default.state.AVAILABLE_VALUES],n[o.default.state.MAPPINGS]);case 5:t.t2=t.sent,(0,t.t0)(t.t1,t.t2),t.next=12;break;case 9:t.prev=9,t.t3=t.catch(0),s(o.default.actions.HANDLE_ERROR,t.t3);case 12:case"end":return t.stop()}},t,this,[[0,9]])})),function(t,e){return v.apply(this,arguments)})),(0,n.default)(i,o.default.actions.REMOVE_MAPPING,(h=(0,u.default)(r.default.mark(function t(e,a){var i=e.commit,n=e.state,s=e.dispatch;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a.duringProcessing=!0,t.t0=i,t.t1=o.default.mutations.SET_MAPPINGS_VALUES,t.next=6,m.removeMapping(n[o.default.state.AVAILABLE_VALUES],n[o.default.state.MAPPINGS],a,!0);case 6:t.t2=t.sent,(0,t.t0)(t.t1,t.t2),t.next=13;break;case 10:t.prev=10,t.t3=t.catch(0),s(o.default.actions.HANDLE_ERROR,t.t3);case 13:case"end":return t.stop()}},t,this,[[0,10]])})),function(t,e){return h.apply(this,arguments)})),(0,n.default)(i,o.default.actions.SWITCH_MAPPING,(p=(0,u.default)(r.default.mark(function t(e,a){var i=e.commit,n=e.state,s=e.dispatch;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a.duringProcessing=!0,t.t0=i,t.t1=o.default.mutations.SET_MAPPINGS_VALUES,t.next=6,m.switchTfsMapping(a,n[o.default.state.AVAILABLE_VALUES],n[o.default.state.MAPPINGS]);case 6:t.t2=t.sent,(0,t.t0)(t.t1,t.t2),t.next=13;break;case 10:t.prev=10,t.t3=t.catch(0),s(o.default.actions.HANDLE_ERROR,t.t3);case 13:case"end":return t.stop()}},t,this,[[0,10]])})),function(t,e){return p.apply(this,arguments)})),(0,n.default)(i,o.default.actions.SET_UP_SERVICE,function(t,e){(0,s.default)(t),void 0!==e.service&&(m=e.service),void 0!==e.prefix&&(m.backendUrl=e.prefix)}),(0,n.default)(i,o.default.actions.HANDLE_ERROR,function(t,e){var a=t.commit,i=t.dispatch,n=A(e);a(o.default.mutations.SHOW_LOADER,!1),i(d.NAMESPACE.actions.SEND_NOTIFICATION,{receiver:"MessageBox",payload:{title:"Operation failed",message:n}},{root:!0})}),i);var A=function(t){var e="Unknown error occured";return void 0!==t.response&&void 0!==t.response.data&&void 0!==t.response.data.Message?e=t.response.data.Message:void 0!==t.message&&(e=t.message),e}},uewC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("vixX"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);var r=a("HzNy");var u=function(t){a("59A6")},l=a("VU/8")(n.a,r.a,!1,u,"data-v-2265deb2",null);e.default=l.exports},urDH:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("ymf0"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);var r=a("dAqW");var u=function(t){a("mCjQ")},l=a("VU/8")(n.a,r.a,!1,u,"data-v-c7e4422c",null);e.default=l.exports},v4qL:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=u(a("woOf")),n=u(a("CG6D")),s=a("NYxO"),r=a("WSTi");function u(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{shared:n.default}},methods:(0,i.default)({},(0,s.mapActions)({sendNotification:r.NAMESPACE.actions.SEND_NOTIFICATION}),{dispatchNotifications:function(){this.notifications.forEach(function(t){!1===t.dispatched&&this.sendNotification(t)}.bind(this))}}),computed:{notifications:function(){return this.shared.notifications}},watch:{notifications:function(t){this.dispatchNotifications()}},mounted:function(){this.dispatchNotifications()}}},vixX:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=d(a("Xxa5")),n=d(a("exGp")),s=d(a("woOf")),r=d(a("B1cG")),u=d(a("1B2d")),l=a("NYxO"),o=a("ZT51"),c=a("WSTi");function d(t){return t&&t.__esModule?t:{default:t}}e.default={props:["profileGuid","loadOnInit"],data:function(){return{mountCallback:function(){}}},computed:(0,l.mapGetters)({mappings:o.NAMESPACE.getters.MAPPINGS,isLoaderVisible:o.NAMESPACE.getters.IS_LOADER_VISIBLE,contextPath:c.NAMESPACE.getters.CONTEXT_PATH}),methods:(0,s.default)({},(0,l.mapActions)({setUpService:o.NAMESPACE.actions.SET_UP_SERVICE,getAvailableValues:o.NAMESPACE.actions.GET_AVAILABLE_VALUES,registerListener:c.NAMESPACE.actions.ADD_LISTENER}),{initComponent:function(){var t=(0,n.default)(i.default.mark(function t(){return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAvailableValues();case 2:this.mountCallback();case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}),components:{LinkMappingSelects:r.default,LinkMappingRow:u.default},mounted:function(){this.setUpService({prefix:this.contextPath+"/api/profiles/"+this.profileGuid}),void 0!==this.loadOnInit&&"true"===this.loadOnInit&&this.initComponent(),this.registerListener({on:"RefreshLinkMappingComponent",handler:function(t){this.initComponent()}.bind(this)})}}},xnTX:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=r(a("bOdI")),s=r(a("Sifv"));function r(t){return t&&t.__esModule?t:{default:t}}e.default=(i={},(0,n.default)(i,s.default.getters.GET_NOTIFICATIONS,function(t){return t[s.default.state.NOTIFICATIONS]}),(0,n.default)(i,s.default.getters.CONTEXT_PATH,function(t){return t[s.default.state.CONFIG].contextPath}),i)},yIXc:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=l(a("woOf")),n=l(a("urDH"));a("vrpP"),a("lOjN");var s=l(a("D4uH")),r=a("NYxO"),u=a("WSTi");function l(t){return t&&t.__esModule?t:{default:t}}e.default={props:["profileGuid"],data:function(){return{isCollapsed:!1,shouldBeFixed:!1,currentWizardStep:null}},computed:{isGuidSet:function(){return this.profileGuid&&"00000000-0000-0000-0000-000000000000"!==this.profileGuid},windowWidth:function(){return window.innerWidth}},created:function(){var t=this;window.addEventListener("scroll",function(){t.adjustElementPosition()}),this.adjustElementPosition()},methods:(0,i.default)({},(0,r.mapActions)({registerListener:u.NAMESPACE.actions.ADD_LISTENER}),{adjustElementPosition:function(){"undefined"!=typeof $&&c($(this.$el),this)},collapse:function(){this.isCollapsed=!0,this.adjustElementPosition()},expand:function(){this.isCollapsed=!1,this.adjustElementPosition()},handleNotification:function(t){void 0!==t.profileDataToOverride&&this.$refs.profileHealthComponent.refresh(t.profileDataToOverride),void 0!==t.wizardStep&&(o(this.currentWizardStep,this.$refs.profileHealthComponent),this.currentWizardStep=t.wizardStep)}}),components:{"profile-health-component":n.default,icon:s.default},mounted:function(){this.registerListener({on:"WizardSide",handler:function(t){this.handleNotification(t)}.bind(this)})}};var o=function(t,e){switch(t){case"jira-connection-step":case"tfs-connection-step":case"synchronization-settings":e.refresh()}},c=function(t,e){if($(".tabheader").length>0){var a=$(".tabheader").offset().top,i=!1,n=$(window).scrollTop()>a+50;n!==i&&(i=n),e.shouldBeFixed=i,e.shouldBeFixed?t.css("right",$(window).width()-$(".page").offset().left-$(".page").outerWidth()):t.css("right","auto")}}},ymf0:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=d(a("woOf")),n=d(a("mtWM")),s=d(a("mw3O")),r=d(a("9x47")),u=d(a("7+uW")),l=a("NYxO"),o=a("WSTi");a("TFdi"),a("Oncp");var c=d(a("D4uH"));function d(t){return t&&t.__esModule?t:{default:t}}e.default={props:["profileGuid"],data:function(){return{healthCheckResultGroups:[],isProfileHealthResultLoading:!1}},computed:(0,i.default)({},(0,l.mapGetters)({contextPath:o.NAMESPACE.getters.CONTEXT_PATH}),{isLoading:function(){return this.isProfileHealthResultLoading},backendUrl:function(){return this.profileGuid?this.contextPath+"/profiles/"+this.profileGuid+"/HealthCheck":this.contextPath+"/profiles/HealthCheck"}}),components:{"health-status-indicator":r.default,icon:c.default},methods:{loadProfileHealth:function(t){var e=this;this.isProfileHealthResultLoading=!0;var a=s.default.stringify(t);return n.default.post(this.backendUrl,a).then(this.handleResponseData).catch(this.handleResponseError).then(function(){e.isProfileHealthResultLoading=!1})},refresh:function(t){console.log("Refreshing ProfileHealthComponent"),this.loadProfileHealth(t)},toggleCollapse:function(t){t.isCollapsed=!t.isCollapsed},areHealthCheckResultsAvailableInGroup:function(t){return t.CheckResults&&t.CheckResults.length},handleResponseData:function(t){this.healthCheckResultGroups=t.data,this.healthCheckResultGroups.forEach(function(t){var e=t.Status<=1;u.default.set(t,"isCollapsed",e)})},handleResponseError:function(t){console.log("Error getting profile health result : ",t),this.healthCheckResultGroups=[{Name:"Error getting profile health result",Status:3,Message:t.message}]}},mounted:function(){this.loadProfileHealth()}}},zpxE:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"tfs4jira-mapping-layout"},[t._m(0),t._v(" "),a("div",{staticClass:"tfs4jira-mapping-layout-row"},[a("div",{staticClass:"tfs4jira-mapping-layout-column-jira"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedJiraValue,expression:"selectedJiraValue"}],staticClass:"tfs4jira-mapping-select",attrs:{size:"10"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedJiraValue=e.target.multiple?a:a[0]}}},t._l(t.jiraValues,function(e){return a("option",{key:e.id,domProps:{value:e}},[t._v("\r\n                        "+t._s(e.title)+"\r\n                    ")])}))]),t._v(" "),a("div",{staticClass:"tfs4jira-mapping-layout-column-tfs"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedTfsValue,expression:"selectedTfsValue"}],staticClass:"tfs4jira-mapping-select",attrs:{size:"10"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedTfsValue=e.target.multiple?a:a[0]}}},t._l(t.tfsValues,function(e){return a("option",{key:e.id,domProps:{value:e}},[t._v("\r\n                        "+t._s(e.title)+"\r\n                    ")])}))])])]),t._v(" "),a("button",{staticClass:"tfs4jira-mapping-map-button tfs4jira-rounded-button",attrs:{disabled:t.disableMapButton(),title:"Please select values for both JIRA and TFS to map them."},on:{click:function(e){t.addMapping()}}},[t._v("Map\r\n    ")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tfs4jira-mapping-layout-row"},[e("div",{staticClass:"tfs4jira-mapping-layout-column-jira"},[e("h2",[this._v("JIRA Link Types")]),this._v(" "),e("div",{staticClass:"tfs4jira-mapping-header-note-jira"})]),this._v(" "),e("div",{staticClass:"tfs4jira-mapping-layout-column-tfs"},[e("h2",[this._v("TFS Link Types")]),this._v(" "),e("div",{staticClass:"tfs4jira-mapping-header-note-tfs"})])])}]};e.a=i}},["NHnr"]);
//# sourceMappingURL=app.js.map
/*! For license information please see 160.e4038e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{545:function(t,e,r){"use strict";r.r(e);var n=r(4),o=r(5);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){s=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,s=Object.create(i.prototype),a=new $(o||[]);return n(s,"_invoke",{value:C(t,r,a)}),s}function m(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var d={};function p(){}function h(){}function v(){}var y={};l(y,a,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(O([])));b&&b!==e&&r.call(b,a)&&(y=b);var _=v.prototype=p.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var o;n(this,"_invoke",{value:function(n,s){function a(){return new e((function(o,a){!function n(o,s,a,c){var u=m(t[o],t,s);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==i(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(n,s,o,a)}))}return o=o?o.then(a,a):a()}})}function C(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var s=r.delegate;if(s){var a=k(s,r);if(a){if(a===d)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=m(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function k(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=m(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=v,n(_,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:h,configurable:!0}),h.displayName=l(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var s=new x(f(e,r,n,o),i);return t.isGeneratorFunction(r)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},w(_),l(_,u,"Generator"),l(_,a,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return s.type="throw",s.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function a(t,e,r,n,o,i,s){try{var a=t[i](s),c=a.value}catch(t){return void r(t)}a.done?e(c):Promise.resolve(c).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function s(t){a(i,n,o,s,c,"next",t)}function c(t){a(i,n,o,s,c,"throw",t)}s(void 0)}))}}var u={middleware:["auth","check-permissions"],metaInfo:function(){return{title:this.$t("setup.role_and_permission.create.page_title")}},data:function(){return{breadcrumbsCurrent:"setup.role_and_permission.create.breadcrumbs_current",breadcrumbs:[{name:"setup.role_and_permission.create.breadcrumbs_first",url:"home"},{name:"setup.role_and_permission.create.breadcrumbs_second",url:"setup.index"},{name:"setup.role_and_permission.create.breadcrumbs_third",url:"roles.index"},{name:"setup.role_and_permission.create.breadcrumbs_active",url:""}],form:new o.a({name:"",permission:[]}),loading:!0,isDemoMode:window.config.isDemoMode}},computed:Object(n.b)({items:"operations/items"}),created:function(){this.getData()},methods:{saveRole:function(){var t=this;return c(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isDemoMode){e.next=5;break}return e.next=3,t.form.post(window.location.origin+"/api/roles").then((function(){toast.fire({type:"success",title:t.$t("setup.role_and_permission.create.success_msg")}),t.$router.push({name:"roles.index"})})).catch((function(){toast.fire({type:"error",title:t.$t("common.error_msg")})}));case 3:e.next=6;break;case 5:toast.fire({type:"warning",title:t.$t("You are not allowed to do this in demo version.")});case 6:case"end":return e.stop()}}),e)})))()},getData:function(){var t=this;return c(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$store.dispatch("operations/allData",{path:"/api/all-permissions"});case 3:t.setPermission(t.items),t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()},setPermission:function(t){var e=this;return c(s().mark((function r(){var n,o;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(n in t)for(o in t[n])e.form.permission.push(t[n][o].slug);case 1:case"end":return r.stop()}}),r)})))()},onChangeEventHandler:function(t,e){if(e.includes("view")||e.includes("edit")||e.includes("delete")){var r=e.includes("delete")?e.substring(0,e.length-6):e.substring(0,e.length-4);this.form.permission.includes(e)&&!this.form.permission.includes(r+"list")&&this.form.permission.push(r+"list")}if(e.includes("list")&&!this.form.permission.includes(e)){var n=e.substring(0,e.length-4);this.form.permission=this.form.permission.filter((function(t){return n+"edit"!==t})),this.form.permission=this.form.permission.filter((function(t){return n+"delete"!==t})),this.form.permission=this.form.permission.filter((function(t){return n+"view"!==t}))}}}},l=r(1),f=Object(l.a)(u,(function(){var t=this,e=t._self._c;return e("div",[e("breadcrumbs",{attrs:{items:t.breadcrumbs,current:t.breadcrumbsCurrent}}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-xl-3"},[e("SettingsSidebar")],1),t._v(" "),e("div",{staticClass:"col-12 col-xl-9"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.saveRole.apply(null,arguments)},keydown:function(e){return t.form.onKeydown(e)}}},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header setings-header"},[e("div",{staticClass:"col-xl-4 col-4"},[e("h3",{staticClass:"card-title"},[t._v("\n                "+t._s(t.$t("setup.role_and_permission.create.form_title"))+"\n              ")])]),t._v(" "),e("div",{staticClass:"col-xl-8 col-8 float-right text-right"},[e("router-link",{staticClass:"btn btn-dark float-right",attrs:{to:{name:"roles.index"}}},[e("i",{staticClass:"fas fa-long-arrow-alt-left"}),t._v("\n                "+t._s(t.$t("common.back"))+"\n              ")])],1)]),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"form-group mb-4"},[e("label",{attrs:{for:"name"}},[t._v(t._s(t.$t("common.name"))+"\n                "),e("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{placeholder:t.$t("common.name_placeholder")},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"name"}})],1),t._v(" "),e("h5",{staticClass:"mb-3 mt-4"},[t._v("\n              "+t._s(t.$t("setup.role_and_permission.create.select_permission"))+"\n            ")]),t._v(" "),e("masonry",{attrs:{cols:{default:2,1e3:2,700:1,400:1},gutter:{default:"30px",700:"15px"}}},t._l(t.items,(function(r,n){return e("div",{key:n,class:{"is-invalid":t.form.errors.has("permission")}},[e("has-error",{staticClass:"permission",attrs:{form:t.form,field:"permission"}}),t._v(" "),e("div",{staticClass:"card permission-card"},[e("div",{staticClass:"card-header"},[r[0]?e("h3",{staticClass:"card-title text-bold text-capitalize"},[t._v("\n                      "+t._s(r[0].guard_name)+"\n                    ")]):t._e(),t._v(" "),e("div",{staticClass:"card-tools"},[e("button",{staticClass:"btn btn-tool",attrs:{type:"button",loading:t.form.busy,"data-card-widget":"collapse"}},[e("i",{staticClass:"fas fa-minus"})])])]),t._v(" "),e("div",{staticClass:"card-body permisson-card"},[e("ul",t._l(r,(function(r,n){return e("li",{key:n},[e("label",{staticClass:"text-capitalize",attrs:{for:r.slug}},[t._v(t._s(r.name))]),t._v(" "),e("div",{staticClass:"custom-control custom-checkbox mb-1"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.permission,expression:"form.permission"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:r.slug,name:"permission"},domProps:{value:r.slug,checked:Array.isArray(t.form.permission)?t._i(t.form.permission,r.slug)>-1:t.form.permission},on:{change:[function(e){var n=t.form.permission,o=e.target,i=!!o.checked;if(Array.isArray(n)){var s=r.slug,a=t._i(n,s);o.checked?a<0&&t.$set(t.form,"permission",n.concat([s])):a>-1&&t.$set(t.form,"permission",n.slice(0,a).concat(n.slice(a+1)))}else t.$set(t.form,"permission",i)},function(e){return t.onChangeEventHandler(e,r.slug)}]}}),t._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:r.slug}})])])})),0)])])],1)})),0)],1),t._v(" "),e("div",{staticClass:"card-footer"},[e("v-button",{staticClass:"btn btn-primary",attrs:{loading:t.form.busy}},[e("i",{staticClass:"fas fa-save"}),t._v(" "+t._s(t.$t("common.save"))+"\n            ")]),t._v(" "),e("button",{staticClass:"btn btn-secondary float-right",attrs:{type:"reset"},on:{click:function(e){return t.form.reset()}}},[e("i",{staticClass:"fas fa-power-off"}),t._v(" "+t._s(t.$t("common.reset"))+"\n            ")])],1)])])])])],1)}),[],!1,null,null,null);e.default=f.exports}}]);
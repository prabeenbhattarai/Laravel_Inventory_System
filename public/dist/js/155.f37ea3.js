/*! For license information please see 155.f37ea3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{540:function(t,r,e){"use strict";e.r(r);var o=e(5),a=e(3),i=e.n(a);function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){s=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",m=a.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(t){c=function(t,r,e){return t[r]=e}}function u(t,r,e,a){var i=r&&r.prototype instanceof p?r:p,n=Object.create(i.prototype),s=new S(a||[]);return o(n,"_invoke",{value:C(t,e,s)}),n}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d={};function p(){}function v(){}function _(){}var h={};c(h,i,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(k([])));y&&y!==r&&e.call(y,i)&&(h=y);var w=_.prototype=p.prototype=Object.create(h);function b(t){["next","throw","return"].forEach((function(r){c(t,r,(function(t){return this._invoke(r,t)}))}))}function x(t,r){var a;o(this,"_invoke",{value:function(o,i){function s(){return new r((function(a,s){!function o(a,i,s,l){var m=f(t[a],t,i);if("throw"!==m.type){var c=m.arg,u=c.value;return u&&"object"==n(u)&&e.call(u,"__await")?r.resolve(u.__await).then((function(t){o("next",t,s,l)}),(function(t){o("throw",t,s,l)})):r.resolve(u).then((function(t){c.value=t,s(c)}),(function(t){return o("throw",t,s,l)}))}l(m.arg)}(o,i,a,s)}))}return a=a?a.then(s,s):s()}})}function C(t,r,e){var o="suspendedStart";return function(a,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===a)throw i;return P()}for(e.method=a,e.arg=i;;){var n=e.delegate;if(n){var s=L(n,e);if(s){if(s===d)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===o)throw o="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o="executing";var l=f(t,r,e);if("normal"===l.type){if(o=e.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(o="completed",e.method="throw",e.arg=l.arg)}}}function L(t,r){var e=r.method,o=t.iterator[e];if(void 0===o)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),d;var a=f(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function $(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(e.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=void 0,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=_,o(w,"constructor",{value:_,configurable:!0}),o(_,"constructor",{value:v,configurable:!0}),v.displayName=c(_,m,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,c(t,m,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),c(x.prototype,l,(function(){return this})),t.AsyncIterator=x,t.async=function(r,e,o,a,i){void 0===i&&(i=Promise);var n=new x(u(r,e,o,a),i);return t.isGeneratorFunction(e)?n:n.next().then((function(t){return t.done?t.value:n.next()}))},b(w),c(w,m,"Generator"),c(w,i,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var o in r)e.push(o);return e.reverse(),function t(){for(;e.length;){var o=e.pop();if(o in r)return t.value=o,t.done=!1,t}return t.done=!0,t}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(e,o){return n.type="throw",n.arg=t,r.next=e,o&&(r.method="next",r.arg=void 0),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],n=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=e.call(i,"catchLoc"),l=e.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o];if(a.tryLoc<=this.prev&&e.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var n=i?i.completion:{};return n.type=t,n.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(n)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var o=e.completion;if("throw"===o.type){var a=o.arg;E(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:k(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),d}},t}function l(t,r,e,o,a,i,n){try{var s=t[i](n),l=s.value}catch(t){return void e(t)}s.done?r(l):Promise.resolve(l).then(o,a)}function m(t){return function(){var r=this,e=arguments;return new Promise((function(o,a){var i=t.apply(r,e);function n(t){l(i,o,a,n,s,"next",t)}function s(t){l(i,o,a,n,s,"throw",t)}n(void 0)}))}}var c={middleware:["auth","check-permissions"],metaInfo:function(){return{title:this.$t("setup.mail_configuration.index.page_title")}},data:function(){return{breadcrumbsCurrent:"setup.mail_configuration.index.breadcrumbs_current",breadcrumbs:[{name:"setup.mail_configuration.index.breadcrumbs_first",url:"home"},{name:"setup.mail_configuration.index.breadcrumbs_second",url:"setup.index"},{name:"setup.mail_configuration.index.breadcrumbs_active",url:""}],form:new o.a({mail_mailer:"",mail_host:"",mail_port:"",mail_username:"",mail_password:"",mail_encryption:"",mail_from_address:""}),isDemoMode:window.config.isDemoMode}},created:function(){this.getMailServerValues()},methods:{getMailServerValues:function(){var t=this;return m(s().mark((function r(){var e,o;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.get(window.location.origin+"/api/mail-configuration/");case 2:e=r.sent,o=e.data,t.form.mail_mailer=o.mail_mailer.value,t.form.mail_host=o.mail_host.value,t.form.mail_port=o.mail_port.value,t.form.mail_username=o.mail_username.value,t.form.mail_password=o.mail_password.value,t.form.mail_encryption=o.mail_encryption.value,t.form.mail_from_address=o.mail_from_address.value;case 11:case"end":return r.stop()}}),r)})))()},updateSettings:function(){var t=this;return m(s().mark((function r(){return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.isDemoMode){r.next=5;break}return r.next=3,t.form.post(window.location.origin+"/api/update-mail-configuration").then((function(){toast.fire({type:"success",title:t.$t("setup.general_settings.index.success_message")})})).catch((function(){toast.fire({type:"error",title:t.$t("common.error_msg")})}));case 3:r.next=6;break;case 5:toast.fire({type:"warning",title:t.$t("You are not allowed to do this in demo version.")});case 6:case"end":return r.stop()}}),r)})))()}}},u=e(1),f=Object(u.a)(c,(function(){var t=this,r=t._self._c;return r("div",[r("breadcrumbs",{attrs:{items:t.breadcrumbs,current:t.breadcrumbsCurrent}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-xl-3"},[r("SettingsSidebar")],1),t._v(" "),r("div",{staticClass:"col-12 col-xl-9"},[r("form",{attrs:{role:"form"},on:{submit:function(r){return r.preventDefault(),t.updateSettings.apply(null,arguments)},keydown:function(r){return t.form.onKeydown(r)}}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header setings-header"},[r("h3",{staticClass:"card-title"},[t._v("\n              "+t._s(t.$t("setup.mail_configuration.index.page_title"))+"\n            ")])]),t._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-md-12"},[r("label",{attrs:{for:"mail_mailer"}},[t._v(t._s(t.$t("setup.mail_configuration.form.mail_mailer"))+"\n                  "),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mail_mailer,expression:"form.mail_mailer"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("mail_mailer")},attrs:{id:"mail_mailer",type:"text",name:"mail_mailer",placeholder:t.$t("setup.mail_configuration.form.mail_mailer"),required:""},domProps:{value:t.form.mail_mailer},on:{input:function(r){r.target.composing||t.$set(t.form,"mail_mailer",r.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"mail_mailer"}})],1),t._v(" "),r("div",{staticClass:"form-group col-md-12"},[r("label",{attrs:{for:"mail_host"}},[t._v(t._s(t.$t("setup.mail_configuration.form.mail_host"))+"\n                  "),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mail_host,expression:"form.mail_host"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("mail_host")},attrs:{id:"mail_host",type:"text",name:"mail_host",placeholder:t.$t("setup.mail_configuration.form.mail_host"),required:""},domProps:{value:t.form.mail_host},on:{input:function(r){r.target.composing||t.$set(t.form,"mail_host",r.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"mail_host"}})],1),t._v(" "),r("div",{staticClass:"form-group col-md-12"},[r("label",{attrs:{for:"mail_port"}},[t._v(t._s(t.$t("setup.mail_configuration.form.mail_port"))+"\n                  "),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mail_port,expression:"form.mail_port"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("mail_port")},attrs:{id:"mail_port",type:"text",name:"mail_port",placeholder:t.$t("setup.mail_configuration.form.mail_port"),required:""},domProps:{value:t.form.mail_port},on:{input:function(r){r.target.composing||t.$set(t.form,"mail_port",r.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"mail_port"}})],1),t._v(" "),r("div",{staticClass:"form-group col-md-12"},[r("label",{attrs:{for:"mail_username"}},[t._v(t._s(t.$t("setup.mail_configuration.form.mail_username"))+"\n                  "),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mail_username,expression:"form.mail_username"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("mail_username")},attrs:{id:"mail_username",type:"text",name:"mail_username",placeholder:t.$t("setup.mail_configuration.form.mail_username"),required:""},domProps:{value:t.form.mail_username},on:{input:function(r){r.target.composing||t.$set(t.form,"mail_username",r.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"mail_username"}})],1),t._v(" "),r("div",{staticClass:"form-group col-md-12"},[r("label",{attrs:{for:"mail_password"}},[t._v(t._s(t.$t("setup.mail_configuration.form.mail_password"))+"\n                  "),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mail_password,expression:"form.mail_password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("mail_password")},attrs:{id:"mail_password",type:"text",name:"mail_password",placeholder:t.$t("setup.mail_configuration.form.mail_password"),required:""},domProps:{value:t.form.mail_password},on:{input:function(r){r.target.composing||t.$set(t.form,"mail_password",r.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"mail_password"}})],1),t._v(" "),r("div",{staticClass:"form-group col-md-12"},[r("label",{attrs:{for:"mail_encryption"}},[t._v(t._s(t.$t("setup.mail_configuration.form.mail_encryption"))+"\n                  "),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mail_encryption,expression:"form.mail_encryption"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("mail_encryption")},attrs:{id:"mail_encryption",type:"text",name:"mail_encryption",placeholder:t.$t("setup.mail_configuration.form.mail_encryption"),required:""},domProps:{value:t.form.mail_encryption},on:{input:function(r){r.target.composing||t.$set(t.form,"mail_encryption",r.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"mail_encryption"}})],1),t._v(" "),r("div",{staticClass:"form-group col-md-12"},[r("label",{attrs:{for:"mail_from_address"}},[t._v(t._s(t.$t("setup.mail_configuration.form.mail_from_address"))+"\n                  "),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mail_from_address,expression:"form.mail_from_address"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("mail_from_address")},attrs:{id:"mail_from_address",type:"text",name:"mail_from_address",placeholder:t.$t("setup.mail_configuration.form.mail_from_address"),required:""},domProps:{value:t.form.mail_from_address},on:{input:function(r){r.target.composing||t.$set(t.form,"mail_from_address",r.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"mail_from_address"}})],1)])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("v-button",{staticClass:"btn btn-primary",attrs:{loading:t.form.busy}},[r("i",{staticClass:"fas fa-edit"}),t._v(" "+t._s(t.$t("common.save_changes"))+"\n            ")])],1)])])])])],1)}),[],!1,null,null,null);r.default=f.exports}}]);
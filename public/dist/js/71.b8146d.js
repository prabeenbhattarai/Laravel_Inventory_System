/*! For license information please see 71.b8146d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{445:function(t,r,e){"use strict";e.r(r);var n=e(5);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){a=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function f(t,r,e,o){var a=r&&r.prototype instanceof d?r:d,i=Object.create(a.prototype),c=new O(o||[]);return n(i,"_invoke",{value:k(t,e,c)}),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var p={};function d(){}function v(){}function m(){}var y={};l(y,c,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(j([])));g&&g!==r&&e.call(g,c)&&(y=g);var w=m.prototype=d.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function x(t,r){var a;n(this,"_invoke",{value:function(n,i){function c(){return new r((function(a,c){!function n(a,i,c,s){var u=h(t[a],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==o(f)&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}(n,i,a,c)}))}return a=a?a.then(c,c):c()}})}function k(t,r,e){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=L(i,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var s=h(t,r,e);if("normal"===s.type){if(n=e.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(n="completed",e.method="throw",e.arg=s.arg)}}}function L(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function C(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=m,n(w,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(x.prototype),l(x.prototype,s,(function(){return this})),t.AsyncIterator=x,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new x(f(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(w),l(w,u,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),C(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;C(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:j(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}function i(t,r,e,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void e(t)}c.done?r(s):Promise.resolve(s).then(n,o)}var c={middleware:["auth","check-permissions"],metaInfo:function(){return{title:this.$t("backup.page_title")}},data:function(){return{breadcrumbsCurrent:"backup.breadcrumbs_current",breadcrumbs:[{name:"backup.breadcrumbs_first",url:"home"},{name:"backup.breadcrumbs_active",url:""}],form:new n.a({format:"sql"}),loading:!0,user:"",isDemoMode:window.config.isDemoMode}},methods:{databaseBackup:function(){var t,r=this;return(t=a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.isDemoMode){t.next=5;break}return t.next=3,r.form.post(window.location.origin+"/api/backup",{responseType:"blob"}).then((function(t){var e=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a");n.href=e;var o="backup."+r.form.format;n.setAttribute("download",o),document.body.appendChild(n),n.click(),toast.fire({type:"success",title:r.$t("backup.success_msg")})})).catch((function(){toast.fire({type:"error",title:r.$t("common.error_msg")})}));case 3:t.next=6;break;case 5:toast.fire({type:"warning",title:r.$t("You are not allowed to do this in demo version.")});case 6:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function c(t){i(a,n,o,c,s,"next",t)}function s(t){i(a,n,o,c,s,"throw",t)}c(void 0)}))})()}}},s=e(1),u=Object(s.a)(c,(function(){var t=this,r=t._self._c;return r("div",[r("breadcrumbs",{attrs:{items:t.breadcrumbs,current:t.breadcrumbsCurrent}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 m-auto"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("h3",{staticClass:"card-title"},[t._v(t._s(t.$t("backup.page_title")))]),t._v(" "),r("router-link",{staticClass:"btn btn-dark float-right",attrs:{to:{name:"home"}}},[r("i",{staticClass:"fas fa-long-arrow-alt-left"}),t._v(" "+t._s(t.$t("common.back"))+"\n          ")])],1),t._v(" "),r("div",{staticClass:"card-body"},[r("form",{staticClass:"form-horizontal",on:{submit:function(r){return r.preventDefault(),t.databaseBackup.apply(null,arguments)},keydown:function(r){return t.form.onKeydown(r)}}},[r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"format"}},[t._v(t._s(t.$t("backup.format"))+"\n                "),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("div",{staticClass:"col-sm-10"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.format,expression:"form.format"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("format")},attrs:{id:"format"},on:{change:function(r){var e=Array.prototype.filter.call(r.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"format",r.target.multiple?e:e[0])}}},[r("option",{attrs:{value:"sql"}},[t._v(t._s(t.$t("backup.format_sql")))])]),t._v(" "),r("has-error",{attrs:{form:t.form,field:"format"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"offset-sm-2 col-sm-10"},[r("v-button",{staticClass:"btn btn-primary",attrs:{loading:t.form.busy}},[r("i",{staticClass:"fas fa-file-export"}),t._v(" "+t._s(t.$t("backup.export"))+"\n                ")])],1)])])])])])])],1)}),[],!1,null,"2454080e",null);r.default=u.exports}}]);
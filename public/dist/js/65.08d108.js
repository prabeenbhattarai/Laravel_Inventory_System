/*! For license information please see 65.08d108.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{440:function(t,e,r){"use strict";r.r(e);var n=r(5),o=r(70),a=r.n(o),i=r(4);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(){c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function f(t,e,r,o){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),s=new j(o||[]);return n(i,"_invoke",{value:C(t,r,s)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var d={};function m(){}function v(){}function h(){}var g={};u(g,a,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(E([])));w&&w!==e&&r.call(w,a)&&(g=w);var b=h.prototype=m.prototype=Object.create(g);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e((function(o,i){!function n(o,a,i,c){var l=p(t[o],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==s(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function C(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=k(i,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=p(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function k(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=p(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function E(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=h,n(b,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:v,configurable:!0}),v.displayName=u(h,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},_(x.prototype),u(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(b),u(b,l,"Generator"),u(b,a,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=E,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function l(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===s(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p={components:{Button:r(175).a},layout:"basic",middleware:"guest",metaInfo:function(){return{title:this.$t("login")}},data:function(){return{form:new n.a({email:"",password:""}),remember:!1,appName:window.config.appName,isDemoMode:window.config.isDemoMode}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(i.b)("operations",["appInfo"])),methods:{login:function(){var t,e=this;return(t=c().mark((function t(){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.post("/api/login");case 2:return r=t.sent,n=r.data,e.$store.dispatch("auth/saveToken",{token:n.token,remember:e.remember}),t.next=7,e.$store.dispatch("auth/fetchUser");case 7:e.redirect();case 8:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){l(a,n,o,i,s,"next",t)}function s(t){l(a,n,o,i,s,"throw",t)}i(void 0)}))})()},redirect:function(){var t=a.a.get("intended_url");t?(a.a.remove("intended_url"),this.$router.push({path:t})):this.$router.push({name:"home"})},loginCredential:function(t,e){this.form.email=t,this.form.password=e,this.login()}}},d=r(1),m=Object(d.a)(p,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row no-gutter"},[e("div",{staticClass:"col-md-6 d-none d-md-flex bg-image"}),t._v(" "),e("div",{staticClass:"col-md-6 bg-light"},[e("div",{staticClass:"auth-wrapper d-flex align-items-center py-5"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-10 col-xl-7 mx-auto"},[t.appInfo?e("img",{staticClass:"lg-logo img-fluid",attrs:{src:t.appInfo.blackLogo,alt:t.appInfo.companyName}}):t._e(),t._v(" "),e("p",{staticClass:"text-muted mb-4 mt-2"},[t._v(t._s(t.$t("login_txt")))]),t._v(" "),e("form",{on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)},keydown:function(e){return t.form.onKeydown(e)}}},[e("div",{staticClass:"form-group mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control rounded-pill border-0 shadow-sm px-4 text-primary",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email",placeholder:t.$t("email_placeholder")},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"email"}})],1),t._v(" "),e("div",{staticClass:"form-group mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control rounded-pill border-0 shadow-sm px-4 text-primary",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",name:"password",placeholder:t.$t("password_placeholder")},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"password"}})],1),t._v(" "),e("div",{staticClass:"row mb-5"},[e("div",{staticClass:"col-md-6"},[e("checkbox",{attrs:{name:"remember"},model:{value:t.remember,callback:function(e){t.remember=e},expression:"remember"}},[t._v("\n                      "+t._s(t.$t("remember_me"))+"\n                    ")])],1),t._v(" "),e("div",{staticClass:"col-md-6 text-right"},[e("router-link",{staticClass:"ml-auto my-auto",attrs:{to:{name:"password.request"}}},[t._v("\n                      "+t._s(t.$t("forgot_password"))+"\n                    ")])],1)]),t._v(" "),e("v-button",{staticClass:"btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm",attrs:{loading:t.form.busy}},[e("i",{staticClass:"fas fa-sign-in-alt"}),t._v(" "),e("strong",[t._v(t._s(t.$t("login")))])])],1)]),t._v(" "),e("div",{staticClass:"col-12 mt-4"},[t.isDemoMode?e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[t._m(0),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-bordered red-border text-center"},[t._m(1),t._v(" "),e("tbody",[e("tr",[e("th",{attrs:{scope:"row"}},[t._v("Super Admin")]),t._v(" "),e("td",[t._v("superadmin@acculance.com")]),t._v(" "),e("td",[t._v("acculance2022")]),t._v(" "),e("td",{attrs:{scope:"row"}},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("Login as super admin"),expression:"$t('Login as super admin')"}],staticClass:"btn",on:{click:function(e){return t.loginCredential("superadmin@acculance.com","acculance2022")}}},[e("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"}})])])])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("Manager")]),t._v(" "),e("td",[t._v("manager@acculance.com")]),t._v(" "),e("td",[t._v("manager2022")]),t._v(" "),e("td",{attrs:{scope:"row"}},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("Login as super manager"),expression:"$t('Login as super manager')"}],staticClass:"btn",on:{click:function(e){return t.loginCredential("manager@acculance.com","manager2022")}}},[e("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"}})])])])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("Salesman")]),t._v(" "),e("td",[t._v("sales@acculance.com")]),t._v(" "),e("td",[t._v("sales2022")]),t._v(" "),e("td",{attrs:{scope:"row"}},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("Login as super salesman"),expression:"$t('Login as super salesman')"}],staticClass:"btn",on:{click:function(e){return t.loginCredential("sales@acculance.com","sales2022")}}},[e("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"}})])])])])])])])])]):t._e(),t._v(" "),e("div",{staticClass:"w-100 text-center mt-4"},[e("p",[t._v("\n                  "+t._s(t.$t("Acculance v4.0.0. Developed by"))+"\n                  "),t._m(2)])])])])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("h3",{staticClass:"text-center font-bold font-up danger-text"},[this._v("\n                        Login Credentials\n                      ")])])])},function(){var t=this._self._c;return t("thead",[t("tr",[t("th",[this._v("Role")]),this._v(" "),t("th",[this._v("Email")]),this._v(" "),t("th",[this._v("Password")]),this._v(" "),t("th",[this._v("Action")])])])},function(){var t=this._self._c;return t("a",{staticClass:"font-italic text-muted",attrs:{href:"https://codeshaper.net/",target:"__blank"}},[t("u",[this._v("Codeshaper")])])}],!1,null,null,null);e.default=m.exports}}]);
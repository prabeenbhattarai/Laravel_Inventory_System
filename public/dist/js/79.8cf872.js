/*! For license information please see 79.8cf872.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{453:function(t,e,r){"use strict";r.r(e);var n=r(3),a=r.n(n),o=r(16),i=r.n(o);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(){c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function f(t,e,r,a){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),s=new E(a||[]);return n(i,"_invoke",{value:k(t,r,s)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var v={};function d(){}function m(){}function p(){}var _={};u(_,o,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y($([])));b&&b!==e&&r.call(b,o)&&(_=b);var g=p.prototype=d.prototype=Object.create(_);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var a;n(this,"_invoke",{value:function(n,o){function i(){return new e((function(a,i){!function n(a,o,i,c){var l=h(t[a],t,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==s(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}})}function k(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=L(i,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var a=h(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,v;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function $(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return m.prototype=p,n(g,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:m,configurable:!0}),m.displayName=u(p,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,l,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(x.prototype),u(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new x(f(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),u(g,l,"Generator"),u(g,o,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=$,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(D),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),D(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;D(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:$(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),v}},t}function l(t,e,r,n,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,a)}var u={middleware:["auth","check-permissions"],metaInfo:function(){return{title:this.$t("cashbook.transfers.view.page_title")}},data:function(){return{breadcrumbsCurrent:"cashbook.transfers.view.breadcrumbs_current",breadcrumbs:[{name:"cashbook.transfers.view.breadcrumbs_first",url:"home"},{name:"cashbook.transfers.view.breadcrumbs_second",url:""},{name:"cashbook.transfers.view.breadcrumbs_third",url:"transferBalances.index"},{name:"cashbook.transfers.view.breadcrumbs_active",url:""}],showModal:!1,allData:""}},created:function(){this.getTransfer()},methods:{getTransfer:function(){var t,e=this;return(t=c().mark((function t(){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.get(window.location.origin+"/api/balance-transfers/"+e.$route.params.slug);case 2:r=t.sent,n=r.data,e.allData=n.data;case 5:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(t){l(o,n,a,i,s,"next",t)}function s(t){l(o,n,a,i,s,"throw",t)}i(void 0)}))})()},printWindow:function(){window.print()},generatePDF:function(){var t=document.getElementById("content-to-pdf"),e={margin:5,filename:"Balance Transfer-"+this.$route.params.slug+".pdf",image:{type:"jpeg",quality:.98},pagebreak:{mode:"avoid-all",before:"#page-break"},html2canvas:{scale:2},jsPDF:{unit:"mm",format:"a4",orientation:"landscape"}};i()().from(t).set(e).save()}}},f=r(1),h=Object(f.a)(u,(function(){var t=this,e=t._self._c;return e("div",[e("breadcrumbs",{attrs:{items:t.breadcrumbs,current:t.breadcrumbsCurrent}}),t._v(" "),e("div",{staticClass:"row no-print mb-2"},[e("div",{staticClass:"w-100 text-right float-right"},[t.allData?e("div",{staticClass:"btn-group"},[e("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(e){return t.generatePDF()}}},[e("i",{staticClass:"fas fa-download"}),t._v(" "+t._s(t.$t("download"))+"\n        ")]),t._v(" "),e("a",{staticClass:"btn btn-secondary",attrs:{href:"#"},on:{click:function(e){return t.printWindow()}}},[e("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.$t("common.print"))+"\n        ")]),t._v(" "),t.$can("account-transfer-balance-edit")?e("router-link",{staticClass:"btn btn-info",attrs:{to:{name:"transferBalances.edit",params:{slug:t.allData.slug}}}},[e("i",{staticClass:"fas fa-edit"}),t._v(" "+t._s(t.$t("common.edit"))+"\n        ")]):t._e(),t._v(" "),e("router-link",{staticClass:"btn btn-dark float-right",attrs:{to:{name:"transferBalances.index"}}},[e("i",{staticClass:"fas fa-long-arrow-alt-left"}),t._v(" "+t._s(t.$t("common.back"))+"\n        ")])],1):t._e()])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"invoice p-3 mb-3 w-100",attrs:{id:"content-to-pdf"}},[e("div",{staticClass:"row invoice-info"},[e("div",{staticClass:"col-sm-4 invoice-col"},[e("CompanyInfo")],1),t._v(" "),e("div",{staticClass:"col-sm-6 offset-sm-2 invoice-col float-right text-md-right"},[e("h5",[t._v(t._s(t.$t("cashbook.transfers.view.breadcrumbs_current")))]),t._v(" "),t.allData.date?e("strong",[t._v(t._s(t.$t("common.date"))+":")]):t._e(),t._v("\n          "+t._s(t._f("moment")(t.allData.date,"Do MMM, YYYY"))),e("br"),t._v(" "),e("strong",[t._v(t._s(t.$t("common.created_by"))+":")]),t._v("\n          "+t._s(t.allData.createdBy)+"\n        ")])]),t._v(" "),e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"table-responsive table-custom text-center"},[e("table",{staticClass:"table table-hover"},[e("thead",[e("tr",[e("th",[t._v(t._s(t.$t("common.reason")))]),t._v(" "),e("th",[t._v(t._s(t.$t("cashbook.common.from_account")))]),t._v(" "),e("th",[t._v(t._s(t.$t("cashbook.common.to_account")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.amount")))]),t._v(" "),t.allData.date?e("th",[t._v(t._s(t.$t("common.date")))]):t._e(),t._v(" "),t.allData.note?e("th",[t._v(t._s(t.$t("common.note")))]):t._e(),t._v(" "),e("th",[t._v(t._s(t.$t("common.status")))]),t._v(" "),e("th",{staticClass:"text-right"},[t._v(t._s(t.$t("common.created_by")))])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v(t._s(t.allData.reason))]),t._v(" "),e("td",[t.allData.fromAccount?e("span",[t._v(t._s(t.allData.fromAccount.label))]):t._e()]),t._v(" "),e("td",[t.allData.toAccount?e("span",[t._v(t._s(t.allData.toAccount.label))]):t._e()]),t._v(" "),e("td",[t._v(t._s(t._f("withCurrency")(t.allData.amount)))]),t._v(" "),e("td",[t.allData.date?e("span",[t._v(t._s(t._f("moment")(t.allData.date,"Do MMM, YYYY")))]):t._e()]),t._v(" "),t.allData.note?e("td",[t._v(t._s(t.allData.note))]):t._e(),t._v(" "),e("td",[1===t.allData.status?e("span",{staticClass:"badge bg-success"},[t._v(t._s(t.$t("common.active")))]):e("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.$t("common.in_active")))])]),t._v(" "),e("td",{staticClass:"text-right"},[t._v(t._s(t.allData.createdBy))])])])])])])])])],1)}),[],!1,null,null,null);e.default=h.exports}}]);
/*! For license information please see 86.0ddccc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{464:function(t,e,n){"use strict";n.r(e);var r=n(3),a=n.n(r),o=n(4),i=n(16),s=n.n(i);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){l=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function m(t,e,n,a){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),s=new E(a||[]);return r(i,"_invoke",{value:D(t,n,s)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=m;var v={};function h(){}function p(){}function d(){}var y={};u(y,o,(function(){return this}));var _=Object.getPrototypeOf,g=_&&_(_(k([])));g&&g!==e&&n.call(g,o)&&(y=g);var b=d.prototype=h.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var a;r(this,"_invoke",{value:function(r,o){function i(){return new e((function(a,i){!function r(a,o,i,s){var l=f(t[a],t,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==c(m)&&n.call(m,"__await")?e.resolve(m.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(m).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,s)}))}s(l.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}})}function D(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return j()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=C(i,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=f(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function C(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var a=f(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,v;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=d,r(b,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(x.prototype),u(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new x(m(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),u(b,s,"Generator"),u(b,o,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=k,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),$(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;$(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),v}},t}function u(t,e,n,r,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}var m={middleware:["auth","check-permissions"],metaInfo:function(){return{title:this.$t("employees.increments.view.page_title")}},data:function(){return{breadcrumbsCurrent:"employees.increments.view.breadcrumbs_current",breadcrumbs:[{name:"employees.increments.view.breadcrumbs_first",url:"home"},{name:"employees.increments.view.breadcrumbs_second",url:"increments.index"},{name:"employees.increments.view.breadcrumbs_active",url:""}],showModal:!1,allData:"",employeePrefix:""}},computed:Object(o.b)({appInfo:"operations/appInfo"}),created:function(){this.getIncrement(),this.employeePrefix=this.appInfo.employeePrefix},methods:{getIncrement:function(){var t,e=this;return(t=l().mark((function t(){var n,r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.get(window.location.origin+"/api/increments/"+e.$route.params.slug);case 2:n=t.sent,r=n.data,e.allData=r.data;case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){u(o,r,a,i,s,"next",t)}function s(t){u(o,r,a,i,s,"throw",t)}i(void 0)}))})()},printWindow:function(){window.print()},generatePDF:function(){var t=document.getElementById("content-to-pdf"),e={margin:5,filename:"Salary Increment-"+this.$route.params.slug+".pdf",image:{type:"jpeg",quality:.98},pagebreak:{mode:"avoid-all",before:"#page-break"},html2canvas:{scale:2},jsPDF:{unit:"mm",format:"a4",orientation:"landscape"}};s()().from(t).set(e).save()}}},f=n(1),v=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e("breadcrumbs",{attrs:{items:t.breadcrumbs,current:t.breadcrumbsCurrent}}),t._v(" "),e("div",{staticClass:"row no-print mb-2"},[e("div",{staticClass:"w-100 text-right float-right"},[t.allData?e("div",{staticClass:"btn-group"},[e("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(e){return t.generatePDF()}}},[e("i",{staticClass:"fas fa-download"}),t._v(" "+t._s(t.$t("download"))+"\n        ")]),t._v(" "),e("a",{staticClass:"btn btn-secondary",attrs:{href:"#"},on:{click:function(e){return t.printWindow()}}},[e("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.$t("common.print"))+"\n        ")]),t._v(" "),t.$can("increment-edit")?e("router-link",{staticClass:"btn btn-info",attrs:{to:{name:"increments.edit",params:{slug:t.allData.slug}}}},[e("i",{staticClass:"fas fa-edit"}),t._v(" "+t._s(t.$t("common.edit"))+"\n        ")]):t._e(),t._v(" "),e("router-link",{staticClass:"btn btn-dark float-right",attrs:{to:{name:"increments.index"}}},[e("i",{staticClass:"fas fa-long-arrow-alt-left"}),t._v(" "+t._s(t.$t("common.back"))+"\n        ")])],1):t._e()])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"invoice p-3 mb-3 w-100",attrs:{id:"content-to-pdf"}},[e("div",{staticClass:"row invoice-info mb-5"},[e("div",{staticClass:"col-sm-4 invoice-col"},[e("CompanyInfo")],1),t._v(" "),t.allData.employee&&t.allData.employee.department?e("div",{staticClass:"col-sm-6 offset-sm-2 invoice-col float-right text-md-right"},[e("h5",[t._v(t._s(t.$t("common.employee_details")))]),t._v(" "),e("strong",[t._v(t._s(t.$t("common.emp_id"))+": ")]),t._v(t._s(t._f("withPrefix")(t.allData.employee.empID,t.employeePrefix))),e("br"),t._v(" "),e("strong",[t._v(t._s(t.$t("common.emp_name"))+": ")]),t._v("\n          "+t._s(t.allData.employee.name)),e("br"),t._v(" "),e("strong",[t._v(t._s(t.$t("common.department"))+": ")]),t._v("\n          "+t._s(t.allData.employee.department.name)),e("br"),t._v(" "),e("strong",[t._v(t._s(t.$t("common.designation"))+": ")]),t._v("\n          "+t._s(t.allData.employee.designation)),e("br")]):t._e()]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"table-custom table-responsive"},[e("table",{staticClass:"table"},[e("thead",[e("tr",[t.allData.reason?e("th",[t._v("\n                    "+t._s(t.$t("employees.common.increment_reason"))+"\n                  ")]):t._e(),t._v(" "),t.allData.employee&&t.allData.employee.salary?e("th",[t._v("\n                    "+t._s(t.$t("employees.common.basic_salary"))+"\n                  ")]):t._e(),t._v(" "),t.allData.incrementAmount?e("th",[t._v("\n                    "+t._s(t.$t("employees.common.increment_amount"))+"\n                  ")]):t._e(),t._v(" "),e("th",[t._v(t._s(t.$t("employees.common.incremented_salary")))]),t._v(" "),e("th",[t._v(t._s(t.$t("payroll.common.present_salary")))]),t._v(" "),t.allData.incrementDate?e("th",[t._v("\n                    "+t._s(t.$t("employees.common.increment_date"))+"\n                  ")]):t._e(),t._v(" "),e("th",[t._v(t._s(t.$t("common.status")))]),t._v(" "),e("th",{staticClass:"text-right"},[t._v(t._s(t.$t("common.created_by")))])])]),t._v(" "),t.allData.employee?e("tbody",[e("tr",[t.allData.reason?e("td",[t._v(t._s(t.allData.reason))]):t._e(),t._v(" "),t.allData.employee.salary?e("td",[t._v("\n                    "+t._s(t._f("withCurrency")(t.allData.employee.salary))+"\n                  ")]):t._e(),t._v(" "),t.allData.incrementAmount?e("td",[t._v("\n                    "+t._s(t._f("withCurrency")(t.allData.incrementAmount))+"\n                  ")]):t._e(),t._v(" "),e("td",[t._v("\n                    "+t._s(t._f("withCurrency")(t.allData.incrementAmount+t.allData.employee.salary))+"\n                  ")]),t._v(" "),e("td",[t._v("\n                    "+t._s(t._f("withCurrency")(t.allData.employee.totalSalary))+"\n                  ")]),t._v(" "),t.allData.incrementDate?e("td",[t._v("\n                    "+t._s(t._f("moment")(t.allData.incrementDate,"Do MMM, YYYY"))+"\n                  ")]):t._e(),t._v(" "),e("td",[1===t.allData.status?e("span",{staticClass:"badge bg-success"},[t._v(t._s(t.$t("common.active")))]):e("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.$t("common.in_active")))])]),t._v(" "),e("td",{staticClass:"text-right"},[t._v(t._s(t.allData.user))])])]):t._e()])])])])])]),t._v(" "),t.showModal?e("Modal",{on:{close:function(e){t.showModal=!1}}},[e("h5",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.$t("common.modal_header")))]),t._v(" "),e("div",{staticClass:"w-100",attrs:{slot:"body"},slot:"body"},[e("img",{staticClass:"rounded img-fluid",attrs:{src:t.allData.employee.image,loading:"lazy"}})])]):t._e()],1)}),[],!1,null,null,null);e.default=v.exports}}]);
/*! For license information please see 137.15bd51.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{516:function(t,e,a){"use strict";a.r(e);var r=a(5),n=a(3),s=a.n(n),o=a(4),i=a(16),c=a.n(i);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(){u=function(){return t};var t={},e=Object.prototype,a=e.hasOwnProperty,r=Object.defineProperty||function(t,e,a){t[e]=a.value},n="function"==typeof Symbol?Symbol:{},s=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,a){return t[e]=a}}function _(t,e,a,n){var s=e&&e.prototype instanceof h?e:h,o=Object.create(s.prototype),i=new k(n||[]);return r(o,"_invoke",{value:D(t,a,i)}),o}function p(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(t){return{type:"throw",arg:t}}}t.wrap=_;var v={};function h(){}function m(){}function d(){}var f={};c(f,s,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(L([])));g&&g!==e&&a.call(g,s)&&(f=g);var b=d.prototype=h.prototype=Object.create(f);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){var n;r(this,"_invoke",{value:function(r,s){function o(){return new e((function(n,o){!function r(n,s,o,i){var c=p(t[n],t,s);if("throw"!==c.type){var u=c.arg,_=u.value;return _&&"object"==l(_)&&a.call(_,"__await")?e.resolve(_.__await).then((function(t){r("next",t,o,i)}),(function(t){r("throw",t,o,i)})):e.resolve(_).then((function(t){u.value=t,o(u)}),(function(t){return r("throw",t,o,i)}))}i(c.arg)}(r,s,n,o)}))}return n=n?n.then(o,o):o()}})}function D(t,e,a){var r="suspendedStart";return function(n,s){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw s;return E()}for(a.method=n,a.arg=s;;){var o=a.delegate;if(o){var i=x(o,a);if(i){if(i===v)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var c=p(t,e,a);if("normal"===c.type){if(r=a.done?"completed":"suspendedYield",c.arg===v)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r="completed",a.method="throw",a.arg=c.arg)}}}function x(t,e){var a=e.method,r=t.iterator[a];if(void 0===r)return e.delegate=null,"throw"===a&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==a&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+a+"' method")),v;var n=p(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,v;var s=n.arg;return s?s.done?(e[t.resultName]=s.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function L(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:E}}function E(){return{value:void 0,done:!0}}return m.prototype=d,r(b,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:m,configurable:!0}),m.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(C.prototype),c(C.prototype,o,(function(){return this})),t.AsyncIterator=C,t.async=function(e,a,r,n,s){void 0===s&&(s=Promise);var o=new C(_(e,a,r,n),s);return t.isGeneratorFunction(a)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},w(b),c(b,i,"Generator"),c(b,s,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),a=[];for(var r in e)a.push(r);return a.reverse(),function t(){for(;a.length;){var r=a.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(a,r){return o.type="throw",o.arg=t,e.next=a,r&&(e.method="next",e.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var s=this.tryEntries[n],o=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var i=a.call(s,"catchLoc"),c=a.call(s,"finallyLoc");if(i&&c){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(i){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var s=n;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=t,o.arg=e,s?(this.method="next",this.next=s.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),P(a),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var r=a.completion;if("throw"===r.type){var n=r.arg;P(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:L(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),v}},t}function _(t,e,a,r,n,s,o){try{var i=t[s](o),c=i.value}catch(t){return void a(t)}i.done?e(c):Promise.resolve(c).then(r,n)}function p(t){return function(){var e=this,a=arguments;return new Promise((function(r,n){var s=t.apply(e,a);function o(t){_(s,r,n,o,i,"next",t)}function i(t){_(s,r,n,o,i,"throw",t)}o(void 0)}))}}var v={middleware:["auth","check-permissions"],metaInfo:function(){return{title:this.$t("purchases.list.view.page_title")}},data:function(){return{breadcrumbsCurrent:"purchases.list.view.breadcrumbs_current",breadcrumbs:[{name:"purchases.list.view.breadcrumbs_first",url:"home"},{name:"purchases.list.view.breadcrumbs_second",url:"purchases.index"},{name:"purchases.list.view.breadcrumbs_active",url:""}],allData:"",purchaseSubTotal:0,purchaseReturn:0,purchaseProducts:[],productPrefix:"",purchasePrefix:"",loading:!1,form:new r.a({isSendEmail:!1,isSendSMS:!1}),isDemoMode:window.config.isDemoMode}},computed:Object(o.b)({appInfo:"operations/appInfo"}),created:function(){this.getPurchase(),this.productPrefix=this.appInfo.productPrefix,this.purchasePrefix=this.appInfo.purchasePrefix,this.supplierPrefix=this.appInfo.supplierPrefix},methods:{getPurchase:function(){var t=this;return p(u().mark((function e(){var a,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,s.a.get(window.location.origin+"/api/purchases/"+t.$route.params.slug);case 3:a=e.sent,r=a.data,t.allData=r.data,t.purchaseProducts=t.allData.products,t.purchaseProducts.sort(t.sortProducts),t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()},sortProducts:function(t,e){return t.productCode<e.productCode?-1:t.productCode>e.productCode?1:0},generatePDF:function(){var t=document.getElementById("content-to-pdf"),e={margin:5,filename:"Purchase Invoice-"+this.$route.params.slug+".pdf",image:{type:"jpeg",quality:.98},pagebreak:{mode:"avoid-all",before:"#page-break"},html2canvas:{scale:2},jsPDF:{unit:"mm",format:"a4",orientation:"landscape"}};c()().from(t).set(e).save()},notify:function(){var t=this;return p(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isDemoMode){e.next=7;break}return t.loading=!0,e.next=4,t.form.post(window.location.origin+"/api/purchase/notify/"+t.$route.params.slug).then((function(){toast.fire({type:"success",title:t.$t("Notification sent successfully.")})})).catch((function(){toast.fire({type:"error",title:t.$t("common.error_msg")})}));case 4:t.loading=!1,e.next=8;break;case 7:toast.fire({type:"warning",title:t.$t("You are not allowed to do this in demo version.")});case 8:case"end":return e.stop()}}),e)})))()},printWindow:function(){window.print()}}},h=a(1),m=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("breadcrumbs",{attrs:{items:t.breadcrumbs,current:t.breadcrumbsCurrent}}),t._v(" "),e("div",{staticClass:"row no-print mb-2"},[e("div",{staticClass:"w-100 text-right float-right"},[t.allData?e("div",{staticClass:"btn-group"},[e("a",{staticClass:"btn btn-secondary",attrs:{href:"#"},on:{click:function(e){t.notify(t.form.isSendSMS=!0)}}},[e("i",{staticClass:"fas fa-sms"}),t._v(" "+t._s(t.$t("common.sms"))+"\n        ")]),t._v(" "),e("a",{staticClass:"btn btn-success",attrs:{href:"#"},on:{click:function(e){t.notify(t.form.isSendEmail=!0)}}},[e("i",{staticClass:"fas fa-paper-plane"}),t._v(" "+t._s(t.$t("email")))]),t._v(" "),e("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(e){return t.generatePDF()}}},[e("i",{staticClass:"fas fa-download"}),t._v(" "+t._s(t.$t("download"))+"\n        ")]),t._v(" "),e("a",{staticClass:"btn btn-secondary",attrs:{href:"#"},on:{click:function(e){return t.printWindow()}}},[e("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.$t("common.print"))+"\n        ")]),t._v(" "),t.$can("purchase-edit")?e("router-link",{staticClass:"btn btn-info",attrs:{to:{name:"purchases.edit",params:{slug:t.allData.slug}}}},[e("i",{staticClass:"fas fa-edit"}),t._v(" "+t._s(t.$t("common.edit"))+"\n        ")]):t._e(),t._v(" "),e("router-link",{staticClass:"btn btn-dark float-right",attrs:{to:{name:"purchases.index"}}},[e("i",{staticClass:"fas fa-long-arrow-alt-left"}),t._v(" "+t._s(t.$t("common.back"))+"\n        ")])],1):t._e()])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"invoice p-3 mb-3 w-100",attrs:{id:"content-to-pdf"}},[e("table-loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),t._v(" "),e("div",{staticClass:"row invoice-info"},[e("div",{staticClass:"col-sm-4 invoice-col"},[e("CompanyInfo")],1),t._v(" "),e("div",{staticClass:"col-sm-6 offset-sm-2 invoice-col float-right text-md-right"},[e("h5",[t._v(t._s(t.$t("common.supplier_details")))]),t._v(" "),t.allData.supplier?e("div",[e("strong",[t._v(t._s(t.$t("common.supplier_id"))+":")]),t._v("\n            "+t._s(t._f("withPrefix")(t.allData.supplier.supplierID,t.supplierPrefix))),e("br"),t._v(" "),e("strong",[t._v(t._s(t.$t("common.supplier_name"))+":")]),t._v("\n            "+t._s(t.allData.supplier.name)),e("br"),t._v(" "),t.allData.supplier.companyName?e("span",[e("strong",[t._v(t._s(t.$t("common.company_name"))+":")]),t._v("\n              "+t._s(t.allData.supplier.companyName)),e("br")]):t._e(),t._v(" "),t.allData.supplier.email?e("span",[e("strong",[t._v(t._s(t.$t("common.email"))+":")]),t._v("\n              "+t._s(t.allData.supplier.email)),e("br")]):t._e(),t._v(" "),t.allData.supplier.phoneNumber?e("span",[e("strong",[t._v(t._s(t.$t("common.contact_number"))+":")]),t._v("\n              "+t._s(t.allData.supplier.phoneNumber)),e("br")]):t._e(),t._v(" "),t.allData.supplier.address?e("span",[e("strong",[t._v(t._s(t.$t("common.address"))+":")]),t._v("\n              "+t._s(t.allData.supplier.address)),e("br")]):t._e()]):t._e()])]),t._v(" "),e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"table-responsive table-custom"},[e("table",{staticClass:"table table-bordered"},[e("thead",[e("tr",[t.allData.purchaseNo?e("th",[t._v("\n                    "+t._s(t.$t("purchases.list.common.purchase_no"))+"\n                  ")]):t._e(),t._v(" "),t.allData.poReference?e("th",[t._v("\n                    "+t._s(t.$t("purchases.list.common.po_reference"))+"\n                  ")]):t._e(),t._v(" "),t.allData.paymentTerms?e("th",[t._v("\n                    "+t._s(t.$t("purchases.list.common.payment_terms"))+"\n                  ")]):t._e(),t._v(" "),t.allData.poDate?e("th",[t._v("\n                    "+t._s(t.$t("purchases.list.common.po_date"))+"\n                  ")]):t._e(),t._v(" "),t.allData.purchaseDate?e("th",[t._v("\n                    "+t._s(t.$t("purchases.list.common.purchase_date"))+"\n                  ")]):t._e(),t._v(" "),t.allData.note?e("th",[t._v(t._s(t.$t("common.note")))]):t._e(),t._v(" "),e("th",[t._v(t._s(t.$t("common.status")))]),t._v(" "),e("th",{staticClass:"text-right"},[t._v(t._s(t.$t("common.created_by")))])])]),t._v(" "),e("tbody",[e("tr",[t.allData.purchaseNo?e("td",[t._v("\n                    "+t._s(t._f("withPrefix")(t.allData.purchaseNo,t.purchasePrefix))+"\n                  ")]):t._e(),t._v(" "),t.allData.poReference?e("td",[t._v("\n                    "+t._s(t.allData.poReference)+"\n                  ")]):t._e(),t._v(" "),t.allData.paymentTerms?e("td",[t._v("\n                    "+t._s(t.allData.paymentTerms)+"\n                  ")]):t._e(),t._v(" "),t.allData.poDate?e("td",[t._v("\n                    "+t._s(t._f("moment")(t.allData.poDate,"Do MMM, YYYY"))+"\n                  ")]):t._e(),t._v(" "),t.allData.purchaseDate?e("td",[t._v("\n                    "+t._s(t._f("moment")(t.allData.purchaseDate,"Do MMM, YYYY"))+"\n                  ")]):t._e(),t._v(" "),t.allData.note?e("td",[t._v(t._s(t.allData.note))]):t._e(),t._v(" "),e("td",[1===t.allData.status?e("span",{staticClass:"badge bg-success"},[t._v(t._s(t.$t("common.active")))]):e("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.$t("common.in_active")))])]),t._v(" "),e("td",{staticClass:"text-right"},[t._v("\n                    "+t._s(t.allData.createdBy)+"\n                  ")])])])])])])]),t._v(" "),e("div",{staticClass:"row position-relative mt-4 mb-4"},[e("div",{staticClass:"col-12"},[e("strong",{staticClass:"mb-2 d-block"},[t._v(t._s(t.$t("purchases.list.common.purchase_products"))+":")]),t._v(" "),e("div",{staticClass:"table-custom table-responsive"},[e("table",{staticClass:"table table-sm text-center"},[e("thead",[e("tr",[e("th",[t._v(t._s(t.$t("common.s_no")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.code")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.product_name")))]),t._v(" "),e("th",[t._v(t._s(t.$t("purchases.list.common.purchased_qty")))]),t._v(" "),t.allData.purchaseReturn?e("th",[t._v("\n                    "+t._s(t.$t("purchases.list.common.returned_qty"))+"\n                  ")]):t._e(),t._v(" "),e("th",[t._v(t._s(t.$t("common.unit_price")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.unit_tax")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.unit_cost")))]),t._v(" "),e("th",{class:t.allData.purchaseReturn?"":"text-right"},[t._v("\n                    "+t._s(t.$t("common.total"))+"\n                  ")]),t._v(" "),t.allData.purchaseReturn?e("th",{class:t.allData.purchaseReturn?"text-right":""},[t._v("\n                    "+t._s(t.$t("common.total_return"))+"\n                  ")]):t._e()])]),t._v(" "),t.purchaseProducts?e("tbody",[t._l(t.purchaseProducts,(function(a,r){return e("tr",{key:r},[e("td",[t._v(t._s(++r))]),t._v(" "),e("td",[t._v("\n                    "+t._s(t._f("withPrefix")(a.productCode,t.productPrefix))+"\n                  ")]),t._v(" "),e("td",[t._v(t._s(a.productName))]),t._v(" "),e("td",[t._v(t._s(a.quantity)+" "+t._s(a.productUnit))]),t._v(" "),t.allData.purchaseReturn?e("td",[t._v("\n                    "+t._s(a.returnQty>0?a.returnQty:0)+"\n                    "+t._s(a.productUnit)+"\n                  ")]):t._e(),t._v(" "),e("td",[t._v(t._s(t._f("withCurrency")(a.purchasePrice)))]),t._v(" "),e("td",[t._v(t._s(t._f("withCurrency")(a.taxAmount)))]),t._v(" "),e("td",[t._v(t._s(t._f("withCurrency")(a.unitCost)))]),t._v(" "),e("td",{class:t.allData.purchaseReturn?"":"text-right"},[t._v("\n                    "+t._s(t._f("withCurrency")(a.unitCost*a.quantity))+"\n                  ")]),t._v(" "),t.allData.purchaseReturn?e("td",{class:t.allData.purchaseReturn?"text-right":""},[t._v("\n                    "+t._s(t._f("withCurrency")(a.unitCost*a.returnQty))+"\n                  ")]):t._e()])})),t._v(" "),e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:t.allData.purchaseReturn?8:7}},[e("strong",[t._v(t._s(t.$t("common.subtotal")))])]),t._v(" "),t.purchaseProducts?e("td",{class:t.allData.purchaseReturn?"":"text-right"},[e("strong",[t._v(t._s(t._f("withCurrency")(t.allData.subTotal)))])]):t._e(),t._v(" "),t.allData.purchaseReturn?e("td",{class:t.allData.purchaseReturn?"text-right":""},[e("strong",[t._v(t._s(t._f("withCurrency")(t.allData.purchaseReturn.totalReturn)))])]):t._e()])],2):t._e()])])])]),t._v(" "),e("div",{staticClass:"row mt-4",attrs:{id:"page-break"}},[e("div",{staticClass:"col-lg-12 col-xl-8"},[e("strong",{staticClass:"mb-2 d-block"},[t._v(t._s(t.$t("common.payment_history"))+":")]),t._v(" "),t.allData.payments&&t.allData.payments.length>0?e("div",{staticClass:"table-custom table-responsive"},[e("table",{staticClass:"table table-sm"},[e("thead",[e("tr",[e("th",[t._v(t._s(t.$t("common.s_no")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.payment_date")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.paid_amount")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.account")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.cheque_no")))]),t._v(" "),e("th",[t._v(t._s(t.$t("common.receipt_no")))]),t._v(" "),e("th",{staticClass:"text-right"},[t._v(t._s(t.$t("common.status")))])])]),t._v(" "),e("tbody",[t._l(t.allData.payments,(function(a,r){return e("tr",{key:r},[e("td",[t._v(t._s(++r))]),t._v(" "),e("td",[a.date?e("span",[t._v(t._s(a.date))]):t._e()]),t._v(" "),e("td",[a.amount?e("span",[t._v(t._s(t._f("withCurrency")(a.amount)))]):t._e()]),t._v(" "),e("td",[a.purchase_payment_transaction&&a.purchase_payment_transaction.cashbook_account?e("span",[t._v(t._s(a.purchase_payment_transaction.cashbook_account.bank_name)+"\n                      ("+t._s(a.purchase_payment_transaction.cashbook_account.account_number)+")")]):t._e()]),t._v(" "),a.purchase_payment_transaction?e("td",[t._v("\n                    "+t._s(a.purchase_payment_transaction.cheque_no)+"\n                  ")]):t._e(),t._v(" "),a.purchase_payment_transaction?e("td",[t._v("\n                    "+t._s(a.purchase_payment_transaction.receipt_no)+"\n                  ")]):t._e(),t._v(" "),e("td",{staticClass:"text-right"},[1==a.status?e("span",{staticClass:"badge bg-success"},[t._v(t._s(t.$t("common.active")))]):e("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.$t("common.in_active")))])])])})),t._v(" "),e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"2"}},[e("strong",[t._v(t._s(t.$t("common.total_paid")))])]),t._v(" "),e("td",{attrs:{colspan:"5"}},[e("strong",[t._v(t._s(t._f("withCurrency")(t.allData.totalPaid)))])])])],2)])]):e("div",{staticClass:"no-print callout callout-danger mt-4 w-100"},[e("h5",[t._v(t._s(t.$t("common.empty_payment")))]),t._v(" "),e("p",[t._v(t._s(t.$t("common.empty_payment_msg")))])])]),t._v(" "),e("div",{staticClass:"col-lg-12 col-xl-4 text-lg-right mt-4 pt-2"},[t.allData.supplier?e("div",{staticClass:"table-responsive table-custom table-border-y-0"},[e("table",{staticClass:"table"},[e("tbody",[e("tr",{staticClass:"bg-sub-light text-bold"},[e("th",[t._v(t._s(t.$t("common.subtotal"))+":")]),t._v(" "),e("td",[t._v(t._s(t._f("withCurrency")(t.allData.subTotal)))])]),t._v(" "),t.allData.purchaseReturn?e("tr",[e("th",[t._v(t._s(t.$t("common.return_cost"))+":")]),t._v(" "),e("td",[e("span",{staticClass:"minus-sign"},[t._v("-")]),t._v("\n                    "+t._s(t._f("withCurrency")(t.allData.purchaseReturn.totalReturn))+"\n                  ")])]):t._e(),t._v(" "),e("tr",[e("th",[t._v(t._s(t.$t("common.discount"))+":")]),t._v(" "),e("td",[e("span",{staticClass:"minus-sign"},[t._v("-")]),t._v("\n                    "+t._s(t._f("withCurrency")(t.allData.totalDiscount))+"\n                  ")])]),t._v(" "),e("tr",[e("th",[t._v(t._s(t.$t("common.transport"))+":")]),t._v(" "),e("td",[e("span",{staticClass:"plus-sign"},[t._v("+")]),t._v("\n                    "+t._s(t._f("withCurrency")(t.allData.transport))+"\n                  ")])]),t._v(" "),e("tr",[e("th",[t._v("\n                    "+t._s(t.$t("common.tax"))+"\n                    "),e("span",[t._v("("+t._s(t.allData.taxType.rate)+"%):")])]),t._v(" "),e("td",[e("span",{staticClass:"plus-sign"},[t._v("+")]),t._v("\n                    "+t._s(t._f("withCurrency")(t.allData.tax))+"\n                  ")])]),t._v(" "),e("tr",{staticClass:"bg-indigo-light"},[e("th",[t._v(t._s(t.$t("common.total"))+":")]),t._v(" "),e("td",[e("span",{staticClass:"equal-sign"},[t._v("=")]),t._v("\n                    "+t._s(t._f("withCurrency")(t.allData.purchaseTotal))+"\n                  ")])]),t._v(" "),e("tr",[e("th",[t._v(t._s(t.$t("common.total_paid"))+":")]),t._v(" "),e("td",[e("span",{staticClass:"minus-sign"},[t._v("-")]),t._v("\n                    "+t._s(t._f("withCurrency")(t.allData.totalPaid))+"\n                  ")])]),t._v(" "),e("tr",{staticClass:"bg-red-light"},[e("th",[t._v(t._s(t.$t("common.due"))+":")]),t._v(" "),e("td",[t._v(t._s(t._f("withCurrency")(t.allData.due)))])]),t._v(" "),t.allData.accountReceivable?e("tr",{staticClass:"bg-green-light"},[e("th",[t._v(t._s(t.$t("common.account_receivable"))+":")]),t._v(" "),e("td",[t._v(t._s(t._f("withCurrency")(t.allData.accountReceivable)))])]):t._e()])])]):t._e()])])],1)])],1)}),[],!1,null,null,null);e.default=m.exports}}]);
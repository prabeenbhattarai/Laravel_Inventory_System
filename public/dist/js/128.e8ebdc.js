/*! For license information please see 128.e8ebdc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{506:function(t,e,r){"use strict";r.r(e);var o=r(4),a=r(5),i=r(3),n=r.n(i);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",n=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function m(t,e,r,a){var i=e&&e.prototype instanceof p?e:p,n=Object.create(i.prototype),s=new E(a||[]);return o(n,"_invoke",{value:C(t,r,s)}),n}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=m;var f={};function p(){}function v(){}function h(){}var g={};u(g,i,(function(){return this}));var y=Object.getPrototypeOf,_=y&&y(y(N([])));_&&_!==e&&r.call(_,i)&&(g=_);var b=h.prototype=p.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var a;o(this,"_invoke",{value:function(o,i){function n(){return new e((function(a,n){!function o(a,i,n,l){var c=d(t[a],t,i);if("throw"!==c.type){var u=c.arg,m=u.value;return m&&"object"==s(m)&&r.call(m,"__await")?e.resolve(m.__await).then((function(t){o("next",t,n,l)}),(function(t){o("throw",t,n,l)})):e.resolve(m).then((function(t){u.value=t,n(u)}),(function(t){return o("throw",t,n,l)}))}l(c.arg)}(o,i,a,n)}))}return a=a?a.then(n,n):n()}})}function C(t,e,r){var o="suspendedStart";return function(a,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===a)throw i;return T()}for(r.method=a,r.arg=i;;){var n=r.delegate;if(n){var s=P(n,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var l=d(t,e,r);if("normal"===l.type){if(o=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o="completed",r.method="throw",r.arg=l.arg)}}}function P(t,e){var r=e.method,o=t.iterator[r];if(void 0===o)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,P(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=d(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:T}}function T(){return{value:void 0,done:!0}}return v.prototype=h,o(b,"constructor",{value:h,configurable:!0}),o(h,"constructor",{value:v,configurable:!0}),v.displayName=u(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(w.prototype),u(w.prototype,n,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,o,a,i){void 0===i&&(i=Promise);var n=new w(m(e,r,o,a),i);return t.isGeneratorFunction(r)?n:n.next().then((function(t){return t.done?t.value:n.next()}))},x(b),u(b,c,"Generator"),u(b,i,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var o in e)r.push(o);return r.reverse(),function t(){for(;r.length;){var o=r.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},t.values=N,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return n.type="throw",n.arg=t,e.next=r,o&&(e.method="next",e.arg=void 0),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],n=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var n=i?i.completion:{};return n.type=t,n.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(n)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var a=o.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function c(t,e,r,o,a,i,n){try{var s=t[i](n),l=s.value}catch(t){return void r(t)}s.done?e(l):Promise.resolve(l).then(o,a)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function n(t){c(i,o,a,n,s,"next",t)}function s(t){c(i,o,a,n,s,"throw",t)}n(void 0)}))}}function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function d(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==s(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===s(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f={middleware:["auth","check-permissions"],metaInfo:function(){return{title:this.$t("products.list.edit.page_title")}},data:function(){return{breadcrumbsCurrent:"products.list.edit.breadcrumbs_current",breadcrumbs:[{name:"products.list.edit.breadcrumbs_first",url:"home"},{name:"products.list.edit.breadcrumbs_second",url:"products.index"},{name:"products.list.edit.breadcrumbs_active",url:""}],url:null,form:new a.a({itemName:"",itemCode:"",itemModel:"",barcodeSymbology:"CODE128",subCategory:"",brand:"",itemUnit:"",productTax:"",taxType:"Exclusive",regularPrice:"",discount:"",sellingPrice:"",note:"",alertQuantity:1,status:1,image:""}),options:[],prefix:"",units:[],brands:[],taxes:[]}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(o.b)("operations",["items","appInfo"])),created:function(){this.getSubCategories(),this.getUnits(),this.getProduct(),this.getBrands(),this.getTaxes(),this.prefix=this.appInfo.productPrefix},methods:{getSubCategories:function(){var t=this;return u(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("operations/allData",{path:"/api/all-product-sub-categories"});case 2:case"end":return e.stop()}}),e)})))()},getBrands:function(){var t=this;return u(l().mark((function e(){var r,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.a.get(window.location.origin+"/api/all-brands");case 2:r=e.sent,o=r.data,t.brands=o.data;case 5:case"end":return e.stop()}}),e)})))()},getUnits:function(){var t=this;return u(l().mark((function e(){var r,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.a.get(window.location.origin+"/api/all-units");case 2:r=e.sent,o=r.data,t.units=o.data;case 5:case"end":return e.stop()}}),e)})))()},getTaxes:function(){var t=this;return u(l().mark((function e(){var r,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.a.get(window.location.origin+"/api/all-vat-rates");case 2:r=e.sent,o=r.data,t.taxes=o.data;case 5:case"end":return e.stop()}}),e)})))()},getProduct:function(){var t=this;return u(l().mark((function e(){var r,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.a.get(window.location.origin+"/api/products/"+t.$route.params.slug);case 2:r=e.sent,o=r.data,t.form.itemName=o.data.name,t.form.itemCode=o.data.code,t.form.itemModel=o.data.itemModel,t.form.barcodeSymbology=o.data.symbology,t.form.brand=o.data.itemBrand,t.form.productTax=o.data.itemTax,t.form.taxType=o.data.taxType,t.form.subCategory=o.data.subCategory,t.form.itemUnit=o.data.itemUnit,t.form.regularPrice=o.data.regularPrice,t.form.sellingPrice=o.data.sellingPrice,t.form.discount=o.data.discount,t.form.note=o.data.note,t.form.status=o.data.status,t.form.alertQuantity=o.data.alertQty,t.url=o.data.image;case 20:case"end":return e.stop()}}),e)})))()},calculatePrice:function(){if(this.form.sellingPrice&&this.form.productTax&&this.form.taxType){var t=0;this.form.discount&&this.form.discount>0&&(t=this.form.discount/100*this.form.regularPrice);var e=this.form.regularPrice-t,r=0,o=0;return this.form.productTax.rate>0&&(r=this.form.productTax.rate/100),o="Exclusive"==this.form.taxType?e*r:e-e/(1+r),void("Exclusive"==this.form.taxType?this.form.sellingPrice=this.form.regularPrice-t+o:this.form.sellingPrice=(this.form.regularPrice-t)/(1+r)+o)}return this.form.sellingPrice=this.form.regularPrice},onFileChange:function(t){var e=this,r=t.target.files[0],o=new FileReader;r.size<2111775&&("image/jpeg"===r.type||"image/png"===r.type||"image/gif"===r.type)?(o.onloadend=function(t){e.form.image=o.result},o.readAsDataURL(r),this.url=URL.createObjectURL(r)):Swal.fire("error!","Please select a valid thumbnail with size less than 2 MB","error")},updateProduct:function(){var t=this;return u(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.form.patch(window.location.origin+"/api/products/"+t.$route.params.slug).then((function(){toast.fire({type:"success",title:"Product updated successfully 👍"}),t.$router.push({name:"products.index"})})).catch((function(){toast.fire({type:"error",title:"Opps...something is wrong 😔"})}));case 2:case"end":return e.stop()}}),e)})))()}}},p=r(1),v=Object(p.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("breadcrumbs",{attrs:{items:t.breadcrumbs,current:t.breadcrumbsCurrent}}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[t.form.itemName?e("h3",{staticClass:"card-title"},[t._v("\n            "+t._s(t.$t("products.list.edit.form_title"))+"\n          ")]):t._e(),t._v(" "),e("router-link",{staticClass:"btn btn-dark float-right",attrs:{to:{name:"products.index"}}},[e("i",{staticClass:"fas fa-long-arrow-alt-left"}),t._v(" "+t._s(t.$t("common.back"))+"\n          ")])],1),t._v(" "),e("form",{attrs:{role:"form"},on:{submit:function(e){return e.preventDefault(),t.updateProduct.apply(null,arguments)},keydown:function(e){return t.form.onKeydown(e)}}},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"form-group col-md-6 col-xl-6"},[e("label",{attrs:{for:"itemName"}},[t._v(t._s(t.$t("common.item_name"))+"\n                  "),e("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.itemName,expression:"form.itemName"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("itemName")},attrs:{id:"itemName",type:"text",name:"itemName",placeholder:t.$t("common.item_name_placeholder")},domProps:{value:t.form.itemName},on:{input:function(e){e.target.composing||t.$set(t.form,"itemName",e.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"itemName"}})],1),t._v(" "),e("div",{staticClass:"form-group col-md-6 col-xl-3"},[e("label",{attrs:{for:"itemModel"}},[t._v(t._s(t.$t("common.item_model")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.itemModel,expression:"form.itemModel"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("itemModel")},attrs:{id:"itemModel",type:"text",name:"itemModel",placeholder:t.$t("common.item_model_placeholder")},domProps:{value:t.form.itemModel},on:{input:function(e){e.target.composing||t.$set(t.form,"itemModel",e.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"itemModel"}})],1),t._v(" "),e("div",{staticClass:"form-group col-md-6 col-xl-3"},[e("div",{staticClass:"input-group"},[e("label",{staticClass:"col-md-12",attrs:{for:"itemCode"}},[t._v(t._s(t.$t("common.item_code"))+"\n                    "),e("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),e("div",{staticClass:"input-group-prepend"},[t.prefix?e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v(t._s(t.prefix))]):t._e()]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.itemCode,expression:"form.itemCode"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("itemCode")},attrs:{type:"text",name:"itemCode",placeholder:t.$t("common.item_code_placeholder"),"aria-label":"itemCode","aria-describedby":"basic-addon1"},domProps:{value:t.form.itemCode},on:{input:function(e){e.target.composing||t.$set(t.form,"itemCode",e.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"itemCode"}})],1)]),t._v(" "),e("div",{staticClass:"form-group col-md-6 col-xl-4"},[e("label",{attrs:{for:"barcodeSymbology"}},[t._v(t._s(t.$t("products.list.common.barcode_symbology"))+"\n                  "),e("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.barcodeSymbology,expression:"form.barcodeSymbology"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("barcodeSymbology")},attrs:{id:"barcodeSymbology"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"barcodeSymbology",e.target.multiple?r:r[0])}}},[e("option",{attrs:{value:"CODE128"}},[t._v("CODE128")]),t._v(" "),e("option",{attrs:{value:"CODE39"}},[t._v("CODE39")]),t._v(" "),e("option",{attrs:{value:"EAN8"}},[t._v("EAN8")]),t._v(" "),e("option",{attrs:{value:"EAN13"}},[t._v("EAN13")]),t._v(" "),e("option",{attrs:{value:"UPC"}},[t._v("UPC")])]),t._v(" "),e("has-error",{attrs:{form:t.form,field:"barcodeSymbology"}})],1),t._v(" "),t.items?e("div",{staticClass:"form-group col-md-6 col-xl-4"},[e("label",{attrs:{for:"subCategory"}},[t._v(t._s(t.$t("common.sub_category"))+"\n                  "),e("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),e("v-select",{class:{"is-invalid":t.form.errors.has("subCategory")},attrs:{options:t.items,label:"name",name:"subCategory",placeholder:t.$t("common.category_name_placeholder")},model:{value:t.form.subCategory,callback:function(e){t.$set(t.form,"subCategory",e)},expression:"form.subCategory"}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"subCategory"}})],1):t._e(),t._v(" "),t.brands?e("div",{staticClass:"form-group col-md-6 col-xl-4"},[e("label",{attrs:{for:"brand"}},[t._v(t._s(t.$t("common.brand")))]),t._v(" "),e("v-select",{class:{"is-invalid":t.form.errors.has("brand")},attrs:{options:t.brands,label:"name",name:"brand",placeholder:t.$t("common.brand_placeholder")},model:{value:t.form.brand,callback:function(e){t.$set(t.form,"brand",e)},expression:"form.brand"}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"brand"}})],1):t._e(),t._v(" "),t.units?e("div",{staticClass:"form-group col-md-6 col-xl-4"},[e("label",{attrs:{for:"itemUnit"}},[t._v(t._s(t.$t("common.unit"))+"\n                  "),e("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),e("v-select",{class:{"is-invalid":t.form.errors.has("itemUnit")},attrs:{options:t.units,label:"name",name:"itemUnit",placeholder:t.$t("common.unit_placeholder")},model:{value:t.form.itemUnit,callback:function(e){t.$set(t.form,"itemUnit",e)},expression:"form.itemUnit"}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"itemUnit"}})],1):t._e(),t._v(" "),t.taxes?e("div",{staticClass:"form-group col-md-6 col-xl-4"},[e("label",{attrs:{for:"productTax"}},[t._v(t._s(t.$t("products.list.common.product_tax"))+"\n                  "),e("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),e("v-select",{class:{"is-invalid":t.form.errors.has("productTax")},attrs:{options:t.taxes,label:"name",name:"productTax",placeholder:t.$t("products.list.common.tax_placeholder")},on:{input:t.calculatePrice},model:{value:t.form.productTax,callback:function(e){t.$set(t.form,"productTax",e)},expression:"form.productTax"}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"productTax"}})],1):t._e(),t._v(" "),e("div",{staticClass:"form-group col-md-6 col-xl-4"},[e("label",{attrs:{for:"taxType"}},[t._v(t._s(t.$t("products.list.common.tax_type"))+"\n                  "),e("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.taxType,expression:"form.taxType"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("taxType")},attrs:{id:"taxType"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"taxType",e.target.multiple?r:r[0])},t.calculatePrice]}},[e("option",{attrs:{value:"Exclusive"}},[t._v("\n                    "+t._s(t.$t("products.list.common.exclusive"))+"\n                  ")]),t._v(" "),e("option",{attrs:{value:"Inclusive"}},[t._v("\n                    "+t._s(t.$t("products.list.common.inclusive"))+"\n                  ")])]),t._v(" "),e("has-error",{attrs:{form:t.form,field:"taxType"}})],1),t._v(" "),e("div",{staticClass:"form-group col-md-6 col-xl-4"},[e("label",{attrs:{for:"regularPrice"}},[t._v(t._s(t.$t("products.list.common.regular_price"))+"\n                  "),e("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.regularPrice,expression:"form.regularPrice"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("regularPrice")},attrs:{id:"regularPrice",type:"number",step:"any",min:"0",name:"regularPrice",placeholder:t.$t("products.list.common.regular_price_placeholder")},domProps:{value:t.form.regularPrice},on:{change:t.calculatePrice,keyup:t.calculatePrice,input:function(e){e.target.composing||t.$set(t.form,"regularPrice",e.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"regularPrice"}})],1),t._v(" "),e("div",{staticClass:"form-group col-md-6 col-xl-4"},[e("div",{staticClass:"input-group"},[e("label",{staticClass:"col-md-12",attrs:{for:"discount"}},[t._v(t._s(t.$t("common.discount")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.discount,expression:"form.discount"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("discount")},attrs:{type:"number",min:"0",max:"100",name:"discount",placeholder:t.$t("common.discount_placeholder"),"aria-label":"discount","aria-describedby":"basic-addon1"},domProps:{value:t.form.discount},on:{change:t.calculatePrice,keyup:t.calculatePrice,input:function(e){e.target.composing||t.$set(t.form,"discount",e.target.value)}}}),t._v(" "),t._m(0),t._v(" "),e("has-error",{attrs:{form:t.form,field:"discount"}})],1)]),t._v(" "),e("div",{staticClass:"form-group col-md-6 col-xl-4"},[e("label",{attrs:{for:"sellingPrice"}},[t._v(t._s(t.$t("products.list.common.selling_price")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.sellingPrice,expression:"form.sellingPrice"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("sellingPrice")},attrs:{id:"sellingPrice",type:"number",readonly:"",name:"sellingPrice",placeholder:t.$t("products.list.common.selling_price_placeholder")},domProps:{value:t.form.sellingPrice},on:{input:function(e){e.target.composing||t.$set(t.form,"sellingPrice",e.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"sellingPrice"}})],1),t._v(" "),e("div",{staticClass:"form-group col-md-12"},[e("label",{attrs:{for:"note"}},[t._v(t._s(t.$t("common.note")))]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.note,expression:"form.note"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("note")},attrs:{id:"note",type:"text",name:"companyName",placeholder:t.$t("common.note_placeholder")},domProps:{value:t.form.note},on:{input:function(e){e.target.composing||t.$set(t.form,"note",e.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"note"}})],1),t._v(" "),e("div",{staticClass:"form-group col-md-6 col-xl-4"},[e("label",{attrs:{for:"alertQuantity"}},[t._v(t._s(t.$t("products.list.common.alert_quantity")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.alertQuantity,expression:"form.alertQuantity"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("alertQuantity")},attrs:{id:"alertQuantity",type:"number",min:"0",max:"1000",name:"alertQuantity",placeholder:t.$t("products.list.common.alert_quantity_placeholder")},domProps:{value:t.form.alertQuantity},on:{input:function(e){e.target.composing||t.$set(t.form,"alertQuantity",e.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"alertQuantity"}})],1),t._v(" "),e("div",{staticClass:"form-group col-md-6 col-xl-4"},[e("label",{attrs:{for:"status"}},[t._v(t._s(t.$t("common.status")))]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.status,expression:"form.status"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("status")},attrs:{id:"status"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"status",e.target.multiple?r:r[0])}}},[e("option",{attrs:{value:"1"}},[t._v("\n                    "+t._s(t.$t("common.active"))+"\n                  ")]),t._v(" "),e("option",{attrs:{value:"0"}},[t._v("\n                    "+t._s(t.$t("common.in_active"))+"\n                  ")])]),t._v(" "),e("has-error",{attrs:{form:t.form,field:"status"}})],1),t._v(" "),e("div",{staticClass:"form-group col-md-4"},[e("label",{attrs:{for:"image"}},[t._v(t._s(t.$t("common.image")))]),t._v(" "),e("div",{staticClass:"custom-file"},[e("input",{staticClass:"custom-file-input",class:{"is-invalid":t.form.errors.has("image")},attrs:{id:"image",type:"file",name:"image"},on:{change:t.onFileChange}}),t._v(" "),e("label",{staticClass:"custom-file-label",attrs:{for:"image"}},[t._v(t._s(t.$t("common.choose_file")))])]),t._v(" "),e("has-error",{attrs:{form:t.form,field:"image"}}),t._v(" "),e("div",{staticClass:"bg-light mt-4 w-25"},[t.url?e("img",{staticClass:"img-fluid",attrs:{src:t.url,alt:t.$t("common.image_alt")}}):t._e()])],1)])]),t._v(" "),e("div",{staticClass:"card-footer"},[e("v-button",{staticClass:"btn btn-primary",attrs:{loading:t.form.busy}},[e("i",{staticClass:"fas fa-edit"}),t._v(" "+t._s(t.$t("common.save_changes"))+"\n            ")]),t._v(" "),e("button",{staticClass:"btn btn-secondary float-right",attrs:{type:"reset"},on:{click:function(e){return t.form.reset()}}},[e("i",{staticClass:"fas fa-power-off"}),t._v(" "+t._s(t.$t("common.reset"))+"\n            ")])],1)])])])])],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[this._v("%")])])}],!1,null,null,null);e.default=v.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac2e7ef6"],{"015c":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("PageHeader",{staticClass:"d-print-none",attrs:{title:t.title,items:t.items}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"table-responsive"},[a("div",{staticClass:"row"},t._l(t.jumlahdataall,(function(t){return a("div",{key:t.title,staticClass:"col-md-6 col-xl-3"},[a("Stat",{attrs:{title:t.title,value:t.value,icon:t.icon,color:t.color}})],1)})),0),a("br"),a("div",{staticClass:"row"},t._l(t.jumlahdataallstatus,(function(t){return a("div",{key:t.title,staticClass:"col-md-6 col-xl-3"},[a("Stat",{attrs:{title:t.title,value:t.value,icon:t.icon,color:t.color}})],1)})),0)])])])])])])])],1)},n=[],s=(a("ac4d"),a("8a81"),a("ac6a"),a("96cf"),a("cb0c")),i=a("444f"),c=a("2579"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body p-0"},[a("div",{staticClass:"media p-3"},[a("div",{staticClass:"media-body"},[a("span",{staticClass:"text-muted text-uppercase font-size-12 font-weight-bold"},[t._v(t._s(t.title))]),a("h2",{staticClass:"mb-0"},[t._v(t._s(t.value))])]),a("div",{staticClass:"align-self-center"},[a("span",[a("feather",{class:"icon-lg align-middle icon-dual-"+t.color,attrs:{type:""+t.icon}})],1)])])])])},l=[],u=(a("c5f6"),{props:{title:{type:String,default:""},value:{type:Number,default:0},icon:{type:String,default:""},color:{type:String,default:"#5369f8"}}}),d=u,f=a("2877"),p=Object(f["a"])(d,o,l,!1,null,null,null),v=p.exports,h=a("bc3a"),m=a.n(h),b=a("13fb"),g={page:{title:"Dashboard"},components:{Layout:i["a"],PageHeader:c["a"],Stat:v},data:function(){return{api:b["a"].Host(),title:"Dashboard",jumlahdataall:[],jumlahdataallstatus:[]}},mounted:function(){console.log("alamat",b["a"].Host()),this.Getdatajumlahdataall()},methods:{Getdatajumlahdataall:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,r,n,s,i,c,o,l,u,d,f,p,v;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.get(this.api+"/dashboard/jumlahdataall",b["a"].authHeader());case 3:for(e=t.sent,a=!0,r=!1,n=void 0,t.prev=7,s=e.data.Data[Symbol.iterator]();!(a=(i=s.next()).done);a=!0)c=i.value,c.title="Tahun - "+c.title,c.icon="file-text",c.color="primary";t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](7),r=!0,n=t.t0;case 15:t.prev=15,t.prev=16,a||null==s.return||s.return();case 18:if(t.prev=18,!r){t.next=21;break}throw n;case 21:return t.finish(18);case 22:return t.finish(15);case 23:return this.jumlahdataall=e.data.Data,t.next=26,m.a.get(this.api+"/dashboard/jumlahdataallstatus",b["a"].authHeader());case 26:for(o=t.sent,l=!0,u=!1,d=void 0,t.prev=30,f=o.data.Data[Symbol.iterator]();!(l=(p=f.next()).done);l=!0)v=p.value,v.title="Tahun - "+v.title+" - "+v.status,v.icon="file-text",v.color="danger";t.next=38;break;case 34:t.prev=34,t.t1=t["catch"](30),u=!0,d=t.t1;case 38:t.prev=38,t.prev=39,l||null==f.return||f.return();case 41:if(t.prev=41,!u){t.next=44;break}throw d;case 44:return t.finish(41);case 45:return t.finish(38);case 46:this.jumlahdataallstatus=o.data.Data,t.next=52;break;case 49:t.prev=49,t.t2=t["catch"](0),console.error(t.t2);case 52:case"end":return t.stop()}}),t,this,[[0,49],[7,11,15,23],[16,,18,22],[30,34,38,46],[39,,41,45]])})));return function(){return t.apply(this,arguments)}}()}},_=g,y=Object(f["a"])(_,r,n,!1,null,null,null);e["default"]=y.exports},2579:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row page-title"},[a("div",{staticClass:"col-md-12"},[a("b-breadcrumb",{staticClass:"float-right mt-1",attrs:{items:t.items}}),a("h4",{staticClass:"mb-1 mt-0"},[t._v(t._s(t.title))])],1)])},n=[],s=(a("96cf"),a("cb0c")),i={components:{},mounted:function(){this.Getceklogin()},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},methods:{Getceklogin:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=localStorage.getItem("jwt"),console.log("level",e),null==e&&(document.location="/#/");case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}},c=i,o=a("2877"),l=Object(o["a"])(c,r,n,!1,null,null,null);e["a"]=l.exports},"5dbc":function(t,e,a){var r=a("d3f4"),n=a("8b97").set;t.exports=function(t,e,a){var s,i=e.constructor;return i!==a&&"function"==typeof i&&(s=i.prototype)!==a.prototype&&r(s)&&n&&n(t,s),t}},"8b97":function(t,e,a){var r=a("d3f4"),n=a("cb7c"),s=function(t,e){if(n(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,a){return s(t,a),e?t.__proto__=a:r(t,a),t}}({},!1):void 0),check:s}},aa77:function(t,e,a){var r=a("5ca1"),n=a("be13"),s=a("79e5"),i=a("fdef"),c="["+i+"]",o="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),d=function(t,e,a){var n={},c=s((function(){return!!i[t]()||o[t]()!=o})),l=n[t]=c?e(f):i[t];a&&(n[a]=l),r(r.P+r.F*c,"String",n)},f=d.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=d},c5f6:function(t,e,a){"use strict";var r=a("7726"),n=a("69a8"),s=a("2d95"),i=a("5dbc"),c=a("6a99"),o=a("79e5"),l=a("9093").f,u=a("11e9").f,d=a("86cc").f,f=a("aa77").trim,p="Number",v=r[p],h=v,m=v.prototype,b=s(a("2aeb")(m))==p,g="trim"in String.prototype,_=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():f(e,3);var a,r,n,s=e.charCodeAt(0);if(43===s||45===s){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+e}for(var i,o=e.slice(2),l=0,u=o.length;l<u;l++)if(i=o.charCodeAt(l),i<48||i>n)return NaN;return parseInt(o,r)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof v&&(b?o((function(){m.valueOf.call(a)})):s(a)!=p)?i(new h(_(e)),a,v):_(e)};for(var y,x=a("9e1e")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;x.length>C;C++)n(h,y=x[C])&&!n(v,y)&&d(v,y,u(h,y));v.prototype=m,m.constructor=v,a("2aba")(r,p,v)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-ac2e7ef6.1642eaa1.js.map
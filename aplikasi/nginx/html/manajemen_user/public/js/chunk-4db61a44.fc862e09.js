(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4db61a44"],{2579:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row page-title"},[e("div",{staticClass:"col-md-12"},[e("b-breadcrumb",{staticClass:"float-right mt-1",attrs:{items:t.items}}),e("h4",{staticClass:"mb-1 mt-0"},[t._v(t._s(t.title))])],1)])},i=[],r={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}}},n=r,o=e("2877"),c=Object(o["a"])(n,s,i,!1,null,null,null);a["a"]=c.exports},9894:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("PageHeader",{staticClass:"d-print-none",attrs:{title:t.title,items:t.items}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"table-responsive"},[e("b-alert",{attrs:{variant:"danger",dismissible:""},model:{value:t.alert,callback:function(a){t.alert=a},expression:"alert"}},[t._v(t._s(t.message))]),e("br"),t._v("  \n\t\t\t\t\t\t\t\t"),e("br"),e("div",{staticClass:"table-responsive"},[e("b-form-group",{attrs:{"label-cols-sm":"10","label-cols-lg":"2",label:"Kode","label-for":"input-horizontal"}},[e("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Kode"},model:{value:t.data.f_kode,callback:function(a){t.$set(t.data,"f_kode",a)},expression:"data.f_kode"}})],1),e("b-form-group",{attrs:{"label-cols-sm":"10","label-cols-lg":"2",label:"Nama","label-for":"input-horizontal"}},[e("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Nama"},model:{value:t.data.f_nama,callback:function(a){t.$set(t.data,"f_nama",a)},expression:"data.f_nama"}})],1),e("b-form-group",{attrs:{"label-cols-sm":"10","label-cols-lg":"2","label-for":"input-horizontal"}},[t.aksiEdit?e("b-button",{attrs:{variant:"success"},on:{click:function(a){return t.onSave(t.data.f_otoritas_website_id)}}},[t._v("Simpan Data")]):t._e(),t._v("\n\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t"),t.aksiEdit?t._e():e("b-button",{attrs:{variant:"danger"},on:{click:function(a){return t.openEdit(t.data.f_otoritas_website_id)}}},[t._v("Edit Data")])],1)],1)],1)])])])])])])],1)},i=[],r=(e("96cf"),e("cb0c")),n=(e("551c"),e("c2a4"),e("444f")),o=e("2579"),c=e("bc3a"),l=e.n(c),d=e("13fb"),u={page:{title:"Otoritas Website"},components:{Layout:n["a"],PageHeader:o["a"]},data:function(){return{title:"Otoritas Website "+this.$route.params.action,api:d["a"].Host(),message:"",data:[],options:"",aksiEdit:!1,aksiSave:!1,alert:!1}},mounted:function(){console.log("alamat",d["a"].Host()),this.Getdata(),"tambah"===this.$route.params.action&&(this.aksiEdit=!0,this.aksiSave=!0),"edit"===this.$route.params.action&&(this.aksiEdit=!0,this.aksiSave=!0),"detail"===this.$route.params.action&&(this.aksiEdit=!1,this.aksiSave=!1)},computed:{},methods:{Getdata:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var a,e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,a=this.$route.params.action,"detail"!==a&&"edit"!==a){t.next=7;break}return t.next=5,l.a.get(this.api+"/otoritaswebsite/edit/"+this.$route.params.id,d["a"].authHeader());case 5:e=t.sent,this.data=e.data;case 7:t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),openEdit:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:document.location="/otoritaswebsiteaction/edit/"+a;case 1:case"end":return t.stop()}}),t,this)})));return function(a){return t.apply(this,arguments)}}(),validation:function(){return this.data.f_nama?this.data.f_kode?{code:200,message:""}:{code:500,message:"Kode Data ini harus diisi"}:{code:500,message:"Nama Data ini harus diisi"}},onSave:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var a,e,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=this.validation(),200!==a.code){t.next=19;break}if(e=null,s=this.$route.params.action,i=new URLSearchParams,i.append("f_kode",this.data.f_kode),i.append("f_nama",this.data.f_nama),"tambah"!==s){t.next=13;break}return t.next=10,l.a.post(this.api+"/otoritaswebsite/add",i,d["a"].authHeader());case 10:e=t.sent,t.next=16;break;case 13:return t.next=15,l.a.put(this.api+"/otoritaswebsite/edit/"+this.$route.params.id,i,d["a"].authHeader());case 15:e=t.sent;case 16:200===e.data.code?(this.alert=!0,this.message=e.data.message,document.location="/otoritaswebsiteaction/detail/"+e.data.data.f_otoritas_website_id,this.aksiEdit=!this.aksiEdit,this.aksiSave=!1):(this.alert=!0,this.message=e.data.message),t.next=21;break;case 19:this.alert=!0,this.message=a.message;case 21:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}},p=u,m=e("2877"),h=Object(m["a"])(p,s,i,!1,null,null,null);a["default"]=h.exports}}]);
//# sourceMappingURL=chunk-4db61a44.fc862e09.js.map
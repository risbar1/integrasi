(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4db96ac6"],{2579:function(a,t,e){"use strict";var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row page-title"},[e("div",{staticClass:"col-md-12"},[e("b-breadcrumb",{staticClass:"float-right mt-1",attrs:{items:a.items}}),e("h4",{staticClass:"mb-1 mt-0"},[a._v(a._s(a.title))])],1)])},i=[],n=(e("96cf"),e("cb0c")),s={components:{},mounted:function(){this.Getceklogin()},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},methods:{Getceklogin:function(){var a=Object(n["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t=localStorage.getItem("jwt"),console.log("level",t),null==t&&(document.location="/#/");case 3:case"end":return a.stop()}}),a,this)})));return function(){return a.apply(this,arguments)}}()}},l=s,o=e("2877"),c=Object(o["a"])(l,r,i,!1,null,null,null);t["a"]=c.exports},"4b7b":function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("Layout",[e("PageHeader",{staticClass:"d-print-none",attrs:{title:a.title,items:a.items}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"table-responsive"},[e("b-alert",{attrs:{variant:"success",dismissible:""},model:{value:a.alert,callback:function(t){a.alert=t},expression:"alert"}},[a._v(a._s(a.message))]),e("br"),a._v("  \n\t\t\t\t\t\t\t\t"),e("br"),e("div",{staticClass:"table-responsive"},[e("b-form-group",{attrs:{"label-cols-sm":"10","label-cols-lg":"2",label:"Tahun","label-for":"input-horizontal"}},[e("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Tahun"},model:{value:a.data.f_tahun,callback:function(t){a.$set(a.data,"f_tahun",t)},expression:"data.f_tahun"}})],1),e("b-form-group",{attrs:{"label-cols-sm":"10","label-cols-lg":"2",label:"Nama","label-for":"input-horizontal"}},[e("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Nama"},model:{value:a.data.f_nama,callback:function(t){a.$set(a.data,"f_nama",t)},expression:"data.f_nama"}})],1),e("b-form-group",{attrs:{"label-cols-sm":"10","label-cols-lg":"2",label:"Label 1","label-for":"input-horizontal"}},[e("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Label 1"},model:{value:a.data.f_tambahan_1_label,callback:function(t){a.$set(a.data,"f_tambahan_1_label",t)},expression:"data.f_tambahan_1_label"}})],1),e("b-form-group",{attrs:{"label-cols-sm":"10","label-cols-lg":"2",label:"Tambahan 1","label-for":"input-horizontal"}},[e("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Tambahan 1"},model:{value:a.data.f_tambahan_1_value,callback:function(t){a.$set(a.data,"f_tambahan_1_value",t)},expression:"data.f_tambahan_1_value"}})],1),e("b-form-group",{attrs:{"label-cols-sm":"10","label-cols-lg":"2",label:"Label 2","label-for":"input-horizontal"}},[e("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Label 2"},model:{value:a.data.f_tambahan_2_label,callback:function(t){a.$set(a.data,"f_tambahan_2_label",t)},expression:"data.f_tambahan_2_label"}})],1),e("b-form-group",{attrs:{"label-cols-sm":"10","label-cols-lg":"2",label:"Tambahan 2","label-for":"input-horizontal"}},[e("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Tambahan 2"},model:{value:a.data.f_tambahan_2_value,callback:function(t){a.$set(a.data,"f_tambahan_2_value",t)},expression:"data.f_tambahan_2_value"}})],1),e("b-form-group",{attrs:{"label-cols-sm":"10","label-cols-lg":"2",label:"Label 3","label-for":"input-horizontal"}},[e("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Label 3"},model:{value:a.data.f_tambahan_3_label,callback:function(t){a.$set(a.data,"f_tambahan_3_label",t)},expression:"data.f_tambahan_3_label"}})],1),e("b-form-group",{attrs:{"label-cols-sm":"10","label-cols-lg":"2",label:"Tambahan 3","label-for":"input-horizontal"}},[e("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Tambahan 3"},model:{value:a.data.f_tambahan_3_value,callback:function(t){a.$set(a.data,"f_tambahan_3_value",t)},expression:"data.f_tambahan_3_value"}})],1),e("b-form-group",{attrs:{"label-cols-sm":"10","label-cols-lg":"2",label:"Nomor","label-for":"input-horizontal"}},[e("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Nomor"},model:{value:a.data.f_nomor,callback:function(t){a.$set(a.data,"f_nomor",t)},expression:"data.f_nomor"}})],1),e("b-form-group",{attrs:{"label-cols-sm":"10","label-cols-lg":"2",label:"Pencarian","label-for":"input-horizontal"}},[e("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Pencarian"},model:{value:a.data.f_pencarian,callback:function(t){a.$set(a.data,"f_pencarian",t)},expression:"data.f_pencarian"}})],1),e("b-form-group",{attrs:{"label-cols-sm":"10","label-cols-lg":"2",label:"Status","label-for":"input-horizontal"}},[e("b-form-select",{model:{value:a.data.modelstatus,callback:function(t){a.$set(a.data,"modelstatus",t)},expression:"data.modelstatus"}},a._l(a.datastatus,(function(t,r){return e("option",{domProps:{value:t}},[a._v(a._s(t.f_nama))])})),0)],1),e("b-form-group",{attrs:{"label-cols-sm":"10","label-cols-lg":"2",label:"Jenis Sertifikat","label-for":"input-horizontal"}},[e("b-form-select",{model:{value:a.data.f_k_f_sertifikat_id,callback:function(t){a.$set(a.data,"f_k_f_sertifikat_id",t)},expression:"data.f_k_f_sertifikat_id"}},a._l(a.datajenissertifikat,(function(t,r){return e("option",{domProps:{value:t.f_kode}},[a._v(a._s(t.f_nama)+" - "+a._s(t.f_jenis))])})),0)],1),e("b-form-group",{attrs:{"label-cols-sm":"10","label-cols-lg":"2","label-for":"input-horizontal"}},[a.aksiEdit?e("b-button",{attrs:{variant:"success"},on:{click:function(t){return a.onSave(a.data.f_sertifikat_id)}}},[a._v("Simpan Data")]):a._e(),a._v("\n\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t"),a.aksiEdit?a._e():e("b-button",{attrs:{variant:"danger"},on:{click:function(t){return a.openEdit(a.data.f_sertifikat_id)}}},[a._v("Edit Data")])],1)],1)],1)])])])])])])],1)},i=[],n=(e("ac4d"),e("8a81"),e("ac6a"),e("96cf"),e("cb0c")),s=e("444f"),l=e("2579"),o=e("bc3a"),c=e.n(o),u=e("13fb"),d={page:{title:"Sertifikat"},components:{Layout:s["a"],PageHeader:l["a"]},data:function(){return{title:"Sertifikat "+this.$route.params.action,api:u["a"].Host(),message:"",data:[],options:"",aksiEdit:!1,aksiSave:!1,datastatus:[{f_kode:"LULUS",f_nama:"LULUS"},{f_kode:"TIDAK LULUS",f_nama:"TIDAK LULUS"}],modelstatus:"",datajenissertifikat:[],f_k_f_sertifikat_id:"",alert:!1}},mounted:function(){console.log("alamat",u["a"].Host()),this.Getdata(),this.Getfilter(),"tambah"===this.$route.params.action&&(this.aksiEdit=!0,this.aksiSave=!0),"edit"===this.$route.params.action&&(this.aksiEdit=!0,this.aksiSave=!0),"detail"===this.$route.params.action&&(this.aksiEdit=!1,this.aksiSave=!1)},methods:{Getdata:function(){var a=Object(n["a"])(regeneratorRuntime.mark((function a(){var t,e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,t=this.$route.params.action,"detail"!==t&&"edit"!==t){a.next=7;break}return a.next=5,c.a.get(this.api+"/sertifikat/"+this.$route.params.id,u["a"].authHeader());case 5:e=a.sent,this.data=e.data.Data[0];case 7:a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),console.error(a.t0);case 12:case"end":return a.stop()}}),a,this,[[0,9]])})));return function(){return a.apply(this,arguments)}}(),Getfilter:function(){var a=Object(n["a"])(regeneratorRuntime.mark((function a(){var t,e,r,i,n,s,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c.a.get(this.api+"/sertifikatref",u["a"].authHeader());case 3:for(t=a.sent,this.datajenissertifikat=t.data.Data,e=!0,r=!1,i=void 0,a.prev=8,n=t.data.Data[Symbol.iterator]();!(e=(s=n.next()).done);e=!0)l=s.value,l.f_kode=l.f_sertifikat_id,l.f_nama=l.f_tahun;a.next=16;break;case 12:a.prev=12,a.t0=a["catch"](8),r=!0,i=a.t0;case 16:a.prev=16,a.prev=17,e||null==n.return||n.return();case 19:if(a.prev=19,!r){a.next=22;break}throw i;case 22:return a.finish(19);case 23:return a.finish(16);case 24:a.next=29;break;case 26:a.prev=26,a.t1=a["catch"](0),console.error(a.t1);case 29:case"end":return a.stop()}}),a,this,[[0,26],[8,12,16,24],[17,,19,23]])})));return function(){return a.apply(this,arguments)}}(),openEdit:function(){var a=Object(n["a"])(regeneratorRuntime.mark((function a(t){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:document.location="/sertifikataction/edit/"+t;case 1:case"end":return a.stop()}}),a,this)})));return function(t){return a.apply(this,arguments)}}(),validation:function(){return this.data.f_nama?this.data.f_pencarian?{code:200,message:""}:{code:500,message:"Pencarian Data ini harus diisi"}:{code:500,message:"Nama Data ini harus diisi"}},onSave:function(){var a=Object(n["a"])(regeneratorRuntime.mark((function a(){var t,e,r,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t=this.validation(),200!==t.code){a.next=17;break}if(e=null,r=this.$route.params.action,i={f_nama:this.data.f_nama,f_tambahan_1_value:this.data.f_tambahan_1_value,f_tambahan_2_value:this.data.f_tambahan_2_value,f_tambahan_3_value:this.data.f_tambahan_3_value,f_tahun:this.data.f_tahun,f_nomor:this.data.f_nomor,f_tambahan_1_label:this.data.f_tambahan_1_label,f_tambahan_2_label:this.data.f_tambahan_2_label,f_tambahan_3_label:this.data.f_tambahan_3_label,f_pencarian:this.data.f_pencarian,f_k_f_sertifikat_id:this.data.f_k_f_sertifikat_id,f_status:this.data.modelstatus.f_kode},"tambah"!==r){a.next=11;break}return a.next=8,c.a.post(this.api+"/sertifikat",i,u["a"].authHeader());case 8:e=a.sent,a.next=14;break;case 11:return a.next=13,c.a.put(this.api+"/sertifikat/"+this.$route.params.id,i,u["a"].authHeader());case 13:e=a.sent;case 14:0===e.data.Error_code?(this.alert=!0,this.message=e.data.Error_desc,document.location="/sertifikataction/detail/"+e.data.Data[0].f_sertifikat_id,this.Getdata(),this.aksiEdit=!this.aksiEdit,this.aksiSave=!1):(this.alert=!0,this.message=e.data.Error_desc),a.next=19;break;case 17:this.alert=!0,this.message=t.message;case 19:case"end":return a.stop()}}),a,this)})));return function(){return a.apply(this,arguments)}}()}},f=d,b=e("2877"),_=Object(b["a"])(f,r,i,!1,null,null,null);t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-4db96ac6-legacy.7a3eb60f.js.map
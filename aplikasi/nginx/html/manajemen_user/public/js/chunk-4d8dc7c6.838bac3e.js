(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d8dc7c6"],{2579:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row page-title"},[e("div",{staticClass:"col-md-12"},[e("b-breadcrumb",{staticClass:"float-right mt-1",attrs:{items:t.items}}),e("h4",{staticClass:"mb-1 mt-0"},[t._v(t._s(t.title))])],1)])},r=[],i={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}}},o=i,n=e("2877"),d=Object(n["a"])(o,s,r,!1,null,null,null);a["a"]=d.exports},db61:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("PageHeader",{staticClass:"d-print-none",attrs:{title:t.title,items:t.items}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"table-responsive"},[e("b-alert",{attrs:{variant:"danger",dismissible:""},model:{value:t.alert,callback:function(a){t.alert=a},expression:"alert"}},[t._v(t._s(t.message))]),e("br"),t._v("  \n\t\t\t\t\t\t\t\t"),e("br"),e("div",{staticClass:"table-responsive"},[e("b-form-group",{attrs:{"label-cols-sm":"10","label-cols-lg":"2",label:"Otoritas","label-for":"input-horizontal"}},[e("b-form-select",{model:{value:t.data.modelotoritas,callback:function(a){t.$set(t.data,"modelotoritas",a)},expression:"data.modelotoritas"}},t._l(t.dataotoritas,(function(a,s){return e("option",{domProps:{value:a}},[t._v(t._s(a.f_otoritas)+" - "+t._s(a.fn_otoritas_website))])})),0)],1),e("b-form-group",{attrs:{"label-cols-sm":"10","label-cols-lg":"2",label:"Username","label-for":"input-horizontal"}},[e("b-form-select",{model:{value:t.data.modelusername,callback:function(a){t.$set(t.data,"modelusername",a)},expression:"data.modelusername"}},t._l(t.datausername,(function(a,s){return e("option",{domProps:{value:a}},[t._v(t._s(a.f_username)+" - "+t._s(a.f_nama))])})),0)],1),e("b-form-group",{attrs:{"label-cols-sm":"10","label-cols-lg":"2","label-for":"input-horizontal"}},[t.aksiEdit?e("b-button",{attrs:{variant:"success"},on:{click:function(a){return t.onSave(t.data.f_password_id,t.data.f_otoritas_id)}}},[t._v("Simpan Data")]):t._e(),t._v("\n\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t"),t.aksiEdit?t._e():e("b-button",{attrs:{variant:"danger"},on:{click:function(a){return t.openEdit(t.data.f_password_id,t.data.f_otoritas_id)}}},[t._v("Edit Data")])],1),e("br"),e("table",{staticClass:"table mb-0"},[e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("No")]),e("th",{attrs:{scope:"col"}},[t._v("Nama Jurusan")]),e("th",{attrs:{scope:"col"}},[t._v("Kode Progdi")]),e("th",{attrs:{scope:"col"}},[t._v("Nama Progdi")]),e("th",{attrs:{scope:"col"}},[t._v("Action\n\t\t\t\t\t\t\t\t\t\t\t"),e("b-form-select",t._l(t.dataakses,(function(a,s){return e("option",{domProps:{value:a.f_kode},on:{click:function(e){return t.DataUpdateall(t.data.f_password_id,a.f_kode)}}},[t._v(t._s(a.f_nama))])})),0)],1)])]),e("tbody",t._l(t.dataprogdi,(function(a,s){return e("tr",{key:a.f_progdi_id},[e("th",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),e("td",[t._v(t._s(a.fn_jurusan))]),e("td",[t._v(t._s(a.f_kodeprogdi))]),e("td",[t._v(t._s(a.f_namaprogdi))]),e("td",[e("b-form-select",{model:{value:a.f_statusaktif,callback:function(e){t.$set(a,"f_statusaktif",e)},expression:"tampil.f_statusaktif"}},t._l(t.dataakses,(function(s,r){return e("option",{domProps:{value:s.f_kode},on:{click:function(e){return t.DataUpdate(a.f_progdi_id,t.data.f_password_id,s.f_kode)}}},[t._v(t._s(s.f_nama))])})),0)],1)])})),0)])],1)],1)])])])])])])],1)},r=[],i=(e("ac4d"),e("8a81"),e("ac6a"),e("96cf"),e("cb0c")),o=(e("c2a4"),e("444f")),n=e("2579"),d=e("bc3a"),c=e.n(d),u=e("13fb"),l={page:{title:"Otoritas Username"},components:{Layout:o["a"],PageHeader:n["a"]},data:function(){return{title:"Otoritas Username "+this.$route.params.action,api:u["a"].Host(),message:"",data:[],dataprogdi:[],options:"",aksiEdit:!1,aksiSave:!1,alert:!1,dataotoritas:[],modelotoritas:"",datausername:[],modelusername:"",dataakses:[{f_kode:"1",f_nama:"Tidak"},{f_kode:"0",f_nama:"Aktif"}]}},mounted:function(){console.log("alamat",u["a"].Host()),this.Getdata(),this.Getfilter(),"tambah"===this.$route.params.action&&(this.aksiEdit=!0,this.aksiSave=!0),"edit"===this.$route.params.action&&(this.aksiEdit=!0,this.aksiSave=!0),"detail"===this.$route.params.action&&(this.aksiEdit=!1,this.aksiSave=!1)},computed:{},methods:{Getdata:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var a,e,s,r,i,o,n,d,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,a=this.$route.params.action,"detail"!==a&&"edit"!==a){t.next=38;break}return t.next=5,c.a.get(this.api+"/otoritasusername/edit?f_password_id="+this.$route.params.id1+"&f_otoritas_id="+this.$route.params.id2,u["a"].authHeader());case 5:return e=t.sent,this.data=e.data,t.next=9,c.a.get(this.api+"/pegawailokasikerja/indexprogdi",u["a"].authHeader());case 9:s=t.sent,r=!0,i=!1,o=void 0,t.prev=13,n=s.data[Symbol.iterator]();case 15:if(r=(d=n.next()).done){t.next=22;break}return l=d.value,t.next=19,c.a.get(this.api+"/pegawailokasikerja/index?f_progdi_id="+l.f_progdi_id+"&f_password_id="+this.$route.params.id1,u["a"].authHeader());case 19:r=!0,t.next=15;break;case 22:t.next=28;break;case 24:t.prev=24,t.t0=t["catch"](13),i=!0,o=t.t0;case 28:t.prev=28,t.prev=29,r||null==n.return||n.return();case 31:if(t.prev=31,!i){t.next=34;break}throw o;case 34:return t.finish(31);case 35:return t.finish(28);case 36:this.dataprogdi=s.data,this.data["f_password"]="";case 38:t.next=43;break;case 40:t.prev=40,t.t1=t["catch"](0),console.error(t.t1);case 43:case"end":return t.stop()}}),t,this,[[0,40],[13,24,28,36],[29,,31,35]])})));return function(){return t.apply(this,arguments)}}(),openEdit:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(a,e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:document.location="/otoritasusernameaction/edit/"+a+"/"+e;case 1:case"end":return t.stop()}}),t,this)})));return function(a,e){return t.apply(this,arguments)}}(),validation:function(){return this.data.modelotoritas&&this.data.modelusername?{code:200,message:""}:{code:500,message:"Otoritas Data ini harus diisi"}},Getfilter:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var a,e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get(this.api+"/otoritas/index",u["a"].authHeader());case 3:return a=t.sent,this.dataotoritas=a.data,t.next=7,c.a.get(this.api+"/username/index",u["a"].authHeader());case 7:e=t.sent,this.datausername=e.data,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.error(t.t0);case 14:case"end":return t.stop()}}),t,this,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),DataUpdate:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(a,e,s){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.get(this.api+"/pegawailokasikerja/editupdate?f_progdi_id="+a+"&f_password_id="+e+"&status="+s,u["a"].authHeader());case 2:this.alert=!0,this.message="Berhasil Update";case 4:case"end":return t.stop()}}),t,this)})));return function(a,e,s){return t.apply(this,arguments)}}(),DataUpdateall:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(a,e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.get(this.api+"/pegawailokasikerja/editupdate?f_password_id="+a+"&status="+e,u["a"].authHeader());case 2:this.alert=!0,this.message="Berhasil Update";case 4:case"end":return t.stop()}}),t,this)})));return function(a,e){return t.apply(this,arguments)}}(),onSave:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var a,e,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=this.validation(),200!==a.code){t.next=21;break}if(e=null,s=this.$route.params.action,r=new URLSearchParams,r.append("f_otoritas_id",this.data.modelotoritas.f_otoritas_id),r.append("f_password_id",this.data.modelusername.f_password_id),r.append("f_otoritas_website",this.data.modelotoritas.f_otoritas_website),r.append("fn_otoritas_website",this.data.modelotoritas.fn_otoritas_website),"tambah"!==s){t.next=15;break}return t.next=12,c.a.post(this.api+"/otoritasusername/add",r,u["a"].authHeader());case 12:e=t.sent,t.next=18;break;case 15:return t.next=17,c.a.put(this.api+"/otoritasusername/edit?f_otoritas_id="+this.$route.params.id2+"&f_password_id="+this.$route.params.id1,r,u["a"].authHeader());case 17:e=t.sent;case 18:200===e.data.code?(this.alert=!0,this.message=e.data.message,document.location="/otoritasusernameaction/detail/"+e.data.data.f_password_id+"/"+e.data.data.f_otoritas_id,this.aksiEdit=!this.aksiEdit,this.aksiSave=!1):(this.alert=!0,this.message=e.data.message),t.next=23;break;case 21:this.alert=!0,this.message=a.message;case 23:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}},p=l,m=e("2877"),f=Object(m["a"])(p,s,r,!1,null,null,null);a["default"]=f.exports}}]);
//# sourceMappingURL=chunk-4d8dc7c6.838bac3e.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d90faf4"],{2579:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row page-title"},[a("div",{staticClass:"col-md-12"},[a("b-breadcrumb",{staticClass:"float-right mt-1",attrs:{items:t.items}}),a("h4",{staticClass:"mb-1 mt-0"},[t._v(t._s(t.title))])],1)])},n=[],i={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}}},o=i,s=a("2877"),u=Object(s["a"])(o,r,n,!1,null,null,null);e["a"]=u.exports},b31b:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("PageHeader",{staticClass:"d-print-none",attrs:{title:t.title,items:t.items}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"table-responsive"},[a("b-form-group",{attrs:{"label-cols-sm":"10","label-cols-lg":"2",label:"Nama Website","label-for":"input-horizontal"}},[a("b-form-select",{on:{click:t.pilihmodelotoritaswebsite},model:{value:t.modelotoritaswebsite,callback:function(e){t.modelotoritaswebsite=e},expression:"modelotoritaswebsite"}},t._l(t.dataotoritaswebsite,(function(e,r){return a("option",{domProps:{value:e}},[t._v(t._s(e.f_nama))])})),0)],1),a("b-form-group",{attrs:{"label-cols-sm":"10","label-cols-lg":"2",label:"Otoritas","label-for":"input-horizontal"}},[a("b-form-select",{on:{click:t.pilihmodelotoritas},model:{value:t.modelotoritas,callback:function(e){t.modelotoritas=e},expression:"modelotoritas"}},t._l(t.dataotoritas,(function(e,r){return a("option",{domProps:{value:e}},[t._v(t._s(e.f_otoritas)+" - "+t._s(e.fn_otoritas_website))])})),0)],1),a("br"),a("br"),t._v("  \n\t\t\t\t\t\t\t\t"),a("b-button",{attrs:{variant:"dark",to:"/menuaction/tambah"}},[t._v("Tambah Data")]),a("br"),a("b-alert",{attrs:{variant:"danger",dismissible:""},model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[t._v(t._s(t.message))]),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table mb-0"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("No")]),a("th",{attrs:{scope:"col"}},[t._v("Main Menu")]),a("th",{attrs:{scope:"col"}},[t._v("Sub Menu")]),a("th",{attrs:{scope:"col"}},[t._v("Kode")]),a("th",{attrs:{scope:"col"}},[t._v("Nama")]),a("th",{attrs:{scope:"col"}},[t._v("Link")]),a("th",{attrs:{scope:"col"}},[t._v("Nama Website")]),a("th",{attrs:{scope:"col"}},[t._v("Action")]),a("th",{attrs:{scope:"col"}},[t._v("LIHAT\n\t\t\t\t\t\t\t\t\t\t\t"),a("b-form-select",t._l(t.dataakses,(function(e,r){return a("option",{domProps:{value:e.f_kode},on:{click:function(a){return t.DataLihatall(t.modelotoritas.f_otoritas_id,e.f_kode)}}},[t._v(t._s(e.f_nama))])})),0)],1),a("th",{attrs:{scope:"col"}},[t._v("TAMBAH\n\t\t\t\t\t\t\t\t\t\t\t"),a("b-form-select",t._l(t.dataakses,(function(e,r){return a("option",{domProps:{value:e.f_kode},on:{click:function(a){return t.DataTambahall(t.modelotoritas.f_otoritas_id,e.f_kode)}}},[t._v(t._s(e.f_nama))])})),0)],1),a("th",{attrs:{scope:"col"}},[t._v("UPDATE\n\t\t\t\t\t\t\t\t\t\t\t"),a("b-form-select",t._l(t.dataakses,(function(e,r){return a("option",{domProps:{value:e.f_kode},on:{click:function(a){return t.DataUpdateall(t.modelotoritas.f_otoritas_id,e.f_kode)}}},[t._v(t._s(e.f_nama))])})),0)],1),a("th",{attrs:{scope:"col"}},[t._v("DELETE\n\t\t\t\t\t\t\t\t\t\t\t"),a("b-form-select",t._l(t.dataakses,(function(e,r){return a("option",{domProps:{value:e.f_kode},on:{click:function(a){return t.DataDeleteall(t.modelotoritas.f_otoritas_id,e.f_kode)}}},[t._v(t._s(e.f_nama))])})),0)],1)])]),a("tbody",t._l(t.data,(function(e,r){return a("tr",{key:e.f_menu_id},[a("th",{attrs:{scope:"row"}},[t._v(t._s(r+1))]),a("td",[t._v(t._s(e.f_main))]),a("td",[t._v(t._s(e.f_sub))]),a("td",[t._v(t._s(e.f_kode))]),a("td",[t._v(t._s(e.f_nama))]),a("td",[t._v(t._s(e.f_link))]),a("td",[t._v(t._s(e.fn_otoritas_website))]),a("td",[a("b-button",{attrs:{variant:"warning"},on:{click:function(a){return t.openEdit(e.f_menu_id)}}},[t._v("Edit Data")]),t._v("\n\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t"),a("b-button",{attrs:{variant:"danger"},on:{click:function(a){return t.openRemove(e.f_menu_id)}}},[t._v("Delete Data")])],1),a("td",[a("b-form-select",{model:{value:e.f_lihat,callback:function(a){t.$set(e,"f_lihat",a)},expression:"tampil.f_lihat"}},t._l(t.dataakses,(function(r,n){return a("option",{domProps:{value:r.f_kode},on:{click:function(a){return t.DataLihat(e.f_menu_id,t.modelotoritas.f_otoritas_id,r.f_kode)}}},[t._v(t._s(r.f_nama))])})),0)],1),a("td",[a("b-form-select",{model:{value:e.f_tambah,callback:function(a){t.$set(e,"f_tambah",a)},expression:"tampil.f_tambah"}},t._l(t.dataakses,(function(r,n){return a("option",{domProps:{value:r.f_kode},on:{click:function(a){return t.DataTambah(e.f_menu_id,t.modelotoritas.f_otoritas_id,r.f_kode)}}},[t._v(t._s(r.f_nama))])})),0)],1),a("td",[a("b-form-select",{model:{value:e.f_update,callback:function(a){t.$set(e,"f_update",a)},expression:"tampil.f_update"}},t._l(t.dataakses,(function(r,n){return a("option",{domProps:{value:r.f_kode},on:{click:function(a){return t.DataUpdate(e.f_menu_id,t.modelotoritas.f_otoritas_id,r.f_kode)}}},[t._v(t._s(r.f_nama))])})),0)],1),a("td",[a("b-form-select",{model:{value:e.f_delete,callback:function(a){t.$set(e,"f_delete",a)},expression:"tampil.f_delete"}},t._l(t.dataakses,(function(r,n){return a("option",{domProps:{value:r.f_kode},on:{click:function(a){return t.DataDelete(e.f_menu_id,t.modelotoritas.f_otoritas_id,r.f_kode)}}},[t._v(t._s(r.f_nama))])})),0)],1)])})),0)])])],1)])])])])])])],1)},n=[],i=(a("7514"),a("ac4d"),a("8a81"),a("ac6a"),a("96cf"),a("cb0c")),o=(a("c2a4"),a("444f")),s=a("2579"),u=a("bc3a"),c=a.n(u),l=a("13fb"),d={page:{title:"Menu"},components:{Layout:o["a"],PageHeader:s["a"]},data:function(){return{title:"Menu",api:l["a"].Host(),message:"",data:[],options:"",alert:!1,dataotoritaswebsite:[],modelotoritaswebsite:"",dataotoritas:[],modelotoritas:"",f_lihat:[],f_tambah:[],f_update:[],f_delete:[],dataakses:[{f_kode:"1",f_nama:"Tidak"},{f_kode:"0",f_nama:"Aktif"}],modelakseslihat:""}},mounted:function(){console.log("alamat",l["a"].Host()),this.Getdata(),this.Getfilter()},computed:{pilihmodelotoritaswebsite:function(){return this.Getdata(this.modelotoritaswebsite)},pilihmodelotoritas:function(){return this.Getdata(this.modelotoritaswebsite,this.modelotoritas)}},methods:{Getdata:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,a){var r,n,i,o,s,u,d,f,m;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,r=e?e.f_kode:"",n=a?a.f_otoritas_id:"",!this.modelotoritas){t.next=34;break}return t.next=6,c.a.get(this.api+"/menu/index?otoritaswebsite="+r+"&otoritas="+n+"&otoritas_id="+this.modelotoritas.f_otoritas_id,l["a"].authHeader());case 6:i=t.sent,this.data=i.data,o=!0,s=!1,u=void 0,t.prev=11,d=i.data[Symbol.iterator]();case 13:if(o=(f=d.next()).done){t.next=20;break}return m=f.value,t.next=17,c.a.get(this.api+"/menuotoritas/index?menu_id="+m.f_menu_id+"&otoritas_id="+this.modelotoritas.f_otoritas_id,l["a"].authHeader());case 17:o=!0,t.next=13;break;case 20:t.next=26;break;case 22:t.prev=22,t.t0=t["catch"](11),s=!0,u=t.t0;case 26:t.prev=26,t.prev=27,o||null==d.return||d.return();case 29:if(t.prev=29,!s){t.next=32;break}throw u;case 32:return t.finish(29);case 33:return t.finish(26);case 34:t.next=39;break;case 36:t.prev=36,t.t1=t["catch"](0),console.error(t.t1);case 39:case"end":return t.stop()}}),t,this,[[0,36],[11,22,26,34],[27,,29,33]])})));return function(e,a){return t.apply(this,arguments)}}(),openEdit:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:document.location="/menuaction/edit/"+e;case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),DataLihat:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,a,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.get(this.api+"/menuotoritas/editlihat?f_otoritas_id="+a+"&f_menu_id="+e+"&status="+r,l["a"].authHeader());case 2:this.alert=!0,this.message="Berhasil Update";case 4:case"end":return t.stop()}}),t,this)})));return function(e,a,r){return t.apply(this,arguments)}}(),DataTambah:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,a,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.get(this.api+"/menuotoritas/edittambah?f_otoritas_id="+a+"&f_menu_id="+e+"&status="+r,l["a"].authHeader());case 2:this.alert=!0,this.message="Berhasil Update";case 4:case"end":return t.stop()}}),t,this)})));return function(e,a,r){return t.apply(this,arguments)}}(),DataUpdate:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,a,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.get(this.api+"/menuotoritas/editupdate?f_otoritas_id="+a+"&f_menu_id="+e+"&status="+r,l["a"].authHeader());case 2:this.alert=!0,this.message="Berhasil Update";case 4:case"end":return t.stop()}}),t,this)})));return function(e,a,r){return t.apply(this,arguments)}}(),DataDelete:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,a,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.get(this.api+"/menuotoritas/editdelete?f_otoritas_id="+a+"&f_menu_id="+e+"&status="+r,l["a"].authHeader());case 2:this.alert=!0,this.message="Berhasil Update";case 4:case"end":return t.stop()}}),t,this)})));return function(e,a,r){return t.apply(this,arguments)}}(),DataLihatall:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.get(this.api+"/menuotoritas/editlihat?f_otoritas_id="+e+"&status="+a,l["a"].authHeader());case 2:this.alert=!0,this.message="Berhasil Update";case 4:case"end":return t.stop()}}),t,this)})));return function(e,a){return t.apply(this,arguments)}}(),DataTambahall:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.get(this.api+"/menuotoritas/edittambah?f_otoritas_id="+e+"&status="+a,l["a"].authHeader());case 2:this.alert=!0,this.message="Berhasil Update";case 4:case"end":return t.stop()}}),t,this)})));return function(e,a){return t.apply(this,arguments)}}(),DataUpdateall:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.get(this.api+"/menuotoritas/editupdate?f_otoritas_id="+e+"&status="+a,l["a"].authHeader());case 2:this.alert=!0,this.message="Berhasil Update";case 4:case"end":return t.stop()}}),t,this)})));return function(e,a){return t.apply(this,arguments)}}(),DataDeleteall:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.get(this.api+"/menuotoritas/editdelete?f_otoritas_id="+e+"&status="+a,l["a"].authHeader());case 2:this.alert=!0,this.message="Berhasil Update";case 4:case"end":return t.stop()}}),t,this)})));return function(e,a){return t.apply(this,arguments)}}(),openDetail:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:document.location="/menuaction/detail/"+e;case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),Getfilter:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get(this.api+"/otoritaswebsite/index",l["a"].authHeader());case 3:return e=t.sent,this.dataotoritaswebsite=e.data,t.next=7,c.a.get(this.api+"/otoritas/index",l["a"].authHeader());case 7:a=t.sent,this.dataotoritas=a.data,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.error(t.t0);case 14:case"end":return t.stop()}}),t,this,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),openRemove:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!confirm("Anda Yakin akan menghapus Data")){t.next=10;break}return a=this.data.find((function(t){return t.f_menu_id===e})),t.next=4,c.a.delete(this.api+"/menu/delete/"+a.f_menu_id,l["a"].authHeader());case 4:r=t.sent,this.alert=!0,this.message=r.data.message,this.Getdata(),t.next=10;break;case 10:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}},f=d,m=a("2877"),_=Object(m["a"])(f,r,n,!1,null,null,null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-4d90faf4-legacy.53ba9747.js.map
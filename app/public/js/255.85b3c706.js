"use strict";(globalThis["webpackChunkriskyakbar"]=globalThis["webpackChunkriskyakbar"]||[]).push([[255],{9255:(a,t,e)=>{e.r(t),e.d(t,{default:()=>E});var i=e(9835),s=e(6970);const o={class:"q-pa-md"},d={class:"q-pa-md"},n={class:"q-pa-md"};function r(a,t,e,r,l,u){const c=(0,i.up)("q-btn"),m=(0,i.up)("q-toolbar-title"),p=(0,i.up)("q-toolbar"),h=(0,i.up)("q-header"),k=(0,i.up)("q-input"),g=(0,i.up)("q-page"),f=(0,i.up)("q-page-container"),b=(0,i.up)("q-layout");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(b,{class:"shadow-2 rounded-borders"},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{class:"bg-primary"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,{flat:"",round:"",dense:"",icon:"book"}),(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Data "+(0,s.zw)(this.$route.params.action),1)])),_:1})])),_:1})])),_:1}),(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(g,{padding:""},{default:(0,i.w5)((()=>[(0,i._)("div",d,[(0,i.Wm)(k,{outlined:"",label:"Pengusul",modelValue:a.data.f_nama,"onUpdate:modelValue":t[0]||(t[0]=t=>a.data.f_nama=t),maxlength:"100",readonly:!a.aksiEdit},null,8,["modelValue","readonly"])]),(0,i._)("div",n,[a.aksiEdit?((0,i.wg)(),(0,i.j4)(c,{key:0,color:"primary",icon:"done",label:"Simpan",onClick:t[1]||(t[1]=t=>u.onSave(a.data.f_monitoring_user_id))})):(0,i.kq)("",!0),a.aksiEdit?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:1,unelevated:"",color:"amber",label:"Edit",onClick:t[2]||(t[2]=t=>u.openEdit(a.data.f_monitoring_user_id)),icon:"create"}))])])),_:1})])),_:1})])),_:1})])}e(4328);var l=e(9981),u=e.n(l),c=e(752);const m={data:()=>({api:c.Z.Host(),message:"",data:[],aksiEdit:!1,aksiSave:!1}),mounted(){console.log("alamat",c.Z.Host()),this.Getdata(),"tambah"===this.$route.params.action&&(this.aksiEdit=!0,this.aksiSave=!0),"edit"===this.$route.params.action&&(this.aksiEdit=!0,this.aksiSave=!0),"detail"===this.$route.params.action&&(this.aksiEdit=!1,this.aksiSave=!1)},computed:{},methods:{async Getdata(){try{const a=this.$route.params.action;if("detail"===a||"edit"===a){let a=await u().get(this.api+"/user/edit/"+this.$route.params.id,c.Z.authHeader());this.data=a.data}}catch(a){console.error(a)}},async openDetail(a){document.location="#/userpageaction/detail/"+a},async openEdit(a){document.location="#/userpageaction/edit/"+a,location.reload()},validation(){return this.data.f_nama?{code:200,message:""}:{code:500,message:"Nama Data ini harus diisi"}},async onSave(){const a=this.validation();if(200===a.code){var t=null;const a=this.$route.params.action,e=Object.assign({},this.data);t="tambah"===a?await u().post(this.api+"/user/add",e,c.Z.authHeader()):await u().put(this.api+"/user/edit/"+this.$route.params.id,e,c.Z.authHeader()),200===t.data.code?(this.$q.notify(c.Z.CustomNotify("success",t.data.message,1e3,"center")),document.location="#/userpageaction/detail/"+t.data.data.f_monitoring_user_id,location.reload(),this.aksiEdit=!this.aksiEdit,this.aksiSave=!1):this.$q.notify(c.Z.CustomNotify("error",t.data.message,2e4,"center"))}else this.$q.notify(c.Z.CustomNotify("error",a.message,2e4,"center"))}}};var p=e(1639),h=e(7605),k=e(6602),g=e(1663),f=e(4455),b=e(1973),y=e(2133),_=e(9885),v=e(6611),Z=e(9984),q=e.n(Z);const w=(0,p.Z)(m,[["render",r]]),E=w;q()(m,"components",{QLayout:h.Z,QHeader:k.Z,QToolbar:g.Z,QBtn:f.Z,QToolbarTitle:b.Z,QPageContainer:y.Z,QPage:_.Z,QInput:v.Z})}}]);
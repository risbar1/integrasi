"use strict";(globalThis["webpackChunkriskyakbar"]=globalThis["webpackChunkriskyakbar"]||[]).push([[223],{6223:(l,t,a)=>{a.r(t),a.d(t,{default:()=>D});var e=a(9835),n=a(6970);const o={class:"q-pa-md"},u=(0,e._)("br",null,null,-1),d=(0,e._)("br",null,null,-1),i=(0,e._)("br",null,null,-1),s=(0,e.Uk)("   "),h={class:"q-pa-md"},m=(0,e._)("thead",null,[(0,e._)("tr",null,[(0,e._)("th",{class:"text-left"},"No"),(0,e._)("th",{class:"text-left"},"Data"),(0,e._)("th",{class:"text-left"},"Tanggal"),(0,e._)("th",{class:"text-left"},"Username")])],-1);function r(l,t,a,r,p,c){const _=(0,e.up)("q-select"),f=(0,e.up)("q-input"),b=(0,e.up)("q-markup-table");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("div",o,[(0,e.Wm)(_,{outlined:"",modelValue:l.modeltahun,"onUpdate:modelValue":t[0]||(t[0]=t=>l.modeltahun=t),options:l.datatahun,"option-label":"f_tahun",label:"Tahun","option-value":"f_tahun",onClick:c.pilihmodeltahun},null,8,["modelValue","options","onClick"]),u,(0,e.Wm)(f,{outlined:"",label:"Tampil",modelValue:l.modeltampil,"onUpdate:modelValue":t[1]||(t[1]=t=>l.modeltampil=t),type:"number",onClick:c.pilihmodeltampil},null,8,["modelValue","onClick"]),d,(0,e.Wm)(f,{outlined:"",label:"Data/ Username",modelValue:l.modelsearch,"onUpdate:modelValue":t[2]||(t[2]=t=>l.modelsearch=t),type:"number",onClick:c.pilihmodelsearch},null,8,["modelValue","onClick"])]),i,s,(0,e._)("div",h,[(0,e.Wm)(b,null,{default:(0,e.w5)((()=>[m,(0,e._)("tbody",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(l.data,((l,t)=>((0,e.wg)(),(0,e.iD)("tr",{key:l.f_tgl_create},[(0,e._)("td",null,(0,n.zw)(t+1),1),(0,e._)("td",null,(0,n.zw)(l.f_data),1),(0,e._)("td",null,(0,n.zw)(l.f_tgl_create),1),(0,e._)("td",null,(0,n.zw)(l.f_username),1)])))),128))])])),_:1})])],64)}a(4328);var p=a(9981),c=a.n(p),_=a(752);const f={data:()=>({api:_.Z.Host(),modeltahun:{f_tahun:(new Date).getFullYear()},message:"",data:[],options:"",datatahun:[],modeltampil:"100",datatampil:[],modelsearch:""}),mounted(){console.log("alamat",_.Z.Host()),this.Getfilter(),this.Getdata()},computed:{pilihmodeltahun(){return this.Getdata(this.modeltahun)},pilihmodeltampil(){return this.Getdata(this.modeltahun,this.modeltampil)},pilihmodelsearch(){return this.Getdata(this.modeltahun,this.modeltampil,this.modelsearch)}},methods:{async Getdata(l,t,a){try{let e=l?JSON.parse(JSON.stringify(l.f_tahun)):(new Date).getFullYear(),n=t||100,o=a||"",u=await c().get(this.api+"/log/index?tahun="+e+"&tampil="+n+"&search="+o,_.Z.authHeader());this.data=u.data}catch(e){console.error(e)}},async Getfilter(){try{let l=[],t=(new Date).getFullYear();do{l.push({f_tahun:t}),t--}while(t>2001);this.datatahun=l}catch(l){console.error(l)}}}};var b=a(1639),k=a(8556),g=a(6611),w=a(6933),y=a(9984),V=a.n(y);const C=(0,b.Z)(f,[["render",r]]),D=C;V()(f,"components",{QSelect:k.Z,QInput:g.Z,QMarkupTable:w.Z})}}]);
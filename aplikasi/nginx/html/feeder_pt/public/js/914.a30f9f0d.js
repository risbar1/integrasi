(globalThis["webpackChunk_Feeder_PT"]=globalThis["webpackChunk_Feeder_PT"]||[]).push([[914],{5988:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});class a{}a.Host=(t="")=>{const e="dev";if("dev"===e){const e=location.protocol,s=location.hostname,a=location.port;return e+"//"+s+":"+a+"/feeder_pt"+t}{const e=location.protocol,s=location.hostname,a=location.port;return e+"//"+s+":"+a+"/feeder_pt"+t}},a.Hostws=(t="")=>{const e="dev";if("dev"===e){const e=location.protocol,s=location.hostname,a=location.port;return e+"//"+s+":"+a+"/feeder_ws"+t}{const e=location.protocol,s=location.hostname,a=location.port;return e+"//"+s+":"+a+"/feeder_ws"+t}},a.Headers=()=>({headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token, Accept, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization","Access-Control-Allow-Credentials":"true",authorization:"Bearer "+localStorage.getItem("jwt")}});const l=a},5173:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>I});var a=s(9835),l=s(6970);const o={class:"q-pa-md"},i=(0,a._)("div",{class:"q-pl-md text-h6 text-bold",style:{color:"#47B1D7"}},"  Kelompok Matakuliah ",-1),n=(0,a._)("br",null,null,-1),r=(0,a._)("br",null,null,-1),d=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{class:"text-primary text-bold text-center"},"Aksi"),(0,a._)("th",{class:"text-primary text-bold text-center"},"No"),(0,a._)("th",{class:"text-primary text-bold text-left"},"Kode"),(0,a._)("th",{class:"text-primary text-bold text-left"},"Nama"),(0,a._)("th",{class:"text-primary text-bold text-left"},"Username"),(0,a._)("th",{class:"text-primary text-bold text-left"},"Komputer"),(0,a._)("th",{class:"text-primary text-bold text-left"},"Tanggal Buat"),(0,a._)("th",{class:"text-primary text-bold text-left"},"Tanggal Update")])],-1),c={class:"text-center"},m={class:"text-center"},u={class:"text-left"},p={class:"text-left"},j={class:"text-left"},g={class:"text-left"},h={class:"text-left"},f={class:"text-left"},_=(0,a._)("br",null,null,-1),k=(0,a._)("div",{class:"text-h6"}," Kelompok Matakuliah ",-1),b={class:"row q-pl-lg q-pr-md",style:{"padding-bottom":"10px"}},w={class:"col-6",style:{"padding-right":"10px"}},y=(0,a._)("div",{dense:"",class:"self-center full-width no-outline q-pr-md q-pb-sm text-weight-bolder",tabindex:"0",style:{color:"#52565F"}},"Kode",-1),x={class:"col-6"},z=(0,a._)("div",{dense:"",class:"self-center full-width no-outline q-pr-md q-pb-sm text-weight-bolder",tabindex:"0",style:{color:"#52565F"}},"Nama",-1),v={class:"row q-pl-lg q-pr-md",style:{"padding-bottom":"10px"}},q={class:"col-6",style:{"padding-right":"10px"}};function T(t,e,s,T,D,C){const Z=(0,a.up)("q-toolbar-title"),W=(0,a.up)("q-toolbar"),U=(0,a.up)("q-tooltip"),A=(0,a.up)("q-btn"),M=(0,a.up)("q-markup-table"),E=(0,a.up)("q-card"),H=(0,a.up)("q-space"),O=(0,a.up)("q-bar"),Q=(0,a.up)("q-card-section"),S=(0,a.up)("q-input"),V=(0,a.up)("q-dialog"),Y=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(E,{class:"text-primary card-view bg-white",style:{"border-radius":"5px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{class:"text-primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,null,{default:(0,a.w5)((()=>[i])),_:1})])),_:1}),n,(0,a.Uk)("   "),(0,a.Wm)(A,{size:"sm",color:"primary",style:{"margin-right":"20px"},class:"q-ml-sm text-white q-mt-sm",onClick:e[0]||(e[0]=e=>(t.dialog=!0,t.merubah=!1,t.simpan=!0)),icon:"add",label:"Tambah Data"},{default:(0,a.w5)((()=>[(0,a.Wm)(U,{"content-class":"bg-light-blue-10","content-style":"font-size: 16px",offset:[10,10]},{default:(0,a.w5)((()=>[(0,a.Uk)(" Tambah Data ")])),_:1})])),_:1}),(0,a.Wm)(A,{size:"sm",color:"black",style:{"margin-right":"20px"},class:"q-ml-sm text-white q-mt-sm",onClick:e[1]||(e[1]=e=>t.log()),icon:"history",label:"Log"},{default:(0,a.w5)((()=>[(0,a.Wm)(U,{"content-class":"bg-light-blue-10","content-style":"font-size: 16px",offset:[10,10]},{default:(0,a.w5)((()=>[(0,a.Uk)(" Log ")])),_:1})])),_:1}),(0,a.Uk)("  "),r,(0,a.Wm)(M,{separator:t.separator,flat:""},{default:(0,a.w5)((()=>[d,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.data,((e,s)=>((0,a.wg)(),(0,a.iD)("tr",{key:e.f_kode},[(0,a._)("td",c,[(0,a.Wm)(A,{size:"sm",color:"secondary",round:"",dense:"",onClick:s=>t.edit(e.f_kode,"detail"),icon:"library_books"},{default:(0,a.w5)((()=>[(0,a.Wm)(U,{"content-class":"bg-light-blue-10","content-style":"font-size: 16px",offset:[10,10]},{default:(0,a.w5)((()=>[(0,a.Uk)(" Detail Data ")])),_:1})])),_:2},1032,["onClick"]),(0,a.Uk)("  "),(0,a.Wm)(A,{size:"sm",color:"amber",round:"",dense:"",onClick:s=>t.edit(e.f_kode),icon:"create"},{default:(0,a.w5)((()=>[(0,a.Wm)(U,{"content-class":"bg-light-blue-10","content-style":"font-size: 16px",offset:[10,10]},{default:(0,a.w5)((()=>[(0,a.Uk)(" Edit Data ")])),_:1})])),_:2},1032,["onClick"]),(0,a.Uk)("  "),(0,a.Wm)(A,{size:"sm",color:"red",round:"",dense:"",onClick:s=>t.remove(e.f_kode),icon:"delete"},{default:(0,a.w5)((()=>[(0,a.Wm)(U,{"content-class":"bg-light-blue-10","content-style":"font-size: 16px",offset:[10,10]},{default:(0,a.w5)((()=>[(0,a.Uk)(" Delete Data ")])),_:1})])),_:2},1032,["onClick"])]),(0,a._)("td",m,(0,l.zw)(s+1),1),(0,a._)("td",u,(0,l.zw)(e.f_kode),1),(0,a._)("td",p,(0,l.zw)(e.f_nama),1),(0,a._)("td",j,(0,l.zw)(e.f_username),1),(0,a._)("td",g,(0,l.zw)(e.f_komputer),1),(0,a._)("td",h,(0,l.zw)(e.f_tgl_create_moment),1),(0,a._)("td",f,(0,l.zw)(e.f_last_update_moment),1)])))),128))])])),_:1},8,["separator"]),_])),_:1}),(0,a.Wm)(V,{modelValue:t.dialog,"onUpdate:modelValue":e[7]||(e[7]=e=>t.dialog=e),persistent:"",maximized:t.maximizedToggle,"transition-show":"slide-up","transition-hide":"slide-down"},{default:(0,a.w5)((()=>[(0,a.Wm)(E,null,{default:(0,a.w5)((()=>[(0,a.Wm)(O,{class:"bg-primary text-white"},{default:(0,a.w5)((()=>[(0,a.Wm)(H),(0,a.Wm)(A,{dense:"",flat:"",icon:"minimize",onClick:e[2]||(e[2]=e=>t.maximizedToggle=!1),disable:!t.maximizedToggle},{default:(0,a.w5)((()=>[t.maximizedToggle?((0,a.wg)(),(0,a.j4)(U,{key:0,class:"bg-white text-primary"},{default:(0,a.w5)((()=>[(0,a.Uk)("Minimize")])),_:1})):(0,a.kq)("",!0)])),_:1},8,["disable"]),(0,a.Wm)(A,{dense:"",flat:"",icon:"crop_square",onClick:e[3]||(e[3]=e=>t.maximizedToggle=!0),disable:t.maximizedToggle},{default:(0,a.w5)((()=>[t.maximizedToggle?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(U,{key:0,class:"bg-white text-primary"},{default:(0,a.w5)((()=>[(0,a.Uk)("Maximize")])),_:1}))])),_:1},8,["disable"]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(A,{dense:"",flat:"",icon:"close"},{default:(0,a.w5)((()=>[(0,a.Wm)(U,{class:"bg-white text-primary"},{default:(0,a.w5)((()=>[(0,a.Uk)("Close")])),_:1})])),_:1})),[[Y]])])),_:1}),(0,a.Wm)(Q,null,{default:(0,a.w5)((()=>[k])),_:1}),(0,a.Wm)(Q,{class:"q-pt-none"},{default:(0,a.w5)((()=>[(0,a._)("div",b,[(0,a._)("div",w,[y,(0,a.Wm)(S,{square:"",outlined:"",modelValue:t.view.f_kode,"onUpdate:modelValue":e[4]||(e[4]=e=>t.view.f_kode=e)},null,8,["modelValue"])]),(0,a._)("div",x,[z,(0,a.Wm)(S,{square:"",outlined:"",modelValue:t.view.f_nama,"onUpdate:modelValue":e[5]||(e[5]=e=>t.view.f_nama=e)},null,8,["modelValue"])])]),(0,a._)("div",v,[(0,a._)("div",q,[1==t.simpan?((0,a.wg)(),(0,a.j4)(A,{key:0,size:"sm",color:"secondary",style:{"margin-right":"20px"},class:"q-ml-sm text-white q-mt-sm",icon:"save",label:"Simpan Data",onClick:e[6]||(e[6]=e=>t.save(t.merubah))},{default:(0,a.w5)((()=>[(0,a.Wm)(U,{"content-class":"bg-light-blue-10","content-style":"font-size: 16px",offset:[10,10]},{default:(0,a.w5)((()=>[(0,a.Uk)(" Simpan Data ")])),_:1})])),_:1})):(0,a.kq)("",!0)])])])),_:1})])),_:1})])),_:1},8,["modelValue","maximized"])])}s(9665);var D=s(112),C=s(5988),Z=s(3878),W=s.n(Z);const U=(0,a.aZ)({data(){return{api:C.Z.Host(),data:[],order:[],cek:!0,f_otoritas_id:"",from:"",to:"",total:"",pages:[],page:"",limit:"",search:"",sort:"",per_page:"",offset:"",jumlah:"",dialog:!1,maximizedToggle:!0,view:{},simpan:!0,merubah:!1,progdi:"",target:""}},mounted(){console.log("alamat",C.Z.Host()),this.getData()},methods:{async getData(){var t=await D.Z.get(this.api+"/kelompokmatakuliah",C.Z.Headers());for(const e of t.data.Data)e.f_tgl_create_moment=W()(e.f_tgl_create).format("DD MMMM YYYY h:mm:ss"),e.f_last_update_moment=W()(e.f_last_update).format("DD MMMM YYYY h:mm:ss");this.data=t.data.Data},async edit(t,e){this.dialog=!0,this.merubah=!0,this.simpan=!0,e&&(this.simpan=!1);var s=await D.Z.get(this.api+"/kelompokmatakuliah/"+t,C.Z.Headers());this.view=s.data.Data[0]},async log(){this.$router.push("/log")},async save(t){if(this.target=JSON.parse(JSON.stringify(this.view)),!1===t){const t=await D.Z.post(this.api+"/kelompokmatakuliah",this.target,C.Z.Headers());this.getData(),this.$q.notify({message:t.data.Error_desc,timeout:5e3,type:"positive",position:"center",actions:[{label:"x",color:"yellow"}]}),this.dialog=!1}else{const t=await D.Z.put(this.api+"/kelompokmatakuliah/"+this.target.f_kode,this.target,C.Z.Headers());this.getData(),this.$q.notify({message:t.data.Error_desc,timeout:5e3,type:"positive",position:"center",actions:[{label:"x",color:"yellow"}]}),this.dialog=!1}},async remove(t){const e=this.data.find((e=>e.f_kode===t));e&&this.$q.dialog({title:"Konfirmasi",message:`Anda yakin akan menghapus data ini "${e.f_kode}-${e.f_nama}"? `,cancel:!0,persistent:!0}).onOk((async()=>{const e=await D.Z["delete"](this.api+"/kelompokmatakuliah/"+t,C.Z.Headers());0===e.data.Error_code?(this.getData(),this.$q.notify({message:e.data.Error_desc,timeout:5e3,type:"positive",position:"center",actions:[{label:"x",color:"yellow"}]})):402===e.data.code?(this.getData(),this.$q.notify({message:e.data.Error_desc,timeout:5e3,type:"negative",position:"center",actions:[{label:"x",color:"yellow"}]})):this.$q.notify({message:e.data.Error_desc,timeout:5e3,type:"negative",position:"center",actions:[{label:"x",color:"yellow"}]})}))}}});var A=s(1639),M=s(4458),E=s(1663),H=s(1973),O=s(4455),Q=s(6858),S=s(6933),V=s(2074),Y=s(4526),$=s(136),N=s(3190),K=s(6611),P=s(2146),F=s(9984),B=s.n(F);const L=(0,A.Z)(U,[["render",T]]),I=L;B()(U,"components",{QCard:M.Z,QToolbar:E.Z,QToolbarTitle:H.Z,QBtn:O.Z,QTooltip:Q.Z,QMarkupTable:S.Z,QDialog:V.Z,QBar:Y.Z,QSpace:$.Z,QCardSection:N.Z,QInput:K.Z}),B()(U,"directives",{ClosePopup:P.Z})},6700:(t,e,s)=>{var a={"./af":3902,"./af.js":3902,"./ar":6314,"./ar-dz":5666,"./ar-dz.js":5666,"./ar-kw":6591,"./ar-kw.js":6591,"./ar-ly":7900,"./ar-ly.js":7900,"./ar-ma":5667,"./ar-ma.js":5667,"./ar-sa":4092,"./ar-sa.js":4092,"./ar-tn":1379,"./ar-tn.js":1379,"./ar.js":6314,"./az":1699,"./az.js":1699,"./be":8988,"./be.js":8988,"./bg":7437,"./bg.js":7437,"./bm":7947,"./bm.js":7947,"./bn":2851,"./bn-bd":4905,"./bn-bd.js":4905,"./bn.js":2851,"./bo":7346,"./bo.js":7346,"./br":1711,"./br.js":1711,"./bs":3706,"./bs.js":3706,"./ca":812,"./ca.js":812,"./cs":6406,"./cs.js":6406,"./cv":1853,"./cv.js":1853,"./cy":9766,"./cy.js":9766,"./da":6836,"./da.js":6836,"./de":9320,"./de-at":4904,"./de-at.js":4904,"./de-ch":6710,"./de-ch.js":6710,"./de.js":9320,"./dv":3274,"./dv.js":3274,"./el":286,"./el.js":286,"./en-au":143,"./en-au.js":143,"./en-ca":237,"./en-ca.js":237,"./en-gb":2428,"./en-gb.js":2428,"./en-ie":3349,"./en-ie.js":3349,"./en-il":3764,"./en-il.js":3764,"./en-in":7809,"./en-in.js":7809,"./en-nz":9851,"./en-nz.js":9851,"./en-sg":5594,"./en-sg.js":5594,"./eo":4483,"./eo.js":4483,"./es":2184,"./es-do":5777,"./es-do.js":5777,"./es-mx":9356,"./es-mx.js":9356,"./es-us":8496,"./es-us.js":8496,"./es.js":2184,"./et":7578,"./et.js":7578,"./eu":2092,"./eu.js":2092,"./fa":5927,"./fa.js":5927,"./fi":171,"./fi.js":171,"./fil":2416,"./fil.js":2416,"./fo":9937,"./fo.js":9937,"./fr":5172,"./fr-ca":8249,"./fr-ca.js":8249,"./fr-ch":7541,"./fr-ch.js":7541,"./fr.js":5172,"./fy":7907,"./fy.js":7907,"./ga":6361,"./ga.js":6361,"./gd":2282,"./gd.js":2282,"./gl":2630,"./gl.js":2630,"./gom-deva":680,"./gom-deva.js":680,"./gom-latn":6220,"./gom-latn.js":6220,"./gu":6272,"./gu.js":6272,"./he":5540,"./he.js":5540,"./hi":6067,"./hi.js":6067,"./hr":9669,"./hr.js":9669,"./hu":3396,"./hu.js":3396,"./hy-am":6678,"./hy-am.js":6678,"./id":4812,"./id.js":4812,"./is":4193,"./is.js":4193,"./it":7863,"./it-ch":959,"./it-ch.js":959,"./it.js":7863,"./ja":1809,"./ja.js":1809,"./jv":8657,"./jv.js":8657,"./ka":3290,"./ka.js":3290,"./kk":8418,"./kk.js":8418,"./km":7687,"./km.js":7687,"./kn":1375,"./kn.js":1375,"./ko":2641,"./ko.js":2641,"./ku":3518,"./ku.js":3518,"./ky":5459,"./ky.js":5459,"./lb":1978,"./lb.js":1978,"./lo":6915,"./lo.js":6915,"./lt":8948,"./lt.js":8948,"./lv":2548,"./lv.js":2548,"./me":8608,"./me.js":8608,"./mi":333,"./mi.js":333,"./mk":1876,"./mk.js":1876,"./ml":999,"./ml.js":999,"./mn":4098,"./mn.js":4098,"./mr":6111,"./mr.js":6111,"./ms":3717,"./ms-my":265,"./ms-my.js":265,"./ms.js":3717,"./mt":8980,"./mt.js":8980,"./my":6895,"./my.js":6895,"./nb":5348,"./nb.js":5348,"./ne":1493,"./ne.js":1493,"./nl":4419,"./nl-be":5576,"./nl-be.js":5576,"./nl.js":4419,"./nn":6907,"./nn.js":6907,"./oc-lnc":2321,"./oc-lnc.js":2321,"./pa-in":9239,"./pa-in.js":9239,"./pl":7627,"./pl.js":7627,"./pt":5703,"./pt-br":1623,"./pt-br.js":1623,"./pt.js":5703,"./ro":2747,"./ro.js":2747,"./ru":4420,"./ru.js":4420,"./sd":2148,"./sd.js":2148,"./se":2461,"./se.js":2461,"./si":2783,"./si.js":2783,"./sk":3306,"./sk.js":3306,"./sl":341,"./sl.js":341,"./sq":2768,"./sq.js":2768,"./sr":2451,"./sr-cyrl":3371,"./sr-cyrl.js":3371,"./sr.js":2451,"./ss":8812,"./ss.js":8812,"./sv":3820,"./sv.js":3820,"./sw":3615,"./sw.js":3615,"./ta":2869,"./ta.js":2869,"./te":2044,"./te.js":2044,"./tet":5861,"./tet.js":5861,"./tg":6999,"./tg.js":6999,"./th":1772,"./th.js":1772,"./tk":7443,"./tk.js":7443,"./tl-ph":9786,"./tl-ph.js":9786,"./tlh":2812,"./tlh.js":2812,"./tr":6952,"./tr.js":6952,"./tzl":9573,"./tzl.js":9573,"./tzm":5990,"./tzm-latn":6961,"./tzm-latn.js":6961,"./tzm.js":5990,"./ug-cn":2610,"./ug-cn.js":2610,"./uk":9498,"./uk.js":9498,"./ur":3970,"./ur.js":3970,"./uz":9006,"./uz-latn":26,"./uz-latn.js":26,"./uz.js":9006,"./vi":9962,"./vi.js":9962,"./x-pseudo":8407,"./x-pseudo.js":8407,"./yo":1962,"./yo.js":1962,"./zh-cn":8909,"./zh-cn.js":8909,"./zh-hk":4014,"./zh-hk.js":4014,"./zh-mo":996,"./zh-mo.js":996,"./zh-tw":6327,"./zh-tw.js":6327};function l(t){var e=o(t);return s(e)}function o(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}l.keys=function(){return Object.keys(a)},l.resolve=o,t.exports=l,l.id=6700}}]);
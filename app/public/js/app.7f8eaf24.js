(()=>{"use strict";var e={4647:(e,n,t)=>{var o=t(1957),r=t(1947),a=t(499),i=t(9835);function l(e,n,t,o,r,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}const c=(0,i.aZ)({name:"App"});var s=t(1639);const p=(0,s.Z)(c,[["render",l]]),d=p;var h=t(3340),m=t(8910);t(702);const u=[{path:"/",component:()=>Promise.all([t.e(736),t.e(831)]).then(t.bind(t,9831)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(531)]).then(t.bind(t,4531))}]},{path:"/dashboard",component:()=>Promise.all([t.e(736),t.e(362)]).then(t.bind(t,5362)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(386)]).then(t.bind(t,4386))}],meta:{roles:["Admin"]}},{path:"/data",component:()=>Promise.all([t.e(736),t.e(362)]).then(t.bind(t,5362)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(412)]).then(t.bind(t,1412))}]},{path:"/datapageaction/:action/:id?",component:()=>Promise.all([t.e(736),t.e(362)]).then(t.bind(t,5362)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(865)]).then(t.bind(t,8865))}]},{path:"/jenis",component:()=>Promise.all([t.e(736),t.e(362)]).then(t.bind(t,5362)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(773)]).then(t.bind(t,6773))}]},{path:"/jenispageaction/:action/:id?",component:()=>Promise.all([t.e(736),t.e(362)]).then(t.bind(t,5362)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(771)]).then(t.bind(t,8771))}]},{path:"/user",component:()=>Promise.all([t.e(736),t.e(362)]).then(t.bind(t,5362)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(419)]).then(t.bind(t,6419))}]},{path:"/userpageaction/:action/:id?",component:()=>Promise.all([t.e(736),t.e(362)]).then(t.bind(t,5362)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(255)]).then(t.bind(t,9255))}]},{path:"/anggaran",component:()=>Promise.all([t.e(736),t.e(362)]).then(t.bind(t,5362)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(560)]).then(t.bind(t,560))}]},{path:"/anggaranpageaction/:action/:id?",component:()=>Promise.all([t.e(736),t.e(362)]).then(t.bind(t,5362)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(944)]).then(t.bind(t,6944))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(862)]).then(t.bind(t,1862))},{path:"/log",component:()=>Promise.all([t.e(736),t.e(362)]).then(t.bind(t,5362)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(223)]).then(t.bind(t,6223))}]},{path:"/akun",component:()=>Promise.all([t.e(736),t.e(362)]).then(t.bind(t,5362)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(458)]).then(t.bind(t,9964))}]},{path:"/akunpageaction/:action/:id?",component:()=>Promise.all([t.e(736),t.e(362)]).then(t.bind(t,5362)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(928)]).then(t.bind(t,1928))}]},{path:"/cetakdata/:tahun/:jenis?/:pengusul?",component:()=>Promise.all([t.e(736),t.e(831)]).then(t.bind(t,9831)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(248)]).then(t.bind(t,5248))}]}],b=u;var f=t(3833),g=t(8126),v=t(4328);t(9981),t(752);const P=localStorage.getItem("user");P||(localStorage.clear(),document.location="#/");const y=(0,h.BC)((function(){const e=m.r5,n=(0,m.p7)({scrollBehavior:()=>({left:0,top:0}),routes:b,history:e("")});return n}));async function k(e,n){const t=e(d);t.use(r.Z,n);const o=(0,a.Xl)("function"===typeof y?await y({}):y);return{app:t,router:o}}var w=t(5448),A=t(6950),O=t(8992),C=t(2941);const T={config:{},iconSet:w.Z,plugins:{Loading:A.Z,Notify:v.Z,Dialog:O.Z,AppFullscreen:C.Z,LocalStorage:f.Z,SessionStorage:g.Z}};async function j({app:e,router:n}){e.use(n),e.mount("#q-app")}k(o.ri,T).then(j)},752:(e,n,t)=>{t.d(n,{Z:()=>r});class o{}o.Host=()=>{var e="http://localhost:3009";return e},o.CustomNotify=(e,n,t=2500,o="center")=>{var r={};return r.message=n,r.timeout=t,r.position=o,"success"===e?(r.color="green-8",r.icon="done"):"error"===e&&(r.color="red-8",r.icon="warning",r.actions=[{label:"CLOSE",color:"white",handler:()=>{}}]),r},o.authHeader=()=>({headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token, Accept, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization","Access-Control-Allow-Credentials":"true",authorization:"Bearer "+localStorage.getItem("jwt")||0}});const r=o}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(n,o,r,a)=>{if(!o){var i=1/0;for(p=0;p<e.length;p++){for(var[o,r,a]=e[p],l=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](o[c])))?o.splice(c--,1):(l=!1,a<i&&(i=a));if(l){e.splice(p--,1);var s=r();void 0!==s&&(n=s)}}return n}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[o,r,a]}})(),(()=>{t.n=e=>{var n=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(n,{a:n}),n}})(),(()=>{t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((n,o)=>(t.f[o](e,n),n)),[]))})(),(()=>{t.u=e=>"js/"+e+"."+{223:"2a74aebc",248:"754e1e9d",255:"85b3c706",362:"c86060c4",386:"d3e064e4",412:"f0758fff",419:"7e4ec90b",458:"2eaf160b",531:"701ec989",560:"226cf131",771:"ead66a74",773:"9c45c056",831:"efa54650",862:"29669176",865:"09bddbbe",928:"ef436d92",944:"a227bc16"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"31d6cfe0",736:"5cc9be02"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{var e={},n="riskyakbar:";t.l=(o,r,a,i)=>{if(e[o])e[o].push(r);else{var l,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),p=0;p<s.length;p++){var d=s[p];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+a){l=d;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",n+a),l.src=o),e[o]=[r];var h=(n,t)=>{l.onerror=l.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((e=>e(t))),n)return n(t)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=h.bind(null,l.onerror),l.onload=h.bind(null,l.onload),c&&document.head.appendChild(l)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p=""})(),(()=>{var e={143:0};t.f.j=(n,o)=>{var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise(((t,o)=>r=e[n]=[t,o]));o.push(r[2]=a);var i=t.p+t.u(n),l=new Error,c=o=>{if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,r[1](l)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=n=>0===e[n];var n=(n,o)=>{var r,a,[i,l,c]=o,s=0;if(i.some((n=>0!==e[n]))){for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(c)var p=c(t)}for(n&&n(o);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(p)},o=globalThis["webpackChunkriskyakbar"]=globalThis["webpackChunkriskyakbar"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))})();var o=t.O(void 0,[736],(()=>t(4647)));o=t.O(o)})();
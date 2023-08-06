import{Q as m,c as u}from"./uid.e55bd1ea.js";import{Q as p}from"./QInput.43945995.js";import{_ as h,p as w,I as f,r as i,q as g,t as _,x,y as s,z as t,ct as b,K as a,J as c,C as v,B as d}from"./index.79b4a355.js";import{Q as y}from"./QForm.37197f46.js";import{Q as S}from"./QPage.2c5cd181.js";import{Q,a as k}from"./QLayout.ef00ed81.js";import{_ as V}from"./VxIcon.6ce0f62c.js";import"./QScrollObserver.ea1c6fcd.js";const C=w({components:{VxIcon:V},setup(){return{authStore:f(),loading:i(!1),username:i(""),password:i("")}},methods:{login(){this.loading=!0,this.$api.post("/auth/login",{username:this.username,password:this.password}).then(e=>{this.loading=!1,localStorage.setItem("token",e.data.data),this.authStore.token=e.data.data,this.authStore.getUser(),this.$router.push({name:"beranda"})}).catch(e=>{var l;var o;((l=e==null?void 0:e.response)==null?void 0:l.status)==404?o="ID atau Password salah":o=e==null?void 0:e.message,this.loading=!1,this.$q.notify({message:o,color:"negative"})})}}}),I=a("div",{class:"md:tw-text-2xl tw-text-md tw-font-bold tw-text-white"},[d(" Resilient and Sustainable System for Health (RSSH)"),a("br"),d("AIDS - Tuberculosis -\xA0Malaria\xA0(ATM) ")],-1),$=a("div",{class:"tw-text-3xl tw-font-bold"},[a("span",{class:"text-secondary"},"e"),d("Monev ")],-1),D={class:"tw-space-y-1"},M=a("div",{class:"text-left"},"ID Pengguna",-1),P={class:"bg-white tw-p-2 tw-rounded-md text-primary"},A={class:"tw-space-y-1"},B=a("div",{class:"text-left"},"Password",-1),N={class:"bg-white tw-p-2 tw-rounded-md text-primary"},z={class:"text-center tw-py-3"};function F(e,o,l,L,R,U){const r=g("vx-icon");return _(),x(Q,null,{default:s(()=>[t(k,null,{default:s(()=>[t(S,{class:"flex flex-center text-flex tw-flex-col tw-text-center tw-space-y-8",style:{"overflow-y":"hidden !important","overflow-x":"hidden !important","background-image":"url('bg-login.png')","background-size":"cover","background-repeat":"no-repeat","background-position":"center center","box-shadow":"rgba(36, 55, 99, 0.5) 0 0 0 1000000px inset"}},{default:s(()=>[I,t(m,{class:"tw-w-80 md:tw-w-96"},{default:s(()=>[t(u,{class:"tw-mt-4 md:tw-my-4 text-primary"},{default:s(()=>[$]),_:1}),t(y,{onSubmit:b(e.login,["prevent"])},{default:s(()=>[t(u,{class:"tw-space-y-1"},{default:s(()=>[a("div",D,[M,t(p,{filled:"",modelValue:e.username,"onUpdate:modelValue":o[0]||(o[0]=n=>e.username=n),placeholder:"Masukan ID Pengguna Anda",rules:[n=>!!n||"Field ini harus diisi"]},{prepend:s(()=>[a("div",P,[t(r,{iconName:"User",size:20})])]),_:1},8,["modelValue","rules"])]),a("div",A,[B,t(p,{filled:"",modelValue:e.password,"onUpdate:modelValue":o[1]||(o[1]=n=>e.password=n),placeholder:"Masukan password anda",type:"password",rules:[n=>!!n||"Field ini harus diisi"]},{prepend:s(()=>[a("div",N,[t(r,{iconName:"Lock1",size:20})])]),_:1},8,["modelValue","rules"])]),a("div",null,[t(c,{type:"submit",label:"Masuk",class:"tw-w-full tw-rounded-md tw-my-2",unelevated:"",color:"primary","no-caps":"",loading:e.loading},null,8,["loading"])]),a("footer",z,v(new Date().getFullYear())+" \xA9 Copyright All Right Reserved ",1)]),_:1})]),_:1},8,["onSubmit"])]),_:1}),t(c,{flat:"",label:"Lihat Dashabord",to:{name:"dashboard"},"no-caps":"",color:"white"})]),_:1})]),_:1})]),_:1})}var G=h(C,[["render",F]]);export{G as default};
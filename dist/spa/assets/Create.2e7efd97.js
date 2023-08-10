import{c as P,Q as I}from"./uid.5390cda5.js";import{b as U,Q as m}from"./QMarkupTable.055156b0.js";import{g,i as v,h,Q as F}from"./QDialog.c29f1e35.js";import{Q}from"./QInput.107ba180.js";import{_ as D,p as q,I as K,r as n,t as c,x as _,y as a,z as s,B as u,ct as L,K as l,b5 as b,bx as y,C as r,E as V,F as S,G as C,J as R,b4 as k,A as w}from"./index.373a2fa6.js";import{Q as $}from"./QForm.8e6548dd.js";import{Q as B}from"./QPage.689dc5cc.js";const N=q({props:["user"],setup(){return{auth:K(),list_year:n([]),year:n(null),list_regency:n([]),regency:n(null),list_province:n([]),province:n(null),fields:n([]),loading:n(!1)}},beforeMount(){this.auth.province=null},mounted(){this.getYear()},methods:{getYear(){this.loading=!0,this.$api.get("/forms?Limit=-").then(t=>{this.list_year=t.data.data.Rows.map(o=>({label:o.Year,value:o.ID})),this.loading=!1}).catch(t=>{console.log(t)})},filterRegency(t,o){if(t===""){o(()=>{this.list_regency=this.auth.regency});return}o(()=>{var f;const i=t.toLowerCase();this.list_regency=(f=this.user)==null?void 0:f.Group.Details.map(p=>({label:p.RegencyCity.Name,value:p.RegencyCityID,province:p.RegencyCity.Province.LongName})).filter(p=>p.label.toLowerCase().indexOf(i)>-1)})},filterProvince(t,o){if(t===""){o(()=>{this.list_province=this.auth.provinces});return}o(()=>{const i=t.toLowerCase();this.list_province=this.auth.provinces.filter(f=>f.label.toLowerCase().indexOf(i)>-1)})},getForm(t){this.loading=!0;const o=this.list_year.find(i=>i.value==t).label;this.$api.get("/forms/"+o+'?Relation={"Name": "Fields"}').then(i=>(this.fields=i.data.data.Fields,this.loading=!1,i)).then(i=>{this.$refs.myForm.resetValidation()}).catch(i=>{console.log(i)})},submit(){this.loading=!0;const t={FormID:this.year,UserID:this.user.ID,RegencyCityID:this.regency,FieldResponse:this.fields.map(o=>({FieldID:o.ID,Value:o.Value}))};this.$api.post("form-responses",t).then(o=>{this.$q.notify({message:"Data berhasil tersimpan",color:"positive"}),this.getForm(this.year)}).catch(o=>{console.log(o)})}}}),T=l("div",{class:"tw-text-3xl tw-mb-4"},"Buat Penginputan",-1),A={class:"q-tr--no-hover"},z=l("td",null,[l("div",{class:""},"-")],-1),M=l("td",null,[l("div",{class:""},"Pilih Tahun Anggaran")],-1),Y={class:"md:tw-block tw-hidden"},E={class:"tw-table-row md:tw-hidden"},G={colspan:"100%"},O={class:"q-tr--no-hover"},j=l("td",null,"-",-1),J=l("td",null,"Pilih Provinsi",-1),H={class:"md:tw-block tw-hidden"},W={class:"tw-table-row md:tw-hidden"},X={colspan:"100%"},Z={class:"q-tr--no-hover"},x=l("td",null,"-",-1),ee=l("td",null,"Pilih Kabupaten Kota",-1),te={class:"md:tw-block tw-hidden"},le={class:"tw-table-row md:tw-hidden"},oe={colspan:"100%"},se={class:"q-tr--no-hover"},ae={colspan:"100%"},ie={class:"q-tr--no-hover"},ne={class:"md:tw-block tw-hidden"},re={class:"q-tr--no-hover tw-table-row md:tw-hidden"},de={colspan:"100%"},ue={key:0,class:"q-tr--no-hover"},pe={colspan:"100%"},me={class:"tw-flex tw-justify-center tw-mt-4 tw-gap-4"};function he(t,o,i,f,p,ce){return c(),_(B,{class:"tw-p-6"},{default:a(()=>[T,s(I,{flat:""},{default:a(()=>[s(P,{class:"text-primary tw-font-bold"},{default:a(()=>[u(" Anggaran APBD Kab/Kota ")]),_:1}),s(P,{class:"q-pt-none"},{default:a(()=>[s($,{onSubmit:L(t.submit,["prevent"]),ref:"myForm"},{default:a(()=>[s(U,{flat:"",separator:"none",class:"tw-h-auto"},{default:a(()=>[l("tbody",null,[l("tr",A,[z,M,l("td",Y,[s(m,{dense:"",filled:"",modelValue:t.year,"onUpdate:modelValue":[o[0]||(o[0]=e=>t.year=e),t.getForm],label:"Pilih Tahun",options:t.list_year,"map-options":"","emit-value":"",rules:[e=>!!e]},null,8,["modelValue","options","onUpdate:modelValue","rules"])])]),l("tr",E,[l("td",G,[s(m,{dense:"",filled:"",modelValue:t.year,"onUpdate:modelValue":[o[1]||(o[1]=e=>t.year=e),t.getForm],label:"Pilih Tahun",options:t.list_year,"map-options":"","emit-value":"",rules:[e=>!!e]},null,8,["modelValue","options","onUpdate:modelValue","rules"])])]),l("tr",O,[j,J,l("td",H,[s(m,{dense:"",filled:"",modelValue:t.auth.province,"onUpdate:modelValue":[o[2]||(o[2]=e=>t.auth.province=e),t.auth.setRegencies],label:"Pilih Provinsi",options:t.list_province,onFilter:t.filterProvince,disable:t.auth.provinces.length==1,"use-input":"","map-options":"","emit-value":"",rules:[e=>!!e]},{option:a(e=>[s(g,b(y(e.itemProps)),{default:a(()=>[s(v,null,{default:a(()=>[s(h,null,{default:a(()=>[u(r(e.opt.label),1)]),_:2},1024),s(h,{caption:""},{default:a(()=>[u(r(e.opt.province),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","onFilter","onUpdate:modelValue","disable","rules"])])]),l("tr",W,[l("td",X,[s(m,{dense:"",filled:"",modelValue:t.auth.province,"onUpdate:modelValue":[o[3]||(o[3]=e=>t.auth.province=e),t.auth.setRegencies],label:"Pilih Provinsi",options:t.list_province,onFilter:t.filterProvince,disable:t.auth.provinces.length==1,"use-input":"","map-options":"","emit-value":"",rules:[e=>!!e]},null,8,["modelValue","options","onFilter","onUpdate:modelValue","disable","rules"])])]),l("tr",Z,[x,ee,l("td",te,[s(m,{dense:"",filled:"",modelValue:t.regency,"onUpdate:modelValue":o[4]||(o[4]=e=>t.regency=e),label:"Pilih Kabupaten Kota",options:t.list_regency,onFilter:t.filterRegency,disable:t.auth.province==null,"use-input":"","map-options":"","emit-value":"",rules:[e=>!!e]},{option:a(e=>[s(g,b(y(e.itemProps)),{default:a(()=>[s(v,null,{default:a(()=>[s(h,null,{default:a(()=>[u(r(e.opt.label),1)]),_:2},1024),s(h,{caption:""},{default:a(()=>[u(r(e.opt.province),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","onFilter","disable","rules"])])]),l("tr",le,[l("td",oe,[s(m,{dense:"",filled:"",modelValue:t.regency,"onUpdate:modelValue":o[5]||(o[5]=e=>t.regency=e),label:"Pilih Kabupaten Kota",options:t.list_regency,onFilter:t.filterRegency,disable:t.auth.province==null,"use-input":"","map-options":"","emit-value":"",rules:[e=>!!e]},{option:a(e=>[s(g,b(y(e.itemProps)),{default:a(()=>[s(v,null,{default:a(()=>[s(h,null,{default:a(()=>[u(r(e.opt.label),1)]),_:2},1024),s(h,{caption:""},{default:a(()=>[u(r(e.opt.province),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","onFilter","disable","rules"])])]),l("tr",se,[l("td",ae,[s(F,{class:"tw-w-full"})])]),(c(!0),V(C,null,S(t.fields,e=>(c(),V(C,{key:e.ID},[l("tr",ie,[l("td",{class:k(e.class)},r(e.Code),3),l("td",{class:k(e.class)},r(e.Label),3),l("td",ne,[e.Type=="currency"?(c(),_(Q,{key:0,dense:"",filled:"",mask:"###,###,###,###,###,###,###,###,###,###","reverse-fill-mask":"",prefix:"Rp",modelValue:e.Value,"onUpdate:modelValue":d=>e.Value=d,rules:[d=>!!d&&e.IsRequired]},null,8,["modelValue","onUpdate:modelValue","rules"])):w("",!0)])]),l("tr",re,[l("td",de,[e.Type=="currency"?(c(),_(Q,{key:0,dense:"",filled:"",mask:"###,###,###,###,###,###,###,###,###,###","reverse-fill-mask":"",prefix:"Rp",modelValue:e.Value,"onUpdate:modelValue":d=>e.Value=d,rules:[d=>!!d&&e.IsRequired]},null,8,["modelValue","onUpdate:modelValue","rules"])):w("",!0)])]),e.Dividen?(c(),V("tr",ue,[l("td",pe,[s(F)])])):w("",!0)],64))),128))])]),_:1}),l("div",me,[s(R,{outline:"",color:"primary",unelevated:"",label:"Kembali",to:{name:"penginputan-index"},"no-caps":"",loading:t.loading},null,8,["loading"]),s(R,{type:"submit",color:"primary",unelevated:"",label:"Simpan","no-caps":"",loading:t.loading},null,8,["loading"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}var we=D(N,[["render",he]]);export{we as default};
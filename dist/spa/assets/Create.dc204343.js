import{Q as y}from"./uid.c2c46f2b.js";import{Q as p}from"./QSelect.6d08db79.js";import{Q as C,b as F,a as g}from"./QItem.bbe32b6f.js";import{Q as I}from"./QSeparator.0a41cb4e.js";import{Q as _}from"./QInput.899ee58c.js";import{Q as R}from"./QMarkupTable.3ee7d965.js";import{_ as D,p as k,r as u,t as m,x as h,y as i,z as s,B as f,aI as P,K as l,aJ as U,aK as K,C as c,E as b,F as L,G as V,J as w,aL as v,A as Q}from"./index.5ce41903.js";import{Q as N}from"./QForm.5fa90aa9.js";import{Q as $}from"./QCard.7615c9bf.js";import{Q as q}from"./QPage.d7b8534d.js";import"./use-key-composition.c3784a80.js";import"./QDialog.acc4c519.js";const B=k({props:["user"],setup(){return{list_year:u([]),year:u(null),list_regency:u([]),regency:u(null),fields:u([]),loading:u(!1)}},mounted(){this.getYear()},methods:{getYear(){this.loading=!0,this.$api.get("/forms?Limit=-").then(t=>{this.list_year=t.data.data.Rows.map(a=>({label:a.Year,value:a.ID})),this.loading=!1}).catch(t=>{console.log(t)})},filterRegency(t,a){if(t===""){a(()=>{var o;this.list_regency=(o=this.user)==null?void 0:o.Group.Details.map(r=>({label:r.RegencyCity.Name,value:r.RegencyCityID,province:r.RegencyCity.Province.LongName}))});return}a(()=>{var r;const o=t.toLowerCase();this.list_regency=(r=this.user)==null?void 0:r.Group.Details.map(d=>({label:d.RegencyCity.Name,value:d.RegencyCityID,province:d.RegencyCity.Province.LongName})).filter(d=>d.label.toLowerCase().indexOf(o)>-1)})},getForm(t){this.loading=!0;const a=this.list_year.find(o=>o.value==t).label;this.$api.get("/forms/"+a+'?Relation={"Name": "Fields"}').then(o=>(this.fields=o.data.data.Fields,this.loading=!1,o)).then(o=>{this.$refs.myForm.resetValidation()}).catch(o=>{console.log(o)})},submit(){this.loading=!0;const t={FormID:this.year,UserID:this.user.ID,RegencyCityID:this.regency,FieldResponse:this.fields.map(a=>({FieldID:a.ID,Value:a.Value}))};this.$api.post("form-responses",t).then(a=>{this.$q.notify({message:"Data berhasil tersimpan",color:"positive"}),this.getForm(this.year)}).catch(a=>{console.log(a)})}}}),S=l("div",{class:"tw-text-3xl tw-mb-4"},"Buat Penginputan",-1),T={class:"q-tr--no-hover"},A=l("td",null,[l("div",{class:""},"-")],-1),z=l("td",null,[l("div",{class:""},"Pilih Tahun Anggaran")],-1),G={class:"md:tw-block tw-hidden"},Y={class:"tw-table-row md:tw-hidden"},j={colspan:"100%"},E={class:"q-tr--no-hover"},J=l("td",null,"-",-1),M=l("td",null,"Pilih Kabupaten Kota",-1),O={class:"md:tw-block tw-hidden"},H={class:"tw-table-row md:tw-hidden"},W={colspan:"100%"},X={class:"q-tr--no-hover"},Z={colspan:"100%"},x={class:"q-tr--no-hover"},ee={class:"md:tw-block tw-hidden"},te={class:"tw-table-row md:tw-hidden"},le={colspan:"100%"},ae={class:"tw-flex tw-justify-center tw-mt-4 tw-gap-4"};function se(t,a,o,r,d,oe){return m(),h(q,{class:"tw-p-6"},{default:i(()=>[S,s($,{flat:""},{default:i(()=>[s(y,{class:"text-primary tw-font-bold"},{default:i(()=>[f(" Anggaran APBD Kab/Kota ")]),_:1}),s(y,{class:"q-pt-none"},{default:i(()=>[s(N,{onSubmit:P(t.submit,["prevent"]),ref:"myForm"},{default:i(()=>[s(R,{flat:"",separator:"none",class:"tw-h-auto"},{default:i(()=>[l("tbody",null,[l("tr",T,[A,z,l("td",G,[s(p,{dense:"",filled:"",modelValue:t.year,"onUpdate:modelValue":[a[0]||(a[0]=e=>t.year=e),t.getForm],label:"Pilih Tahun",options:t.list_year,"map-options":"","emit-value":"",rules:[e=>!!e]},null,8,["modelValue","options","onUpdate:modelValue","rules"])])]),l("tr",Y,[l("td",j,[s(p,{dense:"",filled:"",modelValue:t.year,"onUpdate:modelValue":[a[1]||(a[1]=e=>t.year=e),t.getForm],label:"Pilih Tahun",options:t.list_year,"map-options":"","emit-value":"",rules:[e=>!!e]},null,8,["modelValue","options","onUpdate:modelValue","rules"])])]),l("tr",E,[J,M,l("td",O,[s(p,{dense:"",filled:"",modelValue:t.regency,"onUpdate:modelValue":a[2]||(a[2]=e=>t.regency=e),label:"Pilih Kabupaten Kota",options:t.list_regency,onFilter:t.filterRegency,"use-input":"","map-options":"","emit-value":"",rules:[e=>!!e]},{option:i(e=>[s(C,U(K(e.itemProps)),{default:i(()=>[s(F,null,{default:i(()=>[s(g,null,{default:i(()=>[f(c(e.opt.label),1)]),_:2},1024),s(g,{caption:""},{default:i(()=>[f(c(e.opt.province),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","onFilter","rules"])])]),l("tr",H,[l("td",W,[s(p,{dense:"",filled:"",modelValue:t.year,"onUpdate:modelValue":a[3]||(a[3]=e=>t.year=e),label:"Pilih Tahun",options:t.list_year,"map-options":"","emit-value":"",rules:[e=>!!e||"Field ini wajib diisi"]},null,8,["modelValue","options","rules"])])]),l("tr",X,[l("td",Z,[s(I,{class:"tw-w-full"})])]),(m(!0),b(V,null,L(t.fields,e=>(m(),b(V,{key:e.ID},[l("tr",x,[l("td",{class:v(e.class)},c(e.Code),3),l("td",{class:v(e.class)},c(e.Label),3),l("td",ee,[e.Type=="currency"?(m(),h(_,{key:0,dense:"",filled:"",mask:"###,###,###,###,###,###,###,###,###,###","reverse-fill-mask":"",prefix:"Rp",modelValue:e.Value,"onUpdate:modelValue":n=>e.Value=n,rules:[n=>!!n&&e.IsRequired]},null,8,["modelValue","onUpdate:modelValue","rules"])):Q("",!0)])]),l("tr",te,[l("td",le,[e.Type=="currency"?(m(),h(_,{key:0,dense:"",filled:"",mask:"###,###,###,###,###,###,###,###,###,###","reverse-fill-mask":"",prefix:"Rp",modelValue:e.Value,"onUpdate:modelValue":n=>e.Value=n,rules:[n=>!!n&&e.IsRequired]},null,8,["modelValue","onUpdate:modelValue","rules"])):Q("",!0)])])],64))),128))])]),_:1}),l("div",ae,[s(w,{outline:"",color:"primary",unelevated:"",label:"Kembali",to:{name:"penginputan-index"},"no-caps":"",loading:t.loading},null,8,["loading"]),s(w,{type:"submit",color:"primary",unelevated:"",label:"Simpan","no-caps":"",loading:t.loading},null,8,["loading"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}var _e=D(B,[["render",se]]);export{_e as default};

import{c as V,Q as I}from"./uid.e230f7cc.js";import{Q as m}from"./QSelect.f039e804.js";import{Q as g,h as b,g as h}from"./QDialog.56021862.js";import{Q as k}from"./QSeparator.833c1549.js";import{Q as w}from"./QInput.67983db4.js";import{Q as U}from"./QMarkupTable.8480e3dd.js";import{_ as D,p as K,I as q,r as n,t as f,x as y,y as a,z as s,B as u,ct as L,K as l,b5 as v,bx as _,C as r,E as P,F as S,G as F,J as Q,b4 as C,A as R}from"./index.bac37d25.js";import{Q as $}from"./QForm.fab416f0.js";import{Q as B}from"./QPage.85b3fbe9.js";const N=K({props:["user"],setup(){return{auth:q(),list_year:n([]),year:n(null),list_regency:n([]),regency:n(null),list_province:n([]),province:n(null),fields:n([]),loading:n(!1)}},mounted(){this.getYear()},methods:{getYear(){this.loading=!0,this.$api.get("/forms?Limit=-").then(e=>{this.list_year=e.data.data.Rows.map(o=>({label:o.Year,value:o.ID})),this.loading=!1}).catch(e=>{console.log(e)})},filterRegency(e,o){if(e===""){o(()=>{this.list_regency=this.auth.regency});return}o(()=>{var c;const i=e.toLowerCase();this.list_regency=(c=this.user)==null?void 0:c.Group.Details.map(p=>({label:p.RegencyCity.Name,value:p.RegencyCityID,province:p.RegencyCity.Province.LongName})).filter(p=>p.label.toLowerCase().indexOf(i)>-1)})},filterProvince(e,o){if(e===""){o(()=>{this.list_province=this.auth.provinces});return}o(()=>{const i=e.toLowerCase();this.list_province=this.auth.provinces.filter(c=>c.label.toLowerCase().indexOf(i)>-1)})},getForm(e){this.loading=!0;const o=this.list_year.find(i=>i.value==e).label;this.$api.get("/forms/"+o+'?Relation={"Name": "Fields"}').then(i=>(this.fields=i.data.data.Fields,this.loading=!1,i)).then(i=>{this.$refs.myForm.resetValidation()}).catch(i=>{console.log(i)})},submit(){this.loading=!0;const e={FormID:this.year,UserID:this.user.ID,RegencyCityID:this.regency,FieldResponse:this.fields.map(o=>({FieldID:o.ID,Value:o.Value}))};this.$api.post("form-responses",e).then(o=>{this.$q.notify({message:"Data berhasil tersimpan",color:"positive"}),this.getForm(this.year)}).catch(o=>{console.log(o)})}}}),T=l("div",{class:"tw-text-3xl tw-mb-4"},"Buat Penginputan",-1),A={class:"q-tr--no-hover"},z=l("td",null,[l("div",{class:""},"-")],-1),Y=l("td",null,[l("div",{class:""},"Pilih Tahun Anggaran")],-1),E={class:"md:tw-block tw-hidden"},G={class:"tw-table-row md:tw-hidden"},M={colspan:"100%"},O={class:"q-tr--no-hover"},j=l("td",null,"-",-1),J=l("td",null,"Pilih Provinsi",-1),H={class:"md:tw-block tw-hidden"},W={class:"tw-table-row md:tw-hidden"},X={colspan:"100%"},Z={class:"q-tr--no-hover"},x=l("td",null,"-",-1),ee=l("td",null,"Pilih Kabupaten Kota",-1),te={class:"md:tw-block tw-hidden"},le={class:"tw-table-row md:tw-hidden"},oe={colspan:"100%"},se={class:"q-tr--no-hover"},ae={colspan:"100%"},ie={class:"q-tr--no-hover"},ne={class:"md:tw-block tw-hidden"},re={class:"tw-table-row md:tw-hidden"},de={colspan:"100%"},ue={class:"tw-flex tw-justify-center tw-mt-4 tw-gap-4"};function pe(e,o,i,c,p,me){return f(),y(B,{class:"tw-p-6"},{default:a(()=>[T,s(I,{flat:""},{default:a(()=>[s(V,{class:"text-primary tw-font-bold"},{default:a(()=>[u(" Anggaran APBD Kab/Kota ")]),_:1}),s(V,{class:"q-pt-none"},{default:a(()=>[s($,{onSubmit:L(e.submit,["prevent"]),ref:"myForm"},{default:a(()=>[s(U,{flat:"",separator:"none",class:"tw-h-auto"},{default:a(()=>[l("tbody",null,[l("tr",A,[z,Y,l("td",E,[s(m,{dense:"",filled:"",modelValue:e.year,"onUpdate:modelValue":[o[0]||(o[0]=t=>e.year=t),e.getForm],label:"Pilih Tahun",options:e.list_year,"map-options":"","emit-value":"",rules:[t=>!!t]},null,8,["modelValue","options","onUpdate:modelValue","rules"])])]),l("tr",G,[l("td",M,[s(m,{dense:"",filled:"",modelValue:e.year,"onUpdate:modelValue":[o[1]||(o[1]=t=>e.year=t),e.getForm],label:"Pilih Tahun",options:e.list_year,"map-options":"","emit-value":"",rules:[t=>!!t]},null,8,["modelValue","options","onUpdate:modelValue","rules"])])]),l("tr",O,[j,J,l("td",H,[s(m,{dense:"",filled:"",modelValue:e.auth.province,"onUpdate:modelValue":[o[2]||(o[2]=t=>e.auth.province=t),e.auth.setRegencies],label:"Pilih Provinsi",options:e.list_province,onFilter:e.filterProvince,disable:e.auth.provinces.length==1,"use-input":"","map-options":"","emit-value":"",rules:[t=>!!t]},{option:a(t=>[s(g,v(_(t.itemProps)),{default:a(()=>[s(b,null,{default:a(()=>[s(h,null,{default:a(()=>[u(r(t.opt.label),1)]),_:2},1024),s(h,{caption:""},{default:a(()=>[u(r(t.opt.province),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","onFilter","onUpdate:modelValue","disable","rules"])])]),l("tr",W,[l("td",X,[s(m,{dense:"",filled:"",modelValue:e.auth.province,"onUpdate:modelValue":[o[3]||(o[3]=t=>e.auth.province=t),e.auth.setRegencies],label:"Pilih Provinsi",options:e.list_province,onFilter:e.filterProvince,disable:e.auth.provinces.length==1,"use-input":"","map-options":"","emit-value":"",rules:[t=>!!t]},null,8,["modelValue","options","onFilter","onUpdate:modelValue","disable","rules"])])]),l("tr",Z,[x,ee,l("td",te,[s(m,{dense:"",filled:"",modelValue:e.regency,"onUpdate:modelValue":o[4]||(o[4]=t=>e.regency=t),label:"Pilih Kabupaten Kota",options:e.list_regency,onFilter:e.filterRegency,disable:e.auth.province==null,"use-input":"","map-options":"","emit-value":"",rules:[t=>!!t]},{option:a(t=>[s(g,v(_(t.itemProps)),{default:a(()=>[s(b,null,{default:a(()=>[s(h,null,{default:a(()=>[u(r(t.opt.label),1)]),_:2},1024),s(h,{caption:""},{default:a(()=>[u(r(t.opt.province),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","onFilter","disable","rules"])])]),l("tr",le,[l("td",oe,[s(m,{dense:"",filled:"",modelValue:e.regency,"onUpdate:modelValue":o[5]||(o[5]=t=>e.regency=t),label:"Pilih Kabupaten Kota",options:e.list_regency,onFilter:e.filterRegency,disable:e.auth.province==null,"use-input":"","map-options":"","emit-value":"",rules:[t=>!!t]},{option:a(t=>[s(g,v(_(t.itemProps)),{default:a(()=>[s(b,null,{default:a(()=>[s(h,null,{default:a(()=>[u(r(t.opt.label),1)]),_:2},1024),s(h,{caption:""},{default:a(()=>[u(r(t.opt.province),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","onFilter","disable","rules"])])]),l("tr",se,[l("td",ae,[s(k,{class:"tw-w-full"})])]),(f(!0),P(F,null,S(e.fields,t=>(f(),P(F,{key:t.ID},[l("tr",ie,[l("td",{class:C(t.class)},r(t.Code),3),l("td",{class:C(t.class)},r(t.Label),3),l("td",ne,[t.Type=="currency"?(f(),y(w,{key:0,dense:"",filled:"",mask:"###,###,###,###,###,###,###,###,###,###","reverse-fill-mask":"",prefix:"Rp",modelValue:t.Value,"onUpdate:modelValue":d=>t.Value=d,rules:[d=>!!d&&t.IsRequired]},null,8,["modelValue","onUpdate:modelValue","rules"])):R("",!0)])]),l("tr",re,[l("td",de,[t.Type=="currency"?(f(),y(w,{key:0,dense:"",filled:"",mask:"###,###,###,###,###,###,###,###,###,###","reverse-fill-mask":"",prefix:"Rp",modelValue:t.Value,"onUpdate:modelValue":d=>t.Value=d,rules:[d=>!!d&&t.IsRequired]},null,8,["modelValue","onUpdate:modelValue","rules"])):R("",!0)])])],64))),128))])]),_:1}),l("div",ue,[s(Q,{outline:"",color:"primary",unelevated:"",label:"Kembali",to:{name:"penginputan-index"},"no-caps":"",loading:e.loading},null,8,["loading"]),s(Q,{type:"submit",color:"primary",unelevated:"",label:"Simpan","no-caps":"",loading:e.loading},null,8,["loading"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}var we=D(N,[["render",pe]]);export{we as default};

import{c as R,Q}from"./uid.bfe06df0.js";import{b as k,Q as m}from"./QMarkupTable.f0ef64da.js";import{g,i as y,h,Q as F}from"./QDialog.abaf2542.js";import{Q as P}from"./QInput.f5943d7a.js";import{_ as U,p as $,I as q,r as n,t as c,x as v,y as a,z as o,B as u,ct as K,K as s,b5 as _,bx as b,C as r,E as V,F as L,G as I,J as D,A as w,b4 as C}from"./index.99a95952.js";import{Q as N}from"./QForm.972c26e7.js";import{Q as S}from"./QPage.00d214ad.js";const B=$({props:["user"],setup(){return{auth:q(),list_year:n([]),year:n(null),list_province:n([]),province:n(null),list_regency:n([]),regency:n(null),fields:n([]),loading:n(!1)}},mounted(){this.getData(),this.getYear()},methods:{getData(){return this.$api.get(`/form-responses/${this.$route.params.id}?Relations={"Name": "FieldResponse.Field"}&Relations={"Name": "RegencyCity"}`).then(e=>{this.year=e.data.data.FormID,this.regency=e.data.data.RegencyCityID,this.list_province=this.auth.provinces,this.auth.province=e.data.data.RegencyCity.ProvinceID,this.auth.setRegencies(e.data.data.RegencyCity.ProvinceID),this.list_regency=this.auth.regency,this.fields=e.data.data.FieldResponse.map(l=>({...l.Field,Value:l.Value,ResponseFieldID:l.ID}))}).catch(e=>{console.log(e)})},getYear(){this.loading=!0,this.$api.get("/forms?Limit=-").then(e=>{this.list_year=e.data.data.Rows.map(l=>({label:l.Year,value:l.ID})),this.loading=!1}).catch(e=>{console.log(e)})},filterRegency(e,l){if(e===""){l(()=>{this.list_regency=this.auth.regency});return}l(()=>{var f;const i=e.toLowerCase();this.list_regency=(f=this.user)==null?void 0:f.Group.Details.map(p=>({label:p.RegencyCity.Name,value:p.RegencyCityID,province:p.RegencyCity.Province.LongName})).filter(p=>p.label.toLowerCase().indexOf(i)>-1)})},filterProvince(e,l){if(e===""){l(()=>{this.list_province=this.auth.provinces});return}l(()=>{const i=e.toLowerCase();this.list_province=this.auth.provinces.filter(f=>f.label.toLowerCase().indexOf(i)>-1)})},getForm(e){this.loading=!0;const l=this.list_year.find(i=>i.value==e).label;this.$api.get("/forms/"+l+'?Relation={"Name": "Fields"}').then(i=>(this.fields=i.data.data.Fields,this.loading=!1,i)).then(i=>{this.$refs.myForm.resetValidation()}).catch(i=>{console.log(i)})},submit(){this.loading=!0;const e={FormID:this.year,UserID:this.user.ID,RegencyCityID:this.regency,FieldResponse:this.fields.map(l=>({ID:l.ResponseFieldID,FormResponseID:parseInt(this.$route.params.id),Value:l.Value}))};this.$api.put("form-responses/"+this.$route.params.id,e).then(l=>{this.$q.notify({message:"Data berhasil tersimpan",color:"positive"}),this.loading=!1}).catch(l=>{console.log(l)})}}}),T=s("div",{class:"tw-text-3xl tw-mb-4"},"Edit Penginputan",-1),A={class:"q-tr--no-hover"},E=s("td",null,[s("div",{class:""},"-")],-1),z=s("td",null,[s("div",{class:""},"Pilih Tahun Anggaran")],-1),Y={class:"md:tw-block tw-hidden"},G={class:"tw-table-row md:tw-hidden"},M={colspan:"100%"},O={class:"q-tr--no-hover"},j=s("td",null,"-",-1),J=s("td",null,"Pilih Provinsi",-1),H={class:"md:tw-block tw-hidden"},W={class:"tw-table-row md:tw-hidden"},X={colspan:"100%"},Z={class:"q-tr--no-hover"},x=s("td",null,"-",-1),ee=s("td",null,"Pilih Kabupaten Kota",-1),te={class:"md:tw-block tw-hidden"},le={class:"tw-table-row md:tw-hidden"},se={colspan:"100%"},oe={class:"q-tr--no-hover"},ae={colspan:"100%"},ie={key:0,class:"q-tr--no-hover"},ne={colspan:"100%"},re={class:"q-tr--no-hover"},de={class:"md:tw-block tw-hidden"},ue={class:"q-tr--no-hover tw-table-row md:tw-hidden"},pe={colspan:"100%"},me={class:"tw-flex tw-justify-center tw-mt-4 tw-gap-4"};function he(e,l,i,f,p,ce){return c(),v(S,{class:"tw-p-6"},{default:a(()=>[T,o(Q,{flat:""},{default:a(()=>[o(R,{class:"text-primary tw-font-bold"},{default:a(()=>[u(" Anggaran APBD Kab/Kota ")]),_:1}),o(R,{class:"q-pt-none"},{default:a(()=>[o(N,{onSubmit:K(e.submit,["prevent"]),ref:"myForm"},{default:a(()=>[o(k,{flat:"",separator:"none",class:"tw-h-auto"},{default:a(()=>[s("tbody",null,[s("tr",A,[E,z,s("td",Y,[o(m,{dense:"",filled:"",modelValue:e.year,"onUpdate:modelValue":[l[0]||(l[0]=t=>e.year=t),e.getForm],label:"Pilih Tahun",options:e.list_year,"map-options":"","emit-value":"",rules:[t=>!!t]},null,8,["modelValue","options","onUpdate:modelValue","rules"])])]),s("tr",G,[s("td",M,[o(m,{dense:"",filled:"",modelValue:e.year,"onUpdate:modelValue":[l[1]||(l[1]=t=>e.year=t),e.getForm],label:"Pilih Tahun",options:e.list_year,"map-options":"","emit-value":"",rules:[t=>!!t]},null,8,["modelValue","options","onUpdate:modelValue","rules"])])]),s("tr",O,[j,J,s("td",H,[o(m,{ref:"selectProvince",dense:"",filled:"",modelValue:e.auth.province,"onUpdate:modelValue":[l[2]||(l[2]=t=>e.auth.province=t),e.auth.setRegencies],label:"Pilih Provinsi",options:e.list_province,onFilter:e.filterProvince,disable:e.auth.provinces.length==1,"use-input":"","map-options":"","emit-value":"",rules:[t=>!!t]},{option:a(t=>[o(g,_(b(t.itemProps)),{default:a(()=>[o(y,null,{default:a(()=>[o(h,null,{default:a(()=>[u(r(t.opt.label),1)]),_:2},1024),o(h,{caption:""},{default:a(()=>[u(r(t.opt.province),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","onFilter","onUpdate:modelValue","disable","rules"])])]),s("tr",W,[s("td",X,[o(m,{ref:"selectProvince",dense:"",filled:"",modelValue:e.auth.province,"onUpdate:modelValue":[l[3]||(l[3]=t=>e.auth.province=t),e.auth.setRegencies],label:"Pilih Provinsi",options:e.list_province,onFilter:e.filterProvince,disable:e.auth.provinces.length==1,"use-input":"","map-options":"","emit-value":"",rules:[t=>!!t]},null,8,["modelValue","options","onFilter","onUpdate:modelValue","disable","rules"])])]),s("tr",Z,[x,ee,s("td",te,[o(m,{dense:"",filled:"",modelValue:e.regency,"onUpdate:modelValue":l[4]||(l[4]=t=>e.regency=t),label:"Pilih Kabupaten Kota",options:e.list_regency,onFilter:e.filterRegency,disable:e.auth.province==null,"use-input":"","map-options":"","emit-value":"",rules:[t=>!!t]},{option:a(t=>[o(g,_(b(t.itemProps)),{default:a(()=>[o(y,null,{default:a(()=>[o(h,null,{default:a(()=>[u(r(t.opt.label),1)]),_:2},1024),o(h,{caption:""},{default:a(()=>[u(r(t.opt.province),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","onFilter","disable","rules"])])]),s("tr",le,[s("td",se,[o(m,{dense:"",filled:"",modelValue:e.regency,"onUpdate:modelValue":l[5]||(l[5]=t=>e.regency=t),label:"Pilih Kabupaten Kota",options:e.list_regency,onFilter:e.filterRegency,disable:e.auth.province==null,"use-input":"","map-options":"","emit-value":"",rules:[t=>!!t]},{option:a(t=>[o(g,_(b(t.itemProps)),{default:a(()=>[o(y,null,{default:a(()=>[o(h,null,{default:a(()=>[u(r(t.opt.label),1)]),_:2},1024),o(h,{caption:""},{default:a(()=>[u(r(t.opt.province),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","onFilter","disable","rules"])])]),s("tr",oe,[s("td",ae,[o(F,{class:"tw-w-full"})])]),(c(!0),V(I,null,L(e.fields,t=>(c(),V(I,{key:t.ID},[t.Dividen?(c(),V("tr",ie,[s("td",ne,[o(F)])])):w("",!0),s("tr",re,[s("td",{class:C(t.class)},r(t.Code),3),s("td",{class:C(t.class)},r(t.Label),3),s("td",de,[t.Type=="currency"?(c(),v(P,{key:0,dense:"",filled:"",mask:"###,###,###,###,###,###,###,###,###,###","reverse-fill-mask":"",prefix:"Rp",modelValue:t.Value,"onUpdate:modelValue":d=>t.Value=d,rules:[d=>!!d&&t.IsRequired]},null,8,["modelValue","onUpdate:modelValue","rules"])):w("",!0)])]),s("tr",ue,[s("td",pe,[t.Type=="currency"?(c(),v(P,{key:0,dense:"",filled:"",mask:"###,###,###,###,###,###,###,###,###,###","reverse-fill-mask":"",prefix:"Rp",modelValue:t.Value,"onUpdate:modelValue":d=>t.Value=d,rules:[d=>!!d&&t.IsRequired]},null,8,["modelValue","onUpdate:modelValue","rules"])):w("",!0)])])],64))),128))])]),_:1}),s("div",me,[o(D,{outline:"",color:"primary",unelevated:"",label:"Kembali",to:{name:"penginputan-index"},"no-caps":"",loading:e.loading},null,8,["loading"]),o(D,{type:"submit",color:"primary",unelevated:"",label:"Simpan","no-caps":"",loading:e.loading},null,8,["loading"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}var we=U(B,[["render",he]]);export{we as default};

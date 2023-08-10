import{Q}from"./QTd.20bb150f.js";import{k as C,j as S,i as u,g as D,Q as q}from"./QDialog.562b1b87.js";import{Q as U}from"./QList.693650b6.js";import{_ as B,p as z,r as l,q as y,t as c,E as T,z as a,y as t,G as x,B as d,C as P,J as n,f as p,x as h,K as g,ct as K,R as N}from"./index.bad3eabc.js";import{Q as L}from"./QTable.99572446.js";import{Q as b,c as m}from"./uid.71444742.js";import{Q as E}from"./QPage.9a4fa4ac.js";import{Q as F}from"./QSpace.b57c5243.js";import{Q as V}from"./QInput.94c2cf8e.js";import{Q as $}from"./QCardActions.6b9f573d.js";import{Q as M}from"./QForm.93c6957a.js";import{C as k}from"./ClosePopup.0ef94328.js";import{_ as j}from"./VxIcon.f381a810.js";import"./QMarkupTable.5be047e7.js";const _={Name:null,Description:null},A=z({props:["user"],components:{VxIcon:j},setup(){const e=[{name:"index",label:"#",align:"center"},{name:"Name",label:"Nama",align:"left",field:"Name",sortable:!0},{name:"Provinsi",label:"Provinsi",align:"left",field:o=>o.Province.LongName,sortable:!0},{name:"Kode",label:"Kode",align:"left",field:"Code",sortable:!0}];return{rows:l([]),columns:e,pagination:l({page:1,rowsPerPage:10}),search:l(""),totalPages:l(0),form_dialog:l(!1),confirm:l(!1),is_edit:l(!1),loading:l(!1),id:l(""),form:l(structuredClone(_))}},mounted(){this.$refs.tableRef.requestServerInteraction()},methods:{getData(e){this.loading=!0,this.pagination=e==null?void 0:e.pagination;const o=new URLSearchParams,w={params:o};let{page:r,rowsPerPage:f,rowsNumber:v}=e.pagination;f==0&&(r=1,f=v),this.totalPages<r&&(r=this.totalPages),o.append("Limit",f),o.append("Page",r),o.append("Relations",'{"Name":"Province"}'),this.$api.get("/regency-cities",w).then(s=>{this.rows=s.data.data.Rows,this.pagination.rowsNumber=s.data.data.TotalRows,this.totalPages=s.data.data.TotalPages,this.loading=!1}).catch(s=>{console.log(s),this.loading=!1})},openDialog(e){e?(this.is_edit=!0,this.id=e.ID,delete e.Password,this.form={...e}):(this.form={..._},this.is_edit=!1),this.form_dialog=!0},closeDialog(){this.form={..._},this.form_dialog=!1,this.loading=!1},submit(){this.loading=!0,this.is_edit?this.$api.put("/permissions/"+this.id,{...this.form,UpdateBy:this.user.Username}).then(e=>{this.$q.notify({message:"Permission berhasil diubah",color:"positive"}),this.closeDialog(),this.$refs.tableRef.requestServerInteraction()}).catch(e=>{this.closeDialog(),console.log(e)}):this.$api.post("/permissions",{...this.form,CreatedBy:this.user.Username}).then(e=>{this.$q.notify({message:"Permission berhasil ditambahkan",color:"positive"}),this.closeDialog(),this.$refs.tableRef.requestServerInteraction()}).catch(e=>{this.closeDialog(),console.log(e)})},confirmDelete(e){this.id=e,this.confirm=!0},deleteData(){this.$api.delete("/permissions/"+this.id).then(e=>{this.$q.notify({message:"Permission berhasil dihapus",color:"positive"}),this.$refs.tableRef.requestServerInteraction(),this.confirm=!1}).catch(e=>{console.log(e),this.confirm=!1})}}}),G=g("div",{class:"tw-text-3xl tw-mb-4"},"Kabupaten / Kota",-1),H=g("div",{class:"tw-flex tw-justify-between tw-w-full"},null,-1),J={class:"text-h6"},W={class:"text-h6 text-negative tw-flex tw-items-center"};function Y(e,o,w,r,f,v){const s=y("vx-icon"),R=y("VxIcon");return c(),T(x,null,[a(E,{class:"tw-p-6"},{default:t(()=>[G,a(b,{flat:""},{default:t(()=>[a(m,null,{default:t(()=>[a(L,{flat:"",ref:"tableRef",class:"remove-padding-table-top",loading:e.loading,rows:e.rows,columns:e.columns,onRequest:e.getData,pagination:e.pagination,"onUpdate:pagination":o[0]||(o[0]=i=>e.pagination=i)},{top:t(()=>[H]),"body-cell-index":t(i=>[a(Q,{props:i},{default:t(()=>[d(P(i.rowIndex+1),1)]),_:2},1032,["props"])]),"body-cell-action":t(i=>[a(Q,{props:i},{default:t(()=>[a(n,{flat:"",dense:"",size:"sm",color:"primary"},{default:t(()=>[a(s,{iconName:"More",size:18}),a(S,{"auto-close":"",class:"tw-shadow-none tw-border"},{default:t(()=>[a(U,{style:{"min-width":"100px"}},{default:t(()=>[p((c(),h(D,{clickable:"",class:"text-primary",onClick:I=>e.openDialog(i.row)},{default:t(()=>[a(u,{avatar:""},{default:t(()=>[a(s,{iconName:"Edit",size:20})]),_:1}),a(u,null,{default:t(()=>[d("Ubah")]),_:1})]),_:2},1032,["onClick"])),[[N]]),a(q),p((c(),h(D,{clickable:"",class:"text-negative",onClick:I=>e.confirmDelete(i.row.ID)},{default:t(()=>[a(u,{avatar:""},{default:t(()=>[a(s,{iconName:"Trash",size:20})]),_:1}),a(u,null,{default:t(()=>[d("Hapus")]),_:1})]),_:2},1032,["onClick"])),[[N]])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["loading","rows","columns","onRequest","pagination"])]),_:1})]),_:1})]),_:1}),a(C,{modelValue:e.form_dialog,"onUpdate:modelValue":o[3]||(o[3]=i=>e.form_dialog=i)},{default:t(()=>[a(b,{style:{"min-width":"600px"}},{default:t(()=>[a(m,{class:"row items-center"},{default:t(()=>[g("div",J,P(e.is_edit?"Ubah":"Tmabah")+" Permission",1),a(F),p((c(),h(n,{flat:"",round:"",dense:""},{default:t(()=>[a(s,{iconName:"CloseCircle",size:20})]),_:1})),[[k]])]),_:1}),a(M,{onSubmit:K(e.submit,["prevent"])},{default:t(()=>[a(m,{class:"tw-gap-y-2"},{default:t(()=>[a(V,{modelValue:e.form.Name,"onUpdate:modelValue":o[1]||(o[1]=i=>e.form.Name=i),filled:"",label:"Nama",rules:[i=>!!i||"Field harus diisi"]},null,8,["modelValue","rules"]),a(V,{modelValue:e.form.Description,"onUpdate:modelValue":o[2]||(o[2]=i=>e.form.Description=i),filled:"",label:"Deskripsi",type:"textarea"},null,8,["modelValue"])]),_:1}),a($,{align:"right"},{default:t(()=>[a(n,{label:"Batal","no-caps":"",flat:"",onClick:e.closeDialog,color:"negative"},null,8,["onClick"]),a(n,{label:"Simpan",loading:e.loading,type:"submit","no-caps":"",flat:"",color:"primary"},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"]),a(C,{modelValue:e.confirm,"onUpdate:modelValue":o[4]||(o[4]=i=>e.confirm=i)},{default:t(()=>[a(b,null,{default:t(()=>[a(m,null,{default:t(()=>[g("div",W,[a(R,{iconName:"Warning2",class:"tw-mr-2",size:22}),d(" Konfirmasi ")])]),_:1}),a(m,{class:"q-pt-none"},{default:t(()=>[d(" Anda yakin ingin menghapus data ini? ")]),_:1}),a($,{align:"right"},{default:t(()=>[p(a(n,{flat:"",label:"Cancel","no-caps":""},null,512),[[k]]),a(n,{flat:"",label:"Yes",color:"negative","no-caps":"",onClick:e.deleteData},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var fe=B(A,[["render",Y]]);export{fe as default};

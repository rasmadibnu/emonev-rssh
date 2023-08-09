import{_ as P,p as $,r as t,q as _,t as d,E as x,z as a,y as s,G as B,J as l,B as n,C as b,f,x as p,K as c,ct as I,R as w}from"./index.373a2fa6.js";import{Q as h,c as r}from"./uid.5390cda5.js";import{Q as D}from"./QTd.7def6d8e.js";import{k as v,j as U,i as u,g as Q,Q as z}from"./QDialog.c29f1e35.js";import{Q as S}from"./QList.d0cf44d3.js";import{Q as q}from"./QTable.08dbe4db.js";import{Q as T}from"./QPage.689dc5cc.js";import{Q as A}from"./QSpace.5863c1c7.js";import{Q as C}from"./QInput.107ba180.js";import{Q as y}from"./QCardActions.d951e6f0.js";import{Q as E}from"./QForm.8e6548dd.js";import{C as k}from"./ClosePopup.dbbc77a1.js";import{_ as F}from"./VxIcon.a9326ef6.js";import"./QMarkupTable.055156b0.js";const g={Name:null,Description:null},M=$({props:["user"],components:{VxIcon:F},setup(){const e=[{name:"index",label:"#",align:"center"},{name:"Name",label:"Nama",align:"left",field:"Name",sortable:!0},{name:"Deskripsi",label:"Deskripsi",align:"left",field:"Description",sortable:!0},{name:"action",label:"Action",align:"right"}];return{rows:t([]),columns:e,pagination:t({page:1,rowsPerPage:10}),search:t(""),totalPages:t(0),form_dialog:t(!1),confirm:t(!1),is_edit:t(!1),loading:t(!1),id:t(""),form:t(structuredClone(g))}},mounted(){this.getData()},methods:{getData(){this.loading=!0,this.$api.get("/permissions").then(e=>{this.rows=e.data.data,this.loading=!1}).catch(e=>{console.log(e),this.loading=!1})},openDialog(e){e?(this.is_edit=!0,this.id=e.ID,delete e.Password,this.form={...e}):(this.form={...g},this.is_edit=!1),this.form_dialog=!0},closeDialog(){this.form={...g},this.form_dialog=!1,this.loading=!1},submit(){this.loading=!0,this.is_edit?this.$api.put("/permissions/"+this.id,{...this.form,UpdateBy:this.user.Username}).then(e=>{this.$q.notify({message:"Permission berhasil diubah",color:"positive"}),this.closeDialog(),this.getData()}).catch(e=>{this.closeDialog(),console.log(e)}):this.$api.post("/permissions",{...this.form,CreatedBy:this.user.Username}).then(e=>{this.$q.notify({message:"Permission berhasil ditambahkan",color:"positive"}),this.closeDialog(),this.getData()}).catch(e=>{this.closeDialog(),console.log(e)})},confirmDelete(e){this.id=e,this.confirm=!0},deleteData(){this.$api.delete("/permissions/"+this.id).then(e=>{this.$q.notify({message:"Permission berhasil dihapus",color:"positive"}),this.getData(),this.confirm=!1}).catch(e=>{console.log(e),this.confirm=!1})}}}),R=c("div",{class:"tw-text-3xl tw-mb-4"},"Permission",-1),j=c("div",{class:"tw-flex tw-justify-between tw-w-full"},null,-1),K={class:"text-h6"},G={class:"text-h6 text-negative tw-flex tw-items-center"};function H(e,o,J,L,W,Y){const m=_("vx-icon"),V=_("VxIcon");return d(),x(B,null,[a(T,{class:"tw-p-6"},{default:s(()=>[R,a(h,{flat:""},{default:s(()=>[a(r,{class:"text-primary tw-font-bold"},{default:s(()=>[a(l,{outline:"","no-caps":"",color:"primary",onClick:o[0]||(o[0]=i=>e.openDialog(null))},{default:s(()=>[a(m,{iconName:"AddCircle",class:"tw-mr-2",size:20}),n(" Tambah ")]),_:1})]),_:1}),a(r,{class:"q-pt-none"},{default:s(()=>[a(q,{flat:"",ref:"tableRef",class:"remove-padding-table-top",loading:e.loading,rows:e.rows,columns:e.columns,pagination:{rowsPerPage:10}},{top:s(()=>[j]),"body-cell-index":s(i=>[a(D,{props:i},{default:s(()=>[n(b(i.rowIndex+1),1)]),_:2},1032,["props"])]),"body-cell-action":s(i=>[a(D,{props:i},{default:s(()=>[a(l,{flat:"",dense:"",size:"sm",color:"primary"},{default:s(()=>[a(m,{iconName:"More",size:18}),a(U,{"auto-close":"",class:"tw-shadow-none tw-border"},{default:s(()=>[a(S,{style:{"min-width":"100px"}},{default:s(()=>[f((d(),p(Q,{clickable:"",class:"text-primary",onClick:N=>e.openDialog(i.row)},{default:s(()=>[a(u,{avatar:""},{default:s(()=>[a(m,{iconName:"Edit",size:20})]),_:1}),a(u,null,{default:s(()=>[n("Ubah")]),_:1})]),_:2},1032,["onClick"])),[[w]]),a(z),f((d(),p(Q,{clickable:"",class:"text-negative",onClick:N=>e.confirmDelete(i.row.ID)},{default:s(()=>[a(u,{avatar:""},{default:s(()=>[a(m,{iconName:"Trash",size:20})]),_:1}),a(u,null,{default:s(()=>[n("Hapus")]),_:1})]),_:2},1032,["onClick"])),[[w]])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["loading","rows","columns"])]),_:1})]),_:1})]),_:1}),a(v,{modelValue:e.form_dialog,"onUpdate:modelValue":o[3]||(o[3]=i=>e.form_dialog=i)},{default:s(()=>[a(h,{style:{width:"600px"}},{default:s(()=>[a(r,{class:"row items-center"},{default:s(()=>[c("div",K,b(e.is_edit?"Ubah":"Tmabah")+" Permission",1),a(A),f((d(),p(l,{flat:"",round:"",dense:""},{default:s(()=>[a(m,{iconName:"CloseCircle",size:20})]),_:1})),[[k]])]),_:1}),a(E,{onSubmit:I(e.submit,["prevent"])},{default:s(()=>[a(r,{class:"tw-space-y-2"},{default:s(()=>[a(C,{modelValue:e.form.Name,"onUpdate:modelValue":o[1]||(o[1]=i=>e.form.Name=i),filled:"",label:"Nama",rules:[i=>!!i||"Field harus diisi"]},null,8,["modelValue","rules"]),a(C,{modelValue:e.form.Description,"onUpdate:modelValue":o[2]||(o[2]=i=>e.form.Description=i),filled:"",label:"Deskripsi",type:"textarea"},null,8,["modelValue"])]),_:1}),a(y,{align:"right"},{default:s(()=>[a(l,{label:"Batal","no-caps":"",flat:"",onClick:e.closeDialog,color:"negative"},null,8,["onClick"]),a(l,{label:"Simpan",loading:e.loading,type:"submit","no-caps":"",flat:"",color:"primary"},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"]),a(v,{modelValue:e.confirm,"onUpdate:modelValue":o[4]||(o[4]=i=>e.confirm=i)},{default:s(()=>[a(h,null,{default:s(()=>[a(r,null,{default:s(()=>[c("div",G,[a(V,{iconName:"Warning2",class:"tw-mr-2",size:22}),n(" Konfirmasi ")])]),_:1}),a(r,{class:"q-pt-none"},{default:s(()=>[n(" Anda yakin ingin menghapus data ini? ")]),_:1}),a(y,{align:"right"},{default:s(()=>[f(a(l,{flat:"",label:"Cancel","no-caps":""},null,512),[[k]]),a(l,{flat:"",label:"Yes",color:"negative","no-caps":"",onClick:e.deleteData},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var fe=P(M,[["render",H]]);export{fe as default};

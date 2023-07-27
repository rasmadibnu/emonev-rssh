import{_ as S,p as q,r as s,q as Q,t as u,E as U,z as a,y as t,G as B,J as n,B as r,C as D,f as p,x as h,K as g,aI as z,R as C}from"./index.3ebcb345.js";import{Q as d}from"./uid.4844de5d.js";import{Q as T,a as y}from"./QTable.07242320.js";import{b as c,Q as k}from"./QItem.70c9fae1.js";import{Q as x}from"./QSeparator.698d4d94.js";import{Q as A,C as R}from"./ClosePopup.14ccf5e1.js";import{g as $,Q as E}from"./QDialog.1ce9c3c3.js";import{Q as b}from"./QCard.c2f51ffe.js";import{Q as F}from"./QPage.5b767650.js";import{Q as L}from"./QSpace.04b269c1.js";import{Q as N}from"./QInput.49c375e0.js";import{Q as V}from"./QCardActions.863ebfcf.js";import{Q as M}from"./QForm.ac7c1c3f.js";import{_ as K}from"./VxIcon.6ed7b714.js";import"./QMarkupTable.f9ca04bc.js";import"./QSelect.1b00b10e.js";import"./use-key-composition.c1ecc61d.js";const w={Name:null,Description:null},j=q({props:["user"],components:{VxIcon:K},setup(){const e=[{name:"index",label:"#",align:"center"},{name:"Name",label:"Nama",align:"left",field:"Name",sortable:!0},{name:"Deskripsi",label:"Deskripsi",align:"left",field:"Description",sortable:!0},{name:"action",label:"Action",align:"right"}];return{rows:s([]),columns:e,pagination:s({page:1,rowsPerPage:10}),search:s(""),totalPages:s(0),form_dialog:s(!1),confirm:s(!1),is_edit:s(!1),loading:s(!1),id:s(""),form:s(structuredClone(w))}},mounted(){this.$refs.tableRef.requestServerInteraction()},methods:{getData(e){this.loading=!0,this.pagination=e==null?void 0:e.pagination;const l=new URLSearchParams,_={params:l};let{page:m,rowsPerPage:f,rowsNumber:v}=e.pagination;f==0&&(m=1,f=v),this.totalPages<m&&(m=this.totalPages),l.append("Limit",f),l.append("Page",m),this.$api.get("/roles",_).then(i=>{this.rows=i.data.data.Rows,this.pagination.rowsNumber=i.data.data.TotalRows,this.totalPages=i.data.data.TotalPages,this.loading=!1}).catch(i=>{console.log(i),this.loading=!1})},openDialog(e){e?(this.is_edit=!0,this.id=e.ID,delete e.Password,this.form={...e}):(this.form={...w},this.is_edit=!1),this.form_dialog=!0},closeDialog(){this.form={...w},this.form_dialog=!1,this.loading=!1},submit(){this.loading=!0,this.is_edit?this.$api.put("/roles/"+this.id,{...this.form,UpdateBy:this.user.Username}).then(e=>{this.$q.notify({message:"Role berhasil diubah",color:"positive"}),this.closeDialog(),this.$refs.tableRef.requestServerInteraction()}).catch(e=>{this.closeDialog(),console.log(e)}):this.$api.post("/roles",{...this.form,CreatedBy:this.user.Username}).then(e=>{this.$q.notify({message:"Role berhasil ditambahkan",color:"positive"}),this.closeDialog(),this.$refs.tableRef.requestServerInteraction()}).catch(e=>{this.closeDialog(),console.log(e)})},confirmDelete(e){this.id=e,this.confirm=!0},deleteData(){this.$api.delete("/roles/"+this.id).then(e=>{this.$q.notify({message:"Role berhasil dihapus",color:"positive"}),this.$refs.tableRef.requestServerInteraction(),this.confirm=!1}).catch(e=>{console.log(e),this.confirm=!1})}}}),G=g("div",{class:"tw-text-3xl tw-mb-4"},"Role",-1),H=g("div",{class:"tw-flex tw-justify-between tw-w-full"},null,-1),J={class:"text-h6"},W={class:"text-h6 text-negative tw-flex tw-items-center"};function Y(e,l,_,m,f,v){const i=Q("vx-icon"),I=Q("VxIcon");return u(),U(B,null,[a(F,{class:"tw-p-6"},{default:t(()=>[G,a(b,{flat:""},{default:t(()=>[a(d,{class:"text-primary tw-font-bold"},{default:t(()=>[a(n,{outline:"","no-caps":"",color:"primary",onClick:l[0]||(l[0]=o=>e.openDialog(null))},{default:t(()=>[a(i,{iconName:"AddCircle",class:"tw-mr-2",size:20}),r(" Tambah ")]),_:1})]),_:1}),a(d,{class:"q-pt-none"},{default:t(()=>[a(T,{flat:"",ref:"tableRef",class:"remove-padding-table-top",loading:e.loading,rows:e.rows,columns:e.columns,onRequest:e.getData,pagination:e.pagination,"onUpdate:pagination":l[1]||(l[1]=o=>e.pagination=o)},{top:t(()=>[H]),"body-cell-index":t(o=>[a(y,{props:o},{default:t(()=>[r(D(o.rowIndex+1),1)]),_:2},1032,["props"])]),"body-cell-action":t(o=>[a(y,{props:o},{default:t(()=>[a(n,{flat:"",dense:"",size:"sm",color:"primary"},{default:t(()=>[a(i,{iconName:"More",size:18}),a(E,{"auto-close":"",class:"tw-shadow-none tw-border"},{default:t(()=>[a(A,{style:{"min-width":"100px"}},{default:t(()=>[p((u(),h(k,{clickable:"",class:"text-primary",onClick:P=>e.openDialog(o.row)},{default:t(()=>[a(c,{avatar:""},{default:t(()=>[a(i,{iconName:"Edit",size:20})]),_:1}),a(c,null,{default:t(()=>[r("Ubah")]),_:1})]),_:2},1032,["onClick"])),[[C]]),a(x),p((u(),h(k,{clickable:"",class:"text-negative",onClick:P=>e.confirmDelete(o.row.ID)},{default:t(()=>[a(c,{avatar:""},{default:t(()=>[a(i,{iconName:"Trash",size:20})]),_:1}),a(c,null,{default:t(()=>[r("Hapus")]),_:1})]),_:2},1032,["onClick"])),[[C]])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["loading","rows","columns","onRequest","pagination"])]),_:1})]),_:1})]),_:1}),a($,{modelValue:e.form_dialog,"onUpdate:modelValue":l[4]||(l[4]=o=>e.form_dialog=o)},{default:t(()=>[a(b,{style:{"min-width":"600px"}},{default:t(()=>[a(d,{class:"row items-center"},{default:t(()=>[g("div",J,D(e.is_edit?"Ubah":"Tmabah")+" Role",1),a(L),p((u(),h(n,{flat:"",round:"",dense:""},{default:t(()=>[a(i,{iconName:"CloseCircle",size:20})]),_:1})),[[R]])]),_:1}),a(M,{onSubmit:z(e.submit,["prevent"])},{default:t(()=>[a(d,{class:"tw-space-y-2"},{default:t(()=>[a(N,{modelValue:e.form.Name,"onUpdate:modelValue":l[2]||(l[2]=o=>e.form.Name=o),filled:"",label:"Nama",rules:[o=>!!o||"Field harus diisi"]},null,8,["modelValue","rules"]),a(N,{modelValue:e.form.Description,"onUpdate:modelValue":l[3]||(l[3]=o=>e.form.Description=o),filled:"",label:"Deskripsi",type:"textarea"},null,8,["modelValue"])]),_:1}),a(V,{align:"right"},{default:t(()=>[a(n,{label:"Batal","no-caps":"",flat:"",onClick:e.closeDialog,color:"negative"},null,8,["onClick"]),a(n,{label:"Simpan",loading:e.loading,type:"submit","no-caps":"",flat:"",color:"primary"},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"]),a($,{modelValue:e.confirm,"onUpdate:modelValue":l[5]||(l[5]=o=>e.confirm=o)},{default:t(()=>[a(b,null,{default:t(()=>[a(d,null,{default:t(()=>[g("div",W,[a(I,{iconName:"Warning2",class:"tw-mr-2",size:22}),r(" Konfirmasi ")])]),_:1}),a(d,{class:"q-pt-none"},{default:t(()=>[r(" Anda yakin ingin menghapus data ini? ")]),_:1}),a(V,{align:"right"},{default:t(()=>[p(a(n,{flat:"",label:"Cancel","no-caps":""},null,512),[[R]]),a(n,{flat:"",label:"Yes",color:"negative","no-caps":"",onClick:e.deleteData},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var ce=S(j,[["render",Y]]);export{ce as default};

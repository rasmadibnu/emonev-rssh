import{_ as S,p as q,r as i,q as D,t as n,E,z as l,y as t,G as z,J as d,B as r,C as g,f as w,x as m,K as b,aI as B,aJ as T,aK as G,A as M,R as U}from"./index.3ebcb345.js";import{Q as u}from"./uid.4844de5d.js";import{Q as F,a as _}from"./QTable.07242320.js";import{b as h,Q as P,a as N}from"./QItem.70c9fae1.js";import{Q as A}from"./QSeparator.698d4d94.js";import{Q as K,C as k}from"./ClosePopup.14ccf5e1.js";import{g as I,Q as L}from"./QDialog.1ce9c3c3.js";import{Q as V}from"./QCard.c2f51ffe.js";import{Q as j}from"./QPage.5b767650.js";import{Q as J}from"./QSpace.04b269c1.js";import{Q as f}from"./QInput.49c375e0.js";import{Q as H}from"./QSelect.1b00b10e.js";import{Q as $}from"./QCardActions.863ebfcf.js";import{Q as W}from"./QForm.ac7c1c3f.js";import{_ as Y}from"./VxIcon.6ed7b714.js";import"./QMarkupTable.f9ca04bc.js";import"./use-key-composition.c1ecc61d.js";const y={Username:null,GroupID:null,Name:null,Email:null,Password:null,ConfirmPassword:null},O=q({props:["user"],components:{VxIcon:Y},setup(){const e=[{name:"index",label:"#",align:"center"},{name:"Name",label:"Nama",align:"left",field:"Name",sortable:!0},{name:"Username",label:"ID Pengguna",align:"left",field:"Username",sortable:!0},{name:"Email",label:"E-Mail",align:"left",field:"Email",sortable:!0},{name:"action",label:"Action",align:"right"}];return{rows:i([]),columns:e,pagination:i({page:1,rowsPerPage:10}),search:i(""),totalPages:i(0),form_dialog:i(!1),confirm:i(!1),is_edit:i(!1),loading:i(!1),id:i(""),form:i(structuredClone(y)),list_group:i([])}},mounted(){this.$refs.tableRef.requestServerInteraction(),this.getGroup()},methods:{getData(e){this.loading=!0,this.pagination=e==null?void 0:e.pagination;const o=new URLSearchParams,Q={params:o};let{page:p,rowsPerPage:c,rowsNumber:C}=e.pagination;c==0&&(p=1,c=C),this.totalPages<p&&(p=this.totalPages),o.append("Limit",c),o.append("Page",p),this.$api.get("/users",Q).then(s=>{this.rows=s.data.data.Rows,this.pagination.rowsNumber=s.data.data.TotalRows,this.totalPages=s.data.data.TotalPages,this.loading=!1}).catch(s=>{console.log(s),this.loading=!1})},getGroup(){this.$api.get('/groups?Limit=-&Relation={"Name": "Details.RegencyCity.Province"}').then(e=>{this.list_group=e.data.data.Rows.map(o=>({value:o.ID,label:o.Name,details:o.Details}))}).catch(e=>{console.log(e)})},openDialog(e){e?(this.is_edit=!0,this.id=e.ID,delete e.Password,this.form={...e}):(this.form={...y},this.is_edit=!1),this.form_dialog=!0},closeDialog(){this.form={...y},this.form_dialog=!1,this.loading=!1},submit(){this.loading=!0,this.is_edit?this.$api.put("/users/"+this.id,{...this.form,UpdateBy:this.user.Username}).then(e=>{this.$q.notify({message:"User berhasil diubah",color:"positive"}),this.closeDialog(),this.$refs.tableRef.requestServerInteraction()}).catch(e=>{this.closeDialog(),console.log(e)}):this.$api.post("/auth/register",{...this.form,CreatedBy:this.user.Username}).then(e=>{this.$q.notify({message:"User berhasil ditambahkan",color:"positive"}),this.closeDialog(),this.$refs.tableRef.requestServerInteraction()}).catch(e=>{this.closeDialog(),console.log(e)})},confirmDelete(e){this.id=e,this.confirm=!0},deleteData(){this.$api.delete("/users/"+this.id).then(e=>{this.$q.notify({message:"User berhasil dihapus",color:"positive"}),this.$refs.tableRef.requestServerInteraction(),this.confirm=!1}).catch(e=>{console.log(e),this.confirm=!1})}}}),X=b("div",{class:"tw-text-3xl tw-mb-4"},"Pengguna",-1),Z=b("div",{class:"tw-flex tw-justify-between tw-w-full"},null,-1),x={class:"text-h6"},ee={class:"text-h6 text-negative tw-flex tw-items-center"};function ae(e,o,Q,p,c,C){const s=D("vx-icon"),R=D("VxIcon");return n(),E(z,null,[l(j,{class:"tw-p-6"},{default:t(()=>[X,l(V,{flat:""},{default:t(()=>[l(u,{class:"tw-flex tw-justify-between tw-items-center"},{default:t(()=>[l(d,{outline:"","no-caps":"",color:"primary",onClick:o[0]||(o[0]=a=>e.openDialog(null))},{default:t(()=>[l(s,{iconName:"AddCircle",class:"tw-mr-2",size:20}),r(" Tambah ")]),_:1})]),_:1}),l(u,{class:"q-pt-none"},{default:t(()=>[l(F,{flat:"",ref:"tableRef",class:"remove-padding-table-top",loading:e.loading,rows:e.rows,columns:e.columns,onRequest:e.getData,pagination:e.pagination,"onUpdate:pagination":o[1]||(o[1]=a=>e.pagination=a)},{top:t(()=>[Z]),"body-cell-index":t(a=>[l(_,{props:a},{default:t(()=>[r(g(a.rowIndex+1),1)]),_:2},1032,["props"])]),"body-cell-action":t(a=>[l(_,{props:a},{default:t(()=>[l(d,{flat:"",dense:"",size:"sm",color:"primary"},{default:t(()=>[l(s,{iconName:"More",size:18}),l(L,{"auto-close":"",class:"tw-shadow-none tw-border"},{default:t(()=>[l(K,{style:{"min-width":"100px"}},{default:t(()=>[w((n(),m(P,{clickable:"",class:"text-primary",onClick:v=>e.openDialog(a.row)},{default:t(()=>[l(h,{avatar:""},{default:t(()=>[l(s,{iconName:"Edit",size:20})]),_:1}),l(h,null,{default:t(()=>[r("Ubah")]),_:1})]),_:2},1032,["onClick"])),[[U]]),l(A),w((n(),m(P,{clickable:"",class:"text-negative",onClick:v=>e.confirmDelete(a.row.ID)},{default:t(()=>[l(h,{avatar:""},{default:t(()=>[l(s,{iconName:"Trash",size:20})]),_:1}),l(h,null,{default:t(()=>[r("Hapus")]),_:1})]),_:2},1032,["onClick"])),[[U]])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["loading","rows","columns","onRequest","pagination"])]),_:1})]),_:1})]),_:1}),l(I,{modelValue:e.form_dialog,"onUpdate:modelValue":o[9]||(o[9]=a=>e.form_dialog=a)},{default:t(()=>[l(V,{style:{"min-width":"600px"}},{default:t(()=>[l(u,{class:"row items-center"},{default:t(()=>[b("div",x,g(e.is_edit?"Ubah":"Tambah")+" Pengguna",1),l(J),w((n(),m(d,{flat:"",round:"",dense:""},{default:t(()=>[l(s,{iconName:"CloseCircle",size:20})]),_:1})),[[k]])]),_:1}),l(W,{onSubmit:B(e.submit,["prevent"])},{default:t(()=>[l(u,{class:"tw-grid tw-grid-cols-2 tw-gap-x-4 tw-gap-y-2"},{default:t(()=>[l(f,{modelValue:e.form.Username,"onUpdate:modelValue":o[2]||(o[2]=a=>e.form.Username=a),filled:"",label:"ID Pengguna",rules:[a=>!!a||"Field harus diisi"]},null,8,["modelValue","rules"]),l(f,{modelValue:e.form.Name,"onUpdate:modelValue":o[3]||(o[3]=a=>e.form.Name=a),filled:"",label:"Nama",rules:[a=>!!a||"Field harus diisi"]},null,8,["modelValue","rules"]),l(f,{modelValue:e.form.Email,"onUpdate:modelValue":o[4]||(o[4]=a=>e.form.Email=a),filled:"",label:"E-Mail",rules:[a=>!!a||"Field harus diisi",a=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)||"E-Mail tidak valid"],"lazy-rules":""},null,8,["modelValue","rules"]),l(H,{filled:"",modelValue:e.form.GroupID,"onUpdate:modelValue":o[5]||(o[5]=a=>e.form.GroupID=a),modelModifiers:{number:!0},options:e.list_group,"map-options":"","emit-value":"",label:"Group"},{option:t(a=>[l(P,T(G(a.itemProps)),{default:t(()=>[l(h,null,{default:t(()=>[l(N,null,{default:t(()=>[r(g(a.opt.label),1)]),_:2},1024),a.opt.details?(n(),m(N,{key:0,caption:""},{default:t(()=>[r(g(a.opt.details.map(v=>v.RegencyCity.Name).slice(0,a.opt.details.length>2?2:a.opt.details.length).join(", "))+g(a.opt.details.length>2?"...":""),1)]),_:2},1024)):M("",!0)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options"]),e.is_edit?(n(),m(f,{key:1,modelValue:e.form.Password,"onUpdate:modelValue":o[7]||(o[7]=a=>e.form.Password=a),type:"password",filled:"",label:"Password"},null,8,["modelValue"])):(n(),m(f,{key:0,modelValue:e.form.Password,"onUpdate:modelValue":o[6]||(o[6]=a=>e.form.Password=a),type:"password",filled:"",label:"Password",rules:[a=>!!a||"Field harus diisi"]},null,8,["modelValue","rules"])),l(f,{modelValue:e.form.ConfirmPassword,"onUpdate:modelValue":o[8]||(o[8]=a=>e.form.ConfirmPassword=a),disable:e.form.Password==null,type:"password",filled:"",label:"Konfirmasi Password",rules:[a=>a===e.form.Password||"Konfirmasi password tidak sama"]},null,8,["modelValue","disable","rules"])]),_:1}),l($,{align:"right"},{default:t(()=>[l(d,{label:"Batal","no-caps":"",flat:"",onClick:e.closeDialog,color:"negative"},null,8,["onClick"]),l(d,{label:"Simpan",loading:e.loading,type:"submit","no-caps":"",flat:"",color:"primary"},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"]),l(I,{modelValue:e.confirm,"onUpdate:modelValue":o[10]||(o[10]=a=>e.confirm=a)},{default:t(()=>[l(V,null,{default:t(()=>[l(u,null,{default:t(()=>[b("div",ee,[l(R,{iconName:"Warning2",class:"tw-mr-2",size:22}),r(" Konfirmasi ")])]),_:1}),l(u,{class:"q-pt-none"},{default:t(()=>[r(" Anda yakin ingin menghapus data ini? ")]),_:1}),l($,{align:"right"},{default:t(()=>[w(l(d,{flat:"",label:"Cancel","no-caps":""},null,512),[[k]]),l(d,{flat:"",label:"Yes",color:"negative","no-caps":"",onClick:e.deleteData},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var ve=S(O,[["render",ae]]);export{ve as default};
import{_ as P,p as I,r as d,q as C,t as b,E as q,z as e,y as t,G as B,K as _,J as f,B as s,C as u,f as h,x as y,v as S,R as x}from"./index.8d3bc41d.js";import{Q as r}from"./QTd.2af4f5ff.js";import{k as U,j as V,i as p,g as D,Q as Y}from"./QDialog.91aef4fa.js";import{Q as z}from"./QList.7d314f4b.js";import{Q as R}from"./QTr.abd66f16.js";import{Q as k}from"./QTable.22d0512f.js";import{Q,c as w}from"./uid.a7c9062b.js";import{Q as A}from"./QPage.b0d4bf6a.js";import{Q as L}from"./QCardActions.3bdf8b99.js";import{C as T}from"./ClosePopup.b76216ee.js";import{_ as F}from"./VxIcon.7d4dbb07.js";import{h as $}from"./moment.9709ab41.js";import"./QMarkupTable.16a70399.js";const K=I({props:["user"],components:{VxIcon:F},setup(){const a=[{name:"index",label:"#",align:"center"},{name:"Provinsi",label:"Provinsi",align:"left",field:l=>l.RegencyCity.Province.LongName,sortable:!0},{name:"Kabupaten / Kota",label:"Kabupaten / Kota",align:"left",field:l=>l.RegencyCity.Name,sortable:!0},{name:"Created By",label:"Created By",align:"left",field:l=>l.User.Name,sortable:!0},{name:"Created At",label:"Created At",align:"left",field:l=>$(l.CreatedAt).format("YYYY-MM-DD HH:mm:ss"),sortable:!0},{name:"action",label:"Action",align:"right"}];return{moment:$,columnsDetail:[{name:"Code",label:"Code",align:"left",field:l=>l.Field.Code,sortable:!0},{name:"Label",label:"Label",align:"left",field:l=>l.Field.Label,sortable:!0},{name:"Isi",label:"Isi",align:"left",field:l=>l.Value,sortable:!0}],rows:d([]),columns:a,pagination:d({page:1,rowsPerPage:10}),search:d(""),totalPages:d(0),confirm:d(!1),loading:d(!1),id:d("")}},mounted(){this.$refs.tableRef.requestServerInteraction()},methods:{getData(a){this.loading=!0,this.pagination=a==null?void 0:a.pagination;const o=new URLSearchParams,l={params:o};let{page:m,rowsPerPage:g,rowsNumber:v}=a.pagination;g==0&&(m=1,g=v),this.totalPages<m&&(m=this.totalPages),o.append("Limit",g),o.append("Page",m),o.append("Relation",'{"Name": "User"}'),o.append("Relation",'{"Name": "Form"}'),o.append("Relation",'{"Name": "RegencyCity.Province"}'),o.append("Relation",'{"Name": "FieldResponse.Field"}'),this.$api.get("/form-responses",l).then(n=>{this.rows=n.data.data.Rows,this.pagination.rowsNumber=n.data.data.TotalRows,this.totalPages=n.data.data.TotalPages,this.loading=!1}).catch(n=>{console.log(n),this.loading=!1})},openDialog(a){a?(this.is_edit=!0,this.id=a.ID,delete a.Password,this.form={...a}):(this.form={...initial_form},this.is_edit=!1),this.form_dialog=!0},closeDialog(){this.form={...initial_form},this.form_dialog=!1,this.loading=!1},submit(){this.loading=!0,this.is_edit?this.$api.put("/roles/"+this.id,{...this.form,UpdateBy:this.user.Username}).then(a=>{this.$q.notify({message:"Role berhasil diubah",color:"positive"}),this.closeDialog(),this.$refs.tableRef.requestServerInteraction()}).catch(a=>{this.closeDialog(),console.log(a)}):this.$api.post("/roles",{...this.form,CreatedBy:this.user.Username}).then(a=>{this.$q.notify({message:"Role berhasil ditambahkan",color:"positive"}),this.closeDialog(),this.$refs.tableRef.requestServerInteraction()}).catch(a=>{this.closeDialog(),console.log(a)})},confirmDelete(a){this.id=a,this.confirm=!0},deleteData(){this.$api.delete("/roles/"+this.id).then(a=>{this.$q.notify({message:"Role berhasil dihapus",color:"positive"}),this.$refs.tableRef.requestServerInteraction(),this.confirm=!1}).catch(a=>{console.log(a),this.confirm=!1})}}}),M=_("div",{class:"tw-text-3xl tw-mb-4"},"Penginputan",-1),H={class:"tw-flex tw-justify-end tw-items-center tw-mb-4"},j=_("div",{class:"tw-flex tw-justify-between tw-w-full"},null,-1),E={class:"text-h6 text-negative tw-flex tw-items-center"};function G(a,o,l,m,g,v){const n=C("vx-icon"),N=C("VxIcon");return b(),q(B,null,[e(A,{class:"tw-p-6"},{default:t(()=>[M,e(Q,{flat:""},{default:t(()=>[e(w,null,{default:t(()=>[_("div",H,[e(f,{outline:"","no-caps":"",color:"primary",to:{name:"penginputan-create"}},{default:t(()=>[e(n,{iconName:"AddCircle",class:"tw-mr-2",size:20}),s(" Tambah ")]),_:1})]),e(k,{flat:"",ref:"tableRef",class:"remove-padding-table-top",loading:a.loading,rows:a.rows,columns:a.columns,onRequest:a.getData,pagination:a.pagination,"onUpdate:pagination":o[0]||(o[0]=i=>a.pagination=i),"row-key":"ID"},{top:t(()=>[j]),"body-cell-index":t(i=>[e(r,{props:i},null,8,["props"])]),body:t(i=>[e(R,{props:i},{default:t(()=>[e(r,{onClick:c=>i.expand=!i.expand},{default:t(()=>[s(u(i.rowIndex+1),1)]),_:2},1032,["onClick"]),e(r,null,{default:t(()=>[e(f,{size:"sm",color:"primary",round:"",dense:"",flat:"",onClick:c=>i.expand=!i.expand,icon:i.expand?"remove":"add"},null,8,["onClick","icon"]),s(" "+u(i.row.RegencyCity.Province.LongName),1)]),_:2},1024),e(r,{onClick:c=>i.expand=!i.expand},{default:t(()=>[s(u(i.row.RegencyCity.Name),1)]),_:2},1032,["onClick"]),e(r,{onClick:c=>i.expand=!i.expand},{default:t(()=>[s(u(i.row.User.Name),1)]),_:2},1032,["onClick"]),e(r,{onClick:c=>i.expand=!i.expand},{default:t(()=>[s(u(a.moment(i.row.CreatedAt).format("YYYY-MM-DD HH:mm:ss")),1)]),_:2},1032,["onClick"]),e(r,{align:"right"},{default:t(()=>[e(f,{flat:"",dense:"",size:"sm",color:"primary"},{default:t(()=>[e(n,{iconName:"More",size:18}),e(V,{"auto-close":"",class:"tw-shadow-none tw-border"},{default:t(()=>[e(z,{style:{"min-width":"100px"}},{default:t(()=>[h((b(),y(D,{clickable:"",class:"text-primary",to:{name:"penginputan-edit",params:{id:i.row.ID}}},{default:t(()=>[e(p,{avatar:""},{default:t(()=>[e(n,{iconName:"Edit",size:20})]),_:1}),e(p,null,{default:t(()=>[s("Ubah")]),_:1})]),_:2},1032,["to"])),[[x]]),e(Y),h((b(),y(D,{clickable:"",class:"text-negative",onClick:c=>a.confirmDelete(i.row.ID),disable:""},{default:t(()=>[e(p,{avatar:""},{default:t(()=>[e(n,{iconName:"Trash",size:20})]),_:1}),e(p,null,{default:t(()=>[s("Hapus")]),_:1})]),_:2},1032,["onClick"])),[[x]])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["props"]),h(e(R,{props:i,"no-hover":""},{default:t(()=>[e(r),e(r,{colspan:"100%"},{default:t(()=>[e(k,{flat:"",rows:i.row.FieldResponse,columns:a.columnsDetail},null,8,["rows","columns"])]),_:2},1024),e(r)]),_:2},1032,["props"]),[[S,i.expand]])]),_:1},8,["loading","rows","columns","onRequest","pagination"])]),_:1})]),_:1})]),_:1}),e(U,{modelValue:a.confirm,"onUpdate:modelValue":o[1]||(o[1]=i=>a.confirm=i)},{default:t(()=>[e(Q,null,{default:t(()=>[e(w,null,{default:t(()=>[_("div",E,[e(N,{iconName:"Warning2",class:"tw-mr-2",size:22}),s(" Konfirmasi ")])]),_:1}),e(w,{class:"q-pt-none"},{default:t(()=>[s(" Anda yakin ingin menghapus data ini? ")]),_:1}),e(L,{align:"right"},{default:t(()=>[h(e(f,{flat:"",label:"Cancel","no-caps":""},null,512),[[T]]),e(f,{flat:"",label:"Yes",color:"negative","no-caps":"",onClick:a.deleteData},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var re=P(K,[["render",G]]);export{re as default};

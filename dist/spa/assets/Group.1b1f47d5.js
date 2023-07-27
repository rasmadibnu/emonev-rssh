import{c as we,r as u,a as f,au as Re,w as _e,a2 as Ce,aw as De,o as Pe,h as b,ag as ke,f as p,j as qe,aM as Z,aN as A,_ as $e,p as Ne,q as x,t as P,E as Qe,z as a,y as o,G as Te,J as g,B as z,C as k,x as T,v as Ie,K as C,aI as Ve,R as B}from"./index.4ac76403.js";import{u as Me,a as Ae,Q as I,b as S}from"./QCard.31d5c3cb.js";import{Q as U,a as _}from"./QTable.d65de6e2.js";import{e as V,j as K,i as Be,h as D,Q as j}from"./QDialog.2df1b7e0.js";import{Q as Ue}from"./QSeparator.d322f4ad.js";import{Q as Ke,C as M}from"./ClosePopup.63eeea50.js";import{Q as ee}from"./QTr.4bf21b35.js";import{Q as je}from"./QPage.c0d0babb.js";import{Q as te}from"./QSpace.0923a10c.js";import{Q as ae}from"./QInput.f4474e1e.js";import{Q as H}from"./QCardActions.76c17390.js";import{Q as He}from"./QForm.82767e93.js";import{Q as le,a as Oe}from"./QScrollObserver.8356fca8.js";import{T as oe}from"./TouchPan.2ca4060c.js";import{_ as Ge}from"./VxIcon.140795fd.js";import"./QMarkupTable.e7ae0b29.js";import"./QSelect.01e4bf9c.js";import"./use-key-composition.762f81a8.js";import"./uid.9b787859.js";const ie=["vertical","horizontal"],O={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},ne={prevent:!0,mouse:!0,mouseAllDir:!0},re=e=>e>=250?50:Math.ceil(e/5);var Le=we({name:"QScrollArea",props:{...Me,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:n,emit:v}){const d=u(!1),m=u(!1),y=u(!1),r={vertical:u(0),horizontal:u(0)},t={vertical:{ref:u(null),position:u(0),size:u(0)},horizontal:{ref:u(null),position:u(0),size:u(0)}},{proxy:i}=qe(),h=Ae(e,i.$q);let q=null,L;const w=u(null),se=f(()=>"q-scrollarea"+(h.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=f(()=>{const l=t.vertical.size.value-r.vertical.value;if(l<=0)return 0;const s=V(t.vertical.position.value/l,0,1);return Math.round(s*1e4)/1e4}),t.vertical.thumbHidden=f(()=>(e.visible===null?y.value:e.visible)!==!0&&d.value===!1&&m.value===!1||t.vertical.size.value<=r.vertical.value+1),t.vertical.thumbStart=f(()=>t.vertical.percentage.value*(r.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=f(()=>Math.round(V(r.vertical.value*r.vertical.value/t.vertical.size.value,re(r.vertical.value),r.vertical.value))),t.vertical.style=f(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=f(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=f(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=f(()=>{const l=t.horizontal.size.value-r.horizontal.value;if(l<=0)return 0;const s=V(Math.abs(t.horizontal.position.value)/l,0,1);return Math.round(s*1e4)/1e4}),t.horizontal.thumbHidden=f(()=>(e.visible===null?y.value:e.visible)!==!0&&d.value===!1&&m.value===!1||t.horizontal.size.value<=r.horizontal.value+1),t.horizontal.thumbStart=f(()=>t.horizontal.percentage.value*(r.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=f(()=>Math.round(V(r.horizontal.value*r.horizontal.value/t.horizontal.size.value,re(r.horizontal.value),r.horizontal.value))),t.horizontal.style=f(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[i.$q.lang.rtl===!0?"right":"left"]:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=f(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=f(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const ue=f(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),ce=[[oe,l=>{J(l,"vertical")},void 0,{vertical:!0,...ne}]],de=[[oe,l=>{J(l,"horizontal")},void 0,{horizontal:!0,...ne}]];function E(){const l={};return ie.forEach(s=>{const c=t[s];l[s+"Position"]=c.position.value,l[s+"Percentage"]=c.percentage.value,l[s+"Size"]=c.size.value,l[s+"ContainerSize"]=r[s].value}),l}const F=Re(()=>{const l=E();l.ref=i,v("scroll",l)},0);function Y(l,s,c){if(ie.includes(l)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(l==="vertical"?Z:A)(w.value,s,c)}function fe({height:l,width:s}){let c=!1;r.vertical.value!==l&&(r.vertical.value=l,c=!0),r.horizontal.value!==s&&(r.horizontal.value=s,c=!0),c===!0&&$()}function me({position:l}){let s=!1;t.vertical.position.value!==l.top&&(t.vertical.position.value=l.top,s=!0),t.horizontal.position.value!==l.left&&(t.horizontal.position.value=l.left,s=!0),s===!0&&$()}function ve({height:l,width:s}){t.horizontal.size.value!==s&&(t.horizontal.size.value=s,$()),t.vertical.size.value!==l&&(t.vertical.size.value=l,$())}function J(l,s){const c=t[s];if(l.isFirst===!0){if(c.thumbHidden.value===!0)return;L=c.position.value,m.value=!0}else if(m.value!==!0)return;l.isFinal===!0&&(m.value=!1);const R=O[s],Q=r[s].value,ye=(c.size.value-Q)/(Q-c.thumbSize.value),ze=l.distance[R.dist],Se=L+(l.direction===R.dir?1:-1)*ze*ye;X(Se,s)}function W(l,s){const c=t[s];if(c.thumbHidden.value!==!0){const R=l[O[s].offset];if(R<c.thumbStart.value||R>c.thumbStart.value+c.thumbSize.value){const Q=R-c.thumbSize.value/2;X(Q/r[s].value*c.size.value,s)}c.ref.value!==null&&c.ref.value.dispatchEvent(new MouseEvent(l.type,l))}}function he(l){W(l,"vertical")}function ge(l){W(l,"horizontal")}function $(){d.value=!0,q!==null&&clearTimeout(q),q=setTimeout(()=>{q=null,d.value=!1},e.delay),e.onScroll!==void 0&&F()}function X(l,s){w.value[O[s].scroll]=l}function be(){y.value=!0}function pe(){y.value=!1}let N=null;return _e(()=>i.$q.lang.rtl,l=>{w.value!==null&&A(w.value,Math.abs(t.horizontal.position.value)*(l===!0?-1:1))}),Ce(()=>{N={top:t.vertical.position.value,left:t.horizontal.position.value}}),De(()=>{if(N===null)return;const l=w.value;l!==null&&(A(l,N.left),Z(l,N.top))}),Pe(F.cancel),Object.assign(i,{getScrollTarget:()=>w.value,getScroll:E,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:Y,setScrollPercentage(l,s,c){Y(l,s*(t[l].size.value-r[l].value)*(l==="horizontal"&&i.$q.lang.rtl===!0?-1:1),c)}}),()=>b("div",{class:se.value,onMouseenter:be,onMouseleave:pe},[b("div",{ref:w,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[b("div",{class:"q-scrollarea__content absolute",style:ue.value},ke(n.default,[b(le,{debounce:0,onResize:ve})])),b(Oe,{axis:"both",onScroll:me})]),b(le,{debounce:0,onResize:fe}),b("div",{class:t.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:he}),b("div",{class:t.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:ge}),p(b("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),ce),p(b("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),de)])}});const G={Name:null,Description:null},Ee=Ne({props:["user"],components:{VxIcon:Ge},setup(){const e=[{name:"index",label:"#",align:"center"},{name:"Name",label:"Nama",align:"left",field:"Name",sortable:!0},{name:"Deskripsi",label:"Deskripsi",align:"left",field:"Description",sortable:!0},{name:"action",label:"Action",align:"right"}],n=[{name:"Name",label:"Nama",align:"left",field:"Name",sortable:!0},{name:"Provinsi",label:"Provinsi",align:"left",field:d=>d.Province.LongName,sortable:!0},{name:"Kode",label:"Kode",align:"left",field:"Code",sortable:!0}],v=[{name:"Kabupaten",label:"Kabupaten / Kota",align:"left",field:d=>d.RegencyCity.Name,sortable:!0},{name:"Provinsi",label:"Provinsi",align:"left",field:d=>d.RegencyCity.Province.LongName,sortable:!0},{name:"Kode",label:"Kode",align:"left",field:d=>d.RegencyCity.Code,sortable:!0}];return{rows:u([]),columns:e,columnsDetail:v,pagination:u({page:1,rowsPerPage:10}),search:u(""),totalPages:u(0),form_dialog:u(!1),confirm:u(!1),is_edit:u(!1),loading:u(!1),id:u(""),form:u(structuredClone(G)),dialogRegency:u(!1),loadingRegency:u(!1),rowsRegency:u([]),columnsRegency:n,paginationRegency:u({page:1,rowsPerPage:10}),totalPagesRegency:u(0),selectedRegency:u([]),selectedGroup:u({})}},mounted(){this.$refs.tableRef.requestServerInteraction()},methods:{getData(e){this.loading=!0,this.pagination=e==null?void 0:e.pagination;const n=new URLSearchParams,v={params:n};let{page:d,rowsPerPage:m,rowsNumber:y}=e.pagination;m==0&&(d=1,m=y),this.totalPages<d&&(d=this.totalPages),n.append("Limit",m),n.append("Page",d),n.append("Relations",'{"Name":"Details.RegencyCity.Province"}'),this.$api.get("/groups",v).then(r=>{this.rows=r.data.data.Rows,this.pagination.rowsNumber=r.data.data.TotalRows,this.totalPages=r.data.data.TotalPages,this.loading=!1}).catch(r=>{console.log(r),this.loading=!1})},openDialog(e){e?(this.is_edit=!0,this.id=e.ID,delete e.Password,this.form={...e}):(this.form={...G},this.is_edit=!1),this.form_dialog=!0},closeDialog(){this.form={...G},this.form_dialog=!1,this.loading=!1},submit(){this.loading=!0,this.is_edit?this.$api.put("/groups/"+this.id,{...this.form,UpdateBy:this.user.Username}).then(e=>{this.$q.notify({message:"Role berhasil diubah",color:"positive"}),this.closeDialog(),this.$refs.tableRef.requestServerInteraction()}).catch(e=>{this.closeDialog(),console.log(e)}):this.$api.post("/groups",{...this.form,CreatedBy:this.user.Username}).then(e=>{this.$q.notify({message:"Role berhasil ditambahkan",color:"positive"}),this.closeDialog(),this.$refs.tableRef.requestServerInteraction()}).catch(e=>{this.closeDialog(),console.log(e)})},confirmDelete(e){this.id=e,this.confirm=!0},deleteData(){this.$api.delete("/groups/"+this.id).then(e=>{this.$q.notify({message:"Role berhasil dihapus",color:"positive"}),this.$refs.tableRef.requestServerInteraction(),this.confirm=!1}).catch(e=>{console.log(e),this.confirm=!1})},getDataRegency(e){this.loadingRegency=!0,this.paginationRegency=e==null?void 0:e.pagination;const n=new URLSearchParams,v={params:n};let{page:d,rowsPerPage:m,rowsNumber:y}=e.pagination;m==0&&(d=1,m=y),this.totalPagesRegency<d&&(d=this.totalPagesRegency),n.append("Limit",m),n.append("Page",d),n.append("Relations",'{"Name":"Province"}'),this.$api.get("/regency-cities",v).then(r=>{this.rowsRegency=r.data.data.Rows,this.paginationRegency.rowsNumber=r.data.data.TotalRows,this.totalPagesRegency=r.data.data.TotalPages,this.loadingRegency=!1}).catch(r=>{console.log(r),this.loadingRegency=!1})},openDialogRegency(e){this.selectedRegency=[],this.selectedRegency=e.Details.map(n=>n.RegencyCity),this.selectedGroup=e,this.dialogRegency=!0},submitRegency(){const e={Details:this.selectedRegency.map(n=>{var v;return{GroupID:(v=this.selectedGroup)==null?void 0:v.ID,ProvinceID:n.ProvinceID,RegencyCityID:n.ID}})};this.$api.post("/group-details/bulk",e).then(n=>{this.$q.notify({message:"Kabupaten / Kota berhasil ditambahkan ke group",color:"positive"}),this.dialogRegency=!1,this.$refs.tableRef.requestServerInteraction()}).catch(n=>{console.log(n)})}}}),Fe=C("div",{class:"tw-text-3xl tw-mb-4"},"Group",-1),Ye=C("div",{class:"tw-flex tw-justify-between tw-w-full"},null,-1),Je={class:"text-h6"},We=C("div",{class:"text-h6"},"List Kabupaten / Kota",-1),Xe={class:"tw-mb-3"},Ze=C("div",{class:"tw-flex tw-justify-between tw-w-full"},null,-1),xe={class:"text-h6 text-negative tw-flex tw-items-center"};function et(e,n,v,d,m,y){const r=x("vx-icon"),t=x("VxIcon");return P(),Qe(Te,null,[a(je,{class:"tw-p-6"},{default:o(()=>[Fe,a(I,{flat:""},{default:o(()=>[a(S,{class:"tw-flex tw-justify-between tw-items-center"},{default:o(()=>[a(g,{outline:"","no-caps":"",color:"primary",onClick:n[0]||(n[0]=i=>e.openDialog(null))},{default:o(()=>[a(r,{iconName:"AddCircle",class:"tw-mr-2",size:20}),z(" Tambah ")]),_:1})]),_:1}),a(S,{class:"q-pt-none"},{default:o(()=>[a(U,{flat:"",ref:"tableRef",class:"remove-padding-table-top",loading:e.loading,rows:e.rows,columns:e.columns,onRequest:e.getData,pagination:e.pagination,"onUpdate:pagination":n[1]||(n[1]=i=>e.pagination=i),"row-key":"ID"},{top:o(()=>[Ye]),body:o(i=>[a(ee,{props:i},{default:o(()=>[a(_,{onClick:h=>i.expand=!i.expand},{default:o(()=>[z(k(i.rowIndex+1),1)]),_:2},1032,["onClick"]),a(_,null,{default:o(()=>[a(g,{size:"sm",flat:"",color:"primary",round:"",dense:"",onClick:h=>i.expand=!i.expand,icon:i.expand?"remove":"add"},null,8,["onClick","icon"]),z(" "+k(i.row.Name),1)]),_:2},1024),a(_,{onClick:h=>i.expand=!i.expand},{default:o(()=>[z(k(i.row.Description),1)]),_:2},1032,["onClick"]),a(_,null,{default:o(()=>[a(g,{flat:"",dense:"",size:"sm",color:"primary"},{default:o(()=>[a(r,{iconName:"More",size:18}),a(Be,{"auto-close":"",class:"tw-shadow-none tw-border"},{default:o(()=>[a(Ke,{style:{"min-width":"100px"}},{default:o(()=>[p((P(),T(j,{clickable:"",class:"text-primary",onClick:h=>e.openDialogRegency(i.row)},{default:o(()=>[a(D,{avatar:""},{default:o(()=>[a(r,{iconName:"LocationAdd",size:20})]),_:1}),a(D,null,{default:o(()=>[z("Tambah Kabupaten / Kota")]),_:1})]),_:2},1032,["onClick"])),[[B]]),p((P(),T(j,{clickable:"",class:"text-primary",onClick:h=>e.openDialog(i.row)},{default:o(()=>[a(D,{avatar:""},{default:o(()=>[a(r,{iconName:"Edit",size:20})]),_:1}),a(D,null,{default:o(()=>[z("Ubah")]),_:1})]),_:2},1032,["onClick"])),[[B]]),a(Ue),p((P(),T(j,{clickable:"",class:"text-negative",onClick:h=>e.confirmDelete(i.row.ID)},{default:o(()=>[a(D,{avatar:""},{default:o(()=>[a(r,{iconName:"Trash",size:20})]),_:1}),a(D,null,{default:o(()=>[z("Hapus")]),_:1})]),_:2},1032,["onClick"])),[[B]])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["props"]),p(a(ee,{props:i,"no-hover":""},{default:o(()=>[a(_),a(_,{colspan:"100%"},{default:o(()=>[a(U,{flat:"",rows:i.row.Details,columns:e.columnsDetail},null,8,["rows","columns"])]),_:2},1024),a(_)]),_:2},1032,["props"]),[[Ie,i.expand]])]),_:1},8,["loading","rows","columns","onRequest","pagination"])]),_:1})]),_:1})]),_:1}),a(K,{modelValue:e.form_dialog,"onUpdate:modelValue":n[4]||(n[4]=i=>e.form_dialog=i)},{default:o(()=>[a(I,{style:{"min-width":"600px"}},{default:o(()=>[a(S,{class:"row items-center"},{default:o(()=>[C("div",Je,k(e.is_edit?"Ubah":"Tmabah")+" Group",1),a(te),p((P(),T(g,{flat:"",round:"",dense:""},{default:o(()=>[a(r,{iconName:"CloseCircle",size:20})]),_:1})),[[M]])]),_:1}),a(He,{onSubmit:Ve(e.submit,["prevent"])},{default:o(()=>[a(S,{class:"tw-space-y-2"},{default:o(()=>[a(ae,{modelValue:e.form.Name,"onUpdate:modelValue":n[2]||(n[2]=i=>e.form.Name=i),filled:"",label:"Nama",rules:[i=>!!i||"Field harus diisi"]},null,8,["modelValue","rules"]),a(ae,{modelValue:e.form.Description,"onUpdate:modelValue":n[3]||(n[3]=i=>e.form.Description=i),filled:"",label:"Deskripsi",type:"textarea"},null,8,["modelValue"])]),_:1}),a(H,{align:"right"},{default:o(()=>[a(g,{label:"Batal","no-caps":"",flat:"",onClick:e.closeDialog,color:"negative"},null,8,["onClick"]),a(g,{label:"Simpan",loading:e.loading,type:"submit","no-caps":"",flat:"",color:"primary"},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"]),a(K,{modelValue:e.dialogRegency,"onUpdate:modelValue":n[7]||(n[7]=i=>e.dialogRegency=i),onShow:n[8]||(n[8]=i=>e.$refs.tableRegencyRef.requestServerInteraction())},{default:o(()=>[a(I,{style:{width:"600px"}},{default:o(()=>[a(S,{class:"row items-center q-pb-none"},{default:o(()=>[We,a(te),p(a(g,{icon:"close",flat:"",round:"",dense:""},null,512),[[M]])]),_:1}),a(S,null,{default:o(()=>{var i;return[C("div",Xe,"Nama Group: "+k((i=e.selectedGroup)==null?void 0:i.Name),1),a(Le,{style:{height:"50vh"},class:"tw-w-full"},{default:o(()=>[a(U,{dense:"",flat:"",ref:"tableRegencyRef",class:"remove-padding-table-top",loading:e.loadingRegency,rows:e.rowsRegency,columns:e.columnsRegency,onRequest:e.getDataRegency,pagination:e.paginationRegency,"onUpdate:pagination":n[5]||(n[5]=h=>e.paginationRegency=h),selected:e.selectedRegency,"onUpdate:selected":n[6]||(n[6]=h=>e.selectedRegency=h),selection:"multiple","row-key":"ID"},{top:o(()=>[Ze]),_:1},8,["loading","rows","columns","onRequest","pagination","selected"])]),_:1})]}),_:1}),a(H,{align:"right"},{default:o(()=>[p(a(g,{flat:"",label:"Batal","no-caps":"",color:"primary"},null,512),[[M]]),a(g,{flat:"",label:"Simpan","no-caps":"",onClick:e.submitRegency,color:"primary"},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(K,{modelValue:e.confirm,"onUpdate:modelValue":n[9]||(n[9]=i=>e.confirm=i)},{default:o(()=>[a(I,null,{default:o(()=>[a(S,null,{default:o(()=>[C("div",xe,[a(t,{iconName:"Warning2",class:"tw-mr-2",size:22}),z(" Konfirmasi ")])]),_:1}),a(S,{class:"q-pt-none"},{default:o(()=>[z(" Anda yakin ingin menghapus data ini? ")]),_:1}),a(H,{align:"right"},{default:o(()=>[p(a(g,{flat:"",label:"Cancel","no-caps":""},null,512),[[M]]),a(g,{flat:"",label:"Yes",color:"negative","no-caps":"",onClick:e.deleteData},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var zt=$e(Ee,[["render",et]]);export{zt as default};

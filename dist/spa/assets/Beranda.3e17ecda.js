import{c as y,a as v,h as S,af as B,_ as P,p as Q,r as c,q as j,t as h,x as f,y as o,K as l,z as s,D as m,B as C,C as g,A as k}from"./index.bad3eabc.js";import{c as _,Q as w}from"./uid.71444742.js";import{Q as z}from"./QMarkupTable.5be047e7.js";import{Q as U}from"./QTd.20bb150f.js";import{Q as M,a as N}from"./QTable.99572446.js";import{Q as T}from"./QTr.7cdd0d74.js";import{Q as I,g as K,i as x}from"./QDialog.562b1b87.js";import{Q as A}from"./QList.693650b6.js";import{Q as R}from"./QPage.9a4fa4ac.js";import{_ as Y}from"./VxIcon.f381a810.js";import{A as $}from"./vue3-apexcharts.common.d67872b5.js";import{h as F}from"./moment.9709ab41.js";const D=["top","middle","bottom"];var b=y({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>D.includes(e)}},setup(e,{slots:i}){const a=v(()=>e.align!==void 0?{verticalAlign:e.align}:null),t=v(()=>{const r=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(r!==void 0?` text-${r}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>S("div",{class:t.value,style:a.value,role:"status","aria-label":e.label},B(i.default,e.label!==void 0?[e.label]:[]))}});const J=Q({props:["user"],components:{VxIcon:Y,ApexChart:$},setup(){const e=[{name:"Provinsi",label:"Provinsi",align:"left",field:r=>r.name,sortable:!0},{name:"Status",align:"left",label:"Status",field:"Status",sortable:!0},{name:"Progress",align:"left",label:"Progress",field:"Progress",sortable:!0}],i=[{nama:"Aceh",progress:a(23),jumlahKabupatenKota:23,lastUpdate:t()},{nama:"Sumatera Utara",progress:a(33),jumlahKabupatenKota:33,lastUpdate:t()},{nama:"Sumatera Barat",progress:a(12),jumlahKabupatenKota:12,lastUpdate:t()},{nama:"Riau",progress:a(10),jumlahKabupatenKota:10,lastUpdate:t()},{nama:"Jambi",progress:a(9),jumlahKabupatenKota:9,lastUpdate:t()},{nama:"Sumatera Selatan",progress:a(16),jumlahKabupatenKota:16,lastUpdate:t()},{nama:"Bengkulu",progress:a(9),jumlahKabupatenKota:9,lastUpdate:t()},{nama:"Lampung",progress:a(15),jumlahKabupatenKota:15,lastUpdate:t()},{nama:"Kepulauan Bangka Belitung",progress:a(6),jumlahKabupatenKota:6,lastUpdate:t()},{nama:"Kepulauan Riau",progress:a(5),jumlahKabupatenKota:5,lastUpdate:t()},{nama:"DKI Jakarta",progress:a(6),jumlahKabupatenKota:6,lastUpdate:t()},{nama:"Jawa Barat",progress:a(27),jumlahKabupatenKota:27,lastUpdate:t()},{nama:"Jawa Tengah",progress:a(35),jumlahKabupatenKota:35,lastUpdate:t()},{nama:"D.I. Yogyakarta",progress:a(4),jumlahKabupatenKota:4,lastUpdate:t()},{nama:"Jawa Timur",progress:a(38),jumlahKabupatenKota:38,lastUpdate:t()},{nama:"Banten",progress:a(4),jumlahKabupatenKota:4,lastUpdate:t()},{nama:"Bali",progress:a(9),jumlahKabupatenKota:9,lastUpdate:t()},{nama:"Nusa Tenggara Barat",progress:a(8),jumlahKabupatenKota:8,lastUpdate:t()},{nama:"Nusa Tenggara Timur",progress:a(21),jumlahKabupatenKota:21,lastUpdate:t()},{nama:"Kalimantan Barat",progress:a(14),jumlahKabupatenKota:14,lastUpdate:t()},{nama:"Kalimantan Tengah",progress:a(13),jumlahKabupatenKota:13,lastUpdate:t()},{nama:"Kalimantan Selatan",progress:a(11),jumlahKabupatenKota:11,lastUpdate:t()},{nama:"Kalimantan Timur",progress:a(10),jumlahKabupatenKota:10,lastUpdate:t()},{nama:"Kalimantan Utara",progress:a(4),jumlahKabupatenKota:4,lastUpdate:t()},{nama:"Sulawesi Utara",progress:a(11),jumlahKabupatenKota:11,lastUpdate:t()},{nama:"Sulawesi Tengah",progress:a(9),jumlahKabupatenKota:9,lastUpdate:t()},{nama:"Sulawesi Selatan",progress:a(21),jumlahKabupatenKota:21,lastUpdate:t()},{nama:"Sulawesi Tenggara",progress:a(8),jumlahKabupatenKota:8,lastUpdate:t()},{nama:"Gorontalo",progress:a(5),jumlahKabupatenKota:5,lastUpdate:t()},{nama:"Sulawesi Barat",progress:a(6),jumlahKabupatenKota:6,lastUpdate:t()},{nama:"Maluku",progress:a(9),jumlahKabupatenKota:9,lastUpdate:t()},{nama:"Maluku Utara",progress:a(8),jumlahKabupatenKota:8,lastUpdate:t()},{nama:"Papua Barat",progress:a(12),jumlahKabupatenKota:12,lastUpdate:t()},{nama:"Papua",progress:a(29),jumlahKabupatenKota:29,lastUpdate:t()}];function a(r){return Math.floor(Math.random()*(r+1))}function t(){const r=new Date,d=Math.floor(Math.random()*24),u=Math.floor(Math.random()*60),p=Math.floor(Math.random()*60);return r.setHours(d,u,p,0),r}return{moment:F,columns:e,province:i,year:c(null),list_year:c([]),progress:c([]),series:[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}],chartOptions:{chart:{type:"bar",height:350},colors:["#243763","#FF6E31","#9384D1"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},fill:{opacity:1},tooltip:{y:{formatter:function(r){return"$ "+r+" thousands"}}}},series2:c([0]),chartOptions2:c({chart:{type:"radialBar",offsetY:-20,sparkline:{enabled:!0}},plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",margin:5},dataLabels:{name:{offsetY:40,show:!0},value:{offsetY:-2,fontSize:"22px"}}}},grid:{padding:{top:-10}},colors:["#243763"],labels:["- / -"]})}},mounted(){this.getYear()},methods:{getYear(){this.$api.get("/forms?Limit=-").then(e=>(this.list_year=e.data.data.Rows.map(i=>({label:i.Year,value:i.ID})),this.list_year)).then(e=>{const i=new Date().getFullYear(),a=e.find(t=>t.label==i);a?this.year=a.value:this.year=e[0].value,this.getProgess(this.year)}).catch(e=>{console.log(e)})},getProgess(e){const i=this.list_year.find(a=>a.value==e);return this.$api.get("/forms/"+i.label+"/progress").then(a=>{this.progress=a.data.data.map(r=>{var d=r.Regencies.filter(p=>p.IsInput==!0).length,u="";return d==0?u="Belum Input":d<r.Regencies.length?u="Progress":d>=r.Regencies.length&&(u="Completed"),{...r,Status:u,Progress:d/r.Regencies.length,JumlahInput:d}});var t=this.progress.filter(r=>r.Status=="Completed").length;this.series2[0]=parseFloat(t/this.progress.length).toFixed(0),this.chartOptions2.labels[0]=[t+" / "+this.progress.length]}).catch(a=>{console.log(a)})}}}),V=l("div",{class:"tw-text-3xl tw-mb-4"},"Beranda",-1),q={class:"tw-grid md:tw-grid-cols-3 tw-gap-4"},L=l("div",{class:"tw-text-right"},[l("p",{class:"tw-text-2xl tw-font-semibold"},"1,257"),l("p",null,"Pengguna")],-1),O=l("div",{class:"tw-text-right"},[l("p",{class:"tw-text-2xl tw-font-semibold"},"34"),l("p",null,"Provinsi")],-1),H=l("div",{class:"tw-text-right"},[l("p",{class:"tw-text-2xl tw-font-semibold"},"515"),l("p",null,"Kabupaten Kota")],-1),W={class:"tw-col-span-12 tw-flex tw-justify-between tw-items-center"},E=l("div",{class:"tw-text-xl tw-font-semibold"},"Progress Penginputan",-1),G={style:{"font-size":"0.8em"},class:"tw-mt-1 tw-mr-2 text-primary"},X={class:"absolute-full flex flex-center"},Z={class:"tw-col-span-4 tw-w-full"},aa={side:"",class:"tw-text-right"},ta={class:"tw-text-lg tw-font-semibold"},ea=l("div",null,"Completed",-1),sa={side:"",class:"tw-text-right"},oa={class:"tw-text-lg tw-font-semibold"},la=l("div",null,"Progress",-1),ra={side:"",class:"tw-text-right"},na={class:"tw-text-lg tw-font-semibold"},ia=l("div",null,"Belum Input",-1);function ua(e,i,a,t,r,d){const u=j("vx-icon"),p=j("apex-chart");return h(),f(R,{class:"tw-p-6"},{default:o(()=>[V,l("div",q,[s(w,{flat:"",class:"tw-rounded-lg"},{default:o(()=>[s(_,{class:"tw-group tw-flex tw-justify-between"},{default:o(()=>[s(m,{color:"primary",size:"50px",class:"tw-transition-all tw-duration-300 tw-transform group-hover:tw-rotate-12"},{default:o(()=>[s(u,{iconName:"Profile2User",class:"text-white tw-transform tw-transition-transform tw-duration-500 tw-ease-in-out",size:"24"})]),_:1}),L]),_:1})]),_:1}),s(w,{flat:"",class:"tw-rounded-lg"},{default:o(()=>[s(_,{class:"tw-group tw-flex tw-justify-between"},{default:o(()=>[s(m,{color:"secondary",size:"50px",class:"tw-transition-all tw-duration-300 tw-transform group-hover:tw-rotate-12"},{default:o(()=>[s(u,{iconName:"Map",class:"text-white tw-transform tw-transition-transform tw-duration-500 tw-ease-in-out",size:"24"})]),_:1}),O]),_:1})]),_:1}),s(w,{flat:"",class:"tw-rounded-lg"},{default:o(()=>[s(_,{class:"tw-group tw-flex tw-justify-between"},{default:o(()=>[s(m,{color:"accent",size:"50px",class:"tw-transition-all tw-duration-300 tw-transform group-hover:tw-rotate-12"},{default:o(()=>[s(u,{iconName:"Map1",class:"text-white tw-transform tw-transition-transform tw-duration-500 tw-ease-in-out",size:"24"})]),_:1}),H]),_:1})]),_:1})]),s(w,{flat:"",class:"tw-mt-4 md:tw-grid tw-grid-cols-12 tw-p-4 tw-gap-4"},{default:o(()=>[l("div",W,[E,s(z,{modelValue:e.year,"onUpdate:modelValue":i[0]||(i[0]=n=>e.year=n),options:e.list_year,dense:"",label:"Tahun",class:"tw-w-44","map-options":"","emit-value":""},null,8,["modelValue","options"])]),s(M,{flat:"",class:"tw-col-span-8",columns:e.columns,rows:e.progress},{body:o(n=>[s(T,{props:n},{default:o(()=>[s(U,null,{default:o(()=>[C(g(n.row.Name),1)]),_:2},1024),l("td",null,[n.row.Status=="Completed"?(h(),f(b,{key:0,label:"Completed",color:"positive"})):n.row.Status=="Belum Input"?(h(),f(b,{key:1,label:"Belum Input",color:"negative"})):n.row.Status=="Progress"?(h(),f(b,{key:2,label:"Progress",color:"secondary"})):k("",!0)]),s(U,{class:"tw-flex tw-items-center"},{default:o(()=>[l("div",G,g(parseFloat(n.row.Progress*100).toFixed(0)+"%"),1),s(N,{rounded:"",stripe:"",size:"25px",value:n.row.Progress,color:"accent",class:"q-mt-sm"},{default:o(()=>[l("div",X,[s(b,{color:"white","text-color":"accent",label:n.row.JumlahInput+"/"+n.row.Regencies.length},null,8,["label"])])]),_:2},1032,["value"])]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["columns","rows"]),l("div",Z,[s(p,{type:"radialBar",options:e.chartOptions2,series:e.series2},null,8,["options","series"]),s(I),s(A,null,{default:o(()=>[s(K,{class:"tw-flex tw-justify-between tw-items-center"},{default:o(()=>[s(x,{avatar:""},{default:o(()=>[s(m,{color:"positive",size:"50px"},{default:o(()=>[s(u,{iconName:"TickCircle",class:"text-white",size:"24"})]),_:1})]),_:1}),l("div",aa,[l("div",ta,g(this.progress.filter(n=>n.Status=="Completed").length),1),ea])]),_:1}),s(K,{class:"tw-flex tw-justify-between tw-items-center"},{default:o(()=>[s(x,{avatar:""},{default:o(()=>[s(m,{color:"secondary",size:"50px"},{default:o(()=>[s(u,{iconName:"Bookmark",class:"text-white",size:"24"})]),_:1})]),_:1}),l("div",sa,[l("div",oa,g(this.progress.filter(n=>n.Status=="Progress").length),1),la])]),_:1}),s(K,{class:"tw-flex tw-justify-between tw-items-center"},{default:o(()=>[s(x,{avatar:""},{default:o(()=>[s(m,{color:"negative",size:"50px"},{default:o(()=>[s(u,{iconName:"ClipboardClose",class:"text-white",size:"24"})]),_:1})]),_:1}),l("div",ra,[l("div",na,g(this.progress.filter(n=>n.Status=="Belum Input").length),1),ia])]),_:1})]),_:1})])]),_:1})]),_:1})}var va=P(J,[["render",ua]]);export{va as default};

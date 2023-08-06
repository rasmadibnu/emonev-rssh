import{c as y,a as v,h as B,af as S,_ as Q,p as k,q as j,t as m,x as p,y as o,K as l,z as e,D as d,B as U,C as f,A as C}from"./index.79b4a355.js";import{c as h,Q as c}from"./uid.e55bd1ea.js";import{Q as M}from"./QSelect.e1f890fc.js";import{Q as z,a as b,b as P}from"./QTable.a9ab60cc.js";import{Q as T}from"./QTr.7552af5d.js";import{Q as N}from"./QSeparator.124c0460.js";import{Q as K,h as _}from"./QDialog.07560010.js";import{Q as A}from"./QList.f5b06fc0.js";import{Q as L}from"./QPage.2c5cd181.js";import{_ as D}from"./VxIcon.6ce0f62c.js";import{A as V}from"./vue3-apexcharts.common.29d1b079.js";import{h as $}from"./moment.9709ab41.js";import"./QMarkupTable.501f7b8a.js";const q=["top","middle","bottom"];var w=y({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:s=>q.includes(s)}},setup(s,{slots:u}){const a=v(()=>s.align!==void 0?{verticalAlign:s.align}:null),t=v(()=>{const n=s.outline===!0&&s.color||s.textColor;return`q-badge flex inline items-center no-wrap q-badge--${s.multiLine===!0?"multi":"single"}-line`+(s.outline===!0?" q-badge--outline":s.color!==void 0?` bg-${s.color}`:"")+(n!==void 0?` text-${n}`:"")+(s.floating===!0?" q-badge--floating":"")+(s.rounded===!0?" q-badge--rounded":"")+(s.transparent===!0?" q-badge--transparent":"")});return()=>B("div",{class:t.value,style:a.value,role:"status","aria-label":s.label},S(u.default,s.label!==void 0?[s.label]:[]))}});const Y=k({props:["user"],components:{VxIcon:D,ApexChart:V},setup(){const s=[{name:"Provinsi",label:"Provinsi",align:"left",field:n=>n.name,sortable:!0},{name:"Status",align:"left",label:"Status",field:"Status",sortable:!0},{name:"Progress",align:"left",label:"Progress",field:"Progress",sortable:!0},{name:"Last Update",align:"left",label:"Last Update",field:"Last Update",sortable:!0}],u=[{nama:"Aceh",progress:a(23),jumlahKabupatenKota:23,lastUpdate:t()},{nama:"Sumatera Utara",progress:a(33),jumlahKabupatenKota:33,lastUpdate:t()},{nama:"Sumatera Barat",progress:a(12),jumlahKabupatenKota:12,lastUpdate:t()},{nama:"Riau",progress:a(10),jumlahKabupatenKota:10,lastUpdate:t()},{nama:"Jambi",progress:a(9),jumlahKabupatenKota:9,lastUpdate:t()},{nama:"Sumatera Selatan",progress:a(16),jumlahKabupatenKota:16,lastUpdate:t()},{nama:"Bengkulu",progress:a(9),jumlahKabupatenKota:9,lastUpdate:t()},{nama:"Lampung",progress:a(15),jumlahKabupatenKota:15,lastUpdate:t()},{nama:"Kepulauan Bangka Belitung",progress:a(6),jumlahKabupatenKota:6,lastUpdate:t()},{nama:"Kepulauan Riau",progress:a(5),jumlahKabupatenKota:5,lastUpdate:t()},{nama:"DKI Jakarta",progress:a(6),jumlahKabupatenKota:6,lastUpdate:t()},{nama:"Jawa Barat",progress:a(27),jumlahKabupatenKota:27,lastUpdate:t()},{nama:"Jawa Tengah",progress:a(35),jumlahKabupatenKota:35,lastUpdate:t()},{nama:"D.I. Yogyakarta",progress:a(4),jumlahKabupatenKota:4,lastUpdate:t()},{nama:"Jawa Timur",progress:a(38),jumlahKabupatenKota:38,lastUpdate:t()},{nama:"Banten",progress:a(4),jumlahKabupatenKota:4,lastUpdate:t()},{nama:"Bali",progress:a(9),jumlahKabupatenKota:9,lastUpdate:t()},{nama:"Nusa Tenggara Barat",progress:a(8),jumlahKabupatenKota:8,lastUpdate:t()},{nama:"Nusa Tenggara Timur",progress:a(21),jumlahKabupatenKota:21,lastUpdate:t()},{nama:"Kalimantan Barat",progress:a(14),jumlahKabupatenKota:14,lastUpdate:t()},{nama:"Kalimantan Tengah",progress:a(13),jumlahKabupatenKota:13,lastUpdate:t()},{nama:"Kalimantan Selatan",progress:a(11),jumlahKabupatenKota:11,lastUpdate:t()},{nama:"Kalimantan Timur",progress:a(10),jumlahKabupatenKota:10,lastUpdate:t()},{nama:"Kalimantan Utara",progress:a(4),jumlahKabupatenKota:4,lastUpdate:t()},{nama:"Sulawesi Utara",progress:a(11),jumlahKabupatenKota:11,lastUpdate:t()},{nama:"Sulawesi Tengah",progress:a(9),jumlahKabupatenKota:9,lastUpdate:t()},{nama:"Sulawesi Selatan",progress:a(21),jumlahKabupatenKota:21,lastUpdate:t()},{nama:"Sulawesi Tenggara",progress:a(8),jumlahKabupatenKota:8,lastUpdate:t()},{nama:"Gorontalo",progress:a(5),jumlahKabupatenKota:5,lastUpdate:t()},{nama:"Sulawesi Barat",progress:a(6),jumlahKabupatenKota:6,lastUpdate:t()},{nama:"Maluku",progress:a(9),jumlahKabupatenKota:9,lastUpdate:t()},{nama:"Maluku Utara",progress:a(8),jumlahKabupatenKota:8,lastUpdate:t()},{nama:"Papua Barat",progress:a(12),jumlahKabupatenKota:12,lastUpdate:t()},{nama:"Papua",progress:a(29),jumlahKabupatenKota:29,lastUpdate:t()}];function a(n){return Math.floor(Math.random()*(n+1))}function t(){const n=new Date,x=Math.floor(Math.random()*24),i=Math.floor(Math.random()*60),g=Math.floor(Math.random()*60);return n.setHours(x,i,g,0),n}return{moment:$,columns:s,province:u,year:"2023",series:[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}],chartOptions:{chart:{type:"bar",height:350},colors:["#243763","#FF6E31","#9384D1"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},fill:{opacity:1},tooltip:{y:{formatter:function(n){return"$ "+n+" thousands"}}}},series2:[a(100)],chartOptions2:{chart:{type:"radialBar",offsetY:-20,sparkline:{enabled:!0}},plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",margin:5},dataLabels:{name:{offsetY:40,show:!0},value:{offsetY:-2,fontSize:"22px"}}}},grid:{padding:{top:-10}},colors:["#243763"],labels:["22 / 34"]}}}}),F=l("div",{class:"tw-text-3xl tw-mb-4"},"Beranda",-1),I={class:"tw-grid md:tw-grid-cols-3 tw-gap-4"},J=l("div",{class:"tw-text-right"},[l("p",{class:"tw-text-2xl tw-font-semibold"},"1,257"),l("p",null,"Pengguna")],-1),O=l("div",{class:"tw-text-right"},[l("p",{class:"tw-text-2xl tw-font-semibold"},"34"),l("p",null,"Provinsi")],-1),R=l("div",{class:"tw-text-right"},[l("p",{class:"tw-text-2xl tw-font-semibold"},"515"),l("p",null,"Kabupaten Kota")],-1),H={class:"tw-col-span-12 tw-flex tw-justify-between tw-items-center"},W=l("div",{class:"tw-text-xl tw-font-semibold"},"Progress Penginputan",-1),E={style:{"font-size":"0.8em"},class:"tw-mt-1 tw-mr-2 text-primary"},G={class:"absolute-full flex flex-center"},X={class:"tw-col-span-4 tw-w-full"},Z=l("div",{side:"",class:"tw-text-right"},[l("div",{class:"tw-text-lg tw-font-semibold"},"20"),l("div",null,"Completed")],-1),aa=l("div",{side:"",class:"tw-text-right"},[l("div",{class:"tw-text-lg tw-font-semibold"},"12"),l("div",null,"Progress")],-1),ta=l("div",{side:"",class:"tw-text-right"},[l("div",{class:"tw-text-lg tw-font-semibold"},"12"),l("div",null,"Belum Input")],-1);function ea(s,u,a,t,n,x){const i=j("vx-icon"),g=j("apex-chart");return m(),p(L,{class:"tw-p-6"},{default:o(()=>[F,l("div",I,[e(c,{flat:"",class:"tw-rounded-lg"},{default:o(()=>[e(h,{class:"tw-group tw-flex tw-justify-between"},{default:o(()=>[e(d,{color:"primary",size:"50px",class:"tw-transition-all tw-duration-300 tw-transform group-hover:tw-rotate-12"},{default:o(()=>[e(i,{iconName:"Profile2User",class:"text-white tw-transform tw-transition-transform tw-duration-500 tw-ease-in-out",size:"24"})]),_:1}),J]),_:1})]),_:1}),e(c,{flat:"",class:"tw-rounded-lg"},{default:o(()=>[e(h,{class:"tw-group tw-flex tw-justify-between"},{default:o(()=>[e(d,{color:"secondary",size:"50px",class:"tw-transition-all tw-duration-300 tw-transform group-hover:tw-rotate-12"},{default:o(()=>[e(i,{iconName:"Map",class:"text-white tw-transform tw-transition-transform tw-duration-500 tw-ease-in-out",size:"24"})]),_:1}),O]),_:1})]),_:1}),e(c,{flat:"",class:"tw-rounded-lg"},{default:o(()=>[e(h,{class:"tw-group tw-flex tw-justify-between"},{default:o(()=>[e(d,{color:"accent",size:"50px",class:"tw-transition-all tw-duration-300 tw-transform group-hover:tw-rotate-12"},{default:o(()=>[e(i,{iconName:"Map1",class:"text-white tw-transform tw-transition-transform tw-duration-500 tw-ease-in-out",size:"24"})]),_:1}),R]),_:1})]),_:1})]),e(c,{flat:"",class:"tw-mt-4 tw-grid tw-grid-cols-12 tw-p-4 tw-gap-4"},{default:o(()=>[l("div",H,[W,e(M,{modelValue:s.year,"onUpdate:modelValue":u[0]||(u[0]=r=>s.year=r),options:["2023"],label:"Tahun",class:"tw-w-44"},null,8,["modelValue"])]),e(z,{flat:"",class:"tw-col-span-8",columns:s.columns,rows:s.province},{body:o(r=>[e(T,{props:r},{default:o(()=>[e(b,null,{default:o(()=>[U(f(r.row.nama),1)]),_:2},1024),l("td",null,[r.row.progress==r.row.jumlahKabupatenKota?(m(),p(w,{key:0,label:"Completed",color:"positive"})):r.row.progress==0?(m(),p(w,{key:1,label:"Belum Input",color:"negative"})):r.row.progress<r.row.jumlahKabupatenKota?(m(),p(w,{key:2,label:"Progress",color:"secondary"})):C("",!0)]),e(b,{class:"tw-flex tw-items-center"},{default:o(()=>[l("div",E,f(parseFloat(r.row.progress/r.row.jumlahKabupatenKota*100).toFixed(0)+"%"),1),e(P,{rounded:"",stripe:"",size:"25px",value:r.row.progress/r.row.jumlahKabupatenKota,color:"accent",class:"q-mt-sm"},{default:o(()=>[l("div",G,[e(w,{color:"white","text-color":"accent",label:r.row.progress+"/"+r.row.jumlahKabupatenKota},null,8,["label"])])]),_:2},1032,["value"])]),_:2},1024),e(b,null,{default:o(()=>[U(f(s.moment(r.row.lastUpdate).format("YYYY-MM-DD hh:mm:ss")),1)]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["columns","rows"]),l("div",X,[e(g,{type:"radialBar",options:s.chartOptions2,series:s.series2},null,8,["options","series"]),e(N),e(A,null,{default:o(()=>[e(K,{class:"tw-flex tw-justify-between tw-items-center"},{default:o(()=>[e(_,{avatar:""},{default:o(()=>[e(d,{color:"positive",size:"50px"},{default:o(()=>[e(i,{iconName:"TickCircle",class:"text-white",size:"24"})]),_:1})]),_:1}),Z]),_:1}),e(K,{class:"tw-flex tw-justify-between tw-items-center"},{default:o(()=>[e(_,{avatar:""},{default:o(()=>[e(d,{color:"secondary",size:"50px"},{default:o(()=>[e(i,{iconName:"Bookmark",class:"text-white",size:"24"})]),_:1})]),_:1}),aa]),_:1}),e(K,{class:"tw-flex tw-justify-between tw-items-center"},{default:o(()=>[e(_,{avatar:""},{default:o(()=>[e(d,{color:"negative",size:"50px"},{default:o(()=>[e(i,{iconName:"ClipboardClose",class:"text-white",size:"24"})]),_:1})]),_:1}),ta]),_:1})]),_:1})])]),_:1})]),_:1})}var fa=Q(Y,[["render",ea]]);export{fa as default};

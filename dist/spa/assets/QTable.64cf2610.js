import{c as W,as as Ie,at as Qe,a as u,h as r,af as qe,j as G,b as _e,N as yt,k as Ce,r as M,w as D,aw as He,d as ze,ax as _t,a2 as wt,o as Ue,a7 as qt,V as pe,aC as Q,m as Ee,W as Ct,a9 as De,aD as we,aE as je,aF as kt,n as Ke,aG as Pt,Z as U,J as oe}from"./index.7bc0b522.js";import{Q as xt}from"./QDialog.6a914add.js";import{Q as Rt}from"./QList.8cc1d1d1.js";import{u as Tt,a as Vt,b as Bt,c as We,Q as Ot}from"./QMarkupTable.d7be55fc.js";import{u as ke,a as Pe}from"./uid.7b4398c3.js";import{d as $t,h as Ft}from"./QPage.9870b4b4.js";const Lt={xs:2,sm:4,md:6,lg:10,xl:14};function Me(e,a,l){return{transform:a===!0?`translateX(${l.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var pt=W({name:"QLinearProgress",props:{...ke,...Ie,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:a}){const{proxy:l}=G(),v=Pe(e,l.$q),o=Qe(e,Lt),f=u(()=>e.indeterminate===!0||e.query===!0),i=u(()=>e.reverse!==e.query),c=u(()=>({...o.value!==null?o.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),d=u(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),m=u(()=>Me(e.buffer!==void 0?e.buffer:1,i.value,l.$q)),n=u(()=>`with${e.instantFeedback===!0?"out":""}-transition`),b=u(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${n.value} q-linear-progress__track--${v.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),w=u(()=>Me(f.value===!0?1:e.value,i.value,l.$q)),k=u(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${n.value} q-linear-progress__model--${f.value===!0?"in":""}determinate`),q=u(()=>({width:`${e.value*100}%`})),y=u(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${n.value}`);return()=>{const h=[r("div",{class:b.value,style:m.value}),r("div",{class:k.value,style:w.value})];return e.stripe===!0&&f.value===!1&&h.push(r("div",{class:y.value,style:q.value})),r("div",{class:d.value,style:c.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},qe(a.default,h))}}}),Et=W({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:a,emit:l}){const v=G(),{proxy:{$q:o}}=v,f=i=>{l("click",i)};return()=>{if(e.props===void 0)return r("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:f},_e(a.default));let i,c;const d=v.vnode.key;if(d){if(i=e.props.colsMap[d],i===void 0)return}else i=e.props.col;if(i.sortable===!0){const n=i.align==="right"?"unshift":"push";c=yt(a.default,[]),c[n](r(Ce,{class:i.__iconClass,name:o.iconSet.table.arrowUp}))}else c=_e(a.default);const m={class:i.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:i.headerStyle,onClick:n=>{i.sortable===!0&&e.props.sort(i),f(n)}};return r("th",m,c)}}});function Ge(e,a){return r("div",e,[r("table",{class:"q-table"},a)])}const Dt={list:Rt,table:Bt},jt=["list","table","__qtable"];var Mt=W({name:"QVirtualScroll",props:{...Tt,type:{type:String,default:"list",validator:e=>jt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:a,attrs:l}){let v;const o=M(null),f=u(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:i,localResetVirtualScroll:c,padVirtualScroll:d,onVirtualScrollEvt:m}=Vt({virtualScrollLength:f,getVirtualScrollTarget:q,getVirtualScrollEl:k}),n=u(()=>{if(f.value===0)return[];const B=($,x)=>({index:i.value.from+x,item:$});return e.itemsFn===void 0?e.items.slice(i.value.from,i.value.to).map(B):e.itemsFn(i.value.from,i.value.to-i.value.from).map(B)}),b=u(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),w=u(()=>e.scrollTarget!==void 0?{}:{tabindex:0});D(f,()=>{c()}),D(()=>e.scrollTarget,()=>{h(),y()});function k(){return o.value.$el||o.value}function q(){return v}function y(){v=qt(k(),e.scrollTarget),v.addEventListener("scroll",m,pe.passive)}function h(){v!==void 0&&(v.removeEventListener("scroll",m,pe.passive),v=void 0)}function V(){let B=d(e.type==="list"?"div":"tbody",n.value.map(a.default));return a.before!==void 0&&(B=a.before().concat(B)),qe(a.after,B)}return He(()=>{c()}),ze(()=>{y()}),_t(()=>{y()}),wt(()=>{h()}),Ue(()=>{h()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Ge({ref:o,class:"q-table__middle "+b.value},V()):r(Dt[e.type],{...l,ref:o,class:[l.class,b.value],...w.value},V)}}});function At(e,a){const l=M(null),v=u(()=>e.disable===!0?null:r("span",{ref:l,class:"no-outline",tabindex:-1}));function o(f){const i=a.value;f!==void 0&&f.type.indexOf("key")===0?i!==null&&document.activeElement!==i&&i.contains(document.activeElement)===!0&&i.focus():l.value!==null&&(f===void 0||i!==null&&i.contains(f.target)===!0)&&l.value.focus()}return{refocusTargetEl:v,refocusTarget:o}}var Nt={xs:30,sm:35,md:40,lg:50,xl:60};const It={...ke,...Ie,...$t,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Qt=["update:modelValue"];function Ht(e,a){const{props:l,slots:v,emit:o,proxy:f}=G(),{$q:i}=f,c=Pe(l,i),d=M(null),{refocusTargetEl:m,refocusTarget:n}=At(l,d),b=Qe(l,Nt),w=u(()=>l.val!==void 0&&Array.isArray(l.modelValue)),k=u(()=>{const C=Q(l.val);return w.value===!0?l.modelValue.findIndex(L=>Q(L)===C):-1}),q=u(()=>w.value===!0?k.value>-1:Q(l.modelValue)===Q(l.trueValue)),y=u(()=>w.value===!0?k.value===-1:Q(l.modelValue)===Q(l.falseValue)),h=u(()=>q.value===!1&&y.value===!1),V=u(()=>l.disable===!0?-1:l.tabindex||0),B=u(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(l.disable===!0?" disabled":"")+(c.value===!0?` q-${e}--dark`:"")+(l.dense===!0?` q-${e}--dense`:"")+(l.leftLabel===!0?" reverse":"")),$=u(()=>{const C=q.value===!0?"truthy":y.value===!0?"falsy":"indet",L=l.color!==void 0&&(l.keepColor===!0||(e==="toggle"?q.value===!0:y.value!==!0))?` text-${l.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${C}${L}`}),x=u(()=>{const C={type:"checkbox"};return l.name!==void 0&&Object.assign(C,{".checked":q.value,"^checked":q.value===!0?"checked":void 0,name:l.name,value:w.value===!0?l.val:l.trueValue}),C}),T=Ft(x),A=u(()=>{const C={tabindex:V.value,role:e==="toggle"?"switch":"checkbox","aria-label":l.label,"aria-checked":h.value===!0?"mixed":q.value===!0?"true":"false"};return l.disable===!0&&(C["aria-disabled"]="true"),C});function H(C){C!==void 0&&(Ee(C),n(C)),l.disable!==!0&&o("update:modelValue",z(),C)}function z(){if(w.value===!0){if(q.value===!0){const C=l.modelValue.slice();return C.splice(k.value,1),C}return l.modelValue.concat([l.val])}if(q.value===!0){if(l.toggleOrder!=="ft"||l.toggleIndeterminate===!1)return l.falseValue}else if(y.value===!0){if(l.toggleOrder==="ft"||l.toggleIndeterminate===!1)return l.trueValue}else return l.toggleOrder!=="ft"?l.trueValue:l.falseValue;return l.indeterminateValue}function J(C){(C.keyCode===13||C.keyCode===32)&&Ee(C)}function F(C){(C.keyCode===13||C.keyCode===32)&&H(C)}const j=a(q,h);return Object.assign(f,{toggle:H}),()=>{const C=j();l.disable!==!0&&T(C,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const L=[r("div",{class:$.value,style:b.value,"aria-hidden":"true"},C)];m.value!==null&&L.push(m.value);const X=l.label!==void 0?qe(v.default,[l.label]):_e(v.default);return X!==void 0&&L.push(r("div",{class:`q-${e}__label q-anchor--skip`},X)),r("div",{ref:d,class:B.value,...A.value,onClick:H,onKeydown:J,onKeyup:F},L)}}const zt=r("div",{key:"svg",class:"q-checkbox__bg absolute"},[r("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[r("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),r("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var ye=W({name:"QCheckbox",props:It,emits:Qt,setup(e){function a(l,v){const o=u(()=>(l.value===!0?e.checkedIcon:v.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>o.value!==null?[r("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[r(Ce,{class:"q-checkbox__icon",name:o.value})])]:[zt]}return Ht("checkbox",a)}});let K=0;const Ut={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Kt=["update:fullscreen","fullscreen"];function Wt(){const e=G(),{props:a,emit:l,proxy:v}=e;let o,f,i;const c=M(!1);Ct(e)===!0&&D(()=>v.$route.fullPath,()=>{a.noRouteFullscreenExit!==!0&&n()}),D(()=>a.fullscreen,b=>{c.value!==b&&d()}),D(c,b=>{l("update:fullscreen",b),l("fullscreen",b)});function d(){c.value===!0?n():m()}function m(){c.value!==!0&&(c.value=!0,i=v.$el.parentNode,i.replaceChild(f,v.$el),document.body.appendChild(v.$el),K++,K===1&&document.body.classList.add("q-body--fullscreen-mixin"),o={handler:n},De.add(o))}function n(){c.value===!0&&(o!==void 0&&(De.remove(o),o=void 0),i.replaceChild(v.$el,f),c.value=!1,K=Math.max(0,K-1),K===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),v.$el.scrollIntoView!==void 0&&setTimeout(()=>{v.$el.scrollIntoView()})))}return He(()=>{f=document.createElement("span")}),ze(()=>{a.fullscreen===!0&&m()}),Ue(n),Object.assign(v,{toggleFullscreen:d,setFullscreen:m,exitFullscreen:n}),{inFullscreen:c,toggleFullscreen:d}}function Gt(e,a){return new Date(e)-new Date(a)}const Jt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Xt(e,a,l,v){const o=u(()=>{const{sortBy:c}=a.value;return c&&l.value.find(d=>d.name===c)||null}),f=u(()=>e.sortMethod!==void 0?e.sortMethod:(c,d,m)=>{const n=l.value.find(k=>k.name===d);if(n===void 0||n.field===void 0)return c;const b=m===!0?-1:1,w=typeof n.field=="function"?k=>n.field(k):k=>k[n.field];return c.sort((k,q)=>{let y=w(k),h=w(q);return y==null?-1*b:h==null?1*b:n.sort!==void 0?n.sort(y,h,k,q)*b:we(y)===!0&&we(h)===!0?(y-h)*b:je(y)===!0&&je(h)===!0?Gt(y,h)*b:typeof y=="boolean"&&typeof h=="boolean"?(y-h)*b:([y,h]=[y,h].map(V=>(V+"").toLocaleString().toLowerCase()),y<h?-1*b:y===h?0:b)})});function i(c){let d=e.columnSortOrder;if(kt(c)===!0)c.sortOrder&&(d=c.sortOrder),c=c.name;else{const b=l.value.find(w=>w.name===c);b!==void 0&&b.sortOrder&&(d=b.sortOrder)}let{sortBy:m,descending:n}=a.value;m!==c?(m=c,n=d==="da"):e.binaryStateSort===!0?n=!n:n===!0?d==="ad"?m=null:n=!1:d==="ad"?n=!0:m=null,v({sortBy:m,descending:n,page:1})}return{columnToSort:o,computedSortMethod:f,sort:i}}const Zt={filter:[String,Object],filterMethod:Function};function Yt(e,a){const l=u(()=>e.filterMethod!==void 0?e.filterMethod:(v,o,f,i)=>{const c=o?o.toLowerCase():"";return v.filter(d=>f.some(m=>{const n=i(m,d)+"";return(n==="undefined"||n==="null"?"":n.toLowerCase()).indexOf(c)!==-1}))});return D(()=>e.filter,()=>{Ke(()=>{a({page:1},!0)})},{deep:!0}),{computedFilterMethod:l}}function el(e,a){for(const l in a)if(a[l]!==e[l])return!1;return!0}function Ae(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const tl={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function ll(e,a){const{props:l,emit:v}=e,o=M(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:l.rowsPerPageOptions.length!==0?l.rowsPerPageOptions[0]:5},l.pagination)),f=u(()=>{const n=l["onUpdate:pagination"]!==void 0?{...o.value,...l.pagination}:o.value;return Ae(n)}),i=u(()=>f.value.rowsNumber!==void 0);function c(n){d({pagination:n,filter:l.filter})}function d(n={}){Ke(()=>{v("request",{pagination:n.pagination||f.value,filter:n.filter||l.filter,getCellValue:a})})}function m(n,b){const w=Ae({...f.value,...n});if(el(f.value,w)===!0){i.value===!0&&b===!0&&c(w);return}if(i.value===!0){c(w);return}l.pagination!==void 0&&l["onUpdate:pagination"]!==void 0?v("update:pagination",w):o.value=w}return{innerPagination:o,computedPagination:f,isServerSide:i,requestServerInteraction:d,setPagination:m}}function al(e,a,l,v,o,f){const{props:i,emit:c,proxy:{$q:d}}=e,m=u(()=>v.value===!0?l.value.rowsNumber||0:f.value),n=u(()=>{const{page:x,rowsPerPage:T}=l.value;return(x-1)*T}),b=u(()=>{const{page:x,rowsPerPage:T}=l.value;return x*T}),w=u(()=>l.value.page===1),k=u(()=>l.value.rowsPerPage===0?1:Math.max(1,Math.ceil(m.value/l.value.rowsPerPage))),q=u(()=>b.value===0?!0:l.value.page>=k.value),y=u(()=>(i.rowsPerPageOptions.includes(a.value.rowsPerPage)?i.rowsPerPageOptions:[a.value.rowsPerPage].concat(i.rowsPerPageOptions)).map(T=>({label:T===0?d.lang.table.allRows:""+T,value:T})));D(k,(x,T)=>{if(x===T)return;const A=l.value.page;x&&!A?o({page:1}):x<A&&o({page:x})});function h(){o({page:1})}function V(){const{page:x}=l.value;x>1&&o({page:x-1})}function B(){const{page:x,rowsPerPage:T}=l.value;b.value>0&&x*T<m.value&&o({page:x+1})}function $(){o({page:k.value})}return i["onUpdate:pagination"]!==void 0&&c("update:pagination",{...l.value}),{firstRowIndex:n,lastRowIndex:b,isFirstPage:w,isLastPage:q,pagesNumber:k,computedRowsPerPageOptions:y,computedRowsNumber:m,firstPage:h,prevPage:V,nextPage:B,lastPage:$}}const nl={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},rl=["update:selected","selection"];function ol(e,a,l,v){const o=u(()=>{const q={};return e.selected.map(v.value).forEach(y=>{q[y]=!0}),q}),f=u(()=>e.selection!=="none"),i=u(()=>e.selection==="single"),c=u(()=>e.selection==="multiple"),d=u(()=>l.value.length!==0&&l.value.every(q=>o.value[v.value(q)]===!0)),m=u(()=>d.value!==!0&&l.value.some(q=>o.value[v.value(q)]===!0)),n=u(()=>e.selected.length);function b(q){return o.value[q]===!0}function w(){a("update:selected",[])}function k(q,y,h,V){a("selection",{rows:y,added:h,keys:q,evt:V});const B=i.value===!0?h===!0?y:[]:h===!0?e.selected.concat(y):e.selected.filter($=>q.includes(v.value($))===!1);a("update:selected",B)}return{hasSelectionMode:f,singleSelection:i,multipleSelection:c,allRowsSelected:d,someRowsSelected:m,rowsSelectedNumber:n,isRowSelected:b,clearSelection:w,updateSelection:k}}function Ne(e){return Array.isArray(e)?e.slice():[]}const il={expanded:Array},ul=["update:expanded"];function sl(e,a){const l=M(Ne(e.expanded));D(()=>e.expanded,i=>{l.value=Ne(i)});function v(i){return l.value.includes(i)}function o(i){e.expanded!==void 0?a("update:expanded",i):l.value=i}function f(i,c){const d=l.value.slice(),m=d.indexOf(i);c===!0?m===-1&&(d.push(i),o(d)):m!==-1&&(d.splice(m,1),o(d))}return{isRowExpanded:v,setExpanded:o,updateExpanded:f}}const cl={visibleColumns:Array};function dl(e,a,l){const v=u(()=>{if(e.columns!==void 0)return e.columns;const c=e.rows[0];return c!==void 0?Object.keys(c).map(d=>({name:d,label:d.toUpperCase(),field:d,align:we(c[d])?"right":"left",sortable:!0})):[]}),o=u(()=>{const{sortBy:c,descending:d}=a.value;return(e.visibleColumns!==void 0?v.value.filter(n=>n.required===!0||e.visibleColumns.includes(n.name)===!0):v.value).map(n=>{const b=n.align||"right",w=`text-${b}`;return{...n,align:b,__iconClass:`q-table__sort-icon q-table__sort-icon--${b}`,__thClass:w+(n.headerClasses!==void 0?" "+n.headerClasses:"")+(n.sortable===!0?" sortable":"")+(n.name===c?` sorted ${d===!0?"sort-desc":""}`:""),__tdStyle:n.style!==void 0?typeof n.style!="function"?()=>n.style:n.style:()=>null,__tdClass:n.classes!==void 0?typeof n.classes!="function"?()=>w+" "+n.classes:k=>w+" "+n.classes(k):()=>w}})}),f=u(()=>{const c={};return o.value.forEach(d=>{c[d.name]=d}),c}),i=u(()=>e.tableColspan!==void 0?e.tableColspan:o.value.length+(l.value===!0?1:0));return{colList:v,computedCols:o,computedColsMap:f,computedColspan:i}}const ie="q-table__bottom row items-center",Je={};We.forEach(e=>{Je[e]={}});var hl=W({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Je,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...ke,...Ut,...cl,...Zt,...tl,...il,...nl,...Jt},emits:["request","virtualScroll",...Kt,...ul,...rl],setup(e,{slots:a,emit:l}){const v=G(),{proxy:{$q:o}}=v,f=Pe(e,o),{inFullscreen:i,toggleFullscreen:c}=Wt(),d=u(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),m=M(null),n=M(null),b=u(()=>e.grid!==!0&&e.virtualScroll===!0),w=u(()=>" q-table__card"+(f.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),k=u(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":w.value)+(f.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(i.value===!0?" fullscreen scroll":"")),q=u(()=>k.value+(e.loading===!0?" q-table--loading":""));D(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+k.value,()=>{b.value===!0&&n.value!==null&&n.value.reset()});const{innerPagination:y,computedPagination:h,isServerSide:V,requestServerInteraction:B,setPagination:$}=ll(v,N),{computedFilterMethod:x}=Yt(e,$),{isRowExpanded:T,setExpanded:A,updateExpanded:H}=sl(e,l),z=u(()=>{let t=e.rows;if(V.value===!0||t.length===0)return t;const{sortBy:s,descending:g}=h.value;return e.filter&&(t=x.value(t,e.filter,p.value,N)),Ye.value!==null&&(t=et.value(e.rows===t?t.slice():t,s,g)),t}),J=u(()=>z.value.length),F=u(()=>{let t=z.value;if(V.value===!0)return t;const{rowsPerPage:s}=h.value;return s!==0&&(Y.value===0&&e.rows!==t?t.length>ee.value&&(t=t.slice(0,ee.value)):t=t.slice(Y.value,ee.value)),t}),{hasSelectionMode:j,singleSelection:C,multipleSelection:L,allRowsSelected:X,someRowsSelected:xe,rowsSelectedNumber:ue,isRowSelected:se,clearSelection:Xe,updateSelection:Z}=ol(e,l,F,d),{colList:Ze,computedCols:p,computedColsMap:Re,computedColspan:Te}=dl(e,h,j),{columnToSort:Ye,computedSortMethod:et,sort:ce}=Xt(e,h,Ze,$),{firstRowIndex:Y,lastRowIndex:ee,isFirstPage:de,isLastPage:ve,pagesNumber:te,computedRowsPerPageOptions:tt,computedRowsNumber:le,firstPage:fe,prevPage:ge,nextPage:be,lastPage:me}=al(v,y,h,V,$,J),lt=u(()=>F.value.length===0),at=u(()=>{const t={};return We.forEach(s=>{t[s]=e[s]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function nt(){b.value===!0&&n.value.reset()}function rt(){if(e.grid===!0)return St();const t=e.hideHeader!==!0?Fe:null;if(b.value===!0){const g=a["top-row"],S=a["bottom-row"],_={default:R=>Be(R.item,a.body,R.index)};if(g!==void 0){const R=r("tbody",g({cols:p.value}));_.before=t===null?()=>R:()=>[t()].concat(R)}else t!==null&&(_.before=t);return S!==void 0&&(_.after=()=>r("tbody",S({cols:p.value}))),r(Mt,{ref:n,class:e.tableClass,style:e.tableStyle,...at.value,scrollTarget:e.virtualScrollTarget,items:F.value,type:"__qtable",tableColspan:Te.value,onVirtualScroll:it},_)}const s=[ut()];return t!==null&&s.unshift(t()),Ge({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},s)}function ot(t,s){if(n.value!==null){n.value.scrollTo(t,s);return}t=parseInt(t,10);const g=m.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(g!==null){const S=m.value.querySelector(".q-table__middle.scroll"),_=g.offsetTop-e.virtualScrollStickySizeStart,R=_<S.scrollTop?"decrease":"increase";S.scrollTop=_,l("virtualScroll",{index:t,from:0,to:y.value.rowsPerPage-1,direction:R})}}function it(t){l("virtualScroll",t)}function Ve(){return[r(pt,{class:"q-table__linear-progress",color:e.color,dark:f.value,indeterminate:!0,trackColor:"transparent"})]}function Be(t,s,g){const S=d.value(t),_=se(S);if(s!==void 0)return s(Oe({key:S,row:t,pageIndex:g,__trClass:_?"selected":""}));const R=a["body-cell"],P=p.value.map(O=>{const ne=a[`body-cell-${O.name}`],re=ne!==void 0?ne:R;return re!==void 0?re(st({key:S,row:t,pageIndex:g,col:O})):r("td",{class:O.__tdClass(t),style:O.__tdStyle(t)},N(O,t))});if(j.value===!0){const O=a["body-selection"],ne=O!==void 0?O(ct({key:S,row:t,pageIndex:g})):[r(ye,{modelValue:_,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(re,ht)=>{Z([S],[t],re,ht)}})];P.unshift(r("td",{class:"q-table--col-auto-width"},ne))}const E={key:S,class:{selected:_}};return e.onRowClick!==void 0&&(E.class["cursor-pointer"]=!0,E.onClick=O=>{l("RowClick",O,t,g)}),e.onRowDblclick!==void 0&&(E.class["cursor-pointer"]=!0,E.onDblclick=O=>{l("RowDblclick",O,t,g)}),e.onRowContextmenu!==void 0&&(E.class["cursor-pointer"]=!0,E.onContextmenu=O=>{l("RowContextmenu",O,t,g)}),r("tr",E,P)}function ut(){const t=a.body,s=a["top-row"],g=a["bottom-row"];let S=F.value.map((_,R)=>Be(_,t,R));return s!==void 0&&(S=s({cols:p.value}).concat(S)),g!==void 0&&(S=S.concat(g({cols:p.value}))),r("tbody",S)}function Oe(t){return Se(t),t.cols=t.cols.map(s=>U({...s},"value",()=>N(s,t.row))),t}function st(t){return Se(t),U(t,"value",()=>N(t.col,t.row)),t}function ct(t){return Se(t),t}function Se(t){Object.assign(t,{cols:p.value,colsMap:Re.value,sort:ce,rowIndex:Y.value+t.pageIndex,color:e.color,dark:f.value,dense:e.dense}),j.value===!0&&U(t,"selected",()=>se(t.key),(s,g)=>{Z([t.key],[t.row],s,g)}),U(t,"expand",()=>T(t.key),s=>{H(t.key,s)})}function N(t,s){const g=typeof t.field=="function"?t.field(s):s[t.field];return t.format!==void 0?t.format(g,s):g}const I=u(()=>({pagination:h.value,pagesNumber:te.value,isFirstPage:de.value,isLastPage:ve.value,firstPage:fe,prevPage:ge,nextPage:be,lastPage:me,inFullscreen:i.value,toggleFullscreen:c}));function dt(){const t=a.top,s=a["top-left"],g=a["top-right"],S=a["top-selection"],_=j.value===!0&&S!==void 0&&ue.value>0,R="q-table__top relative-position row items-center";if(t!==void 0)return r("div",{class:R},[t(I.value)]);let P;if(_===!0?P=S(I.value).slice():(P=[],s!==void 0?P.push(r("div",{class:"q-table__control"},[s(I.value)])):e.title&&P.push(r("div",{class:"q-table__control"},[r("div",{class:["q-table__title",e.titleClass]},e.title)]))),g!==void 0&&(P.push(r("div",{class:"q-table__separator col"})),P.push(r("div",{class:"q-table__control"},[g(I.value)]))),P.length!==0)return r("div",{class:R},P)}const $e=u(()=>xe.value===!0?null:X.value);function Fe(){const t=vt();return e.loading===!0&&a.loading===void 0&&t.push(r("tr",{class:"q-table__progress"},[r("th",{class:"relative-position",colspan:Te.value},Ve())])),r("thead",t)}function vt(){const t=a.header,s=a["header-cell"];if(t!==void 0)return t(he({header:!0})).slice();const g=p.value.map(S=>{const _=a[`header-cell-${S.name}`],R=_!==void 0?_:s,P=he({col:S});return R!==void 0?R(P):r(Et,{key:S.name,props:P},()=>S.label)});if(C.value===!0&&e.grid!==!0)g.unshift(r("th",{class:"q-table--col-auto-width"}," "));else if(L.value===!0){const S=a["header-selection"],_=S!==void 0?S(he({})):[r(ye,{color:e.color,modelValue:$e.value,dark:f.value,dense:e.dense,"onUpdate:modelValue":Le})];g.unshift(r("th",{class:"q-table--col-auto-width"},_))}return[r("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},g)]}function he(t){return Object.assign(t,{cols:p.value,sort:ce,colsMap:Re.value,color:e.color,dark:f.value,dense:e.dense}),L.value===!0&&U(t,"selected",()=>$e.value,Le),t}function Le(t){xe.value===!0&&(t=!1),Z(F.value.map(d.value),F.value,t)}const ae=u(()=>{const t=[e.iconFirstPage||o.iconSet.table.firstPage,e.iconPrevPage||o.iconSet.table.prevPage,e.iconNextPage||o.iconSet.table.nextPage,e.iconLastPage||o.iconSet.table.lastPage];return o.lang.rtl===!0?t.reverse():t});function ft(){if(e.hideBottom===!0)return;if(lt.value===!0){if(e.hideNoData===!0)return;const g=e.loading===!0?e.loadingLabel||o.lang.table.loading:e.filter?e.noResultsLabel||o.lang.table.noResults:e.noDataLabel||o.lang.table.noData,S=a["no-data"],_=S!==void 0?[S({message:g,icon:o.iconSet.table.warning,filter:e.filter})]:[r(Ce,{class:"q-table__bottom-nodata-icon",name:o.iconSet.table.warning}),g];return r("div",{class:ie+" q-table__bottom--nodata"},_)}const t=a.bottom;if(t!==void 0)return r("div",{class:ie},[t(I.value)]);const s=e.hideSelectedBanner!==!0&&j.value===!0&&ue.value>0?[r("div",{class:"q-table__control"},[r("div",[(e.selectedRowsLabel||o.lang.table.selectedRecords)(ue.value)])])]:[];if(e.hidePagination!==!0)return r("div",{class:ie+" justify-end"},bt(s));if(s.length!==0)return r("div",{class:ie},s)}function gt(t){$({page:1,rowsPerPage:t.value})}function bt(t){let s;const{rowsPerPage:g}=h.value,S=e.paginationLabel||o.lang.table.pagination,_=a.pagination,R=e.rowsPerPageOptions.length>1;if(t.push(r("div",{class:"q-table__separator col"})),R===!0&&t.push(r("div",{class:"q-table__control"},[r("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||o.lang.table.recordsPerPage]),r(Ot,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:g,options:tt.value,displayValue:g===0?o.lang.table.allRows:g,dark:f.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":gt})])),_!==void 0)s=_(I.value);else if(s=[r("span",g!==0?{class:"q-table__bottom-item"}:{},[g?S(Y.value+1,Math.min(ee.value,le.value),le.value):S(1,J.value,le.value)])],g!==0&&te.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),te.value>2&&s.push(r(oe,{key:"pgFirst",...P,icon:ae.value[0],disable:de.value,onClick:fe})),s.push(r(oe,{key:"pgPrev",...P,icon:ae.value[1],disable:de.value,onClick:ge}),r(oe,{key:"pgNext",...P,icon:ae.value[2],disable:ve.value,onClick:be})),te.value>2&&s.push(r(oe,{key:"pgLast",...P,icon:ae.value[3],disable:ve.value,onClick:me}))}return t.push(r("div",{class:"q-table__control"},s)),t}function mt(){const t=e.gridHeader===!0?[r("table",{class:"q-table"},[Fe()])]:e.loading===!0&&a.loading===void 0?Ve():void 0;return r("div",{class:"q-table__middle"},t)}function St(){const t=a.item!==void 0?a.item:s=>{const g=s.cols.map(_=>r("div",{class:"q-table__grid-item-row"},[r("div",{class:"q-table__grid-item-title"},[_.label]),r("div",{class:"q-table__grid-item-value"},[_.value])]));if(j.value===!0){const _=a["body-selection"],R=_!==void 0?_(s):[r(ye,{modelValue:s.selected,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(P,E)=>{Z([s.key],[s.row],P,E)}})];g.unshift(r("div",{class:"q-table__grid-item-row"},R),r(xt,{dark:f.value}))}const S={class:["q-table__grid-item-card"+w.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(S.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(S.onClick=_=>{l("RowClick",_,s.row,s.pageIndex)}),e.onRowDblclick!==void 0&&(S.onDblclick=_=>{l("RowDblclick",_,s.row,s.pageIndex)})),r("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(s.selected===!0?" q-table__grid-item--selected":"")},[r("div",S,g)])};return r("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},F.value.map((s,g)=>t(Oe({key:d.value(s),row:s,pageIndex:g}))))}return Object.assign(v.proxy,{requestServerInteraction:B,setPagination:$,firstPage:fe,prevPage:ge,nextPage:be,lastPage:me,isRowSelected:se,clearSelection:Xe,isRowExpanded:T,setExpanded:A,sort:ce,resetVirtualScroll:nt,scrollTo:ot,getCellValue:N}),Pt(v.proxy,{filteredSortedRows:()=>z.value,computedRows:()=>F.value,computedRowsNumber:()=>le.value}),()=>{const t=[dt()],s={ref:m,class:q.value};return e.grid===!0?t.push(mt()):Object.assign(s,{class:[s.class,e.cardClass],style:e.cardStyle}),t.push(rt(),ft()),e.loading===!0&&a.loading!==void 0&&t.push(a.loading()),r("div",s,t)}}});export{hl as Q,pt as a,ye as b};

import{c as H,a as u,h as o,b as X,j as z,N as yt,k as qe,r as D,w as M,ax as Ie,d as Qe,aw as _t,a3 as wt,o as He,a8 as qt,W as Le,ag as Ce,ay as ze,az as Ue,aA as Q,m as Ee,X as Ct,aa as Me,aB as we,aC as je,aD as kt,n as We,aE as Pt,$ as K,J as ie}from"./index.3ebcb345.js";import{Q as xt}from"./QSeparator.698d4d94.js";import{Q as Rt}from"./ClosePopup.14ccf5e1.js";import{Q as Tt}from"./QMarkupTable.f9ca04bc.js";import{u as Bt,a as Vt,c as Ke,Q as Ot}from"./QSelect.1b00b10e.js";import{u as ke,a as Pe}from"./QCard.c2f51ffe.js";import{a as $t,h as Ft}from"./use-key-composition.c1ecc61d.js";var yl=H({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:a}){const l=z(),d=u(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return o("td",{class:d.value},X(a.default));const r=l.vnode.key,v=(e.props.colsMap!==void 0?e.props.colsMap[r]:null)||e.props.col;if(v===void 0)return;const{row:i}=e.props;return o("td",{class:d.value+v.__tdClass(i),style:v.__tdStyle(i)},X(a.default))}}}),pt=H({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:a,emit:l}){const d=z(),{proxy:{$q:r}}=d,v=i=>{l("click",i)};return()=>{if(e.props===void 0)return o("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:v},X(a.default));let i,c;const f=d.vnode.key;if(f){if(i=e.props.colsMap[f],i===void 0)return}else i=e.props.col;if(i.sortable===!0){const n=i.align==="right"?"unshift":"push";c=yt(a.default,[]),c[n](o(qe,{class:i.__iconClass,name:r.iconSet.table.arrowUp}))}else c=X(a.default);const m={class:i.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:i.headerStyle,onClick:n=>{i.sortable===!0&&e.props.sort(i),v(n)}};return o("th",m,c)}}});function Ge(e,a){return o("div",e,[o("table",{class:"q-table"},a)])}const Lt={list:Rt,table:Tt},Et=["list","table","__qtable"];var Mt=H({name:"QVirtualScroll",props:{...Bt,type:{type:String,default:"list",validator:e=>Et.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:a,attrs:l}){let d;const r=D(null),v=u(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:i,localResetVirtualScroll:c,padVirtualScroll:f,onVirtualScrollEvt:m}=Vt({virtualScrollLength:v,getVirtualScrollTarget:q,getVirtualScrollEl:k}),n=u(()=>{if(v.value===0)return[];const V=($,x)=>({index:i.value.from+x,item:$});return e.itemsFn===void 0?e.items.slice(i.value.from,i.value.to).map(V):e.itemsFn(i.value.from,i.value.to-i.value.from).map(V)}),b=u(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),w=u(()=>e.scrollTarget!==void 0?{}:{tabindex:0});M(v,()=>{c()}),M(()=>e.scrollTarget,()=>{h(),y()});function k(){return r.value.$el||r.value}function q(){return d}function y(){d=qt(k(),e.scrollTarget),d.addEventListener("scroll",m,Le.passive)}function h(){d!==void 0&&(d.removeEventListener("scroll",m,Le.passive),d=void 0)}function B(){let V=f(e.type==="list"?"div":"tbody",n.value.map(a.default));return a.before!==void 0&&(V=a.before().concat(V)),Ce(a.after,V)}return Ie(()=>{c()}),Qe(()=>{y()}),_t(()=>{y()}),wt(()=>{h()}),He(()=>{h()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Ge({ref:r,class:"q-table__middle "+b.value},B()):o(Lt[e.type],{...l,ref:r,class:[l.class,b.value],...w.value},B)}}});const jt={xs:2,sm:4,md:6,lg:10,xl:14};function De(e,a,l){return{transform:a===!0?`translateX(${l.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Dt=H({name:"QLinearProgress",props:{...ke,...ze,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:a}){const{proxy:l}=z(),d=Pe(e,l.$q),r=Ue(e,jt),v=u(()=>e.indeterminate===!0||e.query===!0),i=u(()=>e.reverse!==e.query),c=u(()=>({...r.value!==null?r.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),f=u(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),m=u(()=>De(e.buffer!==void 0?e.buffer:1,i.value,l.$q)),n=u(()=>`with${e.instantFeedback===!0?"out":""}-transition`),b=u(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${n.value} q-linear-progress__track--${d.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),w=u(()=>De(v.value===!0?1:e.value,i.value,l.$q)),k=u(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${n.value} q-linear-progress__model--${v.value===!0?"in":""}determinate`),q=u(()=>({width:`${e.value*100}%`})),y=u(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${n.value}`);return()=>{const h=[o("div",{class:b.value,style:m.value}),o("div",{class:k.value,style:w.value})];return e.stripe===!0&&v.value===!1&&h.push(o("div",{class:y.value,style:q.value})),o("div",{class:f.value,style:c.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Ce(a.default,h))}}});function At(e,a){const l=D(null),d=u(()=>e.disable===!0?null:o("span",{ref:l,class:"no-outline",tabindex:-1}));function r(v){const i=a.value;v!==void 0&&v.type.indexOf("key")===0?i!==null&&document.activeElement!==i&&i.contains(document.activeElement)===!0&&i.focus():l.value!==null&&(v===void 0||i!==null&&i.contains(v.target)===!0)&&l.value.focus()}return{refocusTargetEl:d,refocusTarget:r}}var Nt={xs:30,sm:35,md:40,lg:50,xl:60};const It={...ke,...ze,...$t,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Qt=["update:modelValue"];function Ht(e,a){const{props:l,slots:d,emit:r,proxy:v}=z(),{$q:i}=v,c=Pe(l,i),f=D(null),{refocusTargetEl:m,refocusTarget:n}=At(l,f),b=Ue(l,Nt),w=u(()=>l.val!==void 0&&Array.isArray(l.modelValue)),k=u(()=>{const C=Q(l.val);return w.value===!0?l.modelValue.findIndex(p=>Q(p)===C):-1}),q=u(()=>w.value===!0?k.value>-1:Q(l.modelValue)===Q(l.trueValue)),y=u(()=>w.value===!0?k.value===-1:Q(l.modelValue)===Q(l.falseValue)),h=u(()=>q.value===!1&&y.value===!1),B=u(()=>l.disable===!0?-1:l.tabindex||0),V=u(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(l.disable===!0?" disabled":"")+(c.value===!0?` q-${e}--dark`:"")+(l.dense===!0?` q-${e}--dense`:"")+(l.leftLabel===!0?" reverse":"")),$=u(()=>{const C=q.value===!0?"truthy":y.value===!0?"falsy":"indet",p=l.color!==void 0&&(l.keepColor===!0||(e==="toggle"?q.value===!0:y.value!==!0))?` text-${l.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${C}${p}`}),x=u(()=>{const C={type:"checkbox"};return l.name!==void 0&&Object.assign(C,{".checked":q.value,"^checked":q.value===!0?"checked":void 0,name:l.name,value:w.value===!0?l.val:l.trueValue}),C}),T=Ft(x),A=u(()=>{const C={tabindex:B.value,role:e==="toggle"?"switch":"checkbox","aria-label":l.label,"aria-checked":h.value===!0?"mixed":q.value===!0?"true":"false"};return l.disable===!0&&(C["aria-disabled"]="true"),C});function U(C){C!==void 0&&(Ee(C),n(C)),l.disable!==!0&&r("update:modelValue",W(),C)}function W(){if(w.value===!0){if(q.value===!0){const C=l.modelValue.slice();return C.splice(k.value,1),C}return l.modelValue.concat([l.val])}if(q.value===!0){if(l.toggleOrder!=="ft"||l.toggleIndeterminate===!1)return l.falseValue}else if(y.value===!0){if(l.toggleOrder==="ft"||l.toggleIndeterminate===!1)return l.trueValue}else return l.toggleOrder!=="ft"?l.trueValue:l.falseValue;return l.indeterminateValue}function J(C){(C.keyCode===13||C.keyCode===32)&&Ee(C)}function F(C){(C.keyCode===13||C.keyCode===32)&&U(C)}const j=a(q,h);return Object.assign(v,{toggle:U}),()=>{const C=j();l.disable!==!0&&T(C,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const p=[o("div",{class:$.value,style:b.value,"aria-hidden":"true"},C)];m.value!==null&&p.push(m.value);const Y=l.label!==void 0?Ce(d.default,[l.label]):X(d.default);return Y!==void 0&&p.push(o("div",{class:`q-${e}__label q-anchor--skip`},Y)),o("div",{ref:f,class:V.value,...A.value,onClick:U,onKeydown:J,onKeyup:F},p)}}const zt=o("div",{key:"svg",class:"q-checkbox__bg absolute"},[o("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[o("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),o("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var _e=H({name:"QCheckbox",props:It,emits:Qt,setup(e){function a(l,d){const r=u(()=>(l.value===!0?e.checkedIcon:d.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>r.value!==null?[o("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[o(qe,{class:"q-checkbox__icon",name:r.value})])]:[zt]}return Ht("checkbox",a)}});let G=0;const Ut={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Wt=["update:fullscreen","fullscreen"];function Kt(){const e=z(),{props:a,emit:l,proxy:d}=e;let r,v,i;const c=D(!1);Ct(e)===!0&&M(()=>d.$route.fullPath,()=>{a.noRouteFullscreenExit!==!0&&n()}),M(()=>a.fullscreen,b=>{c.value!==b&&f()}),M(c,b=>{l("update:fullscreen",b),l("fullscreen",b)});function f(){c.value===!0?n():m()}function m(){c.value!==!0&&(c.value=!0,i=d.$el.parentNode,i.replaceChild(v,d.$el),document.body.appendChild(d.$el),G++,G===1&&document.body.classList.add("q-body--fullscreen-mixin"),r={handler:n},Me.add(r))}function n(){c.value===!0&&(r!==void 0&&(Me.remove(r),r=void 0),i.replaceChild(d.$el,v),c.value=!1,G=Math.max(0,G-1),G===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),d.$el.scrollIntoView!==void 0&&setTimeout(()=>{d.$el.scrollIntoView()})))}return Ie(()=>{v=document.createElement("span")}),Qe(()=>{a.fullscreen===!0&&m()}),He(n),Object.assign(d,{toggleFullscreen:f,setFullscreen:m,exitFullscreen:n}),{inFullscreen:c,toggleFullscreen:f}}function Gt(e,a){return new Date(e)-new Date(a)}const Xt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Jt(e,a,l,d){const r=u(()=>{const{sortBy:c}=a.value;return c&&l.value.find(f=>f.name===c)||null}),v=u(()=>e.sortMethod!==void 0?e.sortMethod:(c,f,m)=>{const n=l.value.find(k=>k.name===f);if(n===void 0||n.field===void 0)return c;const b=m===!0?-1:1,w=typeof n.field=="function"?k=>n.field(k):k=>k[n.field];return c.sort((k,q)=>{let y=w(k),h=w(q);return y==null?-1*b:h==null?1*b:n.sort!==void 0?n.sort(y,h,k,q)*b:we(y)===!0&&we(h)===!0?(y-h)*b:je(y)===!0&&je(h)===!0?Gt(y,h)*b:typeof y=="boolean"&&typeof h=="boolean"?(y-h)*b:([y,h]=[y,h].map(B=>(B+"").toLocaleString().toLowerCase()),y<h?-1*b:y===h?0:b)})});function i(c){let f=e.columnSortOrder;if(kt(c)===!0)c.sortOrder&&(f=c.sortOrder),c=c.name;else{const b=l.value.find(w=>w.name===c);b!==void 0&&b.sortOrder&&(f=b.sortOrder)}let{sortBy:m,descending:n}=a.value;m!==c?(m=c,n=f==="da"):e.binaryStateSort===!0?n=!n:n===!0?f==="ad"?m=null:n=!1:f==="ad"?n=!0:m=null,d({sortBy:m,descending:n,page:1})}return{columnToSort:r,computedSortMethod:v,sort:i}}const Yt={filter:[String,Object],filterMethod:Function};function Zt(e,a){const l=u(()=>e.filterMethod!==void 0?e.filterMethod:(d,r,v,i)=>{const c=r?r.toLowerCase():"";return d.filter(f=>v.some(m=>{const n=i(m,f)+"";return(n==="undefined"||n==="null"?"":n.toLowerCase()).indexOf(c)!==-1}))});return M(()=>e.filter,()=>{We(()=>{a({page:1},!0)})},{deep:!0}),{computedFilterMethod:l}}function el(e,a){for(const l in a)if(a[l]!==e[l])return!1;return!0}function Ae(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const tl={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function ll(e,a){const{props:l,emit:d}=e,r=D(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:l.rowsPerPageOptions.length!==0?l.rowsPerPageOptions[0]:5},l.pagination)),v=u(()=>{const n=l["onUpdate:pagination"]!==void 0?{...r.value,...l.pagination}:r.value;return Ae(n)}),i=u(()=>v.value.rowsNumber!==void 0);function c(n){f({pagination:n,filter:l.filter})}function f(n={}){We(()=>{d("request",{pagination:n.pagination||v.value,filter:n.filter||l.filter,getCellValue:a})})}function m(n,b){const w=Ae({...v.value,...n});if(el(v.value,w)===!0){i.value===!0&&b===!0&&c(w);return}if(i.value===!0){c(w);return}l.pagination!==void 0&&l["onUpdate:pagination"]!==void 0?d("update:pagination",w):r.value=w}return{innerPagination:r,computedPagination:v,isServerSide:i,requestServerInteraction:f,setPagination:m}}function al(e,a,l,d,r,v){const{props:i,emit:c,proxy:{$q:f}}=e,m=u(()=>d.value===!0?l.value.rowsNumber||0:v.value),n=u(()=>{const{page:x,rowsPerPage:T}=l.value;return(x-1)*T}),b=u(()=>{const{page:x,rowsPerPage:T}=l.value;return x*T}),w=u(()=>l.value.page===1),k=u(()=>l.value.rowsPerPage===0?1:Math.max(1,Math.ceil(m.value/l.value.rowsPerPage))),q=u(()=>b.value===0?!0:l.value.page>=k.value),y=u(()=>(i.rowsPerPageOptions.includes(a.value.rowsPerPage)?i.rowsPerPageOptions:[a.value.rowsPerPage].concat(i.rowsPerPageOptions)).map(T=>({label:T===0?f.lang.table.allRows:""+T,value:T})));M(k,(x,T)=>{if(x===T)return;const A=l.value.page;x&&!A?r({page:1}):x<A&&r({page:x})});function h(){r({page:1})}function B(){const{page:x}=l.value;x>1&&r({page:x-1})}function V(){const{page:x,rowsPerPage:T}=l.value;b.value>0&&x*T<m.value&&r({page:x+1})}function $(){r({page:k.value})}return i["onUpdate:pagination"]!==void 0&&c("update:pagination",{...l.value}),{firstRowIndex:n,lastRowIndex:b,isFirstPage:w,isLastPage:q,pagesNumber:k,computedRowsPerPageOptions:y,computedRowsNumber:m,firstPage:h,prevPage:B,nextPage:V,lastPage:$}}const nl={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},ol=["update:selected","selection"];function rl(e,a,l,d){const r=u(()=>{const q={};return e.selected.map(d.value).forEach(y=>{q[y]=!0}),q}),v=u(()=>e.selection!=="none"),i=u(()=>e.selection==="single"),c=u(()=>e.selection==="multiple"),f=u(()=>l.value.length!==0&&l.value.every(q=>r.value[d.value(q)]===!0)),m=u(()=>f.value!==!0&&l.value.some(q=>r.value[d.value(q)]===!0)),n=u(()=>e.selected.length);function b(q){return r.value[q]===!0}function w(){a("update:selected",[])}function k(q,y,h,B){a("selection",{rows:y,added:h,keys:q,evt:B});const V=i.value===!0?h===!0?y:[]:h===!0?e.selected.concat(y):e.selected.filter($=>q.includes(d.value($))===!1);a("update:selected",V)}return{hasSelectionMode:v,singleSelection:i,multipleSelection:c,allRowsSelected:f,someRowsSelected:m,rowsSelectedNumber:n,isRowSelected:b,clearSelection:w,updateSelection:k}}function Ne(e){return Array.isArray(e)?e.slice():[]}const il={expanded:Array},ul=["update:expanded"];function sl(e,a){const l=D(Ne(e.expanded));M(()=>e.expanded,i=>{l.value=Ne(i)});function d(i){return l.value.includes(i)}function r(i){e.expanded!==void 0?a("update:expanded",i):l.value=i}function v(i,c){const f=l.value.slice(),m=f.indexOf(i);c===!0?m===-1&&(f.push(i),r(f)):m!==-1&&(f.splice(m,1),r(f))}return{isRowExpanded:d,setExpanded:r,updateExpanded:v}}const cl={visibleColumns:Array};function dl(e,a,l){const d=u(()=>{if(e.columns!==void 0)return e.columns;const c=e.rows[0];return c!==void 0?Object.keys(c).map(f=>({name:f,label:f.toUpperCase(),field:f,align:we(c[f])?"right":"left",sortable:!0})):[]}),r=u(()=>{const{sortBy:c,descending:f}=a.value;return(e.visibleColumns!==void 0?d.value.filter(n=>n.required===!0||e.visibleColumns.includes(n.name)===!0):d.value).map(n=>{const b=n.align||"right",w=`text-${b}`;return{...n,align:b,__iconClass:`q-table__sort-icon q-table__sort-icon--${b}`,__thClass:w+(n.headerClasses!==void 0?" "+n.headerClasses:"")+(n.sortable===!0?" sortable":"")+(n.name===c?` sorted ${f===!0?"sort-desc":""}`:""),__tdStyle:n.style!==void 0?typeof n.style!="function"?()=>n.style:n.style:()=>null,__tdClass:n.classes!==void 0?typeof n.classes!="function"?()=>w+" "+n.classes:k=>w+" "+n.classes(k):()=>w}})}),v=u(()=>{const c={};return r.value.forEach(f=>{c[f.name]=f}),c}),i=u(()=>e.tableColspan!==void 0?e.tableColspan:r.value.length+(l.value===!0?1:0));return{colList:d,computedCols:r,computedColsMap:v,computedColspan:i}}const ue="q-table__bottom row items-center",Xe={};Ke.forEach(e=>{Xe[e]={}});var _l=H({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Xe,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...ke,...Ut,...cl,...Yt,...tl,...il,...nl,...Xt},emits:["request","virtualScroll",...Wt,...ul,...ol],setup(e,{slots:a,emit:l}){const d=z(),{proxy:{$q:r}}=d,v=Pe(e,r),{inFullscreen:i,toggleFullscreen:c}=Kt(),f=u(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),m=D(null),n=D(null),b=u(()=>e.grid!==!0&&e.virtualScroll===!0),w=u(()=>" q-table__card"+(v.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),k=u(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":w.value)+(v.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(i.value===!0?" fullscreen scroll":"")),q=u(()=>k.value+(e.loading===!0?" q-table--loading":""));M(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+k.value,()=>{b.value===!0&&n.value!==null&&n.value.reset()});const{innerPagination:y,computedPagination:h,isServerSide:B,requestServerInteraction:V,setPagination:$}=ll(d,N),{computedFilterMethod:x}=Zt(e,$),{isRowExpanded:T,setExpanded:A,updateExpanded:U}=sl(e,l),W=u(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:s,descending:g}=h.value;return e.filter&&(t=x.value(t,e.filter,L.value,N)),Ze.value!==null&&(t=et.value(e.rows===t?t.slice():t,s,g)),t}),J=u(()=>W.value.length),F=u(()=>{let t=W.value;if(B.value===!0)return t;const{rowsPerPage:s}=h.value;return s!==0&&(ee.value===0&&e.rows!==t?t.length>te.value&&(t=t.slice(0,te.value)):t=t.slice(ee.value,te.value)),t}),{hasSelectionMode:j,singleSelection:C,multipleSelection:p,allRowsSelected:Y,someRowsSelected:xe,rowsSelectedNumber:se,isRowSelected:ce,clearSelection:Je,updateSelection:Z}=rl(e,l,F,f),{colList:Ye,computedCols:L,computedColsMap:Re,computedColspan:Te}=dl(e,h,j),{columnToSort:Ze,computedSortMethod:et,sort:de}=Jt(e,h,Ye,$),{firstRowIndex:ee,lastRowIndex:te,isFirstPage:ve,isLastPage:fe,pagesNumber:le,computedRowsPerPageOptions:tt,computedRowsNumber:ae,firstPage:ge,prevPage:be,nextPage:me,lastPage:Se}=al(d,y,h,B,$,J),lt=u(()=>F.value.length===0),at=u(()=>{const t={};return Ke.forEach(s=>{t[s]=e[s]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function nt(){b.value===!0&&n.value.reset()}function ot(){if(e.grid===!0)return St();const t=e.hideHeader!==!0?Fe:null;if(b.value===!0){const g=a["top-row"],S=a["bottom-row"],_={default:R=>Ve(R.item,a.body,R.index)};if(g!==void 0){const R=o("tbody",g({cols:L.value}));_.before=t===null?()=>R:()=>[t()].concat(R)}else t!==null&&(_.before=t);return S!==void 0&&(_.after=()=>o("tbody",S({cols:L.value}))),o(Mt,{ref:n,class:e.tableClass,style:e.tableStyle,...at.value,scrollTarget:e.virtualScrollTarget,items:F.value,type:"__qtable",tableColspan:Te.value,onVirtualScroll:it},_)}const s=[ut()];return t!==null&&s.unshift(t()),Ge({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},s)}function rt(t,s){if(n.value!==null){n.value.scrollTo(t,s);return}t=parseInt(t,10);const g=m.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(g!==null){const S=m.value.querySelector(".q-table__middle.scroll"),_=g.offsetTop-e.virtualScrollStickySizeStart,R=_<S.scrollTop?"decrease":"increase";S.scrollTop=_,l("virtualScroll",{index:t,from:0,to:y.value.rowsPerPage-1,direction:R})}}function it(t){l("virtualScroll",t)}function Be(){return[o(Dt,{class:"q-table__linear-progress",color:e.color,dark:v.value,indeterminate:!0,trackColor:"transparent"})]}function Ve(t,s,g){const S=f.value(t),_=ce(S);if(s!==void 0)return s(Oe({key:S,row:t,pageIndex:g,__trClass:_?"selected":""}));const R=a["body-cell"],P=L.value.map(O=>{const oe=a[`body-cell-${O.name}`],re=oe!==void 0?oe:R;return re!==void 0?re(st({key:S,row:t,pageIndex:g,col:O})):o("td",{class:O.__tdClass(t),style:O.__tdStyle(t)},N(O,t))});if(j.value===!0){const O=a["body-selection"],oe=O!==void 0?O(ct({key:S,row:t,pageIndex:g})):[o(_e,{modelValue:_,color:e.color,dark:v.value,dense:e.dense,"onUpdate:modelValue":(re,ht)=>{Z([S],[t],re,ht)}})];P.unshift(o("td",{class:"q-table--col-auto-width"},oe))}const E={key:S,class:{selected:_}};return e.onRowClick!==void 0&&(E.class["cursor-pointer"]=!0,E.onClick=O=>{l("RowClick",O,t,g)}),e.onRowDblclick!==void 0&&(E.class["cursor-pointer"]=!0,E.onDblclick=O=>{l("RowDblclick",O,t,g)}),e.onRowContextmenu!==void 0&&(E.class["cursor-pointer"]=!0,E.onContextmenu=O=>{l("RowContextmenu",O,t,g)}),o("tr",E,P)}function ut(){const t=a.body,s=a["top-row"],g=a["bottom-row"];let S=F.value.map((_,R)=>Ve(_,t,R));return s!==void 0&&(S=s({cols:L.value}).concat(S)),g!==void 0&&(S=S.concat(g({cols:L.value}))),o("tbody",S)}function Oe(t){return he(t),t.cols=t.cols.map(s=>K({...s},"value",()=>N(s,t.row))),t}function st(t){return he(t),K(t,"value",()=>N(t.col,t.row)),t}function ct(t){return he(t),t}function he(t){Object.assign(t,{cols:L.value,colsMap:Re.value,sort:de,rowIndex:ee.value+t.pageIndex,color:e.color,dark:v.value,dense:e.dense}),j.value===!0&&K(t,"selected",()=>ce(t.key),(s,g)=>{Z([t.key],[t.row],s,g)}),K(t,"expand",()=>T(t.key),s=>{U(t.key,s)})}function N(t,s){const g=typeof t.field=="function"?t.field(s):s[t.field];return t.format!==void 0?t.format(g,s):g}const I=u(()=>({pagination:h.value,pagesNumber:le.value,isFirstPage:ve.value,isLastPage:fe.value,firstPage:ge,prevPage:be,nextPage:me,lastPage:Se,inFullscreen:i.value,toggleFullscreen:c}));function dt(){const t=a.top,s=a["top-left"],g=a["top-right"],S=a["top-selection"],_=j.value===!0&&S!==void 0&&se.value>0,R="q-table__top relative-position row items-center";if(t!==void 0)return o("div",{class:R},[t(I.value)]);let P;if(_===!0?P=S(I.value).slice():(P=[],s!==void 0?P.push(o("div",{class:"q-table__control"},[s(I.value)])):e.title&&P.push(o("div",{class:"q-table__control"},[o("div",{class:["q-table__title",e.titleClass]},e.title)]))),g!==void 0&&(P.push(o("div",{class:"q-table__separator col"})),P.push(o("div",{class:"q-table__control"},[g(I.value)]))),P.length!==0)return o("div",{class:R},P)}const $e=u(()=>xe.value===!0?null:Y.value);function Fe(){const t=vt();return e.loading===!0&&a.loading===void 0&&t.push(o("tr",{class:"q-table__progress"},[o("th",{class:"relative-position",colspan:Te.value},Be())])),o("thead",t)}function vt(){const t=a.header,s=a["header-cell"];if(t!==void 0)return t(ye({header:!0})).slice();const g=L.value.map(S=>{const _=a[`header-cell-${S.name}`],R=_!==void 0?_:s,P=ye({col:S});return R!==void 0?R(P):o(pt,{key:S.name,props:P},()=>S.label)});if(C.value===!0&&e.grid!==!0)g.unshift(o("th",{class:"q-table--col-auto-width"}," "));else if(p.value===!0){const S=a["header-selection"],_=S!==void 0?S(ye({})):[o(_e,{color:e.color,modelValue:$e.value,dark:v.value,dense:e.dense,"onUpdate:modelValue":pe})];g.unshift(o("th",{class:"q-table--col-auto-width"},_))}return[o("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},g)]}function ye(t){return Object.assign(t,{cols:L.value,sort:de,colsMap:Re.value,color:e.color,dark:v.value,dense:e.dense}),p.value===!0&&K(t,"selected",()=>$e.value,pe),t}function pe(t){xe.value===!0&&(t=!1),Z(F.value.map(f.value),F.value,t)}const ne=u(()=>{const t=[e.iconFirstPage||r.iconSet.table.firstPage,e.iconPrevPage||r.iconSet.table.prevPage,e.iconNextPage||r.iconSet.table.nextPage,e.iconLastPage||r.iconSet.table.lastPage];return r.lang.rtl===!0?t.reverse():t});function ft(){if(e.hideBottom===!0)return;if(lt.value===!0){if(e.hideNoData===!0)return;const g=e.loading===!0?e.loadingLabel||r.lang.table.loading:e.filter?e.noResultsLabel||r.lang.table.noResults:e.noDataLabel||r.lang.table.noData,S=a["no-data"],_=S!==void 0?[S({message:g,icon:r.iconSet.table.warning,filter:e.filter})]:[o(qe,{class:"q-table__bottom-nodata-icon",name:r.iconSet.table.warning}),g];return o("div",{class:ue+" q-table__bottom--nodata"},_)}const t=a.bottom;if(t!==void 0)return o("div",{class:ue},[t(I.value)]);const s=e.hideSelectedBanner!==!0&&j.value===!0&&se.value>0?[o("div",{class:"q-table__control"},[o("div",[(e.selectedRowsLabel||r.lang.table.selectedRecords)(se.value)])])]:[];if(e.hidePagination!==!0)return o("div",{class:ue+" justify-end"},bt(s));if(s.length!==0)return o("div",{class:ue},s)}function gt(t){$({page:1,rowsPerPage:t.value})}function bt(t){let s;const{rowsPerPage:g}=h.value,S=e.paginationLabel||r.lang.table.pagination,_=a.pagination,R=e.rowsPerPageOptions.length>1;if(t.push(o("div",{class:"q-table__separator col"})),R===!0&&t.push(o("div",{class:"q-table__control"},[o("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||r.lang.table.recordsPerPage]),o(Ot,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:g,options:tt.value,displayValue:g===0?r.lang.table.allRows:g,dark:v.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":gt})])),_!==void 0)s=_(I.value);else if(s=[o("span",g!==0?{class:"q-table__bottom-item"}:{},[g?S(ee.value+1,Math.min(te.value,ae.value),ae.value):S(1,J.value,ae.value)])],g!==0&&le.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),le.value>2&&s.push(o(ie,{key:"pgFirst",...P,icon:ne.value[0],disable:ve.value,onClick:ge})),s.push(o(ie,{key:"pgPrev",...P,icon:ne.value[1],disable:ve.value,onClick:be}),o(ie,{key:"pgNext",...P,icon:ne.value[2],disable:fe.value,onClick:me})),le.value>2&&s.push(o(ie,{key:"pgLast",...P,icon:ne.value[3],disable:fe.value,onClick:Se}))}return t.push(o("div",{class:"q-table__control"},s)),t}function mt(){const t=e.gridHeader===!0?[o("table",{class:"q-table"},[Fe()])]:e.loading===!0&&a.loading===void 0?Be():void 0;return o("div",{class:"q-table__middle"},t)}function St(){const t=a.item!==void 0?a.item:s=>{const g=s.cols.map(_=>o("div",{class:"q-table__grid-item-row"},[o("div",{class:"q-table__grid-item-title"},[_.label]),o("div",{class:"q-table__grid-item-value"},[_.value])]));if(j.value===!0){const _=a["body-selection"],R=_!==void 0?_(s):[o(_e,{modelValue:s.selected,color:e.color,dark:v.value,dense:e.dense,"onUpdate:modelValue":(P,E)=>{Z([s.key],[s.row],P,E)}})];g.unshift(o("div",{class:"q-table__grid-item-row"},R),o(xt,{dark:v.value}))}const S={class:["q-table__grid-item-card"+w.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(S.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(S.onClick=_=>{l("RowClick",_,s.row,s.pageIndex)}),e.onRowDblclick!==void 0&&(S.onDblclick=_=>{l("RowDblclick",_,s.row,s.pageIndex)})),o("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(s.selected===!0?" q-table__grid-item--selected":"")},[o("div",S,g)])};return o("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},F.value.map((s,g)=>t(Oe({key:f.value(s),row:s,pageIndex:g}))))}return Object.assign(d.proxy,{requestServerInteraction:V,setPagination:$,firstPage:ge,prevPage:be,nextPage:me,lastPage:Se,isRowSelected:ce,clearSelection:Je,isRowExpanded:T,setExpanded:A,sort:de,resetVirtualScroll:nt,scrollTo:rt,getCellValue:N}),Pt(d.proxy,{filteredSortedRows:()=>W.value,computedRows:()=>F.value,computedRowsNumber:()=>ae.value}),()=>{const t=[dt()],s={ref:m,class:q.value};return e.grid===!0?t.push(mt()):Object.assign(s,{class:[s.class,e.cardClass],style:e.cardStyle}),t.push(ot(),ft()),e.loading===!0&&a.loading!==void 0&&t.push(a.loading()),o("div",s,t)}}});export{_l as Q,yl as a};

import{c as ie,a as s,h as m,b as fe,r as C,w as x,o as ve,T as Me,Q as ze,i as rt,e as we,d as st,n as Le,f as le,g as pe,l as dt,j as De,s as ct,u as Pe,v as ft,k as ke,m as vt,p as Ee,_ as Ve,q as j,t as q,x as M,y as l,z as n,A as He,B as P,C as de,D as Se,E as J,F as xe,G as ne,H as Ce,I as mt,J as ae,K as Z,R as $e}from"./index.4ac76403.js";import{u as Re,a as Ue,b as gt,c as je,d as ht,e as se,f as yt,Q as X,g as K,h as p,i as bt,j as wt}from"./QDialog.2df1b7e0.js";import{Q as ce}from"./QSeparator.d322f4ad.js";import{Q as Te,C as _t}from"./ClosePopup.63eeea50.js";import{Q as kt,a as St}from"./QHeader.648d14a8.js";import{u as We,a as Fe,Q as xt,b as Be}from"./QCard.31d5c3cb.js";import{T as _e}from"./TouchPan.2ca4060c.js";import{Q as Ct,a as Tt}from"./QLayout.a6d354dc.js";import{Q as It}from"./QCardActions.76c17390.js";import{u as Ne}from"./uid.9b787859.js";import{_ as Ke}from"./VxIcon.140795fd.js";import"./QScrollObserver.8356fca8.js";var qt=ie({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:r}){const b=s(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>m("div",{class:b.value},fe(r.default))}});const Lt={ratio:[String,Number]};function pt(e,r){return s(()=>{const b=Number(e.ratio||(r!==void 0?r.value:void 0));return isNaN(b)!==!0&&b>0?{paddingBottom:`${100/b}%`}:null})}const $t=16/9;var Qe=ie({name:"QImg",props:{...Lt,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:$t},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:r,emit:b}){const T=C(e.initialRatio),_=pt(e,T);let i=null,w=!1;const h=[C(null),C(g())],y=C(0),I=C(!1),a=C(!1),S=s(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),c=s(()=>({width:e.width,height:e.height})),O=s(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),k=s(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));x(()=>o(),d);function o(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function g(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function d(v){i!==null&&(clearTimeout(i),i=null),a.value=!1,v===null?(I.value=!1,h[y.value^1].value=g()):I.value=!0,h[y.value].value=v}function $({target:v}){w!==!0&&(i!==null&&(clearTimeout(i),i=null),T.value=v.naturalHeight===0?.5:v.naturalWidth/v.naturalHeight,W(v,1))}function W(v,A){w===!0||A===1e3||(v.complete===!0?G(v):i=setTimeout(()=>{i=null,W(v,A+1)},50))}function G(v){w!==!0&&(y.value=y.value^1,h[y.value].value=null,I.value=!1,a.value=!1,b("load",v.currentSrc||v.src))}function V(v){i!==null&&(clearTimeout(i),i=null),I.value=!1,a.value=!0,h[y.value].value=null,h[y.value^1].value=g(),b("error",v)}function z(v){const A=h[v].value,L={key:"img_"+v,class:O.value,style:k.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...A};return y.value===v?(L.class+=" q-img__image--waiting",Object.assign(L,{onLoad:$,onError:V})):L.class+=" q-img__image--loaded",m("div",{class:"q-img__container absolute-full",key:"img"+v},m("img",L))}function ee(){return I.value!==!0?m("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},fe(r[a.value===!0?"error":"default"])):m("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},r.loading!==void 0?r.loading():e.noSpinner===!0?void 0:[m(ze,{color:e.spinnerColor,size:e.spinnerSize})])}return d(o()),ve(()=>{w=!0,i!==null&&(clearTimeout(i),i=null)}),()=>{const v=[];return _.value!==null&&v.push(m("div",{key:"filler",style:_.value})),a.value!==!0&&(h[0].value!==null&&v.push(z(0)),h[1].value!==null&&v.push(z(1))),v.push(m(Me,{name:"q-transition--fade"},ee)),m("div",{class:S.value,style:c.value,role:"img","aria-label":e.alt},v)}}});const Oe=150;var Bt=ie({name:"QDrawer",inheritAttrs:!1,props:{...Re,...We,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ue,"onLayout","miniState"],setup(e,{slots:r,emit:b,attrs:T}){const _=De(),{proxy:{$q:i}}=_,w=Fe(e,i),{preventBodyScroll:h}=yt(),{registerTimeout:y,removeTimeout:I}=gt(),a=rt(dt,we);if(a===we)return console.error("QDrawer needs to be child of QLayout"),we;let S,c=null,O;const k=C(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),o=s(()=>e.mini===!0&&k.value!==!0),g=s(()=>o.value===!0?e.miniWidth:e.width),d=C(e.showIfAbove===!0&&k.value===!1?!0:e.modelValue===!0),$=s(()=>e.persistent!==!0&&(k.value===!0||me.value===!0));function W(t,f){if(ee(),t!==!1&&a.animate(),Q(0),k.value===!0){const B=a.instances[Y.value];B!==void 0&&B.belowBreakpoint===!0&&B.hide(!1),R(1),a.isContainer.value!==!0&&h(!0)}else R(0),t!==!1&&he(!1);y(()=>{t!==!1&&he(!0),f!==!0&&b("show",t)},Oe)}function G(t,f){v(),t!==!1&&a.animate(),R(0),Q(E.value*g.value),ye(),f!==!0?y(()=>{b("hide",t)},Oe):I()}const{show:V,hide:z}=je({showing:d,hideOnRouteChange:$,handleShow:W,handleHide:G}),{addToHistory:ee,removeFromHistory:v}=ht(d,z,$),A={belowBreakpoint:k,hide:z},L=s(()=>e.side==="right"),E=s(()=>(i.lang.rtl===!0?-1:1)*(L.value===!0?1:-1)),oe=C(0),H=C(!1),te=C(!1),ue=C(g.value*E.value),Y=s(()=>L.value===!0?"left":"right"),u=s(()=>d.value===!0&&k.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:g.value:0),N=s(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(L.value?"R":"L")>-1||i.platform.is.ios===!0&&a.isContainer.value===!0),D=s(()=>e.overlay===!1&&d.value===!0&&k.value===!1),me=s(()=>e.overlay===!0&&d.value===!0&&k.value===!1),Ge=s(()=>"fullscreen q-drawer__backdrop"+(d.value===!1&&H.value===!1?" hidden":"")),Ye=s(()=>({backgroundColor:`rgba(0,0,0,${oe.value*.4})`})),Ie=s(()=>L.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),Je=s(()=>L.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),Xe=s(()=>{const t={};return a.header.space===!0&&Ie.value===!1&&(N.value===!0?t.top=`${a.header.offset}px`:a.header.space===!0&&(t.top=`${a.header.size}px`)),a.footer.space===!0&&Je.value===!1&&(N.value===!0?t.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(t.bottom=`${a.footer.size}px`)),t}),Ze=s(()=>{const t={width:`${g.value}px`,transform:`translateX(${ue.value}px)`};return k.value===!0?t:Object.assign(t,Xe.value)}),et=s(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),tt=s(()=>`q-drawer q-drawer--${e.side}`+(te.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(w.value===!0?" q-drawer--dark q-dark":"")+(H.value===!0?" no-transition":d.value===!0?"":" q-layout--prevent-focus")+(k.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${o.value===!0?"mini":"standard"}`+(N.value===!0||D.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Ie.value===!0?" q-drawer--top-padding":""))),at=s(()=>{const t=i.lang.rtl===!0?e.side:Y.value;return[[_e,ot,void 0,{[t]:!0,mouse:!0}]]}),nt=s(()=>{const t=i.lang.rtl===!0?Y.value:e.side;return[[_e,qe,void 0,{[t]:!0,mouse:!0}]]}),lt=s(()=>{const t=i.lang.rtl===!0?Y.value:e.side;return[[_e,qe,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function ge(){ut(k,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}x(k,t=>{t===!0?(S=d.value,d.value===!0&&z(!1)):e.overlay===!1&&e.behavior!=="mobile"&&S!==!1&&(d.value===!0?(Q(0),R(0),ye()):V(!1))}),x(()=>e.side,(t,f)=>{a.instances[f]===A&&(a.instances[f]=void 0,a[f].space=!1,a[f].offset=0),a.instances[t]=A,a[t].size=g.value,a[t].space=D.value,a[t].offset=u.value}),x(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&ge()}),x(()=>e.behavior+e.breakpoint,ge),x(a.isContainer,t=>{d.value===!0&&h(t!==!0),t===!0&&ge()}),x(a.scrollbarWidth,()=>{Q(d.value===!0?0:void 0)}),x(u,t=>{U("offset",t)}),x(D,t=>{b("onLayout",t),U("space",t)}),x(L,()=>{Q()}),x(g,t=>{Q(),be(e.miniToOverlay,t)}),x(()=>e.miniToOverlay,t=>{be(t,g.value)}),x(()=>i.lang.rtl,()=>{Q()}),x(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(it(),a.animate())}),x(o,t=>{b("miniState",t)});function Q(t){t===void 0?Le(()=>{t=d.value===!0?0:g.value,Q(E.value*t)}):(a.isContainer.value===!0&&L.value===!0&&(k.value===!0||Math.abs(t)===g.value)&&(t+=E.value*a.scrollbarWidth.value),ue.value=t)}function R(t){oe.value=t}function he(t){const f=t===!0?"remove":a.isContainer.value!==!0?"add":"";f!==""&&document.body.classList[f]("q-body--drawer-toggle")}function it(){c!==null&&clearTimeout(c),_.proxy&&_.proxy.$el&&_.proxy.$el.classList.add("q-drawer--mini-animate"),te.value=!0,c=setTimeout(()=>{c=null,te.value=!1,_&&_.proxy&&_.proxy.$el&&_.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ot(t){if(d.value!==!1)return;const f=g.value,B=se(t.distance.x,0,f);if(t.isFinal===!0){B>=Math.min(75,f)===!0?V():(a.animate(),R(0),Q(E.value*f)),H.value=!1;return}Q((i.lang.rtl===!0?L.value!==!0:L.value)?Math.max(f-B,0):Math.min(0,B-f)),R(se(B/f,0,1)),t.isFirst===!0&&(H.value=!0)}function qe(t){if(d.value!==!0)return;const f=g.value,B=t.direction===e.side,re=(i.lang.rtl===!0?B!==!0:B)?se(t.distance.x,0,f):0;if(t.isFinal===!0){Math.abs(re)<Math.min(75,f)===!0?(a.animate(),R(1),Q(0)):z(),H.value=!1;return}Q(E.value*re),R(se(1-re/f,0,1)),t.isFirst===!0&&(H.value=!0)}function ye(){h(!1),he(!0)}function U(t,f){a.update(e.side,t,f)}function ut(t,f){t.value!==f&&(t.value=f)}function be(t,f){U("size",t===!0?e.miniWidth:f)}return a.instances[e.side]=A,be(e.miniToOverlay,g.value),U("space",D.value),U("offset",u.value),e.showIfAbove===!0&&e.modelValue!==!0&&d.value===!0&&e["onUpdate:modelValue"]!==void 0&&b("update:modelValue",!0),st(()=>{b("onLayout",D.value),b("miniState",o.value),S=e.showIfAbove===!0;const t=()=>{(d.value===!0?W:G)(!1,!0)};if(a.totalWidth.value!==0){Le(t);return}O=x(a.totalWidth,()=>{O(),O=void 0,d.value===!1&&e.showIfAbove===!0&&k.value===!1?V(!1):t()})}),ve(()=>{O!==void 0&&O(),c!==null&&(clearTimeout(c),c=null),d.value===!0&&ye(),a.instances[e.side]===A&&(a.instances[e.side]=void 0,U("size",0),U("offset",0),U("space",!1))}),()=>{const t=[];k.value===!0&&(e.noSwipeOpen===!1&&t.push(le(m("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),at.value)),t.push(pe("div",{ref:"backdrop",class:Ge.value,style:Ye.value,"aria-hidden":"true",onClick:z},void 0,"backdrop",e.noSwipeBackdrop!==!0&&d.value===!0,()=>lt.value)));const f=o.value===!0&&r.mini!==void 0,B=[m("div",{...T,key:""+f,class:[et.value,T.class]},f===!0?r.mini():fe(r.default))];return e.elevated===!0&&d.value===!0&&B.push(m("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(pe("aside",{ref:"content",class:tt.value,style:Ze.value},B,"contentclose",e.noSwipeClose!==!0&&k.value===!0,()=>nt.value)),m("div",{class:"q-drawer-container"},t)}}}),Nt=ie({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:r,emit:b}){let T=!1,_,i,w=null,h=null,y,I;function a(){_&&_(),_=null,T=!1,w!==null&&(clearTimeout(w),w=null),h!==null&&(clearTimeout(h),h=null),i!==void 0&&i.removeEventListener("transitionend",y),y=null}function S(o,g,d){g!==void 0&&(o.style.height=`${g}px`),o.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,T=!0,_=d}function c(o,g){o.style.overflowY=null,o.style.height=null,o.style.transition=null,a(),g!==I&&b(g)}function O(o,g){let d=0;i=o,T===!0?(a(),d=o.offsetHeight===o.scrollHeight?0:void 0):(I="hide",o.style.overflowY="hidden"),S(o,d,g),w=setTimeout(()=>{w=null,o.style.height=`${o.scrollHeight}px`,y=$=>{h=null,(Object($)!==$||$.target===o)&&c(o,"show")},o.addEventListener("transitionend",y),h=setTimeout(y,e.duration*1.1)},100)}function k(o,g){let d;i=o,T===!0?a():(I="show",o.style.overflowY="hidden",d=o.scrollHeight),S(o,d,g),w=setTimeout(()=>{w=null,o.style.height=0,y=$=>{h=null,(Object($)!==$||$.target===o)&&c(o,"hide")},o.addEventListener("transitionend",y),h=setTimeout(y,e.duration*1.1)},100)}return ve(()=>{T===!0&&a()}),()=>m(Me,{css:!1,appear:e.appear,onEnter:O,onLeave:k},r.default)}});const F=ct({}),Qt=Object.keys(Pe);var Ot=ie({name:"QExpansionItem",props:{...Pe,...Re,...We,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Ue,"click","afterShow","afterHide"],setup(e,{slots:r,emit:b}){const{proxy:{$q:T}}=De(),_=Fe(e,T),i=C(e.modelValue!==null?e.modelValue:e.defaultOpened),w=C(null),h=Ne(),{show:y,hide:I,toggle:a}=je({showing:i});let S,c;const O=s(()=>`q-expansion-item q-item-type q-expansion-item--${i.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),k=s(()=>{if(e.contentInsetLevel===void 0)return null;const u=T.lang.rtl===!0?"Right":"Left";return{["padding"+u]:e.contentInsetLevel*56+"px"}}),o=s(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),g=s(()=>{const u={};return Qt.forEach(N=>{u[N]=e[N]}),u}),d=s(()=>o.value===!0||e.expandIconToggle!==!0),$=s(()=>e.expandedIcon!==void 0&&i.value===!0?e.expandedIcon:e.expandIcon||T.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),W=s(()=>e.disable!==!0&&(o.value===!0||e.expandIconToggle===!0)),G=s(()=>({expanded:i.value===!0,detailsId:e.targetUid,toggle:a,show:y,hide:I})),V=s(()=>{const u=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:T.lang.label[i.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":i.value===!0?"true":"false","aria-controls":h,"aria-label":u}});x(()=>e.group,u=>{c!==void 0&&c(),u!==void 0&&E()});function z(u){o.value!==!0&&a(u),b("click",u)}function ee(u){u.keyCode===13&&v(u,!0)}function v(u,N){N!==!0&&w.value!==null&&w.value.focus(),a(u),vt(u)}function A(){b("afterShow")}function L(){b("afterHide")}function E(){S===void 0&&(S=Ne()),i.value===!0&&(F[e.group]=S);const u=x(i,D=>{D===!0?F[e.group]=S:F[e.group]===S&&delete F[e.group]}),N=x(()=>F[e.group],(D,me)=>{me===S&&D!==void 0&&D!==S&&I()});c=()=>{u(),N(),F[e.group]===S&&delete F[e.group],c=void 0}}function oe(){const u={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},N=[m(ke,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&i.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:$.value})];return W.value===!0&&(Object.assign(u,{tabindex:0,...V.value,onClick:v,onKeyup:ee}),N.unshift(m("div",{ref:w,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),m(p,u,()=>N)}function H(){let u;return r.header!==void 0?u=[].concat(r.header(G.value)):(u=[m(p,()=>[m(K,{lines:e.labelLines},()=>e.label||""),e.caption?m(K,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&u[e.switchToggleSide===!0?"push":"unshift"](m(p,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>m(ke,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&u[e.switchToggleSide===!0?"unshift":"push"](oe()),u}function te(){const u={ref:"item",style:e.headerStyle,class:e.headerClass,dark:_.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return d.value===!0&&(u.clickable=!0,u.onClick=z,Object.assign(u,o.value===!0?g.value:V.value)),m(X,u,H)}function ue(){return le(m("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:k.value,id:h},fe(r.default)),[[ft,i.value]])}function Y(){const u=[te(),m(Nt,{duration:e.duration,onShow:A,onHide:L},ue)];return e.expandSeparator===!0&&u.push(m(ce,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:_.value}),m(ce,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:_.value})),u}return e.group!==void 0&&E(),ve(()=>{c!==void 0&&c()}),()=>m("div",{class:O.value},[m("div",{class:"q-expansion-item__container relative-position"},Y())])}});const At=Ee({components:{VxIcon:Ke},name:"EssentialLink",props:{Name:{type:String,required:!0},Url:{type:String,default:"#"},Icon:{type:String,default:""},Childs:{type:Array,default:()=>[]}}});function Mt(e,r,b,T,_,i){const w=j("vx-icon"),h=j("essential-link",!0);return e.Childs.length<1?(q(),M(X,{key:0,clickable:"",to:{name:e.Url}},{default:l(()=>[e.Icon?(q(),M(p,{key:0,avatar:""},{default:l(()=>[n(w,{iconName:e.Icon,size:24},null,8,["iconName"])]),_:1})):He("",!0),n(p,null,{default:l(()=>[n(K,null,{default:l(()=>[P(de(e.Name),1)]),_:1})]),_:1})]),_:1},8,["to"])):(q(),M(Ot,{key:1,class:"!tw-px-0","header-class":"tw-px-6"},{header:l(()=>[n(p,{avatar:""},{default:l(()=>[n(Se,null,{default:l(()=>[n(w,{iconName:e.Icon,size:24},null,8,["iconName"])]),_:1})]),_:1}),n(p,{class:"tw-pl-2"},{default:l(()=>[P(de(e.Name),1)]),_:1})]),default:l(()=>[n(Te,null,{default:l(()=>[(q(!0),J(ne,null,xe(e.Childs,y=>(q(),M(h,Ce({class:"tw-px-16"},y,{key:y}),null,16))),128))]),_:1})]),_:1}))}var zt=Ve(At,[["render",Mt]]),Ae="/assets/profile.a78ee334.svg";const Dt=[{Name:"Pengguna",Icon:"Profile2User",Url:"users"},{Name:"Group",Icon:"Category2",Url:"group"},{Name:"Roles",Icon:"UserOctagon",Url:"roles"},{Name:"Permissions",Icon:"GridLock",Url:"permissions"},{Name:"Menu",Icon:"HambergerMenu",Url:"menu"},{Name:"Provinsi",Icon:"Map",Url:"provinsi"},{Name:"Kabupaten / Kota",Icon:"Map1",Url:"regencies"}],Pt=Ee({name:"MainLayout",components:{EssentialLink:zt,VxIcon:Ke},setup(){const e=mt(),r=C(!1);return{authStore:e,essentialLinks:C([]),leftDrawerOpen:r,confirm_logout:C(!1),toggleLeftDrawer(){r.value=!r.value},is_administrator:C(!1),menu_administrator:Dt,loading:C(!1)}},mounted(){this.getMenu()},methods:{getMenu(){this.loading=!0,this.$api.get("/menus?Code=transaksi").then(e=>{this.essentialLinks=e.data.data,this.loading=!1}).catch(e=>{this.loading=!1,console.log(e)})},logout(){localStorage.removeItem("token"),this.authStore.token=null,this.$router.push({name:"login"})}}}),Et=Z("div",{class:"tw-px-8 tw-py-2"},[Z("div",{class:"tw-text-3xl tw-font-bold text-primary"},[Z("span",{class:"text-secondary"},"e"),P("Monev ")])],-1),Vt={key:0,class:"tw-flex tw-items-center tw-gap-4 tw-px-4"},Ht=Z("p",null,"Loading menu...",-1),Rt={class:"text-h6 tw-flex text-negative tw-items-center"},Ut=Z("div",{class:"tw-mb-3"},"Anda yakin ingin keluar dari aplikasi ini?",-1);function jt(e,r,b,T,_,i){const w=j("VxIcon"),h=j("router-link"),y=j("EssentialLink"),I=j("vx-icon"),a=j("essential-link"),S=j("router-view");return q(),M(Ct,{view:"lHh Lpr lFf"},{default:l(()=>[n(St,{reveal:""},{default:l(()=>[n(kt,{class:"tw-py-2.5"},{default:l(()=>[n(ae,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),n(qt,null,{default:l(()=>[P(" Monitoring & Evaluation System ")]),_:1}),e.$q.platform.is.mobile?He("",!0):(q(),M(ae,{key:0,dense:"",flat:"",color:"white",onClick:r[0]||(r[0]=c=>e.$q.fullscreen.toggle())},{default:l(()=>[n(Se,{size:"sm"},{default:l(()=>[n(ke,{name:e.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen"},null,8,["name"])]),_:1})]),_:1})),n(ae,{dense:"",flat:""},{default:l(()=>[n(Se,{size:"sm"},{default:l(()=>[n(Qe,{src:Ae})]),_:1}),n(bt,{class:"tw-shadow-none tw-border tw-rounded-lg"},{default:l(()=>[n(Te,null,{default:l(()=>[le((q(),M(X,{clickable:"",to:{name:"profile"}},{default:l(()=>[n(p,{avatar:""},{default:l(()=>[n(Qe,{src:Ae})]),_:1}),n(p,null,{default:l(()=>[n(K,null,{default:l(()=>[P(de(e.authStore.user.Name),1)]),_:1}),n(K,{caption:"",lines:"2"},{default:l(()=>[P(de(e.authStore.user.Email),1)]),_:1})]),_:1})]),_:1})),[[$e]]),n(ce),le((q(),M(X,{clickable:"",onClick:r[1]||(r[1]=c=>e.confirm_logout=!0),class:"text-negative"},{default:l(()=>[n(p,{avatar:""},{default:l(()=>[n(w,{iconName:"Logout",size:22})]),_:1}),n(p,null,{default:l(()=>[P("Logout")]),_:1})]),_:1})),[[$e]])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),n(Bt,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":r[4]||(r[4]=c=>e.leftDrawerOpen=c),"show-if-above":""},{default:l(()=>[n(h,{to:"/"},{default:l(()=>[Et]),_:1}),n(ce,{class:"tw-mb-3"}),e.loading?(q(),J("div",Vt,[n(ze,{color:"primary",size:"2em"}),Ht])):(q(),M(Te,{key:1},{default:l(()=>[e.is_administrator?(q(),J(ne,{key:1},[n(X,{clickable:"",class:"tw-px-2 text-primary",onClick:r[3]||(r[3]=c=>e.is_administrator=!1)},{default:l(()=>[n(p,{avatar:""},{default:l(()=>[n(I,{iconName:"ArrowLeft2",size:24})]),_:1}),n(p,null,{default:l(()=>[n(K,null,{default:l(()=>[P("Administrator")]),_:1})]),_:1})]),_:1}),(q(!0),J(ne,null,xe(e.menu_administrator,c=>(q(),M(a,Ce({class:"tw-px-8 tw-text-gray-400"},c,{key:c}),null,16))),128))],64)):(q(),J(ne,{key:0},[(q(!0),J(ne,null,xe(e.essentialLinks,c=>(q(),M(y,Ce({class:"tw-px-8 tw-text-gray-400",key:c.ID},c),null,16))),128)),n(X,{clickable:"",class:"tw-px-8 tw-text-gray-400",onClick:r[2]||(r[2]=c=>e.is_administrator=!0)},{default:l(()=>[n(p,{avatar:""},{default:l(()=>[n(I,{iconName:"Setting2",size:24})]),_:1}),n(p,null,{default:l(()=>[n(K,null,{default:l(()=>[P("Administrator")]),_:1})]),_:1})]),_:1})],64))]),_:1}))]),_:1},8,["modelValue"]),n(Tt,{class:"tw-bg-gray-50"},{default:l(()=>[n(S,{user:e.authStore.user},null,8,["user"])]),_:1}),n(wt,{modelValue:e.confirm_logout,"onUpdate:modelValue":r[5]||(r[5]=c=>e.confirm_logout=c)},{default:l(()=>[n(xt,{style:{width:"400px"}},{default:l(()=>[n(Be,null,{default:l(()=>[Z("div",Rt,[n(w,{iconName:"Logout",class:"tw-mr-2",size:22}),P(" Logout ")])]),_:1}),n(Be,{class:"q-py-none"},{default:l(()=>[Ut]),_:1}),n(It,{align:"right"},{default:l(()=>[le(n(ae,{flat:"",label:"Tidak","no-caps":""},null,512),[[_t]]),n(ae,{flat:"",label:"Ya",color:"negative","no-caps":"",onClick:e.logout},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var ia=Ve(Pt,[["render",jt]]);export{ia as default};

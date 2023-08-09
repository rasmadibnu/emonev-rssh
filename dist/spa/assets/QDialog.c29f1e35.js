import{c as j,a as y,h as T,b as ae,u as tt,L as nt,r as p,M as ye,m as Me,N as lt,j as L,P as it,O as we,n as ne,S as Se,w as P,d as Le,o as A,U as ot,V as ve,W as at,X as te,Y as ut,Z as st,$ as rt,a0 as ct,a1 as dt,a2 as We,a3 as ze,a4 as xe,a5 as ft,a6 as mt,a7 as vt,T as he,a8 as De,a9 as Ee,aa as ht}from"./index.373a2fa6.js";import{u as qe,a as ke,r as Te,d as gt,e as Fe}from"./uid.5390cda5.js";var zt=j({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=y(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>T("div",{class:n.value},ae(t.default))}}),Dt=j({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=y(()=>parseInt(e.lines,10)),l=y(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),i=y(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>T("div",{style:i.value,class:l.value},ae(t.default))}}),Ft=j({name:"QItem",props:{...qe,...tt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:l}}=L(),i=ke(e,l),{hasLink:c,linkAttrs:o,linkClass:u,linkTag:r,navigateOnClick:d}=nt(),s=p(null),b=p(null),x=y(()=>e.clickable===!0||c.value===!0||e.tag==="label"),a=y(()=>e.disable!==!0&&x.value===!0),v=y(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(c.value===!0&&e.active===null?u.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),C=y(()=>{if(e.insetLevel===void 0)return null;const f=l.lang.rtl===!0?"Right":"Left";return{["padding"+f]:16+e.insetLevel*56+"px"}});function E(f){a.value===!0&&(b.value!==null&&(f.qKeyEvent!==!0&&document.activeElement===s.value?b.value.focus():document.activeElement===b.value&&s.value.focus()),d(f))}function B(f){if(a.value===!0&&ye(f,13)===!0){Me(f),f.qKeyEvent=!0;const S=new MouseEvent("click",f);S.qKeyEvent=!0,s.value.dispatchEvent(S)}n("keyup",f)}function h(){const f=lt(t.default,[]);return a.value===!0&&f.unshift(T("div",{class:"q-focus-helper",tabindex:-1,ref:b})),f}return()=>{const f={ref:s,class:v.value,style:C.value,role:"listitem",onClick:E,onKeyup:B};return a.value===!0?(f.tabindex=e.tabindex||"0",Object.assign(f,o.value)):x.value===!0&&(f["aria-disabled"]="true"),T(r.value,f,h())}}});const bt={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},fe={xs:2,sm:4,md:8,lg:16,xl:24};var Rt=j({name:"QSeparator",props:{...qe,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=L(),n=ke(e,t.proxy.$q),l=y(()=>e.vertical===!0?"vertical":"horizontal"),i=y(()=>` q-separator--${l.value}`),c=y(()=>e.inset!==!1?`${i.value}-${bt[e.inset]}`:""),o=y(()=>`q-separator${i.value}${c.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(n.value===!0?" q-separator--dark":"")),u=y(()=>{const r={};if(e.size!==void 0&&(r[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const d=e.spaced===!0?`${fe.md}px`:e.spaced in fe?`${fe[e.spaced]}px`:e.spaced,s=e.vertical===!0?["Left","Right"]:["Top","Bottom"];r[`margin${s[0]}`]=r[`margin${s[1]}`]=d}return r});return()=>T("hr",{class:o.value,style:u.value,"aria-orientation":l.value})}});function yt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),it.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const xt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function qt({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:l,proxy:i,emit:c}=L(),o=p(null);let u=null;function r(a){return o.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const d={};n===void 0&&(Object.assign(d,{hide(a){i.hide(a)},toggle(a){i.toggle(a),a.qAnchorHandled=!0},toggleKey(a){ye(a,13)===!0&&d.toggle(a)},contextClick(a){i.hide(a),we(a),ne(()=>{i.show(a),a.qAnchorHandled=!0})},prevent:we,mobileTouch(a){if(d.mobileCleanup(a),r(a)!==!0)return;i.hide(a),o.value.classList.add("non-selectable");const v=a.target;Se(d,"anchor",[[v,"touchmove","mobileCleanup","passive"],[v,"touchend","mobileCleanup","passive"],[v,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),u=setTimeout(()=>{u=null,i.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){o.value.classList.remove("non-selectable"),u!==null&&(clearTimeout(u),u=null),e.value===!0&&a!==void 0&&yt()}}),n=function(a=l.contextMenu){if(l.noParentEvent===!0||o.value===null)return;let v;a===!0?i.$q.platform.is.mobile===!0?v=[[o.value,"touchstart","mobileTouch","passive"]]:v=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:v=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],Se(d,"anchor",v)});function s(){ot(d,"anchor")}function b(a){for(o.value=a;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function x(){if(l.target===!1||l.target===""||i.$el.parentNode===null)o.value=null;else if(l.target===!0)b(i.$el.parentNode);else{let a=l.target;if(typeof l.target=="string")try{a=document.querySelector(l.target)}catch{a=void 0}a!=null?(o.value=a.$el||a,n()):(o.value=null,console.error(`Anchor: target "${l.target}" not found`))}}return P(()=>l.contextMenu,a=>{o.value!==null&&(s(),n(a))}),P(()=>l.target,()=>{o.value!==null&&s(),x()}),P(()=>l.noParentEvent,a=>{o.value!==null&&(a===!0?s():n())}),Le(()=>{x(),t!==!0&&l.modelValue===!0&&o.value===null&&c("update:modelValue",!1)}),A(()=>{u!==null&&clearTimeout(u),s()}),{anchorEl:o,canShow:r,anchorEvents:d}}function kt(e,t){const n=p(null);let l;function i(u,r){const d=`${r!==void 0?"add":"remove"}EventListener`,s=r!==void 0?r:l;u!==window&&u[d]("scroll",s,ve.passive),window[d]("scroll",s,ve.passive),l=r}function c(){n.value!==null&&(i(n.value),n.value=null)}const o=P(()=>e.noParentEvent,()=>{n.value!==null&&(c(),t())});return A(o),{localScrollTarget:n,unconfigureScrollTarget:c,changeScrollEvent:i}}const Re={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Ae=["beforeShow","show","beforeHide","hide"];function Qe({showing:e,canShow:t,hideOnRouteChange:n,handleShow:l,handleHide:i,processOnMount:c}){const o=L(),{props:u,emit:r,proxy:d}=o;let s;function b(h){e.value===!0?v(h):x(h)}function x(h){if(u.disable===!0||h!==void 0&&h.qAnchorHandled===!0||t!==void 0&&t(h)!==!0)return;const f=u["onUpdate:modelValue"]!==void 0;f===!0&&(r("update:modelValue",!0),s=h,ne(()=>{s===h&&(s=void 0)})),(u.modelValue===null||f===!1)&&a(h)}function a(h){e.value!==!0&&(e.value=!0,r("beforeShow",h),l!==void 0?l(h):r("show",h))}function v(h){if(u.disable===!0)return;const f=u["onUpdate:modelValue"]!==void 0;f===!0&&(r("update:modelValue",!1),s=h,ne(()=>{s===h&&(s=void 0)})),(u.modelValue===null||f===!1)&&C(h)}function C(h){e.value!==!1&&(e.value=!1,r("beforeHide",h),i!==void 0?i(h):r("hide",h))}function E(h){u.disable===!0&&h===!0?u["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!1):h===!0!==e.value&&(h===!0?a:C)(s)}P(()=>u.modelValue,E),n!==void 0&&at(o)===!0&&P(()=>d.$route.fullPath,()=>{n.value===!0&&e.value===!0&&v()}),c===!0&&Le(()=>{E(u.modelValue)});const B={show:x,hide:v,toggle:b};return Object.assign(d,B),B}const I=[];function At(e){return I.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function Oe(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return te(e)}else if(e.__qPortal===!0){const n=te(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=te(e)}while(e!=null)}function Qt(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=Oe(e,t);continue}e.hide(t)}e=te(e)}}function wt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Ve(e,t,n,l){const i=p(!1),c=p(!1);let o=null;const u={},r=l==="dialog"&&wt(e);function d(b){if(b===!0){Te(u),c.value=!0;return}c.value=!1,i.value===!1&&(r===!1&&o===null&&(o=ct(!1,l)),i.value=!0,I.push(e.proxy),gt(u))}function s(b){if(c.value=!1,b!==!0)return;Te(u),i.value=!1;const x=I.indexOf(e.proxy);x!==-1&&I.splice(x,1),o!==null&&(dt(o),o=null)}return ut(()=>{s(!0)}),e.proxy.__qPortal=!0,st(e.proxy,"contentEl",()=>t.value),{showPortal:d,hidePortal:s,portalIsActive:i,portalIsAccessible:c,renderPortal:()=>r===!0?n():i.value===!0?[T(rt,{to:o},n())]:void 0}}const Ie={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Ke(e,t=()=>{},n=()=>{}){return{transitionProps:y(()=>{const l=`q-transition--${e.transitionShow||t()}`,i=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${l}-enter-from`,enterActiveClass:`${l}-enter-active`,enterToClass:`${l}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:y(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function je(){let e;const t=L();function n(){e=void 0}return We(n),A(n),{removeTick:n,registerTick(l){e=l,ne(()=>{e===l&&(ze(t)===!1&&e(),e=void 0)})}}}function Ne(){let e=null;const t=L();function n(){e!==null&&(clearTimeout(e),e=null)}return We(n),A(n),{removeTimeout:n,registerTimeout(l,i){n(),ze(t)===!1&&(e=setTimeout(l,i))}}}const D=[];let K;function St(e){K=e.keyCode===27}function Et(){K===!0&&(K=!1)}function Tt(e){K===!0&&(K=!1,ye(e,27)===!0&&D[D.length-1](e))}function Ue(e){window[e]("keydown",St),window[e]("blur",Et),window[e]("keyup",Tt),K=!1}function Ge(e){xe.is.desktop===!0&&(D.push(e),D.length===1&&Ue("addEventListener"))}function le(e){const t=D.indexOf(e);t>-1&&(D.splice(t,1),D.length===0&&Ue("removeEventListener"))}const F=[];function Xe(e){F[F.length-1](e)}function Ye(e){xe.is.desktop===!0&&(F.push(e),F.length===1&&document.body.addEventListener("focusin",Xe))}function ge(e){const t=F.indexOf(e);t>-1&&(F.splice(t,1),F.length===0&&document.body.removeEventListener("focusin",Xe))}const{notPassiveCapture:ie}=ve,R=[];function oe(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=I.length-1;for(;n>=0;){const l=I[n].$;if(l.type.name==="QTooltip"){n--;continue}if(l.type.name!=="QDialog")break;if(l.props.seamless!==!0)return;n--}for(let l=R.length-1;l>=0;l--){const i=R[l];if((i.anchorEl.value===null||i.anchorEl.value.contains(t)===!1)&&(t===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(t)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function Ct(e){R.push(e),R.length===1&&(document.addEventListener("mousedown",oe,ie),document.addEventListener("touchstart",oe,ie))}function Ce(e){const t=R.findIndex(n=>n===e);t>-1&&(R.splice(t,1),R.length===0&&(document.removeEventListener("mousedown",oe,ie),document.removeEventListener("touchstart",oe,ie)))}let Be,He;function pe(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Bt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const be={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{be[`${e}#ltr`]=e,be[`${e}#rtl`]=e});function $e(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:be[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function Ht(e,t){let{top:n,left:l,right:i,bottom:c,width:o,height:u}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],l-=t[0],c+=t[1],i+=t[0],o+=t[0],u+=t[1]),{top:n,bottom:c,height:u,left:l,right:i,width:o,middle:l+(i-l)/2,center:n+(c-n)/2}}function pt(e,t,n){let{top:l,left:i}=e.getBoundingClientRect();return l+=t.top,i+=t.left,n!==void 0&&(l+=n[1],i+=n[0]),{top:l,bottom:l+1,height:1,left:i,right:i+1,width:1,middle:i,center:l}}function $t(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function Pe(e,t,n,l){return{top:e[n.vertical]-t[l.vertical],left:e[n.horizontal]-t[l.horizontal]}}function Ze(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Ze(e,t+1)},10);return}const{targetEl:n,offset:l,anchorEl:i,anchorOrigin:c,selfOrigin:o,absoluteOffset:u,fit:r,cover:d,maxHeight:s,maxWidth:b}=e;if(xe.is.ios===!0&&window.visualViewport!==void 0){const M=document.body.style,{offsetLeft:w,offsetTop:H}=window.visualViewport;w!==Be&&(M.setProperty("--q-pe-left",w+"px"),Be=w),H!==He&&(M.setProperty("--q-pe-top",H+"px"),He=H)}const{scrollLeft:x,scrollTop:a}=n,v=u===void 0?Ht(i,d===!0?[0,0]:l):pt(i,u,l);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:b||"100vw",maxHeight:s||"100vh",visibility:"visible"});const{offsetWidth:C,offsetHeight:E}=n,{elWidth:B,elHeight:h}=r===!0||d===!0?{elWidth:Math.max(v.width,C),elHeight:d===!0?Math.max(v.height,E):E}:{elWidth:C,elHeight:E};let f={maxWidth:b,maxHeight:s};(r===!0||d===!0)&&(f.minWidth=v.width+"px",d===!0&&(f.minHeight=v.height+"px")),Object.assign(n.style,f);const S=$t(B,h);let k=Pe(v,S,c,o);if(u===void 0||l===void 0)me(k,v,S,c,o);else{const{top:M,left:w}=k;me(k,v,S,c,o);let H=!1;if(k.top!==M){H=!0;const $=2*l[1];v.center=v.top-=$,v.bottom-=$+2}if(k.left!==w){H=!0;const $=2*l[0];v.middle=v.left-=$,v.right-=$+2}H===!0&&(k=Pe(v,S,c,o),me(k,v,S,c,o))}f={top:k.top+"px",left:k.left+"px"},k.maxHeight!==void 0&&(f.maxHeight=k.maxHeight+"px",v.height>k.maxHeight&&(f.minHeight=f.maxHeight)),k.maxWidth!==void 0&&(f.maxWidth=k.maxWidth+"px",v.width>k.maxWidth&&(f.minWidth=f.maxWidth)),Object.assign(n.style,f),n.scrollTop!==a&&(n.scrollTop=a),n.scrollLeft!==x&&(n.scrollLeft=x)}function me(e,t,n,l,i){const c=n.bottom,o=n.right,u=ft(),r=window.innerHeight-u,d=document.body.clientWidth;if(e.top<0||e.top+c>r)if(i.vertical==="center")e.top=t[l.vertical]>r/2?Math.max(0,r-c):0,e.maxHeight=Math.min(c,r);else if(t[l.vertical]>r/2){const s=Math.min(r,l.vertical==="center"?t.center:l.vertical===i.vertical?t.bottom:t.top);e.maxHeight=Math.min(c,s),e.top=Math.max(0,s-c)}else e.top=Math.max(0,l.vertical==="center"?t.center:l.vertical===i.vertical?t.top:t.bottom),e.maxHeight=Math.min(c,r-e.top);if(e.left<0||e.left+o>d)if(e.maxWidth=Math.min(o,d),i.horizontal==="middle")e.left=t[l.horizontal]>d/2?Math.max(0,d-o):0;else if(t[l.horizontal]>d/2){const s=Math.min(d,l.horizontal==="middle"?t.middle:l.horizontal===i.horizontal?t.right:t.left);e.maxWidth=Math.min(o,s),e.left=Math.max(0,s-e.maxWidth)}else e.left=Math.max(0,l.horizontal==="middle"?t.middle:l.horizontal===i.horizontal?t.left:t.right),e.maxWidth=Math.min(o,d-e.left)}var Ot=j({name:"QMenu",inheritAttrs:!1,props:{...xt,...Re,...qe,...Ie,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:pe},self:{type:String,validator:pe},offset:{type:Array,validator:Bt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Ae,"click","escapeKey"],setup(e,{slots:t,emit:n,attrs:l}){let i=null,c,o,u;const r=L(),{proxy:d}=r,{$q:s}=d,b=p(null),x=p(!1),a=y(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),v=ke(e,s),{registerTick:C,removeTick:E}=je(),{registerTimeout:B}=Ne(),{transitionProps:h,transitionStyle:f}=Ke(e),{localScrollTarget:S,changeScrollEvent:k,unconfigureScrollTarget:M}=kt(e,V),{anchorEl:w,canShow:H}=qt({showing:x}),{hide:$}=Qe({showing:x,canShow:H,handleShow:G,handleHide:re,hideOnRouteChange:a,processOnMount:!0}),{showPortal:X,hidePortal:W,renderPortal:ue}=Ve(r,b,J,"menu"),N={anchorEl:w,innerRef:b,onClickOutside(m){if(e.persistent!==!0&&x.value===!0)return $(m),(m.type==="touchstart"||m.target.classList.contains("q-dialog__backdrop"))&&Me(m),!0}},Y=y(()=>$e(e.anchor||(e.cover===!0?"center middle":"bottom start"),s.lang.rtl)),se=y(()=>e.cover===!0?Y.value:$e(e.self||"top start",s.lang.rtl)),z=y(()=>(e.square===!0?" q-menu--square":"")+(v.value===!0?" q-menu--dark q-dark":"")),U=y(()=>e.autoClose===!0?{onClick:ce}:{}),Q=y(()=>x.value===!0&&e.persistent!==!0);P(Q,m=>{m===!0?(Ge(q),Ct(N)):(le(q),Ce(N))});function O(){Fe(()=>{let m=b.value;m&&m.contains(document.activeElement)!==!0&&(m=m.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||m.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||m.querySelector("[autofocus], [data-autofocus]")||m,m.focus({preventScroll:!0}))})}function G(m){if(i=e.noRefocus===!1?document.activeElement:null,Ye(g),X(),V(),c=void 0,m!==void 0&&(e.touchPosition||e.contextMenu)){const de=mt(m);if(de.left!==void 0){const{top:Je,left:et}=w.value.getBoundingClientRect();c={left:de.left-et,top:de.top-Je}}}o===void 0&&(o=P(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,_)),e.noFocus!==!0&&document.activeElement.blur(),C(()=>{_(),e.noFocus!==!0&&O()}),B(()=>{s.platform.is.ios===!0&&(u=e.autoClose,b.value.click()),_(),X(!0),n("show",m)},e.transitionDuration)}function re(m){E(),W(),Z(!0),i!==null&&(m===void 0||m.qClickOutside!==!0)&&(((m&&m.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),B(()=>{W(!0),n("hide",m)},e.transitionDuration)}function Z(m){c=void 0,o!==void 0&&(o(),o=void 0),(m===!0||x.value===!0)&&(ge(g),M(),Ce(N),le(q)),m!==!0&&(i=null)}function V(){(w.value!==null||e.scrollTarget!==void 0)&&(S.value=vt(w.value,e.scrollTarget),k(S.value,_))}function ce(m){u!==!0?(Oe(d,m),n("click",m)):u=!1}function g(m){Q.value===!0&&e.noFocus!==!0&&De(b.value,m.target)!==!0&&O()}function q(m){n("escapeKey"),$(m)}function _(){Ze({targetEl:b.value,offset:e.offset,anchorEl:w.value,anchorOrigin:Y.value,selfOrigin:se.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function J(){return T(he,h.value,()=>x.value===!0?T("div",{role:"menu",...l,ref:b,tabindex:-1,class:["q-menu q-position-engine scroll"+z.value,l.class],style:[l.style,f.value],...U.value},ae(t.default)):null)}return A(Z),Object.assign(d,{focus:O,updatePosition:_}),ue}});function Pt(e,t,n){let l;function i(){l!==void 0&&(Ee.remove(l),l=void 0)}return A(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){l={condition:()=>n.value===!0,handler:t},Ee.add(l)}}}function _t(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,ht(t))}}}function Vt(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}function It(e,t,n){if(n<=t)return t;const l=n-t+1;let i=t+(e-t)%l;return i<t&&(i=l+i),i===0?0:i}let ee=0;const Mt={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},_e={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Kt=j({name:"QDialog",inheritAttrs:!1,props:{...Re,...Ie,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...Ae,"shake","click","escapeKey"],setup(e,{slots:t,emit:n,attrs:l}){const i=L(),c=p(null),o=p(!1),u=p(!1);let r=null,d=null,s,b;const x=y(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:a}=_t(),{registerTimeout:v}=Ne(),{registerTick:C,removeTick:E}=je(),{transitionProps:B,transitionStyle:h}=Ke(e,()=>_e[e.position][0],()=>_e[e.position][1]),{showPortal:f,hidePortal:S,portalIsAccessible:k,renderPortal:M}=Ve(i,c,ce,"dialog"),{hide:w}=Qe({showing:o,hideOnRouteChange:x,handleShow:Y,handleHide:se,processOnMount:!0}),{addToHistory:H,removeFromHistory:$}=Pt(o,w,x),X=y(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Mt[e.position]}`+(u.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),W=y(()=>o.value===!0&&e.seamless!==!0),ue=y(()=>e.autoClose===!0?{onClick:re}:{}),N=y(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${W.value===!0?"modal":"seamless"}`,l.class]);P(()=>e.maximized,g=>{o.value===!0&&G(g)}),P(W,g=>{a(g),g===!0?(Ye(V),Ge(Q)):(ge(V),le(Q))});function Y(g){H(),d=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,G(e.maximized),f(),u.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),C(z)):E(),v(()=>{if(i.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:q,bottom:_}=document.activeElement.getBoundingClientRect(),{innerHeight:J}=window,m=window.visualViewport!==void 0?window.visualViewport.height:J;q>0&&_>m/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-m,_>=J?1/0:Math.ceil(document.scrollingElement.scrollTop+_-m/2))),document.activeElement.scrollIntoView()}b=!0,c.value.click(),b=!1}f(!0),u.value=!1,n("show",g)},e.transitionDuration)}function se(g){E(),$(),O(!0),u.value=!0,S(),d!==null&&(((g&&g.type.indexOf("key")===0?d.closest('[tabindex]:not([tabindex^="-"])'):void 0)||d).focus(),d=null),v(()=>{S(!0),u.value=!1,n("hide",g)},e.transitionDuration)}function z(g){Fe(()=>{let q=c.value;q===null||q.contains(document.activeElement)===!0||(q=(g!==""?q.querySelector(g):null)||q.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||q.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||q.querySelector("[autofocus], [data-autofocus]")||q,q.focus({preventScroll:!0}))})}function U(g){g&&typeof g.focus=="function"?g.focus({preventScroll:!0}):z(),n("shake");const q=c.value;q!==null&&(q.classList.remove("q-animate--scale"),q.classList.add("q-animate--scale"),r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,c.value!==null&&(q.classList.remove("q-animate--scale"),z())},170))}function Q(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&U():(n("escapeKey"),w()))}function O(g){r!==null&&(clearTimeout(r),r=null),(g===!0||o.value===!0)&&(G(!1),e.seamless!==!0&&(a(!1),ge(V),le(Q))),g!==!0&&(d=null)}function G(g){g===!0?s!==!0&&(ee<1&&document.body.classList.add("q-body--dialog"),ee++,s=!0):s===!0&&(ee<2&&document.body.classList.remove("q-body--dialog"),ee--,s=!1)}function re(g){b!==!0&&(w(g),n("click",g))}function Z(g){e.persistent!==!0&&e.noBackdropDismiss!==!0?w(g):e.noShake!==!0&&U()}function V(g){e.allowFocusOutside!==!0&&k.value===!0&&De(c.value,g.target)!==!0&&z('[tabindex]:not([tabindex="-1"])')}Object.assign(i.proxy,{focus:z,shake:U,__updateRefocusTarget(g){d=g||null}}),A(O);function ce(){return T("div",{role:"dialog","aria-modal":W.value===!0?"true":"false",...l,class:N.value},[T(he,{name:"q-transition--fade",appear:!0},()=>W.value===!0?T("div",{class:"q-dialog__backdrop fixed-full",style:h.value,"aria-hidden":"true",tabindex:-1,onClick:Z}):null),T(he,B.value,()=>o.value===!0?T("div",{ref:c,class:X.value,style:h.value,tabindex:-1,...ue.value},ae(t.default)):null)])}return M}});export{Rt as Q,Ae as a,Ne as b,Qe as c,Pt as d,Vt as e,_t as f,Ft as g,Dt as h,zt as i,Ot as j,Kt as k,At as l,Qt as m,yt as n,It as o,je as p,Re as u};

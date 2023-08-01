import{c as G,a as x,h as T,b as ae,u as et,L as tt,r as H,M as be,m as Pe,N as nt,j as R,P as lt,O as xe,n as ne,S as we,w as _,d as _e,o as z,U as it,V as me,W as ot,X as te,Y as at,Z as ut,$ as st,a0 as rt,a1 as ct,a2 as Me,a3 as Le,a4 as ye,a5 as dt,a6 as ft,a7 as mt,T as ve,a8 as $e,a9 as ke,aa as vt}from"./index.74a171dd.js";import{u as We,a as Fe,r as qe,d as ht,e as Ae}from"./uid.64ab0e0b.js";var $t=G({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=x(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>T("div",{class:n.value},ae(t.default))}}),Wt=G({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=x(()=>parseInt(e.lines,10)),l=x(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),i=x(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>T("div",{style:i.value,class:l.value},ae(t.default))}}),Ft=G({name:"QItem",props:{...We,...et,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:l}}=R(),i=Fe(e,l),{hasLink:r,linkAttrs:o,linkClass:u,linkTag:d,navigateOnClick:c}=tt(),s=H(null),b=H(null),y=x(()=>e.clickable===!0||r.value===!0||e.tag==="label"),a=x(()=>e.disable!==!0&&y.value===!0),v=x(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(r.value===!0&&e.active===null?u.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),C=x(()=>{if(e.insetLevel===void 0)return null;const f=l.lang.rtl===!0?"Right":"Left";return{["padding"+f]:16+e.insetLevel*56+"px"}});function S(f){a.value===!0&&(b.value!==null&&(f.qKeyEvent!==!0&&document.activeElement===s.value?b.value.focus():document.activeElement===b.value&&s.value.focus()),c(f))}function p(f){if(a.value===!0&&be(f,13)===!0){Pe(f),f.qKeyEvent=!0;const E=new MouseEvent("click",f);E.qKeyEvent=!0,s.value.dispatchEvent(E)}n("keyup",f)}function h(){const f=nt(t.default,[]);return a.value===!0&&f.unshift(T("div",{class:"q-focus-helper",tabindex:-1,ref:b})),f}return()=>{const f={ref:s,class:v.value,style:C.value,role:"listitem",onClick:S,onKeyup:p};return a.value===!0?(f.tabindex=e.tabindex||"0",Object.assign(f,o.value)):y.value===!0&&(f["aria-disabled"]="true"),T(d.value,f,h())}}});function gt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),lt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const bt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function yt({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:l,proxy:i,emit:r}=R(),o=H(null);let u=null;function d(a){return o.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const c={};n===void 0&&(Object.assign(c,{hide(a){i.hide(a)},toggle(a){i.toggle(a),a.qAnchorHandled=!0},toggleKey(a){be(a,13)===!0&&c.toggle(a)},contextClick(a){i.hide(a),xe(a),ne(()=>{i.show(a),a.qAnchorHandled=!0})},prevent:xe,mobileTouch(a){if(c.mobileCleanup(a),d(a)!==!0)return;i.hide(a),o.value.classList.add("non-selectable");const v=a.target;we(c,"anchor",[[v,"touchmove","mobileCleanup","passive"],[v,"touchend","mobileCleanup","passive"],[v,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),u=setTimeout(()=>{u=null,i.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){o.value.classList.remove("non-selectable"),u!==null&&(clearTimeout(u),u=null),e.value===!0&&a!==void 0&&gt()}}),n=function(a=l.contextMenu){if(l.noParentEvent===!0||o.value===null)return;let v;a===!0?i.$q.platform.is.mobile===!0?v=[[o.value,"touchstart","mobileTouch","passive"]]:v=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:v=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],we(c,"anchor",v)});function s(){it(c,"anchor")}function b(a){for(o.value=a;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function y(){if(l.target===!1||l.target===""||i.$el.parentNode===null)o.value=null;else if(l.target===!0)b(i.$el.parentNode);else{let a=l.target;if(typeof l.target=="string")try{a=document.querySelector(l.target)}catch{a=void 0}a!=null?(o.value=a.$el||a,n()):(o.value=null,console.error(`Anchor: target "${l.target}" not found`))}}return _(()=>l.contextMenu,a=>{o.value!==null&&(s(),n(a))}),_(()=>l.target,()=>{o.value!==null&&s(),y()}),_(()=>l.noParentEvent,a=>{o.value!==null&&(a===!0?s():n())}),_e(()=>{y(),t!==!0&&l.modelValue===!0&&o.value===null&&r("update:modelValue",!1)}),z(()=>{u!==null&&clearTimeout(u),s()}),{anchorEl:o,canShow:d,anchorEvents:c}}function xt(e,t){const n=H(null);let l;function i(u,d){const c=`${d!==void 0?"add":"remove"}EventListener`,s=d!==void 0?d:l;u!==window&&u[c]("scroll",s,me.passive),window[c]("scroll",s,me.passive),l=d}function r(){n.value!==null&&(i(n.value),n.value=null)}const o=_(()=>e.noParentEvent,()=>{n.value!==null&&(r(),t())});return z(o),{localScrollTarget:n,unconfigureScrollTarget:r,changeScrollEvent:i}}const De={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Re=["beforeShow","show","beforeHide","hide"];function ze({showing:e,canShow:t,hideOnRouteChange:n,handleShow:l,handleHide:i,processOnMount:r}){const o=R(),{props:u,emit:d,proxy:c}=o;let s;function b(h){e.value===!0?v(h):y(h)}function y(h){if(u.disable===!0||h!==void 0&&h.qAnchorHandled===!0||t!==void 0&&t(h)!==!0)return;const f=u["onUpdate:modelValue"]!==void 0;f===!0&&(d("update:modelValue",!0),s=h,ne(()=>{s===h&&(s=void 0)})),(u.modelValue===null||f===!1)&&a(h)}function a(h){e.value!==!0&&(e.value=!0,d("beforeShow",h),l!==void 0?l(h):d("show",h))}function v(h){if(u.disable===!0)return;const f=u["onUpdate:modelValue"]!==void 0;f===!0&&(d("update:modelValue",!1),s=h,ne(()=>{s===h&&(s=void 0)})),(u.modelValue===null||f===!1)&&C(h)}function C(h){e.value!==!1&&(e.value=!1,d("beforeHide",h),i!==void 0?i(h):d("hide",h))}function S(h){u.disable===!0&&h===!0?u["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):h===!0!==e.value&&(h===!0?a:C)(s)}_(()=>u.modelValue,S),n!==void 0&&ot(o)===!0&&_(()=>c.$route.fullPath,()=>{n.value===!0&&e.value===!0&&v()}),r===!0&&_e(()=>{S(u.modelValue)});const p={show:y,hide:v,toggle:b};return Object.assign(c,p),p}const I=[];function At(e){return I.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function Oe(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return te(e)}else if(e.__qPortal===!0){const n=te(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=te(e)}while(e!=null)}function Dt(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=Oe(e,t);continue}e.hide(t)}e=te(e)}}function wt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Ve(e,t,n,l){const i=H(!1),r=H(!1);let o=null;const u={},d=l==="dialog"&&wt(e);function c(b){if(b===!0){qe(u),r.value=!0;return}r.value=!1,i.value===!1&&(d===!1&&o===null&&(o=rt(!1,l)),i.value=!0,I.push(e.proxy),ht(u))}function s(b){if(r.value=!1,b!==!0)return;qe(u),i.value=!1;const y=I.indexOf(e.proxy);y!==-1&&I.splice(y,1),o!==null&&(ct(o),o=null)}return at(()=>{s(!0)}),e.proxy.__qPortal=!0,ut(e.proxy,"contentEl",()=>t.value),{showPortal:c,hidePortal:s,portalIsActive:i,portalIsAccessible:r,renderPortal:()=>d===!0?n():i.value===!0?[T(st,{to:o},n())]:void 0}}const Qe={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Ie(e,t=()=>{},n=()=>{}){return{transitionProps:x(()=>{const l=`q-transition--${e.transitionShow||t()}`,i=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${l}-enter-from`,enterActiveClass:`${l}-enter-active`,enterToClass:`${l}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:x(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Ke(){let e;const t=R();function n(){e=void 0}return Me(n),z(n),{removeTick:n,registerTick(l){e=l,ne(()=>{e===l&&(Le(t)===!1&&e(),e=void 0)})}}}function je(){let e=null;const t=R();function n(){e!==null&&(clearTimeout(e),e=null)}return Me(n),z(n),{removeTimeout:n,registerTimeout(l,i){n(),Le(t)===!1&&(e=setTimeout(l,i))}}}const F=[];let K;function kt(e){K=e.keyCode===27}function qt(){K===!0&&(K=!1)}function Et(e){K===!0&&(K=!1,be(e,27)===!0&&F[F.length-1](e))}function Ne(e){window[e]("keydown",kt),window[e]("blur",qt),window[e]("keyup",Et),K=!1}function Ue(e){ye.is.desktop===!0&&(F.push(e),F.length===1&&Ne("addEventListener"))}function le(e){const t=F.indexOf(e);t>-1&&(F.splice(t,1),F.length===0&&Ne("removeEventListener"))}const A=[];function Ge(e){A[A.length-1](e)}function Xe(e){ye.is.desktop===!0&&(A.push(e),A.length===1&&document.body.addEventListener("focusin",Ge))}function he(e){const t=A.indexOf(e);t>-1&&(A.splice(t,1),A.length===0&&document.body.removeEventListener("focusin",Ge))}const{notPassiveCapture:ie}=me,D=[];function oe(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=I.length-1;for(;n>=0;){const l=I[n].$;if(l.type.name==="QTooltip"){n--;continue}if(l.type.name!=="QDialog")break;if(l.props.seamless!==!0)return;n--}for(let l=D.length-1;l>=0;l--){const i=D[l];if((i.anchorEl.value===null||i.anchorEl.value.contains(t)===!1)&&(t===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(t)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function St(e){D.push(e),D.length===1&&(document.addEventListener("mousedown",oe,ie),document.addEventListener("touchstart",oe,ie))}function Ee(e){const t=D.findIndex(n=>n===e);t>-1&&(D.splice(t,1),D.length===0&&(document.removeEventListener("mousedown",oe,ie),document.removeEventListener("touchstart",oe,ie)))}let Se,Te;function Ce(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Tt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const ge={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{ge[`${e}#ltr`]=e,ge[`${e}#rtl`]=e});function pe(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:ge[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function Ct(e,t){let{top:n,left:l,right:i,bottom:r,width:o,height:u}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],l-=t[0],r+=t[1],i+=t[0],o+=t[0],u+=t[1]),{top:n,bottom:r,height:u,left:l,right:i,width:o,middle:l+(i-l)/2,center:n+(r-n)/2}}function pt(e,t,n){let{top:l,left:i}=e.getBoundingClientRect();return l+=t.top,i+=t.left,n!==void 0&&(l+=n[1],i+=n[0]),{top:l,bottom:l+1,height:1,left:i,right:i+1,width:1,middle:i,center:l}}function Bt(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function Be(e,t,n,l){return{top:e[n.vertical]-t[l.vertical],left:e[n.horizontal]-t[l.horizontal]}}function Ye(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Ye(e,t+1)},10);return}const{targetEl:n,offset:l,anchorEl:i,anchorOrigin:r,selfOrigin:o,absoluteOffset:u,fit:d,cover:c,maxHeight:s,maxWidth:b}=e;if(ye.is.ios===!0&&window.visualViewport!==void 0){const L=document.body.style,{offsetLeft:q,offsetTop:B}=window.visualViewport;q!==Se&&(L.setProperty("--q-pe-left",q+"px"),Se=q),B!==Te&&(L.setProperty("--q-pe-top",B+"px"),Te=B)}const{scrollLeft:y,scrollTop:a}=n,v=u===void 0?Ct(i,c===!0?[0,0]:l):pt(i,u,l);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:b||"100vw",maxHeight:s||"100vh",visibility:"visible"});const{offsetWidth:C,offsetHeight:S}=n,{elWidth:p,elHeight:h}=d===!0||c===!0?{elWidth:Math.max(v.width,C),elHeight:c===!0?Math.max(v.height,S):S}:{elWidth:C,elHeight:S};let f={maxWidth:b,maxHeight:s};(d===!0||c===!0)&&(f.minWidth=v.width+"px",c===!0&&(f.minHeight=v.height+"px")),Object.assign(n.style,f);const E=Bt(p,h);let k=Be(v,E,r,o);if(u===void 0||l===void 0)fe(k,v,E,r,o);else{const{top:L,left:q}=k;fe(k,v,E,r,o);let B=!1;if(k.top!==L){B=!0;const P=2*l[1];v.center=v.top-=P,v.bottom-=P+2}if(k.left!==q){B=!0;const P=2*l[0];v.middle=v.left-=P,v.right-=P+2}B===!0&&(k=Be(v,E,r,o),fe(k,v,E,r,o))}f={top:k.top+"px",left:k.left+"px"},k.maxHeight!==void 0&&(f.maxHeight=k.maxHeight+"px",v.height>k.maxHeight&&(f.minHeight=f.maxHeight)),k.maxWidth!==void 0&&(f.maxWidth=k.maxWidth+"px",v.width>k.maxWidth&&(f.minWidth=f.maxWidth)),Object.assign(n.style,f),n.scrollTop!==a&&(n.scrollTop=a),n.scrollLeft!==y&&(n.scrollLeft=y)}function fe(e,t,n,l,i){const r=n.bottom,o=n.right,u=dt(),d=window.innerHeight-u,c=document.body.clientWidth;if(e.top<0||e.top+r>d)if(i.vertical==="center")e.top=t[l.vertical]>d/2?Math.max(0,d-r):0,e.maxHeight=Math.min(r,d);else if(t[l.vertical]>d/2){const s=Math.min(d,l.vertical==="center"?t.center:l.vertical===i.vertical?t.bottom:t.top);e.maxHeight=Math.min(r,s),e.top=Math.max(0,s-r)}else e.top=Math.max(0,l.vertical==="center"?t.center:l.vertical===i.vertical?t.top:t.bottom),e.maxHeight=Math.min(r,d-e.top);if(e.left<0||e.left+o>c)if(e.maxWidth=Math.min(o,c),i.horizontal==="middle")e.left=t[l.horizontal]>c/2?Math.max(0,c-o):0;else if(t[l.horizontal]>c/2){const s=Math.min(c,l.horizontal==="middle"?t.middle:l.horizontal===i.horizontal?t.right:t.left);e.maxWidth=Math.min(o,s),e.left=Math.max(0,s-e.maxWidth)}else e.left=Math.max(0,l.horizontal==="middle"?t.middle:l.horizontal===i.horizontal?t.left:t.right),e.maxWidth=Math.min(o,c-e.left)}var Rt=G({name:"QMenu",inheritAttrs:!1,props:{...bt,...De,...We,...Qe,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Ce},self:{type:String,validator:Ce},offset:{type:Array,validator:Tt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Re,"click","escapeKey"],setup(e,{slots:t,emit:n,attrs:l}){let i=null,r,o,u;const d=R(),{proxy:c}=d,{$q:s}=c,b=H(null),y=H(!1),a=x(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),v=Fe(e,s),{registerTick:C,removeTick:S}=Ke(),{registerTimeout:p}=je(),{transitionProps:h,transitionStyle:f}=Ie(e),{localScrollTarget:E,changeScrollEvent:k,unconfigureScrollTarget:L}=xt(e,Q),{anchorEl:q,canShow:B}=yt({showing:y}),{hide:P}=ze({showing:y,canShow:B,handleShow:U,handleHide:re,hideOnRouteChange:a,processOnMount:!0}),{showPortal:X,hidePortal:$,renderPortal:ue}=Ve(d,b,J,"menu"),j={anchorEl:q,innerRef:b,onClickOutside(m){if(e.persistent!==!0&&y.value===!0)return P(m),(m.type==="touchstart"||m.target.classList.contains("q-dialog__backdrop"))&&Pe(m),!0}},Y=x(()=>pe(e.anchor||(e.cover===!0?"center middle":"bottom start"),s.lang.rtl)),se=x(()=>e.cover===!0?Y.value:pe(e.self||"top start",s.lang.rtl)),W=x(()=>(e.square===!0?" q-menu--square":"")+(v.value===!0?" q-menu--dark q-dark":"")),N=x(()=>e.autoClose===!0?{onClick:ce}:{}),O=x(()=>y.value===!0&&e.persistent!==!0);_(O,m=>{m===!0?(Ue(w),St(j)):(le(w),Ee(j))});function V(){Ae(()=>{let m=b.value;m&&m.contains(document.activeElement)!==!0&&(m=m.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||m.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||m.querySelector("[autofocus], [data-autofocus]")||m,m.focus({preventScroll:!0}))})}function U(m){if(i=e.noRefocus===!1?document.activeElement:null,Xe(g),X(),Q(),r=void 0,m!==void 0&&(e.touchPosition||e.contextMenu)){const de=ft(m);if(de.left!==void 0){const{top:Ze,left:Je}=q.value.getBoundingClientRect();r={left:de.left-Je,top:de.top-Ze}}}o===void 0&&(o=_(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,M)),e.noFocus!==!0&&document.activeElement.blur(),C(()=>{M(),e.noFocus!==!0&&V()}),p(()=>{s.platform.is.ios===!0&&(u=e.autoClose,b.value.click()),M(),X(!0),n("show",m)},e.transitionDuration)}function re(m){S(),$(),Z(!0),i!==null&&(m===void 0||m.qClickOutside!==!0)&&(((m&&m.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),p(()=>{$(!0),n("hide",m)},e.transitionDuration)}function Z(m){r=void 0,o!==void 0&&(o(),o=void 0),(m===!0||y.value===!0)&&(he(g),L(),Ee(j),le(w)),m!==!0&&(i=null)}function Q(){(q.value!==null||e.scrollTarget!==void 0)&&(E.value=mt(q.value,e.scrollTarget),k(E.value,M))}function ce(m){u!==!0?(Oe(c,m),n("click",m)):u=!1}function g(m){O.value===!0&&e.noFocus!==!0&&$e(b.value,m.target)!==!0&&V()}function w(m){n("escapeKey"),P(m)}function M(){Ye({targetEl:b.value,offset:e.offset,anchorEl:q.value,anchorOrigin:Y.value,selfOrigin:se.value,absoluteOffset:r,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function J(){return T(ve,h.value,()=>y.value===!0?T("div",{role:"menu",...l,ref:b,tabindex:-1,class:["q-menu q-position-engine scroll"+W.value,l.class],style:[l.style,f.value],...N.value},ae(t.default)):null)}return z(Z),Object.assign(c,{focus:V,updatePosition:M}),ue}});function Ht(e,t,n){let l;function i(){l!==void 0&&(ke.remove(l),l=void 0)}return z(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){l={condition:()=>n.value===!0,handler:t},ke.add(l)}}}function Pt(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,vt(t))}}}function zt(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}function Ot(e,t,n){if(n<=t)return t;const l=n-t+1;let i=t+(e-t)%l;return i<t&&(i=l+i),i===0?0:i}let ee=0;const _t={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},He={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Vt=G({name:"QDialog",inheritAttrs:!1,props:{...De,...Qe,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...Re,"shake","click","escapeKey"],setup(e,{slots:t,emit:n,attrs:l}){const i=R(),r=H(null),o=H(!1),u=H(!1);let d=null,c=null,s,b;const y=x(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:a}=Pt(),{registerTimeout:v}=je(),{registerTick:C,removeTick:S}=Ke(),{transitionProps:p,transitionStyle:h}=Ie(e,()=>He[e.position][0],()=>He[e.position][1]),{showPortal:f,hidePortal:E,portalIsAccessible:k,renderPortal:L}=Ve(i,r,ce,"dialog"),{hide:q}=ze({showing:o,hideOnRouteChange:y,handleShow:Y,handleHide:se,processOnMount:!0}),{addToHistory:B,removeFromHistory:P}=Ht(o,q,y),X=x(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${_t[e.position]}`+(u.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),$=x(()=>o.value===!0&&e.seamless!==!0),ue=x(()=>e.autoClose===!0?{onClick:re}:{}),j=x(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${$.value===!0?"modal":"seamless"}`,l.class]);_(()=>e.maximized,g=>{o.value===!0&&U(g)}),_($,g=>{a(g),g===!0?(Xe(Q),Ue(O)):(he(Q),le(O))});function Y(g){B(),c=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,U(e.maximized),f(),u.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),C(W)):S(),v(()=>{if(i.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:w,bottom:M}=document.activeElement.getBoundingClientRect(),{innerHeight:J}=window,m=window.visualViewport!==void 0?window.visualViewport.height:J;w>0&&M>m/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-m,M>=J?1/0:Math.ceil(document.scrollingElement.scrollTop+M-m/2))),document.activeElement.scrollIntoView()}b=!0,r.value.click(),b=!1}f(!0),u.value=!1,n("show",g)},e.transitionDuration)}function se(g){S(),P(),V(!0),u.value=!0,E(),c!==null&&(((g&&g.type.indexOf("key")===0?c.closest('[tabindex]:not([tabindex^="-"])'):void 0)||c).focus(),c=null),v(()=>{E(!0),u.value=!1,n("hide",g)},e.transitionDuration)}function W(g){Ae(()=>{let w=r.value;w===null||w.contains(document.activeElement)===!0||(w=(g!==""?w.querySelector(g):null)||w.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||w.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||w.querySelector("[autofocus], [data-autofocus]")||w,w.focus({preventScroll:!0}))})}function N(g){g&&typeof g.focus=="function"?g.focus({preventScroll:!0}):W(),n("shake");const w=r.value;w!==null&&(w.classList.remove("q-animate--scale"),w.classList.add("q-animate--scale"),d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,r.value!==null&&(w.classList.remove("q-animate--scale"),W())},170))}function O(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&N():(n("escapeKey"),q()))}function V(g){d!==null&&(clearTimeout(d),d=null),(g===!0||o.value===!0)&&(U(!1),e.seamless!==!0&&(a(!1),he(Q),le(O))),g!==!0&&(c=null)}function U(g){g===!0?s!==!0&&(ee<1&&document.body.classList.add("q-body--dialog"),ee++,s=!0):s===!0&&(ee<2&&document.body.classList.remove("q-body--dialog"),ee--,s=!1)}function re(g){b!==!0&&(q(g),n("click",g))}function Z(g){e.persistent!==!0&&e.noBackdropDismiss!==!0?q(g):e.noShake!==!0&&N()}function Q(g){e.allowFocusOutside!==!0&&k.value===!0&&$e(r.value,g.target)!==!0&&W('[tabindex]:not([tabindex="-1"])')}Object.assign(i.proxy,{focus:W,shake:N,__updateRefocusTarget(g){c=g||null}}),z(V);function ce(){return T("div",{role:"dialog","aria-modal":$.value===!0?"true":"false",...l,class:j.value},[T(ve,{name:"q-transition--fade",appear:!0},()=>$.value===!0?T("div",{class:"q-dialog__backdrop fixed-full",style:h.value,"aria-hidden":"true",tabindex:-1,onClick:Z}):null),T(ve,p.value,()=>o.value===!0?T("div",{ref:r,class:X.value,style:h.value,tabindex:-1,...ue.value},ae(t.default)):null)])}return L}});export{Ft as Q,Re as a,je as b,ze as c,Ht as d,zt as e,Pt as f,Wt as g,$t as h,Rt as i,Vt as j,At as k,Dt as l,gt as m,Ot as n,Ke as o,De as u};

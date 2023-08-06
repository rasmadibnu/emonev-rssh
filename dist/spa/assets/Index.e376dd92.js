import{Q as et,a as tt}from"./QHeader.515f0edf.js";import{u as at,a as nt,b as rt,Q as me,c as H}from"./uid.e230f7cc.js";import{r as ot,Q as Ae}from"./QSelect.f039e804.js";import{ai as Ke,a4 as G,am as it,ap as lt,S as ie,aq as pe,a6 as Be,m as ee,U as he,r as P,a as m,w as Z,j as te,h as S,T as st,cw as ut,b as ae,n as ct,bb as dt,c as ne,g as vt,i as Fe,e as J,o as Qe,d as ft,cx as Ee,f as Oe,R as gt,M as mt,aB as pt,k as le,af as ht,aA as bt,ab as yt,a2 as wt,ax as xt,l as Pt,a7 as Tt,an as _t,ao as St,V as ye,_ as Ct,p as kt,I as qt,q as At,t as Bt,x as $t,y as q,z as b,K as V,B as X,C as Rt,J as Lt,bL as It,bK as Mt}from"./index.bac37d25.js";import{g as $e,s as Re}from"./touch.3df10340.js";import{m as Dt,o as be,b as Le}from"./QDialog.56021862.js";import{Q as Vt}from"./QScrollObserver.0b20df3d.js";import{Q as Kt}from"./QPage.85b3fbe9.js";import{Q as Ft,a as Qt}from"./QLayout.80a3c520.js";import{A as Et}from"./vue3-apexcharts.common.3774ebf0.js";function Ot(e){const r=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((a,t)=>{const i=parseFloat(a);i&&(r[t]=i)}),r}var Nt=Ke({name:"touch-swipe",beforeMount(e,{value:r,arg:a,modifiers:t}){if(t.mouse!==!0&&G.has.touch!==!0)return;const i=t.mouseCapture===!0?"Capture":"",n={handler:r,sensitivity:Ot(a),direction:$e(t),noop:it,mouseStart(l){Re(l,n)&&lt(l)&&(ie(n,"temp",[[document,"mousemove","move",`notPassive${i}`],[document,"mouseup","end","notPassiveCapture"]]),n.start(l,!0))},touchStart(l){if(Re(l,n)){const c=l.target;ie(n,"temp",[[c,"touchmove","move","notPassiveCapture"],[c,"touchcancel","end","notPassiveCapture"],[c,"touchend","end","notPassiveCapture"]]),n.start(l)}},start(l,c){G.is.firefox===!0&&pe(e,!0);const R=Be(l);n.event={x:R.left,y:R.top,time:Date.now(),mouse:c===!0,dir:!1}},move(l){if(n.event===void 0)return;if(n.event.dir!==!1){ee(l);return}const c=Date.now()-n.event.time;if(c===0)return;const R=Be(l),K=R.left-n.event.x,x=Math.abs(K),y=R.top-n.event.y,f=Math.abs(y);if(n.event.mouse!==!0){if(x<n.sensitivity[1]&&f<n.sensitivity[1]){n.end(l);return}}else if(window.getSelection().toString()!==""){n.end(l);return}else if(x<n.sensitivity[2]&&f<n.sensitivity[2])return;const p=x/c,C=f/c;n.direction.vertical===!0&&x<f&&x<100&&C>n.sensitivity[0]&&(n.event.dir=y<0?"up":"down"),n.direction.horizontal===!0&&x>f&&f<100&&p>n.sensitivity[0]&&(n.event.dir=K<0?"left":"right"),n.direction.up===!0&&x<f&&y<0&&x<100&&C>n.sensitivity[0]&&(n.event.dir="up"),n.direction.down===!0&&x<f&&y>0&&x<100&&C>n.sensitivity[0]&&(n.event.dir="down"),n.direction.left===!0&&x>f&&K<0&&f<100&&p>n.sensitivity[0]&&(n.event.dir="left"),n.direction.right===!0&&x>f&&K>0&&f<100&&p>n.sensitivity[0]&&(n.event.dir="right"),n.event.dir!==!1?(ee(l),n.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Dt(),n.styleCleanup=k=>{n.styleCleanup=void 0,document.body.classList.remove("non-selectable");const F=()=>{document.body.classList.remove("no-pointer-events--children")};k===!0?setTimeout(F,50):F()}),n.handler({evt:l,touch:n.event.mouse!==!0,mouse:n.event.mouse,direction:n.event.dir,duration:c,distance:{x,y:f}})):n.end(l)},end(l){n.event!==void 0&&(he(n,"temp"),G.is.firefox===!0&&pe(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(!0),l!==void 0&&n.event.dir!==!1&&ee(l),n.event=void 0)}};if(e.__qtouchswipe=n,t.mouse===!0){const l=t.mouseCapture===!0||t.mousecapture===!0?"Capture":"";ie(n,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}G.has.touch===!0&&ie(n,"main",[[e,"touchstart","touchStart",`passive${t.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,r){const a=e.__qtouchswipe;a!==void 0&&(r.oldValue!==r.value&&(typeof r.value!="function"&&a.end(),a.handler=r.value),a.direction=$e(r.modifiers))},beforeUnmount(e){const r=e.__qtouchswipe;r!==void 0&&(he(r,"main"),he(r,"temp"),G.is.firefox===!0&&pe(e,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete e.__qtouchswipe)}});function zt(){const e=new Map;return{getCache:function(r,a){return e[r]===void 0?e[r]=a:e[r]},getCacheWithFn:function(r,a){return e[r]===void 0?e[r]=a():e[r]}}}const Ut={name:{required:!0},disable:Boolean},Ie={setup(e,{slots:r}){return()=>S("div",{class:"q-panel scroll",role:"tabpanel"},ae(r.default))}},Wt={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},jt=["update:modelValue","beforeTransition","transition"];function Yt(){const{props:e,emit:r,proxy:a}=te(),{getCacheWithFn:t}=zt();let i,n;const l=P(null),c=P(null);function R(v){const w=e.vertical===!0?"up":"left";$((a.$q.lang.rtl===!0?-1:1)*(v.direction===w?1:-1))}const K=m(()=>[[Nt,R,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),x=m(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),y=m(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),f=m(()=>`--q-transition-duration: ${e.transitionDuration}ms`),p=m(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),C=m(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),k=m(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);Z(()=>e.modelValue,(v,w)=>{const M=u(v)===!0?B(v):-1;n!==!0&&A(M===-1?0:M<B(w)?-1:1),l.value!==M&&(l.value=M,r("beforeTransition",v,w),ct(()=>{r("transition",v,w)}))});function F(){$(1)}function E(){$(-1)}function W(v){r("update:modelValue",v)}function u(v){return v!=null&&v!==""}function B(v){return i.findIndex(w=>w.props.name===v&&w.props.disable!==""&&w.props.disable!==!0)}function I(){return i.filter(v=>v.props.disable!==""&&v.props.disable!==!0)}function A(v){const w=v!==0&&e.animated===!0&&l.value!==-1?"q-transition--"+(v===-1?x.value:y.value):null;c.value!==w&&(c.value=w)}function $(v,w=l.value){let M=w+v;for(;M>-1&&M<i.length;){const N=i[M];if(N!==void 0&&N.props.disable!==""&&N.props.disable!==!0){A(v),n=!0,r("update:modelValue",N.props.name),setTimeout(()=>{n=!1});return}M+=v}e.infinite===!0&&i.length!==0&&w!==-1&&w!==i.length&&$(v,v===-1?i.length:-1)}function D(){const v=B(e.modelValue);return l.value!==v&&(l.value=v),!0}function Q(){const v=u(e.modelValue)===!0&&D()&&i[l.value];return e.keepAlive===!0?[S(dt,C.value,[S(k.value===!0?t(p.value,()=>({...Ie,name:p.value})):Ie,{key:p.value,style:f.value},()=>v)])]:[S("div",{class:"q-panel scroll",style:f.value,key:p.value,role:"tabpanel"},[v])]}function ue(){if(i.length!==0)return e.animated===!0?[S(st,{name:c.value},Q)]:Q()}function ce(v){return i=ut(ae(v.default,[])).filter(w=>w.props!==null&&w.props.slot===void 0&&u(w.props.name)===!0),i.length}function de(){return i}return Object.assign(a,{next:F,previous:E,goTo:W}),{panelIndex:l,panelDirectives:K,updatePanelsList:ce,updatePanelIndex:D,getPanelContent:ue,getEnabledPanels:I,getPanels:de,isValidPanelName:u,keepAliveProps:C,needsUniqueKeepAliveWrapper:k,goToPanelByOffset:$,goToPanel:W,nextPanel:F,previousPanel:E}}var Me=ne({name:"QTabPanel",props:Ut,setup(e,{slots:r}){return()=>S("div",{class:"q-tab-panel",role:"tabpanel"},ae(r.default))}}),Ht=ne({name:"QTabPanels",props:{...Wt,...at},emits:jt,setup(e,{slots:r}){const a=te(),t=nt(e,a.proxy.$q),{updatePanelsList:i,getPanelContent:n,panelDirectives:l}=Yt(),c=m(()=>"q-tab-panels q-panel-parent"+(t.value===!0?" q-tab-panels--dark q-dark":""));return()=>(i(r),vt("div",{class:c.value},n(),"pan",e.swipeable,()=>l.value))}});let Jt=0;const Xt=["click","keydown"],Gt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Jt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Zt(e,r,a,t){const i=Fe(Ee,J);if(i===J)return console.error("QTab/QRouteTab component needs to be child of QTabs"),J;const{proxy:n}=te(),l=P(null),c=P(null),R=P(null),K=m(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),x=m(()=>i.currentModel.value===e.name),y=m(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(x.value===!0?" q-tab--active"+(i.tabProps.value.activeClass?" "+i.tabProps.value.activeClass:"")+(i.tabProps.value.activeColor?` text-${i.tabProps.value.activeColor}`:"")+(i.tabProps.value.activeBgColor?` bg-${i.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&i.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||i.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(t!==void 0?t.linkClass.value:"")),f=m(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(i.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),p=m(()=>e.disable===!0||i.hasFocus.value===!0||x.value===!1&&i.hasActiveTab.value===!0?-1:e.tabindex||0);function C(u,B){if(B!==!0&&l.value!==null&&l.value.focus(),e.disable===!0){t!==void 0&&t.hasRouterLink.value===!0&&ee(u);return}if(t===void 0){i.updateModel({name:e.name}),a("click",u);return}if(t.hasRouterLink.value===!0){const I=(A={})=>{let $;const D=A.to===void 0||bt(A.to,e.to)===!0?i.avoidRouteWatcher=rt():null;return t.navigateToRouterLink(u,{...A,returnRouterError:!0}).catch(Q=>{$=Q}).then(Q=>{if(D===i.avoidRouteWatcher&&(i.avoidRouteWatcher=!1,$===void 0&&(Q===void 0||Q.message.startsWith("Avoided redundant navigation")===!0)&&i.updateModel({name:e.name})),A.returnRouterError===!0)return $!==void 0?Promise.reject($):Q})};a("click",u,I),u.defaultPrevented!==!0&&I();return}a("click",u)}function k(u){mt(u,[13,32])?C(u,!0):pt(u)!==!0&&u.keyCode>=35&&u.keyCode<=40&&u.altKey!==!0&&u.metaKey!==!0&&i.onKbdNavigate(u.keyCode,n.$el)===!0&&ee(u),a("keydown",u)}function F(){const u=i.tabProps.value.narrowIndicator,B=[],I=S("div",{ref:R,class:["q-tab__indicator",i.tabProps.value.indicatorClass]});e.icon!==void 0&&B.push(S(le,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&B.push(S("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&B.push(e.alertIcon!==void 0?S(le,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):S("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),u===!0&&B.push(I);const A=[S("div",{class:"q-focus-helper",tabindex:-1,ref:l}),S("div",{class:f.value},ht(r.default,B))];return u===!1&&A.push(I),A}const E={name:m(()=>e.name),rootRef:c,tabIndicatorRef:R,routeData:t};Qe(()=>{i.unregisterTab(E)}),ft(()=>{i.registerTab(E)});function W(u,B){const I={ref:c,class:y.value,tabindex:p.value,role:"tab","aria-selected":x.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:C,onKeydown:k,...B};return Oe(S(u,I,F()),[[gt,K.value]])}return{renderTab:W,$tabs:i}}var De=ne({name:"QTab",props:Gt,emits:Xt,setup(e,{slots:r,emit:a}){const{renderTab:t}=Zt(e,r,a);return()=>t("div")}});function ea(e,r,a){const t=a===!0?["left","right"]:["top","bottom"];return`absolute-${r===!0?t[0]:t[1]}${e?` text-${e}`:""}`}const ta=["left","center","right","justify"];var aa=ne({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>ta.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:r,emit:a}){const{proxy:t}=te(),{$q:i}=t,{registerTick:n}=be(),{registerTick:l}=be(),{registerTick:c}=be(),{registerTimeout:R,removeTimeout:K}=Le(),{registerTimeout:x,removeTimeout:y}=Le(),f=P(null),p=P(null),C=P(e.modelValue),k=P(!1),F=P(!0),E=P(!1),W=P(!1),u=[],B=P(0),I=P(!1);let A=null,$=null,D;const Q=m(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:ea(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),ue=m(()=>{const o=B.value,s=C.value;for(let d=0;d<o;d++)if(u[d].name.value===s)return!0;return!1}),ce=m(()=>`q-tabs__content--align-${k.value===!0?"left":W.value===!0?"justify":e.align}`),de=m(()=>`q-tabs row no-wrap items-center q-tabs--${k.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),v=m(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+ce.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),w=m(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),M=m(()=>e.vertical!==!0&&i.lang.rtl===!0),N=m(()=>ot===!1&&M.value===!0);Z(M,Y),Z(()=>e.modelValue,o=>{ve({name:o,setCurrent:!0,skipEmit:!0})}),Z(()=>e.outsideArrows,re);function ve({name:o,setCurrent:s,skipEmit:d}){C.value!==o&&(d!==!0&&e["onUpdate:modelValue"]!==void 0&&a("update:modelValue",o),(s===!0||e["onUpdate:modelValue"]===void 0)&&(Ne(C.value,o),C.value=o))}function re(){n(()=>{we({width:f.value.offsetWidth,height:f.value.offsetHeight})})}function we(o){if(w.value===void 0||p.value===null)return;const s=o[w.value.container],d=Math.min(p.value[w.value.scroll],Array.prototype.reduce.call(p.value.children,(_,h)=>_+(h[w.value.content]||0),0)),T=s>0&&d>s;k.value=T,T===!0&&l(Y),W.value=s<parseInt(e.breakpoint,10)}function Ne(o,s){const d=o!=null&&o!==""?u.find(_=>_.name.value===o):null,T=s!=null&&s!==""?u.find(_=>_.name.value===s):null;if(d&&T){const _=d.tabIndicatorRef.value,h=T.tabIndicatorRef.value;A!==null&&(clearTimeout(A),A=null),_.style.transition="none",_.style.transform="none",h.style.transition="none",h.style.transform="none";const g=_.getBoundingClientRect(),L=h.getBoundingClientRect();h.style.transform=e.vertical===!0?`translate3d(0,${g.top-L.top}px,0) scale3d(1,${L.height?g.height/L.height:1},1)`:`translate3d(${g.left-L.left}px,0,0) scale3d(${L.width?g.width/L.width:1},1,1)`,c(()=>{A=setTimeout(()=>{A=null,h.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",h.style.transform="none"},70)})}T&&k.value===!0&&j(T.rootRef.value)}function j(o){const{left:s,width:d,top:T,height:_}=p.value.getBoundingClientRect(),h=o.getBoundingClientRect();let g=e.vertical===!0?h.top-T:h.left-s;if(g<0){p.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(g),Y();return}g+=e.vertical===!0?h.height-_:h.width-d,g>0&&(p.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(g),Y())}function Y(){const o=p.value;if(o===null)return;const s=o.getBoundingClientRect(),d=e.vertical===!0?o.scrollTop:Math.abs(o.scrollLeft);M.value===!0?(F.value=Math.ceil(d+s.width)<o.scrollWidth-1,E.value=d>0):(F.value=d>0,E.value=e.vertical===!0?Math.ceil(d+s.height)<o.scrollHeight:Math.ceil(d+s.width)<o.scrollWidth)}function xe(o){$!==null&&clearInterval($),$=setInterval(()=>{We(o)===!0&&z()},5)}function Pe(){xe(N.value===!0?Number.MAX_SAFE_INTEGER:0)}function Te(){xe(N.value===!0?0:Number.MAX_SAFE_INTEGER)}function z(){$!==null&&(clearInterval($),$=null)}function ze(o,s){const d=Array.prototype.filter.call(p.value.children,L=>L===s||L.matches&&L.matches(".q-tab.q-focusable")===!0),T=d.length;if(T===0)return;if(o===36)return j(d[0]),d[0].focus(),!0;if(o===35)return j(d[T-1]),d[T-1].focus(),!0;const _=o===(e.vertical===!0?38:37),h=o===(e.vertical===!0?40:39),g=_===!0?-1:h===!0?1:void 0;if(g!==void 0){const L=M.value===!0?-1:1,O=d.indexOf(s)+g*L;return O>=0&&O<T&&(j(d[O]),d[O].focus({preventScroll:!0})),!0}}const Ue=m(()=>N.value===!0?{get:o=>Math.abs(o.scrollLeft),set:(o,s)=>{o.scrollLeft=-s}}:e.vertical===!0?{get:o=>o.scrollTop,set:(o,s)=>{o.scrollTop=s}}:{get:o=>o.scrollLeft,set:(o,s)=>{o.scrollLeft=s}});function We(o){const s=p.value,{get:d,set:T}=Ue.value;let _=!1,h=d(s);const g=o<h?-1:1;return h+=g*5,h<0?(_=!0,h=0):(g===-1&&h<=o||g===1&&h>=o)&&(_=!0,h=o),T(s,h),Y(),_}function _e(o,s){for(const d in o)if(o[d]!==s[d])return!1;return!0}function je(){let o=null,s={matchedLen:0,queryDiff:9999,hrefLen:0};const d=u.filter(g=>g.routeData!==void 0&&g.routeData.hasRouterLink.value===!0),{hash:T,query:_}=t.$route,h=Object.keys(_).length;for(const g of d){const L=g.routeData.exact.value===!0;if(g.routeData[L===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:O,query:fe,matched:Ge,href:Ze}=g.routeData.resolvedLink.value,ge=Object.keys(fe).length;if(L===!0){if(O!==T||ge!==h||_e(_,fe)===!1)continue;o=g.name.value;break}if(O!==""&&O!==T||ge!==0&&_e(fe,_)===!1)continue;const U={matchedLen:Ge.length,queryDiff:h-ge,hrefLen:Ze.length-O.length};if(U.matchedLen>s.matchedLen){o=g.name.value,s=U;continue}else if(U.matchedLen!==s.matchedLen)continue;if(U.queryDiff<s.queryDiff)o=g.name.value,s=U;else if(U.queryDiff!==s.queryDiff)continue;U.hrefLen>s.hrefLen&&(o=g.name.value,s=U)}o===null&&u.some(g=>g.routeData===void 0&&g.name.value===C.value)===!0||ve({name:o,setCurrent:!0})}function Ye(o){if(K(),I.value!==!0&&f.value!==null&&o.target&&typeof o.target.closest=="function"){const s=o.target.closest(".q-tab");s&&f.value.contains(s)===!0&&(I.value=!0,k.value===!0&&j(s))}}function He(){R(()=>{I.value=!1},30)}function oe(){Ce.avoidRouteWatcher===!1?x(je):y()}function Se(){if(D===void 0){const o=Z(()=>t.$route.fullPath,oe);D=()=>{o(),D=void 0}}}function Je(o){u.push(o),B.value++,re(),o.routeData===void 0||t.$route===void 0?x(()=>{if(k.value===!0){const s=C.value,d=s!=null&&s!==""?u.find(T=>T.name.value===s):null;d&&j(d.rootRef.value)}}):(Se(),o.routeData.hasRouterLink.value===!0&&oe())}function Xe(o){u.splice(u.indexOf(o),1),B.value--,re(),D!==void 0&&o.routeData!==void 0&&(u.every(s=>s.routeData===void 0)===!0&&D(),oe())}const Ce={currentModel:C,tabProps:Q,hasFocus:I,hasActiveTab:ue,registerTab:Je,unregisterTab:Xe,verifyRouteModel:oe,updateModel:ve,onKbdNavigate:ze,avoidRouteWatcher:!1};yt(Ee,Ce);function ke(){A!==null&&clearTimeout(A),z(),D!==void 0&&D()}let qe;return Qe(ke),wt(()=>{qe=D!==void 0,ke()}),xt(()=>{qe===!0&&Se(),re()}),()=>S("div",{ref:f,class:de.value,role:"tablist",onFocusin:Ye,onFocusout:He},[S(Vt,{onResize:we}),S("div",{ref:p,class:v.value,onScroll:Y},ae(r.default)),S(le,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(F.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||i.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Pe,onTouchstartPassive:Pe,onMouseupPassive:z,onMouseleavePassive:z,onTouchendPassive:z}),S(le,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(E.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||i.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Te,onTouchstartPassive:Te,onMouseupPassive:z,onMouseleavePassive:z,onTouchendPassive:z})])}});const na={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function ra(){const{props:e,proxy:{$q:r}}=te(),a=Fe(Pt,J);if(a===J)return console.error("QPageSticky needs to be child of QLayout"),J;const t=m(()=>{const y=e.position;return{top:y.indexOf("top")>-1,right:y.indexOf("right")>-1,bottom:y.indexOf("bottom")>-1,left:y.indexOf("left")>-1,vertical:y==="top"||y==="bottom",horizontal:y==="left"||y==="right"}}),i=m(()=>a.header.offset),n=m(()=>a.right.offset),l=m(()=>a.footer.offset),c=m(()=>a.left.offset),R=m(()=>{let y=0,f=0;const p=t.value,C=r.lang.rtl===!0?-1:1;p.top===!0&&i.value!==0?f=`${i.value}px`:p.bottom===!0&&l.value!==0&&(f=`${-l.value}px`),p.left===!0&&c.value!==0?y=`${C*c.value}px`:p.right===!0&&n.value!==0&&(y=`${-C*n.value}px`);const k={transform:`translate(${y}, ${f})`};return e.offset&&(k.margin=`${e.offset[1]}px ${e.offset[0]}px`),p.vertical===!0?(c.value!==0&&(k[r.lang.rtl===!0?"right":"left"]=`${c.value}px`),n.value!==0&&(k[r.lang.rtl===!0?"left":"right"]=`${n.value}px`)):p.horizontal===!0&&(i.value!==0&&(k.top=`${i.value}px`),l.value!==0&&(k.bottom=`${l.value}px`)),k}),K=m(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function x(y){const f=ae(y.default);return S("div",{class:K.value,style:R.value},e.expand===!0?f:[S("div",f)])}return{$layout:a,getStickyContent:x}}var oa=ne({name:"QPageSticky",props:na,setup(e,{slots:r}){const{getStickyContent:a}=ra();return()=>a(r)}});function Ve(e,{value:r,oldValue:a}){if(typeof r!="function"){e.scrollTarget.removeEventListener("scroll",e.scroll,ye.passive);return}e.handler=r,typeof a!="function"&&e.scrollTarget.addEventListener("scroll",e.scroll,ye.passive)}var ia=Ke({name:"scroll",mounted(e,r){const a={scrollTarget:Tt(e),scroll(){a.handler(_t(a.scrollTarget),St(a.scrollTarget))}};Ve(a,r),e.__qscroll=a},updated(e,r){e.__qscroll!==void 0&&r.oldValue!==r.value&&Ve(e.__qscroll,r)},beforeUnmount(e){const r=e.__qscroll;r.scrollTarget.removeEventListener("scroll",r.scroll,ye.passive),delete e.__qscroll}});const la=kt({components:{Apex:Et},setup(){const e=qt(),r=[{nama:"Aceh",budget:a(),average:t()},{nama:"Bali",budget:a(),average:t()},{nama:"Bangka Belitung",budget:a(),average:t()},{nama:"Banten",budget:a(),average:t()},{nama:"Bengkulu",budget:a(),average:t()},{nama:"Gorontalo",budget:a(),average:t()},{nama:"Jambi",budget:a(),average:t()},{nama:"Jawa Barat",budget:a(),average:t()},{nama:"Jawa Tengah",budget:a(),average:t()},{nama:"Jawa Timur",budget:a(),average:t()},{nama:"Kalimantan Barat",budget:a(),average:t()},{nama:"Kalimantan Selatan",budget:a(),average:t()},{nama:"Kalimantan Tengah",budget:a(),average:t()},{nama:"Kalimantan Timur",budget:a(),average:t()},{nama:"Kalimantan Utara",budget:a(),average:t()},{nama:"Kepulauan Riau",budget:a(),average:t()},{nama:"Lampung",budget:a(),average:t()},{nama:"Maluku",budget:a(),average:t()},{nama:"Maluku Utara",budget:a(),average:t()},{nama:"Nusa Tenggara Barat",budget:a(),average:t()},{nama:"Nusa Tenggara Timur",budget:a(),average:t()},{nama:"Papua",budget:a(),average:t()},{nama:"Papua Barat",budget:a(),average:t()},{nama:"Riau",budget:a(),average:t()},{nama:"Sulawesi Barat",budget:a(),average:t()},{nama:"Sulawesi Selatan",budget:a(),average:t()},{nama:"Sulawesi Tengah",budget:a(),average:t()},{nama:"Sulawesi Tenggara",budget:a(),average:t()},{nama:"Sulawesi Utara",budget:a(),average:t()},{nama:"Sumatera Barat",budget:a(),average:t()},{nama:"Sumatera Selatan",budget:a(),average:t()},{nama:"Sumatera Utara",budget:a(),average:t()},{nama:"Yogyakarta",budget:a(),average:t()}];function a(){return Math.floor(Math.random()*9e9)+1e9}function t(){const R=(Math.random()*3.9+.1).toFixed(2);return parseFloat(R)}const i=structuredClone(r).sort((n,l)=>l.budget-n.budget);return structuredClone(r).sort((n,l)=>l.average-n.average),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),{authStore:e,isReveal:P(!0),series:[{data:[0,14.3,41.9,25.7,40]}],chartOptions:{chart:{type:"bar",height:350},colors:["#FF6E31"],plotOptions:{bar:{barHeight:"60%",horizontal:!0}},fill:{type:"gradient",gradient:{shade:"transparent",type:"horizontal",shadeIntensity:.5,gradientToColors:void 0,inverseColors:!0,opacityFrom:0,opacityTo:1,stops:[0,70,100],colorStops:[]}},dataLabels:{enabled:!1},xaxis:{categories:["BLT","SKPD Non Dinkes","CSR","Dana Desa","SK (Forum Kemitraan)"]}},series2:[{data:i.map(n=>n.budget)}],chartOptions2:{yaxis:{labels:{formatter:function(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}},chart:{type:"bar",height:350},colors:["#243763"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:i.map(n=>n.nama)},fill:{opacity:1}},seriesPercentage:[{name:"Presentase",data:[]}],chartOptionsPercentage:{chart:{type:"bar",height:350},colors:["#243763"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{formatter:function(n){return`${parseFloat(n).toFixed(2)}%`}},stroke:{show:!0,width:2,colors:["transparent"]},yaxis:{labels:{formatter:function(n){return`${parseFloat(n).toFixed(2)}%`}}},xaxis:{categories:[]},fill:{opacity:1}},seriesProvince:P([{name:"AIDS",data:[]},{name:"TBC",data:[]},{name:"MALARIA",data:[]}]),chartOptionsProvince:P({chart:{type:"bar",height:350},colors:["#243763","#FF6E31","#9384D1"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{formatter:function(n){return`${parseFloat(n).toFixed(2)}%`}},yaxis:{labels:{formatter:function(n){return`${parseFloat(n).toFixed(2)}%`}}},xaxis:{categories:[]},fill:{opacity:1},legend:{position:"top",itemMargin:{vertical:20}}}),year:P(null),list_year:P([]),options_province:P([]),list_province:P([]),province:P(null),tab:P("Dashboard1")}},mounted(){this.getYear()},methods:{getYear(){this.$api.get("/forms?Limit=-").then(e=>(this.list_year=e.data.data.Rows.map(r=>({label:r.Year,value:r.ID})),this.list_year)).then(e=>{const r=new Date().getFullYear(),a=e.find(t=>t.label==r);a?this.year=a.value:this.year=e[0].value,this.getPrecentage(this.year)}).catch(e=>{console.log(e)})},onScroll(e){e>100?this.isReveal=!1:this.isReveal=!0},getPrecentage(e){const r=this.list_year.find(a=>a.value==e);this.$api.get("/result/"+r.label+"/percentage").then(a=>(this.seriesPercentage[0].data=a.data.data.map(t=>t.percentage),this.chartOptionsPercentage.xaxis.categories=a.data.data.map(t=>t.name),this.options_province=a.data.data.map(t=>({label:t.name,value:t.id})),this.list_province=this.options_province,a)).then(a=>{this.$refs.chartPercentage.refresh(),this.province=this.list_province[0].value,this.findProvince(this.list_province[0].value)}).catch(a=>{console.log(a)})},filterProvince(e,r){if(e===""){r(()=>{this.list_province=this.options_province});return}r(()=>{const a=e.toLowerCase();this.list_province=this.options_province.filter(t=>t.label.toLowerCase().indexOf(a)>-1)})},findProvince(e){const r=this.list_year.find(a=>a.value==this.year);return this.$api.get("/result/"+r.label+"/percentage/"+e).then(a=>(this.chartOptionsProvince.xaxis.categories=a.data.data.map(t=>t.name),this.seriesProvince[0].data=a.data.data.map(t=>t.percentage.aids),this.seriesProvince[1].data=a.data.data.map(t=>t.percentage.malaria),this.seriesProvince[2].data=a.data.data.map(t=>t.percentage.tbc),a)).then(a=>{this.$refs.chartProvince.refresh()}).catch(a=>{console.log(a)})}}}),se=e=>(It("data-v-41f473a3"),e=e(),Mt(),e),sa=se(()=>V("div",{class:"tw-font-bold tw-py-3 text-center tw-flex tw-justify-center tw-flex-col tw-w-full"},[V("div",{class:"tw-text-4xl"},[V("span",{class:"text-secondary"},"e"),X("Monev ")]),V("div",{class:"tw-uppercase tw-text-xs md:tw-text-lg text-center"},[X(" Sistem Informasi ADINKES"),V("br"),X(" Monitoring Evaluasi Capaian RSSH - ATM ")])],-1)),ua={class:"tw-max-w-6xl xl:tw-mx-auto tw-mx-5 tw-space-y-8"},ca=se(()=>V("div",{class:"text-primary tw-text-xl"}," Persentase Anggaran ATM Terhadap Bidang Kesehatan Provinsi ",-1)),da={class:"text-center tw-py-10"},va=se(()=>V("div",{class:"text-center tw-text-2xl"},"On Progress",-1)),fa={class:"bg-primary tw-w-full"},ga={class:"tw-flex tw-justify-between text-white tw-max-w-6xl xl:tw-mx-auto tw-mx-5 tw-py-3"},ma={class:"tw-flex tw-items-center tw-gap-4"},pa=se(()=>V("span",{class:"tw-text-gray-400"},"Tahun Terpilih",-1));function ha(e,r,a,t,i,n){const l=At("apex");return Oe((Bt(),$t(Ft,{view:"hHh lpR fFf"},{default:q(()=>[b(tt,{reveal:"",modelValue:e.isReveal,"onUpdate:modelValue":r[0]||(r[0]=c=>e.isReveal=c),class:"bg-white text-primary"},{default:q(()=>[b(et,null,{default:q(()=>[sa]),_:1})]),_:1},8,["modelValue"]),b(Qt,{class:"tw-bg-gray-50"},{default:q(()=>[b(Kt,{class:"tw-pt-36"},{default:q(()=>[b(Ht,{modelValue:e.tab,"onUpdate:modelValue":r[2]||(r[2]=c=>e.tab=c),animated:"",class:"tw-bg-gray-50"},{default:q(()=>[b(Me,{name:"Dashboard1"},{default:q(()=>[V("div",ua,[b(me,{flat:""},{default:q(()=>[b(H,{class:"text-primary tw-text-xl"},{default:q(()=>[X(" Persentase capaian kemitraan untuk ATM ")]),_:1}),b(H,{class:"q-pt-none"},{default:q(()=>[b(l,{type:"bar",height:"250",options:e.chartOptions,series:e.series},null,8,["options","series"])]),_:1})]),_:1}),b(me,{flat:""},{default:q(()=>[b(H,{class:"text-primary tw-text-xl"},{default:q(()=>[X(" Persentase Anggaran ATM Terhadap Bidang Kesehatan ")]),_:1}),b(H,{class:"q-pt-none"},{default:q(()=>[b(l,{type:"bar",height:"350",options:e.chartOptionsPercentage,series:e.seriesPercentage,ref:"chartPercentage"},null,8,["options","series"])]),_:1})]),_:1}),b(me,{flat:""},{default:q(()=>[b(H,{class:"tw-flex tw-justify-between tw-items-center"},{default:q(()=>[ca,b(Ae,{options:e.list_province,label:"Provinsi",modelValue:e.province,"onUpdate:modelValue":[r[1]||(r[1]=c=>e.province=c),e.findProvince],"map-options":"","emit-value":"","use-input":"",onFilter:e.filterProvince},null,8,["options","modelValue","onFilter","onUpdate:modelValue"])]),_:1}),b(H,{class:"q-pt-none"},{default:q(()=>[b(l,{type:"bar",height:"350",options:e.chartOptionsProvince,series:e.seriesProvince,ref:"chartProvince"},null,8,["options","series"])]),_:1})]),_:1}),V("footer",da,Rt(new Date().getFullYear())+" \xA9 Copyright All Right Reserved ",1)])]),_:1}),b(Me,{name:"Dashboard2"},{default:q(()=>[va]),_:1})]),_:1},8,["modelValue"]),b(oa,{class:"tw-z-50",expand:"",position:"top"},{default:q(()=>[V("div",fa,[V("div",ga,[V("div",ma,[pa,X(" / "),b(Ae,{class:"my-select",options:e.list_year,modelValue:e.year,"onUpdate:modelValue":r[3]||(r[3]=c=>e.year=c),borderless:"",dense:"","map-options":"","emit-value":""},null,8,["options","modelValue"])]),b(Lt,{color:"secondary",label:e.authStore.token?"Dashabord":"Masuk",to:{name:e.authStore.token?"beranda":"login"},unelevated:"","no-caps":""},null,8,["label","to"])]),b(aa,{modelValue:e.tab,"onUpdate:modelValue":r[4]||(r[4]=c=>e.tab=c),align:"justify","no-caps":"",class:"text-white"},{default:q(()=>[b(De,{name:"Dashboard1",label:"Rekapitulasi Anggaran ATM"}),b(De,{name:"Dashboard2",label:"Rekapitulasi Per Provinsi"})]),_:1},8,["modelValue"])])]),_:1})]),_:1})]),_:1})]),_:1})),[[ia,e.onScroll]])}var qa=Ct(la,[["render",ha],["__scopeId","data-v-41f473a3"]]);export{qa as default};

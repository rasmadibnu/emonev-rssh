import{Q as et,a as tt}from"./QHeader.069ff32f.js";import{u as at,a as nt,b as ot,Q as pe,c as U}from"./uid.5390cda5.js";import{ai as Qe,a4 as J,am as rt,ap as it,S as ie,aq as he,a6 as Ae,m as ee,U as me,r as P,a as h,w as Z,j as te,h as C,T as lt,cw as st,b as ae,n as ut,bb as ct,c as ne,g as dt,i as Fe,e as X,o as Ee,d as ft,cx as Oe,f as Ke,R as vt,M as pt,aB as ht,k as le,af as mt,aA as bt,ab as gt,a2 as yt,ax as wt,l as xt,a7 as Pt,an as _t,ao as Tt,V as ge,_ as Ct,p as St,I as qt,q as kt,t as At,x as $t,y as k,z as b,K as Q,B as G,C as Rt,J as Lt,bL as It,bK as Bt}from"./index.373a2fa6.js";import{g as $e,s as Re}from"./touch.3df10340.js";import{n as Dt,p as be,b as Le}from"./QDialog.c29f1e35.js";import{r as Mt,Q as Ie}from"./QMarkupTable.055156b0.js";import{Q as Vt}from"./QTable.08dbe4db.js";import{Q as Qt}from"./QScrollObserver.7c100212.js";import{Q as Ft}from"./QPage.689dc5cc.js";import{Q as Et,a as Ot}from"./QLayout.58d8a226.js";import{A as Kt}from"./vue3-apexcharts.common.176bb448.js";import"./QList.d0cf44d3.js";function Nt(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((a,i)=>{const n=parseFloat(a);n&&(t[i]=n)}),t}var zt=Qe({name:"touch-swipe",beforeMount(e,{value:t,arg:a,modifiers:i}){if(i.mouse!==!0&&J.has.touch!==!0)return;const n=i.mouseCapture===!0?"Capture":"",r={handler:t,sensitivity:Nt(a),direction:$e(i),noop:rt,mouseStart(s){Re(s,r)&&it(s)&&(ie(r,"temp",[[document,"mousemove","move",`notPassive${n}`],[document,"mouseup","end","notPassiveCapture"]]),r.start(s,!0))},touchStart(s){if(Re(s,r)){const d=s.target;ie(r,"temp",[[d,"touchmove","move","notPassiveCapture"],[d,"touchcancel","end","notPassiveCapture"],[d,"touchend","end","notPassiveCapture"]]),r.start(s)}},start(s,d){J.is.firefox===!0&&he(e,!0);const I=Ae(s);r.event={x:I.left,y:I.top,time:Date.now(),mouse:d===!0,dir:!1}},move(s){if(r.event===void 0)return;if(r.event.dir!==!1){ee(s);return}const d=Date.now()-r.event.time;if(d===0)return;const I=Ae(s),V=I.left-r.event.x,x=Math.abs(V),y=I.top-r.event.y,v=Math.abs(y);if(r.event.mouse!==!0){if(x<r.sensitivity[1]&&v<r.sensitivity[1]){r.end(s);return}}else if(window.getSelection().toString()!==""){r.end(s);return}else if(x<r.sensitivity[2]&&v<r.sensitivity[2])return;const m=x/d,S=v/d;r.direction.vertical===!0&&x<v&&x<100&&S>r.sensitivity[0]&&(r.event.dir=y<0?"up":"down"),r.direction.horizontal===!0&&x>v&&v<100&&m>r.sensitivity[0]&&(r.event.dir=V<0?"left":"right"),r.direction.up===!0&&x<v&&y<0&&x<100&&S>r.sensitivity[0]&&(r.event.dir="up"),r.direction.down===!0&&x<v&&y>0&&x<100&&S>r.sensitivity[0]&&(r.event.dir="down"),r.direction.left===!0&&x>v&&V<0&&v<100&&m>r.sensitivity[0]&&(r.event.dir="left"),r.direction.right===!0&&x>v&&V>0&&v<100&&m>r.sensitivity[0]&&(r.event.dir="right"),r.event.dir!==!1?(ee(s),r.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Dt(),r.styleCleanup=q=>{r.styleCleanup=void 0,document.body.classList.remove("non-selectable");const F=()=>{document.body.classList.remove("no-pointer-events--children")};q===!0?setTimeout(F,50):F()}),r.handler({evt:s,touch:r.event.mouse!==!0,mouse:r.event.mouse,direction:r.event.dir,duration:d,distance:{x,y:v}})):r.end(s)},end(s){r.event!==void 0&&(me(r,"temp"),J.is.firefox===!0&&he(e,!1),r.styleCleanup!==void 0&&r.styleCleanup(!0),s!==void 0&&r.event.dir!==!1&&ee(s),r.event=void 0)}};if(e.__qtouchswipe=r,i.mouse===!0){const s=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";ie(r,"main",[[e,"mousedown","mouseStart",`passive${s}`]])}J.has.touch===!0&&ie(r,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const a=e.__qtouchswipe;a!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&a.end(),a.handler=t.value),a.direction=$e(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&(me(t,"main"),me(t,"temp"),J.is.firefox===!0&&he(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchswipe)}});function Wt(){const e=new Map;return{getCache:function(t,a){return e[t]===void 0?e[t]=a:e[t]},getCacheWithFn:function(t,a){return e[t]===void 0?e[t]=a():e[t]}}}const jt={name:{required:!0},disable:Boolean},Be={setup(e,{slots:t}){return()=>C("div",{class:"q-panel scroll",role:"tabpanel"},ae(t.default))}},Ut={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Yt=["update:modelValue","beforeTransition","transition"];function Ht(){const{props:e,emit:t,proxy:a}=te(),{getCacheWithFn:i}=Wt();let n,r;const s=P(null),d=P(null);function I(f){const w=e.vertical===!0?"up":"left";R((a.$q.lang.rtl===!0?-1:1)*(f.direction===w?1:-1))}const V=h(()=>[[zt,I,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),x=h(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),y=h(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),v=h(()=>`--q-transition-duration: ${e.transitionDuration}ms`),m=h(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),S=h(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),q=h(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);Z(()=>e.modelValue,(f,w)=>{const D=u(f)===!0?$(f):-1;r!==!0&&A(D===-1?0:D<$(w)?-1:1),s.value!==D&&(s.value=D,t("beforeTransition",f,w),ut(()=>{t("transition",f,w)}))});function F(){R(1)}function O(){R(-1)}function j(f){t("update:modelValue",f)}function u(f){return f!=null&&f!==""}function $(f){return n.findIndex(w=>w.props.name===f&&w.props.disable!==""&&w.props.disable!==!0)}function B(){return n.filter(f=>f.props.disable!==""&&f.props.disable!==!0)}function A(f){const w=f!==0&&e.animated===!0&&s.value!==-1?"q-transition--"+(f===-1?x.value:y.value):null;d.value!==w&&(d.value=w)}function R(f,w=s.value){let D=w+f;for(;D>-1&&D<n.length;){const N=n[D];if(N!==void 0&&N.props.disable!==""&&N.props.disable!==!0){A(f),r=!0,t("update:modelValue",N.props.name),setTimeout(()=>{r=!1});return}D+=f}e.infinite===!0&&n.length!==0&&w!==-1&&w!==n.length&&R(f,f===-1?n.length:-1)}function M(){const f=$(e.modelValue);return s.value!==f&&(s.value=f),!0}function E(){const f=u(e.modelValue)===!0&&M()&&n[s.value];return e.keepAlive===!0?[C(ct,S.value,[C(q.value===!0?i(m.value,()=>({...Be,name:m.value})):Be,{key:m.value,style:v.value},()=>f)])]:[C("div",{class:"q-panel scroll",style:v.value,key:m.value,role:"tabpanel"},[f])]}function se(){if(n.length!==0)return e.animated===!0?[C(lt,{name:d.value},E)]:E()}function ue(f){return n=st(ae(f.default,[])).filter(w=>w.props!==null&&w.props.slot===void 0&&u(w.props.name)===!0),n.length}function ce(){return n}return Object.assign(a,{next:F,previous:O,goTo:j}),{panelIndex:s,panelDirectives:V,updatePanelsList:ue,updatePanelIndex:M,getPanelContent:se,getEnabledPanels:B,getPanels:ce,isValidPanelName:u,keepAliveProps:S,needsUniqueKeepAliveWrapper:q,goToPanelByOffset:R,goToPanel:j,nextPanel:F,previousPanel:O}}var De=ne({name:"QTabPanel",props:jt,setup(e,{slots:t}){return()=>C("div",{class:"q-tab-panel",role:"tabpanel"},ae(t.default))}}),Xt=ne({name:"QTabPanels",props:{...Ut,...at},emits:Yt,setup(e,{slots:t}){const a=te(),i=nt(e,a.proxy.$q),{updatePanelsList:n,getPanelContent:r,panelDirectives:s}=Ht(),d=h(()=>"q-tab-panels q-panel-parent"+(i.value===!0?" q-tab-panels--dark q-dark":""));return()=>(n(t),dt("div",{class:d.value},r(),"pan",e.swipeable,()=>s.value))}});let Gt=0;const Jt=["click","keydown"],Zt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Gt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function ea(e,t,a,i){const n=Fe(Oe,X);if(n===X)return console.error("QTab/QRouteTab component needs to be child of QTabs"),X;const{proxy:r}=te(),s=P(null),d=P(null),I=P(null),V=h(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),x=h(()=>n.currentModel.value===e.name),y=h(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(x.value===!0?" q-tab--active"+(n.tabProps.value.activeClass?" "+n.tabProps.value.activeClass:"")+(n.tabProps.value.activeColor?` text-${n.tabProps.value.activeColor}`:"")+(n.tabProps.value.activeBgColor?` bg-${n.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&n.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||n.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(i!==void 0?i.linkClass.value:"")),v=h(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(n.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),m=h(()=>e.disable===!0||n.hasFocus.value===!0||x.value===!1&&n.hasActiveTab.value===!0?-1:e.tabindex||0);function S(u,$){if($!==!0&&s.value!==null&&s.value.focus(),e.disable===!0){i!==void 0&&i.hasRouterLink.value===!0&&ee(u);return}if(i===void 0){n.updateModel({name:e.name}),a("click",u);return}if(i.hasRouterLink.value===!0){const B=(A={})=>{let R;const M=A.to===void 0||bt(A.to,e.to)===!0?n.avoidRouteWatcher=ot():null;return i.navigateToRouterLink(u,{...A,returnRouterError:!0}).catch(E=>{R=E}).then(E=>{if(M===n.avoidRouteWatcher&&(n.avoidRouteWatcher=!1,R===void 0&&(E===void 0||E.message.startsWith("Avoided redundant navigation")===!0)&&n.updateModel({name:e.name})),A.returnRouterError===!0)return R!==void 0?Promise.reject(R):E})};a("click",u,B),u.defaultPrevented!==!0&&B();return}a("click",u)}function q(u){pt(u,[13,32])?S(u,!0):ht(u)!==!0&&u.keyCode>=35&&u.keyCode<=40&&u.altKey!==!0&&u.metaKey!==!0&&n.onKbdNavigate(u.keyCode,r.$el)===!0&&ee(u),a("keydown",u)}function F(){const u=n.tabProps.value.narrowIndicator,$=[],B=C("div",{ref:I,class:["q-tab__indicator",n.tabProps.value.indicatorClass]});e.icon!==void 0&&$.push(C(le,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&$.push(C("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&$.push(e.alertIcon!==void 0?C(le,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):C("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),u===!0&&$.push(B);const A=[C("div",{class:"q-focus-helper",tabindex:-1,ref:s}),C("div",{class:v.value},mt(t.default,$))];return u===!1&&A.push(B),A}const O={name:h(()=>e.name),rootRef:d,tabIndicatorRef:I,routeData:i};Ee(()=>{n.unregisterTab(O)}),ft(()=>{n.registerTab(O)});function j(u,$){const B={ref:d,class:y.value,tabindex:m.value,role:"tab","aria-selected":x.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:S,onKeydown:q,...$};return Ke(C(u,B,F()),[[vt,V.value]])}return{renderTab:j,$tabs:n}}var Me=ne({name:"QTab",props:Zt,emits:Jt,setup(e,{slots:t,emit:a}){const{renderTab:i}=ea(e,t,a);return()=>i("div")}});function ta(e,t,a){const i=a===!0?["left","right"]:["top","bottom"];return`absolute-${t===!0?i[0]:i[1]}${e?` text-${e}`:""}`}const aa=["left","center","right","justify"];var na=ne({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>aa.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:t,emit:a}){const{proxy:i}=te(),{$q:n}=i,{registerTick:r}=be(),{registerTick:s}=be(),{registerTick:d}=be(),{registerTimeout:I,removeTimeout:V}=Le(),{registerTimeout:x,removeTimeout:y}=Le(),v=P(null),m=P(null),S=P(e.modelValue),q=P(!1),F=P(!0),O=P(!1),j=P(!1),u=[],$=P(0),B=P(!1);let A=null,R=null,M;const E=h(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:ta(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),se=h(()=>{const o=$.value,l=S.value;for(let c=0;c<o;c++)if(u[c].name.value===l)return!0;return!1}),ue=h(()=>`q-tabs__content--align-${q.value===!0?"left":j.value===!0?"justify":e.align}`),ce=h(()=>`q-tabs row no-wrap items-center q-tabs--${q.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),f=h(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+ue.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),w=h(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),D=h(()=>e.vertical!==!0&&n.lang.rtl===!0),N=h(()=>Mt===!1&&D.value===!0);Z(D,H),Z(()=>e.modelValue,o=>{de({name:o,setCurrent:!0,skipEmit:!0})}),Z(()=>e.outsideArrows,oe);function de({name:o,setCurrent:l,skipEmit:c}){S.value!==o&&(c!==!0&&e["onUpdate:modelValue"]!==void 0&&a("update:modelValue",o),(l===!0||e["onUpdate:modelValue"]===void 0)&&(Ne(S.value,o),S.value=o))}function oe(){r(()=>{we({width:v.value.offsetWidth,height:v.value.offsetHeight})})}function we(o){if(w.value===void 0||m.value===null)return;const l=o[w.value.container],c=Math.min(m.value[w.value.scroll],Array.prototype.reduce.call(m.value.children,(T,g)=>T+(g[w.value.content]||0),0)),_=l>0&&c>l;q.value=_,_===!0&&s(H),j.value=l<parseInt(e.breakpoint,10)}function Ne(o,l){const c=o!=null&&o!==""?u.find(T=>T.name.value===o):null,_=l!=null&&l!==""?u.find(T=>T.name.value===l):null;if(c&&_){const T=c.tabIndicatorRef.value,g=_.tabIndicatorRef.value;A!==null&&(clearTimeout(A),A=null),T.style.transition="none",T.style.transform="none",g.style.transition="none",g.style.transform="none";const p=T.getBoundingClientRect(),L=g.getBoundingClientRect();g.style.transform=e.vertical===!0?`translate3d(0,${p.top-L.top}px,0) scale3d(1,${L.height?p.height/L.height:1},1)`:`translate3d(${p.left-L.left}px,0,0) scale3d(${L.width?p.width/L.width:1},1,1)`,d(()=>{A=setTimeout(()=>{A=null,g.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",g.style.transform="none"},70)})}_&&q.value===!0&&Y(_.rootRef.value)}function Y(o){const{left:l,width:c,top:_,height:T}=m.value.getBoundingClientRect(),g=o.getBoundingClientRect();let p=e.vertical===!0?g.top-_:g.left-l;if(p<0){m.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(p),H();return}p+=e.vertical===!0?g.height-T:g.width-c,p>0&&(m.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(p),H())}function H(){const o=m.value;if(o===null)return;const l=o.getBoundingClientRect(),c=e.vertical===!0?o.scrollTop:Math.abs(o.scrollLeft);D.value===!0?(F.value=Math.ceil(c+l.width)<o.scrollWidth-1,O.value=c>0):(F.value=c>0,O.value=e.vertical===!0?Math.ceil(c+l.height)<o.scrollHeight:Math.ceil(c+l.width)<o.scrollWidth)}function xe(o){R!==null&&clearInterval(R),R=setInterval(()=>{je(o)===!0&&z()},5)}function Pe(){xe(N.value===!0?Number.MAX_SAFE_INTEGER:0)}function _e(){xe(N.value===!0?0:Number.MAX_SAFE_INTEGER)}function z(){R!==null&&(clearInterval(R),R=null)}function ze(o,l){const c=Array.prototype.filter.call(m.value.children,L=>L===l||L.matches&&L.matches(".q-tab.q-focusable")===!0),_=c.length;if(_===0)return;if(o===36)return Y(c[0]),c[0].focus(),!0;if(o===35)return Y(c[_-1]),c[_-1].focus(),!0;const T=o===(e.vertical===!0?38:37),g=o===(e.vertical===!0?40:39),p=T===!0?-1:g===!0?1:void 0;if(p!==void 0){const L=D.value===!0?-1:1,K=c.indexOf(l)+p*L;return K>=0&&K<_&&(Y(c[K]),c[K].focus({preventScroll:!0})),!0}}const We=h(()=>N.value===!0?{get:o=>Math.abs(o.scrollLeft),set:(o,l)=>{o.scrollLeft=-l}}:e.vertical===!0?{get:o=>o.scrollTop,set:(o,l)=>{o.scrollTop=l}}:{get:o=>o.scrollLeft,set:(o,l)=>{o.scrollLeft=l}});function je(o){const l=m.value,{get:c,set:_}=We.value;let T=!1,g=c(l);const p=o<g?-1:1;return g+=p*5,g<0?(T=!0,g=0):(p===-1&&g<=o||p===1&&g>=o)&&(T=!0,g=o),_(l,g),H(),T}function Te(o,l){for(const c in o)if(o[c]!==l[c])return!1;return!0}function Ue(){let o=null,l={matchedLen:0,queryDiff:9999,hrefLen:0};const c=u.filter(p=>p.routeData!==void 0&&p.routeData.hasRouterLink.value===!0),{hash:_,query:T}=i.$route,g=Object.keys(T).length;for(const p of c){const L=p.routeData.exact.value===!0;if(p.routeData[L===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:K,query:fe,matched:Je,href:Ze}=p.routeData.resolvedLink.value,ve=Object.keys(fe).length;if(L===!0){if(K!==_||ve!==g||Te(T,fe)===!1)continue;o=p.name.value;break}if(K!==""&&K!==_||ve!==0&&Te(fe,T)===!1)continue;const W={matchedLen:Je.length,queryDiff:g-ve,hrefLen:Ze.length-K.length};if(W.matchedLen>l.matchedLen){o=p.name.value,l=W;continue}else if(W.matchedLen!==l.matchedLen)continue;if(W.queryDiff<l.queryDiff)o=p.name.value,l=W;else if(W.queryDiff!==l.queryDiff)continue;W.hrefLen>l.hrefLen&&(o=p.name.value,l=W)}o===null&&u.some(p=>p.routeData===void 0&&p.name.value===S.value)===!0||de({name:o,setCurrent:!0})}function Ye(o){if(V(),B.value!==!0&&v.value!==null&&o.target&&typeof o.target.closest=="function"){const l=o.target.closest(".q-tab");l&&v.value.contains(l)===!0&&(B.value=!0,q.value===!0&&Y(l))}}function He(){I(()=>{B.value=!1},30)}function re(){Se.avoidRouteWatcher===!1?x(Ue):y()}function Ce(){if(M===void 0){const o=Z(()=>i.$route.fullPath,re);M=()=>{o(),M=void 0}}}function Xe(o){u.push(o),$.value++,oe(),o.routeData===void 0||i.$route===void 0?x(()=>{if(q.value===!0){const l=S.value,c=l!=null&&l!==""?u.find(_=>_.name.value===l):null;c&&Y(c.rootRef.value)}}):(Ce(),o.routeData.hasRouterLink.value===!0&&re())}function Ge(o){u.splice(u.indexOf(o),1),$.value--,oe(),M!==void 0&&o.routeData!==void 0&&(u.every(l=>l.routeData===void 0)===!0&&M(),re())}const Se={currentModel:S,tabProps:E,hasFocus:B,hasActiveTab:se,registerTab:Xe,unregisterTab:Ge,verifyRouteModel:re,updateModel:de,onKbdNavigate:ze,avoidRouteWatcher:!1};gt(Oe,Se);function qe(){A!==null&&clearTimeout(A),z(),M!==void 0&&M()}let ke;return Ee(qe),yt(()=>{ke=M!==void 0,qe()}),wt(()=>{ke===!0&&Ce(),oe()}),()=>C("div",{ref:v,class:ce.value,role:"tablist",onFocusin:Ye,onFocusout:He},[C(Qt,{onResize:we}),C("div",{ref:m,class:f.value,onScroll:H},ae(t.default)),C(le,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(F.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||n.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Pe,onTouchstartPassive:Pe,onMouseupPassive:z,onMouseleavePassive:z,onTouchendPassive:z}),C(le,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(O.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||n.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:_e,onTouchstartPassive:_e,onMouseupPassive:z,onMouseleavePassive:z,onTouchendPassive:z})])}});const oa={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function ra(){const{props:e,proxy:{$q:t}}=te(),a=Fe(xt,X);if(a===X)return console.error("QPageSticky needs to be child of QLayout"),X;const i=h(()=>{const y=e.position;return{top:y.indexOf("top")>-1,right:y.indexOf("right")>-1,bottom:y.indexOf("bottom")>-1,left:y.indexOf("left")>-1,vertical:y==="top"||y==="bottom",horizontal:y==="left"||y==="right"}}),n=h(()=>a.header.offset),r=h(()=>a.right.offset),s=h(()=>a.footer.offset),d=h(()=>a.left.offset),I=h(()=>{let y=0,v=0;const m=i.value,S=t.lang.rtl===!0?-1:1;m.top===!0&&n.value!==0?v=`${n.value}px`:m.bottom===!0&&s.value!==0&&(v=`${-s.value}px`),m.left===!0&&d.value!==0?y=`${S*d.value}px`:m.right===!0&&r.value!==0&&(y=`${-S*r.value}px`);const q={transform:`translate(${y}, ${v})`};return e.offset&&(q.margin=`${e.offset[1]}px ${e.offset[0]}px`),m.vertical===!0?(d.value!==0&&(q[t.lang.rtl===!0?"right":"left"]=`${d.value}px`),r.value!==0&&(q[t.lang.rtl===!0?"left":"right"]=`${r.value}px`)):m.horizontal===!0&&(n.value!==0&&(q.top=`${n.value}px`),s.value!==0&&(q.bottom=`${s.value}px`)),q}),V=h(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function x(y){const v=ae(y.default);return C("div",{class:V.value,style:I.value},e.expand===!0?v:[C("div",v)])}return{$layout:a,getStickyContent:x}}var ia=ne({name:"QPageSticky",props:oa,setup(e,{slots:t}){const{getStickyContent:a}=ra();return()=>a(t)}});function Ve(e,{value:t,oldValue:a}){if(typeof t!="function"){e.scrollTarget.removeEventListener("scroll",e.scroll,ge.passive);return}e.handler=t,typeof a!="function"&&e.scrollTarget.addEventListener("scroll",e.scroll,ge.passive)}var la=Qe({name:"scroll",mounted(e,t){const a={scrollTarget:Pt(e),scroll(){a.handler(_t(a.scrollTarget),Tt(a.scrollTarget))}};Ve(a,t),e.__qscroll=a},updated(e,t){e.__qscroll!==void 0&&t.oldValue!==t.value&&Ve(e.__qscroll,t)},beforeUnmount(e){const t=e.__qscroll;t.scrollTarget.removeEventListener("scroll",t.scroll,ge.passive),delete e.__qscroll}});const sa=St({components:{Apex:Kt},setup(){const e=qt();function t(n){return n>=1e12?(n/1e12).toFixed(2)+" T":n>=1e9?(n/1e9).toFixed(2)+" M":n>=1e6?(n/1e6).toFixed(2)+" jt":n.toFixed(2)}function a(n){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(n)}return{authStore:e,province_table_column:[{name:"name",label:"",field:"Name",align:"left",sortable:!0},{name:"bidkes",label:"Anggaran ATM Bidang Kesehatan",field:n=>a(n.Bidkes),sortable:!0},{name:"other",label:"Anggaran ATM Sumber Lain",field:n=>a(n.Other),sortable:!0}],isReveal:P(!0),series:[{data:[0,14.3,41.9,25.7,40]}],chartOptions:{chart:{type:"bar",height:350},colors:["#FF6E31"],plotOptions:{bar:{barHeight:"60%",horizontal:!0}},fill:{type:"gradient",gradient:{shade:"transparent",type:"horizontal",shadeIntensity:.5,gradientToColors:void 0,inverseColors:!0,opacityFrom:0,opacityTo:1,stops:[0,70,100],colorStops:[]}},dataLabels:{enabled:!1},xaxis:{categories:["BLT","SKPD Non Dinkes","CSR","Dana Desa","SK (Forum Kemitraan)"]}},seriesPercentage:[{name:"Presentase",data:[]}],chartOptionsPercentage:{chart:{type:"bar",height:350},colors:["#243763"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{formatter:function(n){return`${parseFloat(n).toFixed(2)}%`}},stroke:{show:!0,width:2,colors:["transparent"]},yaxis:{labels:{formatter:function(n){return`${parseFloat(n).toFixed(2)}%`}}},xaxis:{categories:[]},fill:{opacity:1}},seriesProvince:P([{name:"AIDS",data:[]},{name:"TBC",data:[]},{name:"MALARIA",data:[]}]),chartOptionsProvince:P({chart:{type:"bar",height:350},colors:["#243763","#FF6E31","#9384D1"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{formatter:function(n){return t(n)}},yaxis:{labels:{formatter:function(n){return t(n)}}},xaxis:{categories:[]},fill:{opacity:1},legend:{position:"top",itemMargin:{vertical:20}}}),year:P(null),list_year:P([]),options_province:P([]),list_province:P([]),province:P(null),tab:P("Dashboard1"),province_table:P([])}},mounted(){this.getYear()},methods:{getYear(){this.$api.get("/forms?Limit=-").then(e=>(this.list_year=e.data.data.Rows.map(t=>({label:t.Year,value:t.ID})),this.list_year)).then(e=>{const t=new Date().getFullYear(),a=e.find(i=>i.label==t);a?this.year=a.value:this.year=e[0].value,this.getPrecentage(this.year)}).catch(e=>{console.log(e)})},onScroll(e){e>100?this.isReveal=!1:this.isReveal=!0},getPrecentage(e){const t=this.list_year.find(a=>a.value==e);this.$api.get("/result/"+t.label+"/percentage").then(a=>(this.seriesPercentage[0].data=a.data.data.map(i=>i.percentage),this.chartOptionsPercentage.xaxis.categories=a.data.data.map(i=>i.name),this.options_province=a.data.data.map(i=>({label:i.name,value:i.id})),this.list_province=this.options_province,a)).then(a=>{this.$refs.chartPercentage.refresh(),this.province=this.list_province[0].value,this.updateProvince(this.list_province[0].value)}).catch(a=>{console.log(a)})},filterProvince(e,t){if(e===""){t(()=>{this.list_province=this.options_province});return}t(()=>{const a=e.toLowerCase();this.list_province=this.options_province.filter(i=>i.label.toLowerCase().indexOf(a)>-1)})},updateProvince(e){this.findProvince(e),this.findProvinceTable(e)},findProvince(e){const t=this.list_year.find(a=>a.value==this.year);return this.$api.get("/result/"+t.label+"/percentage/"+e).then(a=>(this.chartOptionsProvince.xaxis.categories=a.data.data.map(i=>i.name),this.seriesProvince[0].data=a.data.data.map(i=>i.budget.AIDS),this.seriesProvince[1].data=a.data.data.map(i=>i.budget.Malaria),this.seriesProvince[2].data=a.data.data.map(i=>i.budget.TBC),console.log(this.seriesProvince),a)).then(a=>{this.$refs.chartProvince.refresh()}).catch(a=>{console.log(a)})},findProvinceTable(e){const t=this.list_year.find(a=>a.value==this.year);return this.$api.get("/result/"+t.label+"/detail/"+e).then(a=>{this.province_table=a.data.data}).catch(a=>{console.log(a)})}}}),ye=e=>(It("data-v-18b40c52"),e=e(),Bt(),e),ua=ye(()=>Q("div",{class:"tw-font-bold tw-py-3 text-center tw-flex tw-justify-center tw-flex-col tw-w-full"},[Q("div",{class:"tw-text-4xl"},[Q("span",{class:"text-secondary"},"e"),G("Monev ")]),Q("div",{class:"tw-uppercase tw-text-xs md:tw-text-lg text-center"},[G(" Sistem Informasi ADINKES"),Q("br"),G(" Monitoring Evaluasi Capaian RSSH - ATM ")])],-1)),ca={class:"tw-max-w-6xl xl:tw-mx-auto tw-mx-5 tw-space-y-8"},da={class:"text-center tw-py-10"},fa=ye(()=>Q("div",{class:"text-primary tw-text-xl"}," Budget Anggaran ATM Terhadap Bidang Kesehatan Provinsi ",-1)),va={class:"bg-primary tw-w-full"},pa={class:"tw-flex tw-justify-between text-white tw-max-w-6xl xl:tw-mx-auto tw-mx-5 tw-py-3"},ha={class:"tw-flex tw-items-center tw-gap-4"},ma=ye(()=>Q("span",{class:"tw-text-gray-400"},"Tahun Terpilih",-1));function ba(e,t,a,i,n,r){const s=kt("apex");return Ke((At(),$t(Et,{view:"hHh lpR fFf"},{default:k(()=>[b(tt,{reveal:"",modelValue:e.isReveal,"onUpdate:modelValue":t[0]||(t[0]=d=>e.isReveal=d),class:"bg-white text-primary"},{default:k(()=>[b(et,null,{default:k(()=>[ua]),_:1})]),_:1},8,["modelValue"]),b(Ot,{class:"tw-bg-gray-50"},{default:k(()=>[b(Ft,{class:"tw-pt-36"},{default:k(()=>[b(Xt,{modelValue:e.tab,"onUpdate:modelValue":t[2]||(t[2]=d=>e.tab=d),animated:"",class:"tw-bg-gray-50"},{default:k(()=>[b(De,{name:"Dashboard1"},{default:k(()=>[Q("div",ca,[b(pe,{flat:""},{default:k(()=>[b(U,{class:"text-primary tw-text-xl"},{default:k(()=>[G(" Persentase capaian kemitraan untuk ATM ")]),_:1}),b(U,{class:"q-pt-none"},{default:k(()=>[b(s,{type:"bar",height:"250",options:e.chartOptions,series:e.series},null,8,["options","series"])]),_:1})]),_:1}),b(pe,{flat:""},{default:k(()=>[b(U,{class:"text-primary tw-text-xl"},{default:k(()=>[G(" Persentase Anggaran ATM Terhadap Bidang Kesehatan ")]),_:1}),b(U,{class:"q-pt-none"},{default:k(()=>[b(s,{type:"bar",height:"350",options:e.chartOptionsPercentage,series:e.seriesPercentage,ref:"chartPercentage"},null,8,["options","series"])]),_:1})]),_:1}),Q("footer",da,Rt(new Date().getFullYear())+" \xA9 Copyright All Right Reserved ",1)])]),_:1}),b(De,{name:"Dashboard2"},{default:k(()=>[b(pe,{flat:"",class:"tw-mb-20"},{default:k(()=>[b(U,{class:"tw-flex md:tw-flex-row tw-flex-col tw-justify-between tw-items-center"},{default:k(()=>[fa,b(Ie,{options:e.list_province,label:"Provinsi",modelValue:e.province,"onUpdate:modelValue":[t[1]||(t[1]=d=>e.province=d),e.updateProvince],"map-options":"","emit-value":"","use-input":"",onFilter:e.filterProvince},null,8,["options","modelValue","onFilter","onUpdate:modelValue"])]),_:1}),b(U,{class:"q-pt-none"},{default:k(()=>[b(s,{type:"bar",height:"350",options:e.chartOptionsProvince,series:e.seriesProvince,ref:"chartProvince"},null,8,["options","series"])]),_:1}),b(U,{class:"q-pt-none"},{default:k(()=>[b(Vt,{flat:"",rows:e.province_table,"hide-pagination":"",columns:e.province_table_column},null,8,["rows","columns"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),b(ia,{class:"tw-z-50",expand:"",position:"top"},{default:k(()=>[Q("div",va,[Q("div",pa,[Q("div",ha,[ma,G(" / "),b(Ie,{class:"my-select",options:e.list_year,modelValue:e.year,"onUpdate:modelValue":t[3]||(t[3]=d=>e.year=d),borderless:"",dense:"","map-options":"","emit-value":""},null,8,["options","modelValue"])]),b(Lt,{color:"secondary",label:e.authStore.token?"Dashabord":"Masuk",to:{name:e.authStore.token?"beranda":"login"},unelevated:"","no-caps":""},null,8,["label","to"])]),b(na,{modelValue:e.tab,"onUpdate:modelValue":t[4]||(t[4]=d=>e.tab=d),align:"justify","no-caps":"",class:"text-white"},{default:k(()=>[b(Me,{name:"Dashboard1",label:"Rekapitulasi Anggaran ATM"}),b(Me,{name:"Dashboard2",label:"Rekapitulasi Per Provinsi"})]),_:1},8,["modelValue"])])]),_:1})]),_:1})]),_:1})]),_:1})),[[la,e.onScroll]])}var $a=Ct(sa,[["render",ba],["__scopeId","data-v-18b40c52"]]);export{$a as default};
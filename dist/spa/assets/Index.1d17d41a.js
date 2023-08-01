import{Q as Ue,a as We}from"./QHeader.4db33c92.js";import{b as je,Q as oe,c as E}from"./uid.64ab0e0b.js";import{r as Ne,Q as we}from"./QSelect.71bf0f2d.js";import{i as Se,e as z,r as b,a as v,o as Pe,d as He,cw as Ce,f as ke,R as Ye,h as P,m as Te,M as Je,aB as Ge,k as ee,af as Xe,j as se,aA as Ze,c as ue,w as X,ab as et,a2 as tt,ax as at,b as qe,l as nt,ai as rt,a7 as ot,an as lt,ao as it,V as ie,_ as st,p as ut,I as ct,q as dt,t as ft,x as vt,y as T,z as f,K as B,B as U,C as gt,J as ht,bL as bt,bK as mt}from"./index.74a171dd.js";import{Q as pt}from"./QScrollObserver.f7d3d201.js";import{o as le,b as _e}from"./QDialog.9d2c60d3.js";import{Q as yt}from"./QPage.4ed51d90.js";import{Q as wt,a as Tt}from"./QLayout.5f63a0f3.js";import{A as _t}from"./vue3-apexcharts.common.8ddce96b.js";let xt=0;const St=["click","keydown"],Pt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${xt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Ct(e,o,a,t){const l=Se(Ce,z);if(l===z)return console.error("QTab/QRouteTab component needs to be child of QTabs"),z;const{proxy:c}=se(),m=b(null),y=b(null),I=b(null),W=v(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),M=v(()=>l.currentModel.value===e.name),w=v(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(M.value===!0?" q-tab--active"+(l.tabProps.value.activeClass?" "+l.tabProps.value.activeClass:"")+(l.tabProps.value.activeColor?` text-${l.tabProps.value.activeColor}`:"")+(l.tabProps.value.activeBgColor?` bg-${l.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&l.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||l.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(t!==void 0?t.linkClass.value:"")),C=v(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(l.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),p=v(()=>e.disable===!0||l.hasFocus.value===!0||M.value===!1&&l.hasActiveTab.value===!0?-1:e.tabindex||0);function k(s,q){if(q!==!0&&m.value!==null&&m.value.focus(),e.disable===!0){t!==void 0&&t.hasRouterLink.value===!0&&Te(s);return}if(t===void 0){l.updateModel({name:e.name}),a("click",s);return}if(t.hasRouterLink.value===!0){const R=(x={})=>{let $;const L=x.to===void 0||Ze(x.to,e.to)===!0?l.avoidRouteWatcher=je():null;return t.navigateToRouterLink(s,{...x,returnRouterError:!0}).catch(F=>{$=F}).then(F=>{if(L===l.avoidRouteWatcher&&(l.avoidRouteWatcher=!1,$===void 0&&(F===void 0||F.message.startsWith("Avoided redundant navigation")===!0)&&l.updateModel({name:e.name})),x.returnRouterError===!0)return $!==void 0?Promise.reject($):F})};a("click",s,R),s.defaultPrevented!==!0&&R();return}a("click",s)}function _(s){Je(s,[13,32])?k(s,!0):Ge(s)!==!0&&s.keyCode>=35&&s.keyCode<=40&&s.altKey!==!0&&s.metaKey!==!0&&l.onKbdNavigate(s.keyCode,c.$el)===!0&&Te(s),a("keydown",s)}function j(){const s=l.tabProps.value.narrowIndicator,q=[],R=P("div",{ref:I,class:["q-tab__indicator",l.tabProps.value.indicatorClass]});e.icon!==void 0&&q.push(P(ee,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&q.push(P("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&q.push(e.alertIcon!==void 0?P(ee,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):P("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),s===!0&&q.push(R);const x=[P("div",{class:"q-focus-helper",tabindex:-1,ref:m}),P("div",{class:C.value},Xe(o.default,q))];return s===!1&&x.push(R),x}const Q={name:v(()=>e.name),rootRef:y,tabIndicatorRef:I,routeData:t};Pe(()=>{l.unregisterTab(Q)}),He(()=>{l.registerTab(Q)});function N(s,q){const R={ref:y,class:w.value,tabindex:p.value,role:"tab","aria-selected":M.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:k,onKeydown:_,...q};return ke(P(s,R,j()),[[Ye,W.value]])}return{renderTab:N,$tabs:l}}var Z=ue({name:"QTab",props:Pt,emits:St,setup(e,{slots:o,emit:a}){const{renderTab:t}=Ct(e,o,a);return()=>t("div")}});function kt(e,o,a){const t=a===!0?["left","right"]:["top","bottom"];return`absolute-${o===!0?t[0]:t[1]}${e?` text-${e}`:""}`}const qt=["left","center","right","justify"];var Rt=ue({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>qt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:o,emit:a}){const{proxy:t}=se(),{$q:l}=t,{registerTick:c}=le(),{registerTick:m}=le(),{registerTick:y}=le(),{registerTimeout:I,removeTimeout:W}=_e(),{registerTimeout:M,removeTimeout:w}=_e(),C=b(null),p=b(null),k=b(e.modelValue),_=b(!1),j=b(!0),Q=b(!1),N=b(!1),s=[],q=b(0),R=b(!1);let x=null,$=null,L;const F=v(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:kt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Re=v(()=>{const n=q.value,r=k.value;for(let i=0;i<n;i++)if(s[i].name.value===r)return!0;return!1}),Be=v(()=>`q-tabs__content--align-${_.value===!0?"left":N.value===!0?"justify":e.align}`),$e=v(()=>`q-tabs row no-wrap items-center q-tabs--${_.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Le=v(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Be.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),H=v(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),Y=v(()=>e.vertical!==!0&&l.lang.rtl===!0),te=v(()=>Ne===!1&&Y.value===!0);X(Y,O),X(()=>e.modelValue,n=>{ae({name:n,setCurrent:!0,skipEmit:!0})}),X(()=>e.outsideArrows,J);function ae({name:n,setCurrent:r,skipEmit:i}){k.value!==n&&(i!==!0&&e["onUpdate:modelValue"]!==void 0&&a("update:modelValue",n),(r===!0||e["onUpdate:modelValue"]===void 0)&&(Ae(k.value,n),k.value=n))}function J(){c(()=>{de({width:C.value.offsetWidth,height:C.value.offsetHeight})})}function de(n){if(H.value===void 0||p.value===null)return;const r=n[H.value.container],i=Math.min(p.value[H.value.scroll],Array.prototype.reduce.call(p.value.children,(h,d)=>h+(d[H.value.content]||0),0)),g=r>0&&i>r;_.value=g,g===!0&&m(O),N.value=r<parseInt(e.breakpoint,10)}function Ae(n,r){const i=n!=null&&n!==""?s.find(h=>h.name.value===n):null,g=r!=null&&r!==""?s.find(h=>h.name.value===r):null;if(i&&g){const h=i.tabIndicatorRef.value,d=g.tabIndicatorRef.value;x!==null&&(clearTimeout(x),x=null),h.style.transition="none",h.style.transform="none",d.style.transition="none",d.style.transform="none";const u=h.getBoundingClientRect(),S=d.getBoundingClientRect();d.style.transform=e.vertical===!0?`translate3d(0,${u.top-S.top}px,0) scale3d(1,${S.height?u.height/S.height:1},1)`:`translate3d(${u.left-S.left}px,0,0) scale3d(${S.width?u.width/S.width:1},1,1)`,y(()=>{x=setTimeout(()=>{x=null,d.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",d.style.transform="none"},70)})}g&&_.value===!0&&V(g.rootRef.value)}function V(n){const{left:r,width:i,top:g,height:h}=p.value.getBoundingClientRect(),d=n.getBoundingClientRect();let u=e.vertical===!0?d.top-g:d.left-r;if(u<0){p.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(u),O();return}u+=e.vertical===!0?d.height-h:d.width-i,u>0&&(p.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(u),O())}function O(){const n=p.value;if(n===null)return;const r=n.getBoundingClientRect(),i=e.vertical===!0?n.scrollTop:Math.abs(n.scrollLeft);Y.value===!0?(j.value=Math.ceil(i+r.width)<n.scrollWidth-1,Q.value=i>0):(j.value=i>0,Q.value=e.vertical===!0?Math.ceil(i+r.height)<n.scrollHeight:Math.ceil(i+r.width)<n.scrollWidth)}function fe(n){$!==null&&clearInterval($),$=setInterval(()=>{De(n)===!0&&D()},5)}function ve(){fe(te.value===!0?Number.MAX_SAFE_INTEGER:0)}function ge(){fe(te.value===!0?0:Number.MAX_SAFE_INTEGER)}function D(){$!==null&&(clearInterval($),$=null)}function Ie(n,r){const i=Array.prototype.filter.call(p.value.children,S=>S===r||S.matches&&S.matches(".q-tab.q-focusable")===!0),g=i.length;if(g===0)return;if(n===36)return V(i[0]),i[0].focus(),!0;if(n===35)return V(i[g-1]),i[g-1].focus(),!0;const h=n===(e.vertical===!0?38:37),d=n===(e.vertical===!0?40:39),u=h===!0?-1:d===!0?1:void 0;if(u!==void 0){const S=Y.value===!0?-1:1,A=i.indexOf(r)+u*S;return A>=0&&A<g&&(V(i[A]),i[A].focus({preventScroll:!0})),!0}}const Me=v(()=>te.value===!0?{get:n=>Math.abs(n.scrollLeft),set:(n,r)=>{n.scrollLeft=-r}}:e.vertical===!0?{get:n=>n.scrollTop,set:(n,r)=>{n.scrollTop=r}}:{get:n=>n.scrollLeft,set:(n,r)=>{n.scrollLeft=r}});function De(n){const r=p.value,{get:i,set:g}=Me.value;let h=!1,d=i(r);const u=n<d?-1:1;return d+=u*5,d<0?(h=!0,d=0):(u===-1&&d<=n||u===1&&d>=n)&&(h=!0,d=n),g(r,d),O(),h}function he(n,r){for(const i in n)if(n[i]!==r[i])return!1;return!0}function Ke(){let n=null,r={matchedLen:0,queryDiff:9999,hrefLen:0};const i=s.filter(u=>u.routeData!==void 0&&u.routeData.hasRouterLink.value===!0),{hash:g,query:h}=t.$route,d=Object.keys(h).length;for(const u of i){const S=u.routeData.exact.value===!0;if(u.routeData[S===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:A,query:ne,matched:Ee,href:ze}=u.routeData.resolvedLink.value,re=Object.keys(ne).length;if(S===!0){if(A!==g||re!==d||he(h,ne)===!1)continue;n=u.name.value;break}if(A!==""&&A!==g||re!==0&&he(ne,h)===!1)continue;const K={matchedLen:Ee.length,queryDiff:d-re,hrefLen:ze.length-A.length};if(K.matchedLen>r.matchedLen){n=u.name.value,r=K;continue}else if(K.matchedLen!==r.matchedLen)continue;if(K.queryDiff<r.queryDiff)n=u.name.value,r=K;else if(K.queryDiff!==r.queryDiff)continue;K.hrefLen>r.hrefLen&&(n=u.name.value,r=K)}n===null&&s.some(u=>u.routeData===void 0&&u.name.value===k.value)===!0||ae({name:n,setCurrent:!0})}function Fe(n){if(W(),R.value!==!0&&C.value!==null&&n.target&&typeof n.target.closest=="function"){const r=n.target.closest(".q-tab");r&&C.value.contains(r)===!0&&(R.value=!0,_.value===!0&&V(r))}}function Qe(){I(()=>{R.value=!1},30)}function G(){me.avoidRouteWatcher===!1?M(Ke):w()}function be(){if(L===void 0){const n=X(()=>t.$route.fullPath,G);L=()=>{n(),L=void 0}}}function Ve(n){s.push(n),q.value++,J(),n.routeData===void 0||t.$route===void 0?M(()=>{if(_.value===!0){const r=k.value,i=r!=null&&r!==""?s.find(g=>g.name.value===r):null;i&&V(i.rootRef.value)}}):(be(),n.routeData.hasRouterLink.value===!0&&G())}function Oe(n){s.splice(s.indexOf(n),1),q.value--,J(),L!==void 0&&n.routeData!==void 0&&(s.every(r=>r.routeData===void 0)===!0&&L(),G())}const me={currentModel:k,tabProps:F,hasFocus:R,hasActiveTab:Re,registerTab:Ve,unregisterTab:Oe,verifyRouteModel:G,updateModel:ae,onKbdNavigate:Ie,avoidRouteWatcher:!1};et(Ce,me);function pe(){x!==null&&clearTimeout(x),D(),L!==void 0&&L()}let ye;return Pe(pe),tt(()=>{ye=L!==void 0,pe()}),at(()=>{ye===!0&&be(),J()}),()=>P("div",{ref:C,class:$e.value,role:"tablist",onFocusin:Fe,onFocusout:Qe},[P(pt,{onResize:de}),P("div",{ref:p,class:Le.value,onScroll:O},qe(o.default)),P(ee,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(j.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||l.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ve,onTouchstartPassive:ve,onMouseupPassive:D,onMouseleavePassive:D,onTouchendPassive:D}),P(ee,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(Q.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||l.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:ge,onTouchstartPassive:ge,onMouseupPassive:D,onMouseleavePassive:D,onTouchendPassive:D})])}});const Bt={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function $t(){const{props:e,proxy:{$q:o}}=se(),a=Se(nt,z);if(a===z)return console.error("QPageSticky needs to be child of QLayout"),z;const t=v(()=>{const w=e.position;return{top:w.indexOf("top")>-1,right:w.indexOf("right")>-1,bottom:w.indexOf("bottom")>-1,left:w.indexOf("left")>-1,vertical:w==="top"||w==="bottom",horizontal:w==="left"||w==="right"}}),l=v(()=>a.header.offset),c=v(()=>a.right.offset),m=v(()=>a.footer.offset),y=v(()=>a.left.offset),I=v(()=>{let w=0,C=0;const p=t.value,k=o.lang.rtl===!0?-1:1;p.top===!0&&l.value!==0?C=`${l.value}px`:p.bottom===!0&&m.value!==0&&(C=`${-m.value}px`),p.left===!0&&y.value!==0?w=`${k*y.value}px`:p.right===!0&&c.value!==0&&(w=`${-k*c.value}px`);const _={transform:`translate(${w}, ${C})`};return e.offset&&(_.margin=`${e.offset[1]}px ${e.offset[0]}px`),p.vertical===!0?(y.value!==0&&(_[o.lang.rtl===!0?"right":"left"]=`${y.value}px`),c.value!==0&&(_[o.lang.rtl===!0?"left":"right"]=`${c.value}px`)):p.horizontal===!0&&(l.value!==0&&(_.top=`${l.value}px`),m.value!==0&&(_.bottom=`${m.value}px`)),_}),W=v(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function M(w){const C=qe(w.default);return P("div",{class:W.value,style:I.value},e.expand===!0?C:[P("div",C)])}return{$layout:a,getStickyContent:M}}var Lt=ue({name:"QPageSticky",props:Bt,setup(e,{slots:o}){const{getStickyContent:a}=$t();return()=>a(o)}});function xe(e,{value:o,oldValue:a}){if(typeof o!="function"){e.scrollTarget.removeEventListener("scroll",e.scroll,ie.passive);return}e.handler=o,typeof a!="function"&&e.scrollTarget.addEventListener("scroll",e.scroll,ie.passive)}var At=rt({name:"scroll",mounted(e,o){const a={scrollTarget:ot(e),scroll(){a.handler(lt(a.scrollTarget),it(a.scrollTarget))}};xe(a,o),e.__qscroll=a},updated(e,o){e.__qscroll!==void 0&&o.oldValue!==o.value&&xe(e.__qscroll,o)},beforeUnmount(e){const o=e.__qscroll;o.scrollTarget.removeEventListener("scroll",o.scroll,ie.passive),delete e.__qscroll}});const It=ut({components:{Apex:_t},setup(){const e=ct(),o=[{nama:"Aceh",budget:a(),average:t()},{nama:"Bali",budget:a(),average:t()},{nama:"Bangka Belitung",budget:a(),average:t()},{nama:"Banten",budget:a(),average:t()},{nama:"Bengkulu",budget:a(),average:t()},{nama:"Gorontalo",budget:a(),average:t()},{nama:"Jambi",budget:a(),average:t()},{nama:"Jawa Barat",budget:a(),average:t()},{nama:"Jawa Tengah",budget:a(),average:t()},{nama:"Jawa Timur",budget:a(),average:t()},{nama:"Kalimantan Barat",budget:a(),average:t()},{nama:"Kalimantan Selatan",budget:a(),average:t()},{nama:"Kalimantan Tengah",budget:a(),average:t()},{nama:"Kalimantan Timur",budget:a(),average:t()},{nama:"Kalimantan Utara",budget:a(),average:t()},{nama:"Kepulauan Riau",budget:a(),average:t()},{nama:"Lampung",budget:a(),average:t()},{nama:"Maluku",budget:a(),average:t()},{nama:"Maluku Utara",budget:a(),average:t()},{nama:"Nusa Tenggara Barat",budget:a(),average:t()},{nama:"Nusa Tenggara Timur",budget:a(),average:t()},{nama:"Papua",budget:a(),average:t()},{nama:"Papua Barat",budget:a(),average:t()},{nama:"Riau",budget:a(),average:t()},{nama:"Sulawesi Barat",budget:a(),average:t()},{nama:"Sulawesi Selatan",budget:a(),average:t()},{nama:"Sulawesi Tengah",budget:a(),average:t()},{nama:"Sulawesi Tenggara",budget:a(),average:t()},{nama:"Sulawesi Utara",budget:a(),average:t()},{nama:"Sumatera Barat",budget:a(),average:t()},{nama:"Sumatera Selatan",budget:a(),average:t()},{nama:"Sumatera Utara",budget:a(),average:t()},{nama:"Yogyakarta",budget:a(),average:t()}];function a(){return Math.floor(Math.random()*9e9)+1e9}function t(){const I=(Math.random()*3.9+.1).toFixed(2);return parseFloat(I)}const l=structuredClone(o).sort((c,m)=>m.budget-c.budget);return structuredClone(o).sort((c,m)=>m.average-c.average),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),t(),{authStore:e,isReveal:b(!0),series:[{data:[0,14.3,41.9,25.7,40]}],chartOptions:{chart:{type:"bar",height:350},colors:["#FF6E31"],plotOptions:{bar:{barHeight:"60%",horizontal:!0}},fill:{type:"gradient",gradient:{shade:"transparent",type:"horizontal",shadeIntensity:.5,gradientToColors:void 0,inverseColors:!0,opacityFrom:0,opacityTo:1,stops:[0,70,100],colorStops:[]}},dataLabels:{enabled:!1},xaxis:{categories:["BLT","SKPD Non Dinkes","CSR","Dana Desa","SK (Forum Kemitraan)"]}},series2:[{data:l.map(c=>c.budget)}],chartOptions2:{yaxis:{labels:{formatter:function(c){return c.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}},chart:{type:"bar",height:350},colors:["#243763"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:l.map(c=>c.nama)},fill:{opacity:1}},seriesPercentage:[{name:"Presentase",data:[]}],chartOptionsPercentage:{chart:{type:"bar",height:350},colors:["#243763"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{formatter:function(c){return`${parseFloat(c).toFixed(2)}%`}},stroke:{show:!0,width:2,colors:["transparent"]},yaxis:{labels:{formatter:function(c){return`${parseFloat(c).toFixed(2)}%`}}},xaxis:{categories:[]},fill:{opacity:1}},seriesProvince:b([{name:"AIDS",data:[]},{name:"TBC",data:[]},{name:"MALARIA",data:[]}]),chartOptionsProvince:b({chart:{type:"bar",height:350},colors:["#243763","#FF6E31","#9384D1"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{formatter:function(c){return`${parseFloat(c).toFixed(2)}%`}},yaxis:{labels:{formatter:function(c){return`${parseFloat(c).toFixed(2)}%`}}},xaxis:{categories:[]},fill:{opacity:1},legend:{position:"top",itemMargin:{vertical:20}}}),year:b(null),list_year:b([]),options_province:b([]),list_province:b([]),province:b(null),tab:b("Dashboard1")}},mounted(){this.getYear()},methods:{getYear(){this.$api.get("/forms?Limit=-").then(e=>(this.list_year=e.data.data.Rows.map(o=>({label:o.Year,value:o.ID})),this.list_year)).then(e=>{const o=new Date().getFullYear(),a=e.find(t=>t.label==o);a?this.year=a.value:this.year=e[0].value,this.getPrecentage(this.year)}).catch(e=>{console.log(e)})},onScroll(e){e>100?this.isReveal=!1:this.isReveal=!0},getPrecentage(e){const o=this.list_year.find(a=>a.value==e);this.$api.get("/result/"+o.label+"/percentage").then(a=>(this.seriesPercentage[0].data=a.data.data.map(t=>t.percentage),this.chartOptionsPercentage.xaxis.categories=a.data.data.map(t=>t.name),this.options_province=a.data.data.map(t=>({label:t.name,value:t.id})),this.list_province=this.options_province,a)).then(a=>{this.$refs.chartPercentage.refresh(),this.province=this.list_province[0].value,this.findProvince(this.list_province[0].value)}).catch(a=>{console.log(a)})},filterProvince(e,o){if(e===""){o(()=>{this.list_province=this.options_province});return}o(()=>{const a=e.toLowerCase();this.list_province=this.options_province.filter(t=>t.label.toLowerCase().indexOf(a)>-1)})},findProvince(e){const o=this.list_year.find(a=>a.value==this.year);return this.$api.get("/result/"+o.label+"/percentage/"+e).then(a=>(this.chartOptionsProvince.xaxis.categories=a.data.data.map(t=>t.name),this.seriesProvince[0].data=a.data.data.map(t=>t.percentage.aids),this.seriesProvince[1].data=a.data.data.map(t=>t.percentage.malaria),this.seriesProvince[2].data=a.data.data.map(t=>t.percentage.tbc),a)).then(a=>{this.$refs.chartProvince.refresh()}).catch(a=>{console.log(a)})}}}),ce=e=>(bt("data-v-000ed228"),e=e(),mt(),e),Mt=ce(()=>B("div",{class:"tw-font-bold tw-py-3 text-center tw-flex tw-justify-center tw-flex-col tw-w-full"},[B("div",{class:"tw-text-4xl"},[B("span",{class:"text-secondary"},"e"),U("Monev ")]),B("div",{class:"tw-uppercase tw-text-xs md:tw-text-lg text-center"},[U(" Sistem Informasi ADINKES"),B("br"),U(" Monitoring Evaluasi Capaian RSSH - ATM ")])],-1)),Dt={class:"tw-max-w-6xl xl:tw-mx-auto tw-mx-5 tw-space-y-8"},Kt=ce(()=>B("div",{class:"text-primary tw-text-xl"}," Persentase Anggaran ATM Terhadap Bidang Kesehatan Provinsi ",-1)),Ft={class:"text-center tw-py-10"},Qt={class:"bg-primary tw-w-full"},Vt={class:"tw-flex tw-justify-between text-white tw-max-w-6xl xl:tw-mx-auto tw-mx-5 tw-py-3"},Ot={class:"tw-flex tw-items-center tw-gap-4"},Et=ce(()=>B("span",{class:"tw-text-gray-400"},"Tahun Terpilih",-1));function zt(e,o,a,t,l,c){const m=dt("apex");return ke((ft(),vt(wt,{view:"hHh lpR fFf"},{default:T(()=>[f(We,{reveal:"",modelValue:e.isReveal,"onUpdate:modelValue":o[0]||(o[0]=y=>e.isReveal=y),class:"bg-white text-primary"},{default:T(()=>[f(Ue,null,{default:T(()=>[Mt]),_:1})]),_:1},8,["modelValue"]),f(Tt,{class:"tw-bg-gray-50"},{default:T(()=>[f(yt,{class:"tw-pt-36"},{default:T(()=>[B("div",Dt,[f(oe,{flat:""},{default:T(()=>[f(E,{class:"text-primary tw-text-xl"},{default:T(()=>[U(" Persentase capaian kemitraan untuk ATM ")]),_:1}),f(E,{class:"q-pt-none"},{default:T(()=>[f(m,{type:"bar",height:"250",options:e.chartOptions,series:e.series},null,8,["options","series"])]),_:1})]),_:1}),f(oe,{flat:""},{default:T(()=>[f(E,{class:"text-primary tw-text-xl"},{default:T(()=>[U(" Persentase Anggaran ATM Terhadap Bidang Kesehatan ")]),_:1}),f(E,{class:"q-pt-none"},{default:T(()=>[f(m,{type:"bar",height:"350",options:e.chartOptionsPercentage,series:e.seriesPercentage,ref:"chartPercentage"},null,8,["options","series"])]),_:1})]),_:1}),f(oe,{flat:""},{default:T(()=>[f(E,{class:"tw-flex tw-justify-between tw-items-center"},{default:T(()=>[Kt,f(we,{options:e.list_province,label:"Provinsi",modelValue:e.province,"onUpdate:modelValue":[o[1]||(o[1]=y=>e.province=y),e.findProvince],"map-options":"","emit-value":"","use-input":"",onFilter:e.filterProvince},null,8,["options","modelValue","onFilter","onUpdate:modelValue"])]),_:1}),f(E,{class:"q-pt-none"},{default:T(()=>[f(m,{type:"bar",height:"350",options:e.chartOptionsProvince,series:e.seriesProvince,ref:"chartProvince"},null,8,["options","series"])]),_:1})]),_:1}),B("footer",Ft,gt(new Date().getFullYear())+" \xA9 Copyright All Right Reserved ",1)]),f(Lt,{class:"tw-z-50",expand:"",position:"top"},{default:T(()=>[B("div",Qt,[B("div",Vt,[B("div",Ot,[Et,U(" / "),f(we,{class:"my-select",options:e.list_year,modelValue:e.year,"onUpdate:modelValue":o[2]||(o[2]=y=>e.year=y),borderless:"",dense:"","map-options":"","emit-value":""},null,8,["options","modelValue"])]),f(ht,{color:"secondary",label:e.authStore.token?"Dashabord":"Masuk",to:{name:e.authStore.token?"beranda":"login"},unelevated:"","no-caps":""},null,8,["label","to"])]),f(Rt,{modelValue:e.tab,"onUpdate:modelValue":o[3]||(o[3]=y=>e.tab=y),align:"justify","no-caps":"",class:"text-white"},{default:T(()=>[f(Z,{name:"Dashboard1",label:"Dashboard 1"}),f(Z,{name:"Dashboard2",label:"Dashboard 2"}),f(Z,{name:"Dashboard3",label:"Dashboard 3"}),f(Z,{name:"Dashboard4",label:"Dashboard 4"})]),_:1},8,["modelValue"])])]),_:1})]),_:1})]),_:1})]),_:1})),[[At,e.onScroll]])}var Zt=st(It,[["render",zt],["__scopeId","data-v-000ed228"]]);export{Zt as default};

import{u as Qe,a as dt,b as ft,c as vt,d as Et,e as Lt,f as it,g as Rt}from"./QPage.57619862.js";import{c as Le,as as Ht,at as Tt,a as v,g as Pt,h as g,k as Fe,au as Dt,R as $t,j as Re,m as ue,am as Nt,r as E,w as ge,av as jt,aw as Kt,a2 as Qt,ax as Ut,o as mt,n as G,ay as Wt,az as Xt,O as je,aA as pe,M as Yt,ar as Se,aB as Gt,af as Jt,b as Zt}from"./index.b0632e82.js";import{u as St,a as gt}from"./uid.b2c620fa.js";import{o as rt,j as el,k as tl,i as ll,h as ul,g as nl}from"./QDialog.a77f7843.js";var al=Le({name:"QField",inheritAttrs:!1,props:Qe,emits:dt,setup(){return ft(vt())}});const ol={xs:8,sm:10,md:14,lg:20,xl:24};var il=Le({name:"QChip",props:{...St,...Ht,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:r,emit:i}){const{proxy:{$q:b}}=Re(),A=gt(e,b),o=Tt(e,ol),O=v(()=>e.selected===!0||e.icon!==void 0),V=v(()=>e.selected===!0?e.iconSelected||b.iconSet.chip.selected:e.icon),y=v(()=>e.iconRemove||b.iconSet.chip.remove),_=v(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),s=v(()=>{const w=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(w?` text-${w} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(_.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(A.value===!0?" q-chip--dark q-dark":"")}),k=v(()=>{const w=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},j={...w,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||b.lang.label.remove};return{chip:w,remove:j}});function z(w){w.keyCode===13&&h(w)}function h(w){e.disable||(i("update:selected",!e.selected),i("click",w))}function H(w){(w.keyCode===void 0||w.keyCode===13)&&(ue(w),e.disable===!1&&(i("update:modelValue",!1),i("remove")))}function B(){const w=[];_.value===!0&&w.push(g("div",{class:"q-focus-helper"})),O.value===!0&&w.push(g(Fe,{class:"q-chip__icon q-chip__icon--left",name:V.value}));const j=e.label!==void 0?[g("div",{class:"ellipsis"},[e.label])]:void 0;return w.push(g("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Dt(r.default,j))),e.iconRight&&w.push(g(Fe,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&w.push(g(Fe,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:y.value,...k.value.remove,onClick:H,onKeyup:H})),w}return()=>{if(e.modelValue===!1)return;const w={class:s.value,style:o.value};return _.value===!0&&Object.assign(w,k.value.chip,{onClick:h,onKeyup:z}),Pt("div",w,B(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[$t,e.ripple]])}}});let Ee=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const r=document.createElement("div");Object.assign(r.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(r),e.scrollLeft=-1e3,Ee=e.scrollLeft>=0,e.remove()}const K=1e3,rl=["start","center","end","start-force","center-force","end-force"],ht=Array.prototype.filter,cl=window.getComputedStyle(document.body).overflowAnchor===void 0?Nt:function(e,r){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const i=e.children||[];ht.call(i,A=>A.dataset&&A.dataset.qVsAnchor!==void 0).forEach(A=>{delete A.dataset.qVsAnchor});const b=i[r];b&&b.dataset&&(b.dataset.qVsAnchor="")}))};function he(e,r){return e+r}function Ke(e,r,i,b,A,o,O,V){const y=e===window?document.scrollingElement||document.documentElement:e,_=A===!0?"offsetWidth":"offsetHeight",s={scrollStart:0,scrollViewSize:-O-V,scrollMaxSize:0,offsetStart:-O,offsetEnd:-V};if(A===!0?(e===window?(s.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s.scrollViewSize+=document.documentElement.clientWidth):(s.scrollStart=y.scrollLeft,s.scrollViewSize+=y.clientWidth),s.scrollMaxSize=y.scrollWidth,o===!0&&(s.scrollStart=(Ee===!0?s.scrollMaxSize-s.scrollViewSize:0)-s.scrollStart)):(e===window?(s.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,s.scrollViewSize+=document.documentElement.clientHeight):(s.scrollStart=y.scrollTop,s.scrollViewSize+=y.clientHeight),s.scrollMaxSize=y.scrollHeight),i!==null)for(let k=i.previousElementSibling;k!==null;k=k.previousElementSibling)k.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetStart+=k[_]);if(b!==null)for(let k=b.nextElementSibling;k!==null;k=k.nextElementSibling)k.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetEnd+=k[_]);if(r!==e){const k=y.getBoundingClientRect(),z=r.getBoundingClientRect();A===!0?(s.offsetStart+=z.left-k.left,s.offsetEnd-=z.width):(s.offsetStart+=z.top-k.top,s.offsetEnd-=z.height),e!==window&&(s.offsetStart+=s.scrollStart),s.offsetEnd+=s.scrollMaxSize-s.offsetStart}return s}function ct(e,r,i,b){r==="end"&&(r=(e===window?document.body:e)[i===!0?"scrollWidth":"scrollHeight"]),e===window?i===!0?(b===!0&&(r=(Ee===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-r),window.scrollTo(r,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r):i===!0?(b===!0&&(r=(Ee===!0?e.scrollWidth-e.offsetWidth:0)-r),e.scrollLeft=r):e.scrollTop=r}function Ae(e,r,i,b){if(i>=b)return 0;const A=r.length,o=Math.floor(i/K),O=Math.floor((b-1)/K)+1;let V=e.slice(o,O).reduce(he,0);return i%K!==0&&(V-=r.slice(o*K,i).reduce(he,0)),b%K!==0&&b!==A&&(V-=r.slice(b,O*K).reduce(he,0)),V}const bt={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},yl=Object.keys(bt),sl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...bt};function dl({virtualScrollLength:e,getVirtualScrollTarget:r,getVirtualScrollEl:i,virtualScrollItemSizeComputed:b}){const A=Re(),{props:o,emit:O,proxy:V}=A,{$q:y}=V;let _,s,k,z=[],h;const H=E(0),B=E(0),w=E({}),j=E(null),P=E(null),W=E(null),F=E({from:0,to:0}),M=v(()=>o.tableColspan!==void 0?o.tableColspan:100);b===void 0&&(b=v(()=>o.virtualScrollItemSize));const X=v(()=>b.value+";"+o.virtualScrollHorizontal),be=v(()=>X.value+";"+o.virtualScrollSliceRatioBefore+";"+o.virtualScrollSliceRatioAfter);ge(be,()=>{Y()}),ge(X,ne);function ne(){Z(s,!0)}function ye(n){Z(n===void 0?s:n)}function J(n,c){const f=r();if(f==null||f.nodeType===8)return;const p=Ke(f,i(),j.value,P.value,o.virtualScrollHorizontal,y.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd);k!==p.scrollViewSize&&Y(p.scrollViewSize),ae(f,p,Math.min(e.value-1,Math.max(0,parseInt(n,10)||0)),0,rl.indexOf(c)>-1?c:s>-1&&n>s?"end":"start")}function Q(){const n=r();if(n==null||n.nodeType===8)return;const c=Ke(n,i(),j.value,P.value,o.virtualScrollHorizontal,y.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd),f=e.value-1,p=c.scrollMaxSize-c.offsetStart-c.offsetEnd-B.value;if(_===c.scrollStart)return;if(c.scrollMaxSize<=0){ae(n,c,0,0);return}k!==c.scrollViewSize&&Y(c.scrollViewSize),we(F.value.from);const L=Math.floor(c.scrollMaxSize-Math.max(c.scrollViewSize,c.offsetEnd)-Math.min(h[f],c.scrollViewSize/2));if(L>0&&Math.ceil(c.scrollStart)>=L){ae(n,c,f,c.scrollMaxSize-c.offsetEnd-z.reduce(he,0));return}let C=0,m=c.scrollStart-c.offsetStart,R=m;if(m<=p&&m+c.scrollViewSize>=H.value)m-=H.value,C=F.value.from,R=m;else for(let S=0;m>=z[S]&&C<f;S++)m-=z[S],C+=K;for(;m>0&&C<f;)m-=h[C],m>-c.scrollViewSize?(C++,R=m):R=h[C]+m;ae(n,c,C,R)}function ae(n,c,f,p,L){const C=typeof L=="string"&&L.indexOf("-force")>-1,m=C===!0?L.replace("-force",""):L,R=m!==void 0?m:"start";let S=Math.max(0,f-w.value[R]),D=S+w.value.total;D>e.value&&(D=e.value,S=Math.max(0,D-w.value.total)),_=c.scrollStart;const ie=S!==F.value.from||D!==F.value.to;if(ie===!1&&m===void 0){Ce(f);return}const{activeElement:ke}=document,U=W.value;ie===!0&&U!==null&&U!==ke&&U.contains(ke)===!0&&(U.addEventListener("focusout",Ve),setTimeout(()=>{U!==null&&U.removeEventListener("focusout",Ve)})),cl(U,f-S);const _e=m!==void 0?h.slice(S,f).reduce(he,0):0;if(ie===!0){const ee=D>=F.value.from&&S<=F.value.to?F.value.to:D;F.value={from:S,to:ee},H.value=Ae(z,h,0,S),B.value=Ae(z,h,D,e.value),requestAnimationFrame(()=>{F.value.to!==D&&_===c.scrollStart&&(F.value={from:F.value.from,to:D},B.value=Ae(z,h,D,e.value))})}requestAnimationFrame(()=>{if(_!==c.scrollStart)return;ie===!0&&we(S);const ee=h.slice(S,f).reduce(he,0),re=ee+c.offsetStart+H.value,Ie=re+h[f];let qe=re+p;if(m!==void 0){const He=ee-_e,$=c.scrollStart+He;qe=C!==!0&&$<re&&Ie<$+c.scrollViewSize?$:m==="end"?Ie-c.scrollViewSize:re-(m==="start"?0:Math.round((c.scrollViewSize-h[f])/2))}_=qe,ct(n,qe,o.virtualScrollHorizontal,y.lang.rtl),Ce(f)})}function we(n){const c=W.value;if(c){const f=ht.call(c.children,S=>S.classList&&S.classList.contains("q-virtual-scroll--skip")===!1),p=f.length,L=o.virtualScrollHorizontal===!0?S=>S.getBoundingClientRect().width:S=>S.offsetHeight;let C=n,m,R;for(let S=0;S<p;){for(m=L(f[S]),S++;S<p&&f[S].classList.contains("q-virtual-scroll--with-prev")===!0;)m+=L(f[S]),S++;R=m-h[C],R!==0&&(h[C]+=R,z[Math.floor(C/K)]+=R),C++}}}function Ve(){W.value!==null&&W.value!==void 0&&W.value.focus()}function Z(n,c){const f=1*b.value;(c===!0||Array.isArray(h)===!1)&&(h=[]);const p=h.length;h.length=e.value;for(let C=e.value-1;C>=p;C--)h[C]=f;const L=Math.floor((e.value-1)/K);z=[];for(let C=0;C<=L;C++){let m=0;const R=Math.min((C+1)*K,e.value);for(let S=C*K;S<R;S++)m+=h[S];z.push(m)}s=-1,_=void 0,H.value=Ae(z,h,0,F.value.from),B.value=Ae(z,h,F.value.to,e.value),n>=0?(we(F.value.from),G(()=>{J(n)})):oe()}function Y(n){if(n===void 0&&typeof window!="undefined"){const m=r();m!=null&&m.nodeType!==8&&(n=Ke(m,i(),j.value,P.value,o.virtualScrollHorizontal,y.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd).scrollViewSize)}k=n;const c=parseFloat(o.virtualScrollSliceRatioBefore)||0,f=parseFloat(o.virtualScrollSliceRatioAfter)||0,p=1+c+f,L=n===void 0||n<=0?1:Math.ceil(n/b.value),C=Math.max(1,L,Math.ceil((o.virtualScrollSliceSize>0?o.virtualScrollSliceSize:10)/p));w.value={total:Math.ceil(C*p),start:Math.ceil(C*c),center:Math.ceil(C*(.5+c)),end:Math.ceil(C*(1+c)),view:L}}function ze(n,c){const f=o.virtualScrollHorizontal===!0?"width":"height",p={["--q-virtual-scroll-item-"+f]:b.value+"px"};return[n==="tbody"?g(n,{class:"q-virtual-scroll__padding",key:"before",ref:j},[g("tr",[g("td",{style:{[f]:`${H.value}px`,...p},colspan:M.value})])]):g(n,{class:"q-virtual-scroll__padding",key:"before",ref:j,style:{[f]:`${H.value}px`,...p}}),g(n,{class:"q-virtual-scroll__content",key:"content",ref:W,tabindex:-1},c.flat()),n==="tbody"?g(n,{class:"q-virtual-scroll__padding",key:"after",ref:P},[g("tr",[g("td",{style:{[f]:`${B.value}px`,...p},colspan:M.value})])]):g(n,{class:"q-virtual-scroll__padding",key:"after",ref:P,style:{[f]:`${B.value}px`,...p}})]}function Ce(n){s!==n&&(o.onVirtualScroll!==void 0&&O("virtualScroll",{index:n,from:F.value.from,to:F.value.to-1,direction:n<s?"decrease":"increase",ref:V}),s=n)}Y();const oe=jt(Q,y.platform.is.ios===!0?120:35);Kt(()=>{Y()});let a=!1;return Qt(()=>{a=!0}),Ut(()=>{if(a!==!0)return;const n=r();_!==void 0&&n!==void 0&&n!==null&&n.nodeType!==8?ct(n,_,o.virtualScrollHorizontal,y.lang.rtl):J(s)}),mt(()=>{oe.cancel()}),Object.assign(V,{scrollTo:J,reset:ne,refresh:ye}),{virtualScrollSliceRange:F,virtualScrollSliceSizeComputed:w,setVirtualScrollSize:Y,onVirtualScrollEvt:oe,localResetVirtualScroll:Z,padVirtualScroll:ze,scrollTo:J,reset:ne,refresh:ye}}const st=e=>["add","add-unique","toggle"].includes(e),fl=".*+?^${}()|[]\\",vl=Object.keys(Qe);var wl=Le({name:"QSelect",inheritAttrs:!1,props:{...sl,...Et,...Qe,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:st},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...dt,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:r,emit:i}){const{proxy:b}=Re(),{$q:A}=b,o=E(!1),O=E(!1),V=E(-1),y=E(""),_=E(!1),s=E(!1);let k=null,z,h,H,B=null,w,j,P,W;const F=E(null),M=E(null),X=E(null),be=E(null),ne=E(null),ye=Lt(e),J=Rt(lt),Q=v(()=>Array.isArray(e.options)?e.options.length:0),ae=v(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:we,virtualScrollSliceSizeComputed:Ve,localResetVirtualScroll:Z,padVirtualScroll:Y,onVirtualScrollEvt:ze,scrollTo:Ce,setVirtualScrollSize:oe}=dl({virtualScrollLength:Q,getVirtualScrollTarget:Ct,getVirtualScrollEl:et,virtualScrollItemSizeComputed:ae}),a=vt(),n=v(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,u=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const l=e.mapOptions===!0&&z!==void 0?z:[],d=u.map(x=>Vt(x,l));return e.modelValue===null&&t===!0?d.filter(x=>x!==null):d}return u}),c=v(()=>{const t={};return vl.forEach(u=>{const l=e[u];l!==void 0&&(t[u]=l)}),t}),f=v(()=>e.optionsDark===null?a.isDark.value:e.optionsDark),p=v(()=>it(n.value)),L=v(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||n.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),C=v(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),m=v(()=>Q.value===0),R=v(()=>n.value.map(t=>N.value(t)).join(", ")),S=v(()=>e.displayValue!==void 0?e.displayValue:R.value),D=v(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ie=v(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||n.value.some(D.value))),ke=v(()=>a.focused.value===!0?e.tabindex:-1),U=v(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":o.value===!0?"true":"false","aria-controls":`${a.targetUid.value}_lb`};return V.value>=0&&(t["aria-activedescendant"]=`${a.targetUid.value}_${V.value}`),t}),_e=v(()=>({id:`${a.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),ee=v(()=>n.value.map((t,u)=>({index:u,opt:t,html:D.value(t),selected:!0,removeAtIndex:wt,toggleOption:te,tabindex:ke.value}))),re=v(()=>{if(Q.value===0)return[];const{from:t,to:u}=we.value;return e.options.slice(t,u).map((l,d)=>{const x=ce.value(l)===!0,q=t+d,I={clickable:!0,active:!1,activeClass:He.value,manualFocus:!0,focused:!1,disable:x,tabindex:-1,dense:e.optionsDense,dark:f.value,role:"option",id:`${a.targetUid.value}_${q}`,onClick:()=>{te(l)}};return x!==!0&&(De(l)===!0&&(I.active=!0),V.value===q&&(I.focused=!0),I["aria-selected"]=I.active===!0?"true":"false",A.platform.is.desktop===!0&&(I.onMousemove=()=>{o.value===!0&&se(q)})),{index:q,opt:l,html:D.value(l),label:N.value(l),selected:I.active,focused:I.focused,toggleOption:te,setOptionIndex:se,itemProps:I}})}),Ie=v(()=>e.dropdownIcon!==void 0?e.dropdownIcon:A.iconSet.arrow.dropdown),qe=v(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),He=v(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),$=v(()=>Pe(e.optionValue,"value")),N=v(()=>Pe(e.optionLabel,"label")),ce=v(()=>Pe(e.optionDisable,"disable")),Me=v(()=>n.value.map(t=>$.value(t))),yt=v(()=>{const t={onInput:lt,onChange:J,onKeydown:Ze,onKeyup:Ge,onKeypress:Je,onFocus:Xe,onClick(u){h===!0&&Se(u)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=J,t});ge(n,t=>{z=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&a.innerLoading.value!==!0&&(O.value!==!0&&o.value!==!0||p.value!==!0)&&(H!==!0&&me(),(O.value===!0||o.value===!0)&&de(""))},{immediate:!0}),ge(()=>e.fillInput,me),ge(o,$e),ge(Q,Ft);function Ue(t){return e.emitValue===!0?$.value(t):t}function Te(t){if(t>-1&&t<n.value.length)if(e.multiple===!0){const u=e.modelValue.slice();i("remove",{index:t,value:u.splice(t,1)[0]}),i("update:modelValue",u)}else i("update:modelValue",null)}function wt(t){Te(t),a.focus()}function We(t,u){const l=Ue(t);if(e.multiple!==!0){e.fillInput===!0&&xe(N.value(t),!0,!0),i("update:modelValue",l);return}if(n.value.length===0){i("add",{index:0,value:l}),i("update:modelValue",e.multiple===!0?[l]:l);return}if(u===!0&&De(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const d=e.modelValue.slice();i("add",{index:d.length,value:l}),d.push(l),i("update:modelValue",d)}function te(t,u){if(a.editable.value!==!0||t===void 0||ce.value(t)===!0)return;const l=$.value(t);if(e.multiple!==!0){u!==!0&&(xe(e.fillInput===!0?N.value(t):"",!0,!0),le()),M.value!==null&&M.value.focus(),(n.value.length===0||pe($.value(n.value[0]),l)!==!0)&&i("update:modelValue",e.emitValue===!0?l:t);return}if((h!==!0||_.value===!0)&&a.focus(),Xe(),n.value.length===0){const q=e.emitValue===!0?l:t;i("add",{index:0,value:q}),i("update:modelValue",e.multiple===!0?[q]:q);return}const d=e.modelValue.slice(),x=Me.value.findIndex(q=>pe(q,l));if(x>-1)i("remove",{index:x,value:d.splice(x,1)[0]});else{if(e.maxValues!==void 0&&d.length>=e.maxValues)return;const q=e.emitValue===!0?l:t;i("add",{index:d.length,value:q}),d.push(q)}i("update:modelValue",d)}function se(t){if(A.platform.is.desktop!==!0)return;const u=t>-1&&t<Q.value?t:-1;V.value!==u&&(V.value=u)}function Oe(t=1,u){if(o.value===!0){let l=V.value;do l=rt(l+t,-1,Q.value-1);while(l!==-1&&l!==V.value&&ce.value(e.options[l])===!0);V.value!==l&&(se(l),Ce(l),u!==!0&&e.useInput===!0&&e.fillInput===!0&&Be(l>=0?N.value(e.options[l]):w))}}function Vt(t,u){const l=d=>pe($.value(d),t);return e.options.find(l)||u.find(l)||t}function Pe(t,u){const l=t!==void 0?t:u;return typeof l=="function"?l:d=>d!==null&&typeof d=="object"&&l in d?d[l]:d}function De(t){const u=$.value(t);return Me.value.find(l=>pe(l,u))!==void 0}function Xe(t){e.useInput===!0&&M.value!==null&&(t===void 0||M.value===t.target&&t.target.value===R.value)&&M.value.select()}function Ye(t){Yt(t,27)===!0&&o.value===!0&&(Se(t),le(),me()),i("keyup",t)}function Ge(t){const{value:u}=t.target;if(t.keyCode!==void 0){Ye(t);return}if(t.target.value="",k!==null&&(clearTimeout(k),k=null),me(),typeof u=="string"&&u.length!==0){const l=u.toLocaleLowerCase(),d=q=>{const I=e.options.find(T=>q.value(T).toLocaleLowerCase()===l);return I===void 0?!1:(n.value.indexOf(I)===-1?te(I):le(),!0)},x=q=>{d($)!==!0&&(d(N)===!0||q===!0||de(u,!0,()=>x(!0)))};x()}else a.clearValue(t)}function Je(t){i("keypress",t)}function Ze(t){if(i("keydown",t),Gt(t)===!0)return;const u=y.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),l=t.shiftKey!==!0&&e.multiple!==!0&&(V.value>-1||u===!0);if(t.keyCode===27){je(t);return}if(t.keyCode===9&&l===!1){fe();return}if(t.target===void 0||t.target.id!==a.targetUid.value||a.editable.value!==!0)return;if(t.keyCode===40&&a.innerLoading.value!==!0&&o.value===!1){ue(t),ve();return}if(t.keyCode===8&&e.hideSelected!==!0&&y.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Te(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&i("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof y.value!="string"||y.value.length===0)&&(ue(t),V.value=-1,Oe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&Ve.value!==void 0&&(ue(t),V.value=Math.max(-1,Math.min(Q.value,V.value+(t.keyCode===33?-1:1)*Ve.value.view)),Oe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ue(t),Oe(t.keyCode===38?-1:1,e.multiple));const d=Q.value;if((P===void 0||W<Date.now())&&(P=""),d>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||P.length!==0)){o.value!==!0&&ve(t);const x=t.key.toLocaleLowerCase(),q=P.length===1&&P[0]===x;W=Date.now()+1500,q===!1&&(ue(t),P+=x);const I=new RegExp("^"+P.split("").map(Ne=>fl.indexOf(Ne)>-1?"\\"+Ne:Ne).join(".*"),"i");let T=V.value;if(q===!0||T<0||I.test(N.value(e.options[T]))!==!0)do T=rt(T+1,-1,d-1);while(T!==V.value&&(ce.value(e.options[T])===!0||I.test(N.value(e.options[T]))!==!0));V.value!==T&&G(()=>{se(T),Ce(T),T>=0&&e.useInput===!0&&e.fillInput===!0&&Be(N.value(e.options[T]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||P!=="")&&(t.keyCode!==9||l===!1))){if(t.keyCode!==9&&ue(t),V.value>-1&&V.value<d){te(e.options[V.value]);return}if(u===!0){const x=(q,I)=>{if(I){if(st(I)!==!0)return}else I=e.newValueMode;if(q==null)return;xe("",e.multiple!==!0,!0),(I==="toggle"?te:We)(q,I==="add-unique"),e.multiple!==!0&&(M.value!==null&&M.value.focus(),le())};if(e.onNewValue!==void 0?i("newValue",y.value,x):x(y.value),e.multiple!==!0)return}o.value===!0?fe():a.innerLoading.value!==!0&&ve()}}function et(){return h===!0?ne.value:X.value!==null&&X.value.contentEl!==null?X.value.contentEl:void 0}function Ct(){return et()}function kt(){return e.hideSelected===!0?[]:r["selected-item"]!==void 0?ee.value.map(t=>r["selected-item"](t)).slice():r.selected!==void 0?[].concat(r.selected()):e.useChips===!0?ee.value.map((t,u)=>g(il,{key:"option-"+u,removable:a.editable.value===!0&&ce.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:ke.value,onRemove(){t.removeAtIndex(u)}},()=>g("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:N.value(t.opt)}))):[g("span",{[ie.value===!0?"innerHTML":"textContent"]:S.value})]}function tt(){if(m.value===!0)return r["no-option"]!==void 0?r["no-option"]({inputValue:y.value}):void 0;const t=r.option!==void 0?r.option:l=>g(nl,{key:l.index,...l.itemProps},()=>g(ll,()=>g(ul,()=>g("span",{[l.html===!0?"innerHTML":"textContent"]:l.label}))));let u=Y("div",re.value.map(t));return r["before-options"]!==void 0&&(u=r["before-options"]().concat(u)),Jt(r["after-options"],u)}function qt(t,u){const l=u===!0?{...U.value,...a.splitAttrs.attributes.value}:void 0,d={ref:u===!0?M:void 0,key:"i_t",class:L.value,style:e.inputStyle,value:y.value!==void 0?y.value:"",type:"search",...l,id:u===!0?a.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...yt.value};return t!==!0&&h===!0&&(Array.isArray(d.class)===!0?d.class=[...d.class,"no-pointer-events"]:d.class+=" no-pointer-events"),g("input",d)}function lt(t){k!==null&&(clearTimeout(k),k=null),!(t&&t.target&&t.target.qComposing===!0)&&(Be(t.target.value||""),H=!0,w=y.value,a.focused.value!==!0&&(h!==!0||_.value===!0)&&a.focus(),e.onFilter!==void 0&&(k=setTimeout(()=>{k=null,de(y.value)},e.inputDebounce)))}function Be(t){y.value!==t&&(y.value=t,i("inputValue",t))}function xe(t,u,l){H=l!==!0,e.useInput===!0&&(Be(t),(u===!0||l!==!0)&&(w=t),u!==!0&&de(t))}function de(t,u,l){if(e.onFilter===void 0||u!==!0&&a.focused.value!==!0)return;a.innerLoading.value===!0?i("filterAbort"):(a.innerLoading.value=!0,s.value=!0),t!==""&&e.multiple!==!0&&n.value.length!==0&&H!==!0&&t===N.value(n.value[0])&&(t="");const d=setTimeout(()=>{o.value===!0&&(o.value=!1)},10);B!==null&&clearTimeout(B),B=d,i("filter",t,(x,q)=>{(u===!0||a.focused.value===!0)&&B===d&&(clearTimeout(B),typeof x=="function"&&x(),s.value=!1,G(()=>{a.innerLoading.value=!1,a.editable.value===!0&&(u===!0?o.value===!0&&le():o.value===!0?$e(!0):o.value=!0),typeof q=="function"&&G(()=>{q(b)}),typeof l=="function"&&G(()=>{l(b)})}))},()=>{a.focused.value===!0&&B===d&&(clearTimeout(B),a.innerLoading.value=!1,s.value=!1),o.value===!0&&(o.value=!1)})}function xt(){return g(el,{ref:X,class:C.value,style:e.popupContentStyle,modelValue:o.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&m.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:f.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:qe.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,..._e.value,onScrollPassive:ze,onBeforeShow:nt,onBeforeHide:pt,onShow:At},tt)}function pt(t){at(t),fe()}function At(){oe()}function zt(t){Se(t),M.value!==null&&M.value.focus(),_.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function _t(t){Se(t),G(()=>{_.value=!1})}function It(){const t=[g(al,{class:`col-auto ${a.fieldClass.value}`,...c.value,for:a.targetUid.value,dark:f.value,square:!0,loading:s.value,itemAligned:!1,filled:!0,stackLabel:y.value.length!==0,...a.splitAttrs.listeners.value,onFocus:zt,onBlur:_t},{...r,rawControl:()=>a.getControl(!0),before:void 0,after:void 0})];return o.value===!0&&t.push(g("div",{ref:ne,class:C.value+" scroll",style:e.popupContentStyle,..._e.value,onClick:je,onScrollPassive:ze},tt())),g(tl,{ref:be,modelValue:O.value,position:e.useInput===!0?"top":void 0,transitionShow:j,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:nt,onBeforeHide:Mt,onHide:Ot,onShow:Bt},()=>g("div",{class:"q-select__dialog"+(f.value===!0?" q-select__dialog--dark q-dark":"")+(_.value===!0?" q-select__dialog--focused":"")},t))}function Mt(t){at(t),be.value!==null&&be.value.__updateRefocusTarget(a.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),a.focused.value=!1}function Ot(t){le(),a.focused.value===!1&&i("blur",t),me()}function Bt(){const t=document.activeElement;(t===null||t.id!==a.targetUid.value)&&M.value!==null&&M.value!==t&&M.value.focus(),oe()}function fe(){O.value!==!0&&(V.value=-1,o.value===!0&&(o.value=!1),a.focused.value===!1&&(B!==null&&(clearTimeout(B),B=null),a.innerLoading.value===!0&&(i("filterAbort"),a.innerLoading.value=!1,s.value=!1)))}function ve(t){a.editable.value===!0&&(h===!0?(a.onControlFocusin(t),O.value=!0,G(()=>{a.focus()})):a.focus(),e.onFilter!==void 0?de(y.value):(m.value!==!0||r["no-option"]!==void 0)&&(o.value=!0))}function le(){O.value=!1,fe()}function me(){e.useInput===!0&&xe(e.multiple!==!0&&e.fillInput===!0&&n.value.length!==0&&N.value(n.value[0])||"",!0,!0)}function $e(t){let u=-1;if(t===!0){if(n.value.length!==0){const l=$.value(n.value[0]);u=e.options.findIndex(d=>pe($.value(d),l))}Z(u)}se(u)}function Ft(t,u){o.value===!0&&a.innerLoading.value===!1&&(Z(-1,!0),G(()=>{o.value===!0&&a.innerLoading.value===!1&&(t>u?Z():$e(!0))}))}function ut(){O.value===!1&&X.value!==null&&X.value.updatePosition()}function nt(t){t!==void 0&&Se(t),i("popupShow",t),a.hasPopupOpen=!0,a.onControlFocusin(t)}function at(t){t!==void 0&&Se(t),i("popupHide",t),a.hasPopupOpen=!1,a.onControlFocusout(t)}function ot(){h=A.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?r["no-option"]!==void 0||e.onFilter!==void 0||m.value===!1:!0),j=A.platform.is.ios===!0&&h===!0&&e.useInput===!0?"fade":e.transitionShow}return Wt(ot),Xt(ut),ot(),mt(()=>{k!==null&&clearTimeout(k)}),Object.assign(b,{showPopup:ve,hidePopup:le,removeAtIndex:Te,add:We,toggleOption:te,getOptionIndex:()=>V.value,setOptionIndex:se,moveOptionSelection:Oe,filter:de,updateMenuPosition:ut,updateInputValue:xe,isOptionSelected:De,getEmittingOptionValue:Ue,isOptionDisabled:(...t)=>ce.value.apply(null,t)===!0,getOptionValue:(...t)=>$.value.apply(null,t),getOptionLabel:(...t)=>N.value.apply(null,t)}),Object.assign(a,{innerValue:n,fieldClass:v(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:F,targetRef:M,hasValue:p,showPopup:ve,floatingLabel:v(()=>e.hideSelected!==!0&&p.value===!0||typeof y.value=="number"||y.value.length!==0||it(e.displayValue)),getControlChild:()=>{if(a.editable.value!==!1&&(O.value===!0||m.value!==!0||r["no-option"]!==void 0))return h===!0?It():xt();a.hasPopupOpen===!0&&(a.hasPopupOpen=!1)},controlEvents:{onFocusin(t){a.onControlFocusin(t)},onFocusout(t){a.onControlFocusout(t,()=>{me(),fe()})},onClick(t){if(je(t),h!==!0&&o.value===!0){fe(),M.value!==null&&M.value.focus();return}ve(t)}},getControl:t=>{const u=kt(),l=t===!0||O.value!==!0||h!==!0;if(e.useInput===!0)u.push(qt(t,l));else if(a.editable.value===!0){const x=l===!0?U.value:void 0;u.push(g("input",{ref:l===!0?M:void 0,key:"d_t",class:"q-select__focus-target",id:l===!0?a.targetUid.value:void 0,value:S.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...x,onKeydown:Ze,onKeyup:Ye,onKeypress:Je})),l===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&u.push(g("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ge}))}if(ye.value!==void 0&&e.disable!==!0&&Me.value.length!==0){const x=Me.value.map(q=>g("option",{value:q,selected:!0}));u.push(g("select",{class:"hidden",name:ye.value,multiple:e.multiple},x))}const d=e.useInput===!0||l!==!0?void 0:a.splitAttrs.attributes.value;return g("div",{class:"q-field__native row items-center",...d,...a.splitAttrs.listeners.value},u)},getInnerAppend:()=>e.loading!==!0&&s.value!==!0&&e.hideDropdownIcon!==!0?[g(Fe,{class:"q-select__dropdown-icon"+(o.value===!0?" rotate-180":""),name:Ie.value})]:null}),ft(a)}});const ml=["horizontal","vertical","cell","none"];var Vl=Le({name:"QMarkupTable",props:{...St,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>ml.includes(e)}},setup(e,{slots:r}){const i=Re(),b=gt(e,i.proxy.$q),A=v(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(b.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>g("div",{class:A.value},[g("table",{class:"q-table"},Zt(r.default))])}});export{wl as Q,dl as a,Vl as b,yl as c,Ee as r,sl as u};

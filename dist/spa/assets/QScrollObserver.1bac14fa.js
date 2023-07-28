import{r as E,ae as R,d as v,c as x,o as m,am as S,n as p,h as L,j as y,W as b,w as T,a8 as P,an as C,ao as Q}from"./index.a7378ebc.js";function j(){const n=E(!R.value);return n.value===!1&&v(()=>{n.value=!0}),n}const O=typeof ResizeObserver!="undefined",z=O===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var N=x({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(n,{emit:g}){let e=null,t,r={width:-1,height:-1};function c(o){o===!0||n.debounce===0||n.debounce==="0"?l():e===null&&(e=setTimeout(l,n.debounce))}function l(){if(e!==null&&(clearTimeout(e),e=null),t){const{offsetWidth:o,offsetHeight:i}=t;(o!==r.width||i!==r.height)&&(r={width:o,height:i},g("resize",r))}}const{proxy:d}=y();if(O===!0){let o;const i=a=>{t=d.$el.parentNode,t?(o=new ResizeObserver(c),o.observe(t),l()):a!==!0&&p(()=>{i(!0)})};return v(()=>{i()}),m(()=>{e!==null&&clearTimeout(e),o!==void 0&&(o.disconnect!==void 0?o.disconnect():t&&o.unobserve(t))}),S}else{let a=function(){e!==null&&(clearTimeout(e),e=null),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",c,b.passive),i=void 0)},u=function(){a(),t&&t.contentDocument&&(i=t.contentDocument.defaultView,i.addEventListener("resize",c,b.passive),l())};const o=j();let i;return v(()=>{p(()=>{t=d.$el,t&&u()})}),m(a),d.trigger=c,()=>{if(o.value===!0)return L("object",{style:z.style,tabindex:-1,type:"text/html",data:z.url,"aria-hidden":"true",onLoad:u})}}}});const{passive:w}=b,D=["both","horizontal","vertical"];var V=x({name:"QScrollObserver",props:{axis:{type:String,validator:n=>D.includes(n),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(n,{emit:g}){const e={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,r,c;T(()=>n.scrollTarget,()=>{o(),d()});function l(){t!==null&&t();const u=Math.max(0,C(r)),f=Q(r),s={top:u-e.position.top,left:f-e.position.left};if(n.axis==="vertical"&&s.top===0||n.axis==="horizontal"&&s.left===0)return;const h=Math.abs(s.top)>=Math.abs(s.left)?s.top<0?"up":"down":s.left<0?"left":"right";e.position={top:u,left:f},e.directionChanged=e.direction!==h,e.delta=s,e.directionChanged===!0&&(e.direction=h,e.inflectionPoint=e.position),g("scroll",{...e})}function d(){r=P(c,n.scrollTarget),r.addEventListener("scroll",i,w),i(!0)}function o(){r!==void 0&&(r.removeEventListener("scroll",i,w),r=void 0)}function i(u){if(u===!0||n.debounce===0||n.debounce==="0")l();else if(t===null){const[f,s]=n.debounce?[setTimeout(l,n.debounce),clearTimeout]:[requestAnimationFrame(l),cancelAnimationFrame];t=()=>{s(f),t=null}}}const{proxy:a}=y();return T(()=>a.$q.lang.rtl,l),v(()=>{c=a.$el.parentNode,d()}),m(()=>{t!==null&&t(),o()}),Object.assign(a,{trigger:i,getPosition:()=>e}),S}});export{N as Q,V as a};

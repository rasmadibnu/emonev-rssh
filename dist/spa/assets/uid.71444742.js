import{a as i,c as l,h as f,b as y,j as v}from"./index.bad3eabc.js";const m={dark:{type:Boolean,default:null}};function p(t,a){return i(()=>t.dark===null?a.dark.isActive:t.dark)}let o=[],n=[];function g(t){n=n.filter(a=>a!==t)}function w(t){g(t),n.push(t)}function F(t){g(t),n.length===0&&o.length!==0&&(o[o.length-1](),o=[])}function B(t){n.length===0?t():o.push(t)}function k(t){o=o.filter(a=>a!==t)}var x=l({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(t,{slots:a}){const r=i(()=>`q-card__section q-card__section--${t.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>f(t.tag,{class:r.value},y(a.default))}}),C=l({name:"QCard",props:{...m,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(t,{slots:a}){const{proxy:{$q:r}}=v(),s=p(t,r),h=i(()=>"q-card"+(s.value===!0?" q-card--dark q-dark":"")+(t.bordered===!0?" q-card--bordered":"")+(t.square===!0?" q-card--square no-border-radius":"")+(t.flat===!0?" q-card--flat no-shadow":""));return()=>f(t.tag,{class:h.value},y(a.default))}});let u,d=0;const e=new Array(256);for(let t=0;t<256;t++)e[t]=(t+256).toString(16).substring(1);const q=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return a=>{const r=new Uint8Array(a);return t.getRandomValues(r),r}}return a=>{const r=[];for(let s=a;s>0;s--)r.push(Math.floor(Math.random()*256));return r}})(),c=4096;function S(){(u===void 0||d+16>c)&&(d=0,u=q(c));const t=Array.prototype.slice.call(u,d,d+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,e[t[0]]+e[t[1]]+e[t[2]]+e[t[3]]+"-"+e[t[4]]+e[t[5]]+"-"+e[t[6]]+e[t[7]]+"-"+e[t[8]]+e[t[9]]+"-"+e[t[10]]+e[t[11]]+e[t[12]]+e[t[13]]+e[t[14]]+e[t[15]]}export{C as Q,p as a,S as b,x as c,w as d,B as e,k as f,F as r,m as u};

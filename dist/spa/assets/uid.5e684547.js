import{c as l,a as f,h as p,b as y}from"./index.47f1d8a4.js";let r=[],a=[];function d(t){a=a.filter(e=>e!==t)}function m(t){d(t),a.push(t)}function F(t){d(t),a.length===0&&r.length!==0&&(r[r.length-1](),r=[])}function v(t){a.length===0?t():r.push(t)}function w(t){r=r.filter(e=>e!==t)}var b=l({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(t,{slots:e}){const n=f(()=>`q-card__section q-card__section--${t.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>p(t.tag,{class:n.value},y(e.default))}});let s,i=0;const o=new Array(256);for(let t=0;t<256;t++)o[t]=(t+256).toString(16).substring(1);const h=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return e=>{const n=new Uint8Array(e);return t.getRandomValues(n),n}}return e=>{const n=[];for(let u=e;u>0;u--)n.push(Math.floor(Math.random()*256));return n}})(),c=4096;function x(){(s===void 0||i+16>c)&&(i=0,s=h(c));const t=Array.prototype.slice.call(s,i,i+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,o[t[0]]+o[t[1]]+o[t[2]]+o[t[3]]+"-"+o[t[4]]+o[t[5]]+"-"+o[t[6]]+o[t[7]]+"-"+o[t[8]]+o[t[9]]+"-"+o[t[10]]+o[t[11]]+o[t[12]]+o[t[13]]+o[t[14]]+o[t[15]]}export{b as Q,m as a,v as b,w as c,F as r,x as u};

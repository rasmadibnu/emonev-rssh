import{c as n,a as d,h as p,b as i,j as u,ab as c,M as l}from"./index.4ac76403.js";import{u as h,a as m}from"./QCard.31d5c3cb.js";import{k as f,l as q}from"./QDialog.2df1b7e0.js";var k=n({name:"QList",props:{...h,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const r=u(),a=m(e,r.proxy.$q),o=d(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(a.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>p(e.tag,{class:o.value},i(t.default))}});function s(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var _=c({name:"close-popup",beforeMount(e,{value:t}){const r={depth:s(t),handler(a){r.depth!==0&&setTimeout(()=>{const o=f(e);o!==void 0&&q(o,a,r.depth)})},handlerKey(a){l(a,13)===!0&&r.handler(a)}};e.__qclosepopup=r,e.addEventListener("click",r.handler),e.addEventListener("keyup",r.handlerKey)},updated(e,{value:t,oldValue:r}){t!==r&&(e.__qclosepopup.depth=s(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{_ as C,k as Q};

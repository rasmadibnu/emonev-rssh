import{a as e,c as s,h as u,b as n,j as l}from"./index.3ebcb345.js";const c={dark:{type:Boolean,default:null}};function q(a,r){return e(()=>a.dark===null?r.dark.isActive:a.dark)}var f=s({name:"QCard",props:{...c,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const{proxy:{$q:t}}=l(),d=q(a,t),o=e(()=>"q-card"+(d.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>u(a.tag,{class:o.value},n(r.default))}});export{f as Q,q as a,c as u};
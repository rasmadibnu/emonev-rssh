import{u as s,a as n}from"./use-dark.8b4ecca3.js";import{c as u,a as d,h as e,d as b,A as c}from"./index.0b16dcb7.js";const q=["horizontal","vertical","cell","none"];var m=u({name:"QMarkupTable",props:{...s,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:a=>q.includes(a)}},setup(a,{slots:r}){const t=c(),l=n(a,t.proxy.$q),o=d(()=>`q-markup-table q-table__container q-table__card q-table--${a.separator}-separator`+(l.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(a.dense===!0?" q-table--dense":"")+(a.flat===!0?" q-table--flat":"")+(a.bordered===!0?" q-table--bordered":"")+(a.square===!0?" q-table--square":"")+(a.wrapCells===!1?" q-table--no-wrap":""));return()=>e("div",{class:o.value},[e("table",{class:"q-table"},b(r.default))])}});export{m as Q};
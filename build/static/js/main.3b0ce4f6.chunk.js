(this["webpackJsonplista-de-notas-react"]=this["webpackJsonplista-de-notas-react"]||[]).push([[0],{39:function(t,n,e){},40:function(t,n,e){"use strict";e.r(n);var c=e(2),r=e(15),a=e.n(r),o=e(6),i=e(3),u=e(0),s=function(t){var n=t.note,e=t.toggleImportance,c=n.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[n.content,Object(u.jsx)("button",{onClick:e,children:c})]})},j=e(4),l=e.n(j),b="/api/notes",f=function(){return l.a.get(b).then((function(t){return t.data}))},d=function(t){return l.a.post(b,t).then((function(t){return t.data}))},O=function(t,n){return l.a.put("".concat(b,"/").concat(t),n).then((function(t){return t.data}))},h=function(){return Object(u.jsxs)("div",{style:{color:"black",fontStyle:"italic",fontSize:16},children:[" ",Object(u.jsx)("br",{})," ",Object(u.jsx)("em",{children:"Note app, Giancarlo Guerra 2021"})," "]})},m=function(t){var n=t.message;return null===n?null:Object(u.jsx)("div",{className:"success",children:n})},p=function(){var t=Object(c.useState)([]),n=Object(i.a)(t,2),e=n[0],r=n[1],a=Object(c.useState)(""),j=Object(i.a)(a,2),l=j[0],b=j[1],p=Object(c.useState)(!0),x=Object(i.a)(p,2),v=x[0],g=x[1],S=Object(c.useState)(null),k=Object(i.a)(S,2),N=k[0],w=k[1];Object(c.useEffect)((function(){f().then((function(t){r(t)}))}),[]);var y=v?e:e.filter((function(t){return!0===t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(m,{message:N}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return g(!v)},children:["show ",v?"important":"all"]})}),Object(u.jsx)("ul",{children:y.map((function(t){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){var n=e.find((function(n){return n.id===t})),c=Object(o.a)(Object(o.a)({},n),{},{important:!n.important});O(t,c).then((function(n){r(e.map((function(e){return e.id!==t?e:n})))})).catch((function(n){r(e.filter((function(n){return n.id!==t})))}))}(t.id)}},t.id)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:l,date:(new Date).toISOString(),important:Math.random()<.5,id:e.length+1};d(n).then((function(t){w("Nota creada exitosamente"),setTimeout((function(){w(null)}),5e3),r(e.concat(t)),b("")}))},children:[Object(u.jsx)("input",{value:l,onChange:function(t){b(t.target.value)},placeholder:"Agregar nueva nota..."}),Object(u.jsx)("button",{type:"submit",children:"save"})]}),Object(u.jsx)(h,{})]})};e(39);a.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.3b0ce4f6.chunk.js.map
(this["webpackJsonpemployee-tracker"]=this["webpackJsonpemployee-tracker"]||[]).push([[0],[,,,,,,function(e,t,c){},,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(7),s=c.n(r),a=c(3),o=c(8),i=(c(13),c(0)),l=function(){return Object(i.jsx)("header",{children:Object(i.jsx)("h1",{className:"text-center",children:"Employee Directory"})})};c(15);var j=function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("p",{children:"Click the arrows below to filter from A to Z "}),Object(i.jsxs)("table",{className:"table",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{className:"table-header",scope:"col",children:"Picture"}),Object(i.jsxs)("th",{className:"table-header",scope:"col",children:[Object(i.jsx)("button",{onClick:e.sortNameAtoZ,children:Object(i.jsx)("i",{class:"bi bi-chevron-up"})})," ","First Name"," ",Object(i.jsx)("button",{onClick:e.sortNameZtoA,children:Object(i.jsx)("i",{class:"bi bi-chevron-down"})})]}),Object(i.jsxs)("th",{className:"table-header",scope:"col",children:[Object(i.jsx)("button",{onClick:e.sortLastNameAtoZ,children:Object(i.jsx)("i",{class:"bi bi-chevron-up"})})," ","Last Name"," ",Object(i.jsx)("button",{onClick:e.sortLastNameZtoA,children:Object(i.jsx)("i",{class:"bi bi-chevron-down"})})]}),Object(i.jsx)("th",{className:"table-header",scope:"col",children:"Phone Number"})]})}),e.employeeArray.map((function(e,t){return Object(i.jsx)("tbody",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:Object(i.jsx)("img",{src:e.picture.thumbnail,className:"img-thumbnail",alt:"..."})}),Object(i.jsx)("td",{className:"spacing",children:e.name.first}),Object(i.jsx)("td",{children:e.name.last}),Object(i.jsx)("td",{children:e.phone})]})},t)}))]})]})},b=(c(16),function(e){return Object(i.jsx)("div",{className:"center-form",children:Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"input-group",children:Object(i.jsx)("form",{onChange:e.formBarThing,children:Object(i.jsx)("input",{type:"text",onChange:e.searchNames,className:"form-control",placeholder:"Enter a Name Here"})})})})})});c(6);var u=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("https://randomuser.me/api/?results=20&nat=us").then((function(e){return e.json()})).then((function(e){r(e.results)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)(b,{searchNames:function(e){var t=c.filter((function(t){return t.name.first.toLowerCase().includes(e.target.value.toLowerCase())||t.name.last.toLowerCase().includes(e.target.value.toLowerCase())}));r(t)},formBarThing:function(e){e.preventDefault()}}),Object(i.jsx)(j,{employeeArray:c,sortNameAtoZ:function(){var e=c.sort((function(e,t){return e.name.first>t.name.first?1:-1}));r(Object(a.a)(e))},sortNameZtoA:function(){var e=c.sort((function(e,t){return e.name.first<t.name.first?1:-1}));r(Object(a.a)(e))},sortLastNameAtoZ:function(){var e=c.sort((function(e,t){return e.name.last>t.name.last?1:-1}));r(Object(a.a)(e))},sortLastNameZtoA:function(){var e=c.sort((function(e,t){return e.name.last<t.name.last?1:-1}));r(Object(a.a)(e))}})]})};c(17),c(18);s.a.render(Object(i.jsx)(u,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.7b0c7aa8.chunk.js.map
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[208],{31722:function(t,e,r){r.r(e),r.d(e,{default:function(){return g}});var n=r(85893),o=r(41664),a=r.n(o),c=r(25675),l=r.n(c),i=r(68527),s=r(10894),p=r(96356),u=(r(67294),r(2631));function x(t){var e=t.titleText,r=t.fontSize,o=t.pos,a=(0,u.Z)();return(0,n.jsx)(i.xv,{pos:o,color:"primary",padding:"10px 14px",zIndex:"10",fontSize:r,fontWeight:"600",textShadow:"2px 2px #441f1f",maxW:a?"230px":"500px",children:e})}var f=r(77058),d=r(8193),h="blogs.";function g(t){var e=t.blogs,r=t.filterValue,o=(0,f.$)().t,c=(0,u.Z)();return(0,n.jsx)(i.aV,{display:"flex",children:(0,n.jsx)(i.kC,{wrap:"wrap",placeContent:"center",children:e.map((function(t,e){if(""===r||RegExp(r,"i").test(t.title)||t.tags.includes(r))return(0,n.jsx)(a(),{href:"/posts/".concat(t.path),passHref:!0,children:(0,n.jsxs)(i.HC,{w:c?"250px":"450px",h:c?"450px":"600px",cursor:"pointer",m:"10px 20px",overflow:"hidden",_hover:{boxShadow:"5px 7px 16px -5px rgba(0,0,0,0.56)"},className:"blogCard",borderRadius:"20px",children:[(0,n.jsx)(x,{titleText:o("".concat(h).concat(t.title,".title")),fontSize:c?"26px":"30px",pos:"absolute"}),(0,n.jsx)(l(),{src:t.img||"/images/blog/".concat(t.path,".webp"),alt:"".concat(t.title," image"),width:c?"250px":"500px",height:c?"500px":"700px",layout:"responsive"}),(0,n.jsxs)(i.Ug,{pos:"relative",top:c?"-110px":"-80px",left:"12px",gap:"2px",flexWrap:"wrap",children:[(0,n.jsx)(s.JO,{as:d.s8$,fill:"white"}),t.tags.map((function(t,r){return(0,n.jsx)(p.Vp,{children:o("".concat(h,"tags.").concat(t))},"".concat(t,"__").concat(e,"__").concat(r))}))]})]})},"".concat(t,"__").concat(e))}))})})}},88357:function(t,e,r){r.d(e,{w_:function(){return s}});var n=r(67294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),c=function(){return c=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},c.apply(this,arguments)},l=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r};function i(t){return t&&t.map((function(t,e){return n.createElement(t.tag,c({key:e},t.attr),i(t.child))}))}function s(t){return function(e){return n.createElement(p,c({attr:c({},t.attr)},e),i(t.child))}}function p(t){var e=function(e){var r,o=t.attr,a=t.size,i=t.title,s=l(t,["attr","size","title"]),p=a||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,s,{className:r,style:c(c({color:t.color||e.color},e.style),t.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),t.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(t){return e(t)})):e(o)}}}]);
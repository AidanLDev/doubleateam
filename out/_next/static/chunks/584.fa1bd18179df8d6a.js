(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[584],{74821:function(t,e,r){"use strict";r.d(e,{Z:function(){return p}});var n=r(85893),o=r(67294),a=r(86541),c=r(10894),i=r(8193),s=r(63750),l=r(77058);function p(t){var e=t.postUrl,r=(0,l.$)().t,p=(0,o.useState)(!1),u=p[0],x=p[1];return(0,n.jsx)(a.u,{label:r(u?"copied":"copy"),zIndex:20,shouldWrapChildren:!0,children:(0,n.jsx)(c.JO,{as:u?i.mny:s.etG,cursor:u?"default":"pointer",color:u?"green":"primary",boxSize:6,zIndex:"20",onClick:function(){x(!0),navigator.clipboard.writeText(e)}})})}},30618:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return S}});var n=r(70603),o=r(85893),a=r(67294),c=r(41664),i=r.n(c),s=r(38759),l=r(68527),p=r(92684),u=r(10894),x=r(96356),f=r(2631);function d(t){var e=t.titleText,r=t.fontSize,n=t.pos,a=(0,f.Z)();return(0,o.jsx)(l.xv,{pos:n,color:"primary",padding:"10px 14px",zIndex:"10",fontSize:r,fontWeight:"600",textShadow:"2px 2px #441f1f",maxW:a?"230px":"500px",children:e})}var h=r(8193),m=r(77058),v=r(52829),b=r(38002),w=r.n(b),g=r(74821),j=(0,s.E)(l.xu),y="blogs.";function S(t){var e=t.blog,r=t.idx,c=t.filterValue,s=(0,m.$)().t,b=(0,a.useState)(!1),S=b[0],z=b[1],C=(0,n.Z)((0,p.ac)("(max-width: 1500px)"),1)[0],O=(0,f.Z)(),k=(0,v.Z)();return(0,a.useEffect)((function(){z(C)}),[C]),(0,o.jsx)(l.P4,{overflow:"hidden",h:"100%",w:"100%",minH:"600px",maxH:"600px",colSpan:k||""!==c?1:e.size.colSpan,rowSpan:k||""!==c?1:e.size.rowSpan,_hover:{boxShadow:"5px 7px 16px -5px rgba(0,0,0,0.56)"},borderRadius:"6%",className:w().postCardWrapper,children:(0,o.jsxs)(l.xu,{children:[(0,o.jsx)(l.kC,{flexDir:"column",justifyContent:"space-between",position:"absolute",children:(0,o.jsxs)(l.xu,{children:[(0,o.jsxs)(l.kC,{maxW:S?"300px":"500px",alignItems:"baseline",children:[(0,o.jsx)(d,{titleText:s("".concat(y).concat(e.title,".title")),fontSize:k&&!O?"26px":O||S?"18px":"26px",pos:"relative"}),(0,o.jsx)(g.Z,{postUrl:"https://doubleateam.co.uk/posts/".concat(e.path)})]}),(0,o.jsx)(d,{titleText:e.published,fontSize:"16px",pos:"relative"})]})}),(0,o.jsx)(i(),{href:"/posts/".concat(e.path),passHref:!0,maxH:"600px",children:(0,o.jsx)(j,{backgroundImage:"/images/blog/".concat(e.path,".webp"),backgroundSize:"cover",cursor:"pointer",colSpan:e.size.colSpan,rowSpan:e.size.rowSpan,p:"24px",h:"600px",w:"100%",whileHover:{scale:1.02}})}),(0,o.jsxs)(l.Ug,{pos:"relative",zIndex:"20",top:"-85px",left:"12px",flexWrap:"wrap",gap:"2px",children:[(0,o.jsx)(u.JO,{as:h.s8$,fill:"white"}),e.tags.map((function(t,e){return(0,o.jsx)(x.Vp,{children:s("".concat(y,"tags.").concat(t))},"".concat(t,"__").concat(r,"__").concat(e))})),";"]})]})})}},38002:function(t){t.exports={postCardWrapper:"styles_postCardWrapper__Qob2r"}},88357:function(t,e,r){"use strict";r.d(e,{w_:function(){return l}});var n=r(67294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),c=function(){return c=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},c.apply(this,arguments)},i=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r};function s(t){return t&&t.map((function(t,e){return n.createElement(t.tag,c({key:e},t.attr),s(t.child))}))}function l(t){return function(e){return n.createElement(p,c({attr:c({},t.attr)},e),s(t.child))}}function p(t){var e=function(e){var r,o=t.attr,a=t.size,s=t.title,l=i(t,["attr","size","title"]),p=a||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,l,{className:r,style:c(c({color:t.color||e.color},e.style),t.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),t.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(t){return e(t)})):e(o)}}}]);
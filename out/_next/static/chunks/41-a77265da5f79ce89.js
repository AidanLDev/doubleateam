(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41],{79042:function(e,t,n){"use strict";n.d(t,{Rn:function(){return j},Td:function(){return w},Th:function(){return _},Tr:function(){return y},hr:function(){return v},iA:function(){return x},p3:function(){return b},xJ:function(){return g}});var r=n(42846),o=n(15031),a=n(67294);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var c=["overflow","overflowX","className"],l=["className"],u=["placement"],p=["isNumeric"],m=["isNumeric"],d=(0,r.eC)("Table"),f=d[0],h=d[1],g=(0,r.Gp)((function(e,t){var n,l=e.overflow,u=e.overflowX,p=e.className,m=s(e,c);return a.createElement(r.m$.div,i({ref:t,className:(0,o.cx)("chakra-table__container",p)},m,{__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:null!=(n=null!=l?l:u)?n:"auto",overflowY:"hidden",maxWidth:"100%"}}))})),x=(0,r.Gp)((function(e,t){var n=(0,r.jC)("Table",e),c=(0,r.Lr)(e),u=c.className,p=s(c,l);return a.createElement(f,{value:n},a.createElement(r.m$.table,i({role:"table",ref:t,__css:n.table,className:(0,o.cx)("chakra-table",u)},p)))}));o.Ts&&(x.displayName="Table");var j=(0,r.Gp)((function(e,t){var n=e.placement,o=void 0===n?"bottom":n,c=s(e,u),l=h();return a.createElement(r.m$.caption,i({},c,{ref:t,__css:i({},l.caption,{captionSide:o})}))}));o.Ts&&(j.displayName="TableCaption");var v=(0,r.Gp)((function(e,t){var n=h();return a.createElement(r.m$.thead,i({},e,{ref:t,__css:n.thead}))})),b=(0,r.Gp)((function(e,t){var n=h();return a.createElement(r.m$.tbody,i({},e,{ref:t,__css:n.tbody}))})),_=(0,r.Gp)((function(e,t){var n=e.isNumeric,o=s(e,p),c=h();return a.createElement(r.m$.th,i({},o,{ref:t,__css:c.th,"data-is-numeric":n}))})),y=(0,r.Gp)((function(e,t){var n=h();return a.createElement(r.m$.tr,i({role:"row"},e,{ref:t,__css:n.tr}))})),w=(0,r.Gp)((function(e,t){var n=e.isNumeric,o=s(e,m),c=h();return a.createElement(r.m$.td,i({role:"gridcell"},o,{ref:t,__css:c.td,"data-is-numeric":n}))}))},74821:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(85893),o=n(67294),a=n(86541),i=n(10894),s=n(8193),c=n(63750),l=n(77058);function u(e){var t=e.postUrl,n=(0,l.$)().t,u=(0,o.useState)(!1),p=u[0],m=u[1];return(0,r.jsx)(a.u,{label:n(p?"copied":"copy"),zIndex:20,shouldWrapChildren:!0,children:(0,r.jsx)(i.JO,{as:p?s.mny:c.etG,cursor:p?"default":"pointer",color:p?"green":"primary",boxSize:6,zIndex:"20",onClick:function(){m(!0),navigator.clipboard.writeText(t)}})})}},83487:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(85893),o=n(67294),a=n(68527),i=n(89583),s=n(10894);function c(e){var t=e.icon,n=e.link,o=e.hoverColour;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:(0,r.jsx)(s.JO,{as:t,cursor:"pointer",_hover:{color:o},color:"#0070f3"})})})}var l=n(61654),u=(0,o.memo)((function(){return(0,r.jsxs)("footer",{className:"footer",children:[(0,r.jsxs)(a.xu,{p:"20px 0 50px 0",w:"100%",borderBottom:"2px solid #868484",children:[(0,r.jsx)(a.kC,{justify:"center",gap:"5%",paddingBottom:"30px",className:"footerLinks",children:(0,r.jsx)(l.Z,{})}),(0,r.jsxs)(a.kC,{justify:"center",gap:"5%",children:[(0,r.jsx)(c,{icon:i.Zf_,link:"https://www.instagram.com/mynameisarni/",hoverColour:"#e04d93"}),(0,r.jsx)(c,{icon:i.V2E,link:"https://www.youtube.com/channel/UCp_GPf9RaLenpBBtmjMjrLg",hoverColour:"#fe2c3c"})]})]}),(0,r.jsx)(a.xv,{paddingTop:"20px",paddingBottom:"20px",color:"gray",textAlign:"center",fontSize:"14px",children:"\xa9 The Double A Team: Aidan John Lowson & Arni Riani Lowson"})]})}))},61654:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});n(34051);var r=n(85893),o=(n(67294),n(41664)),a=n.n(o),i=n(2631),s=n(77058),c="topBar.";function l(e){var t=e.isHome,n=(0,s.$)().t,o=(0,i.Z)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{href:"/posts",children:(0,r.jsx)("a",{children:n("".concat(c,"allBlogs"))})}),!o&&!t&&(0,r.jsx)("span",{children:"|"}),(0,r.jsx)(a(),{href:"/about-us",passHref:!0,children:(0,r.jsx)("a",{children:n("".concat(c,"aboutUs"))})}),(0,r.jsx)(a(),{href:"/contact-us",passHref:!0,children:(0,r.jsx)("a",{children:n("".concat(c,"contactUs"))})}),(0,r.jsx)(a(),{href:"/privacy-policy",passHref:!0,children:(0,r.jsx)("a",{children:n("".concat(c,"privacyPolicy"))})})]})}},70292:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(85893),o=n(67294),a=n(75901),i=n(86541),s=n(34651),c=n(77058);function l(){var e=(0,o.useState)(a.ZP.language),t=e[0],n=e[1],l=(0,c.$)().t;return(0,r.jsx)(i.u,{label:l("toggleLangTooltip"),shouldWrapChildren:!0,children:(0,r.jsx)(s.Ee,{width:"80px",height:"40px",src:"/images/".concat("en"===t?"Eng.webp":"Ind.png"),alt:"Language Flags",onClick:function(){return n((function(e){return a.ZP.changeLanguage("en"===e?"id":"en"),"en"===e?"id":"en"}))},style:{cursor:"pointer"}})})}},75913:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x},getStaticProps:function(){return h}});var r=n(47568),o=n(34051),a=n.n(o),i=n(85893),s=n(68527),c=(n(67294),n(41664)),l=n.n(c),u=n(61654),p=n(2631),m=n(96328),d=n.n(m),f=n(70292);function h(){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{props:{isHome:isHome}});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){e.isHome;var t=(0,p.Z)();return(0,i.jsxs)(s.kC,{className:d().topbarContainer,zIndex:100,children:[!t&&(0,i.jsx)(s.xu,{flexGrow:1,children:(0,i.jsx)(l(),{href:"/",passHref:!0,children:(0,i.jsx)(s.xv,{className:d().logo,children:"AA"})})}),(0,i.jsx)(u.Z,{}),(0,i.jsx)(f.Z,{})]})}},77233:function(e,t,n){"use strict";var r=n(85893),o=n(9008),a=n.n(o),i=(n(4298),function(e){var t=e.url,n=e.title,r=e.description,o=e.image,a=e.createdAt,i=e.updatedAt;return[{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:r},{name:"twitter:title",content:n},{name:"twitter:description",content:r},{name:"twitter:image:src",content:o},{name:"twitter:card",content:"summary_large_image"},{name:"og:title",content:n},{name:"og:type",content:"website"},{name:"og:url",content:t},{name:"og:image",content:o},{name:"og:description",content:r},{name:"og:site_name",content:"Double A Team"},{name:"og:published_time",content:a||(new Date).toISOString()},{name:"og:modified_time",content:i||(new Date).toISOString()}]});t.Z=function(e){var t=e.title,n=e.description,o=e.image,s=e.url;return(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{itemProp:"name",content:t}),(0,r.jsx)("meta",{itemProp:"description",content:n}),o&&(0,r.jsx)("meta",{itemProp:"image",content:o}),i({url:s,title:t,description:n,image:o}).map((function(e){var t=e.name,n=e.content;return(0,r.jsx)("meta",{name:t,content:n},t)})),(0,r.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8647500966281017",crossOrigin:"anonymous",type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@content":"http://schema.org","@type":"Article",name:t,about:n,url:s})}})]})}},28558:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(85893);function o(e){var t=e.link,n=e.children;return(0,r.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:n})}},8659:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(85893),o=(n(67294),n(68527)),a=function(){return(0,r.jsx)(o.xv,{color:"primary",children:(0,r.jsx)("strong",{children:"The double a team: Aidan Lowson & Arni Riani"})})},i=n(56650),s=n.n(i),c=n(36842),l=n(38759);function u(){var e=(0,c.v)().scrollYProgress;return(0,r.jsx)(l.E.div,{className:s().straightProgressBar,style:{scaleX:e}})}var p=function(e){var t=e.text;return(0,r.jsx)(o.X6,{as:"h1",size:"2xl",pb:"8",children:t})},m=n(77233),d=n(74821),f=n(2631),h=n(23218),g=n.n(h),x=n(83487),j=n(75913);function v(e){var t=e.title,n=e.description,i=e.children,s=e.postUrl,c=(0,f.Z)(),l="https://doubleateam.co.uk/posts/".concat(s);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j.default,{}),(0,r.jsxs)(o.xu,{maxW:c?"90%":"60rem",p:"24px 2rem",m:"2rem auto 2rem",className:g().blogLayout,children:[(0,r.jsx)(m.Z,{title:t,description:n,url:l,image:"/images/IstanbulHagiaSopia.webp"}),(0,r.jsx)(u,{}),(0,r.jsxs)(o.kC,{alignItems:"baseline",gap:"24px",children:[(0,r.jsx)(p,{text:n}),(0,r.jsx)(d.Z,{postUrl:l})]}),i,(0,r.jsx)(a,{})]}),(0,r.jsx)(x.default,{})]})}},2631:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(70603),o=n(67294),a=n(92684);function i(){var e=(0,o.useState)(!1),t=e[0],n=e[1],i=(0,r.Z)((0,a.ac)("(max-width: 575px)"),1)[0];return(0,o.useEffect)((function(){n(i)}),[i]),t}},96328:function(e){e.exports={topbarContainer:"styles_topbarContainer__h9Nf1",logo:"styles_logo__a5qhr"}},23218:function(e){e.exports={blogLayout:"styles_blogLayout__oWYyZ",blogHeading:"styles_blogHeading__i4Lk8"}},56650:function(e){e.exports={progressIcon:"style_progressIcon__GtLXV",straightProgressBar:"style_straightProgressBar__EnhKT"}}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{87141:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return n(95789)}])},77233:function(e,t,n){"use strict";var a=n(85893),r=n(9008),o=n.n(r),i=(n(4298),function(e){var t=e.url,n=e.title,a=e.description,r=e.image,o=e.createdAt,i=e.updatedAt;return[{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:a},{name:"twitter:title",content:n},{name:"twitter:description",content:a},{name:"twitter:image:src",content:r},{name:"twitter:card",content:"summary_large_image"},{name:"og:title",content:n},{name:"og:type",content:"website"},{name:"og:url",content:t},{name:"og:image",content:r},{name:"og:description",content:a},{name:"og:site_name",content:"Double A Team"},{name:"og:published_time",content:o||(new Date).toISOString()},{name:"og:modified_time",content:i||(new Date).toISOString()}]});t.Z=function(e){var t=e.title,n=e.description,r=e.image,c=e.url;return(0,a.jsxs)(o(),{children:[(0,a.jsx)("title",{children:t}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,a.jsx)("meta",{name:"description",content:n}),(0,a.jsx)("meta",{itemProp:"name",content:t}),(0,a.jsx)("meta",{itemProp:"description",content:n}),r&&(0,a.jsx)("meta",{itemProp:"image",content:r}),i({url:c,title:t,description:n,image:r}).map((function(e){var t=e.name,n=e.content;return(0,a.jsx)("meta",{name:t,content:n},t)})),(0,a.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8647500966281017",crossOrigin:"anonymous",type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@content":"http://schema.org","@type":"Article",name:t,about:n,url:c})}})]})}},2631:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(70603),r=n(67294),o=n(92684);function i(){var e=(0,r.useState)(!1),t=e[0],n=e[1],i=(0,a.Z)((0,o.ac)("(max-width: 575px)"),1)[0];return(0,r.useEffect)((function(){n(i)}),[i]),t}},52829:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(70603),r=n(67294),o=n(92684);function i(){var e=(0,r.useState)(!1),t=e[0],n=e[1],i=(0,a.Z)((0,o.ac)("(max-width: 1024px)"),1)[0];return(0,r.useEffect)((function(){n(i)}),[i]),t}},95789:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return b},default:function(){return _}});var a=n(85893),r=n(5152),o=n.n(r),i=n(67294),c=n(68527),s=n(96356),l=n(99116),u=n(77233),d=n(77058),p=n(2631),m=n(52829),g=o()((function(){return Promise.all([n.e(445),n.e(664),n.e(167)]).then(n.bind(n,83487))}),{loadableGenerated:{webpack:function(){return[83487]}}}),f=o()((function(){return Promise.all([n.e(664),n.e(541),n.e(913)]).then(n.bind(n,75913))}),{loadableGenerated:{webpack:function(){return[75913]}}}),x=o()((function(){return Promise.all([n.e(617),n.e(13),n.e(664),n.e(541),n.e(584)]).then(n.bind(n,30618))}),{loadableGenerated:{webpack:function(){return[30618]}}}),h="posts.",b=!0;function _(e){var t=e.blogs,n=(0,d.$)().t,r=(0,i.useState)(""),o=r[0],b=r[1],_=(0,p.Z)(),j=(0,m.Z)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.Z,{title:"Double A Team | Blogs",description:"All of the blogs available on double a team, scroll through and pick whatever takes your fancy or search via tags or by blog title if you have something specific in mind.",url:"https://doubleateam.co.uk/posts",image:"/images/IstanbulHagiaSopia.webp"}),(0,a.jsxs)(c.xu,{borderBottom:"2px solid red",paddingBottom:"12px",children:[(0,a.jsx)(f,{}),(0,a.jsx)(c.xv,{fontSize:_?"32px":"42px",align:"center",color:"red",padding:"24px 0",cursor:"default",children:n("".concat(h,"allBlogsHeading"))})]}),(0,a.jsx)(c.xv,{align:"center",color:"red",fontSize:"18px",p:"12px 0",children:n("".concat(h,"filterHeading"))}),(0,a.jsx)(c.kC,{p:"0 12px",flexWrap:"wrap",gap:"4px",justify:"center",children:["education","visa","travel","ind","marriage","UK","daysOut","rollerCoasters","webDev","programming","astro","jsFrameworks","react","svelt","vue","solidJs","lit","preact","netlify","hosting","ciCd","circleCI","history","all"].map((function(e,t){return(0,a.jsx)(s.Vp,{onClick:function(){b("all"===e?"":e)},colorScheme:e===o?"green":"blue",cursor:"pointer",children:n("blogs.tags.".concat(e))},"".concat(t,"__").concat(e))}))}),(0,a.jsx)(c.M5,{padding:"12px 0",children:(0,a.jsx)(l.II,{variant:"filled",placeholder:n("".concat(h,"blogSearchPlaceHolder")),width:"25%",value:o,onChange:function(e){b(e.target.value)},_placeholder:{opacity:1,color:"black"},color:"#0070f3",minW:"200px"})}),(0,a.jsx)(c.rj,{gap:24,templateColumns:"repeat(".concat(j?"1":"3",", 1fr)"),templateRows:"repeat(".concat(j?"1":"2",", 1fr)"),p:"0 24px",children:t.map((function(e,t){if(""===o||RegExp(o,"i").test(e.title)||e.tags.includes(o))return(0,a.jsx)(x,{blog:e,idx:t,filterValue:o},"".concat(e,"__").concat(t))}))}),(0,a.jsx)(g,{})]})}}},function(e){e.O(0,[128,380,774,888,179],(function(){return t=87141,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
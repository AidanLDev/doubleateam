(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{34651:function(n,e,a){"use strict";a.d(e,{Ee:function(){return g}});var r=a(42846),t=a(15031),i=a(67294),o=a(44697);function s(){return s=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r])}return n},s.apply(this,arguments)}function c(n,e){if(null==n)return{};var a,r,t={},i=Object.keys(n);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(t[a]=n[a]);return t}var l=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"],d=i.forwardRef((function(n,e){var a=n.htmlWidth,r=n.htmlHeight,t=n.alt,o=c(n,l);return i.createElement("img",s({width:a,height:r,ref:e,alt:t},o))}));t.Ts&&(d.displayName="NativeImage");var g=(0,r.Gp)((function(n,e){var a=n.fallbackSrc,l=n.fallback,g=n.src,f=n.srcSet,h=n.align,m=n.fit,p=n.loading,x=n.ignoreFallback,b=n.crossOrigin,j=n.fallbackStrategy,v=void 0===j?"beforeLoadOrError":j,k=n.referrerPolicy,y=c(n,u),w=null!=p||x||!(void 0!==a||void 0!==l),_=function(n){var e=n.loading,a=n.src,r=n.srcSet,t=n.onLoad,s=n.onError,c=n.crossOrigin,l=n.sizes,u=n.ignoreFallback,d=(0,i.useState)("pending"),g=d[0],f=d[1];(0,i.useEffect)((function(){f(a?"loading":"pending")}),[a]);var h=(0,i.useRef)(),m=(0,i.useCallback)((function(){if(a){p();var n=new Image;n.src=a,c&&(n.crossOrigin=c),r&&(n.srcset=r),l&&(n.sizes=l),e&&(n.loading=e),n.onload=function(n){p(),f("loaded"),null==t||t(n)},n.onerror=function(n){p(),f("failed"),null==s||s(n)},h.current=n}}),[a,c,r,l,t,s,e]),p=function(){h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return(0,o.a)((function(){if(!u)return"loading"===g&&m(),function(){p()}}),[g,m,u]),u?"loaded":g}(s({},n,{ignoreFallback:w})),A=function(n,e){return"loaded"!==n&&"beforeLoadOrError"===e||"failed"===n&&"onError"===e}(_,v),S=s({ref:e,objectFit:m,objectPosition:h},w?y:(0,t.CE)(y,["onError","onLoad"]));return A?l||i.createElement(r.m$.img,s({as:d,className:"chakra-image__placeholder",src:a},S)):i.createElement(r.m$.img,s({as:d,src:g,srcSet:f,crossOrigin:b,loading:p,referrerPolicy:k,className:"chakra-image"},S))}));t.Ts&&(g.displayName="Image")},55406:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about-us",function(){return a(73837)}])},83487:function(n,e,a){"use strict";a.d(e,{Z:function(){return l}});var r=a(85893),t=a(68527),i=a(89583),o=a(10894);function s(n){var e=n.icon,a=n.link,t=n.hoverColour;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:(0,r.jsx)(o.JO,{as:e,cursor:"pointer",_hover:{color:t},color:"#0070f3"})})})}var c=a(61654);function l(){return(0,r.jsxs)("footer",{className:"footer",children:[(0,r.jsxs)(t.xu,{p:"20px 0 50px 0",w:"100%",borderBottom:"2px solid #868484",children:[(0,r.jsx)(t.kC,{justify:"center",gap:"5%",paddingBottom:"30px",className:"footerLinks",children:(0,r.jsx)(c.Z,{})}),(0,r.jsxs)(t.kC,{justify:"center",gap:"5%",children:[(0,r.jsx)(s,{icon:i.Zf_,link:"https://www.instagram.com/mynameisarni/",hoverColour:"#e04d93"}),(0,r.jsx)(s,{icon:i.V2E,link:"https://www.youtube.com/channel/UCp_GPf9RaLenpBBtmjMjrLg",hoverColour:"#fe2c3c"})]})]}),(0,r.jsx)(t.xv,{paddingTop:"20px",paddingBottom:"20px",color:"gray",textAlign:"center",fontSize:"14px",children:"\xa9 The Double A Team: Aidan John Lowson & Arni Riani Lowson"})]})}},85789:function(n,e,a){"use strict";a.d(e,{Z:function(){return i}});var r=a(85893),t=a(68527);a(67294);function i(n){var e=n.children;return(0,r.jsx)(t.xu,{p:"24px",children:e})}},61654:function(n,e,a){"use strict";a.d(e,{Z:function(){return c}});var r=a(85893),t=(a(67294),a(41664)),i=a.n(t),o=a(2631),s=a(20958);function c(){var n=(0,o.Z)(),e=(0,s.Z)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i(),{href:"/",children:(0,r.jsx)("a",{children:"Ind"!==e?"Home":"Rumah"})}),(0,r.jsx)(i(),{href:"/posts",children:(0,r.jsx)("a",{children:"Ind"!==e?"All Blogs":"Semua Blog"})}),!n&&(0,r.jsx)("span",{children:"|"}),(0,r.jsx)(i(),{href:"/about-us",passHref:!0,children:(0,r.jsx)("a",{children:"Ind"!==e?"About Us":"Tentang kami"})}),(0,r.jsx)(i(),{href:"/contact-us",passHref:!0,children:(0,r.jsx)("a",{children:"Ind"!==e?"Contact Us":"Hubungi kami"})}),(0,r.jsx)(i(),{href:"/privacy-policy",passHref:!0,children:(0,r.jsx)("a",{children:"Ind"!==e?"Privacy Policy":"Kebijakan pribadi"})})]})}},75913:function(n,e,a){"use strict";a.d(e,{Z:function(){return d}});var r=a(85893),t=a(68527),i=(a(67294),a(41664)),o=a.n(i),s=a(61654),c=a(2631),l=a(96328),u=a.n(l);function d(){var n=(0,c.Z)();return(0,r.jsxs)(t.kC,{className:u().topbarContainer,children:[!n&&(0,r.jsx)(t.xu,{flexGrow:1,children:(0,r.jsx)(o(),{href:"/",passHref:!0,children:(0,r.jsx)(t.xv,{className:u().logo,children:"AA"})})}),(0,r.jsx)(s.Z,{})]})}},77233:function(n,e,a){"use strict";var r=a(85893),t=a(9008),i=a.n(t),o=(a(4298),function(n){var e=n.url,a=n.title,r=n.description,t=n.image,i=n.createdAt,o=n.updatedAt;return[{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:r},{name:"twitter:title",content:a},{name:"twitter:description",content:r},{name:"twitter:image:src",content:t},{name:"twitter:card",content:"summary_large_image"},{name:"og:title",content:a},{name:"og:type",content:"website"},{name:"og:url",content:e},{name:"og:image",content:t},{name:"og:description",content:r},{name:"og:site_name",content:"Double A Team"},{name:"og:published_time",content:i||(new Date).toISOString()},{name:"og:modified_time",content:o||(new Date).toISOString()}]});e.Z=function(n){var e=n.title,a=n.description,t=n.image,s=n.url;return(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:e}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"description",content:a}),(0,r.jsx)("meta",{itemProp:"name",content:e}),(0,r.jsx)("meta",{itemProp:"description",content:a}),t&&(0,r.jsx)("meta",{itemProp:"image",content:t}),o({url:s,title:e,description:a,image:t}).map((function(n){var e=n.name,a=n.content;return(0,r.jsx)("meta",{name:e,content:a},e)})),(0,r.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8647500966281017",crossOrigin:"anonymous",type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@content":"http://schema.org","@type":"Article",name:e,about:a,url:s})}})]})}},78003:function(n,e,a){"use strict";a.d(e,{Z:function(){return s}});var r=a(85893),t=a(68527),i=(a(67294),a(10091)),o=a.n(i);function s(n){var e=n.children;return(0,r.jsx)(t.xu,{p:5,shadow:"lg",borderWidth:"1px",width:"100%",className:o().cardContainer,children:e})}},2631:function(n,e,a){"use strict";a.d(e,{Z:function(){return o}});var r=a(70603),t=a(67294),i=a(92684);function o(){var n=(0,t.useState)(!1),e=n[0],a=n[1],o=(0,r.Z)((0,i.ac)("(max-width: 575px)"),1)[0];return(0,t.useEffect)((function(){a(o)}),[o]),e}},20958:function(n,e,a){"use strict";a.d(e,{Z:function(){return t}});var r=a(67294);function t(){var n=(0,r.useState)(),e=n[0],a=n[1];return(0,r.useEffect)((function(){a(sessionStorage.getItem("language"))}),[]),e}},73837:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return h}});var r=a(85893),t=a(68527),i=a(34651),o=(a(67294),a(78003)),s=a(85789),c=a(75913),l=a(83487),u=a(77233),d=a(20958),g=a(96962),f=a.n(g);function h(){var n=(0,d.Z)();return(0,r.jsxs)(t.xu,{className:f().aboutUsContainer,children:[(0,r.jsx)(u.Z,{title:"Double A Team | About Us",description:"A little background on who the double A team are",url:"https://doubleateam.co.uk/about-us",image:"/images/IstanbulHagiaSopia.avif"}),(0,r.jsx)(c.Z,{}),(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(t.M5,{children:(0,r.jsx)(t.X6,{children:"Ind"!==n?"About us":"Tentang kami"})}),(0,r.jsxs)(t.gC,{children:[(0,r.jsx)(o.Z,{children:(0,r.jsx)(t.xv,{children:"Ind"!==n?"Arni and Aidan are two individuals, an Indonesian woman and English man, who when put together make the double A team \ud83d\ude0e We're passionate about traveling, living life to the full and helping others.":"Arni dan Aidan adalah dua individu, seorang wanita Indonesia dan pria Inggris, yang ketika disatukan menjadi tim ganda A \ud83d\ude0e Kami bersemangat bepergian, menjalani hidup sepenuhnya, dan membantu orang lain."})}),(0,r.jsx)(t.X6,{children:"Arni Riani"}),(0,r.jsx)(i.Ee,{alt:"Photo of Arni",src:"/images/us/ArniAvatar.avif",width:"250px",border:"1px solid red",borderRadius:"125px"}),(0,r.jsx)(o.Z,{children:(0,r.jsx)(t.xv,{children:"Ind"!==n?"Originally from Bandung Indonesia. I have a affection for painting, nail art and anything creative. A lover of the outdoors, hiking is a big hobby of mine.":"Berasal dari Bandung Indonesia. Saya memiliki kasih sayang untuk melukis, seni kuku, dan segala sesuatu yang kreatif. Seorang pecinta alam bebas, hiking adalah hobi besar saya."})}),(0,r.jsx)(t.X6,{children:"Aidan Lowson"}),(0,r.jsx)(i.Ee,{alt:"Photo of Aidan",src:"/images/us/AidanAvatar.avif",width:"250px",border:"1px solid red",borderRadius:"125px"}),(0,r.jsx)(o.Z,{children:(0,r.jsx)(t.xv,{children:"Ind"!==n?"Aidan Lowson, originally a mackem lad from Sunderland, now living in the south of England. I love all things tech, be it playing around with hardware to learning the latest in web technologies. Always keen to learn anything new, reading and running are my main hobbies.":"Berasal dari Sunderland, sekarang tinggal di selatan Inggris. Saya menyukai semua hal tentang teknologi, baik itu bermain-main dengan perangkat keras hingga mempelajari teknologi web terbaru. Selalu ingin belajar sesuatu yang baru, membaca dan berlari adalah hobi utama saya."})})]})]}),(0,r.jsx)(l.Z,{})]})}},96328:function(n){n.exports={topbarContainer:"styles_topbarContainer__h9Nf1",logo:"styles_logo__a5qhr"}},10091:function(n){n.exports={cardContainer:"styles_cardContainer__XT3TP"}},96962:function(n){n.exports={aboutUsContainer:"styles_aboutUsContainer__69Ara"}}},function(n){n.O(0,[445,180,774,888,179],(function(){return e=55406,n(n.s=e);var e}));var e=n.O();_N_E=e}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[836],{34651:function(e,n,t){"use strict";t.d(n,{Ee:function(){return h}});var r=t(42846),i=t(15031),o=t(67294),a=t(44697);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}var l=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"],d=o.forwardRef((function(e,n){var t=e.htmlWidth,r=e.htmlHeight,i=e.alt,a=c(e,l);return o.createElement("img",s({width:t,height:r,ref:n,alt:i},a))}));i.Ts&&(d.displayName="NativeImage");var h=(0,r.Gp)((function(e,n){var t=e.fallbackSrc,l=e.fallback,h=e.src,g=e.srcSet,f=e.align,m=e.fit,p=e.loading,x=e.ignoreFallback,j=e.crossOrigin,y=e.fallbackStrategy,b=void 0===y?"beforeLoadOrError":y,v=e.referrerPolicy,w=c(e,u),k=null!=p||x||!(void 0!==t||void 0!==l),_=function(e){var n=e.loading,t=e.src,r=e.srcSet,i=e.onLoad,s=e.onError,c=e.crossOrigin,l=e.sizes,u=e.ignoreFallback,d=(0,o.useState)("pending"),h=d[0],g=d[1];(0,o.useEffect)((function(){g(t?"loading":"pending")}),[t]);var f=(0,o.useRef)(),m=(0,o.useCallback)((function(){if(t){p();var e=new Image;e.src=t,c&&(e.crossOrigin=c),r&&(e.srcset=r),l&&(e.sizes=l),n&&(e.loading=n),e.onload=function(e){p(),g("loaded"),null==i||i(e)},e.onerror=function(e){p(),g("failed"),null==s||s(e)},f.current=e}}),[t,c,r,l,i,s,n]),p=function(){f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return(0,a.a)((function(){if(!u)return"loading"===h&&m(),function(){p()}}),[h,m,u]),u?"loaded":h}(s({},e,{ignoreFallback:k})),E=function(e,n){return"loaded"!==e&&"beforeLoadOrError"===n||"failed"===e&&"onError"===n}(_,b),S=s({ref:n,objectFit:m,objectPosition:f},k?w:(0,i.CE)(w,["onError","onLoad"]));return E?l||o.createElement(r.m$.img,s({as:d,className:"chakra-image__placeholder",src:t},S)):o.createElement(r.m$.img,s({as:d,src:h,srcSet:g,crossOrigin:j,loading:p,referrerPolicy:v,className:"chakra-image"},S))}));i.Ts&&(h.displayName="Image")},60403:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/royal-family-origin",function(){return t(28451)}])},74821:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(85893),i=t(67294),o=t(86541),a=t(10894),s=t(8193),c=t(63750);function l(e){var n=e.postUrl,t=(0,i.useState)(!1),l=t[0],u=t[1];return(0,r.jsx)(o.u,{label:l?"Copied!":"Copy Blog to clipboard",zIndex:20,shouldWrapChildren:!0,children:(0,r.jsx)(a.JO,{as:l?s.mny:c.etG,cursor:l?"default":"pointer",color:l?"green":"primary",boxSize:6,zIndex:"20",onClick:function(){u(!0),navigator.clipboard.writeText(n)}})})}},83487:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(85893),i=t(68527),o=t(89583),a=t(10894);function s(e){var n=e.icon,t=e.link,i=e.hoverColour;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:(0,r.jsx)(a.JO,{as:n,cursor:"pointer",_hover:{color:i},color:"#0070f3"})})})}var c=t(61654);function l(){return(0,r.jsxs)("footer",{className:"footer",children:[(0,r.jsxs)(i.xu,{p:"20px 0 50px 0",w:"100%",borderBottom:"2px solid #868484",children:[(0,r.jsx)(i.kC,{justify:"center",gap:"5%",paddingBottom:"30px",className:"footerLinks",children:(0,r.jsx)(c.Z,{})}),(0,r.jsxs)(i.kC,{justify:"center",gap:"5%",children:[(0,r.jsx)(s,{icon:o.Zf_,link:"https://www.instagram.com/mynameisarni/",hoverColour:"#e04d93"}),(0,r.jsx)(s,{icon:o.V2E,link:"https://www.youtube.com/channel/UCp_GPf9RaLenpBBtmjMjrLg",hoverColour:"#fe2c3c"})]})]}),(0,r.jsx)(i.xv,{paddingTop:"20px",paddingBottom:"20px",color:"gray",textAlign:"center",fontSize:"14px",children:"\xa9 The Double A Team: Aidan John Lowson & Arni Riani Lowson"})]})}},61654:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(85893),i=(t(67294),t(41664)),o=t.n(i),a=t(2631),s=t(20958);function c(){var e=(0,a.Z)(),n=(0,s.Z)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o(),{href:"/",children:(0,r.jsx)("a",{children:"Ind"!==n?"Home":"Rumah"})}),(0,r.jsx)(o(),{href:"/posts",children:(0,r.jsx)("a",{children:"Ind"!==n?"All Blogs":"Semua Blog"})}),!e&&(0,r.jsx)("span",{children:"|"}),(0,r.jsx)(o(),{href:"/about-us",passHref:!0,children:(0,r.jsx)("a",{children:"Ind"!==n?"About Us":"Tentang kami"})}),(0,r.jsx)(o(),{href:"/contact-us",passHref:!0,children:(0,r.jsx)("a",{children:"Ind"!==n?"Contact Us":"Hubungi kami"})}),(0,r.jsx)(o(),{href:"/privacy-policy",passHref:!0,children:(0,r.jsx)("a",{children:"Ind"!==n?"Privacy Policy":"Kebijakan pribadi"})})]})}},75913:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var r=t(85893),i=t(68527),o=(t(67294),t(41664)),a=t.n(o),s=t(61654),c=t(2631),l=t(96328),u=t.n(l);function d(){var e=(0,c.Z)();return(0,r.jsxs)(i.kC,{className:u().topbarContainer,children:[!e&&(0,r.jsx)(i.xu,{flexGrow:1,children:(0,r.jsx)(a(),{href:"/",passHref:!0,children:(0,r.jsx)(i.xv,{className:u().logo,children:"AA"})})}),(0,r.jsx)(s.Z,{})]})}},77233:function(e,n,t){"use strict";var r=t(85893),i=t(9008),o=t.n(i),a=(t(4298),function(e){var n=e.url,t=e.title,r=e.description,i=e.image,o=e.createdAt,a=e.updatedAt;return[{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:r},{name:"twitter:title",content:t},{name:"twitter:description",content:r},{name:"twitter:image:src",content:i},{name:"twitter:card",content:"summary_large_image"},{name:"og:title",content:t},{name:"og:type",content:"website"},{name:"og:url",content:n},{name:"og:image",content:i},{name:"og:description",content:r},{name:"og:site_name",content:"Double A Team"},{name:"og:published_time",content:o||(new Date).toISOString()},{name:"og:modified_time",content:a||(new Date).toISOString()}]});n.Z=function(e){var n=e.title,t=e.description,i=e.image,s=e.url;return(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"description",content:t}),(0,r.jsx)("meta",{itemProp:"name",content:n}),(0,r.jsx)("meta",{itemProp:"description",content:t}),i&&(0,r.jsx)("meta",{itemProp:"image",content:i}),a({url:s,title:n,description:t,image:i}).map((function(e){var n=e.name,t=e.content;return(0,r.jsx)("meta",{name:n,content:t},n)})),(0,r.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8647500966281017",crossOrigin:"anonymous",type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@content":"http://schema.org","@type":"Article",name:n,about:t,url:s})}})]})}},75345:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(85893),i=t(68527),o=t(34651);function a(e){var n=e.src,t=e.alt,a=e.h,s=e.caption;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.M5,{children:(0,r.jsx)(o.Ee,{alt:t,src:n,w:500,h:a||"auto"})}),s&&(0,r.jsx)(i.M5,{children:(0,r.jsx)(i.xv,{fontSize:"16px !important",children:s})})]})}},8659:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var r=t(85893),i=(t(67294),t(68527)),o=function(){return(0,r.jsx)(i.xv,{color:"primary",children:(0,r.jsx)("strong",{children:"The double a team: Aidan Lowson & Arni Riani"})})},a=t(56650),s=t.n(a),c=t(36842),l=t(38759);function u(){var e=(0,c.v)().scrollYProgress;return(0,r.jsx)(l.E.div,{className:s().straightProgressBar,style:{scaleX:e}})}var d=function(e){var n=e.text;return(0,r.jsx)(i.X6,{as:"h1",size:"2xl",pb:"8",children:n})},h=t(77233),g=t(74821),f=t(2631),m=t(23218),p=t.n(m),x=t(83487),j=t(75913);function y(e){var n=e.title,t=e.description,a=e.children,s=e.postUrl,c=(0,f.Z)(),l="https://doubleateam.co.uk/posts/".concat(s);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j.Z,{}),(0,r.jsxs)(i.xu,{maxW:c?"90%":"60rem",p:"24px 2rem",m:"2rem auto 2rem",className:p().blogLayout,children:[(0,r.jsx)(h.Z,{title:n,description:t,url:l,image:"/images/IstanbulHagiaSopia.avif"}),(0,r.jsx)(u,{}),(0,r.jsxs)(i.kC,{alignItems:"baseline",gap:"24px",children:[(0,r.jsx)(d,{text:t}),(0,r.jsx)(g.Z,{postUrl:l})]}),a,(0,r.jsx)(o,{})]}),(0,r.jsx)(x.Z,{})]})}},2631:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(70603),i=t(67294),o=t(92684);function a(){var e=(0,i.useState)(!1),n=e[0],t=e[1],a=(0,r.Z)((0,o.ac)("(max-width: 575px)"),1)[0];return(0,i.useEffect)((function(){t(a)}),[a]),n}},20958:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(67294);function i(){var e=(0,r.useState)(),n=e[0],t=e[1];return(0,r.useEffect)((function(){t(sessionStorage.getItem("language"))}),[]),n}},28451:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(85893),i=(t(67294),t(68527)),o=t(20958),a=t(8659),s=t(75345),c=(0,r.jsxs)(a.Z,{title:"Double A Team | Royal Family Origins",description:"The Origin of the Royal Family",postUrl:"royal-family-origin",children:[(0,r.jsx)(i.xv,{children:'During one of my many day dreams, I got thinking how strange it is that just by being the son or daughter of specific parents will make you heir to the throne. Then I wondered, how did that actually begin? How did we decide "Ok you guys will be our rulers now." This is the rabbit hole I went down.'}),(0,r.jsx)(i.xv,{}),(0,r.jsx)(i.xv,{children:'The origins of our modern monarchy can be dated back to late 800s and early 900s, when the various Anglo-Saxon Kingdoms were united by \xc6thelstan (895-939 AD), also known as Athelstan, of the House of Wessex to form the Kingdom of England. Before this, what is now known as England was split into different kingdoms such as "Northumbria", "Mercia", "East Anglia", "Wessex" etc... Each kingdom having their own rulers.'}),(0,r.jsx)(s.Z,{src:"".concat("/images/blog/royal-family/","pre-eng-kingdoms.avif"),alt:"Pre England kingdoms",caption:"English kingdoms in the year 800"}),(0,r.jsx)(i.xv,{children:"So the modern day royal family can be traced back all the way to the 900s... But what about the rulers of the Saxon kingdoms? Which was the first? And who was the first king of the first kingdom? How did this ancient hierarchy begin?"}),(0,r.jsx)(i.X6,{children:"The Saxons (410 - 1066)"}),(0,r.jsx)(i.xv,{children:"It's hard to get much information about this period as there aren't many written records that still exist until this day, which is why it used to be known as the \"Dark Ages\". It was a time of war and separation from the Roman rule."})]}),l=(0,r.jsx)(a.Z,{title:"Double A Team | Royal Family Origins",description:"Dari mana keluarga kerajaan berasal",postUrl:"royal-family-origin"});function u(){return"Ind"===(0,o.Z)()?l:c}},96328:function(e){e.exports={topbarContainer:"styles_topbarContainer__h9Nf1",logo:"styles_logo__a5qhr"}},23218:function(e){e.exports={blogLayout:"styles_blogLayout__oWYyZ",blogHeading:"styles_blogHeading__i4Lk8"}},56650:function(e){e.exports={progressIcon:"style_progressIcon__GtLXV",straightProgressBar:"style_straightProgressBar__EnhKT"}}},function(e){e.O(0,[445,617,13,180,541,842,774,888,179],(function(){return n=60403,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
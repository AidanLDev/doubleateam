(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{34651:function(e,t,n){"use strict";n.d(t,{Ee:function(){return f}});var i=n(42846),r=n(15031),o=n(67294),a=n(44697);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}var l=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"],d=o.forwardRef((function(e,t){var n=e.htmlWidth,i=e.htmlHeight,r=e.alt,a=c(e,l);return o.createElement("img",s({width:n,height:i,ref:t,alt:r},a))}));r.Ts&&(d.displayName="NativeImage");var f=(0,i.Gp)((function(e,t){var n=e.fallbackSrc,l=e.fallback,f=e.src,g=e.srcSet,p=e.align,m=e.fit,h=e.loading,b=e.ignoreFallback,x=e.crossOrigin,v=e.fallbackStrategy,y=void 0===v?"beforeLoadOrError":v,w=e.referrerPolicy,j=c(e,u),_=null!=h||b||!(void 0!==n||void 0!==l),S=function(e){var t=e.loading,n=e.src,i=e.srcSet,r=e.onLoad,s=e.onError,c=e.crossOrigin,l=e.sizes,u=e.ignoreFallback,d=(0,o.useState)("pending"),f=d[0],g=d[1];(0,o.useEffect)((function(){g(n?"loading":"pending")}),[n]);var p=(0,o.useRef)(),m=(0,o.useCallback)((function(){if(n){h();var e=new Image;e.src=n,c&&(e.crossOrigin=c),i&&(e.srcset=i),l&&(e.sizes=l),t&&(e.loading=t),e.onload=function(e){h(),g("loaded"),null==r||r(e)},e.onerror=function(e){h(),g("failed"),null==s||s(e)},p.current=e}}),[n,c,i,l,r,s,t]),h=function(){p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,a.a)((function(){if(!u)return"loading"===f&&m(),function(){h()}}),[f,m,u]),u?"loaded":f}(s({},e,{ignoreFallback:_})),k=function(e,t){return"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t}(S,y),z=s({ref:t,objectFit:m,objectPosition:p},_?j:(0,r.CE)(j,["onError","onLoad"]));return k?l||o.createElement(i.m$.img,s({as:d,className:"chakra-image__placeholder",src:n},z)):o.createElement(i.m$.img,s({as:d,src:f,srcSet:g,crossOrigin:x,loading:h,referrerPolicy:w,className:"chakra-image"},z))}));r.Ts&&(f.displayName="Image")},79361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},75557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(11482)}])},17922:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(85893),r=(n(67294),n(68527)),o=n(2631);function a(e){var t=e.titleText,n=e.fontSize,a=e.pos,s=(0,o.Z)();return(0,i.jsx)(r.xv,{pos:a,color:"primary",padding:"10px 14px",zIndex:"10",fontSize:n,fontWeight:"600",textShadow:"2px 2px #441f1f",maxW:s?"230px":"500px",children:t})}},83487:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(85893),r=n(68527),o=n(89583),a=n(10894);function s(e){var t=e.icon,n=e.link,r=e.hoverColour;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:(0,i.jsx)(a.JO,{as:t,cursor:"pointer",_hover:{color:r},color:"#0070f3"})})})}var c=n(61654);function l(){return(0,i.jsxs)("footer",{className:"footer",children:[(0,i.jsxs)(r.xu,{p:"20px 0 50px 0",w:"100%",borderBottom:"2px solid #868484",children:[(0,i.jsx)(r.kC,{justify:"center",gap:"5%",paddingBottom:"30px",className:"footerLinks",children:(0,i.jsx)(c.Z,{})}),(0,i.jsxs)(r.kC,{justify:"center",gap:"5%",children:[(0,i.jsx)(s,{icon:o.Zf_,link:"https://www.instagram.com/mynameisarni/",hoverColour:"#e04d93"}),(0,i.jsx)(s,{icon:o.V2E,link:"https://www.youtube.com/channel/UCp_GPf9RaLenpBBtmjMjrLg",hoverColour:"#fe2c3c"})]})]}),(0,i.jsx)(r.xv,{paddingTop:"20px",paddingBottom:"20px",color:"gray",textAlign:"center",fontSize:"14px",children:"\xa9 Aidan John Lowson & Arni Riani Lowson"})]})}},61654:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(85893),r=(n(67294),n(41664)),o=n.n(r),a=n(2631),s=n(20958);function c(){var e=(0,a.Z)(),t=(0,s.Z)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o(),{href:"/",children:(0,i.jsx)("a",{children:"Ind"!==t?"Home":"Rumah"})}),(0,i.jsx)(o(),{href:"/posts",children:(0,i.jsx)("a",{children:"Ind"!==t?"All Blogs":"Semua Blog"})}),!e&&(0,i.jsx)("span",{children:"|"}),(0,i.jsx)(o(),{href:"/about-us",passHref:!0,children:(0,i.jsx)("a",{children:"Ind"!==t?"About Us":"Tentang kami"})}),(0,i.jsx)(o(),{href:"/contact-us",passHref:!0,children:(0,i.jsx)("a",{children:"Ind"!==t?"Contact Us":"Hubungi kami"})}),(0,i.jsx)(o(),{href:"/privacy-policy",passHref:!0,children:(0,i.jsx)("a",{children:"Ind"!==t?"Privacy Policy":"Kebijakan pribadi"})})]})}},77233:function(e,t,n){"use strict";var i=n(85893),r=n(9008),o=n.n(r),a=(n(4298),function(e){var t=e.url,n=e.title,i=e.description,r=e.image,o=e.createdAt,a=e.updatedAt;return[{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:i},{name:"twitter:title",content:n},{name:"twitter:description",content:i},{name:"twitter:image:src",content:r},{name:"twitter:card",content:"summary_large_image"},{name:"og:title",content:n},{name:"og:type",content:"website"},{name:"og:url",content:t},{name:"og:image",content:r},{name:"og:description",content:i},{name:"og:site_name",content:"Double A Team"},{name:"og:published_time",content:o||(new Date).toISOString()},{name:"og:modified_time",content:a||(new Date).toISOString()}]});t.Z=function(e){var t=e.title,n=e.description,r=e.image,s=e.url;return(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:t}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,i.jsx)("meta",{name:"description",content:n}),(0,i.jsx)("meta",{itemProp:"name",content:t}),(0,i.jsx)("meta",{itemProp:"description",content:n}),r&&(0,i.jsx)("meta",{itemProp:"image",content:r}),a({url:s,title:t,description:n,image:r}).map((function(e){var t=e.name,n=e.content;return(0,i.jsx)("meta",{name:t,content:n},t)})),(0,i.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8647500966281017",crossOrigin:"anonymous",type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@content":"http://schema.org","@type":"Article",name:t,about:n,url:s})}})]})}},2631:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(70603),r=n(67294),o=n(92684);function a(){var e=(0,r.useState)(!1),t=e[0],n=e[1],a=(0,i.Z)((0,o.ac)("(max-width: 575px)"),1)[0];return(0,r.useEffect)((function(){n(a)}),[a]),t}},20958:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(67294);function r(){var e=(0,i.useState)(),t=e[0],n=e[1];return(0,i.useEffect)((function(){n(sessionStorage.getItem("language"))}),[]),t}},28045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(79361).Z,r=n(94941).Z,o=n(53929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,f=void 0!==a&&a,p=e.priority,h=void 0!==p&&p,w=e.loading,z=e.lazyRoot,E=void 0===z?null:z,O=e.lazyBoundary,A=e.className,C=e.quality,L=e.width,P=e.height,N=e.style,H=e.objectFit,R=e.objectPosition,B=e.onLoadingComplete,Z=e.placeholder,T=void 0===Z?"empty":Z,q=e.blurDataURL,M=m(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),D=s.useContext(d.ImageConfigContext),F=s.useMemo((function(){var e=x||D||l.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return g({},e,{allSizes:t,deviceSizes:n})}),[D]),W=M,U=n?"responsive":"intrinsic";"layout"in W&&(W.layout&&(U=W.layout),delete W.layout);var V=k;if("loader"in W){if(W.loader){var J=W.loader;V=function(e){e.config;var t=m(e,["config"]);return J(t)}}delete W.loader}var G="";if(function(e){return"object"===typeof e&&(j(e)||function(e){return void 0!==e.src}(e))}(t)){var X=j(t)?t.default:t;if(!X.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(q=q||X.blurDataURL,G=X.src,(!U||"fill"!==U)&&(P=P||X.height,L=L||X.width,!X.height||!X.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)))}var K=!h&&("lazy"===w||"undefined"===typeof w);((t="string"===typeof t?t:G).startsWith("data:")||t.startsWith("blob:"))&&(f=!0,K=!1);v.has(t)&&(K=!1);b&&(f=!0);var Q,$=r(s.useState(!1),2),Y=$[0],ee=$[1],te=r(u.useIntersection({rootRef:E,rootMargin:O||"200px",disabled:!K}),3),ne=te[0],ie=te[1],re=te[2],oe=!K||ie,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce=!1,le={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:H,objectPosition:R},ue=S(L),de=S(P),fe=S(C);0;var ge=Object.assign({},N,le),pe="blur"!==T||Y?{}:{backgroundSize:H||"cover",backgroundPosition:R||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(q,'")')};if("fill"===U)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof ue&&"undefined"!==typeof de){var me=de/ue,he=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===U?(ae.display="block",ae.position="relative",ce=!0,se.paddingTop=he):"intrinsic"===U?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",ce=!0,se.maxWidth="100%",Q="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ue,"%27%20height=%27").concat(de,"%27/%3e")):"fixed"===U&&(ae.display="inline-block",ae.position="relative",ae.width=ue,ae.height=de)}else 0;var be={src:y,srcSet:void 0,sizes:void 0};oe&&(be=_({config:F,src:t,unoptimized:f,layout:U,width:ue,quality:fe,sizes:n,loader:V}));var xe=t;0;var ve,ye="imagesrcset",we="imagesizes";ye="imageSrcSet",we="imageSizes";var je=(i(ve={},ye,be.srcSet),i(ve,we,be.sizes),ve),_e=s.default.useLayoutEffect,Se=s.useRef(B),ke=s.useRef(t);s.useEffect((function(){Se.current=B}),[B]),_e((function(){ke.current!==t&&(re(),ke.current=t)}),[re,t]);var ze=g({isLazy:K,imgAttributes:be,heightInt:de,widthInt:ue,qualityInt:fe,layout:U,className:A,imgStyle:ge,blurStyle:pe,loading:w,config:F,unoptimized:f,placeholder:T,loader:V,srcString:xe,onLoadingCompleteRef:Se,setBlurComplete:ee,setIntersection:ne,isVisible:oe,noscriptSizes:n},W);return s.default.createElement(s.default.Fragment,null,s.default.createElement("span",{style:ae},ce?s.default.createElement("span",{style:se},Q?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Q}):null):null,s.default.createElement(I,Object.assign({},ze))),h?s.default.createElement(c.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+be.src+be.srcSet+be.sizes,rel:"preload",as:"image",href:be.srcSet?void 0:be.src},je))):null)};var a,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(67294)),c=(a=n(5443))&&a.__esModule?a:{default:a},l=n(99309),u=n(57190),d=n(59977),f=(n(63794),n(82392));function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},g.apply(this,arguments)}function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function m(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"}||{},b=h.experimentalUnoptimized,x={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"},v=new Set,y=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(f.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=new URL("".concat(t.path).concat(E(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(E(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(E(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function j(e){return void 0!==e.default}function _(e){var t=e.config,n=e.src,i=e.unoptimized,r=e.layout,a=e.width,s=e.quality,c=e.sizes,l=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,i){var r=e.deviceSizes,a=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var s,c=/(^|\s)(1?\d?\d)vw/g,l=[];s=c.exec(i);s)l.push(parseInt(s[2]));if(l.length){var u,d=.01*(u=Math).min.apply(u,o(l));return{widths:a.filter((function(e){return e>=r[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,r,c),d=u.widths,f=u.kind,g=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map((function(e,i){return"".concat(l({config:t,src:n,quality:s,width:e})," ").concat("w"===f?e:i+1).concat(f)})).join(", "),src:l({config:t,src:n,quality:s,width:d[g]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=w.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(n))}function z(e,t,n,i,r,o){e&&e.src!==y&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(v.add(t),"blur"===i&&o(!0),null==r?void 0:r.current)){var n=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:n,naturalHeight:a})}})))}var I=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,r=e.layout,o=e.className,a=e.imgStyle,c=e.blurStyle,l=e.isLazy,u=e.placeholder,d=e.loading,f=e.srcString,p=e.config,h=e.unoptimized,b=e.loader,x=e.onLoadingCompleteRef,v=e.setBlurComplete,y=e.setIntersection,w=e.onLoad,j=e.onError,S=(e.isVisible,e.noscriptSizes),k=m(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return d=l?"lazy":d,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},k,t,{decoding:"async","data-nimg":r,className:o,style:g({},a,c),ref:s.useCallback((function(e){y(e),(null==e?void 0:e.complete)&&z(e,f,0,u,x,v)}),[y,f,r,u,x,v]),onLoad:function(e){z(e.currentTarget,f,0,u,x,v),w&&w(e)},onError:function(e){"blur"===u&&v(!0),j&&j(e)}})),(l||"blur"===u)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},k,_({config:p,src:f,unoptimized:h,layout:r,width:n,quality:i,sizes:S,loader:b}),{decoding:"async","data-nimg":r,style:a,className:o,loading:d}))))};function E(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},11482:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return _},default:function(){return S}});var i=n(85893),r=n(67294),o=n(68527);function a(){return(0,i.jsx)(o.xu,{bg:"main",bgImage:"url(/images/IstanbulHagiaSopia.jpg)",backgroundPosition:"center",backgroundRepeat:"no-repeat",h:"100vh",w:"100%",pos:"absolute",zIndex:"10",backgroundSize:"cover",borderBottom:"2px solid red"})}var s=n(15402),c=n.n(s);function l(){return(0,i.jsx)(o.xu,{p:"180px 6%",zIndex:"20",pos:"relative",bottom:"75px",className:c().headingContainer,children:(0,i.jsx)(o.X6,{as:"h1",fontSize:"11vw",color:"primary",cursor:"default",className:c().heading,children:"Double A Team"})})}var u=n(41664),d=n.n(u),f=n(25675),g=n.n(f),p=n(17922),m=n(2631);function h(e){var t=e.blogs,n=e.lang,r=(0,m.Z)();return(0,i.jsx)(o.aV,{display:"flex",children:(0,i.jsx)(o.kC,{wrap:"wrap",placeContent:"center",children:t.map((function(e,t){if(e.new)return(0,i.jsx)(d(),{href:"/posts/".concat(e.path),passHref:!0,children:(0,i.jsxs)(o.HC,{w:r?"250px":"500px",h:r?"500px":"700px",cursor:"pointer",m:"10px 20px",overflow:"hidden",_hover:{boxShadow:"5px 7px 16px -5px rgba(0,0,0,0.56)"},className:"blogCard",children:[(0,i.jsx)(p.Z,{titleText:"Ind"!==n?e.title:e.indTitle,fontSize:r?"26px":"30px",pos:"absolute"}),(0,i.jsx)(g(),{src:e.img||"/images/blog/".concat(e.path,".avif"),alt:"".concat(e.title," image"),width:r?"250px":"500px",height:r?"500px":"700px"})]})},"".concat(e,"__").concat(t))}))})})}var b=n(83487),x=n(77233),v=n(34651);function y(e){var t=e.lang,n=e.setLang;return(0,r.useEffect)((function(){sessionStorage.getItem("language")?n(sessionStorage.getItem("language")):(sessionStorage.setItem("language","Eng"),n("Eng"))}),[]),(0,i.jsx)(o.M5,{children:(0,i.jsxs)(o.xu,{onClick:function(){return n((function(e){return sessionStorage.setItem("language","Ind"!==e?"Ind":"Eng"),"Ind"!==e?"Ind":"Eng"}))},cursor:"pointer",children:[(0,i.jsx)(o.xv,{color:"primary",children:"Ind"!==t?"klik di sini untuk mengubah bahasa Indonesia":"Click here to change the language to English"}),(0,i.jsx)(v.Ee,{src:"Ind"!==t?"/images/Ind.png":"/images/Eng.jpg",alt:"Translate Flags",w:"350px",h:"200px"})]})})}var w=n(81673),j=n.n(w),_=!0;function S(e){var t=e.blogs,n=(0,r.useState)(),s=n[0],c=n[1];return(0,i.jsxs)(o.xu,{w:"100%",h:"100%",children:[(0,i.jsx)(x.Z,{title:"Double A Team",description:"A website built through our passion for helping others, learning and growing. Come learn what we know, if you want to know that is!",url:"https://doubleateam.co.uk/",image:"/images/IstanbulHagiaSopia.jpg"}),(0,i.jsxs)(o.xu,{className:j().main,children:[(0,i.jsx)(a,{}),(0,i.jsx)(l,{})]}),(0,i.jsxs)(o.xu,{m:"2% 6%",minH:"1000px",children:[(0,i.jsx)(y,{lang:s,setLang:c}),(0,i.jsxs)(o.xv,{fontSize:"38px",align:"center",color:"red",pb:"12px",children:["Ind"!==s?"Our Latest Blogs":"blog terbaru kami","|"," ",(0,i.jsx)(d(),{href:"/posts/",passHref:!0,children:(0,i.jsx)("a",{style:{color:"#0070f3"},children:"Ind"!==s?"Click for all Blogs":"Klik untuk semua Blog"})})]}),(0,i.jsx)(h,{lang:s,blogs:t})]}),(0,i.jsx)(b.Z,{})]})}},15402:function(e){e.exports={headingContainer:"styles_headingContainer__yIIm4",heading:"styles_heading__8PB8v",topSlideIn:"styles_topSlideIn__XjFu9"}},81673:function(e){e.exports={container:"Home_container__97eC3",homeContainer:"Home_homeContainer__FDaTl",main:"Home_main__OVLM4",footer:"Home_footer__zed0_",title:"Home_title__q0Qg4",description:"Home_description__JhekB",code:"Home_code__2i1pD",grid:"Home_grid__npx0i",card:"Home_card__K7aTN",logo:"Home_logo__FLQOc"}},25675:function(e,t,n){e.exports=n(28045)}},function(e){e.O(0,[445,180,774,888,179],(function(){return t=75557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
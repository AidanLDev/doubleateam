(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[913],{34651:function(r,n,e){"use strict";e.d(n,{Ee:function(){return d}});var t=e(42846),a=e(15031),i=e(67294),o=e(44697);function c(){return c=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])}return r},c.apply(this,arguments)}function s(r,n){if(null==r)return{};var e,t,a={},i=Object.keys(r);for(t=0;t<i.length;t++)e=i[t],n.indexOf(e)>=0||(a[e]=r[e]);return a}var l=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"],f=i.forwardRef((function(r,n){var e=r.htmlWidth,t=r.htmlHeight,a=r.alt,o=s(r,l);return i.createElement("img",c({width:e,height:t,ref:n,alt:a},o))}));a.Ts&&(f.displayName="NativeImage");var d=(0,t.Gp)((function(r,n){var e=r.fallbackSrc,l=r.fallback,d=r.src,g=r.srcSet,h=r.align,p=r.fit,v=r.loading,m=r.ignoreFallback,b=r.crossOrigin,x=r.fallbackStrategy,j=void 0===x?"beforeLoadOrError":x,y=r.referrerPolicy,k=s(r,u),E=null!=v||m||!(void 0!==e||void 0!==l),w=function(r){var n=r.loading,e=r.src,t=r.srcSet,a=r.onLoad,c=r.onError,s=r.crossOrigin,l=r.sizes,u=r.ignoreFallback,f=(0,i.useState)("pending"),d=f[0],g=f[1];(0,i.useEffect)((function(){g(e?"loading":"pending")}),[e]);var h=(0,i.useRef)(),p=(0,i.useCallback)((function(){if(e){v();var r=new Image;r.src=e,s&&(r.crossOrigin=s),t&&(r.srcset=t),l&&(r.sizes=l),n&&(r.loading=n),r.onload=function(r){v(),g("loaded"),null==a||a(r)},r.onerror=function(r){v(),g("failed"),null==c||c(r)},h.current=r}}),[e,s,t,l,a,c,n]),v=function(){h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return(0,o.a)((function(){if(!u)return"loading"===d&&p(),function(){v()}}),[d,p,u]),u?"loaded":d}(c({},r,{ignoreFallback:E})),O=function(r,n){return"loaded"!==r&&"beforeLoadOrError"===n||"failed"===r&&"onError"===n}(w,j),_=c({ref:n,objectFit:p,objectPosition:h},E?k:(0,a.CE)(k,["onError","onLoad"]));return O?l||i.createElement(t.m$.img,c({as:f,className:"chakra-image__placeholder",src:e},_)):i.createElement(t.m$.img,c({as:f,src:d,srcSet:g,crossOrigin:b,loading:v,referrerPolicy:y,className:"chakra-image"},_))}));a.Ts&&(d.displayName="Image")},61654:function(r,n,e){"use strict";e.d(n,{Z:function(){return l}});e(34051);var t=e(85893),a=(e(67294),e(41664)),i=e.n(a),o=e(2631),c=e(77058),s="topBar.";function l(r){var n=r.isHome,e=(0,c.$)().t,a=(0,o.Z)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i(),{href:"/posts",children:(0,t.jsx)("a",{children:e("".concat(s,"allBlogs"))})}),!a&&!n&&(0,t.jsx)("span",{children:"|"}),(0,t.jsx)(i(),{href:"/about-us",passHref:!0,children:(0,t.jsx)("a",{children:e("".concat(s,"aboutUs"))})}),(0,t.jsx)(i(),{href:"/contact-us",passHref:!0,children:(0,t.jsx)("a",{children:e("".concat(s,"contactUs"))})}),(0,t.jsx)(i(),{href:"/privacy-policy",passHref:!0,children:(0,t.jsx)("a",{children:e("".concat(s,"privacyPolicy"))})})]})}},70292:function(r,n,e){"use strict";e.d(n,{Z:function(){return l}});var t=e(85893),a=e(67294),i=e(75901),o=e(86541),c=e(34651),s=e(77058);function l(){var r=(0,a.useState)(i.ZP.language),n=r[0],e=r[1],l=(0,s.$)().t;return(0,t.jsx)(o.u,{label:l("toggleLangTooltip"),shouldWrapChildren:!0,children:(0,t.jsx)(c.Ee,{width:"80px",height:"40px",src:"/images/".concat("en"===n?"Eng.webp":"Ind.png"),alt:"Language Flags",onClick:function(){return e((function(r){return i.ZP.changeLanguage("en"===r?"id":"en"),"en"===r?"id":"en"}))},style:{cursor:"pointer"}})})}},75913:function(r,n,e){"use strict";e.r(n),e.d(n,{default:function(){return m},getStaticProps:function(){return p}});var t=e(47568),a=e(34051),i=e.n(a),o=e(85893),c=e(68527),s=(e(67294),e(41664)),l=e.n(s),u=e(61654),f=e(2631),d=e(96328),g=e.n(d),h=e(70292);function p(){return v.apply(this,arguments)}function v(){return(v=(0,t.Z)(i().mark((function r(){return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",{props:{isHome:isHome}});case 1:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function m(r){r.isHome;var n=(0,f.Z)();return(0,o.jsxs)(c.kC,{className:g().topbarContainer,zIndex:100,children:[!n&&(0,o.jsx)(c.xu,{flexGrow:1,children:(0,o.jsx)(l(),{href:"/",passHref:!0,children:(0,o.jsx)(c.xv,{className:g().logo,children:"AA"})})}),(0,o.jsx)(u.Z,{}),(0,o.jsx)(h.Z,{})]})}},96328:function(r){r.exports={topbarContainer:"styles_topbarContainer__h9Nf1",logo:"styles_logo__a5qhr"}},47568:function(r,n,e){"use strict";function t(r,n,e,t,a,i,o){try{var c=r[i](o),s=c.value}catch(l){return void e(l)}c.done?n(s):Promise.resolve(s).then(t,a)}function a(r){return function(){var n=this,e=arguments;return new Promise((function(a,i){var o=r.apply(n,e);function c(r){t(o,a,i,c,s,"next",r)}function s(r){t(o,a,i,c,s,"throw",r)}c(void 0)}))}}e.d(n,{Z:function(){return a}})}}]);
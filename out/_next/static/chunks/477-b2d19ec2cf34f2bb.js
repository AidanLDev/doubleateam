(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[477],{34651:function(r,t,e){"use strict";e.d(t,{Ee:function(){return d}});var n=e(42846),a=e(15031),o=e(67294),i=e(44697);function c(){return c=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},c.apply(this,arguments)}function l(r,t){if(null==r)return{};var e,n,a={},o=Object.keys(r);for(n=0;n<o.length;n++)e=o[n],t.indexOf(e)>=0||(a[e]=r[e]);return a}var u=["htmlWidth","htmlHeight","alt"],s=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"],f=o.forwardRef((function(r,t){var e=r.htmlWidth,n=r.htmlHeight,a=r.alt,i=l(r,u);return o.createElement("img",c({width:e,height:n,ref:t,alt:a},i))}));a.Ts&&(f.displayName="NativeImage");var d=(0,n.Gp)((function(r,t){var e=r.fallbackSrc,u=r.fallback,d=r.src,m=r.srcSet,g=r.align,h=r.fit,v=r.loading,p=r.ignoreFallback,y=r.crossOrigin,b=r.fallbackStrategy,O=void 0===b?"beforeLoadOrError":b,w=r.referrerPolicy,E=l(r,s),k=null!=v||p||!(void 0!==e||void 0!==u),j=function(r){var t=r.loading,e=r.src,n=r.srcSet,a=r.onLoad,c=r.onError,l=r.crossOrigin,u=r.sizes,s=r.ignoreFallback,f=(0,o.useState)("pending"),d=f[0],m=f[1];(0,o.useEffect)((function(){m(e?"loading":"pending")}),[e]);var g=(0,o.useRef)(),h=(0,o.useCallback)((function(){if(e){v();var r=new Image;r.src=e,l&&(r.crossOrigin=l),n&&(r.srcset=n),u&&(r.sizes=u),t&&(r.loading=t),r.onload=function(r){v(),m("loaded"),null==a||a(r)},r.onerror=function(r){v(),m("failed"),null==c||c(r)},g.current=r}}),[e,l,n,u,a,c,t]),v=function(){g.current&&(g.current.onload=null,g.current.onerror=null,g.current=null)};return(0,i.a)((function(){if(!s)return"loading"===d&&h(),function(){v()}}),[d,h,s]),s?"loaded":d}(c({},r,{ignoreFallback:k})),S=function(r,t){return"loaded"!==r&&"beforeLoadOrError"===t||"failed"===r&&"onError"===t}(j,O),N=c({ref:t,objectFit:h,objectPosition:g},k?E:(0,a.CE)(E,["onError","onLoad"]));return S?u||o.createElement(n.m$.img,c({as:f,className:"chakra-image__placeholder",src:e},N)):o.createElement(n.m$.img,c({as:f,src:d,srcSet:m,crossOrigin:y,loading:v,referrerPolicy:w,className:"chakra-image"},N))}));a.Ts&&(d.displayName="Image")},92684:function(r,t,e){"use strict";e.d(t,{ac:function(){return c}});e(42846);var n=e(15031),a=e(67294),o=e(85393);function i(){return i=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},i.apply(this,arguments)}function c(r,t){void 0===t&&(t={});var e=t,c=e.ssr,l=void 0===c||c,u=e.fallback,s=(0,o.O)(),f=Array.isArray(r)?r:[r],d=Array.isArray(u)?u:[u];d=d.filter((function(r){return null!=r}));var m=(0,a.useState)((function(){return f.map((function(r,t){return{media:r,matches:l?!!d[t]:s.window.matchMedia(r).matches}}))})),g=m[0],h=m[1];return(0,a.useEffect)((function(){h(f.map((function(r){return{media:r,matches:s.window.matchMedia(r).matches}})));var r=f.map((function(r){return s.window.matchMedia(r)})),t=function(r){h((function(t){return t.slice().map((function(t){return t.media===r.media?i({},t,{matches:r.matches}):t}))}))};return r.forEach((function(r){(0,n.mf)(r.addListener)?r.addListener(t):r.addEventListener("change",t)})),function(){r.forEach((function(r){(0,n.mf)(r.removeListener)?r.removeListener(t):r.removeEventListener("change",t)}))}}),[s.window]),g.map((function(r){return r.matches}))}n.Ts;n.Ts},9008:function(r,t,e){r.exports=e(5443)},4298:function(r,t,e){e(20699)},88357:function(r,t,e){"use strict";e.d(t,{w_:function(){return u}});var n=e(67294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=function(){return i=Object.assign||function(r){for(var t,e=1,n=arguments.length;e<n;e++)for(var a in t=arguments[e])Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a]);return r},i.apply(this,arguments)},c=function(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.indexOf(n)<0&&(e[n]=r[n]);if(null!=r&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(r);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(r,n[a])&&(e[n[a]]=r[n[a]])}return e};function l(r){return r&&r.map((function(r,t){return n.createElement(r.tag,i({key:t},r.attr),l(r.child))}))}function u(r){return function(t){return n.createElement(s,i({attr:i({},r.attr)},t),l(r.child))}}function s(r){var t=function(t){var e,a=r.attr,o=r.size,l=r.title,u=c(r,["attr","size","title"]),s=o||t.size||"1em";return t.className&&(e=t.className),r.className&&(e=(e?e+" ":"")+r.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:e,style:i(i({color:r.color||t.color},t.style),r.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),r.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(r){return t(r)})):t(a)}},70603:function(r,t,e){"use strict";function n(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function a(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,t){if(r){if("string"===typeof r)return n(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(r,t):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(t,{Z:function(){return a}})}}]);
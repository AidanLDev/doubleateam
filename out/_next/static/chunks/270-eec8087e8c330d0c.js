"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[270],{34651:function(r,e,t){t.d(e,{Ee:function(){return d}});var n=t(42846),a=t(15031),o=t(67294),i=t(44697);function c(){return c=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},c.apply(this,arguments)}function l(r,e){if(null==r)return{};var t,n,a={},o=Object.keys(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(a[t]=r[t]);return a}var u=["htmlWidth","htmlHeight","alt"],s=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"],f=o.forwardRef((function(r,e){var t=r.htmlWidth,n=r.htmlHeight,a=r.alt,i=l(r,u);return o.createElement("img",c({width:t,height:n,ref:e,alt:a},i))}));a.Ts&&(f.displayName="NativeImage");var d=(0,n.Gp)((function(r,e){var t=r.fallbackSrc,u=r.fallback,d=r.src,m=r.srcSet,g=r.align,h=r.fit,v=r.loading,p=r.ignoreFallback,y=r.crossOrigin,b=r.fallbackStrategy,O=void 0===b?"beforeLoadOrError":b,w=r.referrerPolicy,E=l(r,s),k=null!=v||p||!(void 0!==t||void 0!==u),j=function(r){var e=r.loading,t=r.src,n=r.srcSet,a=r.onLoad,c=r.onError,l=r.crossOrigin,u=r.sizes,s=r.ignoreFallback,f=(0,o.useState)("pending"),d=f[0],m=f[1];(0,o.useEffect)((function(){m(t?"loading":"pending")}),[t]);var g=(0,o.useRef)(),h=(0,o.useCallback)((function(){if(t){v();var r=new Image;r.src=t,l&&(r.crossOrigin=l),n&&(r.srcset=n),u&&(r.sizes=u),e&&(r.loading=e),r.onload=function(r){v(),m("loaded"),null==a||a(r)},r.onerror=function(r){v(),m("failed"),null==c||c(r)},g.current=r}}),[t,l,n,u,a,c,e]),v=function(){g.current&&(g.current.onload=null,g.current.onerror=null,g.current=null)};return(0,i.a)((function(){if(!s)return"loading"===d&&h(),function(){v()}}),[d,h,s]),s?"loaded":d}(c({},r,{ignoreFallback:k})),S=function(r,e){return"loaded"!==r&&"beforeLoadOrError"===e||"failed"===r&&"onError"===e}(j,O),N=c({ref:e,objectFit:h,objectPosition:g},k?E:(0,a.CE)(E,["onError","onLoad"]));return S?u||o.createElement(n.m$.img,c({as:f,className:"chakra-image__placeholder",src:t},N)):o.createElement(n.m$.img,c({as:f,src:d,srcSet:m,crossOrigin:y,loading:v,referrerPolicy:w,className:"chakra-image"},N))}));a.Ts&&(d.displayName="Image")},92684:function(r,e,t){t.d(e,{ac:function(){return c}});t(42846);var n=t(15031),a=t(67294),o=t(85393);function i(){return i=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},i.apply(this,arguments)}function c(r,e){void 0===e&&(e={});var t=e,c=t.ssr,l=void 0===c||c,u=t.fallback,s=(0,o.O)(),f=Array.isArray(r)?r:[r],d=Array.isArray(u)?u:[u];d=d.filter((function(r){return null!=r}));var m=(0,a.useState)((function(){return f.map((function(r,e){return{media:r,matches:l?!!d[e]:s.window.matchMedia(r).matches}}))})),g=m[0],h=m[1];return(0,a.useEffect)((function(){h(f.map((function(r){return{media:r,matches:s.window.matchMedia(r).matches}})));var r=f.map((function(r){return s.window.matchMedia(r)})),e=function(r){h((function(e){return e.slice().map((function(e){return e.media===r.media?i({},e,{matches:r.matches}):e}))}))};return r.forEach((function(r){(0,n.mf)(r.addListener)?r.addListener(e):r.addEventListener("change",e)})),function(){r.forEach((function(r){(0,n.mf)(r.removeListener)?r.removeListener(e):r.removeEventListener("change",e)}))}}),[s.window]),g.map((function(r){return r.matches}))}n.Ts;n.Ts},88357:function(r,e,t){t.d(e,{w_:function(){return u}});var n=t(67294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=function(){return i=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var a in e=arguments[t])Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r},i.apply(this,arguments)},c=function(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(null!=r&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(r);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(r,n[a])&&(t[n[a]]=r[n[a]])}return t};function l(r){return r&&r.map((function(r,e){return n.createElement(r.tag,i({key:e},r.attr),l(r.child))}))}function u(r){return function(e){return n.createElement(s,i({attr:i({},r.attr)},e),l(r.child))}}function s(r){var e=function(e){var t,a=r.attr,o=r.size,l=r.title,u=c(r,["attr","size","title"]),s=o||e.size||"1em";return e.className&&(t=e.className),r.className&&(t=(t?t+" ":"")+r.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,a,u,{className:t,style:i(i({color:r.color||e.color},e.style),r.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),r.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(r){return e(r)})):e(a)}},70603:function(r,e,t){function n(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function a(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,e){if(r){if("string"===typeof r)return n(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(r,e):void 0}}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(e,{Z:function(){return a}})}}]);
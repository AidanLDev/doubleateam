(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[650,641],{34651:function(e,t,n){"use strict";n.d(t,{Ee:function(){return d}});var r=n(42846),o=n(15031),i=n(67294),a=n(44697);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var u=["htmlWidth","htmlHeight","alt"],l=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"],f=i.forwardRef((function(e,t){var n=e.htmlWidth,r=e.htmlHeight,o=e.alt,a=s(e,u);return i.createElement("img",c({width:n,height:r,ref:t,alt:o},a))}));o.Ts&&(f.displayName="NativeImage");var d=(0,r.Gp)((function(e,t){var n=e.fallbackSrc,u=e.fallback,d=e.src,g=e.srcSet,h=e.align,p=e.fit,v=e.loading,m=e.ignoreFallback,y=e.crossOrigin,b=e.fallbackStrategy,w=void 0===b?"beforeLoadOrError":b,O=e.referrerPolicy,E=s(e,l),S=null!=v||m||!(void 0!==n||void 0!==u),x=function(e){var t=e.loading,n=e.src,r=e.srcSet,o=e.onLoad,c=e.onError,s=e.crossOrigin,u=e.sizes,l=e.ignoreFallback,f=(0,i.useState)("pending"),d=f[0],g=f[1];(0,i.useEffect)((function(){g(n?"loading":"pending")}),[n]);var h=(0,i.useRef)(),p=(0,i.useCallback)((function(){if(n){v();var e=new Image;e.src=n,s&&(e.crossOrigin=s),r&&(e.srcset=r),u&&(e.sizes=u),t&&(e.loading=t),e.onload=function(e){v(),g("loaded"),null==o||o(e)},e.onerror=function(e){v(),g("failed"),null==c||c(e)},h.current=e}}),[n,s,r,u,o,c,t]),v=function(){h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return(0,a.a)((function(){if(!l)return"loading"===d&&p(),function(){v()}}),[d,p,l]),l?"loaded":d}(c({},e,{ignoreFallback:S})),L=function(e,t){return"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t}(x,w),k=c({ref:t,objectFit:p,objectPosition:h},S?E:(0,o.CE)(E,["onError","onLoad"]));return L?u||i.createElement(r.m$.img,c({as:f,className:"chakra-image__placeholder",src:n},k)):i.createElement(r.m$.img,c({as:f,src:d,srcSet:g,crossOrigin:y,loading:v,referrerPolicy:O,className:"chakra-image"},k))}));o.Ts&&(d.displayName="Image")},92684:function(e,t,n){"use strict";n.d(t,{ac:function(){return c}});n(42846);var r=n(15031),o=n(67294),i=n(85393);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function c(e,t){void 0===t&&(t={});var n=t,c=n.ssr,s=void 0===c||c,u=n.fallback,l=(0,i.O)(),f=Array.isArray(e)?e:[e],d=Array.isArray(u)?u:[u];d=d.filter((function(e){return null!=e}));var g=(0,o.useState)((function(){return f.map((function(e,t){return{media:e,matches:s?!!d[t]:l.window.matchMedia(e).matches}}))})),h=g[0],p=g[1];return(0,o.useEffect)((function(){p(f.map((function(e){return{media:e,matches:l.window.matchMedia(e).matches}})));var e=f.map((function(e){return l.window.matchMedia(e)})),t=function(e){p((function(t){return t.slice().map((function(t){return t.media===e.media?a({},t,{matches:e.matches}):t}))}))};return e.forEach((function(e){(0,r.mf)(e.addListener)?e.addListener(t):e.addEventListener("change",t)})),function(){e.forEach((function(e){(0,r.mf)(e.removeListener)?e.removeListener(t):e.removeEventListener("change",t)}))}}),[l.window]),h.map((function(e){return e.matches}))}r.Ts;r.Ts},11163:function(e,t,n){e.exports=n(90387)},4298:function(e,t,n){e.exports=n(20699)},77058:function(e,t,n){"use strict";n.d(t,{$:function(){return b}});var r=n(83878);var o=n(40181),i=n(25267);function a(e,t){return(0,r.Z)(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(s){c=!0,o=s}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||(0,o.Z)(e,t)||(0,i.Z)()}var c=n(4942),s=n(67294),u=n(57715);function l(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var f={};function d(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&f[t[0]]||("string"===typeof t[0]&&(f[t[0]]=new Date),l.apply(void 0,t))}function g(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.languages[0],o=!!t.options&&t.options.fallbackLng,i=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!a(r,e)||o&&!a(i,e))))}function p(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return d("i18n.languages were undefined or empty",t.languages),!0;var r=void 0!==t.options.ignoreJSONStructure;return r?t.hasLoadedNamespace(e,{precheck:function(t,r){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):h(e,t,n)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e,t){var n=(0,s.useRef)();return(0,s.useEffect)((function(){n.current=t?n.current:e}),[e,t]),n.current};function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=(0,s.useContext)(u.OO)||{},o=r.i18n,i=r.defaultNS,c=n||o||(0,u.nI)();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new u.zv),!c){d("You will need to pass in an i18next instance by using initReactI18next");var l=function(e){return Array.isArray(e)?e[e.length-1]:e},f=[l,{},!1];return f.t=l,f.i18n={},f.ready=!1,f}c.options.react&&void 0!==c.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var h=m(m(m({},(0,u.JP)()),c.options.react),t),v=h.useSuspense,b=h.keyPrefix,w=e||i||c.options&&c.options.defaultNS;w="string"===typeof w?[w]:w||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(w);var O=(c.isInitialized||c.initializedStoreOnce)&&w.every((function(e){return p(e,c,h)}));function E(){return c.getFixedT(null,"fallback"===h.nsMode?w:w[0],b)}var S=(0,s.useState)(E),x=a(S,2),L=x[0],k=x[1],j=w.join(),P=y(j),z=(0,s.useRef)(!0);(0,s.useEffect)((function(){var e=h.bindI18n,t=h.bindI18nStore;function n(){z.current&&k(E)}return z.current=!0,O||v||g(c,w,(function(){z.current&&k(E)})),O&&P&&P!==j&&z.current&&k(E),e&&c&&c.on(e,n),t&&c&&c.store.on(t,n),function(){z.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,n)})),t&&c&&t.split(" ").forEach((function(e){return c.store.off(e,n)}))}}),[c,j]);var A=(0,s.useRef)(!0);(0,s.useEffect)((function(){z.current&&!A.current&&k(E),A.current=!1}),[c,b]);var N=[L,c,O];if(N.t=L,N.i18n=c,N.ready=O,O)return N;if(!O&&!v)return N;throw new Promise((function(e){g(c,w,(function(){e()}))}))}},88357:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(67294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function s(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),s(e.child))}))}function u(e){return function(t){return r.createElement(l,a({attr:a({},e.attr)},t),s(e.child))}}function l(e){var t=function(t){var n,o=e.attr,i=e.size,s=e.title,u=c(e,["attr","size","title"]),l=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},47568:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function c(e){r(a,o,i,c,s,"next",e)}function s(e){r(a,o,i,c,s,"throw",e)}c(void 0)}))}}n.d(t,{Z:function(){return o}})},70603:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})},36842:function(e,t,n){"use strict";n.d(t,{v:function(){return _}});var r=n(81439);Object.create;Object.create;const o=new WeakMap;let i;function a({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=o.get(e))||void 0===r||r.forEach((r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){const{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})}))}function c(e){e.forEach(a)}function s(e,t){i||"undefined"!==typeof ResizeObserver&&(i=new ResizeObserver(c));const n=function(e,t){var n;return"string"===typeof e?t?(null!==(n=t[e])&&void 0!==n||(t[e]=document.querySelectorAll(e)),e=t[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}(e);return n.forEach((e=>{let n=o.get(e);n||(n=new Set,o.set(e,n)),n.add(t),null===i||void 0===i||i.observe(e)})),()=>{n.forEach((e=>{const n=o.get(e);null===n||void 0===n||n.delete(t),(null===n||void 0===n?void 0:n.size)||null===i||void 0===i||i.unobserve(e)}))}}const u=new Set;let l;function f(e){return u.add(e),l||(l=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};u.forEach((e=>e(t)))},window.addEventListener("resize",l)),()=>{u.delete(e),!u.size&&l&&(l=void 0)}}const d=(e,t,n)=>t-e===0?1:(n-e)/(t-e);const g={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function h(e,t,n,r){const o=n[t],{length:i,position:a}=g[t],c=o.current,s=n.time;o.current=e["scroll"+a],o.scrollLength=e["scroll"+i]-e["client"+i],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=d(0,o.scrollLength,o.current);const u=r-s;var l,f;o.velocity=u>50?0:(l=o.current-c,(f=u)?l*(1e3/f):0)}const p=e=>e,v=(e,t,n)=>-n*e+n*t+e;function m(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const o=d(0,t,r);e.push(v(n,1,o))}}function y(e){const t=[0];return m(t,e-1),t}const b=e=>"number"===typeof e;function w(e,t){return(e=>Array.isArray(e)&&!b(e[0]))(e)?e[((e,t,n)=>{const r=t-e;return((n-e)%r+r)%r+e})(0,e.length,t)]:e}function O(e,t=y(e.length),n=p){const r=e.length,o=r-t.length;return o>0&&m(t,o),o=>{let i=0;for(;i<r-2&&!(o<t[i+1]);i++);let a=(c=0,s=1,u=d(t[i],t[i+1],o),Math.min(Math.max(u,c),s));var c,s,u;return a=w(n,i)(a),v(e[i],e[i+1],a)}}const E={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},S=e=>"string"===typeof e,x={start:0,center:.5,end:1};function L(e,t,n=0){let r=0;if(void 0!==x[e]&&(e=x[e]),S(e)){const t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return b(e)&&(r=t*e),n+r}const k=[0,0];function j(e,t,n,r){let o=Array.isArray(e)?e:k,i=0,a=0;return b(e)?o=[e,e]:S(e)&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,x[e]?e:"0"]),i=L(o[0],n,r),a=L(o[1],t),i-a}const P={x:0,y:0};function z(e,t,n){let{offset:r=E.All}=n;const{target:o=e,axis:i="y"}=n,a="y"===i?"height":"width",c=o!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r instanceof SVGGraphicsElement&&"getBBox"in r){const{top:e,left:t}=r.getBBox();for(n.x+=t,n.y+=e;r&&"svg"!==r.tagName;)r=r.parentNode}return n}(o,e):P,s=o===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:o.clientWidth,height:o.clientHeight},u={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let l=!t[i].interpolate;const f=r.length;for(let d=0;d<f;d++){const e=j(r[d],u[a],s[a],c[i]);l||e===t[i].interpolatorOffsets[d]||(l=!0),t[i].offset[d]=e}l&&(t[i].interpolate=O(y(f),t[i].offset),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=t[i].interpolate(t[i].current)}function A(e,t,n,r={}){const o=r.axis||"y";return{measure:()=>function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!=e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}(e,r.target,n),update:t=>{!function(e,t,n){h(e,"x",t,n),h(e,"y",t,n),t.time=n}(e,n,t),(r.offset||r.target)&&z(e,n,r)},notify:"function"===typeof t?()=>t(n):N(t,n[o])}}function N(e,t){return e.pause(),e.forEachNative(((e,{easing:t})=>{var n,r;if(e.updateDuration)t||(e.easing=p),e.updateDuration(1);else{const o={duration:1e3};t||(o.easing="linear"),null===(r=null===(n=e.effect)||void 0===n?void 0:n.updateTiming)||void 0===r||r.call(n,o)}})),()=>{e.currentTime=t.progress}}const C=new WeakMap,W=new WeakMap,I=new WeakMap,T=e=>e===document.documentElement?window:e;function B(e,t={}){var{container:n=document.documentElement}=t,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(t,["container"]);let o=I.get(n);o||(o=new Set,I.set(n,o));const i=A(n,e,{time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}},r);if(o.add(i),!C.has(n)){const e=()=>{const e=performance.now();for(const t of o)t.measure();for(const t of o)t.update(e);for(const t of o)t.notify()};C.set(n,e);const t=T(n);window.addEventListener("resize",e,{passive:!0}),n!==document.documentElement&&W.set(n,(c=e,"function"===typeof(a=n)?f(a):s(a,c))),t.addEventListener("scroll",e,{passive:!0})}var a,c;const u=C.get(n),l=requestAnimationFrame(u);return()=>{var t;"function"!==typeof e&&e.stop(),cancelAnimationFrame(l);const r=I.get(n);if(!r)return;if(r.delete(i),r.size)return;const o=C.get(n);C.delete(n),o&&(T(n).removeEventListener("scroll",o),null===(t=W.get(n))||void 0===t||t(),window.removeEventListener("resize",o))}}var H=n(33234),M=n(96681),R=n(58868),F=function(){return{scrollX:(0,H.B)(0),scrollY:(0,H.B)(0),scrollXProgress:(0,H.B)(0),scrollYProgress:(0,H.B)(0)}};function _(e){void 0===e&&(e={});var t=e.container,n=e.target,o=(0,r._T)(e,["container","target"]),i=(0,M.h)(F);return(0,R.L)((function(){return B((function(e){var t=e.x,n=e.y;i.scrollX.set(t.current),i.scrollXProgress.set(t.progress),i.scrollY.set(n.current),i.scrollYProgress.set(n.progress)}),(0,r.pi)((0,r.pi)({},o),{container:(null===t||void 0===t?void 0:t.current)||void 0,target:(null===n||void 0===n?void 0:n.current)||void 0}))}),[]),i}}}]);
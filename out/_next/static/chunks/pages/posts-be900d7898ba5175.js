(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{87141:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return t(792)}])},40298:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(85893),a=t(4298),i=t.n(a);function o(){return(0,r.jsx)(i(),{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8647500966281017",crossorigin:"anonymous",onError:function(e){return console.error("Script failed to load",e)},strategy:"beforeInteractive"})}},2631:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(70603),a=t(67294),i=t(4453);function o(){var e=(0,a.useState)(!1),n=e[0],t=e[1],o=(0,r.Z)((0,i.a)("(max-width: 575px)"),1)[0];return(0,a.useEffect)((function(){t(o)}),[o]),n}},792:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return E},default:function(){return L}});var r=t(85893),a=t(5152),i=t.n(a),o=t(67294),s=t(23100),l=t(88911),c=t(204),u=t(89594),d=t(7754),f=t(55227),p=t(81103),g=t(35059),m=t(54662),h=t(33179),v=t(66384),b=t(25432),[y,x]=(0,f.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[j,w]=(0,f.k)({strict:!1,name:"FormControlContext"});function k(e){const{isDisabled:n,isInvalid:t,isReadOnly:r,isRequired:a,...i}=function(e){var n,t,r;const a=w(),{id:i,disabled:o,readOnly:s,required:l,isRequired:c,isInvalid:u,isReadOnly:d,isDisabled:f,onFocus:p,onBlur:g,...m}=e,h=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==a?void 0:a.hasFeedbackText)&&(null==a?void 0:a.isInvalid)&&h.push(a.feedbackId);(null==a?void 0:a.hasHelpText)&&h.push(a.helpTextId);return{...m,"aria-describedby":h.join(" ")||void 0,id:null!=i?i:null==a?void 0:a.id,isDisabled:null!=(n=null!=o?o:f)?n:null==a?void 0:a.isDisabled,isReadOnly:null!=(t=null!=s?s:d)?t:null==a?void 0:a.isReadOnly,isRequired:null!=(r=null!=l?l:c)?r:null==a?void 0:a.isRequired,isInvalid:null!=u?u:null==a?void 0:a.isInvalid,onFocus:(0,b.v0)(null==a?void 0:a.onFocus,p),onBlur:(0,b.v0)(null==a?void 0:a.onBlur,g)}}(e);return{...i,disabled:n,readOnly:r,required:a,"aria-invalid":(0,b.Qm)(t),"aria-required":(0,b.Qm)(a),"aria-readonly":(0,b.Qm)(r)}}(0,g.G)((function(e,n){const t=(0,m.jC)("Form",e),a=(0,h.Lr)(e),{getRootProps:i,htmlProps:s,...l}=function(e){const{id:n,isRequired:t,isInvalid:r,isDisabled:a,isReadOnly:i,...s}=e,l=(0,o.useId)(),c=n||`field-${l}`,u=`${c}-label`,d=`${c}-feedback`,f=`${c}-helptext`,[g,m]=(0,o.useState)(!1),[h,v]=(0,o.useState)(!1),[y,x]=(0,o.useState)(!1),j=(0,o.useCallback)(((e={},n=null)=>({id:f,...e,ref:(0,p.lq)(n,(e=>{e&&v(!0)}))})),[f]),w=(0,o.useCallback)(((e={},n=null)=>{var t,o;return{...e,ref:n,"data-focus":(0,b.PB)(y),"data-disabled":(0,b.PB)(a),"data-invalid":(0,b.PB)(r),"data-readonly":(0,b.PB)(i),id:null!=(t=e.id)?t:u,htmlFor:null!=(o=e.htmlFor)?o:c}}),[c,a,y,r,i,u]),k=(0,o.useCallback)(((e={},n=null)=>({id:d,...e,ref:(0,p.lq)(n,(e=>{e&&m(!0)})),"aria-live":"polite"})),[d]),C=(0,o.useCallback)(((e={},n=null)=>({...e,...s,ref:n,role:"group"})),[s]),S=(0,o.useCallback)(((e={},n=null)=>({...e,ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})),[]);return{isRequired:!!t,isInvalid:!!r,isReadOnly:!!i,isDisabled:!!a,isFocused:!!y,onFocus:()=>x(!0),onBlur:()=>x(!1),hasFeedbackText:g,setHasFeedbackText:m,hasHelpText:h,setHasHelpText:v,id:c,labelId:u,feedbackId:d,helpTextId:f,htmlProps:s,getHelpTextProps:j,getErrorMessageProps:k,getRootProps:C,getLabelProps:w,getRequiredIndicatorProps:S}}(a),c=(0,b.cx)("chakra-form-control",e.className);return(0,r.jsx)(j,{value:l,children:(0,r.jsx)(y,{value:t,children:(0,r.jsx)(v.m.div,{...i({},n),className:c,__css:t.container})})})})).displayName="FormControl",(0,g.G)((function(e,n){const t=w(),a=x(),i=(0,b.cx)("chakra-form__helper-text",e.className);return(0,r.jsx)(v.m.div,{...null==t?void 0:t.getHelpTextProps(e,n),__css:a.helperText,className:i})})).displayName="FormHelperText";var C=(0,g.G)((function(e,n){const{htmlSize:t,...a}=e,i=(0,m.jC)("Input",a),o=k((0,h.Lr)(a)),s=(0,b.cx)("chakra-input",e.className);return(0,r.jsx)(v.m.input,{size:t,...o,__css:i.field,ref:n,className:s})}));C.displayName="Input",C.id="Input";var S=t(77233),I=t(40298),O=t(77058),N=t(2631),_=i()((function(){return Promise.all([t.e(445),t.e(664),t.e(167)]).then(t.bind(t,83487))}),{loadableGenerated:{webpack:function(){return[83487]}}}),T=i()((function(){return Promise.all([t.e(664),t.e(715),t.e(913)]).then(t.bind(t,75913))}),{loadableGenerated:{webpack:function(){return[75913]}}}),P=i()((function(){return Promise.all([t.e(617),t.e(664),t.e(675),t.e(77)]).then(t.bind(t,18836))}),{loadableGenerated:{webpack:function(){return[18836]}}}),A="posts.",E=!0;function L(e){var n=e.blogs,t=(0,O.$)().t,a=(0,o.useState)(""),i=a[0],f=a[1],p=(0,N.Z)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(S.Z,{title:"Double A Team | Blogs",description:"All of the blogs available on double a team, scroll through and pick whatever takes your fancy or search via tags or by blog title if you have something specific in mind.",url:"https://www.doubleateam.co.uk/posts",image:"/images/IstanbulHagiaSopia.webp"}),(0,r.jsx)(I.Z,{}),(0,r.jsxs)(s.xu,{borderBottom:"2px solid red",paddingBottom:"12px",children:[(0,r.jsx)(T,{}),(0,r.jsx)(l.x,{fontSize:p?"28px":"42px",align:"center",color:"red",padding:"24px 0",cursor:"default",children:t("".concat(A,"allBlogsHeading"))})]}),(0,r.jsx)(l.x,{align:"center",color:"red",fontSize:"18px",p:"12px 0",children:t("".concat(A,"filterHeading"))}),(0,r.jsx)(c.k,{p:"0 12px",flexWrap:"wrap",gap:"4px",justify:"center",children:["aws","backend","education","visa","travel","ind","marriage","UK","daysOut","rollerCoasters","webDev","programming","astro","jsFrameworks","react","svelt","vue","solidJs","lit","preact","netlify","hosting","ciCd","circleCI","history","language","all"].map((function(e,n){return(0,r.jsx)(u.Vp,{onClick:function(){f("all"===e||i===e?"":e)},colorScheme:e===i?"green":"blue",cursor:"pointer",children:t("blogs.tags.".concat(e))},"".concat(n,"__").concat(e))}))}),(0,r.jsx)(d.M,{padding:"12px 0",children:(0,r.jsx)(C,{variant:"filled",placeholder:t("".concat(A,"blogSearchPlaceHolder")),width:"25%",value:i,onChange:function(e){f(e.target.value)},_placeholder:{opacity:1,color:"black"},color:"#0070f3",minW:"200px"})}),(0,r.jsx)(s.xu,{p:"0 24px",children:(0,r.jsx)(P,{blogs:n,filterValue:i})}),(0,r.jsx)(_,{})]})}},4298:function(e,n,t){e.exports=t(20699)},77058:function(e,n,t){"use strict";t.d(n,{$:function(){return y}});var r=t(83878);var a=t(40181),i=t(25267);function o(e,n){return(0,r.Z)(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i,o,s=[],l=!0,c=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);l=!0);}catch(u){c=!0,a=u}finally{try{if(!l&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw a}}return s}}(e,n)||(0,a.Z)(e,n)||(0,i.Z)()}var s=t(4942),l=t(67294),c=t(57715);function u(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var d={};function f(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&d[n[0]]||("string"===typeof n[0]&&(d[n[0]]=new Date),u.apply(void 0,n))}function p(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function g(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],a=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var o=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!o(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!(n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages))||!(!o(r,e)||a&&!o(i,e))))}function m(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return f("i18n.languages were undefined or empty",n.languages),!0;var r=void 0!==n.options.ignoreJSONStructure;return r?n.hasLoadedNamespace(e,{precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):g(e,n,t)}function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b=function(e,n){var t=(0,l.useRef)();return(0,l.useEffect)((function(){t.current=n?t.current:e}),[e,n]),t.current};function y(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,l.useContext)(c.OO)||{},a=r.i18n,i=r.defaultNS,s=t||a||(0,c.nI)();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new c.zv),!s){f("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},d=[u,{},!1];return d.t=u,d.i18n={},d.ready=!1,d}s.options.react&&void 0!==s.options.react.wait&&f("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var g=v(v(v({},(0,c.JP)()),s.options.react),n),h=g.useSuspense,y=g.keyPrefix,x=e||i||s.options&&s.options.defaultNS;x="string"===typeof x?[x]:x||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(x);var j=(s.isInitialized||s.initializedStoreOnce)&&x.every((function(e){return m(e,s,g)}));function w(){return s.getFixedT(null,"fallback"===g.nsMode?x:x[0],y)}var k=(0,l.useState)(w),C=o(k,2),S=C[0],I=C[1],O=x.join(),N=b(O),_=(0,l.useRef)(!0);(0,l.useEffect)((function(){var e=g.bindI18n,n=g.bindI18nStore;function t(){_.current&&I(w)}return _.current=!0,j||h||p(s,x,(function(){_.current&&I(w)})),j&&N&&N!==O&&_.current&&I(w),e&&s&&s.on(e,t),n&&s&&s.store.on(n,t),function(){_.current=!1,e&&s&&e.split(" ").forEach((function(e){return s.off(e,t)})),n&&s&&n.split(" ").forEach((function(e){return s.store.off(e,t)}))}}),[s,O]);var T=(0,l.useRef)(!0);(0,l.useEffect)((function(){_.current&&!T.current&&I(w),T.current=!1}),[s,y]);var P=[S,s,j];if(P.t=S,P.i18n=s,P.ready=j,j)return P;if(!j&&!h)return P;throw new Promise((function(e){p(s,x,(function(){e()}))}))}},7754:function(e,n,t){"use strict";t.d(n,{M:function(){return o}});var r=t(66384),a=t(35059),i=t(85893),o=(0,r.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});o.displayName="Center";var s={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,a.G)((function(e,n){const{axis:t="both",...a}=e;return(0,i.jsx)(r.m.div,{ref:n,__css:s[t],...a,position:"absolute"})}))},204:function(e,n,t){"use strict";t.d(n,{k:function(){return o}});var r=t(35059),a=t(66384),i=t(85893),o=(0,r.G)((function(e,n){const{direction:t,align:r,justify:o,wrap:s,basis:l,grow:c,shrink:u,...d}=e,f={display:"flex",flexDirection:t,alignItems:r,justifyContent:o,flexWrap:s,flexBasis:l,flexGrow:c,flexShrink:u};return(0,i.jsx)(a.m.div,{ref:n,__css:f,...d})}));o.displayName="Flex"},88911:function(e,n,t){"use strict";t.d(n,{x:function(){return u}});var r=t(35059),a=t(54662),i=t(33179),o=t(66384),s=t(25432),l=t(20888),c=t(85893),u=(0,r.G)((function(e,n){const t=(0,a.mq)("Text",e),{className:r,align:u,decoration:d,casing:f,...p}=(0,i.Lr)(e),g=(0,l.oA)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,c.jsx)(o.m.p,{ref:n,className:(0,s.cx)("chakra-text",e.className),...g,...p,__css:t})}));u.displayName="Text"},4453:function(e,n,t){"use strict";t.d(n,{a:function(){return i}});var r=t(81607),a=t(67294);function i(e,n={}){const{ssr:t=!0,fallback:i}=n,{getWindow:o}=(0,r.O)(),s=Array.isArray(e)?e:[e];let l=Array.isArray(i)?i:[i];l=l.filter((e=>null!=e));const[c,u]=(0,a.useState)((()=>s.map(((e,n)=>({media:e,matches:t?!!l[n]:o().matchMedia(e).matches})))));return(0,a.useEffect)((()=>{const e=o();u(s.map((n=>({media:n,matches:e.matchMedia(n).matches}))));const n=s.map((n=>e.matchMedia(n))),t=e=>{u((n=>n.slice().map((n=>n.media===e.media?{...n,matches:e.matches}:n))))};return n.forEach((e=>{"function"===typeof e.addListener?e.addListener(t):e.addEventListener("change",t)})),()=>{n.forEach((e=>{"function"===typeof e.removeListener?e.removeListener(t):e.removeEventListener("change",t)}))}}),[o]),c.map((e=>e.matches))}},81103:function(e,n,t){"use strict";t.d(n,{lq:function(){return r}});t(67294);function r(...e){return n=>{e.forEach((e=>{!function(e,n){if(null!=e)if("function"!==typeof e)try{e.current=n}catch(t){throw new Error(`Cannot assign value '${n}' to ref '${e}'`)}else e(n)}(e,n)}))}}},89594:function(e,n,t){"use strict";t.d(n,{Vp:function(){return f}});var r=t(56877),a=t(55227),i=t(35059),o=t(54662),s=t(33179),l=t(66384),c=t(85893),[u,d]=(0,a.k)({name:"TagStylesContext",errorMessage:"useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tag />\" "}),f=(0,i.G)(((e,n)=>{const t=(0,o.jC)("Tag",e),r=(0,s.Lr)(e),a={display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%",...t.container};return(0,c.jsx)(u,{value:t,children:(0,c.jsx)(l.m.span,{ref:n,...r,__css:a})})}));f.displayName="Tag",(0,i.G)(((e,n)=>{const t=d();return(0,c.jsx)(l.m.span,{ref:n,noOfLines:1,...e,__css:t.label})})).displayName="TagLabel",(0,i.G)(((e,n)=>(0,c.jsx)(r.J,{ref:n,verticalAlign:"top",marginEnd:"0.5rem",...e}))).displayName="TagLeftIcon",(0,i.G)(((e,n)=>(0,c.jsx)(r.J,{ref:n,verticalAlign:"top",marginStart:"0.5rem",...e}))).displayName="TagRightIcon";var p=e=>(0,c.jsx)(r.J,{verticalAlign:"inherit",viewBox:"0 0 512 512",...e,children:(0,c.jsx)("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})});p.displayName="TagCloseIcon",(0,i.G)(((e,n)=>{const{isDisabled:t,children:r,...a}=e,i={display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...d().closeButton};return(0,c.jsx)(l.m.button,{ref:n,"aria-label":"close",...a,type:"button",disabled:t,__css:i,children:r||(0,c.jsx)(p,{})})})).displayName="TagCloseButton"},70603:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,{Z:function(){return a}})}},function(e){e.O(0,[71,774,888,179],(function(){return n=87141,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
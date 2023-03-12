(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{99116:function(e,n,t){"use strict";t.d(n,{II:function(){return q}});var r=t(97375),a=t(42846),i=t(15031),l=t(26450),o=t(67294),u=t(10894);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}var d=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],p=(0,a.eC)("FormControl"),m=p[0],v=p[1],h=v,y=(0,l.kr)({strict:!1,name:"FormControlContext"}),g=y[0],b=y[1];var _=(0,a.Gp)((function(e,n){var t=(0,a.jC)("Form",e),u=function(e){var n=e.id,t=e.isRequired,a=e.isInvalid,u=e.isDisabled,f=e.isReadOnly,p=c(e,d),m=(0,r.Me)(),v=n||"field-"+m,h=v+"-label",y=v+"-feedback",g=v+"-helptext",b=o.useState(!1),_=b[0],O=b[1],E=o.useState(!1),I=E[0],N=E[1],x=(0,r.kt)(),k=x[0],w=x[1],T=o.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),s({id:g},e,{ref:(0,l.lq)(n,(function(e){e&&N(!0)}))})}),[g]),C=o.useCallback((function(e,n){var t,r;return void 0===e&&(e={}),void 0===n&&(n=null),s({},e,{ref:n,"data-focus":(0,i.PB)(k),"data-disabled":(0,i.PB)(u),"data-invalid":(0,i.PB)(a),"data-readonly":(0,i.PB)(f),id:null!=(t=e.id)?t:h,htmlFor:null!=(r=e.htmlFor)?r:v})}),[v,u,k,a,f,h]),R=o.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),s({id:y},e,{ref:(0,l.lq)(n,(function(e){e&&O(!0)})),"aria-live":"polite"})}),[y]),j=o.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),s({},e,p,{ref:n,role:"group"})}),[p]),P=o.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),s({},e,{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!t,isInvalid:!!a,isReadOnly:!!f,isDisabled:!!u,isFocused:!!k,onFocus:w.on,onBlur:w.off,hasFeedbackText:_,setHasFeedbackText:O,hasHelpText:I,setHasHelpText:N,id:v,labelId:h,feedbackId:y,helpTextId:g,htmlProps:p,getHelpTextProps:T,getErrorMessageProps:R,getRootProps:j,getLabelProps:C,getRequiredIndicatorProps:P}}((0,a.Lr)(e)),p=u.getRootProps;u.htmlProps;var v=c(u,f),h=(0,i.cx)("chakra-form-control",e.className);return o.createElement(g,{value:v},o.createElement(m,{value:t},o.createElement(a.m$.div,s({},p({},n),{className:h,__css:t.container}))))}));i.Ts&&(_.displayName="FormControl");var O=(0,a.Gp)((function(e,n){var t=b(),r=v(),l=(0,i.cx)("chakra-form__helper-text",e.className);return o.createElement(a.m$.div,s({},null==t?void 0:t.getHelpTextProps(e,n),{__css:r.helperText,className:l}))}));i.Ts&&(O.displayName="FormHelperText");var E=["isDisabled","isInvalid","isReadOnly","isRequired"],I=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function N(e){var n=function(e){var n,t,r,a=b(),l=e.id,o=e.disabled,u=e.readOnly,d=e.required,f=e.isRequired,p=e.isInvalid,m=e.isReadOnly,v=e.isDisabled,h=e.onFocus,y=e.onBlur,g=c(e,I),_=e["aria-describedby"]?[e["aria-describedby"]]:[];null!=a&&a.hasFeedbackText&&null!=a&&a.isInvalid&&_.push(a.feedbackId);null!=a&&a.hasHelpText&&_.push(a.helpTextId);return s({},g,{"aria-describedby":_.join(" ")||void 0,id:null!=l?l:null==a?void 0:a.id,isDisabled:null!=(n=null!=o?o:v)?n:null==a?void 0:a.isDisabled,isReadOnly:null!=(t=null!=u?u:m)?t:null==a?void 0:a.isReadOnly,isRequired:null!=(r=null!=d?d:f)?r:null==a?void 0:a.isRequired,isInvalid:null!=p?p:null==a?void 0:a.isInvalid,onFocus:(0,i.v0)(null==a?void 0:a.onFocus,h),onBlur:(0,i.v0)(null==a?void 0:a.onBlur,y)})}(e),t=n.isDisabled,r=n.isInvalid,a=n.isReadOnly,l=n.isRequired;return s({},c(n,E),{disabled:t,readOnly:a,required:l,"aria-invalid":(0,i.Qm)(r),"aria-required":(0,i.Qm)(l),"aria-readonly":(0,i.Qm)(a)})}var x=(0,a.eC)("FormError"),k=x[0],w=x[1],T=(0,a.Gp)((function(e,n){var t=(0,a.jC)("FormError",e),r=(0,a.Lr)(e),l=b();return null!=l&&l.isInvalid?o.createElement(k,{value:t},o.createElement(a.m$.div,s({},null==l?void 0:l.getErrorMessageProps(r,n),{className:(0,i.cx)("chakra-form__error-message",e.className),__css:s({display:"flex",alignItems:"center"},t.text)}))):null}));i.Ts&&(T.displayName="FormErrorMessage");var C=(0,a.Gp)((function(e,n){var t=w(),r=b();if(null==r||!r.isInvalid)return null;var a=(0,i.cx)("chakra-form__error-icon",e.className);return o.createElement(u.ZP,s({ref:n,"aria-hidden":!0},e,{__css:t.icon,className:a}),o.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));i.Ts&&(C.displayName="FormErrorIcon");var R=["className","children","requiredIndicator","optionalIndicator"],j=(0,a.Gp)((function(e,n){var t,r=(0,a.mq)("FormLabel",e),l=(0,a.Lr)(e);l.className;var u=l.children,d=l.requiredIndicator,f=void 0===d?o.createElement(P,null):d,p=l.optionalIndicator,m=void 0===p?null:p,v=c(l,R),h=b(),y=null!=(t=null==h?void 0:h.getLabelProps(v,n))?t:s({ref:n},v);return o.createElement(a.m$.label,s({},y,{className:(0,i.cx)("chakra-form__label",l.className),__css:s({display:"block",textAlign:"start"},r)}),u,null!=h&&h.isRequired?f:m)}));i.Ts&&(j.displayName="FormLabel");var P=(0,a.Gp)((function(e,n){var t=b(),r=h();if(null==t||!t.isRequired)return null;var l=(0,i.cx)("chakra-form__required-indicator",e.className);return o.createElement(a.m$.span,s({},null==t?void 0:t.getRequiredIndicatorProps(e,n),{__css:r.requiredIndicator,className:l}))}));function S(){return S=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},S.apply(this,arguments)}function L(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}i.Ts&&(P.displayName="RequiredIndicator");var A=["htmlSize"],q=(0,a.Gp)((function(e,n){var t=e.htmlSize,r=L(e,A),l=(0,a.jC)("Input",r),u=N((0,a.Lr)(r)),s=(0,i.cx)("chakra-input",e.className);return o.createElement(a.m$.input,S({size:t},u,{__css:l.field,ref:n,className:s}))}));i.Ts&&(q.displayName="Input"),q.id="Input";var F=["children","className"],G=(0,a.eC)("InputGroup"),D=G[0],M=G[1],z=(0,a.Gp)((function(e,n){var t=(0,a.jC)("Input",e),r=(0,a.Lr)(e),u=r.children,s=r.className,c=L(r,F),d=(0,i.cx)("chakra-input__group",s),f={},p=(0,l.WR)(u),m=t.field;p.forEach((function(e){if(t){var n,r;if(m&&"InputLeftElement"===e.type.id)f.paddingStart=null!=(n=m.height)?n:m.h;if(m&&"InputRightElement"===e.type.id)f.paddingEnd=null!=(r=m.height)?r:m.h;"InputRightAddon"===e.type.id&&(f.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(f.borderStartRadius=0)}}));var v=p.map((function(n){var t,r,a=(0,i.YU)({size:(null==(t=n.props)?void 0:t.size)||e.size,variant:(null==(r=n.props)?void 0:r.variant)||e.variant});return"Input"!==n.type.id?o.cloneElement(n,a):o.cloneElement(n,Object.assign(a,f,n.props))}));return o.createElement(a.m$.div,S({className:d,ref:n,__css:{width:"100%",display:"flex",position:"relative"}},c),o.createElement(D,{value:t},v))}));i.Ts&&(z.displayName="InputGroup");var Z=["placement"],$={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},B=(0,a.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),H=(0,a.Gp)((function(e,n){var t,r=e.placement,a=void 0===r?"left":r,i=L(e,Z),l=null!=(t=$[a])?t:{},u=M();return o.createElement(B,S({ref:n},i,{__css:S({},u.addon,l)}))}));i.Ts&&(H.displayName="InputAddon");var V=(0,a.Gp)((function(e,n){return o.createElement(H,S({ref:n,placement:"left"},e,{className:(0,i.cx)("chakra-input__left-addon",e.className)}))}));i.Ts&&(V.displayName="InputLeftAddon"),V.id="InputLeftAddon";var J=(0,a.Gp)((function(e,n){return o.createElement(H,S({ref:n,placement:"right"},e,{className:(0,i.cx)("chakra-input__right-addon",e.className)}))}));i.Ts&&(J.displayName="InputRightAddon"),J.id="InputRightAddon";var U=["placement"],Q=["className"],Y=["className"],W=(0,a.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),X=(0,a.Gp)((function(e,n){var t,r,a,i=e.placement,l=void 0===i?"left":i,u=L(e,U),s=M(),c=s.field,d=S(((a={})["left"===l?"insetStart":"insetEnd"]="0",a.width=null!=(t=null==c?void 0:c.height)?t:null==c?void 0:c.h,a.height=null!=(r=null==c?void 0:c.height)?r:null==c?void 0:c.h,a.fontSize=null==c?void 0:c.fontSize,a),s.element);return o.createElement(W,S({ref:n,__css:d},u))}));X.id="InputElement",i.Ts&&(X.displayName="InputElement");var K=(0,a.Gp)((function(e,n){var t=e.className,r=L(e,Q),a=(0,i.cx)("chakra-input__left-element",t);return o.createElement(X,S({ref:n,placement:"left",className:a},r))}));K.id="InputLeftElement",i.Ts&&(K.displayName="InputLeftElement");var ee=(0,a.Gp)((function(e,n){var t=e.className,r=L(e,Y),a=(0,i.cx)("chakra-input__right-element",t);return o.createElement(X,S({ref:n,placement:"right",className:a},r))}));ee.id="InputRightElement",i.Ts&&(ee.displayName="InputRightElement")},92684:function(e,n,t){"use strict";t.d(n,{ac:function(){return o}});t(42846);var r=t(15031),a=t(67294),i=t(85393);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function o(e,n){void 0===n&&(n={});var t=n,o=t.ssr,u=void 0===o||o,s=t.fallback,c=(0,i.O)(),d=Array.isArray(e)?e:[e],f=Array.isArray(s)?s:[s];f=f.filter((function(e){return null!=e}));var p=(0,a.useState)((function(){return d.map((function(e,n){return{media:e,matches:u?!!f[n]:c.window.matchMedia(e).matches}}))})),m=p[0],v=p[1];return(0,a.useEffect)((function(){v(d.map((function(e){return{media:e,matches:c.window.matchMedia(e).matches}})));var e=d.map((function(e){return c.window.matchMedia(e)})),n=function(e){v((function(n){return n.slice().map((function(n){return n.media===e.media?l({},n,{matches:e.matches}):n}))}))};return e.forEach((function(e){(0,r.mf)(e.addListener)?e.addListener(n):e.addEventListener("change",n)})),function(){e.forEach((function(e){(0,r.mf)(e.removeListener)?e.removeListener(n):e.removeEventListener("change",n)}))}}),[c.window]),m.map((function(e){return e.matches}))}r.Ts;r.Ts},96356:function(e,n,t){"use strict";t.d(n,{Vp:function(){return d}});var r=t(10894),a=t(42846),i=t(15031),l=t(67294);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}var u=(0,a.eC)("Tag"),s=u[0],c=u[1],d=(0,a.Gp)((function(e,n){var t=(0,a.jC)("Tag",e),r=(0,a.Lr)(e),i=o({display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%"},t.container);return l.createElement(s,{value:t},l.createElement(a.m$.span,o({ref:n},r,{__css:i})))}));i.Ts&&(d.displayName="Tag");var f=(0,a.Gp)((function(e,n){var t=c();return l.createElement(a.m$.span,o({ref:n,noOfLines:1},e,{__css:t.label}))}));i.Ts&&(f.displayName="TagLabel");var p=(0,a.Gp)((function(e,n){return l.createElement(r.JO,o({ref:n,verticalAlign:"top",marginEnd:"0.5rem"},e))}));i.Ts&&(p.displayName="TagLeftIcon");var m=(0,a.Gp)((function(e,n){return l.createElement(r.JO,o({ref:n,verticalAlign:"top",marginStart:"0.5rem"},e))}));i.Ts&&(m.displayName="TagRightIcon");var v=function(e){return l.createElement(r.JO,o({verticalAlign:"inherit",viewBox:"0 0 512 512"},e),l.createElement("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}))};i.Ts&&(v.displayName="TagCloseIcon");i.Ts},90638:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(96856).Z;Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=l.default,i={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?i.loader=function(){return e}:"function"===typeof e?i.loader=e:"object"===typeof e&&(i=a({},i,e));!1;(i=a({},i,n)).loadableGenerated&&delete(i=a({},i,i.loadableGenerated)).loadableGenerated;if("boolean"===typeof i.ssr&&!i.suspense){if(!i.ssr)return delete i.ssr,o(t,i);delete i.ssr}return t(i)},n.noSSR=o;var a=t(6495).Z,i=t(92648).Z,l=(i(t(67294)),i(t(14302)));function o(e,n){return delete n.webpack,delete n.modules,e(n)}("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&"undefined"===typeof n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),e.exports=n.default)},16319:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.LoadableContext=void 0;var r=(0,t(92648).Z)(t(67294)).default.createContext(null);n.LoadableContext=r},14302:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(79658).Z,a=t(7222).Z;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t(6495).Z,l=(0,t(92648).Z)(t(67294)),o=t(16319),u=t(67294).useSyncExternalStore,s=[],c=[],d=!1;function f(e){var n=e(),t={loading:!0,loaded:null,error:null};return t.promise=n.then((function(e){return t.loading=!1,t.loaded=e,e})).catch((function(e){throw t.loading=!1,t.error=e,e})),t}var p=function(){function e(n,t){r(this,e),this._loadFn=n,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var n=this._res,t=this._opts;n.loading&&("number"===typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),t.delay)),"number"===typeof t.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),t.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(n){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var n=this;return this._callbacks.add(e),function(){n._callbacks.delete(e)}}}]),e}();function m(e){return function(e,n){var t=function(){if(!s){var n=new p(e,a);s={getCurrentValue:n.getCurrentValue.bind(n),subscribe:n.subscribe.bind(n),retry:n.retry.bind(n),promise:n.promise.bind(n)}}return s.promise()},r=function(){t();var e=l.default.useContext(o.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach((function(n){e(n)}))},a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},n);a.suspense&&(a.lazy=l.default.lazy(a.loader));var s=null;if(!d){var f=a.webpack?a.webpack():a.modules;f&&c.push((function(e){var n=!0,r=!1,a=void 0;try{for(var i,l=f[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){var o=i.value;if(-1!==e.indexOf(o))return t()}}catch(u){r=!0,a=u}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}}))}var m=a.suspense?function(e,n){return r(),l.default.createElement(a.lazy,i({},e,{ref:n}))}:function(e,n){r();var t=u(s.subscribe,s.getCurrentValue,s.getCurrentValue);return l.default.useImperativeHandle(n,(function(){return{retry:s.retry}}),[]),l.default.useMemo((function(){return t.loading||t.error?l.default.createElement(a.loading,{isLoading:t.loading,pastDelay:t.pastDelay,timedOut:t.timedOut,error:t.error,retry:s.retry}):t.loaded?l.default.createElement((n=t.loaded)&&n.__esModule?n.default:n,e):null;var n}),[e,t])};return m.preload=function(){return t()},m.displayName="LoadableComponent",l.default.forwardRef(m)}(f,e)}function v(e,n){for(var t=[];e.length;){var r=e.pop();t.push(r(n))}return Promise.all(t).then((function(){if(e.length)return v(e,n)}))}m.preloadAll=function(){return new Promise((function(e,n){v(s).then(e,n)}))},m.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(n){var t=function(){return d=!0,n()};v(c,e).then(t,t)}))},window.__NEXT_PRELOADREADY=m.preloadReady;var h=m;n.default=h},5152:function(e,n,t){e.exports=t(90638)},4298:function(e,n,t){e.exports=t(20699)},77058:function(e,n,t){"use strict";t.d(n,{$:function(){return b}});var r=t(83878);var a=t(40181),i=t(25267);function l(e,n){return(0,r.Z)(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],l=!0,o=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);l=!0);}catch(u){o=!0,a=u}finally{try{l||null==t.return||t.return()}finally{if(o)throw a}}return i}}(e,n)||(0,a.Z)(e,n)||(0,i.Z)()}var o=t(4942),u=t(67294),s=t(57715);function c(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var d={};function f(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&d[n[0]]||("string"===typeof n[0]&&(d[n[0]]=new Date),c.apply(void 0,n))}function p(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function m(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],a=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var l=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!l(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!(n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages))||!(!l(r,e)||a&&!l(i,e))))}function v(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return f("i18n.languages were undefined or empty",n.languages),!0;var r=void 0!==n.options.ignoreJSONStructure;return r?n.hasLoadedNamespace(e,{precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):m(e,n,t)}function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=function(e,n){var t=(0,u.useRef)();return(0,u.useEffect)((function(){t.current=n?t.current:e}),[e,n]),t.current};function b(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,u.useContext)(s.OO)||{},a=r.i18n,i=r.defaultNS,o=t||a||(0,s.nI)();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new s.zv),!o){f("You will need to pass in an i18next instance by using initReactI18next");var c=function(e){return Array.isArray(e)?e[e.length-1]:e},d=[c,{},!1];return d.t=c,d.i18n={},d.ready=!1,d}o.options.react&&void 0!==o.options.react.wait&&f("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var m=y(y(y({},(0,s.JP)()),o.options.react),n),h=m.useSuspense,b=m.keyPrefix,_=e||i||o.options&&o.options.defaultNS;_="string"===typeof _?[_]:_||["translation"],o.reportNamespaces.addUsedNamespaces&&o.reportNamespaces.addUsedNamespaces(_);var O=(o.isInitialized||o.initializedStoreOnce)&&_.every((function(e){return v(e,o,m)}));function E(){return o.getFixedT(null,"fallback"===m.nsMode?_:_[0],b)}var I=(0,u.useState)(E),N=l(I,2),x=N[0],k=N[1],w=_.join(),T=g(w),C=(0,u.useRef)(!0);(0,u.useEffect)((function(){var e=m.bindI18n,n=m.bindI18nStore;function t(){C.current&&k(E)}return C.current=!0,O||h||p(o,_,(function(){C.current&&k(E)})),O&&T&&T!==w&&C.current&&k(E),e&&o&&o.on(e,t),n&&o&&o.store.on(n,t),function(){C.current=!1,e&&o&&e.split(" ").forEach((function(e){return o.off(e,t)})),n&&o&&n.split(" ").forEach((function(e){return o.store.off(e,t)}))}}),[o,w]);var R=(0,u.useRef)(!0);(0,u.useEffect)((function(){C.current&&!R.current&&k(E),R.current=!1}),[o,b]);var j=[x,o,O];if(j.t=x,j.i18n=o,j.ready=O,O)return j;if(!O&&!h)return j;throw new Promise((function(e){p(o,_,(function(){e()}))}))}},70603:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,{Z:function(){return a}})}}]);
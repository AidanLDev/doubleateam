(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71],{77233:function(e,t,n){"use strict";var r=n(85893),a=n(9008),o=n.n(a),i=function(e){var t=e.url,n=e.title,r=e.description,a=e.image,o=e.createdAt,i=e.updatedAt;return[{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:r},{name:"twitter:title",content:n},{name:"twitter:description",content:r},{name:"twitter:image:src",content:a},{name:"twitter:card",content:"summary_large_image"},{name:"og:title",content:n},{name:"og:type",content:"website"},{name:"og:url",content:t},{name:"og:image",content:a},{name:"og:description",content:r},{name:"og:site_name",content:"Double A Team"},{name:"og:published_time",content:o||(new Date).toISOString()},{name:"og:modified_time",content:i||(new Date).toISOString()}]};t.Z=function(e){var t=e.title,n=e.description,a=e.image,u=e.url;return(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{itemProp:"name",content:t}),(0,r.jsx)("meta",{itemProp:"description",content:n}),a&&(0,r.jsx)("meta",{itemProp:"image",content:a}),i({url:u,title:t,description:n,image:a}).map((function(e){var t=e.name,n=e.content;return(0,r.jsx)("meta",{name:t,content:n},t)})),(0,r.jsx)("script",{async:!0,crossOrigin:"anonymous",type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@content":"http://schema.org","@type":"Article",name:t,about:n,url:u})}})]})}},90638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(96856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=i.default,o=(null==t?void 0:t.suspense)?{}:{loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?o.loader=function(){return e}:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=a({},o,e));!1;(o=a({},o,t)).suspense&&(delete o.ssr,delete o.loading);o.loadableGenerated&&delete(o=a({},o,o.loadableGenerated)).loadableGenerated;if("boolean"===typeof o.ssr&&!o.suspense){if(!o.ssr)return delete o.ssr,u(n,o);delete o.ssr}return n(o)},t.noSSR=u;var a=n(6495).Z,o=n(92648).Z,i=(o(n(67294)),o(n(14302)));function u(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},16319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(92648).Z)(n(67294)).default.createContext(null);t.LoadableContext=r},14302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(79658).Z,a=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(6495).Z,i=(0,n(92648).Z)(n(67294)),u=n(16319),l=n(67294).useSyncExternalStore,s=[],d=[],c=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var m=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function p(e){return function(e,t){var n=function(){if(!s){var t=new m(e,a);s={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return s.promise()},r=function(){n();var e=i.default.useContext(u.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach((function(t){e(t)}))},a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);a.suspense&&(a.lazy=i.default.lazy(a.loader));var s=null;if(!c){var f=a.webpack?a.webpack():a.modules;f&&d.push((function(e){var t=!0,r=!1,a=void 0;try{for(var o,i=f[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var u=o.value;if(-1!==e.indexOf(u))return n()}}catch(l){r=!0,a=l}finally{try{t||null==i.return||i.return()}finally{if(r)throw a}}}))}var p=a.suspense?function(e,t){return r(),i.default.createElement(a.lazy,o({},e,{ref:t}))}:function(e,t){r();var n=l(s.subscribe,s.getCurrentValue,s.getCurrentValue);return i.default.useImperativeHandle(t,(function(){return{retry:s.retry}}),[]),i.default.useMemo((function(){return n.loading||n.error?i.default.createElement(a.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:s.retry}):n.loaded?i.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,n])};return p.preload=function(){return n()},p.displayName="LoadableComponent",i.default.forwardRef(p)}(f,e)}function _(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return _(e,t)}))}p.preloadAll=function(){return new Promise((function(e,t){_(s).then(e,t)}))},p.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return c=!0,t()};_(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=p.preloadReady;var y=p;t.default=y},5152:function(e,t,n){e.exports=n(90638)},9008:function(e,t,n){e.exports=n(5443)},23100:function(e,t,n){"use strict";n.d(t,{xu:function(){return i}});var r=n(66384),a=n(35059),o=n(85893),i=(0,r.m)("div");i.displayName="Box";var u=(0,a.G)((function(e,t){const{size:n,centerContent:r=!0,...a}=e,u=r?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,o.jsx)(i,{ref:t,boxSize:n,__css:{...u,flexShrink:0,flexGrow:0},...a})}));u.displayName="Square",(0,a.G)((function(e,t){const{size:n,...r}=e;return(0,o.jsx)(u,{size:n,ref:t,borderRadius:"9999px",...r})})).displayName="Circle"}}]);
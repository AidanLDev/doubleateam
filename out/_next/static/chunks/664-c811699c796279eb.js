(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{71210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},48418:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(94941).Z;o(45753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(92648).Z,u=o(17273).Z,a=r(o(67294)),l=o(76273),f=o(22725),c=o(63462),i=o(21018),s=o(57190),d=o(71210),p=o(98684),v="undefined"!==typeof a.default.useTransition,y={};function h(e,t,o,n){if(e&&l.isLocalURL(t)){e.prefetch(t,o,n).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;y[t+"%"+o+(r?"%"+r:"")]=!0}}var b=a.default.forwardRef((function(e,t){var o,r=e.href,b=e.as,_=e.children,g=e.prefetch,C=e.passHref,M=e.replace,R=e.soft,L=e.shallow,m=e.scroll,x=e.locale,j=e.onClick,E=e.onMouseEnter,O=e.onTouchStart,k=e.legacyBehavior,P=void 0===k?!0!==Boolean(!1):k,w=u(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=_,!P||"string"!==typeof o&&"number"!==typeof o||(o=a.default.createElement("a",null,o));var T=!1!==g,I=n(v?a.default.useTransition():[],2)[1],S=a.default.useContext(c.RouterContext),U=a.default.useContext(i.AppRouterContext);U&&(S=U);var Z,A=a.default.useMemo((function(){var e=n(l.resolveHref(S,r,!0),2),t=e[0],o=e[1];return{href:t,as:b?l.resolveHref(S,b):o||t}}),[S,r,b]),B=A.href,D=A.as,H=a.default.useRef(B),K=a.default.useRef(D);P&&(Z=a.default.Children.only(o));var N=P?Z&&"object"===typeof Z&&Z.ref:t,G=n(s.useIntersection({rootMargin:"200px"}),3),q=G[0],z=G[1],F=G[2],J=a.default.useCallback((function(e){K.current===D&&H.current===B||(F(),K.current=D,H.current=B),q(e),N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[D,N,B,F,q]);a.default.useEffect((function(){var e=z&&T&&l.isLocalURL(B),t="undefined"!==typeof x?x:S&&S.locale,o=y[B+"%"+D+(t?"%"+t:"")];e&&!o&&h(S,B,D,{locale:t})}),[D,B,z,x,T,S]);var Q={ref:J,onClick:function(e){P||"function"!==typeof j||j(e),P&&Z.props&&"function"===typeof Z.props.onClick&&Z.props.onClick(e),e.defaultPrevented||function(e,t,o,n,r,u,a,f,c,i){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(o)){e.preventDefault();var s=function(){"softPush"in t&&"softReplace"in t?t[u?r?"softReplace":"softPush":r?"replace":"push"](o):t[r?"replace":"push"](o,n,{shallow:a,locale:c,scroll:f})};i?i(s):s()}}(e,S,B,D,M,R,L,m,x,U?I:void 0)},onMouseEnter:function(e){P||"function"!==typeof E||E(e),P&&Z.props&&"function"===typeof Z.props.onMouseEnter&&Z.props.onMouseEnter(e),l.isLocalURL(B)&&h(S,B,D,{priority:!0})},onTouchStart:function(e){P||"function"!==typeof O||O(e),P&&Z.props&&"function"===typeof Z.props.onTouchStart&&Z.props.onTouchStart(e),l.isLocalURL(B)&&h(S,B,D,{priority:!0})}};if(!P||C||"a"===Z.type&&!("href"in Z.props)){var V="undefined"!==typeof x?x:S&&S.locale,W=S&&S.isLocaleDomain&&d.getDomainLocale(D,V,S.locales,S.domainLocales);Q.href=W||p.addBasePath(f.addLocale(D,V,S&&S.defaultLocale))}return P?a.default.cloneElement(Z,Q):a.default.createElement("a",Object.assign({},w,Q),o)}));t.default=b,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},57190:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(94941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,o=e.rootMargin,c=e.disabled||!a,i=r.useRef(),s=n(r.useState(!1),2),d=s[0],p=s[1],v=n(r.useState(null),2),y=v[0],h=v[1];r.useEffect((function(){if(a){if(i.current&&(i.current(),i.current=void 0),c||d)return;return y&&y.tagName&&(i.current=function(e,t,o){var n=function(e){var t,o={root:e.root||null,margin:e.rootMargin||""},n=f.find((function(e){return e.root===o.root&&e.margin===o.margin}));if(n&&(t=l.get(n)))return t;var r=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)}))}),e);return t={id:o,observer:u,elements:r},f.push(o),l.set(o,t),t}(o),r=n.id,u=n.observer,a=n.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),l.delete(r);var t=f.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&f.splice(t,1)}}}(y,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:o})),function(){null==i.current||i.current(),i.current=void 0}}if(!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[y,c,o,t,d]);var b=r.useCallback((function(){p(!1)}),[]);return[h,d,b]};var r=o(67294),u=o(9311),a="function"===typeof IntersectionObserver;var l=new Map,f=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},21018:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,o(92648).Z)(o(67294)),r=n.default.createContext(null);t.AppRouterContext=r;var u=n.default.createContext(null);t.LayoutRouterContext=u;var a=n.default.createContext(null);t.GlobalLayoutRouterContext=a},41664:function(e,t,o){e.exports=o(48418)}}]);
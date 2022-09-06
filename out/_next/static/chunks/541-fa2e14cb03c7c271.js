"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[541],{86541:function(e,t,r){r.d(t,{u:function(){return Ye}});var n=r(26450);function o(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function i(e){return e instanceof o(e).Element||e instanceof Element}function a(e){return e instanceof o(e).HTMLElement||e instanceof HTMLElement}function s(e){return"undefined"!==typeof ShadowRoot&&(e instanceof o(e).ShadowRoot||e instanceof ShadowRoot)}var f=Math.max,l=Math.min,c=Math.round;function p(e,t){void 0===t&&(t=!1);var r=e.getBoundingClientRect(),n=1,o=1;if(a(e)&&t){var i=e.offsetHeight,s=e.offsetWidth;s>0&&(n=c(r.width)/s||1),i>0&&(o=c(r.height)/i||1)}return{width:r.width/n,height:r.height/o,top:r.top/o,right:r.right/n,bottom:r.bottom/o,left:r.left/n,x:r.left/n,y:r.top/o}}function u(e){var t=o(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function d(e){return e?(e.nodeName||"").toLowerCase():null}function v(e){return((i(e)?e.ownerDocument:e.document)||window.document).documentElement}function m(e){return p(v(e)).left+u(e).scrollLeft}function h(e){return o(e).getComputedStyle(e)}function g(e){var t=h(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function b(e,t,r){void 0===r&&(r=!1);var n=a(t),i=a(t)&&function(e){var t=e.getBoundingClientRect(),r=c(t.width)/e.offsetWidth||1,n=c(t.height)/e.offsetHeight||1;return 1!==r||1!==n}(t),s=v(t),f=p(e,i),l={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(n||!n&&!r)&&(("body"!==d(t)||g(s))&&(l=function(e){return e!==o(e)&&a(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:u(e);var t}(t)),a(t)?((h=p(t,!0)).x+=t.clientLeft,h.y+=t.clientTop):s&&(h.x=m(s))),{x:f.left+l.scrollLeft-h.x,y:f.top+l.scrollTop-h.y,width:f.width,height:f.height}}function w(e){var t=p(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function y(e){return"html"===d(e)?e:e.assignedSlot||e.parentNode||(s(e)?e.host:null)||v(e)}function x(e){return["html","body","#document"].indexOf(d(e))>=0?e.ownerDocument.body:a(e)&&g(e)?e:x(y(e))}function O(e,t){var r;void 0===t&&(t=[]);var n=x(e),i=n===(null==(r=e.ownerDocument)?void 0:r.body),a=o(n),s=i?[a].concat(a.visualViewport||[],g(n)?n:[]):n,f=t.concat(s);return i?f:f.concat(O(y(s)))}function k(e){return["table","td","th"].indexOf(d(e))>=0}function E(e){return a(e)&&"fixed"!==h(e).position?e.offsetParent:null}function C(e){for(var t=o(e),r=E(e);r&&k(r)&&"static"===h(r).position;)r=E(r);return r&&("html"===d(r)||"body"===d(r)&&"static"===h(r).position)?t:r||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&a(e)&&"fixed"===h(e).position)return null;var r=y(e);for(s(r)&&(r=r.host);a(r)&&["html","body"].indexOf(d(r))<0;){var n=h(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}var P="top",j="bottom",D="right",R="left",A="auto",W=[P,j,D,R],T="start",S="end",M="viewport",z="popper",L=W.reduce((function(e,t){return e.concat([t+"-"+T,t+"-"+S])}),[]),B=[].concat(W,[A]).reduce((function(e,t){return e.concat([t,t+"-"+T,t+"-"+S])}),[]),H=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function q(e){var t=new Map,r=new Set,n=[];function o(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e);n&&o(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||o(e)})),n}function I(e){var t;return function(){return t||(t=new Promise((function(r){Promise.resolve().then((function(){t=void 0,r(e())}))}))),t}}var _={placement:"bottom",modifiers:[],strategy:"absolute"};function N(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function V(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,o=t.defaultOptions,a=void 0===o?_:o;return function(e,t,r){void 0===r&&(r=a);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},_,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],f=!1,l={state:o,setOptions:function(r){var f="function"===typeof r?r(o.options):r;c(),o.options=Object.assign({},a,o.options,f),o.scrollParents={reference:i(e)?O(e):e.contextElement?O(e.contextElement):[],popper:O(t)};var p=function(e){var t=q(e);return H.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}(function(e){var t=e.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,o.options.modifiers)));return o.orderedModifiers=p.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,i=e.effect;if("function"===typeof i){var a=i({state:o,name:t,instance:l,options:n}),f=function(){};s.push(a||f)}})),l.update()},forceUpdate:function(){if(!f){var e=o.elements,t=e.reference,r=e.popper;if(N(t,r)){o.rects={reference:b(t,C(r),"fixed"===o.options.strategy),popper:w(r)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<o.orderedModifiers.length;n++)if(!0!==o.reset){var i=o.orderedModifiers[n],a=i.fn,s=i.options,c=void 0===s?{}:s,p=i.name;"function"===typeof a&&(o=a({state:o,options:c,name:p,instance:l})||o)}else o.reset=!1,n=-1}}},update:I((function(){return new Promise((function(e){l.forceUpdate(),e(o)}))})),destroy:function(){c(),f=!0}};if(!N(e,t))return l;function c(){s.forEach((function(e){return e()})),s=[]}return l.setOptions(r).then((function(e){!f&&r.onFirstUpdate&&r.onFirstUpdate(e)})),l}}var F={passive:!0};function U(e){return e.split("-")[0]}function $(e){return e.split("-")[1]}function X(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Y(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?U(o):null,a=o?$(o):null,s=r.x+r.width/2-n.width/2,f=r.y+r.height/2-n.height/2;switch(i){case P:t={x:s,y:r.y-n.height};break;case j:t={x:s,y:r.y+r.height};break;case D:t={x:r.x+r.width,y:f};break;case R:t={x:r.x-n.width,y:f};break;default:t={x:r.x,y:r.y}}var l=i?X(i):null;if(null!=l){var c="y"===l?"height":"width";switch(a){case T:t[l]=t[l]-(r[c]/2-n[c]/2);break;case S:t[l]=t[l]+(r[c]/2-n[c]/2)}}return t}var G={top:"auto",right:"auto",bottom:"auto",left:"auto"};function K(e){var t,r=e.popper,n=e.popperRect,i=e.placement,a=e.variation,s=e.offsets,f=e.position,l=e.gpuAcceleration,p=e.adaptive,u=e.roundOffsets,d=e.isFixed,m=s.x,g=void 0===m?0:m,b=s.y,w=void 0===b?0:b,y="function"===typeof u?u({x:g,y:w}):{x:g,y:w};g=y.x,w=y.y;var x=s.hasOwnProperty("x"),O=s.hasOwnProperty("y"),k=R,E=P,A=window;if(p){var W=C(r),T="clientHeight",M="clientWidth";if(W===o(r)&&"static"!==h(W=v(r)).position&&"absolute"===f&&(T="scrollHeight",M="scrollWidth"),i===P||(i===R||i===D)&&a===S)E=j,w-=(d&&W===A&&A.visualViewport?A.visualViewport.height:W[T])-n.height,w*=l?1:-1;if(i===R||(i===P||i===j)&&a===S)k=D,g-=(d&&W===A&&A.visualViewport?A.visualViewport.width:W[M])-n.width,g*=l?1:-1}var z,L=Object.assign({position:f},p&&G),B=!0===u?function(e){var t=e.x,r=e.y,n=window.devicePixelRatio||1;return{x:c(t*n)/n||0,y:c(r*n)/n||0}}({x:g,y:w}):{x:g,y:w};return g=B.x,w=B.y,l?Object.assign({},L,((z={})[E]=O?"0":"",z[k]=x?"0":"",z.transform=(A.devicePixelRatio||1)<=1?"translate("+g+"px, "+w+"px)":"translate3d("+g+"px, "+w+"px, 0)",z)):Object.assign({},L,((t={})[E]=O?w+"px":"",t[k]=x?g+"px":"",t.transform="",t))}var J={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,a=B.reduce((function(e,r){return e[r]=function(e,t,r){var n=U(e),o=[R,P].indexOf(n)>=0?-1:1,i="function"===typeof r?r(Object.assign({},t,{placement:e})):r,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[R,D].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}(r,t.rects,i),e}),{}),s=a[t.placement],f=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=a}},Q={left:"right",right:"left",bottom:"top",top:"bottom"};function Z(e){return e.replace(/left|right|bottom|top/g,(function(e){return Q[e]}))}var ee={start:"end",end:"start"};function te(e){return e.replace(/start|end/g,(function(e){return ee[e]}))}function re(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&s(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function ne(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function oe(e,t){return t===M?ne(function(e){var t=o(e),r=v(e),n=t.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;return n&&(i=n.width,a=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=n.offsetLeft,f=n.offsetTop)),{width:i,height:a,x:s+m(e),y:f}}(e)):i(t)?function(e){var t=p(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ne(function(e){var t,r=v(e),n=u(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=f(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=f(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+m(e),l=-n.scrollTop;return"rtl"===h(o||r).direction&&(s+=f(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:l}}(v(e)))}function ie(e,t,r){var n="clippingParents"===t?function(e){var t=O(y(e)),r=["absolute","fixed"].indexOf(h(e).position)>=0&&a(e)?C(e):e;return i(r)?t.filter((function(e){return i(e)&&re(e,r)&&"body"!==d(e)})):[]}(e):[].concat(t),o=[].concat(n,[r]),s=o[0],c=o.reduce((function(t,r){var n=oe(e,r);return t.top=f(n.top,t.top),t.right=l(n.right,t.right),t.bottom=l(n.bottom,t.bottom),t.left=f(n.left,t.left),t}),oe(e,s));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}function ae(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function se(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}function fe(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=void 0===n?e.placement:n,a=r.boundary,s=void 0===a?"clippingParents":a,f=r.rootBoundary,l=void 0===f?M:f,c=r.elementContext,u=void 0===c?z:c,d=r.altBoundary,m=void 0!==d&&d,h=r.padding,g=void 0===h?0:h,b=ae("number"!==typeof g?g:se(g,W)),w=u===z?"reference":z,y=e.rects.popper,x=e.elements[m?w:u],O=ie(i(x)?x:x.contextElement||v(e.elements.popper),s,l),k=p(e.elements.reference),E=Y({reference:k,element:y,strategy:"absolute",placement:o}),C=ne(Object.assign({},y,E)),R=u===z?C:k,A={top:O.top-R.top+b.top,bottom:R.bottom-O.bottom+b.bottom,left:O.left-R.left+b.left,right:R.right-O.right+b.right},T=e.modifiersData.offset;if(u===z&&T){var S=T[o];Object.keys(A).forEach((function(e){var t=[D,j].indexOf(e)>=0?1:-1,r=[P,j].indexOf(e)>=0?"y":"x";A[e]+=S[r]*t}))}return A}function le(e,t,r){return f(e,l(t,r))}var ce={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0!==a&&a,c=r.boundary,p=r.rootBoundary,u=r.altBoundary,d=r.padding,v=r.tether,m=void 0===v||v,h=r.tetherOffset,g=void 0===h?0:h,b=fe(t,{boundary:c,rootBoundary:p,padding:d,altBoundary:u}),y=U(t.placement),x=$(t.placement),O=!x,k=X(y),E="x"===k?"y":"x",A=t.modifiersData.popperOffsets,W=t.rects.reference,S=t.rects.popper,M="function"===typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,z="number"===typeof M?{mainAxis:M,altAxis:M}:Object.assign({mainAxis:0,altAxis:0},M),L=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,B={x:0,y:0};if(A){if(i){var H,q="y"===k?P:R,I="y"===k?j:D,_="y"===k?"height":"width",N=A[k],V=N+b[q],F=N-b[I],Y=m?-S[_]/2:0,G=x===T?W[_]:S[_],K=x===T?-S[_]:-W[_],J=t.elements.arrow,Q=m&&J?w(J):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=Z[q],te=Z[I],re=le(0,W[_],Q[_]),ne=O?W[_]/2-Y-re-ee-z.mainAxis:G-re-ee-z.mainAxis,oe=O?-W[_]/2+Y+re+te+z.mainAxis:K+re+te+z.mainAxis,ie=t.elements.arrow&&C(t.elements.arrow),ae=ie?"y"===k?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(H=null==L?void 0:L[k])?H:0,ce=N+oe-se,pe=le(m?l(V,N+ne-se-ae):V,N,m?f(F,ce):F);A[k]=pe,B[k]=pe-N}if(s){var ue,de="x"===k?P:R,ve="x"===k?j:D,me=A[E],he="y"===E?"height":"width",ge=me+b[de],be=me-b[ve],we=-1!==[P,R].indexOf(y),ye=null!=(ue=null==L?void 0:L[E])?ue:0,xe=we?ge:me-W[he]-S[he]-ye+z.altAxis,Oe=we?me+W[he]+S[he]-ye-z.altAxis:be,ke=m&&we?function(e,t,r){var n=le(e,t,r);return n>r?r:n}(xe,me,Oe):le(m?xe:ge,me,m?Oe:be);A[E]=ke,B[E]=ke-me}t.modifiersData[n]=B}},requiresIfExists:["offset"]};var pe={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,s=U(r.placement),f=X(s),l=[R,D].indexOf(s)>=0?"height":"width";if(i&&a){var c=function(e,t){return ae("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:se(e,W))}(o.padding,r),p=w(i),u="y"===f?P:R,d="y"===f?j:D,v=r.rects.reference[l]+r.rects.reference[f]-a[f]-r.rects.popper[l],m=a[f]-r.rects.reference[f],h=C(i),g=h?"y"===f?h.clientHeight||0:h.clientWidth||0:0,b=v/2-m/2,y=c[u],x=g-p[l]-c[d],O=g/2-p[l]/2+b,k=le(y,O,x),E=f;r.modifiersData[n]=((t={})[E]=k,t.centerOffset=k-O,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!==typeof n||(n=t.elements.popper.querySelector(n)))&&re(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ue(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function de(e){return[P,D,j,R].some((function(t){return e[t]>=0}))}var ve=V({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,i=n.scroll,a=void 0===i||i,s=n.resize,f=void 0===s||s,l=o(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&c.forEach((function(e){e.addEventListener("scroll",r.update,F)})),f&&l.addEventListener("resize",r.update,F),function(){a&&c.forEach((function(e){e.removeEventListener("scroll",r.update,F)})),f&&l.removeEventListener("resize",r.update,F)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=Y({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=void 0===n||n,i=r.adaptive,a=void 0===i||i,s=r.roundOffsets,f=void 0===s||s,l={placement:U(t.placement),variation:$(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,K(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,K(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];a(o)&&d(o)&&(Object.assign(o.style,r),Object.keys(n).forEach((function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});a(n)&&d(n)&&(Object.assign(n.style,i),Object.keys(o).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]},J,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0===a||a,f=r.fallbackPlacements,l=r.padding,c=r.boundary,p=r.rootBoundary,u=r.altBoundary,d=r.flipVariations,v=void 0===d||d,m=r.allowedAutoPlacements,h=t.options.placement,g=U(h),b=f||(g===h||!v?[Z(h)]:function(e){if(U(e)===A)return[];var t=Z(e);return[te(e),t,te(t)]}(h)),w=[h].concat(b).reduce((function(e,r){return e.concat(U(r)===A?function(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,a=r.padding,s=r.flipVariations,f=r.allowedAutoPlacements,l=void 0===f?B:f,c=$(n),p=c?s?L:L.filter((function(e){return $(e)===c})):W,u=p.filter((function(e){return l.indexOf(e)>=0}));0===u.length&&(u=p);var d=u.reduce((function(t,r){return t[r]=fe(e,{placement:r,boundary:o,rootBoundary:i,padding:a})[U(r)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:r,boundary:c,rootBoundary:p,padding:l,flipVariations:v,allowedAutoPlacements:m}):r)}),[]),y=t.rects.reference,x=t.rects.popper,O=new Map,k=!0,E=w[0],C=0;C<w.length;C++){var S=w[C],M=U(S),z=$(S)===T,H=[P,j].indexOf(M)>=0,q=H?"width":"height",I=fe(t,{placement:S,boundary:c,rootBoundary:p,altBoundary:u,padding:l}),_=H?z?D:R:z?j:P;y[q]>x[q]&&(_=Z(_));var N=Z(_),V=[];if(i&&V.push(I[M]<=0),s&&V.push(I[_]<=0,I[N]<=0),V.every((function(e){return e}))){E=S,k=!1;break}O.set(S,V)}if(k)for(var F=function(e){var t=w.find((function(t){var r=O.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},X=v?3:1;X>0;X--){if("break"===F(X))break}t.placement!==E&&(t.modifiersData[n]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},ce,pe,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=fe(t,{elementContext:"reference"}),s=fe(t,{altBoundary:!0}),f=ue(a,n),l=ue(s,o,i),c=de(f),p=de(l);t.modifiersData[r]={referenceClippingOffsets:f,popperEscapeOffsets:l,isReferenceHidden:c,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":p})}}]}),me=r(67294);function he(){return he=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},he.apply(this,arguments)}var ge=function(e,t){return{var:e,varRef:t?"var("+e+", "+t+")":"var("+e+")"}},be={arrowShadowColor:ge("--popper-arrow-shadow-color"),arrowSize:ge("--popper-arrow-size","8px"),arrowSizeHalf:ge("--popper-arrow-size-half"),arrowBg:ge("--popper-arrow-bg"),transformOrigin:ge("--popper-transform-origin"),arrowOffset:ge("--popper-arrow-offset")};var we={top:"bottom center","top-start":"bottom left","top-end":"bottom right",bottom:"top center","bottom-start":"top left","bottom-end":"top right",left:"right center","left-start":"right top","left-end":"right bottom",right:"left center","right-start":"left top","right-end":"left bottom"},ye={scroll:!0,resize:!0};var xe={name:"matchWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;t.styles.popper.width=t.rects.reference.width+"px"},effect:function(e){var t=e.state;return function(){var e=t.elements.reference;t.elements.popper.style.width=e.offsetWidth+"px"}}},Oe={name:"transformOrigin",enabled:!0,phase:"write",fn:function(e){var t=e.state;ke(t)},effect:function(e){var t=e.state;return function(){ke(t)}}},ke=function(e){var t;e.elements.popper.style.setProperty(be.transformOrigin.var,(t=e.placement,we[t]))},Ee={name:"positionArrow",enabled:!0,phase:"afterWrite",fn:function(e){var t=e.state;Ce(t)}},Ce=function(e){var t;if(e.placement){var r=Pe(e.placement);if(null!=(t=e.elements)&&t.arrow&&r){var n,o;Object.assign(e.elements.arrow.style,((n={})[r.property]=r.value,n.width=be.arrowSize.varRef,n.height=be.arrowSize.varRef,n.zIndex=-1,n));var i=((o={})[be.arrowSizeHalf.var]="calc("+be.arrowSize.varRef+" / 2)",o[be.arrowOffset.var]="calc("+be.arrowSizeHalf.varRef+" * -1)",o);for(var a in i)e.elements.arrow.style.setProperty(a,i[a])}}},Pe=function(e){return e.startsWith("top")?{property:"bottom",value:be.arrowOffset.varRef}:e.startsWith("bottom")?{property:"top",value:be.arrowOffset.varRef}:e.startsWith("left")?{property:"right",value:be.arrowOffset.varRef}:e.startsWith("right")?{property:"left",value:be.arrowOffset.varRef}:void 0},je={name:"innerArrow",enabled:!0,phase:"main",requires:["arrow"],fn:function(e){var t=e.state;De(t)},effect:function(e){var t=e.state;return function(){De(t)}}},De=function(e){if(e.elements.arrow){var t,r=e.elements.arrow.querySelector("[data-popper-arrow-inner]");if(r)Object.assign(r.style,{transform:"rotate(45deg)",background:be.arrowBg.varRef,top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:"inherit",boxShadow:(t=e.placement,t.includes("top")?"1px 1px 1px 0 var(--popper-arrow-shadow-color)":t.includes("bottom")?"-1px -1px 1px 0 var(--popper-arrow-shadow-color)":t.includes("right")?"-1px 1px 1px 0 var(--popper-arrow-shadow-color)":t.includes("left")?"1px -1px 1px 0 var(--popper-arrow-shadow-color)":void 0)})}},Re={"start-start":{ltr:"left-start",rtl:"right-start"},"start-end":{ltr:"left-end",rtl:"right-end"},"end-start":{ltr:"right-start",rtl:"left-start"},"end-end":{ltr:"right-end",rtl:"left-end"},start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}},Ae={"auto-start":"auto-end","auto-end":"auto-start","top-start":"top-end","top-end":"top-start","bottom-start":"bottom-end","bottom-end":"bottom-start"};var We=["size","shadowColor","bg","style"];function Te(e){void 0===e&&(e={});var t=e,r=t.enabled,o=void 0===r||r,i=t.modifiers,a=t.placement,s=void 0===a?"bottom":a,f=t.strategy,l=void 0===f?"absolute":f,c=t.arrowPadding,p=void 0===c?8:c,u=t.eventListeners,d=void 0===u||u,v=t.offset,m=t.gutter,h=void 0===m?8:m,g=t.flip,b=void 0===g||g,w=t.boundary,y=void 0===w?"clippingParents":w,x=t.preventOverflow,O=void 0===x||x,k=t.matchWidth,E=t.direction,C=void 0===E?"ltr":E,P=(0,me.useRef)(null),j=(0,me.useRef)(null),D=(0,me.useRef)(null),R=function(e,t){var r,n;void 0===t&&(t="ltr");var o=(null==(r=Re[e])?void 0:r[t])||e;return"ltr"===t?o:null!=(n=Ae[e])?n:o}(s,C),A=(0,me.useRef)((function(){})),W=(0,me.useCallback)((function(){var e;o&&P.current&&j.current&&(null==A.current||A.current(),D.current=ve(P.current,j.current,{placement:R,modifiers:[je,Ee,Oe,he({},xe,{enabled:!!k}),he({name:"eventListeners"},(e=d,"object"===typeof e?{enabled:!0,options:he({},ye,e)}:{enabled:e,options:ye})),{name:"arrow",options:{padding:p}},{name:"offset",options:{offset:null!=v?v:[0,h]}},{name:"flip",enabled:!!b,options:{padding:8}},{name:"preventOverflow",enabled:!!O,options:{boundary:y}}].concat(null!=i?i:[]),strategy:l}),D.current.forceUpdate(),A.current=D.current.destroy)}),[R,o,i,k,d,p,v,h,b,O,y,l]);(0,me.useEffect)((function(){return function(){var e;P.current||j.current||(null==(e=D.current)||e.destroy(),D.current=null)}}),[]);var T=(0,me.useCallback)((function(e){P.current=e,W()}),[W]),S=(0,me.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),he({},e,{ref:(0,n.lq)(T,t)})}),[T]),M=(0,me.useCallback)((function(e){j.current=e,W()}),[W]),z=(0,me.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),he({},e,{ref:(0,n.lq)(M,t),style:he({},e.style,{position:l,minWidth:k?void 0:"max-content",inset:"0 auto auto 0"})})}),[l,M,k]),L=(0,me.useCallback)((function(e,t){void 0===e&&(e={}),void 0===t&&(t=null);var r=e;return r.size,r.shadowColor,r.bg,r.style,he({},function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(r,We),{ref:t,"data-popper-arrow":"",style:Se(e)})}),[]),B=(0,me.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),he({},e,{ref:t,"data-popper-arrow-inner":""})}),[]);return{update:function(){var e;null==(e=D.current)||e.update()},forceUpdate:function(){var e;null==(e=D.current)||e.forceUpdate()},transformOrigin:be.transformOrigin.varRef,referenceRef:T,popperRef:M,getPopperProps:z,getArrowProps:L,getArrowInnerProps:B,getReferenceProps:S}}function Se(e){var t=e.size,r=e.shadowColor,n=e.bg,o=he({},e.style,{position:"absolute"});return t&&(o["--popper-arrow-size"]=t),r&&(o["--popper-arrow-shadow-color"]=r),n&&(o["--popper-arrow-bg"]=n),o}var Me=r(46871),ze=r(42846),Le=r(15031),Be=r(1358),He=r(38759),qe=r(21190),Ie=r(97375),_e=r(44697);function Ne(){return Ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ne.apply(this,arguments)}function Ve(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var Fe={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},Ue=["openDelay","closeDelay","closeOnClick","closeOnMouseDown","closeOnEsc","onOpen","onClose","placement","id","isOpen","defaultIsOpen","arrowSize","arrowShadowColor","arrowPadding","modifiers","isDisabled","gutter","offset","direction"];var $e=["children","label","shouldWrapChildren","aria-label","hasArrow","bg","portalProps","background","backgroundColor","bgColor"],Xe=(0,ze.m$)(He.E.div),Ye=(0,ze.Gp)((function(e,t){var r,o,i=(0,ze.mq)("Tooltip",e),a=(0,ze.Lr)(e),s=(0,ze.Fg)(),f=a.children,l=a.label,c=a.shouldWrapChildren,p=a["aria-label"],u=a.hasArrow,d=a.bg,v=a.portalProps,m=a.background,h=a.backgroundColor,g=a.bgColor,b=Ve(a,$e),w=null!=(r=null!=(o=null!=m?m:h)?o:d)?r:g;w&&(i.bg=w,i[be.arrowBg.var]=(0,Le.K1)(s,"colors",w));var y,x=function(e){void 0===e&&(e={});var t=e,r=t.openDelay,o=void 0===r?0:r,i=t.closeDelay,a=void 0===i?0:i,s=t.closeOnClick,f=void 0===s||s,l=t.closeOnMouseDown,c=t.closeOnEsc,p=void 0===c||c,u=t.onOpen,d=t.onClose,v=t.placement,m=t.id,h=t.isOpen,g=t.defaultIsOpen,b=t.arrowSize,w=void 0===b?10:b,y=t.arrowShadowColor,x=t.arrowPadding,O=t.modifiers,k=t.isDisabled,E=t.gutter,C=t.offset,P=t.direction,j=Ve(t,Ue),D=(0,Ie.qY)({isOpen:h,defaultIsOpen:g,onOpen:u,onClose:d}),R=D.isOpen,A=D.onOpen,W=D.onClose,T=Te({enabled:R,placement:v,arrowPadding:x,modifiers:O,gutter:E,offset:C,direction:P}),S=T.referenceRef,M=T.getPopperProps,z=T.getArrowInnerProps,L=T.getArrowProps,B=(0,Ie.Me)(m,"tooltip"),H=me.useRef(null),q=me.useRef(),I=me.useRef(),_=me.useCallback((function(){k||q.current||(q.current=window.setTimeout(A,o))}),[k,A,o]),N=me.useCallback((function(){q.current&&(clearTimeout(q.current),q.current=void 0),I.current=window.setTimeout(W,a)}),[a,W]),V=me.useCallback((function(){R&&f&&N()}),[f,N,R]),F=me.useCallback((function(){R&&l&&N()}),[l,N,R]),U=me.useCallback((function(e){R&&"Escape"===e.key&&N()}),[R,N]);(0,_e.b)("keydown",p?U:void 0),me.useEffect((function(){return function(){clearTimeout(q.current),clearTimeout(I.current)}}),[]),(0,_e.b)("mouseleave",N,(function(){return H.current}));var $=me.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),Ne({},e,{ref:(0,n.lq)(H,t,S),onMouseEnter:(0,Le.v0)(e.onMouseEnter,_),onClick:(0,Le.v0)(e.onClick,V),onMouseDown:(0,Le.v0)(e.onMouseDown,F),onFocus:(0,Le.v0)(e.onFocus,_),onBlur:(0,Le.v0)(e.onBlur,N),"aria-describedby":R?B:void 0})}),[_,N,F,R,B,V,S]),X=me.useCallback((function(e,t){var r;return void 0===e&&(e={}),void 0===t&&(t=null),M(Ne({},e,{style:Ne({},e.style,(r={},r[be.arrowSize.var]=w?(0,Le.px)(w):void 0,r[be.arrowShadowColor.var]=y,r))}),t)}),[M,w,y]),Y=me.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),Ne({ref:t},j,e,{id:B,role:"tooltip",style:Ne({},e.style,{position:"relative",transformOrigin:be.transformOrigin.varRef})})}),[j,B]);return{isOpen:R,show:_,hide:N,getTriggerProps:$,getTooltipProps:Y,getTooltipPositionerProps:X,getArrowProps:L,getArrowInnerProps:z}}(Ne({},b,{direction:s.direction}));if((0,Le.HD)(f)||c)y=me.createElement(ze.m$.span,Ne({tabIndex:0},x.getTriggerProps()),f);else{var O=me.Children.only(f);y=me.cloneElement(O,x.getTriggerProps(O.props,O.ref))}var k=!!p,E=x.getTooltipProps({},t),C=k?(0,Le.CE)(E,["role","id"]):E,P=(0,Le.ei)(E,["role","id"]);return l?me.createElement(me.Fragment,null,y,me.createElement(qe.M,null,x.isOpen&&me.createElement(Me.h_,v,me.createElement(ze.m$.div,Ne({},x.getTooltipPositionerProps(),{__css:{zIndex:i.zIndex,pointerEvents:"none"}}),me.createElement(Xe,Ne({variants:Fe},C,{initial:"exit",animate:"enter",exit:"exit",__css:i}),l,k&&me.createElement(Be.TX,P,p),u&&me.createElement(ze.m$.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper"},me.createElement(ze.m$.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:i.bg}}))))))):me.createElement(me.Fragment,null,f)}));Le.Ts&&(Ye.displayName="Tooltip")}}]);
(self.webpackChunkdouble_a_team=self.webpackChunkdouble_a_team||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,s,u,l;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(s=c;0!=s--;)if(!a(e[s],o[s]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!o.has(s.value[0]))return!1;for(l=e.entries();!(s=l.next()).done;)if(!a(s.value[1],o.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!o.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(s=c;0!=s--;)if(e[s]!==o[s])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(o,u[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!e.$$typeof)&&!a(e[u[s]],o[u[s]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,i=n(7294),a=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return s},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){u.push(this),l()},o.componentDidUpdate=function(){l()},o.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},o.render=function(){return a.createElement(r,this.props)},i}(i.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",c),f}}},8209:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),i=n(5444),a=n(2359),o=function(e){var t=e.siteTitle;return r.createElement("header",{style:{background:"red"}},r.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.createElement("h1",{style:{margin:0}},r.createElement(i.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};o.defaultProps={siteTitle:""};var c=o,s=function(){return r.createElement("div",{style:{background:"red",borderTop:"2px solid black",padding:"10px 0 0 0",marginBottom:"1.45rem"}},r.createElement("ul",{style:{listStyle:"none",display:"flex",justifyContent:"space-evenly"}},r.createElement("li",null,r.createElement(i.Link,{to:"/blogs/"},"Blogs"))))},u=function(e){var t,o=e.children,u=(0,i.useStaticQuery)("3649515864");return r.createElement(r.Fragment,null,r.createElement(c,{siteTitle:(null===(t=u.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),r.createElement(s,null),r.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},r.createElement("main",null,o)),r.createElement("footer",{style:{marginTop:"2rem",background:"red",display:"flex",justifyContent:"space-evenly"}},r.createElement(a.S,{src:"../images/FB.png",alt:"Facebook logo",width:50,height:50,__imageData:n(7440)}),r.createElement(a.S,{src:"../images/Insta.png",alt:"Instagram logo",width:50,height:50,__imageData:n(8604)}),r.createElement(a.S,{src:"../images/YouTube.png",alt:"YouTube logo",width:50,height:50,__imageData:n(4615)}),r.createElement(a.S,{src:"../images/Mail.png",alt:"Mail logo",width:50,height:50,__imageData:n(9930)})))}},3751:function(e,t,n){"use strict";n.d(t,{Z:function(){return ge}});var r,i,a,o,c=n(7294),s=n(5697),u=n.n(s),l=n(4839),f=n.n(l),d=n(2993),p=n.n(d),b=n(6494),m=n.n(b),h="bodyAttributes",y="htmlAttributes",g="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(e){return w[e]})),"charset"),v="cssText",S="href",E="http-equiv",C="innerHTML",A="itemprop",O="name",x="property",k="rel",j="src",I="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",L="defer",_="encodeSpecialCharacters",N="onChangeClientState",B="titleTemplate",F=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),Y=[w.NOSCRIPT,w.SCRIPT,w.STYLE],R="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=G(e,w.TITLE),n=G(e,B);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=G(e,M);return t||r||void 0},V=function(e){return G(e,N)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return q({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var a=r[i].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),o=0;o<a.length;o++){var c=a[o],s=c.toLowerCase();-1===t.indexOf(s)||n===k&&"canonical"===e[n].toLowerCase()||s===k&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==C&&c!==v&&c!==A||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][u]&&(i[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var c=a[o],s=m()({},r[c],i[c]);r[c]=s}return e}),[]).reverse()},G=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;se(w.BODY,r),se(w.HTML,i),ce(f,d);var p={baseTag:ue(w.BASE,n),linkTags:ue(w.LINK,a),metaTags:ue(w.META,o),noscriptTags:ue(w.NOSCRIPT,c),scriptTags:ue(w.SCRIPT,u),styleTags:ue(w.STYLE,l)},b={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(b[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),s(e,b,m)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(w.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(R),i=r?r.split(","):[],a=[].concat(i),o=Object.keys(t),c=0;c<o.length;c++){var s=o[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===i.indexOf(s)&&i.push(s);var l=a.indexOf(s);-1!==l&&a.splice(l,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);i.length===a.length?n.removeAttribute(R):n.getAttribute(R)!==o.join(",")&&n.setAttribute(R,o.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===v)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(R,"true"),i.some((function(e,t){return o=t,n.isEqualNode(e)}))?i.splice(o,1):a.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:a}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[R]=!0,i=fe(n,r),[c.createElement(w.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=le(n),a=oe(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+W(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case y:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[R]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===C||n===v){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),c.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===C||e===v)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+i:i}),""),a=r.innerHTML||r.cssText||"",o=-1===Y.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:de(w.BASE,t,r),bodyAttributes:de(h,n,r),htmlAttributes:de(y,i,r),link:de(w.LINK,a,r),meta:de(w.META,o,r),noscript:de(w.NOSCRIPT,c,r),script:de(w.SCRIPT,s,r),style:de(w.STYLE,u,r),title:de(w.TITLE,{title:f,titleAttributes:d},r)}},be=f()((function(e){return{baseTag:Z([S,I],e),bodyAttributes:Q(h,e),defer:G(e,L),encode:G(e,_),htmlAttributes:Q(y,e),linkTags:$(w.LINK,[k,S],e),metaTags:$(w.META,[O,T,E,x,A],e),noscriptTags:$(w.NOSCRIPT,[C],e),onChangeClientState:V(e),scriptTags:$(w.SCRIPT,[j,C],e),styleTags:$(w.STYLE,[v],e),title:J(e),titleAttributes:Q(g,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),pe)((function(){return null})),me=(i=be,o=a=function(e){function t(){return z(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return q({},r,((t={})[n.type]=[].concat(r[n.type]||[],[q({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(r.type){case w.TITLE:return q({},i,((t={})[r.type]=o,t.titleAttributes=q({},a),t));case w.BODY:return q({},i,{bodyAttributes:q({},a)});case w.HTML:return q({},i,{htmlAttributes:q({},a)})}return q({},i,((n={})[r.type]=q({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=q({},t);return Object.keys(e).forEach((function(t){var r;n=q({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[F[n]||n]=e[n],t}),t)}(U(i,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=q({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(i,r)},H(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(c.Component),a.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);me.renderStatic=me.rewind;var he=n(5444);function ye(e){var t,n,r=e.description,i=e.lang,a=e.meta,o=e.title,s=(0,he.useStaticQuery)("63159454").site,u=r||s.siteMetadata.description,l=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return c.createElement(me,{htmlAttributes:{lang:i},title:o,titleTemplate:l?"%s | "+l:null,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=s.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(a)})}ye.defaultProps={lang:"en",meta:[],description:""};var ge=ye},4615:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/7128306b2408890d57001fa7584c806b/e9fba/YouTube.png","srcSet":"/static/7128306b2408890d57001fa7584c806b/86ee2/YouTube.png 13w,\\n/static/7128306b2408890d57001fa7584c806b/88208/YouTube.png 25w,\\n/static/7128306b2408890d57001fa7584c806b/e9fba/YouTube.png 50w,\\n/static/7128306b2408890d57001fa7584c806b/15e42/YouTube.png 100w","sizes":"(min-width: 50px) 50px, 100vw"},"sources":[{"srcSet":"/static/7128306b2408890d57001fa7584c806b/68795/YouTube.webp 13w,\\n/static/7128306b2408890d57001fa7584c806b/2fa99/YouTube.webp 25w,\\n/static/7128306b2408890d57001fa7584c806b/dbc4a/YouTube.webp 50w,\\n/static/7128306b2408890d57001fa7584c806b/d8057/YouTube.webp 100w","type":"image/webp","sizes":"(min-width: 50px) 50px, 100vw"}]},"width":50,"height":50}')},7440:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#385898","images":{"fallback":{"src":"/static/1ecba3a2bd527fea37b2bcd5777f5529/e9fba/FB.png","srcSet":"/static/1ecba3a2bd527fea37b2bcd5777f5529/86ee2/FB.png 13w,\\n/static/1ecba3a2bd527fea37b2bcd5777f5529/88208/FB.png 25w,\\n/static/1ecba3a2bd527fea37b2bcd5777f5529/e9fba/FB.png 50w,\\n/static/1ecba3a2bd527fea37b2bcd5777f5529/15e42/FB.png 100w","sizes":"(min-width: 50px) 50px, 100vw"},"sources":[{"srcSet":"/static/1ecba3a2bd527fea37b2bcd5777f5529/68795/FB.webp 13w,\\n/static/1ecba3a2bd527fea37b2bcd5777f5529/2fa99/FB.webp 25w,\\n/static/1ecba3a2bd527fea37b2bcd5777f5529/dbc4a/FB.webp 50w,\\n/static/1ecba3a2bd527fea37b2bcd5777f5529/d8057/FB.webp 100w","type":"image/webp","sizes":"(min-width: 50px) 50px, 100vw"}]},"width":50,"height":50}')},8604:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/9b6dd7bda7c247c01cd04335673c92ff/e9fba/Insta.png","srcSet":"/static/9b6dd7bda7c247c01cd04335673c92ff/86ee2/Insta.png 13w,\\n/static/9b6dd7bda7c247c01cd04335673c92ff/88208/Insta.png 25w,\\n/static/9b6dd7bda7c247c01cd04335673c92ff/e9fba/Insta.png 50w,\\n/static/9b6dd7bda7c247c01cd04335673c92ff/15e42/Insta.png 100w","sizes":"(min-width: 50px) 50px, 100vw"},"sources":[{"srcSet":"/static/9b6dd7bda7c247c01cd04335673c92ff/68795/Insta.webp 13w,\\n/static/9b6dd7bda7c247c01cd04335673c92ff/2fa99/Insta.webp 25w,\\n/static/9b6dd7bda7c247c01cd04335673c92ff/dbc4a/Insta.webp 50w,\\n/static/9b6dd7bda7c247c01cd04335673c92ff/d8057/Insta.webp 100w","type":"image/webp","sizes":"(min-width: 50px) 50px, 100vw"}]},"width":50,"height":50}')},9930:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/6fd70ecb0c102940b6841e9b60cb927c/e9fba/Mail.png","srcSet":"/static/6fd70ecb0c102940b6841e9b60cb927c/86ee2/Mail.png 13w,\\n/static/6fd70ecb0c102940b6841e9b60cb927c/88208/Mail.png 25w,\\n/static/6fd70ecb0c102940b6841e9b60cb927c/e9fba/Mail.png 50w,\\n/static/6fd70ecb0c102940b6841e9b60cb927c/15e42/Mail.png 100w","sizes":"(min-width: 50px) 50px, 100vw"},"sources":[{"srcSet":"/static/6fd70ecb0c102940b6841e9b60cb927c/68795/Mail.webp 13w,\\n/static/6fd70ecb0c102940b6841e9b60cb927c/2fa99/Mail.webp 25w,\\n/static/6fd70ecb0c102940b6841e9b60cb927c/dbc4a/Mail.webp 50w,\\n/static/6fd70ecb0c102940b6841e9b60cb927c/d8057/Mail.webp 100w","type":"image/webp","sizes":"(min-width: 50px) 50px, 100vw"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=commons-50fbdec12427c91f059f.js.map
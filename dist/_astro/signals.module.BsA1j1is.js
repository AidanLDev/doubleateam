import{l as U,t as T,b as G}from"./preact.module.9bA1UASV.js";import{T as k}from"./hooks.module.CYQm0EAo.js";var J=Symbol.for("preact-signals");function $(){if(h>1)h--;else{for(var t,i=!1;void 0!==d;){var o=d;for(d=void 0,w++;void 0!==o;){var r=o.o;if(o.o=void 0,o.f&=-3,!(8&o.f)&&O(o))try{o.c()}catch(o){i||(t=o,i=!0)}o=r}}if(w=0,h--,i)throw t}}var b,f=void 0,d=void 0,h=0,w=0,y=0;function E(t){if(void 0!==f){var i=t.n;if(void 0===i||i.t!==f)return i={i:0,S:t,p:f.s,n:void 0,t:f,e:void 0,x:void 0,r:i},void 0!==f.s&&(f.s.n=i),f.s=i,t.n=i,32&f.f&&t.S(i),i;if(-1===i.i)return i.i=0,void 0!==i.n&&(i.n.p=i.p,void 0!==i.p&&(i.p.n=i.n),i.p=f.s,i.n=void 0,f.s.n=i,f.s=i),i}}function v(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function N(t){return new v(t)}function O(t){for(var i=t.s;void 0!==i;i=i.n)if(i.S.i!==i.i||!i.S.h()||i.S.i!==i.i)return!0;return!1}function C(t){for(var i=t.s;void 0!==i;i=i.n){var o=i.S.n;if(void 0!==o&&(i.r=o),i.S.n=i,i.i=-1,void 0===i.n){t.s=i;break}}}function j(t){for(var i=t.s,o=void 0;void 0!==i;){var r=i.p;-1===i.i?(i.S.U(i),void 0!==r&&(r.n=i.n),void 0!==i.n&&(i.n.p=r)):o=i,i.S.n=i.r,void 0!==i.r&&(i.r=void 0),i=r}t.s=o}function a(t){v.call(this,void 0),this.x=t,this.s=void 0,this.g=y-1,this.f=4}function V(t){return new a(t)}function P(t){var i=t.u;if(t.u=void 0,"function"==typeof i){h++;var o=f;f=void 0;try{i()}catch(i){throw t.f&=-2,t.f|=8,g(t),i}finally{f=o,$()}}}function g(t){for(var i=t.s;void 0!==i;i=i.n)i.S.U(i);t.x=void 0,t.s=void 0,P(t)}function q(t){if(f!==this)throw new Error("Out-of-order effect");j(this),f=t,this.f&=-2,8&this.f&&g(this),$()}function p(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function x(t){var i=new p(t);try{i.c()}catch(t){throw i.d(),t}return i.d.bind(i)}function c(t,i){U[t]=i.bind(null,U[t]||function(){})}function S(t){b&&b(),b=t&&t.S()}function A(t){var i=this,o=t.data,r=B(o);r.value=o;var n=k((function(){for(var t=i.__v;t=t.__;)if(t.__c){t.__c.__$f|=4;break}return i.__$u.c=function(){var t;T(n.peek())||3!==(null==(t=i.base)?void 0:t.nodeType)?(i.__$f|=1,i.setState({})):i.base.data=n.peek()},V((function(){var t=r.value.value;return 0===t?0:!0===t?"":t||""}))}),[]);return n.value}function z(t,i,o,r){var n=i in t&&void 0===t.ownerSVGElement,f=N(o);return{o:function(t,i){f.value=t,r=i},d:x((function(){var o=f.value.value;r[i]!==o&&(r[i]=o,n?t[i]=o:o?t.setAttribute(i,o):t.removeAttribute(i))}))}}function B(t){return k((function(){return N(t)}),[])}v.prototype.brand=J,v.prototype.h=function(){return!0},v.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},v.prototype.U=function(t){if(void 0!==this.t){var i=t.e,o=t.x;void 0!==i&&(i.x=o,t.e=void 0),void 0!==o&&(o.e=i,t.x=void 0),t===this.t&&(this.t=o)}},v.prototype.subscribe=function(t){var i=this;return x((function(){var o=i.value,r=f;f=void 0;try{t(o)}finally{f=r}}))},v.prototype.valueOf=function(){return this.value},v.prototype.toString=function(){return this.value+""},v.prototype.toJSON=function(){return this.value},v.prototype.peek=function(){var t=f;f=void 0;try{return this.value}finally{f=t}},Object.defineProperty(v.prototype,"value",{get:function(){var t=E(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){if(w>100)throw new Error("Cycle detected");this.v=t,this.i++,y++,h++;try{for(var i=this.t;void 0!==i;i=i.x)i.t.N()}finally{$()}}}}),(a.prototype=new v).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f)||(this.f&=-5,this.g===y))return!0;if(this.g=y,this.f|=1,this.i>0&&!O(this))return this.f&=-2,!0;var t=f;try{C(this),f=this;var i=this.x();(16&this.f||this.v!==i||0===this.i)&&(this.v=i,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return f=t,j(this),this.f&=-2,!0},a.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var i=this.s;void 0!==i;i=i.n)i.S.S(i)}v.prototype.S.call(this,t)},a.prototype.U=function(t){if(void 0!==this.t&&(v.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var i=this.s;void 0!==i;i=i.n)i.S.U(i)}},a.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},Object.defineProperty(a.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var t=E(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),p.prototype.c=function(){var t=this.S();try{if(8&this.f||void 0===this.x)return;var i=this.x();"function"==typeof i&&(this.u=i)}finally{t()}},p.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,P(this),C(this),h++;var t=f;return f=this,q.bind(this,t)},p.prototype.N=function(){2&this.f||(this.f|=2,this.o=d,d=this)},p.prototype.d=function(){this.f|=8,1&this.f||g(this)},A.displayName="_st",Object.defineProperties(v.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:A},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),c("__b",(function(t,i){if("string"==typeof i.type){var o,r=i.props;for(var n in r)if("children"!==n){var f=r[n];f instanceof v&&(o||(i.__np=o={}),o[n]=f,r[n]=f.peek())}}t(i)})),c("__r",(function(t,i){S();var o,r,n=i.__c;n&&(n.__$f&=-2,void 0===(o=n.__$u)&&(n.__$u=(x((function(){r=this})),r.c=function(){n.__$f|=1,n.setState({})},o=r))),S(o),t(i)})),c("__e",(function(t,i,o,r){S(),t(i,o,r)})),c("diffed",(function(t,i){var o;if(S(),"string"==typeof i.type&&(o=i.__e)){var r=i.__np,n=i.props;if(r){var f=o.U;if(f)for(var e in f){var v=f[e];void 0!==v&&!(e in r)&&(v.d(),f[e]=void 0)}else o.U=f={};for(var s in r){var u=f[s],h=r[s];void 0===u?(u=z(o,s,h,n),f[s]=u):u.o(h,n)}}}t(i)})),c("unmount",(function(t,i){if("string"==typeof i.type){var o=i.__e;if(o){var r=o.U;if(r)for(var n in o.U=void 0,r){var f=r[n];f&&f.d()}}}else{var e=i.__c;if(e){var v=e.__$u;v&&(e.__$u=void 0,v.d())}}t(i)})),c("__h",(function(t,i,o,r){(r<3||9===r)&&(i.__$f|=2),t(i,o,r)})),G.prototype.shouldComponentUpdate=function(t,i){var o=this.__$u;if(!(o&&void 0!==o.s||4&this.__$f)||3&this.__$f)return!0;for(var r in i)return!0;for(var n in t)if("__source"!==n&&t[n]!==this.props[n])return!0;for(var f in this.props)if(!(f in t))return!0;return!1};export{v as Signal,V as computed,x as effect,N as signal,B as useSignal};
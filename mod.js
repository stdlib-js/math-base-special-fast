// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,a=e.__defineSetter__,u=e.__lookupGetter__,f=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(u.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),p&&a&&a.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}function y(r){return r<0?-r:r}var p=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY;function b(r){return r===p||r===v}function m(r){return r!=r}var A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var s=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;var _,U="function"==typeof Symbol?Symbol.toStringTag:"";_=A&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,i;if(null==r)return s.call(r);n=r[U],i=U,t=null!=(o=r)&&w.call(o,i);try{r[U]=void 0}catch(t){return s.call(r)}return e=s.call(r),t?r[U]=n:delete r[U],e}:function(r){return s.call(r)};var d=_,h="function"==typeof Uint32Array;var N="function"==typeof Uint32Array?Uint32Array:null;var g,j="function"==typeof Uint32Array?Uint32Array:void 0;g=function(){var r,t,n;if("function"!=typeof N)return!1;try{t=new N(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(h&&n instanceof Uint32Array||"[object Uint32Array]"===d(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?j:function(){throw new Error("not implemented")};var S=g,E="function"==typeof Float64Array;var F="function"==typeof Float64Array?Float64Array:null;var I,O="function"==typeof Float64Array?Float64Array:void 0;I=function(){var r,t,n;if("function"!=typeof F)return!1;try{t=new F([1,3.14,-3.14,NaN]),n=t,r=(E&&n instanceof Float64Array||"[object Float64Array]"===d(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?O:function(){throw new Error("not implemented")};var T=I,P="function"==typeof Uint8Array;var x="function"==typeof Uint8Array?Uint8Array:null;var V,q="function"==typeof Uint8Array?Uint8Array:void 0;V=function(){var r,t,n;if("function"!=typeof x)return!1;try{t=new x(t=[1,3.14,-3.14,256,257]),n=t,r=(P&&n instanceof Uint8Array||"[object Uint8Array]"===d(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?q:function(){throw new Error("not implemented")};var G=V,k="function"==typeof Uint16Array;var Y="function"==typeof Uint16Array?Uint16Array:null;var C,M="function"==typeof Uint16Array?Uint16Array:void 0;C=function(){var r,t,n;if("function"!=typeof Y)return!1;try{t=new Y(t=[1,3.14,-3.14,65536,65537]),n=t,r=(k&&n instanceof Uint16Array||"[object Uint16Array]"===d(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?M:function(){throw new Error("not implemented")};var z,B={uint16:C,uint8:G};(z=new B.uint16(1))[0]=4660;var D=52===new B.uint8(z.buffer)[0],H=!0===D?1:0,J=new T(1),K=new S(J.buffer);function L(r){return J[0]=r,K[H]}var Q=!0===D?1:0,R=new T(1),W=new S(R.buffer);var X=.6931471803691238,Z=1.9082149292705877e-10;function $(r){var t,n,e,o,i,a,u,f,c,l,y,p;return 0===r?v:m(r)||r<0?NaN:(i=0,(n=L(r))<1048576&&(i-=54,n=L(r*=0x40000000000000)),n>=2146435072?r+r:(i+=(n>>20)-1023|0,i+=(f=(n&=1048575)+614244&1048576|0)>>20|0,u=(r=function(r,t){return R[0]=r,W[Q]=t>>>0,R[0]}(r,n|1072693248^f))-1,(1048575&2+n)<3?0===u?0===i?0:i*X+i*Z:(a=u*u*(.5-.3333333333333333*u),0===i?u-a:i*X-(a-i*Z-u)):(f=n-398458|0,c=440401-n|0,o=(y=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),a=e+o,(f|=c)>0?(t=.5*u*u,0===i?u-(t-l*(t+a)):i*X-(t-(l*(t+a)+i*Z)-u)):0===i?u-l*(u-a):i*X-(l*(u-a)-i*Z-u))))}var rr=Math.sqrt;function tr(r){return r<1?NaN:m(r)||b(r)?r:$(r+rr(r+1)*rr(r-1))}var nr=.397824734759316;function er(r,t){return(r=y(r))>(t=y(t))?.96043387010342*r+nr*t:.96043387010342*t+nr*r}function or(r,t){return r>t?r+(t>>>1):(r>>>1)+t}function ir(r){var t,n;return((n=0|r)^(t=n>>31|0))-t|0}function ar(r,t){return(r=ir(r))>(t=ir(t))?r+(t>>>1):(r>>>1)+t}function ur(r,t){return r>t?r+(t>>>2):(r>>>2)+t}function fr(r,t){return(r=ir(r))>(t=ir(t))?r+(t>>>2):(r>>>2)+t}function cr(r){return 0===r||m(r)||b(r)?r:r>0?$(r+rr(r*r+1)):-$(-r+rr(r*r+1))}function lr(r){return 0===r?r:m(r)||b(r)?NaN:.5*$((1+r)/(1-r))}function yr(r,t){return rr(r*r+t*t)}function pr(r,t){return r>t?r:t}function vr(r,t){return r<t?r:t}c(er,"factory",{configurable:!1,enumerable:!1,writable:!1,value:function(r,t,n,e){if(e){if(1===r&&.5===t)return n?or:ar;if(1===r&&.25===t)return n?ur:fr}return n?function(r,t){return function(n,e){return n>e?r*n+t*e:t*n+r*e}}(r,t):function(r,t){return function(n,e){return(n=y(n))>(e=y(e))?r*n+t*e:t*n+r*e}}(r,t)}});function br(r,t){var n;if(m(r))return NaN;if(t<0){if(t=-t,0===r)return r=1/r,1==(1&t)?r:p;r=1/r}else if(0===t)return 1;for(n=1;0!==t;)1==(1&t)&&(n*=r),r*=r,t>>=1;return n}function mr(r){var t=0,n=r>>>0;return 4294901760&n&&(n>>>=16,t|=16),65280&n&&(n>>>=8,t|=8),240&n&&(n>>>=4,t|=4),12&n&&(n>>>=2,t|=2),2&n&&(n>>>=1,t|=1),t}function Ar(r){var t,n,e,o;for(o=r>>>0,t=0,n=1073741824;n>o;)n>>>=2;for(;0!==n;)e=t+n>>>0,t>>>=1,r>=e&&(r-=e,t+=n),n>>>=2;return t>>>0}var sr={};l(sr,"abs",y),l(sr,"acosh",tr),l(sr,"ampbm",er),l(sr,"asinh",cr),l(sr,"atanh",lr),l(sr,"hypot",yr),l(sr,"max",pr),l(sr,"min",vr),l(sr,"powint",br),l(sr,"log2Uint32",mr),l(sr,"sqrtUint32",Ar);export{y as abs,tr as acosh,er as ampbm,cr as asinh,lr as atanh,sr as default,yr as hypot,mr as log2Uint32,pr as max,vr as min,br as powint,Ar as sqrtUint32};
//# sourceMappingURL=mod.js.map

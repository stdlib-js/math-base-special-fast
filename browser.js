// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(t){"use strict";var n,r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?e:function(t,n,r){var e,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(f.call(t,n)||c.call(t,n)?(e=t.__proto__,t.__proto__=o,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,n,r.get),p&&a&&a.call(t,n,r.set),t};var l=n;function y(t,n,r){l(t,n,{configurable:!1,enumerable:!0,writable:!1,value:r})}function p(t){return t<0?-t:t}var b=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY;function s(t){return t===b||t===v}function m(t){return t!=t}var d,_="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),A=Object.prototype.toString,w=Object.prototype.hasOwnProperty,h="function"==typeof Symbol?Symbol.toStringTag:"";d=_&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,i;if(null==t)return A.call(t);r=t[h],i=h,n=null!=(o=t)&&w.call(o,i);try{t[h]=void 0}catch(n){return A.call(t)}return e=A.call(t),n?t[h]=r:delete t[h],e}:function(t){return A.call(t)};var U,g=d,j="function"==typeof Uint32Array,N="function"==typeof Uint32Array?Uint32Array:null,S="function"==typeof Uint32Array?Uint32Array:void 0;U=function(){var t,n,r;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(j&&r instanceof Uint32Array||"[object Uint32Array]"===g(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?S:function(){throw new Error("not implemented")};var E,F=U,T="function"==typeof Float64Array,I="function"==typeof Float64Array?Float64Array:null,O="function"==typeof Float64Array?Float64Array:void 0;E=function(){var t,n,r;if("function"!=typeof I)return!1;try{n=new I([1,3.14,-3.14,NaN]),r=n,t=(T&&r instanceof Float64Array||"[object Float64Array]"===g(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?O:function(){throw new Error("not implemented")};var x,P=E,V="function"==typeof Uint8Array,q="function"==typeof Uint8Array?Uint8Array:null,G="function"==typeof Uint8Array?Uint8Array:void 0;x=function(){var t,n,r;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,256,257]),r=n,t=(V&&r instanceof Uint8Array||"[object Uint8Array]"===g(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?G:function(){throw new Error("not implemented")};var k,M=x,Y="function"==typeof Uint16Array,C="function"==typeof Uint16Array?Uint16Array:null,z="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var t,n,r;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,65536,65537]),r=n,t=(Y&&r instanceof Uint16Array||"[object Uint16Array]"===g(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?z:function(){throw new Error("not implemented")};var B,D={uint16:k,uint8:M};(B=new D.uint16(1))[0]=4660;var H=52===new D.uint8(B.buffer)[0],J=!0===H?1:0,K=new P(1),L=new F(K.buffer);function Q(t){return K[0]=t,L[J]}var R=!0===H?1:0,W=new P(1),X=new F(W.buffer),Z=.6931471803691238,$=1.9082149292705877e-10,tt=1048575;function nt(t){var n,r,e,o,i,u,a,f,c,l,y,p;return 0===t?v:m(t)||t<0?NaN:(i=0,(r=Q(t))<1048576&&(i-=54,r=Q(t*=0x40000000000000)),r>=2146435072?t+t:(i+=(r>>20)-1023|0,i+=(f=614244+(r&=tt)&1048576|0)>>20|0,a=(t=function(t,n){return W[0]=t,X[R]=n>>>0,W[0]}(t,r|1072693248^f))-1,(tt&2+r)<3?0===a?0===i?0:i*Z+i*$:(u=a*a*(.5-.3333333333333333*a),0===i?a-u:i*Z-(u-i*$-a)):(f=r-398458|0,c=440401-r|0,o=(y=(p=(l=a/(2+a))*l)*p)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(y),e=p*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(y),u=e+o,(f|=c)>0?(n=.5*a*a,0===i?a-(n-l*(n+u)):i*Z-(n-(l*(n+u)+i*$)-a)):0===i?a-l*(a-u):i*Z-(l*(a-u)-i*$-a))))}var rt=Math.sqrt;function et(t){return t<1?NaN:m(t)||s(t)?t:nt(t+rt(t+1)*rt(t-1))}var ot=.96043387010342,it=.397824734759316;function ut(t,n){return(t=p(t))>(n=p(n))?ot*t+it*n:ot*n+it*t}function at(t,n){return t>n?t+(n>>>1):(t>>>1)+n}function ft(t){var n,r;return((r=0|t)^(n=r>>31|0))-n|0}function ct(t,n){return(t=ft(t))>(n=ft(n))?t+(n>>>1):(t>>>1)+n}function lt(t,n){return t>n?t+(n>>>2):(t>>>2)+n}function yt(t,n){return(t=ft(t))>(n=ft(n))?t+(n>>>2):(t>>>2)+n}function pt(t){return 0===t||m(t)||s(t)?t:t>0?nt(t+rt(t*t+1)):-nt(-t+rt(t*t+1))}function bt(t){return 0===t?t:m(t)||s(t)?NaN:.5*nt((1+t)/(1-t))}function vt(t,n){return rt(t*t+n*n)}function st(t,n){return t>n?t:n}function mt(t,n){return t<n?t:n}function dt(t,n){var r;if(m(t))return NaN;if(n<0){if(n=-n,0===t)return t=1/t,1==(1&n)?t:b;t=1/t}else if(0===n)return 1;for(r=1;0!==n;)1==(1&n)&&(r*=t),t*=t,n>>=1;return r}function _t(t){var n=0,r=t>>>0;return 4294901760&r&&(r>>>=16,n|=16),65280&r&&(r>>>=8,n|=8),240&r&&(r>>>=4,n|=4),12&r&&(r>>>=2,n|=2),2&r&&(r>>>=1,n|=1),n}function At(t){var n,r,e,o;for(o=t>>>0,n=0,r=1073741824;r>o;)r>>>=2;for(;0!==r;)e=n+r>>>0,n>>>=1,t>=e&&(t-=e,n+=r),r>>>=2;return n>>>0}l(ut,"factory",{configurable:!1,enumerable:!1,writable:!1,value:function(t,n,r,e){if(e){if(1===t&&.5===n)return r?at:ct;if(1===t&&.25===n)return r?lt:yt}return r?function(t,n){return function(r,e){return r>e?t*r+n*e:n*r+t*e}}(t,n):function(t,n){return function(r,e){return(r=p(r))>(e=p(e))?t*r+n*e:n*r+t*e}}(t,n)}});var wt={};y(wt,"abs",p),y(wt,"acosh",et),y(wt,"ampbm",ut),y(wt,"asinh",pt),y(wt,"atanh",bt),y(wt,"hypot",vt),y(wt,"max",st),y(wt,"min",mt),y(wt,"powint",dt),y(wt,"log2Uint32",_t),y(wt,"sqrtUint32",At),t.abs=p,t.acosh=et,t.ampbm=ut,t.asinh=pt,t.atanh=bt,t.default=wt,t.hypot=vt,t.log2Uint32=_t,t.max=st,t.min=mt,t.powint=dt,t.sqrtUint32=At,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).fmath={});
//# sourceMappingURL=browser.js.map

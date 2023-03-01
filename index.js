// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,u=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return n({},"x",{}),!0}catch(t){return!1}}()?r:function(t,n,r){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(f.call(t,n)||a.call(t,n)?(c=t.__proto__,t.__proto__=e,delete t[n],t[n]=r.value,t.__proto__=c):t[n]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,n,r.get),p&&u&&u.call(t,n,r.set),t};var c=t;function l(t,n,r){c(t,n,{configurable:!1,enumerable:!0,writable:!1,value:r})}function y(t){return t<0?-t:t}var p=Number.POSITIVE_INFINITY,b=Number.NEGATIVE_INFINITY;function v(t){return t===p||t===b}function m(t){return t!=t}var d,s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),A=Object.prototype.toString,_=Object.prototype.hasOwnProperty,w="function"==typeof Symbol?Symbol.toStringTag:"";d=s&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,i;if(null==t)return A.call(t);r=t[w],i=w,n=null!=(o=t)&&_.call(o,i);try{t[w]=void 0}catch(n){return A.call(t)}return e=A.call(t),n?t[w]=r:delete t[w],e}:function(t){return A.call(t)};var h,U=d,g="function"==typeof Uint32Array,j="function"==typeof Uint32Array?Uint32Array:null,N="function"==typeof Uint32Array?Uint32Array:void 0;h=function(){var t,n,r;if("function"!=typeof j)return!1;try{n=new j(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(g&&r instanceof Uint32Array||"[object Uint32Array]"===U(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?N:function(){throw new Error("not implemented")};var S,E=h,F="function"==typeof Float64Array,T="function"==typeof Float64Array?Float64Array:null,I="function"==typeof Float64Array?Float64Array:void 0;S=function(){var t,n,r;if("function"!=typeof T)return!1;try{n=new T([1,3.14,-3.14,NaN]),r=n,t=(F&&r instanceof Float64Array||"[object Float64Array]"===U(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?I:function(){throw new Error("not implemented")};var O,P=S,x="function"==typeof Uint8Array,V="function"==typeof Uint8Array?Uint8Array:null,G="function"==typeof Uint8Array?Uint8Array:void 0;O=function(){var t,n,r;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,256,257]),r=n,t=(x&&r instanceof Uint8Array||"[object Uint8Array]"===U(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?G:function(){throw new Error("not implemented")};var k,q=O,Y="function"==typeof Uint16Array,C="function"==typeof Uint16Array?Uint16Array:null,M="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var t,n,r;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,65536,65537]),r=n,t=(Y&&r instanceof Uint16Array||"[object Uint16Array]"===U(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?M:function(){throw new Error("not implemented")};var z,B={uint16:k,uint8:q};(z=new B.uint16(1))[0]=4660;var D=52===new B.uint8(z.buffer)[0],H=!0===D?1:0,J=new P(1),K=new E(J.buffer);function L(t){return J[0]=t,K[H]}var Q=!0===D?1:0,R=new P(1),W=new E(R.buffer),X=.6931471803691238,Z=1.9082149292705877e-10,$=1048575;function tt(t){var n,r,e,o,i,u,f,a,c,l,y,p;return 0===t?b:m(t)||t<0?NaN:(i=0,(r=L(t))<1048576&&(i-=54,r=L(t*=0x40000000000000)),r>=2146435072?t+t:(i+=(r>>20)-1023|0,i+=(a=614244+(r&=$)&1048576|0)>>20|0,f=(t=function(t,n){return R[0]=t,W[Q]=n>>>0,R[0]}(t,r|1072693248^a))-1,($&2+r)<3?0===f?0===i?0:i*X+i*Z:(u=f*f*(.5-.3333333333333333*f),0===i?f-u:i*X-(u-i*Z-f)):(a=r-398458|0,c=440401-r|0,o=(y=(p=(l=f/(2+f))*l)*p)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(y),e=p*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(y),u=e+o,(a|=c)>0?(n=.5*f*f,0===i?f-(n-l*(n+u)):i*X-(n-(l*(n+u)+i*Z)-f)):0===i?f-l*(f-u):i*X-(l*(f-u)-i*Z-f))))}var nt=Math.sqrt,rt=.96043387010342,et=.397824734759316;function ot(t,n){return(t=y(t))>(n=y(n))?rt*t+et*n:rt*n+et*t}function it(t,n){return t>n?t+(n>>>1):(t>>>1)+n}function ut(t){var n,r;return((r=0|t)^(n=r>>31|0))-n|0}function ft(t,n){return(t=ut(t))>(n=ut(n))?t+(n>>>1):(t>>>1)+n}function at(t,n){return t>n?t+(n>>>2):(t>>>2)+n}function ct(t,n){return(t=ut(t))>(n=ut(n))?t+(n>>>2):(t>>>2)+n}c(ot,"factory",{configurable:!1,enumerable:!1,writable:!1,value:function(t,n,r,e){if(e){if(1===t&&.5===n)return r?it:ft;if(1===t&&.25===n)return r?at:ct}return r?function(t,n){return function(r,e){return r>e?t*r+n*e:n*r+t*e}}(t,n):function(t,n){return function(r,e){return(r=y(r))>(e=y(e))?t*r+n*e:n*r+t*e}}(t,n)}});var lt={};return l(lt,"abs",y),l(lt,"acosh",(function(t){return t<1?NaN:m(t)||v(t)?t:tt(t+nt(t+1)*nt(t-1))})),l(lt,"ampbm",ot),l(lt,"asinh",(function(t){return 0===t||m(t)||v(t)?t:t>0?tt(t+nt(t*t+1)):-tt(-t+nt(t*t+1))})),l(lt,"atanh",(function(t){return 0===t?t:m(t)||v(t)?NaN:.5*tt((1+t)/(1-t))})),l(lt,"hypot",(function(t,n){return nt(t*t+n*n)})),l(lt,"max",(function(t,n){return t>n?t:n})),l(lt,"min",(function(t,n){return t<n?t:n})),l(lt,"powint",(function(t,n){var r;if(m(t))return NaN;if(n<0){if(n=-n,0===t)return t=1/t,1==(1&n)?t:p;t=1/t}else if(0===n)return 1;for(r=1;0!==n;)1==(1&n)&&(r*=t),t*=t,n>>=1;return r})),l(lt,"log2Uint32",(function(t){var n=0,r=t>>>0;return 4294901760&r&&(r>>>=16,n|=16),65280&r&&(r>>>=8,n|=8),240&r&&(r>>>=4,n|=4),12&r&&(r>>>=2,n|=2),2&r&&(r>>>=1,n|=1),n})),l(lt,"sqrtUint32",(function(t){var n,r,e,o;for(o=t>>>0,n=0,r=1073741824;r>o;)r>>>=2;for(;0!==r;)e=n+r>>>0,n>>>=1,t>=e&&(t-=e,n+=r),r>>>=2;return n>>>0})),lt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).fmath=n();
//# sourceMappingURL=index.js.map

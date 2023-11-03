// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,v,"$1e"),n=p.call(n,b,"e"),n=p.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function A(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+A(n):A(n)+r}var E=String.fromCharCode,U=isNaN,x=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function N(r){var e,t,n,a,o,f,l,s,p;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(u(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,U(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,U(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!U(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=U(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function j(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function I(r){return"string"==typeof r}function T(r){var e,t,n;if(!I(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=j(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return N.apply(null,t)}var V,$=Object.prototype,O=$.toString,C=$.__defineGetter__,P=$.__defineSetter__,R=$.__lookupGetter__,G=$.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=$,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&C&&C.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};var Z=V;function W(r,e,t){Z(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}function L(r){return r<0?-r:r}var q=Number.POSITIVE_INFINITY,M=Number.NEGATIVE_INFINITY;function X(r){return r===q||r===M}function Y(r){return r!=r}var z,B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),D=Object.prototype.toString,H=Object.prototype.hasOwnProperty,J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";z=B&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return D.call(r);t=r[K],a=K,e=null!=(i=r)&&H.call(i,a);try{r[K]=void 0}catch(e){return D.call(r)}return n=D.call(r),e?r[K]=t:delete r[K],n}:function(r){return D.call(r)};var Q,rr=z,er="function"==typeof Uint32Array,tr="function"==typeof Uint32Array?Uint32Array:null,nr="function"==typeof Uint32Array?Uint32Array:void 0;Q=function(){var r,e,t;if("function"!=typeof tr)return!1;try{e=new tr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(er&&t instanceof Uint32Array||"[object Uint32Array]"===rr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var ir,ar=Q,or="function"==typeof Float64Array,cr="function"==typeof Float64Array?Float64Array:null,ur="function"==typeof Float64Array?Float64Array:void 0;ir=function(){var r,e,t;if("function"!=typeof cr)return!1;try{e=new cr([1,3.14,-3.14,NaN]),t=e,r=(or&&t instanceof Float64Array||"[object Float64Array]"===rr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr,lr=ir,sr="function"==typeof Uint8Array,pr="function"==typeof Uint8Array?Uint8Array:null,yr="function"==typeof Uint8Array?Uint8Array:void 0;fr=function(){var r,e,t;if("function"!=typeof pr)return!1;try{e=new pr(e=[1,3.14,-3.14,256,257]),t=e,r=(sr&&t instanceof Uint8Array||"[object Uint8Array]"===rr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var gr,dr=fr,hr="function"==typeof Uint16Array,wr="function"==typeof Uint16Array?Uint16Array:null,br="function"==typeof Uint16Array?Uint16Array:void 0;gr=function(){var r,e,t;if("function"!=typeof wr)return!1;try{e=new wr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(hr&&t instanceof Uint16Array||"[object Uint16Array]"===rr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")};var vr,mr={uint16:gr,uint8:dr};(vr=new mr.uint16(1))[0]=4660;var Ar=52===new mr.uint8(vr.buffer)[0],_r=!0===Ar?1:0,Er=new lr(1),Ur=new ar(Er.buffer);function xr(r){return Er[0]=r,Ur[_r]}var Sr=!0===Ar?1:0,Nr=new lr(1),kr=new ar(Nr.buffer),Fr=.6931471803691238,jr=1.9082149292705877e-10,Ir=1048575;function Tr(r){var e,t,n,i,a,o,c,u,f,l,s,p;return 0===r?M:Y(r)||r<0?NaN:(a=0,(t=xr(r))<1048576&&(a-=54,t=xr(r*=0x40000000000000)),t>=2146435072?r+r:(a+=(t>>20)-1023|0,a+=(u=614244+(t&=Ir)&1048576|0)>>20|0,c=(r=function(r,e){return Nr[0]=r,kr[Sr]=e>>>0,Nr[0]}(r,t|1072693248^u))-1,(Ir&2+t)<3?0===c?0===a?0:a*Fr+a*jr:(o=c*c*(.5-.3333333333333333*c),0===a?c-o:a*Fr-(o-a*jr-c)):(u=t-398458|0,f=440401-t|0,i=(s=(p=(l=c/(2+c))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),o=n+i,(u|=f)>0?(e=.5*c*c,0===a?c-(e-l*(e+o)):a*Fr-(e-(l*(e+o)+a*jr)-c)):0===a?c-l*(c-o):a*Fr-(l*(c-o)-a*jr-c))))}var Vr=Math.sqrt,$r=.96043387010342,Or=.397824734759316;function Cr(r,e){return(r=L(r))>(e=L(e))?$r*r+Or*e:$r*e+Or*r}function Pr(r,e){return r>e?r+(e>>>1):(r>>>1)+e}function Rr(r){var e,t;return((t=0|r)^(e=t>>31|0))-e|0}function Gr(r,e){return(r=Rr(r))>(e=Rr(e))?r+(e>>>1):(r>>>1)+e}function Zr(r,e){return r>e?r+(e>>>2):(r>>>2)+e}function Wr(r,e){return(r=Rr(r))>(e=Rr(e))?r+(e>>>2):(r>>>2)+e}Z(Cr,"factory",{configurable:!1,enumerable:!1,writable:!1,value:function(r,e,t,n){if(n){if(1===r&&.5===e)return t?Pr:Gr;if(1===r&&.25===e)return t?Zr:Wr}return t?function(r,e){return function(t,n){return t>n?r*t+e*n:e*t+r*n}}(r,e):function(r,e){return function(t,n){return(t=L(t))>(n=L(n))?r*t+e*n:e*t+r*n}}(r,e)}});var Lr={};return W(Lr,"abs",L),W(Lr,"acosh",(function(r){return r<1?NaN:Y(r)||X(r)?r:Tr(r+Vr(r+1)*Vr(r-1))})),W(Lr,"ampbm",Cr),W(Lr,"asinh",(function(r){return 0===r||Y(r)||X(r)?r:r>0?Tr(r+Vr(r*r+1)):-Tr(-r+Vr(r*r+1))})),W(Lr,"atanh",(function(r){return 0===r?r:Y(r)||X(r)?NaN:.5*Tr((1+r)/(1-r))})),W(Lr,"hypot",(function(r,e){return Vr(r*r+e*e)})),W(Lr,"max",(function(r,e){return r>e?r:e})),W(Lr,"min",(function(r,e){return r<e?r:e})),W(Lr,"powint",(function(r,e){var t;if(Y(r))return NaN;if(e<0){if(e=-e,0===r)return r=1/r,1==(1&e)?r:q;r=1/r}else if(0===e)return 1;for(t=1;0!==e;)1==(1&e)&&(t*=r),r*=r,e>>=1;return t})),W(Lr,"log2Uint32",(function(r){var e=0,t=r>>>0;return 4294901760&t&&(t>>>=16,e|=16),65280&t&&(t>>>=8,e|=8),240&t&&(t>>>=4,e|=4),12&t&&(t>>>=2,e|=2),2&t&&(t>>>=1,e|=1),e})),W(Lr,"sqrtUint32",(function(r){var e,t,n,i;for(i=r>>>0,e=0,t=1073741824;t>i;)t>>>=2;for(;0!==t;)n=e+t>>>0,e>>>=1,r>=n&&(r-=n,e+=t),t>>>=2;return e>>>0})),Lr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).fmath=e();
//# sourceMappingURL=browser.js.map

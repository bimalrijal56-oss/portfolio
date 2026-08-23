(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var b0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ym={exports:{}},Pl={},Mm={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Symbol.for("react.element"),R0=Symbol.for("react.portal"),C0=Symbol.for("react.fragment"),P0=Symbol.for("react.strict_mode"),L0=Symbol.for("react.profiler"),N0=Symbol.for("react.provider"),D0=Symbol.for("react.context"),I0=Symbol.for("react.forward_ref"),U0=Symbol.for("react.suspense"),F0=Symbol.for("react.memo"),O0=Symbol.for("react.lazy"),uh=Symbol.iterator;function k0(t){return t===null||typeof t!="object"?null:(t=uh&&t[uh]||t["@@iterator"],typeof t=="function"?t:null)}var Em={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tm=Object.assign,wm={};function Fs(t,e,n){this.props=t,this.context=e,this.refs=wm,this.updater=n||Em}Fs.prototype.isReactComponent={};Fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Am(){}Am.prototype=Fs.prototype;function Gf(t,e,n){this.props=t,this.context=e,this.refs=wm,this.updater=n||Em}var Wf=Gf.prototype=new Am;Wf.constructor=Gf;Tm(Wf,Fs.prototype);Wf.isPureReactComponent=!0;var ch=Array.isArray,bm=Object.prototype.hasOwnProperty,Xf={current:null},Rm={key:!0,ref:!0,__self:!0,__source:!0};function Cm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)bm.call(e,i)&&!Rm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Oa,type:t,key:s,ref:a,props:r,_owner:Xf.current}}function B0(t,e){return{$$typeof:Oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oa}function z0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fh=/\/+/g;function Jl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?z0(""+t.key):e.toString(36)}function Uo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Oa:case R0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Jl(a,0):i,ch(r)?(n="",t!=null&&(n=t.replace(fh,"$&/")+"/"),Uo(r,e,n,"",function(u){return u})):r!=null&&(Yf(r)&&(r=B0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(fh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",ch(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Jl(s,o);a+=Uo(s,e,n,l,r)}else if(l=k0(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Jl(s,o++),a+=Uo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function $a(t,e,n){if(t==null)return t;var i=[],r=0;return Uo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function V0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tn={current:null},Fo={transition:null},H0={ReactCurrentDispatcher:tn,ReactCurrentBatchConfig:Fo,ReactCurrentOwner:Xf};function Pm(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:$a,forEach:function(t,e,n){$a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $a(t,function(){e++}),e},toArray:function(t){return $a(t,function(e){return e})||[]},only:function(t){if(!Yf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Fs;Xe.Fragment=C0;Xe.Profiler=L0;Xe.PureComponent=Gf;Xe.StrictMode=P0;Xe.Suspense=U0;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H0;Xe.act=Pm;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Tm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Xf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)bm.call(e,l)&&!Rm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Oa,type:t.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(t){return t={$$typeof:D0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:N0,_context:t},t.Consumer=t};Xe.createElement=Cm;Xe.createFactory=function(t){var e=Cm.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:I0,render:t}};Xe.isValidElement=Yf;Xe.lazy=function(t){return{$$typeof:O0,_payload:{_status:-1,_result:t},_init:V0}};Xe.memo=function(t,e){return{$$typeof:F0,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Fo.transition;Fo.transition={};try{t()}finally{Fo.transition=e}};Xe.unstable_act=Pm;Xe.useCallback=function(t,e){return tn.current.useCallback(t,e)};Xe.useContext=function(t){return tn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return tn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return tn.current.useEffect(t,e)};Xe.useId=function(){return tn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return tn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return tn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return tn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return tn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return tn.current.useReducer(t,e,n)};Xe.useRef=function(t){return tn.current.useRef(t)};Xe.useState=function(t){return tn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return tn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return tn.current.useTransition()};Xe.version="18.3.1";Mm.exports=Xe;var ht=Mm.exports;const G0=Sm(ht);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0=ht,X0=Symbol.for("react.element"),Y0=Symbol.for("react.fragment"),q0=Object.prototype.hasOwnProperty,$0=W0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j0={key:!0,ref:!0,__self:!0,__source:!0};function Lm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)q0.call(e,i)&&!j0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:X0,type:t,key:s,ref:a,props:r,_owner:$0.current}}Pl.Fragment=Y0;Pl.jsx=Lm;Pl.jsxs=Lm;ym.exports=Pl;var O=ym.exports,sc={},Nm={exports:{}},Sn={},Dm={exports:{}},Im={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,q){var Q=I.length;I.push(q);e:for(;0<Q;){var re=Q-1>>>1,ae=I[re];if(0<r(ae,q))I[re]=q,I[Q]=ae,Q=re;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var q=I[0],Q=I.pop();if(Q!==q){I[0]=Q;e:for(var re=0,ae=I.length,Fe=ae>>>1;re<Fe;){var Be=2*(re+1)-1,De=I[Be],j=Be+1,ne=I[j];if(0>r(De,Q))j<ae&&0>r(ne,De)?(I[re]=ne,I[j]=Q,re=j):(I[re]=De,I[Be]=Q,re=Be);else if(j<ae&&0>r(ne,Q))I[re]=ne,I[j]=Q,re=j;else break e}}return q}function r(I,q){var Q=I.sortIndex-q.sortIndex;return Q!==0?Q:I.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],h=1,d=null,c=3,p=!1,v=!1,E=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(I){for(var q=n(u);q!==null;){if(q.callback===null)i(u);else if(q.startTime<=I)i(u),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(u)}}function S(I){if(E=!1,y(I),!v)if(n(l)!==null)v=!0,V(w);else{var q=n(u);q!==null&&z(S,q.startTime-I)}}function w(I,q){v=!1,E&&(E=!1,f(m),m=-1),p=!0;var Q=c;try{for(y(q),d=n(l);d!==null&&(!(d.expirationTime>q)||I&&!C());){var re=d.callback;if(typeof re=="function"){d.callback=null,c=d.priorityLevel;var ae=re(d.expirationTime<=q);q=t.unstable_now(),typeof ae=="function"?d.callback=ae:d===n(l)&&i(l),y(q)}else i(l);d=n(l)}if(d!==null)var Fe=!0;else{var Be=n(u);Be!==null&&z(S,Be.startTime-q),Fe=!1}return Fe}finally{d=null,c=Q,p=!1}}var T=!1,b=null,m=-1,A=5,L=-1;function C(){return!(t.unstable_now()-L<A)}function P(){if(b!==null){var I=t.unstable_now();L=I;var q=!0;try{q=b(!0,I)}finally{q?B():(T=!1,b=null)}}else T=!1}var B;if(typeof x=="function")B=function(){x(P)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,F=H.port2;H.port1.onmessage=P,B=function(){F.postMessage(null)}}else B=function(){g(P,0)};function V(I){b=I,T||(T=!0,B())}function z(I,q){m=g(function(){I(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,V(w))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return c},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(c){case 1:case 2:case 3:var q=3;break;default:q=c}var Q=c;c=q;try{return I()}finally{c=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Q=c;c=I;try{return q()}finally{c=Q}},t.unstable_scheduleCallback=function(I,q,Q){var re=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?re+Q:re):Q=re,I){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=Q+ae,I={id:h++,callback:q,priorityLevel:I,startTime:Q,expirationTime:ae,sortIndex:-1},Q>re?(I.sortIndex=Q,e(u,I),n(l)===null&&I===n(u)&&(E?(f(m),m=-1):E=!0,z(S,Q-re))):(I.sortIndex=ae,e(l,I),v||p||(v=!0,V(w))),I},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(I){var q=c;return function(){var Q=c;c=q;try{return I.apply(this,arguments)}finally{c=Q}}}})(Im);Dm.exports=Im;var K0=Dm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0=ht,xn=K0;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Um=new Set,va={};function kr(t,e){ws(t,e),ws(t+"Capture",e)}function ws(t,e){for(va[t]=e,t=0;t<e.length;t++)Um.add(e[t])}var bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ac=Object.prototype.hasOwnProperty,Q0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dh={},hh={};function J0(t){return ac.call(hh,t)?!0:ac.call(dh,t)?!1:Q0.test(t)?hh[t]=!0:(dh[t]=!0,!1)}function e_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function t_(t,e,n,i){if(e===null||typeof e>"u"||e_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new nn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new nn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new nn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new nn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new nn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new nn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new nn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new nn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new nn(t,5,!1,t.toLowerCase(),null,!1,!1)});var qf=/[\-:]([a-z])/g;function $f(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qf,$f);Ht[e]=new nn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qf,$f);Ht[e]=new nn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qf,$f);Ht[e]=new nn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new nn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new nn(t,1,!1,t.toLowerCase(),null,!0,!0)});function jf(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(t_(e,n,r,i)&&(n=null),i||r===null?J0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Di=Z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ja=Symbol.for("react.element"),rs=Symbol.for("react.portal"),ss=Symbol.for("react.fragment"),Kf=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),Fm=Symbol.for("react.provider"),Om=Symbol.for("react.context"),Zf=Symbol.for("react.forward_ref"),lc=Symbol.for("react.suspense"),uc=Symbol.for("react.suspense_list"),Qf=Symbol.for("react.memo"),Xi=Symbol.for("react.lazy"),km=Symbol.for("react.offscreen"),ph=Symbol.iterator;function Vs(t){return t===null||typeof t!="object"?null:(t=ph&&t[ph]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,eu;function na(t){if(eu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);eu=e&&e[1]||""}return`
`+eu+t}var tu=!1;function nu(t,e){if(!t||tu)return"";tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{tu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?na(t):""}function n_(t){switch(t.tag){case 5:return na(t.type);case 16:return na("Lazy");case 13:return na("Suspense");case 19:return na("SuspenseList");case 0:case 2:case 15:return t=nu(t.type,!1),t;case 11:return t=nu(t.type.render,!1),t;case 1:return t=nu(t.type,!0),t;default:return""}}function cc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ss:return"Fragment";case rs:return"Portal";case oc:return"Profiler";case Kf:return"StrictMode";case lc:return"Suspense";case uc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Om:return(t.displayName||"Context")+".Consumer";case Fm:return(t._context.displayName||"Context")+".Provider";case Zf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qf:return e=t.displayName||null,e!==null?e:cc(t.type)||"Memo";case Xi:e=t._payload,t=t._init;try{return cc(t(e))}catch{}}return null}function i_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cc(e);case 8:return e===Kf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function r_(t){var e=Bm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ka(t){t._valueTracker||(t._valueTracker=r_(t))}function zm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Bm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Jo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fc(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Vm(t,e){e=e.checked,e!=null&&jf(t,"checked",e,!1)}function dc(t,e){Vm(t,e);var n=or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hc(t,e.type,n):e.hasOwnProperty("defaultValue")&&hc(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hc(t,e,n){(e!=="number"||Jo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ia=Array.isArray;function gs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function pc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(ia(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function Hm(t,e){var n=or(e.value),i=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function _h(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Za,Wm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function _a(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var la={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s_=["Webkit","ms","Moz","O"];Object.keys(la).forEach(function(t){s_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),la[e]=la[t]})});function Xm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||la.hasOwnProperty(t)&&la[t]?(""+e).trim():e+"px"}function Ym(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Xm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var a_=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gc(t,e){if(e){if(a_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function vc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _c=null;function Jf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xc=null,vs=null,_s=null;function xh(t){if(t=za(t)){if(typeof xc!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Ul(e),xc(t.stateNode,t.type,e))}}function qm(t){vs?_s?_s.push(t):_s=[t]:vs=t}function $m(){if(vs){var t=vs,e=_s;if(_s=vs=null,xh(t),e)for(t=0;t<e.length;t++)xh(e[t])}}function jm(t,e){return t(e)}function Km(){}var iu=!1;function Zm(t,e,n){if(iu)return t(e,n);iu=!0;try{return jm(t,e,n)}finally{iu=!1,(vs!==null||_s!==null)&&(Km(),$m())}}function xa(t,e){var n=t.stateNode;if(n===null)return null;var i=Ul(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Sc=!1;if(bi)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){Sc=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{Sc=!1}function o_(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var ua=!1,el=null,tl=!1,yc=null,l_={onError:function(t){ua=!0,el=t}};function u_(t,e,n,i,r,s,a,o,l){ua=!1,el=null,o_.apply(l_,arguments)}function c_(t,e,n,i,r,s,a,o,l){if(u_.apply(this,arguments),ua){if(ua){var u=el;ua=!1,el=null}else throw Error(se(198));tl||(tl=!0,yc=u)}}function Br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Qm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sh(t){if(Br(t)!==t)throw Error(se(188))}function f_(t){var e=t.alternate;if(!e){if(e=Br(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Sh(r),t;if(s===i)return Sh(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function Jm(t){return t=f_(t),t!==null?eg(t):null}function eg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=eg(t);if(e!==null)return e;t=t.sibling}return null}var tg=xn.unstable_scheduleCallback,yh=xn.unstable_cancelCallback,d_=xn.unstable_shouldYield,h_=xn.unstable_requestPaint,Tt=xn.unstable_now,p_=xn.unstable_getCurrentPriorityLevel,ed=xn.unstable_ImmediatePriority,ng=xn.unstable_UserBlockingPriority,nl=xn.unstable_NormalPriority,m_=xn.unstable_LowPriority,ig=xn.unstable_IdlePriority,Ll=null,ri=null;function g_(t){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(Ll,t,void 0,(t.current.flags&128)===128)}catch{}}var Gn=Math.clz32?Math.clz32:x_,v_=Math.log,__=Math.LN2;function x_(t){return t>>>=0,t===0?32:31-(v_(t)/__|0)|0}var Qa=64,Ja=4194304;function ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function il(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ra(o):(s&=a,s!==0&&(i=ra(s)))}else a=n&~r,a!==0?i=ra(a):s!==0&&(i=ra(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Gn(e),r=1<<n,i|=t[n],e&=~r;return i}function S_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function y_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Gn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=S_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Mc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function rg(){var t=Qa;return Qa<<=1,!(Qa&4194240)&&(Qa=64),t}function ru(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gn(e),t[e]=n}function M_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Gn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function td(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Gn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function sg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ag,nd,og,lg,ug,Ec=!1,eo=[],Ji=null,er=null,tr=null,Sa=new Map,ya=new Map,qi=[],E_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mh(t,e){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":Sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(e.pointerId)}}function Gs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=za(e),e!==null&&nd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function T_(t,e,n,i,r){switch(e){case"focusin":return Ji=Gs(Ji,t,e,n,i,r),!0;case"dragenter":return er=Gs(er,t,e,n,i,r),!0;case"mouseover":return tr=Gs(tr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Sa.set(s,Gs(Sa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ya.set(s,Gs(ya.get(s)||null,t,e,n,i,r)),!0}return!1}function cg(t){var e=Er(t.target);if(e!==null){var n=Br(e);if(n!==null){if(e=n.tag,e===13){if(e=Qm(n),e!==null){t.blockedOn=e,ug(t.priority,function(){og(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);_c=i,n.target.dispatchEvent(i),_c=null}else return e=za(n),e!==null&&nd(e),t.blockedOn=n,!1;e.shift()}return!0}function Eh(t,e,n){Oo(t)&&n.delete(e)}function w_(){Ec=!1,Ji!==null&&Oo(Ji)&&(Ji=null),er!==null&&Oo(er)&&(er=null),tr!==null&&Oo(tr)&&(tr=null),Sa.forEach(Eh),ya.forEach(Eh)}function Ws(t,e){t.blockedOn===e&&(t.blockedOn=null,Ec||(Ec=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,w_)))}function Ma(t){function e(r){return Ws(r,t)}if(0<eo.length){Ws(eo[0],t);for(var n=1;n<eo.length;n++){var i=eo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ji!==null&&Ws(Ji,t),er!==null&&Ws(er,t),tr!==null&&Ws(tr,t),Sa.forEach(e),ya.forEach(e),n=0;n<qi.length;n++)i=qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<qi.length&&(n=qi[0],n.blockedOn===null);)cg(n),n.blockedOn===null&&qi.shift()}var xs=Di.ReactCurrentBatchConfig,rl=!0;function A_(t,e,n,i){var r=it,s=xs.transition;xs.transition=null;try{it=1,id(t,e,n,i)}finally{it=r,xs.transition=s}}function b_(t,e,n,i){var r=it,s=xs.transition;xs.transition=null;try{it=4,id(t,e,n,i)}finally{it=r,xs.transition=s}}function id(t,e,n,i){if(rl){var r=Tc(t,e,n,i);if(r===null)pu(t,e,i,sl,n),Mh(t,i);else if(T_(r,t,e,n,i))i.stopPropagation();else if(Mh(t,i),e&4&&-1<E_.indexOf(t)){for(;r!==null;){var s=za(r);if(s!==null&&ag(s),s=Tc(t,e,n,i),s===null&&pu(t,e,i,sl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else pu(t,e,i,null,n)}}var sl=null;function Tc(t,e,n,i){if(sl=null,t=Jf(i),t=Er(t),t!==null)if(e=Br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Qm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sl=t,null}function fg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(p_()){case ed:return 1;case ng:return 4;case nl:case m_:return 16;case ig:return 536870912;default:return 16}default:return 16}}var Ki=null,rd=null,ko=null;function dg(){if(ko)return ko;var t,e=rd,n=e.length,i,r="value"in Ki?Ki.value:Ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return ko=r.slice(t,1<i?1-i:void 0)}function Bo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function to(){return!0}function Th(){return!1}function yn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?to:Th,this.isPropagationStopped=Th,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),e}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sd=yn(Os),Ba=gt({},Os,{view:0,detail:0}),R_=yn(Ba),su,au,Xs,Nl=gt({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ad,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(su=t.screenX-Xs.screenX,au=t.screenY-Xs.screenY):au=su=0,Xs=t),su)},movementY:function(t){return"movementY"in t?t.movementY:au}}),wh=yn(Nl),C_=gt({},Nl,{dataTransfer:0}),P_=yn(C_),L_=gt({},Ba,{relatedTarget:0}),ou=yn(L_),N_=gt({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),D_=yn(N_),I_=gt({},Os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),U_=yn(I_),F_=gt({},Os,{data:0}),Ah=yn(F_),O_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=B_[t])?!!e[t]:!1}function ad(){return z_}var V_=gt({},Ba,{key:function(t){if(t.key){var e=O_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?k_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ad,charCode:function(t){return t.type==="keypress"?Bo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),H_=yn(V_),G_=gt({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bh=yn(G_),W_=gt({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ad}),X_=yn(W_),Y_=gt({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),q_=yn(Y_),$_=gt({},Nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),j_=yn($_),K_=[9,13,27,32],od=bi&&"CompositionEvent"in window,ca=null;bi&&"documentMode"in document&&(ca=document.documentMode);var Z_=bi&&"TextEvent"in window&&!ca,hg=bi&&(!od||ca&&8<ca&&11>=ca),Rh=" ",Ch=!1;function pg(t,e){switch(t){case"keyup":return K_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function Q_(t,e){switch(t){case"compositionend":return mg(e);case"keypress":return e.which!==32?null:(Ch=!0,Rh);case"textInput":return t=e.data,t===Rh&&Ch?null:t;default:return null}}function J_(t,e){if(as)return t==="compositionend"||!od&&pg(t,e)?(t=dg(),ko=rd=Ki=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hg&&e.locale!=="ko"?null:e.data;default:return null}}var ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ph(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ex[t.type]:e==="textarea"}function gg(t,e,n,i){qm(i),e=al(e,"onChange"),0<e.length&&(n=new sd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var fa=null,Ea=null;function tx(t){bg(t,0)}function Dl(t){var e=us(t);if(zm(e))return t}function nx(t,e){if(t==="change")return e}var vg=!1;if(bi){var lu;if(bi){var uu="oninput"in document;if(!uu){var Lh=document.createElement("div");Lh.setAttribute("oninput","return;"),uu=typeof Lh.oninput=="function"}lu=uu}else lu=!1;vg=lu&&(!document.documentMode||9<document.documentMode)}function Nh(){fa&&(fa.detachEvent("onpropertychange",_g),Ea=fa=null)}function _g(t){if(t.propertyName==="value"&&Dl(Ea)){var e=[];gg(e,Ea,t,Jf(t)),Zm(tx,e)}}function ix(t,e,n){t==="focusin"?(Nh(),fa=e,Ea=n,fa.attachEvent("onpropertychange",_g)):t==="focusout"&&Nh()}function rx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dl(Ea)}function sx(t,e){if(t==="click")return Dl(e)}function ax(t,e){if(t==="input"||t==="change")return Dl(e)}function ox(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xn=typeof Object.is=="function"?Object.is:ox;function Ta(t,e){if(Xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ac.call(e,r)||!Xn(t[r],e[r]))return!1}return!0}function Dh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ih(t,e){var n=Dh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dh(n)}}function xg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sg(){for(var t=window,e=Jo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Jo(t.document)}return e}function ld(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lx(t){var e=Sg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xg(n.ownerDocument.documentElement,n)){if(i!==null&&ld(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ih(n,s);var a=Ih(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ux=bi&&"documentMode"in document&&11>=document.documentMode,os=null,wc=null,da=null,Ac=!1;function Uh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ac||os==null||os!==Jo(i)||(i=os,"selectionStart"in i&&ld(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),da&&Ta(da,i)||(da=i,i=al(wc,"onSelect"),0<i.length&&(e=new sd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=os)))}function no(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ls={animationend:no("Animation","AnimationEnd"),animationiteration:no("Animation","AnimationIteration"),animationstart:no("Animation","AnimationStart"),transitionend:no("Transition","TransitionEnd")},cu={},yg={};bi&&(yg=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function Il(t){if(cu[t])return cu[t];if(!ls[t])return t;var e=ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yg)return cu[t]=e[n];return t}var Mg=Il("animationend"),Eg=Il("animationiteration"),Tg=Il("animationstart"),wg=Il("transitionend"),Ag=new Map,Fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,e){Ag.set(t,e),kr(e,[t])}for(var fu=0;fu<Fh.length;fu++){var du=Fh[fu],cx=du.toLowerCase(),fx=du[0].toUpperCase()+du.slice(1);cr(cx,"on"+fx)}cr(Mg,"onAnimationEnd");cr(Eg,"onAnimationIteration");cr(Tg,"onAnimationStart");cr("dblclick","onDoubleClick");cr("focusin","onFocus");cr("focusout","onBlur");cr(wg,"onTransitionEnd");ws("onMouseEnter",["mouseout","mouseover"]);ws("onMouseLeave",["mouseout","mouseover"]);ws("onPointerEnter",["pointerout","pointerover"]);ws("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dx=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Oh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,c_(i,e,void 0,t),t.currentTarget=null}function bg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Oh(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Oh(r,o,u),s=l}}}if(tl)throw t=yc,tl=!1,yc=null,t}function ct(t,e){var n=e[Lc];n===void 0&&(n=e[Lc]=new Set);var i=t+"__bubble";n.has(i)||(Rg(e,t,2,!1),n.add(i))}function hu(t,e,n){var i=0;e&&(i|=4),Rg(n,t,i,e)}var io="_reactListening"+Math.random().toString(36).slice(2);function wa(t){if(!t[io]){t[io]=!0,Um.forEach(function(n){n!=="selectionchange"&&(dx.has(n)||hu(n,!1,t),hu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[io]||(e[io]=!0,hu("selectionchange",!1,e))}}function Rg(t,e,n,i){switch(fg(e)){case 1:var r=A_;break;case 4:r=b_;break;default:r=id}n=r.bind(null,e,n,t),r=void 0,!Sc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function pu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Er(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Zm(function(){var u=s,h=Jf(n),d=[];e:{var c=Ag.get(t);if(c!==void 0){var p=sd,v=t;switch(t){case"keypress":if(Bo(n)===0)break e;case"keydown":case"keyup":p=H_;break;case"focusin":v="focus",p=ou;break;case"focusout":v="blur",p=ou;break;case"beforeblur":case"afterblur":p=ou;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=P_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=X_;break;case Mg:case Eg:case Tg:p=D_;break;case wg:p=q_;break;case"scroll":p=R_;break;case"wheel":p=j_;break;case"copy":case"cut":case"paste":p=U_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=bh}var E=(e&4)!==0,g=!E&&t==="scroll",f=E?c!==null?c+"Capture":null:c;E=[];for(var x=u,y;x!==null;){y=x;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,f!==null&&(S=xa(x,f),S!=null&&E.push(Aa(x,S,y)))),g)break;x=x.return}0<E.length&&(c=new p(c,v,null,n,h),d.push({event:c,listeners:E}))}}if(!(e&7)){e:{if(c=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",c&&n!==_c&&(v=n.relatedTarget||n.fromElement)&&(Er(v)||v[Ri]))break e;if((p||c)&&(c=h.window===h?h:(c=h.ownerDocument)?c.defaultView||c.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?Er(v):null,v!==null&&(g=Br(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(E=wh,S="onMouseLeave",f="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(E=bh,S="onPointerLeave",f="onPointerEnter",x="pointer"),g=p==null?c:us(p),y=v==null?c:us(v),c=new E(S,x+"leave",p,n,h),c.target=g,c.relatedTarget=y,S=null,Er(h)===u&&(E=new E(f,x+"enter",v,n,h),E.target=y,E.relatedTarget=g,S=E),g=S,p&&v)t:{for(E=p,f=v,x=0,y=E;y;y=Gr(y))x++;for(y=0,S=f;S;S=Gr(S))y++;for(;0<x-y;)E=Gr(E),x--;for(;0<y-x;)f=Gr(f),y--;for(;x--;){if(E===f||f!==null&&E===f.alternate)break t;E=Gr(E),f=Gr(f)}E=null}else E=null;p!==null&&kh(d,c,p,E,!1),v!==null&&g!==null&&kh(d,g,v,E,!0)}}e:{if(c=u?us(u):window,p=c.nodeName&&c.nodeName.toLowerCase(),p==="select"||p==="input"&&c.type==="file")var w=nx;else if(Ph(c))if(vg)w=ax;else{w=rx;var T=ix}else(p=c.nodeName)&&p.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(w=sx);if(w&&(w=w(t,u))){gg(d,w,n,h);break e}T&&T(t,c,u),t==="focusout"&&(T=c._wrapperState)&&T.controlled&&c.type==="number"&&hc(c,"number",c.value)}switch(T=u?us(u):window,t){case"focusin":(Ph(T)||T.contentEditable==="true")&&(os=T,wc=u,da=null);break;case"focusout":da=wc=os=null;break;case"mousedown":Ac=!0;break;case"contextmenu":case"mouseup":case"dragend":Ac=!1,Uh(d,n,h);break;case"selectionchange":if(ux)break;case"keydown":case"keyup":Uh(d,n,h)}var b;if(od)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else as?pg(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(hg&&n.locale!=="ko"&&(as||m!=="onCompositionStart"?m==="onCompositionEnd"&&as&&(b=dg()):(Ki=h,rd="value"in Ki?Ki.value:Ki.textContent,as=!0)),T=al(u,m),0<T.length&&(m=new Ah(m,t,null,n,h),d.push({event:m,listeners:T}),b?m.data=b:(b=mg(n),b!==null&&(m.data=b)))),(b=Z_?Q_(t,n):J_(t,n))&&(u=al(u,"onBeforeInput"),0<u.length&&(h=new Ah("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=b))}bg(d,e)})}function Aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function al(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=xa(t,n),s!=null&&i.unshift(Aa(t,s,r)),s=xa(t,e),s!=null&&i.push(Aa(t,s,r))),t=t.return}return i}function Gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=xa(n,s),l!=null&&a.unshift(Aa(n,l,o))):r||(l=xa(n,s),l!=null&&a.push(Aa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var hx=/\r\n?/g,px=/\u0000|\uFFFD/g;function Bh(t){return(typeof t=="string"?t:""+t).replace(hx,`
`).replace(px,"")}function ro(t,e,n){if(e=Bh(e),Bh(t)!==e&&n)throw Error(se(425))}function ol(){}var bc=null,Rc=null;function Cc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pc=typeof setTimeout=="function"?setTimeout:void 0,mx=typeof clearTimeout=="function"?clearTimeout:void 0,zh=typeof Promise=="function"?Promise:void 0,gx=typeof queueMicrotask=="function"?queueMicrotask:typeof zh<"u"?function(t){return zh.resolve(null).then(t).catch(vx)}:Pc;function vx(t){setTimeout(function(){throw t})}function mu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ma(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ma(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),ti="__reactFiber$"+ks,ba="__reactProps$"+ks,Ri="__reactContainer$"+ks,Lc="__reactEvents$"+ks,_x="__reactListeners$"+ks,xx="__reactHandles$"+ks;function Er(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ri]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Vh(t);t!==null;){if(n=t[ti])return n;t=Vh(t)}return e}t=n,n=t.parentNode}return null}function za(t){return t=t[ti]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Ul(t){return t[ba]||null}var Nc=[],cs=-1;function fr(t){return{current:t}}function ft(t){0>cs||(t.current=Nc[cs],Nc[cs]=null,cs--)}function ut(t,e){cs++,Nc[cs]=t.current,t.current=e}var lr={},Kt=fr(lr),ln=fr(!1),Pr=lr;function As(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function ll(){ft(ln),ft(Kt)}function Hh(t,e,n){if(Kt.current!==lr)throw Error(se(168));ut(Kt,e),ut(ln,n)}function Cg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,i_(t)||"Unknown",r));return gt({},n,i)}function ul(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Pr=Kt.current,ut(Kt,t),ut(ln,ln.current),!0}function Gh(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Cg(t,e,Pr),i.__reactInternalMemoizedMergedChildContext=t,ft(ln),ft(Kt),ut(Kt,t)):ft(ln),ut(ln,n)}var _i=null,Fl=!1,gu=!1;function Pg(t){_i===null?_i=[t]:_i.push(t)}function Sx(t){Fl=!0,Pg(t)}function dr(){if(!gu&&_i!==null){gu=!0;var t=0,e=it;try{var n=_i;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}_i=null,Fl=!1}catch(r){throw _i!==null&&(_i=_i.slice(t+1)),tg(ed,dr),r}finally{it=e,gu=!1}}return null}var fs=[],ds=0,cl=null,fl=0,wn=[],An=0,Lr=null,Si=1,yi="";function _r(t,e){fs[ds++]=fl,fs[ds++]=cl,cl=t,fl=e}function Lg(t,e,n){wn[An++]=Si,wn[An++]=yi,wn[An++]=Lr,Lr=t;var i=Si;t=yi;var r=32-Gn(i)-1;i&=~(1<<r),n+=1;var s=32-Gn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Si=1<<32-Gn(e)+r|n<<r|i,yi=s+t}else Si=1<<s|n<<r|i,yi=t}function ud(t){t.return!==null&&(_r(t,1),Lg(t,1,0))}function cd(t){for(;t===cl;)cl=fs[--ds],fs[ds]=null,fl=fs[--ds],fs[ds]=null;for(;t===Lr;)Lr=wn[--An],wn[An]=null,yi=wn[--An],wn[An]=null,Si=wn[--An],wn[An]=null}var vn=null,gn=null,dt=!1,Bn=null;function Ng(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,gn=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:Si,overflow:yi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,gn=null,!0):!1;default:return!1}}function Dc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ic(t){if(dt){var e=gn;if(e){var n=e;if(!Wh(t,e)){if(Dc(t))throw Error(se(418));e=nr(n.nextSibling);var i=vn;e&&Wh(t,e)?Ng(i,n):(t.flags=t.flags&-4097|2,dt=!1,vn=t)}}else{if(Dc(t))throw Error(se(418));t.flags=t.flags&-4097|2,dt=!1,vn=t}}}function Xh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function so(t){if(t!==vn)return!1;if(!dt)return Xh(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cc(t.type,t.memoizedProps)),e&&(e=gn)){if(Dc(t))throw Dg(),Error(se(418));for(;e;)Ng(t,e),e=nr(e.nextSibling)}if(Xh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=vn?nr(t.stateNode.nextSibling):null;return!0}function Dg(){for(var t=gn;t;)t=nr(t.nextSibling)}function bs(){gn=vn=null,dt=!1}function fd(t){Bn===null?Bn=[t]:Bn.push(t)}var yx=Di.ReactCurrentBatchConfig;function Ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function ao(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Yh(t){var e=t._init;return e(t._payload)}function Ig(t){function e(f,x){if(t){var y=f.deletions;y===null?(f.deletions=[x],f.flags|=16):y.push(x)}}function n(f,x){if(!t)return null;for(;x!==null;)e(f,x),x=x.sibling;return null}function i(f,x){for(f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function r(f,x){return f=ar(f,x),f.index=0,f.sibling=null,f}function s(f,x,y){return f.index=y,t?(y=f.alternate,y!==null?(y=y.index,y<x?(f.flags|=2,x):y):(f.flags|=2,x)):(f.flags|=1048576,x)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,x,y,S){return x===null||x.tag!==6?(x=Eu(y,f.mode,S),x.return=f,x):(x=r(x,y),x.return=f,x)}function l(f,x,y,S){var w=y.type;return w===ss?h(f,x,y.props.children,S,y.key):x!==null&&(x.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Xi&&Yh(w)===x.type)?(S=r(x,y.props),S.ref=Ys(f,x,y),S.return=f,S):(S=Yo(y.type,y.key,y.props,null,f.mode,S),S.ref=Ys(f,x,y),S.return=f,S)}function u(f,x,y,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=Tu(y,f.mode,S),x.return=f,x):(x=r(x,y.children||[]),x.return=f,x)}function h(f,x,y,S,w){return x===null||x.tag!==7?(x=Cr(y,f.mode,S,w),x.return=f,x):(x=r(x,y),x.return=f,x)}function d(f,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Eu(""+x,f.mode,y),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ja:return y=Yo(x.type,x.key,x.props,null,f.mode,y),y.ref=Ys(f,null,x),y.return=f,y;case rs:return x=Tu(x,f.mode,y),x.return=f,x;case Xi:var S=x._init;return d(f,S(x._payload),y)}if(ia(x)||Vs(x))return x=Cr(x,f.mode,y,null),x.return=f,x;ao(f,x)}return null}function c(f,x,y,S){var w=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return w!==null?null:o(f,x,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ja:return y.key===w?l(f,x,y,S):null;case rs:return y.key===w?u(f,x,y,S):null;case Xi:return w=y._init,c(f,x,w(y._payload),S)}if(ia(y)||Vs(y))return w!==null?null:h(f,x,y,S,null);ao(f,y)}return null}function p(f,x,y,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(y)||null,o(x,f,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ja:return f=f.get(S.key===null?y:S.key)||null,l(x,f,S,w);case rs:return f=f.get(S.key===null?y:S.key)||null,u(x,f,S,w);case Xi:var T=S._init;return p(f,x,y,T(S._payload),w)}if(ia(S)||Vs(S))return f=f.get(y)||null,h(x,f,S,w,null);ao(x,S)}return null}function v(f,x,y,S){for(var w=null,T=null,b=x,m=x=0,A=null;b!==null&&m<y.length;m++){b.index>m?(A=b,b=null):A=b.sibling;var L=c(f,b,y[m],S);if(L===null){b===null&&(b=A);break}t&&b&&L.alternate===null&&e(f,b),x=s(L,x,m),T===null?w=L:T.sibling=L,T=L,b=A}if(m===y.length)return n(f,b),dt&&_r(f,m),w;if(b===null){for(;m<y.length;m++)b=d(f,y[m],S),b!==null&&(x=s(b,x,m),T===null?w=b:T.sibling=b,T=b);return dt&&_r(f,m),w}for(b=i(f,b);m<y.length;m++)A=p(b,f,m,y[m],S),A!==null&&(t&&A.alternate!==null&&b.delete(A.key===null?m:A.key),x=s(A,x,m),T===null?w=A:T.sibling=A,T=A);return t&&b.forEach(function(C){return e(f,C)}),dt&&_r(f,m),w}function E(f,x,y,S){var w=Vs(y);if(typeof w!="function")throw Error(se(150));if(y=w.call(y),y==null)throw Error(se(151));for(var T=w=null,b=x,m=x=0,A=null,L=y.next();b!==null&&!L.done;m++,L=y.next()){b.index>m?(A=b,b=null):A=b.sibling;var C=c(f,b,L.value,S);if(C===null){b===null&&(b=A);break}t&&b&&C.alternate===null&&e(f,b),x=s(C,x,m),T===null?w=C:T.sibling=C,T=C,b=A}if(L.done)return n(f,b),dt&&_r(f,m),w;if(b===null){for(;!L.done;m++,L=y.next())L=d(f,L.value,S),L!==null&&(x=s(L,x,m),T===null?w=L:T.sibling=L,T=L);return dt&&_r(f,m),w}for(b=i(f,b);!L.done;m++,L=y.next())L=p(b,f,m,L.value,S),L!==null&&(t&&L.alternate!==null&&b.delete(L.key===null?m:L.key),x=s(L,x,m),T===null?w=L:T.sibling=L,T=L);return t&&b.forEach(function(P){return e(f,P)}),dt&&_r(f,m),w}function g(f,x,y,S){if(typeof y=="object"&&y!==null&&y.type===ss&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ja:e:{for(var w=y.key,T=x;T!==null;){if(T.key===w){if(w=y.type,w===ss){if(T.tag===7){n(f,T.sibling),x=r(T,y.props.children),x.return=f,f=x;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Xi&&Yh(w)===T.type){n(f,T.sibling),x=r(T,y.props),x.ref=Ys(f,T,y),x.return=f,f=x;break e}n(f,T);break}else e(f,T);T=T.sibling}y.type===ss?(x=Cr(y.props.children,f.mode,S,y.key),x.return=f,f=x):(S=Yo(y.type,y.key,y.props,null,f.mode,S),S.ref=Ys(f,x,y),S.return=f,f=S)}return a(f);case rs:e:{for(T=y.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){n(f,x.sibling),x=r(x,y.children||[]),x.return=f,f=x;break e}else{n(f,x);break}else e(f,x);x=x.sibling}x=Tu(y,f.mode,S),x.return=f,f=x}return a(f);case Xi:return T=y._init,g(f,x,T(y._payload),S)}if(ia(y))return v(f,x,y,S);if(Vs(y))return E(f,x,y,S);ao(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(n(f,x.sibling),x=r(x,y),x.return=f,f=x):(n(f,x),x=Eu(y,f.mode,S),x.return=f,f=x),a(f)):n(f,x)}return g}var Rs=Ig(!0),Ug=Ig(!1),dl=fr(null),hl=null,hs=null,dd=null;function hd(){dd=hs=hl=null}function pd(t){var e=dl.current;ft(dl),t._currentValue=e}function Uc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ss(t,e){hl=t,dd=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(on=!0),t.firstContext=null)}function Ln(t){var e=t._currentValue;if(dd!==t)if(t={context:t,memoizedValue:e,next:null},hs===null){if(hl===null)throw Error(se(308));hs=t,hl.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return e}var Tr=null;function md(t){Tr===null?Tr=[t]:Tr.push(t)}function Fg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,md(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yi=!1;function gd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Og(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,md(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function zo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,td(t,n)}}function qh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pl(t,e,n,i){var r=t.updateQueue;Yi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,h=u=l=null,o=s;do{var c=o.lane,p=o.eventTime;if((i&c)===c){h!==null&&(h=h.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,E=o;switch(c=e,p=n,E.tag){case 1:if(v=E.payload,typeof v=="function"){d=v.call(p,d,c);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,c=typeof v=="function"?v.call(p,d,c):v,c==null)break e;d=gt({},d,c);break e;case 2:Yi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,c=r.effects,c===null?r.effects=[o]:c.push(o))}else p={eventTime:p,lane:c,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=p,l=d):h=h.next=p,a|=c;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;c=o,o=c.next,c.next=null,r.lastBaseUpdate=c,r.shared.pending=null}}while(!0);if(h===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Dr|=a,t.lanes=a,t.memoizedState=d}}function $h(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Va={},si=fr(Va),Ra=fr(Va),Ca=fr(Va);function wr(t){if(t===Va)throw Error(se(174));return t}function vd(t,e){switch(ut(Ca,e),ut(Ra,t),ut(si,Va),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mc(e,t)}ft(si),ut(si,e)}function Cs(){ft(si),ft(Ra),ft(Ca)}function kg(t){wr(Ca.current);var e=wr(si.current),n=mc(e,t.type);e!==n&&(ut(Ra,t),ut(si,n))}function _d(t){Ra.current===t&&(ft(si),ft(Ra))}var pt=fr(0);function ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vu=[];function xd(){for(var t=0;t<vu.length;t++)vu[t]._workInProgressVersionPrimary=null;vu.length=0}var Vo=Di.ReactCurrentDispatcher,_u=Di.ReactCurrentBatchConfig,Nr=0,mt=null,Pt=null,Ft=null,gl=!1,ha=!1,Pa=0,Mx=0;function Wt(){throw Error(se(321))}function Sd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xn(t[n],e[n]))return!1;return!0}function yd(t,e,n,i,r,s){if(Nr=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vo.current=t===null||t.memoizedState===null?Ax:bx,t=n(i,r),ha){s=0;do{if(ha=!1,Pa=0,25<=s)throw Error(se(301));s+=1,Ft=Pt=null,e.updateQueue=null,Vo.current=Rx,t=n(i,r)}while(ha)}if(Vo.current=vl,e=Pt!==null&&Pt.next!==null,Nr=0,Ft=Pt=mt=null,gl=!1,e)throw Error(se(300));return t}function Md(){var t=Pa!==0;return Pa=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?mt.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function Nn(){if(Pt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=Ft===null?mt.memoizedState:Ft.next;if(e!==null)Ft=e,Pt=t;else{if(t===null)throw Error(se(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Ft===null?mt.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function La(t,e){return typeof e=="function"?e(t):e}function xu(t){var e=Nn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Pt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var h=u.lane;if((Nr&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,mt.lanes|=h,Dr|=h}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Xn(i,e.memoizedState)||(on=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,Dr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Su(t){var e=Nn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Xn(s,e.memoizedState)||(on=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Bg(){}function zg(t,e){var n=mt,i=Nn(),r=e(),s=!Xn(i.memoizedState,r);if(s&&(i.memoizedState=r,on=!0),i=i.queue,Ed(Gg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,Na(9,Hg.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(se(349));Nr&30||Vg(n,e,r)}return r}function Vg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Hg(t,e,n,i){e.value=n,e.getSnapshot=i,Wg(e)&&Xg(t)}function Gg(t,e,n){return n(function(){Wg(e)&&Xg(t)})}function Wg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xn(t,n)}catch{return!0}}function Xg(t){var e=Ci(t,1);e!==null&&Wn(e,t,1,-1)}function jh(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:t},e.queue=t,t=t.dispatch=wx.bind(null,mt,t),[e.memoizedState,t]}function Na(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Yg(){return Nn().memoizedState}function Ho(t,e,n,i){var r=Jn();mt.flags|=t,r.memoizedState=Na(1|e,n,void 0,i===void 0?null:i)}function Ol(t,e,n,i){var r=Nn();i=i===void 0?null:i;var s=void 0;if(Pt!==null){var a=Pt.memoizedState;if(s=a.destroy,i!==null&&Sd(i,a.deps)){r.memoizedState=Na(e,n,s,i);return}}mt.flags|=t,r.memoizedState=Na(1|e,n,s,i)}function Kh(t,e){return Ho(8390656,8,t,e)}function Ed(t,e){return Ol(2048,8,t,e)}function qg(t,e){return Ol(4,2,t,e)}function $g(t,e){return Ol(4,4,t,e)}function jg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Kg(t,e,n){return n=n!=null?n.concat([t]):null,Ol(4,4,jg.bind(null,e,t),n)}function Td(){}function Zg(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Qg(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Jg(t,e,n){return Nr&21?(Xn(n,e)||(n=rg(),mt.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,on=!0),t.memoizedState=n)}function Ex(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=_u.transition;_u.transition={};try{t(!1),e()}finally{it=n,_u.transition=i}}function ev(){return Nn().memoizedState}function Tx(t,e,n){var i=sr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},tv(t))nv(e,n);else if(n=Fg(t,e,n,i),n!==null){var r=Jt();Wn(n,t,i,r),iv(n,e,i)}}function wx(t,e,n){var i=sr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(tv(t))nv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Xn(o,a)){var l=e.interleaved;l===null?(r.next=r,md(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Fg(t,e,r,i),n!==null&&(r=Jt(),Wn(n,t,i,r),iv(n,e,i))}}function tv(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function nv(t,e){ha=gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function iv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,td(t,n)}}var vl={readContext:Ln,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},Ax={readContext:Ln,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:Ln,useEffect:Kh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ho(4194308,4,jg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ho(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ho(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Tx.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:jh,useDebugValue:Td,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=jh(!1),e=t[0];return t=Ex.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=Jn();if(dt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Ot===null)throw Error(se(349));Nr&30||Vg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Kh(Gg.bind(null,i,s,t),[t]),i.flags|=2048,Na(9,Hg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Jn(),e=Ot.identifierPrefix;if(dt){var n=yi,i=Si;n=(i&~(1<<32-Gn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Mx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bx={readContext:Ln,useCallback:Zg,useContext:Ln,useEffect:Ed,useImperativeHandle:Kg,useInsertionEffect:qg,useLayoutEffect:$g,useMemo:Qg,useReducer:xu,useRef:Yg,useState:function(){return xu(La)},useDebugValue:Td,useDeferredValue:function(t){var e=Nn();return Jg(e,Pt.memoizedState,t)},useTransition:function(){var t=xu(La)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:Bg,useSyncExternalStore:zg,useId:ev,unstable_isNewReconciler:!1},Rx={readContext:Ln,useCallback:Zg,useContext:Ln,useEffect:Ed,useImperativeHandle:Kg,useInsertionEffect:qg,useLayoutEffect:$g,useMemo:Qg,useReducer:Su,useRef:Yg,useState:function(){return Su(La)},useDebugValue:Td,useDeferredValue:function(t){var e=Nn();return Pt===null?e.memoizedState=t:Jg(e,Pt.memoizedState,t)},useTransition:function(){var t=Su(La)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:Bg,useSyncExternalStore:zg,useId:ev,unstable_isNewReconciler:!1};function On(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Fc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kl={isMounted:function(t){return(t=t._reactInternals)?Br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=sr(t),s=Ei(i,r);s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(Wn(e,t,r,i),zo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=sr(t),s=Ei(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(Wn(e,t,r,i),zo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Jt(),i=sr(t),r=Ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=ir(t,r,i),e!==null&&(Wn(e,t,i,n),zo(e,t,i))}};function Zh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ta(n,i)||!Ta(r,s):!0}function rv(t,e,n){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ln(s):(r=un(e)?Pr:Kt.current,i=e.contextTypes,s=(i=i!=null)?As(t,r):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&kl.enqueueReplaceState(e,e.state,null)}function Oc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},gd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ln(s):(s=un(e)?Pr:Kt.current,r.context=As(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Fc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&kl.enqueueReplaceState(r,r.state,null),pl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ps(t,e){try{var n="",i=e;do n+=n_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function yu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function kc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Cx=typeof WeakMap=="function"?WeakMap:Map;function sv(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){xl||(xl=!0,$c=i),kc(t,e)},n}function av(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){kc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){kc(t,e),typeof i!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Jh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Cx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Gx.bind(null,t,e,n),e.then(t,t))}function ep(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var Px=Di.ReactCurrentOwner,on=!1;function Qt(t,e,n,i){e.child=t===null?Ug(e,null,n,i):Rs(e,t.child,n,i)}function np(t,e,n,i,r){n=n.render;var s=e.ref;return Ss(e,r),i=yd(t,e,n,i,s,r),n=Md(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(dt&&n&&ud(e),e.flags|=1,Qt(t,e,i,r),e.child)}function ip(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Nd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ov(t,e,s,i,r)):(t=Yo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ta,n(a,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=ar(s,i),t.ref=e.ref,t.return=e,e.child=t}function ov(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ta(s,i)&&t.ref===e.ref)if(on=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(on=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return Bc(t,e,n,i,r)}function lv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(ms,mn),mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(ms,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(ms,mn),mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(ms,mn),mn|=i;return Qt(t,e,r,n),e.child}function uv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bc(t,e,n,i,r){var s=un(n)?Pr:Kt.current;return s=As(e,s),Ss(e,r),n=yd(t,e,n,i,s,r),i=Md(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(dt&&i&&ud(e),e.flags|=1,Qt(t,e,n,r),e.child)}function rp(t,e,n,i,r){if(un(n)){var s=!0;ul(e)}else s=!1;if(Ss(e,r),e.stateNode===null)Go(t,e),rv(e,n,i),Oc(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ln(u):(u=un(n)?Pr:Kt.current,u=As(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Qh(e,a,i,u),Yi=!1;var c=e.memoizedState;a.state=c,pl(e,i,a,r),l=e.memoizedState,o!==i||c!==l||ln.current||Yi?(typeof h=="function"&&(Fc(e,n,h,i),l=e.memoizedState),(o=Yi||Zh(e,n,o,i,c,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Og(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:On(e.type,o),a.props=u,d=e.pendingProps,c=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ln(l):(l=un(n)?Pr:Kt.current,l=As(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||c!==l)&&Qh(e,a,i,l),Yi=!1,c=e.memoizedState,a.state=c,pl(e,i,a,r);var v=e.memoizedState;o!==d||c!==v||ln.current||Yi?(typeof p=="function"&&(Fc(e,n,p,i),v=e.memoizedState),(u=Yi||Zh(e,n,u,i,c,v,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),i=!1)}return zc(t,e,n,i,s,r)}function zc(t,e,n,i,r,s){uv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Gh(e,n,!1),Pi(t,e,s);i=e.stateNode,Px.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Rs(e,t.child,null,s),e.child=Rs(e,null,o,s)):Qt(t,e,o,s),e.memoizedState=i.state,r&&Gh(e,n,!0),e.child}function cv(t){var e=t.stateNode;e.pendingContext?Hh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hh(t,e.context,!1),vd(t,e.containerInfo)}function sp(t,e,n,i,r){return bs(),fd(r),e.flags|=256,Qt(t,e,n,i),e.child}var Vc={dehydrated:null,treeContext:null,retryLane:0};function Hc(t){return{baseLanes:t,cachePool:null,transitions:null}}function fv(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(pt,r&1),t===null)return Ic(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Vl(a,i,0,null),t=Cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hc(n),e.memoizedState=Vc,t):wd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Lx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ar(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ar(o,s):(s=Cr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Hc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Vc,i}return s=t.child,t=s.sibling,i=ar(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function wd(t,e){return e=Vl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function oo(t,e,n,i){return i!==null&&fd(i),Rs(e,t.child,null,n),t=wd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Lx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=yu(Error(se(422))),oo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Vl({mode:"visible",children:i.children},r,0,null),s=Cr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Rs(e,t.child,null,a),e.child.memoizedState=Hc(a),e.memoizedState=Vc,s);if(!(e.mode&1))return oo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(se(419)),i=yu(s,i,void 0),oo(t,e,a,i)}if(o=(a&t.childLanes)!==0,on||o){if(i=Ot,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ci(t,r),Wn(i,t,r,-1))}return Ld(),i=yu(Error(se(421))),oo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Wx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,gn=nr(r.nextSibling),vn=e,dt=!0,Bn=null,t!==null&&(wn[An++]=Si,wn[An++]=yi,wn[An++]=Lr,Si=t.id,yi=t.overflow,Lr=e),e=wd(e,i.children),e.flags|=4096,e)}function ap(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Uc(t.return,e,n)}function Mu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function dv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Qt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ap(t,n,e);else if(t.tag===19)ap(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ml(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Mu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ml(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Mu(e,!0,n,null,s);break;case"together":Mu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Go(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Nx(t,e,n){switch(e.tag){case 3:cv(e),bs();break;case 5:kg(e);break;case 1:un(e.type)&&ul(e);break;case 4:vd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(dl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?fv(t,e,n):(ut(pt,pt.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);ut(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return dv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,lv(t,e,n)}return Pi(t,e,n)}var hv,Gc,pv,mv;hv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gc=function(){};pv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,wr(si.current);var s=null;switch(n){case"input":r=fc(t,r),i=fc(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=pc(t,r),i=pc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ol)}gc(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(va.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(va.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ct("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};mv=function(t,e,n,i){n!==i&&(e.flags|=4)};function qs(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Dx(t,e,n){var i=e.pendingProps;switch(cd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return un(e.type)&&ll(),Xt(e),null;case 3:return i=e.stateNode,Cs(),ft(ln),ft(Kt),xd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(so(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bn!==null&&(Zc(Bn),Bn=null))),Gc(t,e),Xt(e),null;case 5:_d(e);var r=wr(Ca.current);if(n=e.type,t!==null&&e.stateNode!=null)pv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Xt(e),null}if(t=wr(si.current),so(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ti]=e,i[ba]=s,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<sa.length;r++)ct(sa[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":mh(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":vh(i,s),ct("invalid",i)}gc(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ro(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ro(i.textContent,o,t),r=["children",""+o]):va.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ct("scroll",i)}switch(n){case"input":Ka(i),gh(i,s,!0);break;case"textarea":Ka(i),_h(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ol)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ti]=e,t[ba]=i,hv(t,e,!1,!1),e.stateNode=t;e:{switch(a=vc(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<sa.length;r++)ct(sa[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":mh(t,i),r=fc(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),ct("invalid",t);break;case"textarea":vh(t,i),r=pc(t,i),ct("invalid",t);break;default:r=i}gc(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Ym(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Wm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&_a(t,l):typeof l=="number"&&_a(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(va.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",t):l!=null&&jf(t,s,l,a))}switch(n){case"input":Ka(t),gh(t,i,!1);break;case"textarea":Ka(t),_h(t);break;case"option":i.value!=null&&t.setAttribute("value",""+or(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?gs(t,!!i.multiple,s,!1):i.defaultValue!=null&&gs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ol)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)mv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=wr(Ca.current),wr(si.current),so(e)){if(i=e.stateNode,n=e.memoizedProps,i[ti]=e,(s=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:ro(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ro(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return Xt(e),null;case 13:if(ft(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&gn!==null&&e.mode&1&&!(e.flags&128))Dg(),bs(),e.flags|=98560,s=!1;else if(s=so(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[ti]=e}else bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else Bn!==null&&(Zc(Bn),Bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Lt===0&&(Lt=3):Ld())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return Cs(),Gc(t,e),t===null&&wa(e.stateNode.containerInfo),Xt(e),null;case 10:return pd(e.type._context),Xt(e),null;case 17:return un(e.type)&&ll(),Xt(e),null;case 19:if(ft(pt),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)qs(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=ml(t),a!==null){for(e.flags|=128,qs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Tt()>Ls&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304)}else{if(!i)if(t=ml(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!dt)return Xt(e),null}else 2*Tt()-s.renderingStartTime>Ls&&n!==1073741824&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,n=pt.current,ut(pt,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return Pd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function Ix(t,e){switch(cd(e),e.tag){case 1:return un(e.type)&&ll(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cs(),ft(ln),ft(Kt),xd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _d(e),null;case 13:if(ft(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(pt),null;case 4:return Cs(),null;case 10:return pd(e.type._context),null;case 22:case 23:return Pd(),null;case 24:return null;default:return null}}var lo=!1,$t=!1,Ux=typeof WeakSet=="function"?WeakSet:Set,ye=null;function ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function Wc(t,e,n){try{n()}catch(i){St(t,e,i)}}var op=!1;function Fx(t,e){if(bc=rl,t=Sg(),ld(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,h=0,d=t,c=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)c=d,d=p;for(;;){if(d===t)break t;if(c===n&&++u===r&&(o=a),c===s&&++h===i&&(l=a),(p=d.nextSibling)!==null)break;d=c,c=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rc={focusedElem:t,selectionRange:n},rl=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var E=v.memoizedProps,g=v.memoizedState,f=e.stateNode,x=f.getSnapshotBeforeUpdate(e.elementType===e.type?E:On(e.type,E),g);f.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){St(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return v=op,op=!1,v}function pa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Wc(e,n,s)}r=r.next}while(r!==i)}}function Bl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Xc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gv(t){var e=t.alternate;e!==null&&(t.alternate=null,gv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ti],delete e[ba],delete e[Lc],delete e[_x],delete e[xx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vv(t){return t.tag===5||t.tag===3||t.tag===4}function lp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ol));else if(i!==4&&(t=t.child,t!==null))for(Yc(t,e,n),t=t.sibling;t!==null;)Yc(t,e,n),t=t.sibling}function qc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(qc(t,e,n),t=t.sibling;t!==null;)qc(t,e,n),t=t.sibling}var Bt=null,kn=!1;function ki(t,e,n){for(n=n.child;n!==null;)_v(t,e,n),n=n.sibling}function _v(t,e,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(Ll,n)}catch{}switch(n.tag){case 5:$t||ps(n,e);case 6:var i=Bt,r=kn;Bt=null,ki(t,e,n),Bt=i,kn=r,Bt!==null&&(kn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(kn?(t=Bt,n=n.stateNode,t.nodeType===8?mu(t.parentNode,n):t.nodeType===1&&mu(t,n),Ma(t)):mu(Bt,n.stateNode));break;case 4:i=Bt,r=kn,Bt=n.stateNode.containerInfo,kn=!0,ki(t,e,n),Bt=i,kn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Wc(n,e,a),r=r.next}while(r!==i)}ki(t,e,n);break;case 1:if(!$t&&(ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){St(n,e,o)}ki(t,e,n);break;case 21:ki(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,ki(t,e,n),$t=i):ki(t,e,n);break;default:ki(t,e,n)}}function up(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ux),e.forEach(function(i){var r=Xx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Bt=o.stateNode,kn=!1;break e;case 3:Bt=o.stateNode.containerInfo,kn=!0;break e;case 4:Bt=o.stateNode.containerInfo,kn=!0;break e}o=o.return}if(Bt===null)throw Error(se(160));_v(s,a,r),Bt=null,kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){St(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xv(e,t),e=e.sibling}function xv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Kn(t),i&4){try{pa(3,t,t.return),Bl(3,t)}catch(E){St(t,t.return,E)}try{pa(5,t,t.return)}catch(E){St(t,t.return,E)}}break;case 1:Dn(e,t),Kn(t),i&512&&n!==null&&ps(n,n.return);break;case 5:if(Dn(e,t),Kn(t),i&512&&n!==null&&ps(n,n.return),t.flags&32){var r=t.stateNode;try{_a(r,"")}catch(E){St(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Vm(r,s),vc(o,a);var u=vc(o,s);for(a=0;a<l.length;a+=2){var h=l[a],d=l[a+1];h==="style"?Ym(r,d):h==="dangerouslySetInnerHTML"?Wm(r,d):h==="children"?_a(r,d):jf(r,h,d,u)}switch(o){case"input":dc(r,s);break;case"textarea":Hm(r,s);break;case"select":var c=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?gs(r,!!s.multiple,p,!1):c!==!!s.multiple&&(s.defaultValue!=null?gs(r,!!s.multiple,s.defaultValue,!0):gs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ba]=s}catch(E){St(t,t.return,E)}}break;case 6:if(Dn(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){St(t,t.return,E)}}break;case 3:if(Dn(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ma(e.containerInfo)}catch(E){St(t,t.return,E)}break;case 4:Dn(e,t),Kn(t);break;case 13:Dn(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Rd=Tt())),i&4&&up(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?($t=(u=$t)||h,Dn(e,t),$t=u):Dn(e,t),Kn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(ye=t,h=t.child;h!==null;){for(d=ye=h;ye!==null;){switch(c=ye,p=c.child,c.tag){case 0:case 11:case 14:case 15:pa(4,c,c.return);break;case 1:ps(c,c.return);var v=c.stateNode;if(typeof v.componentWillUnmount=="function"){i=c,n=c.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(E){St(i,n,E)}}break;case 5:ps(c,c.return);break;case 22:if(c.memoizedState!==null){fp(d);continue}}p!==null?(p.return=c,ye=p):fp(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Xm("display",a))}catch(E){St(t,t.return,E)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(E){St(t,t.return,E)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Dn(e,t),Kn(t),i&4&&up(t);break;case 21:break;default:Dn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vv(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(_a(r,""),i.flags&=-33);var s=lp(t);qc(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=lp(t);Yc(t,o,a);break;default:throw Error(se(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ox(t,e,n){ye=t,Sv(t)}function Sv(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||lo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||$t;o=lo;var u=$t;if(lo=a,($t=l)&&!u)for(ye=r;ye!==null;)a=ye,l=a.child,a.tag===22&&a.memoizedState!==null?dp(r):l!==null?(l.return=a,ye=l):dp(r);for(;s!==null;)ye=s,Sv(s),s=s.sibling;ye=r,lo=o,$t=u}cp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):cp(t)}}function cp(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||Bl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$h(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$h(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Ma(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}$t||e.flags&512&&Xc(e)}catch(c){St(e,e.return,c)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function fp(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function dp(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Bl(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{Xc(e)}catch(l){St(e,s,l)}break;case 5:var a=e.return;try{Xc(e)}catch(l){St(e,a,l)}}}catch(l){St(e,e.return,l)}if(e===t){ye=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ye=o;break}ye=e.return}}var kx=Math.ceil,_l=Di.ReactCurrentDispatcher,Ad=Di.ReactCurrentOwner,Pn=Di.ReactCurrentBatchConfig,Ze=0,Ot=null,bt=null,Vt=0,mn=0,ms=fr(0),Lt=0,Da=null,Dr=0,zl=0,bd=0,ma=null,an=null,Rd=0,Ls=1/0,vi=null,xl=!1,$c=null,rr=null,uo=!1,Zi=null,Sl=0,ga=0,jc=null,Wo=-1,Xo=0;function Jt(){return Ze&6?Tt():Wo!==-1?Wo:Wo=Tt()}function sr(t){return t.mode&1?Ze&2&&Vt!==0?Vt&-Vt:yx.transition!==null?(Xo===0&&(Xo=rg()),Xo):(t=it,t!==0||(t=window.event,t=t===void 0?16:fg(t.type)),t):1}function Wn(t,e,n,i){if(50<ga)throw ga=0,jc=null,Error(se(185));ka(t,n,i),(!(Ze&2)||t!==Ot)&&(t===Ot&&(!(Ze&2)&&(zl|=n),Lt===4&&$i(t,Vt)),cn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(Ls=Tt()+500,Fl&&dr()))}function cn(t,e){var n=t.callbackNode;y_(t,e);var i=il(t,t===Ot?Vt:0);if(i===0)n!==null&&yh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&yh(n),e===1)t.tag===0?Sx(hp.bind(null,t)):Pg(hp.bind(null,t)),gx(function(){!(Ze&6)&&dr()}),n=null;else{switch(sg(i)){case 1:n=ed;break;case 4:n=ng;break;case 16:n=nl;break;case 536870912:n=ig;break;default:n=nl}n=Rv(n,yv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yv(t,e){if(Wo=-1,Xo=0,Ze&6)throw Error(se(327));var n=t.callbackNode;if(ys()&&t.callbackNode!==n)return null;var i=il(t,t===Ot?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=yl(t,i);else{e=i;var r=Ze;Ze|=2;var s=Ev();(Ot!==t||Vt!==e)&&(vi=null,Ls=Tt()+500,Rr(t,e));do try{Vx();break}catch(o){Mv(t,o)}while(!0);hd(),_l.current=s,Ze=r,bt!==null?e=0:(Ot=null,Vt=0,e=Lt)}if(e!==0){if(e===2&&(r=Mc(t),r!==0&&(i=r,e=Kc(t,r))),e===1)throw n=Da,Rr(t,0),$i(t,i),cn(t,Tt()),n;if(e===6)$i(t,i);else{if(r=t.current.alternate,!(i&30)&&!Bx(r)&&(e=yl(t,i),e===2&&(s=Mc(t),s!==0&&(i=s,e=Kc(t,s))),e===1))throw n=Da,Rr(t,0),$i(t,i),cn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:xr(t,an,vi);break;case 3:if($i(t,i),(i&130023424)===i&&(e=Rd+500-Tt(),10<e)){if(il(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Pc(xr.bind(null,t,an,vi),e);break}xr(t,an,vi);break;case 4:if($i(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Gn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*kx(i/1960))-i,10<i){t.timeoutHandle=Pc(xr.bind(null,t,an,vi),i);break}xr(t,an,vi);break;case 5:xr(t,an,vi);break;default:throw Error(se(329))}}}return cn(t,Tt()),t.callbackNode===n?yv.bind(null,t):null}function Kc(t,e){var n=ma;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=yl(t,e),t!==2&&(e=an,an=n,e!==null&&Zc(e)),t}function Zc(t){an===null?an=t:an.push.apply(an,t)}function Bx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Xn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $i(t,e){for(e&=~bd,e&=~zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gn(e),i=1<<n;t[n]=-1,e&=~i}}function hp(t){if(Ze&6)throw Error(se(327));ys();var e=il(t,0);if(!(e&1))return cn(t,Tt()),null;var n=yl(t,e);if(t.tag!==0&&n===2){var i=Mc(t);i!==0&&(e=i,n=Kc(t,i))}if(n===1)throw n=Da,Rr(t,0),$i(t,e),cn(t,Tt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xr(t,an,vi),cn(t,Tt()),null}function Cd(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(Ls=Tt()+500,Fl&&dr())}}function Ir(t){Zi!==null&&Zi.tag===0&&!(Ze&6)&&ys();var e=Ze;Ze|=1;var n=Pn.transition,i=it;try{if(Pn.transition=null,it=1,t)return t()}finally{it=i,Pn.transition=n,Ze=e,!(Ze&6)&&dr()}}function Pd(){mn=ms.current,ft(ms)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mx(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(cd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ll();break;case 3:Cs(),ft(ln),ft(Kt),xd();break;case 5:_d(i);break;case 4:Cs();break;case 13:ft(pt);break;case 19:ft(pt);break;case 10:pd(i.type._context);break;case 22:case 23:Pd()}n=n.return}if(Ot=t,bt=t=ar(t.current,null),Vt=mn=e,Lt=0,Da=null,bd=zl=Dr=0,an=ma=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Tr=null}return t}function Mv(t,e){do{var n=bt;try{if(hd(),Vo.current=vl,gl){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gl=!1}if(Nr=0,Ft=Pt=mt=null,ha=!1,Pa=0,Ad.current=null,n===null||n.return===null){Lt=1,Da=e,bt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Vt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=o,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var c=h.alternate;c?(h.updateQueue=c.updateQueue,h.memoizedState=c.memoizedState,h.lanes=c.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=ep(a);if(p!==null){p.flags&=-257,tp(p,a,o,s,e),p.mode&1&&Jh(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var E=new Set;E.add(l),e.updateQueue=E}else v.add(l);break e}else{if(!(e&1)){Jh(s,u,e),Ld();break e}l=Error(se(426))}}else if(dt&&o.mode&1){var g=ep(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),tp(g,a,o,s,e),fd(Ps(l,o));break e}}s=l=Ps(l,o),Lt!==4&&(Lt=2),ma===null?ma=[s]:ma.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=sv(s,l,e);qh(s,f);break e;case 1:o=l;var x=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(rr===null||!rr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=av(s,o,e);qh(s,S);break e}}s=s.return}while(s!==null)}wv(n)}catch(w){e=w,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function Ev(){var t=_l.current;return _l.current=vl,t===null?vl:t}function Ld(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),Ot===null||!(Dr&268435455)&&!(zl&268435455)||$i(Ot,Vt)}function yl(t,e){var n=Ze;Ze|=2;var i=Ev();(Ot!==t||Vt!==e)&&(vi=null,Rr(t,e));do try{zx();break}catch(r){Mv(t,r)}while(!0);if(hd(),Ze=n,_l.current=i,bt!==null)throw Error(se(261));return Ot=null,Vt=0,Lt}function zx(){for(;bt!==null;)Tv(bt)}function Vx(){for(;bt!==null&&!d_();)Tv(bt)}function Tv(t){var e=bv(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?wv(t):bt=e,Ad.current=null}function wv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ix(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,bt=null;return}}else if(n=Dx(n,e,mn),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Lt===0&&(Lt=5)}function xr(t,e,n){var i=it,r=Pn.transition;try{Pn.transition=null,it=1,Hx(t,e,n,i)}finally{Pn.transition=r,it=i}return null}function Hx(t,e,n,i){do ys();while(Zi!==null);if(Ze&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(M_(t,s),t===Ot&&(bt=Ot=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uo||(uo=!0,Rv(nl,function(){return ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pn.transition,Pn.transition=null;var a=it;it=1;var o=Ze;Ze|=4,Ad.current=null,Fx(t,n),xv(n,t),lx(Rc),rl=!!bc,Rc=bc=null,t.current=n,Ox(n),h_(),Ze=o,it=a,Pn.transition=s}else t.current=n;if(uo&&(uo=!1,Zi=t,Sl=r),s=t.pendingLanes,s===0&&(rr=null),g_(n.stateNode),cn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(xl)throw xl=!1,t=$c,$c=null,t;return Sl&1&&t.tag!==0&&ys(),s=t.pendingLanes,s&1?t===jc?ga++:(ga=0,jc=t):ga=0,dr(),null}function ys(){if(Zi!==null){var t=sg(Sl),e=Pn.transition,n=it;try{if(Pn.transition=null,it=16>t?16:t,Zi===null)var i=!1;else{if(t=Zi,Zi=null,Sl=0,Ze&6)throw Error(se(331));var r=Ze;for(Ze|=4,ye=t.current;ye!==null;){var s=ye,a=s.child;if(ye.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(ye=u;ye!==null;){var h=ye;switch(h.tag){case 0:case 11:case 15:pa(8,h,s)}var d=h.child;if(d!==null)d.return=h,ye=d;else for(;ye!==null;){h=ye;var c=h.sibling,p=h.return;if(gv(h),h===u){ye=null;break}if(c!==null){c.return=p,ye=c;break}ye=p}}}var v=s.alternate;if(v!==null){var E=v.child;if(E!==null){v.child=null;do{var g=E.sibling;E.sibling=null,E=g}while(E!==null)}}ye=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ye=a;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:pa(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,ye=f;break e}ye=s.return}}var x=t.current;for(ye=x;ye!==null;){a=ye;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,ye=y;else e:for(a=x;ye!==null;){if(o=ye,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Bl(9,o)}}catch(w){St(o,o.return,w)}if(o===a){ye=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,ye=S;break e}ye=o.return}}if(Ze=r,dr(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(Ll,t)}catch{}i=!0}return i}finally{it=n,Pn.transition=e}}return!1}function pp(t,e,n){e=Ps(n,e),e=sv(t,e,1),t=ir(t,e,1),e=Jt(),t!==null&&(ka(t,1,e),cn(t,e))}function St(t,e,n){if(t.tag===3)pp(t,t,n);else for(;e!==null;){if(e.tag===3){pp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(rr===null||!rr.has(i))){t=Ps(n,t),t=av(e,t,1),e=ir(e,t,1),t=Jt(),e!==null&&(ka(e,1,t),cn(e,t));break}}e=e.return}}function Gx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Jt(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(Vt&n)===n&&(Lt===4||Lt===3&&(Vt&130023424)===Vt&&500>Tt()-Rd?Rr(t,0):bd|=n),cn(t,e)}function Av(t,e){e===0&&(t.mode&1?(e=Ja,Ja<<=1,!(Ja&130023424)&&(Ja=4194304)):e=1);var n=Jt();t=Ci(t,e),t!==null&&(ka(t,e,n),cn(t,n))}function Wx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Av(t,n)}function Xx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),Av(t,n)}var bv;bv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)on=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return on=!1,Nx(t,e,n);on=!!(t.flags&131072)}else on=!1,dt&&e.flags&1048576&&Lg(e,fl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Go(t,e),t=e.pendingProps;var r=As(e,Kt.current);Ss(e,n),r=yd(null,e,i,t,r,n);var s=Md();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,ul(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gd(e),r.updater=kl,e.stateNode=r,r._reactInternals=e,Oc(e,i,t,n),e=zc(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&ud(e),Qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Go(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=qx(i),t=On(i,t),r){case 0:e=Bc(null,e,i,t,n);break e;case 1:e=rp(null,e,i,t,n);break e;case 11:e=np(null,e,i,t,n);break e;case 14:e=ip(null,e,i,On(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Bc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),rp(t,e,i,r,n);case 3:e:{if(cv(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Og(t,e),pl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ps(Error(se(423)),e),e=sp(t,e,i,n,r);break e}else if(i!==r){r=Ps(Error(se(424)),e),e=sp(t,e,i,n,r);break e}else for(gn=nr(e.stateNode.containerInfo.firstChild),vn=e,dt=!0,Bn=null,n=Ug(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bs(),i===r){e=Pi(t,e,n);break e}Qt(t,e,i,n)}e=e.child}return e;case 5:return kg(e),t===null&&Ic(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Cc(i,r)?a=null:s!==null&&Cc(i,s)&&(e.flags|=32),uv(t,e),Qt(t,e,a,n),e.child;case 6:return t===null&&Ic(e),null;case 13:return fv(t,e,n);case 4:return vd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Rs(e,null,i,n):Qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),np(t,e,i,r,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ut(dl,i._currentValue),i._currentValue=a,s!==null)if(Xn(s.value,a)){if(s.children===r.children&&!ln.current){e=Pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ei(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Uc(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(se(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Uc(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ss(e,n),r=Ln(r),i=i(r),e.flags|=1,Qt(t,e,i,n),e.child;case 14:return i=e.type,r=On(i,e.pendingProps),r=On(i.type,r),ip(t,e,i,r,n);case 15:return ov(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Go(t,e),e.tag=1,un(i)?(t=!0,ul(e)):t=!1,Ss(e,n),rv(e,i,r),Oc(e,i,r,n),zc(null,e,i,!0,t,n);case 19:return dv(t,e,n);case 22:return lv(t,e,n)}throw Error(se(156,e.tag))};function Rv(t,e){return tg(t,e)}function Yx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,i){return new Yx(t,e,n,i)}function Nd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qx(t){if(typeof t=="function")return Nd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zf)return 11;if(t===Qf)return 14}return 2}function ar(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Nd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ss:return Cr(n.children,r,s,e);case Kf:a=8,r|=8;break;case oc:return t=Rn(12,n,e,r|2),t.elementType=oc,t.lanes=s,t;case lc:return t=Rn(13,n,e,r),t.elementType=lc,t.lanes=s,t;case uc:return t=Rn(19,n,e,r),t.elementType=uc,t.lanes=s,t;case km:return Vl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fm:a=10;break e;case Om:a=9;break e;case Zf:a=11;break e;case Qf:a=14;break e;case Xi:a=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Rn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Cr(t,e,n,i){return t=Rn(7,t,i,e),t.lanes=n,t}function Vl(t,e,n,i){return t=Rn(22,t,i,e),t.elementType=km,t.lanes=n,t.stateNode={isHidden:!1},t}function Eu(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function Tu(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $x(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ru(0),this.expirationTimes=ru(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ru(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Dd(t,e,n,i,r,s,a,o,l){return t=new $x(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gd(s),t}function jx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Cv(t){if(!t)return lr;t=t._reactInternals;e:{if(Br(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(un(n))return Cg(t,n,e)}return e}function Pv(t,e,n,i,r,s,a,o,l){return t=Dd(n,i,!0,t,r,s,a,o,l),t.context=Cv(null),n=t.current,i=Jt(),r=sr(n),s=Ei(i,r),s.callback=e??null,ir(n,s,r),t.current.lanes=r,ka(t,r,i),cn(t,i),t}function Hl(t,e,n,i){var r=e.current,s=Jt(),a=sr(r);return n=Cv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ir(r,e,a),t!==null&&(Wn(t,r,a,s),zo(t,r,a)),a}function Ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Id(t,e){mp(t,e),(t=t.alternate)&&mp(t,e)}function Kx(){return null}var Lv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ud(t){this._internalRoot=t}Gl.prototype.render=Ud.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Hl(t,e,null,null)};Gl.prototype.unmount=Ud.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ir(function(){Hl(null,t,null,null)}),e[Ri]=null}};function Gl(t){this._internalRoot=t}Gl.prototype.unstable_scheduleHydration=function(t){if(t){var e=lg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qi.length&&e!==0&&e<qi[n].priority;n++);qi.splice(n,0,t),n===0&&cg(t)}};function Fd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gp(){}function Zx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ml(a);s.call(u)}}var a=Pv(e,i,t,0,null,!1,!1,"",gp);return t._reactRootContainer=a,t[Ri]=a.current,wa(t.nodeType===8?t.parentNode:t),Ir(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Ml(l);o.call(u)}}var l=Dd(t,0,!1,null,null,!1,!1,"",gp);return t._reactRootContainer=l,t[Ri]=l.current,wa(t.nodeType===8?t.parentNode:t),Ir(function(){Hl(e,l,n,i)}),l}function Xl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Ml(a);o.call(l)}}Hl(e,a,t,r)}else a=Zx(n,e,t,r,i);return Ml(a)}ag=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ra(e.pendingLanes);n!==0&&(td(e,n|1),cn(e,Tt()),!(Ze&6)&&(Ls=Tt()+500,dr()))}break;case 13:Ir(function(){var i=Ci(t,1);if(i!==null){var r=Jt();Wn(i,t,1,r)}}),Id(t,1)}};nd=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=Jt();Wn(e,t,134217728,n)}Id(t,134217728)}};og=function(t){if(t.tag===13){var e=sr(t),n=Ci(t,e);if(n!==null){var i=Jt();Wn(n,t,e,i)}Id(t,e)}};lg=function(){return it};ug=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};xc=function(t,e,n){switch(e){case"input":if(dc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ul(i);if(!r)throw Error(se(90));zm(i),dc(i,r)}}}break;case"textarea":Hm(t,n);break;case"select":e=n.value,e!=null&&gs(t,!!n.multiple,e,!1)}};jm=Cd;Km=Ir;var Qx={usingClientEntryPoint:!1,Events:[za,us,Ul,qm,$m,Cd]},$s={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jx={bundleType:$s.bundleType,version:$s.version,rendererPackageName:$s.rendererPackageName,rendererConfig:$s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Jm(t),t===null?null:t.stateNode},findFiberByHostInstance:$s.findFiberByHostInstance||Kx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!co.isDisabled&&co.supportsFiber)try{Ll=co.inject(Jx),ri=co}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qx;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fd(e))throw Error(se(200));return jx(t,e,null,n)};Sn.createRoot=function(t,e){if(!Fd(t))throw Error(se(299));var n=!1,i="",r=Lv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Dd(t,1,!1,null,null,n,!1,i,r),t[Ri]=e.current,wa(t.nodeType===8?t.parentNode:t),new Ud(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=Jm(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return Ir(t)};Sn.hydrate=function(t,e,n){if(!Wl(e))throw Error(se(200));return Xl(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!Fd(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Lv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Pv(e,null,t,1,n??null,r,!1,s,a),t[Ri]=e.current,wa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Gl(e)};Sn.render=function(t,e,n){if(!Wl(e))throw Error(se(200));return Xl(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!Wl(t))throw Error(se(40));return t._reactRootContainer?(Ir(function(){Xl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1};Sn.unstable_batchedUpdates=Cd;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Wl(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Xl(t,e,n,!1,i)};Sn.version="18.3.1-next-f1338f8080-20240426";function Nv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nv)}catch(t){console.error(t)}}Nv(),Nm.exports=Sn;var eS=Nm.exports,vp=eS;sc.createRoot=vp.createRoot,sc.hydrateRoot=vp.hydrateRoot;var Dv={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(b0,function(){return function(n){function i(s){if(r[s])return r[s].exports;var a=r[s]={exports:{},id:s,loaded:!1};return n[s].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}var r={};return i.m=n,i.c=r,i.p="dist/",i(0)}([function(n,i,r){function s(H){return H&&H.__esModule?H:{default:H}}var a=Object.assign||function(H){for(var F=1;F<arguments.length;F++){var V=arguments[F];for(var z in V)Object.prototype.hasOwnProperty.call(V,z)&&(H[z]=V[z])}return H},o=r(1),l=(s(o),r(6)),u=s(l),h=r(7),d=s(h),c=r(8),p=s(c),v=r(9),E=s(v),g=r(10),f=s(g),x=r(11),y=s(x),S=r(14),w=s(S),T=[],b=!1,m={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},A=function(){var H=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(H&&(b=!0),b)return T=(0,y.default)(T,m),(0,f.default)(T,m.once),T},L=function(){T=(0,w.default)(),A()},C=function(){T.forEach(function(H,F){H.node.removeAttribute("data-aos"),H.node.removeAttribute("data-aos-easing"),H.node.removeAttribute("data-aos-duration"),H.node.removeAttribute("data-aos-delay")})},P=function(H){return H===!0||H==="mobile"&&E.default.mobile()||H==="phone"&&E.default.phone()||H==="tablet"&&E.default.tablet()||typeof H=="function"&&H()===!0},B=function(H){m=a(m,H),T=(0,w.default)();var F=document.all&&!window.atob;return P(m.disable)||F?C():(m.disableMutationObserver||p.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),m.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",m.easing),document.querySelector("body").setAttribute("data-aos-duration",m.duration),document.querySelector("body").setAttribute("data-aos-delay",m.delay),m.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?A(!0):m.startEvent==="load"?window.addEventListener(m.startEvent,function(){A(!0)}):document.addEventListener(m.startEvent,function(){A(!0)}),window.addEventListener("resize",(0,d.default)(A,m.debounceDelay,!0)),window.addEventListener("orientationchange",(0,d.default)(A,m.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,f.default)(T,m.once)},m.throttleDelay)),m.disableMutationObserver||p.default.ready("[data-aos]",L),T)};n.exports={init:B,refresh:A,refreshHard:L}},function(n,i){},,,,,function(n,i){(function(r){function s(P,B,H){function F(be){var Ce=Be,ve=De;return Be=De=void 0,Ie=be,ne=P.apply(ve,Ce)}function V(be){return Ie=be,te=setTimeout(q,B),Ee?F(be):ne}function z(be){var Ce=be-Me,ve=be-Ie,et=B-Ce;return Ye?L(et,j-ve):et}function I(be){var Ce=be-Me,ve=be-Ie;return Me===void 0||Ce>=B||Ce<0||Ye&&ve>=j}function q(){var be=C();return I(be)?Q(be):void(te=setTimeout(q,z(be)))}function Q(be){return te=void 0,Te&&Be?F(be):(Be=De=void 0,ne)}function re(){te!==void 0&&clearTimeout(te),Ie=0,Be=Me=De=te=void 0}function ae(){return te===void 0?ne:Q(C())}function Fe(){var be=C(),Ce=I(be);if(Be=arguments,De=this,Me=be,Ce){if(te===void 0)return V(Me);if(Ye)return te=setTimeout(q,B),F(Me)}return te===void 0&&(te=setTimeout(q,B)),ne}var Be,De,j,ne,te,Me,Ie=0,Ee=!1,Ye=!1,Te=!0;if(typeof P!="function")throw new TypeError(c);return B=h(B)||0,o(H)&&(Ee=!!H.leading,Ye="maxWait"in H,j=Ye?A(h(H.maxWait)||0,B):j,Te="trailing"in H?!!H.trailing:Te),Fe.cancel=re,Fe.flush=ae,Fe}function a(P,B,H){var F=!0,V=!0;if(typeof P!="function")throw new TypeError(c);return o(H)&&(F="leading"in H?!!H.leading:F,V="trailing"in H?!!H.trailing:V),s(P,B,{leading:F,maxWait:B,trailing:V})}function o(P){var B=typeof P>"u"?"undefined":d(P);return!!P&&(B=="object"||B=="function")}function l(P){return!!P&&(typeof P>"u"?"undefined":d(P))=="object"}function u(P){return(typeof P>"u"?"undefined":d(P))=="symbol"||l(P)&&m.call(P)==v}function h(P){if(typeof P=="number")return P;if(u(P))return p;if(o(P)){var B=typeof P.valueOf=="function"?P.valueOf():P;P=o(B)?B+"":B}if(typeof P!="string")return P===0?P:+P;P=P.replace(E,"");var H=f.test(P);return H||x.test(P)?y(P.slice(2),H?2:8):g.test(P)?p:+P}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},c="Expected a function",p=NaN,v="[object Symbol]",E=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,x=/^0o[0-7]+$/i,y=parseInt,S=(typeof r>"u"?"undefined":d(r))=="object"&&r&&r.Object===Object&&r,w=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,T=S||w||Function("return this")(),b=Object.prototype,m=b.toString,A=Math.max,L=Math.min,C=function(){return T.Date.now()};n.exports=a}).call(i,function(){return this}())},function(n,i){(function(r){function s(C,P,B){function H(Te){var be=Fe,Ce=Be;return Fe=Be=void 0,Me=Te,j=C.apply(Ce,be)}function F(Te){return Me=Te,ne=setTimeout(I,P),Ie?H(Te):j}function V(Te){var be=Te-te,Ce=Te-Me,ve=P-be;return Ee?A(ve,De-Ce):ve}function z(Te){var be=Te-te,Ce=Te-Me;return te===void 0||be>=P||be<0||Ee&&Ce>=De}function I(){var Te=L();return z(Te)?q(Te):void(ne=setTimeout(I,V(Te)))}function q(Te){return ne=void 0,Ye&&Fe?H(Te):(Fe=Be=void 0,j)}function Q(){ne!==void 0&&clearTimeout(ne),Me=0,Fe=te=Be=ne=void 0}function re(){return ne===void 0?j:q(L())}function ae(){var Te=L(),be=z(Te);if(Fe=arguments,Be=this,te=Te,be){if(ne===void 0)return F(te);if(Ee)return ne=setTimeout(I,P),H(te)}return ne===void 0&&(ne=setTimeout(I,P)),j}var Fe,Be,De,j,ne,te,Me=0,Ie=!1,Ee=!1,Ye=!0;if(typeof C!="function")throw new TypeError(d);return P=u(P)||0,a(B)&&(Ie=!!B.leading,Ee="maxWait"in B,De=Ee?m(u(B.maxWait)||0,P):De,Ye="trailing"in B?!!B.trailing:Ye),ae.cancel=Q,ae.flush=re,ae}function a(C){var P=typeof C>"u"?"undefined":h(C);return!!C&&(P=="object"||P=="function")}function o(C){return!!C&&(typeof C>"u"?"undefined":h(C))=="object"}function l(C){return(typeof C>"u"?"undefined":h(C))=="symbol"||o(C)&&b.call(C)==p}function u(C){if(typeof C=="number")return C;if(l(C))return c;if(a(C)){var P=typeof C.valueOf=="function"?C.valueOf():C;C=a(P)?P+"":P}if(typeof C!="string")return C===0?C:+C;C=C.replace(v,"");var B=g.test(C);return B||f.test(C)?x(C.slice(2),B?2:8):E.test(C)?c:+C}var h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},d="Expected a function",c=NaN,p="[object Symbol]",v=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,f=/^0o[0-7]+$/i,x=parseInt,y=(typeof r>"u"?"undefined":h(r))=="object"&&r&&r.Object===Object&&r,S=(typeof self>"u"?"undefined":h(self))=="object"&&self&&self.Object===Object&&self,w=y||S||Function("return this")(),T=Object.prototype,b=T.toString,m=Math.max,A=Math.min,L=function(){return w.Date.now()};n.exports=s}).call(i,function(){return this}())},function(n,i){function r(h){var d=void 0,c=void 0;for(d=0;d<h.length;d+=1)if(c=h[d],c.dataset&&c.dataset.aos||c.children&&r(c.children))return!0;return!1}function s(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function a(){return!!s()}function o(h,d){var c=window.document,p=s(),v=new p(l);u=d,v.observe(c.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(h){h&&h.forEach(function(d){var c=Array.prototype.slice.call(d.addedNodes),p=Array.prototype.slice.call(d.removedNodes),v=c.concat(p);if(r(v))return u()})}Object.defineProperty(i,"__esModule",{value:!0});var u=function(){};i.default={isSupported:a,ready:o}},function(n,i){function r(c,p){if(!(c instanceof p))throw new TypeError("Cannot call a class as a function")}function s(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function c(p,v){for(var E=0;E<v.length;E++){var g=v[E];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(p,g.key,g)}}return function(p,v,E){return v&&c(p.prototype,v),E&&c(p,E),p}}(),o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,h=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=function(){function c(){r(this,c)}return a(c,[{key:"phone",value:function(){var p=s();return!(!o.test(p)&&!l.test(p.substr(0,4)))}},{key:"mobile",value:function(){var p=s();return!(!u.test(p)&&!h.test(p.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),c}();i.default=new d},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(a,o,l){var u=a.node.getAttribute("data-aos-once");o>a.position?a.node.classList.add("aos-animate"):typeof u<"u"&&(u==="false"||!l&&u!=="true")&&a.node.classList.remove("aos-animate")},s=function(a,o){var l=window.pageYOffset,u=window.innerHeight;a.forEach(function(h,d){r(h,u+l,o)})};i.default=s},function(n,i,r){function s(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(i,"__esModule",{value:!0});var a=r(12),o=s(a),l=function(u,h){return u.forEach(function(d,c){d.node.classList.add("aos-init"),d.position=(0,o.default)(d.node,h.offset)}),u};i.default=l},function(n,i,r){function s(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(i,"__esModule",{value:!0});var a=r(13),o=s(a),l=function(u,h){var d=0,c=0,p=window.innerHeight,v={offset:u.getAttribute("data-aos-offset"),anchor:u.getAttribute("data-aos-anchor"),anchorPlacement:u.getAttribute("data-aos-anchor-placement")};switch(v.offset&&!isNaN(v.offset)&&(c=parseInt(v.offset)),v.anchor&&document.querySelectorAll(v.anchor)&&(u=document.querySelectorAll(v.anchor)[0]),d=(0,o.default)(u).top,v.anchorPlacement){case"top-bottom":break;case"center-bottom":d+=u.offsetHeight/2;break;case"bottom-bottom":d+=u.offsetHeight;break;case"top-center":d+=p/2;break;case"bottom-center":d+=p/2+u.offsetHeight;break;case"center-center":d+=p/2+u.offsetHeight/2;break;case"top-top":d+=p;break;case"bottom-top":d+=u.offsetHeight+p;break;case"center-top":d+=u.offsetHeight/2+p}return v.anchorPlacement||v.offset||isNaN(h)||(c=h),d+c};i.default=l},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(s){for(var a=0,o=0;s&&!isNaN(s.offsetLeft)&&!isNaN(s.offsetTop);)a+=s.offsetLeft-(s.tagName!="BODY"?s.scrollLeft:0),o+=s.offsetTop-(s.tagName!="BODY"?s.scrollTop:0),s=s.offsetParent;return{top:o,left:a}};i.default=r},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(s){return s=s||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(s,function(a){return{node:a}})};i.default=r}])})})(Dv);var tS=Dv.exports;const nS=Sm(tS),wu=[{label:"Home",href:"home"},{label:"About",href:"about"},{label:"Skills",href:"skills"},{label:"Projects",href:"projects"},{label:"Experience",href:"experience"},{label:"Contact",href:"contact"}],Cn={name:"Bimal Rijal",title:"Full-Stack Developer",tagline:"Python Django Developer | React Developer",intro:"I'm Bimal Rijal, a Full-Stack Developer specializing in Python, Django and React. I build responsive, scalable and user-focused web applications with clean and maintainable code.",aboutText:"I'm a passionate Full-Stack Developer from Nepal focused on building modern web applications using Python, Django, React and modern web technologies. I work across the stack — from designing REST APIs and structuring databases to building responsive, accessible interfaces — and enjoy solving real problems with clean, maintainable code.",aboutHighlights:["Full-stack development","Backend development with Django & DRF","Frontend development with React","REST API design & integration","Database design & integration","Responsive UI development","Problem solving & debugging"]},iS=[{label:"Location",value:"Based in Nepal"},{label:"Specialization",value:"Python & Django"},{label:"Focus",value:"Full-Stack Development"}],rS={github:"https://github.com/bimalrijal56-oss",linkedin:"https://linkedin.com/in/your-username",whatsapp:"https://wa.me/9779867428466",email:"https://mail.google.com/mail/?view=cm&fs=1&to=bimalrijal56@gmail.com"},gi={email:"bimalrijal56@gmail.com",whatsappDisplay:"+977 9867428466",whatsappNumber:"9779867428466",location:"Nepal"};function Iv(t,e=76){const n=document.getElementById(t);if(!n)return;const i=n.getBoundingClientRect().top+window.scrollY-e;window.scrollTo({top:i,behavior:"smooth"})}function Uv(t,e){const n=encodeURIComponent(e);return`https://wa.me/${t}?text=${n}`}function sS(t,e=120){const[n,i]=ht.useState(t[0]);return ht.useEffect(()=>{const r=()=>{const s=window.scrollY+e;let a=t[0];for(const o of t){const l=document.getElementById(o);l&&l.offsetTop<=s&&(a=o)}i(a)};return window.addEventListener("scroll",r,{passive:!0}),r(),()=>window.removeEventListener("scroll",r)},[t,e]),n}function aS(){const[t,e]=ht.useState(!1),[n,i]=ht.useState(!1),r=sS(wu.map(a=>a.href));ht.useEffect(()=>{const a=()=>i(window.scrollY>24);return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]);const s=a=>{Iv(a),e(!1)};return O.jsxs("header",{className:`navbar ${n?"navbar-scrolled":""}`,children:[O.jsxs("div",{className:"container navbar-inner",children:[O.jsxs("a",{href:"#home",className:"navbar-logo",onClick:a=>{a.preventDefault(),s("home")},"aria-label":`${Cn.name} — home`,children:[O.jsx("div",{className:"logo-image",children:O.jsx("img",{src:"/images/logo-1.jpeg",alt:Cn.name})}),O.jsx("span",{className:"logo-text",children:Cn.name})]}),O.jsx("nav",{className:"nav-links nav-links-desktop","aria-label":"Primary",children:wu.map(({label:a,href:o})=>O.jsx("a",{href:`#${o}`,className:`nav-link ${r===o?"is-active":""}`,onClick:l=>{l.preventDefault(),s(o)},children:a},o))}),O.jsx("button",{type:"button",className:"nav-toggle","aria-label":t?"Close menu":"Open menu","aria-expanded":t,onClick:()=>e(a=>!a),children:O.jsx("i",{className:`bi ${t?"bi-x-lg":"bi-list"}`,"aria-hidden":"true"})})]}),O.jsx("nav",{className:`nav-links nav-links-mobile ${t?"is-open":""}`,"aria-label":"Mobile",children:wu.map(({label:a,href:o})=>O.jsx("a",{href:`#${o}`,className:`nav-link ${r===o?"is-active":""}`,onClick:l=>{l.preventDefault(),s(o)},children:a},o))})]})}const oS=[{key:"linkedin",icon:"bi-linkedin",label:"LinkedIn"},{key:"github",icon:"bi-github",label:"GitHub"},{key:"email",icon:"bi-envelope-fill",label:"Email"},{key:"whatsapp",icon:"bi-whatsapp",label:"WhatsApp"}];function Fv({variant:t="default"}){return O.jsx("ul",{className:`social-links ${t==="footer"?"social-links-footer":""}`,children:oS.map(({key:e,icon:n,label:i})=>O.jsx("li",{children:O.jsx("a",{href:rS[e],target:"_blank",rel:"noopener noreferrer","aria-label":i,className:"social-link",children:O.jsx("i",{className:`bi ${n}`,"aria-hidden":"true"})})},e))})}function lS(){const t=new Date().getFullYear();return O.jsx("footer",{className:"footer",children:O.jsxs("div",{className:"container footer-inner",children:[O.jsxs("div",{className:"footer-brand",children:[O.jsx("div",{className:"logo-image",children:O.jsx("img",{src:"/images/logo-1.jpeg",alt:Cn.name})}),O.jsxs("div",{children:[O.jsx("h3",{children:Cn.name}),O.jsx("p",{children:Cn.title})]})]}),O.jsx(Fv,{variant:"footer"}),O.jsxs("div",{className:"footer-meta",children:[O.jsxs("p",{children:["© ",t," ",Cn.name,". All rights reserved."]}),O.jsxs("p",{className:"footer-built",children:[O.jsx("i",{className:"bi bi-code-slash","aria-hidden":"true"})," Built with React"]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Od="185",uS=0,_p=1,cS=2,qo=1,fS=2,aa=3,ur=0,fn=1,xi=2,Ti=0,Ms=1,xp=2,Sp=3,yp=4,dS=5,yr=100,hS=101,pS=102,mS=103,gS=104,vS=200,_S=201,xS=202,SS=203,Qc=204,Jc=205,yS=206,MS=207,ES=208,TS=209,wS=210,AS=211,bS=212,RS=213,CS=214,ef=0,tf=1,nf=2,Ns=3,rf=4,sf=5,af=6,of=7,Ov=0,PS=1,LS=2,ai=0,kv=1,Bv=2,zv=3,Vv=4,Hv=5,Gv=6,Wv=7,Xv=300,Ur=301,Ds=302,Au=303,bu=304,Yl=306,lf=1e3,Mi=1001,uf=1002,zt=1003,NS=1004,fo=1005,jt=1006,Ru=1007,Ar=1008,bn=1009,Yv=1010,qv=1011,Ia=1012,kd=1013,ui=1014,ni=1015,Li=1016,Bd=1017,zd=1018,Ua=1020,$v=35902,jv=35899,Kv=1021,Zv=1022,Hn=1023,Ni=1026,br=1027,Qv=1028,Vd=1029,Fr=1030,Hd=1031,Gd=1033,$o=33776,jo=33777,Ko=33778,Zo=33779,cf=35840,ff=35841,df=35842,hf=35843,pf=36196,mf=37492,gf=37496,vf=37488,_f=37489,El=37490,xf=37491,Sf=37808,yf=37809,Mf=37810,Ef=37811,Tf=37812,wf=37813,Af=37814,bf=37815,Rf=37816,Cf=37817,Pf=37818,Lf=37819,Nf=37820,Df=37821,If=36492,Uf=36494,Ff=36495,Of=36283,kf=36284,Tl=36285,Bf=36286,DS=3200,Mp=0,IS=1,ji="",Tn="srgb",wl="srgb-linear",Al="linear",nt="srgb",Wr=7680,Ep=519,US=512,FS=513,OS=514,Wd=515,kS=516,BS=517,Xd=518,zS=519,Tp=35044,wp="300 es",ii=2e3,bl=2001;function VS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Rl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function HS(){const t=Rl("canvas");return t.style.display="block",t}const Ap={};function bp(...t){const e="THREE."+t.shift();console.log(e,...t)}function Jv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ke(...t){t=Jv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ke(...t){t=Jv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Es(...t){const e=t.join(" ");e in Ap||(Ap[e]=!0,ke(...t))}function GS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const WS={[ef]:tf,[nf]:af,[rf]:of,[Ns]:sf,[tf]:ef,[af]:nf,[of]:rf,[sf]:Ns};class zr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cu=Math.PI/180,zf=180/Math.PI;function Ha(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function XS(t,e){return(t%e+e)%e}function Pu(t,e,n){return(1-n)*t+n*e}function js(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const jd=class jd{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jd.prototype.isVector2=!0;let Qe=jd;class Bs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],h=i[r+2],d=i[r+3],c=s[a+0],p=s[a+1],v=s[a+2],E=s[a+3];if(d!==E||l!==c||u!==p||h!==v){let g=l*c+u*p+h*v+d*E;g<0&&(c=-c,p=-p,v=-v,E=-E,g=-g);let f=1-o;if(g<.9995){const x=Math.acos(g),y=Math.sin(x);f=Math.sin(f*x)/y,o=Math.sin(o*x)/y,l=l*f+c*o,u=u*f+p*o,h=h*f+v*o,d=d*f+E*o}else{l=l*f+c*o,u=u*f+p*o,h=h*f+v*o,d=d*f+E*o;const x=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=x,u*=x,h*=x,d*=x}}e[n]=l,e[n+1]=u,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],h=i[r+3],d=s[a],c=s[a+1],p=s[a+2],v=s[a+3];return e[n]=o*v+h*d+l*p-u*c,e[n+1]=l*v+h*c+u*d-o*p,e[n+2]=u*v+h*p+o*c-l*d,e[n+3]=h*v-o*d-l*c-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),h=o(r/2),d=o(s/2),c=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=c*h*d+u*p*v,this._y=u*p*d-c*h*v,this._z=u*h*v+c*p*d,this._w=u*h*d-c*p*v;break;case"YXZ":this._x=c*h*d+u*p*v,this._y=u*p*d-c*h*v,this._z=u*h*v-c*p*d,this._w=u*h*d+c*p*v;break;case"ZXY":this._x=c*h*d-u*p*v,this._y=u*p*d+c*h*v,this._z=u*h*v+c*p*d,this._w=u*h*d-c*p*v;break;case"ZYX":this._x=c*h*d-u*p*v,this._y=u*p*d+c*h*v,this._z=u*h*v-c*p*d,this._w=u*h*d+c*p*v;break;case"YZX":this._x=c*h*d+u*p*v,this._y=u*p*d+c*h*v,this._z=u*h*v-c*p*d,this._w=u*h*d-c*p*v;break;case"XZY":this._x=c*h*d-u*p*v,this._y=u*p*d-c*h*v,this._z=u*h*v+c*p*d,this._w=u*h*d+c*p*v;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],h=n[6],d=n[10],c=i+o+d;if(c>0){const p=.5/Math.sqrt(c+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+r*u-s*l,this._y=r*h+a*l+s*o-i*u,this._z=s*h+a*u+i*l-r*o,this._w=a*h-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),h=Math.sin(u);l=Math.sin(l*u)/h,n=Math.sin(n*u)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Kd=class Kd{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Rp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Rp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),h=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*u+a*d-o*h,this.y=i+l*h+o*u-s*d,this.z=r+l*d+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lu.copy(this).projectOnVector(e),this.sub(Lu)}reflect(e){return this.sub(Lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kd.prototype.isVector3=!0;let Y=Kd;const Lu=new Y,Rp=new Bs,Zd=class Zd{constructor(e,n,i,r,s,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],h=i[4],d=i[7],c=i[2],p=i[5],v=i[8],E=r[0],g=r[3],f=r[6],x=r[1],y=r[4],S=r[7],w=r[2],T=r[5],b=r[8];return s[0]=a*E+o*x+l*w,s[3]=a*g+o*y+l*T,s[6]=a*f+o*S+l*b,s[1]=u*E+h*x+d*w,s[4]=u*g+h*y+d*T,s[7]=u*f+h*S+d*b,s[2]=c*E+p*x+v*w,s[5]=c*g+p*y+v*T,s[8]=c*f+p*S+v*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8];return n*a*h-n*o*u-i*s*h+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],d=h*a-o*u,c=o*l-h*s,p=u*s-a*l,v=n*d+i*c+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=d*E,e[1]=(r*u-h*i)*E,e[2]=(o*i-r*a)*E,e[3]=c*E,e[4]=(h*n-r*l)*E,e[5]=(r*s-o*n)*E,e[6]=p*E,e[7]=(i*l-u*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return Es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nu.makeScale(e,n)),this}rotate(e){return Es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nu.makeRotation(-e)),this}translate(e,n){return Es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zd.prototype.isMatrix3=!0;let ze=Zd;const Nu=new ze,Cp=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pp=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function YS(){const t={enabled:!0,workingColorSpace:wl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(r.r=wi(r.r),r.g=wi(r.g),r.b=wi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(r.r=Ts(r.r),r.g=Ts(r.g),r.b=Ts(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ji?Al:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[wl]:{primaries:e,whitePoint:i,transfer:Al,toXYZ:Cp,fromXYZ:Pp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:Cp,fromXYZ:Pp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),t}const qe=YS();function wi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ts(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Xr;class qS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xr===void 0&&(Xr=Rl("canvas")),Xr.width=e.width,Xr.height=e.height;const r=Xr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Xr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Rl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=wi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(wi(n[i]/255)*255):n[i]=wi(n[i]);return{data:n,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $S=0;class Yd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Ha(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Du(r[a].image)):s.push(Du(r[a]))}else s=Du(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Du(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?qS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let jS=0;const Iu=new Y;class en extends zr{constructor(e=en.DEFAULT_IMAGE,n=en.DEFAULT_MAPPING,i=Mi,r=Mi,s=jt,a=Ar,o=Hn,l=bn,u=en.DEFAULT_ANISOTROPY,h=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Ha(),this.name="",this.source=new Yd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Iu).x}get height(){return this.source.getSize(Iu).y}get depth(){return this.source.getSize(Iu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lf:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case uf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lf:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case uf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Xv;en.DEFAULT_ANISOTROPY=1;const Qd=class Qd{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],h=l[4],d=l[8],c=l[1],p=l[5],v=l[9],E=l[2],g=l[6],f=l[10];if(Math.abs(h-c)<.01&&Math.abs(d-E)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+c)<.1&&Math.abs(d+E)<.1&&Math.abs(v+g)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,S=(p+1)/2,w=(f+1)/2,T=(h+c)/4,b=(d+E)/4,m=(v+g)/4;return y>S&&y>w?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=b/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=m/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=b/s,r=m/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-v)*(g-v)+(d-E)*(d-E)+(c-h)*(c-h));return Math.abs(x)<.001&&(x=1),this.x=(g-v)/x,this.y=(d-E)/x,this.z=(c-h)/x,this.w=Math.acos((u+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qd.prototype.isVector4=!0;let yt=Qd;class KS extends zr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new en(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Yd(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends KS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class e0 extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZS extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cl=class Cl{constructor(e,n,i,r,s,a,o,l,u,h,d,c,p,v,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,h,d,c,p,v,E,g)}set(e,n,i,r,s,a,o,l,u,h,d,c,p,v,E,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=u,f[6]=h,f[10]=d,f[14]=c,f[3]=p,f[7]=v,f[11]=E,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Cl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Yr.setFromMatrixColumn(e,0).length(),s=1/Yr.setFromMatrixColumn(e,1).length(),a=1/Yr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const c=a*h,p=a*d,v=o*h,E=o*d;n[0]=l*h,n[4]=-l*d,n[8]=u,n[1]=p+v*u,n[5]=c-E*u,n[9]=-o*l,n[2]=E-c*u,n[6]=v+p*u,n[10]=a*l}else if(e.order==="YXZ"){const c=l*h,p=l*d,v=u*h,E=u*d;n[0]=c+E*o,n[4]=v*o-p,n[8]=a*u,n[1]=a*d,n[5]=a*h,n[9]=-o,n[2]=p*o-v,n[6]=E+c*o,n[10]=a*l}else if(e.order==="ZXY"){const c=l*h,p=l*d,v=u*h,E=u*d;n[0]=c-E*o,n[4]=-a*d,n[8]=v+p*o,n[1]=p+v*o,n[5]=a*h,n[9]=E-c*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const c=a*h,p=a*d,v=o*h,E=o*d;n[0]=l*h,n[4]=v*u-p,n[8]=c*u+E,n[1]=l*d,n[5]=E*u+c,n[9]=p*u-v,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const c=a*l,p=a*u,v=o*l,E=o*u;n[0]=l*h,n[4]=E-c*d,n[8]=v*d+p,n[1]=d,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=p*d+v,n[10]=c-E*d}else if(e.order==="XZY"){const c=a*l,p=a*u,v=o*l,E=o*u;n[0]=l*h,n[4]=-d,n[8]=u*h,n[1]=c*d+E,n[5]=a*h,n[9]=p*d-v,n[2]=v*d-p,n[6]=o*h,n[10]=E*d+c}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QS,e,JS)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Bi.crossVectors(i,hn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Bi.crossVectors(i,hn)),Bi.normalize(),ho.crossVectors(hn,Bi),r[0]=Bi.x,r[4]=ho.x,r[8]=hn.x,r[1]=Bi.y,r[5]=ho.y,r[9]=hn.y,r[2]=Bi.z,r[6]=ho.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],h=i[1],d=i[5],c=i[9],p=i[13],v=i[2],E=i[6],g=i[10],f=i[14],x=i[3],y=i[7],S=i[11],w=i[15],T=r[0],b=r[4],m=r[8],A=r[12],L=r[1],C=r[5],P=r[9],B=r[13],H=r[2],F=r[6],V=r[10],z=r[14],I=r[3],q=r[7],Q=r[11],re=r[15];return s[0]=a*T+o*L+l*H+u*I,s[4]=a*b+o*C+l*F+u*q,s[8]=a*m+o*P+l*V+u*Q,s[12]=a*A+o*B+l*z+u*re,s[1]=h*T+d*L+c*H+p*I,s[5]=h*b+d*C+c*F+p*q,s[9]=h*m+d*P+c*V+p*Q,s[13]=h*A+d*B+c*z+p*re,s[2]=v*T+E*L+g*H+f*I,s[6]=v*b+E*C+g*F+f*q,s[10]=v*m+E*P+g*V+f*Q,s[14]=v*A+E*B+g*z+f*re,s[3]=x*T+y*L+S*H+w*I,s[7]=x*b+y*C+S*F+w*q,s[11]=x*m+y*P+S*V+w*Q,s[15]=x*A+y*B+S*z+w*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],h=e[2],d=e[6],c=e[10],p=e[14],v=e[3],E=e[7],g=e[11],f=e[15],x=l*p-u*c,y=o*p-u*d,S=o*c-l*d,w=a*p-u*h,T=a*c-l*h,b=a*d-o*h;return n*(E*x-g*y+f*S)-i*(v*x-g*w+f*T)+r*(v*y-E*w+f*b)-s*(v*S-E*T+g*b)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],u=e[6],h=e[10];return n*(a*h-o*u)-i*(s*h-o*l)+r*(s*u-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],d=e[9],c=e[10],p=e[11],v=e[12],E=e[13],g=e[14],f=e[15],x=n*o-i*a,y=n*l-r*a,S=n*u-s*a,w=i*l-r*o,T=i*u-s*o,b=r*u-s*l,m=h*E-d*v,A=h*g-c*v,L=h*f-p*v,C=d*g-c*E,P=d*f-p*E,B=c*f-p*g,H=x*B-y*P+S*C+w*L-T*A+b*m;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/H;return e[0]=(o*B-l*P+u*C)*F,e[1]=(r*P-i*B-s*C)*F,e[2]=(E*b-g*T+f*w)*F,e[3]=(c*T-d*b-p*w)*F,e[4]=(l*L-a*B-u*A)*F,e[5]=(n*B-r*L+s*A)*F,e[6]=(g*S-v*b-f*y)*F,e[7]=(h*b-c*S+p*y)*F,e[8]=(a*P-o*L+u*m)*F,e[9]=(i*L-n*P-s*m)*F,e[10]=(v*T-E*S+f*x)*F,e[11]=(d*S-h*T-p*x)*F,e[12]=(o*A-a*C-l*m)*F,e[13]=(n*C-i*A+r*m)*F,e[14]=(E*y-v*w-g*x)*F,e[15]=(h*w-d*y+c*x)*F,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,h*o+i,h*l-r*a,0,u*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,h=a+a,d=o+o,c=s*u,p=s*h,v=s*d,E=a*h,g=a*d,f=o*d,x=l*u,y=l*h,S=l*d,w=i.x,T=i.y,b=i.z;return r[0]=(1-(E+f))*w,r[1]=(p+S)*w,r[2]=(v-y)*w,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(c+f))*T,r[6]=(g+x)*T,r[7]=0,r[8]=(v+y)*b,r[9]=(g-x)*b,r[10]=(1-(c+E))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Yr.set(r[0],r[1],r[2]).length();const o=Yr.set(r[4],r[5],r[6]).length(),l=Yr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),In.copy(this);const u=1/a,h=1/o,d=1/l;return In.elements[0]*=u,In.elements[1]*=u,In.elements[2]*=u,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=d,In.elements[9]*=d,In.elements[10]*=d,n.setFromRotationMatrix(In),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=ii,l=!1){const u=this.elements,h=2*s/(n-e),d=2*s/(i-r),c=(n+e)/(n-e),p=(i+r)/(i-r);let v,E;if(l)v=s/(a-s),E=a*s/(a-s);else if(o===ii)v=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===bl)v=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=c,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=E,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ii,l=!1){const u=this.elements,h=2/(n-e),d=2/(i-r),c=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,E;if(l)v=1/(a-s),E=a/(a-s);else if(o===ii)v=-2/(a-s),E=-(a+s)/(a-s);else if(o===bl)v=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=c,u[1]=0,u[5]=d,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=v,u[14]=E,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Cl.prototype.isMatrix4=!0;let Rt=Cl;const Yr=new Y,In=new Rt,QS=new Y(0,0,0),JS=new Y(1,1,1),Bi=new Y,ho=new Y,hn=new Y,Lp=new Rt,Np=new Bs;class Or{constructor(e=0,n=0,i=0,r=Or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],h=r[9],d=r[2],c=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Lp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Np.setFromEuler(this),this.setFromQuaternion(Np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Or.DEFAULT_ORDER="XYZ";class t0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ey=0;const Dp=new Y,qr=new Bs,fi=new Rt,po=new Y,Ks=new Y,ty=new Y,ny=new Bs,Ip=new Y(1,0,0),Up=new Y(0,1,0),Fp=new Y(0,0,1),Op={type:"added"},iy={type:"removed"},$r={type:"childadded",child:null},Uu={type:"childremoved",child:null};class _n extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=Ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new Y,n=new Or,i=new Bs,r=new Y(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new ze}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new t0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(Ip,e)}rotateY(e){return this.rotateOnAxis(Up,e)}rotateZ(e){return this.rotateOnAxis(Fp,e)}translateOnAxis(e,n){return Dp.copy(e).applyQuaternion(this.quaternion),this.position.add(Dp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ip,e)}translateY(e){return this.translateOnAxis(Up,e)}translateZ(e){return this.translateOnAxis(Fp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?po.copy(e):po.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Ks,po,this.up):fi.lookAt(po,Ks,this.up),this.quaternion.setFromRotationMatrix(fi),r&&(fi.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(fi),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Op),$r.child=e,this.dispatchEvent($r),$r.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(iy),Uu.child=e,this.dispatchEvent(Uu),Uu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Op),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,ty),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,ny,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),h=a(e.images),d=a(e.shapes),c=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),c.length>0&&(i.skeletons=c),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_n.DEFAULT_UP=new Y(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class mo extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ry={type:"move"};class Fu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const E of e.hand.values()){const g=n.getJointPose(E,i),f=this._getHandJoint(u,E);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],c=h.position.distanceTo(d.position),p=.02,v=.005;u.inputState.pinching&&c>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ry)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new mo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const n0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},go={h:0,s:0,l:0};function Ou(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=qe.workingColorSpace){if(e=XS(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Ou(a,s,e+1/3),this.g=Ou(a,s,e),this.b=Ou(a,s,e-1/3)}return qe.colorSpaceToWorking(this,r),this}setStyle(e,n=Tn){function i(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Tn){const i=n0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return qe.workingToColorSpace(qt.copy(this),e),Math.round($e(qt.r*255,0,255))*65536+Math.round($e(qt.g*255,0,255))*256+Math.round($e(qt.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=qe.workingColorSpace){qe.workingToColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const h=(o+a)/2;if(o===a)l=0,u=0;else{const d=a-o;switch(u=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,n=qe.workingColorSpace){return qe.workingToColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Tn){qe.workingToColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==Tn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(go);const i=Pu(zi.h,go.h,n),r=Pu(zi.s,go.s,n),s=Pu(zi.l,go.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Je;Je.NAMES=n0;class sy extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Or,this.environmentIntensity=1,this.environmentRotation=new Or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Un=new Y,di=new Y,ku=new Y,hi=new Y,jr=new Y,Kr=new Y,kp=new Y,Bu=new Y,zu=new Y,Vu=new Y,Hu=new yt,Gu=new yt,Wu=new yt;class Vn{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Un.subVectors(r,n),di.subVectors(i,n),ku.subVectors(e,n);const a=Un.dot(Un),o=Un.dot(di),l=Un.dot(ku),u=di.dot(di),h=di.dot(ku),d=a*u-o*o;if(d===0)return s.set(0,0,0),null;const c=1/d,p=(u*l-o*h)*c,v=(a*h-o*l)*c;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(a,hi.y),l.addScaledVector(o,hi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Hu.setScalar(0),Gu.setScalar(0),Wu.setScalar(0),Hu.fromBufferAttribute(e,n),Gu.fromBufferAttribute(e,i),Wu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Hu,s.x),a.addScaledVector(Gu,s.y),a.addScaledVector(Wu,s.z),a}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),di.subVectors(e,n),Un.cross(di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Un.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;jr.subVectors(r,i),Kr.subVectors(s,i),Bu.subVectors(e,i);const l=jr.dot(Bu),u=Kr.dot(Bu);if(l<=0&&u<=0)return n.copy(i);zu.subVectors(e,r);const h=jr.dot(zu),d=Kr.dot(zu);if(h>=0&&d<=h)return n.copy(r);const c=l*d-h*u;if(c<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(jr,a);Vu.subVectors(e,s);const p=jr.dot(Vu),v=Kr.dot(Vu);if(v>=0&&p<=v)return n.copy(s);const E=p*u-l*v;if(E<=0&&u>=0&&v<=0)return o=u/(u-v),n.copy(i).addScaledVector(Kr,o);const g=h*v-p*d;if(g<=0&&d-h>=0&&p-v>=0)return kp.subVectors(s,r),o=(d-h)/(d-h+(p-v)),n.copy(r).addScaledVector(kp,o);const f=1/(g+E+c);return a=E*f,o=c*f,n.copy(i).addScaledVector(jr,a).addScaledVector(Kr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ga{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(s,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vo.copy(i.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),_o.subVectors(this.max,Zs),Zr.subVectors(e.a,Zs),Qr.subVectors(e.b,Zs),Jr.subVectors(e.c,Zs),Vi.subVectors(Qr,Zr),Hi.subVectors(Jr,Qr),pr.subVectors(Zr,Jr);let n=[0,-Vi.z,Vi.y,0,-Hi.z,Hi.y,0,-pr.z,pr.y,Vi.z,0,-Vi.x,Hi.z,0,-Hi.x,pr.z,0,-pr.x,-Vi.y,Vi.x,0,-Hi.y,Hi.x,0,-pr.y,pr.x,0];return!Xu(n,Zr,Qr,Jr,_o)||(n=[1,0,0,0,1,0,0,0,1],!Xu(n,Zr,Qr,Jr,_o))?!1:(xo.crossVectors(Vi,Hi),n=[xo.x,xo.y,xo.z],Xu(n,Zr,Qr,Jr,_o))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Fn=new Y,vo=new Ga,Zr=new Y,Qr=new Y,Jr=new Y,Vi=new Y,Hi=new Y,pr=new Y,Zs=new Y,_o=new Y,xo=new Y,mr=new Y;function Xu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){mr.fromArray(t,s);const o=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),u=n.dot(mr),h=i.dot(mr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const At=new Y,So=new Qe;let ay=0;class li extends zr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ay++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Tp,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)So.fromBufferAttribute(this,n),So.applyMatrix3(e),this.setXY(n,So.x,So.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=js(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=js(n,this.array)),n}setX(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=js(n,this.array)),n}setY(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=js(n,this.array)),n}setZ(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=js(n,this.array)),n}setW(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class i0 extends li{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class r0 extends li{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ai extends li{constructor(e,n,i){super(new Float32Array(e),n,i)}}const oy=new Ga,Qs=new Y,Yu=new Y;class qd{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):oy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const n=Qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(Yu)),this.expandByPoint(Qs.copy(e.center).sub(Yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ly=0;const En=new Rt,qu=new _n,es=new Y,pn=new Ga,Js=new Ga,Ut=new Y;class Ii extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Ha(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(VS(e)?r0:i0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return qu.lookAt(e),qu.updateMatrix(),this.applyMatrix4(qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ai(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Js.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(pn.min,Js.min),pn.expandByPoint(Ut),Ut.addVectors(pn.max,Js.max),pn.expandByPoint(Ut)):(pn.expandByPoint(Js.min),pn.expandByPoint(Js.max))}pn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Ut.fromBufferAttribute(o,u),l&&(es.fromBufferAttribute(e,u),Ut.add(es)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new li(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let m=0;m<i.count;m++)o[m]=new Y,l[m]=new Y;const u=new Y,h=new Y,d=new Y,c=new Qe,p=new Qe,v=new Qe,E=new Y,g=new Y;function f(m,A,L){u.fromBufferAttribute(i,m),h.fromBufferAttribute(i,A),d.fromBufferAttribute(i,L),c.fromBufferAttribute(s,m),p.fromBufferAttribute(s,A),v.fromBufferAttribute(s,L),h.sub(u),d.sub(u),p.sub(c),v.sub(c);const C=1/(p.x*v.y-v.x*p.y);isFinite(C)&&(E.copy(h).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(C),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(C),o[m].add(E),o[A].add(E),o[L].add(E),l[m].add(g),l[A].add(g),l[L].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let m=0,A=x.length;m<A;++m){const L=x[m],C=L.start,P=L.count;for(let B=C,H=C+P;B<H;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new Y,S=new Y,w=new Y,T=new Y;function b(m){w.fromBufferAttribute(r,m),T.copy(w);const A=o[m];y.copy(A),y.sub(w.multiplyScalar(w.dot(A))).normalize(),S.crossVectors(T,A);const C=S.dot(l[m])<0?-1:1;a.setXYZW(m,y.x,y.y,y.z,C)}for(let m=0,A=x.length;m<A;++m){const L=x[m],C=L.start,P=L.count;for(let B=C,H=C+P;B<H;B+=3)b(e.getX(B+0)),b(e.getX(B+1)),b(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let c=0,p=i.count;c<p;c++)i.setXYZ(c,0,0,0);const r=new Y,s=new Y,a=new Y,o=new Y,l=new Y,u=new Y,h=new Y,d=new Y;if(e)for(let c=0,p=e.count;c<p;c+=3){const v=e.getX(c+0),E=e.getX(c+1),g=e.getX(c+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,g),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,g),o.add(h),l.add(h),u.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let c=0,p=n.count;c<p;c+=3)r.fromBufferAttribute(n,c+0),s.fromBufferAttribute(n,c+1),a.fromBufferAttribute(n,c+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(c+0,h.x,h.y,h.z),i.setXYZ(c+1,h.x,h.y,h.z),i.setXYZ(c+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const u=o.array,h=o.itemSize,d=o.normalized,c=new u.constructor(l.length*h);let p=0,v=0;for(let E=0,g=l.length;E<g;E++){o.isInterleavedBufferAttribute?p=l[E]*o.data.stride+o.offset:p=l[E]*h;for(let f=0;f<h;f++)c[v++]=u[p++]}return new li(c,h,d)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ii,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let h=0,d=u.length;h<d;h++){const c=u[h],p=e(c,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,c=u.length;d<c;d++){const p=u[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],d=s[u];for(let c=0,p=d.length;c<p;c++)h.push(d[c].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let uy=0;class ql extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Ha(),this.name="",this.type="Material",this.blending=Ms,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qc,this.blendDst=Jc,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ep,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ke(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(i.blending=this.blending),this.side!==ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qc&&(i.blendSrc=this.blendSrc),this.blendDst!==Jc&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ep&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mi=new Y,$u=new Y,yo=new Y,Gi=new Y,ju=new Y,Mo=new Y,Ku=new Y;class cy{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){$u.copy(e).add(n).multiplyScalar(.5),yo.copy(n).sub(e).normalize(),Gi.copy(this.origin).sub($u);const s=e.distanceTo(n)*.5,a=-this.direction.dot(yo),o=Gi.dot(this.direction),l=-Gi.dot(yo),u=Gi.lengthSq(),h=Math.abs(1-a*a);let d,c,p,v;if(h>0)if(d=a*l-o,c=a*o-l,v=s*h,d>=0)if(c>=-v)if(c<=v){const E=1/h;d*=E,c*=E,p=d*(d+a*c+2*o)+c*(a*d+c+2*l)+u}else c=s,d=Math.max(0,-(a*c+o)),p=-d*d+c*(c+2*l)+u;else c=-s,d=Math.max(0,-(a*c+o)),p=-d*d+c*(c+2*l)+u;else c<=-v?(d=Math.max(0,-(-a*s+o)),c=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+c*(c+2*l)+u):c<=v?(d=0,c=Math.min(Math.max(-s,-l),s),p=c*(c+2*l)+u):(d=Math.max(0,-(a*s+o)),c=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+c*(c+2*l)+u);else c=a>0?-s:s,d=Math.max(0,-(a*c+o)),p=-d*d+c*(c+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy($u).addScaledVector(yo,c),p}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,c=this.origin;return u>=0?(i=(e.min.x-c.x)*u,r=(e.max.x-c.x)*u):(i=(e.max.x-c.x)*u,r=(e.min.x-c.x)*u),h>=0?(s=(e.min.y-c.y)*h,a=(e.max.y-c.y)*h):(s=(e.max.y-c.y)*h,a=(e.min.y-c.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-c.z)*d,l=(e.max.z-c.z)*d):(o=(e.max.z-c.z)*d,l=(e.min.z-c.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,r,s){ju.subVectors(n,e),Mo.subVectors(i,e),Ku.crossVectors(ju,Mo);let a=this.direction.dot(Ku),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gi.subVectors(this.origin,e);const l=o*this.direction.dot(Mo.crossVectors(Gi,Mo));if(l<0)return null;const u=o*this.direction.dot(ju.cross(Gi));if(u<0||l+u>a)return null;const h=-o*Gi.dot(Ku);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class s0 extends ql{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Or,this.combine=Ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bp=new Rt,gr=new cy,Eo=new qd,zp=new Y,To=new Y,wo=new Y,Ao=new Y,Zu=new Y,bo=new Y,Vp=new Y,Ro=new Y;class ci extends _n{constructor(e=new Ii,n=new s0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){bo.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=o[l],d=s[l];h!==0&&(Zu.fromBufferAttribute(d,e),a?bo.addScaledVector(Zu,h):bo.addScaledVector(Zu.sub(n),h))}n.add(bo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(Eo.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Eo,zp)===null||gr.origin.distanceToSquared(zp)>(e.far-e.near)**2))&&(Bp.copy(s).invert(),gr.copy(e.ray).applyMatrix4(Bp),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,c=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,E=c.length;v<E;v++){const g=c[v],f=a[g.materialIndex],x=Math.max(g.start,p.start),y=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let S=x,w=y;S<w;S+=3){const T=o.getX(S),b=o.getX(S+1),m=o.getX(S+2);r=Co(this,f,e,i,u,h,d,T,b,m),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let g=v,f=E;g<f;g+=3){const x=o.getX(g),y=o.getX(g+1),S=o.getX(g+2);r=Co(this,a,e,i,u,h,d,x,y,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,E=c.length;v<E;v++){const g=c[v],f=a[g.materialIndex],x=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=x,w=y;S<w;S+=3){const T=S,b=S+1,m=S+2;r=Co(this,f,e,i,u,h,d,T,b,m),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let g=v,f=E;g<f;g+=3){const x=g,y=g+1,S=g+2;r=Co(this,a,e,i,u,h,d,x,y,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function fy(t,e,n,i,r,s,a,o){let l;if(e.side===fn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ur,o),l===null)return null;Ro.copy(o),Ro.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ro);return u<n.near||u>n.far?null:{distance:u,point:Ro.clone(),object:t}}function Co(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,To),t.getVertexPosition(l,wo),t.getVertexPosition(u,Ao);const h=fy(t,e,n,i,To,wo,Ao,Vp);if(h){const d=new Y;Vn.getBarycoord(Vp,To,wo,Ao,d),r&&(h.uv=Vn.getInterpolatedAttribute(r,o,l,u,d,new Qe)),s&&(h.uv1=Vn.getInterpolatedAttribute(s,o,l,u,d,new Qe)),a&&(h.normal=Vn.getInterpolatedAttribute(a,o,l,u,d,new Y),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const c={a:o,b:l,c:u,normal:new Y,materialIndex:0};Vn.getNormal(To,wo,Ao,c.normal),h.face=c,h.barycoord=d}return h}class dy extends en{constructor(e=null,n=1,i=1,r,s,a,o,l,u=zt,h=zt,d,c){super(null,a,o,l,u,h,r,s,d,c),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qu=new Y,hy=new Y,py=new ze;class Sr{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Qu.subVectors(i,n).cross(hy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Qu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||py.getNormalMatrix(e),r=this.coplanarPoint(Qu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new qd,my=new Qe(.5,.5),Po=new Y;class a0{constructor(e=new Sr,n=new Sr,i=new Sr,r=new Sr,s=new Sr,a=new Sr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ii,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],h=s[4],d=s[5],c=s[6],p=s[7],v=s[8],E=s[9],g=s[10],f=s[11],x=s[12],y=s[13],S=s[14],w=s[15];if(r[0].setComponents(u-a,p-h,f-v,w-x).normalize(),r[1].setComponents(u+a,p+h,f+v,w+x).normalize(),r[2].setComponents(u+o,p+d,f+E,w+y).normalize(),r[3].setComponents(u-o,p-d,f-E,w-y).normalize(),i)r[4].setComponents(l,c,g,S).normalize(),r[5].setComponents(u-l,p-c,f-g,w-S).normalize();else if(r[4].setComponents(u-l,p-c,f-g,w-S).normalize(),n===ii)r[5].setComponents(u+l,p+c,f+g,w+S).normalize();else if(n===bl)r[5].setComponents(l,c,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);const n=my.distanceTo(e.center);return vr.radius=.7071067811865476+n,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Po.x=r.normal.x>0?e.max.x:e.min.x,Po.y=r.normal.y>0?e.max.y:e.min.y,Po.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class o0 extends en{constructor(e=[],n=Ur,i,r,s,a,o,l,u,h){super(e,n,i,r,s,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Is extends en{constructor(e,n,i=ui,r,s,a,o=zt,l=zt,u,h=Ni,d=1){if(h!==Ni&&h!==br)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const c={width:e,height:n,depth:d};super(c,r,s,a,o,l,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class gy extends Is{constructor(e,n=ui,i=Ur,r,s,a=zt,o=zt,l,u=Ni){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class l0 extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wa extends Ii{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],h=[],d=[];let c=0,p=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ai(u,3)),this.setAttribute("normal",new Ai(h,3)),this.setAttribute("uv",new Ai(d,2));function v(E,g,f,x,y,S,w,T,b,m,A){const L=S/b,C=w/m,P=S/2,B=w/2,H=T/2,F=b+1,V=m+1;let z=0,I=0;const q=new Y;for(let Q=0;Q<V;Q++){const re=Q*C-B;for(let ae=0;ae<F;ae++){const Fe=ae*L-P;q[E]=Fe*x,q[g]=re*y,q[f]=H,u.push(q.x,q.y,q.z),q[E]=0,q[g]=0,q[f]=T>0?1:-1,h.push(q.x,q.y,q.z),d.push(ae/b),d.push(1-Q/m),z+=1}}for(let Q=0;Q<m;Q++)for(let re=0;re<b;re++){const ae=c+re+F*Q,Fe=c+re+F*(Q+1),Be=c+(re+1)+F*(Q+1),De=c+(re+1)+F*Q;l.push(ae,Fe,De),l.push(Fe,Be,De),I+=6}o.addGroup(p,I,A),p+=I,c+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Xa extends Ii{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,h=l+1,d=e/o,c=n/l,p=[],v=[],E=[],g=[];for(let f=0;f<h;f++){const x=f*c-a;for(let y=0;y<u;y++){const S=y*d-s;v.push(S,-x,0),E.push(0,0,1),g.push(y/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const y=x+u*f,S=x+u*(f+1),w=x+1+u*(f+1),T=x+1+u*f;p.push(y,S,T),p.push(S,w,T)}this.setIndex(p),this.setAttribute("position",new Ai(v,3)),this.setAttribute("normal",new Ai(E,3)),this.setAttribute("uv",new Ai(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.widthSegments,e.heightSegments)}}function Us(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Hp(r))r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Hp(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const i=Us(t[n]);for(const r in i)e[r]=i[r]}return e}function Hp(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function vy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function u0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const _y={clone:Us,merge:Zt};var xy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends ql{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xy,this.fragmentShader=Sy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=vy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Je().setHex(r.value);break;case"v2":this.uniforms[i].value=new Qe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new Y().fromArray(r.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ze().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Rt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class yy extends Yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class My extends ql{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ey extends ql{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lo=new Y,No=new Bs,Zn=new Y;class c0 extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lo,No,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,No,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Lo,No,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,No,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new Y,Gp=new Qe,Wp=new Qe;class zn extends c0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zf*2*Math.atan(Math.tan(Cu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,n){return this.getViewBounds(e,Gp,Wp),n.subVectors(Wp,Gp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Cu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class $d extends c0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ts=-90,ns=1;class Ty extends _n{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(ts,ns,e,n);r.layers=this.layers,this.add(r);const s=new zn(ts,ns,e,n);s.layers=this.layers,this.add(s);const a=new zn(ts,ns,e,n);a.layers=this.layers,this.add(a);const o=new zn(ts,ns,e,n);o.layers=this.layers,this.add(o);const l=new zn(ts,ns,e,n);l.layers=this.layers,this.add(l);const u=new zn(ts,ns,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,h]=this.children,d=e.getRenderTarget(),c=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(d,c,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class wy extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Jd=class Jd{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Jd.prototype.isMatrix2=!0;let Xp=Jd;function Yp(t,e,n,i){const r=Ay(i);switch(n){case Kv:return t*e;case Qv:return t*e/r.components*r.byteLength;case Vd:return t*e/r.components*r.byteLength;case Fr:return t*e*2/r.components*r.byteLength;case Hd:return t*e*2/r.components*r.byteLength;case Zv:return t*e*3/r.components*r.byteLength;case Hn:return t*e*4/r.components*r.byteLength;case Gd:return t*e*4/r.components*r.byteLength;case $o:case jo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ko:case Zo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ff:case hf:return Math.max(t,16)*Math.max(e,8)/4;case cf:case df:return Math.max(t,8)*Math.max(e,8)/2;case pf:case mf:case vf:case _f:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case gf:case El:case xf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case wf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Af:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case bf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Rf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Lf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Nf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Df:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case If:case Uf:case Ff:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Of:case kf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Tl:case Bf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ay(t){switch(t){case bn:case Yv:return{byteLength:1,components:1};case Ia:case qv:case Li:return{byteLength:2,components:1};case Bd:case zd:return{byteLength:2,components:4};case ui:case kd:case ni:return{byteLength:4,components:1};case $v:case jv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Od}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Od);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function f0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function by(t){const e=new WeakMap;function n(o,l){const u=o.array,h=o.usage,d=u.byteLength,c=t.createBuffer();t.bindBuffer(l,c),t.bufferData(l,u,h),o.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,u){const h=l.array,d=l.updateRanges;if(t.bindBuffer(u,o),d.length===0)t.bufferSubData(u,0,h);else{d.sort((p,v)=>p.start-v.start);let c=0;for(let p=1;p<d.length;p++){const v=d[c],E=d[p];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++c,d[c]=E)}d.length=c+1;for(let p=0,v=d.length;p<v;p++){const E=d[p];t.bufferSubData(u,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var Ry=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Py=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ly=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ny=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Oy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ky=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,By=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$y=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ky=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Zy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,eM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rM="gl_FragColor = linearToOutputTexel( gl_FragColor );",sM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,oM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_M=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,SM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,AM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,CM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,LM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,XM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ZM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,QM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,rE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_E=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ME=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,EE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,UE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,FE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,OE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,JE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Ry,alphahash_pars_fragment:Cy,alphamap_fragment:Py,alphamap_pars_fragment:Ly,alphatest_fragment:Ny,alphatest_pars_fragment:Dy,aomap_fragment:Iy,aomap_pars_fragment:Uy,batching_pars_vertex:Fy,batching_vertex:Oy,begin_vertex:ky,beginnormal_vertex:By,bsdfs:zy,iridescence_fragment:Vy,bumpmap_pars_fragment:Hy,clipping_planes_fragment:Gy,clipping_planes_pars_fragment:Wy,clipping_planes_pars_vertex:Xy,clipping_planes_vertex:Yy,color_fragment:qy,color_pars_fragment:$y,color_pars_vertex:jy,color_vertex:Ky,common:Zy,cube_uv_reflection_fragment:Qy,defaultnormal_vertex:Jy,displacementmap_pars_vertex:eM,displacementmap_vertex:tM,emissivemap_fragment:nM,emissivemap_pars_fragment:iM,colorspace_fragment:rM,colorspace_pars_fragment:sM,envmap_fragment:aM,envmap_common_pars_fragment:oM,envmap_pars_fragment:lM,envmap_pars_vertex:uM,envmap_physical_pars_fragment:SM,envmap_vertex:cM,fog_vertex:fM,fog_pars_vertex:dM,fog_fragment:hM,fog_pars_fragment:pM,gradientmap_pars_fragment:mM,lightmap_pars_fragment:gM,lights_lambert_fragment:vM,lights_lambert_pars_fragment:_M,lights_pars_begin:xM,lights_toon_fragment:yM,lights_toon_pars_fragment:MM,lights_phong_fragment:EM,lights_phong_pars_fragment:TM,lights_physical_fragment:wM,lights_physical_pars_fragment:AM,lights_fragment_begin:bM,lights_fragment_maps:RM,lights_fragment_end:CM,lightprobes_pars_fragment:PM,logdepthbuf_fragment:LM,logdepthbuf_pars_fragment:NM,logdepthbuf_pars_vertex:DM,logdepthbuf_vertex:IM,map_fragment:UM,map_pars_fragment:FM,map_particle_fragment:OM,map_particle_pars_fragment:kM,metalnessmap_fragment:BM,metalnessmap_pars_fragment:zM,morphinstance_vertex:VM,morphcolor_vertex:HM,morphnormal_vertex:GM,morphtarget_pars_vertex:WM,morphtarget_vertex:XM,normal_fragment_begin:YM,normal_fragment_maps:qM,normal_pars_fragment:$M,normal_pars_vertex:jM,normal_vertex:KM,normalmap_pars_fragment:ZM,clearcoat_normal_fragment_begin:QM,clearcoat_normal_fragment_maps:JM,clearcoat_pars_fragment:eE,iridescence_pars_fragment:tE,opaque_fragment:nE,packing:iE,premultiplied_alpha_fragment:rE,project_vertex:sE,dithering_fragment:aE,dithering_pars_fragment:oE,roughnessmap_fragment:lE,roughnessmap_pars_fragment:uE,shadowmap_pars_fragment:cE,shadowmap_pars_vertex:fE,shadowmap_vertex:dE,shadowmask_pars_fragment:hE,skinbase_vertex:pE,skinning_pars_vertex:mE,skinning_vertex:gE,skinnormal_vertex:vE,specularmap_fragment:_E,specularmap_pars_fragment:xE,tonemapping_fragment:SE,tonemapping_pars_fragment:yE,transmission_fragment:ME,transmission_pars_fragment:EE,uv_pars_fragment:TE,uv_pars_vertex:wE,uv_vertex:AE,worldpos_vertex:bE,background_vert:RE,background_frag:CE,backgroundCube_vert:PE,backgroundCube_frag:LE,cube_vert:NE,cube_frag:DE,depth_vert:IE,depth_frag:UE,distance_vert:FE,distance_frag:OE,equirect_vert:kE,equirect_frag:BE,linedashed_vert:zE,linedashed_frag:VE,meshbasic_vert:HE,meshbasic_frag:GE,meshlambert_vert:WE,meshlambert_frag:XE,meshmatcap_vert:YE,meshmatcap_frag:qE,meshnormal_vert:$E,meshnormal_frag:jE,meshphong_vert:KE,meshphong_frag:ZE,meshphysical_vert:QE,meshphysical_frag:JE,meshtoon_vert:eT,meshtoon_frag:tT,points_vert:nT,points_frag:iT,shadow_vert:rT,shadow_frag:sT,sprite_vert:aT,sprite_frag:oT},pe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},ei={basic:{uniforms:Zt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Zt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Zt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Zt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Zt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Zt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Zt([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Zt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Zt([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Zt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Zt([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Zt([pe.common,pe.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Zt([pe.lights,pe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ei.physical={uniforms:Zt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Do={r:0,b:0,g:0},lT=new Rt,d0=new ze;d0.set(-1,0,0,0,1,0,0,0,1);function uT(t,e,n,i,r,s){const a=new Je(0);let o=r===!0?0:1,l,u,h=null,d=0,c=null;function p(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){const S=x.backgroundBlurriness>0;y=e.get(y,S)}return y}function v(x){let y=!1;const S=p(x);S===null?g(a,o):S&&S.isColor&&(g(S,1),y=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(x,y){const S=p(y);S&&(S.isCubeTexture||S.mapping===Yl)?(u===void 0&&(u=new ci(new Wa(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Us(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lT.makeRotationFromEuler(y.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(d0),u.material.toneMapped=qe.getTransfer(S.colorSpace)!==nt,(h!==S||d!==S.version||c!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,c=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ci(new Xa(2,2),new Yn({name:"BackgroundMaterial",uniforms:Us(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=qe.getTransfer(S.colorSpace)!==nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||c!==t.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,c=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,y){x.getRGB(Do,u0(t)),n.buffers.color.setClear(Do.r,Do.g,Do.b,y,s)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),o=y,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:v,addToRenderList:E,dispose:f}}function cT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=c(null);let s=r,a=!1;function o(C,P,B,H,F){let V=!1;const z=d(C,H,B,P);s!==z&&(s=z,u(s.object)),V=p(C,H,B,F),V&&v(C,H,B,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,S(C,P,B,H),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return t.createVertexArray()}function u(C){return t.bindVertexArray(C)}function h(C){return t.deleteVertexArray(C)}function d(C,P,B,H){const F=H.wireframe===!0;let V=i[P.id];V===void 0&&(V={},i[P.id]=V);const z=C.isInstancedMesh===!0?C.id:0;let I=V[z];I===void 0&&(I={},V[z]=I);let q=I[B.id];q===void 0&&(q={},I[B.id]=q);let Q=q[F];return Q===void 0&&(Q=c(l()),q[F]=Q),Q}function c(C){const P=[],B=[],H=[];for(let F=0;F<n;F++)P[F]=0,B[F]=0,H[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:H,object:C,attributes:{},index:null}}function p(C,P,B,H){const F=s.attributes,V=P.attributes;let z=0;const I=B.getAttributes();for(const q in I)if(I[q].location>=0){const re=F[q];let ae=V[q];if(ae===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor)),re===void 0||re.attribute!==ae||ae&&re.data!==ae.data)return!0;z++}return s.attributesNum!==z||s.index!==H}function v(C,P,B,H){const F={},V=P.attributes;let z=0;const I=B.getAttributes();for(const q in I)if(I[q].location>=0){let re=V[q];re===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(re=C.instanceColor));const ae={};ae.attribute=re,re&&re.data&&(ae.data=re.data),F[q]=ae,z++}s.attributes=F,s.attributesNum=z,s.index=H}function E(){const C=s.newAttributes;for(let P=0,B=C.length;P<B;P++)C[P]=0}function g(C){f(C,0)}function f(C,P){const B=s.newAttributes,H=s.enabledAttributes,F=s.attributeDivisors;B[C]=1,H[C]===0&&(t.enableVertexAttribArray(C),H[C]=1),F[C]!==P&&(t.vertexAttribDivisor(C,P),F[C]=P)}function x(){const C=s.newAttributes,P=s.enabledAttributes;for(let B=0,H=P.length;B<H;B++)P[B]!==C[B]&&(t.disableVertexAttribArray(B),P[B]=0)}function y(C,P,B,H,F,V,z){z===!0?t.vertexAttribIPointer(C,P,B,F,V):t.vertexAttribPointer(C,P,B,H,F,V)}function S(C,P,B,H){E();const F=H.attributes,V=B.getAttributes(),z=P.defaultAttributeValues;for(const I in V){const q=V[I];if(q.location>=0){let Q=F[I];if(Q===void 0&&(I==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),I==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor)),Q!==void 0){const re=Q.normalized,ae=Q.itemSize,Fe=e.get(Q);if(Fe===void 0)continue;const Be=Fe.buffer,De=Fe.type,j=Fe.bytesPerElement,ne=De===t.INT||De===t.UNSIGNED_INT||Q.gpuType===kd;if(Q.isInterleavedBufferAttribute){const te=Q.data,Me=te.stride,Ie=Q.offset;if(te.isInstancedInterleavedBuffer){for(let Ee=0;Ee<q.locationSize;Ee++)f(q.location+Ee,te.meshPerAttribute);C.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ee=0;Ee<q.locationSize;Ee++)g(q.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let Ee=0;Ee<q.locationSize;Ee++)y(q.location+Ee,ae/q.locationSize,De,re,Me*j,(Ie+ae/q.locationSize*Ee)*j,ne)}else{if(Q.isInstancedBufferAttribute){for(let te=0;te<q.locationSize;te++)f(q.location+te,Q.meshPerAttribute);C.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let te=0;te<q.locationSize;te++)g(q.location+te);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let te=0;te<q.locationSize;te++)y(q.location+te,ae/q.locationSize,De,re,ae*j,ae/q.locationSize*te*j,ne)}}else if(z!==void 0){const re=z[I];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(q.location,re);break;case 3:t.vertexAttrib3fv(q.location,re);break;case 4:t.vertexAttrib4fv(q.location,re);break;default:t.vertexAttrib1fv(q.location,re)}}}}x()}function w(){A();for(const C in i){const P=i[C];for(const B in P){const H=P[B];for(const F in H){const V=H[F];for(const z in V)h(V[z].object),delete V[z];delete H[F]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;const P=i[C.id];for(const B in P){const H=P[B];for(const F in H){const V=H[F];for(const z in V)h(V[z].object),delete V[z];delete H[F]}}delete i[C.id]}function b(C){for(const P in i){const B=i[P];for(const H in B){const F=B[H];if(F[C.id]===void 0)continue;const V=F[C.id];for(const z in V)h(V[z].object),delete V[z];delete F[C.id]}}}function m(C){for(const P in i){const B=i[P],H=C.isInstancedMesh===!0?C.id:0,F=B[H];if(F!==void 0){for(const V in F){const z=F[V];for(const I in z)h(z[I].object),delete z[I];delete F[V]}delete B[H],Object.keys(B).length===0&&delete i[P]}}}function A(){L(),a=!0,s!==r&&(s=r,u(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:L,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:m,releaseStatesOfProgram:b,initAttributes:E,enableAttribute:g,disableUnusedAttributes:x}}function fT(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,h){h!==0&&(t.drawArraysInstanced(i,l,u,h),n.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let c=0;for(let p=0;p<h;p++)c+=u[p];n.update(c,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function dT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==Hn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const m=b===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==bn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ni&&!m)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=l(u);h!==u&&(ke("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=n.logarithmicDepthBuffer===!0,c=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&c===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:c,maxTextures:p,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:S,maxSamples:w,samples:T}}function hT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Sr,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c){const p=d.length!==0||c||i!==0||r;return r=c,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,c){n=h(d,c,0)},this.setState=function(d,c,p){const v=d.clippingPlanes,E=d.clipIntersection,g=d.clipShadows,f=t.get(d);if(!r||v===null||v.length===0||s&&!g)s?h(null):u();else{const x=s?0:i,y=x*4;let S=f.clippingState||null;l.value=S,S=h(v,c,y,p);for(let w=0;w!==y;++w)S[w]=n[w];f.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,c,p,v){const E=d!==null?d.length:0;let g=null;if(E!==0){if(g=l.value,v!==!0||g===null){const f=p+E*4,x=c.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<f)&&(g=new Float32Array(f));for(let y=0,S=p;y!==E;++y,S+=4)a.copy(d[y]).applyMatrix4(x,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}const Qi=4,qp=[.125,.215,.35,.446,.526,.582],Mr=20,pT=256,ea=new $d,$p=new Je;let Ju=null,ec=0,tc=0,nc=!1;const mT=new Y;class jp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=mT}=s;Ju=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ju,ec,tc),this._renderer.xr.enabled=nc,e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ur||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ju=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Li,format:Hn,colorSpace:wl,depthBuffer:!1},r=Kp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kp(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gT(s)),this._blurMaterial=_T(s,e,n),this._ggxMaterial=vT(s,e,n)}return r}_compileMaterial(e){const n=new ci(new Ii,e);this._renderer.compile(n,ea)}_sceneToCubeUV(e,n,i,r,s){const l=new zn(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,c=d.autoClear,p=d.toneMapping;d.getClearColor($p),d.toneMapping=ai,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ci(new Wa,new s0({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let f=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,f=!0):(g.color.copy($p),f=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):S===1?(l.up.set(0,0,u[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const w=this._cubeSize;is(r,S*w,y>2?w:0,w,w),d.setRenderTarget(r),f&&d.render(E,l),d.render(e,l)}d.toneMapping=p,d.autoClear=c,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ur||e.mapping===Ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;is(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ea)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),d=Math.sqrt(u*u-h*h),c=0+u*1.25,p=d*c,{_lodMax:v}=this,E=this._sizeLods[i],g=3*E*(i>v-Qi?i-v+Qi:0),f=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-n,is(s,g,f,3*E,2*E),r.setRenderTarget(s),r.render(o,ea),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,is(e,g,f,3*E,2*E),r.setRenderTarget(e),r.render(o,ea)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[r];d.material=u;const c=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Mr-1),E=s/v,g=isFinite(s)?1+Math.floor(h*E):Mr;g>Mr&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Mr}`);const f=[];let x=0;for(let b=0;b<Mr;++b){const m=b/E,A=Math.exp(-m*m/2);f.push(A),b===0?x+=A:b<g&&(x+=2*A)}for(let b=0;b<f.length;b++)f[b]=f[b]/x;c.envMap.value=e.texture,c.samples.value=g,c.weights.value=f,c.latitudinal.value=a==="latitudinal",o&&(c.poleAxis.value=o);const{_lodMax:y}=this;c.dTheta.value=v,c.mipInt.value=y-i;const S=this._sizeLods[r],w=3*S*(r>y-Qi?r-y+Qi:0),T=4*(this._cubeSize-S);is(n,w,T,3*S,2*S),l.setRenderTarget(n),l.render(d,ea)}}function gT(t){const e=[],n=[],i=[];let r=t;const s=t-Qi+1+qp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Qi?l=qp[a-t+Qi-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),h=-u,d=1+u,c=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,v=6,E=3,g=2,f=1,x=new Float32Array(E*v*p),y=new Float32Array(g*v*p),S=new Float32Array(f*v*p);for(let T=0;T<p;T++){const b=T%3*2/3-1,m=T>2?0:-1,A=[b,m,0,b+2/3,m,0,b+2/3,m+1,0,b,m,0,b+2/3,m+1,0,b,m+1,0];x.set(A,E*v*T),y.set(c,g*v*T);const L=[T,T,T,T,T,T];S.set(L,f*v*T)}const w=new Ii;w.setAttribute("position",new li(x,E)),w.setAttribute("uv",new li(y,g)),w.setAttribute("faceIndex",new li(S,f)),i.push(new ci(w,null)),r>Qi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Kp(t,e,n){const i=new oi(t,e,n);return i.texture.mapping=Yl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function is(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function vT(t,e,n){return new Yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$l(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function _T(t,e,n){const i=new Float32Array(Mr),r=new Y(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Zp(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Qp(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function $l(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class h0 extends oi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new o0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Wa(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Ti});s.uniforms.tEquirect.value=n;const a=new ci(r,s),o=n.minFilter;return n.minFilter===Ar&&(n.minFilter=jt),new Ty(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function xT(t){let e=new WeakMap,n=new WeakMap,i=null;function r(c,p=!1){return c==null?null:p?a(c):s(c)}function s(c){if(c&&c.isTexture){const p=c.mapping;if(p===Au||p===bu)if(e.has(c)){const v=e.get(c).texture;return o(v,c.mapping)}else{const v=c.image;if(v&&v.height>0){const E=new h0(v.height);return E.fromEquirectangularTexture(t,c),e.set(c,E),c.addEventListener("dispose",u),o(E.texture,c.mapping)}else return null}}return c}function a(c){if(c&&c.isTexture){const p=c.mapping,v=p===Au||p===bu,E=p===Ur||p===Ds;if(v||E){let g=n.get(c);const f=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return i===null&&(i=new jp(t)),g=v?i.fromEquirectangular(c,g):i.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,n.set(c,g),g.texture;if(g!==void 0)return g.texture;{const x=c.image;return v&&x&&x.height>0||E&&x&&l(x)?(i===null&&(i=new jp(t)),g=v?i.fromEquirectangular(c):i.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,n.set(c,g),c.addEventListener("dispose",h),g.texture):null}}}return c}function o(c,p){return p===Au?c.mapping=Ur:p===bu&&(c.mapping=Ds),c}function l(c){let p=0;const v=6;for(let E=0;E<v;E++)c[E]!==void 0&&p++;return p===v}function u(c){const p=c.target;p.removeEventListener("dispose",u);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function h(c){const p=c.target;p.removeEventListener("dispose",h);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function ST(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Es("WebGLRenderer: "+i+" extension not supported."),r}}}function yT(t,e,n,i){const r={},s=new WeakMap;function a(d){const c=d.target;c.index!==null&&e.remove(c.index);for(const v in c.attributes)e.remove(c.attributes[v]);c.removeEventListener("dispose",a),delete r[c.id];const p=s.get(c);p&&(e.remove(p),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,n.memory.geometries--}function o(d,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,n.memory.geometries++),c}function l(d){const c=d.attributes;for(const p in c)e.update(c[p],t.ARRAY_BUFFER)}function u(d){const c=[],p=d.index,v=d.attributes.position;let E=0;if(v===void 0)return;if(p!==null){const x=p.array;E=p.version;for(let y=0,S=x.length;y<S;y+=3){const w=x[y+0],T=x[y+1],b=x[y+2];c.push(w,T,T,b,b,w)}}else{const x=v.array;E=v.version;for(let y=0,S=x.length/3-1;y<S;y+=3){const w=y+0,T=y+1,b=y+2;c.push(w,T,T,b,b,w)}}const g=new(v.count>=65535?r0:i0)(c,1);g.version=E;const f=s.get(d);f&&e.remove(f),s.set(d,g)}function h(d){const c=s.get(d);if(c){const p=d.index;p!==null&&c.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function MT(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,c){t.drawElements(i,c,s,d*a),n.update(c,i,1)}function u(d,c,p){p!==0&&(t.drawElementsInstanced(i,c,s,d*a,p),n.update(c,i,p))}function h(d,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,s,d,0,p);let E=0;for(let g=0;g<p;g++)E+=c[g];n.update(E,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function ET(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function TT(t,e,n){const i=new WeakMap,r=new yt;function s(a,o,l){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let c=i.get(o);if(c===void 0||c.count!==d){let L=function(){m.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var p=L;c!==void 0&&c.texture.dispose();const v=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),E===!0&&(S=2),g===!0&&(S=3);let w=o.attributes.position.count*S,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const b=new Float32Array(w*T*4*d),m=new e0(b,w,T,d);m.type=ni,m.needsUpdate=!0;const A=S*4;for(let C=0;C<d;C++){const P=f[C],B=x[C],H=y[C],F=w*T*4*C;for(let V=0;V<P.count;V++){const z=V*A;v===!0&&(r.fromBufferAttribute(P,V),b[F+z+0]=r.x,b[F+z+1]=r.y,b[F+z+2]=r.z,b[F+z+3]=0),E===!0&&(r.fromBufferAttribute(B,V),b[F+z+4]=r.x,b[F+z+5]=r.y,b[F+z+6]=r.z,b[F+z+7]=0),g===!0&&(r.fromBufferAttribute(H,V),b[F+z+8]=r.x,b[F+z+9]=r.y,b[F+z+10]=r.z,b[F+z+11]=H.itemSize===4?r.w:1)}}c={count:d,texture:m,size:new Qe(w,T)},i.set(o,c),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let g=0;g<u.length;g++)v+=u[g];const E=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",c.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",c.size)}return{update:s}}function wT(t,e,n,i,r){let s=new WeakMap;function a(u){const h=r.render.frame,d=u.geometry,c=e.get(u,d);if(s.get(c)!==h&&(e.update(c),s.set(c,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return c}function o(){s=new WeakMap}function l(u){const h=u.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const AT={[kv]:"LINEAR_TONE_MAPPING",[Bv]:"REINHARD_TONE_MAPPING",[zv]:"CINEON_TONE_MAPPING",[Vv]:"ACES_FILMIC_TONE_MAPPING",[Gv]:"AGX_TONE_MAPPING",[Wv]:"NEUTRAL_TONE_MAPPING",[Hv]:"CUSTOM_TONE_MAPPING"};function bT(t,e,n,i,r,s){const a=new oi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Is(e,n):void 0}),o=new oi(e,n,{type:Li,depthBuffer:!1,stencilBuffer:!1}),l=new Ii;l.setAttribute("position",new Ai([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ai([0,2,0,0,2,0],2));const u=new yy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new ci(l,u),d=new $d(-1,1,1,-1,0,1);let c=null,p=null,v=!1,E,g=null,f=[],x=!1;this.setSize=function(y,S){a.setSize(y,S),o.setSize(y,S);for(let w=0;w<f.length;w++){const T=f[w];T.setSize&&T.setSize(y,S)}},this.setEffects=function(y){f=y,x=f.length>0&&f[0].isRenderPass===!0;const S=a.width,w=a.height;for(let T=0;T<f.length;T++){const b=f[T];b.setSize&&b.setSize(S,w)}},this.begin=function(y,S){if(v||y.toneMapping===ai&&f.length===0)return!1;if(g=S,S!==null){const w=S.width,T=S.height;(a.width!==w||a.height!==T)&&this.setSize(w,T)}return x===!1&&y.setRenderTarget(a),E=y.toneMapping,y.toneMapping=ai,!0},this.hasRenderPass=function(){return x},this.end=function(y,S){y.toneMapping=E,v=!0;let w=a,T=o;for(let b=0;b<f.length;b++){const m=f[b];if(m.enabled!==!1&&(m.render(y,T,w,S),m.needsSwap!==!1)){const A=w;w=T,T=A}}if(c!==y.outputColorSpace||p!==y.toneMapping){c=y.outputColorSpace,p=y.toneMapping,u.defines={},qe.getTransfer(c)===nt&&(u.defines.SRGB_TRANSFER="");const b=AT[p];b&&(u.defines[b]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(g),y.render(h,d),g=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),u.dispose()}}const p0=new en,Vf=new Is(1,1),m0=new e0,g0=new ZS,v0=new o0,Jp=[],em=[],tm=new Float32Array(16),nm=new Float32Array(9),im=new Float32Array(4);function zs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Jp[r];if(s===void 0&&(s=new Float32Array(r),Jp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function jl(t,e){let n=em[e];n===void 0&&(n=new Int32Array(e),em[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function RT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function CT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function LT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function NT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Nt(n,i))return;im.set(i),t.uniformMatrix2fv(this.addr,!1,im),Dt(n,i)}}function DT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Nt(n,i))return;nm.set(i),t.uniformMatrix3fv(this.addr,!1,nm),Dt(n,i)}}function IT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Nt(n,i))return;tm.set(i),t.uniformMatrix4fv(this.addr,!1,tm),Dt(n,i)}}function UT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function OT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function kT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function BT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function zT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function VT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function HT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function GT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Vf.compareFunction=n.isReversedDepthBuffer()?Xd:Wd,s=Vf):s=p0,n.setTexture2D(e||s,r)}function WT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||g0,r)}function XT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||v0,r)}function YT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||m0,r)}function qT(t){switch(t){case 5126:return RT;case 35664:return CT;case 35665:return PT;case 35666:return LT;case 35674:return NT;case 35675:return DT;case 35676:return IT;case 5124:case 35670:return UT;case 35667:case 35671:return FT;case 35668:case 35672:return OT;case 35669:case 35673:return kT;case 5125:return BT;case 36294:return zT;case 36295:return VT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return YT}}function $T(t,e){t.uniform1fv(this.addr,e)}function jT(t,e){const n=zs(e,this.size,2);t.uniform2fv(this.addr,n)}function KT(t,e){const n=zs(e,this.size,3);t.uniform3fv(this.addr,n)}function ZT(t,e){const n=zs(e,this.size,4);t.uniform4fv(this.addr,n)}function QT(t,e){const n=zs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function JT(t,e){const n=zs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function e1(t,e){const n=zs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function t1(t,e){t.uniform1iv(this.addr,e)}function n1(t,e){t.uniform2iv(this.addr,e)}function i1(t,e){t.uniform3iv(this.addr,e)}function r1(t,e){t.uniform4iv(this.addr,e)}function s1(t,e){t.uniform1uiv(this.addr,e)}function a1(t,e){t.uniform2uiv(this.addr,e)}function o1(t,e){t.uniform3uiv(this.addr,e)}function l1(t,e){t.uniform4uiv(this.addr,e)}function u1(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Vf:a=p0;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function c1(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||g0,s[a])}function f1(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||v0,s[a])}function d1(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||m0,s[a])}function h1(t){switch(t){case 5126:return $T;case 35664:return jT;case 35665:return KT;case 35666:return ZT;case 35674:return QT;case 35675:return JT;case 35676:return e1;case 5124:case 35670:return t1;case 35667:case 35671:return n1;case 35668:case 35672:return i1;case 35669:case 35673:return r1;case 5125:return s1;case 36294:return a1;case 36295:return o1;case 36296:return l1;case 35678:case 36198:case 36298:case 36306:case 35682:return u1;case 35679:case 36299:case 36307:return c1;case 35680:case 36300:case 36308:case 36293:return f1;case 36289:case 36303:case 36311:case 36292:return d1}}class p1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=qT(n.type)}}class m1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=h1(n.type)}}class g1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const ic=/(\w+)(\])?(\[|\.)?/g;function rm(t,e){t.seq.push(e),t.map[e.id]=e}function v1(t,e,n){const i=t.name,r=i.length;for(ic.lastIndex=0;;){const s=ic.exec(i),a=ic.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){rm(n,u===void 0?new p1(o,t,e):new m1(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new g1(o),rm(n,d)),n=d}}}class Qo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);v1(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function sm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const _1=37297;let x1=0;function S1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const am=new ze;function y1(t){qe._getMatrix(am,qe.workingColorSpace,t);const e=`mat3( ${am.elements.map(n=>n.toFixed(4))} )`;switch(qe.getTransfer(t)){case Al:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function om(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+S1(t.getShaderSource(e),o)}else return s}function M1(t,e){const n=y1(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const E1={[kv]:"Linear",[Bv]:"Reinhard",[zv]:"Cineon",[Vv]:"ACESFilmic",[Gv]:"AgX",[Wv]:"Neutral",[Hv]:"Custom"};function T1(t,e){const n=E1[e];return n===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Io=new Y;function w1(){qe.getLuminanceCoefficients(Io);const t=Io.x.toFixed(4),e=Io.y.toFixed(4),n=Io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function b1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function R1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function oa(t){return t!==""}function lm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function um(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hf(t){return t.replace(C1,L1)}const P1=new Map;function L1(t,e){let n=Ge[e];if(n===void 0){const i=P1.get(e);if(i!==void 0)n=Ge[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Hf(n)}const N1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cm(t){return t.replace(N1,D1)}function D1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const I1={[qo]:"SHADOWMAP_TYPE_PCF",[aa]:"SHADOWMAP_TYPE_VSM"};function U1(t){return I1[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const F1={[Ur]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[Yl]:"ENVMAP_TYPE_CUBE_UV"};function O1(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":F1[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const k1={[Ds]:"ENVMAP_MODE_REFRACTION"};function B1(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":k1[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const z1={[Ov]:"ENVMAP_BLENDING_MULTIPLY",[PS]:"ENVMAP_BLENDING_MIX",[LS]:"ENVMAP_BLENDING_ADD"};function V1(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":z1[t.combine]||"ENVMAP_BLENDING_NONE"}function H1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function G1(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=U1(n),u=O1(n),h=B1(n),d=V1(n),c=H1(n),p=A1(n),v=b1(s),E=r.createProgram();let g,f,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(oa).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(oa).join(`
`),f.length>0&&(f+=`
`)):(g=[fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),f=[fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ai?"#define TONE_MAPPING":"",n.toneMapping!==ai?Ge.tonemapping_pars_fragment:"",n.toneMapping!==ai?T1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,M1("linearToOutputTexel",n.outputColorSpace),w1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(oa).join(`
`)),a=Hf(a),a=lm(a,n),a=um(a,n),o=Hf(o),o=lm(o,n),o=um(o,n),a=cm(a),o=cm(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=x+g+a,S=x+f+o,w=sm(r,r.VERTEX_SHADER,y),T=sm(r,r.FRAGMENT_SHADER,S);r.attachShader(E,w),r.attachShader(E,T),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function b(C){if(t.debug.checkShaderErrors){const P=r.getProgramInfoLog(E)||"",B=r.getShaderInfoLog(w)||"",H=r.getShaderInfoLog(T)||"",F=P.trim(),V=B.trim(),z=H.trim();let I=!0,q=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(I=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,w,T);else{const Q=om(r,w,"vertex"),re=om(r,T,"fragment");Ke("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+Q+`
`+re)}else F!==""?ke("WebGLProgram: Program Info Log:",F):(V===""||z==="")&&(q=!1);q&&(C.diagnostics={runnable:I,programLog:F,vertexShader:{log:V,prefix:g},fragmentShader:{log:z,prefix:f}})}r.deleteShader(w),r.deleteShader(T),m=new Qo(r,E),A=R1(r,E)}let m;this.getUniforms=function(){return m===void 0&&b(this),m};let A;this.getAttributes=function(){return A===void 0&&b(this),A};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(E,_1)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=x1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=w,this.fragmentShader=T,this}let W1=0;class X1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Y1(e),n.set(e,i)),i}}class Y1{constructor(e){this.id=W1++,this.code=e,this.usedTimes=0}}function q1(t){return t===Fr||t===El||t===Tl}function $1(t,e,n,i,r,s){const a=new t0,o=new X1,l=new Set,u=[],h=new Map,d=i.logarithmicDepthBuffer;let c=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(m){return l.add(m),m===0?"uv":`uv${m}`}function E(m,A,L,C,P,B){const H=C.fog,F=P.geometry,V=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?C.environment:null,z=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,I=e.get(m.envMap||V,z),q=I&&I.mapping===Yl?I.image.height:null,Q=p[m.type];m.precision!==null&&(c=i.getMaxPrecision(m.precision),c!==m.precision&&ke("WebGLProgram.getParameters:",m.precision,"not supported, using",c,"instead."));const re=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ae=re!==void 0?re.length:0;let Fe=0;F.morphAttributes.position!==void 0&&(Fe=1),F.morphAttributes.normal!==void 0&&(Fe=2),F.morphAttributes.color!==void 0&&(Fe=3);let Be,De,j,ne;if(Q){const we=ei[Q];Be=we.vertexShader,De=we.fragmentShader}else{Be=m.vertexShader,De=m.fragmentShader;const we=o.getVertexShaderStage(m),_t=o.getFragmentShaderStage(m);o.update(m,we,_t),j=we.id,ne=_t.id}const te=t.getRenderTarget(),Me=t.state.buffers.depth.getReversed(),Ie=P.isInstancedMesh===!0,Ee=P.isBatchedMesh===!0,Ye=!!m.map,Te=!!m.matcap,be=!!I,Ce=!!m.aoMap,ve=!!m.lightMap,et=!!m.bumpMap&&m.wireframe===!1,Ct=!!m.normalMap,It=!!m.displacementMap,kt=!!m.emissiveMap,vt=!!m.metalnessMap,wt=!!m.roughnessMap,D=m.anisotropy>0,rn=m.clearcoat>0,tt=m.dispersion>0,R=m.iridescence>0,_=m.sheen>0,k=m.transmission>0,X=D&&!!m.anisotropyMap,K=rn&&!!m.clearcoatMap,oe=rn&&!!m.clearcoatNormalMap,ue=rn&&!!m.clearcoatRoughnessMap,Z=R&&!!m.iridescenceMap,ee=R&&!!m.iridescenceThicknessMap,ce=_&&!!m.sheenColorMap,Pe=_&&!!m.sheenRoughnessMap,he=!!m.specularMap,fe=!!m.specularColorMap,Ue=!!m.specularIntensityMap,Oe=k&&!!m.transmissionMap,Ve=k&&!!m.thicknessMap,N=!!m.gradientMap,le=!!m.alphaMap,J=m.alphaTest>0,de=!!m.alphaHash,_e=!!m.extensions;let ie=ai;m.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ie=t.toneMapping);const Re={shaderID:Q,shaderType:m.type,shaderName:m.name,vertexShader:Be,fragmentShader:De,defines:m.defines,customVertexShaderID:j,customFragmentShaderID:ne,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:c,batching:Ee,batchingColor:Ee&&P._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&P.instanceColor!==null,instancingMorph:Ie&&P.morphTexture!==null,outputColorSpace:te===null?t.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Ye,matcap:Te,envMap:be,envMapMode:be&&I.mapping,envMapCubeUVHeight:q,aoMap:Ce,lightMap:ve,bumpMap:et,normalMap:Ct,displacementMap:It,emissiveMap:kt,normalMapObjectSpace:Ct&&m.normalMapType===IS,normalMapTangentSpace:Ct&&m.normalMapType===Mp,packedNormalMap:Ct&&m.normalMapType===Mp&&q1(m.normalMap.format),metalnessMap:vt,roughnessMap:wt,anisotropy:D,anisotropyMap:X,clearcoat:rn,clearcoatMap:K,clearcoatNormalMap:oe,clearcoatRoughnessMap:ue,dispersion:tt,iridescence:R,iridescenceMap:Z,iridescenceThicknessMap:ee,sheen:_,sheenColorMap:ce,sheenRoughnessMap:Pe,specularMap:he,specularColorMap:fe,specularIntensityMap:Ue,transmission:k,transmissionMap:Oe,thicknessMap:Ve,gradientMap:N,opaque:m.transparent===!1&&m.blending===Ms&&m.alphaToCoverage===!1,alphaMap:le,alphaTest:J,alphaHash:de,combine:m.combine,mapUv:Ye&&v(m.map.channel),aoMapUv:Ce&&v(m.aoMap.channel),lightMapUv:ve&&v(m.lightMap.channel),bumpMapUv:et&&v(m.bumpMap.channel),normalMapUv:Ct&&v(m.normalMap.channel),displacementMapUv:It&&v(m.displacementMap.channel),emissiveMapUv:kt&&v(m.emissiveMap.channel),metalnessMapUv:vt&&v(m.metalnessMap.channel),roughnessMapUv:wt&&v(m.roughnessMap.channel),anisotropyMapUv:X&&v(m.anisotropyMap.channel),clearcoatMapUv:K&&v(m.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&v(m.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&v(m.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&v(m.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&v(m.sheenRoughnessMap.channel),specularMapUv:he&&v(m.specularMap.channel),specularColorMapUv:fe&&v(m.specularColorMap.channel),specularIntensityMapUv:Ue&&v(m.specularIntensityMap.channel),transmissionMapUv:Oe&&v(m.transmissionMap.channel),thicknessMapUv:Ve&&v(m.thicknessMap.channel),alphaMapUv:le&&v(m.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ct||D),vertexNormals:!!F.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!F.attributes.uv&&(Ye||le),fog:!!H,useFog:m.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||F.attributes.normal===void 0&&Ct===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Fe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ye&&m.map.isVideoTexture===!0&&qe.getTransfer(m.map.colorSpace)===nt,decodeVideoTextureEmissive:kt&&m.emissiveMap.isVideoTexture===!0&&qe.getTransfer(m.emissiveMap.colorSpace)===nt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===xi,flipSided:m.side===fn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:_e&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&m.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function g(m){const A=[];if(m.shaderID?A.push(m.shaderID):(A.push(m.customVertexShaderID),A.push(m.customFragmentShaderID)),m.defines!==void 0)for(const L in m.defines)A.push(L),A.push(m.defines[L]);return m.isRawShaderMaterial===!1&&(f(A,m),x(A,m),A.push(t.outputColorSpace)),A.push(m.customProgramCacheKey),A.join()}function f(m,A){m.push(A.precision),m.push(A.outputColorSpace),m.push(A.envMapMode),m.push(A.envMapCubeUVHeight),m.push(A.mapUv),m.push(A.alphaMapUv),m.push(A.lightMapUv),m.push(A.aoMapUv),m.push(A.bumpMapUv),m.push(A.normalMapUv),m.push(A.displacementMapUv),m.push(A.emissiveMapUv),m.push(A.metalnessMapUv),m.push(A.roughnessMapUv),m.push(A.anisotropyMapUv),m.push(A.clearcoatMapUv),m.push(A.clearcoatNormalMapUv),m.push(A.clearcoatRoughnessMapUv),m.push(A.iridescenceMapUv),m.push(A.iridescenceThicknessMapUv),m.push(A.sheenColorMapUv),m.push(A.sheenRoughnessMapUv),m.push(A.specularMapUv),m.push(A.specularColorMapUv),m.push(A.specularIntensityMapUv),m.push(A.transmissionMapUv),m.push(A.thicknessMapUv),m.push(A.combine),m.push(A.fogExp2),m.push(A.sizeAttenuation),m.push(A.morphTargetsCount),m.push(A.morphAttributeCount),m.push(A.numDirLights),m.push(A.numPointLights),m.push(A.numSpotLights),m.push(A.numSpotLightMaps),m.push(A.numHemiLights),m.push(A.numRectAreaLights),m.push(A.numDirLightShadows),m.push(A.numPointLightShadows),m.push(A.numSpotLightShadows),m.push(A.numSpotLightShadowsWithMaps),m.push(A.numLightProbes),m.push(A.shadowMapType),m.push(A.toneMapping),m.push(A.numClippingPlanes),m.push(A.numClipIntersection),m.push(A.depthPacking)}function x(m,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),m.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),m.push(a.mask)}function y(m){const A=p[m.type];let L;if(A){const C=ei[A];L=_y.clone(C.uniforms)}else L=m.uniforms;return L}function S(m,A){let L=h.get(A);return L!==void 0?++L.usedTimes:(L=new G1(t,A,m,r),u.push(L),h.set(A,L)),L}function w(m){if(--m.usedTimes===0){const A=u.indexOf(m);u[A]=u[u.length-1],u.pop(),h.delete(m.cacheKey),m.destroy()}}function T(m){o.remove(m)}function b(){o.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:y,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:b}}function j1(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function K1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function dm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function hm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(c){let p=0;return c.isInstancedMesh&&(p+=2),c.isSkinnedMesh&&(p+=1),p}function o(c,p,v,E,g,f){let x=t[e];return x===void 0?(x={id:c.id,object:c,geometry:p,material:v,materialVariant:a(c),groupOrder:E,renderOrder:c.renderOrder,z:g,group:f},t[e]=x):(x.id=c.id,x.object=c,x.geometry=p,x.material=v,x.materialVariant=a(c),x.groupOrder=E,x.renderOrder=c.renderOrder,x.z=g,x.group=f),e++,x}function l(c,p,v,E,g,f){const x=o(c,p,v,E,g,f);v.transmission>0?i.push(x):v.transparent===!0?r.push(x):n.push(x)}function u(c,p,v,E,g,f){const x=o(c,p,v,E,g,f);v.transmission>0?i.unshift(x):v.transparent===!0?r.unshift(x):n.unshift(x)}function h(c,p,v){n.length>1&&n.sort(c||K1),i.length>1&&i.sort(p||dm),r.length>1&&r.sort(p||dm),v&&(n.reverse(),i.reverse(),r.reverse())}function d(){for(let c=e,p=t.length;c<p;c++){const v=t[c];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:d,sort:h}}function Z1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new hm,t.set(i,[a])):r>=s.length?(a=new hm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Q1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new Je};break;case"SpotLight":n={position:new Y,direction:new Y,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function J1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ew=0;function tw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function nw(t){const e=new Q1,n=J1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Y);const r=new Y,s=new Rt,a=new Rt;function o(u){let h=0,d=0,c=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,v=0,E=0,g=0,f=0,x=0,y=0,S=0,w=0,T=0,b=0;u.sort(tw);for(let A=0,L=u.length;A<L;A++){const C=u[A],P=C.color,B=C.intensity,H=C.distance;let F=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Fr?F=C.shadow.map.texture:F=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=P.r*B,d+=P.g*B,c+=P.b*B;else if(C.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(C.sh.coefficients[V],B);b++}else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const z=C.shadow,I=n.get(C);I.shadowIntensity=z.intensity,I.shadowBias=z.bias,I.shadowNormalBias=z.normalBias,I.shadowRadius=z.radius,I.shadowMapSize=z.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=F,i.directionalShadowMatrix[p]=C.shadow.matrix,x++}i.directional[p]=V,p++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(P).multiplyScalar(B),V.distance=H,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,i.spot[E]=V;const z=C.shadow;if(C.map&&(i.spotLightMap[w]=C.map,w++,z.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[E]=z.matrix,C.castShadow){const I=n.get(C);I.shadowIntensity=z.intensity,I.shadowBias=z.bias,I.shadowNormalBias=z.normalBias,I.shadowRadius=z.radius,I.shadowMapSize=z.mapSize,i.spotShadow[E]=I,i.spotShadowMap[E]=F,S++}E++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy(P).multiplyScalar(B),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=V,g++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const z=C.shadow,I=n.get(C);I.shadowIntensity=z.intensity,I.shadowBias=z.bias,I.shadowNormalBias=z.normalBias,I.shadowRadius=z.radius,I.shadowMapSize=z.mapSize,I.shadowCameraNear=z.camera.near,I.shadowCameraFar=z.camera.far,i.pointShadow[v]=I,i.pointShadowMap[v]=F,i.pointShadowMatrix[v]=C.shadow.matrix,y++}i.point[v]=V,v++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(B),V.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[f]=V,f++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=c;const m=i.hash;(m.directionalLength!==p||m.pointLength!==v||m.spotLength!==E||m.rectAreaLength!==g||m.hemiLength!==f||m.numDirectionalShadows!==x||m.numPointShadows!==y||m.numSpotShadows!==S||m.numSpotMaps!==w||m.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=g,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=b,m.directionalLength=p,m.pointLength=v,m.spotLength=E,m.rectAreaLength=g,m.hemiLength=f,m.numDirectionalShadows=x,m.numPointShadows=y,m.numSpotShadows=S,m.numSpotMaps=w,m.numLightProbes=b,i.version=ew++)}function l(u,h){let d=0,c=0,p=0,v=0,E=0;const g=h.matrixWorldInverse;for(let f=0,x=u.length;f<x;f++){const y=u[f];if(y.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),d++}else if(y.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const S=i.point[c];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),c++}else if(y.isHemisphereLight){const S=i.hemi[E];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),E++}}}return{setup:o,setupView:l,state:i}}function pm(t){const e=new nw(t),n=[],i=[],r=[];function s(c){d.camera=c,n.length=0,i.length=0,r.length=0}function a(c){n.push(c)}function o(c){i.push(c)}function l(c){r.push(c)}function u(){e.setup(n)}function h(c){e.setupView(n,c)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function iw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new pm(t),e.set(r,[o])):s>=a.length?(o=new pm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const rw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,aw=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],ow=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],mm=new Rt,ta=new Y,rc=new Y;function lw(t,e,n){let i=new a0;const r=new Qe,s=new Qe,a=new yt,o=new My,l=new Ey,u={},h=n.maxTextureSize,d={[ur]:fn,[fn]:ur,[xi]:xi},c=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:rw,fragmentShader:sw}),p=c.clone();p.defines.HORIZONTAL_PASS=1;const v=new Ii;v.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ci(v,c),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qo;let f=this.type;this.render=function(T,b,m){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===fS&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=qo);const A=t.getRenderTarget(),L=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),P=t.state;P.setBlending(Ti),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const B=f!==this.type;B&&b.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(F=>F.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,F=T.length;H<F;H++){const V=T[H],z=V.shadow;if(z===void 0){ke("WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const I=z.getFrameExtents();r.multiply(I),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/I.x),r.x=s.x*I.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/I.y),r.y=s.y*I.y,z.mapSize.y=s.y));const q=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=q,z.map===null||B===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===aa){if(V.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new oi(r.x,r.y,{format:Fr,type:Li,minFilter:jt,magFilter:jt,generateMipmaps:!1}),z.map.texture.name=V.name+".shadowMap",z.map.depthTexture=new Is(r.x,r.y,ni),z.map.depthTexture.name=V.name+".shadowMapDepth",z.map.depthTexture.format=Ni,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=zt,z.map.depthTexture.magFilter=zt}else V.isPointLight?(z.map=new h0(r.x),z.map.depthTexture=new gy(r.x,ui)):(z.map=new oi(r.x,r.y),z.map.depthTexture=new Is(r.x,r.y,ui)),z.map.depthTexture.name=V.name+".shadowMap",z.map.depthTexture.format=Ni,this.type===qo?(z.map.depthTexture.compareFunction=q?Xd:Wd,z.map.depthTexture.minFilter=jt,z.map.depthTexture.magFilter=jt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=zt,z.map.depthTexture.magFilter=zt);z.camera.updateProjectionMatrix()}const Q=z.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<Q;re++){if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,re),t.clear();else{re===0&&(t.setRenderTarget(z.map),t.clear());const ae=z.getViewport(re);a.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),P.viewport(a)}if(V.isPointLight){const ae=z.camera,Fe=z.matrix,Be=V.distance||ae.far;Be!==ae.far&&(ae.far=Be,ae.updateProjectionMatrix()),ta.setFromMatrixPosition(V.matrixWorld),ae.position.copy(ta),rc.copy(ae.position),rc.add(aw[re]),ae.up.copy(ow[re]),ae.lookAt(rc),ae.updateMatrixWorld(),Fe.makeTranslation(-ta.x,-ta.y,-ta.z),mm.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),z._frustum.setFromProjectionMatrix(mm,ae.coordinateSystem,ae.reversedDepth)}else z.updateMatrices(V);i=z.getFrustum(),S(b,m,z.camera,V,this.type)}z.isPointLightShadow!==!0&&this.type===aa&&x(z,m),z.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(A,L,C)};function x(T,b){const m=e.update(E);c.defines.VSM_SAMPLES!==T.blurSamples&&(c.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,c.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new oi(r.x,r.y,{format:Fr,type:Li})),c.uniforms.shadow_pass.value=T.map.depthTexture,c.uniforms.resolution.value=T.mapSize,c.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(b,null,m,c,E,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(b,null,m,p,E,null)}function y(T,b,m,A){let L=null;const C=m.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)L=C;else if(L=m.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const P=L.uuid,B=b.uuid;let H=u[P];H===void 0&&(H={},u[P]=H);let F=H[B];F===void 0&&(F=L.clone(),H[B]=F,b.addEventListener("dispose",w)),L=F}if(L.visible=b.visible,L.wireframe=b.wireframe,A===aa?L.side=b.shadowSide!==null?b.shadowSide:b.side:L.side=b.shadowSide!==null?b.shadowSide:d[b.side],L.alphaMap=b.alphaMap,L.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,L.map=b.map,L.clipShadows=b.clipShadows,L.clippingPlanes=b.clippingPlanes,L.clipIntersection=b.clipIntersection,L.displacementMap=b.displacementMap,L.displacementScale=b.displacementScale,L.displacementBias=b.displacementBias,L.wireframeLinewidth=b.wireframeLinewidth,L.linewidth=b.linewidth,m.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const P=t.properties.get(L);P.light=m}return L}function S(T,b,m,A,L){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===aa)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,T.matrixWorld);const B=e.update(T),H=T.material;if(Array.isArray(H)){const F=B.groups;for(let V=0,z=F.length;V<z;V++){const I=F[V],q=H[I.materialIndex];if(q&&q.visible){const Q=y(T,q,A,L);T.onBeforeShadow(t,T,b,m,B,Q,I),t.renderBufferDirect(m,null,B,Q,T,I),T.onAfterShadow(t,T,b,m,B,Q,I)}}}else if(H.visible){const F=y(T,H,A,L);T.onBeforeShadow(t,T,b,m,B,F,null),t.renderBufferDirect(m,null,B,F,T,null),T.onAfterShadow(t,T,b,m,B,F,null)}}const P=T.children;for(let B=0,H=P.length;B<H;B++)S(P[B],b,m,A,L)}function w(T){T.target.removeEventListener("dispose",w);for(const m in u){const A=u[m],L=T.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}function uw(t,e){function n(){let N=!1;const le=new yt;let J=null;const de=new yt(0,0,0,0);return{setMask:function(_e){J!==_e&&!N&&(t.colorMask(_e,_e,_e,_e),J=_e)},setLocked:function(_e){N=_e},setClear:function(_e,ie,Re,we,_t){_t===!0&&(_e*=we,ie*=we,Re*=we),le.set(_e,ie,Re,we),de.equals(le)===!1&&(t.clearColor(_e,ie,Re,we),de.copy(le))},reset:function(){N=!1,J=null,de.set(-1,0,0,0)}}}function i(){let N=!1,le=!1,J=null,de=null,_e=null;return{setReversed:function(ie){if(le!==ie){const Re=e.get("EXT_clip_control");ie?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),le=ie;const we=_e;_e=null,this.setClear(we)}},getReversed:function(){return le},setTest:function(ie){ie?te(t.DEPTH_TEST):Me(t.DEPTH_TEST)},setMask:function(ie){J!==ie&&!N&&(t.depthMask(ie),J=ie)},setFunc:function(ie){if(le&&(ie=WS[ie]),de!==ie){switch(ie){case ef:t.depthFunc(t.NEVER);break;case tf:t.depthFunc(t.ALWAYS);break;case nf:t.depthFunc(t.LESS);break;case Ns:t.depthFunc(t.LEQUAL);break;case rf:t.depthFunc(t.EQUAL);break;case sf:t.depthFunc(t.GEQUAL);break;case af:t.depthFunc(t.GREATER);break;case of:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=ie}},setLocked:function(ie){N=ie},setClear:function(ie){_e!==ie&&(_e=ie,le&&(ie=1-ie),t.clearDepth(ie))},reset:function(){N=!1,J=null,de=null,_e=null,le=!1}}}function r(){let N=!1,le=null,J=null,de=null,_e=null,ie=null,Re=null,we=null,_t=null;return{setTest:function(ot){N||(ot?te(t.STENCIL_TEST):Me(t.STENCIL_TEST))},setMask:function(ot){le!==ot&&!N&&(t.stencilMask(ot),le=ot)},setFunc:function(ot,qn,$n){(J!==ot||de!==qn||_e!==$n)&&(t.stencilFunc(ot,qn,$n),J=ot,de=qn,_e=$n)},setOp:function(ot,qn,$n){(ie!==ot||Re!==qn||we!==$n)&&(t.stencilOp(ot,qn,$n),ie=ot,Re=qn,we=$n)},setLocked:function(ot){N=ot},setClear:function(ot){_t!==ot&&(t.clearStencil(ot),_t=ot)},reset:function(){N=!1,le=null,J=null,de=null,_e=null,ie=null,Re=null,we=null,_t=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let h={},d={},c={},p=new WeakMap,v=[],E=null,g=!1,f=null,x=null,y=null,S=null,w=null,T=null,b=null,m=new Je(0,0,0),A=0,L=!1,C=null,P=null,B=null,H=null,F=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,I=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=I>=1):q.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=I>=2);let Q=null,re={};const ae=t.getParameter(t.SCISSOR_BOX),Fe=t.getParameter(t.VIEWPORT),Be=new yt().fromArray(ae),De=new yt().fromArray(Fe);function j(N,le,J,de){const _e=new Uint8Array(4),ie=t.createTexture();t.bindTexture(N,ie),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Re=0;Re<J;Re++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(le+Re,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return ie}const ne={};ne[t.TEXTURE_2D]=j(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=j(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=j(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=j(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(t.DEPTH_TEST),a.setFunc(Ns),et(!1),Ct(_p),te(t.CULL_FACE),Ce(Ti);function te(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function Me(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function Ie(N,le){return c[N]!==le?(t.bindFramebuffer(N,le),c[N]=le,N===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=le),N===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=le),!0):!1}function Ee(N,le){let J=v,de=!1;if(N){J=p.get(le),J===void 0&&(J=[],p.set(le,J));const _e=N.textures;if(J.length!==_e.length||J[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,Re=_e.length;ie<Re;ie++)J[ie]=t.COLOR_ATTACHMENT0+ie;J.length=_e.length,de=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,de=!0);de&&t.drawBuffers(J)}function Ye(N){return E!==N?(t.useProgram(N),E=N,!0):!1}const Te={[yr]:t.FUNC_ADD,[hS]:t.FUNC_SUBTRACT,[pS]:t.FUNC_REVERSE_SUBTRACT};Te[mS]=t.MIN,Te[gS]=t.MAX;const be={[vS]:t.ZERO,[_S]:t.ONE,[xS]:t.SRC_COLOR,[Qc]:t.SRC_ALPHA,[wS]:t.SRC_ALPHA_SATURATE,[ES]:t.DST_COLOR,[yS]:t.DST_ALPHA,[SS]:t.ONE_MINUS_SRC_COLOR,[Jc]:t.ONE_MINUS_SRC_ALPHA,[TS]:t.ONE_MINUS_DST_COLOR,[MS]:t.ONE_MINUS_DST_ALPHA,[AS]:t.CONSTANT_COLOR,[bS]:t.ONE_MINUS_CONSTANT_COLOR,[RS]:t.CONSTANT_ALPHA,[CS]:t.ONE_MINUS_CONSTANT_ALPHA};function Ce(N,le,J,de,_e,ie,Re,we,_t,ot){if(N===Ti){g===!0&&(Me(t.BLEND),g=!1);return}if(g===!1&&(te(t.BLEND),g=!0),N!==dS){if(N!==f||ot!==L){if((x!==yr||w!==yr)&&(t.blendEquation(t.FUNC_ADD),x=yr,w=yr),ot)switch(N){case Ms:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xp:t.blendFunc(t.ONE,t.ONE);break;case Sp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ke("WebGLState: Invalid blending: ",N);break}else switch(N){case Ms:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Sp:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yp:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",N);break}y=null,S=null,T=null,b=null,m.set(0,0,0),A=0,f=N,L=ot}return}_e=_e||le,ie=ie||J,Re=Re||de,(le!==x||_e!==w)&&(t.blendEquationSeparate(Te[le],Te[_e]),x=le,w=_e),(J!==y||de!==S||ie!==T||Re!==b)&&(t.blendFuncSeparate(be[J],be[de],be[ie],be[Re]),y=J,S=de,T=ie,b=Re),(we.equals(m)===!1||_t!==A)&&(t.blendColor(we.r,we.g,we.b,_t),m.copy(we),A=_t),f=N,L=!1}function ve(N,le){N.side===xi?Me(t.CULL_FACE):te(t.CULL_FACE);let J=N.side===fn;le&&(J=!J),et(J),N.blending===Ms&&N.transparent===!1?Ce(Ti):Ce(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const de=N.stencilWrite;o.setTest(de),de&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),kt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):Me(t.SAMPLE_ALPHA_TO_COVERAGE)}function et(N){C!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),C=N)}function Ct(N){N!==uS?(te(t.CULL_FACE),N!==P&&(N===_p?t.cullFace(t.BACK):N===cS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Me(t.CULL_FACE),P=N}function It(N){N!==B&&(z&&t.lineWidth(N),B=N)}function kt(N,le,J){N?(te(t.POLYGON_OFFSET_FILL),(H!==le||F!==J)&&(H=le,F=J,a.getReversed()&&(le=-le),t.polygonOffset(le,J))):Me(t.POLYGON_OFFSET_FILL)}function vt(N){N?te(t.SCISSOR_TEST):Me(t.SCISSOR_TEST)}function wt(N){N===void 0&&(N=t.TEXTURE0+V-1),Q!==N&&(t.activeTexture(N),Q=N)}function D(N,le,J){J===void 0&&(Q===null?J=t.TEXTURE0+V-1:J=Q);let de=re[J];de===void 0&&(de={type:void 0,texture:void 0},re[J]=de),(de.type!==N||de.texture!==le)&&(Q!==J&&(t.activeTexture(J),Q=J),t.bindTexture(N,le||ne[N]),de.type=N,de.texture=le)}function rn(){const N=re[Q];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function tt(){try{t.compressedTexImage2D(...arguments)}catch(N){Ke("WebGLState:",N)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(N){Ke("WebGLState:",N)}}function _(){try{t.texSubImage2D(...arguments)}catch(N){Ke("WebGLState:",N)}}function k(){try{t.texSubImage3D(...arguments)}catch(N){Ke("WebGLState:",N)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(N){Ke("WebGLState:",N)}}function K(){try{t.compressedTexSubImage3D(...arguments)}catch(N){Ke("WebGLState:",N)}}function oe(){try{t.texStorage2D(...arguments)}catch(N){Ke("WebGLState:",N)}}function ue(){try{t.texStorage3D(...arguments)}catch(N){Ke("WebGLState:",N)}}function Z(){try{t.texImage2D(...arguments)}catch(N){Ke("WebGLState:",N)}}function ee(){try{t.texImage3D(...arguments)}catch(N){Ke("WebGLState:",N)}}function ce(N){return d[N]!==void 0?d[N]:t.getParameter(N)}function Pe(N,le){d[N]!==le&&(t.pixelStorei(N,le),d[N]=le)}function he(N){Be.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Be.copy(N))}function fe(N){De.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),De.copy(N))}function Ue(N,le){let J=u.get(le);J===void 0&&(J=new WeakMap,u.set(le,J));let de=J.get(N);de===void 0&&(de=t.getUniformBlockIndex(le,N.name),J.set(N,de))}function Oe(N,le){const de=u.get(le).get(N);l.get(le)!==de&&(t.uniformBlockBinding(le,de,N.__bindingPointIndex),l.set(le,de))}function Ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,re={},c={},p=new WeakMap,v=[],E=null,g=!1,f=null,x=null,y=null,S=null,w=null,T=null,b=null,m=new Je(0,0,0),A=0,L=!1,C=null,P=null,B=null,H=null,F=null,Be.set(0,0,t.canvas.width,t.canvas.height),De.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:Me,bindFramebuffer:Ie,drawBuffers:Ee,useProgram:Ye,setBlending:Ce,setMaterial:ve,setFlipSided:et,setCullFace:Ct,setLineWidth:It,setPolygonOffset:kt,setScissorTest:vt,activeTexture:wt,bindTexture:D,unbindTexture:rn,compressedTexImage2D:tt,compressedTexImage3D:R,texImage2D:Z,texImage3D:ee,pixelStorei:Pe,getParameter:ce,updateUBOMapping:Ue,uniformBlockBinding:Oe,texStorage2D:oe,texStorage3D:ue,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:K,scissor:he,viewport:fe,reset:Ve}}function cw(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Qe,h=new WeakMap,d=new Set;let c;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,_){return v?new OffscreenCanvas(R,_):Rl("canvas")}function g(R,_,k){let X=1;const K=tt(R);if((K.width>k||K.height>k)&&(X=k/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const oe=Math.floor(X*K.width),ue=Math.floor(X*K.height);c===void 0&&(c=E(oe,ue));const Z=_?E(oe,ue):c;return Z.width=oe,Z.height=ue,Z.getContext("2d").drawImage(R,0,0,oe,ue),ke("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+oe+"x"+ue+")."),Z}else return"data"in R&&ke("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function f(R){return R.generateMipmaps}function x(R){t.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(R,_,k,X,K,oe=!1){if(R!==null){if(t[R]!==void 0)return t[R];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ue;X&&(ue=e.get("EXT_texture_norm16"),ue||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===t.RED&&(k===t.FLOAT&&(Z=t.R32F),k===t.HALF_FLOAT&&(Z=t.R16F),k===t.UNSIGNED_BYTE&&(Z=t.R8),k===t.UNSIGNED_SHORT&&ue&&(Z=ue.R16_EXT),k===t.SHORT&&ue&&(Z=ue.R16_SNORM_EXT)),_===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(Z=t.R8UI),k===t.UNSIGNED_SHORT&&(Z=t.R16UI),k===t.UNSIGNED_INT&&(Z=t.R32UI),k===t.BYTE&&(Z=t.R8I),k===t.SHORT&&(Z=t.R16I),k===t.INT&&(Z=t.R32I)),_===t.RG&&(k===t.FLOAT&&(Z=t.RG32F),k===t.HALF_FLOAT&&(Z=t.RG16F),k===t.UNSIGNED_BYTE&&(Z=t.RG8),k===t.UNSIGNED_SHORT&&ue&&(Z=ue.RG16_EXT),k===t.SHORT&&ue&&(Z=ue.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(Z=t.RG8UI),k===t.UNSIGNED_SHORT&&(Z=t.RG16UI),k===t.UNSIGNED_INT&&(Z=t.RG32UI),k===t.BYTE&&(Z=t.RG8I),k===t.SHORT&&(Z=t.RG16I),k===t.INT&&(Z=t.RG32I)),_===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),k===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),k===t.UNSIGNED_INT&&(Z=t.RGB32UI),k===t.BYTE&&(Z=t.RGB8I),k===t.SHORT&&(Z=t.RGB16I),k===t.INT&&(Z=t.RGB32I)),_===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),k===t.UNSIGNED_INT&&(Z=t.RGBA32UI),k===t.BYTE&&(Z=t.RGBA8I),k===t.SHORT&&(Z=t.RGBA16I),k===t.INT&&(Z=t.RGBA32I)),_===t.RGB&&(k===t.UNSIGNED_SHORT&&ue&&(Z=ue.RGB16_EXT),k===t.SHORT&&ue&&(Z=ue.RGB16_SNORM_EXT),k===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),k===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),_===t.RGBA){const ee=oe?Al:qe.getTransfer(K);k===t.FLOAT&&(Z=t.RGBA32F),k===t.HALF_FLOAT&&(Z=t.RGBA16F),k===t.UNSIGNED_BYTE&&(Z=ee===nt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT&&ue&&(Z=ue.RGBA16_EXT),k===t.SHORT&&ue&&(Z=ue.RGBA16_SNORM_EXT),k===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function w(R,_){let k;return R?_===null||_===ui||_===Ua?k=t.DEPTH24_STENCIL8:_===ni?k=t.DEPTH32F_STENCIL8:_===Ia&&(k=t.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ui||_===Ua?k=t.DEPTH_COMPONENT24:_===ni?k=t.DEPTH_COMPONENT32F:_===Ia&&(k=t.DEPTH_COMPONENT16),k}function T(R,_){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==zt&&R.minFilter!==jt?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function b(R){const _=R.target;_.removeEventListener("dispose",b),A(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function m(R){const _=R.target;_.removeEventListener("dispose",m),C(_)}function A(R){const _=i.get(R);if(_.__webglInit===void 0)return;const k=R.source,X=p.get(k);if(X){const K=X[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&L(R),Object.keys(X).length===0&&p.delete(k)}i.remove(R)}function L(R){const _=i.get(R);t.deleteTexture(_.__webglTexture);const k=R.source,X=p.get(k);delete X[_.__cacheKey],a.memory.textures--}function C(R){const _=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let K=0;K<_.__webglFramebuffer[X].length;K++)t.deleteFramebuffer(_.__webglFramebuffer[X][K]);else t.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)t.deleteFramebuffer(_.__webglFramebuffer[X]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=R.textures;for(let X=0,K=k.length;X<K;X++){const oe=i.get(k[X]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(k[X])}i.remove(R)}let P=0;function B(){P=0}function H(){return P}function F(R){P=R}function V(){const R=P;return R>=r.maxTextures&&ke("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function z(R){const _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function I(R,_){const k=i.get(R);if(R.isVideoTexture&&D(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const X=R.image;if(X===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(k,R,_);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+_)}function q(R,_){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){Me(k,R,_);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+_)}function Q(R,_){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){Me(k,R,_);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+_)}function re(R,_){const k=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){Ie(k,R,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+_)}const ae={[lf]:t.REPEAT,[Mi]:t.CLAMP_TO_EDGE,[uf]:t.MIRRORED_REPEAT},Fe={[zt]:t.NEAREST,[NS]:t.NEAREST_MIPMAP_NEAREST,[fo]:t.NEAREST_MIPMAP_LINEAR,[jt]:t.LINEAR,[Ru]:t.LINEAR_MIPMAP_NEAREST,[Ar]:t.LINEAR_MIPMAP_LINEAR},Be={[US]:t.NEVER,[zS]:t.ALWAYS,[FS]:t.LESS,[Wd]:t.LEQUAL,[OS]:t.EQUAL,[Xd]:t.GEQUAL,[kS]:t.GREATER,[BS]:t.NOTEQUAL};function De(R,_){if(_.type===ni&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===jt||_.magFilter===Ru||_.magFilter===fo||_.magFilter===Ar||_.minFilter===jt||_.minFilter===Ru||_.minFilter===fo||_.minFilter===Ar)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,ae[_.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,ae[_.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,ae[_.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Fe[_.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Fe[_.minFilter]),_.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Be[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===zt||_.minFilter!==fo&&_.minFilter!==Ar||_.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function j(R,_){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",b));const X=_.source;let K=p.get(X);K===void 0&&(K={},p.set(X,K));const oe=z(_);if(oe!==R.__cacheKey){K[oe]===void 0&&(K[oe]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[oe].usedTimes++;const ue=K[R.__cacheKey];ue!==void 0&&(K[R.__cacheKey].usedTimes--,ue.usedTimes===0&&L(_)),R.__cacheKey=oe,R.__webglTexture=K[oe].texture}return k}function ne(R,_,k){return Math.floor(Math.floor(R/k)/_)}function te(R,_,k,X){const oe=R.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,k,X,_.data);else{oe.sort((Pe,he)=>Pe.start-he.start);let ue=0;for(let Pe=1;Pe<oe.length;Pe++){const he=oe[ue],fe=oe[Pe],Ue=he.start+he.count,Oe=ne(fe.start,_.width,4),Ve=ne(he.start,_.width,4);fe.start<=Ue+1&&Oe===Ve&&ne(fe.start+fe.count-1,_.width,4)===Oe?he.count=Math.max(he.count,fe.start+fe.count-he.start):(++ue,oe[ue]=fe)}oe.length=ue+1;const Z=n.getParameter(t.UNPACK_ROW_LENGTH),ee=n.getParameter(t.UNPACK_SKIP_PIXELS),ce=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Pe=0,he=oe.length;Pe<he;Pe++){const fe=oe[Pe],Ue=Math.floor(fe.start/4),Oe=Math.ceil(fe.count/4),Ve=Ue%_.width,N=Math.floor(Ue/_.width),le=Oe,J=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,Ve,N,le,J,k,X,_.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Z),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,ce)}}function Me(R,_,k){let X=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=t.TEXTURE_3D);const K=j(R,_),oe=_.source;n.bindTexture(X,R.__webglTexture,t.TEXTURE0+k);const ue=i.get(oe);if(oe.version!==ue.__version||K===!0){if(n.activeTexture(t.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const J=qe.getPrimaries(qe.workingColorSpace),de=_.colorSpace===ji?null:qe.getPrimaries(_.colorSpace),_e=_.colorSpace===ji||J===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let ee=g(_.image,!1,r.maxTextureSize);ee=rn(_,ee);const ce=s.convert(_.format,_.colorSpace),Pe=s.convert(_.type);let he=S(_.internalFormat,ce,Pe,_.normalized,_.colorSpace,_.isVideoTexture);De(X,_);let fe;const Ue=_.mipmaps,Oe=_.isVideoTexture!==!0,Ve=ue.__version===void 0||K===!0,N=oe.dataReady,le=T(_,ee);if(_.isDepthTexture)he=w(_.format===br,_.type),Ve&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,he,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,he,ee.width,ee.height,0,ce,Pe,null));else if(_.isDataTexture)if(Ue.length>0){Oe&&Ve&&n.texStorage2D(t.TEXTURE_2D,le,he,Ue[0].width,Ue[0].height);for(let J=0,de=Ue.length;J<de;J++)fe=Ue[J],Oe?N&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,fe.width,fe.height,ce,Pe,fe.data):n.texImage2D(t.TEXTURE_2D,J,he,fe.width,fe.height,0,ce,Pe,fe.data);_.generateMipmaps=!1}else Oe?(Ve&&n.texStorage2D(t.TEXTURE_2D,le,he,ee.width,ee.height),N&&te(_,ee,ce,Pe)):n.texImage2D(t.TEXTURE_2D,0,he,ee.width,ee.height,0,ce,Pe,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Oe&&Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,he,Ue[0].width,Ue[0].height,ee.depth);for(let J=0,de=Ue.length;J<de;J++)if(fe=Ue[J],_.format!==Hn)if(ce!==null)if(Oe){if(N)if(_.layerUpdates.size>0){const _e=Yp(fe.width,fe.height,_.format,_.type);for(const ie of _.layerUpdates){const Re=fe.data.subarray(ie*_e/fe.data.BYTES_PER_ELEMENT,(ie+1)*_e/fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,ie,fe.width,fe.height,1,ce,Re)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,ee.depth,ce,fe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,he,fe.width,fe.height,ee.depth,0,fe.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,ee.depth,ce,Pe,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,he,fe.width,fe.height,ee.depth,0,ce,Pe,fe.data)}else{Oe&&Ve&&n.texStorage2D(t.TEXTURE_2D,le,he,Ue[0].width,Ue[0].height);for(let J=0,de=Ue.length;J<de;J++)fe=Ue[J],_.format!==Hn?ce!==null?Oe?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,fe.width,fe.height,ce,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,J,he,fe.width,fe.height,0,fe.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?N&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,fe.width,fe.height,ce,Pe,fe.data):n.texImage2D(t.TEXTURE_2D,J,he,fe.width,fe.height,0,ce,Pe,fe.data)}else if(_.isDataArrayTexture)if(Oe){if(Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,he,ee.width,ee.height,ee.depth),N)if(_.layerUpdates.size>0){const J=Yp(ee.width,ee.height,_.format,_.type);for(const de of _.layerUpdates){const _e=ee.data.subarray(de*J/ee.data.BYTES_PER_ELEMENT,(de+1)*J/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,de,ee.width,ee.height,1,ce,Pe,_e)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,Pe,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,ee.width,ee.height,ee.depth,0,ce,Pe,ee.data);else if(_.isData3DTexture)Oe?(Ve&&n.texStorage3D(t.TEXTURE_3D,le,he,ee.width,ee.height,ee.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,Pe,ee.data)):n.texImage3D(t.TEXTURE_3D,0,he,ee.width,ee.height,ee.depth,0,ce,Pe,ee.data);else if(_.isFramebufferTexture){if(Ve)if(Oe)n.texStorage2D(t.TEXTURE_2D,le,he,ee.width,ee.height);else{let J=ee.width,de=ee.height;for(let _e=0;_e<le;_e++)n.texImage2D(t.TEXTURE_2D,_e,he,J,de,0,ce,Pe,null),J>>=1,de>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const J=t.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),ee.parentNode!==J){J.appendChild(ee),d.add(_),J.onpaint=de=>{const _e=de.changedElements;for(const ie of d)_e.includes(ie.image)&&(ie.needsUpdate=!0)},J.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ee);else{const _e=t.RGBA,ie=t.RGBA,Re=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,_e,ie,Re,ee)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Oe&&Ve){const J=tt(Ue[0]);n.texStorage2D(t.TEXTURE_2D,le,he,J.width,J.height)}for(let J=0,de=Ue.length;J<de;J++)fe=Ue[J],Oe?N&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,ce,Pe,fe):n.texImage2D(t.TEXTURE_2D,J,he,ce,Pe,fe);_.generateMipmaps=!1}else if(Oe){if(Ve){const J=tt(ee);n.texStorage2D(t.TEXTURE_2D,le,he,J.width,J.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,Pe,ee)}else n.texImage2D(t.TEXTURE_2D,0,he,ce,Pe,ee);f(_)&&x(X),ue.__version=oe.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Ie(R,_,k){if(_.image.length!==6)return;const X=j(R,_),K=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+k);const oe=i.get(K);if(K.version!==oe.__version||X===!0){n.activeTexture(t.TEXTURE0+k);const ue=qe.getPrimaries(qe.workingColorSpace),Z=_.colorSpace===ji?null:qe.getPrimaries(_.colorSpace),ee=_.colorSpace===ji||ue===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ce=_.isCompressedTexture||_.image[0].isCompressedTexture,Pe=_.image[0]&&_.image[0].isDataTexture,he=[];for(let ie=0;ie<6;ie++)!ce&&!Pe?he[ie]=g(_.image[ie],!0,r.maxCubemapSize):he[ie]=Pe?_.image[ie].image:_.image[ie],he[ie]=rn(_,he[ie]);const fe=he[0],Ue=s.convert(_.format,_.colorSpace),Oe=s.convert(_.type),Ve=S(_.internalFormat,Ue,Oe,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,le=oe.__version===void 0||X===!0,J=K.dataReady;let de=T(_,fe);De(t.TEXTURE_CUBE_MAP,_);let _e;if(ce){N&&le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Ve,fe.width,fe.height);for(let ie=0;ie<6;ie++){_e=he[ie].mipmaps;for(let Re=0;Re<_e.length;Re++){const we=_e[Re];_.format!==Hn?Ue!==null?N?J&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,0,0,we.width,we.height,Ue,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,Ve,we.width,we.height,0,we.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,0,0,we.width,we.height,Ue,Oe,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,Ve,we.width,we.height,0,Ue,Oe,we.data)}}}else{if(_e=_.mipmaps,N&&le){_e.length>0&&de++;const ie=tt(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Ve,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Pe){N?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,he[ie].width,he[ie].height,Ue,Oe,he[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ve,he[ie].width,he[ie].height,0,Ue,Oe,he[ie].data);for(let Re=0;Re<_e.length;Re++){const _t=_e[Re].image[ie].image;N?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,0,0,_t.width,_t.height,Ue,Oe,_t.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,Ve,_t.width,_t.height,0,Ue,Oe,_t.data)}}else{N?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ue,Oe,he[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ve,Ue,Oe,he[ie]);for(let Re=0;Re<_e.length;Re++){const we=_e[Re];N?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,0,0,Ue,Oe,we.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,Ve,Ue,Oe,we.image[ie])}}}f(_)&&x(t.TEXTURE_CUBE_MAP),oe.__version=K.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Ee(R,_,k,X,K,oe){const ue=s.convert(k.format,k.colorSpace),Z=s.convert(k.type),ee=S(k.internalFormat,ue,Z,k.normalized,k.colorSpace),ce=i.get(_),Pe=i.get(k);if(Pe.__renderTarget=_,!ce.__hasExternalTextures){const he=Math.max(1,_.width>>oe),fe=Math.max(1,_.height>>oe);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,oe,ee,he,fe,_.depth,0,ue,Z,null):n.texImage2D(K,oe,ee,he,fe,0,ue,Z,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),wt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,K,Pe.__webglTexture,0,vt(_)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,K,Pe.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(R,_,k){if(t.bindRenderbuffer(t.RENDERBUFFER,R),_.depthBuffer){const X=_.depthTexture,K=X&&X.isDepthTexture?X.type:null,oe=w(_.stencilBuffer,K),ue=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;wt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,vt(_),oe,_.width,_.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,vt(_),oe,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,oe,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,R)}else{const X=_.textures;for(let K=0;K<X.length;K++){const oe=X[K],ue=s.convert(oe.format,oe.colorSpace),Z=s.convert(oe.type),ee=S(oe.internalFormat,ue,Z,oe.normalized,oe.colorSpace);wt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,vt(_),ee,_.width,_.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,vt(_),ee,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ee,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Te(R,_,k){const X=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",b)),K.__webglTexture===void 0){K.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),De(t.TEXTURE_CUBE_MAP,_.depthTexture);const ce=s.convert(_.depthTexture.format),Pe=s.convert(_.depthTexture.type);let he;_.depthTexture.format===Ni?he=t.DEPTH_COMPONENT24:_.depthTexture.format===br&&(he=t.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,he,_.width,_.height,0,ce,Pe,null)}}else I(_.depthTexture,0);const oe=K.__webglTexture,ue=vt(_),Z=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+k:t.TEXTURE_2D,ee=_.depthTexture.format===br?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ni)wt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,Z,oe,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,ee,Z,oe,0);else if(_.depthTexture.format===br)wt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,Z,oe,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,ee,Z,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function be(R){const _=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){const X=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=X}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)Te(_.__webglFramebuffer[X],R,X);else{const X=R.texture.mipmaps;X&&X.length>0?Te(_.__webglFramebuffer[0],R,0):Te(_.__webglFramebuffer,R,0)}else if(k){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=t.createRenderbuffer(),Ye(_.__webglDepthbuffer[X],R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,oe)}}else{const X=R.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),Ye(_.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(R,_,k){const X=i.get(R);_!==void 0&&Ee(X.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&be(R)}function ve(R){const _=R.texture,k=i.get(R),X=i.get(_);R.addEventListener("dispose",m);const K=R.textures,oe=R.isWebGLCubeRenderTarget===!0,ue=K.length>1;if(ue||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=_.version,a.memory.textures++),oe){k.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[Z]=[];for(let ee=0;ee<_.mipmaps.length;ee++)k.__webglFramebuffer[Z][ee]=t.createFramebuffer()}else k.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)k.__webglFramebuffer[Z]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(ue)for(let Z=0,ee=K.length;Z<ee;Z++){const ce=i.get(K[Z]);ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&wt(R)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){const ee=K[Z];k.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[Z]);const ce=s.convert(ee.format,ee.colorSpace),Pe=s.convert(ee.type),he=S(ee.internalFormat,ce,Pe,ee.normalized,ee.colorSpace,R.isXRRenderTarget===!0),fe=vt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,he,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,k.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),Ye(k.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),De(t.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)Ee(k.__webglFramebuffer[Z][ee],R,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee);else Ee(k.__webglFramebuffer[Z],R,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);f(_)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let Z=0,ee=K.length;Z<ee;Z++){const ce=K[Z],Pe=i.get(ce);let he=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,Pe.__webglTexture),De(he,ce),Ee(k.__webglFramebuffer,R,ce,t.COLOR_ATTACHMENT0+Z,he,0),f(ce)&&x(he)}n.unbindTexture()}else{let Z=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Z,X.__webglTexture),De(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)Ee(k.__webglFramebuffer[ee],R,_,t.COLOR_ATTACHMENT0,Z,ee);else Ee(k.__webglFramebuffer,R,_,t.COLOR_ATTACHMENT0,Z,0);f(_)&&x(Z),n.unbindTexture()}R.depthBuffer&&be(R)}function et(R){const _=R.textures;for(let k=0,X=_.length;k<X;k++){const K=_[k];if(f(K)){const oe=y(R),ue=i.get(K).__webglTexture;n.bindTexture(oe,ue),x(oe),n.unbindTexture()}}}const Ct=[],It=[];function kt(R){if(R.samples>0){if(wt(R)===!1){const _=R.textures,k=R.width,X=R.height;let K=t.COLOR_BUFFER_BIT;const oe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(R),Z=_.length>1;if(Z)for(let ce=0;ce<_.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const ee=R.texture.mipmaps;ee&&ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ce=0;ce<_.length;ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),Z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ce]);const Pe=i.get(_[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Pe,0)}t.blitFramebuffer(0,0,k,X,0,0,k,X,K,t.NEAREST),l===!0&&(Ct.length=0,It.length=0,Ct.push(t.COLOR_ATTACHMENT0+ce),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ct.push(oe),It.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,It)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ct))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let ce=0;ce<_.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ce]);const Pe=i.get(_[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,Pe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const _=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function vt(R){return Math.min(r.maxSamples,R.samples)}function wt(R){const _=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function D(R){const _=a.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function rn(R,_){const k=R.colorSpace,X=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==wl&&k!==ji&&(qe.getTransfer(k)===nt?(X!==Hn||K!==bn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",k)),_}function tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.getTextureUnits=H,this.setTextureUnits=F,this.setTexture2D=I,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=re,this.rebindTextures=Ce,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function fw(t,e){function n(i,r=ji){let s;const a=qe.getTransfer(r);if(i===bn)return t.UNSIGNED_BYTE;if(i===Bd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===zd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===$v)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===jv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yv)return t.BYTE;if(i===qv)return t.SHORT;if(i===Ia)return t.UNSIGNED_SHORT;if(i===kd)return t.INT;if(i===ui)return t.UNSIGNED_INT;if(i===ni)return t.FLOAT;if(i===Li)return t.HALF_FLOAT;if(i===Kv)return t.ALPHA;if(i===Zv)return t.RGB;if(i===Hn)return t.RGBA;if(i===Ni)return t.DEPTH_COMPONENT;if(i===br)return t.DEPTH_STENCIL;if(i===Qv)return t.RED;if(i===Vd)return t.RED_INTEGER;if(i===Fr)return t.RG;if(i===Hd)return t.RG_INTEGER;if(i===Gd)return t.RGBA_INTEGER;if(i===$o||i===jo||i===Ko||i===Zo)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$o)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$o)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cf||i===ff||i===df||i===hf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===cf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ff)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===df)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pf||i===mf||i===gf||i===vf||i===_f||i===El||i===xf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pf||i===mf)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===gf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===vf)return s.COMPRESSED_R11_EAC;if(i===_f)return s.COMPRESSED_SIGNED_R11_EAC;if(i===El)return s.COMPRESSED_RG11_EAC;if(i===xf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Sf||i===yf||i===Mf||i===Ef||i===Tf||i===wf||i===Af||i===bf||i===Rf||i===Cf||i===Pf||i===Lf||i===Nf||i===Df)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ef)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Af)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Df)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===If||i===Uf||i===Ff)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===If)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ff)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Of||i===kf||i===Tl||i===Bf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Of)return s.COMPRESSED_RED_RGTC1_EXT;if(i===kf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ua?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const dw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new l0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Yn({vertexShader:dw,fragmentShader:hw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ci(new Xa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mw extends zr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,h=null,d=null,c=null,p=null,v=null;const E=typeof XRWebGLBinding<"u",g=new pw,f={},x=n.getContextAttributes();let y=null,S=null;const w=[],T=[],b=new Qe;let m=null;const A=new zn;A.viewport=new yt;const L=new zn;L.viewport=new yt;const C=[A,L],P=new wy;let B=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=w[j];return ne===void 0&&(ne=new Fu,w[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=w[j];return ne===void 0&&(ne=new Fu,w[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=w[j];return ne===void 0&&(ne=new Fu,w[j]=ne),ne.getHandSpace()};function F(j){const ne=T.indexOf(j.inputSource);if(ne===-1)return;const te=w[ne];te!==void 0&&(te.update(j.inputSource,j.frame,u||a),te.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",z);for(let j=0;j<w.length;j++){const ne=T[j];ne!==null&&(T[j]=null,w[j].disconnect(ne))}B=null,H=null,g.reset();for(const j in f)delete f[j];e.setRenderTarget(y),p=null,c=null,d=null,r=null,S=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(m),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return c!==null?c:p},this.getBinding=function(){return d===null&&E&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",V),r.addEventListener("inputsourceschange",z),x.xrCompatible!==!0&&await n.makeXRCompatible(),m=e.getPixelRatio(),e.getSize(b),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Me=null,Ie=null;x.depth&&(Ie=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=x.stencil?br:Ni,Me=x.stencil?Ua:ui);const Ee={colorFormat:n.RGBA8,depthFormat:Ie,scaleFactor:s};d=this.getBinding(),c=d.createProjectionLayer(Ee),r.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),S=new oi(c.textureWidth,c.textureHeight,{format:Hn,type:bn,depthTexture:new Is(c.textureWidth,c.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}else{const te={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new oi(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(j){for(let ne=0;ne<j.removed.length;ne++){const te=j.removed[ne],Me=T.indexOf(te);Me>=0&&(T[Me]=null,w[Me].disconnect(te))}for(let ne=0;ne<j.added.length;ne++){const te=j.added[ne];let Me=T.indexOf(te);if(Me===-1){for(let Ee=0;Ee<w.length;Ee++)if(Ee>=T.length){T.push(te),Me=Ee;break}else if(T[Ee]===null){T[Ee]=te,Me=Ee;break}if(Me===-1)break}const Ie=w[Me];Ie&&Ie.connect(te)}}const I=new Y,q=new Y;function Q(j,ne,te){I.setFromMatrixPosition(ne.matrixWorld),q.setFromMatrixPosition(te.matrixWorld);const Me=I.distanceTo(q),Ie=ne.projectionMatrix.elements,Ee=te.projectionMatrix.elements,Ye=Ie[14]/(Ie[10]-1),Te=Ie[14]/(Ie[10]+1),be=(Ie[9]+1)/Ie[5],Ce=(Ie[9]-1)/Ie[5],ve=(Ie[8]-1)/Ie[0],et=(Ee[8]+1)/Ee[0],Ct=Ye*ve,It=Ye*et,kt=Me/(-ve+et),vt=kt*-ve;if(ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(vt),j.translateZ(kt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ie[10]===-1)j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const wt=Ye+kt,D=Te+kt,rn=Ct-vt,tt=It+(Me-vt),R=be*Te/D*wt,_=Ce*Te/D*wt;j.projectionMatrix.makePerspective(rn,tt,R,_,wt,D),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function re(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ne=j.near,te=j.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(te=g.depthFar)),P.near=L.near=A.near=ne,P.far=L.far=A.far=te,(B!==P.near||H!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),B=P.near,H=P.far),P.layers.mask=j.layers.mask|6,A.layers.mask=P.layers.mask&-5,L.layers.mask=P.layers.mask&-3;const Me=j.parent,Ie=P.cameras;re(P,Me);for(let Ee=0;Ee<Ie.length;Ee++)re(Ie[Ee],Me);Ie.length===2?Q(P,A,L):P.projectionMatrix.copy(A.projectionMatrix),ae(j,P,Me)};function ae(j,ne,te){te===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(te.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=zf*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(c===null&&p===null))return l},this.setFoveation=function(j){l=j,c!==null&&(c.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(j){return f[j]};let Fe=null;function Be(j,ne){if(h=ne.getViewerPose(u||a),v=ne,h!==null){const te=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Me=!1;te.length!==P.cameras.length&&(P.cameras.length=0,Me=!0);for(let Te=0;Te<te.length;Te++){const be=te[Te];let Ce=null;if(p!==null)Ce=p.getViewport(be);else{const et=d.getViewSubImage(c,be);Ce=et.viewport,Te===0&&(e.setRenderTargetTextures(S,et.colorTexture,et.depthStencilTexture),e.setRenderTarget(S))}let ve=C[Te];ve===void 0&&(ve=new zn,ve.layers.enable(Te),ve.viewport=new yt,C[Te]=ve),ve.matrix.fromArray(be.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(be.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Te===0&&(P.matrix.copy(ve.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Me===!0&&P.cameras.push(ve)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){d=i.getBinding();const Te=d.getDepthInformation(te[0]);Te&&Te.isValid&&Te.texture&&g.init(Te,r.renderState)}if(Ie&&Ie.includes("camera-access")&&E){e.state.unbindTexture(),d=i.getBinding();for(let Te=0;Te<te.length;Te++){const be=te[Te].camera;if(be){let Ce=f[be];Ce||(Ce=new l0,f[be]=Ce);const ve=d.getCameraImage(be);Ce.sourceTexture=ve}}}}for(let te=0;te<w.length;te++){const Me=T[te],Ie=w[te];Me!==null&&Ie!==void 0&&Ie.update(Me,ne,u||a)}Fe&&Fe(j,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),v=null}const De=new f0;De.setAnimationLoop(Be),this.setAnimationLoop=function(j){Fe=j},this.dispose=function(){}}}const gw=new Rt,_0=new ze;_0.set(-1,0,0,0,1,0,0,0,1);function vw(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,u0(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,x,y,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),d(g,f)):f.isMeshPhongMaterial?(s(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),c(g,f),f.isMeshPhysicalMaterial&&p(g,f,S)):f.isMeshMatcapMaterial?(s(g,f),v(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),E(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,x,y):f.isSpriteMaterial?u(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===fn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===fn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const x=e.get(f),y=x.envMap,S=x.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(gw.makeRotationFromEuler(S)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(_0),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,x,y){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*x,g.scale.value=y*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function c(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,x){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===fn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function E(g,f){const x=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _w(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){const T=w.program;i.uniformBlockBinding(S,T)}function u(S,w){let T=r[S.id];T===void 0&&(g(S),T=h(S),r[S.id]=T,S.addEventListener("dispose",x));const b=w.program;i.updateUBOMapping(S,b);const m=e.render.frame;s[S.id]!==m&&(c(S),s[S.id]=m)}function h(S){const w=d();S.__bindingPointIndex=w;const T=t.createBuffer(),b=S.__size,m=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,b,m),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,T),T}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(S){const w=r[S.id],T=S.uniforms,b=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let m=0,A=T.length;m<A;m++){const L=T[m];if(Array.isArray(L))for(let C=0,P=L.length;C<P;C++)p(L[C],m,C,b);else p(L,m,0,b)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,w,T,b){if(E(S,w,T,b)===!0){const m=S.__offset,A=S.value;if(Array.isArray(A)){let L=0;for(let C=0;C<A.length;C++){const P=A[C],B=f(P);v(P,S.__data,L),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(L+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(A,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,m,S.__data)}}function v(S,w,T){typeof S=="number"||typeof S=="boolean"?w[0]=S:S.isMatrix3?(w[0]=S.elements[0],w[1]=S.elements[1],w[2]=S.elements[2],w[3]=0,w[4]=S.elements[3],w[5]=S.elements[4],w[6]=S.elements[5],w[7]=0,w[8]=S.elements[6],w[9]=S.elements[7],w[10]=S.elements[8],w[11]=0):ArrayBuffer.isView(S)?w.set(new S.constructor(S.buffer,S.byteOffset,w.length)):S.toArray(w,T)}function E(S,w,T,b){const m=S.value,A=w+"_"+T;if(b[A]===void 0)return typeof m=="number"||typeof m=="boolean"?b[A]=m:ArrayBuffer.isView(m)?b[A]=m.slice():b[A]=m.clone(),!0;{const L=b[A];if(typeof m=="number"||typeof m=="boolean"){if(L!==m)return b[A]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(L.equals(m)===!1)return L.copy(m),!0}}return!1}function g(S){const w=S.uniforms;let T=0;const b=16;for(let A=0,L=w.length;A<L;A++){const C=Array.isArray(w[A])?w[A]:[w[A]];for(let P=0,B=C.length;P<B;P++){const H=C[P],F=Array.isArray(H.value)?H.value:[H.value];for(let V=0,z=F.length;V<z;V++){const I=F[V],q=f(I),Q=T%b,re=Q%q.boundary,ae=Q+re;T+=re,ae!==0&&b-ae<q.storage&&(T+=b-ae),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=T,T+=q.storage}}}const m=T%b;return m>0&&(T+=b-m),S.__size=T,S.__cache={},this}function f(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",S),w}function x(S){const w=S.target;w.removeEventListener("dispose",x);const T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function y(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:u,dispose:y}}const xw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qn=null;function Sw(){return Qn===null&&(Qn=new dy(xw,16,16,Fr,Li),Qn.name="DFG_LUT",Qn.minFilter=jt,Qn.magFilter=jt,Qn.wrapS=Mi,Qn.wrapT=Mi,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}class yw{constructor(e={}){const{canvas:n=HS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:c=!1,outputBufferType:p=bn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const E=p,g=new Set([Gd,Hd,Vd]),f=new Set([bn,ui,Ia,Ua,Bd,zd]),x=new Uint32Array(4),y=new Int32Array(4),S=new Y;let w=null,T=null;const b=[],m=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let C=!1,P=null,B=null,H=null,F=null;this._outputColorSpace=Tn;let V=0,z=0,I=null,q=-1,Q=null;const re=new yt,ae=new yt;let Fe=null;const Be=new Je(0);let De=0,j=n.width,ne=n.height,te=1,Me=null,Ie=null;const Ee=new yt(0,0,j,ne),Ye=new yt(0,0,j,ne);let Te=!1;const be=new a0;let Ce=!1,ve=!1;const et=new Rt,Ct=new Y,It=new yt,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function wt(){return I===null?te:1}let D=i;function rn(M,U){return n.getContext(M,U)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Od}`),n.addEventListener("webglcontextlost",_t,!1),n.addEventListener("webglcontextrestored",ot,!1),n.addEventListener("webglcontextcreationerror",qn,!1),D===null){const U="webgl2";if(D=rn(U,M),D===null)throw rn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw Ke("WebGLRenderer: "+M.message),M}let tt,R,_,k,X,K,oe,ue,Z,ee,ce,Pe,he,fe,Ue,Oe,Ve,N,le,J,de,_e,ie;function Re(){tt=new ST(D),tt.init(),de=new fw(D,tt),R=new dT(D,tt,e,de),_=new uw(D,tt),R.reversedDepthBuffer&&c&&_.buffers.depth.setReversed(!0),B=D.createFramebuffer(),H=D.createFramebuffer(),F=D.createFramebuffer(),k=new ET(D),X=new j1,K=new cw(D,tt,_,X,R,de,k),oe=new xT(L),ue=new by(D),_e=new cT(D,ue),Z=new yT(D,ue,k,_e),ee=new wT(D,Z,ue,_e,k),N=new TT(D,R,K),Ue=new hT(X),ce=new $1(L,oe,tt,R,_e,Ue),Pe=new vw(L,X),he=new Z1,fe=new iw(tt),Ve=new uT(L,oe,_,ee,v,l),Oe=new lw(L,ee,R),ie=new _w(D,k,R,_),le=new fT(D,tt,k),J=new MT(D,tt,k),k.programs=ce.programs,L.capabilities=R,L.extensions=tt,L.properties=X,L.renderLists=he,L.shadowMap=Oe,L.state=_,L.info=k}Re(),E!==bn&&(A=new bT(E,n.width,n.height,o,r,s));const we=new mw(L,D);this.xr=we,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=tt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=tt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(M){M!==void 0&&(te=M,this.setSize(j,ne,!1))},this.getSize=function(M){return M.set(j,ne)},this.setSize=function(M,U,$=!0){if(we.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,ne=U,n.width=Math.floor(M*te),n.height=Math.floor(U*te),$===!0&&(n.style.width=M+"px",n.style.height=U+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(j*te,ne*te).floor()},this.setDrawingBufferSize=function(M,U,$){j=M,ne=U,te=$,n.width=Math.floor(M*$),n.height=Math.floor(U*$),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(E===bn){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(re)},this.getViewport=function(M){return M.copy(Ee)},this.setViewport=function(M,U,$,G){M.isVector4?Ee.set(M.x,M.y,M.z,M.w):Ee.set(M,U,$,G),_.viewport(re.copy(Ee).multiplyScalar(te).round())},this.getScissor=function(M){return M.copy(Ye)},this.setScissor=function(M,U,$,G){M.isVector4?Ye.set(M.x,M.y,M.z,M.w):Ye.set(M,U,$,G),_.scissor(ae.copy(Ye).multiplyScalar(te).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(M){_.setScissorTest(Te=M)},this.setOpaqueSort=function(M){Me=M},this.setTransparentSort=function(M){Ie=M},this.getClearColor=function(M){return M.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,$=!0){let G=0;if(M){let W=!1;if(I!==null){const ge=I.texture.format;W=g.has(ge)}if(W){const ge=I.texture.type,Se=f.has(ge),me=Ve.getClearColor(),Ae=Ve.getClearAlpha(),Le=me.r,He=me.g,We=me.b;Se?(x[0]=Le,x[1]=He,x[2]=We,x[3]=Ae,D.clearBufferuiv(D.COLOR,0,x)):(y[0]=Le,y[1]=He,y[2]=We,y[3]=Ae,D.clearBufferiv(D.COLOR,0,y))}else G|=D.COLOR_BUFFER_BIT}U&&(G|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),P=M},this.dispose=function(){n.removeEventListener("webglcontextlost",_t,!1),n.removeEventListener("webglcontextrestored",ot,!1),n.removeEventListener("webglcontextcreationerror",qn,!1),Ve.dispose(),he.dispose(),fe.dispose(),X.dispose(),oe.dispose(),ee.dispose(),_e.dispose(),ie.dispose(),ce.dispose(),we.dispose(),we.removeEventListener("sessionstart",th),we.removeEventListener("sessionend",nh),hr.stop()};function _t(M){M.preventDefault(),bp("WebGLRenderer: Context Lost."),C=!0}function ot(){bp("WebGLRenderer: Context Restored."),C=!1;const M=k.autoReset,U=Oe.enabled,$=Oe.autoUpdate,G=Oe.needsUpdate,W=Oe.type;Re(),k.autoReset=M,Oe.enabled=U,Oe.autoUpdate=$,Oe.needsUpdate=G,Oe.type=W}function qn(M){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function $n(M){const U=M.target;U.removeEventListener("dispose",$n),S0(U)}function S0(M){y0(M),X.remove(M)}function y0(M){const U=X.get(M).programs;U!==void 0&&(U.forEach(function($){ce.releaseProgram($)}),M.isShaderMaterial&&ce.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,$,G,W,ge){U===null&&(U=kt);const Se=W.isMesh&&W.matrixWorld.determinantAffine()<0,me=T0(M,U,$,G,W);_.setMaterial(G,Se);let Ae=$.index,Le=1;if(G.wireframe===!0){if(Ae=Z.getWireframeAttribute($),Ae===void 0)return;Le=2}const He=$.drawRange,We=$.attributes.position;let Ne=He.start*Le,rt=(He.start+He.count)*Le;ge!==null&&(Ne=Math.max(Ne,ge.start*Le),rt=Math.min(rt,(ge.start+ge.count)*Le)),Ae!==null?(Ne=Math.max(Ne,0),rt=Math.min(rt,Ae.count)):We!=null&&(Ne=Math.max(Ne,0),rt=Math.min(rt,We.count));const Mt=rt-Ne;if(Mt<0||Mt===1/0)return;_e.setup(W,G,me,$,Ae);let xt,st=le;if(Ae!==null&&(xt=ue.get(Ae),st=J,st.setIndex(xt)),W.isMesh)G.wireframe===!0?(_.setLineWidth(G.wireframeLinewidth*wt()),st.setMode(D.LINES)):st.setMode(D.TRIANGLES);else if(W.isLine){let Gt=G.linewidth;Gt===void 0&&(Gt=1),_.setLineWidth(Gt*wt()),W.isLineSegments?st.setMode(D.LINES):W.isLineLoop?st.setMode(D.LINE_LOOP):st.setMode(D.LINE_STRIP)}else W.isPoints?st.setMode(D.POINTS):W.isSprite&&st.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))st.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Gt=W._multiDrawStarts,xe=W._multiDrawCounts,dn=W._multiDrawCount,je=Ae?ue.get(Ae).bytesPerElement:1,Mn=X.get(G).currentProgram.getUniforms();for(let jn=0;jn<dn;jn++)Mn.setValue(D,"_gl_DrawID",jn),st.render(Gt[jn]/je,xe[jn])}else if(W.isInstancedMesh)st.renderInstances(Ne,Mt,W.count);else if($.isInstancedBufferGeometry){const Gt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,xe=Math.min($.instanceCount,Gt);st.renderInstances(Ne,Mt,xe)}else st.render(Ne,Mt)};function eh(M,U,$){M.transparent===!0&&M.side===xi&&M.forceSinglePass===!1?(M.side=fn,M.needsUpdate=!0,qa(M,U,$),M.side=ur,M.needsUpdate=!0,qa(M,U,$),M.side=xi):qa(M,U,$)}this.compile=function(M,U,$=null){$===null&&($=M),T=fe.get($),T.init(U),m.push(T),$.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),M!==$&&M.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights();const G=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ge=W.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){const me=ge[Se];eh(me,$,W),G.add(me)}else eh(ge,$,W),G.add(ge)}),T=m.pop(),G},this.compileAsync=function(M,U,$=null){const G=this.compile(M,U,$);return new Promise(W=>{function ge(){if(G.forEach(function(Se){X.get(Se).currentProgram.isReady()&&G.delete(Se)}),G.size===0){W(M);return}setTimeout(ge,10)}tt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Zl=null;function M0(M){Zl&&Zl(M)}function th(){hr.stop()}function nh(){hr.start()}const hr=new f0;hr.setAnimationLoop(M0),typeof self<"u"&&hr.setContext(self),this.setAnimationLoop=function(M){Zl=M,we.setAnimationLoop(M),M===null?hr.stop():hr.start()},we.addEventListener("sessionstart",th),we.addEventListener("sessionend",nh),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;P!==null&&P.renderStart(M,U);const $=we.enabled===!0&&we.isPresenting===!0,G=A!==null&&(I===null||$)&&A.begin(L,I);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(U),U=we.getCamera()),M.isScene===!0&&M.onBeforeRender(L,M,U,I),T=fe.get(M,m.length),T.init(U),T.state.textureUnits=K.getTextureUnits(),m.push(T),et.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),be.setFromProjectionMatrix(et,ii,U.reversedDepth),ve=this.localClippingEnabled,Ce=Ue.init(this.clippingPlanes,ve),w=he.get(M,b.length),w.init(),b.push(w),we.enabled===!0&&we.isPresenting===!0){const Se=L.xr.getDepthSensingMesh();Se!==null&&Ql(Se,U,-1/0,L.sortObjects)}Ql(M,U,0,L.sortObjects),w.finish(),L.sortObjects===!0&&w.sort(Me,Ie,U.reversedDepth),vt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,vt&&Ve.addToRenderList(w,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ce===!0&&Ue.beginShadows();const W=T.state.shadowsArray;if(Oe.render(W,M,U),Ce===!0&&Ue.endShadows(),(G&&A.hasRenderPass())===!1){const Se=w.opaque,me=w.transmissive;if(T.setupLights(),U.isArrayCamera){const Ae=U.cameras;if(me.length>0)for(let Le=0,He=Ae.length;Le<He;Le++){const We=Ae[Le];rh(Se,me,M,We)}vt&&Ve.render(M);for(let Le=0,He=Ae.length;Le<He;Le++){const We=Ae[Le];ih(w,M,We,We.viewport)}}else me.length>0&&rh(Se,me,M,U),vt&&Ve.render(M),ih(w,M,U)}I!==null&&z===0&&(K.updateMultisampleRenderTarget(I),K.updateRenderTargetMipmap(I)),G&&A.end(L),M.isScene===!0&&M.onAfterRender(L,M,U),_e.resetDefaultState(),q=-1,Q=null,m.pop(),m.length>0?(T=m[m.length-1],K.setTextureUnits(T.state.textureUnits),Ce===!0&&Ue.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,b.pop(),b.length>0?w=b[b.length-1]:w=null,P!==null&&P.renderEnd()};function Ql(M,U,$,G){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||be.intersectsSprite(M)){G&&It.setFromMatrixPosition(M.matrixWorld).applyMatrix4(et);const Se=ee.update(M),me=M.material;me.visible&&w.push(M,Se,me,$,It.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||be.intersectsObject(M))){const Se=ee.update(M),me=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),It.copy(M.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),It.copy(Se.boundingSphere.center)),It.applyMatrix4(M.matrixWorld).applyMatrix4(et)),Array.isArray(me)){const Ae=Se.groups;for(let Le=0,He=Ae.length;Le<He;Le++){const We=Ae[Le],Ne=me[We.materialIndex];Ne&&Ne.visible&&w.push(M,Se,Ne,$,It.z,We)}}else me.visible&&w.push(M,Se,me,$,It.z,null)}}const ge=M.children;for(let Se=0,me=ge.length;Se<me;Se++)Ql(ge[Se],U,$,G)}function ih(M,U,$,G){const{opaque:W,transmissive:ge,transparent:Se}=M;T.setupLightsView($),Ce===!0&&Ue.setGlobalState(L.clippingPlanes,$),G&&_.viewport(re.copy(G)),W.length>0&&Ya(W,U,$),ge.length>0&&Ya(ge,U,$),Se.length>0&&Ya(Se,U,$),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function rh(M,U,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const Ne=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new oi(1,1,{generateMipmaps:!0,type:Ne?Li:bn,minFilter:Ar,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const ge=T.state.transmissionRenderTarget[G.id],Se=G.viewport||re;ge.setSize(Se.z*L.transmissionResolutionScale,Se.w*L.transmissionResolutionScale);const me=L.getRenderTarget(),Ae=L.getActiveCubeFace(),Le=L.getActiveMipmapLevel();L.setRenderTarget(ge),L.getClearColor(Be),De=L.getClearAlpha(),De<1&&L.setClearColor(16777215,.5),L.clear(),vt&&Ve.render($);const He=L.toneMapping;L.toneMapping=ai;const We=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),Ce===!0&&Ue.setGlobalState(L.clippingPlanes,G),Ya(M,$,G),K.updateMultisampleRenderTarget(ge),K.updateRenderTargetMipmap(ge),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let rt=0,Mt=U.length;rt<Mt;rt++){const xt=U[rt],{object:st,geometry:Gt,material:xe,group:dn}=xt;if(xe.side===xi&&st.layers.test(G.layers)){const je=xe.side;xe.side=fn,xe.needsUpdate=!0,sh(st,$,G,Gt,xe,dn),xe.side=je,xe.needsUpdate=!0,Ne=!0}}Ne===!0&&(K.updateMultisampleRenderTarget(ge),K.updateRenderTargetMipmap(ge))}L.setRenderTarget(me,Ae,Le),L.setClearColor(Be,De),We!==void 0&&(G.viewport=We),L.toneMapping=He}function Ya(M,U,$){const G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,ge=M.length;W<ge;W++){const Se=M[W],{object:me,geometry:Ae,group:Le}=Se;let He=Se.material;He.allowOverride===!0&&G!==null&&(He=G),me.layers.test($.layers)&&sh(me,U,$,Ae,He,Le)}}function sh(M,U,$,G,W,ge){M.onBeforeRender(L,U,$,G,W,ge),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(L,U,$,G,M,ge),W.transparent===!0&&W.side===xi&&W.forceSinglePass===!1?(W.side=fn,W.needsUpdate=!0,L.renderBufferDirect($,U,G,W,M,ge),W.side=ur,W.needsUpdate=!0,L.renderBufferDirect($,U,G,W,M,ge),W.side=xi):L.renderBufferDirect($,U,G,W,M,ge),M.onAfterRender(L,U,$,G,W,ge)}function qa(M,U,$){U.isScene!==!0&&(U=kt);const G=X.get(M),W=T.state.lights,ge=T.state.shadowsArray,Se=W.state.version,me=ce.getParameters(M,W.state,ge,U,$,T.state.lightProbeGridArray),Ae=ce.getProgramCacheKey(me);let Le=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;const He=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=oe.get(M.envMap||G.environment,He),G.envMapRotation=G.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Le===void 0&&(M.addEventListener("dispose",$n),Le=new Map,G.programs=Le);let We=Le.get(Ae);if(We!==void 0){if(G.currentProgram===We&&G.lightsStateVersion===Se)return oh(M,me),We}else me.uniforms=ce.getUniforms(M),P!==null&&M.isNodeMaterial&&P.build(M,$,me),M.onBeforeCompile(me,L),We=ce.acquireProgram(me,Ae),Le.set(Ae,We),G.uniforms=me.uniforms;const Ne=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ne.clippingPlanes=Ue.uniform),oh(M,me),G.needsLights=A0(M),G.lightsStateVersion=Se,G.needsLights&&(Ne.ambientLightColor.value=W.state.ambient,Ne.lightProbe.value=W.state.probe,Ne.directionalLights.value=W.state.directional,Ne.directionalLightShadows.value=W.state.directionalShadow,Ne.spotLights.value=W.state.spot,Ne.spotLightShadows.value=W.state.spotShadow,Ne.rectAreaLights.value=W.state.rectArea,Ne.ltc_1.value=W.state.rectAreaLTC1,Ne.ltc_2.value=W.state.rectAreaLTC2,Ne.pointLights.value=W.state.point,Ne.pointLightShadows.value=W.state.pointShadow,Ne.hemisphereLights.value=W.state.hemi,Ne.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ne.spotLightMatrix.value=W.state.spotLightMatrix,Ne.spotLightMap.value=W.state.spotLightMap,Ne.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=We,G.uniformsList=null,We}function ah(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Qo.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function oh(M,U){const $=X.get(M);$.outputColorSpace=U.outputColorSpace,$.batching=U.batching,$.batchingColor=U.batchingColor,$.instancing=U.instancing,$.instancingColor=U.instancingColor,$.instancingMorph=U.instancingMorph,$.skinning=U.skinning,$.morphTargets=U.morphTargets,$.morphNormals=U.morphNormals,$.morphColors=U.morphColors,$.morphTargetsCount=U.morphTargetsCount,$.numClippingPlanes=U.numClippingPlanes,$.numIntersection=U.numClipIntersection,$.vertexAlphas=U.vertexAlphas,$.vertexTangents=U.vertexTangents,$.toneMapping=U.toneMapping}function E0(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(U.matrixWorld);for(let $=0,G=M.length;$<G;$++){const W=M[$];if(W.texture!==null&&W.boundingBox.containsPoint(S))return W}return null}function T0(M,U,$,G,W){U.isScene!==!0&&(U=kt),K.resetTextureUnits();const ge=U.fog,Se=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,me=I===null?L.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:qe.workingColorSpace,Ae=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Le=oe.get(G.envMap||Se,Ae),He=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,We=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ne=!!$.morphAttributes.position,rt=!!$.morphAttributes.normal,Mt=!!$.morphAttributes.color;let xt=ai;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(xt=L.toneMapping);const st=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Gt=st!==void 0?st.length:0,xe=X.get(G),dn=T.state.lights;if(Ce===!0&&(ve===!0||M!==Q)){const lt=M===Q&&G.id===q;Ue.setState(G,M,lt)}let je=!1;G.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==dn.state.version||xe.outputColorSpace!==me||W.isBatchedMesh&&xe.batching===!1||!W.isBatchedMesh&&xe.batching===!0||W.isBatchedMesh&&xe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&xe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&xe.instancing===!1||!W.isInstancedMesh&&xe.instancing===!0||W.isSkinnedMesh&&xe.skinning===!1||!W.isSkinnedMesh&&xe.skinning===!0||W.isInstancedMesh&&xe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&xe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&xe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&xe.instancingMorph===!1&&W.morphTexture!==null||xe.envMap!==Le||G.fog===!0&&xe.fog!==ge||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Ue.numPlanes||xe.numIntersection!==Ue.numIntersection)||xe.vertexAlphas!==He||xe.vertexTangents!==We||xe.morphTargets!==Ne||xe.morphNormals!==rt||xe.morphColors!==Mt||xe.toneMapping!==xt||xe.morphTargetsCount!==Gt||!!xe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(je=!0):(je=!0,xe.__version=G.version);let Mn=xe.currentProgram;je===!0&&(Mn=qa(G,U,W),P&&G.isNodeMaterial&&P.onUpdateProgram(G,Mn,xe));let jn=!1,Ui=!1,Vr=!1;const at=Mn.getUniforms(),Et=xe.uniforms;if(_.useProgram(Mn.program)&&(jn=!0,Ui=!0,Vr=!0),G.id!==q&&(q=G.id,Ui=!0),xe.needsLights){const lt=E0(T.state.lightProbeGridArray,W);xe.lightProbeGrid!==lt&&(xe.lightProbeGrid=lt,Ui=!0)}if(jn||Q!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),at.setValue(D,"projectionMatrix",M.projectionMatrix),at.setValue(D,"viewMatrix",M.matrixWorldInverse);const Oi=at.map.cameraPosition;Oi!==void 0&&Oi.setValue(D,Ct.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&at.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&at.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),Q!==M&&(Q=M,Ui=!0,Vr=!0)}if(xe.needsLights&&(dn.state.directionalShadowMap.length>0&&at.setValue(D,"directionalShadowMap",dn.state.directionalShadowMap,K),dn.state.spotShadowMap.length>0&&at.setValue(D,"spotShadowMap",dn.state.spotShadowMap,K),dn.state.pointShadowMap.length>0&&at.setValue(D,"pointShadowMap",dn.state.pointShadowMap,K)),W.isSkinnedMesh){at.setOptional(D,W,"bindMatrix"),at.setOptional(D,W,"bindMatrixInverse");const lt=W.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),at.setValue(D,"boneTexture",lt.boneTexture,K))}W.isBatchedMesh&&(at.setOptional(D,W,"batchingTexture"),at.setValue(D,"batchingTexture",W._matricesTexture,K),at.setOptional(D,W,"batchingIdTexture"),at.setValue(D,"batchingIdTexture",W._indirectTexture,K),at.setOptional(D,W,"batchingColorTexture"),W._colorsTexture!==null&&at.setValue(D,"batchingColorTexture",W._colorsTexture,K));const Fi=$.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&N.update(W,$,Mn),(Ui||xe.receiveShadow!==W.receiveShadow)&&(xe.receiveShadow=W.receiveShadow,at.setValue(D,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Et.envMapIntensity.value=U.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=Sw()),Ui){if(at.setValue(D,"toneMappingExposure",L.toneMappingExposure),xe.needsLights&&w0(Et,Vr),ge&&G.fog===!0&&Pe.refreshFogUniforms(Et,ge),Pe.refreshMaterialUniforms(Et,G,te,ne,T.state.transmissionRenderTarget[M.id]),xe.needsLights&&xe.lightProbeGrid){const lt=xe.lightProbeGrid;Et.probesSH.value=lt.texture,Et.probesMin.value.copy(lt.boundingBox.min),Et.probesMax.value.copy(lt.boundingBox.max),Et.probesResolution.value.copy(lt.resolution)}Qo.upload(D,ah(xe),Et,K)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Qo.upload(D,ah(xe),Et,K),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&at.setValue(D,"center",W.center),at.setValue(D,"modelViewMatrix",W.modelViewMatrix),at.setValue(D,"normalMatrix",W.normalMatrix),at.setValue(D,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){const lt=G.uniformsGroups;for(let Oi=0,Hr=lt.length;Oi<Hr;Oi++){const lh=lt[Oi];ie.update(lh,Mn),ie.bind(lh,Mn)}}return Mn}function w0(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function A0(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,U,$){const G=X.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(M.texture).__webglTexture=U,X.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:$,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const $=X.get(M);$.__webglFramebuffer=U,$.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,$=0){I=M,V=U,z=$;let G=null,W=!1,ge=!1;if(M){const me=X.get(M);if(me.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(D.FRAMEBUFFER,me.__webglFramebuffer),re.copy(M.viewport),ae.copy(M.scissor),Fe=M.scissorTest,_.viewport(re),_.scissor(ae),_.setScissorTest(Fe),q=-1;return}else if(me.__webglFramebuffer===void 0)K.setupRenderTarget(M);else if(me.__hasExternalTextures)K.rebindTextures(M,X.get(M.texture).__webglTexture,X.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const He=M.depthTexture;if(me.__boundDepthTexture!==He){if(He!==null&&X.has(He)&&(M.width!==He.image.width||M.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(M)}}const Ae=M.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ge=!0);const Le=X.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?G=Le[U][$]:G=Le[U],W=!0):M.samples>0&&K.useMultisampledRTT(M)===!1?G=X.get(M).__webglMultisampledFramebuffer:Array.isArray(Le)?G=Le[$]:G=Le,re.copy(M.viewport),ae.copy(M.scissor),Fe=M.scissorTest}else re.copy(Ee).multiplyScalar(te).floor(),ae.copy(Ye).multiplyScalar(te).floor(),Fe=Te;if($!==0&&(G=B),_.bindFramebuffer(D.FRAMEBUFFER,G)&&_.drawBuffers(M,G),_.viewport(re),_.scissor(ae),_.setScissorTest(Fe),W){const me=X.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,$)}else if(ge){const me=U;for(let Ae=0;Ae<M.textures.length;Ae++){const Le=X.get(M.textures[Ae]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ae,Le.__webglTexture,$,me)}}else if(M!==null&&$!==0){const me=X.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,me.__webglTexture,$)}q=-1},this.readRenderTargetPixels=function(M,U,$,G,W,ge,Se,me=0){if(!(M&&M.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){_.bindFramebuffer(D.FRAMEBUFFER,Ae);try{const Le=M.textures[me],He=Le.format,We=Le.type;if(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),!R.textureFormatReadable(He)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(We)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-G&&$>=0&&$<=M.height-W&&D.readPixels(U,$,G,W,de.convert(He),de.convert(We),ge)}finally{const Le=I!==null?X.get(I).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(M,U,$,G,W,ge,Se,me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae)if(U>=0&&U<=M.width-G&&$>=0&&$<=M.height-W){_.bindFramebuffer(D.FRAMEBUFFER,Ae);const Le=M.textures[me],He=Le.format,We=Le.type;if(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),!R.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ne=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ne),D.bufferData(D.PIXEL_PACK_BUFFER,ge.byteLength,D.STREAM_READ),D.readPixels(U,$,G,W,de.convert(He),de.convert(We),0);const rt=I!==null?X.get(I).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,rt);const Mt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await GS(D,Mt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ne),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ge),D.deleteBuffer(Ne),D.deleteSync(Mt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,$=0){const G=Math.pow(2,-$),W=Math.floor(M.image.width*G),ge=Math.floor(M.image.height*G),Se=U!==null?U.x:0,me=U!==null?U.y:0;K.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,Se,me,W,ge),_.unbindTexture()},this.copyTextureToTexture=function(M,U,$=null,G=null,W=0,ge=0){let Se,me,Ae,Le,He,We,Ne,rt,Mt;const xt=M.isCompressedTexture?M.mipmaps[ge]:M.image;if($!==null)Se=$.max.x-$.min.x,me=$.max.y-$.min.y,Ae=$.isBox3?$.max.z-$.min.z:1,Le=$.min.x,He=$.min.y,We=$.isBox3?$.min.z:0;else{const Et=Math.pow(2,-W);Se=Math.floor(xt.width*Et),me=Math.floor(xt.height*Et),M.isDataArrayTexture?Ae=xt.depth:M.isData3DTexture?Ae=Math.floor(xt.depth*Et):Ae=1,Le=0,He=0,We=0}G!==null?(Ne=G.x,rt=G.y,Mt=G.z):(Ne=0,rt=0,Mt=0);const st=de.convert(U.format),Gt=de.convert(U.type);let xe;U.isData3DTexture?(K.setTexture3D(U,0),xe=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(K.setTexture2DArray(U,0),xe=D.TEXTURE_2D_ARRAY):(K.setTexture2D(U,0),xe=D.TEXTURE_2D),_.activeTexture(D.TEXTURE0),_.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const dn=_.getParameter(D.UNPACK_ROW_LENGTH),je=_.getParameter(D.UNPACK_IMAGE_HEIGHT),Mn=_.getParameter(D.UNPACK_SKIP_PIXELS),jn=_.getParameter(D.UNPACK_SKIP_ROWS),Ui=_.getParameter(D.UNPACK_SKIP_IMAGES);_.pixelStorei(D.UNPACK_ROW_LENGTH,xt.width),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt.height),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Le),_.pixelStorei(D.UNPACK_SKIP_ROWS,He),_.pixelStorei(D.UNPACK_SKIP_IMAGES,We);const Vr=M.isDataArrayTexture||M.isData3DTexture,at=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const Et=X.get(M),Fi=X.get(U),lt=X.get(Et.__renderTarget),Oi=X.get(Fi.__renderTarget);_.bindFramebuffer(D.READ_FRAMEBUFFER,lt.__webglFramebuffer),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let Hr=0;Hr<Ae;Hr++)Vr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,X.get(M).__webglTexture,W,We+Hr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,X.get(U).__webglTexture,ge,Mt+Hr)),D.blitFramebuffer(Le,He,Se,me,Ne,rt,Se,me,D.DEPTH_BUFFER_BIT,D.NEAREST);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||X.has(M)){const Et=X.get(M),Fi=X.get(U);_.bindFramebuffer(D.READ_FRAMEBUFFER,H),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,F);for(let lt=0;lt<Ae;lt++)Vr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.__webglTexture,W,We+lt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Et.__webglTexture,W),at?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Fi.__webglTexture,ge,Mt+lt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Fi.__webglTexture,ge),W!==0?D.blitFramebuffer(Le,He,Se,me,Ne,rt,Se,me,D.COLOR_BUFFER_BIT,D.NEAREST):at?D.copyTexSubImage3D(xe,ge,Ne,rt,Mt+lt,Le,He,Se,me):D.copyTexSubImage2D(xe,ge,Ne,rt,Le,He,Se,me);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else at?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(xe,ge,Ne,rt,Mt,Se,me,Ae,st,Gt,xt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(xe,ge,Ne,rt,Mt,Se,me,Ae,st,xt.data):D.texSubImage3D(xe,ge,Ne,rt,Mt,Se,me,Ae,st,Gt,xt):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ge,Ne,rt,Se,me,st,Gt,xt.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ge,Ne,rt,xt.width,xt.height,st,xt.data):D.texSubImage2D(D.TEXTURE_2D,ge,Ne,rt,Se,me,st,Gt,xt);_.pixelStorei(D.UNPACK_ROW_LENGTH,dn),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,je),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Mn),_.pixelStorei(D.UNPACK_SKIP_ROWS,jn),_.pixelStorei(D.UNPACK_SKIP_IMAGES,Ui),ge===0&&U.generateMipmaps&&D.generateMipmap(xe),_.unbindTexture()},this.initRenderTarget=function(M){X.get(M).__webglFramebuffer===void 0&&K.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?K.setTextureCube(M,0):M.isData3DTexture?K.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?K.setTexture2DArray(M,0):K.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){V=0,z=0,I=null,_.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=qe._getUnpackColorSpace()}}const Mw=`
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Ew=`
precision highp float;

uniform float uTime, uAttenuation, uLineThickness;
uniform float uBaseRadius, uRadiusStep, uScaleRate;
uniform float uOpacity, uNoiseAmount, uRotation, uRingGap;
uniform float uFadeIn, uFadeOut;
uniform float uMouseInfluence, uHoverAmount, uHoverScale, uParallax, uBurst;
uniform vec2 uResolution, uMouse;
uniform vec3 uColor, uColorTwo;
uniform int uRingCount;

const float HP = 1.5707963;
const float CYCLE = 3.45;

float fade(float t) {
  return t < uFadeIn ? smoothstep(0.0, uFadeIn, t) : 1.0 - smoothstep(uFadeOut, CYCLE - 0.2, t);
}

float ring(vec2 p, float ri, float cut, float t0, float px) {
  float t = mod(uTime + t0, CYCLE);
  float r = ri + t / CYCLE * uScaleRate;
  float d = abs(length(p) - r);
  float a = atan(abs(p.y), abs(p.x)) / HP;
  float th = max(1.0 - a, 0.5) * px * uLineThickness;
  float h = (1.0 - smoothstep(th, th * 1.5, d)) + 1.0;
  d += pow(cut * a, 3.0) * r;
  return h * exp(-uAttenuation * d) * fade(t);
}

void main() {
  float px = 1.0 / min(uResolution.x, uResolution.y);
  vec2 p = (gl_FragCoord.xy - 0.5 * uResolution.xy) * px;
  float cr = cos(uRotation), sr = sin(uRotation);
  p = mat2(cr, -sr, sr, cr) * p;
  p -= uMouse * uMouseInfluence;
  float sc = mix(1.0, uHoverScale, uHoverAmount) + uBurst * 0.3;
  p /= sc;
  vec3 c = vec3(0.0);
  float rcf = max(float(uRingCount) - 1.0, 1.0);
  for (int i = 0; i < 10; i++) {
    if (i >= uRingCount) break;
    float fi = float(i);
    vec2 pr = p - fi * uParallax * uMouse;
    vec3 rc = mix(uColor, uColorTwo, fi / rcf);
    c = mix(c, rc, vec3(ring(pr, uBaseRadius + fi * uRadiusStep, pow(uRingGap, fi), i == 0 ? 0.0 : 2.95 * fi, px)));
  }
  c *= 1.0 + uBurst * 2.0;
  float n = fract(sin(dot(gl_FragCoord.xy + uTime * 100.0, vec2(12.9898, 78.233))) * 43758.5453);
  c += (n - 0.5) * uNoiseAmount;
  gl_FragColor = vec4(c, max(c.r, max(c.g, c.b)) * uOpacity);
}
`;function Tw({color:t="#2ecc8f",colorTwo:e="#10b981",speed:n=1,ringCount:i=6,attenuation:r=10,lineThickness:s=2,baseRadius:a=.35,radiusStep:o=.1,scaleRate:l=.1,opacity:u=1,blur:h=0,noiseAmount:d=.1,rotation:c=0,ringGap:p=1.5,fadeIn:v=.7,fadeOut:E=.5,followMouse:g=!1,mouseInfluence:f=.2,hoverScale:x=1.2,parallax:y=.05,clickBurst:S=!1}){const w=ht.useRef(null),T=ht.useRef(null),b=ht.useRef([0,0]),m=ht.useRef([0,0]),A=ht.useRef(0),L=ht.useRef(!1),C=ht.useRef(0);return T.current={color:t,colorTwo:e,speed:n,ringCount:i,attenuation:r,lineThickness:s,baseRadius:a,radiusStep:o,scaleRate:l,opacity:u,noiseAmount:d,rotation:c,ringGap:p,fadeIn:v,fadeOut:E,followMouse:g,mouseInfluence:f,hoverScale:x,parallax:y,clickBurst:S},ht.useEffect(()=>{const P=w.current;if(!P)return;let B;try{B=new yw({alpha:!0})}catch{return}if(!B.capabilities.isWebGL2){B.dispose();return}B.setClearColor(0,0),P.appendChild(B.domElement);const H=new sy,F=new $d(-.5,.5,.5,-.5,.1,10);F.position.z=1;const V={uTime:{value:0},uAttenuation:{value:0},uResolution:{value:new Qe},uColor:{value:new Je},uColorTwo:{value:new Je},uLineThickness:{value:0},uBaseRadius:{value:0},uRadiusStep:{value:0},uScaleRate:{value:0},uRingCount:{value:0},uOpacity:{value:1},uNoiseAmount:{value:0},uRotation:{value:0},uRingGap:{value:1.6},uFadeIn:{value:.5},uFadeOut:{value:.75},uMouse:{value:new Qe},uMouseInfluence:{value:0},uHoverAmount:{value:0},uHoverScale:{value:1},uParallax:{value:0},uBurst:{value:0}},z=new Yn({vertexShader:Mw,fragmentShader:Ew,uniforms:V,transparent:!0}),I=new ci(new Xa(1,1),z);H.add(I);const q=()=>{const Ce=P.clientWidth,ve=P.clientHeight,et=Math.min(window.devicePixelRatio,2);B.setSize(Ce,ve),B.setPixelRatio(et),V.uResolution.value.set(Ce*et,ve*et)};q(),window.addEventListener("resize",q);const Q=new ResizeObserver(q);Q.observe(P);const re=Ce=>{const ve=P.getBoundingClientRect();b.current[0]=(Ce.clientX-ve.left)/ve.width-.5,b.current[1]=-((Ce.clientY-ve.top)/ve.height-.5)},ae=()=>{L.current=!0},Fe=()=>{L.current=!1,b.current[0]=0,b.current[1]=0},Be=()=>{C.current=1};P.addEventListener("mousemove",re),P.addEventListener("mouseenter",ae),P.addEventListener("mouseleave",Fe),P.addEventListener("click",Be);let De=0,j=!1,ne=!document.hidden,te=0,Me=0;const Ie=Ce=>{De=requestAnimationFrame(Ie);const ve=T.current;if(!ve)return;const et=Me===0?0:Math.min(Ce-Me,100);Me=Ce,te+=et*.001*ve.speed,m.current[0]+=(b.current[0]-m.current[0])*.08,m.current[1]+=(b.current[1]-m.current[1])*.08,A.current+=((L.current?1:0)-A.current)*.08,C.current*=.95,C.current<.001&&(C.current=0),V.uTime.value=te,V.uAttenuation.value=ve.attenuation,V.uColor.value.set(ve.color),V.uColorTwo.value.set(ve.colorTwo),V.uLineThickness.value=ve.lineThickness,V.uBaseRadius.value=ve.baseRadius,V.uRadiusStep.value=ve.radiusStep,V.uScaleRate.value=ve.scaleRate,V.uRingCount.value=ve.ringCount,V.uOpacity.value=ve.opacity,V.uNoiseAmount.value=ve.noiseAmount,V.uRotation.value=ve.rotation*Math.PI/180,V.uRingGap.value=ve.ringGap,V.uFadeIn.value=ve.fadeIn,V.uFadeOut.value=ve.fadeOut,V.uMouse.value.set(m.current[0],m.current[1]),V.uMouseInfluence.value=ve.followMouse?ve.mouseInfluence:0,V.uHoverAmount.value=A.current,V.uHoverScale.value=ve.hoverScale,V.uParallax.value=ve.parallax,V.uBurst.value=ve.clickBurst?C.current:0,B.render(H,F)};De=0;const Ee=()=>{j&&ne&&De===0&&(Me=0,De=requestAnimationFrame(Ie))},Ye=()=>{De!==0&&(cancelAnimationFrame(De),De=0)},Te=new IntersectionObserver(([Ce])=>{j=Ce.isIntersecting,j?Ee():Ye()},{threshold:0});Te.observe(P);const be=()=>{ne=!document.hidden,ne?Ee():Ye()};return document.addEventListener("visibilitychange",be),Ee(),()=>{Ye(),Te.disconnect(),document.removeEventListener("visibilitychange",be),window.removeEventListener("resize",q),Q.disconnect(),P.removeEventListener("mousemove",re),P.removeEventListener("mouseenter",ae),P.removeEventListener("mouseleave",Fe),P.removeEventListener("click",Be),B.domElement&&P.contains(B.domElement)&&P.removeChild(B.domElement),B.dispose(),z.dispose()}},[]),O.jsx("div",{ref:w,className:"magic-rings-container",style:h>0?{filter:`blur(${h}px)`}:void 0})}const ww=["bi-geo-alt-fill","bi-code-slash","bi-briefcase-fill"];function Aw(){return O.jsx("section",{id:"home",className:"hero",children:O.jsxs("div",{className:"container hero-inner",children:[O.jsxs("div",{className:"hero-visual",children:[O.jsxs("div",{className:"hero-rings",children:[O.jsx("div",{className:"hero-magic-rings-wrapper","aria-hidden":"true",children:O.jsx(Tw,{color:"#2dd4a7",colorTwo:"#34d399",ringCount:5,speed:.75,attenuation:15,lineThickness:1.3,baseRadius:.32,radiusStep:.08,scaleRate:.06,opacity:.68,blur:0,noiseAmount:.02,rotation:0,ringGap:1.4,fadeIn:.7,fadeOut:.5,followMouse:!0,mouseInfluence:.12,hoverScale:1.1,parallax:.03,clickBurst:!0})}),O.jsx("div",{className:"hero-rings-photo",children:O.jsx("img",{src:"/images/profile.png",alt:"Portrait of Bimal Rijal, Full-Stack Developer"})})]}),O.jsxs("div",{className:"hero-actions",children:[O.jsxs("a",{href:"BimalRijal.pdf",className:"btn btn-primary hero-btn",download:!0,children:[O.jsx("i",{className:"bi bi-download","aria-hidden":"true"})," Download CV"]}),O.jsxs("button",{type:"button",className:"btn btn-outline hero-btn",onClick:()=>Iv("contact"),children:[O.jsx("i",{className:"bi bi-envelope","aria-hidden":"true"})," Contact Me"]})]})]}),O.jsxs("div",{className:"hero-content",children:[O.jsx("span",{className:"eyebrow",children:"Full-Stack Developer"}),O.jsx("h1",{className:"hero-name",children:Cn.name}),O.jsx("h2",{className:"hero-tagline text-accent",children:Cn.tagline}),O.jsx("p",{className:"hero-intro",children:Cn.intro}),O.jsx("div",{className:"hero-cards",children:iS.map((t,e)=>O.jsxs("div",{className:"info-card glass-card",children:[O.jsx("span",{className:"info-card-icon",children:O.jsx("i",{className:`bi ${ww[e]}`,"aria-hidden":"true"})}),O.jsxs("div",{children:[O.jsx("p",{className:"info-card-label",children:t.label}),O.jsx("p",{className:"info-card-value",children:t.value})]})]},t.label))}),O.jsxs("div",{className:"hero-connect",children:[O.jsx("span",{className:"eyebrow",children:"Connect With Me"}),O.jsx(Fv,{})]})]})]})})}function Fa(t={threshold:.15}){const e=ht.useRef(null),[n,i]=ht.useState(!1);return ht.useEffect(()=>{const r=e.current;if(!r)return;const s=new IntersectionObserver(([a])=>{a.isIntersecting&&(i(!0),s.unobserve(r))},t);return s.observe(r),()=>s.disconnect()},[]),[e,n]}function bw(){const[t,e]=Fa(),[n,i]=Fa();return O.jsx("section",{id:"about",className:"section about",children:O.jsxs("div",{className:"container about-inner",children:[O.jsx("div",{ref:t,className:`about-image reveal ${e?"is-visible":""}`,children:O.jsx("img",{src:"/images/about.png",alt:"Bimal Rijal working at a desk"})}),O.jsxs("div",{ref:n,className:`about-content reveal ${i?"is-visible":""}`,children:[O.jsx("span",{className:"eyebrow",children:"About Me"}),O.jsx("h2",{children:"Building thoughtful web applications, end to end"}),O.jsx("p",{className:"about-text",children:Cn.aboutText}),O.jsx("ul",{className:`about-highlights reveal-stagger ${i?"is-visible":""}`,children:Cn.aboutHighlights.map(r=>O.jsxs("li",{children:[O.jsx("i",{className:"bi bi-check-circle-fill","aria-hidden":"true"}),O.jsx("span",{children:r})]},r))})]})]})})}function Kl({eyebrow:t,title:e,description:n,align:i="center"}){return O.jsxs("div",{className:`section-title section-title-${i}`,children:[t&&O.jsx("span",{className:"eyebrow",children:t}),O.jsx("h2",{children:e}),n&&O.jsx("p",{className:"section-title-desc",children:n})]})}function gm({className:t="",reverse:e=!1,pauseOnHover:n=!1,children:i,repeat:r=4,duration:s="28s",gap:a="1.25rem",...o}){return O.jsx("div",{className:`marquee-container ${e?"marquee-reverse":""} ${n?"marquee-pause-hover":""} ${t}`,style:{"--duration":s,"--gap":a},...o,children:Array.from({length:r}).map((l,u)=>O.jsx("div",{className:"marquee-content","aria-hidden":u>0,children:i},u))})}function vm({name:t,category:e,image:n,icon:i}){const r=n||i;return O.jsxs("div",{className:"tech-item",children:[O.jsx("div",{className:"tech-icon-wrapper",children:O.jsx("img",{src:r,alt:`${t} logo`,className:"tech-icon-img",loading:"lazy",width:"56",height:"56"})}),O.jsx("span",{className:"tech-name",children:t}),O.jsx("span",{className:"tech-category",children:e})]})}const Rw=[{name:"HTML5",category:"Markup",image:"/images/html.png"},{name:"CSS3",category:"Styling",image:"/images/css.png"},{name:"JavaScript",category:"Language",image:"/images/javascript.png"},{name:"React.js",category:"Frontend UI",image:"/images/react.png"},{name:"Next.js",category:"React Framework",image:"/images/nextjs.png"},{name:"PostgreSQL",category:"Relational DB",image:"/images/postgresql.png"}],Cw=[{name:"Python",category:"Core Backend",image:"/images/python.png"},{name:"Django",category:"Web Framework",image:"/images/django.png"},{name:"REST Framework",category:"API Architecture",image:"/images/rest.png"},{name:"MySQL",category:"Database",image:"/images/mysql.png"},{name:"Tailwind CSS",category:"CSS Framework",image:"/images/tailwind.png"},{name:"Bootstrap 5",category:"UI Library",image:"/images/bootstrap.png"}];function Pw(){return O.jsxs("div",{className:"tech-marquee-wrapper","data-aos":"fade-up",children:[O.jsx(gm,{pauseOnHover:!0,duration:"30s",gap:"2rem",children:Rw.map(t=>O.jsx(vm,{...t},t.name))}),O.jsx(gm,{reverse:!0,pauseOnHover:!0,duration:"32s",gap:"2rem",children:Cw.map(t=>O.jsx(vm,{...t},t.name))})]})}function Lw(){return O.jsx("section",{id:"skills",className:"section skills",children:O.jsxs("div",{className:"container",children:[O.jsx(Kl,{eyebrow:"My Skills",title:"Technologies I work with",description:"A focused toolkit for building full-stack web applications, from the database up to the interface."}),O.jsx(Pw,{})]})})}const Nw=[{title:"Cardify",description:"A digital business card platform for creating and sharing shareable, editable personal profiles online.",image:"images/cardify.png",technologies:["Django","React","PostgreSQL"],github:"https://github.com/bimalrijal56-oss/Cardify",live:"https://cardify-plum.vercel.app/"},{title:"Bimal Travels",description:"A Tours and Travels website with booking and management system.",image:"images/bimal-travels.png",technologies:["Django REST Framework","React","Bootstrap"],github:"https://github.com/bimalrijal56-oss/Bimal-travels",live:"https://bimal-travels.vercel.app/"},{title:"Astrokali",description:"A cosmic-themed blog and business website showcasing astrology content and services.",image:"images/astrokali.png",technologies:["React","Bootstrap","JS"],github:"https://github.com/bimalrijal56-oss/Astrokali",live:"https://www.astrokaali.com/"}];function Dw({project:t}){const{title:e,description:n,image:i,technologies:r,github:s,live:a}=t,o=i?i.startsWith("/")||i.startsWith("http")?i:`/${i}`:"/images/project-3.png";return O.jsxs("article",{className:"project-card glass-card","data-aos":"fade-up",children:[O.jsx("div",{className:"project-image",children:O.jsx("img",{src:o,alt:`${e} project preview`,loading:"lazy"})}),O.jsxs("div",{className:"project-body",children:[O.jsx("h3",{className:"project-title",children:e}),O.jsx("p",{className:"project-desc",children:n}),O.jsx("ul",{className:"project-tech",children:r.map(l=>O.jsx("li",{children:l},l))}),O.jsxs("div",{className:"project-actions",children:[O.jsxs("a",{href:s||"#",className:"btn btn-outline project-btn",target:"_blank",rel:"noopener noreferrer","aria-label":`View ${e} source code on GitHub`,children:[O.jsx("i",{className:"bi bi-github","aria-hidden":"true"})," GitHub"]}),O.jsxs("a",{href:a||"#",className:"btn btn-primary project-btn",target:"_blank",rel:"noopener noreferrer","aria-label":`View live demo of ${e}`,children:[O.jsx("i",{className:"bi bi-box-arrow-up-right","aria-hidden":"true"})," Live Demo"]})]})]})]})}function Iw(){const[t,e]=Fa();return O.jsx("section",{id:"projects",className:"section projects",children:O.jsxs("div",{className:"container",children:[O.jsx(Kl,{eyebrow:"Featured Projects",title:"A few things I've built",description:"View my works — Both live and git versions are available along with the technologies i've worked with to build specific project."}),O.jsx("div",{ref:t,className:`projects-grid reveal-stagger ${e?"is-visible":""}`,children:Nw.map(n=>O.jsx(Dw,{project:n},n.title))})]})})}const Uw=[{title:"Full-Stack Developer",company:"Evolve IT",duration:"2026 — Present",description:"Developing and maintaining web applications using Python, Django, and React.",technologies:["Python","Django","React"]}];function Fw(){const[t,e]=Fa();return O.jsx("section",{id:"experience",className:"section experience",children:O.jsxs("div",{className:"container",children:[O.jsx(Kl,{eyebrow:"Experience",title:"Where I've worked",description:"Companies I've worked with — overview my works in one of major leading IT companies of Nepal"}),O.jsx("div",{ref:t,className:`experience-timeline reveal-stagger ${e?"is-visible":""}`,children:Uw.map(n=>O.jsxs("article",{className:"experience-item glass-card","data-aos":"fade-up",children:[O.jsx("div",{className:"experience-marker","aria-hidden":"true"}),O.jsxs("div",{className:"experience-body",children:[O.jsxs("div",{className:"experience-head",children:[O.jsx("h3",{children:n.title}),O.jsx("span",{className:"experience-duration",children:n.duration})]}),O.jsx("p",{className:"experience-company",children:n.company}),O.jsx("p",{className:"experience-desc",children:n.description}),O.jsx("ul",{className:"experience-tech",children:n.technologies.map(i=>O.jsx("li",{children:i},i))})]})]},`${n.company}-${n.title}`))})]})})}const x0=["Web Development","Full-Stack Development","Backend Development","Django Development","React Development","API Development","Other"],_m={name:"",email:"",whatsapp:"",service:x0[0],message:""},xm=[{icon:"bi-envelope-fill",label:"Email",value:gi.email,href:`https://mail.google.com/mail/?view=cm&fs=1&to=${gi.email}`},{icon:"bi-telephone-fill",label:"Phone",value:gi.phone||gi.whatsappDisplay,href:`tel:${gi.phoneNumber||"+9779867428466"}`},{icon:"bi-whatsapp",label:"WhatsApp",value:gi.whatsappDisplay,href:Uv(gi.whatsappNumber,"Hi Bimal, I'd like to get in touch.")},{icon:"bi-geo-alt-fill",label:"Location",value:gi.location,href:null}];function Ow(){const[t,e]=Fa(),[n,i]=ht.useState(_m),[r,s]=ht.useState({}),[a,o]=ht.useState(null),l=d=>{const{name:c,value:p}=d.target;i(v=>({...v,[c]:p}))},u=()=>{const d={};return n.name.trim()||(d.name="Please enter your name."),n.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)||(d.email="Please enter a valid email address."):d.email="Please enter your email.",n.message.trim()||(d.message="Please add a short message."),s(d),Object.keys(d).length===0},h=d=>{if(d.preventDefault(),!u()){o(null);return}const c=[`New inquiry from ${n.name}`,`Service: ${n.service}`,n.whatsapp?`Contact number: ${n.whatsapp}`:null,`Email: ${n.email}`,`Message: ${n.message}`].filter(Boolean).join(`
`);window.open(Uv(gi.whatsappNumber,c),"_blank","noopener,noreferrer"),o("success"),i(_m)};return O.jsx("section",{id:"contact",className:"section contact",children:O.jsxs("div",{className:"container",children:[O.jsx(Kl,{eyebrow:"Hire Me",title:"Let's build something together",description:"Tell me a bit about your project and I'll get back to you as soon as possible."}),O.jsxs("div",{ref:t,className:`contact-grid reveal-stagger ${e?"is-visible":""}`,children:[O.jsxs("div",{className:"contact-info glass-card","data-aos":"fade-up",children:[O.jsx("p",{className:"contact-info-heading",children:"Reach me directly"}),xm.map(({icon:d,label:c,value:p,href:v},E)=>{const g=O.jsxs("div",{className:`contact-row ${E!==xm.length-1?"has-divider":""}`,children:[O.jsx("span",{className:"contact-row-icon",children:O.jsx("i",{className:`bi ${d}`,"aria-hidden":"true"})}),O.jsxs("div",{children:[O.jsx("p",{className:"contact-row-label",children:c}),O.jsx("p",{className:"contact-row-value",children:p})]})]},c);return v?O.jsx("a",{href:v,target:"_blank",rel:"noopener noreferrer",className:"contact-row-link","aria-label":`${c}: ${p}`,children:g},c):g})]}),O.jsxs("form",{className:"contact-form glass-card",onSubmit:h,noValidate:!0,"data-aos":"fade-up",children:[O.jsxs("div",{className:"form-row",children:[O.jsxs("div",{className:"form-field",children:[O.jsx("label",{htmlFor:"name",children:"Name"}),O.jsx("input",{id:"name",name:"name",type:"text",value:n.name,onChange:l,"aria-invalid":!!r.name,"aria-describedby":r.name?"name-error":void 0}),r.name&&O.jsx("span",{className:"form-error",id:"name-error",children:r.name})]}),O.jsxs("div",{className:"form-field",children:[O.jsx("label",{htmlFor:"email",children:"Email"}),O.jsx("input",{id:"email",name:"email",type:"email",value:n.email,onChange:l,"aria-invalid":!!r.email,"aria-describedby":r.email?"email-error":void 0}),r.email&&O.jsx("span",{className:"form-error",id:"email-error",children:r.email})]})]}),O.jsxs("div",{className:"form-row",children:[O.jsxs("div",{className:"form-field",children:[O.jsx("label",{htmlFor:"whatsapp",children:"WhatsApp Number"}),O.jsx("input",{id:"whatsapp",name:"whatsapp",type:"tel",value:n.whatsapp,onChange:l,placeholder:"Optional"})]}),O.jsxs("div",{className:"form-field",children:[O.jsx("label",{htmlFor:"service",children:"Service"}),O.jsx("select",{id:"service",name:"service",value:n.service,onChange:l,children:x0.map(d=>O.jsx("option",{value:d,children:d},d))})]})]}),O.jsxs("div",{className:"form-field",children:[O.jsx("label",{htmlFor:"message",children:"Message"}),O.jsx("textarea",{id:"message",name:"message",rows:"4",value:n.message,onChange:l,"aria-invalid":!!r.message,"aria-describedby":r.message?"message-error":void 0}),r.message&&O.jsx("span",{className:"form-error",id:"message-error",children:r.message})]}),O.jsxs("button",{type:"submit",className:"btn btn-primary form-submit",children:[O.jsx("i",{className:"bi bi-send-fill","aria-hidden":"true"})," Send Message"]}),a==="success"&&O.jsx("p",{className:"form-status",role:"status",children:"Thanks! Your message is ready in WhatsApp — please hit send there to reach me directly."})]})]})]})})}function kw(){return ht.useEffect(()=>{nS.init({duration:1e3,once:!0,easing:"ease-out-cubic"})},[]),O.jsxs(O.Fragment,{children:[O.jsx("div",{className:"bg-atmosphere","aria-hidden":"true"}),O.jsx(aS,{}),O.jsxs("main",{children:[O.jsx(Aw,{}),O.jsx(bw,{}),O.jsx(Lw,{}),O.jsx(Iw,{}),O.jsx(Fw,{}),O.jsx(Ow,{})]}),O.jsx(lS,{})]})}sc.createRoot(document.getElementById("root")).render(O.jsx(G0.StrictMode,{children:O.jsx(kw,{})}));

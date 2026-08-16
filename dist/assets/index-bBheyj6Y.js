(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function L_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var cd={exports:{}},uo={},ud={exports:{}},yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function I_(){if(Hm)return yt;Hm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.iterator;function m(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function S(O,J,ke){this.props=O,this.context=J,this.refs=T,this.updater=ke||_}S.prototype.isReactComponent={},S.prototype.setState=function(O,J){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,J,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function y(){}y.prototype=S.prototype;function N(O,J,ke){this.props=O,this.context=J,this.refs=T,this.updater=ke||_}var F=N.prototype=new y;F.constructor=N,M(F,S.prototype),F.isPureReactComponent=!0;var b=Array.isArray,C=Object.prototype.hasOwnProperty,P={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function w(O,J,ke){var je,Xe={},re=null,xe=null;if(J!=null)for(je in J.ref!==void 0&&(xe=J.ref),J.key!==void 0&&(re=""+J.key),J)C.call(J,je)&&!I.hasOwnProperty(je)&&(Xe[je]=J[je]);var me=arguments.length-2;if(me===1)Xe.children=ke;else if(1<me){for(var ze=Array(me),it=0;it<me;it++)ze[it]=arguments[it+2];Xe.children=ze}if(O&&O.defaultProps)for(je in me=O.defaultProps,me)Xe[je]===void 0&&(Xe[je]=me[je]);return{$$typeof:s,type:O,key:re,ref:xe,props:Xe,_owner:P.current}}function L(O,J){return{$$typeof:s,type:O.type,key:J,ref:O.ref,props:O.props,_owner:O._owner}}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function z(O){var J={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ke){return J[ke]})}var q=/\/+/g;function oe(O,J){return typeof O=="object"&&O!==null&&O.key!=null?z(""+O.key):J.toString(36)}function fe(O,J,ke,je,Xe){var re=typeof O;(re==="undefined"||re==="boolean")&&(O=null);var xe=!1;if(O===null)xe=!0;else switch(re){case"string":case"number":xe=!0;break;case"object":switch(O.$$typeof){case s:case e:xe=!0}}if(xe)return xe=O,Xe=Xe(xe),O=je===""?"."+oe(xe,0):je,b(Xe)?(ke="",O!=null&&(ke=O.replace(q,"$&/")+"/"),fe(Xe,J,ke,"",function(it){return it})):Xe!=null&&(V(Xe)&&(Xe=L(Xe,ke+(!Xe.key||xe&&xe.key===Xe.key?"":(""+Xe.key).replace(q,"$&/")+"/")+O)),J.push(Xe)),1;if(xe=0,je=je===""?".":je+":",b(O))for(var me=0;me<O.length;me++){re=O[me];var ze=je+oe(re,me);xe+=fe(re,J,ke,ze,Xe)}else if(ze=m(O),typeof ze=="function")for(O=ze.call(O),me=0;!(re=O.next()).done;)re=re.value,ze=je+oe(re,me++),xe+=fe(re,J,ke,ze,Xe);else if(re==="object")throw J=String(O),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return xe}function Z(O,J,ke){if(O==null)return O;var je=[],Xe=0;return fe(O,je,"","",function(re){return J.call(ke,re,Xe++)}),je}function ue(O){if(O._status===-1){var J=O._result;J=J(),J.then(function(ke){(O._status===0||O._status===-1)&&(O._status=1,O._result=ke)},function(ke){(O._status===0||O._status===-1)&&(O._status=2,O._result=ke)}),O._status===-1&&(O._status=0,O._result=J)}if(O._status===1)return O._result.default;throw O._result}var $={current:null},Y={transition:null},le={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:Y,ReactCurrentOwner:P};function ce(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:Z,forEach:function(O,J,ke){Z(O,function(){J.apply(this,arguments)},ke)},count:function(O){var J=0;return Z(O,function(){J++}),J},toArray:function(O){return Z(O,function(J){return J})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},yt.Component=S,yt.Fragment=t,yt.Profiler=a,yt.PureComponent=N,yt.StrictMode=i,yt.Suspense=f,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,yt.act=ce,yt.cloneElement=function(O,J,ke){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var je=M({},O.props),Xe=O.key,re=O.ref,xe=O._owner;if(J!=null){if(J.ref!==void 0&&(re=J.ref,xe=P.current),J.key!==void 0&&(Xe=""+J.key),O.type&&O.type.defaultProps)var me=O.type.defaultProps;for(ze in J)C.call(J,ze)&&!I.hasOwnProperty(ze)&&(je[ze]=J[ze]===void 0&&me!==void 0?me[ze]:J[ze])}var ze=arguments.length-2;if(ze===1)je.children=ke;else if(1<ze){me=Array(ze);for(var it=0;it<ze;it++)me[it]=arguments[it+2];je.children=me}return{$$typeof:s,type:O.type,key:Xe,ref:re,props:je,_owner:xe}},yt.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:o,_context:O},O.Consumer=O},yt.createElement=w,yt.createFactory=function(O){var J=w.bind(null,O);return J.type=O,J},yt.createRef=function(){return{current:null}},yt.forwardRef=function(O){return{$$typeof:d,render:O}},yt.isValidElement=V,yt.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:ue}},yt.memo=function(O,J){return{$$typeof:p,type:O,compare:J===void 0?null:J}},yt.startTransition=function(O){var J=Y.transition;Y.transition={};try{O()}finally{Y.transition=J}},yt.unstable_act=ce,yt.useCallback=function(O,J){return $.current.useCallback(O,J)},yt.useContext=function(O){return $.current.useContext(O)},yt.useDebugValue=function(){},yt.useDeferredValue=function(O){return $.current.useDeferredValue(O)},yt.useEffect=function(O,J){return $.current.useEffect(O,J)},yt.useId=function(){return $.current.useId()},yt.useImperativeHandle=function(O,J,ke){return $.current.useImperativeHandle(O,J,ke)},yt.useInsertionEffect=function(O,J){return $.current.useInsertionEffect(O,J)},yt.useLayoutEffect=function(O,J){return $.current.useLayoutEffect(O,J)},yt.useMemo=function(O,J){return $.current.useMemo(O,J)},yt.useReducer=function(O,J,ke){return $.current.useReducer(O,J,ke)},yt.useRef=function(O){return $.current.useRef(O)},yt.useState=function(O){return $.current.useState(O)},yt.useSyncExternalStore=function(O,J,ke){return $.current.useSyncExternalStore(O,J,ke)},yt.useTransition=function(){return $.current.useTransition()},yt.version="18.3.1",yt}var Gm;function eh(){return Gm||(Gm=1,ud.exports=I_()),ud.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function D_(){if(Wm)return uo;Wm=1;var s=eh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(d,f,p){var x,g={},m=null,_=null;p!==void 0&&(m=""+p),f.key!==void 0&&(m=""+f.key),f.ref!==void 0&&(_=f.ref);for(x in f)i.call(f,x)&&!o.hasOwnProperty(x)&&(g[x]=f[x]);if(d&&d.defaultProps)for(x in f=d.defaultProps,f)g[x]===void 0&&(g[x]=f[x]);return{$$typeof:e,type:d,key:m,ref:_,props:g,_owner:a.current}}return uo.Fragment=t,uo.jsx=c,uo.jsxs=c,uo}var Xm;function N_(){return Xm||(Xm=1,cd.exports=D_()),cd.exports}var pg=N_(),Fl={},dd={exports:{}},Jn={},fd={exports:{}},hd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function U_(){return qm||(qm=1,(function(s){function e(Y,le){var ce=Y.length;Y.push(le);e:for(;0<ce;){var O=ce-1>>>1,J=Y[O];if(0<a(J,le))Y[O]=le,Y[ce]=J,ce=O;else break e}}function t(Y){return Y.length===0?null:Y[0]}function i(Y){if(Y.length===0)return null;var le=Y[0],ce=Y.pop();if(ce!==le){Y[0]=ce;e:for(var O=0,J=Y.length,ke=J>>>1;O<ke;){var je=2*(O+1)-1,Xe=Y[je],re=je+1,xe=Y[re];if(0>a(Xe,ce))re<J&&0>a(xe,Xe)?(Y[O]=xe,Y[re]=ce,O=re):(Y[O]=Xe,Y[je]=ce,O=je);else if(re<J&&0>a(xe,ce))Y[O]=xe,Y[re]=ce,O=re;else break e}}return le}function a(Y,le){var ce=Y.sortIndex-le.sortIndex;return ce!==0?ce:Y.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;s.unstable_now=function(){return o.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var f=[],p=[],x=1,g=null,m=3,_=!1,M=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(Y){for(var le=t(p);le!==null;){if(le.callback===null)i(p);else if(le.startTime<=Y)i(p),le.sortIndex=le.expirationTime,e(f,le);else break;le=t(p)}}function b(Y){if(T=!1,F(Y),!M)if(t(f)!==null)M=!0,ue(C);else{var le=t(p);le!==null&&$(b,le.startTime-Y)}}function C(Y,le){M=!1,T&&(T=!1,y(w),w=-1),_=!0;var ce=m;try{for(F(le),g=t(f);g!==null&&(!(g.expirationTime>le)||Y&&!z());){var O=g.callback;if(typeof O=="function"){g.callback=null,m=g.priorityLevel;var J=O(g.expirationTime<=le);le=s.unstable_now(),typeof J=="function"?g.callback=J:g===t(f)&&i(f),F(le)}else i(f);g=t(f)}if(g!==null)var ke=!0;else{var je=t(p);je!==null&&$(b,je.startTime-le),ke=!1}return ke}finally{g=null,m=ce,_=!1}}var P=!1,I=null,w=-1,L=5,V=-1;function z(){return!(s.unstable_now()-V<L)}function q(){if(I!==null){var Y=s.unstable_now();V=Y;var le=!0;try{le=I(!0,Y)}finally{le?oe():(P=!1,I=null)}}else P=!1}var oe;if(typeof N=="function")oe=function(){N(q)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,Z=fe.port2;fe.port1.onmessage=q,oe=function(){Z.postMessage(null)}}else oe=function(){S(q,0)};function ue(Y){I=Y,P||(P=!0,oe())}function $(Y,le){w=S(function(){Y(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){M||_||(M=!0,ue(C))},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return m},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(Y){switch(m){case 1:case 2:case 3:var le=3;break;default:le=m}var ce=m;m=le;try{return Y()}finally{m=ce}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,le){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ce=m;m=Y;try{return le()}finally{m=ce}},s.unstable_scheduleCallback=function(Y,le,ce){var O=s.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?O+ce:O):ce=O,Y){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=ce+J,Y={id:x++,callback:le,priorityLevel:Y,startTime:ce,expirationTime:J,sortIndex:-1},ce>O?(Y.sortIndex=ce,e(p,Y),t(f)===null&&Y===t(p)&&(T?(y(w),w=-1):T=!0,$(b,ce-O))):(Y.sortIndex=J,e(f,Y),M||_||(M=!0,ue(C))),Y},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(Y){var le=m;return function(){var ce=m;m=le;try{return Y.apply(this,arguments)}finally{m=ce}}}})(hd)),hd}var Ym;function F_(){return Ym||(Ym=1,fd.exports=U_()),fd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m;function O_(){if($m)return Jn;$m=1;var s=eh(),e=F_();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function o(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(a[n]=r,n=0;n<r.length;n++)i.add(r[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},g={};function m(n){return f.call(g,n)?!0:f.call(x,n)?!1:p.test(n)?g[n]=!0:(x[n]=!0,!1)}function _(n,r,l,u){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,u){if(r===null||typeof r>"u"||_(n,r,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function T(n,r,l,u,h,v,A){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=A}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new T(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(y,N);S[r]=new T(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(y,N);S[r]=new T(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(y,N);S[r]=new T(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function F(n,r,l,u){var h=S.hasOwnProperty(r)?S[r]:null;(h!==null?h.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,h,u)&&(l=null),u||h===null?m(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):h.mustUseProperty?n[h.propertyName]=l===null?h.type===3?!1:"":l:(r=h.attributeName,u=h.attributeNamespace,l===null?n.removeAttribute(r):(h=h.type,l=h===3||h===4&&l===!0?"":""+l,u?n.setAttributeNS(u,r,l):n.setAttribute(r,l))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C=Symbol.for("react.element"),P=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),z=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),Y=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var ce=Object.assign,O;function J(n){if(O===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var ke=!1;function je(n,r){if(!n||ke)return"";ke=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ae){var u=ae}Reflect.construct(n,[],r)}else{try{r.call()}catch(ae){u=ae}n.call(r.prototype)}else{try{throw Error()}catch(ae){u=ae}n()}}catch(ae){if(ae&&u&&typeof ae.stack=="string"){for(var h=ae.stack.split(`
`),v=u.stack.split(`
`),A=h.length-1,U=v.length-1;1<=A&&0<=U&&h[A]!==v[U];)U--;for(;1<=A&&0<=U;A--,U--)if(h[A]!==v[U]){if(A!==1||U!==1)do if(A--,U--,0>U||h[A]!==v[U]){var B=`
`+h[A].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=A&&0<=U);break}}}finally{ke=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?J(n):""}function Xe(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=je(n.type,!1),n;case 11:return n=je(n.type.render,!1),n;case 1:return n=je(n.type,!0),n;default:return""}}function re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case P:return"Portal";case L:return"Profiler";case w:return"StrictMode";case oe:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case q:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Z:return r=n.displayName||null,r!==null?r:re(n.type)||"Memo";case ue:r=n._payload,n=n._init;try{return re(n(r))}catch{}}return null}function xe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(r);case 8:return r===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function it(n){var r=ze(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(A){u=""+A,v.call(this,A)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(A){u=""+A},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function rt(n){n._valueTracker||(n._valueTracker=it(n))}function Yt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),u="";return n&&(u=ze(n)?n.checked?"true":"false":n.value),n=u,n!==l?(r.setValue(n),!0):!1}function mt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Lt(n,r){var l=r.checked;return ce({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Tt(n,r){var l=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;l=me(r.value!=null?r.value:l),n._wrapperState={initialChecked:u,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function St(n,r){r=r.checked,r!=null&&F(n,"checked",r,!1)}function $t(n,r){St(n,r);var l=me(r.value),u=r.type;if(l!=null)u==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?an(n,r.type,l):r.hasOwnProperty("defaultValue")&&an(n,r.type,me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function sn(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function an(n,r,l){(r!=="number"||mt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Qt=Array.isArray;function Nt(n,r,l,u){if(n=n.options,r){r={};for(var h=0;h<l.length;h++)r["$"+l[h]]=!0;for(l=0;l<n.length;l++)h=r.hasOwnProperty("$"+n[l].value),n[l].selected!==h&&(n[l].selected=h),h&&u&&(n[l].defaultSelected=!0)}else{for(l=""+me(l),r=null,h=0;h<n.length;h++){if(n[h].value===l){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function Kt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function W(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(Qt(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:me(l)}}function En(n,r){var l=me(r.value),u=me(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),u!=null&&(n.defaultValue=""+u)}function Ct(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function D(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?D(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var K,ie=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,u,h){MSApp.execUnsafeLocalFunction(function(){return n(r,l,u,h)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=K.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function de(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ce=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){Ce.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ee[r]=Ee[n]})});function he(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+r).trim():r+"px"}function ge(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var u=l.indexOf("--")===0,h=he(l,r[l],u);l==="float"&&(l="cssFloat"),u?n.setProperty(l,h):n[l]=h}}var Ie=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(n,r){if(r){if(Ie[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function De(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function nt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var st=null,lt=null,H=null;function Re(n){if(n=Ka(n)){if(typeof st!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Jo(r),st(n.stateNode,n.type,r))}}function pe(n){lt?H?H.push(n):H=[n]:lt=n}function Pe(){if(lt){var n=lt,r=H;if(H=lt=null,Re(n),r)for(n=0;n<r.length;n++)Re(r[n])}}function Ue(n,r){return n(r)}function _e(){}var $e=!1;function qe(n,r,l){if($e)return n(r,l);$e=!0;try{return Ue(n,r,l)}finally{$e=!1,(lt!==null||H!==null)&&(_e(),Pe())}}function zt(n,r){var l=n.stateNode;if(l===null)return null;var u=Jo(l);if(u===null)return null;l=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var It=!1;if(d)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){It=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{It=!1}function oi(n,r,l,u,h,v,A,U,B){var ae=Array.prototype.slice.call(arguments,3);try{r.apply(l,ae)}catch(Se){this.onError(Se)}}var Kr=!1,As=null,Zr=!1,Jr=null,Ic={onError:function(n){Kr=!0,As=n}};function Do(n,r,l,u,h,v,A,U,B){Kr=!1,As=null,oi.apply(Ic,arguments)}function No(n,r,l,u,h,v,A,U,B){if(Do.apply(this,arguments),Kr){if(Kr){var ae=As;Kr=!1,As=null}else throw Error(t(198));Zr||(Zr=!0,Jr=ae)}}function On(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Rs(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ca(n){if(On(n)!==n)throw Error(t(188))}function Uo(n){var r=n.alternate;if(!r){if(r=On(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,u=r;;){var h=l.return;if(h===null)break;var v=h.alternate;if(v===null){if(u=h.return,u!==null){l=u;continue}break}if(h.child===v.child){for(v=h.child;v;){if(v===l)return Ca(h),n;if(v===u)return Ca(h),r;v=v.sibling}throw Error(t(188))}if(l.return!==u.return)l=h,u=v;else{for(var A=!1,U=h.child;U;){if(U===l){A=!0,l=h,u=v;break}if(U===u){A=!0,u=h,l=v;break}U=U.sibling}if(!A){for(U=v.child;U;){if(U===l){A=!0,l=v,u=h;break}if(U===u){A=!0,u=v,l=h;break}U=U.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==u)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Qr(n){return n=Uo(n),n!==null?Pa(n):null}function Pa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Pa(n);if(r!==null)return r;n=n.sibling}return null}var jr=e.unstable_scheduleCallback,La=e.unstable_cancelCallback,Fo=e.unstable_shouldYield,Dc=e.unstable_requestPaint,jt=e.unstable_now,Nc=e.unstable_getCurrentPriorityLevel,Ia=e.unstable_ImmediatePriority,R=e.unstable_UserBlockingPriority,X=e.unstable_NormalPriority,se=e.unstable_LowPriority,te=e.unstable_IdlePriority,ee=null,Ae=null;function He(n){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(ee,n,void 0,(n.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:ft,Ke=Math.log,tt=Math.LN2;function ft(n){return n>>>=0,n===0?32:31-(Ke(n)/tt|0)|0}var ht=64,Qe=4194304;function At(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Vt(n,r){var l=n.pendingLanes;if(l===0)return 0;var u=0,h=n.suspendedLanes,v=n.pingedLanes,A=l&268435455;if(A!==0){var U=A&~h;U!==0?u=At(U):(v&=A,v!==0&&(u=At(v)))}else A=l&~h,A!==0?u=At(A):v!==0&&(u=At(v));if(u===0)return 0;if(r!==0&&r!==u&&(r&h)===0&&(h=u&-u,v=r&-r,h>=v||h===16&&(v&4194240)!==0))return r;if((u&4)!==0&&(u|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)l=31-Te(r),h=1<<l,u|=n[l],r&=~h;return u}function Zt(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ut(n,r){for(var l=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,v=n.pendingLanes;0<v;){var A=31-Te(v),U=1<<A,B=h[A];B===-1?((U&l)===0||(U&u)!==0)&&(h[A]=Zt(U,r)):B<=r&&(n.expiredLanes|=U),v&=~U}}function un(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Be(){var n=ht;return ht<<=1,(ht&4194240)===0&&(ht=64),n}function wn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function _t(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Te(r),n[r]=l}function Wn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<l;){var h=31-Te(l),v=1<<h;r[h]=0,u[h]=-1,n[h]=-1,l&=~v}}function Xn(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var u=31-Te(l),h=1<<u;h&r|n[u]&r&&(n[u]|=r),l&=~h}}var xt=0;function Ki(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Dt,Wt,xi,Ft,yi,Ui=!1,es=[],gr=null,vr=null,_r=null,Da=new Map,Na=new Map,xr=[],jg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Th(n,r){switch(n){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":Da.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Na.delete(r.pointerId)}}function Ua(n,r,l,u,h,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:u,nativeEvent:v,targetContainers:[h]},r!==null&&(r=Ka(r),r!==null&&Wt(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function ev(n,r,l,u,h){switch(r){case"focusin":return gr=Ua(gr,n,r,l,u,h),!0;case"dragenter":return vr=Ua(vr,n,r,l,u,h),!0;case"mouseover":return _r=Ua(_r,n,r,l,u,h),!0;case"pointerover":var v=h.pointerId;return Da.set(v,Ua(Da.get(v)||null,n,r,l,u,h)),!0;case"gotpointercapture":return v=h.pointerId,Na.set(v,Ua(Na.get(v)||null,n,r,l,u,h)),!0}return!1}function Ah(n){var r=ts(n.target);if(r!==null){var l=On(r);if(l!==null){if(r=l.tag,r===13){if(r=Rs(l),r!==null){n.blockedOn=r,yi(n.priority,function(){xi(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Oo(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Fc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var u=new l.constructor(l.type,l);be=u,l.target.dispatchEvent(u),be=null}else return r=Ka(l),r!==null&&Wt(r),n.blockedOn=l,!1;r.shift()}return!0}function Rh(n,r,l){Oo(n)&&l.delete(r)}function tv(){Ui=!1,gr!==null&&Oo(gr)&&(gr=null),vr!==null&&Oo(vr)&&(vr=null),_r!==null&&Oo(_r)&&(_r=null),Da.forEach(Rh),Na.forEach(Rh)}function Fa(n,r){n.blockedOn===r&&(n.blockedOn=null,Ui||(Ui=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,tv)))}function Oa(n){function r(h){return Fa(h,n)}if(0<es.length){Fa(es[0],n);for(var l=1;l<es.length;l++){var u=es[l];u.blockedOn===n&&(u.blockedOn=null)}}for(gr!==null&&Fa(gr,n),vr!==null&&Fa(vr,n),_r!==null&&Fa(_r,n),Da.forEach(r),Na.forEach(r),l=0;l<xr.length;l++)u=xr[l],u.blockedOn===n&&(u.blockedOn=null);for(;0<xr.length&&(l=xr[0],l.blockedOn===null);)Ah(l),l.blockedOn===null&&xr.shift()}var bs=b.ReactCurrentBatchConfig,ko=!0;function nv(n,r,l,u){var h=xt,v=bs.transition;bs.transition=null;try{xt=1,Uc(n,r,l,u)}finally{xt=h,bs.transition=v}}function iv(n,r,l,u){var h=xt,v=bs.transition;bs.transition=null;try{xt=4,Uc(n,r,l,u)}finally{xt=h,bs.transition=v}}function Uc(n,r,l,u){if(ko){var h=Fc(n,r,l,u);if(h===null)jc(n,r,u,zo,l),Th(n,u);else if(ev(h,n,r,l,u))u.stopPropagation();else if(Th(n,u),r&4&&-1<jg.indexOf(n)){for(;h!==null;){var v=Ka(h);if(v!==null&&Dt(v),v=Fc(n,r,l,u),v===null&&jc(n,r,u,zo,l),v===h)break;h=v}h!==null&&u.stopPropagation()}else jc(n,r,u,null,l)}}var zo=null;function Fc(n,r,l,u){if(zo=null,n=nt(u),n=ts(n),n!==null)if(r=On(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Rs(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return zo=n,null}function bh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nc()){case Ia:return 1;case R:return 4;case X:case se:return 16;case te:return 536870912;default:return 16}default:return 16}}var yr=null,Oc=null,Bo=null;function Ch(){if(Bo)return Bo;var n,r=Oc,l=r.length,u,h="value"in yr?yr.value:yr.textContent,v=h.length;for(n=0;n<l&&r[n]===h[n];n++);var A=l-n;for(u=1;u<=A&&r[l-u]===h[v-u];u++);return Bo=h.slice(n,1<u?1-u:void 0)}function Vo(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Ho(){return!0}function Ph(){return!1}function ei(n){function r(l,u,h,v,A){this._reactName=l,this._targetInst=h,this.type=u,this.nativeEvent=v,this.target=A,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(l=n[U],this[U]=l?l(v):v[U]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Ho:Ph,this.isPropagationStopped=Ph,this}return ce(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),r}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kc=ei(Cs),ka=ce({},Cs,{view:0,detail:0}),rv=ei(ka),zc,Bc,za,Go=ce({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==za&&(za&&n.type==="mousemove"?(zc=n.screenX-za.screenX,Bc=n.screenY-za.screenY):Bc=zc=0,za=n),zc)},movementY:function(n){return"movementY"in n?n.movementY:Bc}}),Lh=ei(Go),sv=ce({},Go,{dataTransfer:0}),av=ei(sv),ov=ce({},ka,{relatedTarget:0}),Vc=ei(ov),lv=ce({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),cv=ei(lv),uv=ce({},Cs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),dv=ei(uv),fv=ce({},Cs,{data:0}),Ih=ei(fv),hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=mv[n])?!!r[n]:!1}function Hc(){return gv}var vv=ce({},ka,{key:function(n){if(n.key){var r=hv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Vo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?pv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hc,charCode:function(n){return n.type==="keypress"?Vo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Vo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),_v=ei(vv),xv=ce({},Go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dh=ei(xv),yv=ce({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hc}),Sv=ei(yv),Mv=ce({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ev=ei(Mv),wv=ce({},Go,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Tv=ei(wv),Av=[9,13,27,32],Gc=d&&"CompositionEvent"in window,Ba=null;d&&"documentMode"in document&&(Ba=document.documentMode);var Rv=d&&"TextEvent"in window&&!Ba,Nh=d&&(!Gc||Ba&&8<Ba&&11>=Ba),Uh=" ",Fh=!1;function Oh(n,r){switch(n){case"keyup":return Av.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ps=!1;function bv(n,r){switch(n){case"compositionend":return kh(r);case"keypress":return r.which!==32?null:(Fh=!0,Uh);case"textInput":return n=r.data,n===Uh&&Fh?null:n;default:return null}}function Cv(n,r){if(Ps)return n==="compositionend"||!Gc&&Oh(n,r)?(n=Ch(),Bo=Oc=yr=null,Ps=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Nh&&r.locale!=="ko"?null:r.data;default:return null}}var Pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Pv[n.type]:r==="textarea"}function Bh(n,r,l,u){pe(u),r=$o(r,"onChange"),0<r.length&&(l=new kc("onChange","change",null,l,u),n.push({event:l,listeners:r}))}var Va=null,Ha=null;function Lv(n){rp(n,0)}function Wo(n){var r=Us(n);if(Yt(r))return n}function Iv(n,r){if(n==="change")return r}var Vh=!1;if(d){var Wc;if(d){var Xc="oninput"in document;if(!Xc){var Hh=document.createElement("div");Hh.setAttribute("oninput","return;"),Xc=typeof Hh.oninput=="function"}Wc=Xc}else Wc=!1;Vh=Wc&&(!document.documentMode||9<document.documentMode)}function Gh(){Va&&(Va.detachEvent("onpropertychange",Wh),Ha=Va=null)}function Wh(n){if(n.propertyName==="value"&&Wo(Ha)){var r=[];Bh(r,Ha,n,nt(n)),qe(Lv,r)}}function Dv(n,r,l){n==="focusin"?(Gh(),Va=r,Ha=l,Va.attachEvent("onpropertychange",Wh)):n==="focusout"&&Gh()}function Nv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Wo(Ha)}function Uv(n,r){if(n==="click")return Wo(r)}function Fv(n,r){if(n==="input"||n==="change")return Wo(r)}function Ov(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Si=typeof Object.is=="function"?Object.is:Ov;function Ga(n,r){if(Si(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),u=Object.keys(r);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var h=l[u];if(!f.call(r,h)||!Si(n[h],r[h]))return!1}return!0}function Xh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function qh(n,r){var l=Xh(n);n=0;for(var u;l;){if(l.nodeType===3){if(u=n+l.textContent.length,n<=r&&u>=r)return{node:l,offset:r-n};n=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Xh(l)}}function Yh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Yh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function $h(){for(var n=window,r=mt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=mt(n.document)}return r}function qc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function kv(n){var r=$h(),l=n.focusedElem,u=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Yh(l.ownerDocument.documentElement,l)){if(u!==null&&qc(l)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var h=l.textContent.length,v=Math.min(u.start,h);u=u.end===void 0?v:Math.min(u.end,h),!n.extend&&v>u&&(h=u,u=v,v=h),h=qh(l,v);var A=qh(l,u);h&&A&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),n.removeAllRanges(),v>u?(n.addRange(r),n.extend(A.node,A.offset)):(r.setEnd(A.node,A.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var zv=d&&"documentMode"in document&&11>=document.documentMode,Ls=null,Yc=null,Wa=null,$c=!1;function Kh(n,r,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;$c||Ls==null||Ls!==mt(u)||(u=Ls,"selectionStart"in u&&qc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Wa&&Ga(Wa,u)||(Wa=u,u=$o(Yc,"onSelect"),0<u.length&&(r=new kc("onSelect","select",null,r,l),n.push({event:r,listeners:u}),r.target=Ls)))}function Xo(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Is={animationend:Xo("Animation","AnimationEnd"),animationiteration:Xo("Animation","AnimationIteration"),animationstart:Xo("Animation","AnimationStart"),transitionend:Xo("Transition","TransitionEnd")},Kc={},Zh={};d&&(Zh=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function qo(n){if(Kc[n])return Kc[n];if(!Is[n])return n;var r=Is[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Zh)return Kc[n]=r[l];return n}var Jh=qo("animationend"),Qh=qo("animationiteration"),jh=qo("animationstart"),ep=qo("transitionend"),tp=new Map,np="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(n,r){tp.set(n,r),o(r,[n])}for(var Zc=0;Zc<np.length;Zc++){var Jc=np[Zc],Bv=Jc.toLowerCase(),Vv=Jc[0].toUpperCase()+Jc.slice(1);Sr(Bv,"on"+Vv)}Sr(Jh,"onAnimationEnd"),Sr(Qh,"onAnimationIteration"),Sr(jh,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(ep,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xa));function ip(n,r,l){var u=n.type||"unknown-event";n.currentTarget=l,No(u,r,void 0,n),n.currentTarget=null}function rp(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var u=n[l],h=u.event;u=u.listeners;e:{var v=void 0;if(r)for(var A=u.length-1;0<=A;A--){var U=u[A],B=U.instance,ae=U.currentTarget;if(U=U.listener,B!==v&&h.isPropagationStopped())break e;ip(h,U,ae),v=B}else for(A=0;A<u.length;A++){if(U=u[A],B=U.instance,ae=U.currentTarget,U=U.listener,B!==v&&h.isPropagationStopped())break e;ip(h,U,ae),v=B}}}if(Zr)throw n=Jr,Zr=!1,Jr=null,n}function Xt(n,r){var l=r[su];l===void 0&&(l=r[su]=new Set);var u=n+"__bubble";l.has(u)||(sp(r,n,2,!1),l.add(u))}function Qc(n,r,l){var u=0;r&&(u|=4),sp(l,n,u,r)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function qa(n){if(!n[Yo]){n[Yo]=!0,i.forEach(function(l){l!=="selectionchange"&&(Hv.has(l)||Qc(l,!1,n),Qc(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Yo]||(r[Yo]=!0,Qc("selectionchange",!1,r))}}function sp(n,r,l,u){switch(bh(r)){case 1:var h=nv;break;case 4:h=iv;break;default:h=Uc}l=h.bind(null,r,l,n),h=void 0,!It||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(r,l,{capture:!0,passive:h}):n.addEventListener(r,l,!0):h!==void 0?n.addEventListener(r,l,{passive:h}):n.addEventListener(r,l,!1)}function jc(n,r,l,u,h){var v=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var A=u.tag;if(A===3||A===4){var U=u.stateNode.containerInfo;if(U===h||U.nodeType===8&&U.parentNode===h)break;if(A===4)for(A=u.return;A!==null;){var B=A.tag;if((B===3||B===4)&&(B=A.stateNode.containerInfo,B===h||B.nodeType===8&&B.parentNode===h))return;A=A.return}for(;U!==null;){if(A=ts(U),A===null)return;if(B=A.tag,B===5||B===6){u=v=A;continue e}U=U.parentNode}}u=u.return}qe(function(){var ae=v,Se=nt(l),Me=[];e:{var ye=tp.get(n);if(ye!==void 0){var Ve=kc,Ye=n;switch(n){case"keypress":if(Vo(l)===0)break e;case"keydown":case"keyup":Ve=_v;break;case"focusin":Ye="focus",Ve=Vc;break;case"focusout":Ye="blur",Ve=Vc;break;case"beforeblur":case"afterblur":Ve=Vc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=Lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=Sv;break;case Jh:case Qh:case jh:Ve=cv;break;case ep:Ve=Ev;break;case"scroll":Ve=rv;break;case"wheel":Ve=Tv;break;case"copy":case"cut":case"paste":Ve=dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=Dh}var Ze=(r&4)!==0,cn=!Ze&&n==="scroll",Q=Ze?ye!==null?ye+"Capture":null:ye;Ze=[];for(var G=ae,ne;G!==null;){ne=G;var we=ne.stateNode;if(ne.tag===5&&we!==null&&(ne=we,Q!==null&&(we=zt(G,Q),we!=null&&Ze.push(Ya(G,we,ne)))),cn)break;G=G.return}0<Ze.length&&(ye=new Ve(ye,Ye,null,l,Se),Me.push({event:ye,listeners:Ze}))}}if((r&7)===0){e:{if(ye=n==="mouseover"||n==="pointerover",Ve=n==="mouseout"||n==="pointerout",ye&&l!==be&&(Ye=l.relatedTarget||l.fromElement)&&(ts(Ye)||Ye[Zi]))break e;if((Ve||ye)&&(ye=Se.window===Se?Se:(ye=Se.ownerDocument)?ye.defaultView||ye.parentWindow:window,Ve?(Ye=l.relatedTarget||l.toElement,Ve=ae,Ye=Ye?ts(Ye):null,Ye!==null&&(cn=On(Ye),Ye!==cn||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(Ve=null,Ye=ae),Ve!==Ye)){if(Ze=Lh,we="onMouseLeave",Q="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(Ze=Dh,we="onPointerLeave",Q="onPointerEnter",G="pointer"),cn=Ve==null?ye:Us(Ve),ne=Ye==null?ye:Us(Ye),ye=new Ze(we,G+"leave",Ve,l,Se),ye.target=cn,ye.relatedTarget=ne,we=null,ts(Se)===ae&&(Ze=new Ze(Q,G+"enter",Ye,l,Se),Ze.target=ne,Ze.relatedTarget=cn,we=Ze),cn=we,Ve&&Ye)t:{for(Ze=Ve,Q=Ye,G=0,ne=Ze;ne;ne=Ds(ne))G++;for(ne=0,we=Q;we;we=Ds(we))ne++;for(;0<G-ne;)Ze=Ds(Ze),G--;for(;0<ne-G;)Q=Ds(Q),ne--;for(;G--;){if(Ze===Q||Q!==null&&Ze===Q.alternate)break t;Ze=Ds(Ze),Q=Ds(Q)}Ze=null}else Ze=null;Ve!==null&&ap(Me,ye,Ve,Ze,!1),Ye!==null&&cn!==null&&ap(Me,cn,Ye,Ze,!0)}}e:{if(ye=ae?Us(ae):window,Ve=ye.nodeName&&ye.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&ye.type==="file")var et=Iv;else if(zh(ye))if(Vh)et=Fv;else{et=Nv;var at=Dv}else(Ve=ye.nodeName)&&Ve.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(et=Uv);if(et&&(et=et(n,ae))){Bh(Me,et,l,Se);break e}at&&at(n,ye,ae),n==="focusout"&&(at=ye._wrapperState)&&at.controlled&&ye.type==="number"&&an(ye,"number",ye.value)}switch(at=ae?Us(ae):window,n){case"focusin":(zh(at)||at.contentEditable==="true")&&(Ls=at,Yc=ae,Wa=null);break;case"focusout":Wa=Yc=Ls=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,Kh(Me,l,Se);break;case"selectionchange":if(zv)break;case"keydown":case"keyup":Kh(Me,l,Se)}var ot;if(Gc)e:{switch(n){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else Ps?Oh(n,l)&&(ct="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(ct="onCompositionStart");ct&&(Nh&&l.locale!=="ko"&&(Ps||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&Ps&&(ot=Ch()):(yr=Se,Oc="value"in yr?yr.value:yr.textContent,Ps=!0)),at=$o(ae,ct),0<at.length&&(ct=new Ih(ct,n,null,l,Se),Me.push({event:ct,listeners:at}),ot?ct.data=ot:(ot=kh(l),ot!==null&&(ct.data=ot)))),(ot=Rv?bv(n,l):Cv(n,l))&&(ae=$o(ae,"onBeforeInput"),0<ae.length&&(Se=new Ih("onBeforeInput","beforeinput",null,l,Se),Me.push({event:Se,listeners:ae}),Se.data=ot))}rp(Me,r)})}function Ya(n,r,l){return{instance:n,listener:r,currentTarget:l}}function $o(n,r){for(var l=r+"Capture",u=[];n!==null;){var h=n,v=h.stateNode;h.tag===5&&v!==null&&(h=v,v=zt(n,l),v!=null&&u.unshift(Ya(n,v,h)),v=zt(n,r),v!=null&&u.push(Ya(n,v,h))),n=n.return}return u}function Ds(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ap(n,r,l,u,h){for(var v=r._reactName,A=[];l!==null&&l!==u;){var U=l,B=U.alternate,ae=U.stateNode;if(B!==null&&B===u)break;U.tag===5&&ae!==null&&(U=ae,h?(B=zt(l,v),B!=null&&A.unshift(Ya(l,B,U))):h||(B=zt(l,v),B!=null&&A.push(Ya(l,B,U)))),l=l.return}A.length!==0&&n.push({event:r,listeners:A})}var Gv=/\r\n?/g,Wv=/\u0000|\uFFFD/g;function op(n){return(typeof n=="string"?n:""+n).replace(Gv,`
`).replace(Wv,"")}function Ko(n,r,l){if(r=op(r),op(n)!==r&&l)throw Error(t(425))}function Zo(){}var eu=null,tu=null;function nu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var iu=typeof setTimeout=="function"?setTimeout:void 0,Xv=typeof clearTimeout=="function"?clearTimeout:void 0,lp=typeof Promise=="function"?Promise:void 0,qv=typeof queueMicrotask=="function"?queueMicrotask:typeof lp<"u"?function(n){return lp.resolve(null).then(n).catch(Yv)}:iu;function Yv(n){setTimeout(function(){throw n})}function ru(n,r){var l=r,u=0;do{var h=l.nextSibling;if(n.removeChild(l),h&&h.nodeType===8)if(l=h.data,l==="/$"){if(u===0){n.removeChild(h),Oa(r);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=h}while(l);Oa(r)}function Mr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function cp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Ns=Math.random().toString(36).slice(2),Fi="__reactFiber$"+Ns,$a="__reactProps$"+Ns,Zi="__reactContainer$"+Ns,su="__reactEvents$"+Ns,$v="__reactListeners$"+Ns,Kv="__reactHandles$"+Ns;function ts(n){var r=n[Fi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Zi]||l[Fi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=cp(n);n!==null;){if(l=n[Fi])return l;n=cp(n)}return r}n=l,l=n.parentNode}return null}function Ka(n){return n=n[Fi]||n[Zi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Jo(n){return n[$a]||null}var au=[],Fs=-1;function Er(n){return{current:n}}function qt(n){0>Fs||(n.current=au[Fs],au[Fs]=null,Fs--)}function Ht(n,r){Fs++,au[Fs]=n.current,n.current=r}var wr={},bn=Er(wr),qn=Er(!1),ns=wr;function Os(n,r){var l=n.type.contextTypes;if(!l)return wr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var h={},v;for(v in l)h[v]=r[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=h),h}function Yn(n){return n=n.childContextTypes,n!=null}function Qo(){qt(qn),qt(bn)}function up(n,r,l){if(bn.current!==wr)throw Error(t(168));Ht(bn,r),Ht(qn,l)}function dp(n,r,l){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var h in u)if(!(h in r))throw Error(t(108,xe(n)||"Unknown",h));return ce({},l,u)}function jo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||wr,ns=bn.current,Ht(bn,n),Ht(qn,qn.current),!0}function fp(n,r,l){var u=n.stateNode;if(!u)throw Error(t(169));l?(n=dp(n,r,ns),u.__reactInternalMemoizedMergedChildContext=n,qt(qn),qt(bn),Ht(bn,n)):qt(qn),Ht(qn,l)}var Ji=null,el=!1,ou=!1;function hp(n){Ji===null?Ji=[n]:Ji.push(n)}function Zv(n){el=!0,hp(n)}function Tr(){if(!ou&&Ji!==null){ou=!0;var n=0,r=xt;try{var l=Ji;for(xt=1;n<l.length;n++){var u=l[n];do u=u(!0);while(u!==null)}Ji=null,el=!1}catch(h){throw Ji!==null&&(Ji=Ji.slice(n+1)),jr(Ia,Tr),h}finally{xt=r,ou=!1}}return null}var ks=[],zs=0,tl=null,nl=0,li=[],ci=0,is=null,Qi=1,ji="";function rs(n,r){ks[zs++]=nl,ks[zs++]=tl,tl=n,nl=r}function pp(n,r,l){li[ci++]=Qi,li[ci++]=ji,li[ci++]=is,is=n;var u=Qi;n=ji;var h=32-Te(u)-1;u&=~(1<<h),l+=1;var v=32-Te(r)+h;if(30<v){var A=h-h%5;v=(u&(1<<A)-1).toString(32),u>>=A,h-=A,Qi=1<<32-Te(r)+h|l<<h|u,ji=v+n}else Qi=1<<v|l<<h|u,ji=n}function lu(n){n.return!==null&&(rs(n,1),pp(n,1,0))}function cu(n){for(;n===tl;)tl=ks[--zs],ks[zs]=null,nl=ks[--zs],ks[zs]=null;for(;n===is;)is=li[--ci],li[ci]=null,ji=li[--ci],li[ci]=null,Qi=li[--ci],li[ci]=null}var ti=null,ni=null,Jt=!1,Mi=null;function mp(n,r){var l=hi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function gp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,ti=n,ni=Mr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,ti=n,ni=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=is!==null?{id:Qi,overflow:ji}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=hi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,ti=n,ni=null,!0):!1;default:return!1}}function uu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function du(n){if(Jt){var r=ni;if(r){var l=r;if(!gp(n,r)){if(uu(n))throw Error(t(418));r=Mr(l.nextSibling);var u=ti;r&&gp(n,r)?mp(u,l):(n.flags=n.flags&-4097|2,Jt=!1,ti=n)}}else{if(uu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Jt=!1,ti=n}}}function vp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ti=n}function il(n){if(n!==ti)return!1;if(!Jt)return vp(n),Jt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!nu(n.type,n.memoizedProps)),r&&(r=ni)){if(uu(n))throw _p(),Error(t(418));for(;r;)mp(n,r),r=Mr(r.nextSibling)}if(vp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){ni=Mr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}ni=null}}else ni=ti?Mr(n.stateNode.nextSibling):null;return!0}function _p(){for(var n=ni;n;)n=Mr(n.nextSibling)}function Bs(){ni=ti=null,Jt=!1}function fu(n){Mi===null?Mi=[n]:Mi.push(n)}var Jv=b.ReactCurrentBatchConfig;function Za(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var u=l.stateNode}if(!u)throw Error(t(147,n));var h=u,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(A){var U=h.refs;A===null?delete U[v]:U[v]=A},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function rl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function xp(n){var r=n._init;return r(n._payload)}function yp(n){function r(Q,G){if(n){var ne=Q.deletions;ne===null?(Q.deletions=[G],Q.flags|=16):ne.push(G)}}function l(Q,G){if(!n)return null;for(;G!==null;)r(Q,G),G=G.sibling;return null}function u(Q,G){for(Q=new Map;G!==null;)G.key!==null?Q.set(G.key,G):Q.set(G.index,G),G=G.sibling;return Q}function h(Q,G){return Q=Dr(Q,G),Q.index=0,Q.sibling=null,Q}function v(Q,G,ne){return Q.index=ne,n?(ne=Q.alternate,ne!==null?(ne=ne.index,ne<G?(Q.flags|=2,G):ne):(Q.flags|=2,G)):(Q.flags|=1048576,G)}function A(Q){return n&&Q.alternate===null&&(Q.flags|=2),Q}function U(Q,G,ne,we){return G===null||G.tag!==6?(G=id(ne,Q.mode,we),G.return=Q,G):(G=h(G,ne),G.return=Q,G)}function B(Q,G,ne,we){var et=ne.type;return et===I?Se(Q,G,ne.props.children,we,ne.key):G!==null&&(G.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===ue&&xp(et)===G.type)?(we=h(G,ne.props),we.ref=Za(Q,G,ne),we.return=Q,we):(we=bl(ne.type,ne.key,ne.props,null,Q.mode,we),we.ref=Za(Q,G,ne),we.return=Q,we)}function ae(Q,G,ne,we){return G===null||G.tag!==4||G.stateNode.containerInfo!==ne.containerInfo||G.stateNode.implementation!==ne.implementation?(G=rd(ne,Q.mode,we),G.return=Q,G):(G=h(G,ne.children||[]),G.return=Q,G)}function Se(Q,G,ne,we,et){return G===null||G.tag!==7?(G=fs(ne,Q.mode,we,et),G.return=Q,G):(G=h(G,ne),G.return=Q,G)}function Me(Q,G,ne){if(typeof G=="string"&&G!==""||typeof G=="number")return G=id(""+G,Q.mode,ne),G.return=Q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case C:return ne=bl(G.type,G.key,G.props,null,Q.mode,ne),ne.ref=Za(Q,null,G),ne.return=Q,ne;case P:return G=rd(G,Q.mode,ne),G.return=Q,G;case ue:var we=G._init;return Me(Q,we(G._payload),ne)}if(Qt(G)||le(G))return G=fs(G,Q.mode,ne,null),G.return=Q,G;rl(Q,G)}return null}function ye(Q,G,ne,we){var et=G!==null?G.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return et!==null?null:U(Q,G,""+ne,we);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case C:return ne.key===et?B(Q,G,ne,we):null;case P:return ne.key===et?ae(Q,G,ne,we):null;case ue:return et=ne._init,ye(Q,G,et(ne._payload),we)}if(Qt(ne)||le(ne))return et!==null?null:Se(Q,G,ne,we,null);rl(Q,ne)}return null}function Ve(Q,G,ne,we,et){if(typeof we=="string"&&we!==""||typeof we=="number")return Q=Q.get(ne)||null,U(G,Q,""+we,et);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case C:return Q=Q.get(we.key===null?ne:we.key)||null,B(G,Q,we,et);case P:return Q=Q.get(we.key===null?ne:we.key)||null,ae(G,Q,we,et);case ue:var at=we._init;return Ve(Q,G,ne,at(we._payload),et)}if(Qt(we)||le(we))return Q=Q.get(ne)||null,Se(G,Q,we,et,null);rl(G,we)}return null}function Ye(Q,G,ne,we){for(var et=null,at=null,ot=G,ct=G=0,Sn=null;ot!==null&&ct<ne.length;ct++){ot.index>ct?(Sn=ot,ot=null):Sn=ot.sibling;var Pt=ye(Q,ot,ne[ct],we);if(Pt===null){ot===null&&(ot=Sn);break}n&&ot&&Pt.alternate===null&&r(Q,ot),G=v(Pt,G,ct),at===null?et=Pt:at.sibling=Pt,at=Pt,ot=Sn}if(ct===ne.length)return l(Q,ot),Jt&&rs(Q,ct),et;if(ot===null){for(;ct<ne.length;ct++)ot=Me(Q,ne[ct],we),ot!==null&&(G=v(ot,G,ct),at===null?et=ot:at.sibling=ot,at=ot);return Jt&&rs(Q,ct),et}for(ot=u(Q,ot);ct<ne.length;ct++)Sn=Ve(ot,Q,ct,ne[ct],we),Sn!==null&&(n&&Sn.alternate!==null&&ot.delete(Sn.key===null?ct:Sn.key),G=v(Sn,G,ct),at===null?et=Sn:at.sibling=Sn,at=Sn);return n&&ot.forEach(function(Nr){return r(Q,Nr)}),Jt&&rs(Q,ct),et}function Ze(Q,G,ne,we){var et=le(ne);if(typeof et!="function")throw Error(t(150));if(ne=et.call(ne),ne==null)throw Error(t(151));for(var at=et=null,ot=G,ct=G=0,Sn=null,Pt=ne.next();ot!==null&&!Pt.done;ct++,Pt=ne.next()){ot.index>ct?(Sn=ot,ot=null):Sn=ot.sibling;var Nr=ye(Q,ot,Pt.value,we);if(Nr===null){ot===null&&(ot=Sn);break}n&&ot&&Nr.alternate===null&&r(Q,ot),G=v(Nr,G,ct),at===null?et=Nr:at.sibling=Nr,at=Nr,ot=Sn}if(Pt.done)return l(Q,ot),Jt&&rs(Q,ct),et;if(ot===null){for(;!Pt.done;ct++,Pt=ne.next())Pt=Me(Q,Pt.value,we),Pt!==null&&(G=v(Pt,G,ct),at===null?et=Pt:at.sibling=Pt,at=Pt);return Jt&&rs(Q,ct),et}for(ot=u(Q,ot);!Pt.done;ct++,Pt=ne.next())Pt=Ve(ot,Q,ct,Pt.value,we),Pt!==null&&(n&&Pt.alternate!==null&&ot.delete(Pt.key===null?ct:Pt.key),G=v(Pt,G,ct),at===null?et=Pt:at.sibling=Pt,at=Pt);return n&&ot.forEach(function(P_){return r(Q,P_)}),Jt&&rs(Q,ct),et}function cn(Q,G,ne,we){if(typeof ne=="object"&&ne!==null&&ne.type===I&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case C:e:{for(var et=ne.key,at=G;at!==null;){if(at.key===et){if(et=ne.type,et===I){if(at.tag===7){l(Q,at.sibling),G=h(at,ne.props.children),G.return=Q,Q=G;break e}}else if(at.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===ue&&xp(et)===at.type){l(Q,at.sibling),G=h(at,ne.props),G.ref=Za(Q,at,ne),G.return=Q,Q=G;break e}l(Q,at);break}else r(Q,at);at=at.sibling}ne.type===I?(G=fs(ne.props.children,Q.mode,we,ne.key),G.return=Q,Q=G):(we=bl(ne.type,ne.key,ne.props,null,Q.mode,we),we.ref=Za(Q,G,ne),we.return=Q,Q=we)}return A(Q);case P:e:{for(at=ne.key;G!==null;){if(G.key===at)if(G.tag===4&&G.stateNode.containerInfo===ne.containerInfo&&G.stateNode.implementation===ne.implementation){l(Q,G.sibling),G=h(G,ne.children||[]),G.return=Q,Q=G;break e}else{l(Q,G);break}else r(Q,G);G=G.sibling}G=rd(ne,Q.mode,we),G.return=Q,Q=G}return A(Q);case ue:return at=ne._init,cn(Q,G,at(ne._payload),we)}if(Qt(ne))return Ye(Q,G,ne,we);if(le(ne))return Ze(Q,G,ne,we);rl(Q,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,G!==null&&G.tag===6?(l(Q,G.sibling),G=h(G,ne),G.return=Q,Q=G):(l(Q,G),G=id(ne,Q.mode,we),G.return=Q,Q=G),A(Q)):l(Q,G)}return cn}var Vs=yp(!0),Sp=yp(!1),sl=Er(null),al=null,Hs=null,hu=null;function pu(){hu=Hs=al=null}function mu(n){var r=sl.current;qt(sl),n._currentValue=r}function gu(n,r,l){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===l)break;n=n.return}}function Gs(n,r){al=n,hu=Hs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&($n=!0),n.firstContext=null)}function ui(n){var r=n._currentValue;if(hu!==n)if(n={context:n,memoizedValue:r,next:null},Hs===null){if(al===null)throw Error(t(308));Hs=n,al.dependencies={lanes:0,firstContext:n}}else Hs=Hs.next=n;return r}var ss=null;function vu(n){ss===null?ss=[n]:ss.push(n)}function Mp(n,r,l,u){var h=r.interleaved;return h===null?(l.next=l,vu(r)):(l.next=h.next,h.next=l),r.interleaved=l,er(n,u)}function er(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Ar=!1;function _u(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ep(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function tr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Rr(n,r,l){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(bt&2)!==0){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,er(n,l)}return h=u.interleaved,h===null?(r.next=r,vu(u)):(r.next=h.next,h.next=r),u.interleaved=r,er(n,l)}function ol(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,l|=u,r.lanes=l,Xn(n,l)}}function wp(n,r){var l=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var h=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?h=v=A:v=v.next=A,l=l.next}while(l!==null);v===null?h=v=r:v=v.next=r}else h=v=r;l={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function ll(n,r,l,u){var h=n.updateQueue;Ar=!1;var v=h.firstBaseUpdate,A=h.lastBaseUpdate,U=h.shared.pending;if(U!==null){h.shared.pending=null;var B=U,ae=B.next;B.next=null,A===null?v=ae:A.next=ae,A=B;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,U=Se.lastBaseUpdate,U!==A&&(U===null?Se.firstBaseUpdate=ae:U.next=ae,Se.lastBaseUpdate=B))}if(v!==null){var Me=h.baseState;A=0,Se=ae=B=null,U=v;do{var ye=U.lane,Ve=U.eventTime;if((u&ye)===ye){Se!==null&&(Se=Se.next={eventTime:Ve,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Ye=n,Ze=U;switch(ye=r,Ve=l,Ze.tag){case 1:if(Ye=Ze.payload,typeof Ye=="function"){Me=Ye.call(Ve,Me,ye);break e}Me=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Ze.payload,ye=typeof Ye=="function"?Ye.call(Ve,Me,ye):Ye,ye==null)break e;Me=ce({},Me,ye);break e;case 2:Ar=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,ye=h.effects,ye===null?h.effects=[U]:ye.push(U))}else Ve={eventTime:Ve,lane:ye,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Se===null?(ae=Se=Ve,B=Me):Se=Se.next=Ve,A|=ye;if(U=U.next,U===null){if(U=h.shared.pending,U===null)break;ye=U,U=ye.next,ye.next=null,h.lastBaseUpdate=ye,h.shared.pending=null}}while(!0);if(Se===null&&(B=Me),h.baseState=B,h.firstBaseUpdate=ae,h.lastBaseUpdate=Se,r=h.shared.interleaved,r!==null){h=r;do A|=h.lane,h=h.next;while(h!==r)}else v===null&&(h.shared.lanes=0);ls|=A,n.lanes=A,n.memoizedState=Me}}function Tp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],h=u.callback;if(h!==null){if(u.callback=null,u=l,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Ja={},Oi=Er(Ja),Qa=Er(Ja),ja=Er(Ja);function as(n){if(n===Ja)throw Error(t(174));return n}function xu(n,r){switch(Ht(ja,r),Ht(Qa,n),Ht(Oi,Ja),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:E(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=E(r,n)}qt(Oi),Ht(Oi,r)}function Ws(){qt(Oi),qt(Qa),qt(ja)}function Ap(n){as(ja.current);var r=as(Oi.current),l=E(r,n.type);r!==l&&(Ht(Qa,n),Ht(Oi,l))}function yu(n){Qa.current===n&&(qt(Oi),qt(Qa))}var en=Er(0);function cl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Su=[];function Mu(){for(var n=0;n<Su.length;n++)Su[n]._workInProgressVersionPrimary=null;Su.length=0}var ul=b.ReactCurrentDispatcher,Eu=b.ReactCurrentBatchConfig,os=0,tn=null,pn=null,xn=null,dl=!1,eo=!1,to=0,Qv=0;function Cn(){throw Error(t(321))}function wu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Si(n[l],r[l]))return!1;return!0}function Tu(n,r,l,u,h,v){if(os=v,tn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ul.current=n===null||n.memoizedState===null?n_:i_,n=l(u,h),eo){v=0;do{if(eo=!1,to=0,25<=v)throw Error(t(301));v+=1,xn=pn=null,r.updateQueue=null,ul.current=r_,n=l(u,h)}while(eo)}if(ul.current=pl,r=pn!==null&&pn.next!==null,os=0,xn=pn=tn=null,dl=!1,r)throw Error(t(300));return n}function Au(){var n=to!==0;return to=0,n}function ki(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?tn.memoizedState=xn=n:xn=xn.next=n,xn}function di(){if(pn===null){var n=tn.alternate;n=n!==null?n.memoizedState:null}else n=pn.next;var r=xn===null?tn.memoizedState:xn.next;if(r!==null)xn=r,pn=n;else{if(n===null)throw Error(t(310));pn=n,n={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},xn===null?tn.memoizedState=xn=n:xn=xn.next=n}return xn}function no(n,r){return typeof r=="function"?r(n):r}function Ru(n){var r=di(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=pn,h=u.baseQueue,v=l.pending;if(v!==null){if(h!==null){var A=h.next;h.next=v.next,v.next=A}u.baseQueue=h=v,l.pending=null}if(h!==null){v=h.next,u=u.baseState;var U=A=null,B=null,ae=v;do{var Se=ae.lane;if((os&Se)===Se)B!==null&&(B=B.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),u=ae.hasEagerState?ae.eagerState:n(u,ae.action);else{var Me={lane:Se,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};B===null?(U=B=Me,A=u):B=B.next=Me,tn.lanes|=Se,ls|=Se}ae=ae.next}while(ae!==null&&ae!==v);B===null?A=u:B.next=U,Si(u,r.memoizedState)||($n=!0),r.memoizedState=u,r.baseState=A,r.baseQueue=B,l.lastRenderedState=u}if(n=l.interleaved,n!==null){h=n;do v=h.lane,tn.lanes|=v,ls|=v,h=h.next;while(h!==n)}else h===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function bu(n){var r=di(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=l.dispatch,h=l.pending,v=r.memoizedState;if(h!==null){l.pending=null;var A=h=h.next;do v=n(v,A.action),A=A.next;while(A!==h);Si(v,r.memoizedState)||($n=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,u]}function Rp(){}function bp(n,r){var l=tn,u=di(),h=r(),v=!Si(u.memoizedState,h);if(v&&(u.memoizedState=h,$n=!0),u=u.queue,Cu(Lp.bind(null,l,u,n),[n]),u.getSnapshot!==r||v||xn!==null&&xn.memoizedState.tag&1){if(l.flags|=2048,io(9,Pp.bind(null,l,u,h,r),void 0,null),yn===null)throw Error(t(349));(os&30)!==0||Cp(l,r,h)}return h}function Cp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=tn.updateQueue,r===null?(r={lastEffect:null,stores:null},tn.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Pp(n,r,l,u){r.value=l,r.getSnapshot=u,Ip(r)&&Dp(n)}function Lp(n,r,l){return l(function(){Ip(r)&&Dp(n)})}function Ip(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Si(n,l)}catch{return!0}}function Dp(n){var r=er(n,1);r!==null&&Ai(r,n,1,-1)}function Np(n){var r=ki();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:n},r.queue=n,n=n.dispatch=t_.bind(null,tn,n),[r.memoizedState,n]}function io(n,r,l,u){return n={tag:n,create:r,destroy:l,deps:u,next:null},r=tn.updateQueue,r===null?(r={lastEffect:null,stores:null},tn.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(u=l.next,l.next=n,n.next=u,r.lastEffect=n)),n}function Up(){return di().memoizedState}function fl(n,r,l,u){var h=ki();tn.flags|=n,h.memoizedState=io(1|r,l,void 0,u===void 0?null:u)}function hl(n,r,l,u){var h=di();u=u===void 0?null:u;var v=void 0;if(pn!==null){var A=pn.memoizedState;if(v=A.destroy,u!==null&&wu(u,A.deps)){h.memoizedState=io(r,l,v,u);return}}tn.flags|=n,h.memoizedState=io(1|r,l,v,u)}function Fp(n,r){return fl(8390656,8,n,r)}function Cu(n,r){return hl(2048,8,n,r)}function Op(n,r){return hl(4,2,n,r)}function kp(n,r){return hl(4,4,n,r)}function zp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Bp(n,r,l){return l=l!=null?l.concat([n]):null,hl(4,4,zp.bind(null,r,n),l)}function Pu(){}function Vp(n,r){var l=di();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&wu(r,u[1])?u[0]:(l.memoizedState=[n,r],n)}function Hp(n,r){var l=di();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&wu(r,u[1])?u[0]:(n=n(),l.memoizedState=[n,r],n)}function Gp(n,r,l){return(os&21)===0?(n.baseState&&(n.baseState=!1,$n=!0),n.memoizedState=l):(Si(l,r)||(l=Be(),tn.lanes|=l,ls|=l,n.baseState=!0),r)}function jv(n,r){var l=xt;xt=l!==0&&4>l?l:4,n(!0);var u=Eu.transition;Eu.transition={};try{n(!1),r()}finally{xt=l,Eu.transition=u}}function Wp(){return di().memoizedState}function e_(n,r,l){var u=Lr(n);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},Xp(n))qp(r,l);else if(l=Mp(n,r,l,u),l!==null){var h=zn();Ai(l,n,u,h),Yp(l,r,u)}}function t_(n,r,l){var u=Lr(n),h={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if(Xp(n))qp(r,h);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var A=r.lastRenderedState,U=v(A,l);if(h.hasEagerState=!0,h.eagerState=U,Si(U,A)){var B=r.interleaved;B===null?(h.next=h,vu(r)):(h.next=B.next,B.next=h),r.interleaved=h;return}}catch{}finally{}l=Mp(n,r,h,u),l!==null&&(h=zn(),Ai(l,n,u,h),Yp(l,r,u))}}function Xp(n){var r=n.alternate;return n===tn||r!==null&&r===tn}function qp(n,r){eo=dl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Yp(n,r,l){if((l&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,l|=u,r.lanes=l,Xn(n,l)}}var pl={readContext:ui,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},n_={readContext:ui,useCallback:function(n,r){return ki().memoizedState=[n,r===void 0?null:r],n},useContext:ui,useEffect:Fp,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,fl(4194308,4,zp.bind(null,r,n),l)},useLayoutEffect:function(n,r){return fl(4194308,4,n,r)},useInsertionEffect:function(n,r){return fl(4,2,n,r)},useMemo:function(n,r){var l=ki();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var u=ki();return r=l!==void 0?l(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=e_.bind(null,tn,n),[u.memoizedState,n]},useRef:function(n){var r=ki();return n={current:n},r.memoizedState=n},useState:Np,useDebugValue:Pu,useDeferredValue:function(n){return ki().memoizedState=n},useTransition:function(){var n=Np(!1),r=n[0];return n=jv.bind(null,n[1]),ki().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var u=tn,h=ki();if(Jt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),yn===null)throw Error(t(349));(os&30)!==0||Cp(u,r,l)}h.memoizedState=l;var v={value:l,getSnapshot:r};return h.queue=v,Fp(Lp.bind(null,u,v,n),[n]),u.flags|=2048,io(9,Pp.bind(null,u,v,l,r),void 0,null),l},useId:function(){var n=ki(),r=yn.identifierPrefix;if(Jt){var l=ji,u=Qi;l=(u&~(1<<32-Te(u)-1)).toString(32)+l,r=":"+r+"R"+l,l=to++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Qv++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},i_={readContext:ui,useCallback:Vp,useContext:ui,useEffect:Cu,useImperativeHandle:Bp,useInsertionEffect:Op,useLayoutEffect:kp,useMemo:Hp,useReducer:Ru,useRef:Up,useState:function(){return Ru(no)},useDebugValue:Pu,useDeferredValue:function(n){var r=di();return Gp(r,pn.memoizedState,n)},useTransition:function(){var n=Ru(no)[0],r=di().memoizedState;return[n,r]},useMutableSource:Rp,useSyncExternalStore:bp,useId:Wp,unstable_isNewReconciler:!1},r_={readContext:ui,useCallback:Vp,useContext:ui,useEffect:Cu,useImperativeHandle:Bp,useInsertionEffect:Op,useLayoutEffect:kp,useMemo:Hp,useReducer:bu,useRef:Up,useState:function(){return bu(no)},useDebugValue:Pu,useDeferredValue:function(n){var r=di();return pn===null?r.memoizedState=n:Gp(r,pn.memoizedState,n)},useTransition:function(){var n=bu(no)[0],r=di().memoizedState;return[n,r]},useMutableSource:Rp,useSyncExternalStore:bp,useId:Wp,unstable_isNewReconciler:!1};function Ei(n,r){if(n&&n.defaultProps){r=ce({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Lu(n,r,l,u){r=n.memoizedState,l=l(u,r),l=l==null?r:ce({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var ml={isMounted:function(n){return(n=n._reactInternals)?On(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var u=zn(),h=Lr(n),v=tr(u,h);v.payload=r,l!=null&&(v.callback=l),r=Rr(n,v,h),r!==null&&(Ai(r,n,h,u),ol(r,n,h))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var u=zn(),h=Lr(n),v=tr(u,h);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=Rr(n,v,h),r!==null&&(Ai(r,n,h,u),ol(r,n,h))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=zn(),u=Lr(n),h=tr(l,u);h.tag=2,r!=null&&(h.callback=r),r=Rr(n,h,u),r!==null&&(Ai(r,n,u,l),ol(r,n,u))}};function $p(n,r,l,u,h,v,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,A):r.prototype&&r.prototype.isPureReactComponent?!Ga(l,u)||!Ga(h,v):!0}function Kp(n,r,l){var u=!1,h=wr,v=r.contextType;return typeof v=="object"&&v!==null?v=ui(v):(h=Yn(r)?ns:bn.current,u=r.contextTypes,v=(u=u!=null)?Os(n,h):wr),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ml,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=v),r}function Zp(n,r,l,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,u),r.state!==n&&ml.enqueueReplaceState(r,r.state,null)}function Iu(n,r,l,u){var h=n.stateNode;h.props=l,h.state=n.memoizedState,h.refs={},_u(n);var v=r.contextType;typeof v=="object"&&v!==null?h.context=ui(v):(v=Yn(r)?ns:bn.current,h.context=Os(n,v)),h.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Lu(n,r,v,l),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&ml.enqueueReplaceState(h,h.state,null),ll(n,l,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Xs(n,r){try{var l="",u=r;do l+=Xe(u),u=u.return;while(u);var h=l}catch(v){h=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:h,digest:null}}function Du(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Nu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var s_=typeof WeakMap=="function"?WeakMap:Map;function Jp(n,r,l){l=tr(-1,l),l.tag=3,l.payload={element:null};var u=r.value;return l.callback=function(){Ml||(Ml=!0,Ku=u),Nu(n,r)},l}function Qp(n,r,l){l=tr(-1,l),l.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;l.payload=function(){return u(h)},l.callback=function(){Nu(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Nu(n,r),typeof u!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})}),l}function jp(n,r,l){var u=n.pingCache;if(u===null){u=n.pingCache=new s_;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(l)||(h.add(l),n=x_.bind(null,n,r,l),r.then(n,n))}function em(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function tm(n,r,l,u,h){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=tr(-1,1),r.tag=2,Rr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var a_=b.ReactCurrentOwner,$n=!1;function kn(n,r,l,u){r.child=n===null?Sp(r,null,l,u):Vs(r,n.child,l,u)}function nm(n,r,l,u,h){l=l.render;var v=r.ref;return Gs(r,h),u=Tu(n,r,l,u,v,h),l=Au(),n!==null&&!$n?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,nr(n,r,h)):(Jt&&l&&lu(r),r.flags|=1,kn(n,r,u,h),r.child)}function im(n,r,l,u,h){if(n===null){var v=l.type;return typeof v=="function"&&!nd(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,rm(n,r,v,u,h)):(n=bl(l.type,null,u,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&h)===0){var A=v.memoizedProps;if(l=l.compare,l=l!==null?l:Ga,l(A,u)&&n.ref===r.ref)return nr(n,r,h)}return r.flags|=1,n=Dr(v,u),n.ref=r.ref,n.return=r,r.child=n}function rm(n,r,l,u,h){if(n!==null){var v=n.memoizedProps;if(Ga(v,u)&&n.ref===r.ref)if($n=!1,r.pendingProps=u=v,(n.lanes&h)!==0)(n.flags&131072)!==0&&($n=!0);else return r.lanes=n.lanes,nr(n,r,h)}return Uu(n,r,l,u,h)}function sm(n,r,l){var u=r.pendingProps,h=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(Ys,ii),ii|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ht(Ys,ii),ii|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:l,Ht(Ys,ii),ii|=u}else v!==null?(u=v.baseLanes|l,r.memoizedState=null):u=l,Ht(Ys,ii),ii|=u;return kn(n,r,h,l),r.child}function am(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Uu(n,r,l,u,h){var v=Yn(l)?ns:bn.current;return v=Os(r,v),Gs(r,h),l=Tu(n,r,l,u,v,h),u=Au(),n!==null&&!$n?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,nr(n,r,h)):(Jt&&u&&lu(r),r.flags|=1,kn(n,r,l,h),r.child)}function om(n,r,l,u,h){if(Yn(l)){var v=!0;jo(r)}else v=!1;if(Gs(r,h),r.stateNode===null)vl(n,r),Kp(r,l,u),Iu(r,l,u,h),u=!0;else if(n===null){var A=r.stateNode,U=r.memoizedProps;A.props=U;var B=A.context,ae=l.contextType;typeof ae=="object"&&ae!==null?ae=ui(ae):(ae=Yn(l)?ns:bn.current,ae=Os(r,ae));var Se=l.getDerivedStateFromProps,Me=typeof Se=="function"||typeof A.getSnapshotBeforeUpdate=="function";Me||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(U!==u||B!==ae)&&Zp(r,A,u,ae),Ar=!1;var ye=r.memoizedState;A.state=ye,ll(r,u,A,h),B=r.memoizedState,U!==u||ye!==B||qn.current||Ar?(typeof Se=="function"&&(Lu(r,l,Se,u),B=r.memoizedState),(U=Ar||$p(r,l,U,u,ye,B,ae))?(Me||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(r.flags|=4194308)):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=B),A.props=u,A.state=B,A.context=ae,u=U):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{A=r.stateNode,Ep(n,r),U=r.memoizedProps,ae=r.type===r.elementType?U:Ei(r.type,U),A.props=ae,Me=r.pendingProps,ye=A.context,B=l.contextType,typeof B=="object"&&B!==null?B=ui(B):(B=Yn(l)?ns:bn.current,B=Os(r,B));var Ve=l.getDerivedStateFromProps;(Se=typeof Ve=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(U!==Me||ye!==B)&&Zp(r,A,u,B),Ar=!1,ye=r.memoizedState,A.state=ye,ll(r,u,A,h);var Ye=r.memoizedState;U!==Me||ye!==Ye||qn.current||Ar?(typeof Ve=="function"&&(Lu(r,l,Ve,u),Ye=r.memoizedState),(ae=Ar||$p(r,l,ae,u,ye,Ye,B)||!1)?(Se||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(u,Ye,B),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(u,Ye,B)),typeof A.componentDidUpdate=="function"&&(r.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof A.componentDidUpdate!="function"||U===n.memoizedProps&&ye===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ye===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=Ye),A.props=u,A.state=Ye,A.context=B,u=ae):(typeof A.componentDidUpdate!="function"||U===n.memoizedProps&&ye===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ye===n.memoizedState||(r.flags|=1024),u=!1)}return Fu(n,r,l,u,v,h)}function Fu(n,r,l,u,h,v){am(n,r);var A=(r.flags&128)!==0;if(!u&&!A)return h&&fp(r,l,!1),nr(n,r,v);u=r.stateNode,a_.current=r;var U=A&&typeof l.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&A?(r.child=Vs(r,n.child,null,v),r.child=Vs(r,null,U,v)):kn(n,r,U,v),r.memoizedState=u.state,h&&fp(r,l,!0),r.child}function lm(n){var r=n.stateNode;r.pendingContext?up(n,r.pendingContext,r.pendingContext!==r.context):r.context&&up(n,r.context,!1),xu(n,r.containerInfo)}function cm(n,r,l,u,h){return Bs(),fu(h),r.flags|=256,kn(n,r,l,u),r.child}var Ou={dehydrated:null,treeContext:null,retryLane:0};function ku(n){return{baseLanes:n,cachePool:null,transitions:null}}function um(n,r,l){var u=r.pendingProps,h=en.current,v=!1,A=(r.flags&128)!==0,U;if((U=A)||(U=n!==null&&n.memoizedState===null?!1:(h&2)!==0),U?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Ht(en,h&1),n===null)return du(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(A=u.children,n=u.fallback,v?(u=r.mode,v=r.child,A={mode:"hidden",children:A},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=A):v=Cl(A,u,0,null),n=fs(n,u,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=ku(l),r.memoizedState=Ou,n):zu(r,A));if(h=n.memoizedState,h!==null&&(U=h.dehydrated,U!==null))return o_(n,r,A,u,U,h,l);if(v){v=u.fallback,A=r.mode,h=n.child,U=h.sibling;var B={mode:"hidden",children:u.children};return(A&1)===0&&r.child!==h?(u=r.child,u.childLanes=0,u.pendingProps=B,r.deletions=null):(u=Dr(h,B),u.subtreeFlags=h.subtreeFlags&14680064),U!==null?v=Dr(U,v):(v=fs(v,A,l,null),v.flags|=2),v.return=r,u.return=r,u.sibling=v,r.child=u,u=v,v=r.child,A=n.child.memoizedState,A=A===null?ku(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},v.memoizedState=A,v.childLanes=n.childLanes&~l,r.memoizedState=Ou,u}return v=n.child,n=v.sibling,u=Dr(v,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=l),u.return=r,u.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=u,r.memoizedState=null,u}function zu(n,r){return r=Cl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function gl(n,r,l,u){return u!==null&&fu(u),Vs(r,n.child,null,l),n=zu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function o_(n,r,l,u,h,v,A){if(l)return r.flags&256?(r.flags&=-257,u=Du(Error(t(422))),gl(n,r,A,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=u.fallback,h=r.mode,u=Cl({mode:"visible",children:u.children},h,0,null),v=fs(v,h,A,null),v.flags|=2,u.return=r,v.return=r,u.sibling=v,r.child=u,(r.mode&1)!==0&&Vs(r,n.child,null,A),r.child.memoizedState=ku(A),r.memoizedState=Ou,v);if((r.mode&1)===0)return gl(n,r,A,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var U=u.dgst;return u=U,v=Error(t(419)),u=Du(v,u,void 0),gl(n,r,A,u)}if(U=(A&n.childLanes)!==0,$n||U){if(u=yn,u!==null){switch(A&-A){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|A))!==0?0:h,h!==0&&h!==v.retryLane&&(v.retryLane=h,er(n,h),Ai(u,n,h,-1))}return td(),u=Du(Error(t(421))),gl(n,r,A,u)}return h.data==="$?"?(r.flags|=128,r.child=n.child,r=y_.bind(null,n),h._reactRetry=r,null):(n=v.treeContext,ni=Mr(h.nextSibling),ti=r,Jt=!0,Mi=null,n!==null&&(li[ci++]=Qi,li[ci++]=ji,li[ci++]=is,Qi=n.id,ji=n.overflow,is=r),r=zu(r,u.children),r.flags|=4096,r)}function dm(n,r,l){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),gu(n.return,r,l)}function Bu(n,r,l,u,h){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:h}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=l,v.tailMode=h)}function fm(n,r,l){var u=r.pendingProps,h=u.revealOrder,v=u.tail;if(kn(n,r,u.children,l),u=en.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&dm(n,l,r);else if(n.tag===19)dm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ht(en,u),(r.mode&1)===0)r.memoizedState=null;else switch(h){case"forwards":for(l=r.child,h=null;l!==null;)n=l.alternate,n!==null&&cl(n)===null&&(h=l),l=l.sibling;l=h,l===null?(h=r.child,r.child=null):(h=l.sibling,l.sibling=null),Bu(r,!1,h,l,v);break;case"backwards":for(l=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&cl(n)===null){r.child=h;break}n=h.sibling,h.sibling=l,l=h,h=n}Bu(r,!0,l,null,v);break;case"together":Bu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function vl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function nr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),ls|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Dr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Dr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function l_(n,r,l){switch(r.tag){case 3:lm(r),Bs();break;case 5:Ap(r);break;case 1:Yn(r.type)&&jo(r);break;case 4:xu(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,h=r.memoizedProps.value;Ht(sl,u._currentValue),u._currentValue=h;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Ht(en,en.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?um(n,r,l):(Ht(en,en.current&1),n=nr(n,r,l),n!==null?n.sibling:null);Ht(en,en.current&1);break;case 19:if(u=(l&r.childLanes)!==0,(n.flags&128)!==0){if(u)return fm(n,r,l);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ht(en,en.current),u)break;return null;case 22:case 23:return r.lanes=0,sm(n,r,l)}return nr(n,r,l)}var hm,Vu,pm,mm;hm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Vu=function(){},pm=function(n,r,l,u){var h=n.memoizedProps;if(h!==u){n=r.stateNode,as(Oi.current);var v=null;switch(l){case"input":h=Lt(n,h),u=Lt(n,u),v=[];break;case"select":h=ce({},h,{value:void 0}),u=ce({},u,{value:void 0}),v=[];break;case"textarea":h=Kt(n,h),u=Kt(n,u),v=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Zo)}Je(l,u);var A;l=null;for(ae in h)if(!u.hasOwnProperty(ae)&&h.hasOwnProperty(ae)&&h[ae]!=null)if(ae==="style"){var U=h[ae];for(A in U)U.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(a.hasOwnProperty(ae)?v||(v=[]):(v=v||[]).push(ae,null));for(ae in u){var B=u[ae];if(U=h!=null?h[ae]:void 0,u.hasOwnProperty(ae)&&B!==U&&(B!=null||U!=null))if(ae==="style")if(U){for(A in U)!U.hasOwnProperty(A)||B&&B.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in B)B.hasOwnProperty(A)&&U[A]!==B[A]&&(l||(l={}),l[A]=B[A])}else l||(v||(v=[]),v.push(ae,l)),l=B;else ae==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(v=v||[]).push(ae,B)):ae==="children"?typeof B!="string"&&typeof B!="number"||(v=v||[]).push(ae,""+B):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(a.hasOwnProperty(ae)?(B!=null&&ae==="onScroll"&&Xt("scroll",n),v||U===B||(v=[])):(v=v||[]).push(ae,B))}l&&(v=v||[]).push("style",l);var ae=v;(r.updateQueue=ae)&&(r.flags|=4)}},mm=function(n,r,l,u){l!==u&&(r.flags|=4)};function ro(n,r){if(!Jt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Pn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,u=0;if(r)for(var h=n.child;h!==null;)l|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)l|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=l,r}function c_(n,r,l){var u=r.pendingProps;switch(cu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pn(r),null;case 1:return Yn(r.type)&&Qo(),Pn(r),null;case 3:return u=r.stateNode,Ws(),qt(qn),qt(bn),Mu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(il(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Mi!==null&&(Qu(Mi),Mi=null))),Vu(n,r),Pn(r),null;case 5:yu(r);var h=as(ja.current);if(l=r.type,n!==null&&r.stateNode!=null)pm(n,r,l,u,h),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return Pn(r),null}if(n=as(Oi.current),il(r)){u=r.stateNode,l=r.type;var v=r.memoizedProps;switch(u[Fi]=r,u[$a]=v,n=(r.mode&1)!==0,l){case"dialog":Xt("cancel",u),Xt("close",u);break;case"iframe":case"object":case"embed":Xt("load",u);break;case"video":case"audio":for(h=0;h<Xa.length;h++)Xt(Xa[h],u);break;case"source":Xt("error",u);break;case"img":case"image":case"link":Xt("error",u),Xt("load",u);break;case"details":Xt("toggle",u);break;case"input":Tt(u,v),Xt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},Xt("invalid",u);break;case"textarea":W(u,v),Xt("invalid",u)}Je(l,v),h=null;for(var A in v)if(v.hasOwnProperty(A)){var U=v[A];A==="children"?typeof U=="string"?u.textContent!==U&&(v.suppressHydrationWarning!==!0&&Ko(u.textContent,U,n),h=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(v.suppressHydrationWarning!==!0&&Ko(u.textContent,U,n),h=["children",""+U]):a.hasOwnProperty(A)&&U!=null&&A==="onScroll"&&Xt("scroll",u)}switch(l){case"input":rt(u),sn(u,v,!0);break;case"textarea":rt(u),Ct(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=Zo)}u=h,r.updateQueue=u,u!==null&&(r.flags|=4)}else{A=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=D(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=A.createElement(l,{is:u.is}):(n=A.createElement(l),l==="select"&&(A=n,u.multiple?A.multiple=!0:u.size&&(A.size=u.size))):n=A.createElementNS(n,l),n[Fi]=r,n[$a]=u,hm(n,r,!1,!1),r.stateNode=n;e:{switch(A=De(l,u),l){case"dialog":Xt("cancel",n),Xt("close",n),h=u;break;case"iframe":case"object":case"embed":Xt("load",n),h=u;break;case"video":case"audio":for(h=0;h<Xa.length;h++)Xt(Xa[h],n);h=u;break;case"source":Xt("error",n),h=u;break;case"img":case"image":case"link":Xt("error",n),Xt("load",n),h=u;break;case"details":Xt("toggle",n),h=u;break;case"input":Tt(n,u),h=Lt(n,u),Xt("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=ce({},u,{value:void 0}),Xt("invalid",n);break;case"textarea":W(n,u),h=Kt(n,u),Xt("invalid",n);break;default:h=u}Je(l,h),U=h;for(v in U)if(U.hasOwnProperty(v)){var B=U[v];v==="style"?ge(n,B):v==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&ie(n,B)):v==="children"?typeof B=="string"?(l!=="textarea"||B!=="")&&de(n,B):typeof B=="number"&&de(n,""+B):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(a.hasOwnProperty(v)?B!=null&&v==="onScroll"&&Xt("scroll",n):B!=null&&F(n,v,B,A))}switch(l){case"input":rt(n),sn(n,u,!1);break;case"textarea":rt(n),Ct(n);break;case"option":u.value!=null&&n.setAttribute("value",""+me(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?Nt(n,!!u.multiple,v,!1):u.defaultValue!=null&&Nt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Zo)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Pn(r),null;case 6:if(n&&r.stateNode!=null)mm(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(l=as(ja.current),as(Oi.current),il(r)){if(u=r.stateNode,l=r.memoizedProps,u[Fi]=r,(v=u.nodeValue!==l)&&(n=ti,n!==null))switch(n.tag){case 3:Ko(u.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ko(u.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[Fi]=r,r.stateNode=u}return Pn(r),null;case 13:if(qt(en),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Jt&&ni!==null&&(r.mode&1)!==0&&(r.flags&128)===0)_p(),Bs(),r.flags|=98560,v=!1;else if(v=il(r),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Fi]=r}else Bs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Pn(r),v=!1}else Mi!==null&&(Qu(Mi),Mi=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(en.current&1)!==0?mn===0&&(mn=3):td())),r.updateQueue!==null&&(r.flags|=4),Pn(r),null);case 4:return Ws(),Vu(n,r),n===null&&qa(r.stateNode.containerInfo),Pn(r),null;case 10:return mu(r.type._context),Pn(r),null;case 17:return Yn(r.type)&&Qo(),Pn(r),null;case 19:if(qt(en),v=r.memoizedState,v===null)return Pn(r),null;if(u=(r.flags&128)!==0,A=v.rendering,A===null)if(u)ro(v,!1);else{if(mn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(A=cl(n),A!==null){for(r.flags|=128,ro(v,!1),u=A.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=l,l=r.child;l!==null;)v=l,n=u,v.flags&=14680066,A=v.alternate,A===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=A.childLanes,v.lanes=A.lanes,v.child=A.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=A.memoizedProps,v.memoizedState=A.memoizedState,v.updateQueue=A.updateQueue,v.type=A.type,n=A.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Ht(en,en.current&1|2),r.child}n=n.sibling}v.tail!==null&&jt()>$s&&(r.flags|=128,u=!0,ro(v,!1),r.lanes=4194304)}else{if(!u)if(n=cl(A),n!==null){if(r.flags|=128,u=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),ro(v,!0),v.tail===null&&v.tailMode==="hidden"&&!A.alternate&&!Jt)return Pn(r),null}else 2*jt()-v.renderingStartTime>$s&&l!==1073741824&&(r.flags|=128,u=!0,ro(v,!1),r.lanes=4194304);v.isBackwards?(A.sibling=r.child,r.child=A):(l=v.last,l!==null?l.sibling=A:r.child=A,v.last=A)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=jt(),r.sibling=null,l=en.current,Ht(en,u?l&1|2:l&1),r):(Pn(r),null);case 22:case 23:return ed(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(ii&1073741824)!==0&&(Pn(r),r.subtreeFlags&6&&(r.flags|=8192)):Pn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function u_(n,r){switch(cu(r),r.tag){case 1:return Yn(r.type)&&Qo(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ws(),qt(qn),qt(bn),Mu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return yu(r),null;case 13:if(qt(en),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Bs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return qt(en),null;case 4:return Ws(),null;case 10:return mu(r.type._context),null;case 22:case 23:return ed(),null;case 24:return null;default:return null}}var _l=!1,Ln=!1,d_=typeof WeakSet=="function"?WeakSet:Set,We=null;function qs(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){on(n,r,u)}else l.current=null}function Hu(n,r,l){try{l()}catch(u){on(n,r,u)}}var gm=!1;function f_(n,r){if(eu=ko,n=$h(),qc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var h=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var A=0,U=-1,B=-1,ae=0,Se=0,Me=n,ye=null;t:for(;;){for(var Ve;Me!==l||h!==0&&Me.nodeType!==3||(U=A+h),Me!==v||u!==0&&Me.nodeType!==3||(B=A+u),Me.nodeType===3&&(A+=Me.nodeValue.length),(Ve=Me.firstChild)!==null;)ye=Me,Me=Ve;for(;;){if(Me===n)break t;if(ye===l&&++ae===h&&(U=A),ye===v&&++Se===u&&(B=A),(Ve=Me.nextSibling)!==null)break;Me=ye,ye=Me.parentNode}Me=Ve}l=U===-1||B===-1?null:{start:U,end:B}}else l=null}l=l||{start:0,end:0}}else l=null;for(tu={focusedElem:n,selectionRange:l},ko=!1,We=r;We!==null;)if(r=We,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,We=n;else for(;We!==null;){r=We;try{var Ye=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Ze=Ye.memoizedProps,cn=Ye.memoizedState,Q=r.stateNode,G=Q.getSnapshotBeforeUpdate(r.elementType===r.type?Ze:Ei(r.type,Ze),cn);Q.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ne=r.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){on(r,r.return,we)}if(n=r.sibling,n!==null){n.return=r.return,We=n;break}We=r.return}return Ye=gm,gm=!1,Ye}function so(n,r,l){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var v=h.destroy;h.destroy=void 0,v!==void 0&&Hu(r,l,v)}h=h.next}while(h!==u)}}function xl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var u=l.create;l.destroy=u()}l=l.next}while(l!==r)}}function Gu(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function vm(n){var r=n.alternate;r!==null&&(n.alternate=null,vm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Fi],delete r[$a],delete r[su],delete r[$v],delete r[Kv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function _m(n){return n.tag===5||n.tag===3||n.tag===4}function xm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||_m(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Wu(n,r,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=Zo));else if(u!==4&&(n=n.child,n!==null))for(Wu(n,r,l),n=n.sibling;n!==null;)Wu(n,r,l),n=n.sibling}function Xu(n,r,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Xu(n,r,l),n=n.sibling;n!==null;)Xu(n,r,l),n=n.sibling}var Tn=null,wi=!1;function br(n,r,l){for(l=l.child;l!==null;)ym(n,r,l),l=l.sibling}function ym(n,r,l){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(ee,l)}catch{}switch(l.tag){case 5:Ln||qs(l,r);case 6:var u=Tn,h=wi;Tn=null,br(n,r,l),Tn=u,wi=h,Tn!==null&&(wi?(n=Tn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):Tn.removeChild(l.stateNode));break;case 18:Tn!==null&&(wi?(n=Tn,l=l.stateNode,n.nodeType===8?ru(n.parentNode,l):n.nodeType===1&&ru(n,l),Oa(n)):ru(Tn,l.stateNode));break;case 4:u=Tn,h=wi,Tn=l.stateNode.containerInfo,wi=!0,br(n,r,l),Tn=u,wi=h;break;case 0:case 11:case 14:case 15:if(!Ln&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var v=h,A=v.destroy;v=v.tag,A!==void 0&&((v&2)!==0||(v&4)!==0)&&Hu(l,r,A),h=h.next}while(h!==u)}br(n,r,l);break;case 1:if(!Ln&&(qs(l,r),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(U){on(l,r,U)}br(n,r,l);break;case 21:br(n,r,l);break;case 22:l.mode&1?(Ln=(u=Ln)||l.memoizedState!==null,br(n,r,l),Ln=u):br(n,r,l);break;default:br(n,r,l)}}function Sm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new d_),r.forEach(function(u){var h=S_.bind(null,n,u);l.has(u)||(l.add(u),u.then(h,h))})}}function Ti(n,r){var l=r.deletions;if(l!==null)for(var u=0;u<l.length;u++){var h=l[u];try{var v=n,A=r,U=A;e:for(;U!==null;){switch(U.tag){case 5:Tn=U.stateNode,wi=!1;break e;case 3:Tn=U.stateNode.containerInfo,wi=!0;break e;case 4:Tn=U.stateNode.containerInfo,wi=!0;break e}U=U.return}if(Tn===null)throw Error(t(160));ym(v,A,h),Tn=null,wi=!1;var B=h.alternate;B!==null&&(B.return=null),h.return=null}catch(ae){on(h,r,ae)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Mm(r,n),r=r.sibling}function Mm(n,r){var l=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ti(r,n),zi(n),u&4){try{so(3,n,n.return),xl(3,n)}catch(Ze){on(n,n.return,Ze)}try{so(5,n,n.return)}catch(Ze){on(n,n.return,Ze)}}break;case 1:Ti(r,n),zi(n),u&512&&l!==null&&qs(l,l.return);break;case 5:if(Ti(r,n),zi(n),u&512&&l!==null&&qs(l,l.return),n.flags&32){var h=n.stateNode;try{de(h,"")}catch(Ze){on(n,n.return,Ze)}}if(u&4&&(h=n.stateNode,h!=null)){var v=n.memoizedProps,A=l!==null?l.memoizedProps:v,U=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{U==="input"&&v.type==="radio"&&v.name!=null&&St(h,v),De(U,A);var ae=De(U,v);for(A=0;A<B.length;A+=2){var Se=B[A],Me=B[A+1];Se==="style"?ge(h,Me):Se==="dangerouslySetInnerHTML"?ie(h,Me):Se==="children"?de(h,Me):F(h,Se,Me,ae)}switch(U){case"input":$t(h,v);break;case"textarea":En(h,v);break;case"select":var ye=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!v.multiple;var Ve=v.value;Ve!=null?Nt(h,!!v.multiple,Ve,!1):ye!==!!v.multiple&&(v.defaultValue!=null?Nt(h,!!v.multiple,v.defaultValue,!0):Nt(h,!!v.multiple,v.multiple?[]:"",!1))}h[$a]=v}catch(Ze){on(n,n.return,Ze)}}break;case 6:if(Ti(r,n),zi(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,v=n.memoizedProps;try{h.nodeValue=v}catch(Ze){on(n,n.return,Ze)}}break;case 3:if(Ti(r,n),zi(n),u&4&&l!==null&&l.memoizedState.isDehydrated)try{Oa(r.containerInfo)}catch(Ze){on(n,n.return,Ze)}break;case 4:Ti(r,n),zi(n);break;case 13:Ti(r,n),zi(n),h=n.child,h.flags&8192&&(v=h.memoizedState!==null,h.stateNode.isHidden=v,!v||h.alternate!==null&&h.alternate.memoizedState!==null||($u=jt())),u&4&&Sm(n);break;case 22:if(Se=l!==null&&l.memoizedState!==null,n.mode&1?(Ln=(ae=Ln)||Se,Ti(r,n),Ln=ae):Ti(r,n),zi(n),u&8192){if(ae=n.memoizedState!==null,(n.stateNode.isHidden=ae)&&!Se&&(n.mode&1)!==0)for(We=n,Se=n.child;Se!==null;){for(Me=We=Se;We!==null;){switch(ye=We,Ve=ye.child,ye.tag){case 0:case 11:case 14:case 15:so(4,ye,ye.return);break;case 1:qs(ye,ye.return);var Ye=ye.stateNode;if(typeof Ye.componentWillUnmount=="function"){u=ye,l=ye.return;try{r=u,Ye.props=r.memoizedProps,Ye.state=r.memoizedState,Ye.componentWillUnmount()}catch(Ze){on(u,l,Ze)}}break;case 5:qs(ye,ye.return);break;case 22:if(ye.memoizedState!==null){Tm(Me);continue}}Ve!==null?(Ve.return=ye,We=Ve):Tm(Me)}Se=Se.sibling}e:for(Se=null,Me=n;;){if(Me.tag===5){if(Se===null){Se=Me;try{h=Me.stateNode,ae?(v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(U=Me.stateNode,B=Me.memoizedProps.style,A=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=he("display",A))}catch(Ze){on(n,n.return,Ze)}}}else if(Me.tag===6){if(Se===null)try{Me.stateNode.nodeValue=ae?"":Me.memoizedProps}catch(Ze){on(n,n.return,Ze)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;Se===Me&&(Se=null),Me=Me.return}Se===Me&&(Se=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Ti(r,n),zi(n),u&4&&Sm(n);break;case 21:break;default:Ti(r,n),zi(n)}}function zi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(_m(l)){var u=l;break e}l=l.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(de(h,""),u.flags&=-33);var v=xm(n);Xu(n,v,h);break;case 3:case 4:var A=u.stateNode.containerInfo,U=xm(n);Wu(n,U,A);break;default:throw Error(t(161))}}catch(B){on(n,n.return,B)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function h_(n,r,l){We=n,Em(n)}function Em(n,r,l){for(var u=(n.mode&1)!==0;We!==null;){var h=We,v=h.child;if(h.tag===22&&u){var A=h.memoizedState!==null||_l;if(!A){var U=h.alternate,B=U!==null&&U.memoizedState!==null||Ln;U=_l;var ae=Ln;if(_l=A,(Ln=B)&&!ae)for(We=h;We!==null;)A=We,B=A.child,A.tag===22&&A.memoizedState!==null?Am(h):B!==null?(B.return=A,We=B):Am(h);for(;v!==null;)We=v,Em(v),v=v.sibling;We=h,_l=U,Ln=ae}wm(n)}else(h.subtreeFlags&8772)!==0&&v!==null?(v.return=h,We=v):wm(n)}}function wm(n){for(;We!==null;){var r=We;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ln||xl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!Ln)if(l===null)u.componentDidMount();else{var h=r.elementType===r.type?l.memoizedProps:Ei(r.type,l.memoizedProps);u.componentDidUpdate(h,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&Tp(r,v,u);break;case 3:var A=r.updateQueue;if(A!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Tp(r,A,l)}break;case 5:var U=r.stateNode;if(l===null&&r.flags&4){l=U;var B=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&l.focus();break;case"img":B.src&&(l.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ae=r.alternate;if(ae!==null){var Se=ae.memoizedState;if(Se!==null){var Me=Se.dehydrated;Me!==null&&Oa(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ln||r.flags&512&&Gu(r)}catch(ye){on(r,r.return,ye)}}if(r===n){We=null;break}if(l=r.sibling,l!==null){l.return=r.return,We=l;break}We=r.return}}function Tm(n){for(;We!==null;){var r=We;if(r===n){We=null;break}var l=r.sibling;if(l!==null){l.return=r.return,We=l;break}We=r.return}}function Am(n){for(;We!==null;){var r=We;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{xl(4,r)}catch(B){on(r,l,B)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var h=r.return;try{u.componentDidMount()}catch(B){on(r,h,B)}}var v=r.return;try{Gu(r)}catch(B){on(r,v,B)}break;case 5:var A=r.return;try{Gu(r)}catch(B){on(r,A,B)}}}catch(B){on(r,r.return,B)}if(r===n){We=null;break}var U=r.sibling;if(U!==null){U.return=r.return,We=U;break}We=r.return}}var p_=Math.ceil,yl=b.ReactCurrentDispatcher,qu=b.ReactCurrentOwner,fi=b.ReactCurrentBatchConfig,bt=0,yn=null,dn=null,An=0,ii=0,Ys=Er(0),mn=0,ao=null,ls=0,Sl=0,Yu=0,oo=null,Kn=null,$u=0,$s=1/0,ir=null,Ml=!1,Ku=null,Cr=null,El=!1,Pr=null,wl=0,lo=0,Zu=null,Tl=-1,Al=0;function zn(){return(bt&6)!==0?jt():Tl!==-1?Tl:Tl=jt()}function Lr(n){return(n.mode&1)===0?1:(bt&2)!==0&&An!==0?An&-An:Jv.transition!==null?(Al===0&&(Al=Be()),Al):(n=xt,n!==0||(n=window.event,n=n===void 0?16:bh(n.type)),n)}function Ai(n,r,l,u){if(50<lo)throw lo=0,Zu=null,Error(t(185));_t(n,l,u),((bt&2)===0||n!==yn)&&(n===yn&&((bt&2)===0&&(Sl|=l),mn===4&&Ir(n,An)),Zn(n,u),l===1&&bt===0&&(r.mode&1)===0&&($s=jt()+500,el&&Tr()))}function Zn(n,r){var l=n.callbackNode;Ut(n,r);var u=Vt(n,n===yn?An:0);if(u===0)l!==null&&La(l),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(l!=null&&La(l),r===1)n.tag===0?Zv(bm.bind(null,n)):hp(bm.bind(null,n)),qv(function(){(bt&6)===0&&Tr()}),l=null;else{switch(Ki(u)){case 1:l=Ia;break;case 4:l=R;break;case 16:l=X;break;case 536870912:l=te;break;default:l=X}l=Fm(l,Rm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Rm(n,r){if(Tl=-1,Al=0,(bt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(Ks()&&n.callbackNode!==l)return null;var u=Vt(n,n===yn?An:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=Rl(n,u);else{r=u;var h=bt;bt|=2;var v=Pm();(yn!==n||An!==r)&&(ir=null,$s=jt()+500,us(n,r));do try{v_();break}catch(U){Cm(n,U)}while(!0);pu(),yl.current=v,bt=h,dn!==null?r=0:(yn=null,An=0,r=mn)}if(r!==0){if(r===2&&(h=un(n),h!==0&&(u=h,r=Ju(n,h))),r===1)throw l=ao,us(n,0),Ir(n,u),Zn(n,jt()),l;if(r===6)Ir(n,u);else{if(h=n.current.alternate,(u&30)===0&&!m_(h)&&(r=Rl(n,u),r===2&&(v=un(n),v!==0&&(u=v,r=Ju(n,v))),r===1))throw l=ao,us(n,0),Ir(n,u),Zn(n,jt()),l;switch(n.finishedWork=h,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:ds(n,Kn,ir);break;case 3:if(Ir(n,u),(u&130023424)===u&&(r=$u+500-jt(),10<r)){if(Vt(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){zn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=iu(ds.bind(null,n,Kn,ir),r);break}ds(n,Kn,ir);break;case 4:if(Ir(n,u),(u&4194240)===u)break;for(r=n.eventTimes,h=-1;0<u;){var A=31-Te(u);v=1<<A,A=r[A],A>h&&(h=A),u&=~v}if(u=h,u=jt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*p_(u/1960))-u,10<u){n.timeoutHandle=iu(ds.bind(null,n,Kn,ir),u);break}ds(n,Kn,ir);break;case 5:ds(n,Kn,ir);break;default:throw Error(t(329))}}}return Zn(n,jt()),n.callbackNode===l?Rm.bind(null,n):null}function Ju(n,r){var l=oo;return n.current.memoizedState.isDehydrated&&(us(n,r).flags|=256),n=Rl(n,r),n!==2&&(r=Kn,Kn=l,r!==null&&Qu(r)),n}function Qu(n){Kn===null?Kn=n:Kn.push.apply(Kn,n)}function m_(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var h=l[u],v=h.getSnapshot;h=h.value;try{if(!Si(v(),h))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ir(n,r){for(r&=~Yu,r&=~Sl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Te(r),u=1<<l;n[l]=-1,r&=~u}}function bm(n){if((bt&6)!==0)throw Error(t(327));Ks();var r=Vt(n,0);if((r&1)===0)return Zn(n,jt()),null;var l=Rl(n,r);if(n.tag!==0&&l===2){var u=un(n);u!==0&&(r=u,l=Ju(n,u))}if(l===1)throw l=ao,us(n,0),Ir(n,r),Zn(n,jt()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,ds(n,Kn,ir),Zn(n,jt()),null}function ju(n,r){var l=bt;bt|=1;try{return n(r)}finally{bt=l,bt===0&&($s=jt()+500,el&&Tr())}}function cs(n){Pr!==null&&Pr.tag===0&&(bt&6)===0&&Ks();var r=bt;bt|=1;var l=fi.transition,u=xt;try{if(fi.transition=null,xt=1,n)return n()}finally{xt=u,fi.transition=l,bt=r,(bt&6)===0&&Tr()}}function ed(){ii=Ys.current,qt(Ys)}function us(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Xv(l)),dn!==null)for(l=dn.return;l!==null;){var u=l;switch(cu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Qo();break;case 3:Ws(),qt(qn),qt(bn),Mu();break;case 5:yu(u);break;case 4:Ws();break;case 13:qt(en);break;case 19:qt(en);break;case 10:mu(u.type._context);break;case 22:case 23:ed()}l=l.return}if(yn=n,dn=n=Dr(n.current,null),An=ii=r,mn=0,ao=null,Yu=Sl=ls=0,Kn=oo=null,ss!==null){for(r=0;r<ss.length;r++)if(l=ss[r],u=l.interleaved,u!==null){l.interleaved=null;var h=u.next,v=l.pending;if(v!==null){var A=v.next;v.next=h,u.next=A}l.pending=u}ss=null}return n}function Cm(n,r){do{var l=dn;try{if(pu(),ul.current=pl,dl){for(var u=tn.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}dl=!1}if(os=0,xn=pn=tn=null,eo=!1,to=0,qu.current=null,l===null||l.return===null){mn=1,ao=r,dn=null;break}e:{var v=n,A=l.return,U=l,B=r;if(r=An,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ae=B,Se=U,Me=Se.tag;if((Se.mode&1)===0&&(Me===0||Me===11||Me===15)){var ye=Se.alternate;ye?(Se.updateQueue=ye.updateQueue,Se.memoizedState=ye.memoizedState,Se.lanes=ye.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Ve=em(A);if(Ve!==null){Ve.flags&=-257,tm(Ve,A,U,v,r),Ve.mode&1&&jp(v,ae,r),r=Ve,B=ae;var Ye=r.updateQueue;if(Ye===null){var Ze=new Set;Ze.add(B),r.updateQueue=Ze}else Ye.add(B);break e}else{if((r&1)===0){jp(v,ae,r),td();break e}B=Error(t(426))}}else if(Jt&&U.mode&1){var cn=em(A);if(cn!==null){(cn.flags&65536)===0&&(cn.flags|=256),tm(cn,A,U,v,r),fu(Xs(B,U));break e}}v=B=Xs(B,U),mn!==4&&(mn=2),oo===null?oo=[v]:oo.push(v),v=A;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var Q=Jp(v,B,r);wp(v,Q);break e;case 1:U=B;var G=v.type,ne=v.stateNode;if((v.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(Cr===null||!Cr.has(ne)))){v.flags|=65536,r&=-r,v.lanes|=r;var we=Qp(v,U,r);wp(v,we);break e}}v=v.return}while(v!==null)}Im(l)}catch(et){r=et,dn===l&&l!==null&&(dn=l=l.return);continue}break}while(!0)}function Pm(){var n=yl.current;return yl.current=pl,n===null?pl:n}function td(){(mn===0||mn===3||mn===2)&&(mn=4),yn===null||(ls&268435455)===0&&(Sl&268435455)===0||Ir(yn,An)}function Rl(n,r){var l=bt;bt|=2;var u=Pm();(yn!==n||An!==r)&&(ir=null,us(n,r));do try{g_();break}catch(h){Cm(n,h)}while(!0);if(pu(),bt=l,yl.current=u,dn!==null)throw Error(t(261));return yn=null,An=0,mn}function g_(){for(;dn!==null;)Lm(dn)}function v_(){for(;dn!==null&&!Fo();)Lm(dn)}function Lm(n){var r=Um(n.alternate,n,ii);n.memoizedProps=n.pendingProps,r===null?Im(n):dn=r,qu.current=null}function Im(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=c_(l,r,ii),l!==null){dn=l;return}}else{if(l=u_(l,r),l!==null){l.flags&=32767,dn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mn=6,dn=null;return}}if(r=r.sibling,r!==null){dn=r;return}dn=r=n}while(r!==null);mn===0&&(mn=5)}function ds(n,r,l){var u=xt,h=fi.transition;try{fi.transition=null,xt=1,__(n,r,l,u)}finally{fi.transition=h,xt=u}return null}function __(n,r,l,u){do Ks();while(Pr!==null);if((bt&6)!==0)throw Error(t(327));l=n.finishedWork;var h=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(Wn(n,v),n===yn&&(dn=yn=null,An=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||El||(El=!0,Fm(X,function(){return Ks(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=fi.transition,fi.transition=null;var A=xt;xt=1;var U=bt;bt|=4,qu.current=null,f_(n,l),Mm(l,n),kv(tu),ko=!!eu,tu=eu=null,n.current=l,h_(l),Dc(),bt=U,xt=A,fi.transition=v}else n.current=l;if(El&&(El=!1,Pr=n,wl=h),v=n.pendingLanes,v===0&&(Cr=null),He(l.stateNode),Zn(n,jt()),r!==null)for(u=n.onRecoverableError,l=0;l<r.length;l++)h=r[l],u(h.value,{componentStack:h.stack,digest:h.digest});if(Ml)throw Ml=!1,n=Ku,Ku=null,n;return(wl&1)!==0&&n.tag!==0&&Ks(),v=n.pendingLanes,(v&1)!==0?n===Zu?lo++:(lo=0,Zu=n):lo=0,Tr(),null}function Ks(){if(Pr!==null){var n=Ki(wl),r=fi.transition,l=xt;try{if(fi.transition=null,xt=16>n?16:n,Pr===null)var u=!1;else{if(n=Pr,Pr=null,wl=0,(bt&6)!==0)throw Error(t(331));var h=bt;for(bt|=4,We=n.current;We!==null;){var v=We,A=v.child;if((We.flags&16)!==0){var U=v.deletions;if(U!==null){for(var B=0;B<U.length;B++){var ae=U[B];for(We=ae;We!==null;){var Se=We;switch(Se.tag){case 0:case 11:case 15:so(8,Se,v)}var Me=Se.child;if(Me!==null)Me.return=Se,We=Me;else for(;We!==null;){Se=We;var ye=Se.sibling,Ve=Se.return;if(vm(Se),Se===ae){We=null;break}if(ye!==null){ye.return=Ve,We=ye;break}We=Ve}}}var Ye=v.alternate;if(Ye!==null){var Ze=Ye.child;if(Ze!==null){Ye.child=null;do{var cn=Ze.sibling;Ze.sibling=null,Ze=cn}while(Ze!==null)}}We=v}}if((v.subtreeFlags&2064)!==0&&A!==null)A.return=v,We=A;else e:for(;We!==null;){if(v=We,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:so(9,v,v.return)}var Q=v.sibling;if(Q!==null){Q.return=v.return,We=Q;break e}We=v.return}}var G=n.current;for(We=G;We!==null;){A=We;var ne=A.child;if((A.subtreeFlags&2064)!==0&&ne!==null)ne.return=A,We=ne;else e:for(A=G;We!==null;){if(U=We,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:xl(9,U)}}catch(et){on(U,U.return,et)}if(U===A){We=null;break e}var we=U.sibling;if(we!==null){we.return=U.return,We=we;break e}We=U.return}}if(bt=h,Tr(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(ee,n)}catch{}u=!0}return u}finally{xt=l,fi.transition=r}}return!1}function Dm(n,r,l){r=Xs(l,r),r=Jp(n,r,1),n=Rr(n,r,1),r=zn(),n!==null&&(_t(n,1,r),Zn(n,r))}function on(n,r,l){if(n.tag===3)Dm(n,n,l);else for(;r!==null;){if(r.tag===3){Dm(r,n,l);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Cr===null||!Cr.has(u))){n=Xs(l,n),n=Qp(r,n,1),r=Rr(r,n,1),n=zn(),r!==null&&(_t(r,1,n),Zn(r,n));break}}r=r.return}}function x_(n,r,l){var u=n.pingCache;u!==null&&u.delete(r),r=zn(),n.pingedLanes|=n.suspendedLanes&l,yn===n&&(An&l)===l&&(mn===4||mn===3&&(An&130023424)===An&&500>jt()-$u?us(n,0):Yu|=l),Zn(n,r)}function Nm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Qe,Qe<<=1,(Qe&130023424)===0&&(Qe=4194304)));var l=zn();n=er(n,r),n!==null&&(_t(n,r,l),Zn(n,l))}function y_(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Nm(n,l)}function S_(n,r){var l=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(l=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),Nm(n,l)}var Um;Um=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||qn.current)$n=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return $n=!1,l_(n,r,l);$n=(n.flags&131072)!==0}else $n=!1,Jt&&(r.flags&1048576)!==0&&pp(r,nl,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;vl(n,r),n=r.pendingProps;var h=Os(r,bn.current);Gs(r,l),h=Tu(null,r,u,n,h,l);var v=Au();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Yn(u)?(v=!0,jo(r)):v=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,_u(r),h.updater=ml,r.stateNode=h,h._reactInternals=r,Iu(r,u,n,l),r=Fu(null,r,u,!0,v,l)):(r.tag=0,Jt&&v&&lu(r),kn(null,r,h,l),r=r.child),r;case 16:u=r.elementType;e:{switch(vl(n,r),n=r.pendingProps,h=u._init,u=h(u._payload),r.type=u,h=r.tag=E_(u),n=Ei(u,n),h){case 0:r=Uu(null,r,u,n,l);break e;case 1:r=om(null,r,u,n,l);break e;case 11:r=nm(null,r,u,n,l);break e;case 14:r=im(null,r,u,Ei(u.type,n),l);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Ei(u,h),Uu(n,r,u,h,l);case 1:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Ei(u,h),om(n,r,u,h,l);case 3:e:{if(lm(r),n===null)throw Error(t(387));u=r.pendingProps,v=r.memoizedState,h=v.element,Ep(n,r),ll(r,u,null,l);var A=r.memoizedState;if(u=A.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){h=Xs(Error(t(423)),r),r=cm(n,r,u,l,h);break e}else if(u!==h){h=Xs(Error(t(424)),r),r=cm(n,r,u,l,h);break e}else for(ni=Mr(r.stateNode.containerInfo.firstChild),ti=r,Jt=!0,Mi=null,l=Sp(r,null,u,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Bs(),u===h){r=nr(n,r,l);break e}kn(n,r,u,l)}r=r.child}return r;case 5:return Ap(r),n===null&&du(r),u=r.type,h=r.pendingProps,v=n!==null?n.memoizedProps:null,A=h.children,nu(u,h)?A=null:v!==null&&nu(u,v)&&(r.flags|=32),am(n,r),kn(n,r,A,l),r.child;case 6:return n===null&&du(r),null;case 13:return um(n,r,l);case 4:return xu(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Vs(r,null,u,l):kn(n,r,u,l),r.child;case 11:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Ei(u,h),nm(n,r,u,h,l);case 7:return kn(n,r,r.pendingProps,l),r.child;case 8:return kn(n,r,r.pendingProps.children,l),r.child;case 12:return kn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(u=r.type._context,h=r.pendingProps,v=r.memoizedProps,A=h.value,Ht(sl,u._currentValue),u._currentValue=A,v!==null)if(Si(v.value,A)){if(v.children===h.children&&!qn.current){r=nr(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var U=v.dependencies;if(U!==null){A=v.child;for(var B=U.firstContext;B!==null;){if(B.context===u){if(v.tag===1){B=tr(-1,l&-l),B.tag=2;var ae=v.updateQueue;if(ae!==null){ae=ae.shared;var Se=ae.pending;Se===null?B.next=B:(B.next=Se.next,Se.next=B),ae.pending=B}}v.lanes|=l,B=v.alternate,B!==null&&(B.lanes|=l),gu(v.return,l,r),U.lanes|=l;break}B=B.next}}else if(v.tag===10)A=v.type===r.type?null:v.child;else if(v.tag===18){if(A=v.return,A===null)throw Error(t(341));A.lanes|=l,U=A.alternate,U!==null&&(U.lanes|=l),gu(A,l,r),A=v.sibling}else A=v.child;if(A!==null)A.return=v;else for(A=v;A!==null;){if(A===r){A=null;break}if(v=A.sibling,v!==null){v.return=A.return,A=v;break}A=A.return}v=A}kn(n,r,h.children,l),r=r.child}return r;case 9:return h=r.type,u=r.pendingProps.children,Gs(r,l),h=ui(h),u=u(h),r.flags|=1,kn(n,r,u,l),r.child;case 14:return u=r.type,h=Ei(u,r.pendingProps),h=Ei(u.type,h),im(n,r,u,h,l);case 15:return rm(n,r,r.type,r.pendingProps,l);case 17:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Ei(u,h),vl(n,r),r.tag=1,Yn(u)?(n=!0,jo(r)):n=!1,Gs(r,l),Kp(r,u,h),Iu(r,u,h,l),Fu(null,r,u,!0,n,l);case 19:return fm(n,r,l);case 22:return sm(n,r,l)}throw Error(t(156,r.tag))};function Fm(n,r){return jr(n,r)}function M_(n,r,l,u){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(n,r,l,u){return new M_(n,r,l,u)}function nd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function E_(n){if(typeof n=="function")return nd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===q)return 11;if(n===Z)return 14}return 2}function Dr(n,r){var l=n.alternate;return l===null?(l=hi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function bl(n,r,l,u,h,v){var A=2;if(u=n,typeof n=="function")nd(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case I:return fs(l.children,h,v,r);case w:A=8,h|=8;break;case L:return n=hi(12,l,r,h|2),n.elementType=L,n.lanes=v,n;case oe:return n=hi(13,l,r,h),n.elementType=oe,n.lanes=v,n;case fe:return n=hi(19,l,r,h),n.elementType=fe,n.lanes=v,n;case $:return Cl(l,h,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:A=10;break e;case z:A=9;break e;case q:A=11;break e;case Z:A=14;break e;case ue:A=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=hi(A,l,r,h),r.elementType=n,r.type=u,r.lanes=v,r}function fs(n,r,l,u){return n=hi(7,n,u,r),n.lanes=l,n}function Cl(n,r,l,u){return n=hi(22,n,u,r),n.elementType=$,n.lanes=l,n.stateNode={isHidden:!1},n}function id(n,r,l){return n=hi(6,n,null,r),n.lanes=l,n}function rd(n,r,l){return r=hi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function w_(n,r,l,u,h){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wn(0),this.expirationTimes=wn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wn(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function sd(n,r,l,u,h,v,A,U,B){return n=new w_(n,r,l,U,B),r===1?(r=1,v===!0&&(r|=8)):r=0,v=hi(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},_u(v),n}function T_(n,r,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:u==null?null:""+u,children:n,containerInfo:r,implementation:l}}function Om(n){if(!n)return wr;n=n._reactInternals;e:{if(On(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Yn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Yn(l))return dp(n,l,r)}return r}function km(n,r,l,u,h,v,A,U,B){return n=sd(l,u,!0,n,h,v,A,U,B),n.context=Om(null),l=n.current,u=zn(),h=Lr(l),v=tr(u,h),v.callback=r??null,Rr(l,v,h),n.current.lanes=h,_t(n,h,u),Zn(n,u),n}function Pl(n,r,l,u){var h=r.current,v=zn(),A=Lr(h);return l=Om(l),r.context===null?r.context=l:r.pendingContext=l,r=tr(v,A),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=Rr(h,r,A),n!==null&&(Ai(n,h,A,v),ol(n,h,A)),A}function Ll(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function zm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function ad(n,r){zm(n,r),(n=n.alternate)&&zm(n,r)}function A_(){return null}var Bm=typeof reportError=="function"?reportError:function(n){console.error(n)};function od(n){this._internalRoot=n}Il.prototype.render=od.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Pl(n,r,null,null)},Il.prototype.unmount=od.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;cs(function(){Pl(null,n,null,null)}),r[Zi]=null}};function Il(n){this._internalRoot=n}Il.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ft();n={blockedOn:null,target:n,priority:r};for(var l=0;l<xr.length&&r!==0&&r<xr[l].priority;l++);xr.splice(l,0,n),l===0&&Ah(n)}};function ld(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Dl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Vm(){}function R_(n,r,l,u,h){if(h){if(typeof u=="function"){var v=u;u=function(){var ae=Ll(A);v.call(ae)}}var A=km(r,u,n,0,null,!1,!1,"",Vm);return n._reactRootContainer=A,n[Zi]=A.current,qa(n.nodeType===8?n.parentNode:n),cs(),A}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var U=u;u=function(){var ae=Ll(B);U.call(ae)}}var B=sd(n,0,!1,null,null,!1,!1,"",Vm);return n._reactRootContainer=B,n[Zi]=B.current,qa(n.nodeType===8?n.parentNode:n),cs(function(){Pl(r,B,l,u)}),B}function Nl(n,r,l,u,h){var v=l._reactRootContainer;if(v){var A=v;if(typeof h=="function"){var U=h;h=function(){var B=Ll(A);U.call(B)}}Pl(r,A,n,h)}else A=R_(l,r,n,h,u);return Ll(A)}Dt=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=At(r.pendingLanes);l!==0&&(Xn(r,l|1),Zn(r,jt()),(bt&6)===0&&($s=jt()+500,Tr()))}break;case 13:cs(function(){var u=er(n,1);if(u!==null){var h=zn();Ai(u,n,1,h)}}),ad(n,1)}},Wt=function(n){if(n.tag===13){var r=er(n,134217728);if(r!==null){var l=zn();Ai(r,n,134217728,l)}ad(n,134217728)}},xi=function(n){if(n.tag===13){var r=Lr(n),l=er(n,r);if(l!==null){var u=zn();Ai(l,n,r,u)}ad(n,r)}},Ft=function(){return xt},yi=function(n,r){var l=xt;try{return xt=n,r()}finally{xt=l}},st=function(n,r,l){switch(r){case"input":if($t(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var u=l[r];if(u!==n&&u.form===n.form){var h=Jo(u);if(!h)throw Error(t(90));Yt(u),$t(u,h)}}}break;case"textarea":En(n,l);break;case"select":r=l.value,r!=null&&Nt(n,!!l.multiple,r,!1)}},Ue=ju,_e=cs;var b_={usingClientEntryPoint:!1,Events:[Ka,Us,Jo,pe,Pe,ju]},co={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},C_={bundleType:co.bundleType,version:co.version,rendererPackageName:co.rendererPackageName,rendererConfig:co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Qr(n),n===null?null:n.stateNode},findFiberByHostInstance:co.findFiberByHostInstance||A_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ul.isDisabled&&Ul.supportsFiber)try{ee=Ul.inject(C_),Ae=Ul}catch{}}return Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b_,Jn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ld(r))throw Error(t(200));return T_(n,r,null,l)},Jn.createRoot=function(n,r){if(!ld(n))throw Error(t(299));var l=!1,u="",h=Bm;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=sd(n,1,!1,null,null,l,!1,u,h),n[Zi]=r.current,qa(n.nodeType===8?n.parentNode:n),new od(r)},Jn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Qr(r),n=n===null?null:n.stateNode,n},Jn.flushSync=function(n){return cs(n)},Jn.hydrate=function(n,r,l){if(!Dl(r))throw Error(t(200));return Nl(null,n,r,!0,l)},Jn.hydrateRoot=function(n,r,l){if(!ld(n))throw Error(t(405));var u=l!=null&&l.hydratedSources||null,h=!1,v="",A=Bm;if(l!=null&&(l.unstable_strictMode===!0&&(h=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),r=km(r,null,n,1,l??null,h,!1,v,A),n[Zi]=r.current,qa(n),u)for(n=0;n<u.length;n++)l=u[n],h=l._getVersion,h=h(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,h]:r.mutableSourceEagerHydrationData.push(l,h);return new Il(r)},Jn.render=function(n,r,l){if(!Dl(r))throw Error(t(200));return Nl(null,n,r,!1,l)},Jn.unmountComponentAtNode=function(n){if(!Dl(n))throw Error(t(40));return n._reactRootContainer?(cs(function(){Nl(null,null,n,!1,function(){n._reactRootContainer=null,n[Zi]=null})}),!0):!1},Jn.unstable_batchedUpdates=ju,Jn.unstable_renderSubtreeIntoContainer=function(n,r,l,u){if(!Dl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Nl(n,r,l,!1,u)},Jn.version="18.3.1-next-f1338f8080-20240426",Jn}var Km;function k_(){if(Km)return dd.exports;Km=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),dd.exports=O_(),dd.exports}var Zm;function z_(){if(Zm)return Fl;Zm=1;var s=k_();return Fl.createRoot=s.createRoot,Fl.hydrateRoot=s.hydrateRoot,Fl}var B_=z_();const V_=L_(B_);var Jm=eh();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const th="185",H_=0,Qm=1,G_=2,Ao=1,W_=2,wo=3,Yr=0,Qn=1,Gi=2,ur=0,ga=1,jm=2,e0=3,t0=4,X_=5,_s=100,q_=101,Y_=102,$_=103,K_=104,Z_=200,J_=201,Q_=202,j_=203,rf=204,sf=205,ex=206,tx=207,nx=208,ix=209,rx=210,sx=211,ax=212,ox=213,lx=214,af=0,of=1,lf=2,ya=3,cf=4,uf=5,df=6,ff=7,nh=0,cx=1,ux=2,Ni=0,mg=1,gg=2,vg=3,_g=4,xg=5,yg=6,Sg=7,Mg=300,Ms=301,Sa=302,pd=303,md=304,Rc=306,vc=1e3,cr=1001,hf=1002,ln=1003,dx=1004,Ol=1005,Un=1006,gd=1007,ys=1008,ai=1009,Eg=1010,wg=1011,Ro=1012,ih=1013,Yi=1014,Ii=1015,pr=1016,rh=1017,sh=1018,bo=1020,Tg=35902,Ag=35899,Rg=1021,bg=1022,Di=1023,mr=1026,Ss=1027,ah=1028,oh=1029,Es=1030,lh=1031,ch=1033,fc=33776,hc=33777,pc=33778,mc=33779,pf=35840,mf=35841,gf=35842,vf=35843,_f=36196,xf=37492,yf=37496,Sf=37488,Mf=37489,_c=37490,Ef=37491,wf=37808,Tf=37809,Af=37810,Rf=37811,bf=37812,Cf=37813,Pf=37814,Lf=37815,If=37816,Df=37817,Nf=37818,Uf=37819,Ff=37820,Of=37821,kf=36492,zf=36494,Bf=36495,Vf=36283,Hf=36284,xc=36285,Gf=36286,fx=3200,Wf=0,hx=1,Vr="",Nn="srgb",yc="srgb-linear",Sc="linear",Ot="srgb",Zs=7680,n0=519,px=512,mx=513,gx=514,uh=515,vx=516,_x=517,dh=518,xx=519,Xf=35044,i0="300 es",Xi=2e3,Co=2001;function yx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Mc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sx(){const s=Mc("canvas");return s.style.display="block",s}const r0={};function Ec(...s){const e="THREE."+s.shift();console.log(e,...s)}function Cg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ut(...s){s=Cg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Rt(...s){s=Cg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function va(...s){const e=s.join(" ");e in r0||(r0[e]=!0,ut(...s))}function Mx(s,e,t){return new Promise(function(i,a){function o(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}const Ex={[af]:of,[lf]:df,[cf]:ff,[ya]:uf,[of]:af,[df]:lf,[ff]:cf,[uf]:ya};class ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let o=0,c=a.length;o<c;o++)a[o].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vd=Math.PI/180,qf=180/Math.PI;function Wr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]).toLowerCase()}function wt(s,e,t){return Math.max(e,Math.min(t,s))}function wx(s,e){return(s%e+e)%e}function _d(s,e,t){return(1-t)*s+t*e}function Wi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Bt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const yh=class yh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(wt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*i-c*a+e.x,this.y=o*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yh.prototype.isVector2=!0;let dt=yh;class wa{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,o,c,d){let f=i[a+0],p=i[a+1],x=i[a+2],g=i[a+3],m=o[c+0],_=o[c+1],M=o[c+2],T=o[c+3];if(g!==T||f!==m||p!==_||x!==M){let S=f*m+p*_+x*M+g*T;S<0&&(m=-m,_=-_,M=-M,T=-T,S=-S);let y=1-d;if(S<.9995){const N=Math.acos(S),F=Math.sin(N);y=Math.sin(y*N)/F,d=Math.sin(d*N)/F,f=f*y+m*d,p=p*y+_*d,x=x*y+M*d,g=g*y+T*d}else{f=f*y+m*d,p=p*y+_*d,x=x*y+M*d,g=g*y+T*d;const N=1/Math.sqrt(f*f+p*p+x*x+g*g);f*=N,p*=N,x*=N,g*=N}}e[t]=f,e[t+1]=p,e[t+2]=x,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,a,o,c){const d=i[a],f=i[a+1],p=i[a+2],x=i[a+3],g=o[c],m=o[c+1],_=o[c+2],M=o[c+3];return e[t]=d*M+x*g+f*_-p*m,e[t+1]=f*M+x*m+p*g-d*_,e[t+2]=p*M+x*_+d*m-f*g,e[t+3]=x*M-d*g-f*m-p*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,o=e._z,c=e._order,d=Math.cos,f=Math.sin,p=d(i/2),x=d(a/2),g=d(o/2),m=f(i/2),_=f(a/2),M=f(o/2);switch(c){case"XYZ":this._x=m*x*g+p*_*M,this._y=p*_*g-m*x*M,this._z=p*x*M+m*_*g,this._w=p*x*g-m*_*M;break;case"YXZ":this._x=m*x*g+p*_*M,this._y=p*_*g-m*x*M,this._z=p*x*M-m*_*g,this._w=p*x*g+m*_*M;break;case"ZXY":this._x=m*x*g-p*_*M,this._y=p*_*g+m*x*M,this._z=p*x*M+m*_*g,this._w=p*x*g-m*_*M;break;case"ZYX":this._x=m*x*g-p*_*M,this._y=p*_*g+m*x*M,this._z=p*x*M-m*_*g,this._w=p*x*g+m*_*M;break;case"YZX":this._x=m*x*g+p*_*M,this._y=p*_*g+m*x*M,this._z=p*x*M-m*_*g,this._w=p*x*g-m*_*M;break;case"XZY":this._x=m*x*g-p*_*M,this._y=p*_*g-m*x*M,this._z=p*x*M+m*_*g,this._w=p*x*g+m*_*M;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],o=t[8],c=t[1],d=t[5],f=t[9],p=t[2],x=t[6],g=t[10],m=i+d+g;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(x-f)*_,this._y=(o-p)*_,this._z=(c-a)*_}else if(i>d&&i>g){const _=2*Math.sqrt(1+i-d-g);this._w=(x-f)/_,this._x=.25*_,this._y=(a+c)/_,this._z=(o+p)/_}else if(d>g){const _=2*Math.sqrt(1+d-i-g);this._w=(o-p)/_,this._x=(a+c)/_,this._y=.25*_,this._z=(f+x)/_}else{const _=2*Math.sqrt(1+g-i-d);this._w=(c-a)/_,this._x=(o+p)/_,this._y=(f+x)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,o=e._z,c=e._w,d=t._x,f=t._y,p=t._z,x=t._w;return this._x=i*x+c*d+a*p-o*f,this._y=a*x+c*f+o*d-i*p,this._z=o*x+c*p+i*f-a*d,this._w=c*x-i*d-a*f-o*p,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,o=e._z,c=e._w,d=this.dot(e);d<0&&(i=-i,a=-a,o=-o,c=-c,d=-d);let f=1-t;if(d<.9995){const p=Math.acos(d),x=Math.sin(p);f=Math.sin(f*p)/x,t=Math.sin(t*p)/x,this._x=this._x*f+i*t,this._y=this._y*f+a*t,this._z=this._z*f+o*t,this._w=this._w*f+c*t,this._onChangeCallback()}else this._x=this._x*f+i*t,this._y=this._y*f+a*t,this._z=this._z*f+o*t,this._w=this._w*f+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Sh=class Sh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(s0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(s0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*a,this.y=o[1]*t+o[4]*i+o[7]*a,this.z=o[2]*t+o[5]*i+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=e.elements,c=1/(o[3]*t+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*a+o[12])*c,this.y=(o[1]*t+o[5]*i+o[9]*a+o[13])*c,this.z=(o[2]*t+o[6]*i+o[10]*a+o[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,o=e.x,c=e.y,d=e.z,f=e.w,p=2*(c*a-d*i),x=2*(d*t-o*a),g=2*(o*i-c*t);return this.x=t+f*p+c*g-d*x,this.y=i+f*x+d*p-o*g,this.z=a+f*g+o*x-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a,this.y=o[1]*t+o[5]*i+o[9]*a,this.z=o[2]*t+o[6]*i+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(wt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,o=e.z,c=t.x,d=t.y,f=t.z;return this.x=a*f-o*d,this.y=o*c-i*f,this.z=i*d-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xd.copy(this).projectOnVector(e),this.sub(xd)}reflect(e){return this.sub(xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sh.prototype.isVector3=!0;let j=Sh;const xd=new j,s0=new wa,Mh=class Mh{constructor(e,t,i,a,o,c,d,f,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,c,d,f,p)}set(e,t,i,a,o,c,d,f,p){const x=this.elements;return x[0]=e,x[1]=a,x[2]=d,x[3]=t,x[4]=o,x[5]=f,x[6]=i,x[7]=c,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,c=i[0],d=i[3],f=i[6],p=i[1],x=i[4],g=i[7],m=i[2],_=i[5],M=i[8],T=a[0],S=a[3],y=a[6],N=a[1],F=a[4],b=a[7],C=a[2],P=a[5],I=a[8];return o[0]=c*T+d*N+f*C,o[3]=c*S+d*F+f*P,o[6]=c*y+d*b+f*I,o[1]=p*T+x*N+g*C,o[4]=p*S+x*F+g*P,o[7]=p*y+x*b+g*I,o[2]=m*T+_*N+M*C,o[5]=m*S+_*F+M*P,o[8]=m*y+_*b+M*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],d=e[5],f=e[6],p=e[7],x=e[8];return t*c*x-t*d*p-i*o*x+i*d*f+a*o*p-a*c*f}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],d=e[5],f=e[6],p=e[7],x=e[8],g=x*c-d*p,m=d*f-x*o,_=p*o-c*f,M=t*g+i*m+a*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=g*T,e[1]=(a*p-x*i)*T,e[2]=(d*i-a*c)*T,e[3]=m*T,e[4]=(x*t-a*f)*T,e[5]=(a*o-d*t)*T,e[6]=_*T,e[7]=(i*f-p*t)*T,e[8]=(c*t-i*o)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,o,c,d){const f=Math.cos(o),p=Math.sin(o);return this.set(i*f,i*p,-i*(f*c+p*d)+c+e,-a*p,a*f,-a*(-p*c+f*d)+d+t,0,0,1),this}scale(e,t){return va("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yd.makeScale(e,t)),this}rotate(e){return va("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yd.makeRotation(-e)),this}translate(e,t){return va("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Mh.prototype.isMatrix3=!0;let pt=Mh;const yd=new pt,a0=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),o0=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tx(){const s={enabled:!0,workingColorSpace:yc,spaces:{},convert:function(a,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Ot&&(a.r=dr(a.r),a.g=dr(a.g),a.b=dr(a.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ot&&(a.r=_a(a.r),a.g=_a(a.g),a.b=_a(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Vr?Sc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,c){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return va("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return va("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[yc]:{primaries:e,whitePoint:i,transfer:Sc,toXYZ:a0,fromXYZ:o0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:i,transfer:Ot,toXYZ:a0,fromXYZ:o0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),s}const Et=Tx();function dr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _a(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Js;class Ax{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Js===void 0&&(Js=Mc("canvas")),Js.width=e.width,Js.height=e.height;const a=Js.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Js}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),o=a.data;for(let c=0;c<o.length;c++)o[c]=dr(o[c]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(dr(t[i]/255)*255):t[i]=dr(t[i]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rx=0;class fh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=Wr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?o.push(Sd(a[c].image)):o.push(Sd(a[c]))}else o=Sd(a);i.url=o}return t||(e.images[this.uuid]=i),i}}function Sd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ax.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let bx=0;const Md=new j;class Fn extends ws{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,i=cr,a=cr,o=Un,c=ys,d=Di,f=ai,p=Fn.DEFAULT_ANISOTROPY,x=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=Wr(),this.name="",this.source=new fh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Md).x}get height(){return this.source.getSize(Md).y}get depth(){return this.source.getSize(Md).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vc:e.x=e.x-Math.floor(e.x);break;case cr:e.x=e.x<0?0:1;break;case hf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vc:e.y=e.y-Math.floor(e.y);break;case cr:e.y=e.y<0?0:1;break;case hf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Mg;Fn.DEFAULT_ANISOTROPY=1;const Eh=class Eh{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*a+c[12]*o,this.y=c[1]*t+c[5]*i+c[9]*a+c[13]*o,this.z=c[2]*t+c[6]*i+c[10]*a+c[14]*o,this.w=c[3]*t+c[7]*i+c[11]*a+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,o;const f=e.elements,p=f[0],x=f[4],g=f[8],m=f[1],_=f[5],M=f[9],T=f[2],S=f[6],y=f[10];if(Math.abs(x-m)<.01&&Math.abs(g-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(x+m)<.1&&Math.abs(g+T)<.1&&Math.abs(M+S)<.1&&Math.abs(p+_+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(p+1)/2,b=(_+1)/2,C=(y+1)/2,P=(x+m)/4,I=(g+T)/4,w=(M+S)/4;return F>b&&F>C?F<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(F),a=P/i,o=I/i):b>C?b<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(b),i=P/a,o=w/a):C<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(C),i=I/o,a=w/o),this.set(i,a,o,t),this}let N=Math.sqrt((S-M)*(S-M)+(g-T)*(g-T)+(m-x)*(m-x));return Math.abs(N)<.001&&(N=1),this.x=(S-M)/N,this.y=(g-T)/N,this.z=(m-x)/N,this.w=Math.acos((p+_+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this.w=wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this.w=wt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(wt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Eh.prototype.isVector4=!0;let rn=Eh;class Cx extends ws{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:i.depth},o=new Fn(a),c=i.count;for(let d=0;d<c;d++)this.textures[d]=o.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new fh(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends Cx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Pg extends Fn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=ln,this.minFilter=ln,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Px extends Fn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=ln,this.minFilter=ln,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ac=class Ac{constructor(e,t,i,a,o,c,d,f,p,x,g,m,_,M,T,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,c,d,f,p,x,g,m,_,M,T,S)}set(e,t,i,a,o,c,d,f,p,x,g,m,_,M,T,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=a,y[1]=o,y[5]=c,y[9]=d,y[13]=f,y[2]=p,y[6]=x,y[10]=g,y[14]=m,y[3]=_,y[7]=M,y[11]=T,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ac().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,a=1/Qs.setFromMatrixColumn(e,0).length(),o=1/Qs.setFromMatrixColumn(e,1).length(),c=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,o=e.z,c=Math.cos(i),d=Math.sin(i),f=Math.cos(a),p=Math.sin(a),x=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const m=c*x,_=c*g,M=d*x,T=d*g;t[0]=f*x,t[4]=-f*g,t[8]=p,t[1]=_+M*p,t[5]=m-T*p,t[9]=-d*f,t[2]=T-m*p,t[6]=M+_*p,t[10]=c*f}else if(e.order==="YXZ"){const m=f*x,_=f*g,M=p*x,T=p*g;t[0]=m+T*d,t[4]=M*d-_,t[8]=c*p,t[1]=c*g,t[5]=c*x,t[9]=-d,t[2]=_*d-M,t[6]=T+m*d,t[10]=c*f}else if(e.order==="ZXY"){const m=f*x,_=f*g,M=p*x,T=p*g;t[0]=m-T*d,t[4]=-c*g,t[8]=M+_*d,t[1]=_+M*d,t[5]=c*x,t[9]=T-m*d,t[2]=-c*p,t[6]=d,t[10]=c*f}else if(e.order==="ZYX"){const m=c*x,_=c*g,M=d*x,T=d*g;t[0]=f*x,t[4]=M*p-_,t[8]=m*p+T,t[1]=f*g,t[5]=T*p+m,t[9]=_*p-M,t[2]=-p,t[6]=d*f,t[10]=c*f}else if(e.order==="YZX"){const m=c*f,_=c*p,M=d*f,T=d*p;t[0]=f*x,t[4]=T-m*g,t[8]=M*g+_,t[1]=g,t[5]=c*x,t[9]=-d*x,t[2]=-p*x,t[6]=_*g+M,t[10]=m-T*g}else if(e.order==="XZY"){const m=c*f,_=c*p,M=d*f,T=d*p;t[0]=f*x,t[4]=-g,t[8]=p*x,t[1]=m*g+T,t[5]=c*x,t[9]=_*g-M,t[2]=M*g-_,t[6]=d*x,t[10]=T*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lx,e,Ix)}lookAt(e,t,i){const a=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Ur.crossVectors(i,ri),Ur.lengthSq()===0&&(Math.abs(i.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Ur.crossVectors(i,ri)),Ur.normalize(),kl.crossVectors(ri,Ur),a[0]=Ur.x,a[4]=kl.x,a[8]=ri.x,a[1]=Ur.y,a[5]=kl.y,a[9]=ri.y,a[2]=Ur.z,a[6]=kl.z,a[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,c=i[0],d=i[4],f=i[8],p=i[12],x=i[1],g=i[5],m=i[9],_=i[13],M=i[2],T=i[6],S=i[10],y=i[14],N=i[3],F=i[7],b=i[11],C=i[15],P=a[0],I=a[4],w=a[8],L=a[12],V=a[1],z=a[5],q=a[9],oe=a[13],fe=a[2],Z=a[6],ue=a[10],$=a[14],Y=a[3],le=a[7],ce=a[11],O=a[15];return o[0]=c*P+d*V+f*fe+p*Y,o[4]=c*I+d*z+f*Z+p*le,o[8]=c*w+d*q+f*ue+p*ce,o[12]=c*L+d*oe+f*$+p*O,o[1]=x*P+g*V+m*fe+_*Y,o[5]=x*I+g*z+m*Z+_*le,o[9]=x*w+g*q+m*ue+_*ce,o[13]=x*L+g*oe+m*$+_*O,o[2]=M*P+T*V+S*fe+y*Y,o[6]=M*I+T*z+S*Z+y*le,o[10]=M*w+T*q+S*ue+y*ce,o[14]=M*L+T*oe+S*$+y*O,o[3]=N*P+F*V+b*fe+C*Y,o[7]=N*I+F*z+b*Z+C*le,o[11]=N*w+F*q+b*ue+C*ce,o[15]=N*L+F*oe+b*$+C*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[12],c=e[1],d=e[5],f=e[9],p=e[13],x=e[2],g=e[6],m=e[10],_=e[14],M=e[3],T=e[7],S=e[11],y=e[15],N=f*_-p*m,F=d*_-p*g,b=d*m-f*g,C=c*_-p*x,P=c*m-f*x,I=c*g-d*x;return t*(T*N-S*F+y*b)-i*(M*N-S*C+y*P)+a*(M*F-T*C+y*I)-o*(M*b-T*P+S*I)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[1],c=e[5],d=e[9],f=e[2],p=e[6],x=e[10];return t*(c*x-d*p)-i*(o*x-d*f)+a*(o*p-c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],d=e[5],f=e[6],p=e[7],x=e[8],g=e[9],m=e[10],_=e[11],M=e[12],T=e[13],S=e[14],y=e[15],N=t*d-i*c,F=t*f-a*c,b=t*p-o*c,C=i*f-a*d,P=i*p-o*d,I=a*p-o*f,w=x*T-g*M,L=x*S-m*M,V=x*y-_*M,z=g*S-m*T,q=g*y-_*T,oe=m*y-_*S,fe=N*oe-F*q+b*z+C*V-P*L+I*w;if(fe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/fe;return e[0]=(d*oe-f*q+p*z)*Z,e[1]=(a*q-i*oe-o*z)*Z,e[2]=(T*I-S*P+y*C)*Z,e[3]=(m*P-g*I-_*C)*Z,e[4]=(f*V-c*oe-p*L)*Z,e[5]=(t*oe-a*V+o*L)*Z,e[6]=(S*b-M*I-y*F)*Z,e[7]=(x*I-m*b+_*F)*Z,e[8]=(c*q-d*V+p*w)*Z,e[9]=(i*V-t*q-o*w)*Z,e[10]=(M*P-T*b+y*N)*Z,e[11]=(g*b-x*P-_*N)*Z,e[12]=(d*L-c*z-f*w)*Z,e[13]=(t*z-i*L+a*w)*Z,e[14]=(T*F-M*C-S*N)*Z,e[15]=(x*C-g*F+m*N)*Z,this}scale(e){const t=this.elements,i=e.x,a=e.y,o=e.z;return t[0]*=i,t[4]*=a,t[8]*=o,t[1]*=i,t[5]*=a,t[9]*=o,t[2]*=i,t[6]*=a,t[10]*=o,t[3]*=i,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),o=1-i,c=e.x,d=e.y,f=e.z,p=o*c,x=o*d;return this.set(p*c+i,p*d-a*f,p*f+a*d,0,p*d+a*f,x*d+i,x*f-a*c,0,p*f-a*d,x*f+a*c,o*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,o,c){return this.set(1,i,o,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,o=t._x,c=t._y,d=t._z,f=t._w,p=o+o,x=c+c,g=d+d,m=o*p,_=o*x,M=o*g,T=c*x,S=c*g,y=d*g,N=f*p,F=f*x,b=f*g,C=i.x,P=i.y,I=i.z;return a[0]=(1-(T+y))*C,a[1]=(_+b)*C,a[2]=(M-F)*C,a[3]=0,a[4]=(_-b)*P,a[5]=(1-(m+y))*P,a[6]=(S+N)*P,a[7]=0,a[8]=(M+F)*I,a[9]=(S-N)*I,a[10]=(1-(m+T))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const o=this.determinantAffine();if(o===0)return i.set(1,1,1),t.identity(),this;let c=Qs.set(a[0],a[1],a[2]).length();const d=Qs.set(a[4],a[5],a[6]).length(),f=Qs.set(a[8],a[9],a[10]).length();o<0&&(c=-c),Ri.copy(this);const p=1/c,x=1/d,g=1/f;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=x,Ri.elements[5]*=x,Ri.elements[6]*=x,Ri.elements[8]*=g,Ri.elements[9]*=g,Ri.elements[10]*=g,t.setFromRotationMatrix(Ri),i.x=c,i.y=d,i.z=f,this}makePerspective(e,t,i,a,o,c,d=Xi,f=!1){const p=this.elements,x=2*o/(t-e),g=2*o/(i-a),m=(t+e)/(t-e),_=(i+a)/(i-a);let M,T;if(f)M=o/(c-o),T=c*o/(c-o);else if(d===Xi)M=-(c+o)/(c-o),T=-2*c*o/(c-o);else if(d===Co)M=-c/(c-o),T=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=m,p[12]=0,p[1]=0,p[5]=g,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,i,a,o,c,d=Xi,f=!1){const p=this.elements,x=2/(t-e),g=2/(i-a),m=-(t+e)/(t-e),_=-(i+a)/(i-a);let M,T;if(f)M=1/(c-o),T=c/(c-o);else if(d===Xi)M=-2/(c-o),T=-(c+o)/(c-o);else if(d===Co)M=-1/(c-o),T=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=m,p[1]=0,p[5]=g,p[9]=0,p[13]=_,p[2]=0,p[6]=0,p[10]=M,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ac.prototype.isMatrix4=!0;let Gt=Ac;const Qs=new j,Ri=new Gt,Lx=new j(0,0,0),Ix=new j(1,1,1),Ur=new j,kl=new j,ri=new j,l0=new Gt,c0=new wa;class $r{constructor(e=0,t=0,i=0,a=$r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,o=a[0],c=a[4],d=a[8],f=a[1],p=a[5],x=a[9],g=a[2],m=a[6],_=a[10];switch(t){case"XYZ":this._y=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,_),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(m,p),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,_),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(wt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,_),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-wt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(d,_));break;case"XZY":this._z=Math.asin(-wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,p),this._y=Math.atan2(d,o)):(this._x=Math.atan2(-x,_),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return l0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(l0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return c0.setFromEuler(this),this.setFromQuaternion(c0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$r.DEFAULT_ORDER="XYZ";class Lg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dx=0;const u0=new j,js=new wa,rr=new Gt,zl=new j,fo=new j,Nx=new j,Ux=new wa,d0=new j(1,0,0),f0=new j(0,1,0),h0=new j(0,0,1),p0={type:"added"},Fx={type:"removed"},ea={type:"childadded",child:null},Ed={type:"childremoved",child:null};class hn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new j,t=new $r,i=new wa,a=new j(1,1,1);function o(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Gt},normalMatrix:{value:new pt}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(d0,e)}rotateY(e){return this.rotateOnAxis(f0,e)}rotateZ(e){return this.rotateOnAxis(h0,e)}translateOnAxis(e,t){return u0.copy(e).applyQuaternion(this.quaternion),this.position.add(u0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(d0,e)}translateY(e){return this.translateOnAxis(f0,e)}translateZ(e){return this.translateOnAxis(h0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zl.copy(e):zl.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(fo,zl,this.up):rr.lookAt(zl,fo,this.up),this.quaternion.setFromRotationMatrix(rr),a&&(rr.extractRotation(a.matrixWorld),js.setFromRotationMatrix(rr),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(p0),ea.child=e,this.dispatchEvent(ea),ea.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fx),Ed.child=e,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(p0),ea.child=e,this.dispatchEvent(ea),ea.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,e,Nx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,Ux,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,a=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*a,o[13]+=i-o[1]*t-o[5]*i-o[9]*a,o[14]+=a-o[2]*t-o[6]*i-o[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let p=0,x=f.length;p<x;p++){const g=f[p];o(e.shapes,g)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,p=this.material.length;f<p;f++)d.push(o(e.materials,this.material[f]));a.material=d}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];a.animations.push(o(e.animations,f))}}if(t){const d=c(e.geometries),f=c(e.materials),p=c(e.textures),x=c(e.images),g=c(e.shapes),m=c(e.skeletons),_=c(e.animations),M=c(e.nodes);d.length>0&&(i.geometries=d),f.length>0&&(i.materials=f),p.length>0&&(i.textures=p),x.length>0&&(i.images=x),g.length>0&&(i.shapes=g),m.length>0&&(i.skeletons=m),_.length>0&&(i.animations=_),M.length>0&&(i.nodes=M)}return i.object=a,i;function c(d){const f=[];for(const p in d){const x=d[p];delete x.metadata,f.push(x)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}hn.DEFAULT_UP=new j(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hn extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ox={type:"move"};class wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,o=null,c=null;const d=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,i),y=this._getHandJoint(p,T);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],m=x.position.distanceTo(g.position),_=.02,M=.005;p.inputState.pinching&&m>_+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&m<=_-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Ox)))}return d!==null&&(d.visible=a!==null),f!==null&&(f.visible=o!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Hn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Ig={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},Bl={h:0,s:0,l:0};function Td(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class vt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Et.workingColorSpace){if(e=wx(e,1),t=wt(t,0,1),i=wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,c=2*i-o;this.r=Td(c,o,e+1/3),this.g=Td(c,o,e),this.b=Td(c,o,e-1/3)}return Et.colorSpaceToWorking(this,a),this}setStyle(e,t=Nn){function i(o){o!==void 0&&parseFloat(o)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nn){const i=Ig[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return Et.workingToColorSpace(Dn.copy(this),e),Math.round(wt(Dn.r*255,0,255))*65536+Math.round(wt(Dn.g*255,0,255))*256+Math.round(wt(Dn.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(Dn.copy(this),t);const i=Dn.r,a=Dn.g,o=Dn.b,c=Math.max(i,a,o),d=Math.min(i,a,o);let f,p;const x=(d+c)/2;if(d===c)f=0,p=0;else{const g=c-d;switch(p=x<=.5?g/(c+d):g/(2-c-d),c){case i:f=(a-o)/g+(a<o?6:0);break;case a:f=(o-i)/g+2;break;case o:f=(i-a)/g+4;break}f/=6}return e.h=f,e.s=p,e.l=x,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Nn){Et.workingToColorSpace(Dn.copy(this),e);const t=Dn.r,i=Dn.g,a=Dn.b;return e!==Nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(Fr),this.setHSL(Fr.h+e,Fr.s+t,Fr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fr),e.getHSL(Bl);const i=_d(Fr.h,Bl.h,t),a=_d(Fr.s,Bl.s,t),o=_d(Fr.l,Bl.l,t);return this.setHSL(i,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*a,this.g=o[1]*t+o[4]*i+o[7]*a,this.b=o[2]*t+o[5]*i+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new vt;vt.NAMES=Ig;class kx extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $r,this.environmentIntensity=1,this.environmentRotation=new $r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bi=new j,sr=new j,Ad=new j,ar=new j,ta=new j,na=new j,m0=new j,Rd=new j,bd=new j,Cd=new j,Pd=new rn,Ld=new rn,Id=new rn;class gi{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),bi.subVectors(e,t),a.cross(bi);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,i,a,o){bi.subVectors(a,t),sr.subVectors(i,t),Ad.subVectors(e,t);const c=bi.dot(bi),d=bi.dot(sr),f=bi.dot(Ad),p=sr.dot(sr),x=sr.dot(Ad),g=c*p-d*d;if(g===0)return o.set(0,0,0),null;const m=1/g,_=(p*f-d*x)*m,M=(c*x-d*f)*m;return o.set(1-_-M,M,_)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,t,i,a,o,c,d,f){return this.getBarycoord(e,t,i,a,ar)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,ar.x),f.addScaledVector(c,ar.y),f.addScaledVector(d,ar.z),f)}static getInterpolatedAttribute(e,t,i,a,o,c){return Pd.setScalar(0),Ld.setScalar(0),Id.setScalar(0),Pd.fromBufferAttribute(e,t),Ld.fromBufferAttribute(e,i),Id.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Pd,o.x),c.addScaledVector(Ld,o.y),c.addScaledVector(Id,o.z),c}static isFrontFacing(e,t,i,a){return bi.subVectors(i,t),sr.subVectors(e,t),bi.cross(sr).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),bi.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,o){return gi.getInterpolation(e,this.a,this.b,this.c,t,i,a,o)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,o=this.c;let c,d;ta.subVectors(a,i),na.subVectors(o,i),Rd.subVectors(e,i);const f=ta.dot(Rd),p=na.dot(Rd);if(f<=0&&p<=0)return t.copy(i);bd.subVectors(e,a);const x=ta.dot(bd),g=na.dot(bd);if(x>=0&&g<=x)return t.copy(a);const m=f*g-x*p;if(m<=0&&f>=0&&x<=0)return c=f/(f-x),t.copy(i).addScaledVector(ta,c);Cd.subVectors(e,o);const _=ta.dot(Cd),M=na.dot(Cd);if(M>=0&&_<=M)return t.copy(o);const T=_*p-f*M;if(T<=0&&p>=0&&M<=0)return d=p/(p-M),t.copy(i).addScaledVector(na,d);const S=x*M-_*g;if(S<=0&&g-x>=0&&_-M>=0)return m0.subVectors(o,a),d=(g-x)/(g-x+(_-M)),t.copy(a).addScaledVector(m0,d);const y=1/(S+T+m);return c=T*y,d=m*y,t.copy(i).addScaledVector(ta,c).addScaledVector(na,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ts{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=o.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Ci):Ci.fromBufferAttribute(o,c),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vl.copy(i.boundingBox)),Vl.applyMatrix4(e.matrixWorld),this.union(Vl)}const a=e.children;for(let o=0,c=a.length;o<c;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ho),Hl.subVectors(this.max,ho),ia.subVectors(e.a,ho),ra.subVectors(e.b,ho),sa.subVectors(e.c,ho),Or.subVectors(ra,ia),kr.subVectors(sa,ra),hs.subVectors(ia,sa);let t=[0,-Or.z,Or.y,0,-kr.z,kr.y,0,-hs.z,hs.y,Or.z,0,-Or.x,kr.z,0,-kr.x,hs.z,0,-hs.x,-Or.y,Or.x,0,-kr.y,kr.x,0,-hs.y,hs.x,0];return!Dd(t,ia,ra,sa,Hl)||(t=[1,0,0,0,1,0,0,0,1],!Dd(t,ia,ra,sa,Hl))?!1:(Gl.crossVectors(Or,kr),t=[Gl.x,Gl.y,Gl.z],Dd(t,ia,ra,sa,Hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const or=[new j,new j,new j,new j,new j,new j,new j,new j],Ci=new j,Vl=new Ts,ia=new j,ra=new j,sa=new j,Or=new j,kr=new j,hs=new j,ho=new j,Hl=new j,Gl=new j,ps=new j;function Dd(s,e,t,i,a){for(let o=0,c=s.length-3;o<=c;o+=3){ps.fromArray(s,o);const d=a.x*Math.abs(ps.x)+a.y*Math.abs(ps.y)+a.z*Math.abs(ps.z),f=e.dot(ps),p=t.dot(ps),x=i.dot(ps);if(Math.max(-Math.max(f,p,x),Math.min(f,p,x))>d)return!1}return!0}const fn=new j,Wl=new dt;let zx=0;class vi extends ws{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xf,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wl.fromBufferAttribute(this,t),Wl.applyMatrix3(e),this.setXY(t,Wl.x,Wl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),a=Bt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),a=Bt(a,this.array),o=Bt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Dg extends vi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ng extends vi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Gn extends vi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Bx=new Ts,po=new j,Nd=new j;class Io{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Bx.setFromPoints(e).getCenter(i);let a=0;for(let o=0,c=e.length;o<c;o++)a=Math.max(a,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;po.subVectors(e,this.center);const t=po.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(po,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(po.copy(e.center).add(Nd)),this.expandByPoint(po.copy(e.center).sub(Nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Vx=0;const pi=new Gt,Ud=new hn,aa=new j,si=new Ts,mo=new Ts,Mn=new j;class _i extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yx(e)?Ng:Dg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new pt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,i){return pi.makeTranslation(e,t,i),this.applyMatrix4(pi),this}scale(e,t,i){return pi.makeScale(e,t,i),this.applyMatrix4(pi),this}lookAt(e){return Ud.lookAt(e),Ud.updateMatrix(),this.applyMatrix4(Ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(aa).negate(),this.translate(aa.x,aa.y,aa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,o=e.length;a<o;a++){const c=e[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Gn(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];si.setFromBufferAttribute(o),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const d=t[o];mo.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(si.min,mo.min),si.expandByPoint(Mn),Mn.addVectors(si.max,mo.max),si.expandByPoint(Mn)):(si.expandByPoint(mo.min),si.expandByPoint(mo.max))}si.getCenter(i);let a=0;for(let o=0,c=e.count;o<c;o++)Mn.fromBufferAttribute(e,o),a=Math.max(a,i.distanceToSquared(Mn));if(t)for(let o=0,c=t.length;o<c;o++){const d=t[o],f=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)Mn.fromBufferAttribute(d,p),f&&(aa.fromBufferAttribute(e,p),Mn.add(aa)),a=Math.max(a,i.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,o=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new vi(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));const d=[],f=[];for(let w=0;w<i.count;w++)d[w]=new j,f[w]=new j;const p=new j,x=new j,g=new j,m=new dt,_=new dt,M=new dt,T=new j,S=new j;function y(w,L,V){p.fromBufferAttribute(i,w),x.fromBufferAttribute(i,L),g.fromBufferAttribute(i,V),m.fromBufferAttribute(o,w),_.fromBufferAttribute(o,L),M.fromBufferAttribute(o,V),x.sub(p),g.sub(p),_.sub(m),M.sub(m);const z=1/(_.x*M.y-M.x*_.y);isFinite(z)&&(T.copy(x).multiplyScalar(M.y).addScaledVector(g,-_.y).multiplyScalar(z),S.copy(g).multiplyScalar(_.x).addScaledVector(x,-M.x).multiplyScalar(z),d[w].add(T),d[L].add(T),d[V].add(T),f[w].add(S),f[L].add(S),f[V].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let w=0,L=N.length;w<L;++w){const V=N[w],z=V.start,q=V.count;for(let oe=z,fe=z+q;oe<fe;oe+=3)y(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const F=new j,b=new j,C=new j,P=new j;function I(w){C.fromBufferAttribute(a,w),P.copy(C);const L=d[w];F.copy(L),F.sub(C.multiplyScalar(C.dot(L))).normalize(),b.crossVectors(P,L);const z=b.dot(f[w])<0?-1:1;c.setXYZW(w,F.x,F.y,F.z,z)}for(let w=0,L=N.length;w<L;++w){const V=N[w],z=V.start,q=V.count;for(let oe=z,fe=z+q;oe<fe;oe+=3)I(e.getX(oe+0)),I(e.getX(oe+1)),I(e.getX(oe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new vi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,_=i.count;m<_;m++)i.setXYZ(m,0,0,0);const a=new j,o=new j,c=new j,d=new j,f=new j,p=new j,x=new j,g=new j;if(e)for(let m=0,_=e.count;m<_;m+=3){const M=e.getX(m+0),T=e.getX(m+1),S=e.getX(m+2);a.fromBufferAttribute(t,M),o.fromBufferAttribute(t,T),c.fromBufferAttribute(t,S),x.subVectors(c,o),g.subVectors(a,o),x.cross(g),d.fromBufferAttribute(i,M),f.fromBufferAttribute(i,T),p.fromBufferAttribute(i,S),d.add(x),f.add(x),p.add(x),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(T,f.x,f.y,f.z),i.setXYZ(S,p.x,p.y,p.z)}else for(let m=0,_=t.count;m<_;m+=3)a.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),x.subVectors(c,o),g.subVectors(a,o),x.cross(g),i.setXYZ(m+0,x.x,x.y,x.z),i.setXYZ(m+1,x.x,x.y,x.z),i.setXYZ(m+2,x.x,x.y,x.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(d,f){const p=d.array,x=d.itemSize,g=d.normalized,m=new p.constructor(f.length*x);let _=0,M=0;for(let T=0,S=f.length;T<S;T++){d.isInterleavedBufferAttribute?_=f[T]*d.data.stride+d.offset:_=f[T]*x;for(let y=0;y<x;y++)m[M++]=p[_++]}return new vi(m,x,g)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _i,i=this.index.array,a=this.attributes;for(const d in a){const f=a[d],p=e(f,i);t.setAttribute(d,p)}const o=this.morphAttributes;for(const d in o){const f=[],p=o[d];for(let x=0,g=p.length;x<g;x++){const m=p[x],_=e(m,i);f.push(_)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,f=c.length;d<f;d++){const p=c[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const p=i[f];e.data.attributes[f]=p.toJSON(e.data)}const a={};let o=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],x=[];for(let g=0,m=p.length;g<m;g++){const _=p[g];x.push(_.toJSON(e.data))}x.length>0&&(a[f]=x,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const p in a){const x=a[p];this.setAttribute(p,x.clone(t))}const o=e.morphAttributes;for(const p in o){const x=[],g=o[p];for(let m=0,_=g.length;m<_;m++)x.push(g[m].clone(t));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,x=c.length;p<x;p++){const g=c[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xf,this.updateRanges=[],this.version=0,this.uuid=Wr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,o=this.stride;a<o;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new j;class wc{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix4(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.applyNormalMatrix(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.transformDirection(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),a=Bt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),a=Bt(a,this.array),o=Bt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=o,this}clone(e){if(e===void 0){Ec("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return new vi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ec("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Gx=0;class Ta extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=ga,this.side=Yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rf,this.blendDst=sf,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=n0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ga&&(i.blending=this.blending),this.side!==Yr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rf&&(i.blendSrc=this.blendSrc),this.blendDst!==sf&&(i.blendDst=this.blendDst),this.blendEquation!==_s&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ya&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==n0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const c=[];for(const d in o){const f=o[d];delete f.metadata,c.push(f)}return c}if(t){const o=a(e.textures),c=a(e.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new vt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new dt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new dt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bc extends Ta{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let oa;const go=new j,la=new j,ca=new j,ua=new dt,vo=new dt,Ug=new Gt,Xl=new j,_o=new j,ql=new j,g0=new dt,Fd=new dt,v0=new dt;class hh extends hn{constructor(e=new bc){if(super(),this.isSprite=!0,this.type="Sprite",oa===void 0){oa=new _i;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Hx(t,5);oa.setIndex([0,1,2,0,2,3]),oa.setAttribute("position",new wc(i,3,0,!1)),oa.setAttribute("uv",new wc(i,2,3,!1))}this.geometry=oa,this.material=e,this.center=new dt(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Rt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),la.setFromMatrixScale(this.matrixWorld),Ug.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ca.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&la.multiplyScalar(-ca.z);const i=this.material.rotation;let a,o;i!==0&&(o=Math.cos(i),a=Math.sin(i));const c=this.center;Yl(Xl.set(-.5,-.5,0),ca,c,la,a,o),Yl(_o.set(.5,-.5,0),ca,c,la,a,o),Yl(ql.set(.5,.5,0),ca,c,la,a,o),g0.set(0,0),Fd.set(1,0),v0.set(1,1);let d=e.ray.intersectTriangle(Xl,_o,ql,!1,go);if(d===null&&(Yl(_o.set(-.5,.5,0),ca,c,la,a,o),Fd.set(0,1),d=e.ray.intersectTriangle(Xl,ql,_o,!1,go),d===null))return;const f=e.ray.origin.distanceTo(go);f<e.near||f>e.far||t.push({distance:f,point:go.clone(),uv:gi.getInterpolation(go,Xl,_o,ql,g0,Fd,v0,new dt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Yl(s,e,t,i,a,o){ua.subVectors(s,t).addScalar(.5).multiply(i),a!==void 0?(vo.x=o*ua.x-a*ua.y,vo.y=a*ua.x+o*ua.y):vo.copy(ua),s.copy(e),s.x+=vo.x,s.y+=vo.y,s.applyMatrix4(Ug)}const lr=new j,Od=new j,$l=new j,zr=new j,kd=new j,Kl=new j,zd=new j;class Wx{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,t),lr.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Od.copy(e).add(t).multiplyScalar(.5),$l.copy(t).sub(e).normalize(),zr.copy(this.origin).sub(Od);const o=e.distanceTo(t)*.5,c=-this.direction.dot($l),d=zr.dot(this.direction),f=-zr.dot($l),p=zr.lengthSq(),x=Math.abs(1-c*c);let g,m,_,M;if(x>0)if(g=c*f-d,m=c*d-f,M=o*x,g>=0)if(m>=-M)if(m<=M){const T=1/x;g*=T,m*=T,_=g*(g+c*m+2*d)+m*(c*g+m+2*f)+p}else m=o,g=Math.max(0,-(c*m+d)),_=-g*g+m*(m+2*f)+p;else m=-o,g=Math.max(0,-(c*m+d)),_=-g*g+m*(m+2*f)+p;else m<=-M?(g=Math.max(0,-(-c*o+d)),m=g>0?-o:Math.min(Math.max(-o,-f),o),_=-g*g+m*(m+2*f)+p):m<=M?(g=0,m=Math.min(Math.max(-o,-f),o),_=m*(m+2*f)+p):(g=Math.max(0,-(c*o+d)),m=g>0?o:Math.min(Math.max(-o,-f),o),_=-g*g+m*(m+2*f)+p);else m=c>0?-o:o,g=Math.max(0,-(c*m+d)),_=-g*g+m*(m+2*f)+p;return i&&i.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Od).addScaledVector($l,m),_}intersectSphere(e,t){lr.subVectors(e.center,this.origin);const i=lr.dot(this.direction),a=lr.dot(lr)-i*i,o=e.radius*e.radius;if(a>o)return null;const c=Math.sqrt(o-a),d=i-c,f=i+c;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,o,c,d,f;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,m=this.origin;return p>=0?(i=(e.min.x-m.x)*p,a=(e.max.x-m.x)*p):(i=(e.max.x-m.x)*p,a=(e.min.x-m.x)*p),x>=0?(o=(e.min.y-m.y)*x,c=(e.max.y-m.y)*x):(o=(e.max.y-m.y)*x,c=(e.min.y-m.y)*x),i>c||o>a||((o>i||isNaN(i))&&(i=o),(c<a||isNaN(a))&&(a=c),g>=0?(d=(e.min.z-m.z)*g,f=(e.max.z-m.z)*g):(d=(e.max.z-m.z)*g,f=(e.min.z-m.z)*g),i>f||d>a)||((d>i||i!==i)&&(i=d),(f<a||a!==a)&&(a=f),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,t,i,a,o){kd.subVectors(t,e),Kl.subVectors(i,e),zd.crossVectors(kd,Kl);let c=this.direction.dot(zd),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;zr.subVectors(this.origin,e);const f=d*this.direction.dot(Kl.crossVectors(zr,Kl));if(f<0)return null;const p=d*this.direction.dot(kd.cross(zr));if(p<0||f+p>c)return null;const x=-d*zr.dot(zd);return x<0?null:this.at(x/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xr extends Ta{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _0=new Gt,ms=new Wx,Zl=new Io,x0=new j,Jl=new j,Ql=new j,jl=new j,Bd=new j,ec=new j,y0=new j,tc=new j;class Ne extends hn{constructor(e=new _i,t=new Xr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const d=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(o&&d){ec.set(0,0,0);for(let f=0,p=o.length;f<p;f++){const x=d[f],g=o[f];x!==0&&(Bd.fromBufferAttribute(g,e),c?ec.addScaledVector(Bd,x):ec.addScaledVector(Bd.sub(t),x))}t.add(ec)}return t}raycast(e,t){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(o),ms.copy(e.ray).recast(e.near),!(Zl.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Zl,x0)===null||ms.origin.distanceToSquared(x0)>(e.far-e.near)**2))&&(_0.copy(o).invert(),ms.copy(e.ray).applyMatrix4(_0),!(i.boundingBox!==null&&ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,i){let a;const o=this.geometry,c=this.material,d=o.index,f=o.attributes.position,p=o.attributes.uv,x=o.attributes.uv1,g=o.attributes.normal,m=o.groups,_=o.drawRange;if(d!==null)if(Array.isArray(c))for(let M=0,T=m.length;M<T;M++){const S=m[M],y=c[S.materialIndex],N=Math.max(S.start,_.start),F=Math.min(d.count,Math.min(S.start+S.count,_.start+_.count));for(let b=N,C=F;b<C;b+=3){const P=d.getX(b),I=d.getX(b+1),w=d.getX(b+2);a=nc(this,y,e,i,p,x,g,P,I,w),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,_.start),T=Math.min(d.count,_.start+_.count);for(let S=M,y=T;S<y;S+=3){const N=d.getX(S),F=d.getX(S+1),b=d.getX(S+2);a=nc(this,c,e,i,p,x,g,N,F,b),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,T=m.length;M<T;M++){const S=m[M],y=c[S.materialIndex],N=Math.max(S.start,_.start),F=Math.min(f.count,Math.min(S.start+S.count,_.start+_.count));for(let b=N,C=F;b<C;b+=3){const P=b,I=b+1,w=b+2;a=nc(this,y,e,i,p,x,g,P,I,w),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,_.start),T=Math.min(f.count,_.start+_.count);for(let S=M,y=T;S<y;S+=3){const N=S,F=S+1,b=S+2;a=nc(this,c,e,i,p,x,g,N,F,b),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function Xx(s,e,t,i,a,o,c,d){let f;if(e.side===Qn?f=i.intersectTriangle(c,o,a,!0,d):f=i.intersectTriangle(a,o,c,e.side===Yr,d),f===null)return null;tc.copy(d),tc.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(tc);return p<t.near||p>t.far?null:{distance:p,point:tc.clone(),object:s}}function nc(s,e,t,i,a,o,c,d,f,p){s.getVertexPosition(d,Jl),s.getVertexPosition(f,Ql),s.getVertexPosition(p,jl);const x=Xx(s,e,t,i,Jl,Ql,jl,y0);if(x){const g=new j;gi.getBarycoord(y0,Jl,Ql,jl,g),a&&(x.uv=gi.getInterpolatedAttribute(a,d,f,p,g,new dt)),o&&(x.uv1=gi.getInterpolatedAttribute(o,d,f,p,g,new dt)),c&&(x.normal=gi.getInterpolatedAttribute(c,d,f,p,g,new j),x.normal.dot(i.direction)>0&&x.normal.multiplyScalar(-1));const m={a:d,b:f,c:p,normal:new j,materialIndex:0};gi.getNormal(Jl,Ql,jl,m.normal),x.face=m,x.barycoord=g}return x}class Fg extends Fn{constructor(e=null,t=1,i=1,a,o,c,d,f,p=ln,x=ln,g,m){super(null,c,d,f,p,x,a,o,g,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class S0 extends vi{constructor(e,t,i,a=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const da=new Gt,M0=new Gt,ic=[],E0=new Ts,qx=new Gt,xo=new Ne,yo=new Io;class Vd extends Ne{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new S0(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<i;a++)this.setMatrixAt(a,qx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ts),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,da),E0.copy(e.boundingBox).applyMatrix4(da),this.boundingBox.union(E0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Io),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,da),yo.copy(e.boundingSphere).applyMatrix4(da),this.boundingSphere.union(yo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,a=this.morphTexture.source.data.data,o=i.length+1,c=e*o+1;for(let d=0;d<i.length;d++)i[d]=a[c+d]}raycast(e,t){const i=this.matrixWorld,a=this.count;if(xo.geometry=this.geometry,xo.material=this.material,xo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yo.copy(this.boundingSphere),yo.applyMatrix4(i),e.ray.intersectsSphere(yo)!==!1))for(let o=0;o<a;o++){this.getMatrixAt(o,da),M0.multiplyMatrices(i,da),xo.matrixWorld=M0,xo.raycast(e,ic);for(let c=0,d=ic.length;c<d;c++){const f=ic[c];f.instanceId=o,f.object=this,t.push(f)}ic.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new S0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,a=i.length+1;this.morphTexture===null&&(this.morphTexture=new Fg(new Float32Array(a*this.count),a,this.count,ah,Ii));const o=this.morphTexture.source.data.data;let c=0;for(let p=0;p<i.length;p++)c+=i[p];const d=this.geometry.morphTargetsRelative?1:1-c,f=a*e;return o[f]=d,o.set(i,f+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Hd=new j,Yx=new j,$x=new pt;class vs{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Hd.subVectors(i,t).cross(Yx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const a=e.delta(Hd),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||$x.getNormalMatrix(e),a=this.coplanarPoint(Hd).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new Io,Kx=new dt(.5,.5),rc=new j;class ph{constructor(e=new vs,t=new vs,i=new vs,a=new vs,o=new vs,c=new vs){this.planes=[e,t,i,a,o,c]}set(e,t,i,a,o,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(i),d[3].copy(a),d[4].copy(o),d[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xi,i=!1){const a=this.planes,o=e.elements,c=o[0],d=o[1],f=o[2],p=o[3],x=o[4],g=o[5],m=o[6],_=o[7],M=o[8],T=o[9],S=o[10],y=o[11],N=o[12],F=o[13],b=o[14],C=o[15];if(a[0].setComponents(p-c,_-x,y-M,C-N).normalize(),a[1].setComponents(p+c,_+x,y+M,C+N).normalize(),a[2].setComponents(p+d,_+g,y+T,C+F).normalize(),a[3].setComponents(p-d,_-g,y-T,C-F).normalize(),i)a[4].setComponents(f,m,S,b).normalize(),a[5].setComponents(p-f,_-m,y-S,C-b).normalize();else if(a[4].setComponents(p-f,_-m,y-S,C-b).normalize(),t===Xi)a[5].setComponents(p+f,_+m,y+S,C+b).normalize();else if(t===Co)a[5].setComponents(f,m,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){gs.center.set(0,0,0);const t=Kx.distanceTo(e.center);return gs.radius=.7071067811865476+t,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(rc.x=a.normal.x>0?e.max.x:e.min.x,rc.y=a.normal.y>0?e.max.y:e.min.y,rc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(rc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Og extends Fn{constructor(e=[],t=Ms,i,a,o,c,d,f,p,x){super(e,t,i,a,o,c,d,f,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mh extends Fn{constructor(e,t,i,a,o,c,d,f,p){super(e,t,i,a,o,c,d,f,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ma extends Fn{constructor(e,t,i=Yi,a,o,c,d=ln,f=ln,p,x=mr,g=1){if(x!==mr&&x!==Ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:g};super(m,a,o,c,d,f,x,i,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Zx extends Ma{constructor(e,t=Yi,i=Ms,a,o,c=ln,d=ln,f,p=mr){const x={width:e,height:e,depth:1},g=[x,x,x,x,x,x];super(e,e,t,i,a,o,c,d,f,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class kg extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Aa extends _i{constructor(e=1,t=1,i=1,a=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:o,depthSegments:c};const d=this;a=Math.floor(a),o=Math.floor(o),c=Math.floor(c);const f=[],p=[],x=[],g=[];let m=0,_=0;M("z","y","x",-1,-1,i,t,e,c,o,0),M("z","y","x",1,-1,i,t,-e,c,o,1),M("x","z","y",1,1,e,i,t,a,c,2),M("x","z","y",1,-1,e,i,-t,a,c,3),M("x","y","z",1,-1,e,t,i,a,o,4),M("x","y","z",-1,-1,e,t,-i,a,o,5),this.setIndex(f),this.setAttribute("position",new Gn(p,3)),this.setAttribute("normal",new Gn(x,3)),this.setAttribute("uv",new Gn(g,2));function M(T,S,y,N,F,b,C,P,I,w,L){const V=b/I,z=C/w,q=b/2,oe=C/2,fe=P/2,Z=I+1,ue=w+1;let $=0,Y=0;const le=new j;for(let ce=0;ce<ue;ce++){const O=ce*z-oe;for(let J=0;J<Z;J++){const ke=J*V-q;le[T]=ke*N,le[S]=O*F,le[y]=fe,p.push(le.x,le.y,le.z),le[T]=0,le[S]=0,le[y]=P>0?1:-1,x.push(le.x,le.y,le.z),g.push(J/I),g.push(1-ce/w),$+=1}}for(let ce=0;ce<w;ce++)for(let O=0;O<I;O++){const J=m+O+Z*ce,ke=m+O+Z*(ce+1),je=m+(O+1)+Z*(ce+1),Xe=m+(O+1)+Z*ce;f.push(J,ke,Xe),f.push(ke,je,Xe),Y+=6}d.addGroup(_,Y,L),_+=Y,m+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class gh extends _i{constructor(e=1,t=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:a},t=Math.max(3,t);const o=[],c=[],d=[],f=[],p=new j,x=new dt;c.push(0,0,0),d.push(0,0,1),f.push(.5,.5);for(let g=0,m=3;g<=t;g++,m+=3){const _=i+g/t*a;p.x=e*Math.cos(_),p.y=e*Math.sin(_),c.push(p.x,p.y,p.z),d.push(0,0,1),x.x=(c[m]/e+1)/2,x.y=(c[m+1]/e+1)/2,f.push(x.x,x.y)}for(let g=1;g<=t;g++)o.push(g,g+1,0);this.setIndex(o),this.setAttribute("position",new Gn(c,3)),this.setAttribute("normal",new Gn(d,3)),this.setAttribute("uv",new Gn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class vh extends _i{constructor(e=1,t=1,i=1,a=32,o=1,c=!1,d=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:d,thetaLength:f};const p=this;a=Math.floor(a),o=Math.floor(o);const x=[],g=[],m=[],_=[];let M=0;const T=[],S=i/2;let y=0;N(),c===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(x),this.setAttribute("position",new Gn(g,3)),this.setAttribute("normal",new Gn(m,3)),this.setAttribute("uv",new Gn(_,2));function N(){const b=new j,C=new j;let P=0;const I=(t-e)/i;for(let w=0;w<=o;w++){const L=[],V=w/o,z=V*(t-e)+e;for(let q=0;q<=a;q++){const oe=q/a,fe=oe*f+d,Z=Math.sin(fe),ue=Math.cos(fe);C.x=z*Z,C.y=-V*i+S,C.z=z*ue,g.push(C.x,C.y,C.z),b.set(Z,I,ue).normalize(),m.push(b.x,b.y,b.z),_.push(oe,1-V),L.push(M++)}T.push(L)}for(let w=0;w<a;w++)for(let L=0;L<o;L++){const V=T[L][w],z=T[L+1][w],q=T[L+1][w+1],oe=T[L][w+1];(e>0||L!==0)&&(x.push(V,z,oe),P+=3),(t>0||L!==o-1)&&(x.push(z,q,oe),P+=3)}p.addGroup(y,P,0),y+=P}function F(b){const C=M,P=new dt,I=new j;let w=0;const L=b===!0?e:t,V=b===!0?1:-1;for(let q=1;q<=a;q++)g.push(0,S*V,0),m.push(0,V,0),_.push(.5,.5),M++;const z=M;for(let q=0;q<=a;q++){const fe=q/a*f+d,Z=Math.cos(fe),ue=Math.sin(fe);I.x=L*ue,I.y=S*V,I.z=L*Z,g.push(I.x,I.y,I.z),m.push(0,V,0),P.x=Z*.5+.5,P.y=ue*.5*V+.5,_.push(P.x,P.y),M++}for(let q=0;q<a;q++){const oe=C+q,fe=z+q;b===!0?x.push(fe,fe+1,oe):x.push(fe+1,fe,oe),w+=3}p.addGroup(y,w,b===!0?1:2),y+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qr extends _i{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const o=e/2,c=t/2,d=Math.floor(i),f=Math.floor(a),p=d+1,x=f+1,g=e/d,m=t/f,_=[],M=[],T=[],S=[];for(let y=0;y<x;y++){const N=y*m-c;for(let F=0;F<p;F++){const b=F*g-o;M.push(b,-N,0),T.push(0,0,1),S.push(F/d),S.push(1-y/f)}}for(let y=0;y<f;y++)for(let N=0;N<d;N++){const F=N+p*y,b=N+p*(y+1),C=N+1+p*(y+1),P=N+1+p*y;_.push(F,b,P),_.push(b,C,P)}this.setIndex(_),this.setAttribute("position",new Gn(M,3)),this.setAttribute("normal",new Gn(T,3)),this.setAttribute("uv",new Gn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ea(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const a=s[t][i];if(w0(a))a.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(w0(a[0])){const o=[];for(let c=0,d=a.length;c<d;c++)o[c]=a[c].clone();e[t][i]=o}else e[t][i]=a.slice();else e[t][i]=a}}return e}function Vn(s){const e={};for(let t=0;t<s.length;t++){const i=Ea(s[t]);for(const a in i)e[a]=i[a]}return e}function w0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Jx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function zg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const Qx={clone:Ea,merge:Vn};var jx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Ta{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jx,this.fragmentShader=e1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ea(e.uniforms),this.uniformsGroups=Jx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=t[a.value]||null;break;case"c":this.uniforms[i].value=new vt().setHex(a.value);break;case"v2":this.uniforms[i].value=new dt().fromArray(a.value);break;case"v3":this.uniforms[i].value=new j().fromArray(a.value);break;case"v4":this.uniforms[i].value=new rn().fromArray(a.value);break;case"m3":this.uniforms[i].value=new pt().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Gt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class t1 extends $i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kt extends Ta{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wf,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=nh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class n1 extends Ta{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class i1 extends Ta{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _h extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class r1 extends _h{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Gd=new Gt,T0=new j,A0=new j;class Bg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ph,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;T0.setFromMatrixPosition(e.matrixWorld),t.position.copy(T0),A0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(A0),t.updateMatrixWorld(),Gd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Co||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const sc=new j,ac=new wa,Bi=new j;class Vg extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sc,ac,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sc,ac,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(sc,ac,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sc,ac,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Br=new j,R0=new dt,b0=new dt;class mi extends Vg{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qf*2*Math.atan(Math.tan(vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Br.x,Br.y).multiplyScalar(-e/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Br.x,Br.y).multiplyScalar(-e/Br.z)}getViewSize(e,t){return this.getViewBounds(e,R0,b0),t.subVectors(b0,R0)}setViewOffset(e,t,i,a,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vd*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,o=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,p=c.fullHeight;o+=c.offsetX*a/f,t-=c.offsetY*i/p,a*=c.width/f,i*=c.height/p}const d=this.filmOffset;d!==0&&(o+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class s1 extends Bg{constructor(){super(new mi(90,1,.5,500)),this.isPointLightShadow=!0}}class a1 extends _h{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new s1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Cc extends Vg{constructor(e=-1,t=1,i=1,a=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-e,c=i+e,d=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=p*this.view.offsetX,c=o+p*this.view.width,d-=x*this.view.offsetY,f=d-x*this.view.height}this.projectionMatrix.makeOrthographic(o,c,d,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class o1 extends Bg{constructor(){super(new Cc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class C0 extends _h{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new o1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const fa=-90,ha=1;class l1 extends hn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new mi(fa,ha,e,t);a.layers=this.layers,this.add(a);const o=new mi(fa,ha,e,t);o.layers=this.layers,this.add(o);const c=new mi(fa,ha,e,t);c.layers=this.layers,this.add(c);const d=new mi(fa,ha,e,t);d.layers=this.layers,this.add(d);const f=new mi(fa,ha,e,t);f.layers=this.layers,this.add(f);const p=new mi(fa,ha,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,o,c,d,f]=t;for(const p of t)this.remove(p);if(e===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Co)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,d,f,p,x]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,3,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(i,4,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,x),e.setRenderTarget(g,m,_),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class c1 extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const wh=class wh{constructor(e,t,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,a){const o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=a,this}};wh.prototype.isMatrix2=!0;let P0=wh;function L0(s,e,t,i){const a=u1(i);switch(t){case Rg:return s*e;case ah:return s*e/a.components*a.byteLength;case oh:return s*e/a.components*a.byteLength;case Es:return s*e*2/a.components*a.byteLength;case lh:return s*e*2/a.components*a.byteLength;case bg:return s*e*3/a.components*a.byteLength;case Di:return s*e*4/a.components*a.byteLength;case ch:return s*e*4/a.components*a.byteLength;case fc:case hc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pc:case mc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mf:case vf:return Math.max(s,16)*Math.max(e,8)/4;case pf:case gf:return Math.max(s,8)*Math.max(e,8)/2;case _f:case xf:case Sf:case Mf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yf:case _c:case Ef:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Af:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case bf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case If:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Df:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Uf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ff:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Of:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case kf:case zf:case Bf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Vf:case Hf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case xc:case Gf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function u1(s){switch(s){case ai:case Eg:return{byteLength:1,components:1};case Ro:case wg:case pr:return{byteLength:2,components:1};case rh:case sh:return{byteLength:2,components:4};case Yi:case ih:case Ii:return{byteLength:4,components:1};case Tg:case Ag:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:th}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=th);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hg(){let s=null,e=!1,t=null,i=null;function a(o,c){t(o,c),i=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){s=o}}}function d1(s){const e=new WeakMap;function t(d,f){const p=d.array,x=d.usage,g=p.byteLength,m=s.createBuffer();s.bindBuffer(f,m),s.bufferData(f,p,x),d.onUploadCallback();let _;if(p instanceof Float32Array)_=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)_=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?_=s.HALF_FLOAT:_=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)_=s.SHORT;else if(p instanceof Uint32Array)_=s.UNSIGNED_INT;else if(p instanceof Int32Array)_=s.INT;else if(p instanceof Int8Array)_=s.BYTE;else if(p instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:_,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function i(d,f,p){const x=f.array,g=f.updateRanges;if(s.bindBuffer(p,d),g.length===0)s.bufferSubData(p,0,x);else{g.sort((_,M)=>_.start-M.start);let m=0;for(let _=1;_<g.length;_++){const M=g[m],T=g[_];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++m,g[m]=T)}g.length=m+1;for(let _=0,M=g.length;_<M;_++){const T=g[_];s.bufferSubData(p,T.start*x.BYTES_PER_ELEMENT,x,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function o(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(s.deleteBuffer(f.buffer),e.delete(d))}function c(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(p.buffer,d,f),p.version=d.version}}return{get:a,remove:o,update:c}}var f1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h1=`#ifdef USE_ALPHAHASH
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
#endif`,p1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_1=`#ifdef USE_AOMAP
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
#endif`,x1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y1=`#ifdef USE_BATCHING
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
#endif`,S1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T1=`#ifdef USE_IRIDESCENCE
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
#endif`,A1=`#ifdef USE_BUMPMAP
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
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,I1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,D1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,N1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,U1=`#define PI 3.141592653589793
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
} // validated`,F1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,O1=`vec3 transformedNormal = objectNormal;
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
#endif`,k1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H1="gl_FragColor = linearToOutputTexel( gl_FragColor );",G1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W1=`#ifdef USE_ENVMAP
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
#endif`,X1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,q1=`#ifdef USE_ENVMAP
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
#endif`,Y1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$1=`#ifdef USE_ENVMAP
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
#endif`,K1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j1=`#ifdef USE_GRADIENTMAP
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
}`,ey=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ty=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ry=`#ifdef USE_ENVMAP
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
#endif`,sy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cy=`PhysicalMaterial material;
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
#endif`,uy=`uniform sampler2D dfgLUT;
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
}`,dy=`
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
#endif`,fy=`#if defined( RE_IndirectDiffuse )
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
#endif`,hy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,py=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,my=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_y=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,My=`#if defined( USE_POINTS_UV )
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
#endif`,Ey=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ty=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ay=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ry=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`#ifdef USE_MORPHTARGETS
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
#endif`,Cy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Py=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ly=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ny=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Uy=`#ifdef USE_NORMALMAP
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
#endif`,Fy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Oy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ky=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,By=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$y=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jy=`float getShadowMask() {
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
}`,Qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jy=`#ifdef USE_SKINNING
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
#endif`,eS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tS=`#ifdef USE_SKINNING
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
#endif`,nS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aS=`#ifdef USE_TRANSMISSION
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
#endif`,oS=`#ifdef USE_TRANSMISSION
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
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hS=`uniform sampler2D t2D;
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
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_S=`#include <common>
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
}`,xS=`#if DEPTH_PACKING == 3200
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
}`,yS=`#define DISTANCE
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
}`,SS=`#define DISTANCE
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
}`,MS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ES=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`uniform float scale;
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
}`,TS=`uniform vec3 diffuse;
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
}`,AS=`#include <common>
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
}`,RS=`uniform vec3 diffuse;
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
}`,bS=`#define LAMBERT
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
}`,CS=`#define LAMBERT
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
}`,PS=`#define MATCAP
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
}`,LS=`#define MATCAP
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
}`,IS=`#define NORMAL
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
}`,DS=`#define NORMAL
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
}`,NS=`#define PHONG
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
}`,US=`#define PHONG
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
}`,FS=`#define STANDARD
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
}`,OS=`#define STANDARD
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
}`,kS=`#define TOON
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
}`,zS=`#define TOON
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
}`,BS=`uniform float size;
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
}`,VS=`uniform vec3 diffuse;
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
}`,HS=`#include <common>
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
}`,GS=`uniform vec3 color;
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
}`,WS=`uniform float rotation;
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
}`,XS=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:f1,alphahash_pars_fragment:h1,alphamap_fragment:p1,alphamap_pars_fragment:m1,alphatest_fragment:g1,alphatest_pars_fragment:v1,aomap_fragment:_1,aomap_pars_fragment:x1,batching_pars_vertex:y1,batching_vertex:S1,begin_vertex:M1,beginnormal_vertex:E1,bsdfs:w1,iridescence_fragment:T1,bumpmap_pars_fragment:A1,clipping_planes_fragment:R1,clipping_planes_pars_fragment:b1,clipping_planes_pars_vertex:C1,clipping_planes_vertex:P1,color_fragment:L1,color_pars_fragment:I1,color_pars_vertex:D1,color_vertex:N1,common:U1,cube_uv_reflection_fragment:F1,defaultnormal_vertex:O1,displacementmap_pars_vertex:k1,displacementmap_vertex:z1,emissivemap_fragment:B1,emissivemap_pars_fragment:V1,colorspace_fragment:H1,colorspace_pars_fragment:G1,envmap_fragment:W1,envmap_common_pars_fragment:X1,envmap_pars_fragment:q1,envmap_pars_vertex:Y1,envmap_physical_pars_fragment:ry,envmap_vertex:$1,fog_vertex:K1,fog_pars_vertex:Z1,fog_fragment:J1,fog_pars_fragment:Q1,gradientmap_pars_fragment:j1,lightmap_pars_fragment:ey,lights_lambert_fragment:ty,lights_lambert_pars_fragment:ny,lights_pars_begin:iy,lights_toon_fragment:sy,lights_toon_pars_fragment:ay,lights_phong_fragment:oy,lights_phong_pars_fragment:ly,lights_physical_fragment:cy,lights_physical_pars_fragment:uy,lights_fragment_begin:dy,lights_fragment_maps:fy,lights_fragment_end:hy,lightprobes_pars_fragment:py,logdepthbuf_fragment:my,logdepthbuf_pars_fragment:gy,logdepthbuf_pars_vertex:vy,logdepthbuf_vertex:_y,map_fragment:xy,map_pars_fragment:yy,map_particle_fragment:Sy,map_particle_pars_fragment:My,metalnessmap_fragment:Ey,metalnessmap_pars_fragment:wy,morphinstance_vertex:Ty,morphcolor_vertex:Ay,morphnormal_vertex:Ry,morphtarget_pars_vertex:by,morphtarget_vertex:Cy,normal_fragment_begin:Py,normal_fragment_maps:Ly,normal_pars_fragment:Iy,normal_pars_vertex:Dy,normal_vertex:Ny,normalmap_pars_fragment:Uy,clearcoat_normal_fragment_begin:Fy,clearcoat_normal_fragment_maps:Oy,clearcoat_pars_fragment:ky,iridescence_pars_fragment:zy,opaque_fragment:By,packing:Vy,premultiplied_alpha_fragment:Hy,project_vertex:Gy,dithering_fragment:Wy,dithering_pars_fragment:Xy,roughnessmap_fragment:qy,roughnessmap_pars_fragment:Yy,shadowmap_pars_fragment:$y,shadowmap_pars_vertex:Ky,shadowmap_vertex:Zy,shadowmask_pars_fragment:Jy,skinbase_vertex:Qy,skinning_pars_vertex:jy,skinning_vertex:eS,skinnormal_vertex:tS,specularmap_fragment:nS,specularmap_pars_fragment:iS,tonemapping_fragment:rS,tonemapping_pars_fragment:sS,transmission_fragment:aS,transmission_pars_fragment:oS,uv_pars_fragment:lS,uv_pars_vertex:cS,uv_vertex:uS,worldpos_vertex:dS,background_vert:fS,background_frag:hS,backgroundCube_vert:pS,backgroundCube_frag:mS,cube_vert:gS,cube_frag:vS,depth_vert:_S,depth_frag:xS,distance_vert:yS,distance_frag:SS,equirect_vert:MS,equirect_frag:ES,linedashed_vert:wS,linedashed_frag:TS,meshbasic_vert:AS,meshbasic_frag:RS,meshlambert_vert:bS,meshlambert_frag:CS,meshmatcap_vert:PS,meshmatcap_frag:LS,meshnormal_vert:IS,meshnormal_frag:DS,meshphong_vert:NS,meshphong_frag:US,meshphysical_vert:FS,meshphysical_frag:OS,meshtoon_vert:kS,meshtoon_frag:zS,points_vert:BS,points_frag:VS,shadow_vert:HS,shadow_frag:GS,sprite_vert:WS,sprite_frag:XS},Fe={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Hi={basic:{uniforms:Vn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Vn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new vt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Vn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Vn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Vn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new vt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Vn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Vn([Fe.points,Fe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Vn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Vn([Fe.common,Fe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Vn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Vn([Fe.sprite,Fe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Vn([Fe.common,Fe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Vn([Fe.lights,Fe.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Hi.physical={uniforms:Vn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const oc={r:0,b:0,g:0},qS=new Gt,Gg=new pt;Gg.set(-1,0,0,0,1,0,0,0,1);function YS(s,e,t,i,a,o){const c=new vt(0);let d=a===!0?0:1,f,p,x=null,g=0,m=null;function _(N){let F=N.isScene===!0?N.background:null;if(F&&F.isTexture){const b=N.backgroundBlurriness>0;F=e.get(F,b)}return F}function M(N){let F=!1;const b=_(N);b===null?S(c,d):b&&b.isColor&&(S(b,1),F=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(s.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function T(N,F){const b=_(F);b&&(b.isCubeTexture||b.mapping===Rc)?(p===void 0&&(p=new Ne(new Aa(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Ea(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(C,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(p)),p.material.uniforms.envMap.value=b,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(qS.makeRotationFromEuler(F.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Gg),p.material.toneMapped=Et.getTransfer(b.colorSpace)!==Ot,(x!==b||g!==b.version||m!==s.toneMapping)&&(p.material.needsUpdate=!0,x=b,g=b.version,m=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null)):b&&b.isTexture&&(f===void 0&&(f=new Ne(new qr(2,2),new $i({name:"BackgroundMaterial",uniforms:Ea(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:Yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=b,f.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,f.material.toneMapped=Et.getTransfer(b.colorSpace)!==Ot,b.matrixAutoUpdate===!0&&b.updateMatrix(),f.material.uniforms.uvTransform.value.copy(b.matrix),(x!==b||g!==b.version||m!==s.toneMapping)&&(f.material.needsUpdate=!0,x=b,g=b.version,m=s.toneMapping),f.layers.enableAll(),N.unshift(f,f.geometry,f.material,0,0,null))}function S(N,F){N.getRGB(oc,zg(s)),t.buffers.color.setClear(oc.r,oc.g,oc.b,F,o)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(N,F=1){c.set(N),d=F,S(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(N){d=N,S(c,d)},render:M,addToRenderList:T,dispose:y}}function $S(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},a=m(null);let o=a,c=!1;function d(z,q,oe,fe,Z){let ue=!1;const $=g(z,fe,oe,q);o!==$&&(o=$,p(o.object)),ue=_(z,fe,oe,Z),ue&&M(z,fe,oe,Z),Z!==null&&e.update(Z,s.ELEMENT_ARRAY_BUFFER),(ue||c)&&(c=!1,b(z,q,oe,fe),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function f(){return s.createVertexArray()}function p(z){return s.bindVertexArray(z)}function x(z){return s.deleteVertexArray(z)}function g(z,q,oe,fe){const Z=fe.wireframe===!0;let ue=i[q.id];ue===void 0&&(ue={},i[q.id]=ue);const $=z.isInstancedMesh===!0?z.id:0;let Y=ue[$];Y===void 0&&(Y={},ue[$]=Y);let le=Y[oe.id];le===void 0&&(le={},Y[oe.id]=le);let ce=le[Z];return ce===void 0&&(ce=m(f()),le[Z]=ce),ce}function m(z){const q=[],oe=[],fe=[];for(let Z=0;Z<t;Z++)q[Z]=0,oe[Z]=0,fe[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:oe,attributeDivisors:fe,object:z,attributes:{},index:null}}function _(z,q,oe,fe){const Z=o.attributes,ue=q.attributes;let $=0;const Y=oe.getAttributes();for(const le in Y)if(Y[le].location>=0){const O=Z[le];let J=ue[le];if(J===void 0&&(le==="instanceMatrix"&&z.instanceMatrix&&(J=z.instanceMatrix),le==="instanceColor"&&z.instanceColor&&(J=z.instanceColor)),O===void 0||O.attribute!==J||J&&O.data!==J.data)return!0;$++}return o.attributesNum!==$||o.index!==fe}function M(z,q,oe,fe){const Z={},ue=q.attributes;let $=0;const Y=oe.getAttributes();for(const le in Y)if(Y[le].location>=0){let O=ue[le];O===void 0&&(le==="instanceMatrix"&&z.instanceMatrix&&(O=z.instanceMatrix),le==="instanceColor"&&z.instanceColor&&(O=z.instanceColor));const J={};J.attribute=O,O&&O.data&&(J.data=O.data),Z[le]=J,$++}o.attributes=Z,o.attributesNum=$,o.index=fe}function T(){const z=o.newAttributes;for(let q=0,oe=z.length;q<oe;q++)z[q]=0}function S(z){y(z,0)}function y(z,q){const oe=o.newAttributes,fe=o.enabledAttributes,Z=o.attributeDivisors;oe[z]=1,fe[z]===0&&(s.enableVertexAttribArray(z),fe[z]=1),Z[z]!==q&&(s.vertexAttribDivisor(z,q),Z[z]=q)}function N(){const z=o.newAttributes,q=o.enabledAttributes;for(let oe=0,fe=q.length;oe<fe;oe++)q[oe]!==z[oe]&&(s.disableVertexAttribArray(oe),q[oe]=0)}function F(z,q,oe,fe,Z,ue,$){$===!0?s.vertexAttribIPointer(z,q,oe,Z,ue):s.vertexAttribPointer(z,q,oe,fe,Z,ue)}function b(z,q,oe,fe){T();const Z=fe.attributes,ue=oe.getAttributes(),$=q.defaultAttributeValues;for(const Y in ue){const le=ue[Y];if(le.location>=0){let ce=Z[Y];if(ce===void 0&&(Y==="instanceMatrix"&&z.instanceMatrix&&(ce=z.instanceMatrix),Y==="instanceColor"&&z.instanceColor&&(ce=z.instanceColor)),ce!==void 0){const O=ce.normalized,J=ce.itemSize,ke=e.get(ce);if(ke===void 0)continue;const je=ke.buffer,Xe=ke.type,re=ke.bytesPerElement,xe=Xe===s.INT||Xe===s.UNSIGNED_INT||ce.gpuType===ih;if(ce.isInterleavedBufferAttribute){const me=ce.data,ze=me.stride,it=ce.offset;if(me.isInstancedInterleavedBuffer){for(let rt=0;rt<le.locationSize;rt++)y(le.location+rt,me.meshPerAttribute);z.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let rt=0;rt<le.locationSize;rt++)S(le.location+rt);s.bindBuffer(s.ARRAY_BUFFER,je);for(let rt=0;rt<le.locationSize;rt++)F(le.location+rt,J/le.locationSize,Xe,O,ze*re,(it+J/le.locationSize*rt)*re,xe)}else{if(ce.isInstancedBufferAttribute){for(let me=0;me<le.locationSize;me++)y(le.location+me,ce.meshPerAttribute);z.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let me=0;me<le.locationSize;me++)S(le.location+me);s.bindBuffer(s.ARRAY_BUFFER,je);for(let me=0;me<le.locationSize;me++)F(le.location+me,J/le.locationSize,Xe,O,J*re,J/le.locationSize*me*re,xe)}}else if($!==void 0){const O=$[Y];if(O!==void 0)switch(O.length){case 2:s.vertexAttrib2fv(le.location,O);break;case 3:s.vertexAttrib3fv(le.location,O);break;case 4:s.vertexAttrib4fv(le.location,O);break;default:s.vertexAttrib1fv(le.location,O)}}}}N()}function C(){L();for(const z in i){const q=i[z];for(const oe in q){const fe=q[oe];for(const Z in fe){const ue=fe[Z];for(const $ in ue)x(ue[$].object),delete ue[$];delete fe[Z]}}delete i[z]}}function P(z){if(i[z.id]===void 0)return;const q=i[z.id];for(const oe in q){const fe=q[oe];for(const Z in fe){const ue=fe[Z];for(const $ in ue)x(ue[$].object),delete ue[$];delete fe[Z]}}delete i[z.id]}function I(z){for(const q in i){const oe=i[q];for(const fe in oe){const Z=oe[fe];if(Z[z.id]===void 0)continue;const ue=Z[z.id];for(const $ in ue)x(ue[$].object),delete ue[$];delete Z[z.id]}}}function w(z){for(const q in i){const oe=i[q],fe=z.isInstancedMesh===!0?z.id:0,Z=oe[fe];if(Z!==void 0){for(const ue in Z){const $=Z[ue];for(const Y in $)x($[Y].object),delete $[Y];delete Z[ue]}delete oe[fe],Object.keys(oe).length===0&&delete i[q]}}}function L(){V(),c=!0,o!==a&&(o=a,p(o.object))}function V(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:L,resetDefaultState:V,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfObject:w,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:S,disableUnusedAttributes:N}}function KS(s,e,t){let i;function a(f){i=f}function o(f,p){s.drawArrays(i,f,p),t.update(p,i,1)}function c(f,p,x){x!==0&&(s.drawArraysInstanced(i,f,p,x),t.update(p,i,x))}function d(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,p,0,x);let m=0;for(let _=0;_<x;_++)m+=p[_];t.update(m,i,1)}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=d}function ZS(s,e,t,i){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(I){return!(I!==Di&&i.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const w=I===pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ai&&i.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ii&&!w)}function f(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const x=f(p);x!==p&&(ut("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:m,maxTextures:_,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:N,maxVaryings:F,maxFragmentUniforms:b,maxSamples:C,samples:P}}function JS(s){const e=this;let t=null,i=0,a=!1,o=!1;const c=new vs,d=new pt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){const _=g.length!==0||m||i!==0||a;return a=m,i=g.length,_},this.beginShadows=function(){o=!0,x(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,m){t=x(g,m,0)},this.setState=function(g,m,_){const M=g.clippingPlanes,T=g.clipIntersection,S=g.clipShadows,y=s.get(g);if(!a||M===null||M.length===0||o&&!S)o?x(null):p();else{const N=o?0:i,F=N*4;let b=y.clippingState||null;f.value=b,b=x(M,m,F,_);for(let C=0;C!==F;++C)b[C]=t[C];y.clippingState=b,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function x(g,m,_,M){const T=g!==null?g.length:0;let S=null;if(T!==0){if(S=f.value,M!==!0||S===null){const y=_+T*4,N=m.matrixWorldInverse;d.getNormalMatrix(N),(S===null||S.length<y)&&(S=new Float32Array(y));for(let F=0,b=_;F!==T;++F,b+=4)c.copy(g[F]).applyMatrix4(N,d),c.normal.toArray(S,b),S[b+3]=c.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}const Hr=4,I0=[.125,.215,.35,.446,.526,.582],xs=20,QS=256,So=new Cc,D0=new vt;let Wd=null,Xd=0,qd=0,Yd=!1;const jS=new j;class N0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,o={}){const{size:c=256,position:d=jS}=o;Wd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,i,a,f,d),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=O0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=F0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wd,Xd,qd),this._renderer.xr.enabled=Yd,e.scissorTest=!1,pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===Sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:pr,format:Di,colorSpace:yc,depthBuffer:!1},a=U0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=U0(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eM(o)),this._blurMaterial=nM(o,e,t),this._ggxMaterial=tM(o,e,t)}return a}_compileMaterial(e){const t=new Ne(new _i,e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,i,a,o){const f=new mi(90,1,t,i),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,_=g.toneMapping;g.getClearColor(D0),g.toneMapping=Ni,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(a),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ne(new Aa,new Xr({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,S=T.material;let y=!1;const N=e.background;N?N.isColor&&(S.color.copy(N),e.background=null,y=!0):(S.color.copy(D0),y=!0);for(let F=0;F<6;F++){const b=F%3;b===0?(f.up.set(0,p[F],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x+x[F],o.y,o.z)):b===1?(f.up.set(0,0,p[F]),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y+x[F],o.z)):(f.up.set(0,p[F],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y,o.z+x[F]));const C=this._cubeSize;pa(a,b*C,F>2?C:0,C,C),g.setRenderTarget(a),y&&g.render(T,f),g.render(e,f)}g.toneMapping=_,g.autoClear=m,e.background=N}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Ms||e.mapping===Sa;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=O0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=F0());const o=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;const d=o.uniforms;d.envMap.value=e;const f=this._cubeSize;pa(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,So)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let o=1;o<a;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[i];d.material=c;const f=c.uniforms,p=i/(this._lodMeshes.length-1),x=t/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),m=0+p*1.25,_=g*m,{_lodMax:M}=this,T=this._sizeLods[i],S=3*T*(i>M-Hr?i-M+Hr:0),y=4*(this._cubeSize-T);f.envMap.value=e.texture,f.roughness.value=_,f.mipInt.value=M-t,pa(o,S,y,3*T,2*T),a.setRenderTarget(o),a.render(d,So),f.envMap.value=o.texture,f.roughness.value=0,f.mipInt.value=M-i,pa(e,S,y,3*T,2*T),a.setRenderTarget(e),a.render(d,So)}_blur(e,t,i,a,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,a,"latitudinal",o),this._halfBlur(c,e,i,i,a,"longitudinal",o)}_halfBlur(e,t,i,a,o,c,d){const f=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[a];g.material=p;const m=p.uniforms,_=this._sizeLods[i]-1,M=isFinite(o)?Math.PI/(2*_):2*Math.PI/(2*xs-1),T=o/M,S=isFinite(o)?1+Math.floor(x*T):xs;S>xs&&ut(`sigmaRadians, ${o}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${xs}`);const y=[];let N=0;for(let I=0;I<xs;++I){const w=I/T,L=Math.exp(-w*w/2);y.push(L),I===0?N+=L:I<S&&(N+=2*L)}for(let I=0;I<y.length;I++)y[I]=y[I]/N;m.envMap.value=e.texture,m.samples.value=S,m.weights.value=y,m.latitudinal.value=c==="latitudinal",d&&(m.poleAxis.value=d);const{_lodMax:F}=this;m.dTheta.value=M,m.mipInt.value=F-i;const b=this._sizeLods[a],C=3*b*(a>F-Hr?a-F+Hr:0),P=4*(this._cubeSize-b);pa(t,C,P,3*b,2*b),f.setRenderTarget(t),f.render(g,So)}}function eM(s){const e=[],t=[],i=[];let a=s;const o=s-Hr+1+I0.length;for(let c=0;c<o;c++){const d=Math.pow(2,a);e.push(d);let f=1/d;c>s-Hr?f=I0[c-s+Hr-1]:c===0&&(f=0),t.push(f);const p=1/(d-2),x=-p,g=1+p,m=[x,x,g,x,g,g,x,x,g,g,x,g],_=6,M=6,T=3,S=2,y=1,N=new Float32Array(T*M*_),F=new Float32Array(S*M*_),b=new Float32Array(y*M*_);for(let P=0;P<_;P++){const I=P%3*2/3-1,w=P>2?0:-1,L=[I,w,0,I+2/3,w,0,I+2/3,w+1,0,I,w,0,I+2/3,w+1,0,I,w+1,0];N.set(L,T*M*P),F.set(m,S*M*P);const V=[P,P,P,P,P,P];b.set(V,y*M*P)}const C=new _i;C.setAttribute("position",new vi(N,T)),C.setAttribute("uv",new vi(F,S)),C.setAttribute("faceIndex",new vi(b,y)),i.push(new Ne(C,null)),a>Hr&&a--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function U0(s,e,t){const i=new qi(s,e,t);return i.texture.mapping=Rc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pa(s,e,t,i,a){s.viewport.set(e,t,i,a),s.scissor.set(e,t,i,a)}function tM(s,e,t){return new $i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function nM(s,e,t){const i=new Float32Array(xs),a=new j(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function F0(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function O0(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Pc(){return`

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
	`}class Wg extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Og(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Aa(5,5,5),o=new $i({name:"CubemapFromEquirect",uniforms:Ea(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qn,blending:ur});o.uniforms.tEquirect.value=t;const c=new Ne(a,o),d=t.minFilter;return t.minFilter===ys&&(t.minFilter=Un),new l1(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,a);e.setRenderTarget(o)}}function iM(s){let e=new WeakMap,t=new WeakMap,i=null;function a(m,_=!1){return m==null?null:_?c(m):o(m)}function o(m){if(m&&m.isTexture){const _=m.mapping;if(_===pd||_===md)if(e.has(m)){const M=e.get(m).texture;return d(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const T=new Wg(M.height);return T.fromEquirectangularTexture(s,m),e.set(m,T),m.addEventListener("dispose",p),d(T.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const _=m.mapping,M=_===pd||_===md,T=_===Ms||_===Sa;if(M||T){let S=t.get(m);const y=S!==void 0?S.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==y)return i===null&&(i=new N0(s)),S=M?i.fromEquirectangular(m,S):i.fromCubemap(m,S),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),S.texture;if(S!==void 0)return S.texture;{const N=m.image;return M&&N&&N.height>0||T&&N&&f(N)?(i===null&&(i=new N0(s)),S=M?i.fromEquirectangular(m):i.fromCubemap(m),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),m.addEventListener("dispose",x),S.texture):null}}}return m}function d(m,_){return _===pd?m.mapping=Ms:_===md&&(m.mapping=Sa),m}function f(m){let _=0;const M=6;for(let T=0;T<M;T++)m[T]!==void 0&&_++;return _===M}function p(m){const _=m.target;_.removeEventListener("dispose",p);const M=e.get(_);M!==void 0&&(e.delete(_),M.dispose())}function x(m){const _=m.target;_.removeEventListener("dispose",x);const M=t.get(_);M!==void 0&&(t.delete(_),M.dispose())}function g(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:g}}function rM(s){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=s.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&va("WebGLRenderer: "+i+" extension not supported."),a}}}function sM(s,e,t,i){const a={},o=new WeakMap;function c(g){const m=g.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",c),delete a[m.id];const _=o.get(m);_&&(e.remove(_),o.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function d(g,m){return a[m.id]===!0||(m.addEventListener("dispose",c),a[m.id]=!0,t.memory.geometries++),m}function f(g){const m=g.attributes;for(const _ in m)e.update(m[_],s.ARRAY_BUFFER)}function p(g){const m=[],_=g.index,M=g.attributes.position;let T=0;if(M===void 0)return;if(_!==null){const N=_.array;T=_.version;for(let F=0,b=N.length;F<b;F+=3){const C=N[F+0],P=N[F+1],I=N[F+2];m.push(C,P,P,I,I,C)}}else{const N=M.array;T=M.version;for(let F=0,b=N.length/3-1;F<b;F+=3){const C=F+0,P=F+1,I=F+2;m.push(C,P,P,I,I,C)}}const S=new(M.count>=65535?Ng:Dg)(m,1);S.version=T;const y=o.get(g);y&&e.remove(y),o.set(g,S)}function x(g){const m=o.get(g);if(m){const _=g.index;_!==null&&m.version<_.version&&p(g)}else p(g);return o.get(g)}return{get:d,update:f,getWireframeAttribute:x}}function aM(s,e,t){let i;function a(g){i=g}let o,c;function d(g){o=g.type,c=g.bytesPerElement}function f(g,m){s.drawElements(i,m,o,g*c),t.update(m,i,1)}function p(g,m,_){_!==0&&(s.drawElementsInstanced(i,m,o,g*c,_),t.update(m,i,_))}function x(g,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,g,0,_);let T=0;for(let S=0;S<_;S++)T+=m[S];t.update(T,i,1)}this.setMode=a,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=x}function oM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,d){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=d*(o/3);break;case s.LINES:t.lines+=d*(o/2);break;case s.LINE_STRIP:t.lines+=d*(o-1);break;case s.LINE_LOOP:t.lines+=d*o;break;case s.POINTS:t.points+=d*o;break;default:Rt("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function lM(s,e,t){const i=new WeakMap,a=new rn;function o(c,d,f){const p=c.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=x!==void 0?x.length:0;let m=i.get(d);if(m===void 0||m.count!==g){let V=function(){w.dispose(),i.delete(d),d.removeEventListener("dispose",V)};var _=V;m!==void 0&&m.texture.dispose();const M=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let b=0;M===!0&&(b=1),T===!0&&(b=2),S===!0&&(b=3);let C=d.attributes.position.count*b,P=1;C>e.maxTextureSize&&(P=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const I=new Float32Array(C*P*4*g),w=new Pg(I,C,P,g);w.type=Ii,w.needsUpdate=!0;const L=b*4;for(let z=0;z<g;z++){const q=y[z],oe=N[z],fe=F[z],Z=C*P*4*z;for(let ue=0;ue<q.count;ue++){const $=ue*L;M===!0&&(a.fromBufferAttribute(q,ue),I[Z+$+0]=a.x,I[Z+$+1]=a.y,I[Z+$+2]=a.z,I[Z+$+3]=0),T===!0&&(a.fromBufferAttribute(oe,ue),I[Z+$+4]=a.x,I[Z+$+5]=a.y,I[Z+$+6]=a.z,I[Z+$+7]=0),S===!0&&(a.fromBufferAttribute(fe,ue),I[Z+$+8]=a.x,I[Z+$+9]=a.y,I[Z+$+10]=a.z,I[Z+$+11]=fe.itemSize===4?a.w:1)}}m={count:g,texture:w,size:new dt(C,P)},i.set(d,m),d.addEventListener("dispose",V)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const T=d.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",T),f.getUniforms().setValue(s,"morphTargetInfluences",p)}f.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}return{update:o}}function cM(s,e,t,i,a){let o=new WeakMap;function c(p){const x=a.render.frame,g=p.geometry,m=e.get(p,g);if(o.get(m)!==x&&(e.update(m),o.set(m,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==x&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,x))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==x&&(_.update(),o.set(_,x))}return m}function d(){o=new WeakMap}function f(p){const x=p.target;x.removeEventListener("dispose",f),i.releaseStatesOfObject(x),t.remove(x.instanceMatrix),x.instanceColor!==null&&t.remove(x.instanceColor)}return{update:c,dispose:d}}const uM={[mg]:"LINEAR_TONE_MAPPING",[gg]:"REINHARD_TONE_MAPPING",[vg]:"CINEON_TONE_MAPPING",[_g]:"ACES_FILMIC_TONE_MAPPING",[yg]:"AGX_TONE_MAPPING",[Sg]:"NEUTRAL_TONE_MAPPING",[xg]:"CUSTOM_TONE_MAPPING"};function dM(s,e,t,i,a,o){const c=new qi(e,t,{type:s,depthBuffer:a,stencilBuffer:o,samples:i?4:0,depthTexture:a?new Ma(e,t):void 0}),d=new qi(e,t,{type:pr,depthBuffer:!1,stencilBuffer:!1}),f=new _i;f.setAttribute("position",new Gn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Gn([0,2,0,0,2,0],2));const p=new t1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),x=new Ne(f,p),g=new Cc(-1,1,1,-1,0,1);let m=null,_=null,M=!1,T,S=null,y=[],N=!1;this.setSize=function(F,b){c.setSize(F,b),d.setSize(F,b);for(let C=0;C<y.length;C++){const P=y[C];P.setSize&&P.setSize(F,b)}},this.setEffects=function(F){y=F,N=y.length>0&&y[0].isRenderPass===!0;const b=c.width,C=c.height;for(let P=0;P<y.length;P++){const I=y[P];I.setSize&&I.setSize(b,C)}},this.begin=function(F,b){if(M||F.toneMapping===Ni&&y.length===0)return!1;if(S=b,b!==null){const C=b.width,P=b.height;(c.width!==C||c.height!==P)&&this.setSize(C,P)}return N===!1&&F.setRenderTarget(c),T=F.toneMapping,F.toneMapping=Ni,!0},this.hasRenderPass=function(){return N},this.end=function(F,b){F.toneMapping=T,M=!0;let C=c,P=d;for(let I=0;I<y.length;I++){const w=y[I];if(w.enabled!==!1&&(w.render(F,P,C,b),w.needsSwap!==!1)){const L=C;C=P,P=L}}if(m!==F.outputColorSpace||_!==F.toneMapping){m=F.outputColorSpace,_=F.toneMapping,p.defines={},Et.getTransfer(m)===Ot&&(p.defines.SRGB_TRANSFER="");const I=uM[_];I&&(p.defines[I]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=C.texture,F.setRenderTarget(S),F.render(x,g),S=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),f.dispose(),p.dispose()}}const Xg=new Fn,Yf=new Ma(1,1),qg=new Pg,Yg=new Px,$g=new Og,k0=[],z0=[],B0=new Float32Array(16),V0=new Float32Array(9),H0=new Float32Array(4);function Ra(s,e,t){const i=s[0];if(i<=0||i>0)return s;const a=e*t;let o=k0[a];if(o===void 0&&(o=new Float32Array(a),k0[a]=o),e!==0){i.toArray(o,0);for(let c=1,d=0;c!==e;++c)d+=t,s[c].toArray(o,d)}return o}function vn(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function _n(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Lc(s,e){let t=z0[e];t===void 0&&(t=new Int32Array(e),z0[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function fM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function hM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2fv(this.addr,e),_n(t,e)}}function pM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;s.uniform3fv(this.addr,e),_n(t,e)}}function mM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4fv(this.addr,e),_n(t,e)}}function gM(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,i))return;H0.set(i),s.uniformMatrix2fv(this.addr,!1,H0),_n(t,i)}}function vM(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,i))return;V0.set(i),s.uniformMatrix3fv(this.addr,!1,V0),_n(t,i)}}function _M(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,i))return;B0.set(i),s.uniformMatrix4fv(this.addr,!1,B0),_n(t,i)}}function xM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function yM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2iv(this.addr,e),_n(t,e)}}function SM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3iv(this.addr,e),_n(t,e)}}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4iv(this.addr,e),_n(t,e)}}function EM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function wM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2uiv(this.addr,e),_n(t,e)}}function TM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3uiv(this.addr,e),_n(t,e)}}function AM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4uiv(this.addr,e),_n(t,e)}}function RM(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);let o;this.type===s.SAMPLER_2D_SHADOW?(Yf.compareFunction=t.isReversedDepthBuffer()?dh:uh,o=Yf):o=Xg,t.setTexture2D(e||o,a)}function bM(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Yg,a)}function CM(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||$g,a)}function PM(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||qg,a)}function LM(s){switch(s){case 5126:return fM;case 35664:return hM;case 35665:return pM;case 35666:return mM;case 35674:return gM;case 35675:return vM;case 35676:return _M;case 5124:case 35670:return xM;case 35667:case 35671:return yM;case 35668:case 35672:return SM;case 35669:case 35673:return MM;case 5125:return EM;case 36294:return wM;case 36295:return TM;case 36296:return AM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return bM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return PM}}function IM(s,e){s.uniform1fv(this.addr,e)}function DM(s,e){const t=Ra(e,this.size,2);s.uniform2fv(this.addr,t)}function NM(s,e){const t=Ra(e,this.size,3);s.uniform3fv(this.addr,t)}function UM(s,e){const t=Ra(e,this.size,4);s.uniform4fv(this.addr,t)}function FM(s,e){const t=Ra(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function OM(s,e){const t=Ra(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function kM(s,e){const t=Ra(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function zM(s,e){s.uniform1iv(this.addr,e)}function BM(s,e){s.uniform2iv(this.addr,e)}function VM(s,e){s.uniform3iv(this.addr,e)}function HM(s,e){s.uniform4iv(this.addr,e)}function GM(s,e){s.uniform1uiv(this.addr,e)}function WM(s,e){s.uniform2uiv(this.addr,e)}function XM(s,e){s.uniform3uiv(this.addr,e)}function qM(s,e){s.uniform4uiv(this.addr,e)}function YM(s,e,t){const i=this.cache,a=e.length,o=Lc(t,a);vn(i,o)||(s.uniform1iv(this.addr,o),_n(i,o));let c;this.type===s.SAMPLER_2D_SHADOW?c=Yf:c=Xg;for(let d=0;d!==a;++d)t.setTexture2D(e[d]||c,o[d])}function $M(s,e,t){const i=this.cache,a=e.length,o=Lc(t,a);vn(i,o)||(s.uniform1iv(this.addr,o),_n(i,o));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Yg,o[c])}function KM(s,e,t){const i=this.cache,a=e.length,o=Lc(t,a);vn(i,o)||(s.uniform1iv(this.addr,o),_n(i,o));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||$g,o[c])}function ZM(s,e,t){const i=this.cache,a=e.length,o=Lc(t,a);vn(i,o)||(s.uniform1iv(this.addr,o),_n(i,o));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||qg,o[c])}function JM(s){switch(s){case 5126:return IM;case 35664:return DM;case 35665:return NM;case 35666:return UM;case 35674:return FM;case 35675:return OM;case 35676:return kM;case 5124:case 35670:return zM;case 35667:case 35671:return BM;case 35668:case 35672:return VM;case 35669:case 35673:return HM;case 5125:return GM;case 36294:return WM;case 36295:return XM;case 36296:return qM;case 35678:case 36198:case 36298:case 36306:case 35682:return YM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return KM;case 36289:case 36303:case 36311:case 36292:return ZM}}class QM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=LM(t.type)}}class jM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=JM(t.type)}}class eE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let o=0,c=a.length;o!==c;++o){const d=a[o];d.setValue(e,t[d.id],i)}}}const $d=/(\w+)(\])?(\[|\.)?/g;function G0(s,e){s.seq.push(e),s.map[e.id]=e}function tE(s,e,t){const i=s.name,a=i.length;for($d.lastIndex=0;;){const o=$d.exec(i),c=$d.lastIndex;let d=o[1];const f=o[2]==="]",p=o[3];if(f&&(d=d|0),p===void 0||p==="["&&c+2===a){G0(t,p===void 0?new QM(d,s,e):new jM(d,s,e));break}else{let g=t.map[d];g===void 0&&(g=new eE(d),G0(t,g)),t=g}}}class gc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const d=e.getActiveUniform(t,c),f=e.getUniformLocation(t,d.name);tE(d,f,this)}const a=[],o=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):o.push(c);a.length>0&&(this.seq=a.concat(o))}setValue(e,t,i,a){const o=this.map[t];o!==void 0&&o.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let o=0,c=t.length;o!==c;++o){const d=t[o],f=i[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,o=e.length;a!==o;++a){const c=e[a];c.id in t&&i.push(c)}return i}}function W0(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const nE=37297;let iE=0;function rE(s,e){const t=s.split(`
`),i=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=a;c<o;c++){const d=c+1;i.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return i.join(`
`)}const X0=new pt;function sE(s){Et._getMatrix(X0,Et.workingColorSpace,s);const e=`mat3( ${X0.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(s)){case Sc:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function q0(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),o=(s.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+rE(s.getShaderSource(e),d)}else return o}function aE(s,e){const t=sE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const oE={[mg]:"Linear",[gg]:"Reinhard",[vg]:"Cineon",[_g]:"ACESFilmic",[yg]:"AgX",[Sg]:"Neutral",[xg]:"Custom"};function lE(s,e){const t=oE[e];return t===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const lc=new j;function cE(){Et.getLuminanceCoefficients(lc);const s=lc.x.toFixed(4),e=lc.y.toFixed(4),t=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function dE(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fE(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=s.getActiveAttrib(e,a),c=o.name;let d=1;o.type===s.FLOAT_MAT2&&(d=2),o.type===s.FLOAT_MAT3&&(d=3),o.type===s.FLOAT_MAT4&&(d=4),t[c]={type:o.type,location:s.getAttribLocation(e,c),locationSize:d}}return t}function To(s){return s!==""}function Y0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hE=/^[ \t]*#include +<([\w\d./]+)>/gm;function $f(s){return s.replace(hE,mE)}const pE=new Map;function mE(s,e){let t=gt[e];if(t===void 0){const i=pE.get(e);if(i!==void 0)t=gt[i],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return $f(t)}const gE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function K0(s){return s.replace(gE,vE)}function vE(s,e,t,i){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Z0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const _E={[Ao]:"SHADOWMAP_TYPE_PCF",[wo]:"SHADOWMAP_TYPE_VSM"};function xE(s){return _E[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yE={[Ms]:"ENVMAP_TYPE_CUBE",[Sa]:"ENVMAP_TYPE_CUBE",[Rc]:"ENVMAP_TYPE_CUBE_UV"};function SE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":yE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const ME={[Sa]:"ENVMAP_MODE_REFRACTION"};function EE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ME[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wE={[nh]:"ENVMAP_BLENDING_MULTIPLY",[cx]:"ENVMAP_BLENDING_MIX",[ux]:"ENVMAP_BLENDING_ADD"};function TE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":wE[s.combine]||"ENVMAP_BLENDING_NONE"}function AE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function RE(s,e,t,i){const a=s.getContext(),o=t.defines;let c=t.vertexShader,d=t.fragmentShader;const f=xE(t),p=SE(t),x=EE(t),g=TE(t),m=AE(t),_=uE(t),M=dE(o),T=a.createProgram();let S,y,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(To).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(To).join(`
`),y.length>0&&(y+=`
`)):(S=[Z0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),y=[Z0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+x:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?gt.tonemapping_pars_fragment:"",t.toneMapping!==Ni?lE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,aE("linearToOutputTexel",t.outputColorSpace),cE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(To).join(`
`)),c=$f(c),c=Y0(c,t),c=$0(c,t),d=$f(d),d=Y0(d,t),d=$0(d,t),c=K0(c),d=K0(d),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===i0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===i0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const F=N+S+c,b=N+y+d,C=W0(a,a.VERTEX_SHADER,F),P=W0(a,a.FRAGMENT_SHADER,b);a.attachShader(T,C),a.attachShader(T,P),t.index0AttributeName!==void 0?a.bindAttribLocation(T,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function I(z){if(s.debug.checkShaderErrors){const q=a.getProgramInfoLog(T)||"",oe=a.getShaderInfoLog(C)||"",fe=a.getShaderInfoLog(P)||"",Z=q.trim(),ue=oe.trim(),$=fe.trim();let Y=!0,le=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,C,P);else{const ce=q0(a,C,"vertex"),O=q0(a,P,"fragment");Rt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Z+`
`+ce+`
`+O)}else Z!==""?ut("WebGLProgram: Program Info Log:",Z):(ue===""||$==="")&&(le=!1);le&&(z.diagnostics={runnable:Y,programLog:Z,vertexShader:{log:ue,prefix:S},fragmentShader:{log:$,prefix:y}})}a.deleteShader(C),a.deleteShader(P),w=new gc(a,T),L=fE(a,T)}let w;this.getUniforms=function(){return w===void 0&&I(this),w};let L;this.getAttributes=function(){return L===void 0&&I(this),L};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=a.getProgramParameter(T,nE)),V},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iE++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=C,this.fragmentShader=P,this}let bE=0;class CE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new PE(e),t.set(e,i)),i}}class PE{constructor(e){this.id=bE++,this.code=e,this.usedTimes=0}}function LE(s){return s===Es||s===_c||s===xc}function IE(s,e,t,i,a,o){const c=new Lg,d=new CE,f=new Set,p=[],x=new Map,g=i.logarithmicDepthBuffer;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return f.add(w),w===0?"uv":`uv${w}`}function T(w,L,V,z,q,oe){const fe=z.fog,Z=q.geometry,ue=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,$=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Y=e.get(w.envMap||ue,$),le=Y&&Y.mapping===Rc?Y.image.height:null,ce=_[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&ut("WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const O=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,J=O!==void 0?O.length:0;let ke=0;Z.morphAttributes.position!==void 0&&(ke=1),Z.morphAttributes.normal!==void 0&&(ke=2),Z.morphAttributes.color!==void 0&&(ke=3);let je,Xe,re,xe;if(ce){const qe=Hi[ce];je=qe.vertexShader,Xe=qe.fragmentShader}else{je=w.vertexShader,Xe=w.fragmentShader;const qe=d.getVertexShaderStage(w),zt=d.getFragmentShaderStage(w);d.update(w,qe,zt),re=qe.id,xe=zt.id}const me=s.getRenderTarget(),ze=s.state.buffers.depth.getReversed(),it=q.isInstancedMesh===!0,rt=q.isBatchedMesh===!0,Yt=!!w.map,mt=!!w.matcap,Lt=!!Y,Tt=!!w.aoMap,St=!!w.lightMap,$t=!!w.bumpMap&&w.wireframe===!1,sn=!!w.normalMap,an=!!w.displacementMap,Qt=!!w.emissiveMap,Nt=!!w.metalnessMap,Kt=!!w.roughnessMap,W=w.anisotropy>0,En=w.clearcoat>0,Ct=w.dispersion>0,D=w.iridescence>0,E=w.sheen>0,K=w.transmission>0,ie=W&&!!w.anisotropyMap,de=En&&!!w.clearcoatMap,Ee=En&&!!w.clearcoatNormalMap,Ce=En&&!!w.clearcoatRoughnessMap,he=D&&!!w.iridescenceMap,ge=D&&!!w.iridescenceThicknessMap,Ie=E&&!!w.sheenColorMap,Je=E&&!!w.sheenRoughnessMap,De=!!w.specularMap,be=!!w.specularColorMap,nt=!!w.specularIntensityMap,st=K&&!!w.transmissionMap,lt=K&&!!w.thicknessMap,H=!!w.gradientMap,Re=!!w.alphaMap,pe=w.alphaTest>0,Pe=!!w.alphaHash,Ue=!!w.extensions;let _e=Ni;w.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(_e=s.toneMapping);const $e={shaderID:ce,shaderType:w.type,shaderName:w.name,vertexShader:je,fragmentShader:Xe,defines:w.defines,customVertexShaderID:re,customFragmentShaderID:xe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:rt,batchingColor:rt&&q._colorsTexture!==null,instancing:it,instancingColor:it&&q.instanceColor!==null,instancingMorph:it&&q.morphTexture!==null,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Yt,matcap:mt,envMap:Lt,envMapMode:Lt&&Y.mapping,envMapCubeUVHeight:le,aoMap:Tt,lightMap:St,bumpMap:$t,normalMap:sn,displacementMap:an,emissiveMap:Qt,normalMapObjectSpace:sn&&w.normalMapType===hx,normalMapTangentSpace:sn&&w.normalMapType===Wf,packedNormalMap:sn&&w.normalMapType===Wf&&LE(w.normalMap.format),metalnessMap:Nt,roughnessMap:Kt,anisotropy:W,anisotropyMap:ie,clearcoat:En,clearcoatMap:de,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ce,dispersion:Ct,iridescence:D,iridescenceMap:he,iridescenceThicknessMap:ge,sheen:E,sheenColorMap:Ie,sheenRoughnessMap:Je,specularMap:De,specularColorMap:be,specularIntensityMap:nt,transmission:K,transmissionMap:st,thicknessMap:lt,gradientMap:H,opaque:w.transparent===!1&&w.blending===ga&&w.alphaToCoverage===!1,alphaMap:Re,alphaTest:pe,alphaHash:Pe,combine:w.combine,mapUv:Yt&&M(w.map.channel),aoMapUv:Tt&&M(w.aoMap.channel),lightMapUv:St&&M(w.lightMap.channel),bumpMapUv:$t&&M(w.bumpMap.channel),normalMapUv:sn&&M(w.normalMap.channel),displacementMapUv:an&&M(w.displacementMap.channel),emissiveMapUv:Qt&&M(w.emissiveMap.channel),metalnessMapUv:Nt&&M(w.metalnessMap.channel),roughnessMapUv:Kt&&M(w.roughnessMap.channel),anisotropyMapUv:ie&&M(w.anisotropyMap.channel),clearcoatMapUv:de&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:Je&&M(w.sheenRoughnessMap.channel),specularMapUv:De&&M(w.specularMap.channel),specularColorMapUv:be&&M(w.specularColorMap.channel),specularIntensityMapUv:nt&&M(w.specularIntensityMap.channel),transmissionMapUv:st&&M(w.transmissionMap.channel),thicknessMapUv:lt&&M(w.thicknessMap.channel),alphaMapUv:Re&&M(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(sn||W),vertexNormals:!!Z.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!Z.attributes.uv&&(Yt||Re),fog:!!fe,useFog:w.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||Z.attributes.normal===void 0&&sn===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:ze,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ke,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:oe.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:_e,decodeVideoTexture:Yt&&w.map.isVideoTexture===!0&&Et.getTransfer(w.map.colorSpace)===Ot,decodeVideoTextureEmissive:Qt&&w.emissiveMap.isVideoTexture===!0&&Et.getTransfer(w.emissiveMap.colorSpace)===Ot,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Gi,flipSided:w.side===Qn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ue&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&w.extensions.multiDraw===!0||rt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return $e.vertexUv1s=f.has(1),$e.vertexUv2s=f.has(2),$e.vertexUv3s=f.has(3),f.clear(),$e}function S(w){const L=[];if(w.shaderID?L.push(w.shaderID):(L.push(w.customVertexShaderID),L.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)L.push(V),L.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(y(L,w),N(L,w),L.push(s.outputColorSpace)),L.push(w.customProgramCacheKey),L.join()}function y(w,L){w.push(L.precision),w.push(L.outputColorSpace),w.push(L.envMapMode),w.push(L.envMapCubeUVHeight),w.push(L.mapUv),w.push(L.alphaMapUv),w.push(L.lightMapUv),w.push(L.aoMapUv),w.push(L.bumpMapUv),w.push(L.normalMapUv),w.push(L.displacementMapUv),w.push(L.emissiveMapUv),w.push(L.metalnessMapUv),w.push(L.roughnessMapUv),w.push(L.anisotropyMapUv),w.push(L.clearcoatMapUv),w.push(L.clearcoatNormalMapUv),w.push(L.clearcoatRoughnessMapUv),w.push(L.iridescenceMapUv),w.push(L.iridescenceThicknessMapUv),w.push(L.sheenColorMapUv),w.push(L.sheenRoughnessMapUv),w.push(L.specularMapUv),w.push(L.specularColorMapUv),w.push(L.specularIntensityMapUv),w.push(L.transmissionMapUv),w.push(L.thicknessMapUv),w.push(L.combine),w.push(L.fogExp2),w.push(L.sizeAttenuation),w.push(L.morphTargetsCount),w.push(L.morphAttributeCount),w.push(L.numDirLights),w.push(L.numPointLights),w.push(L.numSpotLights),w.push(L.numSpotLightMaps),w.push(L.numHemiLights),w.push(L.numRectAreaLights),w.push(L.numDirLightShadows),w.push(L.numPointLightShadows),w.push(L.numSpotLightShadows),w.push(L.numSpotLightShadowsWithMaps),w.push(L.numLightProbes),w.push(L.shadowMapType),w.push(L.toneMapping),w.push(L.numClippingPlanes),w.push(L.numClipIntersection),w.push(L.depthPacking)}function N(w,L){c.disableAll(),L.instancing&&c.enable(0),L.instancingColor&&c.enable(1),L.instancingMorph&&c.enable(2),L.matcap&&c.enable(3),L.envMap&&c.enable(4),L.normalMapObjectSpace&&c.enable(5),L.normalMapTangentSpace&&c.enable(6),L.clearcoat&&c.enable(7),L.iridescence&&c.enable(8),L.alphaTest&&c.enable(9),L.vertexColors&&c.enable(10),L.vertexAlphas&&c.enable(11),L.vertexUv1s&&c.enable(12),L.vertexUv2s&&c.enable(13),L.vertexUv3s&&c.enable(14),L.vertexTangents&&c.enable(15),L.anisotropy&&c.enable(16),L.alphaHash&&c.enable(17),L.batching&&c.enable(18),L.dispersion&&c.enable(19),L.batchingColor&&c.enable(20),L.gradientMap&&c.enable(21),L.packedNormalMap&&c.enable(22),L.vertexNormals&&c.enable(23),w.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.reversedDepthBuffer&&c.enable(4),L.skinning&&c.enable(5),L.morphTargets&&c.enable(6),L.morphNormals&&c.enable(7),L.morphColors&&c.enable(8),L.premultipliedAlpha&&c.enable(9),L.shadowMapEnabled&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),L.decodeVideoTextureEmissive&&c.enable(20),L.alphaToCoverage&&c.enable(21),L.numLightProbeGrids>0&&c.enable(22),L.hasPositionAttribute&&c.enable(23),w.push(c.mask)}function F(w){const L=_[w.type];let V;if(L){const z=Hi[L];V=Qx.clone(z.uniforms)}else V=w.uniforms;return V}function b(w,L){let V=x.get(L);return V!==void 0?++V.usedTimes:(V=new RE(s,L,w,a),p.push(V),x.set(L,V)),V}function C(w){if(--w.usedTimes===0){const L=p.indexOf(w);p[L]=p[p.length-1],p.pop(),x.delete(w.cacheKey),w.destroy()}}function P(w){d.remove(w)}function I(){d.dispose()}return{getParameters:T,getProgramCacheKey:S,getUniforms:F,acquireProgram:b,releaseProgram:C,releaseShaderCache:P,programs:p,dispose:I}}function DE(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function i(c){s.delete(c)}function a(c,d,f){s.get(c)[d]=f}function o(){s=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:o}}function NE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function J0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Q0(){const s=[];let e=0;const t=[],i=[],a=[];function o(){e=0,t.length=0,i.length=0,a.length=0}function c(m){let _=0;return m.isInstancedMesh&&(_+=2),m.isSkinnedMesh&&(_+=1),_}function d(m,_,M,T,S,y){let N=s[e];return N===void 0?(N={id:m.id,object:m,geometry:_,material:M,materialVariant:c(m),groupOrder:T,renderOrder:m.renderOrder,z:S,group:y},s[e]=N):(N.id=m.id,N.object=m,N.geometry=_,N.material=M,N.materialVariant=c(m),N.groupOrder=T,N.renderOrder=m.renderOrder,N.z=S,N.group=y),e++,N}function f(m,_,M,T,S,y){const N=d(m,_,M,T,S,y);M.transmission>0?i.push(N):M.transparent===!0?a.push(N):t.push(N)}function p(m,_,M,T,S,y){const N=d(m,_,M,T,S,y);M.transmission>0?i.unshift(N):M.transparent===!0?a.unshift(N):t.unshift(N)}function x(m,_,M){t.length>1&&t.sort(m||NE),i.length>1&&i.sort(_||J0),a.length>1&&a.sort(_||J0),M&&(t.reverse(),i.reverse(),a.reverse())}function g(){for(let m=e,_=s.length;m<_;m++){const M=s[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:a,init:o,push:f,unshift:p,finish:g,sort:x}}function UE(){let s=new WeakMap;function e(i,a){const o=s.get(i);let c;return o===void 0?(c=new Q0,s.set(i,[c])):a>=o.length?(c=new Q0,o.push(c)):c=o[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function FE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new vt};break;case"SpotLight":t={position:new j,direction:new j,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new j,halfWidth:new j,halfHeight:new j};break}return s[e.id]=t,t}}}function OE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let kE=0;function zE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function BE(s){const e=new FE,t=OE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)i.probe.push(new j);const a=new j,o=new Gt,c=new Gt;function d(p){let x=0,g=0,m=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let _=0,M=0,T=0,S=0,y=0,N=0,F=0,b=0,C=0,P=0,I=0;p.sort(zE);for(let L=0,V=p.length;L<V;L++){const z=p[L],q=z.color,oe=z.intensity,fe=z.distance;let Z=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Es?Z=z.shadow.map.texture:Z=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)x+=q.r*oe,g+=q.g*oe,m+=q.b*oe;else if(z.isLightProbe){for(let ue=0;ue<9;ue++)i.probe[ue].addScaledVector(z.sh.coefficients[ue],oe);I++}else if(z.isDirectionalLight){const ue=e.get(z);if(ue.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const $=z.shadow,Y=t.get(z);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,i.directionalShadow[_]=Y,i.directionalShadowMap[_]=Z,i.directionalShadowMatrix[_]=z.shadow.matrix,N++}i.directional[_]=ue,_++}else if(z.isSpotLight){const ue=e.get(z);ue.position.setFromMatrixPosition(z.matrixWorld),ue.color.copy(q).multiplyScalar(oe),ue.distance=fe,ue.coneCos=Math.cos(z.angle),ue.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ue.decay=z.decay,i.spot[T]=ue;const $=z.shadow;if(z.map&&(i.spotLightMap[C]=z.map,C++,$.updateMatrices(z),z.castShadow&&P++),i.spotLightMatrix[T]=$.matrix,z.castShadow){const Y=t.get(z);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,i.spotShadow[T]=Y,i.spotShadowMap[T]=Z,b++}T++}else if(z.isRectAreaLight){const ue=e.get(z);ue.color.copy(q).multiplyScalar(oe),ue.halfWidth.set(z.width*.5,0,0),ue.halfHeight.set(0,z.height*.5,0),i.rectArea[S]=ue,S++}else if(z.isPointLight){const ue=e.get(z);if(ue.color.copy(z.color).multiplyScalar(z.intensity),ue.distance=z.distance,ue.decay=z.decay,z.castShadow){const $=z.shadow,Y=t.get(z);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,Y.shadowCameraNear=$.camera.near,Y.shadowCameraFar=$.camera.far,i.pointShadow[M]=Y,i.pointShadowMap[M]=Z,i.pointShadowMatrix[M]=z.shadow.matrix,F++}i.point[M]=ue,M++}else if(z.isHemisphereLight){const ue=e.get(z);ue.skyColor.copy(z.color).multiplyScalar(oe),ue.groundColor.copy(z.groundColor).multiplyScalar(oe),i.hemi[y]=ue,y++}}S>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=x,i.ambient[1]=g,i.ambient[2]=m;const w=i.hash;(w.directionalLength!==_||w.pointLength!==M||w.spotLength!==T||w.rectAreaLength!==S||w.hemiLength!==y||w.numDirectionalShadows!==N||w.numPointShadows!==F||w.numSpotShadows!==b||w.numSpotMaps!==C||w.numLightProbes!==I)&&(i.directional.length=_,i.spot.length=T,i.rectArea.length=S,i.point.length=M,i.hemi.length=y,i.directionalShadow.length=N,i.directionalShadowMap.length=N,i.pointShadow.length=F,i.pointShadowMap.length=F,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=N,i.pointShadowMatrix.length=F,i.spotLightMatrix.length=b+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=I,w.directionalLength=_,w.pointLength=M,w.spotLength=T,w.rectAreaLength=S,w.hemiLength=y,w.numDirectionalShadows=N,w.numPointShadows=F,w.numSpotShadows=b,w.numSpotMaps=C,w.numLightProbes=I,i.version=kE++)}function f(p,x){let g=0,m=0,_=0,M=0,T=0;const S=x.matrixWorldInverse;for(let y=0,N=p.length;y<N;y++){const F=p[y];if(F.isDirectionalLight){const b=i.directional[g];b.direction.setFromMatrixPosition(F.matrixWorld),a.setFromMatrixPosition(F.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(S),g++}else if(F.isSpotLight){const b=i.spot[_];b.position.setFromMatrixPosition(F.matrixWorld),b.position.applyMatrix4(S),b.direction.setFromMatrixPosition(F.matrixWorld),a.setFromMatrixPosition(F.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(S),_++}else if(F.isRectAreaLight){const b=i.rectArea[M];b.position.setFromMatrixPosition(F.matrixWorld),b.position.applyMatrix4(S),c.identity(),o.copy(F.matrixWorld),o.premultiply(S),c.extractRotation(o),b.halfWidth.set(F.width*.5,0,0),b.halfHeight.set(0,F.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),M++}else if(F.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(F.matrixWorld),b.position.applyMatrix4(S),m++}else if(F.isHemisphereLight){const b=i.hemi[T];b.direction.setFromMatrixPosition(F.matrixWorld),b.direction.transformDirection(S),T++}}}return{setup:d,setupView:f,state:i}}function j0(s){const e=new BE(s),t=[],i=[],a=[];function o(m){g.camera=m,t.length=0,i.length=0,a.length=0}function c(m){t.push(m)}function d(m){i.push(m)}function f(m){a.push(m)}function p(){e.setup(t)}function x(m){e.setupView(t,m)}const g={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:g,setupLights:p,setupLightsView:x,pushLight:c,pushShadow:d,pushLightProbeGrid:f}}function VE(s){let e=new WeakMap;function t(a,o=0){const c=e.get(a);let d;return c===void 0?(d=new j0(s),e.set(a,[d])):o>=c.length?(d=new j0(s),c.push(d)):d=c[o],d}function i(){e=new WeakMap}return{get:t,dispose:i}}const HE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GE=`uniform sampler2D shadow_pass;
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
}`,WE=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],XE=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],eg=new Gt,Mo=new j,Kd=new j;function qE(s,e,t){let i=new ph;const a=new dt,o=new dt,c=new rn,d=new n1,f=new i1,p={},x=t.maxTextureSize,g={[Yr]:Qn,[Qn]:Yr,[Gi]:Gi},m=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:HE,fragmentShader:GE}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const M=new _i;M.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ne(M,m),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ao;let y=this.type;this.render=function(P,I,w){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;this.type===W_&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ao);const L=s.getRenderTarget(),V=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),q=s.state;q.setBlending(ur),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const oe=y!==this.type;oe&&I.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(Z=>Z.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,Z=P.length;fe<Z;fe++){const ue=P[fe],$=ue.shadow;if($===void 0){ut("WebGLShadowMap:",ue,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);const Y=$.getFrameExtents();a.multiply(Y),o.copy($.mapSize),(a.x>x||a.y>x)&&(a.x>x&&(o.x=Math.floor(x/Y.x),a.x=o.x*Y.x,$.mapSize.x=o.x),a.y>x&&(o.y=Math.floor(x/Y.y),a.y=o.y*Y.y,$.mapSize.y=o.y));const le=s.state.buffers.depth.getReversed();if($.camera._reversedDepth=le,$.map===null||oe===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===wo){if(ue.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new qi(a.x,a.y,{format:Es,type:pr,minFilter:Un,magFilter:Un,generateMipmaps:!1}),$.map.texture.name=ue.name+".shadowMap",$.map.depthTexture=new Ma(a.x,a.y,Ii),$.map.depthTexture.name=ue.name+".shadowMapDepth",$.map.depthTexture.format=mr,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=ln,$.map.depthTexture.magFilter=ln}else ue.isPointLight?($.map=new Wg(a.x),$.map.depthTexture=new Zx(a.x,Yi)):($.map=new qi(a.x,a.y),$.map.depthTexture=new Ma(a.x,a.y,Yi)),$.map.depthTexture.name=ue.name+".shadowMap",$.map.depthTexture.format=mr,this.type===Ao?($.map.depthTexture.compareFunction=le?dh:uh,$.map.depthTexture.minFilter=Un,$.map.depthTexture.magFilter=Un):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=ln,$.map.depthTexture.magFilter=ln);$.camera.updateProjectionMatrix()}const ce=$.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<ce;O++){if($.map.isWebGLCubeRenderTarget)s.setRenderTarget($.map,O),s.clear();else{O===0&&(s.setRenderTarget($.map),s.clear());const J=$.getViewport(O);c.set(o.x*J.x,o.y*J.y,o.x*J.z,o.y*J.w),q.viewport(c)}if(ue.isPointLight){const J=$.camera,ke=$.matrix,je=ue.distance||J.far;je!==J.far&&(J.far=je,J.updateProjectionMatrix()),Mo.setFromMatrixPosition(ue.matrixWorld),J.position.copy(Mo),Kd.copy(J.position),Kd.add(WE[O]),J.up.copy(XE[O]),J.lookAt(Kd),J.updateMatrixWorld(),ke.makeTranslation(-Mo.x,-Mo.y,-Mo.z),eg.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$._frustum.setFromProjectionMatrix(eg,J.coordinateSystem,J.reversedDepth)}else $.updateMatrices(ue);i=$.getFrustum(),b(I,w,$.camera,ue,this.type)}$.isPointLightShadow!==!0&&this.type===wo&&N($,w),$.needsUpdate=!1}y=this.type,S.needsUpdate=!1,s.setRenderTarget(L,V,z)};function N(P,I){const w=e.update(T);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,_.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new qi(a.x,a.y,{format:Es,type:pr})),m.uniforms.shadow_pass.value=P.map.depthTexture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(I,null,w,m,T,null),_.uniforms.shadow_pass.value=P.mapPass.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(I,null,w,_,T,null)}function F(P,I,w,L){let V=null;const z=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(z!==void 0)V=z;else if(V=w.isPointLight===!0?f:d,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const q=V.uuid,oe=I.uuid;let fe=p[q];fe===void 0&&(fe={},p[q]=fe);let Z=fe[oe];Z===void 0&&(Z=V.clone(),fe[oe]=Z,I.addEventListener("dispose",C)),V=Z}if(V.visible=I.visible,V.wireframe=I.wireframe,L===wo?V.side=I.shadowSide!==null?I.shadowSide:I.side:V.side=I.shadowSide!==null?I.shadowSide:g[I.side],V.alphaMap=I.alphaMap,V.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,V.map=I.map,V.clipShadows=I.clipShadows,V.clippingPlanes=I.clippingPlanes,V.clipIntersection=I.clipIntersection,V.displacementMap=I.displacementMap,V.displacementScale=I.displacementScale,V.displacementBias=I.displacementBias,V.wireframeLinewidth=I.wireframeLinewidth,V.linewidth=I.linewidth,w.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const q=s.properties.get(V);q.light=w}return V}function b(P,I,w,L,V){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&V===wo)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);const oe=e.update(P),fe=P.material;if(Array.isArray(fe)){const Z=oe.groups;for(let ue=0,$=Z.length;ue<$;ue++){const Y=Z[ue],le=fe[Y.materialIndex];if(le&&le.visible){const ce=F(P,le,L,V);P.onBeforeShadow(s,P,I,w,oe,ce,Y),s.renderBufferDirect(w,null,oe,ce,P,Y),P.onAfterShadow(s,P,I,w,oe,ce,Y)}}}else if(fe.visible){const Z=F(P,fe,L,V);P.onBeforeShadow(s,P,I,w,oe,Z,null),s.renderBufferDirect(w,null,oe,Z,P,null),P.onAfterShadow(s,P,I,w,oe,Z,null)}}const q=P.children;for(let oe=0,fe=q.length;oe<fe;oe++)b(q[oe],I,w,L,V)}function C(P){P.target.removeEventListener("dispose",C);for(const w in p){const L=p[w],V=P.target.uuid;V in L&&(L[V].dispose(),delete L[V])}}}function YE(s,e){function t(){let H=!1;const Re=new rn;let pe=null;const Pe=new rn(0,0,0,0);return{setMask:function(Ue){pe!==Ue&&!H&&(s.colorMask(Ue,Ue,Ue,Ue),pe=Ue)},setLocked:function(Ue){H=Ue},setClear:function(Ue,_e,$e,qe,zt){zt===!0&&(Ue*=qe,_e*=qe,$e*=qe),Re.set(Ue,_e,$e,qe),Pe.equals(Re)===!1&&(s.clearColor(Ue,_e,$e,qe),Pe.copy(Re))},reset:function(){H=!1,pe=null,Pe.set(-1,0,0,0)}}}function i(){let H=!1,Re=!1,pe=null,Pe=null,Ue=null;return{setReversed:function(_e){if(Re!==_e){const $e=e.get("EXT_clip_control");_e?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Re=_e;const qe=Ue;Ue=null,this.setClear(qe)}},getReversed:function(){return Re},setTest:function(_e){_e?me(s.DEPTH_TEST):ze(s.DEPTH_TEST)},setMask:function(_e){pe!==_e&&!H&&(s.depthMask(_e),pe=_e)},setFunc:function(_e){if(Re&&(_e=Ex[_e]),Pe!==_e){switch(_e){case af:s.depthFunc(s.NEVER);break;case of:s.depthFunc(s.ALWAYS);break;case lf:s.depthFunc(s.LESS);break;case ya:s.depthFunc(s.LEQUAL);break;case cf:s.depthFunc(s.EQUAL);break;case uf:s.depthFunc(s.GEQUAL);break;case df:s.depthFunc(s.GREATER);break;case ff:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=_e}},setLocked:function(_e){H=_e},setClear:function(_e){Ue!==_e&&(Ue=_e,Re&&(_e=1-_e),s.clearDepth(_e))},reset:function(){H=!1,pe=null,Pe=null,Ue=null,Re=!1}}}function a(){let H=!1,Re=null,pe=null,Pe=null,Ue=null,_e=null,$e=null,qe=null,zt=null;return{setTest:function(It){H||(It?me(s.STENCIL_TEST):ze(s.STENCIL_TEST))},setMask:function(It){Re!==It&&!H&&(s.stencilMask(It),Re=It)},setFunc:function(It,Rn,oi){(pe!==It||Pe!==Rn||Ue!==oi)&&(s.stencilFunc(It,Rn,oi),pe=It,Pe=Rn,Ue=oi)},setOp:function(It,Rn,oi){(_e!==It||$e!==Rn||qe!==oi)&&(s.stencilOp(It,Rn,oi),_e=It,$e=Rn,qe=oi)},setLocked:function(It){H=It},setClear:function(It){zt!==It&&(s.clearStencil(It),zt=It)},reset:function(){H=!1,Re=null,pe=null,Pe=null,Ue=null,_e=null,$e=null,qe=null,zt=null}}}const o=new t,c=new i,d=new a,f=new WeakMap,p=new WeakMap;let x={},g={},m={},_=new WeakMap,M=[],T=null,S=!1,y=null,N=null,F=null,b=null,C=null,P=null,I=null,w=new vt(0,0,0),L=0,V=!1,z=null,q=null,oe=null,fe=null,Z=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Y=0;const le=s.getParameter(s.VERSION);le.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(le)[1]),$=Y>=1):le.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),$=Y>=2);let ce=null,O={};const J=s.getParameter(s.SCISSOR_BOX),ke=s.getParameter(s.VIEWPORT),je=new rn().fromArray(J),Xe=new rn().fromArray(ke);function re(H,Re,pe,Pe){const Ue=new Uint8Array(4),_e=s.createTexture();s.bindTexture(H,_e),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<pe;$e++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(Re+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return _e}const xe={};xe[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),xe[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xe[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),d.setClear(0),me(s.DEPTH_TEST),c.setFunc(ya),$t(!1),sn(Qm),me(s.CULL_FACE),Tt(ur);function me(H){x[H]!==!0&&(s.enable(H),x[H]=!0)}function ze(H){x[H]!==!1&&(s.disable(H),x[H]=!1)}function it(H,Re){return m[H]!==Re?(s.bindFramebuffer(H,Re),m[H]=Re,H===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Re),H===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function rt(H,Re){let pe=M,Pe=!1;if(H){pe=_.get(Re),pe===void 0&&(pe=[],_.set(Re,pe));const Ue=H.textures;if(pe.length!==Ue.length||pe[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,$e=Ue.length;_e<$e;_e++)pe[_e]=s.COLOR_ATTACHMENT0+_e;pe.length=Ue.length,Pe=!0}}else pe[0]!==s.BACK&&(pe[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers(pe)}function Yt(H){return T!==H?(s.useProgram(H),T=H,!0):!1}const mt={[_s]:s.FUNC_ADD,[q_]:s.FUNC_SUBTRACT,[Y_]:s.FUNC_REVERSE_SUBTRACT};mt[$_]=s.MIN,mt[K_]=s.MAX;const Lt={[Z_]:s.ZERO,[J_]:s.ONE,[Q_]:s.SRC_COLOR,[rf]:s.SRC_ALPHA,[rx]:s.SRC_ALPHA_SATURATE,[nx]:s.DST_COLOR,[ex]:s.DST_ALPHA,[j_]:s.ONE_MINUS_SRC_COLOR,[sf]:s.ONE_MINUS_SRC_ALPHA,[ix]:s.ONE_MINUS_DST_COLOR,[tx]:s.ONE_MINUS_DST_ALPHA,[sx]:s.CONSTANT_COLOR,[ax]:s.ONE_MINUS_CONSTANT_COLOR,[ox]:s.CONSTANT_ALPHA,[lx]:s.ONE_MINUS_CONSTANT_ALPHA};function Tt(H,Re,pe,Pe,Ue,_e,$e,qe,zt,It){if(H===ur){S===!0&&(ze(s.BLEND),S=!1);return}if(S===!1&&(me(s.BLEND),S=!0),H!==X_){if(H!==y||It!==V){if((N!==_s||C!==_s)&&(s.blendEquation(s.FUNC_ADD),N=_s,C=_s),It)switch(H){case ga:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jm:s.blendFunc(s.ONE,s.ONE);break;case e0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case t0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Rt("WebGLState: Invalid blending: ",H);break}else switch(H){case ga:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case e0:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case t0:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",H);break}F=null,b=null,P=null,I=null,w.set(0,0,0),L=0,y=H,V=It}return}Ue=Ue||Re,_e=_e||pe,$e=$e||Pe,(Re!==N||Ue!==C)&&(s.blendEquationSeparate(mt[Re],mt[Ue]),N=Re,C=Ue),(pe!==F||Pe!==b||_e!==P||$e!==I)&&(s.blendFuncSeparate(Lt[pe],Lt[Pe],Lt[_e],Lt[$e]),F=pe,b=Pe,P=_e,I=$e),(qe.equals(w)===!1||zt!==L)&&(s.blendColor(qe.r,qe.g,qe.b,zt),w.copy(qe),L=zt),y=H,V=!1}function St(H,Re){H.side===Gi?ze(s.CULL_FACE):me(s.CULL_FACE);let pe=H.side===Qn;Re&&(pe=!pe),$t(pe),H.blending===ga&&H.transparent===!1?Tt(ur):Tt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),o.setMask(H.colorWrite);const Pe=H.stencilWrite;d.setTest(Pe),Pe&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Qt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):ze(s.SAMPLE_ALPHA_TO_COVERAGE)}function $t(H){z!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),z=H)}function sn(H){H!==H_?(me(s.CULL_FACE),H!==q&&(H===Qm?s.cullFace(s.BACK):H===G_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ze(s.CULL_FACE),q=H}function an(H){H!==oe&&($&&s.lineWidth(H),oe=H)}function Qt(H,Re,pe){H?(me(s.POLYGON_OFFSET_FILL),(fe!==Re||Z!==pe)&&(fe=Re,Z=pe,c.getReversed()&&(Re=-Re),s.polygonOffset(Re,pe))):ze(s.POLYGON_OFFSET_FILL)}function Nt(H){H?me(s.SCISSOR_TEST):ze(s.SCISSOR_TEST)}function Kt(H){H===void 0&&(H=s.TEXTURE0+ue-1),ce!==H&&(s.activeTexture(H),ce=H)}function W(H,Re,pe){pe===void 0&&(ce===null?pe=s.TEXTURE0+ue-1:pe=ce);let Pe=O[pe];Pe===void 0&&(Pe={type:void 0,texture:void 0},O[pe]=Pe),(Pe.type!==H||Pe.texture!==Re)&&(ce!==pe&&(s.activeTexture(pe),ce=pe),s.bindTexture(H,Re||xe[H]),Pe.type=H,Pe.texture=Re)}function En(){const H=O[ce];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Ct(){try{s.compressedTexImage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function E(){try{s.texSubImage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function K(){try{s.texSubImage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function ie(){try{s.compressedTexSubImage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function de(){try{s.compressedTexSubImage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function Ee(){try{s.texStorage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function Ce(){try{s.texStorage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function he(){try{s.texImage2D(...arguments)}catch(H){Rt("WebGLState:",H)}}function ge(){try{s.texImage3D(...arguments)}catch(H){Rt("WebGLState:",H)}}function Ie(H){return g[H]!==void 0?g[H]:s.getParameter(H)}function Je(H,Re){g[H]!==Re&&(s.pixelStorei(H,Re),g[H]=Re)}function De(H){je.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),je.copy(H))}function be(H){Xe.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Xe.copy(H))}function nt(H,Re){let pe=p.get(Re);pe===void 0&&(pe=new WeakMap,p.set(Re,pe));let Pe=pe.get(H);Pe===void 0&&(Pe=s.getUniformBlockIndex(Re,H.name),pe.set(H,Pe))}function st(H,Re){const Pe=p.get(Re).get(H);f.get(Re)!==Pe&&(s.uniformBlockBinding(Re,Pe,H.__bindingPointIndex),f.set(Re,Pe))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},g={},ce=null,O={},m={},_=new WeakMap,M=[],T=null,S=!1,y=null,N=null,F=null,b=null,C=null,P=null,I=null,w=new vt(0,0,0),L=0,V=!1,z=null,q=null,oe=null,fe=null,Z=null,je.set(0,0,s.canvas.width,s.canvas.height),Xe.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),d.reset()}return{buffers:{color:o,depth:c,stencil:d},enable:me,disable:ze,bindFramebuffer:it,drawBuffers:rt,useProgram:Yt,setBlending:Tt,setMaterial:St,setFlipSided:$t,setCullFace:sn,setLineWidth:an,setPolygonOffset:Qt,setScissorTest:Nt,activeTexture:Kt,bindTexture:W,unbindTexture:En,compressedTexImage2D:Ct,compressedTexImage3D:D,texImage2D:he,texImage3D:ge,pixelStorei:Je,getParameter:Ie,updateUBOMapping:nt,uniformBlockBinding:st,texStorage2D:Ee,texStorage3D:Ce,texSubImage2D:E,texSubImage3D:K,compressedTexSubImage2D:ie,compressedTexSubImage3D:de,scissor:De,viewport:be,reset:lt}}function $E(s,e,t,i,a,o,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new dt,x=new WeakMap,g=new Set;let m;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,E){return M?new OffscreenCanvas(D,E):Mc("canvas")}function S(D,E,K){let ie=1;const de=Ct(D);if((de.width>K||de.height>K)&&(ie=K/Math.max(de.width,de.height)),ie<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Ee=Math.floor(ie*de.width),Ce=Math.floor(ie*de.height);m===void 0&&(m=T(Ee,Ce));const he=E?T(Ee,Ce):m;return he.width=Ee,he.height=Ce,he.getContext("2d").drawImage(D,0,0,Ee,Ce),ut("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Ee+"x"+Ce+")."),he}else return"data"in D&&ut("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),D;return D}function y(D){return D.generateMipmaps}function N(D){s.generateMipmap(D)}function F(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(D,E,K,ie,de,Ee=!1){if(D!==null){if(s[D]!==void 0)return s[D];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ce;ie&&(Ce=e.get("EXT_texture_norm16"),Ce||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=E;if(E===s.RED&&(K===s.FLOAT&&(he=s.R32F),K===s.HALF_FLOAT&&(he=s.R16F),K===s.UNSIGNED_BYTE&&(he=s.R8),K===s.UNSIGNED_SHORT&&Ce&&(he=Ce.R16_EXT),K===s.SHORT&&Ce&&(he=Ce.R16_SNORM_EXT)),E===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(he=s.R8UI),K===s.UNSIGNED_SHORT&&(he=s.R16UI),K===s.UNSIGNED_INT&&(he=s.R32UI),K===s.BYTE&&(he=s.R8I),K===s.SHORT&&(he=s.R16I),K===s.INT&&(he=s.R32I)),E===s.RG&&(K===s.FLOAT&&(he=s.RG32F),K===s.HALF_FLOAT&&(he=s.RG16F),K===s.UNSIGNED_BYTE&&(he=s.RG8),K===s.UNSIGNED_SHORT&&Ce&&(he=Ce.RG16_EXT),K===s.SHORT&&Ce&&(he=Ce.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(he=s.RG8UI),K===s.UNSIGNED_SHORT&&(he=s.RG16UI),K===s.UNSIGNED_INT&&(he=s.RG32UI),K===s.BYTE&&(he=s.RG8I),K===s.SHORT&&(he=s.RG16I),K===s.INT&&(he=s.RG32I)),E===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(he=s.RGB8UI),K===s.UNSIGNED_SHORT&&(he=s.RGB16UI),K===s.UNSIGNED_INT&&(he=s.RGB32UI),K===s.BYTE&&(he=s.RGB8I),K===s.SHORT&&(he=s.RGB16I),K===s.INT&&(he=s.RGB32I)),E===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),K===s.UNSIGNED_INT&&(he=s.RGBA32UI),K===s.BYTE&&(he=s.RGBA8I),K===s.SHORT&&(he=s.RGBA16I),K===s.INT&&(he=s.RGBA32I)),E===s.RGB&&(K===s.UNSIGNED_SHORT&&Ce&&(he=Ce.RGB16_EXT),K===s.SHORT&&Ce&&(he=Ce.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(he=s.R11F_G11F_B10F)),E===s.RGBA){const ge=Ee?Sc:Et.getTransfer(de);K===s.FLOAT&&(he=s.RGBA32F),K===s.HALF_FLOAT&&(he=s.RGBA16F),K===s.UNSIGNED_BYTE&&(he=ge===Ot?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&Ce&&(he=Ce.RGBA16_EXT),K===s.SHORT&&Ce&&(he=Ce.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function C(D,E){let K;return D?E===null||E===Yi||E===bo?K=s.DEPTH24_STENCIL8:E===Ii?K=s.DEPTH32F_STENCIL8:E===Ro&&(K=s.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yi||E===bo?K=s.DEPTH_COMPONENT24:E===Ii?K=s.DEPTH_COMPONENT32F:E===Ro&&(K=s.DEPTH_COMPONENT16),K}function P(D,E){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==ln&&D.minFilter!==Un?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function I(D){const E=D.target;E.removeEventListener("dispose",I),L(E),E.isVideoTexture&&x.delete(E),E.isHTMLTexture&&g.delete(E)}function w(D){const E=D.target;E.removeEventListener("dispose",w),z(E)}function L(D){const E=i.get(D);if(E.__webglInit===void 0)return;const K=D.source,ie=_.get(K);if(ie){const de=ie[E.__cacheKey];de.usedTimes--,de.usedTimes===0&&V(D),Object.keys(ie).length===0&&_.delete(K)}i.remove(D)}function V(D){const E=i.get(D);s.deleteTexture(E.__webglTexture);const K=D.source,ie=_.get(K);delete ie[E.__cacheKey],c.memory.textures--}function z(D){const E=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(E.__webglFramebuffer[ie]))for(let de=0;de<E.__webglFramebuffer[ie].length;de++)s.deleteFramebuffer(E.__webglFramebuffer[ie][de]);else s.deleteFramebuffer(E.__webglFramebuffer[ie]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ie])}else{if(Array.isArray(E.__webglFramebuffer))for(let ie=0;ie<E.__webglFramebuffer.length;ie++)s.deleteFramebuffer(E.__webglFramebuffer[ie]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ie=0;ie<E.__webglColorRenderbuffer.length;ie++)E.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ie]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=D.textures;for(let ie=0,de=K.length;ie<de;ie++){const Ee=i.get(K[ie]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),c.memory.textures--),i.remove(K[ie])}i.remove(D)}let q=0;function oe(){q=0}function fe(){return q}function Z(D){q=D}function ue(){const D=q;return D>=a.maxTextures&&ut("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),q+=1,D}function $(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function Y(D,E){const K=i.get(D);if(D.isVideoTexture&&W(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&K.__version!==D.version){const ie=D.image;if(ie===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{ze(K,D,E);return}}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+E)}function le(D,E){const K=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){ze(K,D,E);return}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+E)}function ce(D,E){const K=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){ze(K,D,E);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+E)}function O(D,E){const K=i.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&K.__version!==D.version){it(K,D,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+E)}const J={[vc]:s.REPEAT,[cr]:s.CLAMP_TO_EDGE,[hf]:s.MIRRORED_REPEAT},ke={[ln]:s.NEAREST,[dx]:s.NEAREST_MIPMAP_NEAREST,[Ol]:s.NEAREST_MIPMAP_LINEAR,[Un]:s.LINEAR,[gd]:s.LINEAR_MIPMAP_NEAREST,[ys]:s.LINEAR_MIPMAP_LINEAR},je={[px]:s.NEVER,[xx]:s.ALWAYS,[mx]:s.LESS,[uh]:s.LEQUAL,[gx]:s.EQUAL,[dh]:s.GEQUAL,[vx]:s.GREATER,[_x]:s.NOTEQUAL};function Xe(D,E){if(E.type===Ii&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Un||E.magFilter===gd||E.magFilter===Ol||E.magFilter===ys||E.minFilter===Un||E.minFilter===gd||E.minFilter===Ol||E.minFilter===ys)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,J[E.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,J[E.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,J[E.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,ke[E.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,ke[E.minFilter]),E.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,je[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ln||E.minFilter!==Ol&&E.minFilter!==ys||E.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function re(D,E){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",I));const ie=E.source;let de=_.get(ie);de===void 0&&(de={},_.set(ie,de));const Ee=$(E);if(Ee!==D.__cacheKey){de[Ee]===void 0&&(de[Ee]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,K=!0),de[Ee].usedTimes++;const Ce=de[D.__cacheKey];Ce!==void 0&&(de[D.__cacheKey].usedTimes--,Ce.usedTimes===0&&V(E)),D.__cacheKey=Ee,D.__webglTexture=de[Ee].texture}return K}function xe(D,E,K){return Math.floor(Math.floor(D/K)/E)}function me(D,E,K,ie){const Ee=D.updateRanges;if(Ee.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,K,ie,E.data);else{Ee.sort((Je,De)=>Je.start-De.start);let Ce=0;for(let Je=1;Je<Ee.length;Je++){const De=Ee[Ce],be=Ee[Je],nt=De.start+De.count,st=xe(be.start,E.width,4),lt=xe(De.start,E.width,4);be.start<=nt+1&&st===lt&&xe(be.start+be.count-1,E.width,4)===st?De.count=Math.max(De.count,be.start+be.count-De.start):(++Ce,Ee[Ce]=be)}Ee.length=Ce+1;const he=t.getParameter(s.UNPACK_ROW_LENGTH),ge=t.getParameter(s.UNPACK_SKIP_PIXELS),Ie=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Je=0,De=Ee.length;Je<De;Je++){const be=Ee[Je],nt=Math.floor(be.start/4),st=Math.ceil(be.count/4),lt=nt%E.width,H=Math.floor(nt/E.width),Re=st,pe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),t.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,lt,H,Re,pe,K,ie,E.data)}D.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,he),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ie)}}function ze(D,E,K){let ie=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=s.TEXTURE_3D);const de=re(D,E),Ee=E.source;t.bindTexture(ie,D.__webglTexture,s.TEXTURE0+K);const Ce=i.get(Ee);if(Ee.version!==Ce.__version||de===!0){if(t.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const pe=Et.getPrimaries(Et.workingColorSpace),Pe=E.colorSpace===Vr?null:Et.getPrimaries(E.colorSpace),Ue=E.colorSpace===Vr||pe===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let ge=S(E.image,!1,a.maxTextureSize);ge=En(E,ge);const Ie=o.convert(E.format,E.colorSpace),Je=o.convert(E.type);let De=b(E.internalFormat,Ie,Je,E.normalized,E.colorSpace,E.isVideoTexture);Xe(ie,E);let be;const nt=E.mipmaps,st=E.isVideoTexture!==!0,lt=Ce.__version===void 0||de===!0,H=Ee.dataReady,Re=P(E,ge);if(E.isDepthTexture)De=C(E.format===Ss,E.type),lt&&(st?t.texStorage2D(s.TEXTURE_2D,1,De,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,De,ge.width,ge.height,0,Ie,Je,null));else if(E.isDataTexture)if(nt.length>0){st&&lt&&t.texStorage2D(s.TEXTURE_2D,Re,De,nt[0].width,nt[0].height);for(let pe=0,Pe=nt.length;pe<Pe;pe++)be=nt[pe],st?H&&t.texSubImage2D(s.TEXTURE_2D,pe,0,0,be.width,be.height,Ie,Je,be.data):t.texImage2D(s.TEXTURE_2D,pe,De,be.width,be.height,0,Ie,Je,be.data);E.generateMipmaps=!1}else st?(lt&&t.texStorage2D(s.TEXTURE_2D,Re,De,ge.width,ge.height),H&&me(E,ge,Ie,Je)):t.texImage2D(s.TEXTURE_2D,0,De,ge.width,ge.height,0,Ie,Je,ge.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){st&&lt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,De,nt[0].width,nt[0].height,ge.depth);for(let pe=0,Pe=nt.length;pe<Pe;pe++)if(be=nt[pe],E.format!==Di)if(Ie!==null)if(st){if(H)if(E.layerUpdates.size>0){const Ue=L0(be.width,be.height,E.format,E.type);for(const _e of E.layerUpdates){const $e=be.data.subarray(_e*Ue/be.data.BYTES_PER_ELEMENT,(_e+1)*Ue/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,_e,be.width,be.height,1,Ie,$e)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,be.width,be.height,ge.depth,Ie,be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pe,De,be.width,be.height,ge.depth,0,be.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,be.width,be.height,ge.depth,Ie,Je,be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,pe,De,be.width,be.height,ge.depth,0,Ie,Je,be.data)}else{st&&lt&&t.texStorage2D(s.TEXTURE_2D,Re,De,nt[0].width,nt[0].height);for(let pe=0,Pe=nt.length;pe<Pe;pe++)be=nt[pe],E.format!==Di?Ie!==null?st?H&&t.compressedTexSubImage2D(s.TEXTURE_2D,pe,0,0,be.width,be.height,Ie,be.data):t.compressedTexImage2D(s.TEXTURE_2D,pe,De,be.width,be.height,0,be.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?H&&t.texSubImage2D(s.TEXTURE_2D,pe,0,0,be.width,be.height,Ie,Je,be.data):t.texImage2D(s.TEXTURE_2D,pe,De,be.width,be.height,0,Ie,Je,be.data)}else if(E.isDataArrayTexture)if(st){if(lt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,De,ge.width,ge.height,ge.depth),H)if(E.layerUpdates.size>0){const pe=L0(ge.width,ge.height,E.format,E.type);for(const Pe of E.layerUpdates){const Ue=ge.data.subarray(Pe*pe/ge.data.BYTES_PER_ELEMENT,(Pe+1)*pe/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pe,ge.width,ge.height,1,Ie,Je,Ue)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ie,Je,ge.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,De,ge.width,ge.height,ge.depth,0,Ie,Je,ge.data);else if(E.isData3DTexture)st?(lt&&t.texStorage3D(s.TEXTURE_3D,Re,De,ge.width,ge.height,ge.depth),H&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ie,Je,ge.data)):t.texImage3D(s.TEXTURE_3D,0,De,ge.width,ge.height,ge.depth,0,Ie,Je,ge.data);else if(E.isFramebufferTexture){if(lt)if(st)t.texStorage2D(s.TEXTURE_2D,Re,De,ge.width,ge.height);else{let pe=ge.width,Pe=ge.height;for(let Ue=0;Ue<Re;Ue++)t.texImage2D(s.TEXTURE_2D,Ue,De,pe,Pe,0,Ie,Je,null),pe>>=1,Pe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const pe=s.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),ge.parentNode!==pe){pe.appendChild(ge),g.add(E),pe.onpaint=Pe=>{const Ue=Pe.changedElements;for(const _e of g)Ue.includes(_e.image)&&(_e.needsUpdate=!0)},pe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ge);else{const Ue=s.RGBA,_e=s.RGBA,$e=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ue,_e,$e,ge)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(nt.length>0){if(st&&lt){const pe=Ct(nt[0]);t.texStorage2D(s.TEXTURE_2D,Re,De,pe.width,pe.height)}for(let pe=0,Pe=nt.length;pe<Pe;pe++)be=nt[pe],st?H&&t.texSubImage2D(s.TEXTURE_2D,pe,0,0,Ie,Je,be):t.texImage2D(s.TEXTURE_2D,pe,De,Ie,Je,be);E.generateMipmaps=!1}else if(st){if(lt){const pe=Ct(ge);t.texStorage2D(s.TEXTURE_2D,Re,De,pe.width,pe.height)}H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,Je,ge)}else t.texImage2D(s.TEXTURE_2D,0,De,Ie,Je,ge);y(E)&&N(ie),Ce.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function it(D,E,K){if(E.image.length!==6)return;const ie=re(D,E),de=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+K);const Ee=i.get(de);if(de.version!==Ee.__version||ie===!0){t.activeTexture(s.TEXTURE0+K);const Ce=Et.getPrimaries(Et.workingColorSpace),he=E.colorSpace===Vr?null:Et.getPrimaries(E.colorSpace),ge=E.colorSpace===Vr||Ce===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ie=E.isCompressedTexture||E.image[0].isCompressedTexture,Je=E.image[0]&&E.image[0].isDataTexture,De=[];for(let _e=0;_e<6;_e++)!Ie&&!Je?De[_e]=S(E.image[_e],!0,a.maxCubemapSize):De[_e]=Je?E.image[_e].image:E.image[_e],De[_e]=En(E,De[_e]);const be=De[0],nt=o.convert(E.format,E.colorSpace),st=o.convert(E.type),lt=b(E.internalFormat,nt,st,E.normalized,E.colorSpace),H=E.isVideoTexture!==!0,Re=Ee.__version===void 0||ie===!0,pe=de.dataReady;let Pe=P(E,be);Xe(s.TEXTURE_CUBE_MAP,E);let Ue;if(Ie){H&&Re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,lt,be.width,be.height);for(let _e=0;_e<6;_e++){Ue=De[_e].mipmaps;for(let $e=0;$e<Ue.length;$e++){const qe=Ue[$e];E.format!==Di?nt!==null?H?pe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e,0,0,qe.width,qe.height,nt,qe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e,lt,qe.width,qe.height,0,qe.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e,0,0,qe.width,qe.height,nt,st,qe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e,lt,qe.width,qe.height,0,nt,st,qe.data)}}}else{if(Ue=E.mipmaps,H&&Re){Ue.length>0&&Pe++;const _e=Ct(De[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,lt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Je){H?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,De[_e].width,De[_e].height,nt,st,De[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,lt,De[_e].width,De[_e].height,0,nt,st,De[_e].data);for(let $e=0;$e<Ue.length;$e++){const zt=Ue[$e].image[_e].image;H?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e+1,0,0,zt.width,zt.height,nt,st,zt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e+1,lt,zt.width,zt.height,0,nt,st,zt.data)}}else{H?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,nt,st,De[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,lt,nt,st,De[_e]);for(let $e=0;$e<Ue.length;$e++){const qe=Ue[$e];H?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e+1,0,0,nt,st,qe.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e+1,lt,nt,st,qe.image[_e])}}}y(E)&&N(s.TEXTURE_CUBE_MAP),Ee.__version=de.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function rt(D,E,K,ie,de,Ee){const Ce=o.convert(K.format,K.colorSpace),he=o.convert(K.type),ge=b(K.internalFormat,Ce,he,K.normalized,K.colorSpace),Ie=i.get(E),Je=i.get(K);if(Je.__renderTarget=E,!Ie.__hasExternalTextures){const De=Math.max(1,E.width>>Ee),be=Math.max(1,E.height>>Ee);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?t.texImage3D(de,Ee,ge,De,be,E.depth,0,Ce,he,null):t.texImage2D(de,Ee,ge,De,be,0,Ce,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),Kt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,de,Je.__webglTexture,0,Nt(E)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,de,Je.__webglTexture,Ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(D,E,K){if(s.bindRenderbuffer(s.RENDERBUFFER,D),E.depthBuffer){const ie=E.depthTexture,de=ie&&ie.isDepthTexture?ie.type:null,Ee=C(E.stencilBuffer,de),Ce=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Kt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Nt(E),Ee,E.width,E.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt(E),Ee,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ce,s.RENDERBUFFER,D)}else{const ie=E.textures;for(let de=0;de<ie.length;de++){const Ee=ie[de],Ce=o.convert(Ee.format,Ee.colorSpace),he=o.convert(Ee.type),ge=b(Ee.internalFormat,Ce,he,Ee.normalized,Ee.colorSpace);Kt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Nt(E),ge,E.width,E.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt(E),ge,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ge,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function mt(D,E,K){const ie=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=i.get(E.depthTexture);if(de.__renderTarget=E,(!de.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ie){if(de.__webglInit===void 0&&(de.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),de.__webglTexture===void 0){de.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),Xe(s.TEXTURE_CUBE_MAP,E.depthTexture);const Ie=o.convert(E.depthTexture.format),Je=o.convert(E.depthTexture.type);let De;E.depthTexture.format===mr?De=s.DEPTH_COMPONENT24:E.depthTexture.format===Ss&&(De=s.DEPTH24_STENCIL8);for(let be=0;be<6;be++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,De,E.width,E.height,0,Ie,Je,null)}}else Y(E.depthTexture,0);const Ee=de.__webglTexture,Ce=Nt(E),he=ie?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,ge=E.depthTexture.format===Ss?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===mr)Kt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,he,Ee,0,Ce):s.framebufferTexture2D(s.FRAMEBUFFER,ge,he,Ee,0);else if(E.depthTexture.format===Ss)Kt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,he,Ee,0,Ce):s.framebufferTexture2D(s.FRAMEBUFFER,ge,he,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Lt(D){const E=i.get(D),K=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const ie=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ie){const de=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ie.removeEventListener("dispose",de)};ie.addEventListener("dispose",de),E.__depthDisposeCallback=de}E.__boundDepthTexture=ie}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(K)for(let ie=0;ie<6;ie++)mt(E.__webglFramebuffer[ie],D,ie);else{const ie=D.texture.mipmaps;ie&&ie.length>0?mt(E.__webglFramebuffer[0],D,0):mt(E.__webglFramebuffer,D,0)}else if(K){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]===void 0)E.__webglDepthbuffer[ie]=s.createRenderbuffer(),Yt(E.__webglDepthbuffer[ie],D,!1);else{const de=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer[ie];s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,Ee)}}else{const ie=D.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Yt(E.__webglDepthbuffer,D,!1);else{const de=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,Ee)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(D,E,K){const ie=i.get(D);E!==void 0&&rt(ie.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&Lt(D)}function St(D){const E=D.texture,K=i.get(D),ie=i.get(E);D.addEventListener("dispose",w);const de=D.textures,Ee=D.isWebGLCubeRenderTarget===!0,Ce=de.length>1;if(Ce||(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=E.version,c.memory.textures++),Ee){K.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[he]=[];for(let ge=0;ge<E.mipmaps.length;ge++)K.__webglFramebuffer[he][ge]=s.createFramebuffer()}else K.__webglFramebuffer[he]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)K.__webglFramebuffer[he]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Ce)for(let he=0,ge=de.length;he<ge;he++){const Ie=i.get(de[he]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),c.memory.textures++)}if(D.samples>0&&Kt(D)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let he=0;he<de.length;he++){const ge=de[he];K.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[he]);const Ie=o.convert(ge.format,ge.colorSpace),Je=o.convert(ge.type),De=b(ge.internalFormat,Ie,Je,ge.normalized,ge.colorSpace,D.isXRRenderTarget===!0),be=Nt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,be,De,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,K.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Yt(K.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),Xe(s.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)rt(K.__webglFramebuffer[he][ge],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else rt(K.__webglFramebuffer[he],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);y(E)&&N(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let he=0,ge=de.length;he<ge;he++){const Ie=de[he],Je=i.get(Ie);let De=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(De=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(De,Je.__webglTexture),Xe(De,Ie),rt(K.__webglFramebuffer,D,Ie,s.COLOR_ATTACHMENT0+he,De,0),y(Ie)&&N(De)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(he=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,ie.__webglTexture),Xe(he,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)rt(K.__webglFramebuffer[ge],D,E,s.COLOR_ATTACHMENT0,he,ge);else rt(K.__webglFramebuffer,D,E,s.COLOR_ATTACHMENT0,he,0);y(E)&&N(he),t.unbindTexture()}D.depthBuffer&&Lt(D)}function $t(D){const E=D.textures;for(let K=0,ie=E.length;K<ie;K++){const de=E[K];if(y(de)){const Ee=F(D),Ce=i.get(de).__webglTexture;t.bindTexture(Ee,Ce),N(Ee),t.unbindTexture()}}}const sn=[],an=[];function Qt(D){if(D.samples>0){if(Kt(D)===!1){const E=D.textures,K=D.width,ie=D.height;let de=s.COLOR_BUFFER_BIT;const Ee=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=i.get(D),he=E.length>1;if(he)for(let Ie=0;Ie<E.length;Ie++)t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const ge=D.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ie=0;Ie<E.length;Ie++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ie]);const Je=i.get(E[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Je,0)}s.blitFramebuffer(0,0,K,ie,0,0,K,ie,de,s.NEAREST),f===!0&&(sn.length=0,an.length=0,sn.push(s.COLOR_ATTACHMENT0+Ie),D.depthBuffer&&D.resolveDepthBuffer===!1&&(sn.push(Ee),an.push(Ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,an)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,sn))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let Ie=0;Ie<E.length;Ie++){t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ie]);const Je=i.get(E[Ie]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,Je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&f){const E=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Nt(D){return Math.min(a.maxSamples,D.samples)}function Kt(D){const E=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function W(D){const E=c.render.frame;x.get(D)!==E&&(x.set(D,E),D.update())}function En(D,E){const K=D.colorSpace,ie=D.format,de=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==yc&&K!==Vr&&(Et.getTransfer(K)===Ot?(ie!==Di||de!==ai)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",K)),E}function Ct(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=ue,this.resetTextureUnits=oe,this.getTextureUnits=fe,this.setTextureUnits=Z,this.setTexture2D=Y,this.setTexture2DArray=le,this.setTexture3D=ce,this.setTextureCube=O,this.rebindTextures=Tt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function KE(s,e){function t(i,a=Vr){let o;const c=Et.getTransfer(a);if(i===ai)return s.UNSIGNED_BYTE;if(i===rh)return s.UNSIGNED_SHORT_4_4_4_4;if(i===sh)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Tg)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Ag)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Eg)return s.BYTE;if(i===wg)return s.SHORT;if(i===Ro)return s.UNSIGNED_SHORT;if(i===ih)return s.INT;if(i===Yi)return s.UNSIGNED_INT;if(i===Ii)return s.FLOAT;if(i===pr)return s.HALF_FLOAT;if(i===Rg)return s.ALPHA;if(i===bg)return s.RGB;if(i===Di)return s.RGBA;if(i===mr)return s.DEPTH_COMPONENT;if(i===Ss)return s.DEPTH_STENCIL;if(i===ah)return s.RED;if(i===oh)return s.RED_INTEGER;if(i===Es)return s.RG;if(i===lh)return s.RG_INTEGER;if(i===ch)return s.RGBA_INTEGER;if(i===fc||i===hc||i===pc||i===mc)if(c===Ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===fc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===fc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pf||i===mf||i===gf||i===vf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===pf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_f||i===xf||i===yf||i===Sf||i===Mf||i===_c||i===Ef)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===_f||i===xf)return c===Ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===yf)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Sf)return o.COMPRESSED_R11_EAC;if(i===Mf)return o.COMPRESSED_SIGNED_R11_EAC;if(i===_c)return o.COMPRESSED_RG11_EAC;if(i===Ef)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===wf||i===Tf||i===Af||i===Rf||i===bf||i===Cf||i===Pf||i===Lf||i===If||i===Df||i===Nf||i===Uf||i===Ff||i===Of)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===wf)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tf)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Af)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rf)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bf)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cf)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pf)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lf)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===If)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Df)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nf)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uf)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ff)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Of)return c===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kf||i===zf||i===Bf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===kf)return c===Ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vf||i===Hf||i===xc||i===Gf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Vf)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Hf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bo?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const ZE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JE=`
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

}`;class QE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new kg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new $i({vertexShader:ZE,fragmentShader:JE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new qr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jE extends ws{constructor(e,t){super();const i=this;let a=null,o=1,c=null,d="local-floor",f=1,p=null,x=null,g=null,m=null,_=null,M=null;const T=typeof XRWebGLBinding<"u",S=new QE,y={},N=t.getContextAttributes();let F=null,b=null;const C=[],P=[],I=new dt;let w=null;const L=new mi;L.viewport=new rn;const V=new mi;V.viewport=new rn;const z=[L,V],q=new c1;let oe=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let xe=C[re];return xe===void 0&&(xe=new wd,C[re]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(re){let xe=C[re];return xe===void 0&&(xe=new wd,C[re]=xe),xe.getGripSpace()},this.getHand=function(re){let xe=C[re];return xe===void 0&&(xe=new wd,C[re]=xe),xe.getHandSpace()};function Z(re){const xe=P.indexOf(re.inputSource);if(xe===-1)return;const me=C[xe];me!==void 0&&(me.update(re.inputSource,re.frame,p||c),me.dispatchEvent({type:re.type,data:re.inputSource}))}function ue(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",ue),a.removeEventListener("inputsourceschange",$);for(let re=0;re<C.length;re++){const xe=P[re];xe!==null&&(P[re]=null,C[re].disconnect(xe))}oe=null,fe=null,S.reset();for(const re in y)delete y[re];e.setRenderTarget(F),_=null,m=null,g=null,a=null,b=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){o=re,i.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,i.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(re){p=re},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(a,t)),g},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(re){if(a=re,a!==null){if(F=e.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",ue),a.addEventListener("inputsourceschange",$),N.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(I),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,ze=null,it=null;N.depth&&(it=N.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=N.stencil?Ss:mr,ze=N.stencil?bo:Yi);const rt={colorFormat:t.RGBA8,depthFormat:it,scaleFactor:o};g=this.getBinding(),m=g.createProjectionLayer(rt),a.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),b=new qi(m.textureWidth,m.textureHeight,{format:Di,type:ai,depthTexture:new Ma(m.textureWidth,m.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const me={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:o};_=new XRWebGLLayer(a,t,me),a.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),b=new qi(_.framebufferWidth,_.framebufferHeight,{format:Di,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(f),p=null,c=await a.requestReferenceSpace(d),Xe.setContext(a),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function $(re){for(let xe=0;xe<re.removed.length;xe++){const me=re.removed[xe],ze=P.indexOf(me);ze>=0&&(P[ze]=null,C[ze].disconnect(me))}for(let xe=0;xe<re.added.length;xe++){const me=re.added[xe];let ze=P.indexOf(me);if(ze===-1){for(let rt=0;rt<C.length;rt++)if(rt>=P.length){P.push(me),ze=rt;break}else if(P[rt]===null){P[rt]=me,ze=rt;break}if(ze===-1)break}const it=C[ze];it&&it.connect(me)}}const Y=new j,le=new j;function ce(re,xe,me){Y.setFromMatrixPosition(xe.matrixWorld),le.setFromMatrixPosition(me.matrixWorld);const ze=Y.distanceTo(le),it=xe.projectionMatrix.elements,rt=me.projectionMatrix.elements,Yt=it[14]/(it[10]-1),mt=it[14]/(it[10]+1),Lt=(it[9]+1)/it[5],Tt=(it[9]-1)/it[5],St=(it[8]-1)/it[0],$t=(rt[8]+1)/rt[0],sn=Yt*St,an=Yt*$t,Qt=ze/(-St+$t),Nt=Qt*-St;if(xe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Nt),re.translateZ(Qt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),it[10]===-1)re.projectionMatrix.copy(xe.projectionMatrix),re.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const Kt=Yt+Qt,W=mt+Qt,En=sn-Nt,Ct=an+(ze-Nt),D=Lt*mt/W*Kt,E=Tt*mt/W*Kt;re.projectionMatrix.makePerspective(En,Ct,D,E,Kt,W),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function O(re,xe){xe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(xe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(a===null)return;let xe=re.near,me=re.far;S.texture!==null&&(S.depthNear>0&&(xe=S.depthNear),S.depthFar>0&&(me=S.depthFar)),q.near=V.near=L.near=xe,q.far=V.far=L.far=me,(oe!==q.near||fe!==q.far)&&(a.updateRenderState({depthNear:q.near,depthFar:q.far}),oe=q.near,fe=q.far),q.layers.mask=re.layers.mask|6,L.layers.mask=q.layers.mask&-5,V.layers.mask=q.layers.mask&-3;const ze=re.parent,it=q.cameras;O(q,ze);for(let rt=0;rt<it.length;rt++)O(it[rt],ze);it.length===2?ce(q,L,V):q.projectionMatrix.copy(L.projectionMatrix),J(re,q,ze)};function J(re,xe,me){me===null?re.matrix.copy(xe.matrixWorld):(re.matrix.copy(me.matrixWorld),re.matrix.invert(),re.matrix.multiply(xe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(xe.projectionMatrix),re.projectionMatrixInverse.copy(xe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=qf*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(m===null&&_===null))return f},this.setFoveation=function(re){f=re,m!==null&&(m.fixedFoveation=re),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=re)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(q)},this.getCameraTexture=function(re){return y[re]};let ke=null;function je(re,xe){if(x=xe.getViewerPose(p||c),M=xe,x!==null){const me=x.views;_!==null&&(e.setRenderTargetFramebuffer(b,_.framebuffer),e.setRenderTarget(b));let ze=!1;me.length!==q.cameras.length&&(q.cameras.length=0,ze=!0);for(let mt=0;mt<me.length;mt++){const Lt=me[mt];let Tt=null;if(_!==null)Tt=_.getViewport(Lt);else{const $t=g.getViewSubImage(m,Lt);Tt=$t.viewport,mt===0&&(e.setRenderTargetTextures(b,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(b))}let St=z[mt];St===void 0&&(St=new mi,St.layers.enable(mt),St.viewport=new rn,z[mt]=St),St.matrix.fromArray(Lt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(Lt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),mt===0&&(q.matrix.copy(St.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),ze===!0&&q.cameras.push(St)}const it=a.enabledFeatures;if(it&&it.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&T){g=i.getBinding();const mt=g.getDepthInformation(me[0]);mt&&mt.isValid&&mt.texture&&S.init(mt,a.renderState)}if(it&&it.includes("camera-access")&&T){e.state.unbindTexture(),g=i.getBinding();for(let mt=0;mt<me.length;mt++){const Lt=me[mt].camera;if(Lt){let Tt=y[Lt];Tt||(Tt=new kg,y[Lt]=Tt);const St=g.getCameraImage(Lt);Tt.sourceTexture=St}}}}for(let me=0;me<C.length;me++){const ze=P[me],it=C[me];ze!==null&&it!==void 0&&it.update(ze,xe,p||c)}ke&&ke(re,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),M=null}const Xe=new Hg;Xe.setAnimationLoop(je),this.setAnimationLoop=function(re){ke=re},this.dispose=function(){}}}const e2=new Gt,Kg=new pt;Kg.set(-1,0,0,0,1,0,0,0,1);function t2(s,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function i(S,y){y.color.getRGB(S.fogColor.value,zg(s)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function a(S,y,N,F,b){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?o(S,y):y.isMeshLambertMaterial?(o(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(o(S,y),g(S,y)):y.isMeshPhongMaterial?(o(S,y),x(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(o(S,y),m(S,y),y.isMeshPhysicalMaterial&&_(S,y,b)):y.isMeshMatcapMaterial?(o(S,y),M(S,y)):y.isMeshDepthMaterial?o(S,y):y.isMeshDistanceMaterial?(o(S,y),T(S,y)):y.isMeshNormalMaterial?o(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&d(S,y)):y.isPointsMaterial?f(S,y,N,F):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function o(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Qn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Qn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const N=e.get(y),F=N.envMap,b=N.envMapRotation;F&&(S.envMap.value=F,S.envMapRotation.value.setFromMatrix4(e2.makeRotationFromEuler(b)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Kg),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function d(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function f(S,y,N,F){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*N,S.scale.value=F*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function x(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function m(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function _(S,y,N){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Qn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function T(S,y){const N=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function n2(s,e,t,i){let a={},o={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(b,C){const P=C.program;i.uniformBlockBinding(b,P)}function p(b,C){let P=a[b.id];P===void 0&&(S(b),P=x(b),a[b.id]=P,b.addEventListener("dispose",N));const I=C.program;i.updateUBOMapping(b,I);const w=e.render.frame;o[b.id]!==w&&(m(b),o[b.id]=w)}function x(b){const C=g();b.__bindingPointIndex=C;const P=s.createBuffer(),I=b.__size,w=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,I,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,P),P}function g(){for(let b=0;b<d;b++)if(c.indexOf(b)===-1)return c.push(b),b;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(b){const C=a[b.id],P=b.uniforms,I=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let w=0,L=P.length;w<L;w++){const V=P[w];if(Array.isArray(V))for(let z=0,q=V.length;z<q;z++)_(V[z],w,z,I);else _(V,w,0,I)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(b,C,P,I){if(T(b,C,P,I)===!0){const w=b.__offset,L=b.value;if(Array.isArray(L)){let V=0;for(let z=0;z<L.length;z++){const q=L[z],oe=y(q);M(q,b.__data,V),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(V+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(L,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,b.__data)}}function M(b,C,P){typeof b=="number"||typeof b=="boolean"?C[0]=b:b.isMatrix3?(C[0]=b.elements[0],C[1]=b.elements[1],C[2]=b.elements[2],C[3]=0,C[4]=b.elements[3],C[5]=b.elements[4],C[6]=b.elements[5],C[7]=0,C[8]=b.elements[6],C[9]=b.elements[7],C[10]=b.elements[8],C[11]=0):ArrayBuffer.isView(b)?C.set(new b.constructor(b.buffer,b.byteOffset,C.length)):b.toArray(C,P)}function T(b,C,P,I){const w=b.value,L=C+"_"+P;if(I[L]===void 0)return typeof w=="number"||typeof w=="boolean"?I[L]=w:ArrayBuffer.isView(w)?I[L]=w.slice():I[L]=w.clone(),!0;{const V=I[L];if(typeof w=="number"||typeof w=="boolean"){if(V!==w)return I[L]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(V.equals(w)===!1)return V.copy(w),!0}}return!1}function S(b){const C=b.uniforms;let P=0;const I=16;for(let L=0,V=C.length;L<V;L++){const z=Array.isArray(C[L])?C[L]:[C[L]];for(let q=0,oe=z.length;q<oe;q++){const fe=z[q],Z=Array.isArray(fe.value)?fe.value:[fe.value];for(let ue=0,$=Z.length;ue<$;ue++){const Y=Z[ue],le=y(Y),ce=P%I,O=ce%le.boundary,J=ce+O;P+=O,J!==0&&I-J<le.storage&&(P+=I-J),fe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=P,P+=le.storage}}}const w=P%I;return w>0&&(P+=I-w),b.__size=P,b.__cache={},this}function y(b){const C={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(C.boundary=4,C.storage=4):b.isVector2?(C.boundary=8,C.storage=8):b.isVector3||b.isColor?(C.boundary=16,C.storage=12):b.isVector4?(C.boundary=16,C.storage=16):b.isMatrix3?(C.boundary=48,C.storage=48):b.isMatrix4?(C.boundary=64,C.storage=64):b.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(C.boundary=16,C.storage=b.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",b),C}function N(b){const C=b.target;C.removeEventListener("dispose",N);const P=c.indexOf(C.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(a[C.id]),delete a[C.id],delete o[C.id]}function F(){for(const b in a)s.deleteBuffer(a[b]);c=[],a={},o={}}return{bind:f,update:p,dispose:F}}const i2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function r2(){return Vi===null&&(Vi=new Fg(i2,16,16,Es,pr),Vi.name="DFG_LUT",Vi.minFilter=Un,Vi.magFilter=Un,Vi.wrapS=cr,Vi.wrapT=cr,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class s2{constructor(e={}){const{canvas:t=Sx(),context:i=null,depth:a=!0,stencil:o=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:m=!1,outputBufferType:_=ai}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=c;const T=_,S=new Set([ch,lh,oh]),y=new Set([ai,Yi,Ro,bo,rh,sh]),N=new Uint32Array(4),F=new Int32Array(4),b=new j;let C=null,P=null;const I=[],w=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let z=!1,q=null,oe=null,fe=null,Z=null;this._outputColorSpace=Nn;let ue=0,$=0,Y=null,le=-1,ce=null;const O=new rn,J=new rn;let ke=null;const je=new vt(0);let Xe=0,re=t.width,xe=t.height,me=1,ze=null,it=null;const rt=new rn(0,0,re,xe),Yt=new rn(0,0,re,xe);let mt=!1;const Lt=new ph;let Tt=!1,St=!1;const $t=new Gt,sn=new j,an=new rn,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function Kt(){return Y===null?me:1}let W=i;function En(R,X){return t.getContext(R,X)}try{const R={alpha:!0,depth:a,stencil:o,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${th}`),t.addEventListener("webglcontextlost",zt,!1),t.addEventListener("webglcontextrestored",It,!1),t.addEventListener("webglcontextcreationerror",Rn,!1),W===null){const X="webgl2";if(W=En(X,R),W===null)throw En(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw Rt("WebGLRenderer: "+R.message),R}let Ct,D,E,K,ie,de,Ee,Ce,he,ge,Ie,Je,De,be,nt,st,lt,H,Re,pe,Pe,Ue,_e;function $e(){Ct=new rM(W),Ct.init(),Pe=new KE(W,Ct),D=new ZS(W,Ct,e,Pe),E=new YE(W,Ct),D.reversedDepthBuffer&&m&&E.buffers.depth.setReversed(!0),oe=W.createFramebuffer(),fe=W.createFramebuffer(),Z=W.createFramebuffer(),K=new oM(W),ie=new DE,de=new $E(W,Ct,E,ie,D,Pe,K),Ee=new iM(V),Ce=new d1(W),Ue=new $S(W,Ce),he=new sM(W,Ce,K,Ue),ge=new cM(W,he,Ce,Ue,K),H=new lM(W,D,de),nt=new JS(ie),Ie=new IE(V,Ee,Ct,D,Ue,nt),Je=new t2(V,ie),De=new UE,be=new VE(Ct),lt=new YS(V,Ee,E,ge,M,f),st=new qE(V,ge,D),_e=new n2(W,K,D,E),Re=new KS(W,Ct,K),pe=new aM(W,Ct,K),K.programs=Ie.programs,V.capabilities=D,V.extensions=Ct,V.properties=ie,V.renderLists=De,V.shadowMap=st,V.state=E,V.info=K}$e(),T!==ai&&(L=new dM(T,t.width,t.height,d,a,o));const qe=new jE(V,W);this.xr=qe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=Ct.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ct.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(R){R!==void 0&&(me=R,this.setSize(re,xe,!1))},this.getSize=function(R){return R.set(re,xe)},this.setSize=function(R,X,se=!0){if(qe.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}re=R,xe=X,t.width=Math.floor(R*me),t.height=Math.floor(X*me),se===!0&&(t.style.width=R+"px",t.style.height=X+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(re*me,xe*me).floor()},this.setDrawingBufferSize=function(R,X,se){re=R,xe=X,me=se,t.width=Math.floor(R*se),t.height=Math.floor(X*se),this.setViewport(0,0,R,X)},this.setEffects=function(R){if(T===ai){Rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let X=0;X<R.length;X++)if(R[X].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(rt)},this.setViewport=function(R,X,se,te){R.isVector4?rt.set(R.x,R.y,R.z,R.w):rt.set(R,X,se,te),E.viewport(O.copy(rt).multiplyScalar(me).round())},this.getScissor=function(R){return R.copy(Yt)},this.setScissor=function(R,X,se,te){R.isVector4?Yt.set(R.x,R.y,R.z,R.w):Yt.set(R,X,se,te),E.scissor(J.copy(Yt).multiplyScalar(me).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(R){E.setScissorTest(mt=R)},this.setOpaqueSort=function(R){ze=R},this.setTransparentSort=function(R){it=R},this.getClearColor=function(R){return R.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,se=!0){let te=0;if(R){let ee=!1;if(Y!==null){const Ae=Y.texture.format;ee=S.has(Ae)}if(ee){const Ae=Y.texture.type,He=y.has(Ae),Te=lt.getClearColor(),Ke=lt.getClearAlpha(),tt=Te.r,ft=Te.g,ht=Te.b;He?(N[0]=tt,N[1]=ft,N[2]=ht,N[3]=Ke,W.clearBufferuiv(W.COLOR,0,N)):(F[0]=tt,F[1]=ft,F[2]=ht,F[3]=Ke,W.clearBufferiv(W.COLOR,0,F))}else te|=W.COLOR_BUFFER_BIT}X&&(te|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(te|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&W.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),q=R},this.dispose=function(){t.removeEventListener("webglcontextlost",zt,!1),t.removeEventListener("webglcontextrestored",It,!1),t.removeEventListener("webglcontextcreationerror",Rn,!1),lt.dispose(),De.dispose(),be.dispose(),ie.dispose(),Ee.dispose(),ge.dispose(),Ue.dispose(),_e.dispose(),Ie.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",Do),qe.removeEventListener("sessionend",No),On.stop()};function zt(R){R.preventDefault(),Ec("WebGLRenderer: Context Lost."),z=!0}function It(){Ec("WebGLRenderer: Context Restored."),z=!1;const R=K.autoReset,X=st.enabled,se=st.autoUpdate,te=st.needsUpdate,ee=st.type;$e(),K.autoReset=R,st.enabled=X,st.autoUpdate=se,st.needsUpdate=te,st.type=ee}function Rn(R){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function oi(R){const X=R.target;X.removeEventListener("dispose",oi),Kr(X)}function Kr(R){As(R),ie.remove(R)}function As(R){const X=ie.get(R).programs;X!==void 0&&(X.forEach(function(se){Ie.releaseProgram(se)}),R.isShaderMaterial&&Ie.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,se,te,ee,Ae){X===null&&(X=Qt);const He=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Te=jt(R,X,se,te,ee);E.setMaterial(te,He);let Ke=se.index,tt=1;if(te.wireframe===!0){if(Ke=he.getWireframeAttribute(se),Ke===void 0)return;tt=2}const ft=se.drawRange,ht=se.attributes.position;let Qe=ft.start*tt,At=(ft.start+ft.count)*tt;Ae!==null&&(Qe=Math.max(Qe,Ae.start*tt),At=Math.min(At,(Ae.start+Ae.count)*tt)),Ke!==null?(Qe=Math.max(Qe,0),At=Math.min(At,Ke.count)):ht!=null&&(Qe=Math.max(Qe,0),At=Math.min(At,ht.count));const Vt=At-Qe;if(Vt<0||Vt===1/0)return;Ue.setup(ee,te,Te,se,Ke);let Zt,Ut=Re;if(Ke!==null&&(Zt=Ce.get(Ke),Ut=pe,Ut.setIndex(Zt)),ee.isMesh)te.wireframe===!0?(E.setLineWidth(te.wireframeLinewidth*Kt()),Ut.setMode(W.LINES)):Ut.setMode(W.TRIANGLES);else if(ee.isLine){let un=te.linewidth;un===void 0&&(un=1),E.setLineWidth(un*Kt()),ee.isLineSegments?Ut.setMode(W.LINES):ee.isLineLoop?Ut.setMode(W.LINE_LOOP):Ut.setMode(W.LINE_STRIP)}else ee.isPoints?Ut.setMode(W.POINTS):ee.isSprite&&Ut.setMode(W.TRIANGLES);if(ee.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))Ut.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const un=ee._multiDrawStarts,Be=ee._multiDrawCounts,wn=ee._multiDrawCount,_t=Ke?Ce.get(Ke).bytesPerElement:1,Wn=ie.get(te).currentProgram.getUniforms();for(let Xn=0;Xn<wn;Xn++)Wn.setValue(W,"_gl_DrawID",Xn),Ut.render(un[Xn]/_t,Be[Xn])}else if(ee.isInstancedMesh)Ut.renderInstances(Qe,Vt,ee.count);else if(se.isInstancedBufferGeometry){const un=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Be=Math.min(se.instanceCount,un);Ut.renderInstances(Qe,Vt,Be)}else Ut.render(Qe,Vt)};function Zr(R,X,se){R.transparent===!0&&R.side===Gi&&R.forceSinglePass===!1?(R.side=Qn,R.needsUpdate=!0,jr(R,X,se),R.side=Yr,R.needsUpdate=!0,jr(R,X,se),R.side=Gi):jr(R,X,se)}this.compile=function(R,X,se=null){se===null&&(se=R),P=be.get(se),P.init(X),w.push(P),se.traverseVisible(function(ee){ee.isLight&&ee.layers.test(X.layers)&&(P.pushLight(ee),ee.castShadow&&P.pushShadow(ee))}),R!==se&&R.traverseVisible(function(ee){ee.isLight&&ee.layers.test(X.layers)&&(P.pushLight(ee),ee.castShadow&&P.pushShadow(ee))}),P.setupLights();const te=new Set;return R.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ae=ee.material;if(Ae)if(Array.isArray(Ae))for(let He=0;He<Ae.length;He++){const Te=Ae[He];Zr(Te,se,ee),te.add(Te)}else Zr(Ae,se,ee),te.add(Ae)}),P=w.pop(),te},this.compileAsync=function(R,X,se=null){const te=this.compile(R,X,se);return new Promise(ee=>{function Ae(){if(te.forEach(function(He){ie.get(He).currentProgram.isReady()&&te.delete(He)}),te.size===0){ee(R);return}setTimeout(Ae,10)}Ct.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Jr=null;function Ic(R){Jr&&Jr(R)}function Do(){On.stop()}function No(){On.start()}const On=new Hg;On.setAnimationLoop(Ic),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(R){Jr=R,qe.setAnimationLoop(R),R===null?On.stop():On.start()},qe.addEventListener("sessionstart",Do),qe.addEventListener("sessionend",No),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;q!==null&&q.renderStart(R,X);const se=qe.enabled===!0&&qe.isPresenting===!0,te=L!==null&&(Y===null||se)&&L.begin(V,Y);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(X),X=qe.getCamera()),R.isScene===!0&&R.onBeforeRender(V,R,X,Y),P=be.get(R,w.length),P.init(X),P.state.textureUnits=de.getTextureUnits(),w.push(P),$t.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Lt.setFromProjectionMatrix($t,Xi,X.reversedDepth),St=this.localClippingEnabled,Tt=nt.init(this.clippingPlanes,St),C=De.get(R,I.length),C.init(),I.push(C),qe.enabled===!0&&qe.isPresenting===!0){const He=V.xr.getDepthSensingMesh();He!==null&&Rs(He,X,-1/0,V.sortObjects)}Rs(R,X,0,V.sortObjects),C.finish(),V.sortObjects===!0&&C.sort(ze,it,X.reversedDepth),Nt=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,Nt&&lt.addToRenderList(C,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Tt===!0&&nt.beginShadows();const ee=P.state.shadowsArray;if(st.render(ee,R,X),Tt===!0&&nt.endShadows(),(te&&L.hasRenderPass())===!1){const He=C.opaque,Te=C.transmissive;if(P.setupLights(),X.isArrayCamera){const Ke=X.cameras;if(Te.length>0)for(let tt=0,ft=Ke.length;tt<ft;tt++){const ht=Ke[tt];Uo(He,Te,R,ht)}Nt&&lt.render(R);for(let tt=0,ft=Ke.length;tt<ft;tt++){const ht=Ke[tt];Ca(C,R,ht,ht.viewport)}}else Te.length>0&&Uo(He,Te,R,X),Nt&&lt.render(R),Ca(C,R,X)}Y!==null&&$===0&&(de.updateMultisampleRenderTarget(Y),de.updateRenderTargetMipmap(Y)),te&&L.end(V),R.isScene===!0&&R.onAfterRender(V,R,X),Ue.resetDefaultState(),le=-1,ce=null,w.pop(),w.length>0?(P=w[w.length-1],de.setTextureUnits(P.state.textureUnits),Tt===!0&&nt.setGlobalState(V.clippingPlanes,P.state.camera)):P=null,I.pop(),I.length>0?C=I[I.length-1]:C=null,q!==null&&q.renderEnd()};function Rs(R,X,se,te){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLightProbeGrid)P.pushLightProbeGrid(R);else if(R.isLight)P.pushLight(R),R.castShadow&&P.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Lt.intersectsSprite(R)){te&&an.setFromMatrixPosition(R.matrixWorld).applyMatrix4($t);const He=ge.update(R),Te=R.material;Te.visible&&C.push(R,He,Te,se,an.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Lt.intersectsObject(R))){const He=ge.update(R),Te=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),an.copy(R.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),an.copy(He.boundingSphere.center)),an.applyMatrix4(R.matrixWorld).applyMatrix4($t)),Array.isArray(Te)){const Ke=He.groups;for(let tt=0,ft=Ke.length;tt<ft;tt++){const ht=Ke[tt],Qe=Te[ht.materialIndex];Qe&&Qe.visible&&C.push(R,He,Qe,se,an.z,ht)}}else Te.visible&&C.push(R,He,Te,se,an.z,null)}}const Ae=R.children;for(let He=0,Te=Ae.length;He<Te;He++)Rs(Ae[He],X,se,te)}function Ca(R,X,se,te){const{opaque:ee,transmissive:Ae,transparent:He}=R;P.setupLightsView(se),Tt===!0&&nt.setGlobalState(V.clippingPlanes,se),te&&E.viewport(O.copy(te)),ee.length>0&&Qr(ee,X,se),Ae.length>0&&Qr(Ae,X,se),He.length>0&&Qr(He,X,se),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Uo(R,X,se,te){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[te.id]===void 0){const Qe=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[te.id]=new qi(1,1,{generateMipmaps:!0,type:Qe?pr:ai,minFilter:ys,samples:Math.max(4,D.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Ae=P.state.transmissionRenderTarget[te.id],He=te.viewport||O;Ae.setSize(He.z*V.transmissionResolutionScale,He.w*V.transmissionResolutionScale);const Te=V.getRenderTarget(),Ke=V.getActiveCubeFace(),tt=V.getActiveMipmapLevel();V.setRenderTarget(Ae),V.getClearColor(je),Xe=V.getClearAlpha(),Xe<1&&V.setClearColor(16777215,.5),V.clear(),Nt&&lt.render(se);const ft=V.toneMapping;V.toneMapping=Ni;const ht=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),P.setupLightsView(te),Tt===!0&&nt.setGlobalState(V.clippingPlanes,te),Qr(R,se,te),de.updateMultisampleRenderTarget(Ae),de.updateRenderTargetMipmap(Ae),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let At=0,Vt=X.length;At<Vt;At++){const Zt=X[At],{object:Ut,geometry:un,material:Be,group:wn}=Zt;if(Be.side===Gi&&Ut.layers.test(te.layers)){const _t=Be.side;Be.side=Qn,Be.needsUpdate=!0,Pa(Ut,se,te,un,Be,wn),Be.side=_t,Be.needsUpdate=!0,Qe=!0}}Qe===!0&&(de.updateMultisampleRenderTarget(Ae),de.updateRenderTargetMipmap(Ae))}V.setRenderTarget(Te,Ke,tt),V.setClearColor(je,Xe),ht!==void 0&&(te.viewport=ht),V.toneMapping=ft}function Qr(R,X,se){const te=X.isScene===!0?X.overrideMaterial:null;for(let ee=0,Ae=R.length;ee<Ae;ee++){const He=R[ee],{object:Te,geometry:Ke,group:tt}=He;let ft=He.material;ft.allowOverride===!0&&te!==null&&(ft=te),Te.layers.test(se.layers)&&Pa(Te,X,se,Ke,ft,tt)}}function Pa(R,X,se,te,ee,Ae){R.onBeforeRender(V,X,se,te,ee,Ae),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ee.onBeforeRender(V,X,se,te,R,Ae),ee.transparent===!0&&ee.side===Gi&&ee.forceSinglePass===!1?(ee.side=Qn,ee.needsUpdate=!0,V.renderBufferDirect(se,X,te,ee,R,Ae),ee.side=Yr,ee.needsUpdate=!0,V.renderBufferDirect(se,X,te,ee,R,Ae),ee.side=Gi):V.renderBufferDirect(se,X,te,ee,R,Ae),R.onAfterRender(V,X,se,te,ee,Ae)}function jr(R,X,se){X.isScene!==!0&&(X=Qt);const te=ie.get(R),ee=P.state.lights,Ae=P.state.shadowsArray,He=ee.state.version,Te=Ie.getParameters(R,ee.state,Ae,X,se,P.state.lightProbeGridArray),Ke=Ie.getProgramCacheKey(Te);let tt=te.programs;te.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?X.environment:null,te.fog=X.fog;const ft=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;te.envMap=Ee.get(R.envMap||te.environment,ft),te.envMapRotation=te.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,tt===void 0&&(R.addEventListener("dispose",oi),tt=new Map,te.programs=tt);let ht=tt.get(Ke);if(ht!==void 0){if(te.currentProgram===ht&&te.lightsStateVersion===He)return Fo(R,Te),ht}else Te.uniforms=Ie.getUniforms(R),q!==null&&R.isNodeMaterial&&q.build(R,se,Te),R.onBeforeCompile(Te,V),ht=Ie.acquireProgram(Te,Ke),tt.set(Ke,ht),te.uniforms=Te.uniforms;const Qe=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qe.clippingPlanes=nt.uniform),Fo(R,Te),te.needsLights=Ia(R),te.lightsStateVersion=He,te.needsLights&&(Qe.ambientLightColor.value=ee.state.ambient,Qe.lightProbe.value=ee.state.probe,Qe.directionalLights.value=ee.state.directional,Qe.directionalLightShadows.value=ee.state.directionalShadow,Qe.spotLights.value=ee.state.spot,Qe.spotLightShadows.value=ee.state.spotShadow,Qe.rectAreaLights.value=ee.state.rectArea,Qe.ltc_1.value=ee.state.rectAreaLTC1,Qe.ltc_2.value=ee.state.rectAreaLTC2,Qe.pointLights.value=ee.state.point,Qe.pointLightShadows.value=ee.state.pointShadow,Qe.hemisphereLights.value=ee.state.hemi,Qe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Qe.spotLightMatrix.value=ee.state.spotLightMatrix,Qe.spotLightMap.value=ee.state.spotLightMap,Qe.pointShadowMatrix.value=ee.state.pointShadowMatrix),te.lightProbeGrid=P.state.lightProbeGridArray.length>0,te.currentProgram=ht,te.uniformsList=null,ht}function La(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=gc.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function Fo(R,X){const se=ie.get(R);se.outputColorSpace=X.outputColorSpace,se.batching=X.batching,se.batchingColor=X.batchingColor,se.instancing=X.instancing,se.instancingColor=X.instancingColor,se.instancingMorph=X.instancingMorph,se.skinning=X.skinning,se.morphTargets=X.morphTargets,se.morphNormals=X.morphNormals,se.morphColors=X.morphColors,se.morphTargetsCount=X.morphTargetsCount,se.numClippingPlanes=X.numClippingPlanes,se.numIntersection=X.numClipIntersection,se.vertexAlphas=X.vertexAlphas,se.vertexTangents=X.vertexTangents,se.toneMapping=X.toneMapping}function Dc(R,X){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;b.setFromMatrixPosition(X.matrixWorld);for(let se=0,te=R.length;se<te;se++){const ee=R[se];if(ee.texture!==null&&ee.boundingBox.containsPoint(b))return ee}return null}function jt(R,X,se,te,ee){X.isScene!==!0&&(X=Qt),de.resetTextureUnits();const Ae=X.fog,He=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?X.environment:null,Te=Y===null?V.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Et.workingColorSpace,Ke=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,tt=Ee.get(te.envMap||He,Ke),ft=te.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ht=!!se.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Qe=!!se.morphAttributes.position,At=!!se.morphAttributes.normal,Vt=!!se.morphAttributes.color;let Zt=Ni;te.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Zt=V.toneMapping);const Ut=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,un=Ut!==void 0?Ut.length:0,Be=ie.get(te),wn=P.state.lights;if(Tt===!0&&(St===!0||R!==ce)){const Ft=R===ce&&te.id===le;nt.setState(te,R,Ft)}let _t=!1;te.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==wn.state.version||Be.outputColorSpace!==Te||ee.isBatchedMesh&&Be.batching===!1||!ee.isBatchedMesh&&Be.batching===!0||ee.isBatchedMesh&&Be.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Be.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Be.instancing===!1||!ee.isInstancedMesh&&Be.instancing===!0||ee.isSkinnedMesh&&Be.skinning===!1||!ee.isSkinnedMesh&&Be.skinning===!0||ee.isInstancedMesh&&Be.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Be.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Be.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Be.instancingMorph===!1&&ee.morphTexture!==null||Be.envMap!==tt||te.fog===!0&&Be.fog!==Ae||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==nt.numPlanes||Be.numIntersection!==nt.numIntersection)||Be.vertexAlphas!==ft||Be.vertexTangents!==ht||Be.morphTargets!==Qe||Be.morphNormals!==At||Be.morphColors!==Vt||Be.toneMapping!==Zt||Be.morphTargetsCount!==un||!!Be.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Be.__version=te.version);let Wn=Be.currentProgram;_t===!0&&(Wn=jr(te,X,ee),q&&te.isNodeMaterial&&q.onUpdateProgram(te,Wn,Be));let Xn=!1,xt=!1,Ki=!1;const Dt=Wn.getUniforms(),Wt=Be.uniforms;if(E.useProgram(Wn.program)&&(Xn=!0,xt=!0,Ki=!0),te.id!==le&&(le=te.id,xt=!0),Be.needsLights){const Ft=Dc(P.state.lightProbeGridArray,ee);Be.lightProbeGrid!==Ft&&(Be.lightProbeGrid=Ft,xt=!0)}if(Xn||ce!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Dt.setValue(W,"projectionMatrix",R.projectionMatrix),Dt.setValue(W,"viewMatrix",R.matrixWorldInverse);const yi=Dt.map.cameraPosition;yi!==void 0&&yi.setValue(W,sn.setFromMatrixPosition(R.matrixWorld)),D.logarithmicDepthBuffer&&Dt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Dt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),ce!==R&&(ce=R,xt=!0,Ki=!0)}if(Be.needsLights&&(wn.state.directionalShadowMap.length>0&&Dt.setValue(W,"directionalShadowMap",wn.state.directionalShadowMap,de),wn.state.spotShadowMap.length>0&&Dt.setValue(W,"spotShadowMap",wn.state.spotShadowMap,de),wn.state.pointShadowMap.length>0&&Dt.setValue(W,"pointShadowMap",wn.state.pointShadowMap,de)),ee.isSkinnedMesh){Dt.setOptional(W,ee,"bindMatrix"),Dt.setOptional(W,ee,"bindMatrixInverse");const Ft=ee.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Dt.setValue(W,"boneTexture",Ft.boneTexture,de))}ee.isBatchedMesh&&(Dt.setOptional(W,ee,"batchingTexture"),Dt.setValue(W,"batchingTexture",ee._matricesTexture,de),Dt.setOptional(W,ee,"batchingIdTexture"),Dt.setValue(W,"batchingIdTexture",ee._indirectTexture,de),Dt.setOptional(W,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Dt.setValue(W,"batchingColorTexture",ee._colorsTexture,de));const xi=se.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&H.update(ee,se,Wn),(xt||Be.receiveShadow!==ee.receiveShadow)&&(Be.receiveShadow=ee.receiveShadow,Dt.setValue(W,"receiveShadow",ee.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&X.environment!==null&&(Wt.envMapIntensity.value=X.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=r2()),xt){if(Dt.setValue(W,"toneMappingExposure",V.toneMappingExposure),Be.needsLights&&Nc(Wt,Ki),Ae&&te.fog===!0&&Je.refreshFogUniforms(Wt,Ae),Je.refreshMaterialUniforms(Wt,te,me,xe,P.state.transmissionRenderTarget[R.id]),Be.needsLights&&Be.lightProbeGrid){const Ft=Be.lightProbeGrid;Wt.probesSH.value=Ft.texture,Wt.probesMin.value.copy(Ft.boundingBox.min),Wt.probesMax.value.copy(Ft.boundingBox.max),Wt.probesResolution.value.copy(Ft.resolution)}gc.upload(W,La(Be),Wt,de)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(gc.upload(W,La(Be),Wt,de),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Dt.setValue(W,"center",ee.center),Dt.setValue(W,"modelViewMatrix",ee.modelViewMatrix),Dt.setValue(W,"normalMatrix",ee.normalMatrix),Dt.setValue(W,"modelMatrix",ee.matrixWorld),te.uniformsGroups!==void 0){const Ft=te.uniformsGroups;for(let yi=0,Ui=Ft.length;yi<Ui;yi++){const es=Ft[yi];_e.update(es,Wn),_e.bind(es,Wn)}}return Wn}function Nc(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Ia(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,X,se){const te=ie.get(R);te.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),ie.get(R.texture).__webglTexture=X,ie.get(R.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:se,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const se=ie.get(R);se.__webglFramebuffer=X,se.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,se=0){Y=R,ue=X,$=se;let te=null,ee=!1,Ae=!1;if(R){const Te=ie.get(R);if(Te.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(W.FRAMEBUFFER,Te.__webglFramebuffer),O.copy(R.viewport),J.copy(R.scissor),ke=R.scissorTest,E.viewport(O),E.scissor(J),E.setScissorTest(ke),le=-1;return}else if(Te.__webglFramebuffer===void 0)de.setupRenderTarget(R);else if(Te.__hasExternalTextures)de.rebindTextures(R,ie.get(R.texture).__webglTexture,ie.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ft=R.depthTexture;if(Te.__boundDepthTexture!==ft){if(ft!==null&&ie.has(ft)&&(R.width!==ft.image.width||R.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(R)}}const Ke=R.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ae=!0);const tt=ie.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(tt[X])?te=tt[X][se]:te=tt[X],ee=!0):R.samples>0&&de.useMultisampledRTT(R)===!1?te=ie.get(R).__webglMultisampledFramebuffer:Array.isArray(tt)?te=tt[se]:te=tt,O.copy(R.viewport),J.copy(R.scissor),ke=R.scissorTest}else O.copy(rt).multiplyScalar(me).floor(),J.copy(Yt).multiplyScalar(me).floor(),ke=mt;if(se!==0&&(te=oe),E.bindFramebuffer(W.FRAMEBUFFER,te)&&E.drawBuffers(R,te),E.viewport(O),E.scissor(J),E.setScissorTest(ke),ee){const Te=ie.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+X,Te.__webglTexture,se)}else if(Ae){const Te=X;for(let Ke=0;Ke<R.textures.length;Ke++){const tt=ie.get(R.textures[Ke]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Ke,tt.__webglTexture,se,Te)}}else if(R!==null&&se!==0){const Te=ie.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Te.__webglTexture,se)}le=-1},this.readRenderTargetPixels=function(R,X,se,te,ee,Ae,He,Te=0){if(!(R&&R.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(Ke=Ke[He]),Ke){E.bindFramebuffer(W.FRAMEBUFFER,Ke);try{const tt=R.textures[Te],ft=tt.format,ht=tt.type;if(R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Te),!D.textureFormatReadable(ft)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(ht)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-te&&se>=0&&se<=R.height-ee&&W.readPixels(X,se,te,ee,Pe.convert(ft),Pe.convert(ht),Ae)}finally{const tt=Y!==null?ie.get(Y).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(R,X,se,te,ee,Ae,He,Te=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(Ke=Ke[He]),Ke)if(X>=0&&X<=R.width-te&&se>=0&&se<=R.height-ee){E.bindFramebuffer(W.FRAMEBUFFER,Ke);const tt=R.textures[Te],ft=tt.format,ht=tt.type;if(R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Te),!D.textureFormatReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Qe),W.bufferData(W.PIXEL_PACK_BUFFER,Ae.byteLength,W.STREAM_READ),W.readPixels(X,se,te,ee,Pe.convert(ft),Pe.convert(ht),0);const At=Y!==null?ie.get(Y).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,At);const Vt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Mx(W,Vt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Qe),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ae),W.deleteBuffer(Qe),W.deleteSync(Vt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,se=0){const te=Math.pow(2,-se),ee=Math.floor(R.image.width*te),Ae=Math.floor(R.image.height*te),He=X!==null?X.x:0,Te=X!==null?X.y:0;de.setTexture2D(R,0),W.copyTexSubImage2D(W.TEXTURE_2D,se,0,0,He,Te,ee,Ae),E.unbindTexture()},this.copyTextureToTexture=function(R,X,se=null,te=null,ee=0,Ae=0){let He,Te,Ke,tt,ft,ht,Qe,At,Vt;const Zt=R.isCompressedTexture?R.mipmaps[Ae]:R.image;if(se!==null)He=se.max.x-se.min.x,Te=se.max.y-se.min.y,Ke=se.isBox3?se.max.z-se.min.z:1,tt=se.min.x,ft=se.min.y,ht=se.isBox3?se.min.z:0;else{const Wt=Math.pow(2,-ee);He=Math.floor(Zt.width*Wt),Te=Math.floor(Zt.height*Wt),R.isDataArrayTexture?Ke=Zt.depth:R.isData3DTexture?Ke=Math.floor(Zt.depth*Wt):Ke=1,tt=0,ft=0,ht=0}te!==null?(Qe=te.x,At=te.y,Vt=te.z):(Qe=0,At=0,Vt=0);const Ut=Pe.convert(X.format),un=Pe.convert(X.type);let Be;X.isData3DTexture?(de.setTexture3D(X,0),Be=W.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(de.setTexture2DArray(X,0),Be=W.TEXTURE_2D_ARRAY):(de.setTexture2D(X,0),Be=W.TEXTURE_2D),E.activeTexture(W.TEXTURE0),E.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,X.flipY),E.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),E.pixelStorei(W.UNPACK_ALIGNMENT,X.unpackAlignment);const wn=E.getParameter(W.UNPACK_ROW_LENGTH),_t=E.getParameter(W.UNPACK_IMAGE_HEIGHT),Wn=E.getParameter(W.UNPACK_SKIP_PIXELS),Xn=E.getParameter(W.UNPACK_SKIP_ROWS),xt=E.getParameter(W.UNPACK_SKIP_IMAGES);E.pixelStorei(W.UNPACK_ROW_LENGTH,Zt.width),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Zt.height),E.pixelStorei(W.UNPACK_SKIP_PIXELS,tt),E.pixelStorei(W.UNPACK_SKIP_ROWS,ft),E.pixelStorei(W.UNPACK_SKIP_IMAGES,ht);const Ki=R.isDataArrayTexture||R.isData3DTexture,Dt=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const Wt=ie.get(R),xi=ie.get(X),Ft=ie.get(Wt.__renderTarget),yi=ie.get(xi.__renderTarget);E.bindFramebuffer(W.READ_FRAMEBUFFER,Ft.__webglFramebuffer),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Ui=0;Ui<Ke;Ui++)Ki&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ie.get(R).__webglTexture,ee,ht+Ui),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ie.get(X).__webglTexture,Ae,Vt+Ui)),W.blitFramebuffer(tt,ft,He,Te,Qe,At,He,Te,W.DEPTH_BUFFER_BIT,W.NEAREST);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ee!==0||R.isRenderTargetTexture||ie.has(R)){const Wt=ie.get(R),xi=ie.get(X);E.bindFramebuffer(W.READ_FRAMEBUFFER,fe),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,Z);for(let Ft=0;Ft<Ke;Ft++)Ki?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Wt.__webglTexture,ee,ht+Ft):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Wt.__webglTexture,ee),Dt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,xi.__webglTexture,Ae,Vt+Ft):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,xi.__webglTexture,Ae),ee!==0?W.blitFramebuffer(tt,ft,He,Te,Qe,At,He,Te,W.COLOR_BUFFER_BIT,W.NEAREST):Dt?W.copyTexSubImage3D(Be,Ae,Qe,At,Vt+Ft,tt,ft,He,Te):W.copyTexSubImage2D(Be,Ae,Qe,At,tt,ft,He,Te);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Dt?R.isDataTexture||R.isData3DTexture?W.texSubImage3D(Be,Ae,Qe,At,Vt,He,Te,Ke,Ut,un,Zt.data):X.isCompressedArrayTexture?W.compressedTexSubImage3D(Be,Ae,Qe,At,Vt,He,Te,Ke,Ut,Zt.data):W.texSubImage3D(Be,Ae,Qe,At,Vt,He,Te,Ke,Ut,un,Zt):R.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ae,Qe,At,He,Te,Ut,un,Zt.data):R.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ae,Qe,At,Zt.width,Zt.height,Ut,Zt.data):W.texSubImage2D(W.TEXTURE_2D,Ae,Qe,At,He,Te,Ut,un,Zt);E.pixelStorei(W.UNPACK_ROW_LENGTH,wn),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,_t),E.pixelStorei(W.UNPACK_SKIP_PIXELS,Wn),E.pixelStorei(W.UNPACK_SKIP_ROWS,Xn),E.pixelStorei(W.UNPACK_SKIP_IMAGES,xt),Ae===0&&X.generateMipmaps&&W.generateMipmap(Be),E.unbindTexture()},this.initRenderTarget=function(R){ie.get(R).__webglFramebuffer===void 0&&de.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?de.setTextureCube(R,0):R.isData3DTexture?de.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?de.setTexture2DArray(R,0):de.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){ue=0,$=0,Y=null,E.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}const a2={0:2.2,1:2.9,2:3.6};class o2{constructor(e){this.container=e,this.pixelLevel=1,this.three=new s2({antialias:!1,powerPreference:"high-performance"}),this.three.setPixelRatio(1),this.three.outputColorSpace=Nn,this.three.toneMapping=Ni,this.three.shadowMap.enabled=!0,this.three.shadowMap.type=Ao,this.three.domElement.classList.add("game-canvas"),e.appendChild(this.three.domElement),this.resize(),this._onResize=()=>this.resize(),window.addEventListener("resize",this._onResize)}setPixelLevel(e){this.pixelLevel=e,this.resize()}resize(){const e=a2[this.pixelLevel]??2.9,t=Math.max(320,Math.floor(window.innerWidth/e)),i=Math.max(200,Math.floor(window.innerHeight/e));this.three.setSize(t,i,!1),this.aspect=t/i}render(e,t){this.three.render(e,t)}dispose(){window.removeEventListener("resize",this._onResize),this.three.dispose()}}function Gr(s){let e=s>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function cc(s,e,t=0){let i=t^2654435769;return i=Math.imul(i^s*374761393,668265263),i=Math.imul(i^e*2246822519,3266489917),i^=i>>>16,(i>>>0)/4294967296}const Li=(s,e,t)=>s<e?e:s>t?t:s,tg=(s,e,t)=>s+(e-s)*t;function l2(s,e,t){let i=(e-s+Math.PI*3)%(Math.PI*2)-Math.PI;return s+i*t}function c2(s,e,t,i){const a=s-t,o=e-i;return a*a+o*o}class u2{constructor(e){this.viewH=27,this.minViewH=15,this.maxViewH=46,this.cam=new Cc(-1,1,1,-1,.1,300),this.cam.rotation.x=-Math.PI/2,this.cam.position.set(96,120,96),this.target=new dt(96,96),this._pos=new dt(96,96),this.aspect=e,this.shake=0,this.updateProjection()}addShake(e){this.shake=Math.min(1.4,this.shake+e)}updateProjection(){const e=this.viewH*this.aspect;this.cam.left=-e/2,this.cam.right=e/2,this.cam.top=this.viewH/2,this.cam.bottom=-this.viewH/2,this.cam.updateProjectionMatrix()}zoomBy(e){this.viewH=Li(this.viewH*Math.exp(e*.0011),this.minViewH,this.maxViewH),this.updateProjection()}follow(e,t,i,a=0,o=0,c=192){this.target.set(t+a*.45,i+o*.45);const d=1-Math.exp(-5.5*e);this._pos.x=tg(this._pos.x,this.target.x,d),this._pos.y=tg(this._pos.y,this.target.y,d);const f=this.viewH*this.aspect/2,p=this.viewH/2,x=Li(this._pos.x,Math.min(f,c/2),Math.max(c-f,c/2)),g=Li(this._pos.y,Math.min(p,c/2),Math.max(c-p,c/2));let m=0,_=0;this.shake>.01?(m=(Math.random()-.5)*this.shake*.9,_=(Math.random()-.5)*this.shake*.9,this.shake*=Math.exp(-6*e)):this.shake=0,this.cam.position.set(x+m,120,g+_),this.cam.updateMatrixWorld()}panMenu(e,t=192){const i=t*.5+Math.sin(e*.05)*t*.16,a=t*.42+Math.cos(e*.037)*t*.14;this.cam.position.set(i,120,a),this.cam.updateMatrixWorld()}onResize(e){this.aspect=e,this.updateProjection()}}const d2=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]);class f2{constructor(){this.down=new Set,this.pressed=new Set,this.wheel=0,this.enabled=!0,this._onDown=e=>{d2.has(e.code)&&e.preventDefault(),e.repeat||this.pressed.add(e.code),this.down.add(e.code)},this._onUp=e=>this.down.delete(e.code),this._onBlur=()=>{this.down.clear()},this._onWheel=e=>{this.wheel+=e.deltaY},this._onMouseDown=e=>{e.button===0&&this.pressed.add("Mouse0")},this._onMouseUp=e=>{e.button===0&&this.down.delete("Mouse0")},window.addEventListener("keydown",this._onDown),window.addEventListener("keyup",this._onUp),window.addEventListener("blur",this._onBlur),window.addEventListener("wheel",this._onWheel,{passive:!0}),window.addEventListener("mousedown",this._onMouseDown),window.addEventListener("mouseup",this._onMouseUp)}isDown(...e){return this.enabled?e.some(t=>this.down.has(t)):!1}wasPressed(e){return this.enabled?this.pressed.has(e):!1}consumeWheel(){const e=this.wheel;return this.wheel=0,e}moveVector(){let e=0,t=0;if(this.isDown("KeyW","ArrowUp")&&(t-=1),this.isDown("KeyS","ArrowDown")&&(t+=1),this.isDown("KeyA","ArrowLeft")&&(e-=1),this.isDown("KeyD","ArrowRight")&&(e+=1),e!==0&&t!==0){const i=Math.SQRT1_2;e*=i,t*=i}return{x:e,z:t,moving:e!==0||t!==0}}endFrame(){this.pressed.clear()}dispose(){window.removeEventListener("keydown",this._onDown),window.removeEventListener("keyup",this._onUp),window.removeEventListener("blur",this._onBlur),window.removeEventListener("wheel",this._onWheel)}}class h2{constructor(){this.now=0,this.dt=0,this.elapsed=0,this._last=0}update(e){const t=e/1e3;return this._last||(this._last=t),this.dt=Math.min(.05,t-this._last),this._last=t,this.now=t,this.dt}tick(e){this.elapsed+=e}}class p2{constructor(){this.aabbs=[]}addRect(e,t,i,a,o="solid"){const c={x0:e,z0:t,x1:i,z1:a,tag:o};return this.aabbs.push(c),c}addBox(e,t,i,a,o="solid"){return this.addRect(e-i/2,t-a/2,e+i/2,t+a/2,o)}addRotatedBox(e,t,i,a,o,c="vehicle"){const d=Math.abs(Math.cos(o)),f=Math.abs(Math.sin(o)),p=(i*d+a*f)/2+.12,x=(i*f+a*d)/2+.12;return this.addRect(e-p,t-x,e+p,t+x,c)}removeByTag(e){for(let t=this.aabbs.length-1;t>=0;t--)this.aabbs[t].tag===e&&this.aabbs.splice(t,1)}overlaps(e,t,i){for(const a of this.aabbs){const o=Math.max(a.x0,Math.min(e,a.x1)),c=Math.max(a.z0,Math.min(t,a.z1)),d=e-o,f=t-c;if(d*d+f*f<i*i)return a}return null}move(e,t,i,a,o){e+=i;for(const c of this.aabbs)t+o<=c.z0||t-o>=c.z1||e+o>c.x0&&e-o<c.x1&&(e=i>0?Math.min(e,c.x0-o):Math.max(e,c.x1+o));t+=a;for(const c of this.aabbs)e+o<=c.x0||e-o>=c.x1||t+o>c.z0&&t-o<c.z1&&(t=a>0?Math.min(t,c.z0-o):Math.max(t,c.z1+o));return{x:e,z:t}}}const gn=4,Mt=48,m2=Mt*gn,uc={avenuesV:[11,27],avenuesH:[15,31],streetsV:[4,19,35,43],streetsH:[6,23,40]},g2=[{id:"base",nome:"BASE ÁGUIA",x0:0,z0:41,x1:4,z1:47,safe:!0},{id:"central",nome:"CENTRO",x0:13,z0:0,x1:28,z1:16},{id:"comercial",nome:"DISTRITO COMERCIAL",x0:13,z0:17,x1:28,z1:32},{id:"industrial",nome:"ZONA INDUSTRIAL",x0:29,z0:0,x1:47,z1:16},{id:"abandonada",nome:"ZONA ABANDONADA",x0:29,z0:17,x1:47,z1:47,hazard:!0},{id:"residencial",nome:"BAIRRO RESIDENCIAL",x0:0,z0:0,x1:12,z1:32},{id:"residencial",nome:"VILA SUL",x0:5,z0:33,x1:28,z1:47}],k=s=>s*gn,Zd=[{id:"T1",x:k(13.6),z:k(.7),w:k(4.6),d:k(4.2),h:15,type:"tower",pal:3,roof:"office",radar:!0},{id:"T2",x:k(19.6),z:k(.7),w:k(6.2),d:k(4.2),h:11,type:"tower",pal:2,roof:"office"},{id:"T3",x:k(13.6),z:k(7.5),w:k(5.8),d:k(5.8),h:16,type:"tower",pal:3,roof:"hotel",helipad:!0},{id:"T4",x:k(20.6),z:k(7.5),w:k(4.8),d:k(5.8),h:10,type:"tower",pal:1,roof:"office",damage:1},{id:"T5",x:k(13.6),z:k(12.9),w:k(3.4),d:k(1.9),h:5,type:"shop",pal:2,roof:"kiosk"},{id:"C1",x:k(13.5),z:k(17.5),w:k(4.4),d:k(4.2),h:5.5,type:"shop",pal:1,roof:"shop",sign:"MERCADO"},{id:"C2",x:k(18.4),z:k(17.5),w:k(3.8),d:k(4.2),h:5.5,type:"shop",pal:2,roof:"shop",sign:"FARMÁCIA"},{id:"C3",x:k(22.7),z:k(17.5),w:k(3.6),d:k(4.2),h:4.5,type:"shop",pal:1,roof:"diner",sign:"LANCHONETE"},{id:"C4",x:k(13.5),z:k(24.2),w:k(6.2),d:k(3.4),h:6.5,type:"shop",pal:3,roof:"store"},{id:"C5",x:k(20.6),z:k(24.2),w:k(5.6),d:k(3.4),h:7.5,type:"shop",pal:2,roof:"cinema",sign:"CINE ODEON"},{id:"I1",x:k(29.5),z:k(1.5),w:k(5.4),d:k(5.6),h:7,type:"warehouse",pal:1,roof:"corrugated"},{id:"I2",x:k(29.5),z:k(8.6),w:k(5.4),d:k(4.4),h:5,type:"warehouse",pal:2,roof:"corrugated"},{id:"I3",x:k(36.4),z:k(1.5),w:k(6.2),d:k(6.4),h:9,type:"warehouse",pal:3,roof:"factory",chimney:!0},{id:"I4",x:k(43.2),z:k(1.5),w:k(3.4),d:k(4.4),h:5,type:"warehouse",pal:1,roof:"corrugated"},{id:"I5",x:k(36.4),z:k(9.6),w:k(4.8),d:k(4.2),h:6,type:"warehouse",pal:2,roof:"garage"},{id:"H1",x:k(.6),z:k(1),w:k(2.8),d:k(2.4),h:4.2,type:"house",pal:0,roof:"gable"},{id:"H2",x:k(.6),z:k(7.4),w:k(2.8),d:k(2.6),h:4,type:"house",pal:1,roof:"gable"},{id:"H3",x:k(5.4),z:k(1),w:k(2.4),d:k(2.4),h:4.4,type:"house",pal:2,roof:"gable"},{id:"H4",x:k(8.4),z:k(1),w:k(2.2),d:k(2.4),h:3.8,type:"house",pal:0,roof:"gable"},{id:"H5",x:k(5.4),z:k(7.4),w:k(2.4),d:k(2.6),h:4.2,type:"house",pal:1,roof:"gable"},{id:"H6",x:k(8.4),z:k(7.4),w:k(2.2),d:k(2.6),h:4,type:"house",pal:2,roof:"gable"},{id:"H7",x:k(.6),z:k(11.4),w:k(2.8),d:k(2.2),h:3.8,type:"house",pal:2,roof:"gable",damage:1},{id:"H8",x:k(5.4),z:k(11.4),w:k(4.8),d:k(2.2),h:4,type:"house",pal:0,roof:"gable"},{id:"H9",x:k(.6),z:k(17.6),w:k(2.8),d:k(2.4),h:4,type:"house",pal:1,roof:"gable"},{id:"H10",x:k(5.4),z:k(17.6),w:k(2.4),d:k(2.4),h:4.2,type:"house",pal:0,roof:"gable"},{id:"H11",x:k(8.4),z:k(17.6),w:k(2.2),d:k(2.4),h:3.8,type:"house",pal:2,roof:"gable"},{id:"H12",x:k(.6),z:k(24.4),w:k(2.8),d:k(2.6),h:4.2,type:"house",pal:0,roof:"gable"},{id:"H13",x:k(5.4),z:k(24.4),w:k(4.8),d:k(2.6),h:4,type:"house",pal:1,roof:"gable"},{id:"H14",x:k(.6),z:k(27.6),w:k(2.8),d:k(2.2),h:3.8,type:"house",pal:2,roof:"gable",damage:1},{id:"H15",x:k(5.6),z:k(33.6),w:k(2.6),d:k(2.4),h:4,type:"house",pal:1,roof:"gable"},{id:"H16",x:k(9),z:k(33.6),w:k(2.6),d:k(2.4),h:4.2,type:"house",pal:0,roof:"gable"},{id:"H17",x:k(20.6),z:k(33.6),w:k(2.6),d:k(2.4),h:3.8,type:"house",pal:2,roof:"gable"},{id:"H18",x:k(24),z:k(33.6),w:k(2.4),d:k(2.4),h:4,type:"house",pal:1,roof:"gable"},{id:"H19",x:k(5.6),z:k(42.6),w:k(2.6),d:k(2.4),h:4,type:"house",pal:0,roof:"gable"},{id:"H20",x:k(20.6),z:k(42.6),w:k(5.4),d:k(3),h:4.4,type:"house",pal:2,roof:"gable"},{id:"A1",x:k(29.5),z:k(17.6),w:k(5.4),d:k(4.4),h:8,type:"ruin",pal:2,roof:"ruin",damage:3},{id:"A2",x:k(36.2),z:k(17.6),w:k(4.6),d:k(4),h:6,type:"ruin",pal:1,roof:"ruin",damage:2,sign:"FARMÁCIA SAQUEADA"},{id:"A3",x:k(41.6),z:k(17.6),w:k(4.8),d:k(5.2),h:10,type:"ruin",pal:3,roof:"ruin",damage:2},{id:"A4",x:k(29.5),z:k(24.2),w:k(4.4),d:k(4),h:2.2,type:"ruin",pal:1,roof:"collapsed"},{id:"A5",x:k(36.2),z:k(29.4),w:k(4.4),d:k(4),h:5.5,type:"ruin",pal:2,roof:"ruin",damage:2},{id:"A6",x:k(42.4),z:k(29.4),w:k(4),d:k(5.6),h:7,type:"ruin",pal:1,roof:"ruin",damage:3},{id:"A7",x:k(29.5),z:k(35.6),w:k(5),d:k(4.4),h:6.5,type:"ruin",pal:3,roof:"ruin",damage:2},{id:"A8",x:k(36.6),z:k(39.6),w:k(4.2),d:k(4),h:4.5,type:"ruin",pal:2,roof:"collapsed"},{id:"A9",x:k(29.6),z:k(42.6),w:k(4.4),d:k(3.6),h:5,type:"ruin",pal:1,roof:"ruin",damage:1},{id:"HQ",x:k(1),z:k(44.6),w:k(2.4),d:k(2),h:3.4,type:"house",pal:3,roof:"bunker"}],v2=[{id:"V1",x:k(14.5),z:k(28.8),ang:0,kind:"hatch",color:9062968,loot:"carTrunk"},{id:"V2",x:k(17.5),z:k(28.8),ang:0,kind:"sedan",color:6054472,loot:"carTrunk"},{id:"V3",x:k(20.5),z:k(28.8),ang:0,kind:"pickup",color:6975348,loot:"carTrunk"},{id:"V4",x:k(23.5),z:k(28.8),ang:.06,kind:"sedan",color:11571248,loot:"carTrunk"},{id:"V5",x:k(16.5),z:k(6),ang:.5,kind:"sedan",color:2894894,burnt:!0},{id:"V6",x:k(24.6),z:k(13.7),ang:1.57,kind:"van",color:6975348,loot:"carTrunk"},{id:"V7",x:k(4),z:k(3.2),ang:1.57,kind:"hatch",color:4872810,loot:"carTrunk"},{id:"V8",x:k(19),z:k(36.4),ang:1.57,kind:"sedan",color:9062968,loot:"carTrunk"},{id:"V9",x:k(11),z:k(44.4),ang:0,kind:"pickup",color:6054472,loot:"carTrunk"},{id:"V10",x:k(43.8),z:k(10.4),ang:.3,kind:"truck",color:7297594,loot:"carTrunk"},{id:"V11",x:k(43.2),z:k(13.2),ang:-.2,kind:"van",color:6054472,loot:"carTrunk"},{id:"V12",x:k(33),z:k(13.4),ang:1.2,kind:"hatch",color:6975348,loot:"carTrunk"},{id:"V13",x:k(34.6),z:k(23.2),ang:2.4,kind:"sedan",color:3354668,burnt:!0},{id:"V14",x:k(40.6),z:k(26),ang:-1.1,kind:"pickup",color:3814446,burnt:!0},{id:"V15",x:k(31.6),z:k(31.4),ang:.9,kind:"hatch",color:3025960,burnt:!0},{id:"V16",x:k(44.2),z:k(38.4),ang:1.9,kind:"sedan",color:4867646,loot:"carTrunk"}],_2={x:10.5,z:175.5},Pi=6,Le={GRASS:0,DIRT:1,CONCRETE:2,ROAD:3,AVENUE:4,SIDEWALK:5,PARKING:6,RUBBLE:7,CAMP:8};class x2{constructor(){this.size=m2,this.cell=gn,this.n=Mt,this.grid=new Uint8Array(Mt*Mt),this.hRoad=new Uint8Array(Mt*Mt),this.vRoad=new Uint8Array(Mt*Mt),this._build()}idx(e,t){return t*Mt+e}cellAt(e,t){const i=Math.floor(e/gn),a=Math.floor(t/gn);return i<0||a<0||i>=Mt||a>=Mt?Le.DIRT:this.grid[this.idx(i,a)]}districtAt(e,t){const i=e/gn,a=t/gn;for(const o of g2)if(i>=o.x0&&i<=o.x1+1&&a>=o.z0&&a<=o.z1+1)return o;return{id:"ermo",nome:"ERMOS",safe:!1,hazard:!1}}surfaceAt(e,t){switch(this.cellAt(e,t)){case Le.GRASS:return"grass";case Le.DIRT:case Le.RUBBLE:return"dirt";case Le.CAMP:case Le.CONCRETE:case Le.PARKING:return"concrete";default:return"road"}}_markRoad(e,t,i,a,o,c){for(let d=t;d<=a;d++)for(let f=e;f<=i;f++){if(f<0||d<0||f>=Mt||d>=Mt)continue;const p=this.idx(f,d);this.grid[p]=o?Le.AVENUE:Le.ROAD,c?this.vRoad[p]=1:this.hRoad[p]=1}}_build(){const e=this.grid;e.fill(Le.GRASS);for(const i of uc.avenuesV)this._markRoad(i,0,i+1,Mt-1,!0,!0);for(const i of uc.avenuesH)this._markRoad(0,i,Mt-1,i+1,!0,!1);for(const i of uc.streetsV)this._markRoad(i,0,i,Mt-1,!1,!0);for(const i of uc.streetsH)this._markRoad(0,i,Mt-1,i,!1,!1);const t=(i,a)=>{if(i<0||a<0||i>=Mt||a>=Mt)return!0;const o=e[this.idx(i,a)];return o===Le.ROAD||o===Le.AVENUE};for(let i=0;i<Mt;i++)for(let a=0;a<Mt;a++){const o=this.idx(a,i);t(a,i)||(t(a-1,i)||t(a+1,i)||t(a,i-1)||t(a,i+1))&&(e[o]=Le.SIDEWALK)}for(let i=0;i<Mt;i++)for(let a=0;a<Mt;a++){const o=this.idx(a,i),c=e[o];if(c===Le.ROAD||c===Le.AVENUE||c===Le.SIDEWALK)continue;switch(this.districtAt(a*gn+2,i*gn+2).id){case"base":e[o]=Le.CAMP;break;case"central":case"comercial":e[o]=Le.CONCRETE;break;case"industrial":e[o]=cc(a,i,77)<.42?Le.DIRT:Le.CONCRETE;break;case"abandonada":e[o]=Le.RUBBLE;break;default:e[o]=Le.GRASS}}for(let i=28;i<=30;i++)for(let a=13;a<=26;a++){const o=this.idx(a,i);e[o]!==Le.ROAD&&e[o]!==Le.AVENUE&&e[o]!==Le.SIDEWALK&&(e[o]=Le.PARKING)}for(let i=9;i<=14;i++)for(let a=42;a<=46;a++){const o=this.idx(a,i);e[o]!==Le.ROAD&&e[o]!==Le.AVENUE&&e[o]!==Le.SIDEWALK&&(e[o]=Le.DIRT)}}paintCanvas(){const e=document.createElement("canvas"),t=this.size*Pi;e.width=t,e.height=t;const i=e.getContext("2d"),a=Gr(2024);for(let o=0;o<Mt;o++)for(let c=0;c<Mt;c++)this._paintCell(i,c,o,a);return this._paintRoadDetails(i,a),this._paintCrosswalks(i),this._paintSpecials(i,a),e}_px(e){return e*Pi}_paintCell(e,t,i,a){const o=this.grid[this.idx(t,i)],c=t*gn*Pi,d=i*gn*Pi,f=gn*Pi,p=cc(t,i,5),x=(g,m)=>{const _=parseInt(g.slice(1),16);let M=(_>>16)+(p-.5)*m,T=(_>>8&255)+(p-.5)*m,S=(_&255)+(p-.5)*m;return`rgb(${M|0},${T|0},${S|0})`};switch(o){case Le.ROAD:case Le.AVENUE:{e.fillStyle=x("#24262b",10),e.fillRect(c,d,f,f);for(let g=0;g<26;g++)e.fillStyle=a()<.5?"#2b2e34":"#1d1f24",e.fillRect(c+(a()*f|0),d+(a()*f|0),2,2);p<.3&&(e.fillStyle="#2e3138",e.fillRect(c+4,d+5,f-9,f-11),e.strokeStyle="#3a3e46",e.lineWidth=1,e.strokeRect(c+4.5,d+5.5,f-10,f-12));break}case Le.SIDEWALK:{e.fillStyle=x("#6e7069",12),e.fillRect(c,d,f,f),e.fillStyle="#5c5e55",e.fillRect(c+f/2-1,d,1,f),e.fillRect(c,d+f/2-1,f,1);for(let g=0;g<10;g++)e.fillStyle=a()<.5?"#7a7c72":"#62645b",e.fillRect(c+(a()*f|0),d+(a()*f|0),2,1);break}case Le.GRASS:{e.fillStyle=x("#3d5933",12),e.fillRect(c,d,f,f);for(let g=0;g<30;g++)e.fillStyle=a()<.55?"#46653b":"#34502c",e.fillRect(c+(a()*f|0),d+(a()*f|0),2,2);p>.86&&(e.fillStyle="#5a6438",e.fillRect(c+(a()*14|0),d+(a()*14|0),8,6)),p>.55&&p<.6&&(e.fillStyle="#c8c050",e.fillRect(c+(a()*f|0),d+(a()*f|0),2,2));break}case Le.DIRT:{e.fillStyle=x("#5a4b39",12),e.fillRect(c,d,f,f);for(let g=0;g<22;g++)e.fillStyle=a()<.5?"#655543":"#4e4131",e.fillRect(c+(a()*f|0),d+(a()*f|0),2,2);p<.4&&(e.strokeStyle="#4a3d2e",e.beginPath(),e.moveTo(c+2,d+p*40),e.lineTo(c+f-3,d+p*40+4),e.stroke());break}case Le.CONCRETE:{e.fillStyle=x("#5a5e62",10),e.fillRect(c,d,f,f),e.fillStyle="#4c5054",e.fillRect(c,d+f-1,f,1),e.fillRect(c+f-1,d,1,f);for(let g=0;g<8;g++)e.fillStyle="#53575b",e.fillRect(c+(a()*f|0),d+(a()*f|0),1,1);break}case Le.PARKING:{e.fillStyle=x("#565a5e",10),e.fillRect(c,d,f,f),p<.5&&(e.fillStyle="#17181c",e.beginPath(),e.ellipse(c+f*a(),d+f*a(),5,4,0,0,7),e.fill());break}case Le.RUBBLE:{e.fillStyle=x("#51463a",12),e.fillRect(c,d,f,f);for(let g=0;g<12;g++)e.fillStyle=a()<.5?"#6a645c":"#474039",e.fillRect(c+(a()*f|0),d+(a()*f|0),2+(a()*4|0),2+(a()*3|0));for(let g=0;g<5;g++)e.fillStyle="#4a6a34",e.fillRect(c+(a()*f|0),d+(a()*f|0),2,2);p<.25&&(e.strokeStyle="#6a3a2a",e.beginPath(),e.moveTo(c+3,d+4),e.lineTo(c+f-5,d+f-6),e.stroke());break}case Le.CAMP:{e.fillStyle=x("#606258",10),e.fillRect(c,d,f,f),e.fillStyle="#52544a",e.fillRect(c,d+f-1,f,1),e.fillRect(c+f-1,d,1,f);for(let g=0;g<8;g++)e.fillStyle="#6a6c60",e.fillRect(c+(a()*f|0),d+(a()*f|0),2,1);break}}}_paintRoadDetails(e,t){const i=gn*Pi,a=this.grid,o=(f,p)=>f>=0&&p>=0&&f<Mt&&p<Mt&&(a[this.idx(f,p)]===Le.ROAD||a[this.idx(f,p)]===Le.AVENUE);for(let f=0;f<Mt;f++)for(let p=0;p<Mt;p++){const x=this.idx(p,f);if(!o(p,f))continue;const g=p*i,m=f*i,_=this.hRoad[x]&&this.vRoad[x],M=cc(p,f,13);if(M<.55&&!_){e.strokeStyle="rgba(13,14,17,0.85)",e.lineWidth=1,e.beginPath();let T=g+t()*i,S=m+t()*i;e.moveTo(T,S);for(let y=0;y<6;y++)T+=(t()-.5)*10,S+=(t()-.3)*8,e.lineTo(T,S);e.stroke()}if(M>.9&&M<.94&&(e.fillStyle="#101114",e.beginPath(),e.ellipse(g+i*.5,m+i*.55,4,3,0,0,7),e.fill(),e.fillStyle="#33363c",e.fillRect(g+i*.5-3,m+i*.55-3,6,1)),M>.62&&M<.72&&f>20&&(e.fillStyle="rgba(10,10,13,0.5)",e.beginPath(),e.ellipse(g+i*t(),m+i*t(),6,4,t()*3,0,7),e.fill()),_){cc(p,f,99)<.5&&(e.fillStyle="#17181c",e.beginPath(),e.arc(g+i/2,m+i/2,5,0,7),e.fill(),e.fillStyle="#2c2e33",e.beginPath(),e.arc(g+i/2,m+i/2,5,0,7),e.stroke(),e.fillRect(g+i/2-3,m+i/2-2,6,1),e.fillRect(g+i/2-3,m+i/2+1,6,1));continue}if(a[x]===Le.AVENUE){if(this.vRoad[x]&&o(p+1,f)&&a[this.idx(p+1,f)]===Le.AVENUE){e.fillStyle="#c0a030";for(let T=2;T<i;T+=12)e.fillRect(g+i-1,m+T,2,7)}if(this.hRoad[x]&&o(p,f+1)&&a[this.idx(p,f+1)]===Le.AVENUE){e.fillStyle="#c0a030";for(let T=2;T<i;T+=12)e.fillRect(g+T,m+i-1,7,2)}e.fillStyle="rgba(200,196,180,0.5)",this.vRoad[x]&&(o(p-1,f)||e.fillRect(g+1,m,2,i),o(p+2,f)||e.fillRect(g+i-3,m,2,i)),this.hRoad[x]&&(o(p,f-1)||e.fillRect(g,m+1,i,2),o(p,f+2)||e.fillRect(g,m+i-3,i,2))}else{if(e.fillStyle="rgba(190,186,172,0.28)",this.vRoad[x])for(let T=3;T<i;T+=12)e.fillRect(g+i/2-1,m+T,2,6);if(this.hRoad[x])for(let T=3;T<i;T+=12)e.fillRect(g+T,m+i/2-1,6,2)}}const c=[];for(let f=0;f<Mt;f++)for(let p=0;p<Mt;p++)this.hRoad[this.idx(p,f)]&&this.vRoad[this.idx(p,f)]&&c.push([p,f]);e.fillStyle="rgba(205,201,186,0.75)";const d=new Set;for(const[f,p]of c){const x=f*i,g=p*i,m=(_,M,T)=>{if(!o(_,M)||this.hRoad[this.idx(_,M)]&&this.vRoad[this.idx(_,M)])return;const S=T==="x"?`v${Math.max(f,_)}|${p}`:`h${f}|${Math.max(p,M)}`;if(!d.has(S))if(d.add(S),T==="x"){const y=_>f?x+i:x;for(let N=3;N<i-2;N+=6)e.fillRect(y-4+(_>f?0:-4),g+N,8,3)}else{const y=M>p?g+i:g;for(let N=3;N<i-2;N+=6)e.fillRect(x+N,y-4+(M>p?0:-4),3,8)}};m(f+1,p,"x"),m(f-1,p,"x"),m(f,p+1,"z"),m(f,p-1,"z")}}_paintCrosswalks(){}_paintSpecials(e,t){const i=gn*Pi;e.strokeStyle="rgba(15,15,18,0.4)",e.lineWidth=2;for(let o=0;o<14;o++){const c=t()<.5,d=Math.floor(t()*this.n),f=Math.floor(t()*this.size*Pi),p=60+t()*160;c?this.vRoad:this.hRoad;const x=Math.floor(d);if(e.beginPath(),c){const g=x*i+i*.32;e.moveTo(g,f),e.lineTo(g+(t()-.5)*8,f+p),e.moveTo(g+9,f),e.lineTo(g+9+(t()-.5)*8,f+p)}else{const g=x*i+i*.32;e.moveTo(f,g),e.lineTo(f+p,g+(t()-.5)*8),e.moveTo(f,g+9),e.lineTo(f+p,g+9+(t()-.5)*8)}e.stroke()}for(let o=0;o<7;o++){const c=(10+t()*(this.size-20))*Pi,d=(10+t()*(this.size-20))*Pi,f=10+t()*16,p=e.createRadialGradient(c,d,1,c,d,f);p.addColorStop(0,"rgba(8,8,10,0.75)"),p.addColorStop(1,"rgba(8,8,10,0)"),e.fillStyle=p,e.beginPath(),e.arc(c,d,f,0,7),e.fill(),e.strokeStyle="rgba(8,8,10,0.4)";for(let x=0;x<5;x++){const g=t()*Math.PI*2;e.beginPath(),e.moveTo(c+Math.cos(g)*f*.5,d+Math.sin(g)*f*.5),e.lineTo(c+Math.cos(g)*(f+8+t()*14),d+Math.sin(g)*(f+8+t()*14)),e.stroke()}}for(let o=28;o<=30;o++)for(let c=13;c<=26;c++){if(this.grid[this.idx(c,o)]!==Le.PARKING)continue;const d=c*i,f=o*i;e.fillStyle="rgba(205,201,186,0.55)";for(let p=0;p<=gn;p+=3)e.fillRect(d+p*Pi-1,f+2,2,i-4)}const a=(o,c)=>o>=0&&c>=0&&o<Mt&&c<Mt&&(this.grid[this.idx(o,c)]===Le.ROAD||this.grid[this.idx(o,c)]===Le.AVENUE);for(let o=0;o<Mt;o++)for(let c=0;c<Mt;c++){if(this.grid[this.idx(c,o)]!==Le.SIDEWALK)continue;const d=c*i,f=o*i;e.fillStyle="#8a8c80",a(c-1,o)&&e.fillRect(d,f,2,i),a(c+1,o)&&e.fillRect(d+i-2,f,2,i),a(c,o-1)&&e.fillRect(d,f,i,2),a(c,o+1)&&e.fillRect(d,f+i-2,i,2),e.fillStyle="rgba(0,0,0,0.35)",a(c-1,o)&&e.fillRect(d-2,f,2,i),a(c+1,o)&&e.fillRect(d+i,f,2,i),a(c,o-1)&&e.fillRect(d,f-2,i,2),a(c,o+1)&&e.fillRect(d,f+i,i,2)}}}const ng=ln;function jn(s,e,t,i=1){const a=document.createElement("canvas");a.width=s,a.height=e;const o=a.getContext("2d");t(o,s,e,Gr(i));const c=new mh(a);return c.magFilter=ng,c.minFilter=ng,c.generateMipmaps=!1,c.colorSpace=Nn,c.wrapS=c.wrapT=vc,c}function xh(s,e,t,i,a,o){for(let c=0;c<o;c++)s.fillStyle=a[Math.floor(i()*a.length)],s.fillRect(Math.floor(i()*e),Math.floor(i()*t),1,1)}const Tc=[{base:"#77493b",dark:"#66392e",light:"#8a5a49",win:"#20262c",lit:"#d8a24a",brick:!0},{base:"#6b6f52",dark:"#595d43",light:"#7c8060",win:"#1e242a",lit:"#d8a24a",brick:!1},{base:"#7f838a",dark:"#6d7178",light:"#92969d",win:"#1c222a",lit:"#d8a24a",brick:!1},{base:"#4c525c",dark:"#3f454e",light:"#5d646f",win:"#171d24",lit:"#e0b05a",brick:!1,glassy:!0}];function Zg(s,e,t,i,a,o=!1){s.fillStyle=a.base,s.fillRect(0,0,e,t);for(let c=0;c<t;c+=8)s.fillStyle=i()<.5?a.dark:a.light,s.globalAlpha=.18,s.fillRect(0,c,e,1),s.globalAlpha=1;if(a.brick){s.fillStyle=a.dark;for(let c=0;c<t;c+=3){s.globalAlpha=.35,s.fillRect(0,c,e,1);const d=c/3%2===0?0:3;for(let f=d;f<e;f+=6)s.fillRect(f,c,1,2);s.globalAlpha=1}}for(let c=5;c<t-6;c+=13)for(let d=4;d<e-6;d+=13){const f=o&&i()<.35,p=!f&&i()<(a.glassy?.2:.09);s.fillStyle="#14181c",s.fillRect(d-1,c-1,8,10),s.fillStyle=f?"#0c0f12":p?a.lit:a.win,s.fillRect(d,c,6,8),p&&(s.fillStyle="#f0c878",s.fillRect(d,c,6,2)),f&&(s.fillStyle="#3a444c",s.fillRect(d+1,c+2,1,3),s.fillRect(d+3,c+1,1,2)),s.fillStyle=a.dark,s.fillRect(d+2,c,1,8),i()<.22&&(s.fillStyle=a.light,s.fillRect(d-1,c+9,8,2))}s.fillStyle="#1a160f";for(let c=0;c<7;c++){s.globalAlpha=.12+i()*.12;const d=Math.floor(i()*e);s.fillRect(d,Math.floor(i()*t*.4),1+Math.floor(i()*2),t)}s.globalAlpha=.28,s.fillRect(0,t-5,e,5),s.globalAlpha=1}const ig=Tc.map((s,e)=>jn(64,64,(t,i,a,o)=>Zg(t,i,a,o,s),10+e)),y2=Tc.map((s,e)=>jn(64,64,(t,i,a,o)=>Zg(t,i,a,o,s,!0),40+e)),Po={hatch:{L:4,W:1.9,cab:[.32,.62]},sedan:{L:4.6,W:1.9,cab:[.3,.66]},pickup:{L:5,W:2,cab:[.26,.56],bed:!0},van:{L:5.2,W:2.2,cab:[.16,.55],vanTop:!0},truck:{L:7.6,W:2.5,cab:[.06,.26],cargo:!0}},Jd=new Map;function S2(s,e,t=!1,i=7){const a=`${s}|${e}|${t}|${i}`;if(Jd.has(a))return Jd.get(a);const o=Po[s],c=8,d=Math.round(o.L*c),f=Math.round(o.W*c),p="#"+e.toString(16).padStart(6,"0"),x=jn(d,f,(g,m,_,M)=>{const T=b=>{const C=parseInt(p.slice(1),16);let P=(C>>16)+b,I=(C>>8&255)+b,w=(C&255)+b;return P=Math.max(0,Math.min(255,P)),I=Math.max(0,Math.min(255,I)),w=Math.max(0,Math.min(255,w)),`rgb(${P},${I},${w})`};g.fillStyle=t?"#26231f":p,g.fillRect(0,0,m,_),xh(g,m,_,M,t?["#1c1a17","#302c26","#171512"]:[T(-16),T(12),T(-6)],m*_*.16),g.fillStyle=t?"#141210":T(-42),g.fillRect(0,0,m,1),g.fillRect(0,_-1,m,1),g.fillRect(0,0,1,_),g.fillRect(m-1,0,1,_);const[S,y]=o.cab,N=Math.floor(S*m),F=Math.floor(y*m);if(g.fillStyle=T(-22),g.fillRect(N,1,1,_-2),g.fillRect(F,1,1,_-2),o.vanTop||o.cargo){if(g.fillStyle=t?"#201d1a":T(16),g.fillRect(N,2,F-N,_-4),o.cargo){g.fillStyle="#57503f";for(let b=F+2;b<m-2;b+=3)g.fillRect(b,2,1,_-4);g.fillStyle="#3d382c",g.fillRect(F+1,1,m-F-2,1),g.fillRect(F+1,_-2,m-F-2,1)}}else g.fillStyle="#232b32",g.fillRect(N+1,2,3,_-4),g.fillStyle="#39434c",g.fillRect(N+1,2,3,1),g.fillStyle=t?"#1e1b18":T(22),g.fillRect(N+4,2,F-N-6,_-4),g.fillStyle="#232b32",g.fillRect(F-2,2,2,_-4),o.bed&&(g.fillStyle="#3a352c",g.fillRect(F,2,m-F-1,_-4));if(g.fillStyle=T(-30),g.fillRect(N-1,0,1,1),g.fillRect(N-1,_-1,1,1),g.fillStyle=t?"#3a362e":"#d8d3a8",g.fillRect(1,2,1,2),g.fillRect(1,_-4,1,2),g.fillStyle=t?"#33261e":"#a03828",g.fillRect(m-2,2,1,2),g.fillRect(m-2,_-4,1,2),t){g.fillStyle="#0e0c0a";const b=Math.floor(m*.45),C=Math.floor(_*.5);for(let P=0;P<10;P++)g.fillRect(b+Math.floor(M()*8)-4,C+Math.floor(M()*6)-3,2,1);g.fillStyle="#4a4038",g.fillRect(0,Math.floor(_/2),m,1)}else{g.fillStyle="#7a4a2a";for(let b=0;b<5;b++){g.globalAlpha=.5;const C=Math.floor(M()*m),P=Math.floor(M()*_);g.fillRect(C,P,1+Math.floor(M()*3),1+Math.floor(M()*2))}g.globalAlpha=.2,g.fillStyle="#241f16";for(let b=0;b<6;b++)g.fillRect(Math.floor(M()*m),Math.floor(M()*_),2,1);g.globalAlpha=1}},i);return Jd.set(a,x),x}const Qd=new Map;function Kf(s,e,t=3){const i=s+e+t;if(Qd.has(i))return Qd.get(i);const a=jn(26,26,(o,c,d,f)=>{o.clearRect(0,0,c,d);const p=c/2,x=d/2,g=(m,_)=>{o.fillStyle=m;for(let M=-_;M<=_;M++)for(let T=-_;T<=_;T++)T*T+M*M<=_*_+f()*8-4&&o.fillRect(p+T,x+M,1,1)};g("#22301a",12),g(s,10),g(e,7),o.fillStyle="#1c2815";for(let m=0;m<26;m++)o.fillRect(p+3+Math.floor(f()*6),x+2+Math.floor(f()*7),1,1);o.fillStyle="#a8c060";for(let m=0;m<14;m++)o.fillRect(p-8+Math.floor(f()*7),x-8+Math.floor(f()*7),1,1);o.clearRect(0,0,2,2),o.clearRect(c-2,0,2,2),o.clearRect(0,d-2,2,2),o.clearRect(c-2,d-2,2,2)},t);return Qd.set(i,a),a}const M2=jn(12,12,(s,e,t,i)=>{s.clearRect(0,0,e,t);const a=["#4a6a34","#5a7c3e","#3c5a2a"];for(let o=0;o<9;o++){s.fillStyle=a[o%3];const c=2+Math.floor(i()*8);s.fillRect(c,3+Math.floor(i()*3),1,4+Math.floor(i()*4))}},5),ma=jn(24,24,(s,e,t,i)=>{s.fillStyle="#8a6a3c",s.fillRect(0,0,e,t),xh(s,e,t,i,["#7c5e34","#97763f","#6e532c"],90),s.fillStyle="#5e4423",s.fillRect(0,0,e,3),s.fillRect(0,t-3,e,3),s.fillRect(0,0,3,t),s.fillRect(e-3,0,3,t);for(let a=0;a<e;a+=6)s.fillRect(a,0,1,t);s.fillRect(0,0,e,1),s.fillRect(0,t-1,e,1),s.fillStyle="#3d2c15",s.fillRect(3,3,2,2),s.fillRect(e-5,3,2,2),s.fillRect(3,t-5,2,2),s.fillRect(e-5,t-5,2,2),s.globalAlpha=.35,s.fillStyle="#4a3517",s.fillRect(4,t-9,e-8,4),s.globalAlpha=1},21),rg=jn(24,24,(s,e,t,i)=>{s.fillStyle="#7c4438",s.fillRect(0,0,e,t),xh(s,e,t,i,["#6a3a30","#8c5040","#593028"],80),s.fillStyle="#4a2620",s.fillRect(0,2,e,2),s.fillRect(0,t-4,e,2),s.fillRect(0,Math.floor(t/2),e,1),s.fillStyle="#9c5a44",s.fillRect(0,4,e,1),s.fillStyle="#3a1f1a";for(let a=0;a<5;a++)s.fillRect(Math.floor(i()*e),6+Math.floor(i()*10),1,3+Math.floor(i()*4))},22),jd=new Map;function E2(s){if(jd.has(s))return jd.get(s);const e="#"+s.toString(16).padStart(6,"0"),t=jn(64,32,(i,a,o,c)=>{i.fillStyle=e,i.fillRect(0,0,a,o);const d=parseInt(e.slice(1),16),f=`rgb(${Math.max(0,(d>>16)-34)},${Math.max(0,(d>>8&255)-34)},${Math.max(0,(d&255)-34)})`,p=`rgb(${Math.min(255,(d>>16)+26)},${Math.min(255,(d>>8&255)+26)},${Math.min(255,(d&255)+26)})`;for(let x=3;x<a-3;x+=4)i.fillStyle=f,i.fillRect(x,3,2,o-6),i.fillStyle=p,i.fillRect(x+2,3,1,o-6);i.fillStyle=f,i.fillRect(0,0,a,3),i.fillRect(0,o-3,a,3),i.fillRect(0,0,3,o),i.fillRect(a-3,0,3,o),i.fillStyle="#5a3a22";for(let x=0;x<9;x++)i.globalAlpha=.55,i.fillRect(Math.floor(c()*a),o-10+Math.floor(c()*7),2+Math.floor(c()*4),2);i.globalAlpha=1},31);return jd.set(s,t),t}const ef=new Map;function Jg(s,e="#3a4436",t="#d8d3c0",i=96,a=32){const o=s+e;if(ef.has(o))return ef.get(o);const c=jn(i,a,(d,f,p)=>{d.fillStyle=e,d.fillRect(0,0,f,p),d.fillStyle=t,d.fillRect(0,0,f,2),d.fillRect(0,p-2,f,2),d.fillRect(0,0,2,p),d.fillRect(f-2,0,2,p),d.fillStyle=t,d.font="bold 13px monospace",d.textAlign="center",d.textBaseline="middle",d.fillText(s,f/2,p/2+1)},s.length*7);return ef.set(o,c),c}const w2=jn(24,16,(s,e,t)=>{s.fillStyle="#5c6240",s.fillRect(0,0,e,t),s.fillStyle="#a03828";for(let i=0;i<e;i++)s.fillRect(i,Math.floor(6+i/e*5),1,4);s.fillStyle="#e4dfd0",s.fillRect(10,6,4,1),s.fillRect(9,7,6,2),s.fillRect(10,9,4,1),s.fillRect(11,5,2,1),s.fillRect(11,10,2,1),s.fillStyle="#454a30",s.fillRect(0,0,2,t)},9),Zf=jn(16,16,(s,e,t)=>{const i=s.createRadialGradient(8,8,1,8,8,8);i.addColorStop(0,"rgba(255,255,255,0.9)"),i.addColorStop(.6,"rgba(255,255,255,0.35)"),i.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=i,s.fillRect(0,0,e,t)},2),T2=jn(8,8,s=>{s.clearRect(0,0,8,8),s.fillStyle="#fff",s.fillRect(3,1,2,6),s.fillRect(1,3,6,2)},4);jn(16,16,(s,e,t,i)=>{s.fillStyle="#33424c",s.fillRect(0,0,e,t),s.fillStyle="#4a5c66";for(let a=0;a<4;a++){const o=Math.floor(i()*e);s.fillRect(o,0,2,t)}s.fillStyle="#20292f",s.fillRect(0,0,e,1),s.fillRect(0,t-1,e,1),s.fillRect(0,0,1,t),s.fillRect(e-1,0,1,t)},12);const A2=jn(24,16,(s,e,t)=>{s.fillStyle="#4c5238",s.fillRect(0,0,e,t),s.fillStyle="#5c6444";for(let i=2;i<t-2;i+=3)s.fillRect(2,i,e-4,2);s.fillStyle="#8a8f70",s.fillRect(e-8,2,6,t-4),s.fillStyle="#333823",s.fillRect(0,0,e,2),s.fillRect(0,t-2,e,2),s.fillRect(0,0,2,t),s.fillRect(e-2,0,2,t)},17),fr=new Map;function ve(s,e,t){const i=`b${s}|${e}|${t}`;return fr.has(i)||fr.set(i,new Aa(s,e,t)),fr.get(i)}function nn(s,e,t,i=10){const a=`c${s}|${e}|${t}|${i}`;return fr.has(a)||fr.set(a,new vh(s,e,t,i)),fr.get(a)}function Eo(s,e){const t=`p${s}|${e}`;return fr.has(t)||fr.set(t,new qr(s,e)),fr.get(t)}const hr=new Map;function Ge(s,e=""){const t=`L${s}|${e}`;return hr.has(t)||hr.set(t,new kt({color:s})),hr.get(t)}function Jf(s){const e=`B${s}`;return hr.has(e)||hr.set(e,new Xr({color:s})),hr.get(e)}function Qf(s,{transparent:e=!1,alphaTest:t=0}={}){const i=`T${s.id}|${e}|${t}`;return hr.has(i)||hr.set(i,new kt({map:s,transparent:e,alphaTest:t||void 0})),hr.get(i)}const R2=80;class b2{constructor(e){this.scene=e,this.pool=[],this.active=[],this.emitters=[];for(let t=0;t<R2;t++){const i=new bc({map:Zf,transparent:!0,depthWrite:!1,opacity:0}),a=new hh(i);a.visible=!1,e.add(a),this.pool.push(a)}}spawn(e,t,i,a={}){const o=this.pool.pop();if(!o)return;o.visible=!0,o.position.set(e,t,i);const c=a.size??.8;o.scale.set(c,c,1),o.material.map=a.spark?T2:Zf,o.material.color.set(a.color??16777215),o.material.opacity=a.opacity??.7,o.material.rotation=Math.random()*Math.PI,this.active.push({sp:o,vx:a.vx??0,vy:a.vy??.8,vz:a.vz??0,life:a.life??1.4,age:0,grow:a.grow??.6,fadeFrom:a.opacity??.7})}smoke(e,t,i,{rate:a=3,color:o=10132114,size:c=1}={}){this.emitters.push({x:e,y:t,z:i,rate:a,color:o,size:c,acc:0})}burst(e,t,i,a=15786112,o=10){for(let c=0;c<o;c++){const d=Math.random()*Math.PI*2,f=1+Math.random()*2;this.spawn(e,t,i,{spark:!0,color:a,size:.28+Math.random()*.2,vx:Math.cos(d)*f,vz:Math.sin(d)*f,vy:1.6+Math.random()*1.4,life:.45+Math.random()*.3,opacity:1,grow:-.3})}}dust(e,t,i){this.spawn(e+(Math.random()-.5)*.5,t,i+(Math.random()-.5)*.5,{color:9077362,size:.3,vy:.4,life:.5,opacity:.4,grow:.8})}update(e){for(const t of this.emitters)for(t.acc+=t.rate*e;t.acc>=1;)t.acc-=1,this.spawn(t.x+(Math.random()-.5)*.6,t.y,t.z+(Math.random()-.5)*.6,{color:t.color,size:t.size*(.5+Math.random()*.5),vy:.8+Math.random()*.7,vx:(Math.random()-.5)*.25,vz:(Math.random()-.5)*.25,life:1.6+Math.random()*1.2,opacity:.42,grow:.9});for(let t=this.active.length-1;t>=0;t--){const i=this.active[t];if(i.age+=e,i.age>=i.life){i.sp.visible=!1,this.pool.push(i.sp),this.active.splice(t,1);continue}const a=i.age/i.life;i.sp.position.x+=i.vx*e,i.sp.position.y+=i.vy*e,i.sp.position.z+=i.vz*e;const o=i.sp.scale.x+i.grow*e;i.sp.scale.set(Math.max(.05,o),Math.max(.05,o),1),i.sp.material.opacity=i.fadeFrom*(1-a)}}}let C2=1;class ba{constructor(e){this.scene=e,this.group=new Hn,this.id="e"+C2++,this.alive=!0,this.updaters=[],e.add(this.group)}setPosition(e,t,i=0){return this.group.position.set(e,i,t),this}get x(){return this.group.position.x}set x(e){this.group.position.x=e}get y(){return this.group.position.y}set y(e){this.group.position.y=e}get z(){return this.group.position.z}set z(e){this.group.position.z=e}onUpdate(e){this.updaters.push(e)}update(e,t){for(const i of this.updaters)i(e,t)}dispose(){this.scene.remove(this.group),this.alive=!1}}function P2(s){let e=2166136261;for(let t=0;t<s.length;t++)e^=s.charCodeAt(t),e=Math.imul(e,16777619);return Gr(e>>>0)}const sg=2.5;function L2(s){switch(s.roof){case"gable":return["#7c4a38","#64503c","#6e7276","#4e5258"][s.pal]||"#7c4a38";case"corrugated":case"kiosk":return"#6e7478";case"factory":case"garage":return"#5d6367";case"cinema":return"#3e4248";case"ruin":return"#5e5a52";case"collapsed":return"#57503f";case"bunker":return"#4c5048";default:return"#585c62"}}function I2(s,e,t,i,a){const o=L2(i);s.fillStyle=o,s.fillRect(0,0,e,t);const c=(g,m)=>{const _=parseInt(g.slice(1),16),M=Math.max(0,Math.min(255,(_>>16)+m)),T=Math.max(0,Math.min(255,(_>>8&255)+m)),S=Math.max(0,Math.min(255,(_&255)+m));return`rgb(${M},${T},${S})`};if(i.roof==="gable"){s.fillStyle=c(o,-14),s.fillRect(0,0,e,t/2),s.fillStyle=c(o,10),s.fillRect(0,t/2,e,t/2),s.fillStyle=c(o,34),s.fillRect(0,t/2-1,e,2),s.fillStyle=c(o,-26);for(let g=2;g<t;g+=4)s.fillRect(0,g,e,1)}else if(i.roof==="corrugated"||i.roof==="factory"||i.roof==="garage"||i.roof==="kiosk")for(let g=0;g<e;g+=4)s.fillStyle=g/4%2===0?c(o,-10):c(o,8),s.fillRect(g,0,2,t);else{for(let g=0;g<e*t*.14;g++)s.fillStyle=a()<.5?c(o,-8):c(o,8),s.fillRect(a()*e|0,a()*t|0,1,1);s.strokeStyle=c(o,-18),s.globalAlpha=.5;for(let g=8;g<e;g+=20)s.beginPath(),s.moveTo(g,0),s.lineTo(g,t),s.stroke();for(let g=8;g<t;g+=20)s.beginPath(),s.moveTo(0,g),s.lineTo(e,g),s.stroke();s.globalAlpha=1}const d=1+(a()*3|0);for(let g=0;g<d;g++){s.fillStyle="rgba(20,21,24,0.45)";const m=a()*e,_=a()*t;s.beginPath(),s.ellipse(m,_,3+a()*8,2+a()*6,a()*3,0,7),s.fill()}const f=2+(a()*4|0);for(let g=0;g<f;g++){const m=a()*e|0,_=a()*t|0;s.fillStyle=`rgba(122,74,42,${.25+a()*.3})`,s.fillRect(m,_,2+(a()*4|0),2+(a()*3|0)),s.fillStyle="rgba(122,74,42,0.22)",s.fillRect(m,_,1,4+(a()*10|0))}if(i.roof==="factory"||i.roof==="garage"||i.roof==="corrugated"){const g=(i.roof==="corrugated",2);for(let m=0;m<g;m++){const _=t*(.28+m*.36);for(let M=6;M<e-12;M+=12)s.fillStyle="#2c343a",s.fillRect(M-1,_-1,9,6),s.fillStyle="#3a4a52",s.fillRect(M,_,7,4),s.fillStyle="#54666e",s.fillRect(M,_,7,1)}}if(i.helipad){const g=e/2,m=t/2,_=Math.min(e,t)*.3;s.strokeStyle="#c8c040",s.lineWidth=2,s.beginPath(),s.arc(g,m,_,0,7),s.stroke(),s.fillStyle="#c8c040",s.fillRect(g-_*.42,m-_*.5,3,_),s.fillRect(g+_*.42-3,m-_*.5,3,_),s.fillRect(g-_*.42,m-1,_*.84,3);for(let M=0;M<8;M++){const T=M/8*Math.PI*2;s.fillRect(g+Math.cos(T)*(_+3)-1,m+Math.sin(T)*(_+3)-1,2,2)}}const p=i.damage?.8:i.type==="house"?.5:.3;if(a()<p){s.fillStyle="#4a6a34";for(let g=0;g<26;g++){const m=a()*4|0,_=m===0||m===1?a()*e:a()<.5?1:e-2,M=m<2?a()<.5?1:t-2:a()*t;s.fillRect(_|0,M|0,1+(a()*2|0),1+(a()*2|0))}}const x=i.damage||0;for(let g=0;g<x;g++){const m=e*(.2+a()*.6),_=t*(.2+a()*.6),M=(3+x*3+a()*5)*(g===0?1.4:.8);s.fillStyle="#191a1e",s.beginPath();for(let T=0;T<=10;T++){const S=T/10*Math.PI*2,y=M*(.7+a()*.5),N=m+Math.cos(S)*y,F=_+Math.sin(S)*y*.8;T===0?s.moveTo(N,F):s.lineTo(N,F)}s.fill(),s.fillStyle="#0d0e11",s.beginPath(),s.ellipse(m,_,M*.55,M*.42,0,0,7),s.fill(),s.strokeStyle="#6a3a2a",s.lineWidth=1;for(let T=0;T<4;T++)s.beginPath(),s.moveTo(m-M,_+(a()-.5)*M),s.lineTo(m+M,_+(a()-.5)*M),s.stroke();s.strokeStyle="rgba(15,16,19,0.8)";for(let T=0;T<5;T++){const S=a()*Math.PI*2;s.beginPath(),s.moveTo(m+Math.cos(S)*M,_+Math.sin(S)*M),s.lineTo(m+Math.cos(S)*(M+6+a()*10),_+Math.sin(S)*(M+6+a()*10)),s.stroke()}}s.strokeStyle="rgba(0,0,0,0.5)",s.lineWidth=3,s.strokeRect(1,1,e-2,t-2),s.strokeStyle="rgba(0,0,0,0.22)",s.lineWidth=2,s.strokeRect(4,4,e-8,t-8),s.fillStyle="rgba(255,246,220,0.13)",s.fillRect(2,2,2,t-4)}class D2 extends ba{constructor(e,t,i){super(e),this.plot=t;const a=t.x+t.w/2,o=t.z+t.d/2;this.group.position.set(a,0,o);const c=P2(t.id),d=Tc[t.pal]||Tc[0],x=(((t.damage||0)>=1?y2:ig)[t.pal]||ig[0]).clone();x.repeat.set(Math.max(1,t.w/7),Math.max(1,t.h/7)),x.needsUpdate=!0;const g=new kt({map:x}),m=document.createElement("canvas");m.width=Math.max(16,Math.round(t.w*sg)),m.height=Math.max(16,Math.round(t.d*sg)),I2(m.getContext("2d"),m.width,m.height,t,c);const _=new mh(m);_.magFilter=ln,_.minFilter=ln,_.generateMipmaps=!1,_.colorSpace=Nn;const M=new kt({map:_}),T=new Ne(ve(t.w,t.h,t.d),[g,g,M,Ge(2763310),g,g]);if(T.position.y=t.h/2,T.castShadow=!0,T.receiveShadow=!0,this.group.add(T),this.body=T,t.roof!=="gable"&&t.roof!=="collapsed"){const S=t.type==="ruin"&&(t.damage||0)>=2?.25:.55,y=Ge(new vt(d.base).multiplyScalar(.9).getHex()),N=.35,F=(b,C,P,I)=>{const w=new Ne(ve(b,S,C),y);w.position.set(P,t.h+S/2,I),w.castShadow=!0,this.group.add(w)};F(t.w+N,N,0,-t.d/2),F(t.w+N,N,0,t.d/2),F(N,t.d,-t.w/2,0),F(N,t.d,t.w/2,0)}this._roofProps(c,d),this._groundDebris(c),i&&i.collision.addBox(a,o,t.w,t.d,"building")}_add(e,t,i,a){return e.position.set(t,a,i),e.castShadow=!0,this.group.add(e),e}_roofProps(e,t){const i=this.plot.h,a=this.plot.w/2-1,o=this.plot.d/2-1,c=()=>[(e()*2-1)*a,(e()*2-1)*o],d=Ge(9080980),f=Ge(8018500),p=Ge(4606286),x=()=>{const[C,P]=c();this._add(new Ne(ve(1.3,.8,1.1),e()<.4?f:d),C,P,i+.4),this._add(new Ne(ve(.9,.1,.7),p),C,P,i+.85)},g=()=>{const[C,P]=c();this._add(new Ne(nn(.32,.4,.7,8),d),C,P,i+.35),this._add(new Ne(nn(.44,.44,.14,8),p),C,P,i+.75)},m=()=>{const[C,P]=c(),I=new Hn,w=new Ne(nn(1,1.05,1.7,10),e()<.5?f:Ge(6975606));w.position.y=1.5,w.castShadow=!0;const L=new Ne(nn(.2,1.02,.35,10),p);L.position.y=2.5,L.castShadow=!0,I.add(w,L);for(let V=0;V<4;V++){const z=new Ne(ve(.14,1.6,.14),p);z.position.set(Math.cos(V*Math.PI/2)*.8,.8,Math.sin(V*Math.PI/2)*.8),z.castShadow=!0,I.add(z)}I.position.set(C,i,P),this.group.add(I)},_=()=>{const[C,P]=c(),I=2.4+e()*2;this._add(new Ne(ve(.12,I,.12),p),C,P,i+I/2);for(let L=0;L<3;L++)this._add(new Ne(ve(1.1-L*.28,.07,.07),d),C,P,i+I*.55+L*.5);const w=new Ne(ve(.18,.18,.18),Jf(14694440));w.position.set(C,i+I+.15,P),this.group.add(w),this.onUpdate((L,V)=>{w.visible=(V*1.6|0)%2===0})},M=()=>{const[C,P]=c();this._add(new Ne(ve(2.6,2.4,2.2),Ge(new vt(t.base).multiplyScalar(.95).getHex())),C,P,i+1.2),this._add(new Ne(ve(.9,1.3,.1),p),C,P-1.12,i+.75)},T=C=>{const[P,I]=c(),w=C?1.9:1,L=C?3.4:1.7;return this._add(new Ne(ve(w,L,w),Ge(7226420)),P,I,i+L/2),this._add(new Ne(ve(w+.3,.3,w+.3),Ge(5846826)),P,I,i+L+.15),this._add(new Ne(ve(w*.6,.1,w*.6),Jf(1316120)),P,I,i+L+.32),{x:P,z:I,y:i+L+.4}},S=()=>{const[C,P]=c(),I=Math.min(this.plot.w,this.plot.d)-3;this._add(new Ne(nn(.16,.16,I,6),f),C,P,i+.2).rotation.z=Math.PI/2,this._add(new Ne(nn(.16,.16,I*.6,6),d),C,P+.6,i+.2).rotation.z=Math.PI/2},y=()=>{const[C,P]=c();this._add(new Ne(nn(.4,.5,.5,8),d),C,P,i+.25),this._add(new Ne(nn(.05,.42,.4,8),p),C,P,i+.68)},N=()=>{const[C,P]=c(),I=new Ne(ve(.8+e(),.5+e()*.6,.8+e()),Ge(e()<.5?6972508:5722175));I.rotation.y=e()*3,this._add(I,C,P,i+.3)},F=()=>{const[C,P]=c();for(let I=0;I<4;I++){const w=new Ne(ve(.06,1.4+e(),.06),Ge(4864558));w.rotation.set((e()-.5)*.9,0,(e()-.5)*.9),this._add(w,C+(e()-.5),P+(e()-.5),i+.6)}},b=(C,P)=>C+(e()*(P-C+1)|0);switch(this.plot.roof){case"office":case"hotel":case"store":e()<.65&&m();for(let C=0;C<b(1,3);C++)x();e()<.8&&_();for(let C=0;C<b(1,2);C++)g();this.plot.w>14&&M(),e()<.5&&S();break;case"cinema":case"diner":case"kiosk":case"shop":for(let C=0;C<b(1,2);C++)x();g(),e()<.4&&_();break;case"corrugated":case"garage":for(let C=0;C<b(2,3);C++)y();e()<.6&&S(),g();break;case"factory":if(this.plot.chimney){const C=T(!0);this.chimneyTop=C}for(let C=0;C<2;C++)y();e()<.7&&S(),m();break;case"gable":T(!1),e()<.6&&_();break;case"bunker":this._add(new Ne(ve(1.5,.14,1.5),p),0,0,i+.07),this._add(new Ne(ve(1.1,.1,1.1),d),0,0,i+.18),g();break;case"ruin":for(let C=0;C<b(2,4);C++)N();F(),e()<.4&&N();break;case"collapsed":for(let C=0;C<5;C++)N();F();break}if(this.plot.radar){const[C,P]=[0,0];this._add(new Ne(nn(.25,.35,1.4,8),p),C,P,i+.7);const I=new Hn,w=new Ne(ve(3.6,.14,.5),d);w.castShadow=!0,I.add(w),I.position.set(C,i+1.5,P),this.group.add(I),this.onUpdate(L=>{I.rotation.y+=L*1.3})}if(this.plot.sign){const C=new hh(new bc({map:Jg(this.plot.sign,"#2c3428","#e8d870")}));C.scale.set(4.2,1.4,1),C.position.set(0,this.plot.h+1.3,-this.plot.d/2-1),this.group.add(C)}}_groundDebris(e){if(!this.plot.damage)return;const t=2+this.plot.damage*2;for(let i=0;i<t;i++){const a=e()*4|0,o=.8+e()*1.6,c=a===0?-this.plot.w/2-o:a===1?this.plot.w/2+o:(e()-.5)*this.plot.w,d=a<2?(e()-.5)*this.plot.d:a===2?-this.plot.d/2-o:this.plot.d/2+o,f=new Ne(ve(.7+e()*1.4,.4+e()*.8,.7+e()*1.4),Ge(e()<.5?6972508:5722175));f.rotation.y=e()*3,f.position.set(c,f.geometry.parameters.height/2,d),f.castShadow=!0,f.receiveShadow=!0,this.group.add(f)}}}function ag(s,e){const t=Math.max(0,Math.min(255,(s>>16)+e)),i=Math.max(0,Math.min(255,(s>>8&255)+e)),a=Math.max(0,Math.min(255,(s&255)+e));return t<<16|i<<8|a}class N2 extends ba{constructor(e,t,i){super(e);const a=Po[t.kind]||Po.sedan;this.def=t,this.group.position.set(t.x,0,t.z),this.group.rotation.y=t.ang??0;const o=(t.id.charCodeAt(1)||3)*13+5,c=S2(t.kind,t.color,!!t.burnt,o),d=Ge(t.burnt?2367773:ag(t.color,-26)),f=a.L,p=a.W,x=new Ne(ve(f,.72,p),[d,d,new kt({map:c}),Ge(1842207),d,d]);x.position.y=.6,x.castShadow=!0,x.receiveShadow=!0,this.group.add(x);const g=Ge(1315862);for(const[_,M]of[[-f/2+.7,1],[-f/2+.7,-1],[f/2-.7,1],[f/2-.7,-1]]){const T=new Ne(ve(.62,.5,.3),g);T.position.set(_,.26,M*p*.49),this.group.add(T)}if(!t.burnt&&!a.cargo){const[_,M]=a.cab,T=f*(M-_),S=f*((_+M)/2-.5),y=Ge(ag(t.color,-52)),N=.34,F=.09,b=[[T,N,F,S,(p-.3)/2],[T,N,F,S,-(p-.3)/2],[F,N,p-.3,S+T/2,0],[F,N,p-.3,S-T/2,0]];for(const[C,P,I,w,L]of b){const V=new Ne(ve(C,P,I),y);V.position.set(w,1.12,L),V.castShadow=!0,this.group.add(V)}}if(t.loot){const _=new Hn;_.position.set(f/2-.15,.98,0);const M=new Ne(ve(.95,.07,p-.36),d.clone());M.position.x=-.47,M.castShadow=!0,_.add(M),this.group.add(_),this.trunkLid=_}t.flipped&&(this.group.rotation.z=Math.PI,this.group.position.y=1.05),this.L=f,this.W=p,this.x=t.x,this.z=t.z,this.heading=t.ang??0,this.speed=0,this.vx=0,this.vz=0,this.drivable=!t.burnt&&!t.flipped;const m=Gr((t.id.charCodeAt(1)||7)*101+13);this.fuel=this.drivable?25+m()*70:0,this.maxSpeed=13.5+m()*3,this.tag="veh-"+t.id,i&&i.collision.addRotatedBox(t.x,t.z,f,p,t.ang??0,this.tag)}get fuel01(){return Math.max(0,this.fuel)/100}applyLooted(){this.trunkLid&&(this.trunkLid.rotation.z=1)}detachCollider(e){e.removeByTag(this.tag)}attachCollider(e){e.addRotatedBox(this.x,this.z,this.L,this.W,this.heading,this.tag)}updateZones(){this.driveZone&&(this.driveZone.x=this.x,this.driveZone.z=this.z),this.trunkZone&&(this.trunkZone.x=this.x+Math.cos(this.heading)*this.L*.38,this.trunkZone.z=this.z-Math.sin(this.heading)*this.L*.38)}setPosition(e,t,i){this.x=e,this.z=t,this.heading=i,this.group.position.set(e,this.group.position.y,t),this.group.rotation.y=i,this.updateZones()}}class U2 extends ba{constructor(e,t,i,a=3.2,o=0,c=null){super(e),this.group.position.set(t,0,i);const d=new Ne(ve(.42,1.9,.42),Ge(5915952));d.position.y=.95,d.castShadow=!0,this.group.add(d);const f=[["#3c5a2e","#4d7038"],["#3a5230","#54703c"],["#4a5c2a","#607838"]],[p,x]=f[o%f.length],g=Kf(p,x,3+o*7+(t*100+i|0)%5),m=Qf(g,{alphaTest:.4}),_=new Ne(ve(a,1.05,a),m);_.position.y=2.35,_.castShadow=!0,this.group.add(_);const M=new Ne(ve(a*.62,.85,a*.62),Qf(Kf(x,"#a8c060",11+o),{alphaTest:.4}));M.position.set(a*.1,3.05,-a*.08),M.rotation.y=.5,M.castShadow=!0,this.group.add(M),c&&c.collision.addBox(t,i,.7,.7,"tree")}}class F2 extends ba{constructor(e,t,i,a=1.25,o=null){super(e),this.group.position.set(t,0,i);const c=Kf("#3c5a2e","#54703c",40+(t*13+i*7|0)%6),d=new Ne(ve(a,a*.62,a),Qf(c,{alphaTest:.4}));d.position.y=a*.31,d.castShadow=!0,this.group.add(d)}}class O2 extends ba{constructor(e,t,i,a=2.8,o=null){super(e),this.group.position.set(t,0,i);const c=Ge(5129274),d=new Ne(ve(.3,a,.3),c);d.position.y=a/2,d.castShadow=!0,this.group.add(d);const f=(t*31+i*17|0)%100;for(let p=0;p<3;p++){const x=new Ne(ve(.11,1.3+f%3*.2,.11),c);x.position.y=a*(.55+p*.15),x.rotation.z=(p%2===0?1:-1)*(.7+p*.15),x.rotation.y=p*2.1+f*.1,x.translateY(.5),x.castShadow=!0,this.group.add(x)}o&&o.collision.addBox(t,i,.5,.5,"tree")}}function Oe(s,e,t=0,i=0,a=0,o=!0){const c=new Ne(s,e);return c.position.set(t,i,a),c.castShadow=o,c.receiveShadow=!0,c}function k2(s,e,t,i,a={}){const o=new Hn;o.position.set(t,0,i);const c={group:o,colliders:[],update:null,extras:{}},d=a.rng||Math.random,f=Ge(2895408);Ge(8225416);const p=Ge(8016956),x=Ge(723e4);switch(e){case"crate":o.add(Oe(ve(1.2,1.2,1.2),new kt({map:ma}),0,.6,0)),c.colliders.push([0,0,1.2,1.2]),c.extras.lid=o.children[0];break;case"crateStack":{o.add(Oe(ve(1.2,1.2,1.2),new kt({map:ma}),0,.6,0)),o.add(Oe(ve(1.2,1.2,1.2),new kt({map:ma}),.15,1.8,-.1)),o.add(Oe(ve(1,1,1),new kt({map:ma}),-.7,.5,.8)),c.colliders.push([0,0,2.4,2.2]);break}case"barrel":o.add(Oe(nn(.48,.48,1.05,10),new kt({map:rg}),0,.53,0)),c.colliders.push([0,0,.95,.95]);break;case"barrelTipped":{const g=Oe(nn(.48,.48,1.05,10),new kt({map:rg}),0,.48,0);g.rotation.z=Math.PI/2,g.rotation.y=d()*3,o.add(g),c.colliders.push([0,0,1.3,1]);break}case"trashcan":o.add(Oe(nn(.42,.36,.95,8),Ge(5922904),0,.48,0)),o.add(Oe(nn(.45,.45,.08,8),f,0,.99,0)),c.colliders.push([0,0,.85,.85]);break;case"dumpster":{o.add(Oe(ve(2.5,1.25,1.4),Ge(a.color||4151876),0,.63,0));const g=new Hn;g.position.set(0,1.26,-.68);const m=Oe(ve(2.5,.09,1.42),Ge(a.color?a.color-1052688:3099188),0,0,.7);g.add(m),o.add(g),c.colliders.push([0,0,2.5,1.4]),c.extras.lid=g;break}case"container":{const g=E2(a.color||9065528);o.add(Oe(ve(6,2.6,2.5),new kt({map:g}),0,1.3,0)),o.add(Oe(ve(6.1,.12,2.6),Ge(4869714),0,2.66,0)),c.colliders.push([0,0,6,2.5]);break}case"pallet":o.add(Oe(ve(1.8,.16,1.8),x,0,.08,0,!1)),o.add(Oe(ve(1.5,.9,1.2),new kt({map:ma}),.1,.61,0)),c.colliders.push([0,0,1.8,1.8]);break;case"bench":o.add(Oe(ve(2,.12,.6),x,0,.5,0)),o.add(Oe(ve(.14,.5,.5),f,-.8,.25,0)),o.add(Oe(ve(.14,.5,.5),f,.8,.25,0));break;case"lamp":{o.add(Oe(ve(.18,3.6,.18),f,0,1.8,0)),o.add(Oe(ve(1.1,.12,.12),f,.55,3.55,0)),o.add(Oe(ve(.55,.2,.35),Ge(9277590),1.05,3.48,0)),c.colliders.push([0,0,.4,.4]);break}case"hydrant":o.add(Oe(nn(.22,.26,.7,8),Ge(10500136),0,.35,0)),o.add(Oe(nn(.24,.24,.12,8),Ge(8136732),0,.74,0)),c.colliders.push([0,0,.5,.5]);break;case"mailbox":o.add(Oe(ve(.14,1,.14),f,0,.5,0)),o.add(Oe(ve(.55,.5,.4),Ge(3955338),0,1.15,0)),c.colliders.push([0,0,.5,.45]);break;case"signPost":{o.add(Oe(ve(.12,2.6,.12),Ge(6053461),0,1.3,0));const g=new hh(new bc({map:Jg(a.text||"AVISO",a.bg||"#3a4436",a.fg||"#d8d3c0")}));g.scale.set(3.4,1.13,1),g.position.y=2.6,o.add(g),c.colliders.push([0,0,.35,.35]);break}case"busStop":o.add(Oe(ve(.16,2.6,.16),f,-1.6,1.3,0)),o.add(Oe(ve(.16,2.6,.16),f,1.6,1.3,0)),o.add(Oe(ve(3.6,.14,1.5),Ge(5925466),0,2.6,0)),o.add(Oe(ve(2.6,.1,.55),x,0,.55,-.2)),c.colliders.push([-1.6,0,.3,.3],[1.6,0,.3,.3]);break;case"sandbags":{const g=Ge(9666650);for(let m=0;m<3;m++)o.add(Oe(ve(.95,.32,.55),g,-1+m,.16,0));for(let m=0;m<2;m++)o.add(Oe(ve(.95,.32,.55),g,-.5+m,.48,0));a.vertical&&(o.rotation.y=Math.PI/2),c.colliders.push(a.vertical?[0,0,.7,3]:[0,0,3,.7]);break}case"rubblePile":{const g=[Ge(6972508),Ge(5722175),Ge(5130820)];for(let _=0;_<5;_++){const M=.5+d()*.7,T=Oe(ve(M,M*.6,M),g[_%3],(d()-.5)*1.4,M*.3,(d()-.5)*1.4);T.rotation.y=d()*3,o.add(T)}const m=Oe(ve(.05,1.1,.05),Ge(4864558),.3,.7,0);m.rotation.z=.5,o.add(m),c.colliders.push([0,0,2.2,2.2]),c.extras.pile=o;break}case"rubbleMound":{const g=[Ge(6972508),Ge(5722175),Ge(7696490)];for(let m=0;m<9;m++){const _=.8+d()*1.4,M=Oe(ve(_,_*.5,_),g[m%3],(d()-.5)*3.4,_*.25,(d()-.5)*3.4);M.rotation.y=d()*3,o.add(M)}c.colliders.push([0,0,4.4,4.4]);break}case"fence":{const g=a.len||6;o.add(Oe(ve(g,1.15,.16),Ge(5130816),0,.58,0)),o.add(Oe(ve(g,.1,.2),Ge(3946542),0,1.15,0));for(let _=-g/2;_<=g/2;_+=g/3)o.add(Oe(ve(.2,1.3,.2),f,_,.65,0));const m=!!a.vertical;c.colliders.push(m?[0,0,.3,g]:[0,0,g,.3]);break}case"waterTower":{const g=Ge(4869714);for(let m=0;m<4;m++){const _=Oe(ve(.35,5,.35),g,Math.cos(m*Math.PI/2+.7)*2,2.5,Math.sin(m*Math.PI/2+.7)*2);o.add(_)}o.add(Oe(nn(2.4,2.7,3.4,10),Ge(8018500),0,6.4,0)),o.add(Oe(nn(.3,2.5,1,10),Ge(6046772),0,8.6,0)),o.add(Oe(nn(2.75,2.75,.2,10),g,0,4.8,0)),c.colliders.push([0,0,3.4,3.4]);break}case"generator":o.add(Oe(ve(1.6,1,1),Ge(6054472),0,.5,0)),o.add(Oe(ve(.5,.5,.5),f,.9,.55,0)),o.add(Oe(nn(.06,.06,1.2,6),f,-.5,1.5,0)),c.colliders.push([0,0,1.7,1.1]);break;case"tireStack":{const g=Ge(1973792);for(let m=0;m<3;m++)o.add(Oe(nn(.62-m*.04,.62-m*.04,.34,10),g,(d()-.5)*.15,.17+m*.34,(d()-.5)*.15));c.colliders.push([0,0,1.3,1.3]);break}case"campfire":{const g=Ge(6053464);for(let S=0;S<7;S++){const y=S/7*Math.PI*2;o.add(Oe(ve(.34,.22,.3),g,Math.cos(y)*.75,.11,Math.sin(y)*.75,!1))}o.add(Oe(ve(1,.16,.22),x,0,.12,0,!1)).children;const m=Oe(ve(1,.16,.22),x,0,.2,0,!1);m.rotation.y=1.2,o.add(m);const _=new Ne(Eo(.85,.85),new Xr({color:16748592,transparent:!0,opacity:.95}));_.rotation.x=-Math.PI/2,_.position.y=.34,o.add(_);const M=new Ne(Eo(.5,.5),new Xr({color:16765008,transparent:!0,opacity:.95}));M.rotation.x=-Math.PI/2,M.rotation.z=.7,M.position.y=.38,o.add(M);const T=new a1(16747578,1.4,9,1.6);T.position.y=.9,o.add(T),c.update=(S,y)=>{const N=.8+Math.sin(y*11)*.12+Math.sin(y*23+1)*.08;_.scale.set(N,N*.9,1),M.scale.set(1.1-N*.3,1.1-N*.3,1),M.rotation.z+=S*1.4,T.intensity=1.1+Math.sin(y*13)*.35+Math.sin(y*29)*.2},c.extras.flame=_;break}case"bedroll":{const g=new Ne(Eo(2.1,1.35),new kt({map:A2}));g.rotation.x=-Math.PI/2,g.position.y=.04,g.receiveShadow=!0,o.add(g),o.add(Oe(ve(.5,.16,.9),Ge(9080688),-.7,.1,0,!1));break}case"flagpole":{o.add(Oe(nn(.06,.08,5.6,6),Ge(10132640),0,2.8,0));const g=new Ne(Eo(1.7,1.15),new kt({map:w2,side:Gi}));g.rotation.x=-Math.PI/2,g.position.set(.95,5.25,0),o.add(g),c.update=(m,_)=>{g.rotation.z=Math.sin(_*2.6)*.22,g.scale.x=1+Math.sin(_*5.2)*.06},c.colliders.push([0,0,.35,.35]);break}case"fridge":{o.add(Oe(ve(.95,1.7,.85),Ge(12106420),0,.85,0)),o.add(Oe(ve(.97,.06,.87),Ge(9079942),0,1.1,0)),o.add(Oe(ve(.08,.4,.08),f,-.52,1.4,0)),o.add(Oe(ve(.08,.3,.08),f,-.52,.6,0)),o.add(Oe(ve(.9,.05,.8),p,.1,1.72,0)),c.colliders.push([0,0,.95,.85]),c.extras.lid=o.children[4];break}case"cabinet":{o.add(Oe(ve(1,1.5,.55),Ge(11053730),0,.75,0)),o.add(Oe(ve(1.02,1.52,.06),Ge(9408906),0,.75,.28)),o.add(Oe(ve(.34,.34,.05),Ge(12729134),0,1.05,.32,!1)),o.add(Oe(ve(.1,.3,.1),Ge(12729134),0,1.05,.33,!1)),o.add(Oe(ve(.3,.1,.1),Ge(12729134),0,1.05,.33,!1)),o.add(Oe(ve(.08,.26,.06),f,.36,.75,.32,!1)),c.colliders.push([0,0,1,.6]);break}case"locker":{o.add(Oe(ve(.85,1.9,.6),Ge(6054472),0,.95,0)),o.add(Oe(ve(.87,.06,.62),Ge(4870200),0,1.25,0)),o.add(Oe(ve(.5,.3,.05),f,0,1.6,.3,!1)),o.add(Oe(ve(.07,.3,.06),Ge(9080688),.28,.85,.3,!1)),c.colliders.push([0,0,.85,.6]);break}case"radio":o.add(Oe(ve(1,.8,.7),new kt({map:ma}),0,.4,0)),o.add(Oe(ve(.6,.42,.42),Ge(3949624),0,1.02,0)),o.add(Oe(nn(.03,.03,1,4),f,.22,1.6,0)),o.add(Oe(ve(.14,.14,.05),Jf(6340704),-.15,1.1,.22,!1)),c.colliders.push([0,0,1,.7]);break;case"jerrycan":{const g=Ge(12729134),m=Ge(9249816);o.add(Oe(ve(.52,.3,.78),g,0,.26,0)),o.add(Oe(ve(.54,.08,.8),m,0,.13,0));const _=Oe(nn(.09,.09,.14,8),Ge(14201904),.14,.44,-.24);o.add(_);const M=Oe(ve(.1,.1,.3),m,-.12,.42,.18);o.add(M);const T=new Ne(Eo(1.5,1.5),new Xr({color:14700608,transparent:!0,opacity:.16,depthWrite:!1}));T.rotation.x=-Math.PI/2,T.position.y=.05,o.add(T),c.update=(S,y)=>{o.position.y=Math.sin(y*2.4)*.03,T.material.opacity=.1+Math.sin(y*3.1)*.06};break}}return s.add(o),c}const xa={comida:{id:"comida",nome:"COMIDA",tipo:"consumivel",desc:"Rações enlatadas e mantimentos. Restaura 25 de vida.",acao:"Usar: +25 vida",cura:25,cor:"#d0683c"},medicamento:{id:"medicamento",nome:"MEDICAMENTOS",tipo:"consumivel",desc:"Ataduras, analgésicos e antibióticos. Restaura 50 de vida.",acao:"Usar: +50 vida",cura:50,cor:"#5fae6b"},gasolina:{id:"gasolina",nome:"GALÃO DE GASOLINA",tipo:"combustivel",desc:"Galão vermelho com combustível. Abastece veículos pela metade do tanque.",acao:"Use perto de um carro para abastecer (+50)",cura:0,cor:"#c23b2e"},municao:{id:"municao",nome:"MUNIÇÃO",tipo:"recurso",desc:"Caixas de munição calibre variado. Essencial quando as armas entrarem em ação.",acao:"Recurso de combate (futuro)",cura:0,cor:"#d8b430"},material:{id:"material",nome:"MATERIAIS",tipo:"recurso",desc:"Sucata, madeira e peças. Usado para construir e reparar a base.",acao:"Recurso de construção",cura:0,cor:"#9aa3ad"},pistola:{id:"pistola",nome:"PISTOLA",tipo:"arma",desc:"Semiautomática 9mm gasta, mas funcional. Leve e discreta.",acao:"Clique para equipar",cura:0,cor:"#8d9096",dano:12},escopeta:{id:"escopeta",nome:"ESCOPETA",tipo:"arma",desc:"Calibre 12 de cano serrado. Devastadora de perto, inútil de longe.",acao:"Clique para equipar",cura:0,cor:"#a06838",dano:34},rifle:{id:"rifle",nome:"RIFLE",tipo:"arma",desc:"Fuzil de ferrolho com luneta trincada. Alcance é tudo.",acao:"Clique para equipar",cura:0,cor:"#6a7076",dano:26}},jf=["comida","medicamento","gasolina","municao","material","pistola","escopeta","rifle"],z2={crate:[["material",42,2,4],["comida",26,1,2],["gasolina",12,1,1],["municao",12,2,5],["pistola",6,1,1],["medicamento",2,1,1]],fridge:[["comida",62,2,4],["medicamento",14,1,2],["material",14,1,2],["gasolina",10,1,1]],cabinet:[["medicamento",58,1,3],["comida",20,1,1],["municao",12,1,4],["material",10,1,1]],carTrunk:[["comida",24,1,2],["material",24,1,3],["gasolina",18,1,1],["municao",14,2,6],["pistola",8,1,1],["escopeta",5,1,1],["medicamento",7,1,1]],rubble:[["material",62,2,5],["comida",16,1,2],["gasolina",12,1,1],["municao",10,1,3]],dumpster:[["comida",42,1,3],["material",30,1,2],["gasolina",12,1,1],["medicamento",16,1,1]],locker:[["material",36,1,3],["municao",22,2,6],["pistola",10,1,1],["escopeta",7,1,1],["rifle",5,1,1],["medicamento",20,1,2]],barrel:[["material",42,1,2],["gasolina",30,1,1],["comida",16,1,1],["municao",12,1,3]],safe:[["municao",30,4,10],["pistola",20,1,1],["rifle",14,1,1],["escopeta",14,1,1],["medicamento",12,2,3],["comida",10,2,3]],shelf:[["comida",52,1,3],["material",24,1,2],["gasolina",12,1,1],["municao",12,1,4]]},og=new Set(["crate","crateStack","fridge","dumpster","barrel","barrelTipped","locker","cabinet","trashcan","rubblePile"]),lg=['...estática... "sobreviventes... dirijam-se ao setor oeste"...estática...','"...não confiem nos comboios da madrugada..." — a transmissão corta.',"...um loop gravado repete coordenadas que você não reconhece...",'"...a zona leste está perdida. repito: a zona leste está perdida..."',"...apenas ruído branco. Mas alguém, em algum lugar, ainda transmite.",'"...base Águia responde? base Águia responde?" — silêncio.','"...se acharem um galão de gasolina, me chamem. o gerador está por um fio..."'],cg=['Um bilhete rasgado: "Fui buscar água. Não me espere acordada."','Pichação na parede: "O NORTE É SEGURO" — alguém discordou por baixo.',"Um desenho infantil de uma casa com sol. O papel está úmido.","Aviso oficial carimbado: TOQUE DE RECOLHER ÀS 20H. Ninguém obedece mais.","Marcas de contagem na parede. São muitas. Param de repente.","Um panfleto de recrutamento desbotado pela chuva. O rosto sorrindo incomoda."];class B2{constructor(e,t){this.scene=e,this.game=t,this.entities=[],this.animated=[],this.spawn=_2,this.propGroups=new Map,this.respawnSpots=[],this._respawnSeq=0,this.map=new x2,this.size=this.map.size,this.collision=t.collision,this.particles=new b2(e),this._plotRects=Zd.map(i=>({x0:i.x-1.2,z0:i.z-1.2,x1:i.x+i.w+1.2,z1:i.z+i.d+1.2})),this._lights(),this._ground(),this._buildings(),this._vehicles(),this._base(),this._districtProps(),this._scatter(),this._streetLamps(),this._clouds(),this._collectSpots(),this._jerrycans()}_lights(){const e=new r1(9806510,3946026,.85);this.scene.add(e),this.sun=new C0(16767392,1.55),this.sun.position.set(66,58,72),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);const t=this.sun.shadow.camera;t.left=-46,t.right=46,t.top=46,t.bottom=-46,t.near=5,t.far=160,this.sun.shadow.bias=-9e-4,this.sun.shadow.normalBias=.03,this.scene.add(this.sun),this.scene.add(this.sun.target);const i=new C0(6978192,.28);i.position.set(-30,40,-20),this.scene.add(i)}_ground(){const e=this.map.paintCanvas(),t=new mh(e);t.magFilter=ln,t.minFilter=ln,t.generateMipmaps=!1,t.colorSpace=Nn;const i=new Ne(new qr(this.size,this.size),new kt({map:t,dithering:!0}));i.rotation.x=-Math.PI/2,i.position.set(this.size/2,0,this.size/2),i.receiveShadow=!0,this.scene.add(i);const a=this.size;this.collision.addRect(-20,-20,a+20,.6,"bound"),this.collision.addRect(-20,a-.6,a+20,a+20,"bound"),this.collision.addRect(-20,0,.6,a,"bound"),this.collision.addRect(a-.6,0,a+20,a,"bound")}_buildings(){for(const e of Zd){const t=new D2(this.scene,e,this.game);if(this.entities.push(t),e.roof==="factory"&&t.chimneyTop){const i=e.x+e.w/2,a=e.z+e.d/2;this.particles.smoke(i+t.chimneyTop.x,t.chimneyTop.y,a+t.chimneyTop.z,{rate:2.6,color:8684668,size:1.3})}}}_vehicles(){for(const e of v2){const t=new N2(this.scene,e,this.game);this.entities.push(t),e.ang,Po[e.kind]||Po.sedan,e.loot?t.trunkZone=this.game.interaction.register({id:"car-"+e.id,x:e.x,z:e.z,r:1.8,label:"ABRIR PORTA-MALAS",kind:"loot",table:e.loot,host:t}):e.burnt&&this.game.interaction.register({id:"car-"+e.id,x:e.x,z:e.z,r:2,label:"EXAMINAR CARCAÇA",kind:"examine",host:t,text:["O calor derreteu o volante. Não sobrou nada útil.","Marcas de bala na lataria. Alguém não chegou a tempo de sair.","O tanque está vazio. Ou alguém já levou o que restava."]}),t.drivable&&(t.driveZone=this.game.interaction.register({id:"drive-"+e.id,x:e.x,z:e.z,r:2.2,kind:"vehicle",host:t,getLabel:i=>t.fuel<99.5&&i.inventory.has("gasolina")?`ABASTECER CARRO — 1 GALÃO (${Math.round(t.fuel)}%)`:`ENTRAR NO CARRO (${Math.round(t.fuel)}%)`,onUse:i=>i.drivingSystem.tryUse(t)})),t.updateZones()}}_addProp(e,t,i,a={}){const o=k2(this.scene,e,t,i,{rng:Gr((t*97+i*31|0)+e.length),...a}),c=a.tag||"prop";for(const[d,f,p,x]of o.colliders)this.collision.addBox(t+d,i+f,p,x,c);return a.tag&&this.propGroups.set(a.tag,o.group),o.update&&this.animated.push(o),o}placeLootContainer(e,t,i,a,o,c){const d=this._addProp(t,o,c,{tag:e});return this.game.interaction.register({id:e,x:o,z:c,r:1.7,label:a,kind:"loot",table:i,host:this._hostFor(t,d),respawn:og.has(t),propType:t}),d}containerLooted(e){this.removePropById(e.id),this.particles.burst(e.x,.8,e.z,10131082,10);const t=this._pickRespawnSpot();if(!t)return;const i=`${e.propType}-r${++this._respawnSeq}`;this.placeLootContainer(i,e.propType,e.table,e.label,t.x,t.z),this.particles.burst(t.x,.8,t.z,14201904,8),this.game.ui.toast("Alguém deixou suprimentos em outro canto da cidade...","info",3600),this.game.onContainerRespawned(e.id,{id:i,type:e.propType,table:e.table,label:e.label,x:t.x,z:t.z})}removePropById(e){const t=this.propGroups.get(e);t&&t.removeFromParent(),this.propGroups.delete(e),this.collision.removeByTag(e)}restoreRespawns(e){for(const t of e||[]){this.placeLootContainer(t.id,t.type,t.table,t.label,t.x,t.z);const i=parseInt((t.id.match(/-r(\d+)$/)||[])[1]||"0",10);this._respawnSeq=Math.max(this._respawnSeq,i)}}_pickRespawnSpot(){if(!this.respawnSpots.length)return null;const e=this.game.player;for(let t=0;t<50;t++){const i=this.respawnSpots[Math.random()*this.respawnSpots.length|0];if(!(Math.hypot(i.x-e.x,i.z-e.z)<14))return i}return this.respawnSpots[Math.random()*this.respawnSpots.length|0]}_collectSpots(){const e=Gr(777),t=[Le.GRASS,Le.DIRT,Le.RUBBLE,Le.CONCRETE];let i=0;for(;this.respawnSpots.length<130&&i<3e3;){i++;const a=4+e()*(this.size-8),o=4+e()*(this.size-8);if(!t.includes(this.map.cellAt(a,o)))continue;let c=!0;for(const d of this._plotRects)if(a>d.x0&&a<d.x1&&o>d.z0&&o<d.z1){c=!1;break}c&&this.respawnSpots.push({x:a,z:o})}}_jerrycans(){[[58.5,114.5],[166.5,52.5],[100.5,10.5],[133.5,86.5],[147.5,140.5],[120.5,170.5],[30.5,100.5],[94.5,178.5]].forEach(([t,i],a)=>{this._addProp("jerrycan",t,i,{tag:"gas-"+a}),this.game.interaction.register({id:"gas-"+a,x:t,z:i,r:1.5,label:"PEGAR GALÃO DE GASOLINA",kind:"pickup",item:"gasolina",qty:1})})}_hostFor(e,t){const i=()=>{t.group.rotation.z=.32,t.group.rotation.x=.18,t.group.position.y=-.12};switch(e){case"dumpster":return{applyLooted:()=>{t.extras.lid&&(t.extras.lid.rotation.x=-1.25)}};case"fridge":return{applyLooted:()=>{t.extras.lid&&(t.extras.lid.rotation.x=-.9),t.group.rotation.y+=.25}};case"rubblePile":return{applyLooted:()=>{t.group.scale.set(1.15,.32,1.15)}};default:return{applyLooted:i}}}_loot(e,t,i,a,o,c,d={}){const f=this._addProp(t,o,c,{...d,tag:e});return this.game.interaction.register({id:e,x:o,z:c,r:1.7,label:a,kind:"loot",table:i,host:this._hostFor(t,f),respawn:og.has(t),propType:t}),f}_examine(e,t,i,a,o,c={}){const d=this._addProp(t,a,o,c);return this.game.interaction.register({id:e,x:a,z:o,r:1.8,label:c.verb||"EXAMINAR",kind:"examine",text:i}),d}_base(){const e=(t,i,a,o=!1)=>this._addProp("fence",i,a,{len:t,vertical:o});e(25,.7,178.5,!0),e(6,15.3,169,!0),e(13,15.3,184.5,!0),e(14.6,8,166.1),e(14.6,8,190.9),this._addProp("campfire",8,171),this.particles.smoke(8,.6,171,{rate:1.6,color:10132112,size:.7}),this.game.interaction.register({id:"base-campfire",x:8,z:171,r:1.7,label:"EXAMINAR FOGUEIRA",kind:"examine",text:"As brasas ainda estalam. Alguém esteve aqui há pouco tempo."}),this._addProp("bedroll",12.3,181.5),this.game.interaction.register({id:"base-bed",x:12.3,z:181.5,r:1.7,label:"DORMIR — RECUPERAR E SALVAR",kind:"use",onUse:()=>this.game.restAtBase()}),this._addProp("radio",12.6,177.1),this.game.interaction.register({id:"base-radio",x:12.6,z:177.1,r:1.6,label:"LIGAR RÁDIO",kind:"use",onUse:()=>{this.game.audio.radio(),this.game.ui.toast(lg[Math.floor(Math.random()*lg.length)],"info",4600)}}),this._addProp("flagpole",4.5,187),this._addProp("sandbags",14.4,171.2,{vertical:!0}),this._addProp("sandbags",14.4,178.6,{vertical:!0}),this._addProp("generator",5.6,186.4),this._loot("base-crate1","crate","crate","VASCULHAR CAIXA",5.6,169.4),this._loot("base-crate2","crate","crate","VASCULHAR CAIXA",6.9,170),this._addProp("barrel",13.4,168.8),this._addProp("crateStack",3.4,170.6),this._examine("sign-base","signPost","O portão range, mas as sandbags dizem: este lugar ainda é defendido.",21.5,175,{text:"BASE ÁGUIA",bg:"#3a4430",fg:"#e8d870",verb:"LER PLACA"})}_districtProps(){const e=Object.fromEntries(Zd.map(a=>[a.id,a])),t=(a,o="e")=>o==="e"?[a.x+a.w+1.5,a.z+a.d/2]:[a.x-1.5,a.z+a.d/2];["H1","H3","H5","H9","H12","H15","H17","H19"].forEach((a,o)=>{const[c,d]=t(e[a]);this._loot(`fridge-${a}`,"fridge","fridge","ABRIR GELADEIRA",c,d),o%2===0&&this._loot(`crate-${a}`,"crate","crate","VASCULHAR CAIXA",c+.3,d+2)}),["H2","H4","H10","H13","H16","H20"].forEach((a,o)=>{const[c,d]=t(e[a],o%2?"w":"e");this._loot(`crate2-${a}`,"crate",o%3===0?"shelf":"crate","VASCULHAR CAIXA",c,d)}),this._loot("dump-h7","dumpster","dumpster","REVIRAR CAÇAMBA",e.H7.x-1.8,e.H7.z+1.4),this._examine("mail-1","mailbox",cg,18.6,8.5,{verb:"ABRIR CAIXA DE CORREIO"}),this._examine("mail-2","mailbox",cg,42.5,122.5,{verb:"ABRIR CAIXA DE CORREIO"}),this._loot("dump-c1a","dumpster","dumpster","REVIRAR CAÇAMBA",e.C1.x+e.C1.w/2,e.C1.z-1.6),this._loot("dump-c1b","dumpster","dumpster","REVIRAR CAÇAMBA",e.C1.x+e.C1.w/2+2.9,e.C1.z-1.6),this._loot("cab-c2a","cabinet","cabinet","ABRIR ARMÁRIO",e.C2.x+e.C2.w+1.3,e.C2.z+1.4),this._loot("cab-c2b","cabinet","cabinet","ABRIR ARMÁRIO",e.C2.x+e.C2.w+1.3,e.C2.z+3.2),this._loot("fridge-c3","fridge","fridge","ABRIR GELADEIRA",e.C3.x+e.C3.w+1.4,e.C3.z+2),this._loot("trash-c3","trashcan","dumpster","REVIRAR LIXEIRA",e.C3.x-1.2,e.C3.z+1),this._loot("stack-c4a","crateStack","shelf","VASCULHAR ESTOQUE",e.C4.x+e.C4.w/2,e.C4.z+e.C4.d+1.6),this._loot("stack-c4b","crateStack","crate","VASCULHAR ESTOQUE",e.C4.x+e.C4.w/2+2.6,e.C4.z+e.C4.d+1.6),this._loot("trash-c5","trashcan","dumpster","REVIRAR LIXEIRA",e.C5.x-1.2,e.C5.z+2),this._addProp("container",100.5,116.5,{color:9065528}).group.rotation.y=.05,this._examine("sign-park","signPost","Trinta minutos. O parquímetro está crivado de bala; ninguém cronometra mais nada.",57,117.5,{text:"ESTACIONAMENTO 30 MIN",verb:"LER PLACA"}),this._loot("safe-t2","locker","safe","ABRIR COFRE",e.T2.x+e.T2.w+1.4,e.T2.z+e.T2.d/2),this._loot("trash-t1","trashcan","dumpster","REVIRAR LIXEIRA",e.T1.x-1.2,e.T1.z+e.T1.d/2),this._loot("crate-t5","crate","shelf","VASCULHAR CAIXA",e.T5.x+e.T5.w+1.2,e.T5.z+1),this._addProp("busStop",57,29.6),this._examine("sign-center","signPost","O letreiro do banco ainda acende à noite. Por quê, ninguém sabe.",66.5,29.5,{text:"AV. CENTRAL",verb:"LER PLACA"}),this._loot("stack-i1a","crateStack","crate","VASCULHAR ESTOQUE",e.I1.x-1.6,e.I1.z+2),this._loot("stack-i1b","crateStack","crate","VASCULHAR ESTOQUE",e.I1.x-1.6,e.I1.z+4.4),this._loot("lock-i1","locker","locker","ABRIR ARMÁRIO",e.I1.x-1.5,e.I1.z+e.I1.d-1),this._loot("bar-i2a","barrel","barrel","VASCULHAR BARRIL",e.I2.x-1.5,e.I2.z+1),this._loot("bar-i2b","barrel","barrel","VASCULHAR BARRIL",e.I2.x-1.5,e.I2.z+2.6),this._loot("lock-i5a","locker","locker","ABRIR ARMÁRIO",e.I5.x+e.I5.w+1.3,e.I5.z+1),this._loot("lock-i5b","locker","locker","ABRIR ARMÁRIO",e.I5.x+e.I5.w+1.3,e.I5.z+2.8),this._loot("crate-i5","crate","crate","VASCULHAR CAIXA",e.I5.x-1.4,e.I5.z+1.4),this._addProp("container",170.5,40.5,{color:4151876}).group.rotation.y=.04,this._addProp("container",170.5,47.5,{color:6965818}).group.rotation.y=-.03,this._addProp("container",178,44,{color:4872810}).group.rotation.y=1.57,this._addProp("waterTower",176.5,51.5),this._addProp("tireStack",169.5,52),this._addProp("barrelTipped",173.5,53.5),this._addProp("pallet",166.8,44),this._addProp("generator",165.5,52.5),this._loot("bar-yard","barrel","barrel","VASCULHAR BARRIL",173,38.5),["A1","A2","A3","A5","A6","A7","A9"].forEach((a,o)=>{const c=e[a],d=c.x>142?c.x+c.w+1.6:c.x-1.7;this._loot(`pile-${a}`,"rubblePile","rubble","VASCULHAR ENTULHO",d,c.z+c.d*.5+o%2*1.5)}),this._loot("cab-a2a","cabinet","cabinet","ABRIR ARMÁRIO",e.A2.x+e.A2.w+1.4,e.A2.z+1.2),this._loot("cab-a2b","cabinet","cabinet","ABRIR ARMÁRIO",e.A2.x+e.A2.w+1.4,e.A2.z+3),this._loot("fridge-a5","fridge","fridge","ABRIR GELADEIRA",e.A5.x+e.A5.w+1.5,e.A5.z+2),this._loot("crate-a7","crate","crate","VASCULHAR CAIXA",e.A7.x+e.A7.w+1.5,e.A7.z+1.5),this._loot("lock-a6","locker","locker","ABRIR ARMÁRIO",e.A6.x-1.4,e.A6.z+2),this._loot("dump-a9","dumpster","dumpster","REVIRAR CAÇAMBA",e.A9.x+e.A9.w+1.6,e.A9.z+1.5,{color:4867128}),this._addProp("rubbleMound",134,94),this._addProp("rubbleMound",150,122),this._addProp("rubbleMound",122,140),this._examine("sign-east","signPost","A tinta vermelha escorreu com a chuva. O aviso continua valendo.",105.5,137.5,{text:"ZONA LESTE — PERIGO",bg:"#4a2018",fg:"#e0b0a0",verb:"LER AVISO"})}_scatter(){const e=Gr(4242),t=(_,M,T=1.6)=>{for(const y of this._plotRects)if(_>y.x0-T&&_<y.x1+T&&M>y.z0-T&&M<y.z1+T)return!1;const S=this.map.cellAt(_,M);return S!==Le.ROAD&&S!==Le.AVENUE&&S!==Le.SIDEWALK&&S!==Le.CAMP},i=(_,M,T,S)=>{let y=0,N=0;for(;y<T&&N<T*40;){N++;const[F,b,C,P]=_,I=(F+e()*(C-F))*gn+2,w=(b+e()*(P-b))*gn+2;!S.includes(this.map.cellAt(I,w))||!t(I,w)||(M==="tree"?new U2(this.scene,I,w,2.6+e()*1.7,e()*3|0,this.game):M==="bush"?new F2(this.scene,I,w,1+e()*.7,this.game):M==="dead"?new O2(this.scene,I,w,2.4+e()*1.4,this.game):M==="mound"&&this._addProp("rubbleMound",I,w),y++)}};i([0,0,12,14],"tree",16,[Le.GRASS]),i([0,17,12,30],"tree",12,[Le.GRASS]),i([5,33,26,47],"tree",9,[Le.GRASS]),i([0,0,12,30],"bush",14,[Le.GRASS]),i([5,33,26,47],"bush",6,[Le.GRASS]),i([29,17,47,47],"dead",11,[Le.RUBBLE,Le.DIRT]),i([29,17,47,47],"mound",6,[Le.RUBBLE]);const a=new qr(.6,.6);a.rotateX(-Math.PI/2);const o=new kt({map:M2,alphaTest:.4}),c=new Vd(a,o,420),d=new hn;let f=0;for(;f<420;){const _=e()*this.size,M=e()*this.size;if(this.map.cellAt(_,M)!==Le.GRASS)continue;d.position.set(_,.06,M),d.rotation.y=e()*Math.PI,d.scale.setScalar(.7+e()*.8),d.updateMatrix(),c.setMatrixAt(f,d.matrix);const T=.75+e()*.3;c.setColorAt(f,new vt(T,T,T)),f++}c.instanceColor.needsUpdate=!0,this.scene.add(c);const p=ve(.34,.2,.34),x=Ge(16777215),g=new Vd(p,x,300);let m=0;for(;m<300;){const _=e()*this.size,M=e()*this.size,T=this.map.cellAt(_,M);T!==Le.RUBBLE&&T!==Le.DIRT||(d.position.set(_,.1,M),d.rotation.y=e()*Math.PI,d.scale.setScalar(.6+e()*1.1),d.updateMatrix(),g.setMatrixAt(m,d.matrix),g.setColorAt(m,new vt().setHSL(.08+e()*.05,.12,.28+e()*.2)),m++)}g.instanceColor.needsUpdate=!0,g.castShadow=!0,this.scene.add(g)}_streetLamps(){const e=[],t=(m,_,M=0,T=0)=>{m<1||_<1||m>=47||_>=47||this.map.grid[_*48+m]===Le.SIDEWALK&&e.push([m*gn+2+M,_*gn+2+T])};for(let m=2;m<47;m+=4)t(10,m,-.8),t(13,m,.8),t(26,m,-.8),t(29,m,.8);for(let m=2;m<47;m+=5)t(m,14,0,-.8),t(m,17,0,.8),t(m,30,0,-.8),t(m,33,0,.8);const i=Ge(2895408),a=Ge(9277590),o=ve(.18,3.6,.18),c=ve(1.1,.12,.12),d=ve(.55,.2,.35),f=new hn,p=(m,_,M)=>{const T=new Vd(m,_,e.length);return e.forEach((S,y)=>{M(f,S),f.updateMatrix(),T.setMatrixAt(y,f.matrix)}),T.castShadow=!0,this.scene.add(T),T};p(o,i,(m,[_,M])=>m.position.set(_,1.8,M)),p(c,i,(m,[_,M])=>m.position.set(_+.55,3.55,M)),p(d,a,(m,[_,M])=>m.position.set(_+1.05,3.48,M));const x=Gr(99);let g=0;for(let m=0;m<160&&g<9;m++){const _=x()*this.size,M=x()*this.size;this.map.cellAt(_,M)===Le.SIDEWALK&&(this._addProp(x()<.5?"hydrant":"trashcan",_,M),g++)}}_clouds(){this.clouds=[];for(let e=0;e<3;e++){const t=new Xr({map:Zf,color:1053722,transparent:!0,opacity:.13-e*.02,depthWrite:!1}),i=new Ne(new qr(46+e*14,34+e*10),t);i.rotation.x=-Math.PI/2,i.position.set((e*70+30)%this.size,62,(e*55+40)%this.size),this.scene.add(i),this.clouds.push(i)}}update(e,t){for(const a of this.entities)a.update(e,t);for(const a of this.animated)a.update(e,t);for(const a of this.clouds)a.position.x+=e*1.1,a.position.x>this.size+40&&(a.position.x=-40);this.particles.update(e);const i=this.game.player;i&&(this.sun.position.set(i.x-26,52,i.z-18),this.sun.target.position.set(i.x,0,i.z))}districtAt(e,t){return this.map.districtAt(e,t)}}class V2 extends ba{constructor(e){super(e),this.heading=0,this.walkCycle=0,this.moving=!1,this.hp=100,this.radius=.55,this.vx=0,this.vz=0,this._build()}_build(){const e=this.group,t=new Ne(new gh(.5,12),new Xr({color:0,transparent:!0,opacity:.32,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.y=.03,e.add(t),this.rig=new Hn,e.add(this.rig);const i=new kt({color:13148282}),a=new kt({color:6054472}),o=new kt({color:4870200}),c=new kt({color:3356220}),d=new kt({color:2760728}),f=new kt({color:2367258}),p=new kt({color:8016956});this.legL=new Ne(ve(.18,.4,.2),c),this.legL.position.set(.13,.32,0),this.legR=new Ne(ve(.18,.4,.2),c),this.legR.position.set(-.13,.32,0);const x=new Ne(ve(.2,.12,.26),f);x.position.set(0,-.16,.04),this.legL.add(x);const g=x.clone();this.legR.add(g),this.rig.add(this.legL,this.legR),this.torso=new Ne(ve(.6,.46,.4),a),this.torso.position.y=.75,this.torso.castShadow=!0,this.rig.add(this.torso);const m=new Ne(ve(.62,.08,.42),o);m.position.y=.62,this.rig.add(m),this.armL=new Ne(ve(.14,.42,.16),a),this.armL.position.set(.38,.78,0),this.armR=this.armL.clone(),this.armR.position.x=-.38;const _=new Ne(ve(.13,.1,.14),i);_.position.y=-.24,this.armL.add(_),this.armR.add(_.clone()),this.armL.castShadow=!0,this.armR.castShadow=!0,this.rig.add(this.armL,this.armR);const M=new Ne(ve(.42,.36,.24),p);M.position.set(0,.78,-.3),M.castShadow=!0,this.rig.add(M);const T=new Ne(ve(.36,.1,.2),new kt({color:6176812}));T.position.set(0,.98,-.3),this.rig.add(T);const S=new Ne(ve(.34,.12,.12),new kt({color:9080688}));S.position.set(0,.58,-.3),this.rig.add(S);const y=new Ne(ve(.34,.24,.34),i);y.position.y=1.14,y.castShadow=!0,this.rig.add(y);const N=new Ne(ve(.38,.12,.38),d);N.position.y=1.28,this.rig.add(N);const F=new Ne(ve(.38,.08,.1),d);F.position.set(0,1.2,.16),this.rig.add(F),this.weapons={};const b=new kt({color:2500652}),C=new kt({color:7227948}),P=new Hn,I=new Ne(ve(.1,.1,.34),b);I.position.set(0,.05,.1);const w=new Ne(ve(.09,.2,.12),b);w.position.set(0,-.1,-.02),P.add(I,w);const L=new Hn,V=new Ne(ve(.09,.09,.85),b);V.position.set(0,.04,.18);const z=new Ne(ve(.1,.12,.4),C);z.position.set(0,-.01,-.22),L.add(V,z);const q=new Hn,oe=new Ne(ve(.08,.08,1),b);oe.position.set(0,.04,.24);const fe=new Ne(ve(.1,.14,.42),C);fe.position.set(0,-.02,-.18);const Z=new Ne(ve(.08,.18,.1),b);Z.position.set(0,-.14,.02),q.add(oe,fe,Z);for(const[ue,$]of Object.entries({pistola:P,escopeta:L,rifle:q}))$.visible=!1,$.position.set(0,-.18,.1),this.armR.add($),this.weapons[ue]=$;this.equipped=null}setWeapon(e){for(const[t,i]of Object.entries(this.weapons))i.visible=t===e;this.equipped=e||null}setMove(e,t,i){if(this.vx=e,this.vz=t,this.moving=i,i){const a=Math.atan2(e,t);this.heading=l2(this.heading,a,.25)}}update(e,t){if(this.rig.rotation.y=this.heading,this.moving){this.walkCycle+=e*11;const i=Math.sin(this.walkCycle);this.legL.rotation.x=i*.75,this.legR.rotation.x=-i*.75,this.armL.rotation.x=-i*.55,this.armR.rotation.x=i*.55,this.rig.position.y=Math.abs(Math.sin(this.walkCycle))*.05}else this.legL.rotation.x*=.8,this.legR.rotation.x*=.8,this.armL.rotation.x*=.8,this.armR.rotation.x*=.8,this.rig.position.y=0,this.torso.scale.setScalar(1+Math.sin(t*2.2)*.015);super.update(e,t)}}class H2{constructor(e){this.game=e,this.speed=4.6,this._stepAcc=0}update(e){const t=this.game,i=t.input.moveVector(),a=t.player,o=t.world.map.cellAt(a.x,a.z);let c=this.speed;o===Le.RUBBLE||o===Le.DIRT?c*=.74:o===Le.GRASS&&(c*=.92);const d=i.x*c*e,f=i.z*c*e,p={x:a.x,z:a.z},x=t.collision.move(a.x,a.z,d,f,a.radius);a.group.position.x=Li(x.x,1.2,t.world.size-1.2),a.group.position.z=Li(x.z,1.2,t.world.size-1.2),a.setMove(i.x*c,i.z*c,i.moving);const g=Math.hypot(a.x-p.x,a.z-p.z);i.moving&&g>0&&(this._stepAcc+=g,this._stepAcc>1.25&&(this._stepAcc=0,t.audio.step(t.world.map.surfaceAt(a.x,a.z)),(o===Le.DIRT||o===Le.RUBBLE)&&t.particles.dust(a.x,.2,a.z)))}}class G2{constructor(e){this.game=e,this.zones=new Map,this.current=null,this.enabled=!0,this._respawnSeq=0}register(e){return this.zones.set(e.id,{looted:!1,...e}),this.zones.get(e.id)}get(e){return this.zones.get(e)}unregister(e){this.zones.delete(e)}markLooted(e,t=!1){const i=this.zones.get(e);i&&(i.looted=!0,!t&&i.host&&i.host.applyLooted&&i.host.applyLooted())}update(e){const t=this.game;if(!this.enabled){this.current=null,t.ui.setPrompt(null);return}const i=t.player;let a=null,o=1/0;for(const c of this.zones.values()){if(c.looted&&c.kind!=="vehicle")continue;c.host&&c.host.updateZones&&c.host.updateZones();const d=c2(i.x,i.z,c.x,c.z);d<c.r*c.r&&d<o&&(a=c,o=d)}this.current=a,t.ui.setPrompt(a?a.getLabel?a.getLabel(t):a.label:null),a&&t.input.wasPressed("KeyE")&&this._activate(a)}_activate(e){const t=this.game;switch(e.kind){case"loot":{t.audio.open();const i=t.loot.roll(e.table||"crate");let a=.12;i.length===0&&i.push({id:"material",qty:1});for(const o of i)setTimeout(()=>{t.inventory.add(o.id,o.qty),t.audio.pickup(),t.particles.burst(e.x,1,e.z,15784048,8)},a*1e3),t.ui.toast(`+${o.qty} ${xa[o.id]?xa[o.id].nome:o.id}`,"loot"),a+=.14;this.markLooted(e.id),t.addLootedId(e.id),e.respawn&&t.world.containerLooted(e);break}case"pickup":{t.inventory.add(e.item,e.qty||1),t.audio.pickup(),t.particles.burst(e.x,.8,e.z,14700608,10),t.ui.toast(`+${e.qty||1} ${xa[e.item].nome}`,"loot"),this.markLooted(e.id),t.addLootedId(e.id),t.world.removePropById(e.id);break}case"vehicle":e.onUse&&e.onUse(t);break;case"examine":{t.audio.open();const i=Array.isArray(e.text)?e.text[Math.floor(Math.random()*e.text.length)]:e.text;t.ui.toast(i,"info",4200);break}case"use":e.onUse&&e.onUse();break}}}class W2{constructor(e){this.game=e,this.counts={comida:3,medicamento:1,material:6,gasolina:0,municao:0,pistola:0,escopeta:0,rifle:0},this.equipped=null,this.onChange=null}add(e,t){this.counts[e]=(this.counts[e]||0)+t,this._emit(e)}has(e){return(this.counts[e]||0)>0}use(e){const t=xa[e],i=this.game;if(!t||!this.has(e))return i.audio.denied(),!1;switch(t.tipo){case"consumivel":return i.player.hp>=100?(i.audio.denied(),i.ui.toast("Vida já está cheia.","info"),!1):(this.counts[e]--,i.player.hp=Math.min(100,i.player.hp+t.cura),i.audio.heal(),i.particles.burst(this._fxX(),1.2,this._fxZ(),e==="comida"?15769680:7395456,12),i.ui.toast(`+${t.cura} VIDA  (${t.nome.toLowerCase()} consumido)`,"heal"),i.ui.setHP(i.player.hp),this._emit(e),!0);case"arma":return this.equipped===e?(this.equipped=null,i.player.setWeapon(null),i.audio.equip(),i.ui.toast(`${t.nome} guardada.`,"info")):(this.equipped=e,i.player.setWeapon(e),i.audio.equip(),i.particles.burst(this._fxX(),1.2,this._fxZ(),13159636,6),i.ui.toast(`${t.nome} equipada — dano ${t.dano} (combate em breve)`,"loot")),this._emit(e),!0;case"combustivel":return i.audio.denied(),i.ui.toast("Saia e fique perto de um carro para abastecer o tanque.","info"),!1;default:return i.audio.denied(),i.ui.toast(e==="material"?"Materiais servem para construir e reparar a base.":"Munição será usada quando o combate chegar.","info"),!1}}_fxX(){return this.game.driving&&this.game.drivingSystem.vehicle?this.game.drivingSystem.vehicle.x:this.game.player.x}_fxZ(){return this.game.driving&&this.game.drivingSystem.vehicle?this.game.drivingSystem.vehicle.z:this.game.player.z}snapshot(){return{counts:{...this.counts},equipped:this.equipped}}restore(e){if(!e)return;const t=e.counts||e;this.counts={comida:0,medicamento:0,material:0,gasolina:0,municao:0,pistola:0,escopeta:0,rifle:0,...t},this.equipped=e.equipped||null,this.equipped&&!this.has(this.equipped)&&(this.equipped=null),this.game.player.setWeapon(this.equipped),this._emit()}_emit(e){this.onChange&&this.onChange(this.counts,e)}}class X2{roll(e){const t=z2[e];if(!t)return[];const i=Math.random()<.35?2:1,a={};for(let o=0;o<i;o++){const c=t.reduce((_,M)=>_+M[1],0);let d=Math.random()*c,f=t[0];for(const _ of t)if(d-=_[1],d<=0){f=_;break}const[p,,x,g]=f,m=x+Math.floor(Math.random()*(g-x+1));a[p]=(a[p]||0)+m}return Object.entries(a).map(([o,c])=>({id:o,qty:c}))}}const tf="cidade-em-guerra-save-v1",ug="cidade-em-guerra-config-v1";class q2{hasSave(){try{return!!localStorage.getItem(tf)}catch{return!1}}save(e){try{return localStorage.setItem(tf,JSON.stringify({v:1,ts:Date.now(),...e})),!0}catch{return!1}}load(){try{const e=localStorage.getItem(tf);return e?JSON.parse(e):null}catch{return null}}saveMeta(){const e=this.load();return e?{ts:e.ts,district:e.district||"—"}:null}loadConfig(){try{const e=localStorage.getItem(ug);return e?JSON.parse(e):{volume:.7,muted:!1,pixel:1}}catch{return{volume:.7,muted:!1,pixel:1}}}saveConfig(e){try{localStorage.setItem(ug,JSON.stringify(e))}catch{}}}class Y2{constructor(e){this.game=e,this.vehicle=null,this._fuelWarned=!1,this._dustAcc=0}get active(){return!!this.vehicle}tryUse(e){const t=this.game;if(e.drivable){if(e.fuel<99.5&&t.inventory.has("gasolina")){const i=Math.ceil((100-e.fuel)/50),a=t.inventory.counts.gasolina,o=Math.min(i,a);if(o>0){t.ui.showFuelConfirm(e,o);return}}this.enter(e)}}refuel(e,t=1){const i=this.game;i.inventory.counts.gasolina-=t,i.inventory._emit("gasolina"),e.fuel=Math.min(100,e.fuel+t*50),i.audio.refuel(),i.particles.burst(e.x,1,e.z,14700608,12),i.ui.toast(`Tanque abastecido: ${Math.round(e.fuel)}% (+${t*50})`,"heal"),this._fuelWarned=!1}confirmRefuel(e,t){this.refuel(e,t),setTimeout(()=>this.enter(e),400)}enter(e){const t=this.game;this.vehicle=e,e.detachCollider(t.collision),t.player.group.visible=!1,t.player.setMove(0,0,!1),t.interaction.enabled=!1,t.audio.enterCar(),t.audio.startEngine(),t.cameraRig.addShake(.25),e.fuel<=.5?(t.audio.engineDeny(),t.ui.toast("Tanque vazio! Encontre GALÕES DE GASOLINA para abastecer.","danger",4600)):t.ui.toast(`Combustível: ${Math.round(e.fuel)}% — WASD para dirigir, E para sair`,"info",3800),this._fuelWarned=e.fuel<20}exit(){const e=this.game,t=this.vehicle;if(!t)return;const i=[[t.x-Math.sin(t.heading)*(t.W/2+1.1),t.z-Math.cos(t.heading)*(t.W/2+1.1)],[t.x+Math.sin(t.heading)*(t.W/2+1.1),t.z+Math.cos(t.heading)*(t.W/2+1.1)],[t.x+Math.cos(t.heading)*(t.L/2+1.2),t.z-Math.sin(t.heading)*(t.L/2+1.2)],[t.x-Math.cos(t.heading)*(t.L/2+1.2),t.z+Math.sin(t.heading)*(t.L/2+1.2)]];let a=i[0];for(const[o,c]of i)if(!(o<1.5||c<1.5||o>e.world.size-1.5||c>e.world.size-1.5)&&!e.collision.overlaps(o,c,.62)){a=[o,c];break}t.setPosition(t.x,t.z,t.heading),t.attachCollider(e.collision),e.player.setPosition(a[0],a[1]),e.player.group.visible=!0,e.interaction.enabled=!0,e.audio.exitCar(),e.audio.stopEngine(),e.particles.dust(a[0],.3,a[1]),e.cameraRig.addShake(.15),this.vehicle=null,e.ui.setDriving(!1,0)}update(e){const t=this.game,i=this.vehicle;if(!i)return;if(t.input.wasPressed("KeyE")){this.exit();return}const a=t.input,o=a.isDown("KeyW","ArrowUp"),c=a.isDown("KeyS","ArrowDown"),d=a.isDown("KeyA","ArrowLeft"),f=a.isDown("KeyD","ArrowRight"),p=i.fuel<=0;o&&p&&Math.abs(i.speed)<.4&&!this._fuelWarned&&(this._fuelWarned=!0,t.audio.engineDeny(),t.ui.toast("SEM GASOLINA! Saia do carro [E] e use um galão para abastecer.","danger",4600)),o&&!p?i.speed+=11.5*e:c&&(i.speed-=(i.speed>.3?20:7.5)*e),i.speed*=Math.exp(-1.35*e),i.speed=Li(i.speed,-i.maxSpeed*.38,i.maxSpeed),Math.abs(i.speed)<.05&&(i.speed=0);const x=t.world.map.cellAt(i.x,i.z);let g=1;x===Le.DIRT||x===Le.RUBBLE?g=.86:x===Le.GRASS&&(g=.8);const m=(f?1:0)-(d?1:0);if(m!==0&&Math.abs(i.speed)>.35){const P=i.speed>=0?1:-1,I=Li(Math.abs(i.speed)/i.maxSpeed,0,1);i.heading-=m*2.7*g*I*P*e}const _=-Math.cos(i.heading)*i.speed,M=Math.sin(i.heading)*i.speed,T=i.x,S=i.z,y=t.collision.move(i.x,i.z,_*e,M*e,1.35),N=y.x-T,F=y.z-S,b=Math.hypot(_*e,M*e),C=Math.hypot(N,F);if(i.x=Li(y.x,2,t.world.size-2),i.z=Li(y.z,2,t.world.size-2),b>.001&&C<b*.55&&Math.abs(i.speed)>2.5&&(t.audio.crash(),t.cameraRig.addShake(Li(Math.abs(i.speed)/i.maxSpeed,.3,1)),t.particles.burst(i.x,.8,i.z,10133672,6),i.speed*=-.32),i.vx=_,i.vz=M,i.setPosition(i.x,i.z,i.heading),Math.abs(i.speed)>.4){const P=2.1*(.35+.65*Math.abs(i.speed)/i.maxSpeed);i.fuel=Math.max(0,i.fuel-P*e),i.fuel<20&&i.fuel>0&&!this._fuelWarned&&(this._fuelWarned=!0,t.audio.hurt(),t.ui.toast("Combustível na reserva! Procure galões de gasolina.","danger",4200)),i.fuel<=0&&t.audio.stopEngine()}Math.abs(i.speed)>4&&(x===Le.DIRT||x===Le.RUBBLE||x===Le.GRASS)&&(this._dustAcc+=e,this._dustAcc>.12&&(this._dustAcc=0,t.particles.dust(i.x+Math.cos(i.heading)*(i.L*.4),.25,i.z-Math.sin(i.heading)*(i.L*.4)))),i.fuel>0&&(t.audio._engine||t.audio.startEngine(),t.audio.setEngine(Li(Math.abs(i.speed)/i.maxSpeed,0,1),o)),t.ui.setDriving(!0,i.fuel,Math.abs(i.speed)*7.2),t.ui.setPrompt("SAIR DO CARRO")}}class $2{constructor(e){this.game=e,this.canShoot=!0,this.lastShotTime=0,this.raycastInterval=null}canFire(e){if(!e)return!1;const t=performance.now(),i=xa[e];if(!i||i.tipo!=="arma"||!this.game.inventory.has("municao"))return!1;const a=this._getFireRate(e);return!(t-this.lastShotTime<a)}_getFireRate(e){switch(e){case"pistola":return 180;case"escopeta":return 900;case"rifle":return 450;default:return 500}}_getWeaponStats(e){switch(e){case"pistola":return{damage:12,range:25,spread:.08,count:1};case"escopeta":return{damage:34,range:12,spread:.35,count:6};case"rifle":return{damage:26,range:50,spread:.02,count:1};default:return{damage:10,range:20,spread:.1,count:1}}}fire(){const e=this.game,t=e.inventory.equipped;if(!this.canFire(t))return e.inventory.equipped?e.inventory.has("municao")||(e.ui.toast("SEM MUNIÇÃO! Encontre caixas de munição.","danger",3500),e.audio.engineDeny()):e.ui.toast("Equipe uma arma primeiro!","info"),!1;const i=performance.now(),a=this._getWeaponStats(t);this.lastShotTime=i,e.inventory.counts.municao--,e.inventory._emit("municao"),this._playShootSound(t),e.cameraRig.addShake(t==="escopeta"?.6:t==="rifle"?.35:.2),this._muzzleFlash();for(let f=0;f<a.count;f++)this._fireRay(a,f);const o=e.player,c=Math.sin(o.heading),d=-Math.cos(o.heading);return e.particles.burst(o.x+c*.8,1.1,o.z+d*.8,16755200,4),!0}_playShootSound(e){const t=this.game;switch(e){case"pistola":t.audio._noise(.12,.18,1200,"highpass"),t.audio._tone("square",180,.08,.12,120);break;case"escopeta":t.audio._noise(.25,.28,400,"lowpass"),t.audio._tone("sawtooth",80,.15,.15,60);break;case"rifle":t.audio._noise(.15,.22,900,"highpass"),t.audio._tone("square",140,.1,.14,100);break}}_muzzleFlash(){const e=this.game,t=e.player,i=Math.sin(t.heading),a=-Math.cos(t.heading);e.particles.spawn(t.x+i*.9,1.2,t.z+a*.9,{color:16777088,size:.6,vx:i*.5,vz:a*.5,vy:.2,life:.08,opacity:1,spark:!0})}_fireRay(e,t=0){const i=this.game,a=i.player,o=a.heading,c=(Math.random()-.5)*e.spread,d=o+c,f=Math.sin(d),p=-Math.cos(d),x=.5;let g=a.x,m=a.z,_=!1;for(let M=0;M<e.range&&!_&&(g+=f*x,m+=p*x,!(g<1.5||m<1.5||g>i.world.size-1.5||m>i.world.size-1.5));M+=x){const T=i.world.getBuildingAt(g,m);if(T){this._hitBuilding(T,g,m,e.damage),_=!0;break}const S=i.world.getPropAt(g,m);if(S&&S.destructible){this._hitProp(S,g,m,e.damage),_=!0;break}}e.range>30&&t===0&&this._bulletTrail(a.x,a.z,g,m)}_hitBuilding(e,t,i,a){const o=this.game;o.particles.burst(t,.8,i,8947848,5),o.audio._noise(.08,.12,800,"highpass"),o.audio._tone("square",200,.04,.08,150),o.particles.spawn(t,.9,i,{color:3355443,size:.15,life:3,opacity:.8,grow:-.02})}_hitProp(e,t,i,a){const o=this.game;e.hp=(e.hp||100)-a,o.particles.burst(t,.6,i,9139029,8),o.audio._noise(.1,.15,600,"bandpass"),e.hp<=0&&(o.world.removePropById(e.id),o.audio.crash(),o.particles.burst(t,.4,i,7166539,12),o.ui.toast("Objeto destruído!","loot"))}_bulletTrail(e,t,i,a){const o=this.game,c=(e+i)/2,d=(t+a)/2;o.particles.spawn(c,1,d,{color:16768324,size:.08,life:.15,opacity:.9,grow:0,spark:!0})}update(e){this.canShoot=!0}}const nf={comida:`<svg class="ico" viewBox="0 0 14 14" shape-rendering="crispEdges" width="14" height="14">
    <rect x="6" y="1" width="2" height="2" fill="#5a4530"/><rect x="8" y="1" width="2" height="2" fill="#4a6a34"/>
    <rect x="3" y="3" width="8" height="2" fill="#d0683c"/><rect x="2" y="5" width="10" height="5" fill="#d0683c"/>
    <rect x="3" y="10" width="8" height="2" fill="#a84e2a"/><rect x="4" y="5" width="2" height="3" fill="#e8926a"/>
  </svg>`,medicamento:`<svg class="ico" viewBox="0 0 14 14" shape-rendering="crispEdges" width="14" height="14">
    <rect x="2" y="2" width="10" height="10" fill="#e8e6da"/><rect x="2" y="2" width="10" height="2" fill="#c9c7ba"/>
    <rect x="6" y="4" width="2" height="6" fill="#c23b2e"/><rect x="4" y="6" width="6" height="2" fill="#c23b2e"/>
  </svg>`,material:`<svg class="ico" viewBox="0 0 14 14" shape-rendering="crispEdges" width="14" height="14">
    <rect x="3" y="3" width="8" height="8" fill="#9aa3ad"/><rect x="5" y="5" width="4" height="4" fill="#6d757e"/>
    <rect x="1" y="5" width="2" height="4" fill="#9aa3ad"/><rect x="11" y="5" width="2" height="4" fill="#9aa3ad"/>
    <rect x="5" y="1" width="4" height="2" fill="#9aa3ad"/><rect x="5" y="11" width="4" height="2" fill="#9aa3ad"/>
  </svg>`};class K2{constructor(e,t){this.game=t;const i=document.createElement("div");i.className="hud hidden",i.innerHTML=`
      <div class="hud-identity px-panel">
        <div class="hud-name">
          <svg viewBox="0 0 12 12" shape-rendering="crispEdges" width="14" height="14">
            <rect x="1" y="4" width="10" height="6" fill="#7d8a4f"/><rect x="3" y="2" width="6" height="2" fill="#7d8a4f"/>
            <rect x="5" y="6" width="2" height="2" fill="#d8b430"/>
          </svg>
          SOBREVIVENTE-07
        </div>
        <div class="hp-row">
          <span class="hp-label">VIDA</span>
          <div class="hp-bar"><div class="hp-fill"></div></div>
          <span class="hp-num">100</span>
        </div>
      </div>

      <div class="hud-district px-panel">
        <div class="tag">SETOR ATUAL</div>
        <div class="name">BASE ÁGUIA</div>
        <div class="sub">área segura</div>
      </div>

      <div class="hud-resources px-panel">
        <h4>SUPRIMENTOS</h4>
        <div class="res-line food">${nf.comida}COMIDA<b>0</b></div>
        <div class="res-line med">${nf.medicamento}MEDICAMENTOS<b>0</b></div>
        <div class="res-line mat">${nf.material}MATERIAIS<b>0</b></div>
      </div>

      <div class="hud-driving px-panel" style="display:none">
        <div class="drv-title">
          <svg viewBox="0 0 14 14" shape-rendering="crispEdges" width="15" height="15">
            <rect x="2" y="2" width="10" height="11" fill="#c23b2e"/><rect x="2" y="2" width="10" height="2" fill="#8d2418"/>
            <rect x="5" y="0" width="3" height="2" fill="#8d2418"/><rect x="8" y="0" width="2" height="2" fill="#d8b430"/>
            <rect x="3" y="6" width="8" height="3" fill="#e8d870"/>
          </svg>
          COMBUSTÍVEL
        </div>
        <div class="fuel-row">
          <div class="fuel-bar"><div class="fuel-fill"></div></div>
          <span class="fuel-num">100%</span>
        </div>
        <div class="speed-num">0 km/h · <b>E</b> sair · encha com galões</div>
      </div>

      <div class="hud-prompt px-panel" style="display:none"><kbd>E</kbd><span class="txt">INTERAGIR</span></div>

      <div class="hud-hint">
        <b>WASD</b> mover/dirigir · <b>E</b> interagir · <b>I</b> inventário · <b>ESC</b> pausa
      </div>
    `,e.appendChild(i),this.el=i,this.hpFill=i.querySelector(".hp-fill"),this.hpNum=i.querySelector(".hp-num"),this.dName=i.querySelector(".hud-district .name"),this.dSub=i.querySelector(".hud-district .sub"),this.prompt=i.querySelector(".hud-prompt"),this.promptTxt=i.querySelector(".hud-prompt .txt"),this.resLines={comida:i.querySelector(".res-line.food"),medicamento:i.querySelector(".res-line.med"),material:i.querySelector(".res-line.mat")},this.drivingEl=i.querySelector(".hud-driving"),this.fuelFill=i.querySelector(".fuel-fill"),this.fuelNum=i.querySelector(".fuel-num"),this.speedNum=i.querySelector(".speed-num")}setDriving(e,t=100,i=0){if(this.drivingEl.style.display=e?"block":"none",!e)return;const a=Math.max(0,Math.round(t));this.fuelFill.style.width=a+"%",this.fuelFill.className="fuel-fill"+(a<=12?" empty":a<=30?" low":""),this.fuelNum.textContent=a+"%",this.speedNum.innerHTML=`${Math.round(i)} km/h · <b>E</b> sair · encha com galões`}setHP(e){const t=Math.max(0,Math.round(e));this.hpFill.style.width=t+"%",this.hpFill.className="hp-fill"+(t<=25?" low":t<=55?" mid":""),this.hpNum.textContent=t}setDistrict(e){this.dName.textContent=e.nome,this.dName.classList.toggle("danger",!!e.hazard),this.dSub.textContent=e.safe?"área segura — regenera vida":e.hazard?"PERIGO — escombros instáveis":"explorar e vasculhar"}setPrompt(e){e?(this.prompt.style.display="flex",this.promptTxt.textContent=e):this.prompt.style.display="none"}setResources(e,t){for(const[i,a]of Object.entries(this.resLines))a.querySelector("b").textContent=e[i]||0,i===t&&(a.classList.remove("bump"),a.offsetWidth,a.classList.add("bump"))}}const Z2={comida:{pal:{1:"#26282d",2:"#a8adb4",3:"#c23b2e",4:"#e8d8b0",5:"#7c8188"},rows:["................","................",".....111111.....","....15222251....","...1522222251...","...1233333321...","...1234444321...","...1234444321...","...1234444321...","...1233333321...","...1222222221...","....12222221....",".....111111.....","................","................","................"]},medicamento:{pal:{1:"#26282d",2:"#e8e6da",3:"#c23b2e",5:"#b9b7aa"},rows:["................","......1111......","......1221......","...1111111111...","..152222222251..","..122222222221..","..122223322221..","..122223322221..","..122333333221..","..122333333221..","..122223322221..","..122222222221..","..111111111111..","................","................","................"]},gasolina:{pal:{1:"#40100a",2:"#c23b2e",3:"#8d2418",5:"#d8b430"},rows:["................","....11..........","...1551..11.....","...12211121.....","...12222221.....","..1222222221....","..1233322221....","..1223332221....","..1222333221....","..1222233321....","..1222223331....","..1222222221....","..1222222221....","...111111111....","................","................"]},municao:{pal:{1:"#1e201a",2:"#5c6248",3:"#d8b430",5:"#e8d870"},rows:["................","................","...1111111111...","..122222222221..","..123535353521..","..123535353521..","..122222222221..","..122222222221..","..122555552221..","..122555552221..","..122222222221..","...1111111111...","................","................","................","................"]},material:{pal:{1:"#26282d",2:"#9aa3ad",3:"#6d757e",5:"#c0c6cc"},rows:["................",".....1...1......","....111.111.....","...115222511....","....1522251..1..","...115232511111.","..152223222221..","..152231322221..","..152223222221..","...115232511111.","....1522251..1..","...115222511....","....111.111.....",".....1...1......","................","................"]},pistola:{pal:{1:"#101116",2:"#46494e",3:"#2c2e33",5:"#6e4a2c"},rows:["................","................","..111111111111..",".13222222222221.",".12222222222221.",".1222222222211..","......1222211...","......155551....","......155551....","......155551....",".......15551....",".......15551....","........1551....",".........111....","................","................"]},escopeta:{pal:{1:"#101116",2:"#3a3d42",3:"#6e4a2c",5:"#8a5c36"},rows:["................","................","................","..11111111111111",".122222222222221",".133333333222221",".155555533222221","..1333333322111.","...1555553331...","....111115331...",".........1531...","..........111...","................","................","................","................"]},rifle:{pal:{1:"#101116",2:"#33363c",3:"#6e4a2c",5:"#8a5c36",6:"#46494e"},rows:["................","................",".111111111111111","1666666666666661","1222222222222221","1333333666666611",".15555366666611.","..155531666611..","...1553111661...","...15531..111...","...15531........","....1531........",".....111........","................","................","................"]}},dc={};function J2(s){if(dc[s])return dc[s];const e=Z2[s];if(!e)return"";const t=document.createElement("canvas");t.width=16,t.height=16;const i=t.getContext("2d");return e.rows.forEach((a,o)=>{for(let c=0;c<a.length;c++){const d=a[c];d==="."||!e.pal[d]||(i.fillStyle=e.pal[d],i.fillRect(c,o,1,1))}}),dc[s]=t.toDataURL(),dc[s]}const Q2=36;class j2{constructor(e,t){this.game=t;const i=document.createElement("div");i.className="screen inv-screen",i.innerHTML=`
      <div class="inv-panel px-panel">
        <div class="inv-head">
          <div>
            <h2 class="inv-title">MOCHILA</h2>
            <div class="inv-sub">sobrevivente-07 · suprimentos e equipamento</div>
          </div>
          <div class="inv-close">[I] fechar</div>
        </div>
        <div class="inv-grid"></div>
        <div class="inv-foot">
          <span><b>clique</b> usar/equipar</span>
          <span><b>1–8</b> usar slot rápido</span>
          <span><b>ESC</b> fechar</span>
        </div>
      </div>
      <div class="inv-tip" style="display:none"></div>
    `,e.appendChild(i),this.el=i,this.gridEl=i.querySelector(".inv-grid"),this.tipEl=i.querySelector(".inv-tip"),this.slots=[],this._buildSlots(),i.addEventListener("mousemove",a=>{if(this.tipEl.style.display==="none")return;const o=i.getBoundingClientRect();this.tipEl.style.left=Math.min(a.clientX-o.left+14,o.width-260)+"px",this.tipEl.style.top=Math.max(8,a.clientY-o.top-this.tipEl.offsetHeight-12)+"px"})}_buildSlots(){for(let e=0;e<Q2;e++){const t=jf[e]||null,i=document.createElement("button");i.className="inv-slot"+(e<jf.length?" typed":""),i.dataset.idx=e,t?(i.innerHTML=`
          <img class="slot-icon" src="${J2(t)}" alt="" />
          <span class="slot-qty">0</span>
          <span class="slot-key">${e+1<=8?e+1:""}</span>
          <span class="slot-badge">NA MÃO</span>
        `,i.addEventListener("click",()=>{(this.game.inventory.counts[t]||0)>0?this.game.useItem(t):(this.game.audio.denied(),this._flash(i))}),i.addEventListener("mouseenter",()=>{this.game.audio.uiHover(),this._showTip(t,i)}),i.addEventListener("mouseleave",()=>{this.tipEl.style.display="none"})):i.disabled=!0,this.gridEl.appendChild(i),this.slots.push({el:i,id:t})}}_flash(e){e.classList.remove("deny"),e.offsetWidth,e.classList.add("deny")}_showTip(e,t){const i=xa[e],a=this.game.inventory.counts[e]||0,o=this.game.inventory.equipped===e,c=a<=0?'<span class="tip-act none">— nenhum no estoque —</span>':i.tipo==="arma"?`<span class="tip-act">${o?"clique: GUARDAR":"clique: EQUIPAR"}</span>`:`<span class="tip-act">${i.acao}</span>`;this.tipEl.innerHTML=`
      <div class="tip-name" style="color:${i.cor}">${i.nome} <span class="tip-x">×${a}</span></div>
      <div class="tip-desc">${i.desc}</div>
      ${c}
    `,this.tipEl.style.display="block",this.tipEl.style.left=t.offsetLeft+60+"px",this.tipEl.style.top=t.offsetTop-10+"px"}refresh(e){const t=this.game.inventory.equipped;for(const i of this.slots){if(!i.id)continue;const a=e[i.id]||0;i.el.querySelector(".slot-qty").textContent=a,i.el.classList.toggle("empty",a<=0),i.el.classList.toggle("equipped",t===i.id)}}}function Qg(s){const e=document.createElement("div");e.className="settings-rows",e.innerHTML=`
    <div class="setting-row">
      <label>VOLUME <span class="val"></span></label>
      <input type="range" min="0" max="100" value="70" class="vol" />
    </div>
    <div class="setting-row">
      <label class="check-row"><span class="check-box"></span> MUDO</label>
    </div>
    <div class="setting-row">
      <label>TAMANHO DO PIXEL</label>
      <div class="seg-row">
        <button class="seg-btn" data-p="0">NÍTIDO</button>
        <button class="seg-btn" data-p="1">MÉDIO</button>
        <button class="seg-btn" data-p="2">PESADO</button>
      </div>
    </div>
    <div class="setting-row">
      <button class="inv-use fs-btn">TELA CHEIA</button>
    </div>
  `;const t=s.config,i=e.querySelector(".vol"),a=e.querySelector(".val"),o=e.querySelector(".check-row"),c=e.querySelector(".check-box"),d=e.querySelectorAll(".seg-btn"),f=()=>{i.value=Math.round(t.volume*100),a.textContent=t.muted?"MUDO":Math.round(t.volume*100)+"%",c.textContent=t.muted?"X":"",d.forEach(p=>p.classList.toggle("on",+p.dataset.p===t.pixel))};return f(),i.addEventListener("input",()=>{t.volume=i.value/100,t.muted=!1,s.applyConfig(),f()}),o.addEventListener("click",()=>{t.muted=!t.muted,s.applyConfig(),f()}),d.forEach(p=>p.addEventListener("click",()=>{t.pixel=+p.dataset.p,s.applyConfig(),f()})),e.querySelector(".fs-btn").addEventListener("click",()=>{var p,x;document.fullscreenElement?document.exitFullscreen():(x=(p=document.documentElement).requestFullscreen)==null||x.call(p)}),e}class ew{constructor(e,t){this.game=t;const i=document.createElement("div");i.className="screen menu-main on",i.innerHTML=`
      <div class="menu-left">
        <div class="menu-eyebrow">OPERAÇÃO DE SOBREVIVÊNCIA URBANA</div>
        <h1 class="game-title">CIDADE<br/>EM <span class="war">GUERRA</span></h1>
        <p class="menu-sub">a cidade caiu. você não. <em>explore · vasculhe · reconstrua</em></p>
        <div class="menu-buttons">
          <button class="menu-btn" data-act="new"><span class="arr">▸</span>NOVO JOGO</button>
          <button class="menu-btn" data-act="continue"><span class="arr">▸</span>CONTINUAR</button>
          <button class="menu-btn" data-act="settings"><span class="arr">▸</span>CONFIGURAÇÕES</button>
          <button class="menu-btn danger" data-act="quit"><span class="arr">▸</span>SAIR</button>
        </div>
        <div class="menu-foot">
          <div class="save-info"></div>
          <div>v0.1 — MVP · Three.js + pixel art</div>
        </div>
      </div>
      <div class="menu-right">
        <div class="settings-slot" style="display:none"><div class="px-panel" style="padding:16px 20px"></div></div>
        <div class="controls-card px-panel">
          <h5>CONTROLES</h5>
          <div><span class="k">W</span><span class="k">A</span><span class="k">S</span><span class="k">D</span> / setas — mover</div>
          <div><span class="k">E</span> interagir · <span class="k">I</span> inventário</div>
          <div><span class="k">ESC</span> pausa · <span class="k">scroll</span> zoom da câmera</div>
        </div>
      </div>
    `,e.appendChild(i),this.el=i,this.settingsSlot=i.querySelector(".settings-slot"),this.settingsSlot.querySelector(".px-panel").appendChild(Qg(t)),this.saveInfo=i.querySelector(".save-info"),i.querySelectorAll(".menu-btn").forEach(a=>{a.addEventListener("mouseenter",()=>t.audio.uiHover()),a.addEventListener("click",()=>{t.audio.unlock(),t.audio.uiClick();const o=a.dataset.act;if(o==="settings"){const c=this.settingsSlot.style.display!=="none";this.settingsSlot.style.display=c?"none":"block",c&&t.audio.uiBack()}else t.menuAction(o)})})}render(){const e=this.game.save.saveMeta(),t=this.el.querySelector('[data-act="continue"]');if(e){t.disabled=!1;const i=new Date(e.ts);this.saveInfo.textContent=`save encontrado — ${e.district} · ${i.toLocaleDateString()} ${i.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`}else t.disabled=!0,this.saveInfo.textContent="nenhum save encontrado";this.settingsSlot.style.display="none"}}class tw{constructor(e,t){this.game=t;const i=document.createElement("div");i.className="screen menu-pause",i.innerHTML=`
      <div class="pause-panel px-panel">
        <h2 class="pause-title">PAUSA</h2>
        <div class="pause-sub">a cidade espera. ela sempre espera.</div>
        <div class="menu-buttons">
          <button class="menu-btn" data-act="resume"><span class="arr">▸</span>CONTINUAR</button>
          <button class="menu-btn" data-act="save"><span class="arr">▸</span>SALVAR JOGO</button>
          <button class="menu-btn" data-act="settings"><span class="arr">▸</span>CONFIGURAÇÕES</button>
          <button class="menu-btn danger" data-act="menu"><span class="arr">▸</span>MENU PRINCIPAL</button>
        </div>
        <div class="settings-slot" style="display:none"></div>
      </div>
    `,e.appendChild(i),this.el=i,this.settingsSlot=i.querySelector(".settings-slot"),this.settingsSlot.appendChild(Qg(t)),i.querySelectorAll(".menu-btn").forEach(a=>{a.addEventListener("mouseenter",()=>t.audio.uiHover()),a.addEventListener("click",()=>{t.audio.uiClick();const o=a.dataset.act;if(o==="settings"){const c=this.settingsSlot.style.display!=="none";this.settingsSlot.style.display=c?"none":"block"}else this.settingsSlot.style.display="none",t.pauseAction(o)})})}}class nw{constructor(e,t){this.game=t,this.container=e;const i=document.createElement("div");i.innerHTML=`
      <div class="vignette"></div>
      <div class="fade-cover"></div>
      <div class="toasts"></div>
      <div class="scanlines"></div>
      <div class="screen quit-screen">
        <div class="quit-panel px-panel">
          <h3>FIM DA TRANSMISSÃO</h3>
          <p>Você deixou a cidade para trás... por enquanto. A base, os suprimentos e o que restou dos sobreviventes esperarão o seu retorno.</p>
          <div class="menu-buttons">
            <button class="menu-btn quit-back"><span class="arr">▸</span>VOLTAR AO MENU</button>
          </div>
        </div>
      </div>
    `,e.appendChild(i),this.vignette=i.querySelector(".vignette"),this.fade=i.querySelector(".fade-cover"),this.toastsEl=i.querySelector(".toasts"),this.quitEl=i.querySelector(".quit-screen"),i.querySelector(".quit-back").addEventListener("click",()=>{t.audio.uiClick(),t.toMenu()}),this.hud=new K2(e,t),this.inventoryUI=new j2(e,t),this.mainMenu=new ew(e,t),this.pauseMenu=new tw(e,t),this._toastTimers=[]}setState(e){this.mainMenu.el.classList.toggle("on",e==="menu"),this.pauseMenu.el.classList.toggle("on",e==="paused"),this.inventoryUI.el.classList.toggle("on",e==="inventory"),this.quitEl.classList.toggle("on",e==="quit"),this.hud.el.classList.toggle("hidden",e==="menu"||e==="quit"),e==="menu"&&this.mainMenu.render(),e==="inventory"&&this.inventoryUI.refresh(this.game.inventory.counts)}setHP(e){this.hud.setHP(e)}setDistrict(e){this.hud.setDistrict(e)}setPrompt(e){this.hud.setPrompt(e)}setResources(e,t){this.hud.setResources(e,t)}setDriving(e,t,i){this.hud.setDriving(e,t,i)}toast(e,t="info",i=3e3){const a=document.createElement("div");for(a.className=`toast ${t}`,a.textContent=e,this.toastsEl.appendChild(a);this.toastsEl.children.length>5;)this.toastsEl.removeChild(this.toastsEl.firstChild);const o=setTimeout(()=>{a.classList.add("out"),setTimeout(()=>a.remove(),320)},i);this._toastTimers.push(o)}setHazard(e){this.vignette.classList.toggle("hazard",e)}fadeTo(e){this.fade.classList.toggle("on",e)}showFuelConfirm(e,t){const i=this.game,a=document.createElement("div");a.className="fuel-modal",a.innerHTML=`
      <div class="fuel-panel px-panel">
        <h3>ABASTECER VEÍCULO?</h3>
        <p>Tanque atual: <b>${Math.round(e.fuel)}%</b></p>
        <p>Galões disponíveis: <b>${i.inventory.counts.gasolina}</b></p>
        <p>Usar <b>${t} galão(ões)</b> para encher até <b>${Math.min(100,e.fuel+t*50)}%</b>?</p>
        <div class="menu-buttons">
          <button class="menu-btn fuel-confirm"><span class="arr">▸</span>SIM, ABASTECER</button>
          <button class="menu-btn fuel-cancel"><span class="arr">▸</span>NÃO, ENTRAR NO CARRO</button>
        </div>
      </div>
    `,this.container.appendChild(a);const o=i.input.enabled;i.input.enabled=!1,a.querySelector(".fuel-confirm").addEventListener("click",()=>{i.audio.uiClick(),a.remove(),i.input.enabled=o,i.drivingSystem.confirmRefuel(e,t)}),a.querySelector(".fuel-cancel").addEventListener("click",()=>{i.audio.uiBack(),a.remove(),i.input.enabled=o,i.drivingSystem.enter(e)});const c=d=>{d.code==="Escape"&&(window.removeEventListener("keydown",c),i.audio.uiBack(),a.remove(),i.input.enabled=o,i.drivingSystem.enter(e))};window.addEventListener("keydown",c)}dispose(){this._toastTimers.forEach(clearTimeout)}}class iw{constructor(){this.ctx=null,this.master=null,this.volume=.7,this.muted=!1,this._stepAlt=!1,this._ambientOn=!1}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:this.volume,this.master.connect(this.ctx.destination))}setVolume(e){this.volume=e,this.master&&!this.muted&&(this.master.gain.value=e)}setMuted(e){this.muted=e,this.master&&(this.master.gain.value=e?0:this.volume)}_env(e,t,i,a,o){const c=e.gain;c.setValueAtTime(1e-4,t),c.linearRampToValueAtTime(a,t+i),c.exponentialRampToValueAtTime(1e-4,t+i+o)}_tone(e,t,i,a=.2,o=null,c=0){if(!this.ctx)return;const d=this.ctx.currentTime+c,f=this.ctx.createOscillator(),p=this.ctx.createGain();f.type=e,f.frequency.setValueAtTime(t,d),o&&f.frequency.exponentialRampToValueAtTime(o,d+i),this._env(p,d,.008,a,i),f.connect(p).connect(this.master),f.start(d),f.stop(d+i+.1)}_noise(e,t,i,a="lowpass",o=0,c=1){if(!this.ctx)return;const d=this.ctx.currentTime+o,f=Math.max(1,Math.floor(this.ctx.sampleRate*e)),p=this.ctx.createBuffer(1,f,this.ctx.sampleRate),x=p.getChannelData(0);for(let M=0;M<f;M++)x[M]=Math.random()*2-1;const g=this.ctx.createBufferSource();g.buffer=p;const m=this.ctx.createBiquadFilter();m.type=a,m.frequency.value=i,m.Q.value=c;const _=this.ctx.createGain();this._env(_,d,.006,t,e),g.connect(m).connect(_).connect(this.master),g.start(d)}step(e){this._stepAlt=!this._stepAlt;const i=(e==="grass"?260:e==="metal"?700:420)*(this._stepAlt?1:.85);this._noise(.07,e==="grass"?.05:.09,i,"bandpass",0,1.4)}uiHover(){this._tone("square",660,.05,.05)}uiClick(){this._tone("square",440,.09,.12,240)}uiBack(){this._tone("square",300,.09,.1,180)}open(){this._noise(.16,.12,300,"lowpass"),this._tone("triangle",190,.14,.1,130)}enterCar(){this._noise(.1,.1,500,"bandpass"),this._tone("square",220,.08,.08,300)}exitCar(){this._noise(.12,.1,380,"bandpass"),this._tone("square",300,.08,.07,210)}crash(){this._noise(.22,.18,240,"lowpass"),this._tone("sine",90,.18,.12,45)}refuel(){this._noise(.7,.07,900,"bandpass",0,.8),this._tone("sine",300,.5,.06,520,.1)}equip(){this._noise(.06,.1,2400,"highpass"),this._tone("square",900,.05,.07,600)}engineDeny(){this._tone("sawtooth",70,.3,.08,50)}startEngine(){if(!this.ctx||this._engine)return;const e=this.ctx.createOscillator();e.type="sawtooth",e.frequency.value=46;const t=this.ctx.createOscillator();t.type="square",t.frequency.value=23;const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.value=320;const a=this.ctx.createGain();a.gain.value=1e-4,a.gain.linearRampToValueAtTime(.05,this.ctx.currentTime+.25),e.connect(i),t.connect(i),i.connect(a),a.connect(this.master),e.start(),t.start(),this._engine={osc:e,sub:t,g:a,f:i}}setEngine(e,t){if(!this._engine)return;const i=this.ctx.currentTime,a=44+e*92;this._engine.osc.frequency.setTargetAtTime(a,i,.08),this._engine.sub.frequency.setTargetAtTime(a/2,i,.08),this._engine.f.frequency.setTargetAtTime(260+e*700,i,.1),this._engine.g.gain.setTargetAtTime(.04+e*.045+(t?.012:0),i,.1)}stopEngine(){if(!this._engine)return;const e=this._engine;this._engine=null;const t=this.ctx.currentTime;e.g.gain.setTargetAtTime(1e-4,t,.12),e.osc.frequency.setTargetAtTime(30,t,.2),setTimeout(()=>{try{e.osc.stop(),e.sub.stop()}catch{}},900)}pickup(){this._tone("triangle",523,.08,.14),this._tone("triangle",784,.1,.14,null,.07)}heal(){this._tone("sine",392,.16,.14),this._tone("sine",587,.22,.14,null,.1)}hurt(){this._tone("sawtooth",140,.16,.1,70)}save(){this._tone("square",392,.08,.09),this._tone("square",523,.08,.09,null,.09),this._tone("square",659,.14,.09,null,.18)}radio(){this._noise(.5,.1,1600,"bandpass",0,.6),this._tone("sine",880,.3,.05,620,.1)}denied(){this._tone("square",180,.12,.1,140)}startAmbient(){if(!this.ctx||this._ambientOn)return;this._ambientOn=!0;const e=this.ctx.sampleRate*4,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=t.getChannelData(0);let a=0;for(let g=0;g<e;g++){const m=Math.random()*2-1;a=(a+.02*m)/1.02,i[g]=a*3.2}const o=this.ctx.createBufferSource();o.buffer=t,o.loop=!0;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.value=320;const d=this.ctx.createGain();d.gain.value=.05;const f=this.ctx.createOscillator();f.frequency.value=.07;const p=this.ctx.createGain();p.gain.value=.028,f.connect(p).connect(d.gain),o.connect(c).connect(d).connect(this.master),o.start(),f.start();const x=()=>{this._ambientOn&&(this._tone("sine",42+Math.random()*20,1.6,.06,28),this._noise(1.4,.045,140,"lowpass"),setTimeout(x,18e3+Math.random()*22e3))};setTimeout(x,9e3)}dispose(){this._ambientOn=!1,this.ctx&&this.ctx.close().catch(()=>{})}}let dg=!1;function Lo(s){if(dg)return;dg=!0;const e=s&&s.message?s.message:String(s),t=s&&s.stack?String(s.stack).split(`
`).slice(0,6).join(`
`):"";console.error("[CIDADE EM GUERRA] falha no boot:",s);const i=document.createElement("div");i.style.cssText=`
    position: fixed; inset: 0; z-index: 9999; display: flex; align-items: center; justify-content: center;
    background: rgba(6,7,4,0.94); font-family: 'VT323', 'Courier New', monospace; color: #cdd3b8; padding: 20px;
  `,i.innerHTML=`
    <div style="max-width: 640px; width: 100%; background: #161a12; border: 3px solid #6a2a20; padding: 22px 26px;
                box-shadow: 6px 6px 0 rgba(0,0,0,0.6);">
      <div style="font-family: 'Press Start 2P', monospace; font-size: 14px; color: #e05a44; text-shadow: 2px 2px 0 #000; margin-bottom: 12px;">
        FALHA NA TRANSMISSÃO
      </div>
      <div style="font-size: 24px; line-height: 1.2; color: #f0b0a4; margin-bottom: 14px;">${fg(e)}</div>
      ${t?`<pre style="font-size: 16px; color: #8b927a; background: #0d100a; border: 1px solid #3d4430; padding: 10px; overflow: auto; white-space: pre-wrap;">${fg(t)}</pre>`:""}
      <div style="font-size: 21px; color: #cdd3b8; margin-top: 14px; line-height: 1.4;">
        Como resolver:<br/>
        1. Rode <b style="color:#d8b430;">npm install</b> e depois <b style="color:#d8b430;">npm run dev</b>, abrindo o endereço que o terminal mostrar (ex.: http://localhost:5173).<br/>
        2. Para produção: <b style="color:#d8b430;">npm run build</b> e sirva a pasta <b style="color:#d8b430;">dist/</b> (ex.: <span style="color:#8b927a;">cd dist &amp;&amp; python -m http.server</span>).<br/>
        3. Não abra o index.html direto pelo explorador de arquivos (file://).<br/>
        4. Verifique se o navegador tem aceleração gráfica/WebGL habilitada.
      </div>
    </div>
  `,document.body.appendChild(i)}function fg(s){return String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}const hg={comida:3,medicamento:1,material:6};class rw{constructor(e){this.container=e,this.state="boot",this.lootedIds=new Set,this.respawnedList=[],this._district=null,this._hpUiTimer=0,this._hazardTick=0,this._districtTimer=0}init(){this.scene=new kx,this.scene.background=new vt(922134),this.renderer=new o2(this.container),this.cameraRig=new u2(this.renderer.aspect),this.input=new f2,this.time=new h2,this.audio=new iw,this.save=new q2,this.loot=new X2,this.config=this.save.loadConfig(),this.applyConfig(!1),this.ui=new nw(this.container,this),this.player=new V2(this.scene),this.interaction=new G2(this),this.inventory=new W2(this),this.inventory.onChange=(t,i)=>this.ui.setResources(t,i),this._buildWorld(),this.controller=new H2(this),this.drivingSystem=new Y2(this),this.shootingSystem=new $2(this),this._resetPlayer(),this.ui.setResources(this.inventory.counts),this.ui.setHP(this.player.hp);const e=()=>{try{this.audio.unlock()}catch{}};window.addEventListener("pointerdown",e),window.addEventListener("keydown",e),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="playing"&&this.setState("paused")}),window.addEventListener("resize",()=>{this.cameraRig.onResize(this.renderer.aspect)}),this.setState("menu"),this.renderer.three.setAnimationLoop(t=>this._frame(t))}_buildWorld(){this.worldGroup&&this.scene.remove(this.worldGroup),this.worldGroup=new Hn,this.scene.add(this.worldGroup),this.collision=new p2,this.interaction.zones.clear(),this.interaction.current=null,this.world=new B2(this.worldGroup,this),this.particles=this.world.particles,this.lootedIds.clear(),this.respawnedList=[]}_resetPlayer(){const e=this.world.spawn;this.player.setPosition(e.x,e.z),this.player.hp=100,this.player.heading=Math.PI,this.cameraRig.follow(1,e.x,e.z,0,0,this.world.size),this._district=null}setState(e){var t,i;this.state=e,this.ui.setState(e),e==="playing"&&(this.audio.startAmbient(),this._checkDistrict(!0)),e!=="playing"&&this.drivingSystem&&this.drivingSystem.active&&this.audio.stopEngine(),e==="menu"&&((i=(t=this.cameraRig).zoomReset)==null||i.call(t))}menuAction(e){e==="new"?this.newGame():e==="continue"?this.continueGame():e==="quit"&&this.setState("quit")}pauseAction(e){e==="resume"?this.setState("playing"):e==="save"?this.saveGame():e==="menu"&&this.toMenu()}newGame(){(this.lootedIds.size>0||this.respawnedList.length>0)&&this._buildWorld(),this.respawnedList=[],this.inventory.restore({...hg}),this._resetPlayer(),this.setState("playing"),this.ui.setHP(100),this.ui.toast("Você acorda na Base Águia. A cidade espera lá fora.","info",4200),this.ui.toast("Dica: [E] vasculha caixas, carros e entulho.","loot",5200)}continueGame(){const e=this.save.load();if(!e){this.ui.toast("Nenhum save encontrado.","danger");return}this._buildWorld(),this.inventory.restore(e.inv||{...hg}),this._resetPlayer(),this.player.setPosition(e.player.x,e.player.z),this.player.hp=e.player.hp??100;for(const t of e.looted||[])this.interaction.markLooted(t),t.startsWith("gas-")&&this.world.removePropById(t);this.respawnedList=[...e.respawns||[]],this.world.restoreRespawns(e.respawns),this.setState("playing"),this.ui.setHP(this.player.hp),this.ui.toast("Progresso restaurado. Boa sorte lá fora.","info")}toMenu(){this.drivingSystem&&this.drivingSystem.active&&this.drivingSystem.exit(),this.setState("menu")}saveGame(e=!1){const t=this.drivingSystem.active?this.drivingSystem.vehicle:null,i=t?t.x:this.player.x,a=t?t.z:this.player.z,o=this.world.districtAt(i,a),c=this.save.save({player:{x:i,z:a,hp:this.player.hp},inv:this.inventory.snapshot(),looted:[...this.lootedIds],respawns:this.respawnedList,district:o.nome});return e||(c?(this.audio.save(),this.ui.toast("JOGO SALVO","heal")):this.ui.toast("Falha ao salvar.","danger")),c}addLootedId(e){this.lootedIds.add(e)}onContainerRespawned(e,t){this.respawnedList=this.respawnedList.filter(i=>i.id!==e),this.respawnedList.push(t)}restAtBase(){this.player.hp=100,this.ui.setHP(100),this.audio.heal(),this.particles.burst(this.player.x,1.2,this.player.z,10475680,14),this.saveGame(!0),this.ui.toast("Você descansou. Vida restaurada — jogo salvo.","heal",3800)}useItem(e){this.inventory.use(e),this.ui.inventoryUI.refresh(this.inventory.counts)}applyConfig(e=!0){this.renderer.setPixelLevel(this.config.pixel??1),this.cameraRig.onResize(this.renderer.aspect),this.audio.setVolume(this.config.volume??.7),this.audio.setMuted(!!this.config.muted),e&&this.save.saveConfig(this.config)}_checkDistrict(e=!1,t=this.player.x,i=this.player.z){const a=this.world.districtAt(t,i);(e||!this._district||this._district.id!==a.id)&&(this._district=a,this.ui.setDistrict(a),this.ui.setHazard(!!a.hazard),e||(a.hazard?this.ui.toast("ZONA ABANDONADA — escombros instáveis drenam sua vida.","danger",4200):a.safe&&this.ui.toast("Base Águia — área segura. Sua vida regenera aqui.","heal")))}_collapse(){this._collapsing||(this._collapsing=!0,this.drivingSystem.active&&this.drivingSystem.exit(),this.audio.hurt(),this.ui.fadeTo(!0),this.ui.toast("VOCÊ DESMAIOU — arrastado de volta à base.","danger",4600),setTimeout(()=>{const e=this.world.spawn;this.player.setPosition(e.x,e.z),this.player.hp=60,this.ui.setHP(60),this._district=null,this._collapsing=!1,this._checkDistrict(!0),this.ui.fadeTo(!1)},700))}_frame(e){try{this._tick(e)}catch(t){Lo(t),this.renderer.three.setAnimationLoop(null);return}}_tick(e){const t=this.time.update(e),i=this.time.now,a=this.input;switch(a.consumeWheel(),this.state){case"menu":case"quit":this.world.update(t,i),this.cameraRig.panMenu(i,this.world.size);break;case"playing":{if(a.wasPressed("Escape")){this.setState("paused");break}const o=this.drivingSystem.active;if(a.wasPressed("KeyI"))if(o)this.audio.denied(),this.ui.toast("Saia do carro [E] para abrir a mochila.","info");else{this.audio.uiClick(),this.setState("inventory");break}!o&&(a.wasPressed("Mouse0")||a.wasPressed("KeyF"))&&this.shootingSystem.fire(),o?(this.drivingSystem.update(t),this.world.update(t,i)):(this.controller.update(t),this.player.update(t,i),this.world.update(t,i),this.interaction.update(t),this.shootingSystem.update(t));const c=this.drivingSystem.vehicle,d=c?c.x:this.player.x,f=c?c.z:this.player.z;this.cameraRig.follow(t,d,f,(c?c.vx:this.player.vx)*.55,(c?c.vz:this.player.vz)*.55,this.world.size),this._districtTimer+=t,this._districtTimer>.25&&(this._districtTimer=0,this._checkDistrict(!1,d,f));const p=this._district;p&&p.hazard?(this.player.hp-=2.6*t,this._hazardTick+=t,this._hazardTick>1.1&&(this._hazardTick=0,this.audio.hurt())):p&&p.safe&&this.player.hp<100&&(this.player.hp=Math.min(100,this.player.hp+4*t)),this._hpUiTimer+=t,this._hpUiTimer>.15&&(this._hpUiTimer=0,this.ui.setHP(this.player.hp)),this.player.hp<=0&&!this._collapsing&&this._collapse();break}case"inventory":{if(a.wasPressed("Escape")||a.wasPressed("KeyI")){this.audio.uiBack(),this.setState("playing");break}for(let o=0;o<8;o++)a.wasPressed("Digit"+(o+1))&&this.useItem(jf[o]);break}case"paused":{a.wasPressed("Escape")&&this.setState("playing");break}}a.endFrame(),this.renderer.render(this.scene,this.cameraRig.cam)}dispose(){this.renderer.three.setAnimationLoop(null),this.input.dispose(),this.renderer.dispose(),this.audio.dispose(),this.ui.dispose()}}window.addEventListener("error",s=>Lo(s.error||s.message));window.addEventListener("unhandledrejection",s=>Lo(s.reason));function sw(s){window.__CEG_BOOTED__=!0;try{const e=document.createElement("canvas");if(!(e.getContext("webgl2")||e.getContext("webgl")))throw new Error("Seu navegador não expôs um contexto WebGL. Habilite a aceleração de hardware e tente de novo.")}catch(e){return Lo(e),{dispose(){}}}try{const e=new rw(s);return e.init(),e}catch(e){return Lo(e),{dispose(){}}}}function aw(){const s=Jm.useRef(null);return Jm.useEffect(()=>{if(!s.current)return;const e=sw(s.current);return()=>e.dispose()},[]),pg.jsx("div",{ref:s,className:"game-shell"})}V_.createRoot(document.getElementById("root")).render(pg.jsx(aw,{}));

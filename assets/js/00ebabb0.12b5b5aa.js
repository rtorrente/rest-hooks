/*! For license information please see 00ebabb0.12b5b5aa.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30481],{62525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,c,s=o(e),l=1;l<arguments.length;l++){for(var u in i=Object(arguments[l]))r.call(i,u)&&(s[u]=i[u]);if(t){c=t(i);for(var p=0;p<c.length;p++)n.call(i,c[p])&&(s[c[p]]=i[c[p]])}}return s}},41535:(e,t,r)=>{var n=r(62525),o=60103,a=60106;var i=60109,c=60110,s=60112;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),c=p("react.context"),s=p("react.forward_ref"),p("react.suspense"),l=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}function m(){}function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var v=b.prototype=new m;v.constructor=b,n(v,h.prototype),v.isPureReactComponent=!0;var g=Array.isArray,k=Object.prototype.hasOwnProperty,O={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,a={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,n)&&!x.hasOwnProperty(n)&&(a[n]=t[n]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===a[n]&&(a[n]=s[n]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:O.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case a:s=!0}}if(s)return i=i(s=e),e=""===n?"."+S(s,0):n,g(i)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),C(i,t,r,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=""===n?".":n+":",g(e))for(var l=0;l<e.length;l++){var u=n+S(c=e[l],l);s+=C(c,t,r,u,i)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),l=0;!(c=e.next()).done;)s+=C(c=c.value,t,r,u=n+S(c,l++),i);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function E(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function _(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},T={transition:0}},27378:(e,t,r)=>{r(41535)},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,y=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},59611:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>c,toc:()=>s,default:()=>u});var n=r(87462),o=(r(27378),r(3905));const a={title:"<ExternalCacheProvider />"},i=void 0,c={unversionedId:"api/ExternalCacheProvider",id:"api/ExternalCacheProvider",title:"<ExternalCacheProvider />",description:"Integrates external stores with rest-hooks. Should be placed as high as possible",source:"@site/../docs/api/ExternalCacheProvider.md",sourceDirName:"api",slug:"/api/ExternalCacheProvider",permalink:"/docs/next/api/ExternalCacheProvider",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/ExternalCacheProvider.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1633535713,formattedLastUpdatedAt:"10/6/2021",frontMatter:{title:"<ExternalCacheProvider />"},sidebar:"docs",previous:{title:"<CacheProvider />",permalink:"/docs/next/api/CacheProvider"},next:{title:"<NetworkErrorBoundary />",permalink:"/docs/next/api/NetworkErrorBoundary"}},s=[{value:"store",id:"store",children:[],level:2},{value:"selector",id:"selector",children:[],level:2}],l={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Integrates external stores with ",(0,o.kt)("inlineCode",{parentName:"p"},"rest-hooks"),". Should be placed as high as possible\nin application tree as any usage of the hooks is only possible for components below the provider\nin the React tree."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Is a replacement for ",(0,o.kt)("a",{parentName:"strong",href:"/docs/next/api/CacheProvider"},"<CacheProvider /",">")," - do ",(0,o.kt)("em",{parentName:"strong"},"NOT")," use both at once")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.tsx"',title:'"index.tsx"'},"import { ExternalCacheProvider } from 'rest-hooks';\nimport ReactDOM from 'react-dom';\n\nimport { store, selector } from './store';\n\nReactDOM.render(\n  <ExternalCacheProvider store={store} selector={selector}>\n    <App />\n  </ExternalCacheProvider>,\n  document.body,\n);\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/guides/redux"},"redux example")," for a more complete example."),(0,o.kt)("h2",{id:"store"},"store"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Store<S> {\n  subscribe(listener: () => void): () => void;\n  dispatch: React.Dispatch<ActionTypes>;\n  getState(): S;\n}\n")),(0,o.kt)("p",null,"Store simply needs to conform to this interface. A common implementation is a ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/api/store"},"redux store"),",\nbut theoretically any external store could be used."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/guides/redux"},"Read more about integrating redux.")),(0,o.kt)("h2",{id:"selector"},"selector"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"(state: S) => State<unknown>\n")),(0,o.kt)("p",null,"This function is used to retrieve the ",(0,o.kt)("inlineCode",{parentName:"p"},"rest-hooks")," specific part of the store's state tree."))}u.isMDXComponent=!0}}]);
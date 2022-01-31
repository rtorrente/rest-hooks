/*! For license information please see 4b489098.748f0831.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92998],{62525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var s,i,l=a(e),c=1;c<arguments.length;c++){for(var u in s=Object(arguments[c]))r.call(s,u)&&(l[u]=s[u]);if(t){i=t(s);for(var p=0;p<i.length;p++)n.call(s,i[p])&&(l[i[p]]=s[i[p]])}}return l}},41535:(e,t,r)=>{var n=r(62525),a=60103,o=60106;var s=60109,i=60110,l=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),s=p("react.provider"),i=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}function v(){}function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var b=h.prototype=new v;b.constructor=h,n(b,y.prototype),b.isPureReactComponent=!0;var g=Array.isArray,k=Object.prototype.hasOwnProperty,w={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,o={},s=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)k.call(t,n)&&!x.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:a,type:e,key:s,ref:i,props:o,_owner:w.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var _=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return s=s(l=e),e=""===n?"."+P(l,0):n,g(s)?(r="",null!=e&&(r=e.replace(_,"$&/")+"/"),S(s,t,r,"",(function(e){return e}))):null!=s&&(O(s)&&(s=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(_,"$&/")+"/")+e)),t.push(s)),1;if(l=0,n=""===n?".":n+":",g(e))for(var c=0;c<e.length;c++){var u=n+P(i=e[c],c);l+=S(i,t,r,u,s)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),c=0;!(i=e.next()).done;)l+=S(i=i.value,t,r,u=n+P(i,c++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function C(e,t,r){if(null==e)return e;var n=[],a=0;return S(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function N(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},T={transition:0}},27378:(e,t,r)=>{r(41535)},96497:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(9877),a=r(58215),o=r(67294),s=r(87799);function i(e){let{pkgs:t,dev:r=!1}=e;return o.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},o.createElement(a.Z,{value:"yarn"},o.createElement(s.Z,{className:"language-bash"},"yarn add ",r?"--dev ":"",t)),o.createElement(a.Z,{value:"npm"},o.createElement(s.Z,{className:"language-bash"},"npm install --save",r?"Dev ":""," ",t)))}},56922:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(15814);const o={React:n,...n,...a}},82419:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>u,toc:()=>p,default:()=>f});var n=r(87462),a=(r(27378),r(3905)),o=r(9877),s=r(58215),i=r(96497);const l={id:"installation",title:"Installation"},c=void 0,u={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"TypeScript is optional, but requires at least version 3.7 for full type enforcement.",source:"@site/../docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/next/getting-started/installation",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/installation.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630902850,formattedLastUpdatedAt:"9/5/2021",frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/next/"},next:{title:"Endpoint",permalink:"/docs/next/getting-started/endpoint"}},p=[{value:"Add provider at top-level component",id:"add-provider-at-top-level-component",children:[],level:2}],d={toc:p};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{pkgs:"rest-hooks @rest-hooks/test @rest-hooks/hooks @rest-hooks/rest",mdxType:"PkgTabs"}),(0,a.kt)("p",null,"TypeScript is optional, but requires at least version ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#more-recursive-type-aliases"},"3.7")," for full type enforcement."),(0,a.kt)("h2",{id:"add-provider-at-top-level-component"},"Add provider at top-level component"),(0,a.kt)(o.Z,{defaultValue:"web",groupId:"platform",values:[{label:"React Web 16+",value:"web"},{label:"React Web 18+",value:"18-web"},{label:"React Native",value:"native"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"web",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/index.tsx"',title:'"/index.tsx"'},"import { CacheProvider } from 'rest-hooks';\nimport ReactDOM from 'react-dom';\n\nReactDOM.render(\n  <CacheProvider>\n    <App />\n  </CacheProvider>,\n  document.body,\n);\n"))),(0,a.kt)(s.Z,{value:"18-web",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/index.tsx"',title:'"/index.tsx"'},"import { CacheProvider } from 'rest-hooks';\nimport ReactDOM from 'react-dom';\n\nReactDOM.createRoot(document.body).render(\n  <CacheProvider>\n    <App />\n  </CacheProvider>,\n);\n"))),(0,a.kt)(s.Z,{value:"native",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/index.tsx"',title:'"/index.tsx"'},"import { CacheProvider } from 'rest-hooks';\nimport { AppRegistry } from 'react-native';\n\nconst Root = () => (\n  <CacheProvider>\n    <App />\n  </CacheProvider>\n);\nAppRegistry.registerComponent('MyApp', () => Root);\n")))),(0,a.kt)("p",null,"Alternatively ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/guides/redux"},"integrate state with redux")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Legacy (IE) browser support")),(0,a.kt)("p",null,"If you see ",(0,a.kt)("inlineCode",{parentName:"p"},"Uncaught TypeError: Class constructor Resource cannot be invoked without 'new'"),",\nfollow the instructions to ",(0,a.kt)("a",{parentName:"p",href:"../guides/legacy-browser"},"add legacy browser support to packages"))))}f.isMDXComponent=!0}}]);
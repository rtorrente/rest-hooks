/*! For license information please see f655e004.c980770d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64705,37103,68047,714,18961,36701,68649,901],{62525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,l,s=a(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))n.call(i,u)&&(s[u]=i[u]);if(t){l=t(i);for(var p=0;p<l.length;p++)r.call(i,l[p])&&(s[l[p]]=i[l[p]])}}return s}},41535:(e,t,n)=>{var r=n(62525),a=60103,o=60106;var i=60109,l=60110,s=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),l=p("react.context"),s=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=h.prototype;var g=b.prototype=new y;g.constructor=b,r(g,h.prototype),g.isPureReactComponent=!0;var v=Array.isArray,k=Object.prototype.hasOwnProperty,w={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,o={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,r)&&!j.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:w.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var N=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,n,r,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case a:case o:s=!0}}if(s)return i=i(s=e),e=""===r?"."+T(s,0):r,v(i)?(n="",null!=e&&(n=e.replace(N,"$&/")+"/"),x(i,t,n,"",(function(e){return e}))):null!=i&&(E(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=""===r?".":r+":",v(e))for(var c=0;c<e.length;c++){var u=r+T(l=e[c],c);s+=x(l,t,n,u,i)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),c=0;!(l=e.next()).done;)s+=x(l=l.value,t,n,u=r+T(l,c++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function D(e,t,n){if(null==e)return e;var r=[],a=0;return x(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var S={current:null},_={transition:0}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=function(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(87462),a=n(67294),o=n(72389),i=n(80944),l=n(53810),s=n(86010);const c="tabItem_1uMI";function u(e){var t,n;const{lazy:o,block:u,defaultValue:p,values:d,groupId:f,className:m}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=d??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,l.lx)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=h[0])?void 0:n.props.value);if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:k}=(0,i.Z)(),[w,j]=(0,a.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,l.o5)();if(null!=f){const e=v[f];null!=e&&e!==w&&y.some((t=>t.value===e))&&j(e)}const N=e=>{const t=e.currentTarget,n=O.indexOf(t),r=y[n].value;r!==w&&(E(t),j(r),null!=f&&k(f,r))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]||O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]||O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},m)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:T,onFocus:N,onClick:N},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":w===t})}),n??t)}))),o?(0,a.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function p(e){const t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},80944:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(79443);const o=function(){const e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},70523:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(9877),a=n(58215),o=n(67294);function i(e){let{children:t}=e;return o.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(a.Z,{value:"ts"},t[0]),o.createElement(a.Z,{value:"js"},t[1]))}},60998:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>s,toc:()=>c,default:()=>p});var r=n(87462),a=(n(27378),n(3905)),o=(n(9877),n(58215),n(70523));const i={title:"Endpoint"},l=void 0,s={unversionedId:"getting-started/endpoint",id:"getting-started/endpoint",title:"Endpoint",description:"Endpoints describe an asynchronous API. This includes both runtime behavior as well as (optionally) typing.",source:"@site/../docs/getting-started/endpoint.md",sourceDirName:"getting-started",slug:"/getting-started/endpoint",permalink:"/docs/next/getting-started/endpoint",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/endpoint.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1634747974,formattedLastUpdatedAt:"10/20/2021",frontMatter:{title:"Endpoint"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/next/getting-started/installation"},next:{title:"Data Dependencies",permalink:"/docs/next/getting-started/data-dependency"}},c=[{value:"More than just a function",id:"more-than-just-a-function",children:[{value:"Members",id:"members",children:[],level:3},{value:"Endpoint.extend()",id:"endpointextend",children:[],level:3}],level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoints")," describe an asynchronous ",(0,a.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/"},"API"),". This includes both runtime behavior as well as (optionally) typing."),(0,a.kt)(o.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Todo {\n  userId: number;\n  id: number;\n  title: string;\n  completed: boolean;\n}\ninterface Params {\n  id: number;\n}\n\nconst fetchTodoDetail = ({ id }: Params): Promise<Todo> =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>\n    res.json(),\n  );\n\n// highlight-next-line\nconst todoDetail = new Endpoint(fetchTodoDetail);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fetchTodoDetail = ({ id }) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>\n    res.json(),\n  );\n\n// highlight-next-line\nconst todoDetail = new Endpoint(fetchTodoDetail);\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Example Usage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(await todoDetail({ id: '1' }));\n")),(0,a.kt)("samp",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}\n')))),(0,a.kt)("p",null,"We will likely want to use this endpoint in many places with differing needs.\nBy defining a reusable function of ",(0,a.kt)("em",{parentName:"p"},"just")," the network definition, we empower\nits use in ",(0,a.kt)("em",{parentName:"p"},"any")," context."),(0,a.kt)("p",null,"This is especially useful when we start adding more information related to the\nendpoint. For instance, TypeScript definitions help us avoid common mistakes, typos\nand speed up development with autocomplete."),(0,a.kt)("p",null,"By ",(0,a.kt)("em",{parentName:"p"},"tightly coupling")," the interface definition, while ",(0,a.kt)("em",{parentName:"p"},"loosely coupling")," its usage,\nwe reduce boilerplate, complexity, and common mistakes, while increasing performance and\nenabling global application consistency and integrity even in the face of unreliable\nasynchronous data."),(0,a.kt)("h2",{id:"more-than-just-a-function"},"More than just a function"),(0,a.kt)("p",null,"In addition to an async function and (optional) types, ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),"s are objects,\nallowing them to provide any additional relevant information about the endpoint itself."),(0,a.kt)("p",null,"For instance, to allow integration into a cache as well as knowing when to recompute and/or refetch\nwhen parameters change, Endpoints have a ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#key-params--string"},"key()")," member that serializes\nthe endpoint and parameters to a unique string."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'console.log(todoDetail.key({ id: \'1\' }));\n// fetchTodoDetail {"id":"1"}\n')),(0,a.kt)("h3",{id:"members"},"Members"),(0,a.kt)("p",null,"The second optional arg is an object to initialize the endpoint with. By avoiding arrow functions,\nwe can use ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"},"this"),"\nto access other members we defined."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const todoDetailWithCustomizedKey = new Endpoint(fetchTodoDetail, {\n  key({ id }) {\n    return `${this.endpointIdentifier}/${id}`;\n  },\n  endpointIdentifier: 'todoDetail',\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(todoDetailWithCustomizedKey.key({ id: '1' }));\n// todoDetail/1\n")),(0,a.kt)("h3",{id:"endpointextend"},"Endpoint.extend()"),(0,a.kt)("p",null,"For convenience, ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/Endpoint#extend"},"extend()")," allows type-correct\nprototypical inheritance extensions of an endpoint."),(0,a.kt)("p",null,"This is greatly reduces boilerplate when strong patterns are established for an API like\nauthentication."),(0,a.kt)("p",null,"Here we show the benefits of customizing ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"},"method")," member."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fetchTodoDetail = function ({ id }) {\n  return fetch(`${this.urlBase}/todos/${id}`, { method: this.method }).then(\n    res => res.json(),\n  );\n};\n\nconst todoDetail = new Endpoint(fetchTodoDetail, {\n  method: 'GET',\n  urlBase: 'https://jsonplaceholder.typicode.com',\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const todoCreate = todoDetail.extend({ method: 'POST' });\nconst todoUpdate = todoDetail.extend({ method: 'PUT' });\n")))}p.isMDXComponent=!0}}]);
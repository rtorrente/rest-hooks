/*! For license information please see 0ded2a28.aa75eeb2.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98722,74907,37103,68047,714,18961,36701,68649,901],{62525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,l){for(var o,i,s=a(e),c=1;c<arguments.length;c++){for(var u in o=Object(arguments[c]))n.call(o,u)&&(s[u]=o[u]);if(t){i=t(o);for(var p=0;p<i.length;p++)r.call(o,i[p])&&(s[i[p]]=o[i[p]])}}return s}},41535:(e,t,n)=>{var r=n(62525),a=60103,l=60106;var o=60109,i=60110,s=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),l=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),o=p("react.provider"),i=p("react.context"),s=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}function v(){}function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var b=y.prototype=new v;b.constructor=y,r(b,h.prototype),b.isPureReactComponent=!0;var g=Array.isArray,k=Object.prototype.hasOwnProperty,E={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var r,l={},o=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)k.call(t,r)&&!w.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(1===s)l.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];l.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===l[r]&&(l[r]=s[r]);return{$$typeof:a,type:e,key:o,ref:i,props:l,_owner:E.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var N=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,n,r,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case a:case l:s=!0}}if(s)return o=o(s=e),e=""===r?"."+j(s,0):r,g(o)?(n="",null!=e&&(n=e.replace(N,"$&/")+"/"),O(o,t,n,"",(function(e){return e}))):null!=o&&(x(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(N,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=""===r?".":r+":",g(e))for(var c=0;c<e.length;c++){var u=r+j(i=e[c],c);s+=O(i,t,n,u,o)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),c=0;!(i=e.next()).done;)s+=O(i=i.value,t,n,u=r+j(i,c++),o);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Z(e,t,n){if(null==e)return e;var r=[],a=0;return O(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function C(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},_={transition:0}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=function(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(87462),a=n(67294),l=n(72389),o=n(80944),i=n(53810),s=n(86010);const c="tabItem_1uMI";function u(e){var t,n;const{lazy:l,block:u,defaultValue:p,values:d,groupId:f,className:m}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,i.lx)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===p?p:p??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=h[0])?void 0:n.props.value);if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,o.Z)(),[E,w]=(0,a.useState)(b),S=[],{blockElementScrollPositionUntilNextRender:x}=(0,i.o5)();if(null!=f){const e=g[f];null!=e&&e!==E&&v.some((t=>t.value===e))&&w(e)}const N=e=>{const t=e.currentTarget,n=S.indexOf(t),r=v[n].value;r!==E&&(x(t),w(r),null!=f&&k(f,r))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;n=S[t]||S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;n=S[t]||S[S.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},m)},v.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>S.push(e),onKeyDown:j,onFocus:N,onClick:N},l,{className:(0,s.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":E===t})}),n??t)}))),l?(0,a.cloneElement)(h.filter((e=>e.props.value===E))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function p(e){const t=(0,l.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},80944:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(79443);const l=function(){const e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},87799:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(87462),a=n(67294),l=n(50776),o=n(86010),i=n(95999),s=n(52263),c=n(91262),u=n(83229);const p="playgroundContainer_1KVM",d="playgroundHeader_2QE7",f="playgroundEditor_PkRz",m="playgroundPreview_1s6C";var h=n(72389);function v(e){let{children:t}=e;return a.createElement("div",{className:(0,o.Z)(d)},t)}function y(){return a.createElement("div",null,"Loading...")}function b(){return a.createElement(a.Fragment,null,a.createElement(v,null,a.createElement(i.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",{className:m},a.createElement(c.Z,{fallback:a.createElement(y,null)},(()=>a.createElement(a.Fragment,null,a.createElement(l.i5,null),a.createElement(l.IF,null))))))}function g(){const e=(0,h.Z)();return a.createElement(l.uz,{key:e,className:f})}function k(){return a.createElement(a.Fragment,null,a.createElement(v,null,a.createElement(i.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),a.createElement(g,null))}function E(e){let{children:t,transformCode:n,...o}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:i}}}}=(0,s.Z)(),c=(0,u.Z)();return a.createElement("div",{className:p},a.createElement(l.nu,(0,r.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>`${e};`),theme:c},o),"top"===i?a.createElement(a.Fragment,null,a.createElement(b,null),a.createElement(k,null)):a.createElement(a.Fragment,null,a.createElement(k,null),a.createElement(b,null))))}var w=n(56922),S=n(23746);var x=n(53810);const N="codeBlockContainer_K1bP",j="codeBlockContent_hGly",O="codeBlockTitle_eoMF",Z="codeBlock_23N8",C="copyButton_Ue-o",T="codeBlockLines_39YC";const _=(P=function(e){let{children:t,className:n,metastring:l,title:s}=e;const{prism:c}=(0,x.LU)(),[p,d]=(0,a.useState)(!1),[f,m]=(0,a.useState)(!1);(0,a.useEffect)((()=>{m(!0)}),[]);const h=(0,x.bc)(l)||s,v=(0,u.Z)(),y=Array.isArray(t)?t.join(""):t,b=(0,x.Vo)(n)??c.defaultLanguage,{highlightLines:g,code:k}=(0,x.nZ)(y,l,b),E=()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const r=document.createElement("textarea"),a=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const l=document.getSelection();let o=!1;l.rangeCount>0&&(o=l.getRangeAt(0)),n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}r.remove(),o&&(l.removeAllRanges(),l.addRange(o)),a&&a.focus()}(k),d(!0),setTimeout((()=>d(!1)),2e3)};return a.createElement(S.ZP,(0,r.Z)({},S.lG,{key:String(f),theme:v,code:k,language:b}),(e=>{let{className:t,style:l,tokens:s,getLineProps:c,getTokenProps:u}=e;return a.createElement("div",{className:(0,o.Z)(N,n,x.kM.common.codeBlock)},h&&a.createElement("div",{style:l,className:O},h),a.createElement("div",{className:(0,o.Z)(j,b)},a.createElement("pre",{tabIndex:0,className:(0,o.Z)(t,Z,"thin-scrollbar"),style:l},a.createElement("code",{className:T},s.map(((e,t)=>{1===e.length&&"\n"===e[0].content&&(e[0].content="");const n=c({line:e,key:t});return g.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,r.Z)({key:t},n),e.map(((e,t)=>a.createElement("span",(0,r.Z)({key:t},u({token:e,key:t}))))),a.createElement("br",null))})))),a.createElement("button",{type:"button","aria-label":(0,i.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,o.Z)(C,"clean-btn"),onClick:E},p?a.createElement(i.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(i.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))},function(e){return e.live?a.createElement(E,(0,r.Z)({scope:w.Z},e)):a.createElement(P,e)});var P},11048:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(9877),a=n(58215),l=n(67294);function o(e){let{children:t}=e;return l.createElement(r.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},l.createElement(a.Z,{value:"simple"},t[0]),l.createElement(a.Z,{value:"generics"},t[1]))}},70523:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(9877),a=n(58215),l=n(67294);function o(e){let{children:t}=e;return l.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(a.Z,{value:"ts"},t[0]),l.createElement(a.Z,{value:"js"},t[1]))}},56922:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(15814);const l={React:r,...r,...a}},50975:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(27378),n(3905));n(70523),n(9877),n(58215);var l=n(87799),o=n(11048);const i={title:"Snapshot"},s=void 0,c={unversionedId:"api/Snapshot",id:"api/Snapshot",title:"Snapshot",description:"Snapshot - Safe data access for Rest Hooks",source:"@site/../docs/api/Snapshot.md",sourceDirName:"api",slug:"/api/Snapshot",permalink:"/docs/next/api/Snapshot",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Snapshot.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1643609655,formattedLastUpdatedAt:"1/31/2022",frontMatter:{title:"Snapshot"},sidebar:"docs",previous:{title:"Controller",permalink:"/docs/next/api/Controller"},next:{title:"useSuspense()",permalink:"/docs/next/api/useSuspense"}},u=[{value:"getResponse(endpoint, ...args)",id:"getResponse",children:[{value:"data",id:"data",children:[],level:3},{value:"expiryStatus",id:"expirystatus",children:[{value:"Valid",id:"valid",children:[],level:4},{value:"InvalidIfStale",id:"invalidifstale",children:[],level:4},{value:"Invalid",id:"invalid",children:[],level:4}],level:3},{value:"expiresAt",id:"expiresat",children:[],level:3}],level:2},{value:"getError(endpoint, ...args)",id:"getError",children:[],level:2},{value:"fetchedAt",id:"fetchedat",children:[],level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Snapshot - Safe data access for Rest Hooks")),(0,a.kt)(o.Z,{mdxType:"GenericsTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Snapshot {\n  getResponse(endpoint, ...args)\u200b => { data, expiryStatus, expiresAt };\n  getError(endpoint, ...args)\u200b => ErrorTypes | undefined;\n  fetchedAt: number;\n}\n")),(0,a.kt)(l.Z,{className:"language-typescript",mdxType:"CodeBlock"},"import type { DenormalizeNullable } from '@rest-hooks/endpoint/normal';\nimport type { EndpointInterface } from '@rest-hooks/endpoint/interface';\nimport type { ExpiryStatus } from '@rest-hooks/endpoint/Expiry';\nimport type { ErrorTypes } from '@rest-hooks/endpoint/ErrorTypes';\n\nexport default interface SnapshotInterface {\n  getResponse: <\n    E extends Pick<EndpointInterface, 'key' | 'schema' | 'invalidIfStale'>,\n  >(\n    endpoint: E,\n    ...args: readonly [...Parameters<E['key']>] | readonly [null]\n  ) => {\n    data: DenormalizeNullable<E['schema']>;\n    expiryStatus: ExpiryStatus;\n    expiresAt: number;\n  };\n\n  getError: <E extends Pick<EndpointInterface, 'key'>>(\n    endpoint: E,\n    ...args: readonly [...Parameters<E['key']>] | readonly [null]\n  ) => ErrorTypes | undefined;\n\n  readonly fetchedAt: number;\n}\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Use ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/Controller#snapshot"},"Controller.snapshot()")," to construct a snapshot"))),(0,a.kt)("p",null,"Snapshots passed to user-defined function that are used to compute state updates. These\nallow safe and performant access to the denormalized data based on the current state."),(0,a.kt)("h2",{id:"getResponse"},"getResponse(endpoint, ...args)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="returns"',title:'"returns"'},"{\n  data: DenormalizeNullable<E['schema']>;\n  expiryStatus: ExpiryStatus;\n  expiresAt: number;\n}\n")),(0,a.kt)("p",null,"Gets the (globally referentially stable) response for a given endpoint/args pair from state given."),(0,a.kt)("h3",{id:"data"},"data"),(0,a.kt)("p",null,"The denormalize response data. Guarantees global referential stability for all members."),(0,a.kt)("h3",{id:"expirystatus"},"expiryStatus"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export enum ExpiryStatus {\n  Invalid = 1,\n  InvalidIfStale,\n  Valid,\n}\n")),(0,a.kt)("h4",{id:"valid"},"Valid"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Will never suspend."),(0,a.kt)("li",{parentName:"ul"},"Might fetch if data is stale")),(0,a.kt)("h4",{id:"invalidifstale"},"InvalidIfStale"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Will suspend if data is stale."),(0,a.kt)("li",{parentName:"ul"},"Might fetch if data is stale")),(0,a.kt)("h4",{id:"invalid"},"Invalid"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Will always suspend"),(0,a.kt)("li",{parentName:"ul"},"Will always fetch")),(0,a.kt)("h3",{id:"expiresat"},"expiresAt"),(0,a.kt)("p",null,"A number representing time when it expires. Compare to Date.now()."),(0,a.kt)("h2",{id:"getError"},"getError(endpoint, ...args)"),(0,a.kt)("p",null,"Gets the error, if any, for a given endpoint. Returns undefined for no errors."),(0,a.kt)("h2",{id:"fetchedat"},"fetchedAt"),(0,a.kt)("p",null,"When the fetch was called that resulted in this snapshot."))}d.isMDXComponent=!0}}]);
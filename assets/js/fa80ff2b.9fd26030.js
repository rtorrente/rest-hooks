"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);const o=function(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(87462),o=n(67294),s=n(72389),a=n(80944),i=n(53810),l=n(86010);const u="tabItem_1uMI";function c(e){var t,n;const{lazy:s,block:c,defaultValue:p,values:d,groupId:m,className:b}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),h=(0,i.lx)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=f[0])?void 0:n.props.value);if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:g}=(0,a.Z)(),[E,w]=(0,o.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:O}=(0,i.o5)();if(null!=m){const e=k[m];null!=e&&e!==E&&v.some((t=>t.value===e))&&w(e)}const P=e=>{const t=e.currentTarget,n=N.indexOf(t),r=v[n].value;r!==E&&(O(t),w(r),null!=m&&g(m,r))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]||N[N.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},b)},v.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>N.push(e),onKeyDown:S,onFocus:P,onClick:P},s,{className:(0,l.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":E===t})}),n??t)}))),s?(0,o.cloneElement)(f.filter((e=>e.props.value===E))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function p(e){const t=(0,s.Z)();return o.createElement(c,(0,r.Z)({key:String(t)},e))}},80944:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),o=n(79443);const s=function(){const e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},11048:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(9877),o=n(58215),s=n(67294);function a(e){let{children:t}=e;return s.createElement(r.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},s.createElement(o.Z,{value:"simple"},t[0]),s.createElement(o.Z,{value:"generics"},t[1]))}},57462:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>l,toc:()=>u,default:()=>p});var r=n(87462),o=(n(67294),n(3905)),s=n(11048);const a={title:"useSubscription()"},i=void 0,l={unversionedId:"api/useSubscription",id:"version-6.0/api/useSubscription",title:"useSubscription()",description:"Great for keeping resources up-to-date with frequent changes.",source:"@site/versioned_docs/version-6.0/api/useSubscription.md",sourceDirName:"api",slug:"/api/useSubscription",permalink:"/docs/6.0/api/useSubscription",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useSubscription.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"9/14/2021",frontMatter:{title:"useSubscription()"},sidebar:"version-6.0/docs",previous:{title:"useCache()",permalink:"/docs/6.0/api/useCache"},next:{title:"useRetrieve()",permalink:"/docs/6.0/api/useRetrieve"}},u=[{value:"Example",id:"example",children:[],level:2},{value:"Only subscribe while element is visible",id:"only-subscribe-while-element-is-visible",children:[],level:2},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",children:[],level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{mdxType:"GenericsTabs"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSubscription(\n  endpoint: ReadEndpoint,\n  params: object | null,\n): void;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSubscription<\n  Params extends Readonly<object>,\n  S extends Schema\n>(\n  endpoint: ReadEndpoint<(p:Params) => Promise<any>, S>,\n  params: Params | null,\n): void;\n"))),(0,o.kt)("p",null,"Great for keeping resources up-to-date with frequent changes."),(0,o.kt)("p",null,"When using the default ",(0,o.kt)("a",{parentName:"p",href:"./PollingSubscription"},"polling subscriptions"),", frequency must be set in\n",(0,o.kt)("a",{parentName:"p",href:"/docs/6.0/api/Endpoint"},"Endpoint"),", otherwise will have no effect."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Send ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," to params to unsubscribe.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PriceResource.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\nimport { EndpointExtraOptions } from '@rest-hooks/endpoint';\n\nexport default class PriceResource extends Resource {\n  readonly symbol: string | undefined = undefined;\n  readonly price: string = '0.0';\n  // ...\n\n  pk() {\n    return this.symbol;\n  }\n  static urlRoot = 'http://test.com/price/';\n\n  /** Used as default options for every Endpoint */\n  static getEndpointExtra(): EndpointExtraOptions {\n    return {\n      pollFrequency: 5000, // every 5 seconds\n    };\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MasterPrice.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource, useSubscription } from 'rest-hooks';\nimport PriceResource from 'resources/PriceResource';\n\nfunction MasterPrice({ symbol }: { symbol: string }) {\n  const price = useResource(PriceResource.detail(), { symbol });\n  useSubscription(PriceResource.detail(), { symbol });\n  // ...\n}\n")),(0,o.kt)("h2",{id:"only-subscribe-while-element-is-visible"},"Only subscribe while element is visible"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MasterPrice.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRef } from 'react';\nimport { useResource, useSubscription } from 'rest-hooks';\nimport PriceResource from 'resources/PriceResource';\n\nfunction MasterPrice({ symbol }: { symbol: string }) {\n  const price = useResource(PriceResource.detail(), { symbol });\n  const ref = useRef();\n  const onScreen = useOnScreen(ref);\n  // null params means don't subscribe\n  useSubscription(PriceResource.detail(), onScreen ? null : { symbol });\n\n  return (\n    <div ref={ref}>{price.value.toLocaleString('en', { currency: 'USD' })}</div>\n  );\n}\n")),(0,o.kt)("p",null,"Using the last argument ",(0,o.kt)("inlineCode",{parentName:"p"},"active")," we control whether the subscription is active or not\nbased on whether the element rendered is ",(0,o.kt)("a",{parentName:"p",href:"https://usehooks.com/useOnScreen/"},"visible on screen"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://usehooks.com/useOnScreen/"},"useOnScreen()")," uses ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"},"IntersectionObserver"),", which is very performant."),(0,o.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,o.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/6.0/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"detail()"),(0,o.kt)("li",{parentName:"ul"},"list()")),(0,o.kt)("p",null,"Be sure to extend these ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.0/api/Endpoint"},"Endpoint"),"s with a pollFrequency to set\nthe polling-rate."))}p.isMDXComponent=!0}}]);
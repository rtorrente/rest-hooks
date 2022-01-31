"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54570],{70523:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(9877),i=n(58215),r=n(67294);function s(e){let{children:t}=e;return r.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},r.createElement(i.Z,{value:"ts"},t[0]),r.createElement(i.Z,{value:"js"},t[1]))}},64820:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>o,toc:()=>p,default:()=>u});var a=n(87462),i=(n(27378),n(3905)),r=n(70523);const s={id:"resource",title:"Resource"},l=void 0,o={unversionedId:"api/resource",id:"api/resource",title:"Resource",description:"Resource is an Entity with multiple Endpoints that operate on the data. All additional members are provided to make CRUD or other REST-like API definitions easy and terse.",source:"@site/../docs/api/Resource.md",sourceDirName:"api",slug:"/api/resource",permalink:"/docs/next/api/resource",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Resource.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1642979014,formattedLastUpdatedAt:"1/23/2022",frontMatter:{id:"resource",title:"Resource"},sidebar:"docs",previous:{title:"SimpleRecord",permalink:"/docs/next/api/SimpleRecord"},next:{title:"<MockResolver />",permalink:"/docs/next/api/MockResolver"}},p=[{value:"Static",id:"static",children:[],level:3},{value:"Instance",id:"instance",children:[],level:3},{value:"Factory method",id:"factory-method",children:[{value:"fromJS(props): Resource",id:"fromJS",children:[],level:3}],level:2},{value:"Be sure to always provide:",id:"be-sure-to-always-provide",children:[{value:"pk: (parent, key) =&gt; string",id:"pk",children:[{value:"Multi-column primary key:",id:"multi-column-primary-key",children:[],level:4},{value:"undefined value",id:"undefined-value",children:[],level:4},{value:"Other uses",id:"other-uses",children:[],level:4},{value:"Singleton Resources",id:"singleton-resources",children:[],level:4}],level:3},{value:"static urlRoot: string",id:"urlRoot",children:[],level:3},{value:"static get key(): string",id:"key",children:[],level:3}],level:2},{value:"Static network methods and properties",id:"static-network-methods-and-properties",children:[{value:"static url(urlParams) =&gt; string",id:"url",children:[],level:3},{value:"static listUrl(searchParams) =&gt; string",id:"listUrl",children:[],level:3},{value:"static fetch(requestInfo, requestInit) =&gt; Promise",id:"fetch",children:[],level:3},{value:"static fetchResponse(requestInfo, requestInit) =&gt; Promise",id:"fetchResponse",children:[],level:3},{value:"static useFetchInit(init: RequestInit): RequestInit",id:"useFetchInit",children:[],level:3},{value:"static getFetchInit(init: RequestInit): RequestInit",id:"getFetchInit",children:[],level:3},{value:"static getEndpointExtra() =&gt; EndpointExtraOptions | undefined",id:"getEndpointExtra",children:[],level:3}],level:2},{value:"Endpoints",id:"endpoints",children:[{value:"detail(): Endpoint",id:"detail",children:[{value:"Implementation:",id:"implementation",children:[],level:4}],level:3},{value:"list(): Endpoint",id:"list",children:[{value:"Implementation:",id:"implementation-1",children:[],level:4}],level:3},{value:"create(): Endpoint",id:"create",children:[{value:"Implementation:",id:"implementation-2",children:[],level:4}],level:3},{value:"update(): Endpoint",id:"update",children:[{value:"Implementation:",id:"implementation-3",children:[],level:4}],level:3},{value:"partialUpdate(): Endpoint",id:"partialUpdate",children:[{value:"Implementation:",id:"implementation-4",children:[],level:4}],level:3},{value:"delete(): Endpoint",id:"delete",children:[{value:"Implementation:",id:"implementation-5",children:[],level:4}],level:3}],level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Resource")," is an ",(0,i.kt)("a",{parentName:"p",href:"./Entity"},"Entity")," with multiple ",(0,i.kt)("a",{parentName:"p",href:"./Endpoint"},"Endpoint"),"s that operate on the data. All additional members are provided to make CRUD or other REST-like API definitions easy and terse."),(0,i.kt)("p",null,"For other patterns, feel free to use ",(0,i.kt)("a",{parentName:"p",href:"./Endpoint"},"Endpoint"),"s on their own or in any other way you see fit."),(0,i.kt)(r.Z,{mdxType:"LanguageTabs"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n\n  pk() {\n    return this.id;\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Resource")," extends ",(0,i.kt)("a",{parentName:"p",href:"./Entity"},"Entity")),(0,i.kt)("p",null,"Package: ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/rest"},"@rest-hooks/rest")),(0,i.kt)("p",null,"There are two sides to ",(0,i.kt)("inlineCode",{parentName:"p"},"Resource")," definition - the static and instance side."),(0,i.kt)("h3",{id:"static"},"Static"),(0,i.kt)("p",null,"Is used to define how you retrieve and mutate data across the network. There are several\nstatic methods that do this, but their ultimate purpose is to build ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/Endpoint"},"Endpoint"),"s, which\ntell the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/useSuspense"},"hooks")," how to process requests. Endpoints are provided for the\ncommon ",(0,i.kt)("inlineCode",{parentName:"p"},"REST")," request types. However, it is encouraged to build your own or override the\nprovided ones to fit the needs of your API."),(0,i.kt)("p",null,"Resource extends from ",(0,i.kt)("a",{parentName:"p",href:"./Entity"},"Entity"),", which includes many static methods defining how to process\nnetwork data to ensure performance and consistency. ",(0,i.kt)("a",{parentName:"p",href:"../guides/network-transform#deserializing-fields"},"Deserilization"),"\nfor instance can be done using the ",(0,i.kt)("a",{parentName:"p",href:"./Entity#schema"},"static schema"),"."),(0,i.kt)("h3",{id:"instance"},"Instance"),(0,i.kt)("p",null,"Instances are mostly for you to define how you want to interact with your data. This means\nyou should start off by defining the fields you expect to see, and provide defaults in case\nthey are not sent for some reason. ",(0,i.kt)("inlineCode",{parentName:"p"},"Resource")," also requires that you define a method to\nget an entity's (entity is an instance of a Resource) unique identifier. (This is used for\nbook-keeping the normalized cache.) Make sure to mark all members as readonly as all the data members\nare immutable (this library enforces that)!"),(0,i.kt)("p",null,"You are encouraged to add your own member methods. Often times it is useful to provide\nmethods for computed values that are commonly used in your React components."),(0,i.kt)("p",null,"A final note: ",(0,i.kt)("inlineCode",{parentName:"p"},"Resource")," provides a factory method called ",(0,i.kt)("inlineCode",{parentName:"p"},"fromJS()")," that will be used\nto construct instances. This is the only supported way of created ",(0,i.kt)("inlineCode",{parentName:"p"},"Resource"),"s so please\ndon't use constructors."),(0,i.kt)("h2",{id:"factory-method"},"Factory method"),(0,i.kt)("h3",{id:"fromJS"},"fromJS(props): Resource"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"static fromJS<T extends typeof SimpleRecord>(this: T, props: Partial<AbstractInstanceType<T>>): AbstractInstanceType<T>\n")),(0,i.kt)("p",null,"Factory method called during denormalization. Use this instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"new MyEntity()")),(0,i.kt)("h2",{id:"be-sure-to-always-provide"},"Be sure to always provide:"),(0,i.kt)("h3",{id:"pk"},"pk: (parent, key) => string"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Inherited from ",(0,i.kt)("a",{parentName:"p",href:"./Entity"},"Entity"))),(0,i.kt)("p",null,"PK stands for ",(0,i.kt)("em",{parentName:"p"},"primary key")," and is intended to provide a standard means of retrieving\na key identifier for any ",(0,i.kt)("inlineCode",{parentName:"p"},"Resource"),". In many cases there will simply be an 'id' field\nmember to return. In case of multicolumn you can simply join them together."),(0,i.kt)("h4",{id:"multi-column-primary-key"},"Multi-column primary key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"pk(parent?: any, key?: string) {\n  return [this.firstCol, this.secondCol, this.thirdCol].join(',');\n}\n")),(0,i.kt)("h4",{id:"undefined-value"},"undefined value"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," can be used as a default to indicate the resource has not been created yet.\nThis is useful when initializing a creation form using ",(0,i.kt)("a",{parentName:"p",href:"#fromJS"},"Resource.fromJS()"),"\ndirectly. If ",(0,i.kt)("inlineCode",{parentName:"p"},"pk()")," resolves to null it is considered not persisted to the server,\nand thus will not be kept in the cache. sdf sdfsd"),(0,i.kt)("h4",{id:"other-uses"},"Other uses"),(0,i.kt)("p",null,"While the ",(0,i.kt)("inlineCode",{parentName:"p"},"pk()")," definition is key (pun intended) for making the normalized cache work;\nit also becomes quite convenient for sending to a react element when iterating on\nlist results:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"//....\nreturn (\n  <div>\n    {results.map(result => (\n      <TheThing key={result.pk()} thing={result} />\n    ))}\n  </div>\n);\n")),(0,i.kt)("h4",{id:"singleton-resources"},"Singleton Resources"),(0,i.kt)("p",null,"What if there is only ever once instance of a Resource for your entire application? You\ndon't really need to distinguish between each instance, so likely there was no ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," or\nsimilar field defined in the API. In these cases you can just return a literal like\n'the_only_one'."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"pk() {\n  return 'the_only_one';\n}\n")),(0,i.kt)("h3",{id:"urlRoot"},"static urlRoot: string"),(0,i.kt)("p",null,"Used to build url patterns in ",(0,i.kt)("inlineCode",{parentName:"p"},"url()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"listUrl()"),". Used as the default in\n",(0,i.kt)("a",{parentName:"p",href:"#static-get-key-string"},"key")," so typically you'll want this to be globally unique per Resource."),(0,i.kt)("h3",{id:"key"},"static get key(): string"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Inherited from ",(0,i.kt)("a",{parentName:"p",href:"./Entity"},"Entity"))),(0,i.kt)("p",null,"This defines the key for the Resource itself, rather than an instance. As seen below, by default it\nsimply returns the urlRoot since this is typically globally unique. However if you want to share\nurlRoot across different Resources, be sure to override this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"/** Returns the globally unique identifier for this Resource */\nstatic get key(): string {\n  return this.urlRoot;\n}\n")),(0,i.kt)("h2",{id:"static-network-methods-and-properties"},"Static network methods and properties"),(0,i.kt)("p",null,"These are the basic building blocks used to compile the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/Endpoint"},"Endpoint")," below."),(0,i.kt)("h3",{id:"url"},"static url(urlParams) => string"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"static url<T extends typeof Resource>(urlParams: Partial<AbstractInstanceType<T>>) => string\n")),(0,i.kt)("p",null,"Computes the url based on the parameters. Default implementation follows ",(0,i.kt)("inlineCode",{parentName:"p"},"/urlRoot/[pk]")," pattern."),(0,i.kt)("p",null,"Used in ",(0,i.kt)("a",{parentName:"p",href:"#detail"},"detail()"),", ",(0,i.kt)("a",{parentName:"p",href:"#update"},"update()"),",\n",(0,i.kt)("a",{parentName:"p",href:"#partialUpdate"},"partialUpdate()"),", and ",(0,i.kt)("a",{parentName:"p",href:"#delete"},"delete()")),(0,i.kt)("h3",{id:"listUrl"},"static listUrl(searchParams) => string"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"static listUrl(searchParams: Readonly<Record<string, string>>) => string\n")),(0,i.kt)("p",null,"Computes url for retrieving list items. Defaults to urlRoot with ",(0,i.kt)("inlineCode",{parentName:"p"},"searchParams")," being sent as GET\nparameters."),(0,i.kt)("p",null,"Used in ",(0,i.kt)("a",{parentName:"p",href:"#list"},"list()")," and ",(0,i.kt)("a",{parentName:"p",href:"#create"},"create()")),(0,i.kt)("h3",{id:"fetch"},"static fetch(requestInfo, requestInit) => Promise"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"static fetch(info: RequestInfo, init: RequestInit) => Promise<any>\n")),(0,i.kt)("p",null,"Performs the actual network fetch returning a promise that resolves to the network response or rejects\non network error. This can be useful to override to really customize your transport."),(0,i.kt)("h3",{id:"fetchResponse"},"static fetchResponse(requestInfo, requestInit) => Promise"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"static fetchResponse(info: RequestInfo, init: RequestInit) => Promise<any>\n")),(0,i.kt)("p",null,"Used in ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch()"),". Resolves the HTTP ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Response"},"Response"),"."),(0,i.kt)("h3",{id:"useFetchInit"},"static useFetchInit(init: RequestInit): RequestInit"),(0,i.kt)("p",null,"Allows simple overrides to extend ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"RequestInit")," sent to fetch.\nThis is called in endpoint methods (",(0,i.kt)("a",{parentName:"p",href:"#list"},"list()"),", ",(0,i.kt)("a",{parentName:"p",href:"#detail"},"detail()"),"), which allows for hooks that\nuse React context."),(0,i.kt)("p",null,"This is often useful for ",(0,i.kt)("a",{parentName:"p",href:"../guides/auth"},"authentication")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Using this means all endpoint calls must only occur during a function render."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"function CreatePost() {\n  const { fetch } = useController();\n  // PostResource.create() calls useFetchInit()\n  //highlight-next-line\n  const createPost = PostResource.create();\n\n  return (\n    <form\n      onSubmit={e => fetch(createPost, {}, new FormData(e.target))}\n    >\n      {/* ... */}\n    </form>\n  );\n}\n")),(0,i.kt)("p",{parentName:"div"},"It may be helpful to prefix with 'use' so the react hooks linter detects these cases."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class PostResource extends Resource {\n  static useCreate<T extends typeof Resource>(this: T) {\n    return this.create();\n  }\n}\n")))),(0,i.kt)("h3",{id:"getFetchInit"},"static getFetchInit(init: RequestInit): RequestInit"),(0,i.kt)("p",null,"Allows simple overrides to extend ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"RequestInit")," sent to fetch.\nThis is called during the fetch callback. Don't use hooks here."),(0,i.kt)("p",null,"This is often useful for ",(0,i.kt)("a",{parentName:"p",href:"../guides/auth"},"authentication")),(0,i.kt)("h3",{id:"getEndpointExtra"},"static getEndpointExtra() => EndpointExtraOptions | undefined"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/Endpoint#dataexpirylength-number"},"Returns")," the default request options for this resource. By default this returns undefined"),(0,i.kt)("h2",{id:"endpoints"},"Endpoints"),(0,i.kt)("p",null,"These provide the standard ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"},"CRUD"),"\n",(0,i.kt)("a",{parentName:"p",href:"../api/Endpoint"},"endpoints"),"s common in ",(0,i.kt)("a",{parentName:"p",href:"https://www.restapitutorial.com/"},"REST")," APIs. Feel free to customize or add\nnew endpoints based to match your API."),(0,i.kt)("h3",{id:"detail"},"detail(): Endpoint"),(0,i.kt)("p",null,"A GET request using standard ",(0,i.kt)("inlineCode",{parentName:"p"},"url()")," that receives a detail body.\nMostly useful with ",(0,i.kt)("a",{parentName:"p",href:"../api/useSuspense"},"useSuspense")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Uses ",(0,i.kt)("a",{parentName:"li",href:"#url"},"url()")),(0,i.kt)("li",{parentName:"ul"},"Compatible with all hooks")),(0,i.kt)("h4",{id:"implementation"},"Implementation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"static detail<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#detail', () =>\n    this.endpoint().extend({\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n    }),\n  );\n}\n")),(0,i.kt)("h3",{id:"list"},"list(): Endpoint"),(0,i.kt)("p",null,"A GET request using ",(0,i.kt)("inlineCode",{parentName:"p"},"listUrl()")," that receives a list of entities.\nMostly useful with ",(0,i.kt)("a",{parentName:"p",href:"../api/useSuspense"},"useSuspense")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Uses ",(0,i.kt)("a",{parentName:"li",href:"#listUrl"},"listUrl()")),(0,i.kt)("li",{parentName:"ul"},"Compatible with all hooks")),(0,i.kt)("h4",{id:"implementation-1"},"Implementation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"static list<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#list', () =>\n    this.endpoint().extend({\n      schema: [this] as SchemaList<Readonly<AbstractInstanceType<T>>>,\n      url: this.listUrl.bind(this),\n    }),\n  );\n}\n")),(0,i.kt)("h3",{id:"create"},"create(): Endpoint"),(0,i.kt)("p",null,"A POST request sending a payload to ",(0,i.kt)("inlineCode",{parentName:"p"},"listUrl()")," with empty params, and expecting a detail body response.\nMostly useful with ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/Controller#fetch"},"Controller.fetch")),(0,i.kt)("p",null,"Uses ",(0,i.kt)("a",{parentName:"p",href:"#listUrl"},"listUrl()")),(0,i.kt)("p",null,"Not compatible with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/useSuspense"},"useSuspense()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/useFetch"},"useFetch()"))),(0,i.kt)("h4",{id:"implementation-2"},"Implementation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"static create<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#create', () =>\n    this.endpointMutate().extend({\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n      url: this.listUrl.bind(this),\n    }),\n  );\n}\n")),(0,i.kt)("h3",{id:"update"},"update(): Endpoint"),(0,i.kt)("p",null,"A PUT request sending a payload to a ",(0,i.kt)("inlineCode",{parentName:"p"},"url()")," expecting a detail body response.\nMostly useful with ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/Controller#fetch"},"Controller.fetch")),(0,i.kt)("p",null,"Uses ",(0,i.kt)("a",{parentName:"p",href:"#url"},"url()")),(0,i.kt)("p",null,"Not compatible with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/useSuspense"},"useSuspense()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/useFetch"},"useFetch()"))),(0,i.kt)("h4",{id:"implementation-3"},"Implementation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"static update<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#update', () =>\n    this.endpointMutate().extend({\n      method: 'PUT',\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n    }),\n  );\n}\n")),(0,i.kt)("h3",{id:"partialUpdate"},"partialUpdate(): Endpoint"),(0,i.kt)("p",null,"A PATCH request sending a partial payload to ",(0,i.kt)("inlineCode",{parentName:"p"},"url()")," expecting a detail body response.\nMostly useful with ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/Controller#fetch"},"Controller.fetch")),(0,i.kt)("p",null,"Uses ",(0,i.kt)("a",{parentName:"p",href:"#url"},"url()")),(0,i.kt)("p",null,"Not compatible with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/useSuspense"},"useSuspense()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/useFetch"},"useFetch()"))),(0,i.kt)("h4",{id:"implementation-4"},"Implementation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"static partialUpdate<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#partialUpdate', () =>\n    this.endpointMutate().extend({\n      method: 'PATCH',\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n    }),\n  );\n}\n")),(0,i.kt)("h3",{id:"delete"},"delete(): Endpoint"),(0,i.kt)("p",null,"A DELETE request sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"url()"),"\nMostly useful with ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/Controller#fetch"},"Controller.fetch")),(0,i.kt)("p",null,"Uses ",(0,i.kt)("a",{parentName:"p",href:"#url"},"url()")),(0,i.kt)("p",null,"Not compatible with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/useSuspense"},"useSuspense()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/useFetch"},"useFetch()"))),(0,i.kt)("h4",{id:"implementation-5"},"Implementation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"static delete<T extends typeof SimpleResource>(this: T) {\n  const endpoint = this.endpointMutate();\n  return this.memo('#delete', () =>\n    endpoint.extend({\n      fetch(params: Readonly<object>) {\n        return endpoint.fetch.call(this, params).then(() => params);\n      },\n      method: 'DELETE',\n      schema: new schema.Delete(this),\n    }),\n  );\n}\n")))}u.isMDXComponent=!0}}]);
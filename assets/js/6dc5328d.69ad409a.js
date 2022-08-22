"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[681],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return r?a.createElement(y,o(o({ref:t},i),{},{components:r})):a.createElement(y,o({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1847:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const l={title:"Accessory"},o=void 0,p={unversionedId:"loops/Accessory",id:"loops/Accessory",title:"Accessory",description:"The accessory loop lists products accessories. As an accessory is itself a product, this loop behaves like a product loop. Therefore you can use all product loop arguments and outputs.",source:"@site/docs/loops/Accessory.md",sourceDirName:"loops",slug:"/loops/Accessory",permalink:"/docs/docs/loops/Accessory",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/loops/Accessory.md",tags:[],version:"current",frontMatter:{title:"Accessory"},sidebar:"myAutogeneratedSidebar",previous:{title:"Global outputs",permalink:"/docs/docs/loops/global_outputs"},next:{title:"Address",permalink:"/docs/docs/loops/Address"}},s={},c=[{value:"Arguments",id:"pse-arguments",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Examples",id:"examples",level:2},{value:"Order possible values",id:"accessory-order-possible-values",level:2}],i={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The accessory loop lists products accessories. As an accessory is itself a product, this loop behaves like a product loop. Therefore you can use all ",(0,n.kt)("a",{parentName:"p",href:"./product"},"product loop")," arguments and outputs.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},'{loop type="accessory" name="the-loop-name" [argument="value"], [...]}')),(0,n.kt)("h2",{id:"pse-arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"all ",(0,n.kt)("a",{parentName:"td",href:"./product"},"product loop")," arguments"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'order="min_price", max_price="100"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A list of values ",(0,n.kt)("br",null)," ",(0,n.kt)("a",{parentName:"td",href:"#accessory-order-possible-values"},"Expected values")),(0,n.kt)("td",{parentName:"tr",align:"center"},"accessory"),(0,n.kt)("td",{parentName:"tr",align:"left"},'order="accessory,max_price"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"product ","*"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single product id."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'product="2"')))),(0,n.kt)("h2",{id:"outputs"},"Outputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ACCESSORY_ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The product ID of the accessory")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the accessory id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"all ",(0,n.kt)("a",{parentName:"td",href:"./product"},"product loop")," outputs, except ID, which is the accessory ID"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"I want to display all accessories which are in category 1, order by ascending price, for all products in category 2."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-smarty"},'<ul>\n{loop type="product" name="products_in_category_2" category="2"}\n    {loop type="accessory" name="accessories_in_category_1_order_by_min_price" category="1" product="$ID" order="min_price"}\n        <li>{$TITLE} ({$REF})</li>\n    {/loop}\n{/loop}\n</ul>\n')),(0,n.kt)("h2",{id:"accessory-order-possible-values"},"Order possible values"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#pse-arguments"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Ascending value"),(0,n.kt)("th",{parentName:"tr",align:null},"Descending value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Sorted fields"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"accessory"),(0,n.kt)("td",{parentName:"tr",align:null},"accessory_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"accessory")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"all ",(0,n.kt)("a",{parentName:"td",href:"./product"},"product loop")," orders"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:"left"})))))}u.isMDXComponent=!0}}]);
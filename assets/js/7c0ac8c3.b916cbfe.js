"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[4483],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=s(a),c=n,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return a?r.createElement(g,o(o({ref:e},d),{},{components:a})):r.createElement(g,o({ref:e},d))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9474:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const l={title:"Area"},o=void 0,i={unversionedId:"loops/Area",id:"loops/Area",title:"Area",description:"Area loop returns shipping zones information.",source:"@site/docs/loops/Area.md",sourceDirName:"loops",slug:"/loops/Area",permalink:"/docs/docs/loops/Area",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/loops/Area.md",tags:[],version:"current",frontMatter:{title:"Area"},sidebar:"myAutogeneratedSidebar",previous:{title:"Admin",permalink:"/docs/docs/loops/Admin"},next:{title:"Associated content",permalink:"/docs/docs/loops/Associated_content"}},p={},s=[{value:"Arguments",id:"area-arguments",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Order possible values",id:"area-order-possible-values",level:2}],d={toc:s};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Area loop returns shipping zones information.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},'{loop type="area" name="the-loop-name" [argument="value"], [...]}')),(0,n.kt)("h2",{id:"area-arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"country"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(2.2) A list of country IDs. Only zones including these countries will be returned"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single or a list of shipping zones ids."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'id="2", id="1,4,7"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"module_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A comma separated list of module IDs. If not empty, only zones for the specified modules are returned."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A list of values ",(0,n.kt)("br",null)," ",(0,n.kt)("a",{parentName:"td",href:"#area-order-possible-values"},"Expected values")),(0,n.kt)("td",{parentName:"tr",align:"center"},"manual"),(0,n.kt)("td",{parentName:"tr",align:"left"},'order="alpha"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"unassigned"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If true, returns shipping zones not assigned to any delivery module."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"with_zone"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A module ID. Returns shipping zones which are assigned to this module ID"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"without_zone"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A module ID. Returns shipping zones which are not assigned to this module ID"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("p",null,"Plus the ",(0,n.kt)("a",{parentName:"p",href:"./global_arguments"},"global arguments")),(0,n.kt)("h2",{id:"outputs"},"Outputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the shipping zone id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$NAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the accessory name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$POSTAGE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"This parameter is always zero in 2.0.0")))),(0,n.kt)("p",null,"Plus the ",(0,n.kt)("a",{parentName:"p",href:"./global_arguments"},"global outputs")),(0,n.kt)("h2",{id:"area-order-possible-values"},"Order possible values"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#area-arguments"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Ascending value"),(0,n.kt)("th",{parentName:"tr",align:null},"Descending value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Sorted fields"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"alpha"),(0,n.kt)("td",{parentName:"tr",align:null},"alpha-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"title")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"id-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ID order")))))}m.isMDXComponent=!0}}]);
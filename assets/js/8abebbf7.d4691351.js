"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[5620],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1619:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i=void 0,s={unversionedId:"smarty_plugins/{set_previous_url}",id:"smarty_plugins/{set_previous_url}",title:"{set_previous_url}",description:"In most cases, Thelia automatically sets the previous URLs, so that {navigate to='previous'} will generate the URL to the previous page visited by your customer.",source:"@site/docs/smarty_plugins/{set_previous_url}.md",sourceDirName:"smarty_plugins",slug:"/smarty_plugins/{set_previous_url}",permalink:"/docs/docs/smarty_plugins/{set_previous_url}",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/smarty_plugins/{set_previous_url}.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"{postage}",permalink:"/docs/docs/smarty_plugins/{postage}"},next:{title:"{url}",permalink:"/docs/docs/smarty_plugins/{url}"}},p={},l=[],u={toc:l};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In most cases, Thelia automatically sets the previous URLs, so that ",(0,o.kt)("inlineCode",{parentName:"p"},"{navigate to='previous'}")," will generate the URL to the previous page visited by your customer.\nBut in some cases, you may want to define yourself the URL of the previous page, so that your customers will go back to this specific page instead of the page they have visited before."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"{set_previous_url}")," function allows setting the URLs of the page thant will become the previous page :\n",(0,o.kt)("inlineCode",{parentName:"p"},"{set_previous_url path='path/to/some/page'}"),(0,o.kt)("br",{parentName:"p"}),"\n","To get possible ",(0,o.kt)("inlineCode",{parentName:"p"},"{set_previous_url}")," parameters, please see the ",(0,o.kt)("a",{parentName:"p",href:"./%7Burl%7D"},"{url}")," function.    "),(0,o.kt)("p",null,"You may also want to prevent a page to become the \u201cprevious page\u201d. To do so, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ignore_current")," parameter, and put this call somewhere in the page :\n",(0,o.kt)("inlineCode",{parentName:"p"},"{set_previous_url ignore_current=1}"),"    "),(0,o.kt)("p",null,"A typical example is the ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," and/or ",(0,o.kt)("inlineCode",{parentName:"p"},"register")," page, where the user should go back where it was before entering its credentials (cart or order page), and not te register/login page itself."))}c.isMDXComponent=!0}}]);
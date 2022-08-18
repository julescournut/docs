"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[5620],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,d=m["".concat(u,".").concat(f)]||m[f]||c[f]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1619:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={},u=void 0,p={unversionedId:"smarty_plugins/{set_previous_url}",id:"smarty_plugins/{set_previous_url}",title:"{set_previous_url}",description:"In most cases, Thelia automatically sets the previous URLs, so that {navigate to='previous'} will generate the URL to the previous page visited by your customer.",source:"@site/docs/smarty_plugins/{set_previous_url}.md",sourceDirName:"smarty_plugins",slug:"/smarty_plugins/{set_previous_url}",permalink:"/docs/docs/smarty_plugins/{set_previous_url}",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/smarty_plugins/{set_previous_url}.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"{postage}",permalink:"/docs/docs/smarty_plugins/{postage}"},next:{title:"{url}",permalink:"/docs/docs/smarty_plugins/{url}"}},l={},c=[],m={toc:c};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In most cases, Thelia automatically sets the previous URLs, so that ",(0,a.kt)("inlineCode",{parentName:"p"},"{navigate to='previous'}")," will generate the URL to the previous page visited by your customer.\nBut in some cases, you may want to define yourself the URL of the previous page, so that your customers will go back to this specific page instead of the page they have visited before."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"{set_previous_url}")," function allows setting the URLs of the page thant will become the previous page :\n",(0,a.kt)("inlineCode",{parentName:"p"},"{set_previous_url path='path/to/some/page'}"),(0,a.kt)("br",{parentName:"p"}),"\n","To get possible ",(0,a.kt)("inlineCode",{parentName:"p"},"{set_previous_url}")," parameters, please see the ",(0,a.kt)("a",{parentName:"p",href:"./%7Burl%7D"},"{url}")," function.    "),(0,a.kt)("p",null,"You may also want to prevent a page to become the \u201cprevious page\u201d. To do so, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ignore_current")," parameter, and put this call somewhere in the page :\n",(0,a.kt)("inlineCode",{parentName:"p"},"{set_previous_url ignore_current=1}"),"    "),(0,a.kt)("p",null,"A typical example is the ",(0,a.kt)("inlineCode",{parentName:"p"},"login")," and/or ",(0,a.kt)("inlineCode",{parentName:"p"},"register")," page, where the user should go back where it was before entering its credentials (cart or order page), and not te register/login page itself."))}f.isMDXComponent=!0}}]);
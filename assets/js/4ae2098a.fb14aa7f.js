"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[6971],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6287:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],p={},l=void 0,u={unversionedId:"smarty_plugins/{url}",id:"smarty_plugins/{url}",title:"{url}",description:"This Smarty function builds an absolute URL from a route path.",source:"@site/docs/smarty_plugins/{url}.md",sourceDirName:"smarty_plugins",slug:"/smarty_plugins/{url}",permalink:"/docs/docs/smarty_plugins/{url}",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/smarty_plugins/{url}.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"{set_previous_url}",permalink:"/docs/docs/smarty_plugins/{set_previous_url}"},next:{title:"Internationalization",permalink:"/docs/docs/Internationalization"}},s={},c=[{value:"path",id:"path",level:2},{value:"Dynamic parameters",id:"dynamic-parameters",level:3},{value:"Additional parameters to the generated URL",id:"additional-parameters-to-the-generated-url",level:3},{value:"noamp",id:"noamp",level:3},{value:"file",id:"file",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This Smarty function builds an absolute URL from a route path."),(0,o.kt)("h2",{id:"path"},"path"),(0,o.kt)("p",null,"The value of the path parameter is the route path you want to get as an URL."),(0,o.kt)("p",null,"For example, to get the URL of the /account/password route :",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},'{url path="/account/password"}')," => ",(0,o.kt)("inlineCode",{parentName:"p"},"http://www.yourshop.com/account/password")),(0,o.kt)("h3",{id:"dynamic-parameters"},"Dynamic parameters"),(0,o.kt)("p",null,"In some cases you need to inject dynamic parameter in your path. The parameter uses the same behaviour as the ",(0,o.kt)("inlineCode",{parentName:"p"},"{intl}")," function. Every ",(0,o.kt)("inlineCode",{parentName:"p"},"%varname")," found in the string will be replaced by the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"varname")," parameter.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},'{url path="/product/%id" id=$product_id}')," => ",(0,o.kt)("inlineCode",{parentName:"p"},"http://www.yourshop.com/product/3")),(0,o.kt)("h3",{id:"additional-parameters-to-the-generated-url"},"Additional parameters to the generated URL"),(0,o.kt)("p",null,"You may add as many parameters as you want to the generated URL",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},'{url path="/contact" myvar="1" myothervar="2"}')," => ",(0,o.kt)("inlineCode",{parentName:"p"},"http://www.yourshop.com/contact?myvar=1&myothervar=2")),(0,o.kt)("h3",{id:"noamp"},"noamp"),(0,o.kt)("p",null,"Setting noamp=1 will escape all & as ","&"," that may be present in the generated URL."),(0,o.kt)("h2",{id:"file"},"file"),(0,o.kt)("p",null,"The value of the file parameter is the absolute path (from /web) of a real file, that will be served by your web server, and not processed by Thelia."),(0,o.kt)("p",null,"For example, if you put a guide.pdf file in the /web directory, the URL of this file is :",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},'{url file="/guide.pdf"}')," => ",(0,o.kt)("inlineCode",{parentName:"p"},"http://www.yourshop.com/guide.pdf")))}d.isMDXComponent=!0}}]);
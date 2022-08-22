"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[4268],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),m=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(a),d=n,f=u["".concat(p,".").concat(d)]||u[d]||s[d]||l;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4803:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const l={title:"Template"},o=void 0,i={unversionedId:"template",id:"template",title:"Template",description:"The template engine used in Thelia is Smarty.",source:"@site/docs/template.md",sourceDirName:".",slug:"/template",permalink:"/docs/docs/template",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/template.md",tags:[],version:"current",frontMatter:{title:"Template"},sidebar:"myAutogeneratedSidebar",previous:{title:"Propel",permalink:"/docs/docs/propel"}},p={},m=[{value:"Templates structure",id:"templates-structure",level:3},{value:"Features",id:"features",level:3},{value:"Loops",id:"loops",level:4},{value:"Smarty plugins",id:"smarty-plugins",level:4}],c={toc:m};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The template engine used in Thelia is ",(0,n.kt)("a",{parentName:"p",href:"https://smarty-php.github.io/smarty/"},"Smarty"),".\nThere is 4 types of templates :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"frontOffice : for templates rendered from a controller that extend ",(0,n.kt)("inlineCode",{parentName:"li"},"BaseFrontController")),(0,n.kt)("li",{parentName:"ul"},"backOffice : for templates rendered from a controller that extend ",(0,n.kt)("inlineCode",{parentName:"li"},"BaseAdminController")),(0,n.kt)("li",{parentName:"ul"},"pdf : for pdf documents like invoices"),(0,n.kt)("li",{parentName:"ul"},"mail : for mail sent by Thelia")),(0,n.kt)("p",null,"For each of this types you can choose an active template. Either by the configuration page in back office or by these environment variables:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ACTIVE_FRONT_TEMPLATE    \nACTIVE_ADMIN_TEMPLATE    \nACTIVE_MAIL_TEMPLATE   \nACTIVE_PDF_TEMPLATE   \n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"We advised to never modify the defaults templates but copy and rename it with the name of your project.",(0,n.kt)("br",{parentName:"p"}),"\n","Like this you can always update Thelia and the defaults templates without loosing your changes")),(0,n.kt)("h3",{id:"templates-structure"},"Templates structure"),(0,n.kt)("p",null,"Thelia Smarty templates are located in the templates sub-directory."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\\templates\n  \\frontOffice\n    \\default\n    \\myTemplate\n  \\backOffice\n    \\default\n    ...  \n  \\pdf\n    \\default\n    ...  \n  \\mail\n    \\default\n    ...\n")),(0,n.kt)("p",null,"This is the structure of all Thelia templates, it can be located either at the root of your project or in each module folder.\nIf same file are in multiple templates location Thelia apply this priority to know which as to be rendered (the first file found is the file rendered)"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the active template in root templates directory"),(0,n.kt)("li",{parentName:"ol"},"In the active template in each module subdirectory located in root templates directory"),(0,n.kt)("li",{parentName:"ol"},"In the active template in each module templates directory"),(0,n.kt)("li",{parentName:"ol"},"In the default template in root templates directory"),(0,n.kt)("li",{parentName:"ol"},"In the default template in each module subdirectory located in root templates directory"),(0,n.kt)("li",{parentName:"ol"},"In the default template in each module templates directory")),(0,n.kt)("p",null,"For example if you have this structure :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\\local\n    \\modules\n        \\MyProject\n            \\templates\n                \\frontOffice\n                    \\default\n                        template.html\n\\templates\n  \\frontOffice\n    \\default\n        template.html\n    \\myTemplate\n        template.html\n        \\modules\n            \\myproject\n                template.html\n")),(0,n.kt)("p",null,"It will check all these directories in this order :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"\\templates\\frontOffice\\myTemplate\\")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"\\templates\\frontOffice\\myTemplate\\modules\\myproject")," * this for each activated modules"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"\\local\\modules\\MyProject\\templates\\frontOffice\\myTemplate")," * this for each activated modules"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"\\templates\\frontOffice\\default\\")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"\\templates\\frontOffice\\default\\modules\\myproject")," * this for each activated modules"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"\\local\\modules\\MyProject\\templates\\frontOffice\\default")," * this for each activated modules")),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("h4",{id:"loops"},"Loops"),(0,n.kt)("p",null,"Loops allow to get data from your shop back-end and display them in your front view. More documentation can be found ",(0,n.kt)("a",{parentName:"p",href:"./loops"},"here"),"."),(0,n.kt)("h4",{id:"smarty-plugins"},"Smarty plugins"),(0,n.kt)("p",null,"Smarty plugins are used to execute some function from templates"))}s.isMDXComponent=!0}}]);
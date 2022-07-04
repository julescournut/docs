"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[4503],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return s}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=r.createContext({}),p=function(t){var e=r.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),f=p(a),s=n,k=f["".concat(u,".").concat(s)]||f[s]||m[s]||l;return a?r.createElement(k,i(i({ref:e},d),{},{components:a})):r.createElement(k,i({ref:e},d))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=f;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},7212:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],o={title:"Feature value"},u=void 0,p={unversionedId:"loops/FeatureValue",id:"loops/FeatureValue",title:"Feature value",description:"Feature value loop lists feature availabilities.",source:"@site/docs/loops/FeatureValue.md",sourceDirName:"loops",slug:"/loops/FeatureValue",permalink:"/docs/docs/loops/FeatureValue",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/loops/FeatureValue.md",tags:[],version:"current",frontMatter:{title:"Feature value"},sidebar:"myAutogeneratedSidebar",previous:{title:"Feature availability",permalink:"/docs/docs/loops/FeatureAvailability"},next:{title:"Feed",permalink:"/docs/docs/loops/Feed"}},d={},m=[{value:"Arguments",id:"feature-arguments",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Order possible values",id:"feature-order-possible-values",level:2}],f={toc:m};function s(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},f,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Feature value loop lists feature availabilities.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},'{loop type="feature_value" name="the-loop-name" [argument="value"], [...]}')),(0,l.kt)("h2",{id:"feature-arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"exclude_feature_availability"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A boolean value to return only features with feature availability (no personal value)."),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'feature_availability="true"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"exclude_free_text"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A boolean value to return only features with free text value (no feature availability)."),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'exclude_free_text="1" or exclude_free_text="true"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"feature *"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A single feature id."),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'feature="2"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"feature_availability"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A single or a list of feature availability ids."),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'feature_availability="2,5"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"free_text"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A single or a list of strings. (2.2)"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'free_text="some text,some other text"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"order"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of values see ",(0,l.kt)("a",{parentName:"td",href:"#feature-order-possible-values"},"sorting possible values")),(0,l.kt)("td",{parentName:"tr",align:"center"},"manual"),(0,l.kt)("td",{parentName:"tr",align:"left"},'order="alpha_reverse"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"product"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A single product id. (no longer mandatory since 2.2)"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},'product="9"')))),(0,l.kt)("p",null,"Plus the ",(0,l.kt)("a",{parentName:"p",href:"./global_arguments"},"global arguments")),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$CHAPO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the feature value chapo")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$DESCRIPTION"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the feature value description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$FEATURE_AV_ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the feature av. ID. Null if the feature ha no feature av. Use FREE_TEXT_VALUE in this case.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$FREE_TEXT_VALUE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1 if this feature is free text, 0 otherwise. Deprecated in 2.4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the feature value id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$IS_FEATURE_AV"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1 if this feature is feature av., 0 otherwise.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$IS_FREE_TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1 if this feature is free text, 0 otherwise.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$LOCALE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the locale of returned results")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$POSITION"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the feature value position")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$POSTSCRIPTUM"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the feature availability postscriptum")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$PRODUCT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the id of the product. Deprecated, please use $PRODUCT_ID instead")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$PRODUCT_ID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"(2.2) the id of the product")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$TITLE"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the feature availability title, or the feature value text for free text features.")))),(0,l.kt)("p",null,"Plus the ",(0,l.kt)("a",{parentName:"p",href:"./global_arguments"},"global outputs")),(0,l.kt)("h2",{id:"feature-order-possible-values"},"Order possible values"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#feature-arguments"},"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Ascending value"),(0,l.kt)("th",{parentName:"tr",align:null},"Descending value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Sorted fields"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"alpha-reverse"),(0,l.kt)("td",{parentName:"tr",align:"left"},"title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manual"),(0,l.kt)("td",{parentName:"tr",align:null},"manual_reverse"),(0,l.kt)("td",{parentName:"tr",align:"left"},"position")))))}s.isMDXComponent=!0}}]);
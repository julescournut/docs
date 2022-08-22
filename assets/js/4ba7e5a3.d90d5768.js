"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[7427],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=l,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5380:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const i={title:"Contribute"},r=void 0,o={unversionedId:"contribute",id:"contribute",title:"Contribute",description:"How to contribute ?",source:"@site/docs/contribute.md",sourceDirName:".",slug:"/contribute",permalink:"/docs/docs/contribute",draft:!1,editUrl:"https://github.com/thelia/docs/edit/main/docs/contribute.md",tags:[],version:"current",frontMatter:{title:"Contribute"},sidebar:"myAutogeneratedSidebar",previous:{title:"thelia:install",permalink:"/docs/docs/commands/thelia_install"},next:{title:"Events",permalink:"/docs/docs/events/"}},s={},p=[{value:"Coding Standard",id:"coding-standard",level:2},{value:"Pull Request",id:"pull-request",level:2},{value:"SQL scripts modification",id:"sql-scripts-modification",level:2},{value:"Changes in Thelia model",id:"changes-in-thelia-model",level:3},{value:"Generate SQL for default data and update SQL scripts",id:"generate-sql-for-default-data-and-update-sql-scripts",level:3},{value:"How to contribute new or update Thelia translations",id:"how-to-contribute-new-or-update-thelia-translations",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{class:"page-header"},(0,l.kt)("h1",null,"How to contribute ?")),(0,l.kt)("p",null,"Thelia project is hosted on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/thelia/thelia"},"GitHub"),". For contributing you just have to fork the project\nand submit ",(0,l.kt)("a",{parentName:"p",href:"https://help.github.com/articles/using-pull-requests"},"Pull Request")," or ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/thelia/thelia"},"Issues")),(0,l.kt)("h2",{id:"coding-standard"},"Coding Standard"),(0,l.kt)("p",null,"Thelia follow ",(0,l.kt)("a",{parentName:"p",href:"http://www.php-fig.org/psr/psr-1/"},"PSR-I")," and ",(0,l.kt)("a",{parentName:"p",href:"http://www.php-fig.org/psr/psr-2/"},"PSR-2")," therefore you\nmust follow this rules. Don't worry, you can use some tools for doing this like the\n",(0,l.kt)("a",{parentName:"p",href:"http://cs.sensiolabs.org/"},"PHP Coding Standards Fixer")),(0,l.kt)("h2",{id:"pull-request"},"Pull Request"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.github.com/articles/creating-a-pull-request"},"Creating a Pull request")," is the better way for submitting a\npatch but there are some rules to follow. First of all, fork ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/thelia/thelia"},"Thelia")," repo and create\na new branch, never work on the master branch, use it only for syncing with ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/thelia/thelia"},"Thelia")," repo."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ git checkout -b new-branch master\n")),(0,l.kt)("p",null,"After finishing your modification you have to rebase your branch and push it to your repo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ git remote add upstream https://github.com/thelia/thelia.git\n$ git checkout master\n$ git pull --ff-only upstream master\n$ git checkout new-branch\n$ git rebase master\n$ git push origin new-branch\n")),(0,l.kt)("p",null,"Next and last step, submit a Pull Request as indicated in the ",(0,l.kt)("a",{parentName:"p",href:"https://help.github.com/articles/creating-a-pull-request"},"GitHub documentation"),"."),(0,l.kt)("p",null,"If you want to do more, read this usefull blog post : ",(0,l.kt)("a",{parentName:"p",href:"http://williamdurand.fr/2013/11/20/on-creating-pull-requests/"},"http://williamdurand.fr/2013/11/20/on-creating-pull-requests/")),(0,l.kt)("h2",{id:"sql-scripts-modification"},"SQL scripts modification"),(0,l.kt)("p",null,"If you submit modifications that adds new data or change the structure of the database, please read the following documentation."),(0,l.kt)("h3",{id:"changes-in-thelia-model"},"Changes in Thelia model"),(0,l.kt)("p",null,"If you have changed the ",(0,l.kt)("inlineCode",{parentName:"p"},"schema.xml")," file which is the Propel schema of Thelia models, you should generate the new ",(0,l.kt)("inlineCode",{parentName:"p"},"thelia.sql")," file and the base classes of Propel."),(0,l.kt)("p",null,"You should execute this command at the root directory of your Thelia website :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# generates classes\nbin/propel build -v --input-dir=local/config/ --output-dir=core/lib/ --enable-identifier-quoting\n# generates thelia.sql\nbin/propel sql:build -v --input-dir=local/config/ --output-dir=setup/\nrm setup/sqldb.map\n")),(0,l.kt)("h3",{id:"generate-sql-for-default-data-and-update-sql-scripts"},"Generate SQL for default data and update SQL scripts"),(0,l.kt)("p",null,"These SQL files should not be modified directly as they are generated by a Thelia command. Instead, you should edit the smarty templates. The first one is the file ",(0,l.kt)("inlineCode",{parentName:"p"},"setup/insert.sql.tpl")," that is used to generate the ",(0,l.kt)("inlineCode",{parentName:"p"},"insert.sql")," file. Others are located in ",(0,l.kt)("inlineCode",{parentName:"p"},"setup/update/tpl")," and are used to generate all SQL update files."),(0,l.kt)("p",null,"This templates only differ from sql for ",(0,l.kt)("strong",{parentName:"p"},"i18n")," tables. ",(0,l.kt)("em",{parentName:"p"},"But we could imagine other uses with Smarty"),".",(0,l.kt)("br",{parentName:"p"}),"\n","A typical application :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-smarty"},"...\n\nINSERT INTO  `module_i18n` (`id`, `locale`, `title`, `description`, `chapo`, `postscriptum`) VALUES\n{foreach $locales as $locale}\n  (@max_id+1, '{$locale}', {intl l='Navigation block' locale=$locale}, NULL,  NULL,  NULL),\n  (@max_id+2, '{$locale}', {intl l='Currency block' locale=$locale}, NULL,  NULL,  NULL),\n  ...\n  (@max_id+12, '{$locale}', {intl l='New Products block' locale=$locale}, NULL,  NULL,  NULL),\n  (@max_id+13, '{$locale}', {intl l='Products offer block' locale=$locale}, NULL,  NULL,  NULL){if ! $locale@last},{/if}\n\n{/foreach}\n;\n\n...\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{foreach $locales as $locale}")," is used to iterate on the list of locales : en","_","US, fr","_","FR, ..."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{intl l='Navigation block' locale=$locale}")," is used to display the translation corresponding to the ",(0,l.kt)("inlineCode",{parentName:"li"},"l")," attribute. This ",(0,l.kt)("inlineCode",{parentName:"li"},"intl")," function\ndiffers from the classic one used in Thelia. If the translation does not exist, no fallbacks will be used by default.\nThe text will be escaped for SQL and quotes will be placed around the input string. If the string is empty then it will be replaced by a ",(0,l.kt)("inlineCode",{parentName:"li"},"NULL")," value.\nThe attribute ",(0,l.kt)("inlineCode",{parentName:"li"},'in_string="1"')," is used to disable the placement of quotes around the string. The attribute ",(0,l.kt)("inlineCode",{parentName:"li"},'use_default="1"')," allow you to use the ",(0,l.kt)("inlineCode",{parentName:"li"},"l"),"\nattribute as a fallback if the translation does not exist."),(0,l.kt)("li",{parentName:"ul"},"don't forget to use the ",(0,l.kt)("inlineCode",{parentName:"li"},"{if ! $locale@last},{/if}")," before the ",(0,l.kt)("inlineCode",{parentName:"li"},"{/foreach}")," otherwise your SQL will not be valid.")),(0,l.kt)("p",null,"Keep attention on brackets ",(0,l.kt)("inlineCode",{parentName:"p"},"{")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"}")," that is used by smarty. You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"{ldelim}"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"{rdelim}")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"{literal}...{/literal}")," to escape non smarty code."),(0,l.kt)("p",null,"To translate the new string, you can use the translation page in the back office."),(0,l.kt)("p",null,"I you modify templates you have to regenerate all sql files, you can use this Thelia command : ",(0,l.kt)("inlineCode",{parentName:"p"},"php Thelia generate:sql")),(0,l.kt)("p",null,"You can also limit to a specific list of locales if you use ",(0,l.kt)("inlineCode",{parentName:"p"},"locales")," parameter."),(0,l.kt)("p",null,"Actually, as all languages are not fully translated we use this command line to generate SQL files :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"php Thelia generate:sql --locales='de_DE,en_US,es_ES,fr_FR'\n")),(0,l.kt)("h2",{id:"how-to-contribute-new-or-update-thelia-translations"},"How to contribute new or update Thelia translations"),(0,l.kt)("p",null,"Translations are contributed by Thelia users worldwide. The translation work is coordinated at ",(0,l.kt)("a",{parentName:"p",href:"http://crowdin.com"},"Crowdin"),".",(0,l.kt)("br",{parentName:"p"}),"\n","The Thelia project is located at ",(0,l.kt)("a",{parentName:"p",href:"http://translate.thelia.net/"},"http://translate.thelia.net/"),"."),(0,l.kt)("p",null,"Translations for ",(0,l.kt)("strong",{parentName:"p"},"non english")," languages should only be done on ",(0,l.kt)("a",{parentName:"p",href:"http://translate.thelia.net/"},"http://translate.thelia.net/"),", not in a Thelia development website and submitted to us with a pull request on GitHub.",(0,l.kt)("br",{parentName:"p"}),"\n","During the development stage, only english strings should be used inside Thelia and submitted with a pull request.",(0,l.kt)("br",{parentName:"p"}),"\n","Prior to any release, Thelia maintainers will make an announcement and we'll have a couple of weeks\nof string freeze in order to give people time to complete the translations.\nOnce translations are done, Thelia maintainers will integrate all translations in Thelia."),(0,l.kt)("p",null,"If you want to contribute to translation or want to discuss specific translations, go to the ",(0,l.kt)("a",{parentName:"p",href:"http://translate.thelia.net/"},"Thelia project page"),"."),(0,l.kt)("p",null,"If you would like to help out with translating or adding a language that isn\u2019t yet translated, here\u2019s what to do:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Visit the ",(0,l.kt)("a",{parentName:"li",href:"http://translate.thelia.net/"},"Thelia project page"),"."),(0,l.kt)("li",{parentName:"ul"},"Sign up at  ",(0,l.kt)("a",{parentName:"li",href:"http://crowdin.com"},"Crowdin")," or log in if you already have an account."),(0,l.kt)("li",{parentName:"ul"},"On the Thelia project page, click the ",(0,l.kt)("strong",{parentName:"li"},"Join Translation Project")," button."),(0,l.kt)("li",{parentName:"ul"},"Choose the language you want to work on, or \u2013 in case the language doesn\u2019t exist yet \u2013 request a new language by clicking on the ",(0,l.kt)("strong",{parentName:"li"},"Contact")," link of one of the managers of the project."),(0,l.kt)("li",{parentName:"ul"},"Then Select a file in the list and start translating. if you encounter any problems, please consult ",(0,l.kt)("a",{parentName:"li",href:"https://support.crowdin.com/"},"Crowdin Knowledge Base")," or open a ",(0,l.kt)("a",{parentName:"li",href:"http://translate.thelia.net/project/thelia/discussions"},"new discussion on Thelia project page"),".")))}c.isMDXComponent=!0}}]);
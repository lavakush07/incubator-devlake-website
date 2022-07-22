"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1216],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3871:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],l={title:"Jenkins",description:"Jenkins Plugin\n"},c=void 0,u={unversionedId:"Plugins/jenkins",id:"Plugins/jenkins",title:"Jenkins",description:"Jenkins Plugin\n",source:"@site/docs/Plugins/jenkins.md",sourceDirName:"Plugins",slug:"/Plugins/jenkins",permalink:"/docs/Plugins/jenkins",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Plugins/jenkins.md",tags:[],version:"current",frontMatter:{title:"Jenkins",description:"Jenkins Plugin\n"},sidebar:"docsSidebar",previous:{title:"GitLab",permalink:"/docs/Plugins/gitlab"},next:{title:"Jira",permalink:"/docs/Plugins/jira"}},s={},p=[{value:"Summary",id:"summary",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Configuration",id:"configuration",level:2},{value:"By <code>config-ui</code>",id:"by-config-ui",level:3},{value:"Collect Data From Jenkins",id:"collect-data-from-jenkins",level:2},{value:"Relationship between job and build",id:"relationship-between-job-and-build",level:2}],d={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This plugin collects Jenkins data through ",(0,a.kt)("a",{parentName:"p",href:"https://www.jenkins.io/doc/book/using/remote-access-api/"},"Remote Access API"),". It then computes and visualizes various DevOps metrics from the Jenkins data."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61080/141943122-dcb08c35-cb68-4967-9a7c-87b63c2d6988.png",alt:"image"})),(0,a.kt)("h2",{id:"metrics"},"Metrics"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Build Count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of builds created")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Build Success Rate"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The percentage of successful builds")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"In order to fully use this plugin, you will need to set various configurations via Dev Lake's ",(0,a.kt)("inlineCode",{parentName:"p"},"config-ui"),"."),(0,a.kt)("h3",{id:"by-config-ui"},"By ",(0,a.kt)("inlineCode",{parentName:"h3"},"config-ui")),(0,a.kt)("p",null,"The connection section of the configuration screen requires the following key fields to connect to the Jenkins API."),(0,a.kt)("h2",{id:"collect-data-from-jenkins"},"Collect Data From Jenkins"),(0,a.kt)("p",null,"To collect data, select ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced Mode")," on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Pipeline Run")," page and paste a JSON config like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "jenkins",\n      "options": {}\n    }\n  ]\n]\n')),(0,a.kt)("h2",{id:"relationship-between-job-and-build"},"Relationship between job and build"),(0,a.kt)("p",null,"Build is kind of a snapshot of job. Running job each time creates a build."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[9927],{13336:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=i(87462),s=(i(67294),i(3905));i(61839);const a={title:"Bug Age",description:"Bug Age\n",sidebar_position:9},n=void 0,r={unversionedId:"Metrics/BugAge",id:"version-v0.14/Metrics/BugAge",title:"Bug Age",description:"Bug Age\n",source:"@site/versioned_docs/version-v0.14/Metrics/BugAge.md",sourceDirName:"Metrics",slug:"/Metrics/BugAge",permalink:"/docs/Metrics/BugAge",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.14/Metrics/BugAge.md",tags:[],version:"v0.14",sidebarPosition:9,frontMatter:{title:"Bug Age",description:"Bug Age\n",sidebar_position:9},sidebar:"docsSidebar",previous:{title:"Deleted Lines of Code",permalink:"/docs/Metrics/DeletedLinesOfCode"},next:{title:"Incident Age",permalink:"/docs/Metrics/IncidentAge"}},l={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],u={toc:d};function c(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,s.kt)("p",null,"The amount of time it takes a bug to fix."),(0,s.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Help the team to establish an effective hierarchical response mechanism for bugs. Focus on the resolution of important problems in the backlog."),(0,s.kt)("li",{parentName:"ol"},"Improve team's and individual's bug fixing efficiency. Identify good/to-be-improved practices that affect bug age age")),(0,s.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Jira"),(0,s.kt)("li",{parentName:"ul"},"GitHub"),(0,s.kt)("li",{parentName:"ul"},"Weekly Bug Retro")),(0,s.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,s.kt)("p",null,"This metric equals to ",(0,s.kt)("inlineCode",{parentName:"p"},"resolution_date")," - ",(0,s.kt)("inlineCode",{parentName:"p"},"created_date"),' of issues in type "BUG".'),(0,s.kt)("b",null,"Data Sources Required"),(0,s.kt)("p",null,"This metric relies on issues collected from Jira, GitHub, or TAPD."),(0,s.kt)("b",null,"Transformation Rules Required"),(0,s.kt)("p",null,"This metric relies on the 'type-bug' configuration in Jira, GitHub or TAPD transformation rules to let DevLake know what CI builds/jobs can be regarded as ",(0,s.kt)("inlineCode",{parentName:"p"},"Bugs"),"."),(0,s.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Observe the trend of bug age and locate the key reasons."),(0,s.kt)("li",{parentName:"ol"},"According to the severity level, type (business, functional classification), affected module, source of bugs, count and observe the length of bug age.")))}c.isMDXComponent=!0}}]);
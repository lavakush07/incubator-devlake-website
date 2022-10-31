"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3723],{38912:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=i(87462),r=(i(67294),i(3905));i(61839);const a={title:"DB Migration",description:"DB Migration\n",sidebar_position:3},o=void 0,s={unversionedId:"DeveloperManuals/DBMigration",id:"version-v0.11/DeveloperManuals/DBMigration",title:"DB Migration",description:"DB Migration\n",source:"@site/versioned_docs/version-v0.11/DeveloperManuals/DBMigration.md",sourceDirName:"DeveloperManuals",slug:"/DeveloperManuals/DBMigration",permalink:"/docs/v0.11/DeveloperManuals/DBMigration",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11/DeveloperManuals/DBMigration.md",tags:[],version:"v0.11",sidebarPosition:3,frontMatter:{title:"DB Migration",description:"DB Migration\n",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Plugin Implementation",permalink:"/docs/v0.11/DeveloperManuals/PluginImplementation"},next:{title:"Notifications",permalink:"/docs/v0.11/DeveloperManuals/Notifications"}},l={},p=[{value:"Summary",id:"summary",level:2},{value:"Migration Script",id:"migration-script",level:2},{value:"Table <code>migration_history</code>",id:"table-migration_history",level:2},{value:"How It Works",id:"how-it-works",level:2}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Starting in v0.10.0, DevLake provides a lightweight migration tool for executing migration scripts.\nBoth framework itself and plugins define their migration scripts in their own migration folder.\nThe migration scripts are written with gorm in Golang to support different SQL dialects."),(0,r.kt)("h2",{id:"migration-script"},"Migration Script"),(0,r.kt)("p",null,"Migration script describes how to do database migration.\nThey implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"Script")," interface.\nWhen DevLake starts, scripts register themselves to the framework by invoking the ",(0,r.kt)("inlineCode",{parentName:"p"},"Register")," function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Script interface {\n    Up(ctx context.Context, db *gorm.DB) error\n    Version() uint64\n    Name() string\n}\n")),(0,r.kt)("h2",{id:"table-migration_history"},"Table ",(0,r.kt)("inlineCode",{parentName:"h2"},"migration_history")),(0,r.kt)("p",null,"The table tracks migration scripts execution and schemas changes.\nFrom which, DevLake could figure out the current state of database schemas."),(0,r.kt)("h2",{id:"how-it-works"},"How It Works"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check ",(0,r.kt)("inlineCode",{parentName:"li"},"migration_history")," table, calculate all the migration scripts need to be executed."),(0,r.kt)("li",{parentName:"ol"},"Sort scripts by Version in ascending order."),(0,r.kt)("li",{parentName:"ol"},"Execute scripts."),(0,r.kt)("li",{parentName:"ol"},"Save results in the ",(0,r.kt)("inlineCode",{parentName:"li"},"migration_history")," table.")))}d.isMDXComponent=!0}}]);
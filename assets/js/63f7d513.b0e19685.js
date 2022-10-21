"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[8077],{31240:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=i(87462),a=(i(67294),i(3905));i(61839);const o={title:"DB Migration",description:"DB Migration\n",sidebar_position:3},r=void 0,l={unversionedId:"DeveloperManuals/DBMigration",id:"version-v0.13/DeveloperManuals/DBMigration",title:"DB Migration",description:"DB Migration\n",source:"@site/versioned_docs/version-v0.13/DeveloperManuals/DBMigration.md",sourceDirName:"DeveloperManuals",slug:"/DeveloperManuals/DBMigration",permalink:"/docs/v0.13/DeveloperManuals/DBMigration",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/DeveloperManuals/DBMigration.md",tags:[],version:"v0.13",sidebarPosition:3,frontMatter:{title:"DB Migration",description:"DB Migration\n",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Plugin Implementation",permalink:"/docs/v0.13/DeveloperManuals/PluginImplementation"},next:{title:"Notifications",permalink:"/docs/v0.13/DeveloperManuals/Notifications"}},s={},m=[{value:"Summary",id:"summary",level:2},{value:"Migration Script",id:"migration-script",level:2},{value:"Migration Model",id:"migration-model",level:2},{value:"Table <code>migration_history</code>",id:"table-migration_history",level:2},{value:"Execution",id:"execution",level:2},{value:"How It Works",id:"how-it-works",level:2}],d={toc:m};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Starting in v0.10.0, DevLake provides a lightweight migration tool for executing migration scripts.\nBoth framework itself and plugins define their migration scripts in their own migration folder.\nThe migration scripts are written with gorm in Golang to support different SQL dialects."),(0,a.kt)("h2",{id:"migration-script"},"Migration Script"),(0,a.kt)("p",null,"Migration script describes how to do database migration.\nThey implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"Script")," interface.\nWhen DevLake starts, scripts register themselves to the framework by invoking the ",(0,a.kt)("inlineCode",{parentName:"p"},"Register")," function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Script interface {\n    // this function will contain the business logic of the migration (e.g. DDL logic)\n    Up(ctx context.Context, db *gorm.DB) error\n    // the version number of the migration. typically in date format (YYYYMMDDHHMMSS), e.g. 20220728000001. Migrations are executed sequentially based on this number.\n    Version() uint64\n    // The name of this migration\n    Name() string\n}\n")),(0,a.kt)("h2",{id:"migration-model"},"Migration Model"),(0,a.kt)("p",null,'For each migration we define a "snapshot" datamodel of the model that we wish to perform the migration on.\nThe fields on this model shall be identical to the actual model, but unlike the actual one, this one will\nnever change in the future. The naming convention of these models is ',(0,a.kt)("inlineCode",{parentName:"p"},"<ModelName>YYYYMMDD")," and they must implement\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"func TableName() string")," method, and consumed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Script::Up")," method."),(0,a.kt)("h2",{id:"table-migration_history"},"Table ",(0,a.kt)("inlineCode",{parentName:"h2"},"migration_history")),(0,a.kt)("p",null,"The table tracks migration scripts execution and schemas changes.\nFrom which, DevLake could figure out the current state of database schemas."),(0,a.kt)("h2",{id:"execution"},"Execution"),(0,a.kt)("p",null,"Each plugin has a ",(0,a.kt)("inlineCode",{parentName:"p"},"migrationscripts")," subpackage that lists all the migrations to be executed for that plugin. You\nwill need to add your migration to that list for the framework to pick it up. Similarly, there is such a package\nfor the framework-only migrations defined under the ",(0,a.kt)("inlineCode",{parentName:"p"},"models")," package."),(0,a.kt)("h2",{id:"how-it-works"},"How It Works"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Check ",(0,a.kt)("inlineCode",{parentName:"li"},"migration_history")," table, calculate all the migration scripts need to be executed."),(0,a.kt)("li",{parentName:"ol"},"Sort scripts by Version in ascending order."),(0,a.kt)("li",{parentName:"ol"},"Execute scripts."),(0,a.kt)("li",{parentName:"ol"},"Save results in the ",(0,a.kt)("inlineCode",{parentName:"li"},"migration_history")," table.")))}p.isMDXComponent=!0}}]);
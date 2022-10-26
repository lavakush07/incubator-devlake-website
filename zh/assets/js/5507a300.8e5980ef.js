"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2146],{65167:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=t(87462),a=(t(67294),t(3905));t(61839);const i={title:"DB Migration",description:"DB Migration\n",sidebar_position:3},o=void 0,l={unversionedId:"DeveloperManuals/DBMigration",id:"version-v0.14/DeveloperManuals/DBMigration",title:"DB Migration",description:"DB Migration\n",source:"@site/versioned_docs/version-v0.14/DeveloperManuals/DBMigration.md",sourceDirName:"DeveloperManuals",slug:"/DeveloperManuals/DBMigration",permalink:"/zh/docs/DeveloperManuals/DBMigration",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.14/DeveloperManuals/DBMigration.md",tags:[],version:"v0.14",sidebarPosition:3,frontMatter:{title:"DB Migration",description:"DB Migration\n",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Plugin Implementation",permalink:"/zh/docs/DeveloperManuals/PluginImplementation"},next:{title:"Notifications",permalink:"/zh/docs/DeveloperManuals/Notifications"}},s={},d=[{value:"Summary",id:"summary",level:2},{value:"Migration Script",id:"migration-script",level:2},{value:"Migration Model",id:"migration-model",level:2},{value:"Table <code>migration_history</code>",id:"table-migration_history",level:2},{value:"Execution",id:"execution",level:2},{value:"How It Works",id:"how-it-works",level:2},{value:"Best Practices",id:"best-practices",level:2}],p={toc:d};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Starting in v0.10.0, DevLake provides a lightweight migration tool for executing migration scripts.\nBoth framework itself and plugins define their migration scripts in their own migration folder.\nThe migration scripts are written with gorm in Golang to support different SQL dialects."),(0,a.kt)("h2",{id:"migration-script"},"Migration Script"),(0,a.kt)("p",null,"Migration script describes how to do database migration.\nThey implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"Script")," interface.\nWhen DevLake starts, scripts register themselves to the framework by invoking the ",(0,a.kt)("inlineCode",{parentName:"p"},"Register")," function.\nThe method ",(0,a.kt)("inlineCode",{parentName:"p"},"Up")," contains the steps of migration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Script interface {\n    // this function will contain the business logic of the migration (e.g. DDL logic)\n    Up(ctx context.Context, db *gorm.DB) errors.Error\n    // the version number of the migration. typically in date format (YYYYMMDDHHMMSS), e.g. 20220728000001. Migrations are executed sequentially based on this number.\n    Version() uint64\n    // The name of this migration\n    Name() string\n}\n")),(0,a.kt)("h2",{id:"migration-model"},"Migration Model"),(0,a.kt)("p",null,'For each migration we define a "snapshot" datamodel of the model that we wish to perform the migration on.\nThe fields on this model shall be identical to the actual model, but unlike the actual one, this one will\nnever change in the future. The naming convention of these models is ',(0,a.kt)("inlineCode",{parentName:"p"},"<ModelName>YYYYMMDD")," and they must implement\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"func TableName() string")," method, and consumed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Script::Up")," method."),(0,a.kt)("h2",{id:"table-migration_history"},"Table ",(0,a.kt)("inlineCode",{parentName:"h2"},"migration_history")),(0,a.kt)("p",null,"The table tracks migration scripts execution and schemas changes.\nFrom which, DevLake could figure out the current state of database schemas."),(0,a.kt)("h2",{id:"execution"},"Execution"),(0,a.kt)("p",null,"Each plugin has a ",(0,a.kt)("inlineCode",{parentName:"p"},"migrationscripts")," subpackage that lists all the migrations to be executed for that plugin. You\nwill need to add your migration to that list for the framework to pick it up. Similarly, there is such a package\nfor the framework-only migrations defined under the ",(0,a.kt)("inlineCode",{parentName:"p"},"models")," package."),(0,a.kt)("h2",{id:"how-it-works"},"How It Works"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Check ",(0,a.kt)("inlineCode",{parentName:"li"},"migration_history")," table, calculate all the migration scripts need to be executed."),(0,a.kt)("li",{parentName:"ol"},"Sort scripts by Version in ascending order."),(0,a.kt)("li",{parentName:"ol"},"Execute scripts."),(0,a.kt)("li",{parentName:"ol"},"Save results in the ",(0,a.kt)("inlineCode",{parentName:"li"},"migration_history")," table.")),(0,a.kt)("h2",{id:"best-practices"},"Best Practices"),(0,a.kt)("p",null,"When you write a new migration script, please pay attention to the fault tolerance and the side effect. It would be better if the failed script could be safely retry, in case of something goes wrong during the migration. For this purpose, the migration scripts should be well-designed. For example, if you created a temporary table in the Up method, it should be dropped before exiting, regardless of success or failure. Using the defer statement to do some cleanup is a good idea. Let's demonstrate this idea with a concrete example."),(0,a.kt)("p",null,"Suppose we want to recalculate the column ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," of the table ",(0,a.kt)("inlineCode",{parentName:"p"},"user")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"rename ",(0,a.kt)("inlineCode",{parentName:"li"},"user")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"user_bak")," (stop if error, define ",(0,a.kt)("inlineCode",{parentName:"li"},"defer")," to rename back on error)"),(0,a.kt)("li",{parentName:"ol"},"create new ",(0,a.kt)("inlineCode",{parentName:"li"},"user")," (stop if error, define ",(0,a.kt)("inlineCode",{parentName:"li"},"defer")," to drop TABLE on error)"),(0,a.kt)("li",{parentName:"ol"},"convert data from ",(0,a.kt)("inlineCode",{parentName:"li"},"user_bak")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"user")," (stop if error)"),(0,a.kt)("li",{parentName:"ol"},"drop ",(0,a.kt)("inlineCode",{parentName:"li"},"user_bak"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},'\ntype User struct {\n    name string `gorm:"type:varchar(255)"`\n}\n\nfunc (User) TableName() string {\n    return "user"\n}\n\ntype NewUser struct {\n    name string `gorm:"type:text"`\n}\n\nfunc (NewUser) TableName() string {\n    return "user"\n}\n\ntype UserBak struct {\n    name string `gorm:"type:varchar(255)"`\n}\n\nfunc (UserBak) TableName() string {\n    return "user_bak"\n}\n\nfunc (*exampleScript) Up(ctx context.Context, db *gorm.DB) (errs errors.Error) {\n    var err error\n\n    // rename the user_bak to cache old table\n    err = db.Migrator().RenameTable(&User{}, &UserBak{})\n    if err != nil {\n        return errors.Default.Wrap(err, "error no rename user to user_bak")\n    }\n\n    // rollback for rename back\n    defer func() {\n        if errs != nil {\n            err = db.Migrator().RenameTable(&UserBak{}, &User{})\n            if err != nil {\n                errs = errors.Default.Wrap(err, fmt.Sprintf("fail to rollback table user_bak , you must to rollback by yourself. %s", err.Error()))\n            }\n        }\n    }()\n\n    // create new user table\n    err = db.Migrator().AutoMigrate(&NewUser{})\n\n    if err != nil {\n        return errors.Default.Wrap(err, "error on auto migrate user")\n    }\n\n    // rollback for create new table\n    defer func() {\n        if errs != nil {\n            err = db.Migrator().DropTable(&User{})\n            if err != nil {\n                errs = errors.Default.Wrap(err, fmt.Sprintf("fail to rollback table OldTable , you must to rollback by yourself. %s", err.Error()))\n            }\n        }\n    }()\n\n    // update old id to new id and write to the new table\n    cursor, err := db.Model(&UserBak{}).Rows()\n    if err != nil {\n        return errors.Default.Wrap(err, "error on select NewTable")\n    }\n    defer cursor.Close()\n\n    // caculate and save the data to new table\n    batch, err := helper.NewBatchSave(api.BasicRes, reflect.TypeOf(&NewUser{}), 200)\n    if err != nil {\n        return errors.Default.Wrap(err, "error getting batch from table user")\n    }\n    defer batch.Close()\n    for cursor.Next() {\n        ot := UserBak{}\n        err = db.ScanRows(cursor, &ot)\n        if err != nil {\n            return errors.Default.Wrap(err, "error scan rows from table user_bak")\n        }\n        nt := NewUser(ot)\n\n        nt.name = nt.name + "new"\n\n        err = batch.Add(&nt)\n        if err != nil {\n            return errors.Default.Wrap(err, "error on user batch add")\n        }\n    }\n\n    // drop the old table\n    err = db.Migrator().DropTable(&UserBak{})\n    if err != nil {\n        return errors.Default.Wrap(err, "error no drop user_bak")\n    }\n}\n\n')))}u.isMDXComponent=!0}}]);
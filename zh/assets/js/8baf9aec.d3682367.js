"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[8554],{38131:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var a=t(87462),o=(t(67294),t(3905));t(61839);const l={title:"DORA - Deployment Frequency",description:"DORA - Deployment Frequency\n",sidebar_position:18},r=void 0,d={unversionedId:"Metrics/DeploymentFrequency",id:"version-v0.14/Metrics/DeploymentFrequency",title:"DORA - Deployment Frequency",description:"DORA - Deployment Frequency\n",source:"@site/versioned_docs/version-v0.14/Metrics/DeploymentFrequency.md",sourceDirName:"Metrics",slug:"/Metrics/DeploymentFrequency",permalink:"/zh/docs/Metrics/DeploymentFrequency",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.14/Metrics/DeploymentFrequency.md",tags:[],version:"v0.14",sidebarPosition:18,frontMatter:{title:"DORA - Deployment Frequency",description:"DORA - Deployment Frequency\n",sidebar_position:18},sidebar:"docsSidebar",previous:{title:"Build Success Rate",permalink:"/zh/docs/Metrics/BuildSuccessRate"},next:{title:"DORA - Lead Time for Changes",permalink:"/zh/docs/Metrics/LeadTimeForChanges"}},s={},i=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],m={toc:i};function p(e){let{components:n,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,o.kt)("p",null,"How often an organization deploys code to production or release it to end users."),(0,o.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,o.kt)("p",null,"Deployment frequency reflects the efficiency of a team's deployment. A team that deploys more frequently can deliver the product faster and users' feature requirements can be met faster."),(0,o.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,o.kt)("p",null,"DORA dashboard. See ",(0,o.kt)("a",{parentName:"p",href:"https://grafana-lake.demo.devlake.io/grafana/d/qNo8_0M4z/dora?orgId=1"},"live demo"),"."),(0,o.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,o.kt)("p",null,"Deployment frequency is calculated based on the number of deployment days, not the number of deployments, e.g.,daily, weekly, monthly, yearly."),(0,o.kt)("p",null,"Below are the benchmarks for different development teams from Google's report. DevLake uses the same benchmarks."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Groups"),(0,o.kt)("th",{parentName:"tr",align:null},"Benchmarks"),(0,o.kt)("th",{parentName:"tr",align:null},"DevLake Benchmarks"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Elite performers"),(0,o.kt)("td",{parentName:"tr",align:null},"On-demand (multiple deploys per day)"),(0,o.kt)("td",{parentName:"tr",align:null},"On-demand")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"High performers"),(0,o.kt)("td",{parentName:"tr",align:null},"Between once per week and once per month"),(0,o.kt)("td",{parentName:"tr",align:null},"Between once per week and once per month")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Medium performers"),(0,o.kt)("td",{parentName:"tr",align:null},"Between once per month and once every 6 months"),(0,o.kt)("td",{parentName:"tr",align:null},"Between once per month and once every 6 months")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Low performers"),(0,o.kt)("td",{parentName:"tr",align:null},"Fewer than once per six months"),(0,o.kt)("td",{parentName:"tr",align:null},"Fewer than once per six months")))),(0,o.kt)("p",null,(0,o.kt)("i",null,"Source: 2021 Accelerate State of DevOps, Google")),(0,o.kt)("b",null,"Data Sources Required"),(0,o.kt)("p",null,"This metric relies on deployments collected in multiple ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open APIs of Jenkins, GitLab, GitHub, etc."),(0,o.kt)("li",{parentName:"ul"},"Webhook for general CI tools."),(0,o.kt)("li",{parentName:"ul"},"Releases and PR/MRs from GitHub, GitLab APIs, etc.")),(0,o.kt)("b",null,"Transformation Rules Required"),(0,o.kt)("p",null,"This metric relies on the deployment configuration in Jenkins, GitLab or GitHub transformation rules to let DevLake know what CI builds/jobs can be regarded as deployments."),(0,o.kt)("b",null,"SQL Queries"),(0,o.kt)("p",null,"If you want to measure the monthly trend of deployment count as the picture shown below, run the following SQL in Grafana."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(46667).Z,width:"1354",height:"610"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"with _deployments as (\n-- get the deployment count each month\n    SELECT\n        date_format(finished_date,'%y/%m') as month,\n        COUNT(distinct id) AS deployment_count\n    FROM\n        cicd_tasks\n    WHERE\n        type = 'DEPLOYMENT'\n        and result = 'SUCCESS'\n    GROUP BY 1\n),\n\n_calendar_months as(\n-- deal with the month with no deployments\n    SELECT date_format(CAST((SYSDATE()-INTERVAL (month_index) MONTH) AS date), '%y/%m') as month\n    FROM ( SELECT 0 month_index\n            UNION ALL SELECT   1  UNION ALL SELECT   2 UNION ALL SELECT   3\n            UNION ALL SELECT   4  UNION ALL SELECT   5 UNION ALL SELECT   6\n            UNION ALL SELECT   7  UNION ALL SELECT   8 UNION ALL SELECT   9\n            UNION ALL SELECT   10 UNION ALL SELECT  11\n        ) month_index\n    WHERE (SYSDATE()-INTERVAL (month_index) MONTH) > SYSDATE()-INTERVAL 6 MONTH \n)\n\nSELECT \n    cm.month, \n    case when d.deployment_count is null then 0 else d.deployment_count end as deployment_count\nFROM \n    _calendar_months cm\n    left join _deployments d on cm.month = d.month\nORDER BY 1\n")),(0,o.kt)("p",null,"If you want to measure in which category your team falls into as the picture shown below, run the following SQL in Grafana."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(7243).Z,width:"674",height:"376"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"with last_few_calendar_months as(\n-- get the last few months within the selected time period in the top-right corner\n    SELECT CAST((SYSDATE()-INTERVAL (H+T+U) DAY) AS date) day\n    FROM ( SELECT 0 H\n            UNION ALL SELECT 100 UNION ALL SELECT 200 UNION ALL SELECT 300\n        ) H CROSS JOIN ( SELECT 0 T\n            UNION ALL SELECT  10 UNION ALL SELECT  20 UNION ALL SELECT  30\n            UNION ALL SELECT  40 UNION ALL SELECT  50 UNION ALL SELECT  60\n            UNION ALL SELECT  70 UNION ALL SELECT  80 UNION ALL SELECT  90\n        ) T CROSS JOIN ( SELECT 0 U\n            UNION ALL SELECT   1 UNION ALL SELECT   2 UNION ALL SELECT   3\n            UNION ALL SELECT   4 UNION ALL SELECT   5 UNION ALL SELECT   6\n            UNION ALL SELECT   7 UNION ALL SELECT   8 UNION ALL SELECT   9\n        ) U\n    WHERE\n        (SYSDATE()-INTERVAL (H+T+U) DAY) > $__timeFrom()\n),\n\n_days_weeks_deploy as(\n    SELECT\n            date(DATE_ADD(last_few_calendar_months.day, INTERVAL -WEEKDAY(last_few_calendar_months.day) DAY)) as week,\n            MAX(if(deployments.day is not null, 1, 0)) as week_deployed,\n            COUNT(distinct deployments.day) as days_deployed\n    FROM \n        last_few_calendar_months\n        LEFT JOIN(\n            SELECT\n                DATE(finished_date) AS day,\n                id\n            FROM cicd_tasks\n            WHERE\n                type = 'DEPLOYMENT'\n                and result = 'SUCCESS') deployments ON deployments.day = last_few_calendar_months.day\n    GROUP BY week\n    ),\n\n_monthly_deploy as(\n    SELECT\n            date(DATE_ADD(last_few_calendar_months.day, INTERVAL -DAY(last_few_calendar_months.day)+1 DAY)) as month,\n            MAX(if(deployments.day is not null, 1, 0)) as months_deployed\n    FROM \n        last_few_calendar_months\n        LEFT JOIN(\n            SELECT\n                DATE(finished_date) AS day,\n                id\n            FROM cicd_tasks\n            WHERE\n                type = 'DEPLOYMENT'\n                and result = 'SUCCESS') deployments ON deployments.day = last_few_calendar_months.day\n    GROUP BY month\n    ),\n\n_median_number_of_deployment_days_per_week as (\n    SELECT x.days_deployed as median_number_of_deployment_days_per_week from _days_weeks_deploy x, _days_weeks_deploy y\n    GROUP BY x.days_deployed\n    HAVING SUM(SIGN(1-SIGN(y.days_deployed-x.days_deployed)))/COUNT(*) > 0.5\n    LIMIT 1\n),\n\n_median_number_of_deployment_days_per_month as (\n    SELECT x.months_deployed as median_number_of_deployment_days_per_month from _monthly_deploy x, _monthly_deploy y\n    GROUP BY x.months_deployed\n    HAVING SUM(SIGN(1-SIGN(y.months_deployed-x.months_deployed)))/COUNT(*) > 0.5\n    LIMIT 1\n)\n\nSELECT \n    CASE  \n        WHEN median_number_of_deployment_days_per_week >= 3 THEN 'On-demand'\n        WHEN median_number_of_deployment_days_per_week >= 1 THEN 'Between once per week and once per month'\n        WHEN median_number_of_deployment_days_per_month >= 1 THEN 'Between once per month and once every 6 months'\n        ELSE 'Fewer than once per six months' END AS 'Deployment Frequency'\nFROM _median_number_of_deployment_days_per_week, _median_number_of_deployment_days_per_month\n")),(0,o.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Trunk development. Work in small batches and often merge their work into shared trunks."),(0,o.kt)("li",{parentName:"ul"},"Integrate CI/CD tools for automated deployment"),(0,o.kt)("li",{parentName:"ul"},"Improve automated test coverage")))}p.isMDXComponent=!0},46667:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/deployment-frequency-monthly-e3d6db34bbe66ff899f5dc15ae0716be.jpeg"},7243:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/deployment-frequency-text-2ebe079803f3e982984f348da2ff4bf5.jpeg"}}]);
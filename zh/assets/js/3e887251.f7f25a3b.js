"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[9489],{57585:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));t(61839);const o={title:"Jira",description:"Jira Plugin\n"},r=void 0,s={unversionedId:"Plugins/jira",id:"Plugins/jira",title:"Jira",description:"Jira Plugin\n",source:"@site/docs/Plugins/jira.md",sourceDirName:"Plugins",slug:"/Plugins/jira",permalink:"/zh/docs/next/Plugins/jira",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Plugins/jira.md",tags:[],version:"current",frontMatter:{title:"Jira",description:"Jira Plugin\n"},sidebar:"docsSidebar",previous:{title:"Jenkins",permalink:"/zh/docs/next/Plugins/jenkins"},next:{title:"PagerDuty",permalink:"/zh/docs/next/Plugins/pagerduty"}},l={},c=[{value:"Summary",id:"summary",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Collect Data From JIRA",id:"collect-data-from-jira",level:2},{value:"API",id:"api",level:2},{value:"Data Connections",id:"data-connections",level:3},{value:"Type mappings setting",id:"type-mappings-setting",level:3}],p={toc:c};function d(n){let{components:e,...t}=n;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This plugin collects Jira data through Jira Cloud REST API. It then computes and visualizes various engineering metrics from the Jira data."),(0,i.kt)("img",{width:"2035",alt:"jira metric display",src:"https://user-images.githubusercontent.com/2908155/132926143-7a31d37f-22e1-487d-92a3-cf62e402e5a8.png"}),(0,i.kt)("h2",{id:"metrics"},"Metrics"),(0,i.kt)("p",null,"Metrics that can be calculated based on the data collected from Jira:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/next/Metrics/RequirementCount"},"Requirement Count")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/next/Metrics/RequirementLeadTime"},"Requirement Lead Time")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/next/Metrics/RequirementDeliveryRate"},"Requirement Delivery Rate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/next/Metrics/RequirementGranularity"},"Requirement Granularity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/next/Metrics/BugAge"},"Bug Age")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/next/Metrics/BugCountPer1kLinesOfCode"},"Bug Count per 1k Lines of Code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/next/Metrics/IncidentAge"},"Incident Age")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/next/Metrics/IncidentCountPer1kLinesOfCode"},"Incident Count per 1k Lines of Code"))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Configuring Jira via ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/next/UserManuals/ConfigUI/Jira"},"config-ui"),"."),(0,i.kt)("h2",{id:"collect-data-from-jira"},"Collect Data From JIRA"),(0,i.kt)("p",null,"To collect data, select ",(0,i.kt)("inlineCode",{parentName:"p"},"Advanced Mode")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Pipeline Run")," page and paste a JSON config like the following:"),(0,i.kt)("blockquote",null,(0,i.kt)("font",{color:"#ED6A45"},"Warning: Data collection only supports single-task execution, and the results of concurrent multi-task execution may not meet expectations.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n  [\n    {\n      "plugin": "jira",\n      "options": {\n          "connectionId": 1,\n          "boardId": 8,\n          "since": "2006-01-02T15:04:05Z"\n      }\n    }\n  ]\n]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connectionId"),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"ID")," field from ",(0,i.kt)("strong",{parentName:"li"},"JIRA Integration")," page."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boardId"),': JIRA board id, see "Find Board Id" for details.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"since"),": optional, download data since a specified date only.")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"data-connections"},"Data Connections"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Get all data connection")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-GET",metastring:"/plugins/jira/connections","/plugins/jira/connections":!0},'[\n  {\n    "ID": 14,\n    "CreatedAt": "2021-10-11T11:49:19.029Z",\n    "UpdatedAt": "2021-10-11T11:49:19.029Z",\n    "name": "test-jira-connection",\n    "endpoint": "https://merico.atlassian.net/rest",\n    "basicAuthEncoded": "basicAuth",\n    "epicKeyField": "epicKeyField",\n      "storyPointField": "storyPointField"\n  }\n]\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Create a new data connection")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-POST",metastring:"/plugins/jira/connections","/plugins/jira/connections":!0},'{\n    "name": "jira data connection name",\n    "endpoint": "jira api endpoint, i.e. https://merico.atlassian.net/rest",\n    "basicAuthEncoded": "generated by `echo -n {jira login email}:{jira token} | base64`",\n    "epicKeyField": "name of customfield of epic key",\n    "storyPointField": "name of customfield of story point",\n    "typeMappings": { // optional, send empty object to delete all typeMappings of the data connection\n        "userType": {\n            "standardType": "devlake standard type"\n        }\n    }\n}\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Update data connection")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-PUT",metastring:"/plugins/jira/connections/:connectionId","/plugins/jira/connections/:connectionId":!0},'{\n    "name": "jira data connection name",\n    "endpoint": "jira api endpoint, i.e. https://merico.atlassian.net/rest",\n    "basicAuthEncoded": "generated by `echo -n {jira login email}:{jira token} | base64`",\n    "epicKeyField": "name of customfield of epic key",\n    "storyPointField": "name of customfield of story point",\n    "typeMappings": { // optional, send empty object to delete all typeMappings of the data connection\n        "userType": {\n            "standardType": "devlake standard type",\n        }\n    }\n}\n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Get data connection detail")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-GET",metastring:"/plugins/jira/connections/:connectionId","/plugins/jira/connections/:connectionId":!0},'{\n    "name": "jira data connection name",\n    "endpoint": "jira api endpoint, i.e. https://merico.atlassian.net/rest",\n    "basicAuthEncoded": "generated by `echo -n {jira login email}:{jira token} | base64`",\n    "epicKeyField": "name of customfield of epic key",\n    "storyPointField": "name of customfield of story point",\n    "typeMappings": { // optional, send empty object to delete all typeMappings of the data connection\n        "userType": {\n            "standardType": "devlake standard type",\n        }\n    }\n}\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Delete data connection")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-DELETE",metastring:"/plugins/jira/connections/:connectionId","/plugins/jira/connections/:connectionId":!0},"")),(0,i.kt)("h3",{id:"type-mappings-setting"},"Type mappings setting"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"mappings struct ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"/blueprints/{blueprintId}","/blueprints/{blueprintId}":!0},'{\n  "settings": {\n    "connections": \n    [{\n        "scope": \n        [{\n            "transformation":\n            {\n              "epicKeyField": "",\n              "storyPointField": "",\n              "remotelinkCommitShaPattern": "",\n              "typeMappings": \n              {\n                  "<USER_TYPE_1>": \n                  {\n                      "standardType": "<STD_TYPE_1>",\n                      "statusMappings": \n                      {\n                          "<USER_STATUS_a_from_USER_TYPE_1>": { "standardStatus": "<STD_STATUS_1>" },\n                          "<USER_STATUS_a_from_USER_TYPE_2>": { "standardStatus": "<STD_STATUS_2>" }\n                      }\n                  }\n              }\n            }\n        }]\n    }]\n  }\n}\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"set mappings example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"PATCH /blueprints/{blueprintId}",PATCH:!0,"/blueprints/{blueprintId}":!0},'{\n  "name": "jira-test",\n  "mode": "NORMAL",\n  "plan": \n  [\n    [\n      {\n        "plugin": "jira",\n        "subtasks": \n        [\n          "collectStatus",\n          "extractStatus",\n          "collectProjects",\n          "extractProjects",\n          "collectBoard",\n          "extractBoard",\n          "collectIssueTypes",\n          "extractIssueType",\n          "collectIssues",\n          "extractIssues",\n          "collectIssueChangelogs",\n          "extractIssueChangelogs",\n          "collectAccounts",\n          "collectWorklogs",\n          "extractWorklogs",\n          "collectRemotelinks",\n          "extractRemotelinks",\n          "collectSprints",\n          "extractSprints",\n          "convertBoard",\n          "convertIssues",\n          "convertWorklogs",\n          "convertIssueChangelogs",\n          "convertSprints",\n          "convertSprintIssues",\n          "convertIssueCommits",\n          "extractAccounts",\n          "convertAccounts",\n          "collectEpics",\n          "extractEpics"\n        ]\n      }\n    ]\n  ],\n  "enable": true,\n  "cronConfig": "0 0 * * *",\n  "isManual": true,\n  "settings": {\n    "connections": \n    [{\n        "connectionId": 1,\n        "plugin": "jira",\n        "scope": \n        [{\n            "entities": \n            [\n              "TICKET",\n              "CROSS"\n            ],\n            "options": { "boardId": 1 },\n            "transformation":\n            {\n              "epicKeyField": "",\n              "storyPointField": "",\n              "remotelinkCommitShaPattern": "",\n              "typeMappings": \n              {\n                  "Task1": \n                  {\n                      "standardType": "Task1",\n                      "statusMappings": \n                      {\n                          "done": { "standardStatus": "hello world" },\n                          "new":  { "standardStatus": "nice to meet you" }\n                      }\n                  },\n                  "Task2": \n                  {\n                      "standardType": "Task2",\n                      "statusMappings": \n                      {\n                          "done": { "standardStatus": "hello world" },\n                          "new":  { "standardStatus": "nice to meet you too" }\n                      }\n                  }\n              }\n            }\n        }]\n    }],\n    "version": "1.0.0"\n  },\n  "id": 1,\n  "createdAt": "2022-08-30T11:25:10.699Z",\n  "updatedAt": "2022-08-30T11:28:22.891Z"\n}\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"API forwarding\nFor example:\nRequests to ",(0,i.kt)("inlineCode",{parentName:"li"},"http://your_devlake_host/plugins/jira/connections/1/proxy/rest/agile/1.0/board/8/sprint"),"\nwould be forwarded to ",(0,i.kt)("inlineCode",{parentName:"li"},"https://your_jira_host/rest/agile/1.0/board/8/sprint"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-GET",metastring:"/plugins/jira/connections/:connectionId/proxy/rest/*path","/plugins/jira/connections/:connectionId/proxy/rest/*path":!0},'{\n    "maxResults": 1,\n    "startAt": 0,\n    "isLast": false,\n    "values": [\n        {\n            "id": 7,\n            "self": "https://merico.atlassian.net/rest/agile/1.0/sprint/7",\n            "state": "closed",\n            "name": "EE Sprint 7",\n            "startDate": "2020-06-12T00:38:51.882Z",\n            "endDate": "2020-06-26T00:38:00.000Z",\n            "completeDate": "2020-06-22T05:59:58.980Z",\n            "originBoardId": 8,\n            "goal": ""\n        }\n    ]\n}\n')))}d.isMDXComponent=!0}}]);
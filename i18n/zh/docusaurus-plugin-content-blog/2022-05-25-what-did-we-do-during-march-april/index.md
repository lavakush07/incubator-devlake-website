---
slug: what-did-we-do-during-march-april
title: 3-4月份我们干了些什么？
authors: klesh
tags: [devlake, refactor]
---

## 引述

自去年7月份 DevLake kicked off 以来，项目一直处于被各种 demo / event 追赶的状态，为此，我们放弃了很多，比如代码风格，单元测试，代码注释，文档的维护，issue的维护，用户的友好性等。当然，也不是说完全一点没有，只是在大面上，项目总体呈一种野蛮生长的状态。大家对项目的期望也一直是能“跑起来就行”，“主流程正常就OK”，至于一些稳定性，对异常情况的忍耐度，嗯，大抵只用重启大法解决。这说明了，项目整体代码质量存在着基础不稳的情况，需要夯实，架构上也需要演进，帮助插件最大程度地解决一些共性的问题。

没有一种架构，或者具体到设计，是万能的，可以解决一切的问题。不基于实际情况，凭空去猜想，再做出设计，其结果容易过度优化，甚至更糟，比如，由于现实与理想差距过大，导致整个设计要推倒重来。从这个角度来看，野蛮生长也并不完全是一件坏事，早期我们有很多要怎么怎么做，处理哪些哪些场景的讨论，怎么满足用户画象1的前提下，同时兼顾画像2的情景等等。要考虑的情况太多了，要不要队列？要不要多级队列？任务编排怎么做？要不要做DAG？结果是谁也说服不了谁，因为A提出的方案，随即就会有B提出一种或多种情况是该方案无法解决的，而大家又不能确定A方案要解决的问题到底有多严重，或者B提出的情况会不会出现？幸运的是，我们最后放弃了各种高大上的架构，选择在框架级只做了一个简单的任务执行逻辑，把具体的处理逻辑都交由插件自行解决，自由发挥。

经过半年多的发展，我们慢慢地发现了一些共通的模式，最终在 3-4 月份实现大爆发：

## 我们发现了什么？

### 数据流的模式

所有的数据源插件，都需要从 api 读取数据 (collection)，然后提取(extraction)，再转换(conversion)到统一的实体层(Domain Layer Data，比如 jira 的 issue 和 github 的 issue 得统一到 issue 这张表里面)，在此之前可能还会有一些维护转换的任务要做，比如基于 jira issue changelog 的信息，归结出 issue 在 sprints 之间的停留时间之类的，我们称之为 enrichment。基本上，这几个类型的任务就能涵盖大多数数据源集成的需要。

在这一条数据流动的路径中，我们发现，最大的瓶颈和难点在于 collection 这一步，包括但不限于：

1. api 会有 rate limit，比如每秒10个，每小时2000个之类
2. 在 rate limit 的限制下，希望尽量快地拉取数据，并发是必须的
3. 在并发的情况下，必须支持随时可以取消正在运行的任务
4. 在遇到可恢复的错误，需要自动化地重试，超限后变成不可恢复的错误
5. 对于不可恢复的错误，需要记录出错的信息，以便 debug

这上面的每一个问题，单独处理相对简单，但要全部顾及，复杂度直接原地爆炸。如果每个插件都要自己实现一次的话，工作量极大还不好维护，出问题了要一个个地修，非常麻烦。虽然具体的 api 是不同的，但上面这些模式却是相通的，我们就考虑，是不是可以由框架提供某种辅助类来统一地处理。同理，extraction/conversion一样有不少共性的操作，可以由框架来提供相应的辅助类，使得插件开发的工作量极大缩小。这便是我们的重头戏之一 **提供一系列 subtask helpers 来减轻插件的开发和维护的负担**。

从 api 获取数据(collection)，还存在着另一个问题，就是拉取数据所花费的时间与数据源的规模成正比，这个过程往往是整个数据流程中的耗时最长的，因为不同于其它的任务只依赖于自身数据库，它依赖的是外部数据源，除了规模，还要要受网络延时的影响，还有 api 的速率限制等因素的影响。按原有的设计，数据的拉取和提取(collection/extraction)是在一个任务里面同时进行的，一步到位存储到数据库。这样的实现虽然简单，但有一个很大的弊端，就是 api 返回的数据，有很大一部分被直接丢弃了，当后续的任务需要重跑时，就需要重新去 api 拉取。举个例子，JIRA 插件中的 Issue 实体中，我们需要提取它是属于哪个 Epic 的，而在 JIRA API 中，Epic 这个属于是通过 自定义字段的功能实现的，它在 Issue 结构体中的属性名大概是 `customfield_1234` 这样，其中 `1234` 在每个 JIRA 的实例都不一样，这就需要用户进行配置，我们才能知道取哪个属性作为 Epic 信息，而一旦用户配错了，就得重跑整个流程，奇慢无比。为此，我们又捡起之前曾一度被抛弃的 **Raw Data Layer** ，它是一个 api 返回结果的缓存层，负责存储原汁原味的 api response json。有了这一层缓存，我们只需跑一下 extraction 后面的任务即可达到数据修正的目的，避免 collection 带来的巨大开销。

### 用户对于数据定制的需要

其实，支持用户对 DevLake 进行定制化，一直是我们的方针。早期我们更关注的是对于图表的定制化，数据层面的定制性基本没有。具体地讲，用户可能需要基于我们现有的表，汇总出一些新的表，或者我们预置的表结构不够方便，他想要自己转化出一些宽表。又或者，他想导入自己的一些表，然后与我们的表进行整合？虽然，原则上，这些事都可以通过写插件的方式来实现，但考虑到我们的用户群体可能有不少是是数据分析师，让他们去写 golang 插件还是有一定门槛。因此，我们开发了 **dbt插件** ，用户可以基于 sql 编写自己的转换逻辑，可编入 DevLake 的 pipeline 接受统一调度，简单地说就是用户可以在原有的任务执行流程中插入他需要的 dbt 任务 。

### 大用户的吞吐

直到 v0.9，DevLake 都只是单机模式，也就是说，所有的任务都只能在一台机器上面执行。这对大部分的用户来讲，也就够用了。但体量大的用户也是存在的，当用户需要同步的数据太多，分布太广的时候，单机的吞吐量是个极大的限制。为了解决这个问题，我们支持了 **基于 temporal 的分布式执行** 模式。整个系统拆成 server 和 worker 两部分，server 接受任务请求，具体的任务由 worker 执行。这听起来是个简单的事情，然而却对我们架构提出了重大挑战，原因是在单机模式下，我们所有的子任务，都直接依赖了一些全局资源，比如说，数据库，日志这些。也许你会认为，这没啥大不了的吧，全局就全局呗，只要在 worker 启动之前把这些全局变量初始化好不就行了吗？是的，但那远远称不上是一个合理的设计，更加不是一个优雅的模式。假设，要是这个数据库连接变了呢？难道得把所有的 server / workers 的配置都手动改一下，然后重启吗？还有太多其它的问题，就不一一提了，都是些分布式系统要考虑基本问题。所以，最合理的做法，是把这些子任务全部进行解耦，所有依赖的资源，在执行的时候再行传入。这样的做法也带来了另外一个好处，后续我们做 unit-test 或者 e2e-test 也容易实现。

### 升级竟然要 drop database?

是的，在 v0.9  及之前的版本，所有的的升级，需要把原来的数据库给干掉，才能确保系统能正常运行。虽说 DevLake 本身没有什么业务数据，只要重新同步一下，总能得到相同的结果。但操作起来一是别扭，二是耗费时间。DevLake 支持数据库迁移的难点在于，不同于一般的商业系统，在升级的时候由专门的人员针对特定数据库跑一下 sql 脚本就行。我们希望我们的数据迁移是全自动化的，智能的，还同时能兼容各种关系型数据库。在经过长期的调研和各种 battle ，我们基于 gorm 的 Migrator 设计了一套适 DevLake 的 **db migration 系统**。不需要用户干预，直接换镜像版本，启动后自动升级。

### 插件接口的拆分

以前，我们的插件只需要实现唯一的一个接口 `Plugin`，这个接口定义了所有插件可能会提供的功能，比如说插件一般会需要跑任务，对外暴露 api ，在初始化的时候做一些事情，或者声明自己的 db migration scripts 等等。慢慢地，我们发现，这样很不科学：如果一个插件它没有 api ，也一样要实现这个方法，否则它就不会被系统认可。那么，接口拆分就是顺理成章的事情。于是乎，秉承着一不做二不休的理念，我们把它按功能拆分到最小粒度，分别是`PluginMeta/PluginInit/PluginTask/PluginApi/PluginDbMigration`等接口，而唯一必须要实现的接口是 `PluginMeta`，其它的，则是根据插件自身能提供的，或者需要的功能进行选择性实现。

### 其它

除此以后，还有进度明细的优化，日志的优化，canceling 优化等等， 点太多了，也有很多细节由于时间关系来不及一一覆盖。

## 总结与展望

经过这次重构，我总结了几点经验：

- 对于不确定性太高的系统，不要着急进行设计，过多的讨论也没有意义，不如有一个简陋的框架先跑起来再说
- 站在用户角度去考虑，从具体的场景出发，解决实际的问题比什么都重要
- 优先考虑绝大多数用户的需要，但也不能放弃少数派的用户，因为他们的价值很高
- 有时候现成的轮子，不一定有自己造的好用，要根据自己的场景仔细去分析，结合工作量进行考量

这两个月以来，我们完成的事情，在我看来，是平时半年都未必做得完的。能达到这个程度，我们放弃了很多，比如说流程上，简化了，测试全靠手工，文档凑合着写，等等。最重要的是，全体小伙伴毫无怨言地全力付出！很感谢全体 DevLake 成员的奉献，你们是我遇到过所有战友中最棒的。

现在 DevLake 还是有很多不足，从技术上看，缺少测试/完善的文档是个硬伤。从用户体验上来看，也不够流畅。而现在，我们也正式进入了 apache incubator ，希望在不远的将来，我们能很好地解决这些问题，更进一步，接受更大的挑战！
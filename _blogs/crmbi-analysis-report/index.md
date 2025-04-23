---
title: "CRMBI分析报告"
date: 2023-10-01
layout: post
permalink: /blogs/crmbi-analysis-report/
toc: true
---
CRM发展至今已有20多年的历史，产品成熟度高，已从综合型CRM发展成垂直领域CRM、SCRM等各具特色的产品。**本文主要基于CRM通用旅程模型，整理归纳不同的主题：比如核心主干流程、偏向****C端****的营销策略、****AI****应用场景、并陆续整理偏B端的营销策略、大客户应对方案、****AIGC****营销实战过程、垂直领域方案等，最后形成类似知识库的内容，以供学习和参考。**文中方案内容或示例图片，来自自我绘制、互联网文章、行业优秀产品等。** 目前整体内容偏向于SCRM。**

**暂时无法在飞书文档外展示此内容**

*crm**通用旅程主要作用是梳理框架。目前其中的解决方案里的功能模块并不代表面向某一类（比如2b/2c/垂直群体），后续会根据具体客群和业务场景逐步拆解和完善。*


# 一、CRM核心流程

## 1.1 营销获客

### 1.1.1 矩阵账号管理

矩阵账号管理更适用于2c业务，因c端用户更多活跃于社交媒体，比如抖音、小红书、快手等。所以销售或运营会在这些平台中开展新媒体项目。

**痛点或期望：** 通常公司有多位运营人员，一个运营人员可能会有多个平台多个账号，账号数据会非常分散，手动统计各端数据工作量大，效率低。所以账号的统一监控是重要的目标，并且能够统一分析不同来源的数据情况，以便于筛选出优质账号。

**解决方案：** 通过对接各社交平台数据接口，实现抖音、视频号等账号管理与监控。推进与把控新媒体项目开展进度，提高运营人员的工作效率。核心功能有账号授权、账号管理、账号升级/降级功能。

1. **账号授权：** 抖音和快手的账号可以通过api授权的模式。员工在CRM中输入昵称、ID、主页链接后，完成账号添加的操作；再跳转至抖音、快手app确认授权完成调用接口获取账号信息与账号数据。小红书和头条的授权需要网页登录爬数据，每次要登录社媒软件授权，需要每半年重新授权一次。
2. **账号升降级：** 目前，社媒平台的直播数据均没有开放相关接口，但是可以采用第三方矩阵系统进行直播数据的导入。但需要控制花销成本，比如只购买1000个账号，优质的运营账号有权升级到此权限。

除社媒账号外，还有搜索引擎、广告投放等获客渠道、只是这些多数是对企账号，也需要统一对接到平台中来。



### 1.1.2 多渠道线索管理

**痛点或期望：** 希望把各个渠道的线索统一管理，清晰的了解各个渠道的过程数据和roi转化，以便于优化各个渠道的预算分配。此外，将多渠道的线索归集到同一平台后，会存在同一用户多次留资导致线索重复的问题。

**解决方案：**

1. **渠道授权：** 通过api等模式与各营销渠道打通，授权渠道名称，渠道活动名称等。
2. **留资内容获取：** 以抖音企业号为例，获取到的全量搜索内容包括：表单提交的线索手机号、在线咨询的线索手机号、智能电话的线索手机号、卡券/抽奖的线索手机号、直播的线索手机号、私信群聊的线索手机号。
3. **线索身份识别与合并：** 方式一是系统通过手机号+微信unionid的模式，自动统一用户身份。方式二是人工合并重复的线索，此方式用于如销售人员主动添加新线索时。

### 1.1.3 营销线索分析

**痛点或期望：** 多渠道的线索数据搜集再产出数据报表，人工处理成本高、处理不及时，影响营销策略的改进。

**解决方案：** 线索归集后，根据业务需求，对关键指标比如渠道线索数、成交数、转化率等进行统计和监测，及时为营销决策提供依据。

1. **账号数据：** 涉及到新媒体矩阵的渠道线索，通过账号数据报表总览筛选可培育的种子账号与选手。通常可以根据账号、平台、员工、部门、项目几个维度统计账号数据。
2. **内容数据：** 内容数据的类别，包括新媒体矩阵渠道内容、微信私域内容，活动座谈会展会多种类型。以不同渠道为划分不同维度，以内容为最小单元，定义关键指标，比如抖音平台，可包括作品名称、所属账号、播放数、点赞数、评论、分享、视频时长、等等，发现优质内容和潜力内容。又如以微信内容营销渠道为划分，指标可包括内容名称、观看人数、转发数、新增企微客户、新增视频号客户、所属员工推广次数等。
3. **线索数据：** 线索数据亦可以根据业务需求，从不同维度划分和定义指标。比如以线索本身为单元，定义包括：渠道线索数、已转化线索、客户数、订单数、订单金额等从线索到订单的漏斗转化分析，洞察营销问题，辅佐优化渠道的投入分配等。又如以营销项目为划分，定义包括：线索数、订单数、订单金额、投入成本等，计算每一营销项目的投入产出比，辅佐优化运营策略。


### 1.1.4 营销内容管理

良好的内容营销是引流、复购召回的关键。营销内容分发的渠道分为：抖音、小红书等媒体矩阵；有搜索引擎、头条等信息流；微信私域；线下座谈等宣发渠道。其中媒体矩阵更偏向于2c方式。

**痛点或期望：** 公司并非所有运营或销售都具备优秀的图文创作能力，此外，创作优质的营销内容人工和时间成本高，难以持续保持高产。

**解决方案：**

1. **素材库：** 素材库的来源可以分三类：第一是，可以是由内部新媒体运营策划人员原创，并由制度规定与发起员工或上下游伙伴的营销推广任务等，实现快速分享与推广，降低营销管理与协作成本。第二是，可以从第三方平台获取，比如从抖音热点宝获取和业务目标相关的高热点视频，比如"视频+食补养生" 。将爆款视频解析成文字，供员工改编使用。第三是可以由员工自行上传。
2. **竞品监测：** 更进一步的营销内容平台，可以提供内容竞品分析工具：自定义竞品账号，监测账号发布的短视频或直播内容，供运营和销售学习和借鉴，差异化营销竞争，提高营销效果。



## 1.2 客户培育

### 1.2.1 线索评分

**痛点或期望：** 获客的来源，除了媒体矩阵以外，还有信息流平台、搜索引擎、转介绍等多种渠道。在各渠道线索归集到位，最重要的任务就是快速的跟进客户，提高成单率。但现实常常是一位运营/销售/客服人员需要服务几十上百个客户，难以做到及时跟进每一位。

**解决方案：** 线索评分的主要作用是帮助员工快速筛选出高质量的客户，让员工可以有优先跟进最有价值的客户，从而提高线索的转化与成单率。线索评分可以应用在跟进初期做筛选判断，也可以应用于已对有客户，多次营销前的客户价值判断。线索评分通常包括，属性评分、行为评分、等级划分等。

根据公司目标客户的特有属性和服务阶段，配置不同的规则，只要客户资料中有获取到对应的字段，则系统根据规则自动进行加分。

1. **属性规则评分：** 属性主要是对线索匹配度的判断。比如渠道属性：通过活动报名的客户设置8分，转介绍的客户设置9分，通过电销呼出渠道的客户设置3分等。
2. **行为规则评分：** 行为主要是对线索意向度的判断。比如可定义内容相关、活动相关等。比如内容相关：客户访问过资料累计3分，客户每访问一次资料累计1分，如果根据以往运营经验看，部分内容转化率较高，则内容部分也可以设置不同的分值。比如活动相关：每报名一次累计1分，参与活动累计5分，查看回放累计5分等。
3. **等级规则划分：** 线索有分数累计后，如果再给线索做分级策略，一方面相较于数字，分级更便于浏览和记忆，增强跟进提效，也便于后续业务的会员体系、自动化运营等产品搭建。另一方面有助于后续的客户分层运营。对于等级规则，比如可以划分：SABCD，S级可以表示该线索具有极高的价值，已经成为了客户，比如包括多次的活动参加、多次转介绍等，对于S级线索我们应该给予高度关注，投入更多的资源跟进维护和多次转化。比如A级线索表示，具有一定质量有潜在价值，有较大概率成为付费客户，那么同样要给予重视，合理安排跟进计划。比如B级表示具有一定潜在价值，但是存在一定的不确定。C级表示潜在价值较低，D级表示潜在价值极低，可以暂时搁置等。

![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=N2M4OWI3YTU4MmM1OWI4ZjZiZWQxZDAxZWJmYjViNDFfb04wU3VIWnVRbU5lSVZSaWJoUDRWY3BCVVhrUllVVmdfVG9rZW46S2V1V2JCdzdlb1pPVzV4RXJURWNWUUgybjdJXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=YTgzYTlmOGI2MTNiNGMxZTA0NmY1YjI2NzM4ZjYzYjJfODBuVXpGd2ZQb001OGR1QlZ6TXBIOE95YTJTRkdkQnNfVG9rZW46RlZtUGJQOUtFb1FmMVJ4WHV4ZGM3bm95bmlkXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)

### 1.2.2 线索分配

**痛点或期望：** 多渠道的留资信息分散，如果不统一管理，会面临业务员走私单、线索跟进不及时被竞对抢先的问题。在线索分配过程中，会存在人工不公平、分配不合理的问题（比如甲销售熟悉并擅长搞定A业务线产品，但被给予的客户需求总是C业务线等现象）。

**解决方案：** 建立线索管理模块统一管理各渠道归集的线索。根据不同业务场景设定线索分配规则，通过自动化线索派发，降低人工跟进线索的繁琐、线索分配的不合理和不公平的问题。

#### 1.2.2.1 **分配规则**

1. 根据业务需要为线索设置不同分配条件，可以有效解决线索分配不合理的问题。比如：针对教育行业，B组D组擅长做国际业务线，可以设定线索在留资时有国际业务线倾向的客户都被分派B组D组，这样提高线索的转化率。
2. 根据业务需要为线索设置不同分配规则，可以有效解决线索分配不公平的问题。比如对于留资信息不明确的客户，设置循环分配模式，如：员工队列有:A、B、C三人，第一批数据有5条，第1条给A、第二条给B依次轮回，当第二批数据来时从C开始分配。又如，可以设置线索主动认领模式，消除线索分配不公平问题，提高员工的积极性。又如，对于员工自己的获取到的线索尽量分配给员工本人，若超出线索保有量，给其提前预警，允许其自行处理额外线索。

此外，分配规则可以用于鼓励优秀员工或考核员工，比如：定向派发40%（按线索比例或业绩比例的一定配额）的高分线索给业绩优秀的员工让优质销售跟进更多的优质客户，或定向派发不同业务线的线索给实习员工，作为培训考核指标。

![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=ZDg5ZDU0ZGJkNjkzNmJjYjQwNDE3ZjVjNGUwOWE3NDVfcW5GZzlLMFVoU0UxS3hFQWFBTDZYQ2M0eFJ0c2ZTV2dfVG9rZW46VGpXWWJCbWVwb3E5UGF4ZUc5YmMzb3BNbjZiXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=NTRlZGNhYzdiZjkzYTI1YTdjZGZkZjJhYTcyODg2MmFfa3pVa0ZlUkNUMXJOYUVvZGpkdGsyM2FKQVc3SUdlQUlfVG9rZW46U1JmbWJlZ05wb0FucE14MGNBOGMyaGlxbkNiXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=OWRkN2Q0N2M1ZDc4YWJjYjUzNTExOTZlYWJiOGQ3ZjZfNWZ2VkxKOWVQdkY0dEFyUXB5QmQ4UHZaQWNROHd0SklfVG9rZW46VWR0TGJ5MVpFb1VpajN4ZEh5WGN1clA2bldlXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)

#### 1.2.2.2 线索回收

**痛点或期望：** 员工拿到线索后，进入线索跟进环节。这一环节会出现的问题有：第一，员工没法及时的跟进手上线索，比如某销售员虽然拓客能力强，手上有很多自己拓展的客户线索，但因为手上线索多，跟进速度慢导致部分线索死在自己的手里。第二：对于很久未实现跟进，或跟进失败的线索，需要重新退回到线索池，等待再次培育激活或分配。

**解决方案：**

1. **保有量** **设置：** 通过设置线索的保有量，控制销售人员手上的线索数量，避免线索大量堆积集中在某几位成员手里，过多占用资源。
2. **线索回收：** 设置线索回收的条件和节点，比如定义线索级别为A类高质量的线索3天未跟进，就自动退回到线索池，定义线索级别B类的一般级别线索10天未跟进就自动退回，确保线索的高效利用，能够及时分配给其他员工；同时可以设置到期预警，以便于在线索接近回收节点时，及时的提醒员工，帮助督促员工加快跟进效率。

![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=OTM1MTcxYzkxZDU0NjE4Nzg5ZGM4OGFlZDcyNWM4ZTJfVnNPZUVtWTlwVURoT0NRMGI3Z25rOHAwS3B6RHRHSFFfVG9rZW46R0dFYWI4TXNSb3ViQnF4Nml3R2NOMU0xbmNiXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=NTljOTlkMjU0NzU1NzE2N2JlNTZhYzExZTZlMTY3MzdfTDFQSlkwaG9QTlZFcmVJZlJvV1FWMDJmOWtCNUd1SFBfVG9rZW46V3lWdGI3Smt2b0FQUWh4NlRiSGNzNlJRbjdiXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)

### 1.2.3 客户管理

**痛点或期望：**

1. **对客户需求了解的效率低：** 以往，销售人员对客户需求需要通过电话、聊天等沟通逐步挖掘，才能了解到客户真正的意图与诉求，并做销售记录。这种模式下的时间与人工成本都很高，并且人工记录的方式也不够详实。
2. **客户服务协同困难：** 当客户购买产品后，我方不仅会涉及到原销售、还会涉及到具体的产品或服务人员、售后客服等角色，如果没有客户信息的沉淀，客户信息存在孤岛，各角色之间难以做服务协同。

**解决方案：**

#### 1.2.3.1 画像标签

通过自动或手动添加客户标签的模式，方便快速的标注客户关键信息，进一步帮助销售或运营人员了解客户，有策略的跟进客户，吸引客户产生信任关系，提高客户的转化。具体内容包含：标签库、手动添加标签、自动打标签。

1. **标签库：** 比如在属性标签库中，根据客户的人口属性、购买意向等维护添加好标签。不过标签总归是关键环节和留资内容的关键词，建立标签库时应考虑标签可承接的实际场景，如果过于具体反而会增加运营销售人员的辨别成本。目前市面上有成体系的标签库模型，比如RFM等可借鉴。
2. **手动打标签：** 当面对同一个客户，不同部门交接服务后，必定有客户的一定认知，此时各个环节的人员则可以快速打上标签，即使作为月度考核内容，也不是太大负担。
3. **自动打标签：** 根据客户留资渠道、基础信息（地区、年龄等）、聊天关键词、在平台中的行为轨迹、消费属性等自动的给客户添加标签。比如在营养康疗领域，针对"高血脂"标签，设定当客户资料写入自动建立。那么当客户填写资料包含了此关键词后，标签自动建立。又如营养康疗行业来说，治疗管理时间较长，可以利用时间类型的标签画像，给客户打上"1疗程"，30天后会自动变更为"2疗程"。这样做，不仅画像更为准确，也节省客户画像的维护的成本。

![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=YTc1MTc2MDJjOTYzMWVlMzBjNWE3NzAxMDI0NGQxNDlfZFRMdzlaMENrd1drN29mdnhXUGt5UDFtd1pwckdJTEpfVG9rZW46VHNTdGJNbGx3bzJraUR4VTAwNGNWcXVzbmhnXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=YzUwNWMxZWJkODdjOGVlNDIwNjUxZTU4MWI5M2VjNmFfcmZLbHdUbG1OWUJZV0xuZWU2enNSVlU3cGVkUHFhdHVfVG9rZW46VXRkTGJQazhab29BZ3V4NDhWT2NMaGtnbmRkXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=Y2U2YjhmNzg1NzA2NmFkZWQ4Nzg3OGZkMWYxMDVmMGZfOG1nWm9ESlU5WmZkS0VCOFBiZTZiM1VVcG1qU0FVV0xfVG9rZW46T3hTRWJOcEV2b0dQb254dWJxbGNHN3BHbnhkXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)

#### 1.2.3.2 客户档案

**建立全链路模式的客户档案，** 归集客户的媒体留资、行为轨迹信息、通话记录、报名记录、消费记录等让散落在线索管理、活动管理、订单记录等各个模块的客户内容做统一的查看，让客户相关的员工，都具备看到客户全生命旅程的跟进记录。

![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=NWIxOWQwZDdmOTJlZDY3ZjA3ZjRjNzY1YzFmYmJhNDJfdkZXQUsyQ0xSc2pEa2x3VjFSakZkenE4R0N3UHZDd3hfVG9rZW46RDkydmJENkhsb2wzSnl4NjlyY2NsOWw2bnpjXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)

### 1.2.4 客户运营

**痛点或期望：**

1. **客户跟进效率低：** 运营或销售日常要跟进新用户维护潜客从几十到上百。第一，员工拿到线索后，难以做到及时的逐一添加和联络用户，人工成本高，容易导致客户被竞对抢先或流失。第二，员工跟进线索时，如果每一位客户都需要从会话切到后台去查看客户档案，非常麻烦，工作效率低。
2. **潜客维护成本高：** 比如，对于群互动，一个运营人员会负责很多个群，开群的时间也不一样，如果要记住每个群的进度是一件比较难的事情，而且每天要花大量的时间在群互动和发消息上，也会导致过往构建的大量客户服务群，逐渐变成僵尸群，不断的拉新群活跃，维护成本高。
3. **销售培训成本高：** 以往，管理人员整理好标准话术用于新人培训或集体学习，时间成本高。此外，员工会因为业务知识太多，无法完全掌握，而在实际工作中运用的效果十分有限，影响客户跟进与转化。

**解决方案：**

#### 1.2.4.1 **引流活码**

针对客户跟进当员工拿到线索后，最常用的方式就是引流到私域微信继续跟进，常用方式是搜索客户微信号添加。引流活码可以帮助员工自动添加客户为好友，提高员工的客户跟进效率。引流活码类型主要有个人活码或群活码。

1. **活码配置：** 为二维码设置规则，比如客户分组、客户配额、最大上线数、欢迎语、客户标签等。
2. **关联活码：** 在能够展示二维码的营销内容中，比如线上线下海报，关联上配置好的二维码。
3. **活码应用：** 当客户扫描营销海报、视频等二维码后，系统会根据规则自动实施客户分配，自动发送设置好的欢迎语等文字，从而保障线索实时分配给员工，不会因没及时回复而流失，同时也能减少员工的重复性操作，提高线索跟进效率。

![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=N2IzMDMyZDhiZGFiODE4MGY1Mzc3OWQ1Mzg0ODc4ZjBfMGZZM25uTjVteUhzRzhjaElidTBXd2VyN0ptR0xHbmdfVG9rZW46UHBMamJlcXRPb3pzbHV4UkVpOGN2R08ybndjXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=NDM0NDBiN2RhMWZiZDk2NGQ2ODgxZmI5MmU3N2U4NWRfNnFmV3BrSWZQRDZqNUtHUWJtaTdMOWdsR2RrZldMQU5fVG9rZW46T3BsOGJTdWM0b0F5RFV4ajdXSGMzRXNkbkxlXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)

#### 1.2.4.2 会话工作台

建立会话工作台，并与对话窗口一起展示，方便员工在跟进线索时，查看客户画像档案，提高客户跟进效率。会话工作台的模块可以通过后台自定义，包括客户画像档案、话术库、资料库、互动工具（如问卷）、快捷回复等。

![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=Y2E0ZjY1MDU5OGM4M2Q4NDVkNTM3ZjFiY2RhM2U0MzlfMEttOGhIMG5SVGw3S2pWdVhMS1dvb1RZMVBZYkk2OUdfVG9rZW46TDA5bmJUd2Ezb2NsanV4dkh0WmNIVTJ2bnBiXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)

#### 1.2.4.3 群运营

把客户引流到私域是客户运营常用的方式，这样可以同时触及大量的用户，能够对用户快速教育、进行高频次的互动触发，应用于引流的品宣群、活动群、福利群的场景。

但是当社群数量多的时候，一个运营人员会负责很多个群，开群的时间也不一样，如果要记住每个群的进度是一件比较难的事情，而且每天要花大量的时间在群互动和发消息上，也会导致过往构建的大量客户服务群，逐渐变成僵尸群，不断的拉新群活跃，维护成本高。

**群 **SOP** ：** 可以提升群运营的效率， 降低成本，让运营人员将更多的精力放在与用户互动上，而非机械地运营操作。 包括，执行SOP设定、群日历，群打卡等互动模式设定。

![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=NjcyY2IxOTAyOTBkMTlmMTFmMmViNGY3Y2Y3NzExZTNfU1ZTSUs4akRNdTlmUFkzQ3ZjRDBZc0M1ZW5yaVlCOGRfVG9rZW46SWxRRWJKSGdYb1B3YzJ4MmlQS2NmVnJTbnZkXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)

#### 1.2.4.4 批量运营

通过给用户建立分层分组，按照不同类型的分组，进行批量自动化的通知活动等信息发送，降低潜客运营成本，并且能够较精准的提高运营效率。

1. **创建分组：** 比如为S级高价值客户设置为一组、为参加同一类活动的客户为一组等。
2. **定向运营：** 群组建立好后，在内容活活动推广等场景下可以应用。比如为S级高价值客户群发可免费参加的活动海报，为C级别还在了解产品，对产品感兴趣的潜客群发扫码助力0元听的讲座活动。
3. **自动化运营：** 例如，对近3个月在官网提交过申请试用，且回呼后短期暂无需求的客户，计划进行运营转化。第一天推送内容A，第3天发送内容B，第7天发送内容C。完成一个周期培育后，用户的平台活动（如浏览特定页面、下载资料、参与线上直播）将被系统追踪并赋予相应积分。例如，浏览产品介绍页面的用户得10分，下载白皮书得20分，参加线上直播得30分。比如当用户积分累计达到80分时，系统将自动提醒员工进行人工跟进。

![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=MDUzZjgzMGRhNWEzOGYzYWNkOWUyMjM1ZWMyZGQ1ZDBfWUV0SXFPNlFGVURrZmxybmdpcWdncDFpa0pQYjJnakJfVG9rZW46VWxHSWJQYU41b1ZCaTF4dnRVYWNvRU96bkRlXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=ZThiZTM2MTMwZDUzY2ZjYjU4ZDdjMTc2NWRjMDhiNThfVFphajE5TjFtNnExbzJEUFY3Wm1EaWY4S2licUExbkhfVG9rZW46SUtOYmJUNWpobzhBb294YVM3T2M1Y0JsblhTXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=YTQ1NDY1MzYwMmM0NDk1OTAzYTUyNDNiMTA3ZTJiM2VfVExlTHhTMGE0djlwUFpuakxrcThEQjBRVlM5dVF6dE1fVG9rZW46SUpCNmJja01lb05jaUd4Wm93SmNSbGZFbk5oXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=NDgwMDY5NGM1OGRjNWExOTVjNjJhZjZlNzg4OTQ1ZDhfeTJUNmNaNVlObUJadW9xb0xEQldtMFFtRDVlbzU4d0JfVG9rZW46TWFybGIwVFNkb3Z1SXp4amZ0ZGN2ejFabmo1XzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)

#### 1.2.4.5 话术库

对于一些高频、常见问题，团队管理人员整理成标准话术整理后导入系统，作为线上话术库，以降低培训成本。帮助员工在跟进客户时，及时响应客户，提升客户运营的效率，并使用恰当的方式与其对谈。

1. **话术库建立：** 管理人员根据业务类型对标准话术进行分类整理并导入系统，内容包括：文本、富文本、微信图文等方式。
2. **话术库应用：** 员工在与客户对话时，可在辅助区域查看话术内容，只要点击话术内容，话术文字就会直接进入发送内容区域，无需手动输入，从而提升与客户沟通的质量和工作效率。

![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=ZmRjNzM4Mzk0MWYyMzQ0NjI5ZTc4NzkwZjE5NTNmM2NfbEIwc3BkNGFYTXRLYTVnbXR3WHhLTnF1V08wek9jSmpfVG9rZW46TVE1VGJDdWZjb1ZhSDB4QVVFR2NXUTZSbldjXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=Yzk2MDZiMTFkM2FkY2YxNGY1NjcwNDY2MTRiZTJhYjNfc1JkNTV1cGZwbVkwd2FhWUNlM2h6OWFRNHJVYU9aWU1fVG9rZW46S0pTYmJ4THFHb0oxN0N4R1QxWGN3eGZwbndoXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=NDI3NDgwMDg5NjQ1ZDBkNGVhMGNiODUxYmZhYjY4MzZfRWVBMzA5YXp0SFJjUkhqV3RFbjJHZTRtSlVMOURYcFVfVG9rZW46RXprU2JkVjhCb3c2Qlp4bW1OTmM1ejJibm5iXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)

### 1.2.5 商机管理

商机即是对来自不同渠道的线索进行初轮筛选，判断出有购买力和意向需求的客户判断为商机。

**痛点或期望：** 完整的客户签单是从获客、客户跟进、到签单的全流程，这其中涉及到的人员可能有市场人员、运营人员、销售人员。但是现实情况经常是，每个人都难以对客户跟进整条业务线有全面貌的了解，当飞单时流失时，难免会出现员工相互推卸责任的情况。

**解决方案：** 商机管理能够帮助管理者和各业务线员工，清晰地了解到各员工跟进客户的情况，从而有利于挖掘线上转化差的问题点所在。此外，还能帮助提取出销售最佳实践的方法论，然后快速复制给团队其他人，帮助团队整体的营销战斗力提升到一个新高度。

1. **商机建立：** 可编辑填写信息包括：负责人、商机名称、客户名称、商机金额、预计成交日期、下次联系时间、关联产品、折扣、意向成交总金额等。
2. **编辑商机 **SOP** ：** 为商机建立不同的阶段，任务，负责人，推进的条件，达到有秩序精细化的跟单流程管理。
3. **商机查看：** 多商机推进时，以阶段性为基准，预览商机看板，管理者随时总览商机概况，还可以根据历史商机或商机推进计划，与实际商机推进时间做比较，对延期或即将延期的商机做警示，帮助员工及时发现客户跟进风险点。

![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=M2ZmZThjMDgyNDhkOTBjMmRjYTE1N2Y3NjQ3MTFjMTlfMU9OOVFJVWo5T3IxMG5McTNmUFM1OGg3NXBiZ1B0ZmhfVG9rZW46T0xBa2JKWUg2b0RZWmJ4MEFLeWNJV3E4bmVlXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=MWM0MGE1MTBiMTNjMDM1MGE1MmM4MTkzZWY0ODAwMjBfQ2h0NDBqZ3hvZGtUcXBNMWk4aWVjNmNFa3VWV1hqZ01fVG9rZW46V2Z5cGJMbmVNb0Vud1R4M0pjSWMxUVRibmRiXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTBjNWRjMGE1NjI2ZWYwOWY4NjYwMjFmNGRlYWQ1MzBfZ3NMdWgwbWlSQ2hJV0FHd3E4WVFKMXRyQUJOYllsOXVfVG9rZW46Snp3V2JjMFF6b3l1V2F4OWN1NmNTbU41blNmXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)

## 1.3 客户成交

### 1.3.1 客服监控

客服监控能够对客户跟进或服务的会话内容进行监控与管理，了解员工工作中的不足，进而改善客户服务水平或流程、提高服务水平。

**痛点问题：** 客户或线索流失有多方面的原因，或许是因为产品不满足需求，也或许是客户服务工作没有做到位，对于后者，如果系统没有做数据监控，员工出现消极怠工或接待不规范等问题，难以及时的发现，造成客户流失和品牌力损失。

**解决方案：**

1. **敏感词监控:** 通过对接企微API，监测销售或客服人员的规范用词，比如在教育行业，将诸如包过、100%通过率这样的保证，设置为敏感词，员工一旦触发，给予警示。
2. **敏感词动作监控：** 比如将"删除客户"、"被客户删除"、"超时回复"等动作设置为敏感动作，员工一旦触发，给予警示，同时能够及时追溯复盘，分析原因，在以后尽量避免该问题发生。

![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=NWIwMDcwMWU1YmQ0ZTBmODc5NTcyZWYxODczYTMzMGZfS1psNEoxYXlsSjc5ZU9jZ1ZnSVpUQmZaRnhzMWxhTjNfVG9rZW46U2pQZGJSckVub1U4MEd4TEp3aGNrQXVWblBlXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=NGMyMDJhNWVlMDJjZjZlYmIzODllNzBkNzNhNTY1NWRfaWswaUpwdWRndGM3dGhTdGZ2aG8wbkJQYTJOQjY0NE9fVG9rZW46WmVVNGJQM3p6b2ZGQTR4b01OTGNkbDhWblplXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)

# 二、营销运营策略（偏2c）

## 2.1 营销玩法

营销玩法是公司与用户建立和保持联系的重要环节，主要应用群体是以B2C为主体的教培、汽车、零售等行业。

目前市场上的营销玩法非常的成熟，不断的推陈出新，比如有赞微商城针对营销玩法开发了至少30余种丰富的工具，对数据安全要求不高的企业，可以直接选购此类产品并把相关数据结果对接到自研平台中，所以营销玩法更关键在于选择的合适，理解不同场景选择哪种玩法更有效。

![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=ZDJkMzI5N2U2ZmFmNGVlNTdhMzg0ZTc1ZjBjZWQxZDJfUlYzR3pNR0NkMlNsQ0hxODM4cTBqbFJZZkJ2dVFUOUNfVG9rZW46RVVQVmJiek1yb0trb2x4a0hPOWM3b09jbnZmXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)

**痛点或期望：** 以往销售人员在推销时也会存在满减、满赠、储蓄等营销玩法，但是玩法不落实到线上，难以沉淀客户，做客户洞察、流失分析等精细化和可持续性的营销工作。此外，如果有丰富的营销玩法加持，会增强新老客户对品牌的持续关注度，扩大品宣范围，提高客户转化率和销量。

**解决方案：** 通过对限时秒杀、优惠券等营销场景的研发应用，结合运营策略在各渠道推广，并通过活动数据分析，优化运营活动和策略，提高客户转化和销量。

营销玩法需要结合业务场景和用户旅程，选择合适的模式，根据不同的用户身份在不同的链路和节点上发放最能提高转化率的策略，以下分析几种比较常见的营销玩法。

![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=MDZmMzQxNTYzNGEzNmQ0ZTA5Njk4MzBhODgyY2E5NDNfdUZXWXV1ODBhYVpkeU1SQUFPV2xHWkVKMEo3dFFTRmZfVG9rZW46TFg1b2JYMGlDb085T2F4T2Rrb2N4ZUExbnhlXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)

### 2.1.1 个性化产品引流

**应用场景：** 在线上做品牌宣发、引流获客的阶段，通常通过高价值低成本的内容或产品吸引客户留资，再通过线下活动或线上加微、直播的方式引导客户转化，尤其是在较大客单价行业，比如教培、保险、家装等企业。这个产品或服务要因业务属性和用户偏好而定制。比如对于教培行业，利用名师讲座试听课或直播，既能体现机构的实力， 也能满足学员和家长对名师的渴求心理。对于家装行业，用户最关心的是自己家的房子要是装修成理想样板间要花多少钱，所以利用报价工具表单，能够有效引导留资。对于保险行业，用户最关心的就是该怎么选择产品更具性价比且不被机构坑骗，所以利用知识科普分享的方式能够有效吸引用户。

### 2.1.2 拉新助力

**描述：** 客户在指定时间内成功拉xx名好友参与完成助力任务，客户（及助力者）可以得到额外的产品或服务。

**应用场景：** 在线上活动期间，直播促单转化的时候，拉新助力模式可以作为裂变机会或者升单福利提供给用户。对于新用户给其只要来参与活动就能接受到白送福利的感受，由此对品牌产生好感，也愿意多了解产品和参与互动，对于老用户，由于已经对服务或产品有一定了解，只要对产品或服务基本满意，福利产品能够让他产生兴趣，也愿意为了得到而拉新推广。比如对于教培行业，在直播间向学员发送助力增额外主题的新产品试听课，一方面帮助测试客户对新产品的反馈，另一方面通过已有客户完成潜客机会的裂变。

**规则设置：**

1. **助力位：** xx名好友的数量可设置在3-5名，以避免客户产生挫败感。如果奖品是大额红包，则可以通过将分享者设置成为更多的人数（10人以上）来算作任务完成。助力位满员，则助力停止。
2. **助力次数限制：** 规定助力者最多可助力X人，通过这一条件的调节，可增加或者减少裂变系数，达到调节裂变范围的目的
3. **用户资质校验：** 默认无门槛(即所有客户可参与)、指定哪种类型客户参与，新客户(未留资/未成交过的客户)、老客(成交过的客户)、或参与过某个指定活动的客户(如参与助力活动的客户，该场景可以让客户先参加指定活动才可参与助力，提高客户精准度)，可以更精准拿到有效客资。
4. **助力条件限制：** 限制助力成功的条件，比如针对教培行业：可以助力成功的条件可以有，留资、留资+完成测评、留资+完成试听/直播课等。

**数据复盘：**

* 基础数据: 浏览次数、浏览人数、发起助力次数、参与助力次数、助力成功、助力未成功、（涉及到商品：已付款订单、未付款订单、销售额）
* 活动基本信息：活动标题、活动状态、发布时间、活动开始一结束时间、参与门槛、是否关联直播间等

### 2.1.3 限时/限量秒杀

**应用场景：** 限时秒杀功能主要选择三类产品上线，一选择少量爆品吸引新用户，二选择有潜力成为爆品的产品，三选择销量不佳的库存产品。其主要目的是促进用户增长、提高销售额、清理库存用。也可用作私域群内的日常运营，引导用户复购产品，提升用户粘性。

**关键配置：**

1. 活动名称：设置活动名称，便于后台管理人员区分。
2. 秒杀时间设置：设置秒杀开启时间，方便提前推广给更多用户；设置秒杀持续时间，营造秒杀的紧迫感。
3. 活动预热：设置活动预热后，在产品首页和活动商品详情页，都会带有秒杀活动信息，便于用户提前了解活动。
4. 秒杀价格：价格设定大于0小于原价。
5. 库存：指定预扣库存数量，防止超卖产生，如果在指定时间内未支付成功会回退库存，库存为0时，会自动下线活动信息。

**运营策略：**

1. 限时秒杀主要是短时秒杀，场景集中在微信群，运营人员和客服在微信群发送课程活动链接，告知活动仅存时间多少，激发用户的紧迫心里，减少用户的思考时间，这就需要在前期预告活动上下功夫：

* 描述文案：描述文案需要突出价格的优势和以往对比，并且在发送文案时，根据时间和数量的减少，来突出商品的火爆程度，营造购买的紧迫性。
* 时间：每次秒杀活动时间设置在10分钟内，具体可根据实际的成交数据，进行再次调整优化，直到找到最优时间。
* 数量：秒杀活动中在数量的设置上，一定要体现商品的稀缺性，哪怕是库存商品，也要拉长分多次售卖。
* 价格：秒杀活动在商品价格上的设定，要跟市场价格做对比，盈利不能够过高，对于少量的库存商品亏本也能接受。

2. 在短时秒杀活动策略中，为了更好地引导用户的购买决策。在秒杀时间截止时，即使商品数量未售罄，也要坚决下架该商品，以突显其抢手程度。目的是为了强调商品的稀缺性。
3. 在活动结束后，延缓短时秒杀活动的频率，并在近期内不再创建新的短时秒杀活动。即便创建了新的秒杀活动，也会采取措施，确保最近参与过秒杀的商品不会立即再次参与。从而告知用户在秒杀结束后可能错失低价购买的风险，鼓励用户在面对抢手商品时迅速下单，以确保他们不会因观望而错失珍贵的购物机会。
4. 如果有用户私信错过购买，那也要保证活动的公平性，即使商品还有库存，也要抵制活动后再售卖的行为，即使售卖，也要以原价出售，突出社群秒杀的真实性。

### 2.1.4 优惠券

**应用场景：** 优惠券是日常运营中重要的营销工具，通过会员状态找到可能流失的会员，向其发送优惠券吸引重新到店；也可向老会员发送可以转赠的优惠券，鼓励其向亲戚朋友转发，从而吸引新顾客到店消费；也可向已流失的会员发送优惠券引导唤醒。

**营销策略：**

* **手动投放** ：根据运营需求，手动发放指定优惠券给特定会员。
* **自动投放** ：基于用户画像和行为数据，自动发放优惠券给符合条件的会员。
* **活动投放** ：结合促销活动，如节日促销、限时抢购等，发放优惠券以吸引用户参与。

### 2.1.5 分销推广

**应用场景：** 分销推广广义上来说即可以与专业的2B代理机构合作，也可以面向个人提供。比如教培行业的合作代理商、有意向老师 甚至是有意向的家长代表。分销推广的应用场景主要涉及到引流获客，促单转化、引导复购三个环节。分销推广策略能够帮助企业快速占领用户市场，扩大品宣、实现用户量规模化增长。

1. **分成设置：** 运营人员先设定佣金比例规则，可以根据不同的产品利润设置多种佣金比例。另外，可以给推广员做等级划分，累计达成推广额度自动升级，便于后续精细化管理（如建立画像）。
2. **关联产品：** 如课程等虚拟类产品，由于边际成本佣金可以设置高些，如商品或服务等产品，可另设定规则。
3. **推广员管理：** 根据公司具体业务制度设定，推广员是否可以对外对个人招募，如果面向大众招募，而非聘请，需要有独立的成员申请与审核管理。

![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=YmVhMTJjYzMzZTZiZmY3OTA0MzIxOTMyM2M3YzRjMjhfdjVQbTAyYm1YNXFHOW1HeVQ4cjhEZlNtWmFydEQxUllfVG9rZW46RkZEcGJWVGFhbzJLelJ4RTdsb2NGY2VRbldrXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=ZWE2NGM2N2UyZWY5ZjczMDBiMWE4OTg3MTBlNDE3NThfRzJQSlNMalR0U29GaW9zbmN6UnVwS2JodVVkb3dFVnpfVG9rZW46QXdxTGJrd1Rmb2p2WWR4aVp4WWMxOEZTblRnXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=ZWQ3ZjZjYzRhMTU3NmE2MzFmOTUwZmEyNjZlNmZhYjlfanMydXZjUXRQQ0ppTjBLSTRSSU9CS2pLS2Z3UXI4RllfVG9rZW46RWFhemJpRUNHb1h2cDl4SGNINWNLRTUwbnBkXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)

**运营策略：**

1. 分销产品相较于仅通过价格优势吸引客户不同，模式更依赖于产品价值本身和分成奖励。。因此，在选品时，**尽可能选择具备品牌特色和高利润的产品，** 才能得到分销代理的认可，愿意自发的推广。
2. **需要合理设置商品的佣金比例。** 佣金比例设置过高可能影响商家最终收益，而过低则可能降低用户的传播意愿。一般对于分销有相关政策，但一般将比例设置在30%以内，对于单价较高的商品，比例相对可以适度降低。
3. **开展多渠道分销宣传：** 完成商品分销准备后，确定宣传渠道成为第二个关键点。可将主流的媒体平台和微信生态作为主要宣传地进行分销宣传。此外，企业既然选择了此策略，不应辜负代理对自己的信任关系，应当做自身销售后备军看待，同样进行培训学习等培养，实现销量和用户量的规模化增长。

## 2.2 会员管理

**应用场景：** 当业务体系做到一定规模时，往往会搭建会员成长体系，主要应用于客户留存。因为人工难以长期的跟进与维护大量客户，会员成长体系与客户画像、分层运营不同，后两者是帮助企业了解客户，前者是引发客户对产品的依赖，激发其自主性与习惯，让客户持续感受到品牌价值，提高客户粘性。

**解决方案：** 顾客可通过公众号、小程序、APP等渠道注册或消费成为品牌会员，会员体系支持设定有不同的级别，系统根据累计消费金额判定客户属于哪个级别，每个级别所享权益不同，级别越高解锁权益越多。

# 三、AI 应用场景

大语言模型的兴起，带动了互联网新一波AI场景赋能的浪潮，调研机构根据对实际市场的调研观察，先已有近一半的企业在营销领域应用AIGC，以提高工作人员对营销内容、数据方面的作业效率。有众多CRM服务商通过通用大模型的调用（文心一言、通义千问等）+自研调优的方式，为企业客户带来增值赋能。

![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=M2IwMmNhNWVkYTc2YzE1NDFiYjRhYTlmMzBiNDlmNmZfakdKWU1wQ3VoVUdrTU9wWFBROXpld2hpNmw4TWVsbk5fVG9rZW46TWdMN2J6UEdrb0xSblZ4bzZMaGM4ZHc1bkxnXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=ZDU4NmE4NTliZGM4MmU4MjZkM2E0NzUyNWZlNDk1MzhfbXBHd1F0a0E4TjdFWDNYdVRuQ2ZIWE54YU10OGNKZ09fVG9rZW46UGVpS2IycjNqb1hLZ0x4Skc2Y2NENXdVbjBmXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)

## 3.1 AI 智能内容创作

**方案说明：**

1. AI图文：提供营销文案或图片创作灵感，提高营销运营人员的内容营销效率。
2. AI二创：热点媒体平台，比如抖音的热点宝获取和业务目标相关的高热点视频，比如"视频+食补养生" 。然后提供热门文案修改等二创编辑，避开平台审核同时助力内容曝光，提高线索收集量。
3. 视频混剪：批量式生成项目视频，用于投放在不同账号品宣，减少媒体平台去重机制屏蔽，助力内容曝光，提高线索收集量。

![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=OWMwY2IzZTgzZTMzODcyZjgzZjlmYTQzNTdkNWU3NTZfNTg0cUlkZG1hVndEMWRlajFybUk3S1BHblI1WEx5WUdfVG9rZW46S05DWWJMTUlWb01wQ2R4U2Z4UmNscHhUbkdkXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=MDQzYTRiYWE0MTdjOGIzM2FlMTQ4NTMzMTYzMDMwYTdfOGgwUzc3UXdLVG80YW1KQXpMYnphM1V4cGZaelBid21fVG9rZW46S0dZZGJxRTNNbzl0SmN4TEI1Z2NFV1NEbmRjXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)

## 3.2 AI 智能评分

**方案说明：** 为AI大模型设计训练规则，让AI提炼历史下单客户线索的关键属性指标，包括客户画像、赢单金额等。帮助预测哪些潜在客户最有可能转化为实际客户，使销售团队可以优先处理高潜力的线索，从而提高转化率和销售效率。 传统线索评分体系可作为AI模型训练的关键因素，除此之外，与人工线索评分体系不同的是，AI能够比人工洞察到更多的内容维度，对人工评分体系有指导性作用。 以下展示销售易CRM基于机器学习的算法模型的智能打分体系配置（大模型具备天然的机器学习与算法能力，通过大模型再训练，比如让其主动展示线索需重点关注维度，降低自主研发的成本）：

![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=MWNkMGRlZjUzYTgzODI5YzdhMTNhODAxMDJkNTA4ZDNfOTlhMGFTQTdTYUtLUjhRbmhvVDNDd2hzOWFXaVFFcGlfVG9rZW46RkJRTWJnUU9Sb3lMZG94Mjczd2MwSDNybjFlXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=MjgxMjZkZWQ4ODg4NWQ0MTQwN2RjMjAyZGNmMGYxMmRfWlQ1ZlVsd05jU0Q4WWpzcnpYNnRUYVl0RVFDWUZBM0tfVG9rZW46UWQ2cmIwM1ZYb3FOZk94V1Q1UGNNZEM4bkxlXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=NzRkYzg2NzcwMmMzYWQ3ZjRlMDRhNThmZjk2NGMyNGJfT2QzNXF5ZVVJbHJyYXU2eHUya3lUaGNRY2c4WmJCTVdfVG9rZW46VGZ1amJsVVdSb3g2NWh4NXB6YWN5ZGJxbjBjXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=Yjk3ZjFmYmVhMTJkZjVjMzk4MzAwYTk4ZWRiZjFhOWVfd0dkMU9ORUhZQVJkRFdOeXJteVY5MTJ3UUpsTjBrVTRfVG9rZW46UWFGbGJVbEpHb2NST2N4VDlkMGM5YTc2bkNnXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=NDBmYmY5OGU1MDdmYTBjZDBmNmZkM2ZhYmEzOWQ4NDZfczA1RTVQY3BXd0lsZVZTTTJKSVJBQm1HYlRlVFpEd3NfVG9rZW46TWpqU2JWdkp4bzRuODJ4VXptb2NXRUxhbjlkXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=OTlhNzZkODlkMThmZmRlYTEwM2U2ZjIxNjUxZmU0MjhfaUdRQ25sZ2s1Y0lkT29KRE1WeVBVSWU1MmFFQlBSZVZfVG9rZW46WENCaWJ1NkNGb1Jqanp4QWdGSmNVUUhxbkdlXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)

![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=YzEzNGVkNDdhMGI5YmYwODFlZmJlYTRhYzBlZmNmM2ZfbUtrSGpqOFRiTkhvS3lPSEJ0Y09RMkJsMWVrbGNQUk1fVG9rZW46TGJFVmJSbUlxbzNsU1l4RU5oVmN4QnhibnRjXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=M2Y2ZGQwNDQ3NmE3M2Q1YjZkZGYyNTQ1YjZjZTNjNWNfYUpmeWxpcjdya21YYko0dGhUTTZRbHhWSEZLRDFWSkpfVG9rZW46RWRMUmJTdE1kb0xPVVp4WVh6ZGN4clFSbm5mXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)

## 3.3 AI 智能纪要

**方案说明：** 以往销售人员与客户的每次通话内容、每次线上聊天内容，都需要通过管理制度约束员工完成，工作效率和内容质量低。客服售后的沟通记录同理，导致难以及时了解到客户的需求，各部分协作效率低。

通过AI对电话、聊天等互动数据做获取和整理，自动生成线索跟进纪要、客户服务纪要，提高线索及客户数据的准确性、及时性，减少人工输入成本，从而更好地管理客户关系。 同时可以让其根据纪要内容提供下一步的建议。

1. AI销售纪要：纷享销客AI销售纪要。通过对目标客户全部历史跟进记录智能分析，并定义其结构化的总结为"需求关注点变化"、"跟进进度"、"风险"，帮助销售进行下一步跟进。
2. AI客服纪要：纷享销客AI客服纪要，提供了会话总结、话术推荐、业务单查询等内容。会话内容总结是通过调取与客户的聊天记录（可定义时间段），快速提炼客户问题查找关联订单，让员工处理问题更加高效 。话术推荐是基于聊天内容，智能识别用户咨询意图，查找并推荐知识库中的方案，便于员工快速理解并响应客户需求。

![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=N2VhMGQ5Yjc3NGQzYmI4MTVjMWUxYzg4YmRiYTFiNzFfYVZhUXNRNmpzWDhqYk1pZXVESUhmS1REczU4dnBBVTBfVG9rZW46RFZ2d2JjRWdHb0tydHB4blRWc2Nqa1BHbmRkXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=MGM3M2NiYTRmZmRjMTFkYjRiMDkxZWYyOWNiNGI3ZmFfZ1lmdmNEVUEzS09CV0ZCdkhqUXFkZURHRVo3QVFVaGNfVG9rZW46Q3M5R2JhTUhub0k4d094NVBNRWNEVkIybmdoXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=Yjg5NWE1YmI5YTQwNzYxOGI3ZDNkN2RmNWYwOTdmY2FfakpNbWFBYVlDQU5pZ2R6WlBnblNBNUlnTkpkQkN2WFRfVG9rZW46R2Jrc2JOUmpvb05vMW54ZEYzVmNKM0ttbndkXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)![](https://jhwp8z0psn.feishu.cn/space/api/box/stream/download/asynccode/?code=OTU4MWE4YWZhOTRmMTU3Mzc1ODhmMjBiMDZhOTAyODRfUFRTNHBlUTVTS0U0S0dtY0RyVjluZzFZVUxKOXNXZXBfVG9rZW46SndEMWIzemFYb2RhcDV4RzE2T2N1cWlXbmhmXzE3NDQ2OTY1Nzk6MTc0NDcwMDE3OV9WNA)

# 其他阅读：

*返回**[产品资料库主页](https://jhwp8z0psn.feishu.cn/docx/SlUFd8wDAod8dXxQyzIc5ARqnMl?from=from_copylink)*

[[竞品分析]纷享销客 CRM 竞品分析报告（完整） ](https://jhwp8z0psn.feishu.cn/docx/KjyKddiW8o65CdxObYHc7eOrntc?from=from_copylink)

*本文从 **CRM** 行业、纷享销客的产品定位，能力与资源，场景与用户体验四个部分展开分析。****场景包括：营销管理、线索管理、客户管理、商机管理 等核心模块。***

[[方案文档]云会议室saas平台 ](https://jhwp8z0psn.feishu.cn/docx/QHAQdSOOFo9kekxclR6cHO2zn9b?from=from_copylink)

***主导云通信会议系统1-N，****包括：面向不同行业客户的会议场景解决方案（如：大会点名、医疗B超会议共享、银行柜机云通信、安全加密钥匙集成、会议控制台交互体验优化等）。*

[[方案文档]物业saas管理平台](https://jhwp8z0psn.feishu.cn/docx/S2PKdFDETolmNXx4AO6cN0u4nEc?from=from_copylink)

***主导物业业务管理系统0-1-N****，核心模块包括：权限管理，报修管理、餐品管理、数据看版。*

> 个人简介：2B产品经理，擅长复杂业务需求分析、高质量方案编写与宣讲、客户沟通与关系维护。
>
> 目前在深耕2B大赛道产品线，主要研究CRM产品。

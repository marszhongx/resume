import type { ResumeConfig } from '@/components/types';

/** 初始化常量 */
export const RESUME_INFO: ResumeConfig = {
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/33776415?v=4',
    hidden: false,
  },
  profile: {
    name: '钟明星',
    email: 'zomixi@qq.com',
    mobile: '134********',
    github: 'https://github.com/marszhongx',
    zhihu: '',
    workExpYear: '7',
    workPlace: '广东广州',
    positionTitle: '全栈开发工程师',
  },
  educationList: [
    {
      edu_time: ['2014.09.01', '2018.06.30'],
      school: '广东工业大学',
      major: '信息与计算科学',
      academic_degree: '本科',
    },
  ],
  workExpList: [
    {
      company_name: '广州睿狐科技有限公司',
      department_name: '全栈开发工程师',
      work_time: ['2022.06', null],
      work_desc: '1、专注企业级研发管理工具与解决方案，帮助企业研发团队提升 API 研发协作效率。\n2、负责 Electron 桌面端、React 渲染层与 NestJS 服务端的全链路开发。\n3、独立负责云端 Mock、自动化测试、消息通知、迭代分支等 4 个核心模块的设计与交付。\n4、构建自己的 AI 工作流，研发效率提升约 2-3 倍。',
    },
    {
      company_name: '树根互联股份有限公司',
      department_name: '前端开发工程师',
      work_time: ['2020.09', '2022.04'],
      work_desc: '1、国家级跨行业跨领域工业互联网平台企业，提供工业互联网数字化转型服务。\n2、参与工业互联网教育平台、小家电产业集群服务平台、数字孪生平台建设，交付形态覆盖 PC 端与物联网设备移动端。\n3、负责根云教育平台 Qiankun 微前端基座建设与三一新 C 平台协议建模工具开发，支撑数十个子应用接入。',
    },
    {
      company_name: '广州乐摇摇信息科技有限公司',
      department_name: '前端开发工程师',
      work_time: ['2020.04', '2020.09'],
      work_desc: '1、商业物联网企业，为线下自助设备提供扫码支付与远程管控解决方案。\n2、负责设备启动小程序研发，实现扫码支付到设备启动的完整流程，支撑全平台日均支付笔数 / 订单量超过 300 万笔的无人值守场景稳定可用。',
    },
    {
      company_name: '广州一智通供应链管理有限公司',
      department_name: '前端开发工程师',
      work_time: ['2018.05', '2020.04'],
      work_desc: '1、家居供应链服务企业，提供家居物流仓储、运输与安装一体化服务。\n2、负责家居物流供应链系统前端建设，覆盖仓储管理（WMS）、供应链管理（SCM）与运输管理（TMS）等 8 个子系统，实现从下单到签收的全流程可视化与实时状态同步。',
    },
  ],
  skillList: [
    {
      skill_name: '前端',
      skill_desc: 'React、Vue2 / Vue3、Angular 2+、TypeScript、Electron、React Native',
      skill_level: 90,
    },
    {
      skill_name: '服务端',
      skill_desc: 'Node.js、NestJS、MySQL、PostgreSQL、MikroORM',
      skill_level: 80,
    },
    {
      skill_name: 'AI 提效',
      skill_desc: '熟练使用 Claude Code、Codex、Cursor 等 Coding Agent 进行开发提效',
      skill_level: 90,
    },
  ],
  projectList: [
    {
      project_name: 'Apifox',
      project_role: '全栈开发工程师',
      project_time: '2022.06 - 至今',
      project_desc: 'API 设计、开发与测试一体化协作平台（Electron + React + NestJS），作为核心研发负责桌面端架构与多个核心模块的独立交付。',
      project_content: '1、设计并开发桌面端架构：落地主进程与渲染进程分层、IPC 通信机制，实现多窗口管理、本地代理服务、系统托盘、深链唤起等桌面原生能力。\n2、开发云端 Mock：支持按接口定义自动生成结构化响应、配置动态响应规则与数据虚拟化，日均 Mock 请求约 10 万次，让前端在接口未就绪时并行开发，消除联调互等。\n3、开发自动化测试功能：实现用例编排、断言校验、批量执行与测试报告，支撑全平台 4 亿+ 接口用例、700 万+ 场景用例与 2 万+ 测试套件。\n4、开发消息通知功能：支持站内信、邮件、Webhook 及飞书 / 钉钉 / 企业微信 / Teams 等多渠道触达，月均千万级消息。\n5、开发迭代分支功能：提供 API 级别的分支管理与协作机制，支持并行迭代、分支保护与合并请求（Merge Request），全平台累计创建迭代分支 13 万+。',
    },
    {
      project_name: '小嘿机租客户版 APP',
      project_role: '前端开发工程师',
      project_time: '2021.07 - 2021.12',
      project_desc: '面向客户在线租赁工程设备的移动端 APP（React Native），服务上万台工程设备与上千家租赁商户，负责 iOS / Android 双端交付。',
      project_content: '1、实现在线接单、签约、设备调度进场、施工对账全流程。\n2、封装定位、扫码、拍照、蓝牙设备通信等原生模块，解决 React Native 混合开发中的桥接、线程与生命周期问题。\n3、设计离线缓存与弱网重试机制，保障工地等弱网环境的数据一致性与可用性。\n4、优化长列表渲染与图片加载策略（列表虚拟化、图片缓存、按需分包），滑动帧率从约 10 fps 提升至 50 fps，显著改善中低端机型的流畅度与内存占用。',
    },
    {
      project_name: '三一新 C 平台协议建模工具',
      project_role: '前端开发工程师',
      project_time: '2021.04 - 2021.07',
      project_desc: '面向工业设备物联协议的元数据建模与管理工具（React + UmiJS），支撑工业设备数据上云。',
      project_content: '1、依据 SCP2.0、STP、J1939 等协议标准实现数十个协议模型的元数据定义与管理，将上万个协议字段抽象为可维护的模型结构。\n2、实现协议模型的字段映射、合法性校验与版本管理，为下游数据接入提供统一规范。',
    },
    {
      project_name: '根云教育平台',
      project_role: '前端开发工程师',
      project_time: '2020.12 - 2021.03',
      project_desc: '工业互联网教育平台（Qiankun + Vue2），面向企业数字化转型培养专业人才。',
      project_content: '1、搭建 Qiankun 主 / 子应用体系，统一登录态、路由、状态管理与 UI 基建。\n2、支撑数十个子应用独立开发、独立部署，让多个业务团队并行迭代，降低子系统接入成本。',
    },
    {
      project_name: '小家电产业集群服务平台',
      project_role: '前端开发工程师',
      project_time: '2020.10 - 2021.04',
      project_desc: '面向小家电产业集群的产业链协同平台（Vue2）。',
      project_content: '1、实现从订单、设计到生产、交付的全流程状态可视化。\n2、支撑产业链上下游在平台上直接协作，减少线下沟通成本。',
    },
    {
      project_name: '乐摇摇科技小程序',
      project_role: '前端开发工程师',
      project_time: '2020.04 - 2020.09',
      project_desc: '面向线下无人值守场景的设备启动小程序（微信小程序）。',
      project_content: '1、实现扫码支付到设备启动的完整流程，适配上百种设备型号的 4G / 蓝牙两类启动通道。\n2、设计支付链路、设备通信与异常兜底方案，保障线下场景稳定可用。',
    },
    {
      project_name: '一智通仓储管理系统 WMS',
      project_role: '前端开发工程师',
      project_time: '2018.08 - 2019.12',
      project_desc: '家居物流供应链的仓储管理子系统（Angular + TypeScript）。',
      project_content: '1、实现库存、入库、出库、盘点等核心环节的作业界面与管控流程，支撑日均千级出入库单据处理。\n2、通过自动化流程与实时数据同步保证各环节数据一致，实现仓储统一管控。',
    },
    {
      project_name: '物流供应链管理平台 SCM / TMS',
      project_role: '前端开发工程师',
      project_time: '2018.05 - 2019.12',
      project_desc: '家居物流供应链的管理平台 SCM 与运输管理平台 TMS（Angular 6 + RxJS + TypeScript）。',
      project_content: '1、实现下单、中转、配送安装、异常上报、签收全链路可视化，支撑上千万件家居商品的物流流转管理。\n2、基于 RxJS 处理多来源异步状态流，保证各环节状态实时同步、前后端数据一致。',
    },
  ],
  workList: [],
  aboutme: {
    aboutme_desc: '7 年全栈经验，长期担任核心研发，具备从桌面端到服务端的架构设计能力。\n熟练开发 Web、H5、微信小程序、桌面端、移动端等跨平台应用。\n熟练使用 Claude Code、Codex、Cursor 等 Coding Agent 进行开发提效。',
  },
};

// ===================== 白沙镇完整数据 =====================
const BAISHA_DATA = {
  id: 104,
  name: '白沙镇',
  centerLat: 29.0460,
  centerLng: 106.1670,
  scale: 16,
  subLocations: [
    {
      id: 1, name: '白沙镇游客中心', type: 'start',
      lat: 29.0468, lng: 106.1658,
      activities: [
        { id: 'bs-1-1', name: '开营导入',
          content: '导师重申任务目标和安全须知。分发一站式服务手环，现场测试信号。每人确认手环电量、SOS按钮位置。',
          npc: '导师', duration: '20分钟', status: 'todo' }
      ]
    },
    {
      id: 2, name: '朝天嘴码头', type: 'task',
      lat: 29.0475, lng: 106.1645,
      activities: [
        { id: 'bs-2-1', name: '搬运物资',
          content: 'NPC扮演船工，学生需帮忙搬运"军用物资"（泡沫箱道具，轻质）。',
          npc: '船工', duration: '80分钟', status: 'todo' },
        { id: 'bs-2-2', name: '抗战知识问答',
          content: '答对三道抗战知识题（如"冯玉祥在白沙募资是哪一年？"）。答对一道得10元虚拟货币。每小组轮流，其他组可在旁观察学习。',
          npc: '船工', duration: '—', status: 'todo' }
      ]
    },
    {
      id: 3, name: '镇政府食堂', type: 'rest',
      lat: 29.0452, lng: 106.1683,
      activities: [
        { id: 'bs-3-1', name: '午餐休息',
          content: '集体乘车到白沙镇政府食堂用餐（桌餐，简单快捷）。餐后在食堂休息区午休。',
          npc: '—', duration: '—', status: 'todo' }
      ]
    },
    {
      id: 4, name: '白沙古镇街道', type: 'task',
      lat: 29.0458, lng: 106.1675,
      activities: [
        { id: 'bs-4-1', name: '学杂耍体验',
          content: 'NPC杂耍艺人，学生现场学一个简单杂耍动作（转手帕、抖空竹入门）。学会并能独立做一遍得5元货币。',
          npc: '杂耍艺人', duration: '70分钟', status: 'todo' }
      ]
    },
    {
      id: 5, name: '中师陈列馆', type: 'task',
      lat: 29.0468, lng: 106.1690,
      activities: [
        { id: 'bs-5-1', name: '募资演讲',
          content: 'NPC教师，学生朗读冯玉祥募资演讲词片段（约100字），根据声音洪亮、情感投入度打分，得5-15元。',
          npc: '教师', duration: '70分钟', status: 'todo' }
      ]
    },
    {
      id: 6, name: '白沙影视基地', type: 'task',
      lat: 29.0440, lng: 106.1720,
      activities: [
        { id: 'bs-6-1', name: '推销纸花',
          content: 'NPC募资员，学生需用提前在手工区制作的小纸花（每人2朵）向"路人"推销，成功卖出1朵得10元。小组互助，可分工。',
          npc: '募资员', duration: '70分钟', status: 'todo' }
      ]
    }
  ]
};

// ===================== 各地点内部路线与任务数据 =====================
const LOCATION_DATA = {
  // 重庆三峡博物馆
  101: {
    id: 101, name: '三峡博物馆', centerLat: 29.5630, centerLng: 106.5440, scale: 16,
    subLocations: [
      { id: 1, name: '三峡博物馆入口', type: 'start', lat: 29.5630, lng: 106.5440,
        activities: [
          { id: 'sx-1-1', name: '开营导入', content: '集合签到，领取任务卡与讲解耳机，强调馆内安全与参观须知。', npc: '研学导师', duration: '15分钟', status: 'todo' }
        ] },
      { id: 2, name: '抗战岁月展区', type: 'task', lat: 29.5632, lng: 106.5441,
        activities: [
          { id: 'sx-2-1', name: '讲解参观', content: '跟随讲解员深入游览三楼《抗战岁月》展区，了解重庆抗战历史。', npc: '讲解员', duration: '40分钟', status: 'todo' }
        ] },
      { id: 3, name: '版画工坊', type: 'task', lat: 29.5628, lng: 106.5443,
        activities: [
          { id: 'sx-3-1', name: '版画雕刻', content: '带着任务卡在展品中寻找代表性视觉符号与标语，设计版画草图，使用安全刻刀雕刻完成；展示作品时用自己语言阐述创作想法。', npc: '版画导师', duration: '90分钟', status: 'todo' }
        ] },
      { id: 4, name: '历史拼图区', type: 'task', lat: 29.5631, lng: 106.5438,
        activities: [
          { id: 'sx-4-1', name: '图片拼图', content: '每组领取历史图片碎片和线索卡，通过观察临摹获得展厅内完整文物或展板信息，最后拼成完整历史画面，讲述拼图背后的完整故事。', npc: '研学导师', duration: '60分钟', status: 'todo' }
        ] },
      { id: 5, name: '自由游览区', type: 'task', lat: 29.5633, lng: 106.5437,
        activities: [
          { id: 'sx-5-1', name: '自由探索', content: '其他时间自由游览馆内其他展区，完成自己的探索打卡。', npc: '—', duration: '—', status: 'todo' }
        ] }
    ]
  },

  // 鹅岭公园
  102: {
    id: 102, name: '鹅岭公园', centerLat: 29.5490, centerLng: 106.5150, scale: 16,
    subLocations: [
      { id: 1, name: '鹅岭公园入口', type: 'start', lat: 29.5490, lng: 106.5150,
        activities: [
          { id: 'el-1-1', name: '开营导入', content: '"外交小先锋"提前分组抽取外交身份卡片，在老师协作下领取各公使馆讲解任务。', npc: '外交导师', duration: '15分钟', status: 'todo' }
        ] },
      { id: 2, name: '澳大利亚公使馆旧址', type: 'task', lat: 29.5493, lng: 106.5152,
        activities: [
          { id: 'el-2-1', name: '小小讲解员', content: '欣赏中西合璧风格建筑，了解外交官工作场景及战时重庆民生，完成公使馆讲解任务。', npc: '外交导师', duration: '30分钟', status: 'todo' }
        ] },
      { id: 3, name: '丹麦公使馆旧址', type: 'task', lat: 29.5491, lng: 106.5155,
        activities: [
          { id: 'el-3-1', name: '小小讲解员', content: '了解丹麦工程师守尔慈参与修建北川铁路的故事——该铁路的建成与后续运营为抗日战争暨世界反法西斯战争提供了坚实物质基础，成为战时大后方的重要工业遗产。', npc: '外交导师', duration: '30分钟', status: 'todo' }
        ] },
      { id: 4, name: '土耳其公使馆', type: 'task', lat: 29.5488, lng: 106.5153,
        activities: [
          { id: 'el-4-1', name: '小小讲解员', content: '完成土耳其公使馆讲解任务，了解其在战时重庆的角色。', npc: '外交导师', duration: '30分钟', status: 'todo' }
        ] },
      { id: 5, name: '和平钟', type: 'task', lat: 29.5494, lng: 106.5148,
        activities: [
          { id: 'el-5-1', name: '和平钟感言', content: '各位小讲解员扮演各国代表，依次在和平钟前发表感想。', npc: '外交导师', duration: '20分钟', status: 'todo' }
        ] },
      { id: 6, name: '苏军烈士墓', type: 'task', lat: 29.5486, lng: 106.5146,
        activities: [
          { id: 'el-6-1', name: '献花缅怀', content: '向为和平逝去的国际战士们献花，缅怀致敬。', npc: '导师', duration: '15分钟', status: 'todo' }
        ] },
      { id: 7, name: '园内自由浏览', type: 'task', lat: 29.5492, lng: 106.5144,
        activities: [
          { id: 'el-7-1', name: '寻卡答题', content: '自由浏览园内其他景点；在园内寻找写有相关问题的小卡片，找到并答对问题即可领取小礼物。', npc: '—', duration: '30分钟', status: 'todo' }
        ] }
    ]
  },

  // 二圣镇
  103: {
    id: 103, name: '二圣镇', centerLat: 29.4250, centerLng: 106.7200, scale: 16,
    subLocations: [
      { id: 1, name: '二圣镇集合点', type: 'start', lat: 29.4250, lng: 106.7200,
        activities: [
          { id: 'er-1-1', name: '开营导入', content: '集合分组，讲解茶园采摘与制茶注意事项。', npc: '研学导师', duration: '15分钟', status: 'todo' }
        ] },
      { id: 2, name: '生态茶园', type: 'task', lat: 29.4253, lng: 106.7202,
        activities: [
          { id: 'er-2-1', name: '采茶制茶', content: '听茶农讲解茶叶种类和采摘注意事项，将采摘茶叶制作成茶砖，或体验制茶的手工揉捻等工序。', npc: '茶农', duration: '60分钟', status: 'todo' }
        ] },
      { id: 3, name: '翠冠梨园', type: 'task', lat: 29.4248, lng: 106.7205,
        activities: [
          { id: 'er-3-1', name: '摘梨制膏', content: '体验摘梨，通过实物展示和趣味游戏学习梨生长相关知识，并在专业人士指导下制作秋梨膏。', npc: '果农', duration: '60分钟', status: 'todo' }
        ] },
      { id: 4, name: '云认养点', type: 'task', lat: 29.4251, lng: 106.7198,
        activities: [
          { id: 'er-4-1', name: '云认养', content: '每棵梨/茶树都有专属编号，在"智慧五小"小程序"云认养小先锋"板块输入编号即可云认养专属梨/茶树（定期施肥浇水可助力小苗成长，果实成熟后有机会获得邮寄实物）。', npc: '—', duration: '15分钟', status: 'todo' }
        ] },
      { id: 5, name: '颁证点', type: 'task', lat: 29.4246, lng: 106.7203,
        activities: [
          { id: 'er-5-1', name: '颁发证书', content: '为完成研学任务的学生颁发"田野小能手"纪念证书（电子版），可在"智慧五小"小程序研学版块查询。', npc: '研学导师', duration: '10分钟', status: 'todo' }
        ] },
      { id: 6, name: '晚间营地', type: 'rest', lat: 29.4252, lng: 106.7196,
        activities: [
          { id: 'er-6-1', name: '晚间活动', content: '可选：A观看与主题相关的纪录片或电影；B举行小型联谊晚会，展示才艺分享心得；C学习整理内务、写研学日志。', npc: '—', duration: '90分钟', status: 'todo' }
        ] }
    ]
  },

  // 夏布小镇
  105: {
    id: 105, name: '夏布小镇', centerLat: 29.3860, centerLng: 105.5980, scale: 16,
    subLocations: [
      { id: 1, name: '夏布小镇入口', type: 'start', lat: 29.3860, lng: 105.5980,
        activities: [
          { id: 'xb-1-1', name: '开营导入', content: '集合讲解夏布文化背景，强调实践安全。', npc: '研学导师', duration: '10分钟', status: 'todo' }
        ] },
      { id: 2, name: '中国夏布博物馆', type: 'task', lat: 29.3862, lng: 105.5981,
        activities: [
          { id: 'xb-2-1', name: '参观互动', content: '了解苎麻种植到成布的全过程，参与"夏布知多少"互动问答，解锁织布体验资格。', npc: '讲解员', duration: '45分钟', status: 'todo' }
        ] },
      { id: 3, name: '织造实践基地', type: 'task', lat: 29.3858, lng: 105.5984,
        activities: [
          { id: 'xb-3-1', name: '织造体验', content: '体验苎麻剥皮、刮青、撕片等初加工工序，使用迷你织机学习平纹织造技法，尝试夏布织片；自制织片可加工成书签、杯垫等实用工艺品，邮寄回家。', npc: '织布师傅', duration: '90分钟', status: 'todo' }
        ] },
      { id: 4, name: '晚间分享会', type: 'rest', lat: 29.3861, lng: 105.5978,
        activities: [
          { id: 'xb-4-1', name: '晚间分享', content: '依次分享"今天最让我惊喜的一个瞬间"；发放明信片，安静写下对明天活动的期待，或画下今天的收获。', npc: '—', duration: '40分钟', status: 'todo' }
        ] }
    ]
  },

  // 安陶小镇
  106: {
    id: 106, name: '安陶小镇', centerLat: 29.3640, centerLng: 105.5520, scale: 16,
    subLocations: [
      { id: 1, name: '安陶小镇入口', type: 'start', lat: 29.3640, lng: 105.5520,
        activities: [
          { id: 'at-1-1', name: '开营导入', content: '集合分组，领取陶艺任务卡，讲解制陶安全注意事项。', npc: '研学导师', duration: '10分钟', status: 'todo' }
        ] },
      { id: 2, name: '荣昌陶博物馆', type: 'task', lat: 29.3642, lng: 105.5522,
        activities: [
          { id: 'at-2-1', name: '参观+分类挑战', content: '学习制陶历史和抗战时期荣昌陶器供应前线的重要意义，触摸屏参与"陶器分类挑战"，区分粗陶与细陶的不同用途。', npc: '讲解员', duration: '45分钟', status: 'todo' }
        ] },
      { id: 3, name: '陶艺工坊', type: 'task', lat: 29.3638, lng: 105.5524,
        activities: [
          { id: 'at-3-1', name: '揉泥拉坯', content: '由非遗陶艺师傅指导学习揉泥、拉坯基础技法，完成陶器制作。', npc: '陶艺师傅', duration: '90分钟', status: 'todo' }
        ] },
      { id: 4, name: '颁证点', type: 'task', lat: 29.3641, lng: 105.5518,
        activities: [
          { id: 'at-4-1', name: '颁发证书', content: '完成陶器制作获得"陶艺小工匠"认证证书。', npc: '研学导师', duration: '10分钟', status: 'todo' }
        ] }
    ]
  },

  // 国立复旦大学旧址
  107: {
    id: 107, name: '国立复旦大学旧址', centerLat: 29.8410, centerLng: 106.4420, scale: 16,
    subLocations: [
      { id: 1, name: '复旦旧址入口', type: 'start', lat: 29.8410, lng: 106.4420,
        activities: [
          { id: 'fd-1-1', name: '开营导入', content: '"文化小卫士"集合，领取任务，讲解参观纪律。', npc: '研学导师', duration: '10分钟', status: 'todo' }
        ] },
      { id: 2, name: '校史纪念馆', type: 'task', lat: 29.8412, lng: 106.4422,
        activities: [
          { id: 'fd-2-1', name: '参观学唱', content: '跟随专业讲解老师了解复旦大学在抗日战争时期的历史，参观校史纪念馆，学唱复旦大学校歌，感受复旦学子自强不息的精神。', npc: '讲解老师', duration: '50分钟', status: 'todo' }
        ] },
      { id: 3, name: '旧址公开课', type: 'task', lat: 29.8408, lng: 106.4424,
        activities: [
          { id: 'fd-3-1', name: '特殊公开课', content: '在国立复旦大学旧址上特殊公开课，将课本内容带到独特学习环境中，学习如《飞虎队的故事》《小英雄雨来》等课文。', npc: '研学老师', duration: '45分钟', status: 'todo' }
        ] },
      { id: 4, name: '分享写信区', type: 'task', lat: 29.8411, lng: 106.4418,
        activities: [
          { id: 'fd-4-1', name: '写信总结', content: '回顾线路中所有故事与内容，分享对红色文化、红色精神的理解，写一封信"寄给"在烽火下艰苦奋斗、努力学习的学生或未来的自己。', npc: '研学导师', duration: '60分钟', status: 'todo' }
        ] }
    ]
  }
};

// ===================== 工具函数 =====================
// 计算每个子地点的进度
function calcProgress(activities) {
  const total = activities.length;
  if (!total) return 0;
  const done = activities.filter(a => a.status === 'done').length;
  return Math.round(done / total * 100);
}

// 根据当前Tab筛选显示的分组数据
function buildDisplayGroups(subLocations, activeTab) {
  return subLocations
    .map(sl => {
      const visible = sl.activities.filter(a => a.status === activeTab);
      const progress = calcProgress(sl.activities);
      const doneCount = sl.activities.filter(a => a.status === 'done').length;
      return { ...sl, visibleActivities: visible, progress, doneCount, totalCount: sl.activities.length };
    })
    .filter(g => g.visibleActivities.length > 0);
}

// ===================== 分级角标（子地图：start红 / rest绿 / task蓝）=====================
const SUB_COLORS = {
  red:   { rgb: '#D63031' },
  green: { rgb: '#3C9E6D' },
  blue:  { rgb: '#3D6FC4' }
};

// 三级重要度：L3 大角标+虚影 / L2 中号角标 / L1 实心圆点（图标越大文字越大）
const SUB_LEVEL_META = {
  3: { icon: 'ghalo', w: 120, h: 150, anchorY: 0.84,  fontSize: 16, padding: 8, radius: 16 },
  2: { icon: 'gpin',  w: 66,  h: 84,  anchorY: 0.945, fontSize: 13, padding: 5, radius: 12 },
  1: { icon: 'gdot',  w: 30,  h: 30,  anchorY: 0.5,   fontSize: 10, padding: 2, radius: 6 }
};

// 构建子地图分级角标；highlightId 的点临时升为 L3（放大+虚影，文字同步放大）
function buildMarkers(subLocations, highlightId) {
  return subLocations.map(sl => {
    const colorKey = sl.type === 'start' ? 'red' : sl.type === 'rest' ? 'green' : 'blue';
    let level = sl.type === 'start' ? 3 : sl.type === 'rest' ? 1 : 2;
    if (sl.id === highlightId) level = 3;
    const meta = SUB_COLORS[colorKey];
    const lv = SUB_LEVEL_META[level];
    const isDot = level === 1;
    return {
      id: sl.id,
      latitude: sl.lat,
      longitude: sl.lng,
      iconPath: '/image/location.png',
      width: lv.w,
      height: lv.h,
      anchor: { x: 0.5, y: lv.anchorY },
      label: {
        content: sl.name,
        color: isDot ? '#3A3A3A' : '#FFFFFF',
        fontSize: lv.fontSize,
        bgColor: isDot ? '#FFFFFF' : meta.rgb,
        borderRadius: lv.radius,
        padding: lv.padding,
        textAlign: 'center'
      },
      zIndex: level * 10
    };
  });
}

// 两点间曲线连接（街道级幅度，相邻段左右交替，点位不用太直）
function curveBetween(a, b, idx) {
  const dLng = b.longitude - a.longitude;
  const dLat = b.latitude - a.latitude;
  const len = Math.sqrt(dLng * dLng + dLat * dLat) || 1e-9;
  const k = Math.max(0.00035, Math.min(0.0009, len * 0.4));
  const sign = (idx % 2 === 0) ? 1 : -1;
  const nx = -dLat / len * k * sign;
  const ny = dLng / len * k * sign;
  const midLat = (a.latitude + b.latitude) / 2;
  const midLng = (a.longitude + b.longitude) / 2;
  const cLat = midLat + ny, cLng = midLng + nx;
  const pts = [], N = 26;
  for (let i = 0; i <= N; i++) {
    const u = i / N, inv = 1 - u;
    pts.push({
      latitude: inv * inv * a.latitude + 2 * inv * u * cLat + u * u * b.latitude,
      longitude: inv * inv * a.longitude + 2 * inv * u * cLng + u * u * b.longitude
    });
  }
  return pts;
}

// 白色描边打底 + 品牌红曲线
function buildRoute(subLocations) {
  const pts = [];
  subLocations.forEach((sl, i) => {
    if (i === 0) return;
    const seg = curveBetween(subLocations[i - 1], sl, i - 1);
    seg.forEach((p, j) => {
      if (i > 1 && j === 0) return;
      pts.push(p);
    });
  });
  return [
    { points: pts, color: '#FFFFFF', width: 8 },
    { points: pts, color: '#D63031', width: 4.5 }
  ];
}

Page({
  data: {
    // 传入的大地点信息
    bigLocationId: 0,
    bigLocationName: '',

    // 地图状态（微信原生地图，腾讯地形底图，原生支持捏合缩放）
    centerLat: 29.0460,
    centerLng: 106.1670,
    scale: 16,
    enable3D: true,
    showSatellite: false,

    // 子地点原始数据
    subLocations: [],
    // 侧边栏展示分组数据（含筛选后的活动和进度）
    displayGroups: [],
    // 标记、曲线连线、自适应范围
    markers: [],
    polyline: [],
    allPoints: [],

    // 侧边栏UI状态
    sidebarVisible: true,
    activeTab: 'todo',      // 'todo' | 'in_progress' | 'done'
    highlightedId: null,    // 当前选中高亮的子地点id

    // Tab 定义
    tabDefs: [
      { key: 'todo', label: '待完成' },
      { key: 'in_progress', label: '进行中' },
      { key: 'done', label: '已完成' }
    ],

    // 统计
    todoCount: 0,
    inProgressCount: 0,
    doneCount: 0
  },

  onLoad(options) {
    const { id, name } = options;
    const locId = parseInt(id) || 104;
    const locName = decodeURIComponent(name || '白沙镇');

    // 加载数据：白沙镇用详细数据，其他用占位
    let locationData;
    if (locId === 104) {
      locationData = JSON.parse(JSON.stringify(BAISHA_DATA)); // 深拷贝
    } else if (LOCATION_DATA[locId]) {
      locationData = JSON.parse(JSON.stringify(LOCATION_DATA[locId]));
    } else {
      locationData = JSON.parse(JSON.stringify(BAISHA_DATA));
    }

    const subLocations = locationData.subLocations;

    // 动态设置导航栏标题
    wx.setNavigationBarTitle({ title: locName + ' · 内部路线' });

    // 合并初始渲染：一次 setData 完成所有状态
    const firstId = subLocations.length > 0 ? subLocations[0].id : null;
    const activeTab = 'todo';
    const displayGroups = buildDisplayGroups(subLocations, activeTab);
    const allActs = subLocations.flatMap(sl => sl.activities);
    const todoCount = allActs.filter(a => a.status === 'todo').length;
    const inProgressCount = allActs.filter(a => a.status === 'in_progress').length;
    const doneCount = allActs.filter(a => a.status === 'done').length;

    this.setData({
      bigLocationId: locId,
      bigLocationName: locName,
      subLocations,
      markers: buildMarkers(subLocations, firstId),
      polyline: buildRoute(subLocations),
      allPoints: subLocations.map(s => ({ latitude: s.lat, longitude: s.lng })),
      displayGroups,
      todoCount,
      inProgressCount,
      doneCount,
      activeTab,
      highlightedId: firstId
    });
  },

  // ==================== 刷新侧边栏显示 ====================
  refreshDisplay() {
    const { subLocations, activeTab } = this.data;
    const displayGroups = buildDisplayGroups(subLocations, activeTab);

    const allActs = subLocations.flatMap(sl => sl.activities);
    const todoCount = allActs.filter(a => a.status === 'todo').length;
    const inProgressCount = allActs.filter(a => a.status === 'in_progress').length;
    const doneCount = allActs.filter(a => a.status === 'done').length;

    this.setData({ displayGroups, todoCount, inProgressCount, doneCount });
  },

  // ==================== 高亮某个子地点（角标放大+虚影，文字同步放大） ====================
  highlightLocation(slId) {
    this.setData({
      highlightedId: slId,
      markers: buildMarkers(this.data.subLocations, slId)
    });
  },

  // ==================== 切换侧边栏 ====================
  toggleSidebar() {
    this.setData({ sidebarVisible: !this.data.sidebarVisible });
  },

  // ==================== 切换Tab ====================
  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({ activeTab: tab }, () => this.refreshDisplay());
  },

  // ==================== 点击活动项（切换进行中状态） ====================
  onActivityTap(e) {
    const actId = e.currentTarget.dataset.actid;
    const locId = parseInt(e.currentTarget.dataset.locid);
    const { subLocations } = this.data;

    // 找到对应子地点和活动
    const sl = subLocations.find(s => s.id === locId);
    if (!sl) return;
    const act = sl.activities.find(a => a.id === actId);
    if (!act) return;

    // 切换状态：todo ↔ in_progress
    if (act.status === 'todo') {
      act.status = 'in_progress';
    } else if (act.status === 'in_progress') {
      act.status = 'todo';
    }
    // done 状态的不可通过此方式切换

    this.setData({ subLocations });
    this.refreshDisplay();
    this.highlightLocation(locId);
  },

  // ==================== 点击方框（切换未完成↔已完成） ====================
  toggleCheckbox(e) {
    const actId = e.currentTarget.dataset.actid;
    const locId = parseInt(e.currentTarget.dataset.locid);
    const { subLocations } = this.data;

    const sl = subLocations.find(s => s.id === locId);
    if (!sl) return;
    const act = sl.activities.find(a => a.id === actId);
    if (!act) return;

    // 切换：todo ↔ done（如果正在进行中，切换到done）
    if (act.status === 'done') {
      act.status = 'todo';
    } else {
      act.status = 'done';
    }

    this.setData({ subLocations });
    this.refreshDisplay();
  },

  // ==================== 点击地图角标 ====================
  onMarkerTap(e) {
    const id = e.detail.markerId;
    this.highlightLocation(id);
  },

  toggleSatellite() { this.setData({ showSatellite: !this.data.showSatellite }); },

  onReady() {
    this.mapCtx = wx.createMapContext('myMap');
  }
});

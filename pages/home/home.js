// 首页线框：静态数据 + 跳转，未接业务逻辑
const routeLocations = [
  { id: 101, name: '三峡博物馆', desc: '红色起点', image: '/image/重庆三峡博物馆.jpg' },
  { id: 102, name: '鹅岭公园', desc: '抗战遗址·飞阁', image: '/image/鹅岭公园.jpg' },
  { id: 103, name: '二圣镇', desc: '茶梨之乡·乡村农事', image: '/image/二圣镇.jpg' },
  { id: 104, name: '白沙镇', desc: '冯玉祥募资·抗战第一镇', image: '/image/白沙镇.jpg' },
  { id: 105, name: '夏布小镇', desc: '非遗织造', image: '/image/夏布小镇.jpg' },
  { id: 106, name: '安陶小镇', desc: '陶艺体验', image: '/image/安陶小镇.jpg' },
  { id: 107, name: '国立复旦大学旧址', desc: '抗战西迁旧址', image: '/image/国立复旦大学.jpg' }
];

Page({
  onShow() {
    if (typeof this.getTabBar === 'function') {
      wx.nextTick(() => {
        try { const bar = this.getTabBar(); if (bar) bar.setData({ selected: 0 }); } catch (e) {}
      });
    }
  },
  data: {
    routeLocations,
    routeShort: [
      { name: '三峡博物馆' }, { name: '鹅岭公园' }, { name: '二圣镇' }, { name: '白沙镇' },
      { name: '夏布小镇' }, { name: '安陶小镇' }, { name: '国立复旦旧址' }
    ],
    ipRoles: [
      { name: '外交小先锋', en: 'Little Diplomatic Pioneer', place: '鹅岭公园', skills: '国际视野·口才表达·历史认知', image: '/image/外交小先锋.jpg' },
      { name: '田野小能手', en: 'Little Field Operator', place: '二圣镇', skills: '实践操作·劳动技能·认知能力', image: '/image/田野小能手.jpg' },
      { name: '募资小英雄', en: 'Little Fundraising Hero', place: '白沙镇', skills: '团队协作·逻辑推理·时间管理', image: '/image/募资小英雄.jpg' },
      { name: '非遗小工匠', en: 'Little Heritage Craftsmen', place: '安陶小镇', skills: '耐心专注·空间认知·文化感知', image: '/image/非遗小工匠.jpg' },
      { name: '文化小卫士', en: 'Little Cultural Guardian', place: '国立复旦大学旧址', skills: '家国情怀·历史责任感·自我认知', image: '/image/文化小卫士.jpg' }
    ],
    safeStatus: {
      online: 3,
      total: 5,
      activity: '烽火渝路 · 白沙镇段',
      children: [
        { name: '张小明', location: '白沙镇 · 梨园' },
        { name: '李思远', location: '白沙镇 · 朝天嘴码头' },
        { name: '王小雨', location: '白沙镇 · 古镇街' }
      ]
    },
    quickLinks: [
      { name: '研学地图', icon: '/image/icon-pin.png', url: '/pages/map/map', tab: false },
      { name: '云认养', icon: '/image/icon-tree.png', url: '/pages/cultural/cultural', tab: true },
      { name: '排行榜', icon: '/image/icon-trophy.png', url: '/pages/award/award', tab: true },
      { name: '文创商城', icon: '/image/icon-gift.png', url: '/pages/cultural/cultural', tab: true }
    ]
  },

  onLoad() {
    getApp().checkPrivacy();
  },

  goRoute(e) {
    const loc = this.data.routeLocations[e.currentTarget.dataset.index];
    if (loc) {
      wx.navigateTo({ url: '/pages/map-sub/map-sub?id=' + loc.id + '&name=' + encodeURIComponent(loc.name) });
    }
  },

  goMap() {
    wx.navigateTo({ url: '/pages/map/map' });
  },

  goQuick(e) {
    const url = e.currentTarget.dataset.url;
    const tab = e.currentTarget.dataset.tab;
    if (tab) { wx.switchTab({ url: url }); } else { wx.navigateTo({ url: url }); }
  }
});

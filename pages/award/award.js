Page({
  onShow() {
    if (typeof this.getTabBar === 'function') {
      wx.nextTick(() => {
        try { const bar = this.getTabBar(); if (bar) bar.setData({ selected: 3 }); } catch (e) {}
      });
    }
    this.buildPodium();
  },
  data: {
    starTab: 0,
    podium: [],
    fundRanking: [
      { id: 1, name: '张*明', amount: 358, school: '白沙小学', rank: 1 },
      { id: 2, name: '李小红', amount: 296, school: '江津中学', rank: 2 },
      { id: 3, name: '王*龙', amount: 245, school: '白沙小学', rank: 3 },
      { id: 4, name: '赵*华', amount: 210, school: '几江小学', rank: 4 },
      { id: 5, name: '陈*星', amount: 188, school: '白沙中学', rank: 5 }
    ],
    abilityRanking: [
      { id: 1, name: '李小红', score: 92, school: '江津中学', rank: 1 },
      { id: 2, name: '张*明', score: 88, school: '白沙小学', rank: 2 },
      { id: 3, name: '吴*轩', score: 85, school: '渝中一小', rank: 3 },
      { id: 4, name: '钱*多', score: 80, school: '沙小', rank: 4 },
      { id: 5, name: '郑*涵', score: 76, school: '渝中实验', rank: 5 }
    ]
  },
  switchStarTab(e) {
    this.setData({ starTab: parseInt(e.currentTarget.dataset.tab) });
    this.buildPodium();
  },

  // 领奖台：取当前榜单前三，按 [2,1,3] 排序展示
  buildPodium() {
    const list = this.data.starTab === 0 ? this.data.fundRanking : this.data.abilityRanking;
    const top = (list || []).slice(0, 3);
    const map = {};
    top.forEach(t => { map[t.rank] = { name: t.name, school: t.school, value: t.amount || t.score }; });
    this.setData({
      podium: [
        map[2] || { name: '—' },
        map[1] || { name: '—' },
        map[3] || { name: '—' }
      ]
    });
  },
  goCertificate() {
    wx.navigateTo({ url: '/pages/award/certificate/certificate' });
  }
,
  onShareAppMessage() {
    return { title: "来看我的研学成果，五小双星榜！", path: "/pages/award/award" };
  }
})
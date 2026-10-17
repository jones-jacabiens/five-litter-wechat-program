Page({
  onShow() {
    if (typeof this.getTabBar === 'function') {
      wx.nextTick(() => {
        try { const bar = this.getTabBar(); if (bar) bar.setData({ selected: 4 }); } catch (e) {}
      });
    }
  },
  data: {
    userInfo: { nickName: '小研学', realName: '张*明', gender: '男', school: '白沙小学', grade: '五年级', phone: '' },
    hasStickmanImage: true,
    stats: { visitedSites: 6, medals: 8, trips: 3, totalScore: 365, rank: 1 },
    activityCenter: [
      { name: '研学手册', icon: '/image/icon-scroll.png', url: '/pages/handbook/handbook', tab: false },
      { name: '成长报告', icon: '/image/icon-medal.png', url: '/pages/profile/center-detail/center-detail?type=report', tab: false },
      { name: '学习记录', icon: '/image/icon-leaf.png', url: '/pages/profile/center-detail/center-detail?type=records', tab: false },
      { name: '订单记录', icon: '/image/icon-cart.png', url: '/pages/profile/center-detail/center-detail?type=orders', tab: false },
      { name: '会员积分', icon: '/image/icon-coin.png', url: '/pages/cultural/points-redeem/points-redeem', tab: false },
      { name: '会员商城', icon: '/image/icon-gift.png', url: '/pages/cultural/cultural', tab: true }
    ],
    medalList: [
      { id: 1, name: '红色传承', icon: '🏅', desc: '', howto: '完成三峡博物馆参观学习', unlocked: true },
      { id: 2, name: '非遗小匠', icon: '🎭', desc: '', howto: '完成白沙杂耍或安陶体验', unlocked: true },
      { id: 3, name: '募资先锋', icon: '💰', desc: '', howto: '募资任务获小组前三名', unlocked: true },
      { id: 4, name: '历史达人', icon: '📜', desc: '', howto: '答对全部抗战知识题', unlocked: true },
      { id: 5, name: '徒步勇士', icon: '🥾', desc: '', howto: '完成全部6个站点打卡', unlocked: false },
      { id: 6, name: '演说家', icon: '🎤', desc: '', howto: '朗读募资演讲获高分评价', unlocked: true },
      { id: 7, name: '巧手工匠', icon: '✂️', desc: '', howto: '完成纸花制作与售卖任务', unlocked: false },
      { id: 8, name: '团结之星', icon: '⭐', desc: '团队协作评分最高', unlocked: true }
    ],
    siteHighlights: [
      { id: 1, name: '朝天嘴码头', desc: '搬运物资·抗战知识问答', status: 'completed', score: 30 },
      { id: 2, name: '白沙古镇', desc: '学白沙杂耍·转手帕挑战', status: 'completed', score: 25 },
      { id: 3, name: '中师陈列馆', desc: '朗读冯玉祥募资演讲词', status: 'completed', score: 35 },
      { id: 4, name: '白沙影视基地', desc: '推销手工纸花·募资比拼', status: 'completed', score: 20 },
      { id: 5, name: '三峡博物馆', desc: '红色历史探索', status: 'locked', score: 0 },
      { id: 6, name: '鹅岭公园', desc: '团队拓展训练', status: 'locked', score: 0 }
    ],
    showRules: false,
    rules: [],
    showAchievement: false,
    achieveIcon: '',
    achieveName: '',
    isEditing: false, editForm: {}, unlockedCount: 0, offlineMode: false,
    loggedIn: wx.getStorageSync('loggedIn') || false
  },
  onLoad() {
    this.setData({ unlockedCount: this.data.medalList.filter(m => m.unlocked).length });
  },
  onEditProfile() { this.setData({ isEditing: true, editForm: Object.assign({}, this.data.userInfo) }); },
  onSaveProfile() {
    wx.showToast({ title: '保存成功', icon: 'success' });
    this.setData({ userInfo: Object.assign({}, this.data.editForm), isEditing: false });
    wx.setStorageSync('userName', this.data.userInfo.realName);
  },
  onCancelEdit() { this.setData({ isEditing: false }); },
  onEditInput(e) {
    this.setData({ ['editForm.' + e.currentTarget.dataset.field]: e.detail.value });
  },
  showAchievement(e) {
    var id = parseInt(e.currentTarget.dataset.id);
    var icon = e.currentTarget.dataset.icon;
    var name = e.currentTarget.dataset.name;
    var medal = this.data.medalList.find(function(m) { return m.id === id; });
    if (!medal || !medal.unlocked) { wx.showToast({ title: '还未获得此勋章', icon: 'none' }); return; }
    this.setData({ showAchievement: true, achieveIcon: icon, achieveName: name });
  },
  hideAchievement() { this.setData({ showAchievement: false }); },
  goHandbook() { wx.navigateTo({ url: '/pages/handbook/handbook' }); },
  centerItemTap(e) {
    const url = e.currentTarget.dataset.url;
    const tab = e.currentTarget.dataset.tab;
    if (tab) { wx.switchTab({ url: url }); } else { wx.navigateTo({ url: url }); }
  },
  toggleOffline(e) {
    const on = e.detail.value;
    this.setData({ offlineMode: on });
    wx.setStorageSync('offlineMode', on);
    if (on) {
      const app = getApp();
      app.cacheData('profile', this.data);
      app.cacheData('cultural', {
        products: [
          { name: '五小纪念徽章', price: 29, emoji: '🏅' },
          { name: '研学手册', price: 39, emoji: '📖' },
          { name: '活动纪念册', price: 59, emoji: '📸' },
          { name: '五小定制帆布包', price: 49, emoji: '👜' }
        ]
      });
      wx.showToast({ title: '离线模式已开启，已缓存数据', icon: 'success' });
    } else {
      wx.showToast({ title: '离线模式已关闭', icon: 'success' });
    }
  },
  getPhoneNumber() {
    wx.showToast({ title: '手机号获取成功', icon: 'success' });
  },
  onChooseAvatar(e) {
    this.setData({ 'userInfo.avatarUrl': e.detail.avatarUrl });
    wx.setStorageSync('avatarUrl', e.detail.avatarUrl);
  },
  onNickNameInput(e) {
    this.setData({ 'userInfo.nickName': e.detail.value });
    wx.setStorageSync('userName', e.detail.value);
  },
  onShareAppMessage() { return { title: '红色研学之旅', path: '/pages/map/map' }; }
})

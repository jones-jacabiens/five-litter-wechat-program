Page({
  onShow() {
    if (typeof this.getTabBar === 'function') {
      wx.nextTick(() => {
        try { const bar = this.getTabBar(); if (bar) bar.setData({ selected: 1 }); } catch (e) {}
      });
    }
  },
  data: {
    currentTab: 0,
    searchKey: '', showTree: false, searched: false, adopted: false, growth: 0,
    treeInfo: { id: '', name: '', location: '', adopted: false, image: '' },
    products: [
      { name: '五小纪念徽章', price: 29, emoji: '🏅' },
      { name: '研学手册', price: 39, emoji: '📖' },
      { name: '活动纪念册', price: 59, emoji: '📸' },
      { name: '五小定制帆布包', price: 49, emoji: '👜' }
    ],
    recommendTrees: [
      { id: 'LS-001', name: '巴山梨树·编号001', location: '二圣镇·梨园' },
      { id: 'CS-001', name: '高山茶树·编号001', location: '二圣镇·茶园' },
      { id: 'LS-002', name: '巴山梨树·编号002', location: '二圣镇·梨园' },
      { id: 'CS-002', name: '高山茶树·编号002', location: '二圣镇·茶园' }
    ],
    subTab: 0,
    showPromo: false,
    pointsItems: [
      { name: "研学手册折扣券", cost: 50, icon: "📖", redeemed: false },
      { name: "文创徽章兑换券", cost: 80, icon: "🏅", redeemed: false },
      { name: "云认养免费名额", cost: 200, icon: "🌳", redeemed: false },
      { name: "周末营8折券", cost: 150, icon: "🎪", redeemed: false },
    ], points: 0,
    farmProducts: [
      { name: '巴南二圣·翠冠雪梨', price: 59, emoji: '🍐', tag: '二圣 · 梨' },
      { name: '二圣秋梨膏', price: 68, emoji: '🍯', tag: '二圣 · 梨' },
      { name: '二圣·高山云雾茶', price: 128, emoji: '🍵', tag: '二圣 · 茶', image: '/image/茶叶.jpg' },
      { name: '手工茶砖', price: 98, emoji: '🍵', tag: '二圣 · 茶' },
      { name: '荣昌陶·小器', price: 88, emoji: '🏺', tag: '安陶 · 非遗' },
      { name: '夏布书签', price: 39, emoji: '🎋', tag: '夏布 · 非遗' },
      { name: '白沙风筝', price: 49, emoji: '🪁', tag: '白沙 · 非遗' }
    ],
    cartItems: [], cartTotal: 0, showCart: false
  },
  onLoad() { this.setData({ points: wx.getStorageSync("totalPoints") || 360 }); },
  switchTab(e) { this.setData({ currentTab: parseInt(e.currentTarget.dataset.tab) }); },
  onSearchInput(e) { this.setData({ searchKey: e.detail.value }); },
  doSearch() {
    const key = this.data.searchKey.trim().toUpperCase();
    if (!key) { wx.showToast({ title: '请输入编号', icon: 'none' }); return; }
    const found = this.data.recommendTrees.find(t => t.id === key);
    if (found) {
      this.setData({ showTree: true, searched: true, adopted: false, growth: 0,
        treeInfo: { id: found.id, name: found.name, location: found.location, adopted: false, image: '/image/二圣镇.jpg' }
      });
    } else { wx.showToast({ title: '未找到该编号的树', icon: 'none' }); }
  },
  selectRecommend(e) { this.setData({ searchKey: e.currentTarget.dataset.id }, () => this.doSearch()); },
  doAdopt() { this.setData({ adopted: true, growth: 10 }); wx.showToast({ title: '认养成功！🎉', icon: 'success' }); },
  waterTree() {
    let g = Math.min(this.data.growth + 5, 100);
    this.setData({ growth: g });
    wx.showToast({ title: '浇水成功 💧', icon: 'success' });
    if (g >= 100) wx.showModal({ title: '🎉 果实成熟！', content: '您的果实已成熟，我们将为您邮寄到家！' });
  },
  fertilizeTree() {
    let g = Math.min(this.data.growth + 5, 100);
    this.setData({ growth: g });
    wx.showToast({ title: '施肥成功 🌿', icon: 'success' });
    if (g >= 100) wx.showModal({ title: '🎉 果实成熟！', content: '您的果实已成熟，我们将为您邮寄到家！' });
  },
  addToCart(e) {
    const name = e.currentTarget.dataset.name;
    const price = parseInt(e.currentTarget.dataset.price);
    let items = this.data.cartItems || [];
    const exist = items.find(i => i.name === name);
    if (exist) { exist.count = (exist.count || 1) + 1; }
    else { items.push({ name, price, count: 1 }); }
    const total = items.reduce((s, i) => s + i.price * i.count, 0);
    this.setData({ cartItems: items, cartTotal: total });
    wx.showToast({ title: '已加入购物车', icon: 'success' });
  },
  buyNow(e) {
    const name = e.currentTarget.dataset.name;
    const price = e.currentTarget.dataset.price;
    wx.navigateTo({ url: `/pages/cultural/payment/payment?name=${encodeURIComponent(name)}&price=${price}` });
  },
  backToTreeList() { this.setData({ showTree: false, searched: false }); },
  switchSubTab(e) { this.setData({ subTab: parseInt(e.currentTarget.dataset.tab) }); },
  showPromoRules() { this.setData({ showPromo: true }); },
  hidePromoRules() { this.setData({ showPromo: false }); },
  redeemPoint(e) {
    const name = e.currentTarget.dataset.name;
    const cost = parseInt(e.currentTarget.dataset.cost);
    const icon = e.currentTarget.dataset.icon;
    let pts = this.data.points;
    if (pts < cost) { wx.showToast({ title: '积分不足', icon: 'none' }); return; }
    pts -= cost;
    wx.setStorageSync('totalPoints', pts);
    let items = this.data.pointsItems.map(function(i) { return i.name === name ? { ...i, redeemed: true } : i; });
    this.setData({ points: pts, pointsItems: items });
    wx.showToast({ title: '兑换成功!', icon: 'success' });
  },
  toggleCart() { this.setData({ showCart: !this.data.showCart }); },
  clearCart() { var that=this; wx.showModal({ title:'清空购物车', content:'确定要清空购物车吗？', success:function(r){ if(r.confirm){ that.setData({ cartItems:[], cartTotal:0, showCart:false }); wx.showToast({ title:'已清空', icon:'success' }); } } }); }
,
  onShareAppMessage() {
    return { title: "五小文创，传承红色记忆，助力乡村振兴！", path: "/pages/cultural/cultural" };
  }
})
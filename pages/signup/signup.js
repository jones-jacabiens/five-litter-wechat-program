Page({
  onShow() {
    if (typeof this.getTabBar === 'function') {
      wx.nextTick(() => {
        try { const bar = this.getTabBar(); if (bar) bar.setData({ selected: 2 }); } catch (e) {}
      });
    }
  },
  data: {
    name: '',
    phone: '',
    phoneValid: null,
    loading: false,
    selectedDate: '',
    selectedRoute: '',
    count: '1',
    routes: ['烽火渝路·五天四晚经典营（基础版）', '烽火渝路·五天四晚经典营（升级版）'],
    dateOptions: [],
    dateSpots: {},
    currentSpots: '',
    extProducts: [
      { name: '周末营', desc: '周末 1-2 日短途营 · 轻量研学', status: '即将上线' },
      { name: '冬夏令营', desc: '寒暑假主题营 · 深度研学', status: '即将上线' },
      { name: '亲子营', desc: '家长孩子共学 · 亲子陪伴', status: '即将上线' },
      { name: '线上云研学', desc: '云端课堂 · 线上线下联动', status: '即将上线' }
    ]
  },
  onLoad() {
    // 生成未来14天的日期选项
    var dates = [];
    var spots = {};
    var today = new Date();
    for (var i = 0; i < 14; i++) {
      var d = new Date(today);
      d.setDate(today.getDate() + i);
      var m = d.getMonth() + 1;
      var day = d.getDate();
      var str = m + '月' + day + '日 (' + ['日','一','二','三','四','五','六'][d.getDay()] + ')';
      dates.push(str);
      // 模拟余位：前5天余位多，后面减少
      spots[str] = Math.max(0, 40 - i * 2 - Math.floor(Math.random() * 10));
    }
    this.setData({ dateOptions: dates, dateSpots: spots });
  },
  onDateChange(e) {
    var idx = e.detail.value;
    var date = this.data.dateOptions[idx];
    var sp = this.data.dateSpots[date] || 0;
    this.setData({ selectedDate: date, currentSpots: '余位 ' + sp + '人' });
  },
  onNameInput(e) { this.setData({ name: e.detail.value }); },
  onPhoneInput(e) {
    var v = e.detail.value;
    this.setData({ phone: v, phoneValid: v.length === 11 ? true : (v.length > 0 ? false : null) });
  },
  onCountInput(e) { this.setData({ count: e.detail.value }); },
  onRouteChange(e) {
    this.setData({ selectedRoute: this.data.routes[e.detail.value] });
  },
  submitSignup() {
    const { name, phone, selectedRoute } = this.data;
    if (!name || !phone || !selectedRoute) {
      wx.showToast({ title: '请填写完整信息', icon: 'none' }); return;
    }
    if (phone.length !== 11) {
      wx.showToast({ title: '手机号格式不正确', icon: 'none' }); return;
    }
    wx.showModal({
      title: '提交成功！',
      content: `已收到${name}的报名信息，工作人员将尽快处理。`,
      confirmText: '好的',
      success: function() {
        this.setData({ name: '', phone: '', selectedRoute: '', count: '1', selectedDate: '', currentSpots: '' });
      }
    });
  }
,
  onShareAppMessage() {
    return { title: "【烽火渝路】沉浸式红色研学，让孩子边玩边学！", path: "/pages/signup/signup" };
  }
})
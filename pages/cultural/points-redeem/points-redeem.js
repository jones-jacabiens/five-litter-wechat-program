Page({
  data: { name: '', cost: 0, icon: '', points: 0 },
  onLoad(o) {
    const pts = wx.getStorageSync('totalPoints') || 360;
    this.setData({
      name: decodeURIComponent(o.name || ''),
      cost: parseInt(o.cost) || 0,
      icon: o.icon || '🎁',
      points: pts
    });
  },
  goBack() { wx.navigateBack(); },
  confirmRedeem() {
    const pts = this.data.points;
    const cost = this.data.cost;
    if (pts < cost) { wx.showToast({ title: '积分不足', icon: 'none' }); return; }
    const remain = pts - cost;
    wx.setStorageSync('totalPoints', remain);
    wx.showModal({
      title: '兑换成功',
      content: '已兑换「' + this.data.name + '」，消耗' + cost + '积分，剩余' + remain + '积分',
      confirmText: '好的',
      success: function() { wx.navigateBack(); }
    });
  }
})
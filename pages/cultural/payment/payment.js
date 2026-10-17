Page({
  data: { name: '', price: 0, payMethod: 'wx', loading: false, showSuccess: false },
  onLoad(o) {
    this.setData({ name: decodeURIComponent(o.name || ''), price: parseInt(o.price) || 0 });
  },
  goBack() { wx.navigateBack(); },
  selectPay(e) { this.setData({ payMethod: e.currentTarget.dataset.method }); },
  doPay() {
    var that = this;
    this.setData({ loading: true });
    setTimeout(function() {
      that.setData({ loading: false, showSuccess: true });
      setTimeout(function() { wx.navigateBack(); }, 1500);
    }, 1200);
  }
})
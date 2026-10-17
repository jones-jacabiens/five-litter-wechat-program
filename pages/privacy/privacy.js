Page({
  data: { agreed: false },
  onLoad() {
    const agreed = wx.getStorageSync('privacyAgreed');
    if (agreed) this.setData({ agreed: true });
  },
  agree() {
    wx.setStorageSync('privacyAgreed', true);
    this.setData({ agreed: true });
    wx.navigateBack();
  },
  goBack() { wx.navigateBack(); }
})

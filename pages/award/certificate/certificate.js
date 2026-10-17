Page({
  data: { studentName: '', awardName: '优秀学员', date: '', activity: '烽火渝路：“五小”抗战研学专线', loading: false, generated: false },
  onLoad() {
    var n = wx.getStorageSync('userName') || '';
    var d = new Date();
    this.setData({ studentName: n, date: d.getFullYear()+'年'+(d.getMonth()+1)+'月'+d.getDate()+'日' });
  },
  onNameInput(e) { this.setData({ studentName: e.detail.value }); },
  onAwardInput(e) { this.setData({ awardName: e.detail.value }); },
  goBack() { wx.navigateBack(); },
  generateCert() {
    if (!this.data.studentName) { wx.showToast({ title: '请输入学生姓名', icon: 'none' }); return; }
    this.setData({ loading: true, generated: true });
    var that = this;
    setTimeout(function() { that.setData({ loading: false }); wx.showToast({ title: '证书生成成功', icon: 'success' }); }, 800);
  },
  downloadCert() {
    if (!this.data.generated) { wx.showToast({ title: '请先生成证书', icon: 'none' }); return; }
    var that = this;
    this.setData({ loading: true });
    wx.canvasToTempFilePath({
      canvasId: 'certCanvas',
      success: function(r) {
        wx.saveImageToPhotosAlbum({
          filePath: r.tempFilePath,
          success: function() { wx.showToast({ title: '已保存至相册', icon: 'success' }); },
          fail: function() { wx.showToast({ title: '请开启相册权限', icon: 'none' }); }
        });
        that.setData({ loading: false });
      },
      fail: function() { that.setData({ loading: false }); wx.showToast({ title: '生成失败', icon: 'none' }); }
    });
  }
})
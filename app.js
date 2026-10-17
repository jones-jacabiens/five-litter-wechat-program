App({
  onLaunch() {
    try {
      const res = wx.getDeviceInfo();
      const win = wx.getWindowInfo();
      this.globalData.systemInfo = Object.assign({}, res, {
        windowWidth: win.windowWidth, windowHeight: win.windowHeight, pixelRatio: win.pixelRatio
      });
    } catch(e) {}
    this.globalData.launchDone = true;
  },
  checkPrivacy() {
    try {
      if (!wx.getStorageSync('privacyAgreed')) {
        setTimeout(function(){ wx.navigateTo({ url: '/pages/privacy/privacy' }); }, 200);
      }
    } catch(e){}
  },
  cacheData(key, data) {
    wx.setStorageSync('cache_' + key, { data: data, time: Date.now() });
  },
  getCachedData(key, maxAge) {
    if (!maxAge) maxAge = 3600000;
    const cache = wx.getStorageSync('cache_' + key);
    if (!cache) return null;
    if (Date.now() - cache.time > maxAge) return null;
    return cache.data;
  },
  globalData: {
    userInfo: null, systemInfo: null, isOnline: true
  }
})

Page({
  data: {
    id: 0,
    name: '',
    lat: 0,
    lng: 0,
    studentHeight: '140cm',
    hasStickmanImage: false
  },

  onLoad(options) {
    // 接收地图页面传过来的参数
    const { id, name, lat, lng } = options;
    this.setData({
      id: parseInt(id) || 1,
      name: name || '未知站点',
      lat: parseFloat(lat) || 0,
      lng: parseFloat(lng) || 0
    });

    // 根据id设置"中小学生个子"的参考身高
    const heights = {
      1: '145cm',
      2: '142cm',
      3: '138cm',
      4: '140cm',
      5: '136cm',
      6: '135cm'
    };
    this.setData({
      studentHeight: heights[id] || '140cm'
    });

    // 动态设置导航栏标题
    wx.setNavigationBarTitle({
      title: name || '站点详情'
    });
  },

  // 返回地图
  onBack() {
    wx.navigateBack({
      delta: 1
    });
  }
});
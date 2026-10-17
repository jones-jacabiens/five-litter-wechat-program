Page({
  data: { title: '', items: [] },
  onLoad(options) {
    const type = options.type || 'report';
    const map = {
      report: {
        title: '成长报告',
        items: [
          { name: '募资额', value: '358 元', note: '白沙镇 · 募资小英雄任务' },
          { name: '能力积分', value: '365 分', note: '口才·协作·实践综合' },
          { name: '勋章', value: '8 枚', note: '已解锁 8 项成就' }
        ]
      },
      records: {
        title: '学习记录',
        items: [
          { name: '版画雕刻', value: '已完成', note: '三峡博物馆' },
          { name: '小小外交讲解员', value: '已完成', note: '鹅岭公园' },
          { name: '采茶制茶', value: '进行中', note: '二圣镇' }
        ]
      },
      orders: {
        title: '订单记录',
        items: [
          { name: '烽火渝路·经典营', value: '¥1280 × 1', note: '2026-08-10 · 已支付' },
          { name: '五小纪念徽章', value: '¥29 × 2', note: '2026-08-12 · 已发货' }
        ]
      }
    };
    const d = map[type] || map.report;
    this.setData({ title: d.title, items: d.items });
    wx.setNavigationBarTitle({ title: d.title });
  },
  goBack() { wx.navigateBack(); }
});

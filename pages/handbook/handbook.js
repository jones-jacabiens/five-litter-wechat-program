Page({
  goBack() { wx.navigateBack(); },
  data: {
    currentPage: 0,
    totalPages: 20,
    flipped: false,
    isAnimating: false
  },

  onBookTap(e) {
    if (this.data.isAnimating) return;

    // tap 事件通过 e.detail.x 获取点击位置（px，相对于页面左上角）
    const tapX = e.detail && e.detail.x;
    if (tapX === undefined) return;

    const query = wx.createSelectorQuery();
    query.select('.book').boundingClientRect(rect => {
      if (!rect) return;
      const bookWidth = rect.width;
      const clickX = tapX - rect.left;

      // 右侧60% → 向前翻；左侧40% → 向后翻
      if (clickX > bookWidth * 0.6) {
        this.flipForward();
      } else if (clickX < bookWidth * 0.4) {
        this.flipBackward();
      }
      // 中间20%区域不做操作，防止误触
    }).exec();
  },

  flipForward() {
    if (this.data.currentPage >= this.data.totalPages - 2) return;

    this.setData({ isAnimating: true, flipped: true });

    setTimeout(() => {
      this.setData({
        currentPage: this.data.currentPage + 2,
        flipped: false,
        isAnimating: false
      });
    }, 600);
  },

  flipBackward() {
    if (this.data.currentPage < 2) return;

    this.setData({ isAnimating: true });

    setTimeout(() => {
      this.setData({
        currentPage: this.data.currentPage - 2,
        isAnimating: false
      });
    }, 350);
  }
});

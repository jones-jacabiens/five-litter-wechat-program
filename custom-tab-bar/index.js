Component({
  data: {
    selected: 0,
    list: [
      { pagePath: '/pages/home/home', text: '首页', icon: '/image/tab-home.png', activeIcon: '/image/tab-home-active.png' },
      { pagePath: '/pages/cultural/cultural', text: '文创', icon: '/image/tab-cultural.png', activeIcon: '/image/tab-cultural-active.png' },
      { pagePath: '/pages/signup/signup', text: '报名处', icon: '/image/tab-signup.png', activeIcon: '/image/tab-signup-active.png' },
      { pagePath: '/pages/award/award', text: '颁奖', icon: '/image/tab-award.png', activeIcon: '/image/tab-award-active.png' },
      { pagePath: '/pages/profile/profile', text: '我的', icon: '/image/tab-profile.png', activeIcon: '/image/tab-profile-active.png' }
    ]
  },
  methods: {
    switchTab(e) {
      const { path, index } = e.currentTarget.dataset;
      wx.switchTab({ url: path });
      this.setData({ selected: index });
    }
  }
});

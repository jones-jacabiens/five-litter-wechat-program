// 路线卡片图片映射
var locationImages = {
  '三峡博物馆': '/image/重庆三峡博物馆.jpg',
  '鹅岭公园': '/image/鹅岭公园.jpg',
  '二圣镇': '/image/二圣镇.jpg',
  '白沙镇': '/image/白沙镇.jpg',
  '夏布小镇': '/image/夏布小镇.jpg',
  '安陶小镇': '/image/安陶小镇.jpg',
  '国立复旦大学旧址': '/image/国立复旦大学.jpg'
};

// ===== 分级角标类型色（同种类型同色，不同类型不同色）=====
const TYPE_META = {
  museum:  { key: 'red',    rgb: '#D63031' },   // 博物馆
  park:    { key: 'green',  rgb: '#3C9E6D' },   // 公园旧址
  country: { key: 'teal',   rgb: '#2F8F9B' },   // 乡村研学
  town:    { key: 'amber',  rgb: '#D9973D' },   // 红色古镇
  craft:   { key: 'purple', rgb: '#8A5FC0' },   // 非遗体验
  site:    { key: 'blue',   rgb: '#3D6FC4' }    // 旧址故居
};

// 三级重要度：L3 大角标+虚影 / L2 中号角标 / L1 实心圆点（图标越大文字越大）
const LEVEL_META = {
  3: { icon: 'ghalo', w: 120, h: 150, anchorY: 0.84,  fontSize: 16, padding: 8, radius: 16 },
  2: { icon: 'gpin',  w: 66,  h: 84,  anchorY: 0.945, fontSize: 13, padding: 5, radius: 12 },
  1: { icon: 'gdot',  w: 30,  h: 30,  anchorY: 0.5,   fontSize: 10, padding: 2, radius: 6 }
};

// 7个大地点（红色研学路线，按顺序；importance: 3重要 / 2普通）
const BIG_LOCATIONS = [
  { id: 101, name: '三峡博物馆',     lat: 29.5630, lng: 106.5440, type: 'museum',  importance: 3, desc: '了解三峡文化·红色起点' },
  { id: 102, name: '鹅岭公园',       lat: 29.5490, lng: 106.5150, type: 'park',    importance: 2, desc: '抗战遗址群·飞阁' },
  { id: 103, name: '二圣镇',         lat: 29.4250, lng: 106.7200, type: 'country', importance: 2, desc: '乡村研学·农事体验' },
  { id: 104, name: '白沙镇',         lat: 29.0460, lng: 106.1670, type: 'town',    importance: 3, desc: '红色古镇·冯玉祥募资路线' },
  { id: 105, name: '夏布小镇',       lat: 29.3860, lng: 105.5980, type: 'craft',   importance: 2, desc: '非遗夏布·传统织造体验' },
  { id: 106, name: '安陶小镇',       lat: 29.3640, lng: 105.5520, type: 'craft',   importance: 2, desc: '安陶非遗·陶器制作体验' },
  { id: 107, name: '国立复旦大学旧址', lat: 29.8410, lng: 106.4420, type: 'site', importance: 3, desc: '抗战西迁·复旦旧址' }
];

// ===== 构建分级角标 markers =====
function buildMarkers(list) {
  return list.map(function(loc) {
    var meta = TYPE_META[loc.type];
    var lv = LEVEL_META[loc.importance] || LEVEL_META[2];
    var isDot = loc.importance === 1;
    return {
      id: loc.id,
      latitude: loc.lat,
      longitude: loc.lng,
      iconPath: '/image/location.png',
      width: lv.w,
      height: lv.h,
      anchor: { x: 0.5, y: lv.anchorY },
      label: {
        content: loc.name,
        color: isDot ? '#3A3A3A' : '#FFFFFF',
        fontSize: lv.fontSize,
        bgColor: isDot ? '#FFFFFF' : meta.rgb,
        borderRadius: lv.radius,
        padding: lv.padding,
        textAlign: 'center'
      },
      zIndex: loc.importance * 10
    };
  });
}

// ===== 两点之间用曲线连接（二次贝塞尔外鼓，点位“不用太直”）=====
function curveBetween(a, b, idx, isStreet) {
  var dLng = b.longitude - a.longitude;
  var dLat = b.latitude - a.latitude;
  var len = Math.sqrt(dLng * dLng + dLat * dLat) || 1e-9;
  // 曲线外鼓幅度：主地图大、子地图(街道级)小，且相邻段左右交替，形成自然蜿蜒
  var k = isStreet
    ? Math.max(0.00035, Math.min(0.0009, len * 0.4))
    : Math.max(0.015, Math.min(0.06, len * 0.5));
  var sign = (idx % 2 === 0) ? 1 : -1;
  var nx = -dLat / len * k * sign;
  var ny = dLng / len * k * sign;
  var midLat = (a.latitude + b.latitude) / 2;
  var midLng = (a.longitude + b.longitude) / 2;
  var cLat = midLat + ny, cLng = midLng + nx;
  var pts = [], N = 26;
  for (var i = 0; i <= N; i++) {
    var u = i / N, inv = 1 - u;
    pts.push({
      latitude: inv * inv * a.latitude + 2 * inv * u * cLat + u * u * b.latitude,
      longitude: inv * inv * a.longitude + 2 * inv * u * cLng + u * u * b.longitude
    });
  }
  return pts;
}

// 白色描边打底 + 品牌红路线，曲线在任意地形/卫星底图上都清晰
function buildRoute(list, isStreet) {
  var pts = [];
  list.forEach(function(loc, i) {
    if (i === 0) return;
    var seg = curveBetween(list[i - 1], loc, i - 1, isStreet);
    seg.forEach(function(p, j) {
      if (i > 1 && j === 0) return;
      pts.push(p);
    });
  });
  return [
    { points: pts, color: '#FFFFFF', width: 8 },
    { points: pts, color: '#D63031', width: 4.5 }
  ];
}

Page({
  onShow() { if (typeof this.getTabBar === 'function' && this.getTabBar()) { this.getTabBar().setData({ selected: 0 }); } },

  data: {
    // 微信原生地图（腾讯地图数据，自带地形/街景，原生支持双指捏合缩放；
    // 如需切换高德/百度底图，可在腾讯位置服务配置 subkey + mapStyle）
    centerLat: 29.44,
    centerLng: 106.14,
    scale: 7,
    markers: [],
    polyline: [],
    allPoints: [],
    enable3D: true,
    showSatellite: false,

    mapTitle: '烽火渝路 · 红色研学地图',
    tipText: '👆 点击角标进入内部路线 · 双指捏合缩放',
    showTitle: true,
    showCards: true,
    showGps: false,
    highlightedId: null,
    routeLocations: BIG_LOCATIONS.map(function(l) { return Object.assign({}, l, { image: locationImages[l.name] || '' }); }),
    gpsMarkers: [
      { id: 1, name: '张*明', location: '二圣镇·梨园', lat: 29.4250, lng: 106.7200 }
    ]
  },

  onLoad() {
    getApp().checkPrivacy();
    this.routeMarkers = buildMarkers(BIG_LOCATIONS);
    this.setData({
      markers: this.routeMarkers,
      polyline: buildRoute(BIG_LOCATIONS, false),
      allPoints: BIG_LOCATIONS.map(function(l) { return { latitude: l.lat, longitude: l.lng }; })
    });
  },

  onReady() { this.mapCtx = wx.createMapContext('myMap'); },

  // ===== 点击角标 → 进入子地图 =====
  onMarkerTap(e) {
    var id = e.detail.markerId;
    var loc = BIG_LOCATIONS.find(function(l) { return l.id === id; });
    if (loc) {
      this.setData({ highlightedId: id });
      wx.navigateTo({ url: '/pages/map-sub/map-sub?id=' + loc.id + '&name=' + encodeURIComponent(loc.name) });
    }
  },

  onRouteCardTap(e) {
    var idx = e.currentTarget.dataset.index;
    var loc = this.data.routeLocations[idx];
    if (loc) {
      this.setData({ highlightedId: loc.id });
      wx.navigateTo({ url: '/pages/map-sub/map-sub?id=' + loc.id + '&name=' + encodeURIComponent(loc.name) });
    }
  },

  toggleCards() { this.setData({ showCards: !this.data.showCards }); },

  // ===== 实时定位开关（叠加手环/马甲模拟点位）=====
  toggleGps(e) {
    var show = e.detail.value;
    var markers = this.routeMarkers.slice();
    if (show) {
      var gpsMk = this.data.gpsMarkers.map(function(g) {
        return {
          id: 200 + g.id,
          latitude: g.lat,
          longitude: g.lng,
          iconPath: '/image/location.png',
          width: 36, height: 36,
          zIndex: 5
        };
      });
      markers = markers.concat(gpsMk);
    }
    this.setData({ markers: markers, showGps: show });
  },

  toggleSatellite() { this.setData({ showSatellite: !this.data.showSatellite }); },

  onRegionChange() {},
  onShareAppMessage() { return { title: '跟着智慧五小，重走重庆抗战路！', path: '/pages/map/map' }; }
});

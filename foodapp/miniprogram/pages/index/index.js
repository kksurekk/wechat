//Page Object
const api = require('../../utils/api');
const app = getApp();

Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    list: []
  },

  onLoad: function (options) {
    api.getCityList(res => {
      console.log(res.data);
    });

    api.getProductList(res => {
      this.setData({
        list: res.data
      });
    });
  },
  /**
   * 进入商品详情页
   */
  onProductDetailHandler: function (event) {
    //根据id查询商品
    const productId = event.currentTarget.dataset.id;
    const productList = [...this.data.list];
    const product = productList.filter(item => {
      if (item.id === productId) {
        return item;
      }
    });
    //缓存商品数据
    wx.setStorageSync('product', product[0]);

    //跳转到商品详情页
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  /**
   * 下拉刷新
   */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading(); //显示导航加载进度

    api.getProductList(res => {
      this.setData({
        list: res.data
      });
      //停止导航加载进度并停止下拉刷新
      setTimeout(function () {
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
      }, 2000)
    });
  },
  /**
   * 上拉加载更多
   */
  onReachBottom: function () {
    wx.showLoading();
    // 请求下一页网络数据
    api.getProductList(res => {
      const newList = res.data; // 新请求数据
      const list = [...this.data.list, ...newList]; //原有数据
      // 数据请求成功
      this.setData({
        list
      });
      setTimeout(function () {
        wx.hideLoading();
      }, 2000)
    });
  },
});



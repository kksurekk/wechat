const movieAPI = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/timg.gif',
      '../../images/3.jpg',
      '../../images/2.gif'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    movieLists: null
  },
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    });
    movieAPI.getTodayMovie(res => {
      this.setData({
        movieLists:res.data.result
      });
      wx.hideLoading();
    });
  },

  /**
   * 进入电影详情页
   */
  onMovieItemHandler:function(ev){
    const movieid = ev.currentTarget.dataset.movieid;
    console.log(movieid);
    wx.navigateTo({
      url: `../detail/detail?movieid=${movieid}`,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading(); //显示导航加载进度

    movieAPI.getTodayMovie(res => {
      this.setData({
        movieLists: res.data.result
      });
      //停止导航加载进度并停止下拉刷新
      setTimeout(function () {
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
      }, 2000)
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
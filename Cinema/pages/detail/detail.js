// pages/detail/detail.js
const app = getApp();
const movieAPI = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:null,
    ratevalue:5
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const movieid = options.movieid;
    console.log(movieid);
    movieAPI.getMovieDetail(movieid,res => {
      console.log(res.data);
      this.setData({
        movie: res.data.result
      });
    });
    
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
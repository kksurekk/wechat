// pages/cin/cin.js
const movieAPI = require('../../utils/util.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cinema:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.userInfoReadyCallback = res => {
      const latitude = res.latitude
      const longitude = res.longitude
      const speed = res.speed
      const accuracy = res.accuracy
      console.log(`latitude : ${latitude} longitude : ${longitude}`);
      app.globalData.location = {
        latitude: latitude,
        longitude: longitude,
        speed: speed,
        accuracy: accuracy
      }
    }
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
    wx.showLoading({
      title: '加载中...',
    });
    // const lat = app.globalData.location.latitude;
    // const lon = app.globalData.location.longitude;
    movieAPI.getCinemasLocal(res => {
      console.log(res.data);
      this.setData({
        cinema:res.data.result
      });
      wx.hideLoading();
    })
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
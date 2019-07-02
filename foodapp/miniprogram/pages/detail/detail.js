// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //从缓存中获取商品信息
    const product = wx.getStorageSync('product');
    console.log(`product : ${JSON.stringify(product)}`);
    this.setData({
      product
    });
  },
  addCartClick: function () {
    const carts = wx.getStorageSync('cartStorage') || [];
    const product = this.data.product;

    //判断商品是否已经添加到购物车中
    const cartProduct = carts.filter(item => item.id === product.id)[0];
    if (cartProduct === null || typeof (cartProduct) === 'undefined') {
      const cartsItem = {
        id: product.id,
        picture: product.picture,
        productName: product.product,
        price: product.price,
        number: 1
      }
      carts.push(cartsItem);
    } else {
      cartProduct.number = cartProduct.number + 1;
    }
    wx.setStorage({
      key: 'cartStorage',
      data: carts,
    });
    wx.showToast({
      title: '添加成功！',
      duration: 1500
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
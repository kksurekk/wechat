const app = getApp();
/**
 * 获取商品列表接口
 * resolve成功回调函数
 */
function getProductList(resolve) {
  wx.request({
    url: `${app.globalData.API_URL}/orders.json`,
    header: {
      'content-type': 'application/json'
    },
    success: resolve,
    fail: () => { }
  });
}

const getCityList = function (resolve) {
  wx.request({
    url: 'http://v.juhe.cn/movie/citys',
    data: {
      key: '11b9acea63a6a178ad77f761d2df3034'
    },
    header: { 'content-type': 'application/json' },
    success: resolve,
    fail: () => { console.log('fail') }
  });
}

/**
 * 商品详情接口
 */
function getProductByID(resolve, id) {
  wx.request({
    url: `${app.globalData.API_URL}/product/detail.do`,
    data: id,
    header: {
      'content-type': 'application/json'
    },
    success: resolve,
    fail: () => { }
  });
}

module.exports = {
  getProductList(resolve) {
    return getProductList(resolve);
  },
  getProductByID(resolve, id) {
    return getProductByID(resolve, id);
  },
  getCityList(resolve) {
    return getCityList(resolve);
  }
}
const app = getApp();
/**
 * 今日电影
 */
const getTodayMovie = function (resovle) {
  wx.request({
    url: `${app.globalData.api_url}/movie/movies.today`,
    data: {
      cityid: 6,
      key: 'ba657d2b494f9e3dec94a8e633b6bf18'
    },
    success: resovle

  })
}
/**
 * 电影详情
 * movieid
 */
const getMovieDetail = function (movieid, resovle) {
  wx.request({
    url: `${app.globalData.api_url}/movie/query`,
    data: {
      movieid:movieid,
      cityid: 6,
      key: 'ba657d2b494f9e3dec94a8e633b6bf18'
    },
    success: resovle,
    fail: (err) => {
          console.log(err)
        }
  });
}
/**
 * 周边影院
 */
const getCinemasLocal = function (resolve) {
  wx.request({
    url: `${app.globalData.api_url}/movie/cinemas.local`,
    data: {
      lat: 30.669603,
      lon: 104.059933,
      radius: 3000,
      key: 'ba657d2b494f9e3dec94a8e633b6bf18'
    },

    success: resolve,
    fail: (err) => {
      console.log(err)
    }
  });
}

module.exports = {
  getTodayMovie(resovle) {
    return getTodayMovie(resovle);
  },
  getMovieDetail(id, resovle) {
    return getMovieDetail(id, resovle);
  },
  getCinemasLocal(resolve) {
    return getCinemasLocal(resolve);
  }
}

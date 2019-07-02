// pages/address/address.js
const _arrayProvince = ["海外", "北京市", "天津市", "河北省", "山西省", "内蒙古自治区", "辽宁省", "吉林省", "黑龙江省", "上海市", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "广西壮族自治区", "海南省", "重庆市", "四川省", "贵州省", "云南省", "西藏自治区", "陕西省", "甘肃省", "青海省", "宁夏回族自治区", "新疆维吾尔自治区", "台湾省", "香港特别行政区", "澳门特别行政区"];
const _citiyLists = ["石家庄市", "邯郸市", "唐山市", "保定市 ", "秦皇岛市", "邢台市", "张家口市", "承德市", "沧州市", "廊坊市", "衡水市", "辛集市", "晋州市", "新乐市", "遵化市", "迁安市", "霸州市", "三河市", "定州市", "涿州市", "安国市", "高碑店市", "泊头市"]
const _countiyLists = ["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区", "滨海新区", "宁河区", "静海区", "蓟州区"]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrayProvince:[],
    arrayCity:[],
    arrayCounty:[],

    detailAddress:'',
    receiverName:'',
    receiverMobile:'',

    indexProvince:0,
    indexCity:0,
    indexCounty:0,

    arrayProvinceCityCounty: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const currentProvinceCityCountyIndex = wx.getStorageSync('currentProvinceCityCountyIndex') || [0,0,0];
    this.setData({
      arrayProvince:_arrayProvince,
      arrayCity:_citiyLists,
      arrayCounty:_countiyLists,
      detailAddress:wx.getStorageSync('detailAddress'),
      receiverName:wx.getStorageSync('receiverName'),
      receiverMobile:wx.getStorageSync('receiverMobile'),
      indexProvince:currentProvinceCityCountyIndex[0],
      indexCity:currentProvinceCityCountyIndex[1],
      indexCounty:currentProvinceCityCountyIndex[2]
    });
  },
  bindChangeProvince:function(ev){
    console.log(ev);
    const provinceIndex = ev.detail.value;
    this.setData({
      indexProvince:provinceIndex
    })
  },
  bindChangeCity:function(ev){
    const cityIndex = ev.detail.value;
    this.setData({
      indexCity:cityIndex
    })
  },
  bindChangeCounty:function(ev){
    const countyIndex = ev.detail.value;
    this.setData({
      indexCounty:countyIndex
    })
  },
  formSubmit:function(ev){
    const detailAddress = ev.detail.value.inputDetail.trim();
    const receiverName = ev.detail.value.inputName.trim();
    const receiverMobile = ev.detail.value.inputMobile.trim();
    const currentProvinceCityCountyIndex = [this.data.indexProvince,this.data.indexCity,this.data.indexCounty];
    if(!(detailAddress && receiverName)){
      wx.showModal({
        title: '提示',
        content: '详细地址和收货人不能为空!'
      });
      return;
    }
    if (!receiverMobile.match(/^1[358]\d{9}$/)){
      wx.showModal({
        title: '提示信息',
        content: '手机号不合法!'
      });
      return;
   }
   
   
   //保存到数据缓存中
   wx.setStorageSync('detailAddress', detailAddress);
   wx.setStorageSync('receiverMobile', receiverMobile);
   wx.setStorageSync('receiverName', receiverName);
   wx.setStorageSync('currentProvinceCityCountyIndex', currentProvinceCityCountyIndex);
   wx.navigateBack();
 }
})

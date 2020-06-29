// pages/temp/temp.js
const app = getApp()
let api = require('../../config/api');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:app.globalData.height*2+100,
    active:1,
    value:'',
    items:[{text:'手机'},{text:'电脑'},{text:'平板'}],
    activeId:0,
    plist:[],
    list:[],
    serverPath:api.ApiRootUrl
  },
  onClickNav(e){
    let index=e.detail.index
    this.setData({
      list:this.data.plist.slice(index*2,index*2+2)
    })
  },
  onChange(e){
    switch (e.detail) {
      case 0:
        wx.navigateTo({
          url: '/pages/index/index',
        })
        break;
      case 1:
        wx.navigateTo({
          url: '/pages/category/category',
        })
        break;
      case 2:
        wx.navigateTo({
          url: '/pages/cart/cart',
        })
        break;
      case 3:
        wx.navigateTo({
          url: '/pages/mine/mine',
        })
        break;
      
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: api.GoodsList,
      success:(res)=>{
        let result=res.data.productlist
        result.forEach((item,index)=>{
          item.imgs=JSON.parse(item.imgs)
        })
        this.data.plist=result
        this.setData({
          list:result.slice(0,2)
        })
      }
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
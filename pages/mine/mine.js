// pages/mine/mine.js

const app = getApp()
let api = require('../../config/api');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    height:app.globalData.height*2+100,
    active:3,
    serverPath:api.ApiRootUrl,
    userInfo:{}
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
    this.setData({
      userInfo:app.globalData.userInfo
    })
  },
  login(e){
    if(e.detail.userInfo){
      this.setData({
        userInfo:e.detail.userInfo
      })
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
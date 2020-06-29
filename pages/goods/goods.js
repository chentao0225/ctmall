// pages/goods/goods.js

const app = getApp()
let api = require('../../config/api');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    height:app.globalData.height*2+100,
    active:0,
    serverPath:api.ApiRootUrl,
    imgs:[],
    goods:{},
    sku:{}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id=options.id?options.id:86
    // console.log(id)
    wx.request({
      url: api.Goods,
      data:{
        id
      },
      success:(res)=>{
        this.goods=res.data.goods
        // console.log(res.data.goods)
        this.imgs=typeof this.goods.imgs=='string'?JSON.parse(this.goods.imgs):[]
        this.sku=typeof this.goods.imgs=='string'?JSON.parse(this.goods.sku):{}
        this.goods.content=this.goods.content?this.goods.content.replace(/\<img/g,'<img style="width:100%;height:auto;display:block"'):""
        this.setData({
          goods:this.goods,
          imgs:this.imgs,
          sku:this.sku
        })
        // console.log(this.goods)
      }
    })
  },
  addCart(){
    let flag=false
    app.globalData.cartGoods.forEach((item)=>{
      if(item.id==this.goods.id){
        item.num=item.num+1
        flag=true
      }
    })
    if(!flag){
      this.goods.num=1
      app.globalData.cartGoods.push(this.goods)
    }
    wx.navigateTo({
      url: '/pages/cart/cart',
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
  goBack(){
    wx.navigateBack()
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
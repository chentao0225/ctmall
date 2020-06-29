//app.js
App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: (result) => {
        // console.log(result)
        this.globalData.height=result.statusBarHeight
      },
    })
    wx.getUserInfo({
      complete:(res)=>{
        // console.log(res)
        this.globalData.userInfo=res.userInfo
      }
    })
  },
  globalData: {
    userInfo: null,
    height:0,
    cartGoods:[]
  }
})
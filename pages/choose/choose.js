Page({

  data: {

  },
  danRenYouXi:function(){
    wx.navigateTo({
      url: '/pages/offLine_start/offLine_start',
    })
  },

  duoRenYouXi:function(){
    wx.navigateTo({
      url: '/pages/multi_prestart/multi_prestart',
    })
  },

  youXiGuiZe:function(){
    wx.navigateTo({
      url: '/pages/regular/regular',
    })
  },
  fanhui:function(){
    wx.navigateTo({
      url: '/pages/home/home',
    })
  },
  xiuxian:function(){
    wx.navigateTo({
      url: '/pages/xiuxian/xiuxian',
    })
  },
  yinyue:function(){
    wx.navigateTo({
      url: '/pages/voice/voice',
    })
  }
})

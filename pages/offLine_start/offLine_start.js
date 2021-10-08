
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  offlineProceed:function(){
     wx.navigateTo({
       url: '/pages/offLine_proceed/offLine_proceed',
     })
 },
 fanhui:function(){
  wx.navigateTo({
    url: '/pages/choose/choose',
  })
},
  
})
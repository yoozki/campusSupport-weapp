const app = new getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    const token = app.globalData.token
    //本地测试使用 ws协议 ,正式上线使用 wss 协议
    var url = 'ws://localhost:10000/message/deliver?orderId=2103101049015871';
    var socket = wx.connectSocket({
      url: url,
      method: "GET",
      header: {
        'Authorization': token
      },
      success: (res) => {
        console.log("建立连接成功" + res)
      }
    });
    socket.onOpen(() => {
      socket.send({
        data: "hello yoozki",
        success: (res) => {
          console.log("发送消息成功" + res)
        }
      })
    }),
    socket.onMessage(res => {
      console.log(res)
    })
  },

})
// pages/register/register.js
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
    value7: '',
    end: util.formatDate(new Date(Date.now())),
    date: '1990-09-01',
    gender:['男','女']
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

  },

  /**
   * 日期选择器
   */
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

  /**
   * 性别选择器
   */
  bindSexChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  
  /**
   * 注册功能
   */
  adminregister: function () {

  },

  bindRegister: function () {
    wx.request({
      url: 'http://localhost:8080/propertyManagement/register',
      data: {
        name: 'Eric',
        sex: 'm',
        idCard: '429006199808050031',
        birthDate: '1998-08-05',
        workDate: '2018-10-10',
        openid: 'qwer',
      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        if(res.data.status == 1){
          //注册成功跳转到首页
          wx.navigateTo({
            url: '../homePage/homePage',
          })
          console.log(res.data.mag);
        }
        else{
          console.log(res.data.msg);
        }

      },
      fail: function () {
        console.log('系统错误');
      }

    })
  },

})
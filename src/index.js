const util = require('./utils')

Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    mode: {
      type: String,
      value: 'default'
    },
    titleSize: {
      type: String,
      value: '17px'
    },
    title: {
      type: String,
      value: ''
    },
    showLeftBtn: {
      type: Boolean,
      value: true
    },
    leftBtnText: {
      type: String,
      value: ''
    },
    leftBtnWidth: {
      type: String,
      value: '30px'
    },
    backgroundColor: {
      type: String,
      value: '#fff'
    },
    fontColor: {
      type: String,
      value: '#000'
    },
    menuBtnBgColor: {
      type: String,
      value: '#fff'
    }
  },
  data: {
    statusBarHeight: 0,
    navBarHeight: 0,
    realLeftBtnWidth: 0,
    realTitleSize: 0,
    menuButtonInfo: {}
  },
  lifetimes: {
    attached() {
      const {navBarHeight, statusBarHeight} = util.getNavBarHeightAndStatusBarHeight()
      const menuButtonInfo = wx.getMenuButtonBoundingClientRect()
      this.setData({
        navBarHeight,
        statusBarHeight,
        menuButtonInfo
      })
    },
  },
  methods: {
    back() {
      this.triggerEvent('back')
    },
  }
})

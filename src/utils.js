const HEIGHT_OF_IOS_STATUS_BAR = 44
const HEIGHT_OF_ANDROID_STATUS_BAR = 48

const getNavBarHeightAndStatusBarHeight = () => {
  const obj = {
    statusBarHeight: 0,
    navBarHeight: 0
  }

  wx.getSystemInfo({
    success: ({statusBarHeight, system}) => {
      obj.statusBarHeight = statusBarHeight
      obj.navBarHeight = system.indexOf('iOS') > -1 ? HEIGHT_OF_IOS_STATUS_BAR : HEIGHT_OF_ANDROID_STATUS_BAR
    }
  })

  return obj
}

module.exports = {
  getNavBarHeightAndStatusBarHeight,
}

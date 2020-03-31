### 使用方法

1、安装npm包：

```
npm install --save custom-navbar
```

2、引入组件：

在页面的json文件加入如下配置：

```js
{
  "usingComponents": {
    "custom-navbar": "custom-navbar"
  },
  "navigationStyle": "custom"
}
```

3、在微信开发工具上构建npm，并且本地设置勾选 ```使用npm模块```，如图所示：

![构建npm演示](https://i.niupic.com/images/2020/03/31/7crs.jpeg)
![勾选使用npm模块演示](https://i.niupic.com/images/2020/03/31/7cru.jpeg)

4、简单示例测试

在wxml上加入：

```js
<custom-navbar title="首页"></custom-navbar>
```

效果如下：

![navbar简单示例](https://i.niupic.com/images/2020/03/31/7crv.png)

至此，组件接入完成。

注意：这里的导航栏是使用了fixed定位的，如果我们要保持原来的布局，可以设置页面容器的 ```padding-top```，比如有如下结构：

```js
<custom-navbar
  title="首页"
  bindback="back"
  showLeftBtn="{{true}}"
  backgroundColor="red"
  fontColor="#fff">
</custom-navbar>
<view class="container">
  // 子元素
</view>
```

我们可以计算出导航栏的高度，然后设置padding-top：

```js
// utils.js
const HEIGHT_OF_IOS_STATUS_BAR = 44
const HEIGHT_OF_ANDROID_STATUS_BAR = 48

const getNavBarHeightAndStatusBarHeight = () => {
  let obj = {
    statusBarHeight: 0,
    navBarHeight: 0
  }

  wx.getSystemInfo({
    success: ({statusBarHeight, system}) => {
      obj.statusBarHeight = statusBarHeight,
      obj.navBarHeight = system.indexOf('iOS') > -1
        ? HEIGHT_OF_IOS_STATUS_BAR 
        : HEIGHT_OF_ANDROID_STATUS_BAR
    }
  })

  return obj
}

// index.js
getNavBarHeightAndStatusBarHeight () {
  const { statusBarHeight, navBarHeight } = util.getNavBarHeightAndStatusBarHeight()
  this.setData({
    statusBarHeight,
    navBarHeight
  })
}
  
// index.wxml
<view class="container" style="padding-top:{{statusBarHeight + navBarHeight}}px"></view>
```

### 组件属性

属性名           | 类型        | 默认值   |  说明  
----------------|------------|---------|-------
mode            |string      |'default'|有三种模式：'default', 'menu-btn', 'custom'
title           |string      |         |标题
titleSize       |string      |'17px'   |标题大小，可自定义，带单位，rpx和px都可以
showLeftBtn     |boolean     |true     |是否显示左边按钮，即返回键
leftBtnText     |string      |         |左边按钮文本，即返回箭头右边文字
leftBtnWidth    |string      |'30px'   |左边按钮区域大小，可自定义点击区域大小
backgroundColor |string      |'#fff'   |导航栏背景颜色
fontColor       |string      |'#000    |字体颜色
bindback        |eventhandle |         |左边按钮点击事件


#### mode

**mode为 ```default``` 时，即常规的导航栏，返回键+标题，返回键可以隐藏，只显示标题。**

示例代码：

```js
<!--index.wxml-->
<custom-navbar title="首页" bindback="back" showLeftBtn="{{false}}"></custom-navbar>

//index.js
back() {
  console.log('back')
}
```

![](https://i.niupic.com/images/2020/03/31/7ct0.png)

注意，我们这里返回隐藏键的写法：```showLeftBtn="{{false}}"``` ，直接这样写是不行的：```showLeftBtn="false"```，因为这样会当作字符串处理。

设置字体颜色和背景颜色：

```js
<custom-navbar
  title="首页"
  bindback="back"
  showLeftBtn="{{true}}"
  backgroundColor="red"
  fontColor="#fff">
</custom-navbar>
```

![](https://i.niupic.com/images/2020/03/31/7ctA.png)

**mode为 ```menu-btn``` 时，左边显示为和右边一样的胶囊样式，可以自定义胶囊里面的图标以及事件。**

```html
<custom-navbar mode="menu-btn"></custom-navbar>
```

![](https://i.niupic.com/images/2020/03/31/7cBJ.png)

添加图标，这里可以添加两个图标：

```html
<custom-navbar mode="menu-btn">
  <icon type="clear" size="20" slot="menu-btn-left" />
  <icon type="search" size="20" slot="menu-btn-right" />
</custom-navbar>
```

![](https://i.niupic.com/images/2020/03/31/7cDe.png)

左右图标的设置只要设置 **slot** 属性就可以了，左边：```slot="menu-btn-left"```，右边：```slot="menu-btn-right" ```。可以自己添加事件。这里的元素自定义，图标和图片的尺寸推荐 **20px**。

**mode为 ```custom``` 时，左边的按钮可以自定义：**

```html
<custom-navbar mode="custom">
  <view style="font-size:32px">+</view>
</custom-navbar>
```

![](https://i.niupic.com/images/2020/03/31/7cE8.png)


### 此组件还不够完善，可能存在问题，欢迎大家提建议，帮助优化和改进！谢谢

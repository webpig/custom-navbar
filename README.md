### 使用方法

1、安装npm包：

```
npm install --save custom-navbar
```

2、引入组件：

在页面的json文件加入如下配置：

```
{
  "usingComponents": {
    "custom-navbar": "custom-navbar"
  },
  "navigationStyle": "custom"
}
```

3、在微信开发工具上构建npm，并且本地设置勾选 ```**使用npm模块**```，如图所示：

![构建npm演示](https://i.niupic.com/images/2020/03/31/7crs.jpeg)
![勾选使用npm模块演示](https://i.niupic.com/images/2020/03/31/7cru.jpeg)

4、简单示例测试

在wxml上加入：

```
<custom-navbar title="首页"></custom-navbar>
```

效果如下：

![navbar简单示例](https://i.niupic.com/images/2020/03/31/7crv.png)

至此，组件接入完成。

### 组件属性

|属性名           |类型         |默认值    |  说明  |
---               ---          ---       ---
|mode            |string      |'default'| 有三种模式：'default', 'menu-btn', 'custom'|
|title           |string      |         |标题|
|titleSize       |string      |'17px'   |标题大小，可自定义，带单位，rpx和px都可以|
|showLeftBtn     |boolean     |true     |是否显示左边按钮，即返回键|
|leftBtnText     |string      |         |左边按钮文本，即返回箭头右边文字|
|leftBtnWidth    |string      |'30px'   |左边按钮区域大小，可自定义点击区域大小|
|backgroundColor |string      |'#fff'   |导航栏背景颜色|
|fontColor       |string      |'#000    |字体颜色|
|bindback        |eventhandle |         |左边按钮点击事件|


+ 我的项目太多星了，每天被提交几十个 issues 心好累。想删除仓库了

+ 走星
  + star

+ 围攻八阿哥
  + 上传图片 + 文字


# 开发界面介绍

+ 流出来的文档
  + http://wxopen.notedown.cn/api/network-request.html
+ 流出来的框架
  + https://github.com/gavinkwoe/weapp-ide-crack
+ 好像有点刻意流出来。是不是刻意流出来呢。。。不重要。

+ AppData
+ Console
+ 预览区域
+ 应用导航
+ 断点设置+调试
+ chrome 开发者工具按 {} 可以自动格式化
+ 有 websocket 和 request 的迹象，但具体接口还没给出来






Find all native end points:

```
ack 'wx\.'
```

Only two directives. If and for-items


```
ack 'wx:'
```

# 原生接口

```
$ ack 'wx\.[^(]+' -o -h | sort | uniq
wx.chooseImage
wx.chooseVideo
wx.clearStorageSync
wx.createAnimation
wx.createContext
wx.drawCanvas
wx.getBackgroundAudioPlayerState
wx.getLocation
wx.getNetworkType
wx.getStorageSync
wx.getSystemInfo
wx.getUserInfo
wx.hideKeyboard
wx.hideNavigationBarLoading
wx.login
wx.navigateBack
wx.navigateTo
wx.onAccelerometerChange
wx.onBackgroundAudioStop
wx.onCompassChange
wx.openLocation
wx.pauseBackgroundAudio
wx.pauseVoice
wx.playBackgroundAudio
wx.playVoice
wx.previewImage
wx.redirectTo
wx.saveFile
wx.seekBackgroundAudio
wx.setNavigationBarTitle
wx.setStorageSync
wx.showNavigationBarLoading
wx.startRecord
wx.stopBackgroundAudio
wx.stopPullDownRefresh
wx.stopRecord
wx.stopVoice
```

有些方法在 demo 里面没有出现，必须去检查全局的 wx 对象才能看到。

```

```
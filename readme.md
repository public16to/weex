# WEEX
## 环境安装
1. 安装node  
https://nodejs.org/zh-cn/
2. java环境  
http://www.runoob.com/java/java-environment-setup.html
3. 安装git  
https://git-scm.com/downloads
4. 安装weex-toolkit  
npm install weex-toolkit -g
5. 安装weexpack  
npm install weexpack -g
6. 安装java和android-studio和sdk
http://www.android-studio.org/
https://blog.csdn.net/k491022087/article/details/72934862
7. 安装mac os虚拟机安装xcode
https://www.cnblogs.com/liming2017/p/7566953.html
https://developer.apple.com/download/more/
xcode8.3.2

## 打包
https://www.jianshu.com/p/674efb2468e4


## 组件和模块使用
### 使用weex-ui
https://github.com/alibaba/weex-ui
### 图标库
千牛图标库
http://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=4491

## 踩坑
Environment variable $ANDROID_HOME not found !
在环境变量中增加ANDROID_HOME,D:\Android\sdk
在path中增加%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\tools

You have not accepted the license agreements of the following SDK components:
[Android SDK Build-Tools 26].
找到sdkmanager.bat，执行sdkmanager.bat --update，然后输入y


pod update
https://blog.csdn.net/h386926074/article/details/79488545

unable to add a source with url 'https://github.com/CocoaPods/Specs.git' named master-1
https://blog.csdn.net/u010046748/article/details/52681192

Unable to download data from https://rubygems.org/
https://blog.csdn.net/huangshaotian/article/details/41378989

无法加载we文件
https://www.jianshu.com/p/7c2a6cc901c1，中的weex-loader

xcode-select: error: tool 'xcodebuild' requires Xcode
https://blog.csdn.net/joeblackzqq/article/details/38908317

scroller标签必须要有高度，不然没有办法滑动



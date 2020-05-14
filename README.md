# Build a miniprogram with Taro, Taro-UI and Mobx

Taro is a framework for **miniprogram**. Before we start with Taro, it is necessary to learn what is miniprogram. The miniprogram is a kind of application which is avaliable without downloading. Actually it is a special form of website, and basicly consisted of html, css and javascript. Usually miniprograms are attached to the application provided by a specific company. This means that the original syntx of miniprograms on different platforms is different but with common regulations. We can find it easily on the doc center of [alipay mini](https://opendocs.alipay.com/mini/introduce) and [weapp mini](https://developers.weixin.qq.com/miniprogram/dev/framework/). Developers need to rewrite a new set of code when launching the app on a different platform. This increase the cost of both developing and maintain. Therefore, we need to find a way to develop on multi-platform.

Fortunately，Taro gives a solution. It can build into different kind of miniprogram. What's more, Taro is **react-style**. Thus, it is easy to learn and much more friendly than the original syntx provided officially. Of course, there are certain drawbacks of Taro. As a price of crossing platforms, it mainly supports the common features of different miniprogram. Some unique features like _rich editor_ performs quite terriblely in Taro. So it's important for developers to consider the requires of their application before using this framwork.

## Quick Start

Taro is based on node.js, please ensure the version is higher than 8.0.0

Firstly, we need to use _npm_ or _yarn_ to install _@tarojs/cli_ globally.
```
# Use npm install CLI
$ npm install -g @tarojs/cli
# OR use yarn 
$ yarn global add @tarojs/cli
```
For developers in China, when errors associated with sass rise, please try after mirror-config-china installed
```
$ npm install -g mirror-config-china
```
Then init the project with 
```
$ taro init myApp
```
There are some options we need to notice

This is wrting the introduction
```
PS D:\Taro> taro init myApp
�👽 Taro v2.1.3

Taro 即将创建一个新项目!
Need help? Go and open issue: https://github.com/NervJS/taro/issues/new

√ 拉取远程模板仓库成功！
? 请输入项目介绍！
```

The next step is choosing whether using typescript. Even through typescript is more and more popular, in Taro 2.1, the team doesn't plan to rewrite the framework in typescript. Typescript is avaliable but not recommended.
```
PS D:\Taro> taro init myApp
�👽 Taro v2.1

Taro 即将创建一个新项目!
Need help? Go and open issue: https://github.com/NervJS/taro/issues/new

√ 拉取远程模板仓库成功！
? 请输入项目介绍！ myApp
? 是否需要使用 TypeScript ？ No
```

The third step is choosing CSS extension language. Taro-UI is a UI library provided by the same team of Taro, and it is written in sass. Thus, when we want to introduce Taro-UI into our project, we should use sass to make them compatible.  
```
PS D:\Taro> taro init myApp
�👽 Taro v2.1

Taro 即将创建一个新项目!
Need help? Go and open issue: https://github.com/NervJS/taro/issues/new

√ 拉取远程模板仓库成功！
? 请输入项目介绍！ myApp
? 是否需要使用 TypeScript ？ No
? 请选择 CSS 预处理器（Sass/Less/Stylus） (Use arrow keys)
> Sass 
  Less 
  Stylus
  无
```

# Build a miniprogram with Taro, Taro-UI and Mobx

Taro is a framework for **miniprogram**. Before we start with Taro, it is necessary to learn what is miniprogram. The miniprogram is a kind of application which is avaliable without downloading. Actually it is a special form of website, and basicly consisted of html, css and javascript. Usually miniprograms are attached to the application provided by a specific company. This means that the original syntx of miniprograms on different platforms is different but with common regulations. We can find it easily on the doc center of [alipay mini](https://opendocs.alipay.com/mini/introduce) and [weapp mini](https://developers.weixin.qq.com/miniprogram/dev/framework/). Developers need to rewrite a new set of code when launching the app on a different platform. This increase the cost of both developing and maintain. Therefore, we need to find a way to develop on multi-platform.

Fortunately，Taro gives a solution. It can build into different kind of miniprogram. What's more, Taro is **react-style**. Thus, it is easy to learn and much more friendly than the original syntx provided officially. Of course, there are certain drawbacks of Taro. As a price of crossing platforms, it mainly supports the common features of different miniprogram. Some unique features like _rich editor_ performs quite terriblely in Taro. So it's important for developers to consider the requires of their application before using this framwork.

##Quick Start

Taro is based on node.js, please ensure the version is higher than 8.0.0

Firstly, we need to use _npm_ or _yarn_ to install _@tarojs/cli_ globally.
```
# Use npm install CLI
$ npm install -g @tarojs/cli
# OR use yarn 
$ yarn global add @tarojs/cli
```
For developers in China, when errors associated with sass rise. please try after mirror-config-china installed
```
$ npm install -g mirror-config-china
```

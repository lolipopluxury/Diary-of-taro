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
After choosing sass, it gives us the options for data templates. Here we can use mobx. It's easy for new developers. If redux is introduced, we can use dva in our app to simiplify data flow.
```
PS D:\Taro> taro init myApp
�👽 Taro v2.1

Taro 即将创建一个新项目!
Need help? Go and open issue: https://github.com/NervJS/taro/issues/new

√ 拉取远程模板仓库成功！
? 请输入项目介绍！ myApp
? 是否需要使用 TypeScript ？ No
? 请选择 CSS 预处理器（Sass/Less/Stylus） Sass
? 请选择模板 
  默认模板   
> mobx       
  redux      
  wxcloud    
  wxplugin   
```
Wait for a few minitues to finalise the setting. **In rest part of the diary, we will build a miniprogram on wechat and hightlight the traps when using this framework**
```
PS D:\Taro> taro init myApp
�👽 Taro v2.1

Taro 即将创建一个新项目!
Need help? Go and open issue: https://github.com/NervJS/taro/issues/new

√ 拉取远程模板仓库成功！
? 请输入项目介绍！ myApp
? 是否需要使用 TypeScript ？ No
? 请选择 CSS 预处理器（Sass/Less/Stylus） Sass
? 请选择模板 mobx

✔ 创建项目: myApp
✔ 创建文件: myApp\.editorconfig
✔ 创建文件: myApp\.eslintrc    
✔ 创建文件: myApp\.gitignore   
✔ 创建文件: myApp\pkg
✔ 创建文件: myApp\project.config.json
✔ 创建文件: myApp\config\dev.js
✔ 创建文件: myApp\config\index.js
✔ 创建文件: myApp\config\prod.js
✔ 创建文件: myApp\src\app.scss
✔ 创建文件: myApp\src\app.jsx
✔ 创建文件: myApp\src\index.html
✔ 创建文件: myApp\src\store\counter.js
✔ 创建文件: myApp\src\pages\index\index.scss
✔ 创建文件: myApp\src\pages\index\index.jsx

√ cd myApp, 执行 git init
/ 执行安装项目依赖 yarn install, 需要一会儿...
```

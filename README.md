# 使用 Taro, Taro-UI 和 Mobx 构建微信小程序

 [Click here](https://github.com/lolipopluxury/Diary-of-taro/blob/master/README-EN.md) to get English version
 
 **本日记主要用来记载第一次使用Taro开发小程序时踩过的坑，欢迎各位道友交流学习，本人邮箱i104j588@163.com**
 **本文仅发布于GitHub，转载请注明出处**
 
在我的理解中，小程序是一种网页的特殊形态，由HTML，CSS 和 JavaScript 构成。但是不同的平台为其旗下的小程序构建了不同的语法，接近原生语言。缺点是显而易见的，若采用原生小程序，每个平台都需要对应的一套代码，且对不熟悉Vue的开发者不够友好。而使用Taro框架则在一定程度上为这些问题提供了答案。

Taro是一个遵循react语法的跨平台小程序框架，对于熟悉react的开发者容易上手。其中内置了mobx、redux等数据流方案，也可以自行配置使用dva处理数据。但是Taro的缺点也是明显的，作为跨平台的代价，Taro支持大部分平台共有的特性，但是在Taro中使用例如 _富文本编辑器_ 较为独特的功能时显得难以处理。Taro并不一定是小程序开发的最优解，在使用前应该考虑项目的需求，谨慎选择。

## 快速启动

Taro基于node.js,请保证node版本在8.0.0以上

首先使用 _npm_ 或者 _yarn_ 全局安装 _@tarojs/cli_ 。 虽然可以单独使用npm对taro进行管理，但是体验效果略逊一筹，使用哪种方式因人而异。
```
# Use npm install CLI
$ npm install -g @tarojs/cli
# OR use yarn 
$ yarn global add @tarojs/cli
```
国内用户出现sass相关报错时，可以安装mirror-config-china后重试
```
$ npm install -g mirror-config-china
```
使用以下命令初始化项目
```
$ taro init myApp
```
我们需要注意初始化时的选项

第一步，输入项目介绍。没啥好说的
```
PS D:\Taro> taro init myApp
�👽 Taro v2.1.3

Taro 即将创建一个新项目!
Need help? Go and open issue: https://github.com/NervJS/taro/issues/new

√ 拉取远程模板仓库成功！
? 请输入项目介绍！
```

第二步，选择是否使用typescript。目前Taro作者并没有打算使用ts重写框架，ts可以用但是没有必要。虽然ts越来越流行，但是对于初学者来说可能是自找麻烦。不建议使用ts。
```
PS D:\Taro> taro init myApp
�👽 Taro v2.1

Taro 即将创建一个新项目!
Need help? Go and open issue: https://github.com/NervJS/taro/issues/new

√ 拉取远程模板仓库成功！
? 请输入项目介绍！ myApp
? 是否需要使用 TypeScript ？ No
```

第三步，选择css预处理器。我知道有些童鞋觉得less比较高大上，但是在Taro中建议使用sass，特别是引入Taro-UI时。Taro-UI由sass编写，使用sass可以更好地兼容Taro-UI，以及Taro-UI提供的自定义主题。
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
最后是选择数据模板，本日记中选择mobx，简单好用。剩下的请各位自行研究。
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
等待几分钟令项目完成初始化。
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

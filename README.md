# todo_project

> A Vue.js project builed by vue-cli, bootstrap and coded by Webstorm.


## Build Setup

``` bash
# Installation vue-cli environment
1. Install node.js
2. Install cnpm 
Cmd: npm install -g cnpm --registry=http://registry.npm.taobao.org
--全局安装npm淘宝镜像

3. Install vue-cli
Cmd: cnpm install -g vue-cli
--全局安装vue脚手架

4. Project initialize
Cmd: cd your_project_path
Cmd: vue init webpack project_name
waiting and ask question arising, when asked yes or no, it's better to reply No

5. Install dependencies
Cmd: cnpm install

6. Verify vue-cli
Cmd: cnpm run dev
when completed and no error, open localhost:8080 in your browser. 
When the Vue welcoming interface appears, congratulation, vue-cli is successful installed

# install and use Bootstrap
1. Cmd: cd your_project_path

2. Bootstrap depend on jquery
Cmd: npm install jquery --save-dev

3. Configuration
*find build/webpack.base.conf.js and add webpack object*
file-Add-code：webpack=require('webpack');
*find module.exports in webpack.base.conf.js*
file-Add-code：
  plugins: [  
    new webpack.ProvidePlugin({  
      $:"jquery",  
      jQ uery:"jquery",  
    " windows.jQuery":"jquery"  
    })  
  ]  
  
4. Add alias
Replace
alias: {  
      'vue$': 'vue/dist/vue.esm.js',  
      '@': resolve('src'),   
    }  
To
alias: {  
      'vue$': 'vue/dist/vue.esm.js',  
      '@': resolve('src'),  
      'assets': path.resolve(__dirname, '../src/assets'),  
      'jquery': "jquery/src/jquery"  
    }  
    
5. import bootstrap<br/>
put the directory associated with bootstrap(folder: js,css,fonts) into src/assets
*find src/main.js*
file-add-code:
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'

6. After unremitting efforts, we finally completed the environment construction 

``` 
## serve with hot reload at localhost:8080
1. Cmd: cd your_project_path <br/>
2. Cmd: npm run dev<br/>
3. when completed and no error, open localhost:8080 in your browser. 
## use
```$xslt
你可以输入你的名字、年龄和留言，名字和留言不许为空
本地存储数据  Google Chrome 的开发者工具内的application-local storage 可以查看
留言items 可以一条一条删除 也可一次删除全部
点击留言即可查看详细留言

You can enter your name, age and message, name and message not allowed to be empty.
Store data locally.Application-local storage in Google Chrome's developer tools can be viewed
Message items can be deleted one by one or delete all at once
You can click the message to view the detailed message

```




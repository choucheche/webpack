require('./world.js');
//hello.js依赖代码 world.js

require('style-loader!css-loader!./style.css');
/*
hello.js依赖代码 style.css，
style-loader，代表让 css 代码可以识别
css-loader，代表让 webpack打包支持 css 文件类型
这里的 ！ 代表分隔符
需要先在 cmd 安装 npm install css-loader style-loader --save-dev
*/

function hello(str){
  alert(str);
}

hello('hello world!!!');

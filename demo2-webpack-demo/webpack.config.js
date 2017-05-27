var htmlWebpackPlugin = require('html-webpack-plugin');
//引用插件 html-webpack-plugin，引用的变量名为 htmlWebpackPlugin

module.exports ={
  entry:{
    main:'./src/script/main.js',
    a:'./src/script/a.js'
  },
  /*
    entry:['./src/script/main.js','./src/script/a.js'],
    多个路径地址时，我们打包的入口从哪个路径开始
  */
  /*
    entry:'./src/script/main.js',
    单个的路径地址，就这么写
  */
  output:{
  //打包以后的输出文件目录
    filename:'./dist/js/[name]-[chunkhash].js'
    /*
      打包以后的文件名，这里的 [name] 为 上面 entry:{} 里的对象名

      [chunkhash] 为 hash（哈希）值，用来解决缓存版本号用的
      以后每次修改 entry 里的文件时，相应的文件[chunkhash]的版本号都会改变
    */
  }
};

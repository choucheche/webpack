module.exports ={
  entry:'./src/script/main.js',
  //我们打包的入口从哪个路径开始
  output:{
  //打包以后
    path:'./dist/js/',
    //打包以后的输出文件目录
    filename:'bundle.js'
    //打包以后的文件名
  }
};

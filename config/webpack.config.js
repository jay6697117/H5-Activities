module.exports = {
  HTMLDirs: [
    "index",
    "doll",
    "egg",
    "wheel",
    "guaguale",
    "nineGrid",
    "scratch",
    "shake"
  ],
  dev: {
    host: '0.0.0.0',
    port: '8082',
    contentBase: "../dist",
  },
  prod: {
    // outputPublicPath: 'https://cdn.oaplusplus.com/lottery/', // 打包资源服务地址
    outputPublicPath: '/', // 打包资源服务地址
  },
  jsOutputPath: "static/js/",
  imgPublicPath: "/",
  imgOutputPath: "static/images/",
  cssPublicPath: "/",
  cssOutputPath:"static/styles/[name].css",
};

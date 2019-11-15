const HtmlWebpackPlugin = require("html-webpack-plugin");
const { SkeletonPlugin } = require("page-skeleton-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const merge = require("eslint");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "/copy_elm/",
  // webpack-dev-server 相关配置
  devServer: {
    // 设置代理
    hot: true, //热加载
    host: "0.0.0.0", //ip地址
    port: 8080, //端口
    https: false, //false关闭https，true为开启
    open: true, //自动打开浏览器
    proxy: {
      "/api": {
        //本地
        target: "http://localhost:3000",
        // 如果要代理 websockets
        ws: false,
        changeOrigin: true
      }
    }
  },
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  configureWebpack: {
    plugins: [
      new SkeletonPlugin({
        pathname: path.resolve(__dirname, `./shell`), // 用来存储 shell 文件的地址
        staticDir: path.resolve(__dirname, "./dist"), // 最好和 `output.path` 相同
        routes: ["/", "/search"] // 将需要生成骨架屏的路由添加到数组中
      })
    ]
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV !== "development") {
      // 不等于开发环境
      config.plugin("html").tap(opts => {
        // 代表 html-webpack-plugin 修改cli3打包压缩的时候会去除注释
        opts[0].minify.removeComments = false;
        return opts;
      });
      // config.resolve.alias.set("img", resolve("http://baidu.com"));
    }
  },
  pluginOptions: {
    // 第三方插件配置
  }
};

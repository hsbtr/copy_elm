module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      unitToConvert: "px",
      viewportWidth: 750,
      unitPrecision: 5, // 保留精度
      propList: ["*"],
      viewportUnit: "vw", // 视口单位
      fontViewportUnit: "vw", // 字体单位
      selectorBlackList: [], // 忽略选择器  组件调用忽略
      minPixelValue: 1, // 最小转换数值
      mediaQuery: false, // 媒体查询
      replace: true, // 备用属性值
      exclude: [], // 忽略文件
      landscape: false,
      landscapeUnit: "vw", // 横屏使用
      landscapeWidth: 568 // 横屏视口宽度
    },
    autoprefixer: {}
  }
};

const TerserPlugin = require('terser-webpack-plugin');

// 拼接路径
const resolve = dir => require('path').join(__dirname, dir);

// 基础路径 注意发布之前要先修改这里
let publicPath = '/';

module.exports = {
  publicPath, // 根据你的实际情况更改这里
  lintOnSave: process.env.NODE_ENV !== 'production',
  configureWebpack: config => {
    config.externals = { streamedian: 'window.Streamedian' };
  },
  // 默认设置: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config/base.js
  chainWebpack: config => {
    config.plugins.delete('prefetch').delete('preload');
    // 解决 cli3 热更新失效 https://github.com/vuejs/vue-cli/issues/1559
    config.resolve.symlinks(true);
    config
      // 开发环境
      .when(
        process.env.NODE_ENV === 'development',
        // sourcemap不包含列信息
        config => config.devtool('cheap-source-map')
      )
      // 非开发环境
      .when(process.env.NODE_ENV !== 'development', config => {
        config.optimization.minimizer([
          new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: true,
            terserOptions: {
              // compress: {
              //   drop_console: true,
              // },
            },
          }),
        ]);
      });
    // i18n
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
      .end();
    // node
    config.node.set('__dirname', true).set('__filename', true);
    // 判断环境加入模拟数据
    // const entry = config.entry('app')
    // if (process.env.VUE_APP_BUILD_MODE !== 'nomock') {
    //   entry
    //     .add('@/mock')
    //     .end()
    // }
  },
};

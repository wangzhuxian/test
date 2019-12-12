const ip = '10.111.32.74';

module.exports = {
  devServer: {
    publicPath: '/', // 和 publicPath 保持一致
    proxy: {
      '/authorize': {
        target: `http://${ip}:10219`,
      },
      '/uums': {
        target: `http://${ip}:10219`,
        changeOrigin: true,
      },
      '/skyline': {
        target: `http://${ip}:10219`,
        changeOrigin: true,
      },
      '/whale-push': {
        target: `http://${ip}:10221`,
        ws: true,
        changeOrigin: true,
      },
    },
  },
};

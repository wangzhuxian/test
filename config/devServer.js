module.exports = {
  devServer: {
    publicPath: '/', // 和 publicPath 保持一致
    proxy: {
      '/m_kugou': {
				target: 'http://m.kugou.com',
        // changeOrigin: true,
        // headers: {
        //   referer: 'http://m.kugou.com'
        // },
        // '/authorize': {
        //   target: `http://${ip}:10219`,
        // },
				pathRewrite: {
					'^/m_kugou': '',
				}
			},
			'/mobliecdn_kugou': {
				target: 'http://mobilecdn.kugou.com',
        changeOrigin: true,
        headers: {
          referer: 'http://m.kugou.com'
        },
				pathRewrite: {
					'^/mobliecdn_kugou': ''
				}
			}
    },
  },
};

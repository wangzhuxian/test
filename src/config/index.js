const ip = '10.111.32.74';

module.exports = {
  devServer: {
    publicPath: '/', // 和 publicPath 保持一致
    proxy: {
      '/m_kugou': {
				target: 'http://m.kugou.com',
        changeOrigin: true,
        headers: {
          referer: 'http://m.kugou.com'
        },
				pathRewrite: {
					'^/m_kugou': ''
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

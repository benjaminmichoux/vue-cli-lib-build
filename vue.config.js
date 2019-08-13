module.exports = {
	css: {
		extract: false
	},
	lintOnSave: true,
	productionSourceMap: false,
	configureWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
			config.entry = './src/components/index.js';
		} else {
		}
	}
};

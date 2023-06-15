const path = require('path')

module.exports = {
    transpileDependencies: ['vuetify'],
	configureWebpack: {
		resolve: {
			alias: {
				"@themeConfig": path.resolve(__dirname, "themeConfig.js"),
				"@variables": path.resolve(__dirname, "src/styles/variables.scss"),
			},
		},
	},
	chainWebpack: (config) => {
		const modules = ["vue-modules", "vue", "normal-modules", "normal"]
	},
}

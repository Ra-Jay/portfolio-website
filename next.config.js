// next.config.js
module.exports = {
	webpack: (config, { isServer }) => {
		config.module.rules.push({
			test: /\.(gltf|glb)$/i,
			use: [
				{
					loader: 'file-loader',
					options: {
						limit: 8192, // You can adjust the limit if needed
						publicPath: '/_next/static/images', // Adjust the path as needed
						outputPath: 'static/images', // Adjust the path as needed
						name: '[name].[hash].[ext]',
						esModule: false,
					},
				},
			],
		})

		if (!isServer) {
			config.resolve.fallback = { fs: false }
		}

		return config
	},
}

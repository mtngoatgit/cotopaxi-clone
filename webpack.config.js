module.exports = {
	entry: {
		main: "./src/app/App.js"
	},
	output: {
		filename: "bundle.js",
		path: "./public"
	},
	devtool: "sourcemap",
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
        query: {
          presets: ['es2015', 'react', 'stage-0']
          }
			},
			{
				test: /\.scss$/,
        loaders: ["style", "css", "sass"],
        exclude: /node_modules/
			},
			{
				test: /\.png$/,
				loader: "url-loader?limit=100000",
				exclude: /node_modules/
			},
			{
				test: /\.jpg$/,
				loader: "file-loader",
				exclude: /node_modules/
			}
		]
	}
}

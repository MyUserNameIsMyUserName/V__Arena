const path = require("path")
const V_DEV = require("./.Vfg");

const config = {
  production: {
    mode: "production",
		target: ["web"],
    entry: {
			v_app: "./app_src/v_app.js"
		},
    output: {
      path: path.resolve(__dirname, "PUBLIC"),
      filename: "[name].v_pack.js",
      clean: true,
    },
		module: {
			rules: [
				{
					test: /\.css$/i,
					use: ["style-loader", "css-loader"],
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/i,
					type: "asset/resource",
				},
			],
		},
  },
  development: {
    mode: "development",
		target: ["web"],
    entry: {
			v_app: "./app_src/v_app.js"
		},
    output: {
      path: path.resolve(__dirname, "PUBLIC"),
      filename: "[name].v_pack.js",
    },
		module: {
			rules: [
				{
					test: /\.css$/i,
					use: ["style-loader", "css-loader"],
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/i,
					type: "asset/resource",
				},
			],
		},
  },
  none: {
    mode: "none",
		target: ["web"],
    entry: {
			v_app: "./app_src/v_app.js"
		},
    output: {
      path: path.resolve(__dirname, "PUBLIC"),
      filename: "[name].v_pack.js",
      clean: true,
    },
		module: {
			rules: [
				{
					test: /\.css$/i,
					use: ["style-loader", "css-loader"],
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/i,
					type: "asset/resource",
				},
			],
		},
  },
};


if (V_DEV){
  module.exports = config.development
} else {
  module.exports = config.production
}

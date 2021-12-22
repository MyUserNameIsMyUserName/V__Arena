const path = require("path");
const V_DEV = require("./.Vfg");

const config = {
	production: {
		mode: "production",
		target: ["web"],
		entry: {
			Vapp: "./SRC.app/scripts/app.js"
		},
		output: {
			path: path.resolve(__dirname, "PUBLIC"),
			filename: "[name].v_pack.js",   // haha... V_PACK -> VACK :D 
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
			Vapp: "./SRC.app/scripts/app.js"
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
};


if (V_DEV) {
	module.exports = config.development;
} else {
	module.exports = config.production;
}

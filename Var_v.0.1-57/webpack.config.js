const path = require("path")
require("dotenv").config()

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

if (typeof process.env.NODE_ENV !== "undefined") {
  console.info("FOUND process.env.NODE_ENV === " + process.env.NODE_ENV);
  if (process.env.NODE_ENV === "production") {
    module.exports = config.production
  } else if (process.env.NODE_ENV === "development") {
    module.exports = config.development
  } else if (process.env.NODE_ENV === "none") {
    module.exports = config.none;
  } else {
    module.exports = config.production
  }
} else {
  // module.exports = require("./cjs/react.development.js");
  console.warn("process.env.NODE_ENV === UNDEFINED || WILL SET TO PRODUCTION");
  module.exports = config.production
}
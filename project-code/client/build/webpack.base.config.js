const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();

process.env.NODE_ENV = 'development';

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, '../', 'src', 'index.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../', 'public'),
	},
	resolve: {
		extensions: ['.json', '.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
			{
				test: /\.(s*)css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
				  	"sass-loader",
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
				  {
					loader: 'file-loader',
				  },
				],
			}
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ 
			template: path.resolve(__dirname, '../', 'view', "index.html")
		}
		),
		new MiniCssExtractPlugin({
			filename: '[name].styles.css',
		}),
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(process.env)
		 })
	],
	performance : {
		hints : false
	},
	devServer: {
		static: {
		  directory: path.resolve(__dirname, '../', 'public'),
		},
		compress: true,
		port: 9000,
		open: true,
		historyApiFallback: true,
	}
};

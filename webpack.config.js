const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

const webpackMode = process.env.NODE_ENV || 'development';

module.exports = {
	mode: webpackMode,
	entry: {
		main: './src/main.js',
        //자바스크립트 모듈 빌드 시 시작점 
	},
	output: {
		path: path.resolve('./dist'),
		// filename: '[name].min.js'
        filename: '[name].js'
	},
	// es5로 빌드 해야 할 경우 주석 제거
	// 단, 이거 설정하면 webpack-dev-server 3번대 버전에서 live reloading 동작 안함
	target: ['web', 'es5'],
	devServer: {
        //src code 변경 시 자동 새로고침
        liveReload: true
	},
	optimization: {
        //하단 code minify 설정
		minimizer: webpackMode === 'production' ? [
			new TerserPlugin({
				terserOptions: {
					compress: {
						drop_console: true
                        // console.log 없애는 code 
					}
				}
			})
		] : [], 
		// 중복 code 제거
		splitChunks: {
			chunks: 'all'
		}
		
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				enforce: 'pre',
				use: ['source-map-loader'],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
            //따로 분리하여 번들한 css파일과 js파일을 각각 
            //html 파일에 link태그, script 태그로 자동으로 추가 
			template: './src/index.html',
			minify: process.env.NODE_ENV === 'production' ? {
				collapseWhitespace: true,
				removeComments: true,
			} : false
		}),
		new CleanWebpackPlugin(),
        // 새롭게 빌드 되어 파일교체시 이전 빌드 결과물이 있을 수 있는 경우 제거


		// CopyWebpackPlugin: 그대로 복사할 파일들을 설정하는 플러그인
		// 아래 patterns에 설정한 파일/폴더는 빌드 시 dist 폴더에 자동으로 생성됩니다.
		// patterns에 설정한 경로에 해당 파일이 없으면 에러가 발생합니다.
		// 사용하는 파일이나 폴더 이름이 다르다면 변경해주세요.
		// 그대로 사용할 파일들이 없다면 CopyWebpackPlugin을 통째로 주석 처리 해주세요.
		new CopyWebpackPlugin({
			patterns: [
                // 복제시킬 파일 설정
				{ from: "./src/main.css", to: "./main.css" },
				{ from: "./src/images.jpg", to: "./images.jpg" },
			],
		})
	]
};
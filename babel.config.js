//babel 설정 
module.exports = {
	presets: [
		['@babel/preset-env', {
			targets: {
				chrome: '58',
				ie: '11',
			},
			useBuiltIns: 'usage',
            //polyfill 사용 여부 
			corejs: {
				version: 3,
                //polyfill 사용시 corejs ver3 사용
			}
		}]
	]
};
### 공식문서 https://webpack.js.org/  

##### 설정: webpack bundle 진행시 babel-loader를 이용하여 code tranfile과 bundle 동시 진행  
##### 빌드시 ./src/sub.js es6 code -> es5 환경에서 구현되도록 변환  

##### 진행 순서
1. npm run build를 통해 src/ 하위 파일 빌드 
2. webapck.config.js, babel.config.js 에 설정된 option ( ex - entry point, target browser, output directroy.. ) 따라 
빌드 결과물 생성
3. ./dist 에 build된 결과물 생성 완료 
4. npm run start 후 http://localhost:8080를 통해 화면 확인 ( ES6 문법 IE11 에서 구현 완료 )
 

#####공식문서 https://webpack.js.org/
#####참고1 : https://joshua1988.github.io/webpack-guide/concepts/plugin.html#plugin
#####참고2 : https://www.youtube.com/watch?v=pzHMT9Jxce0
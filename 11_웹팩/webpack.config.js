var path = require('path')
var webpack = require('webpack')
//파일 경로와 웹팩 라이브러리 로딩
//output 속성에서 사용할 노드 path라이브러리 & 웹팩 플러그인에서 사용할 node_modules 웹팩 라이브러리를 node_modules 폴더에서 로딩하여 path, webpack에 각각 저장

module.exports = {
  entry: './src/main.js',
  //entry 속성
  //웹팩으로 빌드할 파일을 main.js 파일로 지정


  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  //output 속성
  //웹팩으로 빌드를 하고 난 결과물 파일의 위치와 이름을 지정


  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
        //css -> js, index.html에 <style>태그로 삽입
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      //vue 파일의 <template><script><style>드으이 내용이 js로 변환
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      //자바스크립트 파일의 ES6 문법을 모든 브라우저에서 호환 가능한 자바스크립트로 변환
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
        //이미지 파일 -> js파일
      }
    ]
  },
  //module 속성
  //웹팩으로 애플리케이션 파일들을 빌드(변환)할 때 html,css,png 등의 파일을 자바스크립트로 변환해 주는 로더를 지정



  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'//최신 웹팩 버전과 사용할 수 있는 Full 버전의 라이브러리(별도 설정X -> vue.runtime.esm.js)
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  //resolve 속성
  //웹팩으로 빌드할 때 뷰 라이브러리의 여러 유형 중 어떤 걸 선택할지 지정함



  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  //devServer 속성
  //웹팩 dev Server 관련 속성 지정



  performance: {
    hints: false//false이므로 크기와 관계 없이 경고 표시X
  },
  //Performance 속성
  //웹팩으로 빌드한 파일의 크기가 250kb 넘으면 경고 메시지 표시 여부
  
  
  devtool: '#eval-source-map'
  //devtool 속성
  //웹팩으로 빌드된 파일로 웹 앱을 구동했을 때 개발자 도구에서 사용할 디버깅 방식 지정
}




if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'//개발자 도구 분석 옵션
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
//배포할 때 옵션
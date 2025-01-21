// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        // Match js, jsx, ts & tsx files
        test: /\.[jt]sx?$/, // 해당 확장자로 끝나면 babel-loader가 처리
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true, // rebuild 시, 캐시에서 읽어서 바벨의 리트랜스파일링을 방지
          },
        },
      },
    ],
  },
  mode: "none", // none, production, development
  entry: "./src/index.tsx", // 번들링 시작점 파일
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html", // 번들링한 css, js 파일이 src/public에 있는 index.html 파일에 link태그, scripts태그로 추가됨
    }),
  ],
  devServer: {
    host: "localhost",
    port: 3000,
    static: path.resolve(__dirname, "dist"),
    historyApiFallback: true, // 404페이지 대신 index.html로 이동
    hot: true, // 모듈 전체를 다시 로드하지 않고 변경사항만 갱신
  },
  resolve: {
    // import 시 확장자 생략 가능, 번들링할 파일 설정
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};

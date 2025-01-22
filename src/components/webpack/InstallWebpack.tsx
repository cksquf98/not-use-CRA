import newStyled from "@emotion/styled";
import ReactMarkdown from "react-markdown";

const code1 = `
yarn add -D webpack webpack-cli webpack-dev-server

yarn add -D html-webpack-plugin
`;

const code2 = `
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
`;

const InstallWebpack = () => {
  return (
    <Container>
      <Title>Webpack 설치</Title>
      <p>
        초반에는 Parcel을 써볼까 고민했지만 !! 나는 바벨+웹팩 정석 루틴대로 간닷
      </p>
      <Box>
        <ReactMarkdown>{code1}</ReactMarkdown>
      </Box>
      <ul>
        <li>webpack : 번들 작업을 하는 webpack 패키지 </li>
        <li>webpack-cli : 웹팩 터미널 도구</li>
        <li>webpack-dev-server : 빠른 실시간 리로드 기능을 갖춘 개발 서버</li>
        <li>
          html-webpack-plugin : webpack 번들을 제공하는 HTML 파일 생성을
          단순화해줌
        </li>
      </ul>

      <br />
      <strong>webpack.config.js파일 작성</strong>
      <ul>
        <li>
          export : webpack.config.js 파일을 어디에선가 require() 메소드로 끌어다
          쓰기 때문에, module.exports 로 설정들을 내보내줍니다.
        </li>
        <li>entry : 번들링 시작점 파일을 명시</li>
        <li>output : 하나의 파일로 번들링한 결과물을 설정하는 단계</li>
      </ul>
      <Box>
        <Pre>{code2}</Pre>
      </Box>
    </Container>
  );
};

export default InstallWebpack;

const Container = newStyled.div`
  padding: 2rem;
`;

const Title = newStyled.h2``;

const Box = newStyled.div`
  color: rgba(55, 53, 47, 0.65);
  background-color: rgba(247, 246, 243);
  font-size: 16px;
  padding: 1rem;
  white-space: pre-wrap; /* 줄바꿈 허용 */
`;

const Pre = newStyled.pre`
  white-space: pre-wrap;
  background-color: #f4f4f4;
  padding: 1rem;
  border-radius: 5px;
  overflow-x: auto;
`;

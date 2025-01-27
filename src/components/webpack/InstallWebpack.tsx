import newStyled from "@emotion/styled";
import ReactMarkdown from "react-markdown";
import { INSTALL_CODE_1, INSTALL_CODE_2 } from "./markdown";

const InstallWebpack = () => {
  return (
    <Container>
      <Title>Webpack 설치</Title>
      <p>
        초반에는 Parcel을 써볼까 고민했지만 !! 나는 바벨+웹팩 정석 루틴대로 간닷
      </p>
      <Box>
        <ReactMarkdown>{INSTALL_CODE_1}</ReactMarkdown>
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
        <Pre>{INSTALL_CODE_2}</Pre>
      </Box>
      <br />
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

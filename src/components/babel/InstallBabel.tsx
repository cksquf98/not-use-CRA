import newStyled from "@emotion/styled";
import ReactMarkdown from "react-markdown";
import {
  CONFIG_JS,
  INSTALL_CODE_1,
  INSTALL_CODE_2,
  INTRO_TEXT,
} from "./markdown";
import { Box } from "../common/Box";
import { Title } from "../common/Title";
import { Container } from "../common/Container";

export const InstallBabel = () => {
  return (
    <Container>
      <Title>Babel 설치</Title>
      <img
        src="https://blog.kakaocdn.net/dn/rDmaH/btrBSOi63cu/wCyoOG3nTpX1i9ogwyiOTK/img.jpg"
        width={750}
        height={500}
        alt="image.png"
      />
      <ReactMarkdown>{INTRO_TEXT}</ReactMarkdown>

      <Box>
        <ReactMarkdown>{INSTALL_CODE_1}</ReactMarkdown>
      </Box>
      <ul>
        <li> @babel/core : 코드 변환 작업을 실제로 처리 및 변환하는 역할</li>
        <li>
          @babel/preset-env : 대상 환경(브라우저, Node.js 버전 등)에 따라 필요한
          플러그인을 자동으로 결정해줌
        </li>
        <li>
          @babel/preset-react : 리액트의 JSX코드를 createElement 함수를 이용한
          코드로 변환해줍니다.
        </li>
        <li>
          @babel/preset-typescript: 타입스크립트를 자바스크립트로 컴파일 해주는
          프리셋
        </li>
        <li>babel-loader: 웹팩에서 babel을 loader로 사용할 수 있도록 해줌</li>
      </ul>
      <br />
      <ReactMarkdown>{CONFIG_JS}</ReactMarkdown>
      <Box>
        <ReactMarkdown>{INSTALL_CODE_2}</ReactMarkdown>
      </Box>
    </Container>
  );
};
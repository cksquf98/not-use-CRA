import { Box, Container, Pre, Title } from "../common";
import ReactMarkdown from "react-markdown";
import { INSTALL_WEBPACK_PLUGIN } from "./markdown";

export const PluginAndEmotion = () => {
  return (
    <Container>
      <Title>ForkTsCheckerWebpackPlugin, 이모션 설치</Title>
      <p>
        추가적으로 타입 체크를 위한 <strong>ForkTsCheckerWebpackPlugin</strong>,
        emotion을 설치해주었습니다!
      </p>
      <Box>
        <ReactMarkdown>{INSTALL_WEBPACK_PLUGIN}</ReactMarkdown>
      </Box>
      <pre>
        +++ 그리고 노션 바로 옮기고 싶어서 ReactMarkdown을 깔아봤는데 흠.. 딱히
        편한 점은 없다~! 나는 스타일도 적용하고 싶어가지고 별 이득이 없었던.{" "}
        <br />
        마크다운 코드용 상수 파일을 따로 폴더에 넣어놔야겠다!
      </pre>
    </Container>
  );
};
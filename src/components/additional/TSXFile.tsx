import { Box, Container, Title } from "../common";
import ReactMarkdown from "react-markdown";
import { FILE_APP, FILE_INDEX, FILE_INDEX_HTML } from "./markdown";

export const TSXFile = () => {
  return (
    <Container>
      <Title>index.tsx / App.tsx 추가</Title>
      <p>src 디렉토리를 만들고 파일 및 폴더들을 추가해주자!</p>
      <Box>
        <ReactMarkdown>{FILE_INDEX}</ReactMarkdown>
      </Box>
      <Box>
        <ReactMarkdown>{FILE_APP}</ReactMarkdown>
      </Box>
      <br />
      <p>public 폴더를 만들고 하위에 index.html 파일 추가해주기!</p>
      <Box>
        <ReactMarkdown>{FILE_INDEX_HTML}</ReactMarkdown>
      </Box>
    </Container>
  );
};

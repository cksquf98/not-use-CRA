import ReactMarkdown from "react-markdown";
import { PACKAGE_JSON_SCRIPT } from "./markdown";
import { Box, Container, Title } from "../common";

export const PackageJsonScript = () => {
  return (
    <Container>
      <Title>package.json에 script 추가</Title>
      <Box>
        <ReactMarkdown>{PACKAGE_JSON_SCRIPT}</ReactMarkdown>
      </Box>
    </Container>
  );
};

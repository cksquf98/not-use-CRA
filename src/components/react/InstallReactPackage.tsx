import { Box, Container, Title } from "../common";

const InstallReactPackage = () => {
  return (
    <Container>
      <Title>리액트 패키지 및 타입스크립트 설치</Title>
      <Box>
        yarn add react react-dom <br />
        yarn add -D @types/react @types/react-dom <br />
        yarn add -D typescript
      </Box>
    </Container>
  );
};

export default InstallReactPackage;

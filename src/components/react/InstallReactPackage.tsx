import styled from "@emotion/styled";

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

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h3``;

const Box = styled.div`
  color: rgba(55, 53, 47, 0.65);
  background-color: rgba(247, 246, 243);
  font-size: 16px;
  padding: 1rem;
`;

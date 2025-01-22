import styled from "@emotion/styled";
import InstallReactPackage from "./components/react/InstallReactPackage";
import RotatingHeart from "./public/asset/RotatingHeart";
import InstallYarnBerry from "./components/yarnBerry/InstallYarnBerry";
import InstallBabel from "./components/babel/InstallBabel";
import InstallWebpack from "./components/webpack/InstallWebpack";

const App = () => {
  return (
    <>
      <Flex>
        <RotatingHeart />
        <Title>
          CRA 없이 프로젝트 세팅하기!
          <br />
        </Title>
      </Flex>
      <InstallReactPackage />
      <InstallYarnBerry />
      <InstallBabel />
      <InstallWebpack />
    </>
  );
};

export default App;

const Title = styled.h1`
  /* color: rgb(0, 255, 255); */
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.1rem;
  padding: 1rem;
  /* background-color: black; */
`;

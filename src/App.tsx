import styled from "@emotion/styled";
import RotatingHeart from "../public/asset/RotatingHeart";
import {
  PackageJsonScript,
  PluginAndEmotion,
  TSXFile,
} from "./components/additional";
import { InstallBabel } from "./components/babel";
import InstallReactPackage from "./components/react/InstallReactPackage";
import { InstallYarnBerry } from "./components/yarnBerry";
import InstallWebpack from "./components/webpack/InstallWebpack";
import { DeployVercel } from "./components/vercel";

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
      <PackageJsonScript />
      <TSXFile />
      <PluginAndEmotion />
      <DeployVercel />
    </>
  );
};

export default App;

const Title = styled.h1``;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.1rem;
  padding: 1rem;
  /* background-color: black; */
`;

import styled from "@emotion/styled";
import { Container, Pre, Title } from "../common";

export const DeployVercel = () => {
  return (
    <Container>
      <Title>배포</Title>
      <p>배포 도구는 버셀을 이용했다!</p>
      <Pre>
        # preset <br />
        Build Command: yarn build <br />
        Output Directory: dist
      </Pre>
      <p>
        그리고 추가적으로 알게된건 vite 프로젝트는 따로 vercel.json 파일을
        만들어야 한다는 것!
      </p>
      <p>이 때 알게된 정보로 무사히 포폴 사이트용 vite 플젝 배포를 했어욧</p>
    </Container>
  );
};
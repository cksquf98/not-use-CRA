import newStyled from "@emotion/styled";

const InstallYarnBerry = () => {
  return (
    <Container>
      <Title>패키지매니저 - yarn berry</Title>
      <p>왜 yarn berry를 선택했냐!</p>
      <ul>
        <li>npm의 유령의존성</li>
      </ul>
      <p>
        <img
          src="https://lovemewithoutall.github.io/assets/images/2021-12-03-node-module-phantom-dependency.png"
          alt="B(2.0)을 가져다 쓰는 D 모듈때문에 내 패키지에서 B(2.0)을 설치하지 않았음에도 쓸 수 있다는게 유령 의존성"
        />
      </p>
      <p>
        B(2.0)을 가져다 쓰는 D 모듈때문에 내 패키지에서 B(2.0)을 설치하지
        않았음에도 쓸 수 있다는게 유령 의존성
      </p>
      <p>
        <strong>이를 해결할 수 있는 얀베리의 등장!</strong>
      </p>
      <ul>
        <li>
          Yarn berry는 호이스팅, 병합을 하지 않고 node_modules도 사용하지 않는다
        </li>
        <li>
          <code>./yarn</code> 폴더 하위에 의존성을 zip 형식으로 저장
        </li>
      </ul>
      <p>
        <strong>Zero-install이란?</strong>
      </p>
      <ul>
        <li>
          <code>./yarn</code> 의존성 폴더 자체를 커밋에 포함시켜서 git에
          올려둠으로써 따로 설치를 다시할 필요 없이 같은 환경에서 실행되는 것을
          보장해준다!! 짱짱
        </li>
      </ul>
      <p>
        VSCode Extension <strong>ZipFS</strong>가 설치되어있어야 함
      </p>
      <ul>
        <li>
          <p>
            <code>zip</code>파일로 설치된 종속성을 읽기 위함
          </p>
        </li>
        <li>
          <p>yarn berry 설치</p>
        </li>
        <Box>
          // 전역에 yarn이 이미 깔린 상태라서 바로 얀베리를 깔러 갑니닷 <br />
          // 1. 프로젝트 루트에서 실행 <br />
          yarn set version berry <br />
          <br />
          // 2. 패키지 다운로드 <br />
          yarn install <br />
          <br />
          // 3. typescript plugin 설치 <br />
          yarn add @yarnpkg/plugin-typescript <br />
          <br />
          // 4. Editor SDK 설정
          <br />
          yarn dlx @yarnpkg/sdks vscode
        </Box>
        <ul>
          <li>
            <p>yarn set version berry 명령어 실행 시 나타난 요상한 메세지</p>
            <p>
              <img
                src="https://velog.velcdn.com/images/tlawlswn28/post/12afc57c-d43c-40fd-b271-00c7b286049d/image.png"
                alt="image.png"
              />
            </p>
            <p> 해결법</p>
            chanbyeol ☁️ not-use-CRA [main] ⚡ corepack enable chanbyeol ☁️
            not-use-CRA [main] ⚡ corepack prepare yarn@3.2.2 --activate
          </li>
          <li>
            <p>typescript plugin의 역할은?</p>
            <ul>
              <li>
                기본 TypeScript는 node_modules를 사용해 타입 선언 파일(.d.ts)을
                탐색하므로, PnP 환경과 충돌할 수 있는데, TypeScript Plugin은 PnP
                환경에서 <strong>타입 선언 파일</strong>을 올바르게 탐색하고,
                TypeScript 컴파일러와의 호환성을 제공해줌
              </li>
            </ul>
          </li>
          <li>
            Editor SDK의 역할은?
            <ul>
              <li>
                자동 완성, 코드 탐색(예: 정의로 이동), 타입 확인 등을 사용할 수
                있도록 해줌
              </li>
            </ul>
          </li>
        </ul>
        <li>
          <p>Zero-install 설정</p>
        </li>
      </ul>
      <Box>
        // .gitignore <br />
        <br />
        .yarn/* <br />
        !.yarn/cache <br />
        !.yarn/patches <br />
        !.yarn/plugins <br />
        !.yarn/releases <br />
        !.yarn/sdks <br />
        !.yarn/versions
      </Box>
    </Container>
  );
};

export default InstallYarnBerry;

const Container = newStyled.div`
  padding: 2rem;
`;

const Title = newStyled.h3``;

const Box = newStyled.div`
  color: rgba(55, 53, 47, 0.65);
  background-color: rgba(247, 246, 243);
  font-size: 16px;
  padding: 1rem;
`;

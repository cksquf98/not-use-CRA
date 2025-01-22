import newStyled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';

const markdownText = `
바벨이 IE때문에 구버전 JS로 변환하려고 설치하는건데 IE는 지원종료된지 꽤나 되었기 때문에,,

글고 typescript가 트랜스파일러 역할을 또 해주니까 굳이 바벨을 설치할 필요성은 없었지만,,,,,

그래도! IE 점유율이 없는건 아니니까 설치해보았습니닷`;

const code1 = `yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader`;
const code2 = `
// babel.config.js

module.exports = {
presets: [
  ['@babel/preset-react', { runtime: 'automatic' }],
  '@babel/preset-env',
  '@babel/preset-typescript',
],
};`;

const markdownFileText = `
**루트에 \`babel.config.js\` 작성**

import React from 'react’를 작성할 필요가 없어졌는데 요거는 바벨이 자동으로 추가를 안해줘서 따로 설정을 해야한다고 합니다요

또 runtime을 automatic으로 하면 jsx가 호출되고, classic으로 하면 React.createElement가 호출된다고 합니닷
`;

const InstallBabel = () => {
  return (
    <Container>
      <Title>Babel 설치</Title>
      <img
        src="https://blog.kakaocdn.net/dn/rDmaH/btrBSOi63cu/wCyoOG3nTpX1i9ogwyiOTK/img.jpg"
        width={750}
        height={500}
        alt="image.png"
      />
      <ReactMarkdown>{markdownText}</ReactMarkdown>

      <Box>
        <ReactMarkdown>{code1}</ReactMarkdown>
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
      <ReactMarkdown>{markdownFileText}</ReactMarkdown>
      <Box>
        <ReactMarkdown>{code2}</ReactMarkdown>
      </Box>
    </Container>
  );
};
const Container = newStyled.div`
  padding: 2rem;
`;

export default InstallBabel;

const Title = newStyled.h2``;

const Box = newStyled.div`
  color: rgba(55, 53, 47, 0.65);
  background-color: rgba(247, 246, 243);
  font-size: 16px;
  padding: 1rem;
`;

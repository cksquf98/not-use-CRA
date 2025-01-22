# not-use-CRA
CRA를 사용하지 않고 리액트 프로젝트를 만들어보았습니닷


### 리액트 패키지 및 타입스크립트 설치

```jsx
yarn add react react-dom
yarn add -D @types/react @types/react-dom
yarn add -D typescript
```

<br />

### 패키지매니저 - yarn berry

왜 yarn berry를 선택했냐!

- npm의 유령의존성
<img width="731" alt="image" src="https://github.com/user-attachments/assets/18b6d420-9619-485f-a8dc-216a7ceaecec" />


**이를 해결할 수 있는 얀베리의 등장!**

- Yarn berry는 호이스팅, 병합을 하지 않고 node_modules도 사용하지 않는다
- `./yarn` 폴더 하위에 의존성을 zip 형식으로 저장

**Zero-install이란?**

- `./yarn` 의존성 폴더 자체를 커밋에 포함시켜서 git에 올려둠으로써 따로 설치를 다시할 필요 없이 같은 환경에서 실행되는 것을 보장해준다!! 짱짱

VSCode Extension **ZipFS**가 설치되어있어야 함

- `zip`파일로 설치된 종속성을 읽기 위함

1. yarn berry 설치
    
    ```jsx
    // 전역에 yarn이 이미 깔린 상태라서 바로 얀베리를 깔러 갑니닷
    // 1. 프로젝트 루트에서 실행
    yarn set version berry
    
    // 2. 패키지 다운로드
    yarn install
    
    // 3. typescript plugin 설치
    yarn add @yarnpkg/plugin-typescript
    
    // 4. Editor SDK 설정
    yarn dlx @yarnpkg/sdks vscode
    ```
    
    - yarn set version berry 명령어 실행 시 나타난 요상한 메세지
        <img width="651" alt="image" src="https://github.com/user-attachments/assets/0f696dc5-c0b8-4bc4-91f7-b66cb54e298d" />

        
        해결법
        
        ```jsx
        chanbyeol ☁️  not-use-CRA [main] ⚡  corepack enable
        chanbyeol ☁️  not-use-CRA [main] ⚡  corepack prepare yarn@3.2.2 --activate
        ```
        
    - typescript plugin의 역할은?
        - 기본 TypeScript는 node_modules를 사용해 타입 선언 파일(.d.ts)을 탐색하므로, PnP 환경과 충돌할 수 있는데, TypeScript Plugin은 PnP 환경에서 **타입 선언 파일**을 올바르게 탐색하고, TypeScript 컴파일러와의 호환성을 제공해줌
    - Editor SDK의 역할은?
        - 자동 완성, 코드 탐색(예: 정의로 이동), 타입 확인 등을 사용할 수 있도록 해줌

1. Zero-install 설정

```jsx
// .gitignore
.yarn/*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```

<br />

### Babel 설치

바벨이 IE때문에 구버전 JS로 변환하려고 설치하는건데 IE는 지원종료된지 꽤나 되었기 때문에,, 

글고 typescript가 트랜스파일러 역할을 또 해주니까 굳이 바벨을 설치할 필요성은 없었지만,,,,,

그래도! IE 점유율이 없는건 아니니까 설치해보았습니닷
<img width="710" alt="image" src="https://github.com/user-attachments/assets/659ec1f5-7a16-4446-b425-d817531b256a" />

```jsx
yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader
```

- @babel/core : 코드 변환 작업을 실제로 처리 및 변환하는 역할
- @babel/preset-env : 대상 환경(브라우저, Node.js 버전 등)에 따라 필요한 플러그인을 자동으로 결정해줌
- @babel/preset-react : 리액트의 JSX코드를 createElement 함수를 이용한 코드로 변환해줍니다.
- @babel/preset-typescript: 타입스크립트를 자바스크립트로 컴파일 해주는 프리셋
- babel-loader: 웹팩에서 babel을 loader로 사용할 수 있도록 해줌

<br />

**루트에 `babel.config.js` 작성**

import React from 'react’를 작성할 필요가 없어졌는데 요거는 바벨이 자동으로 추가를 안해줘서 따로 설정을 해야한다고 합니다요

또 runtime을 automatic으로 하면 jsx가 호출되고, classic으로 하면 React.createElement가 호출된다고 합니닷

```jsx
// babel.config.js

module.exports = {
  presets: [
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-env',
    '@babel/preset-typescript',
  ],
};
```

[](https://babeljs.io/docs/babel-preset-react#react-automatic-runtime)

<br />

### Webpack 설치

초반에는 Parcel을 써볼까 고민했지만 !! 나는 바벨+웹팩 정석 루틴대로 간닷

```jsx
yarn add -D webpack webpack-cli webpack-dev-server
yarn add -D html-webpack-plugin
```

- webpack : 번들 작업을 하는 webpack 패키지
- webpack-cli : 웹팩 터미널 도구
- webpack-dev-server : 빠른 실시간 리로드 기능을 갖춘 개발 서버
- html-webpack-plugin : webpack 번들을 제공하는 HTML 파일 생성을 단순화해줌

<br />

**`webpack.config.js` 파일 작성**

- export : webpack.config.js 파일을 어디에선가 require() 메소드로 끌어다 쓰기 때문에, module.exports 로 설정들을 내보내줍니다.
- entry : 번들링 시작점 파일을 명시
- output : 하나의 파일로 번들링한 결과물을 설정하는 단계

```tsx
// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        // Match js, jsx, ts & tsx files
        test: /\.[jt]sx?$/, // 해당 확장자로 끝나면 babel-loader가 처리
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true, // rebuild 시, 캐시에서 읽어서 바벨의 리트랜스파일링을 방지
          },
        },
      },
    ],
  },
  mode: "none", // none, production, development
  entry: "./src/index.tsx", // 번들링 시작점 파일
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html", // 번들링한 css, js 파일이 src/public에 있는 index.html 파일에 link태그, scripts태그로 추가됨
    }),
  ],
  devServer: {
    host: "localhost",
    port: 3000,
    static: path.resolve(__dirname, "dist"),
    historyApiFallback: true, // 404페이지 대신 index.html로 이동
    hot: true, // 모듈 전체를 다시 로드하지 않고 변경사항만 갱신
  },
  resolve: {
    // import 시 확장자 생략 가능, 번들링할 파일 설정
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};

```

<br />

### package.json에 script 추가

```
  "scripts": {
    "start": "webpack serve --mode=development&open 'http://localhost:3000'",
    "build": "webpack --mode=production"
  },
```

<br />

### index.tsx / App.tsx 추가

src 디렉토리를 만들고 파일 및 폴더들을 추가해주자!

```jsx
//index.tsx

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

```jsx
//App.tsx

import styled from "@emotion/styled";

const App = () => {
  return <div>CRA 없이 프로젝트 세팅하기!</div>;
};

export default App;
```

public 폴더를 만들고 하위에 index.html 파일 추가해주기!

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CRA없이 React 시작하기</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

<br />

### **ForkTsCheckerWebpackPlugin, 이모션 설치**

추가적으로 타입 체크를 위한 **ForkTsCheckerWebpackPlugin,** emotion을 설치해주었습니다!

```jsx
//webpack.config.js 수정

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'); //추가

//plugins에 추가
new ForkTsCheckerWebpackPlugin(), // 타입스크립트 타입 자체 체크 플러그인
```

eslint 깔았더니 골아파서 적용 안함 ㅎ;;

그리고 노션 바로 옮기고 싶어서 ReactMarkdown을 깔아봤는데 흠.. 딱히 편한 점은 없다~!

나는 스타일도 적용하고 싶어가지고 별 이득이 없었던

마크다운 코드용 상수를 따로 폴더에 모아두면 좀 깔끔할랑가

<br />

### 배포

vercel을 이용해서 배포,,

<img width="693" alt="image" src="https://github.com/user-attachments/assets/b9fc7bd7-7644-4201-aeaf-92f0d2468850" />





<br />

### 참고자료

[yarn berry 세팅하기](https://html-jc.tistory.com/693)

[TIL 84 - yarnberry zero install](https://velog.io/@loevray/TIL-84-yarnberry-zero-install)

[Babel 적용하며 이해하기(with. React, TypeScript)](https://chamdom.blog/webpack-babel-setting/)

[CRA 없이 리액트 시작하기 with webpack](https://yogjin.tistory.com/59)

[CRA 없이 React + Typescript 개발환경 구축하기(feat. Yarn Berry)](https://velog.io/@chex/CRA-%EC%97%86%EC%9D%B4-React-Typescript-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0feat.-Yarn-Berry)

<br />
<br />


### 실제 구현
<img width="1060" alt="image" src="https://github.com/user-attachments/assets/ef8196fb-e6e8-4038-86fa-91abd767c17d" />


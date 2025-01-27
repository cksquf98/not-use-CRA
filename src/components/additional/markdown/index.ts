export const PACKAGE_JSON_SCRIPT = `  
"scripts": {
    "start": "webpack serve --mode=development&open 'http://localhost:3000'",
    "build": "webpack --mode=production"
  },`;

export const FILE_INDEX = `
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
`;

export const FILE_APP = `
//App.tsx

import styled from "@emotion/styled";

const App = () => {
  return <div>CRA 없이 프로젝트 세팅하기!</div>;
};

export default App;
`;

export const FILE_INDEX_HTML = `
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
`;

export const INSTALL_WEBPACK_PLUGIN = `
//webpack.config.js 수정

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'); //추가

//plugins에 추가
new ForkTsCheckerWebpackPlugin(), // 타입스크립트 타입 자체 체크 플러그인
`;

export const INTRO_TEXT = `
바벨이 IE때문에 구버전 JS로 변환하려고 설치하는건데 IE는 지원종료된지 꽤나 되었기 때문에,,

글고 typescript가 트랜스파일러 역할을 또 해주니까 굳이 바벨을 설치할 필요성은 없었지만,,,,,

그래도! IE 점유율이 없는건 아니니까 설치해보았습니닷`;

export const INSTALL_CODE_1 = `yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader`;

export const INSTALL_CODE_2 = `
// babel.config.js

module.exports = {
presets: [
  ['@babel/preset-react', { runtime: 'automatic' }],
  '@babel/preset-env',
  '@babel/preset-typescript',
],
};`;

export const CONFIG_JS = `
**루트에 \`babel.config.js\` 작성**

import React from 'react’를 작성할 필요가 없어졌는데 요거는 바벨이 자동으로 추가를 안해줘서 따로 설정을 해야한다고 합니다요

또 runtime을 automatic으로 하면 jsx가 호출되고, classic으로 하면 React.createElement가 호출된다고 합니닷
`;
/* 
    전역 - 스타일 모음
*/

import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

// 외부에서 import 할거니까 모듈 내보내자~!
const GlobalStyle = createGlobalStyle`
  ${reset}

  #root {
    height: 100vh;
    width: 100%;
    text-align: center;
  }
`;

export default GlobalStyle;
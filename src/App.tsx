import React from 'react';
import { ThemeProvider } from 'styled-components';
import useTheme from './hooks/useTheme';
import MainFooter from './components/MainFooter';
import MainHeader from './components/MainHeader';
import '@blueprintjs/core/lib/css/blueprint.css';
import 'react-toastify/dist/ReactToastify.css';
import theme from './styles/theme';
import './assets/css/common.css';
import GlobalStyle from './styles/global-style';
import Router from './routes/Router';

const App: React.FC = () => {
  const [themeMode] = useTheme(); // hook 함수 하용
  const nowTheme = themeMode === 'light' ? theme.light : theme.dark; // 테마 환경에 맞는 테마 컬러 가져오기.

  return (
    <ThemeProvider theme={nowTheme}>
      <GlobalStyle />
      <MainHeader />
      <Router />
      <MainFooter />
    </ThemeProvider>
  );
};

export default App;

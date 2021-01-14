import React, { Children } from 'react';
import { ThemeProvider } from 'styled-components';
import useTheme from './hooks/useTheme';
import MainFooter from './components/Footer/MainFooter';
import MainHeader from './components/Header/MainHeader';
import '@blueprintjs/core/lib/css/blueprint.css';
import theme from './styles/theme';
import './assets/css/common.css';
import Home from './pages/Home';

const App:React.FC = () => {
  const [themeMode, toggleTheme] = useTheme(); // hook 함수 하용
  const nowTheme = themeMode === 'light' ? theme.light : theme.dark; // 테마 환경에 맞는 테마 컬러 가져오기.

  return (
    <ThemeProvider theme={nowTheme}>
      <MainHeader />
      <MainFooter />
    </ThemeProvider>
  );
};

export default App;

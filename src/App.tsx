import React from 'react';
import MainFooter from './components/Footer/MainFooter';
import MainHeader from './components/Header/MainHeader';
import Home from './pages/Home';

const App:React.FC = () => {
  return (
    <div className="App">
      <MainHeader />
      <Home />
      <MainFooter />
    </div>
  );
}

export default App;

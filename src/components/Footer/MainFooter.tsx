import React, { useEffect } from 'react';
import { Button } from '@blueprintjs/core';
import styled from 'styled-components';
import KakaoShareButton from '../Button/KakaoShareButton';


const Container = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.primaryText};
`;

const MainFooter: React.FC = () => {
    useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

    return (
      <Container>
        <KakaoShareButton />
      </Container>
    );
};

export default MainFooter;
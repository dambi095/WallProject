import React from 'react';
import styled from 'styled-components';
import KakaoMap from '../components/Map/KakaoMap';

// min-height: 100%; 
const Container = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.primaryText};
`;

const Home: React.FC = () => {
    return (
      <Container>
        <KakaoMap />
      </Container>
    );
};

export default Home;
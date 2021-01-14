import React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.primaryText};
`;

const Home: React.FC<RouteComponentProps> = () => {
    return (
      <Container>
        <h1>🎨</h1>
      </Container>
    );
};

export default Home;
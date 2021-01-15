import React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100%;
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.primaryText};
`;

const Home: React.FC = () => {
    return (
      <Container>
        <h1>🎨</h1>
      </Container>
    );
};

export default Home;
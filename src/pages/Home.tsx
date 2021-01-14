import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.primaryText};
`;

const Home: React.FC = () => {
    return (
      <Container>
        <h1>테마적용하기🎨</h1>
      </Container>
    );
};

export default Home;
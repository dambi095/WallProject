import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.primaryText};
`;

const MainHeader: React.FC = () => {
    return (
      <Container>
        Everyone&rsquo;s Wall
      </Container>
    );
};

export default MainHeader;
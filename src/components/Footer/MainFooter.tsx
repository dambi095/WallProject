import React, { useEffect } from 'react';
import { Button } from '@blueprintjs/core';
import styled from 'styled-components';


const Container = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.primaryText};
`;

const MainFooter: React.FC = () => {
  
    return (
      <Container>
        <div>ss</div>
      </Container>
    );
};

export default MainFooter;
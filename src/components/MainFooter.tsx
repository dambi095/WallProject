import React from 'react';
import styled from 'styled-components';
import Share from './Share';


const Container = styled.div`
  position: relative;
  height: 20vh;
  line-height: 76px;
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.primaryText};
`;

const MainFooter: React.FC = () => {
    return (
      <Container>
        <Share />
      </Container>
    );
};

export default MainFooter;
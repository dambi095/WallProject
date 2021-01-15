/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import { VscThreeBars, VscExpandAll }  from 'react-icons/vsc';

const Container = styled.div`
  position: relative;
  height: 10vh;
  line-height: 76px;
  align-items: center;
  justify-content: center;
  content: "";
  clear: both;
  display: block;
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.primaryText};
`;

const P = styled.p`
  display: inline-block;
  font-size: 21px;
  font-weight: bold;
  letter-spacing: 0.1rem;
`;

const WriteIcon = styled.div`
  float: left;
  margin-left: 20px;
`;

const MenwIcon = styled.div`
  float: right;
  margin-right: 20px;
`;

const MainHeader: React.FC = () => {
    return (
      <Container>
        <WriteIcon>
          <VscExpandAll size='35' />
        </WriteIcon>
        <P>EVERYONE&rsquo;S WALL</P>
        <MenwIcon>
          <VscThreeBars size='33' />
        </MenwIcon>
      </Container>
    );
};

export default MainHeader;
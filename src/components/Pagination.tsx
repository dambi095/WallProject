/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
import React from 'react'; 
import styled from 'styled-components';
import _ from 'lodash';

interface IPaginationProps {
    itemsCount: number,
    pageSize: number,
}

const Container = styled.div`
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Ul = styled.ul`
  color: black;
`;

const Li = styled.li`
    cursor: pointer;
`;

const Link = styled.a``;

const Pagination: React.FC<IPaginationProps> = ({ itemsCount, pageSize } : IPaginationProps) => {
    const pageCount = Math.ceil(itemsCount / pageSize); //  총 페이지 수 

    if (pageCount === 1) return null; // 1페이지 뿐이라면 페이지 수를 보여주지 않음
    
    const pages = _.range(1, pageCount + 1); // 마지막 페이지에 보여줄 컨텐츠를 위해 +1


    return (
      <Container>
        <Ul className="pagination">
          {pages.map(page => (
            <Li key={page} className="page-item">
              <Link className="page-link">{page}</Link>
            </Li>
        ))}
        </Ul>
      </Container>
    );
};

export default Pagination;
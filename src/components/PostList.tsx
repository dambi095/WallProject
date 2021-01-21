/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { IType } from '../store/actions';

interface IPostListProps { 
    list: Array<IType>
}

const Container = styled.div`
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PostList:React.FC<IPostListProps> = ({ list } : IPostListProps) => {
    return (
      <Container>
        {list.map((post: IType, index: number) => {
          return <div key={index}>{post.title}</div>;
        })}
      </Container>
    );
};

export default PostList;
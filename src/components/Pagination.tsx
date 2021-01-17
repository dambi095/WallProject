/* eslint-disable react/no-array-index-key */
/* eslint-disable no-new */
import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../store/actions';
import { RootState } from '../store/reducers';
import Loading from './Loading';

const Container = styled.div`
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Pagination: React.FC = () => {
    const { posts, isLoading } = useSelector((state: RootState) => state.posts);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(actions.loadPost());
    },[isLoading]);

    if (isLoading) {
      return <Loading />;
    }

    return (
      <Container>
        {posts.map((el: actions.IType, index: number) => {
            return <div key={index}>{el.title}</div>;
        })}
      </Container>
    );
};

export default Pagination;
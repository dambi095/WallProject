/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import KakaoMap from '../components/KakaoMap';
import PostList from '../components/PostList';
import * as actions from '../store/actions';
import { RootState } from '../store/reducers';
import Loading from '../components/Loading';
import Pagination from '../components/Pagination';

const Container = styled.div`
  min-height: 100%; 
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.primaryText};
`;

const Home: React.FC = () => {
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
        <KakaoMap />
        <PostList 
          list={posts}
        />
        <Pagination 
          itemsCount={Object.keys(posts).length} 
          pageSize={10}
        />
      </Container>
    );
};

export default Home;
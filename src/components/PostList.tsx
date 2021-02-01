import React from 'react';
import styled from 'styled-components';
import {IType, IPostListProps} from '../interfaces/interface';

const Container = styled.div`
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PostList: React.FC<IPostListProps> = ({list}: IPostListProps) => {
	return (
		<Container>
			{list &&
				list.map((post: IType) => {
					return <div key={`${post.id}`}>{post.title}</div>;
				})}
		</Container>
	);
};

export default PostList;

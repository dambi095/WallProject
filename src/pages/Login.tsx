import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { RouteComponentProps } from 'react-router';
import {login as actionLogin} from '../store/actions';
import {IKakaoAuth, IUser} from '../interfaces/interface';
import { RootState } from '../store/reducers';


const Container = styled.div`
	min-height: 100%;
	background-color: ${(props) => props.theme.mainBackground};
	color: ${(props) => props.theme.primaryText};
`;

const Button = styled.button`

`;

const Login: React.FC<RouteComponentProps> = ({history}: RouteComponentProps) => {	
	const isLoggedIn = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

	const login = () => {
		try{
			return new Promise((resolve, reject) => {
				if(!window.Kakao){
					reject(Error);
				}
				window.Kakao.Auth.login({
					success: (auth: IKakaoAuth) => {
						toast.done(`정상적으로 로그인 되었습니다!${auth}`);
						dispatch(actionLogin(auth, false));
					},
					fail: (e: Error) => {
						toast.error(`login error => ${e}`);
					}
				});
			});
		}catch(e){
			toast.error(`catch => ${e}`);
		}
	};

	return (
		<Container>
		    <Container>
			  <Button onClick={login}>KAKAO LOGIN</Button>
    		</Container>
		</Container>
	);
};

export default Login;

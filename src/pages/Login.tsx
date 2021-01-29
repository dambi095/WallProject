import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {useHistory, withRouter} from 'react-router';
import {RootState} from '../store/reducers';
import {login as actionLogin} from '../store/actions';
import {IUser} from '../interfaces/interface';

const Container = styled.div`
	min-height: 100%;
	background-color: ${(props) => props.theme.mainBackground};
	color: ${(props) => props.theme.primaryText};
`;

const Login: React.FC = () => {
	const [info, setInfo] = useState<IUser>({
		name: '',
		password: '',
	});
	const history = useHistory();
	const {user, isLoggedin} = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();

	if (isLoggedin) {
		history.push('/');
	}

	const login = () => {
		dispatch(
			actionLogin({name: info.name, password: info.password}, false),
		);
	};

	return (
		<Container>
			<div className='form-group'>
				<p>Name</p>
				<input
					type='text'
					className='form-control'
					placeholder='Enter name'
					onChange={(e) => setInfo({...info, name: e.target.value})}
				/>
			</div>

			<div className='form-group'>
				<p>Password</p>
				<input
					type='password'
					className='form-control'
					placeholder='Enter password'
					onChange={(e) =>
						setInfo({...info, password: e.target.value})}
				/>
			</div>

			<div className='form-group'>
				<div className='custom-control custom-checkbox'>
					<input
						type='checkbox'
						className='custom-control-input'
						id='customCheck1'
					/>
				</div>
			</div>

			<button
				type='submit'
				className='btn btn-dark btn-lg btn-block'
				onClick={() => login}
			>
				Sign in
			</button>
		</Container>
	);
};

export default Login;

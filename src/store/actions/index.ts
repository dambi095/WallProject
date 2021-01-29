import {IUser, IType} from '../../interfaces/interface';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUUCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const LOAD_POST = 'LOAD_POST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAIL = 'LOAD_POST_FAIL';

/* 로그인 */
export const login = (user: IUser, isLoggedin: boolean) => {
	return {
        type: LOGIN,
        payload: user,
        isLoggedin,
	};
};

export const loginSuccess = (user: IUser, isLoggedin: boolean) => {
	return {
		type: LOGIN_SUCCESS,
		payload: user,
		isLoggedin,
	};
};

export const loginFail = (error: Error, isLoggedin: boolean) => {
	return {
		type: LOGIN_FAIL,
		payload: error,
		isLoggedin,
	};
};

/* 포스트 */
export const loadPost = () => {
	return {
		type: LOAD_POST,
	};
};

export const loadPostSuccess = (posts: IType, isLoading: boolean) => {
	return {
		type: LOAD_POST_SUCCESS,
		payload: posts,
		isLoading,
	};
};

export const loadPostFail = (error: Error, isLoading: boolean) => {
	return {
		type: LOAD_POST_FAIL,
		payload: error,
		isLoading,
	};
};

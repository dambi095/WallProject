export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUUCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const LOAD_POST = 'LOAD_POST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAIL = 'LOAD_POST_FAIL';

export interface IType {
    body: string;
    id: number;
    title: string;
    userId: number;
}

export interface IUser { 
    email: string;
    name: string;
}

/* 로그인 */
export const login = () => {
  return {
        type: LOGIN,
    };
};

export const loginSuccess = (users: IUser, isLoggedin: boolean) => {
    return {
        type: LOAD_POST_SUCCESS,
        payload: users,
        isLoggedin
    };
};

export const loginFail = (error: Error, isLoggedin: boolean) => {
    return {
        type: LOAD_POST_SUCCESS,
        payload: error,
        isLoggedin
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
        isLoading
    };
};

export const loadPostFail = (error: Error, isLoading: boolean) => {
    return {
        type: LOAD_POST_FAIL,
        payload: error,
        isLoading
    };
};

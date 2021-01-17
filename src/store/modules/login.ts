/* eslint-disable @typescript-eslint/ban-types */

const prefix = 'login/';

// 액션타입 선언 
const LOG_IN = `${prefix}LOG_IN`;
const LOG_OUT = `${prefix}LOG_OUT`;

// 액션 생성 함수 선언
export const login = (token: string, provider: string, profile: UserProfile) => ({
    type: LOG_IN,
    access_token: token,
    provider,
    profile,
});

// 액션 생성 함수 선언
export const logout = () => ({
    type: LOG_OUT,
    access_token: '',
    provider: '',
    profile: ''
});

// reducer
function loginReducer(state: LoginState = initialState, action: LoginAction) {
    switch (action.type) {
        case LOG_IN:
            return applyLogIn(state, action);
        case LOG_OUT:
            return applyLogOut();
        default:
            return state;
    }
}

// reducer funtions
function applyLogIn(state: LoginState, action: LoginAction) {
    const { access_token, provider, profile } = action;
    window.localStorage.setItem('access_token', JSON.stringify(access_token));
    return {
        ...state,
        isLoggedIn: true,
        access_token,
        provider,
        profile,
    };
}

function applyLogOut() {
    window.localStorage.removeItem('access_token');
    return {
        isLoggedIn: false,
        access_token: '',
        provider: '',
        profile: {}
    };
}

interface UserProfile {
    nickname: string,
}

interface LoginState {
    isLoggedIn: boolean,
    access_token: string,
    provider: string ,
    profile: UserProfile | {}
}

const initialState: LoginState = {
    isLoggedIn: false,
    access_token: '',
    provider: '',
    profile: {}
};

type LoginAction = | ReturnType<typeof login>
                   | ReturnType<typeof logout>;

export default loginReducer;
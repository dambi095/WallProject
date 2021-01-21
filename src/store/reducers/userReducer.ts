import * as actions from '../actions';

const initialState = {
    isLoggedin: false,
    user: {}
};

export const userReducer = (state = initialState, action: any) => {
    const { payload, isLoggedin } = action;
    
    switch(action.type){
        case 'LOAD_POST':
            return {
                ...state,
            };
        case 'LOAD_POST_SUCCESS':
            return {
                ...state,
                user: payload,
                isLoggedin
            };
        case 'LOAD_POST_FAIL':
            return {
                ...state,
                isLoggedin
            };
        default:
            return state;
    }
};


export type UserAction = | ReturnType<typeof actions.login>;

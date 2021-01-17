import * as actions from '../actions';

const initialState = {
    isLoading: true,
    posts: {}
};

export const postReducer = (state = initialState, action: any) => {
    const { payload, isLoading } = action;
    
    switch(action.type){
        case 'LOAD_POST':
            return {
                ...state,
            };
        case 'LOAD_POST_SUCCESS':
            return {
                ...state,
                posts: payload,
                isLoading
            };
        case 'LOAD_POST_FAIL':
            return {
                ...state,
                isLoading
            };
        default:
            return state;
    }
};


export type PostAction = | ReturnType<typeof actions.loadPost>;

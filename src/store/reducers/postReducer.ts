import * as actions from '../actions';

const initialState = {
    isLoading: false,
    posts: {}
};

export const postReducer = (state = initialState, action: any) => {
    const { payload, isLoading } = action;
    console.log('action_type: ', action.type);
    
    switch(action.type){
        case 'LOAD_POST':
             console.log('#:', payload, isLoading);
            return {
                ...state,
            };
        case 'LOAD_POST_SUCCESS':
            console.log('##:', payload, isLoading);
            return {
                ...state,
                payload,
                isLoading
            };
        case 'LOAD_POST_FAIL':
             console.log('###:', payload, isLoading);
            return {
                ...state,
                payload,
                isLoading
            };
        default:
            return state;
    }
};


export type PostAction = | ReturnType<typeof actions.loadPost>;

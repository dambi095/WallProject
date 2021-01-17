export const LOAD_POST = 'SELECT_POST';
export const LOAD_POST_SUCCESS = 'SELECT_POST_SUCCESS';
export const LOAD_POST_FAIL = 'SELECT_POST_FAIL';

export interface IType {
    body: string,
    id: number,
    title: string,
    userId: number
}

export const loadPost = () => {
    return {
        type: LOAD_POST,
    };
};

export const loadPostSuccess = (posts: any, isLoading: boolean) => {
    return {
        type: LOAD_POST_SUCCESS,
        payload: posts.data,
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

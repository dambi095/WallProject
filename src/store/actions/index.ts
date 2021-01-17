export const LOAD_POST = 'LOAD_POST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAIL = 'LOAD_POST_FAIL';

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

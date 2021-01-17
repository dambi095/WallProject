import { combineReducers } from 'redux'; // 리듀서 합치기 
import login from './modules/login';

const rootReducer = combineReducers({
    login
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
import { combineReducers } from 'redux';
import { postReducer as posts } from './postReducer';
 
const rootReducer = combineReducers({
  posts,
});
 
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
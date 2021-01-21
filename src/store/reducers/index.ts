import { combineReducers } from 'redux';
import { postReducer as posts } from './postReducer';
import { userReducer as user } from './userReducer';
 
const rootReducer = combineReducers({
  user,
  posts,
});
 
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
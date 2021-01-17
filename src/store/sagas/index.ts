import { spawn } from "redux-saga/effects";
import watchPost from './postSaga';
 
export default function* rootSaga() {
  yield spawn(watchPost);
}

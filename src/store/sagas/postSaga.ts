import {call, put, takeEvery} from 'redux-saga/effects';
import * as api from '../../api/index';
import * as actions from '../actions';

function* fetchPostSaga(action: any) {
	try {
		const res = yield call(api.loadPostApi, 1);
		yield put(actions.loadPostSuccess(res.data, false)); // put으로 dispatch!
	} catch (error) {
		yield put(actions.loadPostFail(error, true));
	}
}

export default function* watchPost() {
	// dispatch에 의해 actions.type이 SELECT_POST인 객체가 올 때 fetchPostSaga를 실행시켜 다오
	yield takeEvery(actions.LOAD_POST, fetchPostSaga);
}

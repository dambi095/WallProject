import {call, put, takeEvery} from 'redux-saga/effects';
import * as api from '../../api/index';
import * as actions from '../actions';

function* login(action: any) {
	try {
		const res = yield call(api.loginApi, action.payload);
		console.log('res', res);
		yield put(actions.loginSuccess(res.data, false));
	} catch (error) {
		yield put(actions.loginFail(error, true));
	}
}

export default function* watchUser() {
	yield takeEvery(actions.LOGIN, login);
}

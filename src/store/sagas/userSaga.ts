import {call, put, takeEvery} from 'redux-saga/effects';
import API from '../../api/index';
import { IUser } from '../../interfaces/interface';
import * as actions from '../actions';

function* login(payload: any) {
	try {
		const res = yield call(API.loginApi, payload);
		yield put(actions.loginSuccess(res.data, true));
	} catch (error) {
		yield put(actions.loginFail(error, false));
	}
}

export default function* watchUser() {
	yield takeEvery(actions.LOGIN, login) ;
}

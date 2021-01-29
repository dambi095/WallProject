import * as actions from '../actions';

const initialState = {
	isLoggedin: false,
	user: {},
};

export const userReducer = (state = initialState, action: any) => {
	const {payload, isLoggedin} = action;
	
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
			};
		case 'LOGIN_SUCCESS':
			return {
				...state,
				user: payload,
				isLoggedin,
			};
		case 'LOGIN_FAIL':
			return {
				...state,
				isLoggedin,
			};
		default:
			return state;
	}
};

export type UserAction = ReturnType<typeof actions.login>;

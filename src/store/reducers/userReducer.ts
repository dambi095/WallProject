import * as actions from '../actions';

const initialState = {
	isLoggedIn: false,
	user: {},
};

export const userReducer = (state = initialState, action: any) => {
	const {payload, isLoggedIn} = action;
	
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
			};
		case 'LOGIN_SUCCESS':
			return {
				...state,
				user: payload,
				isLoggedIn,
			};
		case 'LOGIN_FAIL':
			return {
				...state,
				isLoggedIn,
			};
		default:
			return state;
	}
};

export type UserAction = ReturnType<typeof actions.login>;

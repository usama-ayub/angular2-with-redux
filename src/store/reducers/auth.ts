import { AuthActions } from '../action/auth';

export interface IUser {
    firstName: string,
    lastName: string,
    userName: string,
    id: string,
    username: string,
    email: string
}
export interface IError {
    timestamp: Date,
    data: Object,
    type: string
}

export interface IAuthState {
    success: Object,
    user: IUser,
    error: IError
}

const InitialState: IAuthState = {
    success: false,
    user: null,
    error: null
};

export const AuthReducer = function (state: IAuthState = InitialState, action: { type: string, payload?: any }) {
    switch (action.type) {
        case AuthActions.REGISTER_SUCCESS:
            return Object.assign({}, state, {
                success: { timestamp: new Date(), type: AuthActions.REGISTER_SUCCESS, data: action.payload }
            });
        case AuthActions.REGISTER_FAIL:
            return Object.assign({}, state, {
                error: { timestamp: new Date(), type: AuthActions.REGISTER_FAIL, data: action.payload.data }
            });
        case AuthActions.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                success: { timestamp: new Date(), type: AuthActions.LOGIN_SUCCESS },
                user: action.payload.data
            });
        case AuthActions.LOGIN_FAIL:
            return Object.assign({}, state, {
                error: { timestamp: new Date(), type: AuthActions.LOGIN_FAIL, data: action.payload }
            });
        case AuthActions.LOGOUT:
            return Object.assign({}, state, {
                success: null,
                user: null,
                error: null
            });
        default:
            return state;
    }
};

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

const InitialState = {
    success: false,
    user: null,
    isLoading: false
};

export const AuthReducer = function (state = InitialState, action: { type: string, payload?: any }) {
    switch (action.type) {
        case AuthActions.LOGIN:
        case AuthActions.REGISTER:
            return Object.assign({}, state, {
                isLoading: true
            });
        case AuthActions.REGISTER_SUCCESS:
            return Object.assign({}, state, {
                success: action.payload,
                user: action.payload.data,
                isLoading: false
            });
        case AuthActions.REGISTER_FAIL:
            return Object.assign({}, state, {
                success: action.payload,
                isLoading: false
            });
        case AuthActions.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                success: action.payload,
                user: action.payload.data,
                isLoading: false
            });
        case AuthActions.LOGIN_FAIL:
            return Object.assign({}, state, {
                success: action.payload,
                isLoading: false
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

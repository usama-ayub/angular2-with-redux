import { AuthActions } from '../actions';


const InitalState = {
    isLoading: false,
    isLoggedin: null,
    isLoggedinBtn: false,
    isRegistered: false,
    resetted: false,
    user: null,
    error: null
};

export const authReducer = function (state = InitalState, action) {
    switch (action.type) {

       
        case AuthActions.LOGIN_FAIL:
            return Object.assign({}, state, {
                user: null,
                error: { timestamp: new Date(), message: action.payload, type: AuthActions.LOGIN_FAIL }
            });
        case AuthActions.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                user: action.payload.data,
                error: null
            });

        case AuthActions.LOGOUT:
            return Object.assign({}, state, {
                isLoading: false,
                isLoggedin: false,
                isLoggedinBtn: false,
                isRegistered: false,
                user: null,
                error: null
            });
        case AuthActions.REGISTER_FAIL:
            return Object.assign({}, state, {
                error: { timestamp: new Date(), message: action.payload, type: AuthActions.REGISTER_FAIL }
            });
        case AuthActions.REGISTER_SUCCESS:
            return Object.assign({}, state, {
                error: null
            });
        default:
            return state;
    }
};

import { TodoActions } from '../action/todo';

const InitialState = {
    success: null,
    todo: null,
    error: null,
    isLoading: false
};

export const TodoReducer = function (state = InitialState, action: { type: string, payload?: any }) {
    console.log(action);
    switch (action.type) {
        case TodoActions.ADDTODO:
            return Object.assign({}, state, {
                isLoading: true
            });
        case TodoActions.ADDTODO_SUCCESS:
            return Object.assign({}, state, {
                success: true,
                todo: action.payload.data,
                isLoading:false
            });
        case TodoActions.ADDTODO_FAIL:
            return Object.assign({}, state, {
                success: false,
                todo: action.payload.data,
                isLoading:false
            });
        default:
            return state;
    }
};

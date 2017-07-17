import { TodoActions } from '../action/todo';
export interface Itodo {
    createBy: string,
    description: string,
    _id: string
}
const InitialState = {
    success: null,
    todo: {
        createBy: '',
        description: '',
        _id: ''
    },
    getTodo: {
        createBy: '',
        description: '',
        _id: ''
    },
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
                isLoading: false
            });
        case TodoActions.ADDTODO_FAIL:
            return Object.assign({}, state, {
                success: false,
                todo: action.payload.data,
                isLoading: false
            });
        case TodoActions.GETTODO:
            return Object.assign({}, state, {
                isLoading: true
            });
        case TodoActions.GETTODO_SUCCESS:
            return Object.assign({}, state, {
                success: true,
                getTodo: action.payload.data,
                isLoading: false
            });
        case TodoActions.GETTODO_FAIL:
            return Object.assign({}, state, {
                success: false,
                getTodo: action.payload.data,
                isLoading: false
            });
        default:
            return state;
    }
};

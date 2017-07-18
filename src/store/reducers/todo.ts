import { TodoActions } from '../action/todo';

const InitialState = {
    success: null,
    todo: {
        createBy: '',
        description: '',
        _id: ''
    },
    getTodo: [],
    delTodo: null,
    error: null,
    isLoading: false
};

export const TodoReducer = function (state = InitialState, action: { type: string, payload?: any }) {
    switch (action.type) {
        case TodoActions.ADDTODO:
            return Object.assign({}, state, {
                isLoading: true,
                success: false
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
        case TodoActions.DELETETODO:
        console.log(TodoActions.DELETETODO);
            return Object.assign({}, state, {
                isLoading: true
            });
        case TodoActions.DELETETODO_SUCCESS:
            return Object.assign({}, state, {
                success: true,
                delTodo: action.payload.data,
                isLoading: false
            });
        case TodoActions.DELETETODO_FAIL:
            return Object.assign({}, state, {
                success: false,
                delTodo: action.payload.data,
                isLoading: false
            });
        default:
            return state;
    }
};

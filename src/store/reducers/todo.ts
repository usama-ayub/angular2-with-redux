import { TodoActions } from '../actions';


let initalTodos = [{
    todoTask: 'first',
    isfavourite: false
}, {
    todoTask: 'second',
    isfavourite: false
}]
export let todoReducers = (state = initalTodos, action) => {
    switch (action.type) {
        case TodoActions.ADDTODO:
            return [...state, action.payload]
        case TodoActions.DELETETODO:
            return state.filter(todo => todo !== action.payload)
        case TodoActions.FAVOURITETODO:
            return state.map(todo => {
                if (todo == action.payload) {
                    console.log(todo)
                    todo.isfavourite = !todo.isfavourite
                }
                return todo;
            })
        default:
            return state
    }
}
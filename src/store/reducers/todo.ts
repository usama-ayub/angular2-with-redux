let initalTodos = [{
    todoTask: 'first',
    isfavourite: false
}, {
    todoTask: 'second',
    isfavourite: false
}]
export let todoReducers = (state = initalTodos, action) => {
    switch (action.type) {
        case 'addTodo':
            return [...state, action.payload]
        case 'deleteTodo':
            return state.filter(todo => todo !== action.payload)
        case 'isActiveTodo':
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
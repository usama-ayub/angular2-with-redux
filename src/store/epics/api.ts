// const base = 'https://2cerc2sid0.execute-api.us-east-1.amazonaws.com/prod/v1';
const base = 'https://todo-app-ionic2.herokuapp.com/api';




export const api = {
  login: base + '/login', // POST
  register: base + '/register', // GET
  addTodo: base + '/user/todo', // POST
  favouriteTodo: base + '/user/todo/favourite', // PUT
  deleteTodo: base + '/user/:user_id/todo/:todo_id', // DELETE
};

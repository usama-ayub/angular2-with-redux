const base = 'https://classified-app-server.herokuapp.com/api';
// const base = 'http://localhost:3000/api';




export const api = {
  login: base + '/login', // POST
  register: base + '/register', // GET
  addTodo: base + '/post/add', // POST
  getTodo: base + '/post/user', // GET
  favouriteTodo: base + '/user/todo/favourite', // PUT
  deleteTodo: base , // DELETE
};

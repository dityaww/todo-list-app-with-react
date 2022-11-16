export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"

export function addTodo(todo) {
//   console.log(todo, "dari action");
  return {
    type: ADD_TODO,
    payload: todo
  }
}

export function deleteTodo(todo) {
//   console.log(todo, "dari action");
  return {
    type: DELETE_TODO,
    payload: todo
  }
}
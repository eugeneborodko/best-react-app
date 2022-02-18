export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export const addTodo = (newTodo) => ({
  type: ADD_TODO,
  payload: newTodo,
})

export const removeTodo = (index) => ({
  type: REMOVE_TODO,
  payload: index,
})
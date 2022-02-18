import { ADD_TODO, REMOVE_TODO } from './actions'
import { todos } from '../../data'

const initialState = {
  todos,
}

export const todosRecuder = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, {id: new Date().toString(), name: action.payload}],
      }
      case REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((item) => item.id !== action.payload)]
      }
    default:
      return state
  }
}

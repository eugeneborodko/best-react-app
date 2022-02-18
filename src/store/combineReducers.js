import { inputReducer } from './input/reducers'
import { todosRecuder } from './todos/reducers'
import { combineReducers } from 'redux'

export default combineReducers({
  input: inputReducer,
  todos: todosRecuder,
})
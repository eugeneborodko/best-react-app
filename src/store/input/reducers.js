import { CHANGE_VALUE, CLEAR_VALUE } from './actions'


const initialState = {
  inputValue: 'vania loh'
}

export const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VALUE: 
      return {
        ...state,
        inputValue: action.payload
      }
      case CLEAR_VALUE: 
      return {
        ...state,
        inputValue: ''
      }
    default: return state
  }
}

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeValue, clearValue} from '../../store/input/actions'
import { addTodo } from '../../store/todos/actions'

const Input = () => {
  const inputValue = useSelector(state => state.input.inputValue)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(changeValue(e.target.value))
  }

  const clear = () => {
    dispatch(clearValue())  
  }

  const addMyTodo = () => {
    dispatch(addTodo(inputValue))
    clear()
  }
  // const [value, setValue] = useState('')

  // const handleChange = (e) => {
  //   setValue(e.target.value)
  // }

  useEffect(() => {
    console.log('value: ', inputValue)
  }, [inputValue])

  return (
    <>
    <input type="text" placeholder="Name" onChange={handleChange} value={inputValue}  />
    <button onClick={clear}>Clear</button>
    <button onClick={addMyTodo}>Add todo</button>
    </>
  )
}

export default Input
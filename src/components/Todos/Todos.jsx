
// import { todos } from "../../data"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { removeTodo } from "../../store/todos/actions"

const Todos = () => {
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()

  const remove = (id) => {
    return () => {
      dispatch(removeTodo(id))
    }
  }

  return (
    <div>
      {todos.map(({id, name}) => {
        return (
          <>
          <div key={id}>{id}: {name}</div>
          <button onClick={remove(id)}>Remove</button>
          </>
          )
      } )}
    </div>
  )
}

export default Todos
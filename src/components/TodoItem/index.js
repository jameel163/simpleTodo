import './index.css'

const TodoItem = props => {
  const {items, deleteTask} = props
  const {title, id} = items

  const clickEvent = () => {
    console.log(id)
    deleteTask(id)
  }

  return (
    <li className="list">
      <p className="title">{title} </p>
      <button type="button" onClick={clickEvent} className="butt">
        Delete
      </button>
    </li>
  )
}

export default TodoItem

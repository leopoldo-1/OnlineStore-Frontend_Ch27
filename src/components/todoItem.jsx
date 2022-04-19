import QuantityPicker from './quantityPicker'
import './todoItem.css'

const TodoItem = (props) => {
  return (
    <div className="todo-item-container">
      <div className='item'>{props.content}</div>
      <div>
        <QuantityPicker/>
      </div>
    </div>
  )
}

export default TodoItem
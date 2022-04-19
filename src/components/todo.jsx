import { useState } from 'react'
import TodoItem from './todoItem'
import "./todo.css"

const Todo = () => {
  const [text, setText] = useState("")
  const [shoppingList, setshoppingList] = useState([])

  const handleTextChange = (evt) => {
    setText(evt.target.value)
  };

  const handleAddItem = () => {
    console.log("Text... ", text);
    let copy = [...shoppingList];
    copy.push(text)
    setshoppingList(copy)
  }

  return (
    <div className="todo-container">
      <h3 className="title">Shopping list</h3>

      <div  className="form-container">
        <div>
          <label htmlFor="task">Task:</label>
          <input onChange={handleTextChange} type="text" name="task" />
          <button onClick={handleAddItem} className="btn-add-task">Add</button>
        </div>

        <div className="list">
          <h6>There are {shoppingList.length} Items in your list</h6>

          {shoppingList.map((item, index) => (
            <TodoItem key={index} content={item}/>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Todo
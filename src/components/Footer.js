import React, {useContext, useState} from 'react'
import { DataContext } from './DataProvider'

export default function Footer() {
  const [checkAll, setCheckAll] = useState(false) 
  const [todos, setTodos] = useContext(DataContext)

  const handleCheckAll= () => {
    const newTodos = [...todos]
    newTodos.forEach( todo =>{
      todo.complete = !checkAll
    })
    setTodos(newTodos)
    setCheckAll(!checkAll)
  }

  

  const deleteTodo = () => {
    const newTodos = todos.filter(todo => {
      return todo.complete === false
    })
    setTodos(newTodos)
    setCheckAll(false)
  }

  return (
    <div class="footer">
    {
      todos.length === 0 ? <h2>You have no task!</h2>
        : <div className="row">
        <label htmlFor="all">
          <input type="checkbox" name="all" id="all"
          onChange={handleCheckAll} checked={checkAll}/>
            All
        </label>
          <button id="delete" onClick={deleteTodo}>Delete</button>
      
   </div>
    }
    </div>
    
  )
}

import React, {useState,useContext, useRef, useEffect} from 'react'
import {DataContext} from './DataProvider'

export default function FormInput() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState('');
  const todoInput = useRef();
  
  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, {name: todoName, complete: false}])
    setTodoName('');
  }

  useEffect (() => {
    todoInput.current.focus();
  },[])
 
  return ( 
    <><p id="countertodo">You have <p id="numcounter">{todos.filter(todo => todo.complete === false).length}</p> to do</p><form autoComplete="off" onSubmit={addTodo}>
      <input type="text" name="todos" id="todos" ref={todoInput}
        required placeholder="What needs to be done?" value={todoName}
        onChange={e => setTodoName(e.target.value.toLowerCase())} />


      <button type="submit">Create</button>

    </form></>
  )
}

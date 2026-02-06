import React, { useState } from 'react'

const App = () => {

  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])

  const addHandle = () => {
    setTodos([...todos, { id: Date.now(), task, completed: false }])
    setTask("")
  }

  const handleToggle = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  const handleDEl = (id) =>{

const filterTOdos = todos.filter(todo=>
  todo.id !== id)

setTodos(filterTOdos)
}

  return (
    <>
      <h1 className='text-center'>TODO LIST</h1>

      <div className='flex flex-wrap justify-center'>
        <input
          type='text'
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder='add task'
        />
        <button className='bg-black text-white' onClick={addHandle} disabled={!task.trim()}>ADD</button>
      </div>

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              />
              <span style={{


color: todo.completed? "pink": "black",
                textDecoration: todo.completed ? "line-through" : "none"
              }}>
                {todo.task}
              </span>
              <button className='text-black' onClick={()=> handleDEl(todo.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App

import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <div>
      <h1>Todo with RTK Query</h1>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default App
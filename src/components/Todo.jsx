import React from 'react'
import { useDeleteTodoMutation } from '../features/todosApi/todosApi'

const Todo = ({todo}) => {
  const [deleteTodo] = useDeleteTodoMutation()

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id).unwrap()
  }

  return (
    <li style={{
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center',
        borderRadius: '40px',
        marginBottom: '20px'
    }}>
        <input type="checkbox" />
        <h1>{todo.title}</h1>
        <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
    </li>
  )
}

export default Todo
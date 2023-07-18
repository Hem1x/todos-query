import React from 'react';
import { useChangeStateTodoMutation, useDeleteTodoMutation } from '../features/todosApi/todosApi';

const Todo = ({ todo }) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const [changeStateTodo , {isError}] = useChangeStateTodoMutation();

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id).unwrap();
  };

  const handleUpdateTodo = async (id, completed) => {
    await changeStateTodo({
      id,
      completed: !completed,
    }).unwrap();
  };

  if(isError) {
    return <h1>Error</h1>
  }

  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '40px',
        marginBottom: '20px',
      }}
    >
      <input type="checkbox" onChange={() => handleUpdateTodo(todo.id, todo.completed)} />
      <h1 style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</h1>
      <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
    </li>
  );
};

export default Todo;

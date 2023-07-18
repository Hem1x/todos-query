import React, { useState } from 'react'
import { useAddTodoMutation } from '../features/todosApi/todosApi'

const TodoForm = () => {
    const [value, setValue] = useState('')
    const [addTodo] = useAddTodoMutation()

    const handleAddTodo = async() => {
      if(value) {
        await addTodo({title: value}).unwrap()
        setValue('')
      }
    }  

    return (
      <form style={{marginBottom: '20px'}} onSubmit={handleAddTodo}>
          <input autoFocus type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
          <button type='submit'>Add Todo</button>
      </form>
    )
}

export default TodoForm
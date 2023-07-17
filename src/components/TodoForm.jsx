import React, { useState } from 'react'

const TodoForm = () => {
    const [value, setValue] = useState('')

  return (
    <form style={{
        marginBottom: '20px'
    }}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        <button>Add Todo</button>
    </form>
  )
}

export default TodoForm
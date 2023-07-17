import React from 'react'
import Todo from './Todo'
import { useGetTodosQuery } from '../features/todosApi/todosApi'

const TodoList = () => {
    const {data = [], isLoading, isError} = useGetTodosQuery()

    // Check data state
    if(isLoading) return <h1>Loading...</h1>
    if(isError) return <h1>Error</h1>
    if(!data) return <h1>No data</h1>

    return (
        <ul>
            {data.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </ul>
    )
}

export default TodoList
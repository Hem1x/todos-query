import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
    reducerPath: "todosApi",
    tagTypes: ['Todos'],
    baseQuery: fetchBaseQuery({baseUrl: "https://64b519e9f3dbab5a95c6b423.mockapi.io/"}),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => 'todos',
            providesTags: (result) => result
            ? [
                ...result.map(({ id }) => ({ type: 'Todos', id })),
                { type: 'Todos', id: 'LIST' },
              ]
            : [{ type: 'Todos', id: 'LIST' }],
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `todos/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{type: 'Todos', id: 'LIST'}]
        }),
        addTodo: builder.mutation({
            query: (body) => ({
                url: 'todos',
                method: 'POST',
                body
            }),
            invalidatesTags: [{type: 'Todos', id: 'LIST'}]
        }),
        changeStateTodo: builder.mutation({
            query: ({id, completed}) => ({
                url: `todos/${id}`,
                method: 'PUT',
                body: {completed}
            }),
            invalidatesTags: [{type: 'Todos', id: 'LIST'}]
        })
    })
})

export const {useGetTodosQuery, useDeleteTodoMutation, useAddTodoMutation, useChangeStateTodoMutation} = todosApi
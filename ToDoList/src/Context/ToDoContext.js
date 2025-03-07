import { createContext, useContext } from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "msg",
            completed: false
        }
    ],
    addTodo: (todos) => { },
    updateTodo: (id, todos) => { },
    deleteTodo: (id) => { },
    toggleTodo: (id) => { },
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
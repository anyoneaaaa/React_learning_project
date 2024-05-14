import { createSlice, nanoid } from '@reduxjs/toolkit'

const intialState = {
    todo: [{ id: 1, text: "hello" }]
}


export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo:(state,)=>{},
        removeTodo:()=>{},

    }
})

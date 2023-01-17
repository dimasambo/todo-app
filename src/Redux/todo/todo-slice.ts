import {Todo} from "../../types/types";
import {api} from "../../api/api";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    todos: [] as Array<Todo>
}

export type InitialStateType = typeof initialState

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo(state: InitialStateType, action: PayloadAction<Todo>) {
            state.todos = [...state.todos, action.payload]
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(requestTodos.fulfilled, (state: InitialStateType, action) => {
                state.todos = action.payload.slice(0, 10)
            })
    },
});

export const {addTodo} = todoSlice.actions

export const requestTodos = createAsyncThunk(
    'todo/requestTodos',
    async () => {
        const data: Array<Todo> = await api.getTodos();
        return data;
    }
)

export default todoSlice.reducer;
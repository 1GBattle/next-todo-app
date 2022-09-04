import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import TodoModel from '../../models/TodoModel'

export const todosSlice = createSlice({
	name: 'todos',
	initialState: {
		value: [] as TodoModel[]
	},
	reducers: {
		setTodos: (state, action: PayloadAction<TodoModel[]>) => {
			state.value = action.payload
		},

		createTodo: (state, action: PayloadAction<TodoModel>) => {
			state.value.push(action.payload)
		},

		deleteTodo: (state, action: PayloadAction<string>) => {
			state.value = state.value.filter((todo) => todo.id !== action.payload)
		},

		updateTodo: (state, action: PayloadAction<TodoModel>) => {
			const todo = state.value.find((todo) => todo.id === action.payload.id)

			if (todo) {
				todo.title = action.payload.title
				todo.description = action.payload.description
			}
		}
	}
})

export const { setTodos, createTodo, deleteTodo, updateTodo } = todosSlice.actions
export default todosSlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import TodoModel from '../../models/TodoModel'

export const todosSlice = createSlice({
	name: 'todos',
	initialState: {
		value: [] as TodoModel[]
	},
	reducers: {
		createTodo: (state, action: PayloadAction<TodoModel>) => {
			state.value = [action.payload]
		}
	}
})

export const addTodoAsync = (todo: TodoModel) => async (dispatch: any) => {
	await dispatch(todosSlice.actions.createTodo(todo))
}

export const { createTodo } = todosSlice.actions
export default todosSlice.reducer

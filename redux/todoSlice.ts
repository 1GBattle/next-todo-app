import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import TodoModel from '../models/TodoModel'

const addTodo = createAsyncThunk('/todo/createTodo', async (todo: TodoModel) => {
	const res = await axios.post('/api/addTodo', todo)
	return await res.data
})

const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		todos: [] as TodoModel[],
		loading: 'idle' as 'idle' | 'pending' | 'succeeded' | 'failed'
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(addTodo.pending, (state, action) => {
			state.todos.push(action.payload!)
		})
	}
})

export const { actions } = todoSlice
export default todoSlice.reducer

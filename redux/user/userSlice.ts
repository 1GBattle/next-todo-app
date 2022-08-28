import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		value: {}
	},
	reducers: {
		setUser: (state, action: PayloadAction<any>) => {
			state.value = action.payload
		},
		removeUser: (state, action: PayloadAction<any>) => {
			state.value = {}
		}
	}
})

export const selectUser = (state: RootState) => state.user

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer

import { IUser } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';




interface UsersState {
	users: IUser[]
	loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}
const initialState = {
	users: [],
	loading: 'idle',
} as UsersState


export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUser(state, action) {
			state.users.push(action.payload)
		},
		removeUser(state, action) {
			state.users.filter(user => user.id !== action.payload)
		}
	},
	extraReducers: (builder) => { }
})

export const { setUser, removeUser } = usersSlice.actions
export const { reducer: userReducer } = usersSlice
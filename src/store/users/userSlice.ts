import { IUser } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';




interface UsersState {
	user: IUser | null
	loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}
const initialState = {
	user: null,
	loading: 'idle',
} as UsersState


export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUser(state, action) {
			state.user = action.payload
		},
		removeUser(state) {
			state.user = null
		}
	}
})

export const { setUser, removeUser } = usersSlice.actions
export const { reducer: userReducer } = usersSlice
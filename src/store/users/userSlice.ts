import { getLocalStorage, setLocalStorage } from '@/helpers/localStorege';
import { IUser } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



interface UsersState {
	user: IUser
}
const initialState = {
	user: {
		id: '',
		email: '',
		isAuth: false
	}
} as UsersState



export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUser(state, action) {
			state.user = action.payload
			setLocalStorage('user', JSON.stringify(action.payload))
		},
		removeUser(state) {
			state.user = {
				id: '',
				email: '',
				isAuth: false
			}
			setLocalStorage('user', JSON.stringify({
				id: '',
				email: '',
				isAuth: false
			}))
		}
	}
})

export const { setUser, removeUser } = usersSlice.actions
export const { reducer: userReducer } = usersSlice
import { IUser } from '@/types';
import { createSlice } from '@reduxjs/toolkit';




interface IProfile {
	name: string
	lastName: string
	company: string
	about: string
	loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}
const initialState = {
	name: '',
	lastName: '',
	company: '',
	about: '',
	loading: 'idle',
} as IProfile


export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setProfile(state, action) {
			state.company = action.payload.company
			state.name = action.payload.name
			state.lastName = action.payload.lastName
			state.about = action.payload.about
		},

	}
})

export const { setProfile } = profileSlice.actions
export const { reducer: profileReducer } = profileSlice
import { getCategories } from '@/services/productsAPI';
import { Categories } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const getAllCategories = createAsyncThunk(
	'categories/getAllCategories',
	async () => {
		return await getCategories()
	}
)

interface CategoriesState {
	categories: Categories
	loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}
const initialState = {
	categories: [],
	loading: 'idle',
} as CategoriesState


export const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllCategories.fulfilled, (state, action) => {
			state.categories = action.payload
		})
	}
})

export const { reducer: categoriesReducer, actions } = categoriesSlice
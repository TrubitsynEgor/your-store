import { getProducts } from '@/services/productsAPI';
import { IProducts } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const getAllProducts = createAsyncThunk(
	'products/getAllProducts',
	async () => {
		return await getProducts()
	}
)

interface ProductsState {
	products: IProducts[]
	loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}
const initialState = {
	products: [],
	loading: 'idle',
} as ProductsState


export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllProducts.fulfilled, (state, action) => {
			state.products = action.payload
		})
	}
})

export const { reducer: productsReducer, actions } = productsSlice
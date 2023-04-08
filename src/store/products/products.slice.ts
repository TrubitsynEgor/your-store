import { deleteProductById, getProducts } from '@/services/productsAPI';
import { IProducts } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const getAllProducts = createAsyncThunk(
	'products/getAllProducts',
	async () => {
		return await getProducts()
	}
)

export const getSearchedProduct = createAsyncThunk(
	'products/getSearchedProduct',
	async (value: string) => {
		const data = await getProducts()
		return data.filter((el: IProducts) => el.title.toLowerCase().includes(value.toLowerCase()))
	}
)
export const addProductToCart = createAsyncThunk(
	'products/addProductToCart',
	async (id: number) => {
		const data = await getProducts()
		return data.filter((el: IProducts) => el.id === id)

	}
)
export const RemoveProduct = createAsyncThunk(
	'products/RemoveProduct',
	async (id: number, { dispatch }) => {
		const data = await deleteProductById(id)
		dispatch(removeProductFromCart(id))
	}
)



interface ProductsState {
	products: IProducts[]
	cart: IProducts[]
	totalPrice: number
	count: number
	loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}
const initialState = {
	products: [],
	cart: [],
	totalPrice: 0,
	count: 0,
	loading: 'idle',
} as ProductsState


export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addCount(state, action) {
			if (!state.cart.find(el => el.id === action.payload))
				state.count++
		},
		deleteCount(state) {
			state.count--
		},
		removeProductFromCart(state, action) {
			state.cart = state.cart.filter((el: IProducts) => el.id !== action.payload)

		},
		increasePrice(state, action) {
			state.totalPrice += action.payload
		},
		decreasePrice(state, action) {
			state.totalPrice -= action.payload
		},
		decreasePriceWithRemove(state, action) {
			state.totalPrice -= action.payload
		},


	},
	extraReducers: (builder) => {
		builder.addCase(getAllProducts.fulfilled, (state, action) => {
			state.products = action.payload
		});
		builder.addCase(getSearchedProduct.fulfilled, (state, action) => {
			state.products = action.payload

		})
		builder.addCase(addProductToCart.fulfilled, (state, action) => {
			if (state.cart.length === 0) {
				state.cart.push(...action.payload)
				state.totalPrice = action.payload[0].price
			} else if (!state.cart.find(el => el.id === action.payload[0].id)) {
				state.cart.push(...action.payload)
				state.totalPrice += action.payload[0].price
			}
		})


	},

})
export const {
	getSearchedCartProduct,
	decreasePriceWithRemove,
	increasePrice,
	decreasePrice,
	addCount,
	deleteCount,
	removeProductFromCart
} = productsSlice.actions

export const { reducer: productsReducer } = productsSlice
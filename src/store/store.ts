import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import { categoriesReducer } from './products/categoriesSlice'
import { productsReducer } from './products/products.slice'
import { createWrapper } from 'next-redux-wrapper'
import { userReducer } from './users/userSlice'

const rootReducer = combineReducers({
	categories: categoriesReducer,
	products: productsReducer,
	users: userReducer
})

export const rootStore = () =>
	configureStore({
		reducer: rootReducer,
	})

export type AppStore = ReturnType<typeof rootStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action
>;

export const wrapper = createWrapper<AppStore>(rootStore)
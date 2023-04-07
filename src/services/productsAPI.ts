import { IProducts } from '@/types'

const BASE_URL = 'https://fakestoreapi.com/products/'

export const getProducts = async () => {
	try {
		const res = await fetch(BASE_URL)
		const data = await res.json()

		return data
	} catch (error) {
		if (error instanceof Error) return error.message
	}
}

export const getProductById = async (id: string | string[] | undefined) => {
	try {
		const res = await fetch(`${BASE_URL}${id}`)
		const data = await res.json()
		return data
	} catch (error) {
		if (error instanceof Error) return error.message
	}
}


export const getCategories = async () => {
	try {
		const res = await fetch(`${BASE_URL}categories`)
		const data = await res.json()

		return data
	} catch (error) {
		if (error instanceof Error) return error.message
	}
}

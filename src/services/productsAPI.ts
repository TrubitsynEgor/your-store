const BASE_URL = 'https://fakestoreapi.com/products/'

export const getProducts = async () => {
	try {
		const res = await fetch('https://fakestoreapi.com/products')
		const data = await res.json()
		return data
	} catch (error) {
		if (error instanceof Error) return error.message
	}
}


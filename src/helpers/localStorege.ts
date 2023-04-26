

export const getLocalStorage = (key: string) => {
	if (typeof window !== 'undefined') {
		const data = localStorage.getItem(key)
		if (data !== null) return JSON.parse(data)
	}
	return {
		id: '',
		email: '',
		isAuth: false
	}
}

export const setLocalStorage = (key: string, data: string) => {
	if (typeof window !== 'undefined') localStorage.setItem(key, JSON.stringify(data))
}
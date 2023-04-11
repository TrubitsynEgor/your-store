import { useEffect, useState } from 'react'

export type Validators = {
	isEmpty: boolean
	minLength: number
	isEmail?: boolean
}


export const useValidate = (value: string, validators: Validators) => {
	const [isEmpty, setEmpty] = useState(true)
	const [minLengthError, setMinLengthError] = useState(false)
	const [emailError, setEmailError] = useState(false)
	const [inputValid, setInputValid] = useState(false)

	useEffect(() => {
		for (const valid in validators) {
			switch (valid) {
				case 'minLength':
					value.length < validators[valid] ? setMinLengthError(true) : setMinLengthError(false)
					break;
				case 'isEmpty':
					value ? setEmpty(false) : setEmpty(true)
					break;
				case 'isEmail':
					const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
					re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
					break;

			}
		}
	}, [value])


	useEffect(() => {
		if (minLengthError || emailError || emailError) {
			setInputValid(false)
		} else {
			setInputValid(true)
		}
	}, [minLengthError, emailError, emailError])
	return {
		isEmpty,
		minLengthError,
		emailError,
		inputValid
	}

}
import { useEffect, useState } from 'react'

export type Validators = {
	isEmpty?: boolean
	minLength?: number
	isEmail?: boolean
	isPhone?: boolean
	isCard?: boolean
	isSmsCode?: boolean
}


export const useValidate = (value: string, validators: Validators) => {
	const [isEmpty, setEmpty] = useState(true)
	const [minLengthError, setMinLengthError] = useState(false)
	const [emailError, setEmailError] = useState(false)
	const [inputValid, setInputValid] = useState(false)
	const [phoneError, setPhoneError] = useState(false)
	const [cardError, setCardError] = useState(false)
	const [smsError, setSmsError] = useState(false)

	useEffect(() => {
		for (const valid in validators) {
			switch (valid) {
				case 'minLength':
					value.length < validators[valid]! ? setMinLengthError(true) : setMinLengthError(false)
					break;
				case 'isEmpty':
					value ? setEmpty(false) : setEmpty(true)
					break;
				case 'isEmail':
					const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
					re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
					break;
				case 'isPhone':
					const phoneRe = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
					phoneRe.test(value) ? setPhoneError(false) : setPhoneError(true)
					break;
				case 'isCard':
					const cardRe = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
					cardRe.test(value) ? setCardError(false) : setCardError(true)
					break;
				case 'isSmsCode':
					const smsRe = /[0-9]{4}/
					smsRe.test(value) ? setSmsError(false) : setSmsError(true)
					break;


			}
		}
	}, [value])


	useEffect(() => {
		if (minLengthError || emailError) {
			setInputValid(false)
		} else {
			setInputValid(true)
		}
	}, [minLengthError, emailError])

	useEffect(() => {
		if (phoneError || cardError) {
			setInputValid(false)
		} else {
			setInputValid(true)
		}
	}, [phoneError, cardError])

	useEffect(() => {
		if (smsError) {
			setInputValid(false)
		} else {
			setInputValid(true)
		}
	}, [smsError])
	return {
		isEmpty,
		minLengthError,
		emailError,
		inputValid,
		phoneError,
		cardError,
		smsError
	}

}
import { ChangeEvent, useState } from 'react'
import { Validators, useValidate } from './useValidate'


export const useValue = (init: string, validators: Validators) => {
	const [value, setValue] = useState(init)
	const [isDirty, setDirty] = useState(false)
	const valid = useValidate(value, validators)
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const onBlur = (e: ChangeEvent) => {
		setDirty(true)
	}

	return {
		value,
		setValue,
		isDirty,
		onChange,
		onBlur,
		...valid
	}
}
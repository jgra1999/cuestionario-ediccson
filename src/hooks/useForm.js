import { useState } from 'react'

export const useForm = (initialState) => {
	const [inputs, setInputs] = useState(initialState)

	const handleChange = (e) => {
		const { name, value, type, checked, id } = e.target

		const inputRef = type === 'radio' ? id : name
		const inputType = type === 'checkbox' ? 'checkbox' : 'radio'

		setInputs((old) => ({
			...old,
			[inputRef]: type === inputType ? checked : value
		}))
	}

	return [inputs, handleChange]
}

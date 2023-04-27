import { useState } from 'react'

export const useForm = (initialState) => {
	const [inputs, setInputs] = useState(initialState)

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target

		setInputs((old) => ({
			...old,
			[name]: type === 'checkbox' ? checked : value
		}))
	}

	return [inputs, handleChange]
}

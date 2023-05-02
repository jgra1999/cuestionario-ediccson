import React, { useState } from 'react'

export default function Input({
	text,
	name,
	onChange,
	placeholderText = '',
	type = 'text'
}) {
	//TODO: Cambiar nombre del evento onChange de las props
	const [inputValidated, setInputValidated] = useState(true)
	const [validationMessage, setValidationMessage] = useState('Campo Obligatario.')

	const handleInputValidated = (e) => {
		const validation = {
			name: /^[a-zA-ZÀ-ÿ\s]{1,45}$/, // Letras y espacios, pueden llevar acentos.
			email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
			numbers: /^[0-9]+$/,
			phone: /^(\+\d{1,3})?(\d{1,4})?\s?(\d{6,10})$/
		}

		switch (e.target.type) {
			case 'text':
				if (validation.name.test(e.target.value)) {
					setInputValidated(true)
				} else {
					setInputValidated(false)
					setValidationMessage('Este campo solo acepta letras, espacios y acentos.')
				}
				break

			case 'email':
				if (validation.email.test(e.target.value)) {
					setInputValidated(true)
				} else {
					setInputValidated(false)
					setValidationMessage('Ingresa un email valido.')
				}
				break

			case 'tel':
				if (validation.phone.test(e.target.value)) {
					setInputValidated(true)
				} else {
					setInputValidated(false)
					setValidationMessage('Ingresa un teléfono valido.')
				}
				break

			case 'number':
				if (validation.numbers.test(e.target.value)) {
					setInputValidated(true)
				} else {
					setInputValidated(false)
					setValidationMessage('Ingresa un valor valido.')
				}
				break

			default:
				break
		}
	}
	return (
		<div className='flex flex-col gap-y-2 relative'>
			<label htmlFor={name} className='font-rajdhani font-semibold text-lg'>
				{text}
			</label>
			<input
				type={type}
				className='border-2 border-primary rounded-lg py-2 px-4 md:w-3/4'
				name={name}
				onChange={onChange}
				onBlur={handleInputValidated}
				placeholder={placeholderText}
			/>
			{!inputValidated ? (
				<div className='absolute -bottom-5 -left-5'>
					<p className='text-red-700 mt-1 text-xs ml-7 font-medium'>
						{validationMessage}
					</p>
				</div>
			) : (
				''
			)}
		</div>
	)
}

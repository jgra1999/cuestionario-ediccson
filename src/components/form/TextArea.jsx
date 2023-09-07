import React, { useState } from 'react'

export default function TextArea({ text, placeholder, onChange, name, rowsNumber }) {
	const [textAreaValidated, setTextAreaValidated] = useState(true)
	const [validationMessage, setValidationMessage] = useState('Campo Obligatario.')

	const handleITextAreaValidated = (e) => {
		const validation = {
			description: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/, // Letras y espacios, pueden llevar acentos.
			address: /^[a-zA-Z0-9\s,'-]*$/ // Letras, numeros, espacios, puntos y guiones
		}

		switch (e.target.name) {
			case 'company_description':
				if (validation.description.test(e.target.value)) {
					setTextAreaValidated(true)
				} else {
					setTextAreaValidated(false)
					setValidationMessage('Ingresa solo Letras y espacios.')
				}
				break
			case 'owner_address1':
				if (validation.address.test(e.target.value)) {
					setTextAreaValidated(true)
				} else {
					setTextAreaValidated(false)
					setValidationMessage('Ingresa una dirección válida.')
				}
				break
			case 'owner_address2':
				if (validation.address.test(e.target.value)) {
					setTextAreaValidated(true)
				} else {
					setTextAreaValidated(false)
					setValidationMessage('Ingresa una dirección válida.')
				}
				break
			case 'company_address1':
				if (validation.address.test(e.target.value)) {
					setTextAreaValidated(true)
				} else {
					setTextAreaValidated(false)
					setValidationMessage('Ingresa una dirección válida.')
				}
				break
			case 'company_address2':
				if (validation.address.test(e.target.value)) {
					setTextAreaValidated(true)
				} else {
					setTextAreaValidated(false)
					setValidationMessage('Ingresa una dirección válida.')
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
			<textarea
				name={name}
				id='rubro'
				rows={rowsNumber}
				className='border-2 border-primary rounded-lg py-2 px-4 md:w-3/4 resize-none'
				placeholder={placeholder}
				onChange={onChange}
				onBlur={handleITextAreaValidated}
				required
			></textarea>
			{!textAreaValidated ? (
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

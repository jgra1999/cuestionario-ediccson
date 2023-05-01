import React, { useState } from 'react'

export default function TextArea({ text, placeholder, onChange, name }) {
	const [textAreaValidated, setTextAreaValidated] = useState(true)
	const [validationMessage, setValidationMessage] = useState('Campo Obligatario.')

	const handleITextAreaValidated = (e) => {
		const validation = {
			description: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/ // Letras y espacios, pueden llevar acentos.
		}

		switch (e.target.name) {
			case 'company_description':
				if (validation.description.test(e.target.value)) {
					setTextAreaValidated(true)
				} else {
					setTextAreaValidated(false)
					setValidationMessage('Campor Requerido. Solo Letras y espacios.')
				}
				break

			default:
				break
		}
	}
	return (
		<div className='flex flex-col gap-y-2 relative'>
			<label htmlFor='rubro' className='font-rajdhani font-semibold text-lg'>
				{text}
			</label>
			<textarea
				name={name}
				id='rubro'
				rows='5'
				className='border-2 border-primary rounded-lg py-2 px-4 md:w-3/4'
				placeholder={placeholder}
				onChange={onChange}
				onBlur={handleITextAreaValidated}
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

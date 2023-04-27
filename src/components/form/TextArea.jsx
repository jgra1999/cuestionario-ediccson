import React from 'react'

export default function TextArea({ text, placeholder, onChange, name }) {
	return (
		<div className='flex flex-col gap-y-2'>
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
			></textarea>
		</div>
	)
}

import React from 'react'

export default function Input({ text, name, onChange }) {
	//TODO: Cambiar nombre del evento onChange de las prompts
	return (
		<div className='flex flex-col gap-y-2'>
			<label htmlFor='company' className='font-rajdhani font-semibold text-lg'>
				{text}
			</label>
			<input
				type='text'
				className='border-2 border-primary rounded-lg py-2 px-4 md:w-3/4'
				name={name}
				onChange={onChange}
			/>
		</div>
	)
}

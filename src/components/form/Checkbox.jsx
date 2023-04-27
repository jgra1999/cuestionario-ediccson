import React from 'react'

export default function Checkbox({ text, name, onChange, checked }) {
	//TODO: Cambiar nombre del evento onChange de las prompts
	return (
		<div>
			<input
				type='checkbox'
				id={name}
				name={name}
				className='hidden'
				onChange={onChange}
			/>
			<label
				htmlFor={name}
				className='inline-block
								py-1
					  			pr-4
					  			pl-10
								text-sm
								sm:text-lg
								font-medium
								relative
								cursor-pointer
								transition-all
								duration-300
								before:content-[""]
								before:w-4
								before:h-4
								before:inline-block
								before:border-2
								before:border-primary
								before:rounded
								before:absolute
								before:top-2
								before:left-3'
			>
				{text}
			</label>
		</div>
	)
}

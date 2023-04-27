import React from 'react'
import Title from './Title'

export default function Selection() {
	return (
		<>
			<Title
				text='Cuéntanos sobre tu emprendimiento, que tipo de compañía quieres abrir en el Estado de la
				Florida'
			/>
			<div className='flex flex-col gap-y-5'>
				<div>
					<input type='radio' name='company' id='llc' className='hidden' />
					<label
						htmlFor='llc'
						className='inline-block
								py-1
					  			pr-4
					  			pl-10
								text-sm
								w-[280px]
								sm:text-lg
								sm:w-72
								rounded
								bg-white
								border-2
								border-primary
								text-gray-600
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
								before:rounded-full
								before:absolute
								before:top-2
								before:left-3'
					>
						LLC 600$ + 150$ de Fee
					</label>
				</div>
				<div>
					<input type='radio' name='company' id='corp' className='hidden' />
					<label
						htmlFor='corp'
						className='inline-block
								py-1
					  			pr-4
					  			pl-10
								text-sm
								w-[280px]
								sm:text-lg
								sm:w-72
								rounded
								bg-white
								border-2
								border-primary
								text-gray-600
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
								before:rounded-full
								before:absolute
								before:top-2
								before:left-3'
					>
						Corp 600$ + 70$ de Fee
					</label>
				</div>
			</div>
		</>
	)
}

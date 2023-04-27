import React from 'react'

export default function Step({ text, css }) {
	return (
		<>
			<div className={`w-10 h-10 rounded-full flex items-center justify-center ${css}`}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={2}
					stroke='currentColor'
					className='w-6 h-6 text-[#f9f9f9]'
				>
					<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
				</svg>
			</div>

			<div className={`w-20 relative ${css}`}>
				<span className='absolute bottom-4 text-primary font-semibold w-full flex justify-center'>
					{text}
				</span>
			</div>
		</>
	)
}

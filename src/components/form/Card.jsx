import React from 'react'

export default function Card({ children }) {
	return (
		<div className='container mx-auto shadow w-11/12 md:w-[85%] mb-20 mt-8'>
			{children}
		</div>
	)
}

import React from 'react'
import Card from '../components/form/Card'
import Steps from '../components/steps/Steps'
import Header from '../components/Header'

export default function Layout({ children }) {
	return (
		<div>
			<Header />
			<main>
				<Card>
					<Steps />
					<div className='flex flex-col gap-y-14 px-10 md:px-20 py-12'>{children}</div>
				</Card>
			</main>
		</div>
	)
}

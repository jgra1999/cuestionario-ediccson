import React, { useState } from 'react'
import { ResultsList } from '../components/survey/ResultsList'
import { ContactList } from '../components/survey/ContactList'
import logo from '../assets/logo.png'

export default function SurveyResults() {
	const [link1, setLink1] = useState(true)
	const [link2, setLink2] = useState(false)

	const handleLink1 = () => {
		setLink1(true)
		setLink2(false)
	}

	const handleLink2 = () => {
		setLink2(true)
		setLink1(false)
	}
	const handleLogout = () => {}
	return (
		<>
			<header className='flex flex-col md:flex-row justify-around items-center py-4 bg-white shadow'>
				<img src={logo} alt='' className='w-20' />
				<nav>
					<ul className='flex justify-around items-center gap-x-10'>
						<li className='text-secondary font-semibold text-sm'>
							<button
								onClick={handleLink1}
								className={link1 ? 'text-primary' : 'text-gray-500'}
							>
								Florida
							</button>
						</li>
						<li className='text-secondary font-semibold text-sm'>
							<button
								onClick={handleLink2}
								className={link2 ? 'text-primary' : 'text-gray-500'}
							>
								Otro Estado
							</button>
						</li>
					</ul>
				</nav>
				<button
					onClick={handleLogout}
					className='py-2 px-4 bg-primary text-white font-bold rounded shadow'
				>
					Logout
				</button>
			</header>

			{link1 && <ResultsList />}

			{link2 && <ContactList />}
		</>
	)
}

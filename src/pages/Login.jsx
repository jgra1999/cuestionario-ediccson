import React, { useState, useEffect } from 'react'
import { supabase } from '../supabase/client'
import { useNavigate } from 'react-router-dom'

import logo from '../assets/logo.png'

export default function Login() {
	const [submitted, setSubmitted] = useState(false)
	const [sending, setSending] = useState(false)

	const navigate = useNavigate()

	useEffect(() => {
		supabase.auth.onAuthStateChange((event, session) => {
			if (!session) {
				navigate('/login')
			} else {
				navigate('/encuestas')
			}
		})

		// const redirect = async () => {
		// 	const {
		// 		data: { user }
		// 	} = await supabase.auth.getUser()

		// 	if (user) {
		// 		navigate('/encuestas')
		// 	}
		// // }

		// redirect()
	}, [navigate])

	const handleSubmit = async (e) => {
		e.preventDefault()

		const email = e.target.elements[0].value

		// try {
		// 	setSending(true)
		// 	await supabase.auth.signInWithOtp({
		// 		email,
		// 		options: {
		// 			emailRedirectTo: 'https://encuesta.ekonexium.com/#/encuestas'
		// 		}
		// 	})
		// } catch (error) {
		// eslint-disable-next-line no-console
		// 	console.log(error)
		// } finally {
		// 	setSending(false)
		// 	setSubmitted(true)
		// }
	}

	return (
		<div className='container w-11/12 mx-auto flex flex-col items-center justify-center gap-y-10 mt-40'>
			<img src={logo} alt='E-Konexium logo' className='w-40' />
			{submitted ? (
				<h2 className='text-2xl font-bold sm:text-4xl text-secondary'>
					Por favor revisa tu correo para iniciar sesión{' '}
				</h2>
			) : (
				<form onSubmit={handleSubmit} className='w-96'>
					<input
						type='email'
						name='email'
						placeholder='your@email.com'
						className='border-2 border-primary rounded-lg py-2 px-4 outline-none focus:outline-none w-full'
						onChange={(e) => setEmail(e.target.value)}
					/>

					<button className='bg-primary text-white font-semibold transform hover:translate-x-2 transition-transform duration-300 w-auto max-w-[120px] p-2 rounded shadow mt-5'>
						{sending ? 'Enviando...' : 'Enviar'}
					</button>
				</form>
			)}
		</div>
	)
}

import React, { useState, useEffect } from 'react'
import { supabase } from '../supabase/client'
import { Link, useNavigate } from 'react-router-dom'

import logo from '../assets/logo-nexo.png'

export default function Login() {
	const [sending, setSending] = useState(false)
	const [error, setError] = useState(false)

	const navigate = useNavigate()

	useEffect(() => {
		supabase.auth.onAuthStateChange((event, session) => {
			if (!session) {
				navigate('/login')
			} else {
				navigate('/cuestionario-resultados')
			}
		})

		const redirect = async () => {
			const {
				data: { user }
			} = await supabase.auth.getUser()

			if (user) {
				navigate('/cuestionario-resultados')
			}
		}

		redirect()
	}, [navigate])

	const handleSubmit = async (e) => {
		e.preventDefault()

		const email = e.target.elements[0].value
		const password = e.target.elements[1].value

		try {
			setSending(true)
			const { error } = await supabase.auth.signInWithPassword({
				email,
				password,
				options: {
					emailRedirectTo: 'http://localhost:5173/#/cuestionario-resultados'
				}
			})
			if (error) setError(true)
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error)
		} finally {
			setSending(false)
		}
	}

	return (
		<div className='container w-11/12 mx-auto flex flex-col items-center justify-center gap-y-10 mt-40'>
			<Link to='/'>
				<img src={logo} alt='E-Konexium logo' className='w-64' />
			</Link>
			<form onSubmit={handleSubmit} className='w-96 space-y-4'>
				<input
					type='email'
					name='email'
					placeholder='ejemplo@email.com'
					className='border-2 border-primary rounded-lg py-3 px-4 outline-none focus:outline-none w-full'
					required
				/>

				<input
					type='pass'
					name='password'
					placeholder='ingresa tu contraseña'
					className='border-2 border-primary rounded-lg py-3 px-4 outline-none focus:outline-none w-full'
					required
				/>

				<button className='bg-primary text-white font-semibold transform hover:translate-x-2 transition-transform duration-300 w-full py-3 rounded shadow mt-5'>
					{sending ? 'Enviando...' : 'Enviar'}
				</button>

				{error && (
					<div className='text-red-500 text-center font-semibold'>
						Correo electrónico o contraseña incorrectos
					</div>
				)}
			</form>
		</div>
	)
}

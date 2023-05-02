import React, { useState } from 'react'
import Header from '../components/Header'
import Card from '../components/form/Card'
import Title from '../components/form/Title'
import Input from '../components/form/Input'
import { supabase } from '../supabase/client'

export default function Contact() {
	// const [phone, setPhone] = useState('+')

	//? Código para integrar el selector de país en el input (no funciono en producción)
	// useEffect(() => {
	// 	const input = document.querySelector('input[name="client_phone"]')
	// 	window.intlTelInput(input, {})
	// }, [])

	const [sending, setSending] = useState(false)
	const [sended, setSended] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
		const name = e.target.elements[0].value
		const phone = e.target.elements[1].value
		const email = e.target.elements[2].value
		const state = e.target.elements[3].value

		const data = {
			client_name: name,
			client_email: email,
			client_phone: phone,
			client_company_state: state
		}

		try {
			setSending(true)
			// eslint-disable-next-line no-unused-vars
			const { error } = await supabase.from('contacto').insert(data)
		} catch (error) {
			// eslint-disable-next-line no-console
			console.error(error)
		} finally {
			setSending(false)
			setSended(true)
			e.target.reset()
		}
	}
	return (
		<>
			<Header />
			<Card>
				<div className='flex flex-col gap-y-14 px-10 md:px-20 py-12 relative'>
					<div>
						<Title text='Abre tu empresa en cualquier estado de EE.UU. con nuestra ayuda' />
						<p className='mt-2 text-gray-500 text-sm font-medium'>
							Si quieres abrir tu empresa en otro estado de EE.UU. que no sea
							Florida, no te preocupes. Nosotros te podemos ayudar a cumplir con
							todos los trámites y requisitos necesarios para que tu negocio sea
							exitoso. Solo tienes que llenar el formulario que encontrarás a
							continuación y enviárnoslo. Nos pondremos en contacto contigo lo antes
							posible por tu correo electrónico o número telefónico para ofrecerte
							nuestra asesoría personalizada y resolver todas tus dudas.
						</p>
					</div>

					<form
						className='grid grid-cols-1 md:grid-cols-2 gap-y-10'
						onSubmit={handleSubmit}
					>
						<Input text='Nombre y Apellido' name='client_name' />
						<Input
							text='Teléfono con condigo de país'
							name='client_phone'
							type='tel'
							placeholderText='+00 123456789'
						/>
						<Input text='Correo electrónico' name='client_email' type='email' />
						<Input
							text='Estado'
							name='client_company_state'
							placeholderText='Indícanos en que estado quieres abrir tu empresa'
						/>

						<button
							type='submit'
							className='bg-primary text-white py-3 px-6 md:px-10 rounded-lg md:text-lg w-[150px]'
						>
							{sending ? 'Enviando...' : 'Enviar'}
						</button>
					</form>
					{sended && (
						<p className='text-green-500 text-xs font-medium absolute bottom-5'>
							Información enviada con éxito, te contactaremos pronto.
						</p>
					)}
				</div>
				{/* <button onClick={prueba}>click</button> */}
			</Card>
		</>
	)
}

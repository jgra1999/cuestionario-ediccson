import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Card from '../components/form/Card'
import Title from '../components/form/Title'
import Input from '../components/form/Input'
import { formStore } from '../store/form'

export default function Contact() {
	const { contactForm, setContactForm } = formStore()
	const [phone, setPhone] = useState('+')

	useEffect(() => {
		const input = document.querySelector('input[name="client_phone"]')
		window.intlTelInput(input, {})
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault()
		const name = e.target.elements[0].value
		const email = e.target.elements[2].value
		const state = e.target.elements[3].value

		const data = {
			client_name: name,
			client_email: email,
			client_phone: phone,
			client_company_state: state
		}

		setContactForm(data)
	}
	return (
		<>
			<Header />
			<Card>
				<div className='flex flex-col gap-y-14 px-10 md:px-20 py-12'>
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
						className='grid grid-cols-1 md:grid-cols-2 gap-y-5'
						onSubmit={handleSubmit}
					>
						<Input text='Nombre y Apellido' name='client_name' />
						<div className='flex flex-col gap-y-2 '>
							<label
								htmlFor='client_phone'
								className='font-rajdhani font-semibold text-lg'
							>
								Teléfono
							</label>
							<input
								type='tel'
								name='client_phone'
								className='border-2 border-primary rounded-lg py-2 px-4 min-w-[72vw] md:min-w-[0]'
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</div>
						<Input text='Correo electrónico' name='client_email' />
						<Input
							text='Estado'
							name='client_company_state'
							placeholderText='Indícanos en que estado quieres abrir tu empresa'
						/>

						<button
							type='submit'
							className='bg-primary text-white py-3 px-6 md:px-10 rounded-lg md:text-lg w-[150px]'
						>
							Enviar
						</button>
					</form>
				</div>
				<button onClick={() => console.log(contactForm)}>click</button>
			</Card>
		</>
	)
}

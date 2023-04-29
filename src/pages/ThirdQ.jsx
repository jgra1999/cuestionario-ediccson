import React, { useEffect, useState } from 'react'
// import { useForm } from '../hooks/useForm'
import Layout from '../layout/Layout'

import Button from '../components/Button'
// import Input from '../components/form/Input'
import Title from '../components/form/Title'

import { formStore } from '../store/form'

export default function ThirdQ() {
	const { stepFront, stepBack, setFormFields, formFields } = formStore()

	const [repName, setRepName] = useState('')
	const [repEmail, setRepEmail] = useState('')
	const [repPhone, setRepPhone] = useState('+')

	useEffect(() => {
		const input = document.querySelector('input[name="representative_phone"]')
		window.intlTelInput(input, {})
	}, [])

	const data = {
		representative_name: repName,
		representative_email: repEmail,
		representative_phone: repPhone
	}

	const handleStore = () => {
		stepFront()
		setFormFields(data)
	}

	return (
		<Layout>
			<Title text='Información del representante de la empresa en este proceso' />

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-y-5'>
				<div className='flex flex-col gap-y-2 '>
					<label
						htmlFor='representative_name'
						className='font-rajdhani font-semibold text-lg'
					>
						Nombre y Apellido
					</label>
					<input
						type='text'
						name='representative_name'
						className='border-2 border-primary rounded-lg py-2 px-4 md:w-3/4'
						value={repName}
						onChange={(e) => setRepName(e.target.value)}
					/>
				</div>
				<div className='flex flex-col gap-y-2 '>
					<label
						htmlFor='representative_phone'
						className='font-rajdhani font-semibold text-lg'
					>
						Teléfono
					</label>
					<input
						type='tel'
						name='representative_phone'
						className='border-2 border-primary rounded-lg py-2 px-4 min-w-[72vw] md:min-w-[0]'
						value={repPhone}
						onChange={(e) => setRepPhone(e.target.value)}
					/>
				</div>
				<div className='flex flex-col gap-y-2 '>
					<label
						htmlFor='representative_email'
						className='font-rajdhani font-semibold text-lg'
					>
						Correo electrónico
					</label>
					<input
						type='text'
						name='representative_email'
						className='border-2 border-primary rounded-lg py-2 px-4 md:w-3/4'
						value={repEmail}
						onChange={(e) => setRepEmail(e.target.value)}
					/>
				</div>
			</div>

			<div className='w-full flex items-center justify-between'>
				<Button
					url='/2da-pregunta'
					css={'border-2 border-gray-500 text-gray-500'}
					text='Anterior'
					event={stepBack}
				/>
				<Button
					url='/4ta-pregunta'
					css={'bg-primary text-white'}
					text='Siguiente'
					event={handleStore}
				/>
			</div>
			<button onClick={() => console.log(formFields)}>click</button>
		</Layout>
	)
}

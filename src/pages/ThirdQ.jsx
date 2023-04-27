import React from 'react'
import { useForm } from '../hooks/useForm'
import Layout from '../layout/Layout'

import Button from '../components/Button'
import Input from '../components/form/Input'
import Title from '../components/form/Title'

import { surveyStore } from '../store/survey'

export default function ThirdQ() {
	const { stepFront, stepBack, setForm, form } = surveyStore()
	const [inputs, handleChange] = useForm(form)

	const handleStore = () => {
		stepFront()
		setForm(inputs)
	}

	return (
		<Layout>
			<Title text='Información del representante de la empresa' />

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-y-5'>
				<Input text='Nombre y Apellido' name='owner' onChange={handleChange} />
				<Input text='Email' name='email' onChange={handleChange} />
				<Input
					text='Teléfono con el Código del país'
					name='phone'
					onChange={handleChange}
				/>
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
		</Layout>
	)
}

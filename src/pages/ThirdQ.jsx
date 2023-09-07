import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import Layout from '../layout/Layout'

import Button from '../components/Button'
import Input from '../components/form/Input'
import Title from '../components/form/Title'

import { formStore } from '../store/form'

export default function ThirdQ() {
	const { stepFront, stepBack, setFormFields, formFields } = formStore()
	const [inputs, handleChange] = useForm(formFields)
	const navigate = useNavigate()

	const handleStore = (e) => {
		e.preventDefault()
		stepFront()
		setFormFields(inputs)
		navigate('/cuarta-pregunta')
	}

	return (
		<Layout>
			<Title text='Información del representante de la empresa en este proceso' />

			<form className='space-y-14' onSubmit={handleStore}>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-y-10'>
					<Input
						text='Nombre y Apellido *'
						name='representative_name'
						onChange={handleChange}
						placeholderText={formFields.representative_name}
						isRequired={true}
					/>
					<Input
						text='Teléfono con código de país *'
						type='tel'
						name='representative_phone'
						onChange={handleChange}
						placeholderText={formFields.representative_phone}
						isRequired={true}
					/>
					<Input
						text='Correo electrónico *'
						type='email'
						name='representative_email'
						onChange={handleChange}
						placeholderText={formFields.representative_email}
						isRequired={true}
					/>
				</div>

				<div className='w-full flex items-center justify-between'>
					<Button
						url='/segunda-pregunta'
						css={'border-2 border-gray-500 text-gray-500'}
						text='Anterior'
						event={stepBack}
					/>

					<button
						type='submit'
						className='py-3 px-6 md:px-10 rounded-lg md:text-lg text-white bg-primary'
					>
						Siguiente
					</button>
				</div>
			</form>
			{/* <button onClick={() => console.log(formFields)}>click</button> */}
			{/* <button onClick={() => console.log(companyNames)}>click 2</button> */}
		</Layout>
	)
}

import React from 'react'
import { useForm } from '../hooks/useForm'
import Layout from '../layout/Layout'

import Button from '../components/Button'
import Input from '../components/form/Input'
import Title from '../components/form/Title'

import { formStore } from '../store/form'

export default function ThirdQ() {
	const { stepFront, stepBack, setFormFields, formFields } = formStore()

	// const [repName, setRepName] = useState('')
	// const [repEmail, setRepEmail] = useState('')
	// const [repPhone, setRepPhone] = useState('+')

	// useEffect(() => {
	// 	const input = document.querySelector('input[name="representative_phone"]')
	// 	window.intlTelInput(input, {})
	// }, [])
	const [inputs, handleChange] = useForm(formFields)

	const handleStore = () => {
		stepFront()
		setFormFields(inputs)
	}

	return (
		<Layout>
			<Title text='Información del representante de la empresa en este proceso' />

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-y-10'>
				<Input
					text='Nombre y Apellido'
					name='representative_name'
					onChange={handleChange}
					placeholderText={formFields.representative_name}
				/>
				<Input
					text='Teléfono con código de país'
					type='tel'
					name='representative_phone'
					onChange={handleChange}
					placeholderText={formFields.representative_phone}
				/>
				<Input
					text='Correo electrónico'
					type='email'
					name='representative_email'
					onChange={handleChange}
					placeholderText={formFields.representative_email}
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
			{/* <button onClick={() => console.log(formFields)}>click</button> */}
			{/*<button onClick={() => console.log(companyNames)}>click 2</button> */}
		</Layout>
	)
}

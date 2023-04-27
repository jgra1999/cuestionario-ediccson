import React from 'react'
import Layout from '../layout/Layout'

import Button from '../components/Button'
import Title from '../components/form/Title'
import TextArea from '../components/form/TextArea'
import Checkbox from '../components/form/Checkbox'
import Input from '../components/form/Input'
import Form from '../components/form/Form'
import { surveyStore } from '../store/survey'
import { useForm } from '../hooks/useForm'

export default function SecondQ() {
	const { stepFront, stepBack, setForm, form } = surveyStore()
	const [inputs, handleChange] = useForm(form)

	const handleStore = () => {
		stepFront()
		setForm(inputs)
	}

	return (
		<Layout>
			<Title text='Proporciona información sobre tu empresa' />

			<Form>
				<Input
					text='Indícanos los posibles nombres para su empresa'
					onChange={handleChange}
					name='company'
				/>

				<TextArea
					text='Rubro Comercial'
					placeholder='Indícanos el detalle comercial al cual se dedicara tu empresa, háblanos de que producto venderás o que servicio ofrecerás'
					onChange={handleChange}
					name='company_description'
				/>

				<Checkbox
					text='Espera contratar personas en los próximos seis meses'
					name='recruiting_staff'
					onChange={handleChange}
				/>
			</Form>

			<div className='w-full flex items-center justify-between'>
				<Button
					url='/'
					css={'border-2 border-gray-500 text-gray-500'}
					text='Anterior'
					event={stepBack}
				/>
				<Button
					url='/3era-pregunta'
					css={'bg-primary text-white'}
					text='Siguiente'
					event={handleStore}
				/>
			</div>
		</Layout>
	)
}

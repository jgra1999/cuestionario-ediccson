import React from 'react'
import Layout from '../layout/Layout'

import Checkbox from '../components/form/Checkbox'
import Button from '../components/Button'
import Title from '../components/form/Title'
import { surveyStore } from '../store/survey'
import { useForm } from '../hooks/useForm'

export default function SixthQ() {
	const { stepFront, stepBack, form, setForm } = surveyStore()
	const [inputs, handleChange] = useForm(form)

	const handleStore = () => {
		stepFront()
		setForm(inputs)
	}

	return (
		<Layout>
			<div>
				<Title text='Imagen corporativa digital' />
				<p className='mt-2 text-gray-500 text-sm'>
					Si desea información sobre como empezar su imagen corporativa digital por
					favor marque la siguiente casilla, de lo contrario avance al siguiente
					paso.
				</p>
			</div>
			<Checkbox
				text='Quieres nuestra asesoría?'
				name='consultancy'
				onChange={handleChange}
			/>

			<div className='w-full flex items-center justify-between'>
				<Button
					url='/5ta-pregunta'
					css={'border-2 border-gray-500 text-gray-500'}
					text='Anterior'
					event={stepBack}
				/>
				<Button
					url='/confirmacion'
					css={'bg-primary text-white'}
					text='Siguiente'
					event={handleStore}
				/>
			</div>
		</Layout>
	)
}

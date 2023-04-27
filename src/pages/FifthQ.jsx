import React, { useRef } from 'react'
import Layout from '../layout/Layout'

import Button from '../components/Button'
import Title from '../components/form/Title'
import Checkbox from '../components/form/Checkbox'
import Input from '../components/form/Input'
import { surveyStore } from '../store/survey'
import { useForm } from '../hooks/useForm'

export default function Fifth() {
	const { stepFront, stepBack, form, setForm } = surveyStore()
	const [inputs, handleChange] = useForm(form)
	const inputRef = useRef(null)

	const handleStore = () => {
		stepFront()
		setForm(inputs)
	}

	const handleToggle = (e) => {
		if (e.target.checked) {
			inputRef.current.classList.remove('hidden')
		} else {
			inputRef.current.classList.add('hidden')
		}
	}

	return (
		<Layout>
			<div>
				<Title text='Dirección de la empresa' />
				<p className='mt-2 text-gray-500 text-sm'>
					Si no cuentas con una dirección para tu empresa, te ofrecemos el plan
					virtual, te brindaremos nuestra dirección para que la use de forma Virtual
					por 1 año, escaneo y envió de hasta 5 documentos. Esta dirección solo se
					utilizara para fines comerciales no es un courier.
				</p>
			</div>

			<div>
				<Checkbox
					text='Plan virtual (Costo de renovación luego del 1er año de $370)'
					name='virtual_address'
					onChange={handleChange}
				/>
				<Checkbox
					text='Ya tengo dirección'
					name='have_address'
					onChange={handleToggle}
				/>

				<div className='mt-5 hidden' ref={inputRef}>
					<Input
						text='Indícanos tu dirección'
						name='company_address'
						onChange={handleChange}
					/>
				</div>
			</div>

			<div className='w-full flex items-center justify-between'>
				<Button
					url='/4ta-pregunta'
					css={'border-2 border-gray-500 text-gray-500'}
					text='Anterior'
					event={stepBack}
				/>
				<Button
					url='/6ta-pregunta'
					css={'bg-primary text-white'}
					text='Siguiente'
					event={handleStore}
				/>
			</div>
		</Layout>
	)
}

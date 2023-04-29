import React, { useState } from 'react'
import Layout from '../layout/Layout'

import Button from '../components/Button'
import Title from '../components/form/Title'
import TextArea from '../components/form/TextArea'
import Checkbox from '../components/form/Checkbox'
import { useForm } from '../hooks/useForm'
import { formStore } from '../store/form'

export default function SecondQ() {
	const { setCompanyNames, stepFront, stepBack, setFormFields } = formStore()

	const [companyName1, setCompanyName1] = useState('')
	const [companyName2, setCompanyName2] = useState('')
	const [companyName3, setCompanyName3] = useState('')
	const [arrayNames, setArrayNames] = useState([])

	const [inputs, handleChange] = useForm({})

	const handleCompanyNames = (e) => {
		e.preventDefault()
		setArrayNames([companyName1, companyName2, companyName3])
	}

	const handleStore = () => {
		setFormFields(inputs)
		setCompanyNames(arrayNames)
		stepFront()
	}

	return (
		<Layout>
			<Title text='Proporciona información sobre tu empresa' />

			<div className='flex flex-col gap-y-2'>
				<label htmlFor='company' className='font-rajdhani font-semibold text-lg'>
					Indícanos 3 posibles nombres para tu empresa
				</label>
				<div className='grid grid-cols-2 gap-y-4'>
					<input
						type='text'
						className='border-2 border-primary rounded-lg py-2 px-4 md:w-3/4'
						onBlur={(e) => setCompanyName1(e.target.value)}
					/>
					<input
						type='text'
						className='border-2 border-primary rounded-lg py-2 px-4 md:w-3/4'
						onBlur={(e) => setCompanyName2(e.target.value)}
					/>
					<input
						type='text'
						className='border-2 border-primary rounded-lg py-2 px-4 md:w-3/4'
						onBlur={(e) => setCompanyName3(e.target.value)}
					/>

					<button
						className='py-2 px-3 md:px-10 rounded-lg bg-primary text-white w-[200px]'
						onClick={handleCompanyNames}
					>
						Guardar
					</button>
				</div>
			</div>

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

import React, { useState } from 'react'
import Layout from '../layout/Layout'

import Button from '../components/Button'
import Title from '../components/form/Title'
import TextArea from '../components/form/TextArea'
import Checkbox from '../components/form/Checkbox'
import { useForm } from '../hooks/useForm'
import { formStore } from '../store/form'
import { useNavigate } from 'react-router-dom'

export default function SecondQ() {
	const { setCompanyNames, stepFront, stepBack, setFormFields, formFields } =
		formStore()

	const [companyNameSaved, setCompanyNameSaved] = useState(false)

	const [companyName1, setCompanyName1] = useState('')
	const [companyName2, setCompanyName2] = useState('')
	const [companyName3, setCompanyName3] = useState('')
	const [arrayNames, setArrayNames] = useState([])

	const [inputs, handleChange] = useForm(formFields)
	const navigate = useNavigate()

	const handleCompanyNames = (e) => {
		e.preventDefault()
		setArrayNames([companyName1, companyName2, companyName3])
		setCompanyNameSaved(true)
	}

	const handleStore = (e) => {
		e.preventDefault()
		setCompanyNames(arrayNames)
		setFormFields(inputs)
		stepFront()
		navigate('/tercera-pregunta')
	}

	return (
		<Layout>
			<Title text='Proporciónanos la siguiente información sobre tu empresa' />

			<form onSubmit={handleStore} className='space-y-14'>
				<div className='flex flex-col gap-y-2'>
					<label htmlFor='company' className='font-rajdhani font-semibold text-lg'>
						Indícanos 3 posibles nombres para tu empresa
					</label>
					<div className='grid grid-cols-2 gap-y-4'>
						<input
							type='text'
							className='border-2 border-primary rounded-lg py-2 px-4 md:w-3/4'
							onBlur={(e) => setCompanyName1(e.target.value)}
							required
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
							className='py-2 px-3 md:px-10 rounded-lg bg-gray-400 active:bg-primary text-white w-[180px]'
							onClick={handleCompanyNames}
							type='button'
						>
							Guardar
						</button>
					</div>
				</div>
				<TextArea
					text='Rubro Comercial *'
					placeholder={formFields.company_description}
					onChange={handleChange}
					name='company_description'
					rowsNumber={5}
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

					{companyNameSaved ? (
						<button
							type='submit'
							className='py-3 px-6 md:px-10 rounded-lg md:text-lg text-white bg-primary'
						>
							Siguiente
						</button>
					) : (
						<div className='py-3 px-6 md:px-10 rounded-lg md:text-lg bg-gray-500 text-white'>
							Siguiente
						</div>
					)}
				</div>
			</form>
		</Layout>
	)
}

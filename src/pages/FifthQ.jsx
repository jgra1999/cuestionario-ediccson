import React, { useRef, useState } from 'react'
import Layout from '../layout/Layout'

import Button from '../components/Button'
import Title from '../components/form/Title'
// import Checkbox from '../components/form/Checkbox'
import Input from '../components/form/Input'
import { useForm } from '../hooks/useForm'
import { formStore } from '../store/form'
import TextArea from '../components/form/TextArea'
import RadioButton from '../components/form/RadioButton'

export default function Fifth() {
	const inputRef = useRef(null)
	const [inputChecked1, setInputChecked1] = useState(false)
	const [inputChecked2, setInputChecked2] = useState(false)

	const { stepFront, stepBack, setFormFields, formFields } = formStore()
	const [inputs, handleChange] = useForm(formFields)

	const handleStore = () => {
		stepFront()
		setFormFields(inputs)
	}

	const handleChecked = (e) => {
		/* if (e.target.checked) {
			setInputChecked1(true)
			handleChange(e)
		} else {
			setInputChecked1(false)
		} */
		if (e.target.id === 'virtual_address') {
			setInputChecked1(true)
			setInputChecked2(false)
			handleChange(e)
		} else {
			setInputChecked2(true)
		}
		// console.log(e)
	}

	/* const handleToggle = (e) => {
		if (e.target.checked) {
			inputRef.current.classList.remove('hidden')
			inputRef.current.classList.add('grid')
			setInputChecked2(true)
			setInputChecked1(false)
		} else {
			inputRef.current.classList.add('hidden')
			inputRef.current.classList.remove('grid')
			setInputChecked2(false)
		}
	} */

	return (
		<Layout>
			<div>
				<Title text='Dirección de la empresa' />
				<p className='mt-2 text-gray-500 text-sm'>
					Si no cuentas con una dirección para tu empresa, te ofrecemos el plan
					virtual por 1 año, escaneo y envió de hasta 5 documentos. Esta dirección
					solo se utilizara para fines comerciales no es un &ldquo;Courier&rdquo;.
				</p>
			</div>

			<div>
				{/* <Checkbox
					text='Dirección virtual'
					name='virtual_address'
					onChange={handleChecked}
				/>
				<Checkbox
					text='Ya tengo dirección'
					name='have_address'
					onChange={handleToggle}
				/> */}

				<div>
					<RadioButton
						name='virtual_address'
						text='Dirección virtual'
						event={handleChecked}
					/>
					<RadioButton
						name='have_address'
						text='Ya tengo dirección'
						event={handleChecked}
					/>
				</div>

				{inputChecked2 && (
					<div
						className='grid grid-cols-1 md:grid-cols-2 gap-y-5 mt-8 '
						ref={inputRef}
					>
						<TextArea
							text='Dirección Principal'
							name='company_address1'
							onChange={handleChange}
							placeholderText={formFields.company_address1}
							rowsNumber={1}
						/>

						<TextArea
							text='Dirección Secundario'
							name='company_address2'
							onChange={handleChange}
							placeholderText={formFields.company_address2}
							rowsNumber={1}
						/>

						<div className='flex flex-col gap-y-2'>
							<label
								htmlFor='company'
								className='font-rajdhani font-semibold text-lg'
							>
								País
							</label>
							<input
								type='text'
								className='border-2 border-gray-400 rounded-lg py-2 px-4 md:w-3/4 text-gray-400 cursor-not-allowed'
								value='Estados Unidos'
								disabled
							/>
						</div>
						<div className='flex flex-col gap-y-2'>
							<label
								htmlFor='company'
								className='font-rajdhani font-semibold text-lg'
							>
								Estado
							</label>
							<input
								type='text'
								className='border-2 border-gray-400 rounded-lg py-2 px-4 md:w-3/4 text-gray-400 cursor-not-allowed'
								value='Florida'
								disabled
							/>
						</div>
						<Input
							text='Ciudad'
							name='company_city'
							onChange={handleChange}
							placeholderText={formFields.company_city}
						/>
						<Input
							text='Código Zip'
							name='company_zip'
							onChange={handleChange}
							type='number'
							placeholderText={formFields.company_zip}
						/>
					</div>
				)}
			</div>

			<div className='w-full flex items-center justify-between'>
				<Button
					url='/cuarta-pregunta'
					css={'border-2 border-gray-500 text-gray-500'}
					text='Anterior'
					event={stepBack}
				/>
				{inputChecked1 || inputChecked2 ? (
					<Button
						url='/fin-del-proceso'
						css={'bg-primary text-white'}
						text='Siguiente'
						event={handleStore}
					/>
				) : (
					<div className='py-3 px-6 md:px-10 rounded-lg md:text-lg bg-gray-500 text-white'>
						Siguiente
					</div>
				)}
			</div>
			{/* <button onClick={() => console.log(formFields)}>click</button> */}
		</Layout>
	)
}

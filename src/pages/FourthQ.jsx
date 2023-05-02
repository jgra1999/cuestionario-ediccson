import React from 'react'
import Layout from '../layout/Layout'

import Button from '../components/Button'
import Title from '../components/form/Title'

// import Members from '../components/form/Members'
import { useForm } from '../hooks/useForm'
import { formStore } from '../store/form'
import Input from '../components/form/Input'
import TextArea from '../components/form/TextArea'

export default function FourthQ() {
	// const [membersNumber, setMembersNumber] = useState(1)

	const { stepFront, stepBack, setFormFields, formFields } = formStore()
	const [inputs, handleChange] = useForm(formFields)

	const handleStore = () => {
		stepFront()
		setFormFields(inputs)
	}

	return (
		<Layout>
			<div>
				<Title text='Ingresa los datos del propietario de la empresa' />
				<p className='mt-2 text-gray-500 text-sm'>
					Para abrir una empresa, algunos datos personales, como tu nombre,
					apellido,numero de identificación y dirección, Estos datos son necesarios
					para generar el contrato de servicio y el registro mercantil de tu empresa.
					Por favor, rellena el formulario con la información solicitada y haz clic
					en continuar. Tus datos serán tratados con confidencialidad y seguridad.
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-y-10'>
				<Input
					text='Nombre y Apellido'
					name='owner_name'
					onChange={handleChange}
					placeholderText={formFields.owner_name}
				/>
				<TextArea
					text='Dirección Principal'
					name='owner_address1'
					onChange={handleChange}
					placeholderText={formFields.owner_address1}
					rowsNumber={1}
				/>

				<TextArea
					text='Dirección Secundaria'
					name='owner_address2'
					onChange={handleChange}
					placeholderText={formFields.owner_address2}
					rowsNumber={1}
				/>

				<Input
					text='País'
					name='owner_country'
					onChange={handleChange}
					placeholderText={formFields.owner_country}
				/>
				<Input
					text='Estado'
					name='owner_state'
					onChange={handleChange}
					placeholderText={formFields.owner_state}
				/>
				<Input
					text='Ciudad'
					name='owner_city'
					onChange={handleChange}
					placeholderText={formFields.owner_city}
				/>
				<Input
					text='Código Zip'
					name='owner_zip'
					type='number'
					onChange={handleChange}
					placeholderText={formFields.owner_zip}
				/>
				<Input
					text='SSN, ITIN o EIN'
					name='owner_id_num'
					type='number'
					onChange={handleChange}
					placeholderText={formFields.owner_id_num}
				/>
			</div>

			{/* {membersNumber === 2 ? <Members /> : ''}

			<button
				className='py-3 px-6 rounded-lg text-sm bg-gray-400 text-white w-48'
				onClick={() => setMembersNumber(2)}
			>
				Agregar otro Miembro
			</button> */}

			<div className='w-full flex items-center justify-between'>
				<Button
					url='/3era-pregunta'
					css={'border-2 border-gray-500 text-gray-500'}
					text='Anterior'
					event={stepBack}
				/>
				<Button
					url='/5ta-pregunta'
					css={'bg-primary text-white'}
					text='Siguiente'
					event={handleStore}
				/>
			</div>
			{/* <button onClick={() => console.log(formFields)}>click</button> */}
		</Layout>
	)
}

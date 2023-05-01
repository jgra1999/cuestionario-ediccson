import React from 'react'
import Layout from '../layout/Layout'

import Button from '../components/Button'
import Title from '../components/form/Title'

// import Members from '../components/form/Members'
import { useForm } from '../hooks/useForm'
import { formStore } from '../store/form'
import Input from '../components/form/Input'

export default function FourthQ() {
	// const [membersNumber, setMembersNumber] = useState(1)

	const { stepFront, stepBack, setFormFields, formFields, counter } = formStore()
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
				<Input text='Nombre' name='owner_first_name' onChange={handleChange} />
				<Input text='Apellido' name='owner_Last_name' onChange={handleChange} />
				<Input
					text='Dirección Principal'
					name='owner_address1'
					onChange={handleChange}
				/>

				<Input
					text='Dirección Secundaria'
					name='owner_address2'
					onChange={handleChange}
				/>

				<Input text='País' name='owner_country' onChange={handleChange} />
				<Input text='Estado' name='owner_state' onChange={handleChange} />
				<Input text='Ciudad' name='owner_city' onChange={handleChange} />
				<Input
					text='Código Zip'
					name='owner_zip'
					type='number'
					onChange={handleChange}
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
			{/* <button onClick={() => console.log(counter)}>click</button> */}
		</Layout>
	)
}

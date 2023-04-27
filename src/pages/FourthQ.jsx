import React from 'react'
import Layout from '../layout/Layout'

import Button from '../components/Button'
import Title from '../components/form/Title'

import Members from '../components/form/Members'
import { surveyStore } from '../store/survey'
import { useForm } from '../hooks/useForm'

export default function FourthQ() {
	// const [membersNumber, setMembersNumber] = useState(1)

	const { stepFront, stepBack, setForm, form } = surveyStore()
	const [inputs, handleChange] = useForm(form)

	const handleStore = () => {
		stepFront()
		setForm(inputs)
	}

	return (
		<Layout>
			<div>
				<Title text='¿Quienes conformaran la empresa?' />
				<p className='mt-2 text-gray-500 text-sm'>
					Por favor indícanos datos personales de la (s) personas que conformaran tu
					empresa. NO es obligatorio tener SSN o ITIN sin embargo si lo posees seria
					conveniente que nos indicaras cual es.
				</p>
			</div>

			<Members event={handleChange} />

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
		</Layout>
	)
}

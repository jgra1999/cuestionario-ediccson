import React from 'react'
import { surveyStore } from '../store/survey'
import Layout from '../layout/Layout'
import Title from '../components/form/Title'
import Button from '../components/Button'

export default function Confirmation() {
	const { stepBack } = surveyStore()
	return (
		<Layout>
			<div>
				<Title text='Fin del Proceso' />
				<p className='mt-2 text-gray-500 text-sm'>
					Finalicemos el proceso de apertura de empresa, haz click en el boton de
					finalizar, seras enviado a nuestras pasarelas de pago para finalizar el
					proceso.
				</p>
			</div>
			<div className='w-full flex items-center justify-between'>
				<Button
					url='/5ta-pregunta'
					css={'border-2 border-gray-500 text-gray-500'}
					text='Anterior'
					event={stepBack}
				/>
				<a
					href='https://iventium.com/producto/creacion-de-empresa/'
					className='py-3 px-6 md:px-10 rounded-lg md:text-lg bg-primary text-white'
				>
					Finalizar
				</a>
			</div>
			{/* <button onClick={() => console.log(form)}>click</button> */}
		</Layout>
	)
}

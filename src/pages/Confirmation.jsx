import React from 'react'
import Layout from '../layout/Layout'
import Title from '../components/form/Title'
import Button from '../components/Button'
import { formStore } from '../store/form'

export default function Confirmation() {
	const { stepBack } = formStore()
	return (
		<Layout>
			<div>
				<Title text='Estás a un paso de abrir tu empresa' />
				<p className='mt-2 text-gray-500 text-sm'>
					¡Felicitaciones por completar el cuestionario! Ahora solo falta un paso más
					para abrir tu empresa: hacer el pago correspondiente. Haz clic en el botón
					de finalizar y serás enviado a nuestras pasarelas de pago seguras y
					confiables. Una vez que hayas hecho el pago, recibirás un correo
					electrónico con la confirmación y los próximos pasos a seguir. ¡Gracias por
					confiar en nosotros!
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

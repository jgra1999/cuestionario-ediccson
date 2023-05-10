import React from 'react'
import Layout from '../layout/Layout'
import Button from '../components/Button'
import Title from '../components/form/Title'
import { Link } from 'react-router-dom'
import { formStore } from '../store/form'

export default function App() {
	const { stepFront } = formStore()
	return (
		<>
			<Layout>
				<div>
					<Title
						text='Para empezar, este es nuestro costo por formalizar tu empresa en Estados Unidos. Al final de este cuestionario, se te generará un código de expediente que deberás guardar para continuar con el proceso. Luego serás redirigido a nuestra plataforma de pago, por favor ten a la mano todos los documentos que necesites. 
'
					/>
					<p className='mt-2 text-gray-500 text-sm font-medium'>
						Este cuestionario está diseñado para ayudarte a abrir una empresa en el
						estado de Florida, siguiendo los requisitos legales y fiscales
						correspondientes. Si estás interesado en{' '}
						<span className='font-bold'>
							abrir tu empresa en otro estado de EE.UU
						</span>
						, por favor haz click en el siguiente enlace y{' '}
						<Link to='/contacto' className='text-blue-800 hover:text-blue-700'>
							comunícate con nosotros.{' '}
						</Link>
						Estaremos encantados de asesorarte y guiarte en el proceso.
					</p>
				</div>
				<div className='py-1.5 px-4 border-2 border-primary rounded w-72'>
					<p className='text-sm lg:text-lg'>LLC $699 (Fee incluido)</p>
				</div>

				<div className='w-full flex justify-end'>
					{/* <Button css={'border-2 border-gray-500 text-gray-500'} text='Anterior' /> */}
					<Button
						url='/2da-pregunta'
						css={'bg-primary text-white'}
						text='Siguiente'
						event={stepFront}
					/>
				</div>
			</Layout>
		</>
	)
}

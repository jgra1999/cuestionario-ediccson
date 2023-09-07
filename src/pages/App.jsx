import React from 'react'
import Layout from '../layout/Layout'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { formStore } from '../store/form'

export default function App() {
	const { stepFront } = formStore()
	return (
		<>
			<Layout>
				<div>
					<p className='mt-2 text-gray-700 font-medium'>
						¡Da el primer paso hacia el éxito empresarial con nuestro cuestionario
						personalizado! Diseñado meticulosamente y cumpliendo con todos los
						requisitos legales y fiscales para ayudarte a abrir tu empresa en
						Florida, EE. UU.{' '}
						<span className='font-bold'>
							¿Interesado en expandirte a otros estados?
						</span>
						, por favor haz click en el siguiente enlace y{' '}
						<Link to='/contacto' className='text-yellow-300 hover:text-primary'>
							contáctanos de inmediato.{' '}
						</Link>
						Nuestro equipo de expertos estará encantado de brindarte asesoramiento y
						una guía excepcional en todo el proceso.
					</p>
					<br />
					<p className='mt-2 text-gray-700 font-medium'>
						Prepárate para avanzar a la siguiente etapa en nuestra plataforma de
						pago. Asegúrate de tener todos tus documentos esenciales a mano, ¡el
						éxito está a solo unos pasos de distancia!
					</p>
				</div>
				<div className='py-1.5 px-4 border-2 border-primary rounded w-56'>
					<p className='text-sm lg:text-lg'>LLC $699 (Fee incluido)</p>
				</div>

				<div className='w-full flex justify-end'>
					{/* <Button css={'border-2 border-gray-500 text-gray-500'} text='Anterior' /> */}
					<Button
						url='/segunda-pregunta'
						css={'bg-primary text-white'}
						text='Siguiente'
						event={stepFront}
					/>
				</div>
			</Layout>
		</>
	)
}

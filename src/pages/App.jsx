import React from 'react'
import Layout from '../layout/Layout'
import Button from '../components/Button'
// import { useSurveyContext } from '../hooks/useSurveyContext.js'
import Title from '../components/form/Title'
import { surveyStore } from '../store/survey'

export default function App() {
	// const { stepFront } = useSurveyContext()
	const { stepFront } = surveyStore()
	return (
		<>
			<Layout>
				<Title
					text='Para empezar este es nuestro costo por formalizar tu empresa en el Estado de la Florida, 
						al final seras redirigido con nuestra plataforma de pago, por favor ten a la mano todos los documentos que necesites. 
'
				/>
				<div className='py-1.5 px-4 border-2 border-primary rounded w-72'>
					<p className='text-sm lg:text-lg'>LLC $599 + $125 (tasa estadal)</p>
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

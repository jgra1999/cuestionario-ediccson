import React from 'react'
import Step from './Step'
import { surveyStore } from '../../store/survey'
// import { useSurveyContext } from '../../hooks/useSurveyContext.js'

export default function Steps() {
	let step1 = 'step__default'
	let step2 = 'step__default'
	let step3 = 'step__default'
	let step4 = 'step__default'
	let step5 = 'step__default'
	let step6 = 'step__default'

	const { counter } = surveyStore()

	if (counter === 0) {
		step1 = 'step__progress'
	} else if (counter > 0 && counter < 2) {
		step1 = 'step__done'
		step2 = 'step__progress'
	} else if (counter > 0 && counter < 3) {
		step1 = 'step__done'
		step2 = 'step__done'
		step3 = 'step__progress'
	} else if (counter > 0 && counter < 4) {
		step1 = 'step__done'
		step2 = 'step__done'
		step3 = 'step__done'
		step4 = 'step__progress'
	} else if (counter > 0 && counter < 4) {
		step1 = 'step__done'
		step2 = 'step__done'
		step3 = 'step__done'
		step4 = 'step__progress'
	} else if (counter > 0 && counter < 5) {
		step1 = 'step__done'
		step2 = 'step__done'
		step3 = 'step__done'
		step4 = 'step__done'
		step5 = 'step__progress'
	} else if (counter > 0 && counter <= 6) {
		step1 = 'step__done'
		step2 = 'step__done'
		step3 = 'step__done'
		step4 = 'step__done'
		step5 = 'step__done'
		step6 = 'step__progress'
	}

	return (
		<div className='border-b-2 border-gray-300 px-24 py-8 hidden md:flex items-center justify-center'>
			<Step text='Estructura' css={step1} />
			<Step text='Información' css={step2} />
			<Step text='Representante' css={step3} />
			<Step text='Propietario' css={step4} />
			<Step text='Dirección' css={step5} />
			<Step text='Imagen' css={step6} />
			<div className='w-10 h-10 rounded-full border-2'></div>
		</div>
	)
}

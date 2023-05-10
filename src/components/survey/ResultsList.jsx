import React, { useEffect, useState } from 'react'
import { SurveyCard } from './SurveyCard'
import { surveyStore } from '../../store/survey'
import { supabase } from '../../supabase/client'

export function ResultsList() {
	const { results, setResults } = surveyStore()
	const [showSurveysChecked, setShowSurveysChecked] = useState(false)

	useEffect(() => {
		const fetchResults = async (checked = showSurveysChecked) => {
			try {
				const { data, error } = await supabase
					.from('cuestionario')
					.select()
					.eq('checked', checked)
					.order('id', { ascending: false })
				if (error) throw error

				setResults(data)
			} catch (error) {
				console.error(error)
			}
		}
		fetchResults()
	}, [setResults, showSurveysChecked])

	return (
		<div>
			<div className=' w-11/12 mx-auto flex justify-center items-center gap-x-5 mt-5'>
				<button
					className={
						showSurveysChecked
							? 'font-medium text-gray-500 hover:text-black'
							: 'font-medium text-primary'
					}
					onClick={() => setShowSurveysChecked(false)}
				>
					Pendientes
				</button>
				<span>|</span>
				<button
					className={
						showSurveysChecked
							? 'font-medium text-primary'
							: 'font-medium text-gray-500 hover:text-black'
					}
					onClick={() => setShowSurveysChecked(true)}
				>
					Pagados
				</button>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 justify-items-center mt-10 sm:mt-20'>
				{results.map((survey) => (
					<div key={survey.id}>
						<SurveyCard survey={survey} />
					</div>
				))}
			</div>
		</div>
	)
}

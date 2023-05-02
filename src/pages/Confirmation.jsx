/* eslint-disable camelcase */
import React from 'react'
import Layout from '../layout/Layout'
import Title from '../components/form/Title'
import Button from '../components/Button'
import { formStore } from '../store/form'
import { supabase } from '../supabase/client'

export default function Confirmation() {
	const { stepBack, formFields, companyNames } = formStore()
	const companyNamesString = JSON.stringify(companyNames)
	const {
		company_description,
		recruiting_staff,
		representative_name,
		representative_email,
		representative_phone,
		owner_name,
		owner_id_num,
		owner_address1,
		owner_address2,
		owner_country,
		owner_state,
		owner_city,
		owner_zip,
		company_city,
		company_zip,
		company_address1,
		company_address2,
		virtual_address
	} = formFields

	const data = {
		company_names: companyNamesString,
		company_description,
		recruiting_staff,
		representative_name,
		representative_email,
		representative_phone,
		owner_name,
		owner_id_num,
		owner_address1,
		owner_address2,
		owner_country,
		owner_state,
		owner_city,
		owner_zip,
		company_city,
		company_zip,
		company_address1,
		company_address2,
		virtual_address
	}

	const handleSaveData = async () => {
		try {
			// eslint-disable-next-line no-unused-vars
			const { error } = await supabase.from('cuestionario').insert(data)
		} catch (error) {
			// eslint-disable-next-line no-console
			console.error(error)
		}
	}
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
					href='https://reactrouter.com/en/main/components/link'
					onClick={handleSaveData}
					className='py-3 px-6 md:px-10 rounded-lg md:text-lg bg-primary text-white'
				>
					Finalizar
				</a>
			</div>
		</Layout>
	)
}

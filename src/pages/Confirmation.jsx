/* eslint-disable camelcase */
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Layout from '../layout/Layout'
import Title from '../components/form/Title'
import Button from '../components/Button'
import { formStore } from '../store/form'
import { supabase } from '../supabase/client'
import { passGenerate } from '../hooks/usePassGenerate'

export default function Confirmation() {
	const { stepBack, formFields, companyNames } = formStore()
	const companyNamesString = JSON.stringify(companyNames)
	const code = passGenerate()
	const notify = () => toast.success('Código copiado')

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
					¡Felicitaciones por completar el cuestionario! Estás a un paso de abrir tu
					empresa: solo debes realizar el pago correspondiente. Antes de finalizar,
					te informamos que se ha generado un{' '}
					<span className='font-bold'>código de expediente</span> que es muy
					importante para identificar tu pago. Por favor, copia el código y guárdalo
					en un lugar seguro. Luego, serás enviado a nuestras pasarelas de pago
					seguras y confiables, donde deberás pegar el código en el campo de
					información adicional al final del proceso. Después de hacer el pago,
					recibirás un correo electrónico con la confirmación y los próximos pasos a
					seguir. ¡Gracias por confiar en nosotros!
				</p>
			</div>
			<div className='flex items-center gap-x-1'>
				<p
					className='border-2 rounded-md py-3 px-5 text-gray-500 font-medium
				'
				>
					{code}
				</p>
				<CopyToClipboard text={code}>
					<button
						onClick={notify}
						className='bg-primary text-white py-3 px-4 rounded-md'
					>
						Copiar
					</button>
				</CopyToClipboard>
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
			{/* <button onClick={copyOnClipboard}>click</button> */}

			<Toaster />
		</Layout>
	)
}

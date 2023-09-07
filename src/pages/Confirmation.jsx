/* eslint-disable camelcase */
import React, { useState } from 'react'
// import toast, { Toaster } from 'react-hot-toast'
// import { CopyToClipboard } from 'react-copy-to-clipboard'
import Layout from '../layout/Layout'
import Title from '../components/form/Title'
import Button from '../components/Button'
import { formStore } from '../store/form'
import { supabase } from '../supabase/client'
// import { passGenerate } from '../hooks/usePassGenerate'

export default function Confirmation() {
	const { stepBack, formFields, companyNames } = formStore()
	const [sended, setSended] = useState(false)
	const companyNamesString = JSON.stringify(companyNames)
	// const code = passGenerate()
	// const notify = () => toast.success('Código copiado')

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
		} finally {
			setSended(true)
		}
	}

	/*  */
	return (
		<Layout>
			<div>
				<Title text='Estás a un paso de abrir tu empresa' />
				<p className='mt-2 text-gray-500 text-sm'>
					¡Felicidades por completar el cuestionario con éxito! Queremos asegurarnos
					de que tengas todo en orden. En breve, te dirigiremos a nuestras pasarelas
					de pago, donde podrás realizar el pago y completar el proceso. Una vez
					realizado el pago, recibirás un correo electrónico de confirmación junto
					con los próximos pasos a seguir.
					<br />
					<br />
					¡Apreciamos sinceramente tu confianza en nosotros y estamos listos para
					ayudarte a dar el último paso hacia la apertura de tu empresa!
				</p>
			</div>
			{/* <div className='flex items-center gap-x-1'>
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
			</div> */}
			<div className='w-full flex items-center justify-between'>
				<Button
					url='/quinta-pregunta'
					css={'border-2 border-gray-500 text-gray-500'}
					text='Anterior'
					event={stepBack}
				/>

				{sended ? (
					<div className='py-3 px-6 md:px-10 rounded-lg md:text-lg bg-gray-300 text-white cursor-not-allowed'>
						Enviado
					</div>
				) : (
					<a
						href='https://ediccsonredondo.com/producto/servicio-de-creacion-de-empresa-en-usa-single-member-llc/'
						target='_blank'
						rel='noreferrer'
						onClick={handleSaveData}
						className='py-3 px-6 md:px-10 rounded-lg md:text-lg bg-primary text-white'
					>
						Finalizar
					</a>
				)}
			</div>
			{/* <button onClick={() => console.log(virtual_address)}>Click</button> */}
			{/* <button onClick={copyOnClipboard}>click</button> */}

			{/* <Toaster /> */}
		</Layout>
	)
}

import React, { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { supabase } from '../../supabase/client'

export function SurveyCard({ survey }) {
	const [isOpen, setIsOpen] = useState(false)

	const handleChecked = async (id, checked) => {
		try {
			const { error } = await supabase
				.from('cuestionario')
				.update(checked)
				.eq('id', id)
			if (error) throw error
		} catch (error) {
			if (error) throw error
		}
	}
	return (
		<>
			<div
				className='block max-w-sm p-6 bg-white border border-primary rounded-lg shadow hover:bg-gray-100 w-96 cursor-pointer'
				onClick={() => setIsOpen(true)}
			>
				<div className='flex justify-between'>
					<h5 className='mb-2 text-2xl font-bold tracking-tight text-secondary'>
						{survey.representative_name}
					</h5>
					{survey.checked ? (
						<div className='bg-green-500 w-3 h-3 rounded-full'></div>
					) : (
						<div className='bg-red-600 w-3 h-3 rounded-full'></div>
					)}
				</div>
				<div className='text-sm font-medium text-gray-500 space-y-1'>
					<p>Tlf:{survey.representative_phone}</p>
					<p>Email: {survey.representative_email}</p>
				</div>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as='div' className='relative z-10' onClose={() => setIsOpen(false)}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-black bg-opacity-25' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Dialog.Panel className='w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
									<div>
										<Dialog.Title
											as='h3'
											className='text-2xl font-semibold leading-6 text-secondary'
										>
											{survey.owner_name}
										</Dialog.Title>
										<p className='text-xs md:text-sm text-gray-500 mt-3'>
											SNN: {survey.owner_id_num}
										</p>
									</div>

									<div className='border-t border-primary mt-1'>
										<dl>
											<div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
												<dt className='text-sm font-medium text-gray-500'>
													Dirección del Propietario:
												</dt>
												<dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
													{survey.owner_address1}, {survey.owner_city},{' '}
													{survey.owner_state}, {survey.owner_zip},{' '}
													{survey.owner_country}
												</dd>
											</div>
											<div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
												<dt className='text-sm font-medium text-gray-500'>
													Posibles nombres de la empresa:
												</dt>
												<dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 flex gap-x-2'>
													{survey.company_names}
												</dd>
											</div>
											<div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
												<dt className='text-sm font-medium text-gray-500'>
													Descripción de la empresa:
												</dt>
												<dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
													{survey.company_description}
												</dd>
											</div>
											<div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
												<dt className='text-sm font-medium text-gray-500'>
													Dirección de la empresa:
												</dt>
												{survey.virtual_address ? (
													<dd> No tiene dirección</dd>
												) : (
													<dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
														{survey.owner_address1}, {survey.owner_city},{' '}
														{survey.owner_state}, {survey.owner_zip},{' '}
														{survey.owner_country}
													</dd>
												)}
											</div>
										</dl>
									</div>

									<div className='mt-4 flex gap-x-5'>
										<button
											type='button'
											className='bg-primary text-white font-semibold rounded shadow p-2 outline-none'
											onClick={() => setIsOpen(false)}
										>
											Cerrar
										</button>
										<button
											type='button'
											className='bg-gray-400 hover:bg-gray-500 text-white font-semibold rounded shadow p-2'
											onClick={() => handleChecked(survey.id, { checked: true })}
										>
											Revisado
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

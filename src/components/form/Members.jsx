import React from 'react'
import Checkbox from './Checkbox'
import Input from './Input'
import TextArea from './TextArea'

export default function Members({ event }) {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-y-5'>
			<Input text='Nombre completo' name='member_full_name' onChange={event} />
			<Input
				text='% de participación en la empresa'
				name='member_participation'
				onChange={event}
			/>

			<TextArea
				text='Dirección principal'
				placeholder='Ingresa tu dirección principal, país, estado, ciudad y código postal'
				name='member_address'
				onChange={event}
			/>

			<div className='flex flex-col gap-y-2'>
				<label
					htmlFor='member_position'
					className='font-rajdhani font-semibold text-lg'
				>
					Seleccionar cargo
				</label>
				<select
					name='member_position'
					className='py-2 px-4 rounded-lg border-2 border-primary w-3/4'
					onChange={event}
				>
					<option value=''>Elige una opción</option>
					<option value='miembro_administrador'>Miembro Administrador</option>
					<option value='propietario'>Solo Propietario</option>
					<option value='administrador'>Solo Administrador</option>
				</select>
			</div>

			<Checkbox
				text='Posee SSN, ITIN o EIN activo?'
				name='member_certificate'
				onChange={event}
			/>
		</div>
	)
}

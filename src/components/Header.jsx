import React from 'react'

import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header>
			<nav className='flex justify-between items-center py-5 px-10'>
				<img src={logo} alt='Ediccson Redondon Logo' className='w-20' />

				<ul className='hidden md:flex gap-x-20 font-rajdhani text-gray-500 font-bold'>
					<li>
						<a
							href='https://ediccsonredondo.com/nuestros-servicios-principales/'
							rel='noreferrer'
						>
							Servicios
						</a>
					</li>
					<li>
						<a href='https://ediccsonredondo.com/ediccson-redondo/' rel='noreferrer'>
							¿Quien soy?
						</a>
					</li>
					<li>
						<a href='https://ediccsonredondo.com/ediccson-redondo/' rel='noreferrer'>
							Inteligencia artificial
						</a>
					</li>
					<li>
						<a href='https://ediccsonredondo.com/contacto/' rel='noreferrer'>
							Sumate
						</a>
					</li>
					<li>
						<a
							href='https://ediccsonredondo.com/nuestros-servicios-principales/'
							rel='noreferrer'
						>
							Tienda
						</a>
					</li>
					<li>
						<a href='https://ediccsonredondo.com/blog/' rel='noreferrer'>
							Blog
						</a>
					</li>
				</ul>

				<div className='hidden md:flex gap-x-5 text-gray-500'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='w-4 fill-current'
						viewBox='0 0 24 24'
					>
						<path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
					</svg>
					<Link to='/login'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-5'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
							/>
						</svg>
					</Link>

					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='w-4 fill-current'
						viewBox='0 0 24 24'
					>
						<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
					</svg>
				</div>
			</nav>
		</header>
	)
}

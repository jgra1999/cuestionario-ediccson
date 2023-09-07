import React from 'react'
import { createHashRouter } from 'react-router-dom'

import SurveyResults from '../pages/SurveyResults'

import App from '../pages/App'
import SecondQ from '../pages/SecondQ'
import ThirdQ from '../pages/ThirdQ'
import FourthQ from '../pages/FourthQ'
import FifthQ from '../pages/FifthQ'
import Confirmation from '../pages/Confirmation'
import Contact from '../pages/Contact'
import Login from '../pages/Login'

export const router = createHashRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '/segunda-pregunta',
		element: <SecondQ />
	},
	{
		path: '/tercera-pregunta',
		element: <ThirdQ />
	},
	{
		path: '/cuarta-pregunta',
		element: <FourthQ />
	},
	{
		path: '/quinta-pregunta',
		element: <FifthQ />
	},

	{
		path: '/fin-del-proceso',
		element: <Confirmation />
	},
	{
		path: '/contacto',
		element: <Contact />
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/cuestionario-resultados',
		element: <SurveyResults />
	}
])

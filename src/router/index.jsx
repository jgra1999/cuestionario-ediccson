import React from 'react'
import { createHashRouter } from 'react-router-dom'

// import Login from '../pages/Login';
import SurveyResults from '../pages/SurveyResults'

import App from '../pages/App'
import SecondQ from '../pages/SecondQ'
import ThirdQ from '../pages/ThirdQ'
import FourthQ from '../pages/FourthQ'
import FifthQ from '../pages/FifthQ'
import SixthQ from '../pages/SixthQ'
import Confirmation from '../pages/Confirmation'

export const router = createHashRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '/2da-pregunta',
		element: <SecondQ />
	},
	{
		path: '/3era-pregunta',
		element: <ThirdQ />
	},
	{
		path: '/4ta-pregunta',
		element: <FourthQ />
	},
	{
		path: '/5ta-pregunta',
		element: <FifthQ />
	},
	{
		path: '/6ta-pregunta',
		element: <SixthQ />
	},
	{
		path: '/confirmacion',
		element: <Confirmation />
	},
	{
		path: '/encuestas',
		element: <SurveyResults />
	}
])

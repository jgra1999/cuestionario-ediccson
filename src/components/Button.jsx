import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ css, text, url, event }) {
	return (
		<Link
			to={url}
			className={`py-3 px-6 md:px-10 rounded-lg md:text-lg ${css}`}
			onClick={event}
		>
			{text}
		</Link>
	)
}

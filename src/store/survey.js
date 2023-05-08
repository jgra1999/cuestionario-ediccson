import { create } from 'zustand'

export const surveyStore = create((set) => ({
	results: [],
	setResults: (data) =>
		set((state) => ({
			results: data
		}))
}))

/* 
members: {
			full_name: '',
			participation: '',
			address: '',
			position: '',
			certificate: ''
		} */

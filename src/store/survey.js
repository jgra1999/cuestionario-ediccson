import { create } from 'zustand'

export const surveyStore = create((set) => ({
	/* Contador de los botones de siguiente y anterior */
	counter: 0,
	stepFront: () => set((state) => ({ counter: state.counter + 1 })),
	stepBack: () => set((state) => ({ counter: state.counter - 1 })),

	form: {
		company: '',
		company_description: '',
		company_address: '',
		virtual_address: false,
		recruiting_staff: false,
		owner: '',
		email: '',
		phone: null,
		member_full_name: '',
		member_participation: '',
		member_address: '',
		member_position: '',
		member_certificate: '',
		consultancy: false
	},

	setForm: (data) =>
		set((state) => ({
			...state.form,
			form: data
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

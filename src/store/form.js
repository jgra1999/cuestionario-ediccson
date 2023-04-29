import { create } from 'zustand'

export const formStore = create((set) => ({
	/* Contador de los botones de siguiente y anterior */
	counter: 0,
	stepFront: () => set((state) => ({ counter: state.counter + 1 })),
	stepBack: () => set((state) => ({ counter: state.counter - 1 })),

	/* Posibles nombres de la empresa */
	companyNames: [],
	setCompanyNames: (companyNames) => set({ companyNames }),

	/* Campos simples del formulario */
	formFields: {
		company_description: '',
		recruiting_staff: '',
		representative_name: '',
		representative_email: '',
		representative_phone: null,
		document: '',
		document_number: '',
		owner_first_name: '',
		owner_last_name: '',
		owner_address1: '',
		owner_address2: '',
		owner_country: '',
		owner_state: '',
		owner_city: '',
		owner_zip: '',
		company_city: '',
		company_zip: '',
		company_address1: '',
		company_address2: '',
		virtual_address: false
	},
	setFormFields: (data) =>
		set((state) => ({
			...state.formFields,
			formFields: data
		})),

	contactForm: {
		client_name: '',
		client_phone: '',
		client_email: '',
		client_company_state: ''
	},

	setContactForm: (data) =>
		set((state) => ({
			...state.contactForm,
			contactForm: data
		}))
}))

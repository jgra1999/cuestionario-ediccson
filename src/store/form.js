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
		company_names: '',
		company_description: '',
		recruiting_staff: false,
		representative_name: '',
		representative_email: '',
		representative_phone: null,
		owner_name: '',
		owner_doc_type: '',
		owner_id_num: null,
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
		}))
}))

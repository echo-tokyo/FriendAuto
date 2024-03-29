import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
	name: 'admin',
	initialState: {
		selectedService: null,
		categorizedServices: []
	},
	reducers: {
		getCategorizedServices: (state, action) => {
			state.categorizedServices = action.payload
		},
		toDelete: (state, action) => {
			const selectedElement = document.getElementById(action.payload);
			if (selectedElement) {
				if (selectedElement.classList.contains('checked')) {
					selectedElement.classList.remove('checked');
					state.selectedService = null;
				} else {
					const prevSelectedElement = document.getElementById(state.selectedService);
					if (prevSelectedElement) {
						prevSelectedElement.classList.remove('checked');
					}
					selectedElement.classList.add('checked');
					state.selectedService = action.payload;
				}
			}
		},
	}
})

export const {getCategorizedServices, toDelete} = adminSlice.actions
export default adminSlice.reducer
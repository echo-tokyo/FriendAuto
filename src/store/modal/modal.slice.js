import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		isModalOpen: false,
		serviceName: ''
	},
	reducers: {
		toggleModal: (state) => {
			state.isModalOpen = !state.isModalOpen
			if (state.isModalOpen === true) { 
				document.body.style.backgroundColor = '#D7D7D7' 
				document.body.style.overflow = 'hidden' 
				document.querySelectorAll('.card').forEach((e)=> e.style.backgroundColor = '#CCCCCC') 
				document.querySelector('.questions').style.backgroundColor = '#CCCCCC' 
			}  
			if (state.isModalOpen === false) { 
				document.body.style.backgroundColor = 'white' 
				document.body.style.overflow = 'visible' 
				document.querySelectorAll('.card').forEach((e)=> e.style.backgroundColor = '#ECECEC') 
				document.querySelector('.questions').style.backgroundColor = '#ECECEC'
			}
		},
		serviceName: (state, action) => {
			state.serviceName = action.payload
		}
	}
})

export const {toggleModal, serviceName} = modalSlice.actions
export default modalSlice.reducer
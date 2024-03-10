import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		isModalOpen: false,
		isModalOpen2: false,
		isModalOpen3: false,
		serviceName: '',
		currentServiceId: ''
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
		toggleModal2: (state) => {
			state.isModalOpen2 = !state.isModalOpen2
		},
		toggleModal3: (state) => {
			state.isModalOpen3 = !state.isModalOpen3
		},
		backgroundToggle: (state) => {
			if (state.isModalOpen2 === true || state.isModalOpen3 === true) { 
				document.body.style.backgroundColor = '#D7D7D7' 
				document.body.style.overflow = 'hidden' 
				document.querySelectorAll('.job_items').forEach((e) => e.style.backgroundColor = '#CCCCCC')
				document.querySelector('.affiliateProgram').style.backgroundColor = '#CCCCCC'
			}
			else if (state.isModalOpen2 === false || state.isModalOpen3 === false) { 
				document.body.style.backgroundColor = 'white' 
				document.body.style.overflow = 'visible' 
				document.querySelectorAll('.job_items').forEach((e) => e.style.backgroundColor = '#ECECEC')
				document.querySelector('.affiliateProgram').style.backgroundColor = '#ECECEC'
			}
		},
		serviceName: (state, action) => {
			state.serviceName = action.payload
		},
		currentServiceId: (state, action) => {
			state.currentServiceId = action.payload
		}
	}
})

export const {toggleModal, toggleModal2, toggleModal3, backgroundToggle, serviceName, currentServiceId} = modalSlice.actions
export default modalSlice.reducer
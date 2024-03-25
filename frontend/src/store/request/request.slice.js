import { createSlice } from '@reduxjs/toolkit';

const requestSlice = createSlice({
	name: 'request',
	initialState: {
		ipAddress: 'https://frendauto.ru'
	}
})

export default requestSlice.reducer
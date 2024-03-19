import { createSlice } from '@reduxjs/toolkit';

const requestSlice = createSlice({
	name: 'request',
	initialState: {
		ipAddress: 'http://188.225.36.185'
	}
})

export default requestSlice.reducer
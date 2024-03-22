import { createSlice } from '@reduxjs/toolkit';

const requestSlice = createSlice({
	name: 'request',
	initialState: {
		ipAddress: 'http://45.12.74.203'
	}
})

export default requestSlice.reducer
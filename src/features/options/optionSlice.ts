/** @format */

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isOpen: false,
}

export const optionSlice = createSlice({
	name: 'options',
	initialState,
	reducers: {
		toggleOptions: state => {
			state.isOpen = !state.isOpen
		},
	},
})

export const { toggleOptions } = optionSlice.actions

export default optionSlice.reducer

/** @format */

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isOpen: false,
}

export const menuMobileSlice = createSlice({
	name: 'menuMobile',
	initialState,
	reducers: {
		toggleMenu: state => {
			state.isOpen = !state.isOpen
		},
	},
})

export const { toggleMenu } = menuMobileSlice.actions

export default menuMobileSlice.reducer

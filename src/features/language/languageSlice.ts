/** @format */

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	en: false,
	es: true,
	fr: false,
}

export const languageSlice = createSlice({
	name: 'language',
	initialState,
	reducers: {
		setEn: state => {
			state.en = true
			state.es = false
			state.fr = false
		},
		setEs: state => {
			state.en = false
			state.es = true
			state.fr = false
		},
		setFr: state => {
			state.en = false
			state.es = false
			state.fr = true
		},
	},
})

export const { setEn, setEs, setFr } = languageSlice.actions

export default languageSlice.reducer

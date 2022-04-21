/** @format */

import { configureStore } from '@reduxjs/toolkit'
import menuMobileReducer from '@features/menuMobile/menuMobileSlice'
import languageReducer from '@features/language/languageSlice'
import optionReducer from '@features/options/optionSlice'

export const store = configureStore({
	reducer: {
		menuMobile: menuMobileReducer,
		language: languageReducer,
		options: optionReducer,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

/** @format */

import { useEffect } from 'react'
import { useRouter, NextRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@app/hooks'
import { setEn, setEs, setFr } from '@features/language/languageSlice'
import styles from './langBtn.module.css'

export function LangBtn(): JSX.Element {
	let language = useAppSelector(state => state.language)
	let { en, es, fr } = language
	const dispatch = useAppDispatch()

	let router: NextRouter = useRouter()

	useEffect(() => {
		switch (router.route) {
			case '/':
				dispatch(setEs())
				break
			case '/en':
				dispatch(setEn())
				break
			case '/fr':
				dispatch(setFr())
				break
			default:
				dispatch(setEs())
		}
	}, [dispatch, router.route])

	return (
		<div className={styles.lang_btn}>
			<label className={`${styles.label} ${en ? `${styles.label_en}` : ''}`}>
				EN
				<input
					type='radio'
					name='lang'
					className={styles.input}
					checked={en}
					onChange={() => {
						dispatch(setEn())
						router.push('/en')
					}}
				/>
			</label>
			<label className={`${styles.label} ${es ? `${styles.label_es}` : ''}`}>
				ES
				<input
					type='radio'
					name='lang'
					className={styles.input}
					checked={es}
					onChange={() => {
						dispatch(setEs())
						router.push('/')
					}}
				/>
			</label>
			<label className={`${styles.label} ${fr ? `${styles.label_fr}` : ''}`}>
				FR
				<input
					type='radio'
					name='lang'
					className={styles.input}
					checked={fr}
					onChange={() => {
						dispatch(setFr())
						router.push('/fr')
					}}
				/>
			</label>
			<div
				className={`${styles.circle} ${
					en ? `${styles.circle_en}` : fr ? `${styles.circle_fr}` : ''
				}`}
			/>
		</div>
	)
}

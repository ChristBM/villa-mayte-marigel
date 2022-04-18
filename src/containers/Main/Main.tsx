/** @format */

import { useEffect } from 'react'
import { useRouter, NextRouter } from 'next/router'
import { useAppDispatch } from '@app/hooks'
import { setEn, setEs, setFr } from '@features/language/languageSlice'
import { Welcome, Services, Activities, Testimonials, Contacts } from '@containers/index'
import { SepTopWhite } from '@components/index'
import styles from './main.module.css'

export function Main(): JSX.Element {
	const dispatch = useAppDispatch()

	let router: NextRouter = useRouter()

	useEffect(() => {
		if (router.route.includes('en')) {
			dispatch(setEn())
		} else if (router.route.includes('fr')) {
			dispatch(setFr())
		} else {
			dispatch(setEs())
		}
	}, [router.route, dispatch])

	return (
		<div className={styles.main}>
			<div className={styles.separator_top}>
				<SepTopWhite />
			</div>

			<section className={styles.welcome}>
				<Welcome />
			</section>

			<section className={styles.services}>
				<Services />
			</section>

			<section className={styles.activities}>
				<Activities />
			</section>

			<section className={styles.testimonials}>
				<Testimonials />
			</section>

			<section className={styles.contacts}>
				<Contacts />
			</section>

			<div className={styles.separator_bottom}>
				<SepTopWhite />
			</div>
		</div>
	)
}

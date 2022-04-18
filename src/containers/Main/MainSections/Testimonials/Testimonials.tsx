/** @format */

import { Fragment } from 'react'
import { useAppSelector } from '@app/hooks'
import { SectionTitle, TestimonialSlice } from '@components/index'
import styles from './testimonials.module.css'

export function Testimonials(): JSX.Element {
	let language = useAppSelector(state => state.language)

	return (
		<Fragment>
			{language.es && <SectionTitle title={'Opiniones'} />}
			{language.en && <SectionTitle title={'Testimonials'} />}
			{language.fr && <SectionTitle title={'Témoignages'} />}
			<div className={styles.test_mobile}>
				<TestimonialSlice slidesPerView={1} />
			</div>
			<div className={styles.test_tablet}>
				<TestimonialSlice slidesPerView={2} />
			</div>
			<div className={styles.test_desktop}>
				<TestimonialSlice slidesPerView={3} />
			</div>
		</Fragment>
	)
}
/* <div className={styles.testimonials}> */

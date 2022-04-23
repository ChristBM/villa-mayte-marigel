/** @format */

import { useAppSelector } from '@app/hooks'
import { SectionTitle, SepTopWhite, TestimonialSlice } from '@components/index'
import styles from './testimonials.module.css'

export function Testimonials(): JSX.Element {
	let language = useAppSelector(state => state.language)

	return (
		<div className={styles.testimonials_section}>
			{language.es && <SectionTitle title={'Opiniones'} color={'light'} />}
			{language.en && <SectionTitle title={'Testimonials'} color={'light'} />}
			{language.fr && <SectionTitle title={'Témoignages'} color={'light'} />}
			<div className={styles.test_mobile}>
				<TestimonialSlice slidesPerView={1} />
			</div>
			<div className={styles.test_tablet}>
				<TestimonialSlice slidesPerView={2} />
			</div>
			<div className={styles.test_desktop}>
				<TestimonialSlice slidesPerView={3} />
			</div>
			<div className={styles.test_bottom_sep}>
				<SepTopWhite />
			</div>
		</div>
	)
}
/* <div className={styles.testimonials}> */

/** @format */

import { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TestimonialCard } from '@components/index'
import testim_text from './testim_text'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import styles from './testSlice.module.css'

import SwiperCore, { Pagination, Navigation, Keyboard, Autoplay, A11y } from 'swiper'
SwiperCore.use([Keyboard, Autoplay])

type Props = {
	slidesPerView: number | 'auto'
}

export function TestimonialSlice({ slidesPerView }: Props): JSX.Element {
	return (
		<Fragment>
			<Swiper
				grabCursor={true}
				slidesPerView={slidesPerView}
				centeredSlides={true}
				spaceBetween={20}
				slidesPerGroup={1}
				loopFillGroupWithBlank={false}
				pagination={{
					clickable: true,
				}}
				navigation={false}
				loop={true}
				speed={2000}
				a11y={{
					enabled: true,
				}}
				modules={[Pagination, Navigation, A11y]}
				keyboard={{ enabled: true }}
				autoplay={{ delay: 3000, disableOnInteraction: true }}
				className={styles.testimonials}
			>
				{testim_text.map(t => (
					<SwiperSlide
						key={Math.random().toString(36).slice(2)}
						className={styles.testimonials_swiper}
					>
						<TestimonialCard text={t.textEn} author={t.author} stars={t.stars} />
					</SwiperSlide>
				))}
			</Swiper>
		</Fragment>
	)
}

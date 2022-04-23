/** @format */

import { Fragment } from 'react'
import Image from 'next/image'
import img1 from '@public/slider/1.webp'
import img2 from '@public/slider/2.webp'
import img3 from '@public/slider/3.webp'
import img4 from '@public/slider/4.webp'
import img5 from '@public/slider/5.webp'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

// import Swiper core and required modules
import SwiperCore, { EffectCards, Keyboard, Autoplay, A11y } from 'swiper'

SwiperCore.use([EffectCards, Keyboard, Autoplay])

import styles from './desktopSlider.module.css'

export function DesktopSlider() {
	return (
		<Fragment>
			<Swiper
				effect={'cards'}
				grabCursor={true}
				slidesPerView={1}
				spaceBetween={0}
				loop={true}
				speed={1000}
				modules={[EffectCards, A11y]}
				a11y={{
					enabled: true,
				}}
				keyboard={{ enabled: true }}
				autoplay={{ delay: 5000, disableOnInteraction: false }}
				className={styles.swiper}
			>
				<SwiperSlide className={styles.swiper_slide}>
					<Image
						src={img1}
						width={540}
						height={540}
						placeholder='blur'
						alt='Villa Mayte y Marigel'
					/>
				</SwiperSlide>
				<SwiperSlide className={styles.swiper_slide}>
					<Image
						src={img2}
						width={540}
						height={540}
						placeholder='blur'
						alt='Villa Mayte y Marigel'
					/>
				</SwiperSlide>
				<SwiperSlide className={styles.swiper_slide}>
					<Image
						src={img3}
						width={540}
						height={540}
						placeholder='blur'
						alt='Villa Mayte y Marigel'
					/>
				</SwiperSlide>
				<SwiperSlide className={styles.swiper_slide}>
					<Image
						src={img4}
						width={540}
						height={540}
						placeholder='blur'
						alt='Villa Mayte y Marigel'
					/>
				</SwiperSlide>
				<SwiperSlide className={styles.swiper_slide}>
					<Image
						src={img5}
						width={540}
						height={540}
						placeholder='blur'
						alt='Villa Mayte y Marigel'
					/>
				</SwiperSlide>
			</Swiper>
		</Fragment>
	)
}

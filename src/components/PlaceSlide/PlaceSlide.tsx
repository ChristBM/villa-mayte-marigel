/** @format */

import Image from 'next/image'
import { useAppSelector } from '@app/hooks'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import pueblo from '@public/activities/1.jpg'
import tabaco from '@public/activities/2.jpg'
import cueva from '@public/activities/3.jpg'
import mural from '@public/activities/4.jpg'
import ermita from '@public/activities/5.jpg'
import jasmines from '@public/activities/6.jpg'
import valle from '@public/activities/7.jpg'
import cayojutia from '@public/activities/8.jpg'

import { EffectCoverflow, Pagination } from 'swiper'

import styles from './placeSlide.module.css'

export function PlaceSlide(): JSX.Element {
	let language = useAppSelector(state => state.language)

	return (
		<Swiper
			effect={'coverflow'}
			grabCursor={true}
			centeredSlides={false}
			slidesPerView={2}
			coverflowEffect={{
				rotate: 50,
				stretch: 0,
				depth: 50,
				modifier: 1,
				slideShadows: false,
			}}
			pagination={false}
			modules={[EffectCoverflow, Pagination]}
			className={styles.mySwiper_Coverflow}
		>
			<SwiperSlide className={styles.coverflow_slide}>
				<div className={styles.coverflow_img}>
					<Image src={pueblo} alt='' loading='lazy' />
				</div>
				<h3 className={styles.coverflow_title}>
					{language.es && 'Pueblo de Viñales'}
					{language.en && 'Viñales Town'}
					{language.fr && 'Ville de Viñales'}
				</h3>
			</SwiperSlide>
			<SwiperSlide className={styles.coverflow_slide}>
				<div className={styles.coverflow_img}>
					<Image src={mural} alt='' loading='lazy' />
				</div>
				<h3 className={styles.coverflow_title}>
					{language.es && 'EL Mural de la Prehistoria'}
					{language.en && 'The Prehistoric Mural'}
					{language.fr && 'La fresque préhistorique'}
				</h3>
			</SwiperSlide>
			<SwiperSlide className={styles.coverflow_slide}>
				<div className={styles.coverflow_img}>
					<Image src={cueva} alt='' loading='lazy' />
				</div>
				<h3 className={styles.coverflow_title}>
					{language.es && 'La Cueva del Indio'}
					{language.en && 'The Indian Cave'}
					{language.fr && 'La grotte indienne'}
				</h3>
			</SwiperSlide>
			<SwiperSlide className={styles.coverflow_slide}>
				<div className={styles.coverflow_img}>
					<Image src={cayojutia} alt='' loading='lazy' />
				</div>
				<h3 className={styles.coverflow_title}>
					{language.es && 'Playa Cayo Jutia'}
					{language.en && 'Cayo Jutia Beach'}
					{language.fr && 'Plage Jutia Key'}
				</h3>
			</SwiperSlide>
			<SwiperSlide className={styles.coverflow_slide}>
				<div className={styles.coverflow_img}>
					<Image src={ermita} alt='' loading='lazy' />
				</div>
				<h3 className={styles.coverflow_title}>
					{language.es && 'La Ermita'}
					{language.en && 'The Ermita'}
					{language.fr && "L'Ermitage"}
				</h3>
			</SwiperSlide>
			<SwiperSlide className={styles.coverflow_slide}>
				<div className={styles.coverflow_img}>
					<Image src={valle} alt='' loading='lazy' />
				</div>
				<h3 className={styles.coverflow_title}>
					{language.es && 'El Valle de Viñales'}
					{language.en && 'Viñales Valley'}
					{language.fr && 'Vallée de Viñales'}
				</h3>
			</SwiperSlide>
			<SwiperSlide className={styles.coverflow_slide}>
				<div className={styles.coverflow_img}>
					<Image src={tabaco} alt='' loading='lazy' />
				</div>
				<h3 className={styles.coverflow_title}>
					{language.es && 'La Ruta del Tabaco'}
					{language.en && 'The Tobacco Route'}
					{language.fr && 'Route du tabac'}
				</h3>
			</SwiperSlide>
			<SwiperSlide className={styles.coverflow_slide}>
				<div className={styles.coverflow_img}>
					<Image src={jasmines} alt='' loading='lazy' />
				</div>
				<h3 className={styles.coverflow_title}>
					{language.es && 'Los Jasmines'}
					{language.en && 'The Jasmines'}
					{language.fr && 'Les Jasmins'}
				</h3>
			</SwiperSlide>
		</Swiper>
	)
}

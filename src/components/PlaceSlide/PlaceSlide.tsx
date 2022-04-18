/** @format */

import Image from 'next/image'
import { useAppSelector } from '@app/hooks'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import pueblo from '@public/services/pueblo.jpg'
import mural from '@public/services/mural.jpg'
import cueva from '@public/services/cueva.jpg'
import cayojutia from '@public/services/cayojutia.jpg'
import ermita from '@public/services/ermita.jpg'
import valle from '@public/services/valle.jpg'
import tabaco from '@public/services/tabaco.jpg'
import jasmines from '@public/services/jasmines.jpg'

import { EffectCoverflow, Pagination } from 'swiper'

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
				depth: 100,
				modifier: 1,
				slideShadows: true,
			}}
			pagination={false}
			modules={[EffectCoverflow, Pagination]}
			className='mySwiper_Coverflow'
		>
			<SwiperSlide className='coverflow_slide'>
				<Image src={pueblo} alt='' loading='lazy' width={300} height={200} />
				<h3 className='coverflow_title'>
					{language.es && 'Pueblo de Viñales'}
					{language.en && 'Viñales Town'}
					{language.fr && 'Ville de Viñales'}
				</h3>
			</SwiperSlide>
			<SwiperSlide className='coverflow_slide'>
				<Image src={mural} alt='' loading='lazy' width={300} height={200} />
				<h3 className='coverflow_title'>
					{language.es && 'EL Mural de la Prehistoria'}
					{language.en && 'The Prehistoric Mural'}
					{language.fr && 'La fresque préhistorique'}
				</h3>
			</SwiperSlide>
			<SwiperSlide className='coverflow_slide'>
				<Image src={cueva} alt='' loading='lazy' width={300} height={200} />
				<h3 className='coverflow_title'>
					{language.es && 'La Cueva del Indio'}
					{language.en && 'The Indian Cave'}
					{language.fr && 'La grotte indienne'}
				</h3>
			</SwiperSlide>
			<SwiperSlide className='coverflow_slide'>
				<Image src={cayojutia} alt='' loading='lazy' width={300} height={200} />
				<h3 className='coverflow_title'>
					{language.es && 'Playa Cayo Jutia'}
					{language.en && 'Cayo Jutia Beach'}
					{language.fr && 'Plage Jutia Key'}
				</h3>
			</SwiperSlide>
			<SwiperSlide className='coverflow_slide'>
				<Image src={ermita} alt='' loading='lazy' width={300} height={200} />
				<h3 className='coverflow_title'>
					{language.es && 'La Ermita'}
					{language.en && 'The Ermita'}
					{language.fr && "L'Ermitage"}
				</h3>
			</SwiperSlide>
			<SwiperSlide className='coverflow_slide'>
				<Image src={valle} alt='' loading='lazy' width={300} height={200} />
				<h3 className='coverflow_title'>
					{language.es && 'El Valle de Viñales'}
					{language.en && 'Viñales Valley'}
					{language.fr && 'Vallée de Viñales'}
				</h3>
			</SwiperSlide>
			<SwiperSlide className='coverflow_slide'>
				<Image src={tabaco} alt='' loading='lazy' width={300} height={200} />
				<h3 className='coverflow_title'>
					{language.es && 'La Ruta del Tabaco'}
					{language.en && 'The Tobacco Route'}
					{language.fr && 'Route du tabac'}
				</h3>
			</SwiperSlide>
			<SwiperSlide className='coverflow_slide'>
				<Image src={jasmines} alt='' loading='lazy' width={300} height={200} />
				<h3 className='coverflow_title'>
					{language.es && 'Los Jasmines'}
					{language.en && 'The Jasmines'}
					{language.fr && 'Les Jasmins'}
				</h3>
			</SwiperSlide>
		</Swiper>
	)
}

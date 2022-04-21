/** @format */

import Image from 'next/image'
import styles from './activities.module.css'

import senderismo from '@public/services/senderismo.jpg'
import caballo from '@public/services/caballo.jpg'
import bici from '@public/services/bicicleta.jpg'
import { Fragment } from 'react'
import { useAppSelector } from '@app/hooks'
import { HeaderBtn, PlaceSlide, SectionTitle, SepTopBlack } from '@components/index'
import taxi from '@public/services/taxi.jpg'

export function Activities(): JSX.Element {
	let language = useAppSelector(state => state.language)

	return (
		<Fragment>
			{language.es && <SectionTitle title={'Actividades'} color={'light'} />}
			{language.en && <SectionTitle title={'Activities'} color={'light'} />}
			{language.fr && <SectionTitle title={'Activités'} color={'light'} />}

			<div className={styles.activities}>
				<section className={styles.way_cont}>
					<h2 className={styles.subtitle}>
						{language.es
							? '¿Cómo quieres descubrir Viñales?'
							: language.en
							? 'How do you want to discover Viñales?'
							: language.fr
							? 'Comment voulez-vous découvrir Viñales ?'
							: null}
					</h2>
					<div className={styles.ways}>
						<div className={styles.img_form2}>
							<Image src={caballo} alt='' />
							<p className={styles.way_name}>
								{language.es
									? 'A Caballo'
									: language.en
									? 'On Horseback'
									: language.fr
									? 'À cheval'
									: null}
							</p>
						</div>
						<div className={styles.img_form1}>
							<Image src={senderismo} alt='' />
							<p className={styles.way_name}>
								{language.es
									? 'Senderismo'
									: language.en
									? 'Hiking'
									: language.fr
									? 'Randonnées'
									: null}
							</p>
						</div>
						<div className={styles.img_form2}>
							<Image src={taxi} alt='' />
							<p className={styles.way_name}>
								{language.es
									? 'Taxi'
									: language.en
									? 'Taxi'
									: language.fr
									? 'Taxi'
									: null}
							</p>
						</div>
						<div className={styles.img_form1}>
							<Image src={bici} alt='' />
							<p className={styles.way_name}>
								{language.es
									? 'Bicicleta'
									: language.en
									? 'Bicycle'
									: language.fr
									? 'Bicyclette'
									: null}
							</p>
						</div>
					</div>
				</section>

				<section className={styles.places}>
					<h2 className={styles.subtitle}>
						{language.es
							? '¿Qué lugares puedo conocer?'
							: language.en
							? 'What places can I visit?'
							: language.fr
							? 'Quels sont les endroits que je peux visiter?'
							: null}
					</h2>
					<PlaceSlide />
				</section>
			</div>

			<HeaderBtn
				btnText={
					language.es
						? 'Reservar Ahora'
						: language.en
						? 'Book Now'
						: language.fr
						? 'Réservez maintenant'
						: ''
				}
			/>

			<div className={styles.activities_bottom_sep} >
				<SepTopBlack />
			</div>
		</Fragment>
	)
}

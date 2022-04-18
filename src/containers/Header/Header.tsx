/** @format */

import Image from 'next/image'
import { useAppSelector } from '@app/hooks'
import { HeaderTitle, SepTopWhite, HeaderBtn } from '@components/index'
import vinales from '@public/images/vinales.jpg'
import styles from './header.module.css'

export function Header(): JSX.Element {
	let language = useAppSelector(state => state.language)
	return (
		<div className={styles.header}>
			<div className={styles.bg}>
				<Image src={vinales} alt='Fotografía del Valle de Viñales' />
			</div>
			<section className={styles.title}>
				<HeaderTitle
					title='Villa Mayte y Marigel'
					subtitle='"el jardín de los colibrís"'
				/>
			</section>
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
			<div className={styles.sep_header}>
				<SepTopWhite />
			</div>
		</div>
	)
}

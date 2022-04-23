/** @format */

import { useAppSelector } from '@app/hooks'
import { HeaderTitle, SepTopWhite, HeaderBtn, DesktopSlider } from '@components/index'
import styles from './header.module.css'

export function Header(): JSX.Element {
	let language = useAppSelector(state => state.language)
	return (
		<div className={styles.header}>
			<div className={styles.bg} />

			<section className={styles.title}>
				<HeaderTitle
					title='Villa Mayte y Marigel'
					subtitle='"el jardín de los colibrís"'
				/>
			</section>

			<section className={styles.btn_reservar}>
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
			</section>

			<section className={styles.card_swiper}>
				<DesktopSlider />
			</section>

			<div className={styles.sep_header}>
				<SepTopWhite />
			</div>
		</div>
	)
}

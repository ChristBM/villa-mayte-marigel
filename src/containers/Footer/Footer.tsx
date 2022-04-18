/** @format */

import { useAppSelector } from '@app/hooks'
import { SepTopBlack } from '@components/index'
import { RiShareFill } from 'react-icons/ri'
import styles from './footer.module.css'

export function Footer(): JSX.Element {
	let language = useAppSelector(state => state.language)

	const shareData = {
		title: 'Villa Mayte y Marigel, "el jardín de los colibrís"',
		text: language.es
			? 'Villa Mayte y Marigel, "el jardín de los colibrís"'
			: language.en
			? 'description'
			: language.fr
			? 'desc enfrance'
			: '',
		url: '/',
	}

	const handleShare = async () => {
		try {
			await navigator.share(shareData)
		} catch (err) {
			throw new Error()
		}
	}

	return (
		<div className={styles.footer}>
			<section className={styles.footer_separator}>
				<SepTopBlack />
			</section>

			<section className={styles.footer_landing__social}>
				<button
					title={
						language.es
							? 'Comparte esta página con tus amigos'
							: language.en
							? 'Share this page with your friends'
							: language.fr
							? 'Partagez cette page avec vos amis'
							: ''
					}
					onClick={handleShare}
					className={styles.footer_btn}
				>
					<RiShareFill size='40px' color='#fff' />
					<span className={styles.footer_share}>
						{language.es && 'Compartir'}
						{language.en && 'Share'}
						{language.fr && 'Partager'}
					</span>
				</button>
			</section>

			<section className={styles.footer_official}>
				<p>
					{language.es && 'Esta aplicación se encuentra actualmente en desarrollo'}
					{language.en && 'This application is currently under development'}
					{language.fr && 'Cette application est en cours de développement'}
				</p>
				<br />
			</section>

			<section className={styles.footer_copy}>
				<p>2022 Villa Mayte y Marigel · Made in Viñales · Coded by ChristBM</p>
			</section>

			<section className={styles.circle_cont}>
				<div className={styles.circle}></div>
			</section>
		</div>
	)
}

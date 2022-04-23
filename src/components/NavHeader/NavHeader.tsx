/** @format */

import Link from 'next/link'
import { useRouter, NextRouter } from 'next/router'

import { useAppSelector } from '@app/hooks'
import styles from './navHeader.module.css'
import {
	RiAdminLine,
	RiCalendarCheckLine,
	RiGalleryLine,
	RiHome4Line,
} from 'react-icons/ri'

export function NavHeader(): JSX.Element {
	let router: NextRouter = useRouter()
	let language = useAppSelector(state => state.language)

	return (
		<nav className={styles.navheader}>
			<ul className={styles.navheader__list}>
				<li className={styles.navheader__li}>
					<div className={styles.li_icon}>
						<RiHome4Line color='#2e2e2e8a' size='15px' />
					</div>
					<Link
						href={language.es ? '/' : language.en ? '/en' : language.fr ? '/fr' : '/'}
					>
						<a
							href={language.es ? '/' : language.en ? '/en' : language.fr ? '/fr' : '/'}
							className={styles.ancor}
						>
							{language.es && 'Inicio'}
							{language.en && 'Home'}
							{language.fr && 'Home'}
						</a>
					</Link>
					<span
						className={`${styles.li_underline} ${
							router.route === '/' || router.route === '/en' || router.route === '/fr'
								? `${styles.path}`
								: ''
						}`}
					/>
				</li>

				<li className={styles.navheader__li}>
					<div className={styles.li_icon}>
						<RiGalleryLine color='#2e2e2e8a' size='15px' />
					</div>
					<Link
						href={
							language.es
								? '/galeria'
								: language.en
								? '/en/gallery'
								: language.fr
								? '/fr/galerie'
								: '/galeria'
						}
					>
						<a
							href={
								language.es
									? '/galeria'
									: language.en
									? '/en/gallery'
									: language.fr
									? '/fr/galerie'
									: '/galeria'
							}
							className={styles.ancor}
						>
							{language.es && 'Galería'}
							{language.en && 'Gallery'}
							{language.fr && 'Galerie'}
						</a>
					</Link>
					<span
						className={`${styles.li_underline} ${
							router.route === '/gallery' ? `${styles.path}` : ''
						}`}
					/>
				</li>

				<li className={styles.navheader__li}>
					<div className={styles.li_icon}>
						<RiCalendarCheckLine color='#2e2e2e8a' size='15px' />
					</div>
					<Link
						href={
							language.es
								? '/reservar'
								: language.en
								? '/en/book'
								: language.fr
								? '/fr/livre'
								: '/galeria'
						}
					>
						<a
							href={
								language.es
									? '/reservar'
									: language.en
									? '/en/book'
									: language.fr
									? '/fr/livre'
									: '/galeria'
							}
							className={styles.ancor}
						>
							{language.es && 'Reservar'}
							{language.en && 'Book'}
							{language.fr && 'Livre'}
						</a>
					</Link>
					<span
						className={`${styles.li_underline} ${
							router.route === '/reservar' ? `${styles.path}` : ''
						}`}
					/>
				</li>

				<li className={styles.navheader__li}>
					<div className={styles.li_icon}>
						<RiAdminLine color='#2e2e2e8a' size='15px' />
					</div>
					<Link href={'/login'} passHref>
						<a href={'/login'} className={styles.ancor}>
							{language.es && 'Entrar'}
							{language.en && 'Login'}
							{language.fr && 'Connexion'}
						</a>
					</Link>
					<span
						className={`${styles.li_underline} ${
							router.route === '/login' ? `${styles.path}` : ''
						}`}
					/>
				</li>
			</ul>
		</nav>
	)
}

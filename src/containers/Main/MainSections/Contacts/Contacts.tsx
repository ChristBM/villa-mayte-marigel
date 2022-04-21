/** @format */

import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaMapMarkedAlt, FaArrowRight } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import { FcHome, FcPhone, FcPhoneAndroid, FcAddressBook } from 'react-icons/fc'
import { useAppSelector } from '@app/hooks'
import { MyMap, SectionTitle } from '@components/index'
import imgWebArr from './imgWebArr'
import styles from './contacts.module.css'

export function Contacts(): JSX.Element {
	let language = useAppSelector(state => state.language)

	return (
		<Fragment>
			{language.es && <SectionTitle title={'Contactos'} />}
			{language.en && <SectionTitle title={'Contacts'} />}
			{language.fr && <SectionTitle title={'Contacts'} />}

			<section>
				<Link href='https://www.google.com/maps/place/VILLA+MAYTEE+Y+MARIGEL/@22.611478,-83.7113934,18.86z/data=!4m9!1m2!2m1!1svilla+mayte+y+marigel+Vinales!3m5!1s0x88cb51723639fe67:0x5063e22b633a0c38!8m2!3d22.6115155!4d-83.711487!15sCh12aWxsYSBtYXl0ZSB5IG1hcmlnZWwgVmluYWxlc5IBBWhvdGVs'>
					<a
						href='https://www.google.com/maps/place/VILLA+MAYTEE+Y+MARIGEL/@22.611478,-83.7113934,18.86z/data=!4m9!1m2!2m1!1svilla+mayte+y+marigel+Vinales!3m5!1s0x88cb51723639fe67:0x5063e22b633a0c38!8m2!3d22.6115155!4d-83.711487!15sCh12aWxsYSBtYXl0ZSB5IG1hcmlnZWwgVmluYWxlc5IBBWhvdGVs'
						className={styles.map_link}
						target='_blank'
						rel='noreferrer'
					>
						<span>
							<FaMapMarkedAlt color='#320ab8' size='40px' />
						</span>
						<span className={styles.link_text}>
							{language.es && 'Ver en Google Maps'}
							{language.en && 'View in Google Maps'}
							{language.fr && 'Voir sur Google Maps'}
						</span>
						<span>
							<FaArrowRight color='#320ab8' size='15px' />
						</span>
					</a>
				</Link>
			</section>

			<MyMap />

			<h3 className={styles.contact_subt}>
				{language.es && 'Puede encontrarnos en: '}
				{language.en && 'You can find us at: '}
				{language.fr && 'Vous pouvez nous trouver à '}
			</h3>

			<section className={styles.contact_webs}>
				{imgWebArr.map(dataWeb => (
					<div className={styles.web_mini_card} key={Math.random().toString(36).slice(2)}>
						<Link href={dataWeb.url}>
							<a
								href={dataWeb.url}
								className={styles.web_mini_link}
								target='_blank'
								rel='noreferrer'
							>
								<Image src={dataWeb.img} alt='' loading='lazy' />
								<p>
									{dataWeb.title}
									<span>
										<FiArrowUpRight size='15px' color='#2E2E2E' />
									</span>
								</p>
							</a>
						</Link>
					</div>
				))}
			</section>

			<h3 className={styles.contact_subt}>
				{language.es && 'Detalles de Contacto: '}
				{language.en && 'Contact Details: '}
				{language.fr && 'Détails de contact : '}
			</h3>

			<section className={styles.contact_details}>
				<article className={styles.article_detail}>
					<FcHome size='30px' />
					<div>
						{language.es && <p>Dirección:</p>}
						{language.en && <p>Address:</p>}
						{language.fr && <p>Adresse:</p>}
						<p>
							{language.es && 'Calle Sergio Dopico #17 A, Municipio Viñales'}
							{language.en && 'Sergio Dopico Street #17 A, Municipality Viñales'}
							{language.fr && 'Calle Sergio Dopico #17 A, Municipalité de Viñales'}
						</p>
					</div>
				</article>

				<article className={styles.article_detail}>
					<FcPhone size='30px' />
					<div className={styles.detail_text}>
						{language.es && <p>Teléfono:</p>}
						{language.en && <p>Phone:</p>}
						{language.fr && <p>Téléphone:</p>}
						<p>48-69-5491</p>
					</div>
				</article>

				<article className={styles.article_detail}>
					<FcPhoneAndroid size='30px' />
					<div>
						{language.es && <p>Móvil:</p>}
						{language.en && <p>Mobile:</p>}
						{language.fr && <p>Mobile:</p>}
						<p>+53 53-71-5736</p>
					</div>
				</article>

				<article className={styles.article_detail}>
					<FcAddressBook size='30px' />
					<div>
						{language.es && <p>Correo:</p>}
						{language.en && <p>Email:</p>}
						{language.fr && <p>Courrier électronique:</p>}
						<p>mayteboffill@gmail.com</p>
					</div>
				</article>
			</section>
		</Fragment>
	)
}

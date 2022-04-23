/** @format */

import { Fragment } from 'react'
import Image from 'next/image'
import { useAppSelector } from '@app/hooks'
import { SectionTitle, RentRoom } from '@components/index'
import sigA from '@public/signatures/signature1b.png'
import sigB from '@public/signatures/signature2a.png'
import welcome_txt from './welcom_text'
import styles from './welcome.module.css'

export function Welcome(): JSX.Element {
	let language = useAppSelector(state => state.language)

	return (
		<Fragment>
			{language.es && <SectionTitle title={welcome_txt.es.sec_title} />}
			{language.en && <SectionTitle title={welcome_txt.en.sec_title} />}
			{language.fr && <SectionTitle title={welcome_txt.fr.sec_title} />}

			<section className={styles.rentroom}>
				<RentRoom />
			</section>

			<article className={styles.article}>
				{language.es && <p>{welcome_txt.es.article[0]}</p>}
				{language.en && <p>{welcome_txt.en.article[0]}</p>}
				{language.fr && <p>{welcome_txt.fr.article[0]}</p>}
				<br />
				{language.es && <p>{welcome_txt.es.article[1]}</p>}
				{language.en && <p>{welcome_txt.en.article[1]}</p>}
				{language.fr && <p>{welcome_txt.fr.article[1]}</p>}
				<br />
				{language.es && <p>{welcome_txt.es.article[2]}</p>}
				{language.en && <p>{welcome_txt.en.article[2]}</p>}
				{language.fr && <p>{welcome_txt.fr.article[2]}</p>}
			</article>

			<section className={styles.signatures}>
				<div className={styles.signatures_cont}>
					<Image src={sigA} alt='' width={50} height={50} />
					<Image src={sigB} alt='' width={50} height={50} />
				</div>
			</section>
		</Fragment>
	)
}

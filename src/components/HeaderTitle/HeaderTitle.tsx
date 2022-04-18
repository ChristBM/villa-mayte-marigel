/** @format */

import Image from 'next/image'
import styles from './headerTitle.module.css'
import logo from '@public/icons/logo.svg'

type Props = {
	title: string
	subtitle: string
}

export function HeaderTitle({ title, subtitle }: Props): JSX.Element {
	return (
		<div className={styles.title_cont}>
			<div className={styles.logo}>
				<Image src={logo} alt='logotipo' loading='eager' />
			</div>
			<h1 className={styles.title}>{title}</h1>
			<h2 className={styles.subtitle}>{subtitle}</h2>
		</div>
	)
}

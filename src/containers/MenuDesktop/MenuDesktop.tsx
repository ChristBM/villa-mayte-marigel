/** @format */

import Image from 'next/image'
import Link from 'next/link'
import { LangBtn, NavHeader } from '@components/index'
import logo from '@public/icons/logo.svg'
import styles from './menuDesktop.module.css'
import { useAppSelector } from '@app/hooks'

export function MenuDesktop(): JSX.Element {
	let language = useAppSelector(state => state.language)

	return (
		<div className={styles.menudesktop}>
			<Link
				href={language.es ? '/' : language.en ? '/en' : language.fr ? '/fr' : '/'}
				passHref
			>
				<a href={language.es ? '/' : language.en ? '/en' : language.fr ? '/fr' : '/'}>
					<Image src={logo} alt='logotipo' loading='eager' width={50} height={50} />
				</a>
			</Link>
			<NavHeader />
			<LangBtn />
		</div>
	)
}

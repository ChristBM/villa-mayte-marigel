/** @format */

import { useAppSelector } from '@app/hooks'
import styles from './menuMobile.module.css'

import { LangBtn, SepMenu } from '@components/index'
import { NavHeader } from '@components/index'

export function MenuMobile(): JSX.Element {
	const isOpen = useAppSelector(state => state.menuMobile.isOpen)
	return (
		<div className={`${styles.menu_cont} ${isOpen ? `${styles.up_menu}` : ''}`}>
			<div className={styles.separador}>
				<SepMenu />
			</div>
			<LangBtn />
			<NavHeader />
		</div>
	)
}

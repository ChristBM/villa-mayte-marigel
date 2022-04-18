/** @format */

import { useAppDispatch, useAppSelector } from '@app/hooks'
import { toggleMenu } from '@features/menuMobile/menuMobileSlice'
import styles from './hamburger.module.css'

export function HamburgerIcon(): JSX.Element {
	const isOpen = useAppSelector(state => state.menuMobile.isOpen)
	const dispatch = useAppDispatch()

	return (
		<div className={styles.hamburger_cont}>
			<button
				className={styles.hamburger}
				onClick={() => dispatch(toggleMenu())}
				onKeyDown={() => dispatch(toggleMenu())}
			>
				<div
					className={`${styles.hamburger__elem_top} ${isOpen ? `${styles.x_top}` : ''}`}
				/>
				<div
					className={`${styles.hamburger__elem_middle} ${
						isOpen ? `${styles.x_middle}` : ''
					}`}
				/>
				<div
					className={`${styles.hamburger__elem_bottom} ${
						isOpen ? `${styles.x_bottom}` : ''
					}`}
				/>
			</button>
		</div>
	)
}

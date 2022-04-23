/** @format */

import { useAppSelector } from '@app/hooks'
import { RiArrowDownLine } from 'react-icons/ri'
import styles from './goDown.module.css'

export function GoDownArrow(): JSX.Element {
	let options = useAppSelector(state => state.options)

	const goDown = () => {
		window.scroll({
			top: 7000,
			behavior: 'smooth',
		})
	}

	return (
		<button
			className={`${styles.go_down} ${options.isOpen ? styles.arrow_show : ''}`}
			onClick={goDown}
			title='Go to the bottom'
		>
			<RiArrowDownLine size='25px' color='#fff' />
		</button>
	)
}

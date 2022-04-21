/** @format */

import { useAppSelector } from '@app/hooks'
import { RiArrowUpLine } from 'react-icons/ri'
import styles from './goUp.module.css'

export function GoUpArrow(): JSX.Element {
	let options = useAppSelector(state => state.options)

	const goUp = () => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<button
			className={`${styles.go_up} ${options.isOpen ? styles.arrow_show : ''}`}
			onClick={goUp}
			title='Go to the top'
		>
			<RiArrowUpLine size='25px' color='#fff' />
		</button>
	)
}

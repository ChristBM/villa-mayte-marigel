/** @format */

import { useAppDispatch, useAppSelector } from '@app/hooks'
import { toggleOptions } from '@features/options/optionSlice'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import styles from './options.module.css'

export function Options(): JSX.Element {
	let options = useAppSelector(state => state.options)
	const dispatch = useAppDispatch()

	return (
		<button className={styles.options} onClick={() => dispatch(toggleOptions())}>
			<MdOutlineArrowBackIosNew
				size='15px'
				color='#fff'
				className={`${styles.arrow} ${options.isOpen ? styles.arrow_lft : ''}`}
			/>
		</button>
	)
}

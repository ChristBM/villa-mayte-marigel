/** @format */

import Link from 'next/link'
import { useAppSelector } from '@app/hooks'
import { BsWhatsapp } from 'react-icons/bs'
import styles from './whatsapp.module.css'

export function Whatsapp(): JSX.Element {
	let options = useAppSelector(state => state.options)

	return (
		<div className={`${styles.whatsapp} ${options.isOpen ? styles.whatsapp_show : ''}`}>
			<Link href='https://api.whatsapp.com/send?phone=5353715736&text=%F0%9F%8F%A1%20Villa%20Mayte%20y%20Marigel%20%22el%20jard%C3%ADn%20de%20los%20colibr%C3%ADs%22'>
				<a
					href='https://api.whatsapp.com/send?phone=5353715736&text=%F0%9F%8F%A1%20Villa%20Mayte%20y%20Marigel%20%22el%20jard%C3%ADn%20de%20los%20colibr%C3%ADs%22'
					target='_blank'
					rel='noreferrer'
				>
					<BsWhatsapp size='20px' color='#fff' />
				</a>
			</Link>
		</div>
	)
}

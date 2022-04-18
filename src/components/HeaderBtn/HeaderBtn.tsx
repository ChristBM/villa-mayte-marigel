/** @format */

import { useRouter, NextRouter } from 'next/router'
import Image from 'next/image'
import { useAppSelector } from '@app/hooks'
import reserve from '@public/icons/reservar.svg'
import styles from './headerBtn.module.css'

type Props = {
	btnText: string
}

export function HeaderBtn({ btnText }: Props): JSX.Element {
	let language = useAppSelector(state => state.language)
	let router: NextRouter = useRouter()

	const onReserve = () => {
		language.es
			? router.push('/reservar')
			: language.en
			? router.push('/en/book')
			: language.fr
			? router.push('/fr/livre')
			: null
	}

	return (
		<button className={styles.btn} onClick={onReserve}>
			<Image src={reserve} alt='icono de calendario de reserva' />
			<p>{btnText}</p>
		</button>
	)
}

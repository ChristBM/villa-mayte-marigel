/** @format */

import { Fragment } from 'react'
import { SectionTitle, SepTopWhite, RoomServices, SepTopBlack } from '@components/index'
import { useAppSelector } from '@app/hooks'
import styles from './services.module.css'

export function Services() {
	let language = useAppSelector(state => state.language)

	return (
		<Fragment>
			<div className={styles.serv_separator}>
				<SepTopWhite />
			</div>
			{language.es && <SectionTitle title={'Servicios'} />}
			{language.en && <SectionTitle title={'Services'} />}
			{language.fr && <SectionTitle title={'Services'} />}
			<RoomServices />
			<div className={styles.serv_separator_bottom}>
				<SepTopBlack />
			</div>
		</Fragment>
	)
}

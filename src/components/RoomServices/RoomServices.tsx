/** @format */

import { useAppSelector } from '@app/hooks'
import { MdLocalLaundryService, MdCleanHands } from 'react-icons/md'
import { IoRestaurantSharp } from 'react-icons/io5'
import {
	FaParking,
	FaRegSnowflake,
	FaLanguage,
	FaConciergeBell,
	FaBath,
	FaBed,
	FaHome,
} from 'react-icons/fa'
import room_text from './room_texts'
import styles from './roomServices.module.css'

interface ServiceIconInterface {
	icon: JSX.Element
	text: JSX.Element[]
}

const iconsArr: ServiceIconInterface[] = [
	{
		icon: <FaLanguage size='45px' color='#333' />,
		text: [
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.es.lang}
			</p>,
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.en.lang}
			</p>,
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.fr.lang}
			</p>,
		],
	},
	{
		icon: <FaHome size='45px' color='#333' />,
		text: [
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.es.room}
			</p>,
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.en.room}
			</p>,
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.fr.room}
			</p>,
		],
	},
	{
		icon: <FaBed size='45px' color='#333' />,
		text: [
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.es.bed}
			</p>,
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.en.bed}
			</p>,
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.fr.bed}
			</p>,
		],
	},
	{
		icon: <FaRegSnowflake size='45px' color='#333' />,
		text: [
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.es.air}
			</p>,
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.en.air}
			</p>,
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.fr.air}
			</p>,
		],
	},
	{
		icon: <FaBath size='45px' color='#333' />,
		text: [
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.es.bath}
			</p>,
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.en.bath}
			</p>,
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.fr.bath}
			</p>,
		],
	},
	{
		icon: <IoRestaurantSharp size='45px' color='#333' />,
		text: [
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.es.food}
			</p>,
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.en.food}
			</p>,
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.fr.food}
			</p>,
		],
	},
	{
		icon: <FaConciergeBell size='45px' color='#333' />,
		text: [
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.es.serv}
			</p>,
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.en.serv}
			</p>,
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.fr.serv}
			</p>,
		],
	},
	{
		icon: <FaParking size='45px' color='#333' />,
		text: [
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.es.parking}
			</p>,
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.en.parking}
			</p>,
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.fr.parking}
			</p>,
		],
	},
	{
		icon: <MdLocalLaundryService size='45px' color='#333' />,
		text: [
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.es.loundry}
			</p>,
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.en.loundry}
			</p>,
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.fr.loundry}
			</p>,
		],
	},
	{
		icon: <MdCleanHands size='45px' color='#333' />,
		text: [
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.es.clean}
			</p>,
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.en.clean}
			</p>,
			<p key={Math.random().toString(36).slice(2)} className={styles.text}>
				{room_text.fr.clean}
			</p>,
		],
	},
]

export function RoomServices(): JSX.Element {
	let language = useAppSelector(state => state.language)

	return (
		<ul className={styles.services}>
			{iconsArr.map(elem => (
				<li className={styles.li} key={Math.random().toString(36).slice(2)}>
					{elem.icon}
					{language.es && elem.text[0]}
					{language.en && elem.text[1]}
					{language.fr && elem.text[2]}
				</li>
			))}
		</ul>
	)
}

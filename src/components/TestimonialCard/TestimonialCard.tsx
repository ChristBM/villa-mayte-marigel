/** @format */

import React, { useEffect, useState } from 'react'
import { RiSingleQuotesL, RiSingleQuotesR } from 'react-icons/ri'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import styles from './testimCard.module.css'

type Props = {
	text: string
	author: string
	stars: number
}

export function TestimonialCard({ text, author, stars }: Props): JSX.Element {
	const [state, setState] = useState(['fill', 'fill', 'fill', 'fill', 'fill'])

	useEffect(() => {
		if (stars < 5) {
			let starsArr = []
			let cont = stars
			for (let i = 0; i < 5; i++) {
				if (cont > 0) {
					starsArr.push('fill')
					cont--
				} else {
					starsArr.push('line')
				}
			}
			setState([...starsArr])
		}
	}, [stars])

	return (
		<div className={styles.testimonialCard}>
			<p className={styles.testimonialCard__text}>
				<span>
					<RiSingleQuotesL size='15px' color='#000' />
				</span>
				{text}
				<span>
					<RiSingleQuotesR size='15px' color='#000' />
				</span>
			</p>
			<div className={styles.testimonialCard__author_con}>
				<p className={styles.testimonialCard__author}>{author}</p>
			</div>
			<div className={styles.testimonialCard__stars}>
				{state.map((m, index) => {
					if (m === 'fill') {
						return <AiFillStar size='20px' color='#f7001f' key={index} />
					} else {
						return <AiOutlineStar size='20px' color='#f7001f' key={index} />
					}
				})}
			</div>
		</div>
	)
}

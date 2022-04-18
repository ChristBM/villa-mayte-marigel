/** @format */

import React from 'react'
import styles from './sectionTitle.module.css'

type Props = {
	title: string
	color?: string
}

export function SectionTitle({ title, color }: Props): JSX.Element {
	return (
		<div className={styles.title_cont}>
			<h2 className='title'>{title}</h2>
			<span className={styles.li_underline} />
			<style jsx>{`
				.title {
					font-size: 2.5rem;
					font-family: 'Signika Negative';
					font-weight: 600;
					letter-spacing: 1px;
					color: ${color === 'light' ? '#F6F6F6' : '#2E2E2E'};
					animation: bg 10000ms ease-in-out infinite;
				}
			`}</style>
		</div>
	)
}

/** @format */

import React, { useEffect, useState } from 'react'
import { RiSingleQuotesL, RiSingleQuotesR } from 'react-icons/ri'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

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
		<div className='testimonialCard'>
			<p className='testimonialCard__text'>
				<span>
					<RiSingleQuotesL size='15px' color='#000' />
				</span>
				{text}
				<span>
					<RiSingleQuotesR size='15px' color='#000' />
				</span>
			</p>
			<div className='testimonialCard__author_con'>
				<p className='testimonialCard__author'>{author}</p>
			</div>
			<div className='testimonialCard__stars'>
				{state.map((m, index) => {
					if (m === 'fill') {
						return <AiFillStar size='20px' color='#f7001f' key={index} />
					} else {
						return <AiOutlineStar size='20px' color='#f7001f' key={index} />
					}
				})}
			</div>
			<style jsx>{`
				.testimonialCard {
					display: flex;
					width: 300px;
					min-height: 150px;
					height: auto;
					padding: 20px 15px 20px 35px;
					border-radius: 5px;
					position: relative;
					flex-direction: column;
					align-items: center;
					gap: 10px;

					background-color: #ffffff;
					background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='308' height='308' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='88' y1='88' x2='0' y2='0'%3E%3Cstop offset='0' stop-color='%23ab0000'/%3E%3Cstop offset='1' stop-color='%23e40011'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='75' y1='76' x2='168' y2='160'%3E%3Cstop offset='0' stop-color='%23828282'/%3E%3Cstop offset='0.09' stop-color='%23a5a5a5'/%3E%3Cstop offset='0.18' stop-color='%23bdbdbd'/%3E%3Cstop offset='0.31' stop-color='%23d0d0d0'/%3E%3Cstop offset='0.44' stop-color='%23dddddd'/%3E%3Cstop offset='0.59' stop-color='%23e8e8e8'/%3E%3Cstop offset='0.75' stop-color='%23f0f0f0'/%3E%3Cstop offset='1' stop-color='%23F6F6F6'/%3E%3C/linearGradient%3E%3Cfilter id='c' x='0' y='0' width='200%25' height='200%25'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='12' /%3E%3C/filter%3E%3C/defs%3E%3Cpolygon fill='url(%23a)' points='0 174 0 0 174 0'/%3E%3Cpath fill='%23000' fill-opacity='0.21' filter='url(%23c)' d='M121.8 174C59.2 153.1 0 174 0 174s63.5-73.8 87-94c24.4-20.9 87-80 87-80S107.9 104.4 121.8 174z'/%3E%3Cpath fill='url(%23b)' d='M142.7 142.7C59.2 142.7 0 174 0 174s42-66.3 74.9-99.3S174 0 174 0S142.7 62.6 142.7 142.7z'/%3E%3C/svg%3E");
					background-size: 50px;
					background-repeat: no-repeat;
					background-attachment: fixed;
					background-position: top left;

					box-shadow: 0px 10px 15px #0000004d;
				}
				.testimonialCard__text {
					text-decoration: none;
					text-align: left;
					font-size: 1.2rem;
					font-weight: 500;
					line-height: calc(1.2rem * 1.6);
					color: #030303;
				}
				.testimonialCard__author_con {
					display: flex;
					width: 100%;
					padding-block-end: 40px;
					justify-content: flex-end;
					align-items: center;
				}
				.testimonialCard__author {
					text-decoration: none;
					text-align: center;
					font-size: 1.4rem;
					font-weight: 700;
					line-height: calc(1.4rem * 1.6);
					color: #030303;
				}
				.testimonialCard__stars {
					width: 100%;
					position: absolute;
					bottom: 20px;
					left: 35px;
				}
			`}</style>
		</div>
	)
}

/*
					max-width: 60ch;
					height: 200px;
					white-space: nowrap;
					overflow-y: hidden;
					text-overflow: ellipsis;
*/

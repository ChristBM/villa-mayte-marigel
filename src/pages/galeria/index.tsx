/** @format */

import Link from 'next/link'
import { useAppSelector } from '@app/hooks'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { SectionTitle } from '@components/index'

export default function ComingSoon(): JSX.Element {
	let language = useAppSelector(state => state.language)
	return (
		<div className='coming_soon'>
			<SectionTitle title='COOMING SOON' color='#1d1d1d' />
			<Link href={language.es ? '/' : language.en ? '/en' : language.fr ? '/fr' : '/'}>
				<a href={language.es ? '/' : language.en ? '/en' : language.fr ? '/fr' : '/'}>
					<RiArrowGoBackFill size='25px' color='#000' />
					Go Home
				</a>
			</Link>
			<style jsx>{`
				.coming_soon {
					display: flex;
					width: 100%;
					min-height: 100vh;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					font-size: 2rem;
				}
				a {
					display: flex;
					align-items: center;
					justify-content: center;
				}
				a:hover {
					text-decoration: underline;
				}
			`}</style>
		</div>
	)
}

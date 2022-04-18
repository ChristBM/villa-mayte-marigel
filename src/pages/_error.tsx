/** @format */

import { NextPage } from 'next'
import Link from 'next/link'
import { useAppSelector } from '@app/hooks'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { SectionTitle } from '@components/index'

const Error: NextPage = () => {
	let language = useAppSelector(state => state.language)
	return (
		<div>
			<div className='book'>
				<SectionTitle title='Error 404 Page not Found' color='#1d1d1d' />
				<Link href={language.es ? '/' : language.en ? '/en' : language.fr ? '/fr' : '/'}>
					<a href={language.es ? '/' : language.en ? '/en' : language.fr ? '/fr' : '/'}>
						<RiArrowGoBackFill size='25px' color='#000' />
						Go Home
					</a>
				</Link>
			</div>
			<style jsx>{`
				.book {
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

export default Error

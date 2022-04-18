/** @format */

import { NextPage } from 'next'

import { HamburgerIcon } from '@components/index'

import { Header } from '@containers/index'
import { Main } from '@containers/index'
import { Footer } from '@containers/index'

import { HomeLayout } from '@layouts/index'

const Home: NextPage = () => {
	return (
		<HomeLayout
			title={'Villa Mayte y Marigel'}
			renderHeader={() => <Header />}
			renderFooter={() => <Footer />}
			renderBtnMenu={() => <HamburgerIcon />}
		>
			<Main />
		</HomeLayout>
	)
}

export default Home

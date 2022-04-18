/** @format */

import { MenuMobile } from '@containers/index'
import Head from 'next/head'
import styles from './homeLayout.module.css'

type Props = {
	children: JSX.Element
	title?: string
	renderHeader: () => JSX.Element
	renderFooter: () => JSX.Element
	renderBtnMenu: () => JSX.Element
}

export function HomeLayout({
	children,
	title,
	renderHeader,
	renderFooter,
	renderBtnMenu,
}: Props): JSX.Element {
	return (
		<div className={styles.layout}>
			<Head>
				<title>{title || 'Villa Mayte y Marigel'}</title>
				<meta name='author' content='ChristBM' />
				<meta name='description' content={`Renta de habitaciones en Viñales: ${title}`} />
				<meta
					name='keywords'
					content='Viñales, Villa, Mogotes, Naturaleza, Renta de Habitaciones, Hostal'
				/>
				<meta charSet='utf-8' />
				<meta name='robots' content='index-follow' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			</Head>

			<header className={styles.header}>{renderHeader()}</header>

			<aside className={styles.aside}>
				<MenuMobile />
				{renderBtnMenu()}
			</aside>

			<main className={styles.main}>{children}</main>

			<footer className={styles.footer}>{renderFooter()}</footer>
		</div>
	)
}

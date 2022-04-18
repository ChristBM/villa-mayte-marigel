/** @format */

import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { Favicon } from '@components/index'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang='es'>
				<Head>
					<Favicon />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument

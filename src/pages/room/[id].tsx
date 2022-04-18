/** @format */

import { useRouter, NextRouter } from 'next/router'

export default function Rooms() {
	let router: NextRouter = useRouter()

	console.log(router.query)

	return <div>Hola{router.query.id} </div>
}

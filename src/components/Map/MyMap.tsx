/** @format */

import { useState } from 'react'
import Image from 'next/image'
import { Map, ZoomControl, Overlay } from 'pigeon-maps'
import { stamenTerrain } from 'pigeon-maps/providers'
import overlay from '@public/icons/logo.svg'

interface centerInterface {
	center: [number, number]
	zoom: number
}

const InitialState: centerInterface = {
	center: [22.611583760513938, -83.71149149872232],
	zoom: 9,
}

export function MyMap(): JSX.Element {
	const [state, setState] = useState(InitialState)

	return (
		<div className='map_cont'>
			<Map
				provider={stamenTerrain}
				height={300}
				center={state.center}
				zoom={state.zoom}
				onBoundsChanged={({ center, zoom }) => setState({ zoom: zoom, center: center })}
			>
				<Overlay anchor={[22.611583760513938, -83.71149149872232]} offset={[20, 10]}>
					<Image
						src={overlay}
						width={50}
						height={50}
						alt='Villa Mayte y Marigel'
						title='Villa Mayte y Marigel: "el jardín de los colibrís"'
					/>
				</Overlay>
				<ZoomControl />
			</Map>
			<style jsx>{`
				.map_cont {
					display: flex;
					width: 100%;
					height: auto;
					padding-inline: 30px;
					justify-content: center;
					align-items: center;
				}
				@media screen and (min-width: 1050px) {
					.map_cont {
						display: flex;
						width: 800px;
						height: auto;
						padding-inline: 30px;
						justify-content: center;
						align-items: center;
					}
				}
			`}</style>
		</div>
	)
}

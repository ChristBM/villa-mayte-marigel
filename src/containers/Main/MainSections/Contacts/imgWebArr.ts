/** @format */

import cubachezlhabitant from '@public/appsReserva/cubachezlhabitant.png'
import expedia from '@public/appsReserva/expedia.svg'
import airbnb from '@public/appsReserva/airbnb.svg'
import orbitz from '@public/appsReserva/orbitz.svg'
/* import hotels from '@public/appsReserva/hotels.png'
import bbinn from '@public/appsReserva/bbinn.png' */

export interface logsWebDataInterface {
	title: string
	img: StaticImageData
	url: string
}

const imgWebArr: logsWebDataInterface[] = [
	{
		title: "CUBA CHEZ L'HABITANT",
		img: cubachezlhabitant,
		url: 'https://www.cubachezlhabitant.com',
	},
	{
		title: 'Expedia',
		img: expedia,
		url: 'https://www.expedia.com/Vinales-Hotels-Villa-Mayte-Y-Marigel.h20177280.Hotel-Information',
	},
	{
		title: 'airbnb',
		img: airbnb,
		url: 'https://es.airbnb.com/rooms/24855270?_set_bev_on_new_domain=1647547767_YWFmY2IxM2U3NWRk&source_impression_id=p3_1647547776_fMkDR3XpaD7psiuS',
	},
	{
		title: 'ORBITZ',
		img: orbitz,
		url: 'https://www.orbitz.com/Vinales-Hotels-Villa-Mayte-Y-Marigel.h20177280.Hotel-Information',
	},
	/* 	{
      title: 'Hotels.com',
      img: hotels,
      url: 'https://www.hotels.com/ho646672960/villa-mayte-y-marigel-vinales-cuba/?q-rooms=1&q-room-0-adults=2&q-room-0-children=0'
    },
    {
      title: 'BBInn',
      img: bbinn,
      url: 'https://www.bbinnvinales.com/casa-particular/vinales-valley/casa-villa-mayte-y-marigel/'
    }, */
]

export default imgWebArr

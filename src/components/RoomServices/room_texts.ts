/** @format */

export interface RoomTxtInterface {
	es: {
		lang: string
		room: string
		bed: string
		air: string
		bath: string
		food: string
		serv: string
		parking: string
		loundry: string
		clean: string
	}
	en: {
		lang: string
		room: string
		bed: string
		air: string
		bath: string
		food: string
		serv: string
		parking: string
		loundry: string
		clean: string
	}
	fr: {
		lang: string
		room: string
		bed: string
		air: string
		bath: string
		food: string
		serv: string
		parking: string
		loundry: string
		clean: string
	}
}

const room_texts: RoomTxtInterface = {
	es: {
		lang: 'Español, Francés e Inglés',
		room: '2 Habitaciones Independientes con Baño',
		bed: '2 Camas, 4 Personas por Habitación',
		air: 'Aire Acondicionado y Minibar',
		bath: 'Baños Privados, Agua Fría y Caliente',
		food: 'Desayuno y Cena. Comedor Compartido',
		serv: 'Servicio de Habitación',
		parking: 'Parqueo Incluido',
		loundry: 'Servicio de Lavandería',
		clean: 'Higiene y Desinfección Garantizadas',
	},
	en: {
		lang: 'Spanish, French and English',
		room: '2 Independent Bedrooms with Bathroom',
		bed: '2 Beds, 4 Persons per Room',
		air: 'Air Conditioning and Minibar',
		bath: 'Private Bathrooms, Hot and Cold Water',
		food: 'Breakfast and Dinner. Shared Dining Room',
		serv: 'Room Service',
		parking: 'Parking Included',
		loundry: 'Laundry Service',
		clean: 'Hygiene and Disinfection Guaranteed',
	},
	fr: {
		lang: 'Anglais, français et espagnol',
		room: '2 chambres indépendantes avec salle de bain',
		bed: '2 Lits, 4 Personnes par Chambre',
		air: 'Air conditionné et Minibar',
		bath: 'Salles de bain privées, eau chaude et froide',
		food: 'Petit-déjeuner et dîner. Salle à manger commune',
		serv: 'Service de chambre',
		parking: 'Parking inclus',
		loundry: 'Service de blanchisserie',
		clean: 'Hygiène et désinfection garanties',
	},
}

export default room_texts

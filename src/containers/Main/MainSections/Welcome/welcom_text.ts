/** @format */

export interface WelcomeTxtInterface {
	es: {
		sec_title: string
		article: string[]
	}
	en: {
		sec_title: string
		article: string[]
	}
	fr: {
		sec_title: string
		article: string[]
	}
}

const welcome_txt: WelcomeTxtInterface = {
	es: {
		sec_title: 'Bienvenido',
		article: [
			'Bienvenido a nuestro hogar en el maravilloso Valle de Viñales. Primero nos presentamos, nosotras somos Maytee y Marigel; hermanas nacidas en este hermoso lugar y queremos brindarte nuestra hospitalidad y experiencia para que aproveche al máximo su estancia.',
			'Nuestra Villa, "el jardín de los colibrís" está ubicada a pocos minutos del centro del pueblo y con muy buenas vistas al Valle.Esperamos poder ayudarle a resolver cualquier duda si es que le interesa venir a visitarnos.',
			'Conozca Viñales por dentro, su cultura, su gastronomía y su gente. De este modo le abrimos la puertas a que viva una experiencia única.',
		],
	},
	en: {
		sec_title: 'Welcome',
		article: [
			'Welcome to our home in the wonderful Viñales Valley. First we introduce ourselves, we are Maytee and Marigel; sisters born in this beautiful place and we want to offer you our hospitality and experience so that you can make the most of your stay.',
			'Our Villa, "el jardín de los colibrís" is located a few minutes from the center of the village and with very good views of the valley, we hope to help you solve any questions if you are interested in coming to visit us.',
			'Get to know Viñales from the inside, its culture, its gastronomy and its people. In this way we open the doors for you to live a unique experience.',
		],
	},
	fr: {
		sec_title: 'Bienvenue',
		article: [
			"Bienvenue dans notre maison située dans la merveilleuse vallée de Viñales. Tout d'abord, nous aimerions nous présenter, nous sommes Maytee et Marigel, des sœurs nées dans ce magnifique endroit et nous voulons vous offrir notre hospitalité et notre expérience afin que vous puissiez profiter au maximum de votre séjour.",
			"Notre villa, 'el jardín de los colibrís', est située à quelques minutes du centre du village et offre une très belle vue sur la vallée. Nous espérons pouvoir répondre à toutes vos questions si vous souhaitez nous rendre visite.",
			"Apprenez à connaître Viñales de l'intérieur, sa culture, sa gastronomie et ses habitants. De cette façon, nous vous ouvrons les portes pour que vous viviez une expérience unique.",
		],
	},
}

export default welcome_txt

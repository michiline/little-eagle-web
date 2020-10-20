import details from './details'
import people from './people'
import travels from './travels'
import budjenjeBoginje from './budjenje-boginje'
import chillVibez from './chill-vibez'
import weddingRM from './wedding-rm'
import bovaniDesign from './bovani-design'
import engagementJK from './engagement-jk'
import familyIAA from './family-iaa'

const baseUrl = process.env.REACT_APP_IMG_URL

export const coverMobile = `${baseUrl}/mobile/cover-32.jpg`
export const eagle1Mobile = `${baseUrl}/mobile/eagle-1.png`
export const eagle2Mobile = `${baseUrl}/mobile/eagle-2.png`
export const photoMobile = `${baseUrl}/mobile/photo.png`
export const hiMobile = `${baseUrl}/mobile/hi-32.jpg`
export const reflectorMobile = `${baseUrl}/mobile/reflector.png`
export const about1Mobile = `${baseUrl}/mobile/about1.jpg`
export const about2Mobile = `${baseUrl}/mobile/about2.jpg`
export const about3Mobile = `${baseUrl}/mobile/about3.jpg`

export const cover = {
	mobile: `${baseUrl}/cover-mobile-3-2.jpg`,
	web: `${baseUrl}/cover-web-3-2.jpg`
}

export const eagle1 = `${baseUrl}/eagle-1.png`

export const eagle2 = {
	white: `${baseUrl}/eagle-2-white.png`
}

export const photo = {
	white: `${baseUrl}/photo-white.png`
}

export const facts1 = `${baseUrl}/facts-1.jpg`
export const facts2 = `${baseUrl}/facts-2.jpg`
export const facts3 = `${baseUrl}/facts-3.jpg`

export const hi = `${baseUrl}/hi-3-3-2.jpg`

export const reflector = `${baseUrl}/reflector.png`

export const spinner = `${baseUrl}/spinner.gif`

export const galleryBox = {
	people: `${baseUrl}/gallery/cover/people.jpg`,
	travels: `${baseUrl}/gallery/cover/travels.jpg`,
	details: `${baseUrl}/gallery/cover/details.jpg`,
	sessions: `${baseUrl}/gallery/cover/sessions.jpg`,
	chillVibez: `${baseUrl}/gallery/cover/chill-vibez.jpg`,
	budjenjeBoginje: `${baseUrl}/gallery/cover/budjenje-boginje.jpg`,
	weddingRM: `${baseUrl}/gallery/cover/wedding-rm.jpg`,
	bovaniDesign: `${baseUrl}/gallery/cover/bovani-design.jpg`,
	engagementJK: `${baseUrl}/gallery/cover/engagement-jk.jpg`,
	familyIAA: `${baseUrl}/gallery/cover/family-iaa.jpg`,
}

export const gallery = {
	people,
	travels,
	details,
	sessions: {
		'budjenje-boginje': budjenjeBoginje,
		'chill-vibez': chillVibez,
		'wedding-rm': weddingRM,
		'bovani-design': bovaniDesign,
		'engagement-jk': engagementJK,
		'family-iaa': familyIAA
	}
}
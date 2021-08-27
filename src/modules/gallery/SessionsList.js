import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useWindow, ScrollToTop } from '../../hooks'
import { galleryBox } from '../../images'

const SessionsList = () => {
	const history = useHistory()
	const [windowWidth] = useWindow()
	let GalleryRowElem = (
		<>
			<GalleryRow>
				<GalleryBox
					onClick={() => history.push('/gallery/sessions/wedding-mt')}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.weddingMT} />
					<GalleryBoxText>Wedding M & T</GalleryBoxText>
				</GalleryBox>
				<GalleryBox
					onClick={() =>
						history.push('/gallery/sessions/wedding-istria')
					}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.weddingIstria} />
					<GalleryBoxText>Wedding Istria</GalleryBoxText>
				</GalleryBox>
			</GalleryRow>
			<GalleryRow>
				<GalleryBox
					onClick={() =>
						history.push('/gallery/sessions/lifestyle-istria')
					}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.lifestyleIstria} />
					<GalleryBoxText>Lifestyle Istria</GalleryBoxText>
				</GalleryBox>
				<GalleryBox
					onClick={() => history.push('/gallery/sessions/wedding-mp')}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.weddingMP} />
					<GalleryBoxText>Wedding M & P</GalleryBoxText>
				</GalleryBox>
			</GalleryRow>
			<GalleryRow>
				<GalleryBox
					onClick={() =>
						history.push('/gallery/sessions/studio-zimat')
					}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.studioZimat} />
					<GalleryBoxText>Studio Zimat</GalleryBoxText>
				</GalleryBox>
				<GalleryBox
					onClick={() =>
						history.push('/gallery/sessions/baptism-karla')
					}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.baptismKarla} />
					<GalleryBoxText>Baptism Karla</GalleryBoxText>
				</GalleryBox>
			</GalleryRow>
			<GalleryRow>
				<GalleryBox
					onClick={() => history.push('/gallery/sessions/yoni')}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.yoni} />
					<GalleryBoxText>YONI</GalleryBoxText>
				</GalleryBox>
				<GalleryBox
					onClick={() => history.push('/gallery/sessions/blogledalo')}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.blogledalo} />
					<GalleryBoxText>Blogledalo</GalleryBoxText>
				</GalleryBox>
			</GalleryRow>
			<GalleryRow>
				<GalleryBox
					onClick={() =>
						history.push('/gallery/sessions/maternity-sara')
					}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.maternitySara} />
					<GalleryBoxText>Maternity Sara</GalleryBoxText>
				</GalleryBox>
				<GalleryBox
					onClick={() => history.push('/gallery/sessions/family-iaa')}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.familyIAA} />
					<GalleryBoxText>Family I & A & A</GalleryBoxText>
				</GalleryBox>
			</GalleryRow>
			<GalleryRow>
				<GalleryBox
					onClick={() =>
						history.push('/gallery/sessions/engagement-jk')
					}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.engagementJK} />
					<GalleryBoxText>Engagement J & K</GalleryBoxText>
				</GalleryBox>
				<GalleryBox
					onClick={() =>
						history.push('/gallery/sessions/bovani-design')
					}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.bovaniDesign} />
					<GalleryBoxText>Bovani Design Website</GalleryBoxText>
				</GalleryBox>
			</GalleryRow>
			<GalleryRow>
				<GalleryBox
					onClick={() => history.push('/gallery/sessions/wedding-rm')}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.weddingRM} />
					<GalleryBoxText>Wedding R & M</GalleryBoxText>
				</GalleryBox>
				<GalleryBox
					onClick={() =>
						history.push('/gallery/sessions/budjenje-boginje')
					}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.budjenjeBoginje} />
					<GalleryBoxText>Buđenje Boginje</GalleryBoxText>
				</GalleryBox>
			</GalleryRow>
			<GalleryRow>
				<GalleryBox
					onClick={() =>
						history.push('/gallery/sessions/chill-vibez')
					}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.chillVibez} />
					<GalleryBoxText>Chill Vibez</GalleryBoxText>
				</GalleryBox>
			</GalleryRow>
		</>
	)
	if (windowWidth < 750) {
		GalleryRowElem = (
			<>
				<GalleryBox
					onClick={() => history.push('/gallery/sessions/wedding-mt')}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.weddingMT} />
					<GalleryBoxText>Wedding M & T</GalleryBoxText>
				</GalleryBox>
				<GalleryBox
					onClick={() =>
						history.push('/gallery/sessions/wedding-istria')
					}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.weddingIstria} />
					<GalleryBoxText>Wedding Istria</GalleryBoxText>
				</GalleryBox>
				<GalleryBox
					onClick={() =>
						history.push('/gallery/sessions/lifestyle-istria')
					}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.lifestyleIstria} />
					<GalleryBoxText>Lifestyle Istria</GalleryBoxText>
				</GalleryBox>
				<GalleryBox
					onClick={() => history.push('/gallery/sessions/wedding-mp')}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.weddingMP} />
					<GalleryBoxText>Wedding M & P</GalleryBoxText>
				</GalleryBox>
				<GalleryBox
					onClick={() =>
						history.push('/gallery/sessions/studio-zimat')
					}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.studioZimat} />
					<GalleryBoxText>Studio Zimat</GalleryBoxText>
				</GalleryBox>
				<GalleryBox
					onClick={() =>
						history.push('/gallery/sessions/baptism-karla')
					}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.baptismKarla} />
					<GalleryBoxText>Baptism Karla</GalleryBoxText>
				</GalleryBox>
				<GalleryBox
					onClick={() => history.push('/gallery/sessions/yoni')}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.yoni} />
					<GalleryBoxText>YONI</GalleryBoxText>
				</GalleryBox>
				<GalleryBox
					onClick={() => history.push('/gallery/sessions/blogledalo')}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.blogledalo} />
					<GalleryBoxText>Blogledalo</GalleryBoxText>
				</GalleryBox>
				<GalleryBox
					onClick={() =>
						history.push('/gallery/sessions/maternity-sara')
					}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.maternitySara} />
					<GalleryBoxText>Maternity Sara</GalleryBoxText>
				</GalleryBox>
				<GalleryBox
					onClick={() => history.push('/gallery/sessions/family-iaa')}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.familyIAA} />
					<GalleryBoxText>Family I & A & A</GalleryBoxText>
				</GalleryBox>
				<GalleryBox
					onClick={() =>
						history.push('/gallery/sessions/engagement-jk')
					}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.engagementJK} />
					<GalleryBoxText>Engagement J & K</GalleryBoxText>
				</GalleryBox>
				<GalleryBox
					onClick={() =>
						history.push('/gallery/sessions/bovani-design')
					}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.bovaniDesign} />
					<GalleryBoxText>Bovani Design Website</GalleryBoxText>
				</GalleryBox>
				<GalleryBox
					onClick={() => history.push('/gallery/sessions/wedding-rm')}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.weddingRM} />
					<GalleryBoxText>Wedding R & M</GalleryBoxText>
				</GalleryBox>
				<GalleryBox
					onClick={() =>
						history.push('/gallery/sessions/budjenje-boginje')
					}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.budjenjeBoginje} />
					<GalleryBoxText>Buđenje Boginje</GalleryBoxText>
				</GalleryBox>
				<GalleryBox
					onClick={() =>
						history.push('/gallery/sessions/chill-vibez')
					}
				>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.chillVibez} />
					<GalleryBoxText>Chill Vibez</GalleryBoxText>
				</GalleryBox>
			</>
		)
	}
	return (
		<RootContainer>
			<ScrollToTop />
			{GalleryRowElem}
		</RootContainer>
	)
}

const RootContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 850px;
`

const GalleryRow = styled.div`
	width: min-content;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: calc(460px * 2 + 25px);
	&:first-of-type {
		margin-top: 0;
	}
	&:last-of-type {
		margin-bottom: 25px;
	}
	margin-top: 25px;
	@media only screen and (max-width: 1050px) {
		width: calc(460px / 1.4 * 2 + 25px);
	}
`

const GalleryBox = styled.div`
	width: 460px;
	height: 388px;
	@media only screen and (max-width: 1050px) {
		width: calc(460px / 1.4);
		height: calc(388px / 1.4);
	}
	@media only screen and (max-width: 750px) {
		width: 90vw;
		height: 68vw;
		margin-top: 25px;
		&:last-of-type {
			margin-bottom: 25px;
		}
	}
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	position: relative;
	cursor: pointer;
`

const GalleryBoxImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
`

const GalleryBoxOverlay = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background: linear-gradient(
		0deg,
		rgba(255, 216, 193, 0.7),
		rgba(255, 216, 193, 0.7)
	);
	visibility: hidden;
	opacity: 0;
	transition-property: visibility, opacity;
	transition-duration: 500ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	${GalleryBox}:hover & {
		visibility: visible;
		opacity: 1;
	}
	z-index: 3;
`

const GalleryBoxText = styled.div`
	font-family: Abril Fatface;
	width: min-content;
	font-style: normal;
	font-weight: normal;
	font-size: 48px;
	line-height: 65px;
	color: #fffbf7;
	text-shadow: 5px 10px 10px rgba(121, 117, 117, 0.15);
	margin-left: 25px;
	margin-bottom: 25px;
	transition-property: font-size, line-height;
	transition-duration: 500ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	z-index: 4;
	${GalleryBox}:hover & {
		font-size: 70px;
		line-height: 95px;
	}
	@media only screen and (max-width: 1050px) {
		${GalleryBox}:hover & {
			font-size: calc(70px / 1.4);
			line-height: calc(95px / 1.4);
		}
	}
`

export default SessionsList

import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useWindow } from '../../hooks'
import { galleryBox } from '../../images'

const GalleryList = () => {
  const history = useHistory()
  const [windowWidth] = useWindow()
  let GalleryRowElem = (
	  <>
		<GalleryRow>
			<GalleryBox onClick={() => history.push('/gallery/people')}>
				<GalleryBoxOverlay />
				<GalleryBoxImage src={galleryBox.people}/>
				<GalleryBoxText>People</GalleryBoxText>
			</GalleryBox>
			<GalleryBox onClick={() => history.push('/gallery/travels')}>
				<GalleryBoxOverlay />
				<GalleryBoxImage src={galleryBox.travels}/>
				<GalleryBoxText>Travels</GalleryBoxText>
			</GalleryBox>
		</GalleryRow>
		<GalleryRow>
			<GalleryBox onClick={() => history.push('/gallery/details')}>
				<GalleryBoxOverlay />
				<GalleryBoxImage src={galleryBox.details}/>
				<GalleryBoxText>Details</GalleryBoxText>
			</GalleryBox>
				<GalleryBox onClick={() => history.push('/gallery/projects')}>
				<GalleryBoxOverlay />
				<GalleryBoxImage src={galleryBox.projects}/>
				<GalleryBoxText>Projects</GalleryBoxText>
			</GalleryBox>
		</GalleryRow>
	  </>
  )
  if (windowWidth < 750) {
		GalleryRowElem = (
			<>
				<GalleryBox onClick={() => history.push('/gallery/people')}>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.people}/>
					<GalleryBoxText>People</GalleryBoxText>
				</GalleryBox>
				<GalleryBox onClick={() => history.push('/gallery/travels')}>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.travels}/>
					<GalleryBoxText>Travels</GalleryBoxText>
				</GalleryBox>
				<GalleryBox onClick={() => history.push('/gallery/details')}>
					<GalleryBoxOverlay />	
					<GalleryBoxImage src={galleryBox.details}/>
					<GalleryBoxText>Details</GalleryBoxText>
				</GalleryBox>
				<GalleryBox onClick={() => history.push('/gallery/projects')}>
					<GalleryBoxOverlay />
					<GalleryBoxImage src={galleryBox.projects}/>
					<GalleryBoxText>Projects</GalleryBoxText>
				</GalleryBox>
			</>
		)
	}
  return (
    <RootContainer>
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
		margin-bottom: 25px;
	}
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
	background: linear-gradient(0deg, rgba(255, 216, 193, 0.7), rgba(255, 216, 193, 0.7));
	visibility: hidden;
	opacity: 0;
	transition-property: visibility, opacity;
	transition-duration: 500ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	${GalleryBox}:hover &{
		visibility: visible;
		opacity: 1;
	}
	z-index: 3;
`

const GalleryBoxText = styled.div`
	font-family: Abril Fatface;
	font-style: normal;
	font-weight: normal;
	font-size: 48px;
	line-height: 65px;
	color: #FFFBF7;
	text-shadow: 5px 10px 10px rgba(121, 117, 117, 0.15);
	margin-left: 25px;
	margin-bottom: 25px;
	transition-property: font-size, line-height;
	transition-duration: 500ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	z-index: 4;
	${GalleryBox}:hover & {
		font-size: 94px;
		line-height: 128px;
	}
	@media only screen and (max-width: 1050px) {
		${GalleryBox}:hover & {
			font-size: calc(94px / 1.4);
			line-height: calc(128px / 1.4);
		}
	}

`



export default GalleryList

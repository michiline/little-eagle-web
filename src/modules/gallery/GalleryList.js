import React from 'react'
import {useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import { useWindow } from '../../hooks'

const GalleryList = () => {
  let { path, url } = useRouteMatch()
  const [windowWidth] = useWindow()
  let GalleryRowElem = (
	  <>
		<GalleryRow>
			<GalleryBox />
			<GalleryBox />
		</GalleryRow>
		<GalleryRow>
			<GalleryBox />
			<GalleryBox />
		</GalleryRow>
	  </>
  )
  if (windowWidth < 750) {
		GalleryRowElem = (
			<>
				<GalleryBox />
				<GalleryBox />
				<GalleryBox />
				<GalleryBox />
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
	background-color: red;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 850px;
	@media only screen and (max-width: 1050px) {
		min-height: calc(850px / 1.4);
	}
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
	background-color: blue;
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
		&:first-of-type {
			margin-top: 50px;
		}
		&:last-of-type {
			margin-bottom: 50px;
		}
	}

`

export default GalleryList

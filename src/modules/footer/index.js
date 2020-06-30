import React from 'react'
import styled from 'styled-components'
import { FacebookLightIcon, InstagramLightIcon } from '../../components'
import { useWindow } from '../../hooks'

const Footer = () => {
	const [windowWidth] = useWindow()
	let ContentElem = (
		<Center>
			<LeftColumn> 
				<Row>COPYRIGHT</Row>
				<Row>LittleEagle Photography</Row>
				<Row style={{ marginTop: '5%'}}>Ana Orlić</Row>
				<Row>Zagreb, Croatia</Row>
			</LeftColumn>
			<RightColumn>
				<Row>CONTACT ME:</Row>
				<Row style={{ width: '100px'}}><FacebookLightIcon/><InstagramLightIcon/></Row>
				<Row>little.eagle.photo@pm.me</Row>
			</RightColumn>
		</Center>		
	)
	if (windowWidth <= 750) {
		ContentElem = (
			<Center>
			<RightColumn>
				<Row>CONTACT ME:</Row>
				<Row style={{ width: '100px'}}><FacebookLightIcon/><InstagramLightIcon/></Row>
				<Row>little.eagle.photo@pm.me</Row>
			</RightColumn>
			<LeftColumn> 
				<Row>COPYRIGHT</Row>
				<Row>LittleEagle</Row>
				<Row>Photography</Row>
				<Row style={{ marginTop: '15%'}}>Ana Orlić</Row>
				<Row>Zagreb, Croatia</Row>
			</LeftColumn>
		</Center>
		)
	}
  return (
	  <RootContainer>
		  {ContentElem}
	  </RootContainer>
  )
}

const RootContainer = styled.div`
	width: 100%;
	height: min-content;
	background: #605454;
	padding: 10%;
`

const Center = styled.div`
	width: 100%;
	height: min-content;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	@media only screen and (max-width: 750px) {
		flex-direction: column;
	}
`

const Column = styled.div`
	width: min-content;
	display: flex;
	flex-direction: column;
`

const LeftColumn = styled(Column)`
	width: min-content;
	display: flex;
	flex-direction: column;
	@media only screen and (max-width: 750px) {
		margin-top: 20%;
	}
`

const RightColumn = styled(Column)`
	align-items: flex-end;
	justify-content: space-between;
	@media only screen and (max-width: 750px) {
		align-items: flex-start;
		height: 125px;
	}
`

const Row = styled.div`
	width: max-content;
	font-family: Raleway;
	font-style: normal;
	font-weight: bold;
	font-size: 25px;
	line-height: 29px;
	color: #FFFBF7;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	@media only screen and (max-width: 1050px) {
		font-size: calc(25px / 1.3);
		line-height: calc(29px / 1.3);
	}
`

export default Footer
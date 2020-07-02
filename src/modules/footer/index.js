import React from 'react'
import styled from 'styled-components'
import { FacebookLightButton, InstagramLightButton } from '../../components'
import { useWindow } from '../../hooks'
import { externalLink } from '../../utils'

const Footer = () => {
	const [windowWidth] = useWindow()
	let ContentElem = (
		<Center>
			<LeftColumn> 
				<Row><Text>COPYRIGHT</Text></Row>
				<Row><Text>LittleEagle Photography</Text></Row>
				<Row style={{ marginTop: '5%'}}><Text>Ana Orlić</Text></Row>
				<Row><Text>Zagreb, Croatia</Text></Row>
			</LeftColumn>
			<RightColumn>
				<Row><Text>CONTACT ME:</Text></Row>
				<Row style={{ width: '100px'}}>
					<FacebookLightButton onClick={() => externalLink('https://www.facebook.com/littleeaglephoto')}/>
          			<InstagramLightButton onClick={() => externalLink('https://www.instagram.com/littleeaglephoto')}/>
				</Row>
				<Row><ContactMail href={'mailto:little.eagle.photo@pm.me'}>little.eagle.photo@pm.me</ContactMail></Row>
			</RightColumn>
		</Center>		
	)
	if (windowWidth <= 750) {
		ContentElem = (
			<Center>
			<RightColumn>
				<Row><Text>CONTACT ME:</Text></Row>
				<Row style={{ width: '100px'}}>
					<FacebookLightButton onClick={() => externalLink('https://www.facebook.com/littleeaglephoto')}/>
          			<InstagramLightButton onClick={() => externalLink('https://www.instagram.com/littleeaglephoto')}/>
				</Row>
				<Row><ContactMail href={'mailto:little.eagle.photo@pm.me'}>little.eagle.photo@pm.me</ContactMail></Row>
			</RightColumn>
			<LeftColumn> 
				<Row><Text>COPYRIGHT</Text></Row>
				<Row><Text>LittleEagle</Text></Row>
				<Row><Text>Photography</Text></Row>
				<Row style={{ marginTop: '10%'}}><Text>Ana Orlić</Text></Row>
				<Row><Text>Zagreb, Croatia</Text></Row>
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
	width: min-content;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

const Text = styled.div`
	width: max-content;
	font-family: Raleway;
	font-style: normal;
	font-weight: bold;
	font-size: 25px;
	line-height: 29px;
	color: #FFFBF7;
	justify-content: space-between;
	@media only screen and (max-width: 1050px) {
		font-size: calc(25px / 1.3);
		line-height: calc(29px / 1.3);
	}
`

const ContactMail = styled.a`
	font-family: Raleway;
	font-style: normal;
	font-weight: bold;
	font-size: 25px;
	line-height: 29px;
	color: #FFFBF7;
	justify-content: space-between;
	@media only screen and (max-width: 1050px) {
		font-size: calc(25px / 1.3);
		line-height: calc(29px / 1.3);
	}
	text-decoration: none;
	&:hover {
	  cursor: pointer;
	  text-decoration: underline;
	}
`

export default Footer
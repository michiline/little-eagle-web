import React from 'react'
import styled from 'styled-components'
import { reflector } from '../../images'
import { FacebookDarkButton, InstagramDarkButton } from '../../components'
import { externalLink } from '../../utils'
import { useHistory } from 'react-router-dom'

const Services = ({ servicesRef }) => {
	const history = useHistory()
	return (
		<RootContainer ref={servicesRef}>
			<TextContainer>
				<ColoredText>I can help you capture: </ColoredText>
				<Text>special moments, portraits and events. 
					You can contact me for shots in my home studio or on some beautiful outdoor location.
				</Text>
				<GalleryButton onClick={() => history.push('/gallery')}>Visit my full gallery</GalleryButton>
			</TextContainer>
			<ReachOutContainer>
				<ReachOutText>
					... or reach out to me right away:
				</ReachOutText>
				<ReachOutBorder />
				<SocialContainer>
					<FacebookDarkButton onClick={() => externalLink('https://www.facebook.com/littleeaglephoto')}/>
          			<InstagramDarkButton onClick={() => externalLink('https://www.instagram.com/littleeaglephoto')}/>
				</SocialContainer>
				<ContactMail href={'mailto:little.eagle.photo@pm.me'}>
					little.eagle.photo@pm.me
				</ContactMail>
			</ReachOutContainer>
			<ReflectorImage src={reflector}/>
		</RootContainer>
	)
}

const RootContainer = styled.div`
	padding-left: 10vw;
	padding-top: 5vw;
	padding-bottom: 20vw;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	@media only screen and (max-width: 750px) {
		padding-bottom: 10vw;
	}
`

const ReflectorImage = styled.img`
	height: calc(60vw / 1.4);
	width: 60vw;
	object-fit: cover;
	@media only screen and (max-width: 750px) {
		width: 80vw;
		height: calc(80vw / 1.4);
	}
`

const TextContainer = styled.div`
	position: absolute;
	top: 6.5vw;
	left: 14vw;
	width: 50vw;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	@media only screen and (max-width: 750px) {
		left: 10vw;
		top: 10vw;
		width: 62vw;
		height: calc(60vw / 1.4);
	}
`

const Text = styled.div`
	font-family: Abril Fatface;
	font-style: normal;
	font-weight: normal;
	font-size: 4vw;
	line-height: calc(4vw * 1.35);
	@media only screen and (max-width: 750px) {
		font-size: 5vw;
		line-height: calc(5vw * 1.35);
	}
	color: #C59D9A;
	white-space: initial;
`

const ColoredText = styled.div`
	font-family: Abril Fatface;
	font-style: normal;
	font-weight: normal;
	font-size: 4vw;
	line-height: calc(4vw * 1.35);
	@media only screen and (max-width: 750px) {
		font-size: 5vw;
		line-height: calc(5vw * 1.35);
	}

	color: #605454;
`

const GalleryButton = styled.button`
	width: 30vw;
	height: 6vw;
	margin-top: 3vw;
	background: #FFFFFF;
	border: 5px solid #C59D9A;
	backdrop-filter: blur(4px);
	font-family: Raleway;
	font-style: normal;
	font-weight: bold;
	font-size: 1.5vw;
	line-height: 1.75vw;
	text-transform: uppercase;
	color: #C59D9A;
	text-align: center;
	cursor: pointer;
	flex-shrink: 0;
	&:active {
		transform: translateY(2px);
	  }
	@media only screen and (max-width: 1050px) {
		border: 4px solid #C59D9A;
	}
	@media only screen and (max-width: 750px) {
		width: 50vw;
		height: 10vw;
		font-size: 3vw;
		line-height: 3.5vw;
		border: 3px solid #C59D9A;
	}
	@media only screen and (min-width: 750px) {
		&:hover {
		  background-color: #C59D9A;
		  color: #FFFBF7;
		  border: none;
		}
		transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	  }
`

const ReachOutContainer = styled.div`
	position: absolute;
	right: 10vw;
	bottom: 2.5vw;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	@media only screen and (max-width: 750px) {
		display: none;
	}
`

const ReachOutText = styled.div`
	font-family: Raleway;
	font-style: normal;
	font-weight: bold;
	font-size: 1.5vw;
	line-height: 1.75vw;
	text-align: right;
	text-transform: uppercase;
	color: #FFD8C1;
`

const ReachOutBorder = styled.div`
	border: 2.5px solid #FFD8C1;
	margin-top: 2vw;
	margin-bottom: 2vw;
	width: 100%;
	@media only screen and (max-width: 1050px) {
		border: 1.5px solid #FFD8C1;
	}
`

const SocialContainer = styled.div`
	width: 100px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

const ContactMail = styled.a`
	font-family: Raleway;
	font-style: normal;
	font-weight: bold;
	font-size: 1.5vw;
	line-height: 1.75vw;
	color: #D3B1AF;
	margin-top: 2vw;
	text-decoration: none;
	&:hover {
	  cursor: pointer;
	  text-decoration: underline;
	}
`

export default Services
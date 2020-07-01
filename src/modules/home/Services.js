import React from 'react'
import styled from 'styled-components'
import { reflector } from '../../images'
import { FacebookDarkIcon, InstagramDarkIcon } from '../../components'

const Services = ({ servicesRef }) => {
	return (
		<RootContainer ref={servicesRef}>
			<TextContainer>
				<ColoredText>I can help you capture </ColoredText>
				<Text>special moments, portraits and events. 
					You can contact me for shots in my home studio or on some beautiful outdoor location.
				</Text>
				<GalleryButton>Visit my full galery</GalleryButton>
			</TextContainer>
			<ReachOutContainer>
				<ReachOutText>
					... or reach out to me right away:
				</ReachOutText>
				<ReachOutBorder />
				<SocialContainer>
					<FacebookDarkIcon />
					<InstagramDarkIcon />
				</SocialContainer>
				<ContactMail>
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
	color: #FFD8C1;
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
	color: #C59D9A;
`

const GalleryButton = styled.div`
	width: max-content;
	margin-top: 2vw;
	padding-top: 2vw;
	padding-bottom: 2vw;
	padding-left: 4vw;
	padding-right: 4vw;
	background: #FFFFFF;
	border: 5px solid #C59D9A;
	box-sizing: border-box;
	backdrop-filter: blur(4px);
	font-family: Raleway;
	font-style: normal;
	font-weight: bold;
	font-size: 1.5vw;
	line-height: 1.75vw;
	text-transform: uppercase;
	color: #C59D9A;
	text-align: center;
	@media only screen and (max-width: 1050px) {
		border: 4px solid #C59D9A;
	}
	@media only screen and (max-width: 750px) {
		font-size: 3vw;
		line-height: 3.5vw;
		border: 3px solid #C59D9A;
		padding-top: 4vw;
		padding-bottom: 4vw;
		padding-left: 8vw;
		padding-right: 8vw;
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

const ContactMail = styled.div`
	font-family: Raleway;
	font-style: normal;
	font-weight: bold;
	font-size: 1.5vw;
	line-height: 1.75vw;
	color: #D3B1AF;
	margin-top: 2vw;
`

export default Services
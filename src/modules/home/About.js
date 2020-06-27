import React from 'react'
import styled from 'styled-components'
import { hi, eagle1 } from '../../images'
import { useWindow } from '../../hooks'

const About = () => {
	const [windowWidth] = useWindow()
	let HeaderElem = (
		<HeaderContainer>
			<H1>Hi, I'm Ana!</H1>
		</HeaderContainer>
	)
	let ImageElem = (
		<ImageColumn>
			<ImageContainer>
				<Image src={hi}/>
		  		<ImageFrame />
		  		<Eagle1Image src={eagle1} />
			</ImageContainer>
		</ImageColumn>
	)
	if (windowWidth < 750) {
		HeaderElem = ''
		ImageElem = (
			<ImageWrapper>
				<ImageColumn>
					<ImageContainer>
						<Image src={hi}/>
				 		<ImageFrame />
						<Eagle1Image src={eagle1} />
						<HeaderContainer>
							<H1>Hi, I'm Ana!</H1>
						</HeaderContainer>
					</ImageContainer>
				</ImageColumn>
			</ImageWrapper>
		)
	}
  	return (
	  <RootContainer>
		  {ImageElem}
		  <TextColumn>
			{HeaderElem}
			<TextContainer>
				<Text>
					By degree a psychologist, by heart a photographer. 
					Based in Zagreb (Croatia), available worldwide.
				</Text>
				<Text>
					I don’t like to be in front of the camera, but I love being the person behind it. 
					Capturing special moments and creating unforgettable memories gives me the feeling of excitement and fills me with joy.
				</Text>
				<Text>
				I am constantly learning and improving my skills through various workshops and photography courses. 
				With my style evolving, I am open to different ideas and projects. 
				</Text>
				<H2>If you have an idea, wish or a vision, feel free to get in touch.</H2>
			</TextContainer>
		  </TextColumn>
	  </RootContainer>
  )
}

const RootContainer = styled.div`
	width: 100%;
	height: 100vh;
	padding: 50px;
	min-height: 850px;
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background: linear-gradient(0deg, #FFFFFF 70%, #FFEFEF 70%);
	@media only screen and (max-width: 1350px) {
		height: 50vh;
		min-height: 750px;
	}
	@media only screen and (max-width: 1050px) {
		height: 50vh;
		min-height: 600px;
		padding-bottom: 25px;
	}
	@media only screen and (max-width: 750px) {
		flex-wrap: wrap;
		padding: 0;
		height: min-content;
	}
	overflow: hidden;

`

const ImageWrapper = styled.div`
	width: 100%;
	height: min-content;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
	background: #FFEFEF;
	padding-top: 50px;
	padding-bottom: 50px;
`

const ImageColumn = styled.div`
	width: min-content;
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	@media only screen and (max-width: 750px) {
		justify-content: flex-start;
		width: 100%;
		height: min-content;
	}
`

const ImageContainer = styled.div`
	height: 95%;
	position: relative;
	@media only screen and (max-width: 1350px) {
		height: calc(95% / 1.3);
		min-height: 625px;
	}
	@media only screen and (max-width: 1050px) {
		height: calc(95% / 1.6);
		min-height: 450px;
	}
	@media only screen and (max-width: 750px) {
		width: 90%;
	}
`

const Image = styled.img`
	display: block;
	object-fit: cover;
	height: 100%;
	z-index: 2;
	position: relative;
	@media only screen and (max-width: 750px) {
		height: auto;
		width: 100%;
	}
`

const ImageFrame = styled.div`
	width: 100%;
	height: 100%;
	border: 5px solid #D3B1AF;
	position: absolute;
	top: 35px;
	left: 35px;
	@media only screen and (max-width: 1350px) {
		top: 25px;
		left: 25px;
	}
	@media only screen and (max-width: 1050px) {
		top: 20px;
		left: 20px;
	}
	@media only screen and (max-width: 750px) {
		top: 15px
		left: 15px;
	}

`

const Eagle1Image = styled.img`
	width: 340px;
	height: 240px;
	position: absolute;
	top: 0;
	right: -175px;
	z-index: 3;
	@media only screen and (max-width: 1350px) {
		width: calc(340px / 1.3);
		height: calc(240px / 1.3);
		right: calc(-175px / 1.3);
	}
	@media only screen and (max-width: 1050px) {
		width: calc(340px / 1.6);
		height: calc(240px / 1.6);
		right: calc(-175px / 1.6);
	}
	@media only screen and (max-width: 750px) {
		right: -40px;
		top: -30px;
		transform: rotate(19.02deg);
	}
	@media only screen and (max-width: 400px) {
		width: calc(340px / 2.5);
		height: calc(240px / 2.5);
		transform: rotate(19.02deg);
	}
`

const TextColumn = styled.div`
	padding-left: 125px;
	width: min-content;
	height: 100%;
	@media only screen and (max-width: 1050px) {
		padding-left: calc(125px / 1.4);
	}
	@media only screen and (max-width: 750px) {
		padding: 0px;
		width: 100%;
	}
`

const HeaderContainer = styled.div`
	width: 100%;
	height: calc(30% - 20px);
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: flex-start;
	@media only screen and (max-width: 750px) {
		height: auto;
		position: absolute;
		bottom: 5%;
		left: 10%;
	}
`

const H1 = styled.div`
	font-family: Abril Fatface;
	font-style: normal;
	font-weight: normal;
	font-size: 61px;
	line-height: 65px;
	color: #C59D9A;
	padding-bottom: 20px;
	@media only screen and (max-width: 1350px) {
		font-size: calc(61px / 1.3);
		line-height: calc(65px / 1.3);
		padding-bottom: calc(20px / 1.3);
	}
	@media only screen and (max-width: 1050px) {
		font-size: calc(61px / 1.6);
		line-height: calc(65px / 1.6);
		padding-bottom: calc(20px / 1.6);
	}
	@media only screen and (max-width: 750px) {
		padding: 0;
		color: #FFEFEF;
	}
	z-index: 2;
`

const TextContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	@media only screen and (max-width: 750px) {
		padding: 25px;
		align-items: center;
	}
`

const Text = styled.div`
	font-family: Raleway;
	font-style: normal;
	font-weight: 500;
	font-size: 25px;
	line-height: 29px;
	color: #C59D9A;
	margin-top: 20px;
	width: 100%;
	max-width: 550px;
	@media only screen and (max-width: 1350px) {
		font-size: calc(25px / 1.3);
		line-height: calc(29px / 1.3);
		margin-top: calc(20px / 1.3);
		max-width: calc(550px / 1.3);
	}
	@media only screen and (max-width: 1050px) {
		font-size: calc(25px / 1.6);
		line-height: calc(29px / 1.6);
		margin-top: calc(20px / 1.6);
		max-width: calc(550px / 1.6);
	}
`

const H2 = styled.div`
	font-family: Raleway;
	font-style: normal;
	font-weight: 700;
	font-size: 27px;
	line-height: 32px;
	color: #C59D9A;
	margin-top: 20px;
	width: 550px;
	max-width: 550px;
	@media only screen and (max-width: 1350px) {
		margin-top: calc(30px / 1.3);
		font-size: calc(27px / 1.3);
		line-height: calc(32px / 1.3);
		max-width: calc(550px / 1.3);
	}
	@media only screen and (max-width: 1050px) {
		margin-top: calc(30px / 1.6);
		font-size: calc(27px / 1.6);
		line-height: calc(32px / 1.6);
		max-width: calc(550px / 1.6);
	}
	@media only screen and (max-width: 750px) {
		width: 100%;
	}
	
`

export default About
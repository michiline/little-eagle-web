import React from 'react'
import styled from 'styled-components'
import { hi, eagle1 } from '../../images'

const About = () => {
  return (
	  <RootContainer>
		  <ImageColumn>
			  <ImageContainer>
			  	<Image src={hi}/>
				<ImageFrame />
				<Eagle1Image src={eagle1} />
			  </ImageContainer>
		  </ImageColumn>
		  <TextColumn>
			<HeaderContainer>
				<H1>Hi, I'm Ana!</H1>
			</HeaderContainer>
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
	min-height: 675px;
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background: linear-gradient(0deg, #FFFFFF 70%, #FFEFEF 70%);
`

const ImageColumn = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`

const ImageContainer = styled.div`
	width: min-content;
	height: 85%;
	position: relative;
`

const Image = styled.img`
	display: block;
	object-fit: cover;
	height: 100%;
	z-index: 2;
	position: relative;
`

const ImageFrame = styled.div`
	width: 100%;
	height: 100%;
	border: 5px solid #D3B1AF;
	position: absolute;
	top: 25px;
	left: 25px;
`

const Eagle1Image = styled.img`
	width: 340px;
	height: 240px;
	position: absolute;
	top: 0;
	right: -175px;
	z-index: 3;
	@media only screen and (max-width: 1280px), screen and (max-height: 800px) {
		width: calc(340px / 1.4);
		height: calc(240px / 1.4);
		right: calc(-175px / 1.4);
	}
`

const TextColumn = styled.div`
	padding-left: 100px;
	width: 100%;
	height: 100%;
`

const HeaderContainer = styled.div`
	width: 100%;
	height: 30%;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: flex-start;
`

const H1 = styled.div`
	font-family: Abril Fatface;
	font-style: normal;
	font-weight: normal;
	font-size: 61px;
	line-height: 65px;
	color: #C59D9A;
	padding-bottom: 20px;
	@media only screen and (max-width: 1280px), screen and (max-height: 800px) {
		font-size: calc(61px / 1.4);
		line-height: calc(65px / 1.4);
	}
`

const TextContainer = styled.div`
	width: 100%;
	height: 70%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`

const Text = styled.div`
	font-family: Raleway;
	font-style: normal;
	font-weight: 500;
	font-size: 25px;
	line-height: 29px;
	color: #C59D9A;
	margin-top: 20px;
	width: 500px;
	@media only screen and (max-width: 1280px), screen and (max-height: 800px) {
		width: calc(500px / 1.4);
		font-size: calc(25px / 1.4);
		line-height: calc(29px / 1.4);
	}
`

const H2 = styled.div`
	margin-top: 30px;
	font-family: Raleway;
	font-style: normal;
	font-weight: bold;
	font-size: 27px;
	line-height: 32px;
	color: #C59D9A;
	width: 500px;
	@media only screen and (max-width: 1280px), screen and (max-height: 800px) {
		width: calc(500px / 1.4);
		font-size: calc(27px / 1.4);
		line-height: calc(32px / 1.4);
	}
`


export default About
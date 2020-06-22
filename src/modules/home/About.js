import React from 'react'
import styled from 'styled-components'
import { eagle2Mobile, hiMobile } from '../../images'

const About = () => {
  return (
	<AboutScreen>
		<HiImgContainer>
			<HiImg src={hiMobile}/>
			<Eagle2Image src={eagle2Mobile}/>
			<HiText>Hi, I'm Ana!</HiText>
			<HiFrame/>
		</HiImgContainer>
		<AboutTextContainer>
			<AboutText>
			By degree a psychologist, by heart a photographer. Based in Zagreb (Croatia), available worldwide. 
			</AboutText>
			<AboutText>
			I don’t like to be in front of the camera, but I love being the person behind it. Capturing special moments and creating unforgettable memories gives me the feeling of excitement and fills me with joy. 
			</AboutText>
			<AboutText>
			I am constantly learning and improving my skills through various workshops and photography courses. With my style evolving, I am open to different ideas and projects. 
			</AboutText>
			<BoldAboutText>
				If you have an idea, wish or a vision, feel free to get in touch.
			</BoldAboutText>
		</AboutTextContainer>
	</AboutScreen>
  )
}


const AboutScreen = styled.div`
  width: 100%;
  height: min-content;
  background-color: #FFEFEF;
  display: flex;
  flex-direction: column;
  position: relative;
`

const HiImgContainer = styled.div`
  margin-top: 15%;
  width: 90%;
  height: min-content;
  position: relative;
  margin-bottom: 10%;
`

const HiImg = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  z-index: 2;
  position: relative;
`

const HiFrame = styled.div`
  width: 100%;
  height: 100%;
  border: 5px solid #D3B1AF;
  position: absolute;
  top: 25px;
  left: calc(5% + 2.5px);

`

const HiText = styled.div`
  font-family: Abril Fatface;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 65px;
  color: #FFEFEF;
  position: absolute;
  bottom: 0;
  left: 10%;
  z-index: 2;
`


const Eagle2Image = styled.img`
  width: 141px;
  height: 100px;
  position: absolute;
  right: -40px;
  top: -20px;
  z-index: 5;
  transform: rotate(20deg);
`

const AboutTextContainer = styled.div`
	width: 100%;
	height: min-content;
	background-color: white;
	padding-left: 10%;
	padding-right: 10%;
`

const AboutText = styled.div`
	color: #C59D9A;
	font-family: Raleway;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 21px;
	margin-top: 16px;
	&:first-of-type {
		margin-top: 32px !important;
	}
`

const BoldAboutText = styled(AboutText)`
	font-weight: 700;
	margin-bottom: 32px;
`
export default About
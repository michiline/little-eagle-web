import React from 'react'
import styled from 'styled-components'
import { eagle2Mobile, hiMobile, reflectorMobile } from '../../images'

const About = () => {
  return (
	<AboutScreen>
		<HiImgWrapper>
			<HiImgContainer>
				<HiImg src={hiMobile}/>
				<Eagle2Image src={eagle2Mobile}/>
				<HiText>Hi, I'm Ana!</HiText>
				<HiFrame/>
			</HiImgContainer>
		</HiImgWrapper>
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
		<GetToKnowMeContainer>
			<GetToKnowMeFrame/>
			<GetToKnowMeHeader>Get to know me better</GetToKnowMeHeader>
			<GetToKnowMeText>
				I’m a true fan of traveling. If a weekend is free, I’m on the road. 
			</GetToKnowMeText>
			<GetToKnowMeText>
				Camping is my new found passion. The goal is to increase my days spent in nature every year.
			</GetToKnowMeText>
			<GetToKnowMeText>
				I can eat a lot of ice-cream. 
			</GetToKnowMeText>
			<GetToKnowMeText>
				And watermelon. 
			</GetToKnowMeText>
			<GetToKnowMeText>
				I'm an introvert. Talking about myself is hard so imagine how much time it takes me to write this.
			</GetToKnowMeText>
			<GetToKnowMeText>
				I don’t think anyone likes summer and sea more than me. 
			</GetToKnowMeText>
			<GetToKnowMeText>
				My boyfriend and I have our travel blog. Check it out: Leagle & Mich
			</GetToKnowMeText>
			<GetToKnowMeText>
				I do yoga and have recently started including meditation in my everyday life.
			</GetToKnowMeText>
			<GetToKnowMeText>
				Little Eagle is my nickname because my surname in Croatian means just that!
			</GetToKnowMeText>
		</GetToKnowMeContainer>
		<ICanHelpYouContainer>
			<ICanHelpYouTextWrapper>
				<ReflectorImg src={reflectorMobile}/>
				<ICanHelpYouTextContainer>
					<ICanHelpYouHeader>I can help you capture</ICanHelpYouHeader>
					<ICanHelpYouText>Portraits, studio and non-studio photography, stunning landscape shots, crisp small details, and more.</ICanHelpYouText>
				</ICanHelpYouTextContainer>	
			</ICanHelpYouTextWrapper>

		</ICanHelpYouContainer>
	</AboutScreen>
  )
}


const AboutScreen = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: column;
  position: relative;
`

const HiImgWrapper = styled.div`
	background-color: #FFEFEF;
`

const HiImgContainer = styled.div`
  margin-top: 15%;
  width: 90%;
  height: min-content;
  position: relative;
  margin-bottom: 15%;
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
	padding-bottom: 10%;
	z-index: -2;
`

const AboutText = styled.div`
	color: #C59D9A;
	font-family: Raleway;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 21px;
	margin-top: 5%;
	&:first-of-type {
		margin-top: 10% !important;
	}
`

const BoldAboutText = styled(AboutText)`
	font-weight: 700;
	margin-bottom: 10%;
`

const GetToKnowMeContainer = styled.div`
	width: 90%;
	height: min-content;
	background-color: #FFEFEF;
	padding-left: 10%;
	padding-right: 10%;
	padding-bottom: 5%;
	position: relative;
`

const GetToKnowMeFrame = styled.div`
  width: 100%;
  height: calc(100%);
  border: 5px solid #D3B1AF;
  position: absolute;
  top: -25px;
  left: calc(5% + 2.5px);
  z-index: -1;
`

const GetToKnowMeHeader = styled.div`
	font-family: Abril Fatface;
	font-style: normal;
	font-weight: normal;
	font-size: 35px;
	line-height: 40px;
	color: #C59D9A;
	margin-top: 10%;
`

const GetToKnowMeText = styled.div`
	color: #C59D9A;
	font-family: Raleway;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	margin-top: 5%;
	&:last-of-type {
		margin-bottom: 10%;
	}
	text-align: left;
`

const ICanHelpYouContainer = styled.div`
	width: 100%;
	height: min-content;
`

const ICanHelpYouTextWrapper = styled.div`
	position: relative;
`

const ReflectorImg = styled.img`
width: 90%;
object-fit: cover;
z-index: -1;
`

const ICanHelpYouTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 60%;
	margin-top: 10%;
	padding-left: 10%;
	position: absolute;
	top: 0;
`

const ICanHelpYouHeader = styled.div`
	font-family: Abril Fatface;
	font-style: normal;
	font-weight: normal;
	font-size: 25px;
	line-height: 34px;
	color: #C59D9A;
`

const ICanHelpYouText = styled.div`
	font-family: Abril Fatface;
	font-style: normal;
	font-weight: normal;
	font-size: 25px;
	line-height: 34px;
	width: 100%;
	color: #FFD8C1;
`

export default About
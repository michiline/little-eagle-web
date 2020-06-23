import React, { Children } from 'react'
import styled from 'styled-components'
import { FacebookLight, InstagramLight } from '../../components/Icons'

const Footer = () => {
  return (
	<FooterContainer>
		<FooterCenterContainer>
			<ContactMeText>
				Contact me:
			</ContactMeText>
			<SocialIconsRow>
				<FacebookLight/>
				<InstagramLight />
			</SocialIconsRow>
			<ContactMail>
				little.eagle.photo@pm.me
			</ContactMail>
			<CopyrightContainer>
				<CopyRightText>
					COPYRIGHT
				</CopyRightText>
				<CopyRightText>
					LittleEagle Photography
				</CopyRightText>
				<CopyRightText style={{ 'margin-top': '10%'}}>
					Ana Orlic
				</CopyRightText>
				<CopyRightText>
					Zagreb, Croatia
				</CopyRightText>
			</CopyrightContainer>
		</FooterCenterContainer>
	</FooterContainer>
  )
}

const FooterContainer = styled.div`
	width: 100%;
	height: min-content;
	background-color: #605454;
`

const FooterCenterContainer = styled.div`
	padding-top: 15%;
	padding-left: 10%;
	padding-right: 10%;
	padding-bottom: 20%;
`

const ContactMeText = styled.div`
	font-family: Raleway;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 28px;
	text-transform: uppercase;
	color: #FFFBF7;
`

const SocialIconsRow = styled.div`
	width: 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 5%;
	margin-left: -2.5%;
`

const ContactMail = styled.div`
	margin-top: 5%;
	font-family: Raleway;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 23px;
	color: #FFFBF7;
`

const CopyrightContainer = styled.div`
	margin-top: 15%;
	width: 100%;
	height: min-content;
	display: flex;
	flex-direction: column;
`

const CopyRightText = styled.div`
	font-family: Raleway;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 28px;
	color: #FFFBF7;
`

export default Footer
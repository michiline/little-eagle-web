import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { CloseButton } from '../../components'
import { FacebookLightIcon, InstagramLightIcon } from '../../components'
import { externalLink, scrollIntoView } from '../../utils'

const Drawer = ({ showDrawer, setShowDrawer, homeRef, aboutRef, servicesRef}) => {
	return (
		<RootContainer showDrawer={showDrawer}>
			<RootWrapper>
				<FirstRow>
					<CloseButton onClick={() => setShowDrawer(false)}/>
				</FirstRow>
				<SecondRow>
					<SLinkBold onClick={() => handleLinkClick({ ref: homeRef, setShowDrawer })}>Home</SLinkBold>
					<SLink onClick={() => handleLinkClick({ ref: aboutRef, setShowDrawer })}>About me</SLink>
					<SLink onClick={() => handleLinkClick({ ref: servicesRef, setShowDrawer })}>My services</SLink>
					<SLink>Photo gallery</SLink>
					<TravelBlogLink onClick={() => externalLink('https://www.leagleandmich.com')}>Travel blog by leagle & mich</TravelBlogLink>
				</SecondRow>
				<ContactSocial>
					<Social>
						<FacebookLightIcon/>
						<InstagramLightIcon/>
					</Social>
					<Contact>
						little.eagle.photo@pm.me
					</Contact>
				</ContactSocial>
			</RootWrapper>
		</RootContainer>
	)
}

const handleLinkClick = ({ ref, setShowDrawer }) => {
	scrollIntoView(ref)
	setShowDrawer(false)
}

const RootContainer = styled.div`
	width: 400px;
	height: 100vh;
	background-color: #FF4747;
	position: fixed;
	top: 0;
	right: 0;
	opacity: 0;
	transition-property: opacity;
	transition-duration: 500ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	z-index: -1;
	z-index: 10;
	overflow-y: scroll;
	@media only screen and (max-width: 750px) {
		width: 100%;
		transform: translateY(-100vh);
		transition-property: opacity, transform;
		transition-duration: 500ms;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}
	${props => props.showDrawer && css`
		opacity: 1;
		@media only screen and (max-width: 750px) {
			transform: translateY(0);
		}
	`}
`

const RootWrapper = styled.div`
	width: 100%;
	height: 100%;
	min-height: 600px;
	display: flex;
	flex-direction: column;
	padding-left: 50px;
	padding-right: 40px;
	padding-top: 40px;
	padding-bottom: 50px;
	@media only screen and (max-width: 750px) {
		min-height: 500px;
	}
`

const FirstRow = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	height: min-content;
	align-items: center;
	justify-content: flex-end;
`

const SecondRow = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content; flex-start;
	margin-top: 10vh;
	@media only screen and (max-width: 750px) {
		margin-top: 5vh;
	}
	@media only screen and (max-width: 400px) {
		margin-top: 2.5vh;
	}
	padding-bottom: 25px;
`

const SLink = styled.div`
	font-family: Raleway;
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 42px;
	text-transform: uppercase;
	color: #FFFBF7;
	text-decoration: none;
	cursor: pointer;
	@media only screen and (max-width: 750px) {
		line-height: 50px;
	}
	@media only screen and (max-width: 400px) {
		font-size: calc(24px / 1.3);
		line-height: calc(42px / 1.3);
	}
`

const SLinkBold = styled(SLink)`
	font-weight: 900;
`

const TravelBlogLink = styled.div`
	margin-top: 10vh;
	width: 200px;
	font-family: Raleway;
	font-style: normal;
	font-weight: 900;
	font-size: 24px;
	line-height: 32px;
	text-transform: uppercase;
	color: #FFD8C1;
	text-decoration: none;
	cursor: pointer;
	@media only screen and (max-width: 400px) {
		margin-top: 5vh;
		font-size: calc(24px / 1.3);
		line-height: calc(32px / 1.3);
	}
`


const ContactSocial = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: column; 
  align-items: flex-end;
  justify-content: space-between;
  z-index: 10;
`

const Social = styled.div`
  width: 110px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 750px) {
	width: 100px;
  }

`

const Contact = styled.div`
  margin-top: 20px;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #FFFBF7;
  @media only screen and (max-width: 750px) {
	font-size: 20px;
	line-height: 24px;
  }
  @media only screen and (max-width: 400px) {
	font-size: calc(24px / 1.3);
	line-height: calc(28px / 1.3);
}
`

export default Drawer
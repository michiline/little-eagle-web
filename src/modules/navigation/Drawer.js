import React from 'react'
import { useHistory } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { CloseButton } from '../../components'
import { FacebookLightButton, InstagramLightButton } from '../../components'
import { externalLink, scrollIntoView } from '../../utils'

const Drawer = ({ showDrawer, setShowDrawer, homeRef, aboutRef, servicesRef}) => {
	const history = useHistory()
	return (
		<RootContainer showDrawer={showDrawer}>
			<RootWrapper>
				<FirstRow>
					<CloseButton onClick={() => setShowDrawer(false)}/>
				</FirstRow>
				<SecondRow>
					<SLinkBold onClick={() => handleLinkClick({ ref: homeRef, url: '/', setShowDrawer, history })}>Home</SLinkBold>
					<SLink onClick={() => handleLinkClick({ ref: aboutRef, url: '/', setShowDrawer, history })}>About me</SLink>
					<SLink onClick={() => handleLinkClick({ ref: servicesRef, url: '/', setShowDrawer, history })}>My services</SLink>
					<SLink href={'/gallery'}>Photo gallery</SLink>
					<TravelBlogLink href={'https://www.leagleandmich.com'}>Travel blog by leagle & mich</TravelBlogLink>
				</SecondRow>
				<ContactSocial>
					<Social>
						<FacebookLightButton onClick={() => externalLink('https://www.facebook.com/littleeaglephoto')}/>
          				<InstagramLightButton onClick={() => externalLink('https://www.instagram.com/littleeaglephoto')}/>
					</Social>
					<Contact href={'mailto:little.eagle.photo@pm.me'}>
						little.eagle.photo@pm.me
					</Contact>
				</ContactSocial>
			</RootWrapper>
		</RootContainer>
	)
}

const handleLinkClick = ({ ref, url, setShowDrawer, history }) => {
	if (history.location.pathname !== url) {
		history.push(url)
	}
	if (ref && ref.current) {
		scrollIntoView(ref)
	}
	setShowDrawer(false)
}

const RootContainer = styled.div`
	width: 415px;
	height: 100vh;
	background-color: #FF4747;
	position: fixed;
	top: 0;
	right: 0;
	opacity: 0;
	transition-property: visibility, opacity;
	transition-duration: 500ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	visibility: hidden;
	z-index: 10;
	overflow-y: scroll;
	@media only screen and (max-width: 750px) {
		width: 100%;
		transform: translateY(-100vh);
		transition-property: visibility, opacity, transform;
		transition-duration: 500ms;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}
	@media only screen and (min-width: 750px) {
		transform: translateX(400px);
		transition-property: visibility, opacity, transform;
		transition-duration: 500ms;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}
	${props => props.showDrawer && css`
		opacity: 1;
		visibility: visible;
		@media only screen and (max-width: 750px) {
			transform: translateY(0);
		}
		@media only screen and (min-width: 750px) {
			transform: translateX(0);
		}
	`}
`

const RootWrapper = styled.div`
	min-height: 600px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: space-between;
	padding-left: 50px;
	padding-right: 40px;
	padding-top: 40px;
	padding-bottom: 50px;
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
`

const SLink = styled.a`
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

const TravelBlogLink = styled.a`
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
		font-size: calc(24px / 1.3);
		line-height: calc(32px / 1.3);
	}
	margin-top: 5vh;
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

const Contact = styled.a`
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
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export default Drawer
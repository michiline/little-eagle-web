import React from 'react'
import { useHistory } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { HamburgerButton } from '../../components'
import { useWindow } from '../../hooks'

const Navbar = ({ showDrawer, setShowDrawer }) => {
  const history = useHistory()
  const [windowWidth] = useWindow()
  let LogoTextElem = (
    <>
        <LogoText>little</LogoText>
        <LogoTextRed>eagle</LogoTextRed>
        <LogoText>photography</LogoText>
    </>
  )
  if (windowWidth < 750) {
    LogoTextElem = (
      <>
        <LogoText>l</LogoText>
        <LogoTextRed>e</LogoTextRed>
        <LogoText>photography</LogoText>
      </>
    )
  }
  return (
    <NavbarContainer>
      <BackButton onClick={() => goBack(history)}>Back</BackButton>
      <LogoTextContainer onClick={() => window.scrollTo({ top: 0, behaviour: 'smooth'})}>
        {LogoTextElem}
      </LogoTextContainer>
      <HamburgerWrapper showDrawer={showDrawer}>
        <HamburgerButton onClick={() => setShowDrawer(true)} />
      </HamburgerWrapper>
    </NavbarContainer>
  )
}

const goBack = (history) => {
  if (history.location.pathname.startsWith('/gallery/projects/')) {
    history.push('/gallery/projects')
  } else if (history.location.pathname.startsWith('/gallery/')) {
    history.push('/gallery')
  } else {
    history.push('/')
  }
}

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  height: 105px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 40px;
  padding-left: 40px;
  @media only screen and (max-width: 750px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  z-index: 7;
  background-color: #FFFFFF;
`

const BackButton = styled.div`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  text-transform: uppercase;
  color: #FFD8C1;
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
  &:active {
    transform: translateY(2px);
  }
  @media only screen and (max-width: 750px) {
    font-size: calc(24px / 1.4);
    line-height: calc(28px / 1.4);
  }
`

const HamburgerWrapper = styled.div`
  width: min-content;
  display: flex;
  flex-direction: row;
  z-index: 10;
  opacity: 1;
  transition-property: opacity;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  ${props => props.showDrawer && css`
    opacity: 0;
    z-index: -1;
  `}
`

const LogoTextContainer = styled.div`
  width: min-content;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  &:active {
    transform: translateY(2px);
  }
  align-items: center;
`

const LogoText = styled.div`
  font-family: Abril Fatface;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 65px;
  text-align: center;
  color: #605454;
  @media only screen and (max-width: 750px) {
    font-size: calc(36px / 1.4);
    line-height: calc(65px / 1.4);
  }
`

const LogoTextRed = styled(LogoText)`
  color: #FF4747;
`

export default Navbar

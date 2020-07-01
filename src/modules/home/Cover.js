import React from 'react'
import styled, { css } from 'styled-components'
import { useWindow } from '../../hooks'
import { cover, eagle2, photo } from '../../images'
import { ArrowDownIcon, FacebookLightIcon, InstagramLightIcon } from '../../components'

const Cover = ({ homeRef, showDrawer }) => {
  const [windowWidth] = useWindow()
  let HeadersElem = (
    <>
      <Headers>
        <H1>little</H1>
        <H1Red>eagle</H1Red>
        <H1>photography</H1>
      </Headers>
      <Headers>
        <H2>The world through my lens</H2>
      </Headers>
    </>

  )
  if (windowWidth < 1000) {
    HeadersElem = (
      <>
      <Headers>
        <H1>little</H1>
        <H1Red>eagle</H1Red>
      </Headers>
      <Headers>
        <H1>photography</H1>
      </Headers>
      <Headers>
        <H2>The world</H2>
      </Headers>
      <Headers>
        <H2>through my lens</H2>
      </Headers>
    </>
    )
  } 
  return (
    <RootContainer ref={homeRef} urlWeb={cover.web} urlMobile={cover.mobile} showDrawer={showDrawer}>
      <Content>
        <Top>
          <Illustrations>
            <Eagle2Img src={eagle2.white} />
            <PhotoImg src={photo.white} />
          </Illustrations>
          {HeadersElem}
          <GalleryButton>
            View my work
          </GalleryButton>
        </Top>
        <Bottom>
          <ReadMore>
            <H3>Read more about me</H3>
            <ArrowDownIcon />
          </ReadMore>
        </Bottom>
      </Content>
      <ContactSocial>
        <Social>
          <FacebookLightIcon/>
          <InstagramLightIcon/>
        </Social>
        <Contact>
          little.eagle.photo@pm.me
        </Contact>
      </ContactSocial>
    </RootContainer>
  )
}

const RootContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 850px;
  padding: 100px 50px 50px 50px;
  background: linear-gradient(0deg, rgba(64, 54, 54, 0.3), rgba(64, 54, 54, 0.3)), url(${props => props.urlWeb});
  background-size: cover;
  background-position: 0px bottom;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1000px) {
    min-height: 750px;
  }
  @media only screen and (max-width: 600px) {
    padding-left: 25px;
    padding-right: 25px;
    min-height: 575px;
  }
  transition-property: background-position;
	transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  ${props => props.showDrawer && css`
    background-position: -200px bottom;
  `}
  @media only screen and (max-width: 750px) {
    background: linear-gradient(0deg, rgba(64, 54, 54, 0.3), rgba(64, 54, 54, 0.3)), url(${props => props.urlWeb});
    background-size: cover;
    background-position: bottom center;
    background-repeat: no-repeat;
  }
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
  @media only screen and (max-width: 600px) {
    padding: 25px;
  }
`

const Top = styled.div`
  width: min-content;
  height: min-content;
  display: flex;
  flex-direction: column;
`

const Illustrations = styled.div`
  position: relative;
  height: 125px;
  @media only screen and (max-width: 1000px) {
    height: calc(125px / 1.4);
  }
  @media only screen and (max-width: 600px) {
    height: calc(125px / 2);
  }
`

const Eagle2Img = styled.img`
  width: 165px;
  height: 145px;
  position: absolute;
  top: -100px;
  left: 175px;
  @media only screen and (max-width: 1000px) {
    width: calc(165px / 1.4);
    height: calc(145px / 1.4);
    top: calc(-100px / 1.4);
    left: calc(175px / 1.4);
  }
  @media only screen and (max-width: 600px) {
    width: calc(165px / 2);
    height: calc(145px / 2);
    top: calc(-100px / 2);
    left: calc(175px / 2);
  }
`

const PhotoImg = styled.img`
  width: 300px;
  height: 200px;
  left: -25px;
  position: absolute;
  @media only screen and (max-width: 1000px) {
    width: calc(300px / 1.4);
    height: calc(200px / 1.4);
    left: calc(-25px / 1.4);
  }
  @media only screen and (max-width: 600px) {
    width: calc(300px / 2);
    height: calc(200px / 2);
    left: calc(-25px / 2);
  }
`

const Headers = styled.div`
  width: max-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const H1 = styled.div`
  font-family: Abril Fatface;
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  line-height: 97px;
  color: #FFFBF7;
  text-shadow: 1.14737px 2.86842px 2.86842px rgba(0, 0, 0, 0.2);
  z-index: 2;
  @media only screen and (max-width: 1000px) {
    font-size: calc(72px / 1.4);
    line-height: calc(97px / 1.4);
  }
  @media only screen and (max-width: 600px) {
    font-size: calc(72px / 2);
    line-height: calc(97px / 2);
  }
`

const H1Red = styled(H1)`
  color: #FF4747;
`

const H2 = styled.div`
  font-family: Abril Fatface;
  font-style: normal;
  font-weight: normal;
  font-size: 61px;
  line-height: 82px;
  color: #FFD8C1;
  text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 1000px) {
    font-size: calc(61px / 1.4);
    line-height: calc(82px / 1.4);
  }
  @media only screen and (max-width: 600px) {
    font-size: calc(61px / 2);
    line-height: calc(82px / 2);
  }
`

const GalleryButton = styled.button`
  width: 394px;
  height: 98px;
  border: 5px solid #FFFBF7;
  backdrop-filter: blur(4px);
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  color: #FFFBF7;
  background-color: transparent;
  margin-top: 20px;
  cursor: pointer;
  background-color: transparent;
  &:active {
    transform: translateY(2px);
  }
  @media only screen and (max-width: 1000px) {
    border: 4px solid #FFFBF7;
    width: calc(394px / 1.4);
    height: calc(98px / 1.4);
    font-size: calc(24px / 1.4);
    line-height: calc(28px / 1.4);
    margin-top: calc(20px / 1.4);
  }
  @media only screen and (max-width: 600px) {
    border: 4px solid #FFFBF7;
    width: calc(394px / 2);
    height: calc(98px / 2);
    font-size: calc(24px / 2);
    line-height: calc(28px / 2);
    margin-top: calc(20px / 2);
  }
`

const Bottom = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const ReadMore = styled.div`
  width: 394px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1000px) {
    width: calc(394px / 1.4);
    height: calc(100px / 1.4);
  }
  @media only screen and (max-width: 600px) {
    width: calc(394px / 2);
    height: calc(100px / 2);
  }
`

const H3 = styled.div`
  width: 100%;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  color: #FFFBF7;
  text-align: center;
  @media only screen and (max-width: 1000px) {
    font-size: calc(24px / 1.4);
    line-height: calc(28px / 1.4);
  }
  @media only screen and (max-width: 600px) {
    font-size: calc(24px / 2);
    line-height: calc(28px / 2);
  }
`

const ContactSocial = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: column; 
  align-items: flex-end;
  justify-content: space-between;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`

const Social = styled.div`
  width: 110px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Contact = styled.div`
  margin-top: 20px;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #FFFBF7;
`

export default Cover
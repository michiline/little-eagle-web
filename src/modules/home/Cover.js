import React from 'react'
import styled from 'styled-components'
import { cover, eagle2, photo } from '../../images'
import { HamburgerButton, ArrowDownIcon, FacebookLightIcon, InstagramLightIcon } from '../../components'

const Cover = () => {
  return (
    <RootContainer url={cover.web}>
      <TopContainer>
        <HamburgerButton/>
      </TopContainer>
      <MiddleContainer>
        <EaglePhotoContainer>
          <Eagle2Img src={eagle2.web.white} />
          <PhotoImg src={photo.web.white} />
        </EaglePhotoContainer>
        <TextRow>
          <H1>little</H1>
          <H1Red>eagle</H1Red>
          <H1>photography</H1>
        </TextRow>
        <TextRow>
          <H2 style={{ 'marginRight': '10px' }}>The world</H2>
          <H2>through my lens</H2>
        </TextRow>
        <OutlinedButton>
          View my work
        </OutlinedButton>
      </MiddleContainer>
      <ReadMoreContainer>
        <H3>Read more about me</H3>
        <ArrowDownIcon />
      </ReadMoreContainer>
      <BottomContainer>
        <SocialIcons>
          <FacebookLightIcon />
          <InstagramLightIcon />
        </SocialIcons>
        <ContactMail>little.eagle.photo@pm.me</ContactMail>
      </BottomContainer>
    </RootContainer>
  )
}

const RootContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(0deg, rgba(64, 54, 54, 0.3), rgba(64, 54, 54, 0.3)), url(${props => props.url});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  position: relative;
`

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 40px;
  padding-top: 40px;
  @media only screen and (max-width: 1024px) {
    padding-right: calc(40px / 1.4);
    padding-top: calc(40px / 1.4);
  }
`

const MiddleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  top: 20%;
  padding-left: 100px;
  padding-right: 100px;
  @media only screen and (max-width: 1280px) {
    padding-left: calc(100px / 1.4);
    padding-right: calc(100px / 1.4);
  }
  @media only screen and (max-width: 720px), only screen and (max-height: 750px) {
    top: 15%;
    padding-left: calc(100px / 1.8);
    padding-right: calc(100px / 1.8);
  }
  @media only screen and (max-width: 400px), only screen and (max-height: 500px) {
    top: 15%;
    padding-left: calc(100px / 2.4);
    padding-right: calc(100px / 2.2);
  }
`

const EaglePhotoContainer = styled.div`
  position: relative;
  height: 125px;
  @media only screen and (max-width: 1280px) {
    height: calc(125px / 1.4);
  }
  @media only screen and (max-width: 720px), only screen and (max-height: 750px) {
    height: calc(125px / 1.8);
  }
  @media only screen and (max-width: 400px), only screen and (max-height: 500px) {
    height: calc(125px / 2.2);
  }
`

const Eagle2Img = styled.img`
  width: 165px;
  height: 145px;
  position: absolute;
  top: -100px;
  left: 175px;
  @media only screen and (max-width: 1280px) {
    width: calc(165px / 1.4);
    height: calc(145px / 1.4);
    top: calc(-100px / 1.4);
    left: calc(175px / 1.4);
  }
  @media only screen and (max-width: 720px), only screen and (max-height: 750px) {
    width: calc(165px / 1.8);
    height: calc(145px / 1.8);
    top: calc(-100px / 1.8);
    left: calc(175px / 1.8);
  }
  @media only screen and (max-width: 400px), only screen and (max-height: 500px) {
    width: calc(165px / 2.4);
    height: calc(145px / 2.4);
    top: calc(-100px / 2.4);
    left: calc(175px / 2.4);
  }
`

const PhotoImg = styled.img`
  width: 300px;
  height: 200px;
  left: -25px;
  @media only screen and (max-width: 1280px) {
    width: calc(300px / 1.4);
    height: calc(200px / 1.4);
    left: calc(-25px / 1.4);
  }
  @media only screen and (max-width: 720px), only screen and (max-height: 750px) {
    width: calc(300px / 1.8);
    height: calc(200px / 1.8);
    left: calc(-25px / 1.8);
  }
  @media only screen and (max-width: 400px), only screen and (max-height: 500px) {
    width: calc(300px / 2.2);
    height: calc(200px / 2.2);
    left: calc(-25px / 2.2);
  }
  position: absolute;
`

const TextRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
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
  @media only screen and (max-width: 1280px) {
    font-size: calc(72px / 1.4);
    line-height: calc(97px / 1.4);
  }
  @media only screen and (max-width: 720px), only screen and (max-height: 750px) {
    font-size: calc(72px / 1.8);
    line-height: calc(97px / 1.8);
  }
  @media only screen and (max-width: 400px), only screen and (max-height: 500px) {
    font-size: calc(72px / 2.2);
    line-height: calc(97px / 2.2);
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
  @media only screen and (max-width: 1280px) {
    font-size: calc(61px / 1.4);
    line-height: calc(82px / 1.4);
  }
  @media only screen and (max-width: 720px), only screen and (max-height: 750px) {
    font-size: calc(61px / 1.8);
    line-height: calc(82px / 1.8);
  }
  @media only screen and (max-width: 400px), only screen and (max-height: 500px) {
    font-size: calc(61px / 2.2);
    line-height: calc(82px / 2.2);
  }
`

const OutlinedButton = styled.button`
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
  @media only screen and (max-width: 1280px) {
    border: 4px solid #FFFBF7;
    width: calc(394px / 1.4);
    height: calc(98px / 1.4);
    font-size: calc(24px / 1.4);
    line-height: calc(28px / 1.4);
    margin-top: calc(20px / 1.4);
  }
  @media only screen and (max-width: 720px), only screen and (max-height: 750px) {
    border: 4px solid #FFFBF7;
    width: calc(394px / 1.8);
    height: calc(98px / 1.8);
    font-size: calc(24px / 1.8);
    line-height: calc(28px / 1.8);
    margin-top: calc(20px / 1.8);
  }
  @media only screen and (max-width: 400px), only screen and (max-height: 500px) {
    border: 3px solid #FFFBF7;
    width: calc(394px / 2.2);
    height: calc(98px / 2.2);
    font-size: calc(24px / 2.2);
    line-height: calc(28px / 2.2);
    margin-top: calc(20px / 2.2);
  }
`

const ReadMoreContainer = styled.div`
  width: 394px;
  height: 100px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 80%;
  @media only screen and (max-width: 1280px) {
    width: calc(394px / 1.4);
    height: calc(100px / 1.4);
    margin-left: calc(100px / 1.4);
  }
  @media only screen and (max-width: 720px), only screen and (max-height: 750px) {
    width: calc(394px / 1.8);
    height: calc(100px / 1.8);
    margin-left: calc(100px / 1.8);
    top: 70%;
  }
  @media only screen and (max-width: 400px), only screen and (max-height: 500px) {
    width: calc(394px / 2.2);
    height: calc(100px / 2.2);
    margin-left: calc(100px / 2.2);
    top: 70%;
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
  @media only screen and (max-width: 1280px) {
    font-size: calc(24px / 1.4);
    line-height: calc(28px / 1.4);
  }
  @media only screen and (max-width: 720px), only screen and (max-height: 750px) {
    font-size: calc(24px / 1.8);
    line-height: calc(28px / 1.8);
  }
  @media only screen and (max-width: 400px), only screen and (max-height: 500px) {
    font-size: calc(24px / 2.2);
    line-height: calc(28px / 2.2);
  }
`

const BottomContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;;
  bottom: 60px;
  right: 40px;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`

const SocialIcons = styled.div`
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
  font-size: 24px;
  line-height: 28px;
  color: #FFFBF7;
  margin-top: 20px;
`

export default Cover
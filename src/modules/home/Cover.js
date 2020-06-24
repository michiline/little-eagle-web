import React from 'react'
import styled from 'styled-components'
import { cover, eagle2, photo } from '../../images'
import { HamburgerButton } from '../../components'

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
          <H2 style={{ 'margin-right': '10px' }}>The world</H2>
          <H2>through my lens</H2>
        </TextRow>
      </MiddleContainer>
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
    padding-right: calc(40px / 1.6);
    padding-top: calc(40px / 1.6);
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
  @media only screen and (max-width: 1024px) {
    padding-left: calc(100px / 1.8);
    padding-right: calc(100px / 1.8);
  }
  @media only screen and (max-width: 400px), only screen and (max-height: 500px) {
    padding-left: calc(100px / 2.2);
    padding-right: calc(100px / 2.2);
  }
`

const EaglePhotoContainer = styled.div`
  position: relative;
  height: 125px;
  @media only screen and (max-width: 1024px) {
    height: calc(125px / 1.6);
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
  @media only screen and (max-width: 1024px) {
    width: calc(165px / 1.6);
    height: calc(145px / 1.6);
    top: calc(-100px / 1.6);
    left: calc(175px / 1.6);
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
  @media only screen and (max-width: 1024px) {
    width: calc(300px / 1.6);
    height: calc(200px / 1.6);
    left: calc(-25px / 1.6);
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
  @media only screen and (max-width: 1024px) {
    font-size: calc(72px / 1.6);
    line-height: calc(97px / 1.6);
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
  @media only screen and (max-width: 1024px) {
    font-size: calc(61px / 1.6);
    line-height: calc(82px / 1.6);
  }
  @media only screen and (max-width: 400px), only screen and (max-height: 500px) {
    font-size: calc(61px / 2.2);
    line-height: calc(82px / 2.2);
  }
`

export default Cover
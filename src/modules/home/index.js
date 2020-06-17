import React, {memo } from 'react'
import styled from 'styled-components'
import { HamburgerIcon, ArrowDownIcon } from '../../components'
import { useWindow } from '../../hooks'
import { coverMobile, eagle1Mobile, photoMobile } from '../../images'

const Home = () => {
  const [windowWidth, windowHeight] = useWindow()
  console.log(coverMobile)
  return (
    <HomeContainer>
      <HamburgerButton width={'35'} height={'22'} windowWidth={windowWidth} windowHeight={windowHeight}/>
      <CoverScreen url={coverMobile}>
        <Container>
          <ImageContainer>
            <EagleImage windowHeight={windowHeight} windowWidth={windowWidth} url={eagle1Mobile}/>
            <PhotoImage windowHeight={windowHeight} windowWidth={windowWidth} url={photoMobile}/>
          </ImageContainer>
          <HeaderRow>
            <Header1>little</Header1>
            <Header1Red>eagle</Header1Red>
          </HeaderRow>
          <Header1>
            photography
          </Header1>
          <Header2 style={{'marginTop': '8px'}}>The world</Header2>
          <Header2>through my lens</Header2>
          <OutlinedButton>View my work</OutlinedButton>
        </Container>
        <ReadMoreContainer>
          <Header3>Read more about me</Header3>
          <ArrowDownIcon width={'32'} height={'14'}/>
        </ReadMoreContainer>
      </CoverScreen>
    </HomeContainer>
  )
}



const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`

const CoverScreen = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(64, 54, 54, 0.3), rgba(64, 54, 54, 0.3)), url(${props => props.url});
  background-size: cover;
  background-position: right;
  display: flex;
  flex-direction: column;
`

const HamburgerButton = memo(({ width, height, ...rest }) => {
  return (
    <SHamburgerButton width={width} height={height} {...rest}>
      <HamburgerIcon width={width} height={height}/>      
    </SHamburgerButton>
  )
})

const SHamburgerButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  &:active {
    transform: translateY(2px);
  }
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  position: fixed;
  top: 5%;
  right: 5%;
`

const Container = styled.div`
  width: 85%;
  height: min-content;
  margin: 15% 5% 0 10%;
  display: flex;
  flex-direction: column;
`

const ImageContainer = styled.div`
  width: 160px;
  height: 115px;
  position: relative;
`

const EagleImage = styled.div`
  width: 70px;
  height: 62px;
  background: url(${props => props.url});
  position: absolute;
  left: 73px;
  top: 8px;
`

const PhotoImage = styled.div`
  width: 127px;
  height: 87px;
  background: url(${props => props.url});
  position: absolute;
  top: 50px;
  left: -15px;
`

const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  width: max-content;
`

const Header1 = styled.div`
  font-family: 'Abril Fatface';
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 42px;
  color: #FFFBF7;
  text-shadow: 1.14737px 2.86842px 2.86842px rgba(0, 0, 0, 0.2);
  z-index: 2;
`

const Header1Red = styled(Header1)`
  color: #FF4747;
`

const Header2 = styled.div`
  font-family: 'Abril Fatface';
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 38px;
  color: #FFFBF7;
  text-shadow: 1.14737px 2.86842px 2.86842px rgba(0, 0, 0, 0.2);
  color: #FFD8C1;
`

const OutlinedButton = styled.button`
  background: rgba(255, 225, 148, 0.1);
  border: 2.96701px solid #FFFBF7;
  box-sizing: border-box;
  backdrop-filter: blur(1.5736px);
  width: 190px;
  height: 50px;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFBF7;
  margin-top: 20px;
`

const ReadMoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 6%;
  left: 18%;
  align-items: center;
  justify-content: space-between;
  height: 35px;
`

const Header3 = styled.div`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: #FFFBF7;
`

export default Home

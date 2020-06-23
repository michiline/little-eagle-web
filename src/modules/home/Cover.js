import React from 'react'
import styled from 'styled-components'
import { ArrowDownIcon } from '../../components'
import { useWindow } from '../../hooks'
import { coverMobile, eagle1Mobile, photoMobile } from '../../images'

const Cover = () => {
  const [windowWidth, windowHeight] = useWindow()
  return (
	<CoverScreen url={coverMobile}>
		<ContentContainer>
			<ImageContainer>
				<Eagle1Image windowHeight={windowHeight} windowWidth={windowWidth} url={eagle1Mobile}/>
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
      <ReadMoreContainer>
			<Header3>Read more about me</Header3>
			<ArrowDownIcon width={'32'} height={'14'}/>
		</ReadMoreContainer>
		</ContentContainer>
	</CoverScreen>
  )
}


const CoverScreen = styled.div`
  width: 100;
  height: 100vh;
  background: linear-gradient(0deg, rgba(64, 54, 54, 0.3), rgba(64, 54, 54, 0.3)), url(${props => props.url});
  background-size: cover;
  background-position: right;
  display: flex;
  flex-direction: column;
  position: relative;
`

const ContentContainer = styled.div`
  width: min-content;
  height: min-content;
  margin-top: 10%;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
`

const ImageContainer = styled.div`
  width: 160px;
  height: 115px;
  position: relative;
`

const Eagle1Image = styled.div`
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
  font-size: 30px;
  line-height: 32px;
  color: #FFFBF7;
  text-shadow: 1.14737px 2.86842px 2.86842px rgba(0, 0, 0, 0.2);
  z-index: 2;
  @media only screen and (min-height: 550px) {
    font-size: 40px;
    line-height: 42px;
  }
`


const Header1Red = styled(Header1)`
  color: #FF4747;
`

const Header2 = styled.div`
  font-family: 'Abril Fatface';
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 28px;
  color: #FFFBF7;
  text-shadow: 1.14737px 2.86842px 2.86842px rgba(0, 0, 0, 0.2);
  color: #FFD8C1;
  @media only screen and (min-height: 550px) {
    font-size: 35px;
    line-height: 38px;
  }
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
  align-items: center;
  justify-content: space-between;
  height: 35px;
  width: 190px;
  margin-top: 5vh;
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

export default Cover
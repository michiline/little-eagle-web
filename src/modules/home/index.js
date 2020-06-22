import React, {memo } from 'react'
import styled from 'styled-components'
import { HamburgerIcon } from '../../components'
import { useWindow } from '../../hooks'
import Cover from './Cover'
import About from './About'

const Home = () => {
  const [windowWidth, windowHeight] = useWindow()
  return (
    <HomeContainer>
      <HamburgerButton width={'35'} height={'22'} windowWidth={windowWidth} windowHeight={windowHeight}/>
      <Cover />
      <About />
    </HomeContainer>
  )
}



const HomeContainer = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
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
  z-index: 3;
`


export default Home

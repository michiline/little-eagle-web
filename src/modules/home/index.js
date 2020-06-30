import React from 'react'
import styled from 'styled-components'
import Cover from './Cover'
import About from './About'
import GetToKnowMe from './GetToKnowMe'
import Reflector from './Reflector'

const Home = () => {
  return (
    <RootContainer>
      <Cover />
      <About />
      <GetToKnowMe />
      <Reflector />
    </RootContainer>
  )
}

const RootContainer = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: column;
`

export default Home

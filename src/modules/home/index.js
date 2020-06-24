import React, { memo } from 'react'
import styled from 'styled-components'
import Cover from './Cover'

const Home = () => {
  return (
    <RootContainer>
      <Cover />
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

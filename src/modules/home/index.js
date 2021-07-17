import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Cover from './Cover'
import About from './About'
import GetToKnowMe from './GetToKnowMe'
import Services from './Services'
import { ScrollToTop } from '../../hooks'

const Home = ({ showDrawer, homeRef, aboutRef, servicesRef }) => {
  return (
    <RootContainer>
        <Helmet>
          <title>Home - Little Eagle Photography</title>
          <meta name="og:site_name" content="Little Eagle Photography"/>
          <meta name="og:type" content="website" />
          <meta name="og:title" content="Home - Little Eagle Photography"/>
          <meta name="og:url" content="https://www.littleeaglephoto.com"/>
          <meta name="og:image" content="https://littleeagle.s3.eu-central-1.amazonaws.com/og-photo.jpg" />
          <meta name="og:image:width" content="320" />
          <meta name="og:image:height" content="274" />
          <meta name="og:image:alt" content="Wedding couple love kiss" />
          <meta name="og:description" content="Little Eagle's photo gallery with people, travels, sessions, details and more." />
        </Helmet>
      <ScrollToTop />
      <Cover showDrawer={showDrawer} homeRef={homeRef} aboutRef={aboutRef}/>
      <About aboutRef={aboutRef}/>
      <GetToKnowMe />
      <Services servicesRef={servicesRef} />
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

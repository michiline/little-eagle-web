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
        <title>Little Eagle Photography</title>
        <meta property='og:site_name' content='Little Eagle Photography - Event & Portrait Photographer'/>
        <meta property='og title' content='Little Eagle Photography'/>
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.littleeaglephoto.com'/>
        <meta property='og:image' content='https://littleeagle.s3.eu-central-1.amazonaws.com/gallery/low/people/img70.jpg' />
        <meta property="og:image:width" content="320" />
        <meta property="og:image:height" content="213" />
        <meta property="og:description" content='Professional Event and portrait photographer from Zagreb, Croatia. Available Europe and worldwide.' />
        
      </Helmet>
      <ScrollToTop />
      <Cover showDrawer={showDrawer} homeRef={homeRef} />
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

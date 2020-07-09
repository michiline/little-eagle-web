import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import GalleryList from './GalleryList'
import ProjectsList from './ProjectsList'
import JustifySwipe from './justify-swipe'
import { ScrollToTop } from '../../hooks'

const Gallery = ({ setShowSwipe }) => {
  let { path } = useRouteMatch()
  return (
    <RootContainer>
        <Helmet>
          <title>Gallery - Little Eagle Photography</title>
          <meta property="og:site_name" content="Little Eagle Photography"/>
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Gallery - Little Eagle Photography"/>
          <meta property="og:url" content="https://www.littleeaglephoto.com/gallery"/>
          <meta property="og:image" content="https://littleeagle.s3.eu-central-1.amazonaws.com/gallery/low/people/img152.jpg" />
          <meta property="og:image:width" content="640" />
          <meta property="og:image:height" content="427" />
          <meta property="og:description" content="Little Eagle's photo gallery with people, travels, projects and details and more." />
        </Helmet>
      <ScrollToTop />
      <Switch>
        <Route exact path={path}>
          <GalleryList />
        </Route>
        <Route exact path={`${path}/people/:activeImg?`}>
          <JustifySwipe galleryName={'people'} setShowSwipe={setShowSwipe} />
        </Route>
        <Route exact path={`${path}/travels/:activeImg?`}>
          <JustifySwipe galleryName={'travels'} setShowSwipe={setShowSwipe}/>
        </Route>
        <Route exact path={`${path}/details/:activeImg?`}>
          <JustifySwipe galleryName={'details'} setShowSwipe={setShowSwipe}/>
        </Route>
        <Route exact path={`${path}/projects`}>
          <ProjectsList />
        </Route>
        <Route exact path={`${path}/projects/chill-vibez/:activeImg?`}>
          <JustifySwipe subdir={'projects'} galleryName={'chill-vibez'} setShowSwipe={setShowSwipe}/>
        </Route>
        <Route exact path={`${path}/projects/budjenje-boginje/:activeImg?`}>
          <JustifySwipe subdir={'projects'} galleryName={'budjenje-boginje'} setShowSwipe={setShowSwipe}/>
        </Route>
        <Route exact path={`${path}/projects/wedding-rm/:activeImg?`}>
          <JustifySwipe subdir={'projects'} galleryName={'wedding-rm'} setShowSwipe={setShowSwipe}/>
        </Route>
      </Switch>

    </RootContainer>
  )
}

const RootContainer = styled.div`
	width: 100%;
  height: min-content;
  margin-top: 105px;
`

export default Gallery

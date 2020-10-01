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
          <meta name="og:site_name" content="Little Eagle Photography"/>
          <meta name="og:type" content="website" />
          <meta name="og:title" content="Gallery - Little Eagle Photography"/>
          <meta name="og:url" content="https://www.littleeaglephoto.com/gallery"/>
          <meta name="og:image" content="https://littleeagle.s3.eu-central-1.amazonaws.com/gallery/low/people/img152.jpg" />
          <meta name="og:image:width" content="640" />
          <meta name="og:image:height" content="427" />
          <meta name="og:image:alt" content="Lonjsko polje - bike" />
          <meta name="og:description" content="Little Eagle's photo gallery with people, travels, projects and details and more." />
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
        <Route exact path={`${path}/projects/bovani-design/:activeImg?`}>
          <JustifySwipe subdir={'projects'} galleryName={'bovani-design'} setShowSwipe={setShowSwipe}/>
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

import React from 'react'
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
          <JustifySwipe galleryName={'chill-vibez'} setShowSwipe={setShowSwipe}/>
        </Route>
        <Route exact path={`${path}/projects/budjenje-boginje/:activeImg?`}>
          <JustifySwipe galleryName={'budjenje-boginje'} setShowSwipe={setShowSwipe}/>
        </Route>
        <Route exact path={`${path}/projects/wedding-rm/:activeImg?`}>
          <JustifySwipe galleryName={'wedding-rm'} setShowSwipe={setShowSwipe}/>
        </Route>
      </Switch>

    </RootContainer>
  )
}

const RootContainer = styled.div`
	width: 100%;
  height: min-content;
`

export default Gallery

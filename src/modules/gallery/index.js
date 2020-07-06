import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import GalleryList from './GalleryList'

const Gallery = () => {
  let { path } = useRouteMatch()
  return (
    <RootContainer>
      <Switch>
        <Route exact path={path}>
          <GalleryList />
        </Route>
        <Route exact path={`${path}/people`}>
          People
        </Route>
        <Route exact path={`${path}/travels`}>
          Travels
        </Route>
        <Route exact path={`${path}/details`}>
          details
        </Route>
        <Route exact path={`${path}/projects`}>
          projects
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

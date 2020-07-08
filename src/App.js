import React, { useState, lazy, Suspense, useRef } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './style'
import { Backdrop, Hamburger, Drawer, Footer, Navbar } from './modules'
import { bindRatiosToUrls } from './utils'
import ratios from './ratios'

const Home = lazy(() => import ('./modules/home'))
const Gallery = lazy(() => import ('./modules/gallery'))

const App = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  const [showSwipe, setShowSwipe] = useState(false)
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const chill = bindRatiosToUrls({ baseUrl: process.env.REACT_APP_IMG_URL, dir: 'gallery/low/projects/wedding-rm', length: 69, ratios: ratios.projects["wedding-rm"]})

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle hideScroll={showDrawer}/>
        <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} homeRef={homeRef} aboutRef={aboutRef} servicesRef={servicesRef}/>
        <Backdrop showDrawer={showDrawer} />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/'>
              <Hamburger showDrawer={showDrawer} setShowDrawer={setShowDrawer}/>
              <Home homeRef={homeRef} aboutRef={aboutRef} servicesRef={servicesRef} showDrawer={showDrawer}/>
            </Route>
            <Route path='/gallery'>
              <Navbar showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
              <Gallery setShowSwipe={setShowSwipe} />
            </Route>
          </Switch>
        </Suspense>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

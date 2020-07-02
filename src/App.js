import React, { useState, lazy, Suspense, useRef } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './style'
import { Backdrop, Hamburger, Drawer, Footer } from './modules'

const Home = lazy(() => import ('./modules/home'))
const Gallery = lazy(() => import ('./modules/gallery'))

const App = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle showDrawer={showDrawer}/>
        <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} homeRef={homeRef} aboutRef={aboutRef} servicesRef={servicesRef}/>
        <Backdrop showDrawer={showDrawer} />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/'>
              <Hamburger showDrawer={showDrawer} setShowDrawer={setShowDrawer}/>
              <Home homeRef={homeRef} aboutRef={aboutRef} servicesRef={servicesRef} showDrawer={showDrawer}/>
            </Route>
            <Route exact path='/gallery'>
              <Gallery/>
            </Route>
          </Switch>
        </Suspense>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

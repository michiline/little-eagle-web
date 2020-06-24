import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './style'

const Home = lazy(() => import ('./modules/home'))

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
          </Switch>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

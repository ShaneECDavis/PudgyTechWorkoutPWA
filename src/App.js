import React, { Fragment } from 'react'
import { CreateExercises } from './components'
import { Header, Footer } from './components/Layouts'
import Welcome from './components'
import Routes from './routes'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes />
      <Footer />
    </Fragment>
  )
}

export default App

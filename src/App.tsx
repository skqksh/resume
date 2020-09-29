import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Router from './Router'

import Header from '@components/Layout/Header'
import Footer from '@components/Layout/Footer'

export default (): JSX.Element => (
  <BrowserRouter>
    <Header />
    <Router />
    <Footer />
  </BrowserRouter>
)

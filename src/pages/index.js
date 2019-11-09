import React from 'react'

import Header from 'sections/Header'
import About from 'sections/About'
import Tech from 'sections/Tech/Tech'
import Footer from 'sections/Footer'

import GlobalStyle from 'theme/globalStyle'

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Header />
    <About />
    <Tech />
    <Footer />
  </>
)

export default IndexPage

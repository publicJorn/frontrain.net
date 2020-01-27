import React from 'react'

import Header from 'sections/Header'
import About from 'sections/About'
import Tech from 'sections/Tech/Tech'
import Projects from 'sections/Projects/Projects'
import Footer from 'sections/Footer'

import GlobalStyle from 'theme/globalStyle'

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Header />
    <About />
    <Tech />
    <Projects />
    <Footer />
  </>
)

export default IndexPage

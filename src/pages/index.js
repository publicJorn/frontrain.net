import React from 'react'
import { ThemeProvider } from 'styled-components'

import Header from 'sections/Header'
import About from 'sections/About/About'
import Tech from 'sections/Tech/Tech'
import Projects from 'sections/Projects/Projects'
import Footer from 'sections/Footer'

import ErrorBoundary from 'components/ErrorBoundary'
import theme from 'theme/themeConstants'
import GlobalStyle from 'theme/globalStyle'

const IndexPage = () => (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <About />
      <Tech />
      <Projects />
      <Footer />
    </ThemeProvider>
  </ErrorBoundary>
)

export default IndexPage

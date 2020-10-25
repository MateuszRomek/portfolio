import React from 'react'
import Layout from '../theme/Layout'
import theme from '../styles/theme'
import GlobalStyles from '../styles/globalStyle'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Layout>
        <>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </>
      </Layout>
    </ThemeProvider>
  )
}

import React from 'react';
import Layout from '../template/Layout';
import theme from '../styles/theme';
import GlobalStyles from '../styles/globalStyle';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Icon from '../images/favicon.ico';
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href={Icon} />
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
  );
}

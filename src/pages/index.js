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
        <meta property="og:url" content="http://www.mateuszromek.pl" />
        <meta
          property="og:description"
          content="Hello, I'm Mateusz Romek, a self-taught web developer from Poland"
        />
        <meta property="og:title" content="Mateusz Romek" />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
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

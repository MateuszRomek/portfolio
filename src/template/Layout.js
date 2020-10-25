import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components'

const Main = styled.main`
  margin-top: 75px;
  padding: 10px 0;
`
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  )
}

export default Layout

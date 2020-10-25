import React, { useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { SocialContainer, StyledIcon } from '../shared/index'
import GithubIcon from '../assets/svg/github.svg'
import LinkedinIcon from '../assets/svg/linkedin.svg'
import scrollTo from 'gatsby-plugin-smoothscroll'
const Container = styled.header`
  padding: 20px 30px;
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  @media (max-width: 1024px) {
    justify-content: space-between;
  }
`

const DesktopNav = styled.nav`
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`

const Title = styled.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 700;
`

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  margin-left: ${({ isMobile }) => (isMobile ? '0' : '200px')};
  display: flex;
  height: 100%;
  align-items: center;
  list-style-type: none;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
`

const NavItem = styled.li`
  margin-left: ${({ isMobile }) => (isMobile ? '0' : '35px')};
  margin-bottom: ${({ isMobile }) => (isMobile ? '20px' : '0')};
`

const ScrollLink = styled.a`
  text-decoration: none;
  font-size: ${({ isMobile }) => (isMobile ? '24px' : '16px')};
  font-weight: ${({ isMobile }) => (isMobile ? '700' : '400')};
  display: inline-block;
  position: relative;
  transition: text-shadow 0.2s ease-in-out;
  overflow: hidden;
  &::after {
    position: absolute;
    transition: transform 0.3s ease;
    transform: translateX(-101%);
    content: '';
    bottom: 0px;
    left: 0;
    width: 100%;
    border-bottom: 2px solid ${({ theme }) => theme.colors.mainBlack};
  }

  &:hover {
    cursor: pointer;
    text-shadow: 0 0 0.01px black;
  }

  &:hover::after {
    transform: translateX(0);
  }
`

const HamburgerButton = styled.button`
  display: none;
  border: none;
  background-color: inherit;
  padding: 2px;
  z-index: 10;
  *:hover {
    cursor: pointer;
  }
  & > span {
    width: 40px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.mainBlack};
    display: block;
    margin: 8px auto;
    transition: all 0.3s ease-in-out;
  }

  & span:nth-child(1) {
    transform: ${({ isActive }) =>
      isActive ? ' translateY(11px) rotate(45deg)' : null};
  }

  & span:nth-child(2) {
    opacity: ${({ isActive }) => (isActive ? '0' : '1')};
  }

  & span:nth-child(3) {
    transform: ${({ isActive }) =>
      isActive ? 'translateY(-11px) rotate(-45deg)' : null};
  }

  @media (max-width: 1024px) {
    display: block;
    align-self: flex-end;
  }
`
const MobileContainer = styled.div`
  display: none;
  position: fixed;
  top: 85px;
  left: 0;
  width: 100%;
  background-color: rgb(247, 250, 252);
  height: calc(100% - 85px);
  transition: all 0.2s ease-in-out;
  transform: ${({ isActive }) =>
    isActive ? 'translateY(0)' : 'translateY(80px)'};
  pointer-events: ${({ isActive }) => (isActive ? 'all' : 'none')};
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  @media (max-width: 1024px) {
    display: block;
    z-index: 10;
  }
`
const MobileInner = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  padding: 20px 0;
  justify-content: center;
  align-items: flex-start;
`

const Header = () => {
  const {
    site: {
      siteMetadata: { links },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          links
        }
      }
    }
  `)

  const [isHamburgerActive, setHamburgerActive] = useState(false)
  const handleNavClick = (isMobile, id) => {
    if (isMobile) {
      scrollTo(`#${id}`)
      setHamburgerActive(false)
    } else {
      scrollTo(`#${id}`)
    }
  }
  return (
    <Container>
      <Title>MR</Title>
      <DesktopNav>
        <NavList isMobile={false}>
          {links.map(linkName => (
            <NavItem key={linkName} isMobile={false}>
              <ScrollLink
                onClick={() => handleNavClick(false, linkName)}
                isMobile={false}
              >
                {linkName}
              </ScrollLink>
            </NavItem>
          ))}
        </NavList>
      </DesktopNav>
      <HamburgerButton
        onClick={() => setHamburgerActive(!isHamburgerActive)}
        isActive={isHamburgerActive}
      >
        <span></span>
        <span></span>
        <span></span>
      </HamburgerButton>
      <MobileContainer isActive={isHamburgerActive}>
        <MobileInner>
          <nav>
            <NavList isMobile={true}>
              {links.map(linkName => (
                <NavItem key={linkName} isMobile={true}>
                  <ScrollLink
                    onClick={() => handleNavClick(true, linkName)}
                    isMobile={true}
                  >
                    {linkName}
                  </ScrollLink>
                </NavItem>
              ))}
            </NavList>
          </nav>
          <SocialContainer isMobileNav={true}>
            <StyledIcon>
              <GithubIcon />
            </StyledIcon>
            <StyledIcon>
              <LinkedinIcon />
            </StyledIcon>
          </SocialContainer>
        </MobileInner>
      </MobileContainer>
    </Container>
  )
}

export default Header

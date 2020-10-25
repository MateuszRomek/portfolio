import React from 'react'
import styled from 'styled-components'
import GitHub from '../assets/svg/github.svg'
import Web from '../assets/svg/web.svg'
const Container = styled.div`
  padding: 10px 20px;
  width: 400px;
`

const Title = styled.h3`
  margin: 0;
  padding: 10px 0;
  font-size: 22px;
  font-weight: 400;
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    transition: transform 0.4s ease-in-out;
    width: 80%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.buttonBg};
  }

  &:hover::after {
    transform: translateX(-100%);
  }
`

const ProjectDescrtipion = styled.p`
  font-size: 16px;
  text-align: justify;
  word-break: normal;
  min-height: 145px;
  @media (max-width: 840px) {
    min-height: auto;
  }
`
const ProjectInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ProjectStack = styled.span`
  display: block;
  font-size: 13px;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: -10px;
    height: 100%;
    width: 5px;
    background-color: ${({ theme }) => theme.colors.buttonBg};
  }
`
const Link = styled.a`
  text-decoration: none;
  color: inherit;
  margin-left: 10px;
  & svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.colors.buttonBg};
  }

  &:hover {
    cursor: pointer;
  }
`

const Project = ({ projectData }) => {
  return (
    <Container>
      <Title>{projectData.name} </Title>
      <ProjectDescrtipion>{projectData.description}</ProjectDescrtipion>

      <ProjectInformation>
        <ProjectStack>{projectData.stack}</ProjectStack>
        <div>
          {projectData.live ? (
            <>
              <Link target="_blank" href={projectData.git}>
                <GitHub />
              </Link>
              <Link target="_blank" href={projectData.live}>
                <Web />
              </Link>
            </>
          ) : (
            <Link target="_blank" href={projectData.git}>
              <GitHub />
            </Link>
          )}
        </div>
      </ProjectInformation>
    </Container>
  )
}

export default Project

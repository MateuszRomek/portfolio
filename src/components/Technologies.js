import React from 'react'
import styled from 'styled-components'
import CssIcon from '../assets/svg/cssIcon.svg'
import ExpressIcon from '../assets/svg/expressjsIcon.svg'
import GatsbyIcon from '../assets/svg/gatsbyIcon.svg'
import ReactIcon from '../assets/svg/reactIcon.svg'
import ReduxIcon from '../assets/svg/reduxIcon.svg'
import SassIcon from '../assets/svg/sassIcon.svg'
import JavascriptIcon from '../assets/svg/javascrtipIcon.svg'
import TypescrtipIcon from '../assets/svg/typescrtipIcon.svg'
import HtmlIcon from '../assets/svg/html5Icon.svg'
import NodejsIcon from '../assets/svg/nodejsIcon.svg'
import StyledIcon from '../assets/svg/styledIcon.svg'

const TechnologiesContainer = styled.div`
  padding: 40px 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    padding: 40px 60px;
    justify-content: flex-start;
  }
`
const TechnologyIcon = styled.span`
  display: block;
  margin-left: 35px;
  & svg {
    width: 55px;
    height: 55px;
    transition: filter 0.2s ease;
    filter: grayscale(1);
  }

  &:hover svg {
    filter: grayscale(0);
  }
`

const Technologies = ({ className }) => {
  return (
    <TechnologiesContainer id="technologies" className={className}>
      <TechnologyIcon>
        <HtmlIcon />
      </TechnologyIcon>

      <TechnologyIcon>
        <CssIcon />
      </TechnologyIcon>

      <TechnologyIcon>
        <SassIcon />
      </TechnologyIcon>

      <TechnologyIcon>
        <JavascriptIcon />
      </TechnologyIcon>

      <TechnologyIcon>
        <TypescrtipIcon />
      </TechnologyIcon>

      <TechnologyIcon>
        <ReactIcon />
      </TechnologyIcon>

      <TechnologyIcon>
        <ReduxIcon />
      </TechnologyIcon>

      <TechnologyIcon>
        <StyledIcon />
      </TechnologyIcon>

      <TechnologyIcon>
        <GatsbyIcon />
      </TechnologyIcon>

      <TechnologyIcon>
        <NodejsIcon />
      </TechnologyIcon>

      <TechnologyIcon>
        <ExpressIcon />
      </TechnologyIcon>
    </TechnologiesContainer>
  )
}

export default Technologies

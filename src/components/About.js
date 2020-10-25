import React from 'react';
import styled from 'styled-components';
import { SectionTitle, PaddingLeft } from '../shared/index';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { useRef } from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Technologies from './Technologies';
const AboutSection = styled.section`
  max-width: 1920px;
  margin: 0 auto;
  padding: 30px 25px;
  overflow: hidden;
  @media (max-width: 900px) {
    padding: 0 25px;
  }
`;
const AboutInner = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 30px;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 20px 10px;
  }
`;

const TextContainer = styled.div`
  max-width: 385px;
  margin-left: 50px;
  & p:nth-child(1) {
    margin: 0;
  }

  & p:nth-child(1)::after {
    position: absolute;
    content: '';
    height: 100%;
    width: 6px;
    left: -10px;
    background-color: ${({ theme }) => theme.colors.buttonBg};
  }
  @media (max-width: 800px) {
    margin-left: 0;
  }
`;
const AboutParagraph = styled.p`
  font-size: 18px;
  margin-top: 8px;
  font-weight: 400;
  position: relative;
`;

const SmallTitle = styled.h3`
  margin: 5px 0;
  font-size: 24px;
`;

const ImageContainer = styled.div`
  width: 350px;
  max-height: 450px;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const FlexContinaer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 100px;
  & h3 {
    position: relative;
    padding: 3px 10px;
    color: ${({ theme }) => theme.colors.white};
  }
  & h3::after {
    position: absolute;
    content: '';
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: ${({ theme }) => theme.colors.buttonBg};
  }
  @media (max-width: 500px) {
    justify-content: flex-start;
    padding-right: 0;
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  const aboutWrapper = useRef(null);

  useEffect(() => {
    const wrapper = aboutWrapper.current;
    const title = wrapper.querySelector('.aboutTitle');
    const img = wrapper.querySelector('.imgContainer');
    const textContainer = wrapper.querySelector('.textContainer');
    const technologiesTitle = wrapper.querySelector('.technologiesTitle');
    const technologiesList = wrapper.querySelector('.technologiesList');
    const technologiesSecondTitle = wrapper.querySelector(
      '.technologiesSecondTitle'
    );
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(
      [
        title,
        img,
        ...textContainer.children,
        technologiesTitle,
        ...technologiesList.children,
        technologiesSecondTitle,
      ],
      {
        autoAlpha: 0,
      }
    );
    const titleTl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      scrollTrigger: {
        trigger: '.aboutTitle',
        start: 'top 50%',
      },
    });
    const aboutTl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      scrollTrigger: {
        trigger: '.aboutTitle',
        start: 'top 50%',
      },
    });
    const technologiesTl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      scrollTrigger: { trigger: '.technologiesTitle', start: 'top: 70%' },
    });

    titleTl.fromTo(
      title,
      { x: '-=50' },
      { x: '+=50', autoAlpha: 1, duration: 1 }
    );

    aboutTl
      .fromTo(img, { x: '-=150' }, { duration: 1, x: '+=150', autoAlpha: 1 })
      .fromTo(
        textContainer.children,
        { x: '+=150' },
        { x: '-=150', duration: 1, stagger: 0.2, autoAlpha: 1 },
        '-=1'
      );
    technologiesTl
      .fromTo(
        technologiesTitle,
        { x: '-=50' },
        { x: '+=50', autoAlpha: 1, duration: 1 }
      )
      .fromTo(
        technologiesList.children,
        { y: '+=15' },
        { y: '-=15', autoAlpha: 1, duration: 0.5, stagger: 0.2 }
      )
      .fromTo(
        technologiesSecondTitle,
        { x: '+=50' },
        { x: '-=50', duration: 1, autoAlpha: 1 }
      );
  }, []);

  return (
    <AboutSection id="about" ref={aboutWrapper}>
      <PaddingLeft>
        <SectionTitle className="aboutTitle">About me</SectionTitle>
      </PaddingLeft>
      <AboutInner>
        <ImageContainer className="imgContainer">
          <Img fluid={data.file.childImageSharp.fluid} />
        </ImageContainer>
        <TextContainer className="textContainer">
          <AboutParagraph>
            Hello
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </AboutParagraph>
          <AboutParagraph>
            I'm <strong> Mateusz Romek</strong>, a self-taught web developer
            from Kraków
          </AboutParagraph>
          <AboutParagraph>
            The IT industry has always interested me, but I became seriously
            interested in programming during the last year of my technical
            college. Starting with java through python and ending with web
            technologies. It was JavaScript that got me hooked and I develop my
            skills in this language every day.
          </AboutParagraph>
        </TextContainer>
      </AboutInner>
      <PaddingLeft>
        <SmallTitle className="technologiesTitle">
          Technologies I've worked with:
        </SmallTitle>
      </PaddingLeft>
      <Technologies className="technologiesList" />
      <FlexContinaer>
        <SmallTitle className="technologiesSecondTitle">
          And a few more ...
        </SmallTitle>
      </FlexContinaer>
    </AboutSection>
  );
};

export default About;

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { PaddingLeft } from '../shared/PaddingLeft';
import Coding from '../assets/svg/coding.svg';
import Button from './Button';
import GithubIcon from '../assets/svg/github.svg';
import LinkedInIcon from '../assets/svg/linkedin.svg';
import { SocialContainer, StyledIcon } from '../shared/index';
import scrollTo from 'gatsby-plugin-smoothscroll';
import gsap from 'gsap';
const HeroContainer = styled.section`
  height: calc(100vh - 95px);
  position: relative;

  @media (max-width: 320px) {
    height: 100%;
  }
`;
const HeroInner = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  overflow-x: hidden;
  max-width: 1920px;
  padding-right: 20px;
  margin: 0 auto;
  @media (max-width: 1080px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    padding: 20px 0;
  }
`;
const TextContainer = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  margin-top: 135px;
  padding: 0 10px;
  @media (max-width: 1080px) {
    margin-top: 50px;
    align-self: center;
  }
`;
const HeroTitle = styled.h2`
  font-size: 46px;
  margin: 0;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.mainBlack};
  visibility: hidden;
  opacity: 0;
  @media (max-width: 1080px) {
    display: none;
  }
`;
const HeroFullTitle = styled.h2`
  font-size: 2.6rem;
  margin: 7px 0;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.mainBlack};
  display: none;
  visibility: hidden;
  opacity: 0;

  @media (max-width: 1080px) {
    display: block;
  }
`;

const SVGContainer = styled.div`
  margin-left: 20%;
  max-width: 750px;

  & svg {
    width: 100%;
    height: 100%;
    visibility: hidden;
    opacity: 0;
  }

  @media (max-width: 1080px) {
    margin-left: 0;
    width: 400px;
  }

  @media (max-width: 500px) {
    width: 350px;
  }
`;

const HeroText = styled.span`
  display: inline-block;
  margin-top: 35px;
  font-size: 1.4rem;
  margin-bottom: 35px;
  visibility: hidden;
  opacity: 0;
  @media (max-width: 1080px) {
    margin-top: 10px;
  }
`;

const Hero = () => {
  const wrapper = useRef(null);
  const textWrapper = useRef(null);
  const socialAbsoulte = useRef(null);
  useEffect(() => {
    const svg = wrapper.current.children[0];
    const leaf = svg.querySelector('#leaf');
    const blocks = svg.querySelector('#blocks');
    const laptop = svg.querySelector('#laptop');
    const headset = svg.querySelector('#headset');
    const table = svg.querySelector('#table');
    const pot = svg.querySelector('#pot');
    const person = svg.querySelector('#person');
    const textContainer = textWrapper.current.children;
    const socialLinks = socialAbsoulte.current.children;
    gsap.set([...blocks.children, person, leaf, laptop, table, pot, headset], {
      autoAlpha: 0,
    });
    gsap.set([laptop, leaf], { transformOrigin: '50% 100%' });
    gsap.set([...textContainer, ...socialLinks], { autoAlpha: 0 });
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
    const textTl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
    textTl
      .fromTo(
        [
          textContainer[0],
          textContainer[1],
          textContainer[2],
          textContainer[3],
        ],
        { x: '-=130' },
        { x: '+=130', duration: 1.3, autoAlpha: 1, stagger: 0.2 }
      )
      .fromTo(
        textContainer[4],
        { y: '+=50' },
        { y: '-=50', duration: 1, autoAlpha: 1 }
      )
      .to([...socialLinks], { autoAlpha: 1, duration: 1 });

    tl.fromTo(
      table,
      { x: '-=100', y: '-=200' },
      { duration: 1.5, x: '+=100', y: '+=200', autoAlpha: 1 }
    )
      .fromTo(laptop, { scaleY: 0 }, { duration: 0.7, autoAlpha: 1, scaleY: 1 })
      .to(person, { duration: 1, autoAlpha: 1 })
      .fromTo(headset, { y: '-=50' }, { y: '+=50', duration: 1, autoAlpha: 1 })
      .to(pot, { duration: 1, autoAlpha: 1 }, '-=1')
      .fromTo(
        leaf,
        { scaleY: 0 },
        { duration: 2, autoAlpha: 1, scaleY: 1 },
        '-=1'
      )
      .to(blocks, { autoAlpha: 1 })
      .to(
        blocks.children,
        { duration: 0.7, autoAlpha: 1, stagger: 0.1 },
        '-=1'
      );
  }, []);

  return (
    <HeroContainer>
      <PaddingLeft>
        <HeroInner>
          <TextContainer ref={textWrapper}>
            <HeroFullTitle>Mateusz Romek</HeroFullTitle>
            <HeroTitle>Mateusz</HeroTitle>
            <HeroTitle>Romek</HeroTitle>
            <HeroText>junior frontend developer</HeroText>
            <span>
              <Button
                onClick={() => {
                  scrollTo('#contact');
                }}
              >
                Let's chat
              </Button>
            </span>
          </TextContainer>
          <SVGContainer ref={wrapper}>
            <Coding />
          </SVGContainer>
        </HeroInner>
      </PaddingLeft>
      <SocialContainer ref={socialAbsoulte}>
        <StyledIcon>
          <GithubIcon />
        </StyledIcon>
        <StyledIcon>
          <LinkedInIcon />
        </StyledIcon>
      </SocialContainer>
    </HeroContainer>
  );
};

export default Hero;

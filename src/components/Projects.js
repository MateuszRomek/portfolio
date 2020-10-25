import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { PaddingLeft, SectionTitle } from '../shared/index';
import Project from './Project';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
const ProjectsContainer = styled.section`
  padding: 40px 25px;
  max-width: 1920px;
  margin: 0 auto;
`;
const FlexContainer = styled.div`
  padding: 15px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 450px) {
    padding: 0;
  }
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          projects {
            description
            git
            live
            name
            stack
          }
        }
      }
    }
  `);
  const wrapper = useRef(null);

  useEffect(() => {
    const container = wrapper.current;
    const title = container.querySelector('.projectsTitle');
    const flexContainer = container.querySelector('.flexContainer');

    gsap.registerPlugin(ScrollTrigger);
    gsap.set([title, ...flexContainer.children], { autoAlpha: 0 });
    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      scrollTrigger: {
        trigger: '.projectsTitle',
        start: 'top 70%',
      },
    });

    tl.fromTo(
      title,
      { x: '-=50' },
      { x: '+=50', duration: 1, autoAlpha: 1 }
    ).fromTo(
      flexContainer.children,
      { y: '-=15', x: '-=15' },
      { y: '+=15', x: '+=15', duration: 1, stagger: 0.2, autoAlpha: 1 }
    );
  }, []);
  return (
    <ProjectsContainer ref={wrapper} id="projects">
      <PaddingLeft>
        <SectionTitle className="projectsTitle">Projects</SectionTitle>
      </PaddingLeft>
      <FlexContainer className="flexContainer">
        {data.site.siteMetadata.projects.map(project => {
          return <Project key={project.name} projectData={project} />;
        })}
      </FlexContainer>
    </ProjectsContainer>
  );
};

export default Projects;

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import sr from '@/app/utils/sr';
import { Data, featuredProjectsProps } from '@/app/config';
import { FormattedIcon } from '@/app/icons';
import styled from 'styled-components';
import { theme, mixins, media as media_, Section, Heading } from '@/app/styles';
const { colors, fontSizes, fonts } = theme;

let media: any = media_;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const StyledContent = styled.div`
  position: relative;
  grid-column: 1 / 6;
  grid-row: 1 / -1;
  ${media.thone`
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    z-index: 5;
  `};
  ${media.phablet`padding: 30px 25px 20px;`};
`;
const StyledLabel = styled.h4`
  font-size: ${fontSizes.smish};
  font-weight: normal;
  color: ${colors.green};
  font-family: ${fonts.SFMono};
  margin-top: 10px;
  padding-top: 0;
`;
const StyledProjectName = styled.h5`
  font-size: 28px;
  margin: 0 0 20px;
  color: ${colors.lightestSlate};
  ${media.tablet`font-size: 24px;`};
  ${media.thone`color: ${colors.white};`};
  a {
    ${media.tablet`display: block;`};
  }
`;
const StyledDescription = styled.div`
  ${mixins.boxShadow};
  position: relative;
  z-index: 2;
  padding: 25px;
  background-color: ${colors.lightNavy};
  color: ${colors.lightSlate};
  font-size: ${fontSizes.md};
  border-radius: ${theme.borderRadius};
  text-align: left;
  ${media.thone`
    background-color: transparent;
    padding: 20px 0;
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
  `};
  p {
    margin: 0;
  }
  a {
    ${mixins.inlineLink};
  }
  ul {
    ${mixins.fancyList};
    font-size: ${fontSizes.md};
  }
`;
const StyledTechList = styled.ul`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 25px 0 10px;
  list-style: none;

  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.smish};
    color: ${colors.green};
    margin-right: ${theme.margin};
    margin-bottom: 7px;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 0;
    }
    ${media.thone`
      color: ${colors.green};
      margin-right: 10px;
    `};
  }
`;
const StyledLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  color: ${colors.lightestSlate};
  a {
    padding: 10px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;
const StyledFeaturedImg = styled(Image)`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-radius: ${theme.borderRadius};
  position: relative;
  ${media.tablet`
    object-fit: cover;
    width: auto;
    height: 100%;
  `};
`;
const StyledImgContainer = styled.a`
  ${mixins.boxShadow};
  grid-column: 7 / -1;
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;
  background: transparent;
  border-radius: ${theme.radius + 1}px;
  transition: ${theme.transition};
  ${media.tablet`height: 100%;`};
  ${media.thone`
    grid-column: 1 / -1;
    opacity: 0.25;
  `};
  &:hover,
  &:focus {
    background: transparent;
    &:before,
    ${StyledFeaturedImg} {
      background: transparent;
      filter: none;
    }
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    transition: ${theme.transition};
    // background-color: ${colors.navy};
    // mix-blend-mode: screen;
  }
`;
const StyledProject = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 100px;
  ${media.thone`
    margin-bottom: 70px;
  `};
  &:last-of-type {
    margin-bottom: 0;
  }
  &:nth-of-type(odd) {
    ${StyledContent} {
      grid-column: 7 / -1;
      ${media.thone`
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      `};
      ${media.phablet`padding: 30px 25px 20px;`};
    }
    ${StyledTechList} {
      justify-content: flex-end;
      li {
        margin-left: ${theme.margin};
        margin-right: 0;
      }
    }
    ${StyledLinkWrapper} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    ${StyledImgContainer} {
      grid-column: 1 / 6;
      
      ${media.tablet`height: 100%;`};
      ${media.thone`
        grid-column: 1 / -1;
        opacity: 0.25;
      `};
    }
  }
`;

const Featured = () => {
  const featuredProjects: featuredProjectsProps[] = Data.featuredProjects;

  const revealTitle = useRef(null);
  const revealProjects: any = useRef([]);
  useEffect(() => {
    sr.reveal(revealTitle.current, Data.srConfig());
    revealProjects.current.forEach((ref: any, i: number) => sr.reveal(ref, Data.srConfig(i * 100)));
  }, []);

  return (
    <StyledContainer id="projects">
      <Heading ref={revealTitle}>Some Things I&apos;ve Built</Heading>

      <div>
        {featuredProjects &&
          featuredProjects.map((node , i) => {

            return (
              <StyledProject key={i} ref={el => (revealProjects.current[i] = el)}>
                <StyledContent>
                  {/* <StyledLabel>Featured Project</StyledLabel> */}
                  <StyledProjectName>
                    {node.github ? (
                      <a
                        href={node.github}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link">
                        {node.title}
                      </a>
                    ) : (
                      node.title
                    )}
                  </StyledProjectName>
                  <StyledDescription dangerouslySetInnerHTML={{ __html: node.html }} />
                  {node.tech && (
                    <StyledTechList>
                      {node.tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </StyledTechList>
                  )}
                  <StyledLinkWrapper>
                    {node.github && (
                      <a
                        href={node.github}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="GitHub Link">
                        <FormattedIcon name="GitHub" />
                      </a>
                    )}
                    {node.demo && (
                      <a
                        href={node.demo}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link">
                        <FormattedIcon name="External" />
                      </a>
                    )}
                  </StyledLinkWrapper>
                </StyledContent>

                <StyledImgContainer
                  href={node.demo ? node.demo : node.github ? node.github : '#'}
                  target="_blank"
                  rel="nofollow noopener noreferrer">
                  <StyledFeaturedImg src={node.img.src} width={node.img.width} height={node.img.height} alt={node.title} />
                </StyledImgContainer>
              </StyledProject>
            );
          })}
      </div>
    </StyledContainer>
  );
};

export default Featured;

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@/app/utils/sr';
import { Data } from '@/app/config';
import styled from 'styled-components';
import { theme, mixins, media as media_, Section, Heading } from '@/app/styles';
const { colors, fontSizes, fonts } = theme;

let media:any = media_;

const StyledContainer = styled(Section)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 100px;
  a {
    ${mixins.inlineLink};
  }
`;
const StyledHeading = styled(Heading)`
  display: block;
  color: ${colors.green};
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  margin-bottom: 20px;
  justify-content: center;
`;
const StyledTitle = styled.h4`
  margin: 0 0 20px;
  font-size: 60px;
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
`;
const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`;

const Contact = () => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, Data.srConfig()), []);

  return (
    <StyledContainer id="contact" ref={revealContainer}>
      <StyledHeading>What&apos;s Next?</StyledHeading>

      <StyledTitle>Get In Touch</StyledTitle>
        <p>{"I am actively searching for open SDE positions. You can reach me via my mail, checkout my resume on the navigation or visit my linkedin page."}</p>

      <StyledEmailLink href={`mailto:${Data.email}`} target="_blank" rel="nofollow noopener noreferrer">
        Say Hello
      </StyledEmailLink>
    </StyledContainer>
  );
};

export default Contact;

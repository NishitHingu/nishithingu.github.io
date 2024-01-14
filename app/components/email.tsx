import React from 'react';
import PropTypes from 'prop-types';
import { Data } from '@/app/config';
import Side from '@/app/components/side';
import styled from 'styled-components';
import { theme } from '@/app/styles';
const { colors, fontSizes, fonts } = theme;

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${colors.lightSlate};
  }
`;
const StyledEmailLink = styled.a`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.sm};
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  margin: 20px auto;
  padding: 10px;

  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
`;

const Email = ({ isHome }: {isHome: boolean}) => (
  <Side isHome={isHome} orientation="right">
    <StyledLinkWrapper>
      <StyledEmailLink href={`mailto:${Data.email}`}>{Data.email}</StyledEmailLink>
    </StyledLinkWrapper>
  </Side>
);

export default Email;

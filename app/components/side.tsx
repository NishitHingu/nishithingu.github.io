import React, { useState, useEffect, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { theme, media as media_ } from '@/app/styles';
const { colors, loaderDelay } = theme;

interface StyledContainerProps {
    orientation: string,
}

let media: any = media_;

const StyledContainer = styled.div<StyledContainerProps>`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
  z-index: 10;
  color: ${colors.green};
  ${media.desktop`right: 25px;`};
  ${media.tablet`display: none;`};
`;

const Side = ({ children, isHome, orientation }: {children: ReactNode, isHome: boolean, orientation: string}) => {
  const [isMounted, setIsMounted] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledContainer orientation={orientation}>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition classNames={isHome ? 'fade' : ''} timeout={isHome ? loaderDelay : 0}>
            {children}
          </CSSTransition>
        )}
      </TransitionGroup>
    </StyledContainer>
  );
};

export default Side;

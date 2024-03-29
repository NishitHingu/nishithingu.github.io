import React, { Component, useEffect, useRef, useState } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { throttle } from '@/app/utils';
import { Data } from '../config';
import Menu from '@/app/components/menu';
import { IconLogo } from '@/app/icons';
import styled from 'styled-components';
import { theme, mixins, media as media_ } from '@/app/styles';
import Link from 'next/link';
const { colors, fontSizes, fonts, loaderDelay } = theme;

// Workaround as Ts does not support the feature to add type to an imported obj.
let media: any = media_;

interface StyledContainerProps {
    scrollDirection: String,
}

interface StyledHamburgerInnerProps {
    menuOpen: boolean,
}

const StyledContainer = styled.header <StyledContainerProps>`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: ${colors.navy};
  transition: ${theme.transition};
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: ${props => (props.scrollDirection === 'none' ? theme.navHeight : theme.navScrollHeight)};
  box-shadow: ${props =>
    props.scrollDirection === 'up' ? `0 10px 30px -10px ${colors.shadowNavy}` : 'none'};
  transform: translateY(
    ${props => (props.scrollDirection === 'down' ? `-${theme.navScrollHeight}` : '0px')}
  );
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`;
const StyledNav = styled.nav`
  ${mixins.flexBetween};
  position: relative;
  width: 100%;
  color: ${colors.lightestSlate};
  font-family: ${fonts.SFMono};
  counter-reset: item 0;
  z-index: 12;
`;
const StyledLogo = styled.div`
  ${mixins.flexCenter};
  a {
    display: block;
    width: 42px;
    height: 42px;
    &:hover,
    &:focus {
      svg {
        fill: none;
        fill: ${colors.transGreen};
      }
    }
    svg {
      fill: none;
      transition: ${theme.transition};
      user-select: none;
    }
  }
`;
const StyledHamburger = styled.div`
  ${mixins.flexCenter};
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  ${media.tablet`display: flex;`};
`;
const StyledHamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${theme.hamburgerWidth}px;
  height: 24px;
`;
const StyledHamburgerInner = styled.div <StyledHamburgerInnerProps>`
  background-color: ${colors.green};
  position: absolute;
  width: ${theme.hamburgerWidth}px;
  height: 2px;
  border-radius: ${theme.borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
  );
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: ${colors.green};
    position: absolute;
    left: auto;
    right: 0;
    width: ${theme.hamburgerWidth}px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${props => (props.menuOpen ? `100%` : `120%`)};
    top: ${props => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props => (props.menuOpen ? theme.hamBeforeActive : theme.hamBefore)};
  }
  &:after {
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props => (props.menuOpen ? theme.hamAfterActive : theme.hamAfter)};
  }
`;
const StyledLink = styled.div`
  display: flex;
  align-items: center;
  ${media.tablet`display: none;`};
`;
const StyledList = styled.ol`
  ${mixins.flexBetween};
  padding: 0;
  margin: 0;
  list-style: none;
`;
const StyledListItem = styled.li`
  margin: 0 10px;
  position: relative;
  font-size: ${fontSizes.sm};
`;
const StyledListLink = styled(Link)`
  padding: 12px 10px;
`;
const StyledResumeButton = styled.a`
  ${mixins.smallButton};
  margin-left: 10px;
  font-size: ${fontSizes.sm};
`;

const DELTA = 5;

interface PropsInterface {
  isHome: boolean;
}

export default function Nav ({isHome} : {isHome: boolean}) {
  const [isMounted, setIsMounted] = useState(isHome);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('none');
  const lastScrollTop = useRef(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const handleScroll = () => {
    if (typeof window !== 'undefined')
    {
      const fromTop = window.scrollY;
      // Make sure they scroll more than DELTA
      if (!isMounted || Math.abs(lastScrollTop.current - fromTop) <= DELTA || menuOpen) {
        return;
      }

      if (fromTop < DELTA) {
        setScrollDirection('none');
      } else if (fromTop > lastScrollTop.current && fromTop > Data.navHeight) {
        if (scrollDirection !== 'down') {
          setScrollDirection('down');
        }
      } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
        if (scrollDirection !== 'up') {
          setScrollDirection('up');
        }
      }

      lastScrollTop.current = fromTop;
    }
  };

  const handleResize = () => {
    if (typeof window !== 'undefined')
    {
      if (window.innerWidth > 768 && menuOpen) {
        toggleMenu();
      }
    }
  };

  const handleKeydown = (e: any) => {
    if (!menuOpen) {
      return;
    }

    if (e.which === 27 || e.key === 'Escape') {
      toggleMenu();
    }
  };

  const RemoveListeners = () => {
    if (typeof window !== 'undefined')
    {
      window.removeEventListener('scroll', () => handleScroll());
      window.removeEventListener('resize', () => handleResize());
      window.removeEventListener('keydown', e => handleKeydown(e));
    }
  }

  useEffect(() => {
    setTimeout(
      () =>
        {
          setIsMounted(true);
          if (typeof window !== 'undefined')
          {
            window.addEventListener('scroll', () => handleScroll());
            window.addEventListener('resize', () => handleResize());
            window.addEventListener('keydown', e => handleKeydown(e));
          }
        },
      100,
    )

    return () => {
      RemoveListeners();
    }
  }, []);

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? 'fade' : '';
  const fadeDownClass = isHome ? 'fadedown' : '';
  
  return (
    <StyledContainer scrollDirection={scrollDirection}>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>
      <StyledNav>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <StyledLogo>
                {isHome ? (
                  <a href="/" aria-label="home">
                    <IconLogo />
                  </a>
                ) : (
                  <Link href="/" aria-label="home">
                    <IconLogo />
                  </Link>
                )}
              </StyledLogo>
            </CSSTransition>
          )}
        </TransitionGroup>

        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <StyledHamburger onClick={toggleMenu}>
                <StyledHamburgerBox>
                  <StyledHamburgerInner menuOpen={menuOpen} />
                </StyledHamburgerBox>
              </StyledHamburger>
            </CSSTransition>
          )}
        </TransitionGroup>

        <StyledLink>
          <StyledList>
            <TransitionGroup component={null}>
              {isMounted &&
                Data.navLinks &&
                Data.navLinks.map(({ url, name }, i) => (
                  <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                    <StyledListItem
                      key={i}
                      style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}>
                      <StyledListLink href={url}>{name}</StyledListLink>
                    </StyledListItem>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </StyledList>

          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                <div style={{ transitionDelay: `${isHome ? Data.navLinks.length * 100 : 0}ms` }}>
                  <StyledResumeButton
                    href={Data.resume}
                    target="_blank"
                    rel="nofollow noopener noreferrer">
                    Resume
                  </StyledResumeButton>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </StyledLink>
      </StyledNav>

      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu}/>
    </StyledContainer>
  );
}

'use client'

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import { GlobalStyle, theme } from '@/app/styles';
import Loader from '@/app/components/loader';
import Nav from '@/app/components/nav';
import Social from '@/app/components/social';
import Email from '@/app/components/email';
import Footer from './components/footer';
import Hero from './components/sections/hero';
import About from './components/sections/about';
import Jobs from './components/sections/jobs';
import Featured from './components/sections/featured';
import Projects from './components/sections/projects';
import Contact from './components/sections/contact';

const { colors, fontSizes, fonts } = theme;

const SkipToContent = styled.a`
  position: absolute;
  top: auto;
  left: -999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -99;
  &:focus,
  &:active {
    outline: 0;
    color: ${colors.green};
    background-color: ${colors.lightNavy};
    border-radius: ${theme.borderRadius};
    padding: 18px 23px;
    font-size: ${fontSizes.sm};
    font-family: ${fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    overflow: auto;
    z-index: 99;
  }
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function Home() {
    const isHome = usePathname() === '/';
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      if (isLoading) {
        return;
      }
      if (location.hash) {
        const id = location.hash.substring(1); // location.hash without the '#'
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView();
            el.focus();
          }
        }, 0);
      }
    }, [isLoading]);

    return (
      <div id="root">
          <GlobalStyle />

          <SkipToContent href="#content">Skip to Content</SkipToContent>

          {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <StyledContent>
              <Nav isHome={isHome} />
              <Social isHome={isHome} />
              <Email isHome={isHome} />

              <div id="content">
                <Hero />
                <About />
                <Jobs />
                <Featured />
                <Projects />
                <Contact/>
                <Footer />
              </div>
            </StyledContent>
          )}
        </div>
    )
}

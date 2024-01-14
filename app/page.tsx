"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { GlobalStyle, theme } from "@/app/styles";

// pages/index.js
import dynamic from "next/dynamic";

const DynamicComponentLoader = dynamic(
  () => import("@/app/components/loader"),
  {
    ssr: false,
  }
);
const DynamicComponentNav = dynamic(
  () => import("@/app/components/nav"),
  {
    ssr: false,
  }
);
const DynamicComponentSocial = dynamic(
  () => import("@/app/components/social"),
  {
    ssr: false,
  }
);
const DynamicComponentEmail = dynamic(
  () => import("@/app/components/email"),
  {
    ssr: false,
  }
);
const DynamicComponentFooter = dynamic(
  () => import("@/app/components/footer"),
  {
    ssr: false,
  }
);
const DynamicComponentHero = dynamic(
  () => import("@/app/components/sections/hero"),
  {
    ssr: false,
  }
);

const DynamicComponentAbout = dynamic(
  () => import("@/app/components/sections/about"),
  {
    ssr: false,
  }
);
const DynamicComponentJobs = dynamic(
  () => import("@/app/components/sections/jobs"),
  {
    ssr: false,
  }
);
const DynamicComponentFeatured = dynamic(
  () => import("@/app/components/sections/featured"),
  {
    ssr: false,
  }
);
const DynamicComponentProjects = dynamic(
  () => import("@/app/components/sections/projects"),
  {
    ssr: false,
  }
);
const DynamicComponentContact = dynamic(
  () => import("@/app/components/sections/contact"),
  {
    ssr: false,
  }
);

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
  const isHome = usePathname() === "/";
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
        <DynamicComponentLoader finishLoading={() => setIsLoading(false)} />
      ) : (
        <StyledContent>
          <DynamicComponentNav isHome={isHome} />
          <DynamicComponentSocial isHome={isHome} />
          <DynamicComponentEmail isHome={isHome} />

          <div id="content">
            <DynamicComponentHero />
            <DynamicComponentAbout />
            <DynamicComponentJobs />
            <DynamicComponentFeatured />
            <DynamicComponentProjects />
            <DynamicComponentContact />
            <DynamicComponentFooter />
          </div>
        </StyledContent>
      )}
    </div>
  );
}

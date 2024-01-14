import { css } from 'styled-components';
import localFont from 'next/font/local';

const CalibreLightTTF = localFont({src: '../fonts/Calibre/Calibre-Light.ttf'});
const CalibreLightWOFF2 = localFont({src: '../fonts/Calibre/Calibre-Light.woff2'});
const CalibreLightWOFF = localFont({src: '../fonts/Calibre/Calibre-Light.woff'});
const CalibreLightItalicTTF = localFont({src: '../fonts/Calibre/Calibre-LightItalic.ttf'});
const CalibreLightItalicWOFF = localFont({src: '../fonts/Calibre/Calibre-LightItalic.woff'});
const CalibreLightItalicWOFF2 = localFont({src: '../fonts/Calibre/Calibre-LightItalic.woff2'});
const CalibreRegularTTF = localFont({src: '../fonts/Calibre/Calibre-Regular.ttf'});
const CalibreRegularWOFF = localFont({src: '../fonts/Calibre/Calibre-Regular.woff'});
const CalibreRegularWOFF2 = localFont({src: '../fonts/Calibre/Calibre-Regular.woff2'});
const CalibreRegularItalicTTF = localFont({src: '../fonts/Calibre/Calibre-RegularItalic.ttf'});
const CalibreRegularItalicWOFF = localFont({src: '../fonts/Calibre/Calibre-RegularItalic.woff'});
const CalibreRegularItalicWOFF2 = localFont({src: '../fonts/Calibre/Calibre-RegularItalic.woff2'});
const CalibreMediumTTF = localFont({src: '../fonts/Calibre/Calibre-Medium.ttf'});
const CalibreMediumWOFF = localFont({src: '../fonts/Calibre/Calibre-Medium.woff'});
const CalibreMediumWOFF2 = localFont({src: '../fonts/Calibre/Calibre-Medium.woff2'});
const CalibreMediumItalicTTF = localFont({src: '../fonts/Calibre/Calibre-MediumItalic.ttf'});
const CalibreMediumItalicWOFF = localFont({src: '../fonts/Calibre/Calibre-MediumItalic.woff'});
const CalibreMediumItalicWOFF2 = localFont({src: '../fonts/Calibre/Calibre-MediumItalic.woff2'});
const CalibreSemiboldTTF = localFont({src: '../fonts/Calibre/Calibre-Semibold.ttf'});
const CalibreSemiboldWOFF = localFont({src: '../fonts/Calibre/Calibre-Semibold.woff'});
const CalibreSemiboldWOFF2 = localFont({src: '../fonts/Calibre/Calibre-Semibold.woff2'});
const CalibreSemiboldItalicTTF = localFont({src: '../fonts/Calibre/Calibre-SemiboldItalic.ttf'});
const CalibreSemiboldItalicWOFF = localFont({src: '../fonts/Calibre/Calibre-SemiboldItalic.woff'});
const CalibreSemiboldItalicWOFF2 = localFont({src: '../fonts/Calibre/Calibre-SemiboldItalic.woff2'});
const SFMonoRegularTTF = localFont({src: '../fonts/SFMono/SFMono-Regular.ttf'});
const SFMonoRegularWOFF = localFont({src: '../fonts/SFMono/SFMono-Regular.woff'});
const SFMonoRegularWOFF2 = localFont({src: '../fonts/SFMono/SFMono-Regular.woff2'});
const SFMonoRegularItalicTTF = localFont({src: '../fonts/SFMono/SFMono-RegularItalic.ttf'});
const SFMonoRegularItalicWOFF = localFont({src: '../fonts/SFMono/SFMono-RegularItalic.woff'});
const SFMonoRegularItalicWOFF2 = localFont({src: '../fonts/SFMono/SFMono-RegularItalic.woff2'});
const SFMonoMediumTTF = localFont({src: '../fonts/SFMono/SFMono-Medium.ttf'});
const SFMonoMediumWOFF = localFont({src: '../fonts/SFMono/SFMono-Medium.woff'});
const SFMonoMediumWOFF2 = localFont({src: '../fonts/SFMono/SFMono-Medium.woff2'});
const SFMonoMediumItalicTTF = localFont({src: '../fonts/SFMono/SFMono-MediumItalic.ttf'});
const SFMonoMediumItalicWOFF = localFont({src: '../fonts/SFMono/SFMono-MediumItalic.woff'});
const SFMonoMediumItalicWOFF2 = localFont({src: '../fonts/SFMono/SFMono-MediumItalic.woff2'});
const SFMonoSemiboldTTF = localFont({src: '../fonts/SFMono/SFMono-Semibold.ttf'});
const SFMonoSemiboldWOFF = localFont({src: '../fonts/SFMono/SFMono-Semibold.woff'});
const SFMonoSemiboldWOFF2 = localFont({src: '../fonts/SFMono/SFMono-Semibold.woff2'});
const SFMonoSemiboldItalicTTF = localFont({src: '../fonts/SFMono/SFMono-SemiboldItalic.ttf'});
const SFMonoSemiboldItalicWOFF = localFont({src: '../fonts/SFMono/SFMono-SemiboldItalic.woff'});
const SFMonoSemiboldItalicWOFF2 = localFont({src: '../fonts/SFMono/SFMono-SemiboldItalic.woff2'});

const FontFaces = css`
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreLightWOFF2}) format('woff2'), url(${CalibreLightWOFF}) format('woff'),
      url(${CalibreLightTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreLightItalicWOFF2}) format('woff2'),
      url(${CalibreLightItalicWOFF}) format('woff'),
      url(${CalibreLightItalicTTF}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreRegularWOFF2}) format('woff2'), url(${CalibreRegularWOFF}) format('woff'),
      url(${CalibreRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreRegularItalicWOFF2}) format('woff2'),
      url(${CalibreRegularItalicWOFF}) format('woff'),
      url(${CalibreRegularItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreMediumWOFF2}) format('woff2'), url(${CalibreMediumWOFF}) format('woff'),
      url(${CalibreMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreMediumItalicWOFF2}) format('woff2'),
      url(${CalibreMediumItalicWOFF}) format('woff'),
      url(${CalibreMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreSemiboldWOFF2}) format('woff2'), url(${CalibreSemiboldWOFF}) format('woff'),
      url(${CalibreSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreSemiboldItalicWOFF2}) format('woff2'),
      url(${CalibreSemiboldItalicWOFF}) format('woff'),
      url(${CalibreSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoRegularWOFF2}) format('woff2'), url(${SFMonoRegularWOFF}) format('woff'),
      url(${SFMonoRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoRegularItalicWOFF2}) format('woff2'),
      url(${SFMonoRegularItalicWOFF}) format('woff'),
      url(${SFMonoRegularItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoMediumWOFF2}) format('woff2'), url(${SFMonoMediumWOFF}) format('woff'),
      url(${SFMonoMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoMediumItalicWOFF2}) format('woff2'),
      url(${SFMonoMediumItalicWOFF}) format('woff'),
      url(${SFMonoMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoSemiboldWOFF2}) format('woff2'), url(${SFMonoSemiboldWOFF}) format('woff'),
      url(${SFMonoSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoSemiboldItalicWOFF2}) format('woff2'),
      url(${SFMonoSemiboldItalicWOFF}) format('woff'),
      url(${SFMonoSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
`;

export default FontFaces;

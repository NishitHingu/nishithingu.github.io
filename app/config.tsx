import aboutImg from '@/app/static/PXL_20231030_082840548.jpg'
import defenderGameImg from '@/app/static/Defender_Game.png';
import fypImg from '@/app/static/advance_graph_fyp.png';
import currencyAppImg from '@/app/static/currency_app.png';

export interface jobsProps {
    title: string,
    company: string,
    location: string,
    range: string,
    url: string,
    html: string,
    skills: string,
}
export interface featuredProjectsProps {
  title: string,
  tech: string[],
  github: string,
  demo: string,
  img: { 
    src: typeof aboutImg,
    width: number,
    height: number,
  },
  html: string,
}

export let Data = {
  siteTitle: "Nishit Hingu",
  siteDescription:
    "Nishit Hingu is a Software Developer, based in India, who loves learning new things.",
  siteKeywords:
    "Nishit Hingu, Nishit, Hingu, nishithingu, software engineer, C, C++, low-latency, javascript, rust, mumbai",
  siteUrl: "https://nishithingu.github.io/",
  siteLanguage: "en_US",
  name: "Nishit Hingu",
  location: "Mumbai, India",
  email: "nishithingu@gmail.com",
  github: "https://github.com/NishitHingu",
  resume: "./Resume.pdf",
  twitterHandle: "@",
  hero: {
    greetings: "Namaste, my name is",
    subtitle: "Software Engineer.",
    html: "I am a passionate software engineer with a penchant for elegant design and a commitment to crafting maintainable, efficient code.",
  },
  about: {
    title: "About Me",
    skills: ["C++", "C", "Typescript", "Rust", "Python", "React", "HTML", "CSS", "SQL", "Bash"],
    img: { 
      src: aboutImg,
      width: 700,
      height: 525,
    },
    html: `
    <p>Hello! I\'m Nishit Hingu, from Mumbai.</p>
    <p>I am an enthusiastic individual fueled by curiosity and creativity. I thrive on the challenges that come with dissecting complex issues and devising innovative solutions. Working harmoniously with a team is where I truly shine, as I believe that collective effort fosters creativity and yields the best results.</p>
    <p>Currently I work as a software developer at <a href="https://www.dolatcapital.com/" target="_blank">Dolat Capital </a> where i have build low latency, high performant applications.</p>
    <p>Beyond my professional endeavors, I find solace in music, gaming, sports and reading novels.</p>
    <p>Here are a few technologies I’ve been working with recently: </p>`,
  },
  jobs: {
    data: [
      {
        title: "Software Developer",
        company: "Dolat Capital",
        location: "Mumbai, India",
        range: "Dec 2021 - present",
        url: "https://www.dolatcapital.com/",
        html: 
        `<ul>
          <li>Spearheaded development specializing in Live Data Operations and Management in HFT for markets such as National Stock Exchange, Bombay Stock Exchange.</li>
          <li>Implemented low-latency, high performant Market Data Adaptors for sensing live market data and transforming it into knowledge depicting the market picture as per user requirement.</li>
          <li>Developed a Market Simulation Module to help traders analyze effectiveness of their strategies and business logic.</li>
          <li>Managing Raw Market Data's collection, storage, correction, processing, and post-processing.</li>
        </ul>`,
        skills: "C++,C,Linux,Bash,Git,SysAdmin"
      },
      {
        title: "Software Engineering Intern",
        company: "AirBook (Conbi)",
        location: "remote Mumbai",
        range: "April 2021 - July 2021",
        url: "https://www.airbook.io/",
        html:
        `<ul>
          <li>Developed essential APIs to enhance the transmission of data from the backend to the frontend.</li>
          <li>Led the design, development and implemented the primary Frontend application, orchestrating seamless data retrieval from the backend API in response to user queries.</li>
          <li>Empowered users to customize and save personalized dashboards using the application’s robust features.</li>
        </ul>`,
        skills: "React JS, Material UI, Google Cloud, AWS, Git, GitHub.",
      },
    ],
  },
  featuredProjects: [
    {
      title: 'Currency‐App',
      tech: ['React JS', 'Material UI', 'Recharts'],
      github: 'https://github.com/NishitHingu/Currency-App',
      demo: 'https://nishithingu.github.io/Currency-App/',
      img: { 
        src: currencyAppImg,
        width: 400,
        height: 275,
      },
      html: `
      <ul>
        <li>Developed react application that displays foreign exchange rates for various currencies, utilizing data sourced from the exchange rates API.</li>
        <li>The application features a Crypto Currency page that presents the ranking of various Crypto Coins, leveraging the CoinGecko API to retrieve the necessary data.</li>
      </ul>
      `
    },
    {
      title: 'Financial Market Analysis Platform',
      tech: ['React JS', 'Material UI', 'Python', 'Scikit Learn', 'PyTorch', 'Pandas'],
      github: 'https://github.com/NishitHingu/final_year_project',
      demo: '',
      img: { 
        src: fypImg,
        width: 400,
        height: 275,
      },
      html: `
      <ul>
        <li>Implemented a machine learning model that utilizes time series analysis and sentiment analysis to predict stock values.</li>
        <li>Built a website aimed at assisting novice investors in their investment journey.</li>
      </ul>`
    },
    {
      title: 'Defender Game',
      tech: ['Rust', 'Piston', 'Rand'],
      github: 'https://github.com/NishitHingu/Defender_Game',
      demo: '',
      img: { 
        src: defenderGameImg,
        width: 400,
        height: 400,
      },
      html: `
      <ul>
        <li>Engineered a game in Rust inspired by classic defender games, featuring a player‐controlled ship, dynamic bullet mechanics, and progressively
        challenging enemy waves.</li>
        <li>Created a robust scoring module to track player high scores, enhancing user engagement and competition.</li>
      <ul>`
    },
  ],
  otherProjects: [
    {
      title: "Memory game",
      tech: ["React", "HTML", "CSS"],
      github: "https://github.com/NishitHingu/Memory-game-React",
      demo: "https://nishithingu.github.io/Memory-game-React/",
      html: `A Card matching game that puts your memory to test.`,
    },
    {
      title: "To-Do-List",
      tech: ["Javascript", "HTML", "CSS"],
      github: "https://github.com/NishitHingu/To-Do-List",
      demo: "https://nishithingu.github.io/To-Do-List/",
      html: `A To do list with user authentication and cloud storage support.`,
    },
    {
      title: "AutoComplete SearchBar",
      tech: ["Javascript", "HTML", "CSS"],
      github: "https://github.com/NishitHingu/AutoComplete_Search",
      demo: "https://nishithingu.github.io/AutoComplete_Search/",
      html: `React app where user can search through a set of data`,
    },
    {
      title: "GLCD_displaying_graph",
      tech: ["C"],
      github: "https://github.com/NishitHingu/GLCD_displaying_graph",
      demo: "",
      html: `Print graphical data on a LCD Display.`,
    },
    {
      title: "Login Form",
      tech: ["HTML", "CSS"],
      github: "https://github.com/NishitHingu/Login_Form",
      demo: "https://nishithingu.github.io/Login_Form/",
      html: `Demonstration of a login form, showcasing the design of a user interface.`,
    },
    {
      title: "Calculator",
      tech: ["Javascript", "HTML", "CSS"],
      github: "https://github.com/NishitHingu/Calculator",
      demo: "https://github.com/NishitHingu/Calculator",
      html: `A simple calculator with basic function`,
    },
    {
      title: "The NewYork Times",
      tech: ["HTML", "CSS"],
      github: "https://github.com/NishitHingu/The_NewYork_times",
      demo: "https://nishithingu.github.io/The_NewYork_times/",
      html: `A static replica of new york times newletter.`,
    },
    {
      title: "Etch-a-Sketch",
      tech: ["Javascript", "HTML", "CSS"],
      github: "https://github.com/NishitHingu/Etch-a-Sketch",
      demo: "https://nishithingu.github.io/Etch-a-Sketch/",
      html: `A Painting canvas to draw our imaginations.`,
    },
    {
      title: "Library",
      tech: ["Javascript", "HTML", "CSS"],
      github: "https://github.com/NishitHingu/Library",
      demo: "https://nishithingu.github.io/Library/",
      html: `Books management system.`,
    },
    {
      title: "Apple Site",
      tech: ["HTML", "CSS"],
      github: "https://github.com/NishitHingu/old-apple-site",
      demo: "",
      html: `Replica of the old apple site.`,
    },
    {
      title: "Google homepage",
      tech: ["HTML", "CSS"],
      github: "https://github.com/NishitHingu/Google_homepage",
      demo: "https://nishithingu.github.io/Google_homepage/",
      html: `My first web dev project :)`,
    },
  ],
  socialMedia: [
    {
      name: "GitHub",
      url: "https://github.com/NishitHingu",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/nishit-hingu-4b4892194",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/nishit_012?igsh=YzVkODRmOTdmMw==",
    },
  ],

  navLinks: [
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Experience",
      url: "/#jobs",
    },
    {
      name: "Projects",
      url: "/#projects",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ],

  navHeight: 100,

  colors: {
    green: "#64ffda",
    navy: "#0a192f",
    darkNavy: "#020c1b",
  },

  srConfig: (delay = 200) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

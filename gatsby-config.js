/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require('path')
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Mateusz Romek`,
    siteUrl: `https://www.mateuszromek.pl`,
    links: ['about', 'projects', 'technologies', 'contact'],
    projects: [
      {
        name: 'React List',
        description:
          'React list is a todo application based on Microsoft todo. The user is authorized by JWT. It was my first application written in Typescrtip and with its own server in NodeJs',
        stack: 'React, Typescrtip, ExpressJs, MongoDB, Redux',
        git: 'https://github.com/MateuszRomek/reactList',
        live: null,
      },
      {
        name: 'Kanban-Board',
        description:
          'As I really like organizing tasks, I often use trello to plan my projects. For this reason, this project was created. I wanted to create my own version of Trello. All data is managed by redux and I used React Beautiful DnD for dragging elements',
        stack: 'React, Redux, Beautiful DnD',
        git: 'https://github.com/MateuszRomek/Kanban-Board',
        live: 'https://dazzling-hodgkin-ab2ac1.netlify.app/',
      },
      {
        name: 'Cv Builder',
        description:
          "The project was born out of the annoyance of paying for various CV builders. Unfortunately, at that time I didn't know node js well, so I couldn't implement PDF generation.",
        stack: 'React, Redux',
        git: 'https://github.com/MateuszRomek/cv-builder',
        live: 'https://adoring-minsky-52e780.netlify.app/',
      },
      {
        name: 'Premier League',
        description:
          'As I am a fan of one of the clubs in the Premier League, I wanted to make a simple application that would display for me the most important information about the Premier league. For api queries I used react query to get to know this library.',
        stack: 'React, React-Query',
        git: 'https://github.com/MateuszRomek/PremierLeague',
        live: 'https://elegant-wozniak-b9daa1.netlify.app/summary',
      },
      {
        name: 'Hot16Challenge2',
        description:
          'The app was created because I didn\'t like the current website for this challenge. For this reason, I wanted to create a more convenient and intuitive application for previewing "sixteenths" from various artists. It was my first app in react',
        stack: 'React',
        git: 'https://github.com/MateuszRomek/hot16challenge2',
        live: 'https://hopeful-albattani-224744.netlify.app/',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    'gatsby-plugin-react-svg',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
  ],
}

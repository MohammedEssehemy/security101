module.exports = {
  siteMetadata: {
    author: `Mohammed Essehemy`,
    title: `Security 101 - Essehemy`,
    repo: `https://github.com/MohammedEssehemy/security101`,
    github: `https://github.com/mohammedessehemy`,
    linkedIn: `https://linkedin.com/in/mohammed-essehemy`,
    stackOverflow: 'https://stackoverflow.com/users/7435863/mohammed-essehemy',
    email: `mailto:mohammedessehemy@gmail.com`
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
          logo: "./src/favicon.png",
      }
    },
      'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        mdx: true,
        contentPath: 'src/slides',
        basePath: '/',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Security 101`,
        short_name: `security101`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: 'src/favicon.png'
      }
    },
    `gatsby-plugin-offline`,
  ],
}

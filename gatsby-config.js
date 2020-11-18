module.exports = {
  siteMetadata: {
    author: `Mohammed Essehemy`,
    title: `Security 101 - Essehemy`,
    repo: `https://github.com/MohammedEssehemy/security-101`,
    github: `https://github.com/mohammedessehemy`,
    linkedIn: `https://linkedin.com/in/mohammed-essehemy`,
    stackOverflow: 'https://stackoverflow.com/users/7435863/mohammed-essehemy',
    email: `mailto:mohammedessehemy@gmail.com`
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        mdx: true,
        contentPath: 'src/slides',
        basePath: '/',
      },
    },
  ],
}

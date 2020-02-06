module.exports = {
  siteMetadata: {
    title: `feriae.`,
    description: `Descubra os próximos feriados na sua cidade e planeje-se melhor.`,
    author: `Felipe Alencar`,
  },
  pathPrefix: "/feriae",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Feriae`,
        short_name: `Feriae`,
        start_url: `/`,
        background_color: `#ed143d`,
        theme_color: `#ed143d`,
        display: `minimal-ui`,
        icon: `src/images/calendar-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-sass'
  ],
}

module.exports = {
  siteMetadata: {
    title: 'Merison.io',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-KVJDLX8",
  
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass'],
}

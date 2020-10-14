module.exports = {
  siteMetadata: {
    title: `Locataire`,
    description: `
    Locataire is a brand under which thousands of dedicated professionals in independent entities collaborate
    to provide products and services to private and public clients spanning multiple industries, including  
    real estate, agriculture & livestock production, poultry farming and egg production, audit & risk management. 
    
    These entities are members of Locataire Group, Limited Liability Company (LLC), an American multinational 
    conglomerate holding company headquartered in New York, United States. 
    `,
    author: `@GedeonNzemba`,
  },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/wowslider.js', // Change to the script filename
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

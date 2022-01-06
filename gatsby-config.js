/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const { MENU_DATA } = require("./src/constants");

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "sitename.dev",
    description: "Portfolio for Pavel Ray, Front end developer",
    email: "pavelray@gmail.com",
    menu: MENU_DATA,
    author: "Pavel Ray",
  },
  plugins: [
    "@chakra-ui/gatsby-plugin",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/data/blogs/`,
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/data/`,
      },
    }
  ],
}

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "My Recipes",
    description: "Nice and clean family recipes site",
    author: "@carla",
    person: { name: "carla", age: "32" },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "carla", age: 32 },
      { name: "rodolfo", age: 40 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}

module.exports = {
  siteMetadata: {
    campus: `singleton`,
    description: `holla`,
    author: `@ACC-Ricky`,
    siteUrl: `https://www.acc.edu.au/singleton`,
    facebookUrl: 'https://www.facebook.com/ACCSingleton/',
    youtubeUrl: 'https://www.youtube.com/user/WatchACCSING',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `default-starter`,
        short_name: `default`,
        start_url: `/default/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/content/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://www.acc.edu.au/blog/rss.xml`,
        name: `ACCBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://www.acc.edu.au/podcast/rss.xml`,
        name: `ACCPodcast`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            item: ['itunes:duration']
          }
        }
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

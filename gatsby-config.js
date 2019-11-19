module.exports = {
  siteMetadata: {
    title: `Dave Santos`,
    description: `Graphic Designer based in Los Angeles`,
    author: `@davesantos`,
    url: `https://davesantos.com`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: `${__dirname}/src`,
        components: `${__dirname}/src/components`,
        utils: `${__dirname}/src/utils`
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'qgh3pst'
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/posts`,
				name: 'posts',
			},
		},
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
  		resolve: `gatsby-transformer-remark`,
  		options: {
  			plugins: [
  				{
  					resolve: `gatsby-remark-images`,
  					options: {
  						backgroundColor: 'transparent',
  						maxWidth: 1080,
  						linkImagesToOriginal: false,
  					},
  				},
  				{
  					resolve: `gatsby-remark-prismjs`,
  					options: {
  						aliases: { js: 'javascript', html: 'markup' },
  						noInlineHighlight: true,
  					},
  				},
  				`gatsby-remark-smartypants`
  			],
  		},
  	},
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: '',
			},
		},
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

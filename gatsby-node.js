/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 const path = require(`path`)

 exports.createPages = async ({ actions, graphql, reporter }) => {
   const { createPage } = actions

   const postPage = path.resolve(`src/templates/post.js`)

   const markdownQueryResult = await graphql(`
     {
       allMarkdownRemark(
         sort: { order: DESC, fields: [frontmatter___date] }
         limit: 1000
       ) {
         edges {
           node {
             frontmatter {
               path
             }
           }
         }
       }
     }
   `)

   // Handle errors
   if (markdownQueryResult.errors) {
     reporter.panicOnBuild(`Error while running GraphQL query.`)
     return
   }

   markdownQueryResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
     createPage({
       path: node.frontmatter.path,
       component: postPage,
       context: {}, // additional data can be passed via context
     })
   })
 }

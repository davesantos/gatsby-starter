/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 const path = require(`path`)
 const _ = require("lodash")
 const { createFilePath } = require(`gatsby-source-filesystem`)

 exports.onCreateNode = ({ node, getNode, actions }) => {
   const { createNodeField } = actions
   if (node.internal.type === `MarkdownRemark`) {
     const slug = createFilePath({ node, getNode, basePath: `pages` })
     createNodeField({
       node,
       name: `slug`,
       value: slug,
     })
   }
 }

 exports.createPages = async ({ actions, graphql, reporter }) => {
   const { createPage } = actions

   const postPage = path.resolve(`src/templates/post.js`)
   const tagPage = path.resolve(`src/templates/tags.js`)
   const markdownQueryResult = await graphql(`
     {
       allMarkdownRemark(
         sort: { order: DESC, fields: [frontmatter___date] }
         limit: 1000
       ) {
         edges {
           node {
             fields {
               slug
             }
             frontmatter {
               path
               tags
             }
           }
         }
       }
       tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
     }
   `)

   // Handle errors
   if (markdownQueryResult.errors) {
     reporter.panicOnBuild(`Error while running GraphQL query.`)
     return
   }

   // Create post detail pages
   markdownQueryResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
     createPage({
       path: node.frontmatter.path,
       component: postPage,
       context: {}, // additional data can be passed via context
     })
   })

   // Make tag pages
   const tags = markdownQueryResult.data.tagsGroup.group
   tags.forEach(tag => {
     createPage({
       path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
       component: tagTemplate,
       context: {
         tag: tag.fieldValue,
       },
     })
   })

 }

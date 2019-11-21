import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import {
  Layout,
  Project,
  QueryImage,
  Item,
  SEO,
  PostLink,
} from "src/components"


const Cover = styled.section`
  padding: 5em
`

const Desc = styled.p`
  color: #bbb;
`

const IndexPage = ({

    data: {
      allMarkdownRemark: { edges },
    },

}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
  <Layout>
    <SEO title="Home" />


    <Cover>I am a Los Angeles based designer specializing in graphic design, illustration, brand identity, web design and development.</Cover>

    {Posts}
    <Project tag="print">
      <Item position="1 /span 3">
        <QueryImage name="iam_1" />
      </Item>

      <Item position="span 3">
        <QueryImage name="iam_2" />
      </Item>

      <Item>
        <Desc>Album artwork for Tomorrow's Tulips</Desc>
        <a href="/experimental-jelly">More</a>
      </Item>
    </Project>

  </Layout>

)}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

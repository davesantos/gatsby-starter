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

    {Posts}

    <Cover>I am a Los Angeles based designer specializing in graphic design, illustration, brand identity, web design and development.</Cover>

    <Project tag="print">
      <Item position="1 /span 3">
        <QueryImage name="we_render_1" />
      </Item>

      <Item position="span 3">
        <QueryImage name="we_render_1" />
      </Item>

      <Item>
        <Desc>Album artwork for Tomorrow's Tulips</Desc>
        <a href="/experimental-jelly">More</a>
      </Item>
    </Project>

    <Project tag="website">
      <Item>
      <QueryImage name="web_int_1" />
      </Item>

      <Item>
        <Desc>Website for Dominic Santos. Designed with a mobile-centric experience for Instagram majority traffic.</Desc>
      </Item>
    </Project>

    <Project tag="website">
      <Item><Desc>Website for Diagonal Press built on the Shopify platform.</Desc></Item>
    </Project>

    <Project tag="website">
      <Item><QueryImage name="web_int_1" /></Item>
      <Item><p>UI refresh for Intero's stationery shop</p></Item>
    </Project>


    <Project tag="website">
      <Item><QueryImage name="web_dom_1" /></Item>
      <Item>
        Website for Dominic Santos. Designed with a mobile-centric experience for Instagram majority traffic.
      </Item>
    </Project>

    <Project>
      <Item><QueryImage name="we_render_1" /></Item>
      <Item><Desc>William's Electric Stationary</Desc></Item>
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

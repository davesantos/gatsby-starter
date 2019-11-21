import React from "react"
import { graphql } from "gatsby"
import { Layout, SEO } from "components"
import styled from "styled-components"

const Section = styled.section`

  padding-top: 3em
  padding-bottom: 3em

`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  let headerTitle
  let role

  if (frontmatter.role) {
    role = ( <p>Role: {frontmatter.role} </p> )
  }

  if (frontmatter.subtitle == null) {
    headerTitle = (
      <h1>{frontmatter.title}</h1>
    )
  } else {
    headerTitle = (
      <hgroup>
        <h1>{frontmatter.title}</h1>
        <h3>{frontmatter.subtitle}</h3>
      </hgroup>
    )
  }


  return (
    <Layout>

      <SEO title={frontmatter.title}   />

      <Section>

      {headerTitle}
      {role}

      </Section>

      <article>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>

    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        role
        category
        subtitle
      }
    }
  }
`

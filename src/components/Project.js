import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Section } from "src/components"

const Project = () => {

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 1320) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (

  <Section>
    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  </Section>

  )

}

export default Project

import React from "react"

import { Layout, SEO, Project, Section, Image } from "src/components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section background="#ff0000">
      <h1>This is section</h1>
    </Section>
    <Project />
    <Image />
  </Layout>
)

export default IndexPage

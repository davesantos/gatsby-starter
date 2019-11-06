import React from "react"

import {
  Layout,
  QueryImage,
  Section,
  SEO,
} from "src/components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section>

    <QueryImage name="refract" width={300} />

    </Section>
    </Layout>
)

export default IndexPage

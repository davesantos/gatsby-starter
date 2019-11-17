import React from "react"
import styled from "styled-components"

import {
  Layout,
  Project,
  QueryImage,
  SEO,
  Grid,
} from "src/components"


const OneCol = styled.div`

  grid-column: span 3;

`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Grid>
    <OneCol>
    <QueryImage name="we_render_1" />
    </OneCol>
    <OneCol>
    <QueryImage name="we_render_1" />
    </OneCol>
    </Grid>

    <p>Album artwork for Tomorrow's Tulips pressed and printed on Burger Records label. I designed the entire LP sleeve and inside slips with accompanying photography and painting by Alex Knost.</p>

    <Project tag="website">
    Website for Dominic Santos. Designed with a mobile-centric experience for Instagram majority traffic.
    </Project>

    <Project tag="website">
    Website for Diagonal Press built on the Shopify platform.
    </Project>
    <Project tag="website">
    <QueryImage name="web_int_1" />

    <p>UI refresh for Intero's stationery shop</p>
    </Project>


    <Project tag="website">
    <QueryImage name="web_dom_1" />

    Website for Dominic Santos. Designed with a mobile-centric experience for Instagram majority traffic.
    </Project>

    <Project>
      <QueryImage name="we_render_1" />
      <p>William's Electric Stationary</p>
    </Project>


    </Layout>
)

export default IndexPage

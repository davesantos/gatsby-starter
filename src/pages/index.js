import React from "react"
import styled from "styled-components"

import {
  Layout,
  Project,
  QueryImage,
  SEO,
  Grid,
} from "src/components"


const Item = styled.div`

  grid-column: 1 / -1;

  @media only screen and (min-width: 768px) {
    grid-column: ${props => props.position || "2 / span 4" };
  }
  @media only screen and (min-width: 1030px)
  @media only screen and (min-width: 1240px)
`

const Cover = styled.section`
  padding: 5em
`

const Desc = styled.p`
  color: #bbb;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Cover>Hello bio.</Cover>

    <Project tag="print">
      <Grid>

        <Item position="1 /span 3">
          <QueryImage name="we_render_1" />
        </Item>

        <Item position="span 3">
          <QueryImage name="we_render_1" />
        </Item>

        <Item>
          <Desc>Album artwork for Tomorrow's Tulips pressed and printed on Burger Records label. I designed the entire LP sleeve and inside slips with accompanying photography and painting by Alex Knost.</Desc>
        </Item>

      </Grid>
      
    </Project>

    <Project tag="website">

    <Grid>
    <Item>
    <QueryImage name="web_int_1" />
    </Item>
    Website for Dominic Santos. Designed with a mobile-centric experience for Instagram majority traffic.
    </Grid>
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

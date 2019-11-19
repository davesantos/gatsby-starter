import React from "react"
import styled from "styled-components"

import {
  Layout,
  Project,
  QueryImage,
  Item,
  SEO,
} from "src/components"

const Cover = styled.section`
  padding: 5em
`

const Desc = styled.p`
  color: #bbb;
`

const IndexPage = ({data}) => {

  return (
  <Layout>
    <SEO title="Home" />

    <Cover>Hello bio.</Cover>

    <Project tag="print">
      <Item position="1 /span 3">
        <QueryImage name="we_render_1" />
      </Item>

      <Item position="span 3">
        <QueryImage name="we_render_1" />
      </Item>

      <Item>
        <Desc>Album artwork for Tomorrow's Tulips pressed and printed on Burger Records label. I designed the entire LP sleeve and inside slips with accompanying photography and painting by Alex Knost.</Desc>
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

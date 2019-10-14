import React from "react"
import styled from "styled-components"

import { Layout, SEO } from "src/components"


const Test = styled.h1`

color: red;

`

const SecondPage = () => (
  <Layout>
    <SEO title="About" />

    <Test>Hi from the second page</Test>
  </Layout>
)

export default SecondPage

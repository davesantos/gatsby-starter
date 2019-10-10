import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Test = styled.h1`

color: red;

`

const SecondPage = () => (
  <Layout>
    <SEO title="About" />

    <Test>Hi from the second page</Test>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

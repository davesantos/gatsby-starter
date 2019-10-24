import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Href = styled(Link)`
  padding-right: 1em;
  :last-child {
    padding: 0
  }
`
const TheNav = styled.nav`
  display: flex;
`

const Nav = () => (
  <TheNav>
    <Href to="/">Home</Href>
    <Href to="about">About</Href>
  </TheNav>
)

export default Nav

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
const aStyle = {

  color: "green"

}

const Nav = () => (
  <TheNav>
    <Href to="/" activeStyle={aStyle}>Home</Href>
    <Href to="/about" activeStyle={aStyle}>About</Href>
    <Href to="/blog" activeStyle={aStyle}>Blog</Href>
  </TheNav>
)

export default Nav

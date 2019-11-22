import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Grid from "../Grid"
import Nav from "./Nav"

const TheHeader = styled.header`
  padding-top: 1.5em;
  padding-bottom: 1.5em;
`
const TheStyle = {
  fontSize: "inherit",
  fontWeight: "normal",
  margin: 0
}

const Header = ({ siteTitle }) => (
  <TheHeader>
    <Grid>
      <h1 style={TheStyle}><Link to="/" >{siteTitle}</Link></h1>
      <Nav />
    </Grid>
  </TheHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Nav from "./Nav"


const TheHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`

const TheStyle = {

  fontSize: "inherit",
  fontWeight: "normal",
  margin: 0

}

const Header = ({ siteTitle }) => (

  <TheHeader>
      <h1 style={TheStyle}>
        <Link to="/" >
          {siteTitle}
        </Link>
      </h1>
      <Nav />
  </TheHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

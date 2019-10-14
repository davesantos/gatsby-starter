import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Nav from "./Nav"

import styled from "styled-components"

const TheHeader = styled.header`

  display: flex

`

const Header = ({ siteTitle }) => (

  <TheHeader>
      <h1>
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

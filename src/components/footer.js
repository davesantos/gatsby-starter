import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const TheFooter = styled.footer`
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`

const Footer = ({ siteTitle }) => (

  <TheFooter>
    All images and works © {new Date().getFullYear()} {siteTitle}
  </TheFooter>

)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

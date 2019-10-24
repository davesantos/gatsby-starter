import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const TheFooter = styled.footer`
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`

const year = new Date().getFullYear()

const Footer = ({ siteTitle }) => (

  <TheFooter>
    All images and works © {year} {siteTitle}
  </TheFooter>

)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

export default Footer

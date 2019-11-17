import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const TheFooter = styled.footer`
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  opacity: .25;
`

const year = new Date().getFullYear()

const Footer = ({ siteTitle }) => (

  <TheFooter>
    <small>All images and works © {year} {siteTitle}</small>
  </TheFooter>

)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

export default Footer

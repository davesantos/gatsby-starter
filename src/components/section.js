import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const TheSection = styled.section`
  width: 100%;
`

const Section = ({children}) => (
  <TheSection>
    {children}
  </TheSection>
)

Section.propTypes = {
  siteTitle: PropTypes.string,
}

Section.defaultProps = {
  siteTitle: ``,
}

export default Section

import React from "react"
import styled from "styled-components"

const TheGrid = styled.div`
  display: grid;
  max-width: 1320px;
  margin: 0 auto;
  grid-template-columns: [gutter] repeat(6,[col] 4.25fr [gutter]);
  grid-row-gap: 1em;
  grid-column-gap: 1em;

  @media only screen and (min-width: 768px) {
    grid-row-gap: 1.5em;
  }


`

const Grid = ({children}) => (
  <TheGrid>
    {children}
  </TheGrid>
)

export default Grid

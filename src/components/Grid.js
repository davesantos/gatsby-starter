import React from "react"
import styled from "styled-components"

const TheGrid = styled.div`
  display: grid;
  grid-template-columns: [gutter] repeat(6,[col] 4.25fr [gutter]);
  grid-row-gap: 1.5em;
  grid-column-gap: 1em;
`

const Grid = ({children}) => (
  <TheGrid>
    {children}
  </TheGrid>
)

export default Grid

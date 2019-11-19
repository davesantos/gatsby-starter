import styled from "styled-components"

const Item = styled.div`

  grid-column: 1 / -1;

  @media only screen and (min-width: 768px) {
    grid-column: ${props => props.position || "2 / span 4" };
  }

`
export default Item

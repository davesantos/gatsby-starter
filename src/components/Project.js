import React from "react"
import styled from "styled-components"
import { Grid } from "components"


const ProjectWrap = styled.section`

  margin-bottom: 3em;
`

const Project = ({children}) => {

  return (

  <ProjectWrap>
    <Grid>
      {children}
    </Grid>
  </ProjectWrap>

  )

}

export default Project

import React from "react"
import styled from "styled-components"


const ProjectWrap = styled.section`

  margin-bottom: 3em;
`

const Project = ({children}) => {

  return (

  <ProjectWrap>
    {children}
  </ProjectWrap>

  )

}

export default Project
